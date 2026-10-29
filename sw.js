/* Norsk Kjekt — service worker (offline)
   Estrategia:
   - precache del núcleo (HTML, CSS, JS, iconos e ilustraciones);
   - audio MP3: cache-first, se descarga una vez y funciona sin conexión;
   - navegación: red primero, con la app cacheada como respaldo offline.
   Sube CACHE_VERSION en cada despliegue para renovar los caches. */

const CACHE_VERSION = 'v2';
const CORE = `norsk-kjekt-core-${CACHE_VERSION}`;
const RUNTIME = `norsk-kjekt-runtime-${CACHE_VERSION}`;

const PRECACHE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'assets/css/style.css',
  'assets/js/app.js',
  'assets/js/data.js',
  'assets/js/lang.js',
  'assets/js/content-en.js',
  'assets/js/content-fa.js',
  'assets/js/tts.js',
  'assets/js/audio-manifest.js',
  'assets/img/og.png',
  'assets/img/icons/icon-192.png',
  'assets/img/icons/icon-512.png',
  'assets/img/icons/icon-maskable-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((k) => k !== CORE && k !== RUNTIME)
          .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  /* Navegación: red primero, respaldo cacheado (SPA, index.html sirve todo). */
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CORE).then((c) => c.put('index.html', copy));
          return res;
        })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  /* Audio: cache-first (los nombres llevan hash, son inmutables). */
  if (url.pathname.includes('/assets/audio/')) {
    event.respondWith(
      caches.match(request).then((hit) => hit || fetch(request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put(request, copy));
        }
        return res;
      }))
    );
    return;
  }

  /* Resto same-origin: cache con actualización en segundo plano. */
  event.respondWith(
    caches.match(request).then((hit) => {
      const fetching = fetch(request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put(request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || fetching;
    })
  );
});
