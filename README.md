# Norsk Kjekt 🇳🇴

**Publicado:** <https://amedgit.github.io/norsk-kjekt/>

Portal para practicar noruego **bokmål** (A1–C2): textos cortos, ejercicios
interactivos, seis conversaciones cotidianas con audio, cuatro grupos de WhatsApp
noruego, seis packs de humor,
tablas de palabras y verbos, una sección de noruego coloquial y **cuatro
simulacros de examen** estilo Norskprøven. HTML +
CSS + JS puro, sin build, sin dependencias y sin backend.
La interfaz y las explicaciones se pueden leer en **español, inglés o persa**
(فارسی, de derecha a izquierda); el noruego del curso no se traduce.

## Cómo abrirlo

**Opción 1 — doble clic**

Abre `index.html` en el navegador. Funciona directamente (`file://`), el progreso
se guarda en `localStorage`.

**Opción 2 — servidor local (recomendado)**

```bash
cd ~/norsk
./serve.sh          # http://localhost:8080
./serve.sh 3000     # otro puerto
```

## Instalar como app (PWA)

La web se instala como app desde Chrome: icono propio, pantalla completa y uso
sin conexión. No pasa por tiendas ni por APK.

1. Abre <https://amedgit.github.io/norsk-kjekt/> en Chrome (Android).
2. Toca el botón **«Instalar app»** del banner, o el menú ⋮ → *Añadir a pantalla
   de inicio*.
3. Queda en el cajón de aplicaciones y el service worker cachea el núcleo y los
   audios que ya has oído.

La página `#/app` explica los pasos y el icono **📲 App** de la cabecera lleva
directamente allí.

### APK (en pausa)

El APK se retiró de la web porque algunos móviles bloqueaban la instalación. Las
fuentes siguen en `tools/android/` y `tools/build-apk.sh` para retomarlo más
adelante; el keystore se guarda fuera del repositorio. **No hay enlace público
mientras esté en pausa.**

### Caché tras un despliegue

Al cambiar JS o CSS, sube la versión de `index.html` (`?v=AAAAMMDD`) y
`CACHE_VERSION` en `sw.js`. Así los navegadores con el service worker antiguo
descargan el código nuevo en la siguiente visita, sin quedarse con la copia
cacheada.

## Práctica, progreso y modo oscuro

- **Test de nivel** (`#/nivel`): 18 preguntas de A1 a C2 y una recomendación de
  por dónde empezar.
- **Entrenador** (`#/trener`): rondas de 8 preguntas sobre números, la hora
  (`halv tre`, `kvart på`…) y preposiciones (`i`, `på`, `til`…).
- **Repaso espaciado** (`#/repaso`): los fallos vuelven a los 1, 3, 7, 15 y 30
  días; si aciertas, se alejan; si fallas, vuelven al día siguiente.
- **Mi progreso** (`#/progreso`): racha, XP, mapa de calor de 12 semanas, ocho
  logros y copia de seguridad. También se llega tocando la racha o el XP de la
  cabecera.
- **Modo oscuro** con el botón 🌙/☀️; sigue el tema del sistema y recuerda tu
  elección.
- **Teclado æ ø å** flotante al escribir en cualquier ejercicio.
- **Exportar/importar**: descarga un JSON con todo el estado y vuelve a cargarlo
  en otro móvil o tras borrar el navegador.

## Qué incluye

