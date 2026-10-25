# Norsk Kjekt 🇳🇴

**Publicado:** <https://amedgit.github.io/norsk-kjekt/>

Portal para practicar noruego **bokmål** (A1–B2): textos cortos, ejercicios
interactivos, seis packs de humor, tablas de palabras y verbos, y una sección de
noruego coloquial. HTML + CSS + JS puro, sin build, sin dependencias y sin backend.
La interfaz y las explicaciones se pueden leer en **español o inglés**; el noruego
del curso no se traduce.

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

## Qué incluye

| Parte | Contenido |
|---|---|
| Lecciones | 11 lecciones A1–B2: base A1–A2, vida diaria B1 y noticias, medio ambiente y derechos laborales en B2 |
| Práctica | 165 ejercicios en 10 formatos: opción múltiple, huecos, ordenar, dictado, cloze, transformar, emparejar, ¿qué sobra?, encontrar el error y memoria |
| Tull & tøys | 6 packs con 84 ejercicios de humor (absurdo, supervivencia, oficina, dictados, modismos y verbos) y una mezcla aleatoria de 10 |
| Tablas | 86 palabras con audio, búsqueda, filtros por nivel/tema, ordenación y modo examen; 14 verbos en presente, pasado y perfecto |
| Coloquial | 18 expresiones con registro (neutro → vulgar), diálogo de ejemplo y truco |
| Idioma | selector **ES / EN** en la cabecera: traduce interfaz, explicaciones, traducciones y tablas; el bokmål se queda intacto y el progreso se conserva |
| Progreso | racha de días, XP, mejor resultado por lección/pack y cola de repaso de fallos |
| Velocidad | selector 0,7×–1,3× en la cabecera; se aplica al audio y se recuerda |
| Audio | 534 frases pregrabadas con voz neuronal bokmål (`nb_NO`, Piper) en MP3; si falta una frase, cae a la voz del navegador |

## Interfaz en español o inglés

El botón **ES / EN** de la cabecera cambia todo lo que no es noruego:

- textos de la interfaz, botones, filtros, avisos y resultados;
- explicaciones, objetivos, trucos y notas culturales;
- traducciones de textos, vocabulario, frases y diálogos;
- prompts, opciones, pistas y explicaciones de los 165 ejercicios;
- las tablas de palabras y verbos (la columna de significados).

Lo que se aprende —títulos de lección, bokmål, opciones noruegas de los
ejercicios, audio— **no se traduce nunca**. La elección se guarda en
`localStorage` (`norsk-kjekt-lang`) y el progreso (`norsk-kjekt-v1`) se mantiene
al cambiar de idioma, porque el cambio solo recarga la página.

El español es el idioma base y vive en `data.js`; el inglés está en
`content-en.js` como un mapa `"texto en español": "English text"`. Al cargar en
modo EN, `lang.js` sustituye los campos españoles por su traducción y deja
intactas las cadenas que detecta como noruego.

### Añadir o cambiar traducciones

1. Edita el contenido en español en `assets/js/data.js`.
2. Añade la traducción en `assets/js/content-en.js` usando **exactamente** el
   mismo texto español como clave (incluidos acentos, «» y puntuación).
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
│   ├── generate-lesson-art.mjs  ← dibuja las 11 ilustraciones SVG de las lecciones
│   └── check-i18n.mjs           ← comprueba que todo el contenido tiene traducción EN
└── assets/
    ├── css/style.css
    ├── img/og.png       ← imagen para compartir en redes
    ├── img/lessons/*.svg ← una ilustración original por lección
    ├── audio/*.mp3      ← 534 audios (≈5,9 MB), generados
    └── js/
        ├── data.js          ← TODO el contenido del curso (base en español + noruego)
        ├── content-en.js    ← traducciones ES → EN del contenido
        ├── lang.js          ← idioma, textos de interfaz y localización del curso
        ├── audio-manifest.js ← texto → MP3 (generado, no editar)
        ├── tts.js           ← reproduce MP3; fallback a speechSynthesis
        └── app.js           ← router, progreso, motor de ejercicios
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
  num: 12,
  emoji: '🍕',
  level: 'A2',           // A1 | A2 | B1 | B2
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

En B1 y B2 las traducciones del texto salen plegadas por defecto; los ejemplos
de gramática y el vocabulario siguen visibles. Añade también las traducciones
inglesas en `content-en.js` y ejecuta `node tools/check-i18n.mjs` antes de
publicar.

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

### Tull & tøys

La sección `#/tull` se alimenta de tres bloques de `data.js`:

- `fun.packs`: packs con `id`, `emoji`, `level`, `title`, `subtitle`, `intro` y
  `exercises`. Acepta los mismos tipos que las lecciones, incluidos `odd`,
  `fix` y `memory`.
- `wordbank`: palabras de la tabla (`no`, `es`, `level`, `tag` y `note` opcional).
- `verbs`: verbos de la tabla (`inf`, `es`, `present`, `past`, `perfect`).

El generador de audio recorre automáticamente los packs, `wordbank` y `verbs`:
si añades texto nuevo, vuelve a ejecutarlo antes de publicar.

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
(48 kbps mono) y reescribe `assets/js/audio-manifest.js`. Después: `git add -A`,
commit y push. Si añades texto y **no** regeneras, esa frase usará la voz del
navegador como respaldo.

## Notas

- Sin `fetch`: los datos y el manifiesto de audio son `<script>` clásicos, así
  que todo funciona también abriendo el archivo en local (`file://`).
- El progreso es local al navegador. Para sincronizar entre dispositivos haría
  falta backend o exportar/importar JSON.
- El idioma también es local (`norsk-kjekt-lang`). No hay detección automática:
  por defecto se abre en español y cada visitante elige ES o EN.
- El audio no depende del sistema del visitante: son MP3 pregrabados. Solo si
  añades una frase sin regenerar se usará `speechSynthesis`, y ahí la calidad
  depende de las voces instaladas.
