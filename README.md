# Norsk Kjekt 🇳🇴

**Publicado:** <https://amedgit.github.io/norsk-kjekt/>

Portal para practicar noruego **bokmål** (A1–B2): textos cortos, ejercicios
interactivos y una sección de noruego coloquial. HTML + CSS + JS puro, sin build,
sin dependencias y sin backend.

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
| Práctica | 81 ejercicios en 7 formatos: opción múltiple, huecos, ordenar, dictado, cloze, transformar y emparejar |
| Coloquial | 18 expresiones con registro (neutro → vulgar), diálogo de ejemplo y truco |
| Progreso | racha de días, XP, mejor resultado por lección y cola de repaso de fallos |
| Velocidad | selector 0,7×–1,3× en la cabecera; se aplica al audio y se recuerda |
| Audio | 372 frases pregrabadas con voz neuronal bokmål (`nb_NO`, Piper) en MP3; si falta una frase, cae a la voz del navegador |

## Estructura

```
norsk/
├── index.html
├── serve.sh
├── robots.txt
├── DEPLOY.md            ← cómo publicarlo (Netlify / GitHub Pages)
├── .github/workflows/pages.yml
├── tools/
│   └── generate-audio.mjs   ← sintetiza los MP3 y el manifiesto
└── assets/
    ├── css/style.css
    ├── img/og.png       ← imagen para compartir en redes
    ├── audio/*.mp3      ← 372 audios (≈4,4 MB), generados
    └── js/
        ├── data.js          ← TODO el contenido del curso
        ├── audio-manifest.js ← texto → MP3 (generado, no editar)
        ├── tts.js           ← reproduce MP3; fallback a speechSynthesis
        └── app.js           ← router, progreso, motor de ejercicios
```

Publicación: ver **[DEPLOY.md](DEPLOY.md)**. Hay un zip listo para Netlify Drop
y un workflow de GitHub Pages que se dispara con cada push a `main`.

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
de gramática y el vocabulario siguen visibles.

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
```

Para añadir expresiones coloquiales, edita el array `colloquial` con
`register` ∈ `neutro | informal | muy informal | fuerte | vulgar | oral`.

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
- El audio no depende del sistema del visitante: son MP3 pregrabados. Solo si
  añades una frase sin regenerar se usará `speechSynthesis`, y ahí la calidad
  depende de las voces instaladas.