| Parte | Contenido |
|---|---|
| Lecciones | 15 lecciones A1–C2: base A1–A2, vida diaria B1, noticias/medio ambiente/derechos laborales en B2, debate y escritura académica en C1, ironía y literatura en C2 |
| Práctica | 239 ejercicios en 10 formatos, test de nivel de 18 preguntas y entrenador de números, hora y preposiciones |
| Samtaler | 6 conversaciones cotidianas (A2–B1: portal, cafetería, tienda, trabajo, médico y teléfono) con 52 réplicas, audio por línea, traducciones plegables, vocabulario, frases y 30 ejercicios |
| Meldinger | 4 grupos de WhatsApp (A2–B1: vecinos, familia, amigos y trabajo) con 48 mensajes en formato chat, audio por mensaje, traducción, glosario de abreviaturas y truco cultural |
| Kroppen | Mapa corporal interactivo (34 partes), zoom de mano y pie, constructor de síntomas, 10 frases de consulta, 3 escenarios médicos y 8 ejercicios (A1–B1) |
| Tull & tøys | 6 packs con 84 ejercicios de humor (absurdo, supervivencia, oficina, dictados, modismos y verbos) y una mezcla aleatoria de 10 |
| Tablas | 94 palabras con audio, búsqueda, filtros por nivel/tema, ordenación y modo examen; 14 verbos en presente, pasado y perfecto |
| Coloquial | 30 expresiones con registro (neutro → vulgar), diálogo de ejemplo y truco |
| Simulacro | 4 exámenes completos (A1, A2, B1 y B2) estilo Norskprøven: lesing, lytting, skriving y muntlig, con cronómetro, informe por destreza y respuestas modelo |
| Idioma | selector **ES / EN / فا** en la cabecera: traduce interfaz, explicaciones y tablas; el bokmål se queda intacto y el progreso se conserva. En persa la página cambia a dirección RTL |
| Progreso | racha, XP, mapa de calor de 12 semanas, 8 logros, repaso espaciado (1/3/7/15/30 días) y exportación/importación del progreso en JSON |
| Extras | modo oscuro, teclado noruego æ ø å en los ejercicios de escritura y PWA offline |
| Velocidad | selector 0,7×–1,3× en la cabecera; se aplica al audio y se recuerda |
| Audio | 1249 frases pregrabadas con voz neuronal bokmål (`nb_NO`, Piper) en MP3; si falta una frase, cae a la voz del navegador |
| App | PWA instalable (offline) con icono propio, pantalla completa y funcionamiento sin conexión; el APK está retirado temporalmente |

## Interfaz en español, inglés o persa

El selector **ES / EN / فا** de la cabecera cambia todo lo que no es noruego:

- textos de la interfaz, botones, filtros, avisos y resultados;
- explicaciones, objetivos, trucos y notas culturales;
- traducciones de textos, vocabulario, frases y diálogos;
- prompts, opciones, pistas y explicaciones de los 239 ejercicios;
- instrucciones, explicaciones y rúbricas de autoevaluación del simulacro;
- las tablas de palabras y verbos (la columna de significados).

Lo que se aprende —títulos de lección, bokmål, opciones noruegas de los
ejercicios, audio— **no se traduce nunca**. La elección se guarda en
`localStorage` (`norsk-kjekt-lang`, valores `es` / `en` / `fa`) y el progreso
(`norsk-kjekt-v1`) se mantiene al cambiar de idioma, porque el cambio solo
recarga la página.

El español es el idioma base y vive en `data.js`; los demás idiomas están en
mapas `"texto en español": "traducción"`: `content-en.js` (inglés) y
`content-fa.js` (persa). Al cargar en EN o FA, `lang.js` sustituye los campos
españoles por su traducción y deja intactas las cadenas que detecta como
noruego. En FA la página pasa a `dir="rtl"` (derecha→izquierda), con fuente
persa; el bokmål de las frases se sigue leyendo de izquierda a derecha.

### Añadir otro idioma

1. Crea `assets/js/content-xx.js` con `window.XX_STRINGS` (mapa español → idioma).
2. Carga el script en `index.html`, añade el idioma a `LANGS` y a la tabla `UI`
   de `lang.js` (con la dirección `ltr`/`rtl` y el bloque RTL del CSS si
   aplica), y añade el botón correspondiente.
3. Registra el mapa en el array `LANGS` de `tools/check-i18n.mjs`.

### Añadir o cambiar traducciones

1. Edita el contenido en español en `assets/js/data.js`.
2. Añade la traducción en cada mapa (`content-en.js`, `content-fa.js`) usando
   **exactamente** el mismo texto español como clave (incluidos acentos, «» y
   puntuación).
3. Comprueba la cobertura:

```bash
node tools/check-i18n.mjs
```

El script detecta cadenas nuevas sin traducir, traducciones vacías y entradas
que ya no se usan. Si falta algo, sale con error y muestra la lista. Las
opciones que son noruego (p. ej. `kaffe`, `flink`, `Jeg heter Alex`) no necesitan
traducción: la app las protege automáticamente.

## Estructura

