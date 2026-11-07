/* Consentimiento de cookies y envío de páginas vistas a Google Tag Manager.
   Sin elección guardada, el banner aparece. La analítica de Google solo se
   activa con «Aceptar»; Cloudflare Web Analytics sigue siendo sin cookies. */
(function () {
  'use strict';

  var KEY = 'norsk-kjekt-consent';
  var GA_ID = 'G-W6XYF2YDXV';
  var banner = document.getElementById('cookie-banner');
  var accept = document.getElementById('consent-accept');
  var reject = document.getElementById('consent-reject');
  var lastTracked = '';
  var gaLoaded = false;

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    gtag('js', new Date());
    gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  function updateConsent(granted) {
    gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied'
    });
  }

  function pagePath() {
    return location.pathname + location.search + location.hash;
  }

  function trackPageView() {
    if (stored() !== 'granted') return;
    loadGA();
    var path = pagePath();
    if (path === lastTracked) return;
    lastTracked = path;
    gtag('event', 'page_view', {
      page_path: path,
      page_location: location.href,
      page_title: document.title
    });
  }

  function show() {
    if (banner) banner.hidden = false;
  }

  function hide() {
    if (banner) banner.hidden = true;
  }

  function choose(granted) {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch (e) { /* modo privado */ }
    updateConsent(granted);
    hide();
    if (granted) {
      loadGA();
      lastTracked = '';
      trackPageView();
    }
  }

  if (accept) accept.addEventListener('click', function () { choose(true); });
  if (reject) reject.addEventListener('click', function () { choose(false); });

  document.addEventListener('click', function (e) {
    var open = e.target.closest('[data-consent-open]');
    if (!open) return;
    e.preventDefault();
    show();
  });

  window.NKConsent = {
    open: show,
    close: hide,
    value: stored
  };

  if (!stored()) show();
  else if (stored() === 'granted') trackPageView();
})();
