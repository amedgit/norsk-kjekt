# Publicar Norsk Kjekt

El sitio es 100 % estático: no hay build, ni backend, ni variables de entorno.
Eso significa que cualquier hosting de ficheros sirve. Estas son las dos rutas
más rápidas.

---

## Opción A — Netlify Drop (2 minutos, sin CLI)

Ya tienes el paquete hecho:

```
~/Descargas/norsk-kjekt.zip
```

1. Abre <https://app.netlify.com/drop>.
2. Arrastra el `.zip` (o la carpeta `~/norsk`) a la zona de drop.
3. En unos segundos tendrás una URL tipo `https://nombre-random.netlify.app`.
4. **Importante:** crea una cuenta gratuita (o inicia sesión) para que el sitio
   no caduque. Después, en *Site settings → Site details* puedes cambiar el
   nombre a algo como `norsk-kjekt.netlify.app`.

Ventajas: HTTPS y CDN gratis, despliegue atómico, formularios y funciones
disponibles si algún día quieres progreso en la nube.

> Para volver a publicar tras un cambio: regenera el zip (ver abajo) y
> arrástralo otra vez, o conecta el repo de GitHub y despliega en cada push.

---

## Opción B — GitHub Pages (repo + workflow incluido)

El workflow ya está en `.github/workflows/pages.yml` y solo publica
`index.html` + `assets/`, no el README ni el propio workflow.

```bash
cd ~/norsk

# 1. Identidad (solo la primera vez; pon tu nombre y correo de GitHub)
git config user.name  "Tu Nombre"
git config user.email "tu@correo.com"

# 2. Repo local y primer commit
git init -b main
git add .
git commit -m "Norsk Kjekt: portal de noruego A1-B2"

# 3a. Con GitHub CLI
gh repo create norsk-kjekt --public --source=. --push

# 3b. Sin GitHub CLI: crea el repo vacío en github.com y luego
git remote add origin git@github.com:TU_USUARIO/norsk-kjekt.git
git push -u origin main
```

Después, en el repo: **Settings → Pages → Build and deployment → Source:
GitHub Actions**. El workflow se dispara solo y en ~1 minuto tendrás:

```
https://TU_USUARIO.github.io/norsk-kjekt/
```

Cada `git push` a `main` vuelve a desplegar. Si el repo es privado, Pages
necesita plan de pago; con repo público es gratis.

---

## Opción C — servidor local

```bash
cd ~/norsk && ./serve.sh        # http://localhost:8080
```

También funciona abriendo `index.html` con doble clic (`file://`), pero el
servidor local es más fiable para `localStorage` y para probar en el móvil
dentro de la misma red (`http://TU_IP:8080`).

---

## Regenerar el zip para Netlify

```bash
cd ~/norsk
rm -f ~/Descargas/norsk-kjekt.zip
zip -r ~/Descargas/norsk-kjekt.zip index.html assets robots.txt .nojekyll
```

---

## Checklist después de publicar

- [ ] Abrir la URL en el móvil y probar una lección completa (audio incluido).
- [ ] Cambiar `og:image` y `twitter:image` a **URL absoluta** cuando tengas
      dominio: `https://tu-dominio/assets/img/og.png`. Las redes sociales no
      resuelven rutas relativas y la vista previa saldrá sin imagen.
- [ ] Comprobar que el progreso persiste al recargar (es `localStorage`, va por
      origen: en `localhost` y en el dominio son datos distintos).
- [ ] Opcional: dominio propio (Netlify: *Domain settings*; GitHub Pages:
      fichero `CNAME`).
- [ ] Opcional: añadir analítica ligera y sin cookies si quieres saber qué
      lecciones se terminan.

## Limitaciones conocidas del hosting estático

- El progreso vive en el navegador de cada persona; no se sincroniza.
- No hay cuentas ni ranking. Si algún día los quieres, toca añadir backend
  (Supabase, PocketBase o un pequeño API).
- El audio depende de las voces instaladas en el dispositivo del visitante
  (`speechSynthesis`) **solo como respaldo**: las 372 frases del curso son MP3
  pregrabados con Piper y se sirven como ficheros estáticos.