```
norsk/
├── index.html
├── serve.sh
├── robots.txt
├── DEPLOY.md            ← cómo publicarlo (Netlify / GitHub Pages)
├── .github/workflows/pages.yml
├── tools/
│   ├── generate-audio.mjs       ← sintetiza los MP3 y el manifiesto
│   ├── generate-lesson-art.mjs  ← dibuja las 15 ilustraciones SVG de las lecciones
│   ├── generate-dialogue-art.mjs ← dibuja las 6 ilustraciones de Samtaler
│   └── check-i18n.mjs           ← comprueba que todo el contenido tiene traducción EN y FA
└── assets/
    ├── css/style.css
    ├── img/og.png       ← imagen para compartir en redes
    ├── img/lessons/*.svg ← una ilustración original por lección
    ├── img/dialogues/*.svg ← una ilustración por conversación
    ├── audio/*.mp3      ← 1249 audios (≈15,9 MB), generados
    └── js/
        ├── data.js          ← TODO el contenido del curso, Samtaler y los 4 simulacros
        ├── content-en.js    ← traducciones ES → EN del contenido
        ├── content-fa.js    ← traducciones ES → فارسی del contenido
        ├── lang.js          ← idioma, textos de interfaz y localización del curso
        ├── audio-manifest.js ← texto → MP3 (generado, no editar)
        ├── tts.js           ← reproduce MP3; fallback a speechSynthesis
        └── app.js           ← router, progreso, ejercicios y motor del simulacro
```

Publicación: ver **[DEPLOY.md](DEPLOY.md)**. Hay un zip listo para Netlify Drop
y un workflow de GitHub Pages que se dispara con cada push a `main`.

## Ilustraciones de las lecciones

Cada lección tiene una escena SVG propia, dibujada a mano en el generador y
servida en local (sin imágenes externas ni build): aparece como miniatura en
la portada y como cabecera en la página de la lección. Para regenerarlas tras
editar `tools/generate-lesson-art.mjs`:

```bash
node tools/generate-lesson-art.mjs
```

Los SVG se escriben en `assets/img/lessons/<id>.svg`. En `data.js`, cada
lección declara `image` y `imageAlt`; si faltan, la app deriva la ruta del `id`.

## Añadir una lección

Todo el contenido vive en `assets/js/data.js`. Copia un objeto del array
`lessons`, cámbialo y súbelo al final (el `num` debe ser el siguiente):

```js
{
  id: 'ny',              // único, sin espacios
  num: 16,
  emoji: '🍕',
  level: 'A2',           // A1 | A2 | B1 | B2 | C1 | C2
  title: 'På pizzeria',
  subtitle: 'Pedir, compartir y pagar',
  goals: ['...'],
  text: [{ no: 'Frase en noruego.', es: 'Traducción.' }],
  vocab: [{ no: 'pizza', es: 'pizza', note: 'opcional' }],
  phrases: [{ no: 'Kan jeg få ...?', es: '¿Me das...?' }],
  grammar: {
    title: 'Una regla, en una línea',
    points: ['Explicación breve.', 'Otra pista útil.'],
    examples: [{ no: 'Eksempel på norsk.', es: 'Ejemplo traducido.' }]
  },
  tip: 'Un consejo cultural.',
  exercises: [/* ver abajo */]
}
```

En B1 y B2 las traducciones del texto salen plegadas por defecto; en C1 y C2
se muestran desplegadas, igual que en A1 y A2. Los ejemplos de gramática y el
vocabulario siguen siempre visibles. Añade también las traducciones inglesa y
persa en `content-en.js` y `content-fa.js`, y ejecuta
`node tools/check-i18n.mjs` antes de publicar.

Tipos de ejercicio:

```js
// opción múltiple (answer = índice correcto)
{ type: 'mcq', prompt: '¿Qué significa «koselig»?',
  options: ['feo', 'acogedor', 'caro', 'rápido'], answer: 1, explain: '...' }

// un hueco (answers admite varias variantes correctas)
{ type: 'gap', prompt: 'Completa:', sentence: 'Jeg ___ fra Spania.',
  answers: ['er'], bank: ['er', 'bor', 'heter'], es: 'Soy de España.', explain: '...' }

// ordenar palabras (la puntuación va pegada a la última palabra)
{ type: 'order', prompt: 'Ordena:', words: ['Hva', 'heter', 'du?'],
  es: '¿Cómo te llamas?', explain: '...' }

// varios huecos en un texto; answers va en orden
{ type: 'cloze', prompt: 'Completa:', text: 'Jeg ___ og hun ___ i Oslo.',
  answers: ['bor', 'bor'], bank: ['bor', 'er', 'heter'], es: '...', explain: '...' }

// dictado: el audio es también la respuesta canónica
{ type: 'listen', prompt: 'Escucha y escribe:', audio: 'Jeg har to års erfaring.',
  hint: '6 palabras', es: '...', explain: '...' }

// reescribir una frase (answer o answers[])
{ type: 'transform', prompt: 'Reescribe en perfecto:', source: 'Jeg jobber.',
  answer: 'Jeg har jobbet.', hint: 'har + participio', es: '...', explain: '...' }

// emparejar dos columnas; sayB solo si la columna B es noruego
{ type: 'match', prompt: 'Empareja:', pairs: [{ a: 'lønn', b: 'salario' }],
  sayB: false, explain: '...' }

// ¿qué palabra no encaja? (answer = índice)
{ type: 'odd', prompt: '¿Qué no es una comida?',
  options: ['frokost', 'lunsj', 'middag', 'møte'], answer: 3, explain: '...' }

// encontrar el error: wrong = índice del token; correct = frase arreglada
{ type: 'fix', prompt: 'Toca la palabra equivocada:',
  sentence: 'Hun bor på Norge.', wrong: 2, correct: 'Hun bor i Norge.',
  es: 'Ella vive en Noruega.', explain: '...' }

// memoria: parejas ocultas (a suele ser noruego y b español)
{ type: 'memory', prompt: 'Memoria:', pairs: [{ a: 'å være', b: 'ser, estar' }],
  explain: '...' }
```

Para añadir expresiones coloquiales, edita el array `colloquial` con
`register` ∈ `neutro | informal | muy informal | fuerte | vulgar | oral`.

### Samtaler

La sección `#/samtaler` vive en el array `dialogues` de `data.js`. Cada escena
tiene `id`, `image`, `imageAlt`, `emoji`, `level`, `title`, `subtitle`, `intro`,
`lines` (`who`, `no`, `es`), `vocab` (`no`, `es`), `phrases` (`no`, `es`), `tip`
y `exercises` (los mismos tipos que las lecciones). La ruta de cada diálogo es
`#/samtale/<id>`.

- El botón **Mostrar traducciones** alterna todos los `es` de las réplicas.
- El progreso se guarda en `state.dialogues` con la mejor puntuación.
- Los fallos entran en el repaso con la firma `dlg#<id>#<índice>`.
- Al añadir o cambiar textos, ejecuta `tools/generate-audio.mjs` para generar
  los MP3 y el manifiesto, y `tools/check-i18n.mjs` para comprobar EN y FA.

### Meldinger (grupos de WhatsApp)

La sección `#/meldinger` vive en el array `chats` de `data.js`. Cada chat tiene
`id`, `emoji`, `level`, `title`, `subtitle`, `intro`, `day` (separador de día),
`people` (`id`, `name`, `color`), `messages` (`who`, `time`, `no`, `es`),
`glossary` (`no`, `es`) y `tip`. La ruta de cada grupo es `#/melding/<id>`.

- El mensaje con `who: 'me'` se dibuja a la derecha, como propio, con ✓✓.
- El botón **Mostrar traducciones** alterna todos los `es` del chat.
- Es una sección de solo lectura: sin ejercicios y sin progreso. Cada mensaje
  tiene audio; los que llevan abreviaturas usan el campo opcional `say` con la
  versión hablada («kl 10» → «klokka ti», «HBD» → «Gratulerer med dagen»).
- Al añadir contenido, ejecuta `tools/check-i18n.mjs` para completar EN y FA.

### Kroppen (el cuerpo y el dolor)

La sección `#/kroppen` vive en `body` dentro de `data.js`:

- `parts`: 34 partes con `no`, `def` (forma definida), `es` y `zone`.
- `sensations`, `intensities` y `durations`: piezas del constructor de frases.
- `phrases`: frases para la consulta; `scenarios`: tres diálogos médicos.
- `tip`: la regla «vondt i» + forma definida.
- `exercises`: los mismos tipos que las lecciones.

El mapa corporal es SVG inline: las zonas se marcan con `data-zone` y los
dedos de mano/pie con `data-part`. El constructor genera la frase en vivo y usa
el audio pregrabado para las partes, frases y ejemplos; las combinaciones nuevas
caen a la voz del dispositivo. Los ejercicios guardan `state.body` y entran en
el repaso con la firma `body#<índice>`.

### Tull & tøys

La sección `#/tull` se alimenta de tres bloques de `data.js`:

- `fun.packs`: packs con `id`, `emoji`, `level`, `title`, `subtitle`, `intro` y
  `exercises`. Acepta los mismos tipos que las lecciones, incluidos `odd`,
  `fix` y `memory`.
- `wordbank`: palabras de la tabla (`no`, `es`, `level`, `tag` y `note` opcional).
- `verbs`: verbos de la tabla (`inf`, `es`, `present`, `past`, `perfect`).

El generador de audio recorre automáticamente los packs, `wordbank` y `verbs`:
si añades texto nuevo, vuelve a ejecutarlo antes de publicar.

## Simulacro de examen (estilo Norskprøven)

La sección `#/eksamen` ofrece **un examen completo por nivel** (A1, A2, B1 y B2),
con las cuatro delprøver de la Norskprøven real. No es un examen oficial ni da
un aprobado/suspendido: al terminar obtienes un **nivel estimado por destreza**,
como en el `prøvebevis` de HK-dir.

| Parte | Qué se hace | Corrección |
|---|---|---|
| Leseprøve | 2 textos y 8 preguntas de opción múltiple | automática |
| Lytteprøve | 6 audios y una pregunta por audio | automática |
| Skriveprøve | 2 tareas con mínimo/máximo de palabras | autoevaluación con rúbrica |
| Muntlig prøve | 3 tareas con tiempo de preparación y de habla | autoevaluación con rúbrica |

Cada parte tiene su propio cronómetro; si se agota, pasa sola a la siguiente.
En lesing y lytting no hay feedback hasta el informe final. En escritura y oral
se muestran **respuestas modelo** (también en audio) y una lista de comprobación;
hay que marcar con sinceridad lo que se ha conseguido.

El nivel se calcula por destreza: **≥ 80 %** mantiene el nivel del examen,
**≥ 55 %** da el nivel anterior y por debajo se muestra «Por debajo de X».
El informe se guarda en `localStorage` (`norsk-kjekt-v1` → `exams[<nivel>]`) y
suma XP: 10 por acierto en lesing/lytting y 2 por punto marcado en la rúbrica.

### Estructura del contenido

Todo vive en `COURSE.exam` dentro de `assets/js/data.js`:

```js
exam: {
  intro, disclaimer, howto: [],
  levels: [{
    id: 'a1', level: 'A1', title, blurb,
    reading: { minutes, texts: [{ title, body: [], questions: [
      { q, options: [], answer: 0, explain }] }] },
    listening: { minutes, items: [
      { audio, q, options: [], answer: 0, explain }] },
    writing: { minutes, tasks: [
      { title, prompt, minWords, maxWords, checklist: [], model }] },
    speaking: { minutes, tasks: [
      { title, prompt, prepSeconds, speakSeconds, checklist: [], model }] }
  }]
}
```

Los textos, preguntas, opciones, audios y modelos están en bokmål y **no se
traducen**. Los campos `intro`, `disclaimer`, `howto`, `title`, `blurb`,
`explain` y `checklist` están en español y se traducen en `content-en.js` /
`content-fa.js` como el resto del contenido. Para añadir un nivel: copia un
objeto de `levels`, cámbialo, añade sus traducciones, ejecuta
`node tools/check-i18n.mjs` y regenera los audios.

## Regenerar los audios

Los MP3 se generan una sola vez y se sirven como ficheros estáticos, así que
suenan igual en cualquier dispositivo (no dependen de las voces del sistema).
Hacen falta `piper`, `ffmpeg` y el modelo de voz:

```bash
# 1. Piper + voz bokmål (una sola vez, fuera del repo)
curl -L -o piper.tar.gz https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_x86_64.tar.gz
tar -xzf piper.tar.gz
mkdir -p voices && cd voices
curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/no/no_NO/talesyntese/medium/no_NO-talesyntese-medium.onnx
curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/no/no_NO/talesyntese/medium/no_NO-talesyntese-medium.onnx.json
cd ..

# 2. Generar (solo sintetiza lo que falta; --force rehace todo)
PIPER_BIN="$PWD/piper/piper" PIPER_MODEL="$PWD/voices/no_NO-talesyntese-medium.onnx" \
  node ~/norsk/tools/generate-audio.mjs --force
```

El script recorre `data.js`, sintetiza cada frase nueva, la convierte a MP3
(48 kbps mono) y reescribe `assets/js/audio-manifest.js`. Incluye los audios de
comprensión del simulacro y los modelos de escritura y oral (estos son más
largos, así que tardan algo más). Después: `git add -A`, commit y push. Si añades
texto y **no** regeneras, esa frase usará la voz del navegador como respaldo.

## Notas

- Sin `fetch`: los datos y el manifiesto de audio son `<script>` clásicos, así
  que todo funciona también abriendo el archivo en local (`file://`).
- El progreso es local al navegador. Para sincronizar entre dispositivos haría
  falta backend o exportar/importar JSON.
- El idioma también es local (`norsk-kjekt-lang`). No hay detección automática:
  por defecto se abre en español y cada visitante elige ES, EN o FA.
- El audio no depende del sistema del visitante: son MP3 pregrabados. Solo si
  añades una frase sin regenerar se usará `speechSynthesis`, y ahí la calidad
  depende de las voces instaladas.
