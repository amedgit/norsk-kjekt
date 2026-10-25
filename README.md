# Norsk Kjekt 🇳🇴

Portal para practicar noruego **bokmål** (A1–A2): textos cortos, ejercicios
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
| Lecciones | 5 lecciones A1–A2: presentarse, cafetería, tienda, bus, tiempo/small talk |
| Práctica | 30 ejercicios en 3 formatos: opción múltiple, rellenar huecos, ordenar palabras |
| Coloquial | 18 expresiones con registro (neutro → vulgar), diálogo de ejemplo y truco |
| Progreso | racha de días, XP, mejor resultado por lección y cola de repaso de fallos |
| Audio | voz del navegador, priorizando `nb-NO` (si no hay, usa `nn-NO`, `no` o danés) |

## Estructura

```
norsk/
├── index.html
├── serve.sh
├── robots.txt
├── DEPLOY.md            ← cómo publicarlo (Netlify / GitHub Pages)
├── .github/workflows/pages.yml
└── assets/
    ├── css/style.css
    ├── img/og.png       ← imagen para compartir en redes
    └── js/
        ├── data.js   ← TODO el contenido del curso
        ├── tts.js    ← pronunciación con speechSynthesis
        └── app.js    ← router, progreso, motor de ejercicios
```

Publicación: ver **[DEPLOY.md](DEPLOY.md)**. Hay un zip listo para Netlify Drop
y un workflow de GitHub Pages que se dispara con cada push a `main`.

## Añadir una lección

Todo el contenido vive en `assets/js/data.js`. Copia un objeto del array
`lessons`, cámbialo y súbelo al final (el `num` debe ser el siguiente):

```js
{
  id: 'ny',              // único, sin espacios
  num: 6,
  emoji: '🍕',
  level: 'A2',
  title: 'På pizzeria',
  subtitle: 'Pedir, compartir y pagar',
  goals: ['...'],
  text: [{ no: 'Frase en noruego.', es: 'Traducción.' }],
  vocab: [{ no: 'pizza', es: 'pizza', note: 'opcional' }],
  phrases: [{ no: 'Kan jeg få ...?', es: '¿Me das...?' }],
  tip: 'Un consejo cultural.',
  exercises: [/* ver abajo */]
}
```

Tipos de ejercicio:

```js
// opción múltiple (answer = índice correcto)
{ type: 'mcq', prompt: '¿Qué significa «koselig»?',
  options: ['feo', 'acogedor', 'caro', 'rápido'], answer: 1, explain: '...' }

// hueco (answers admite varias variantes correctas)
{ type: 'gap', prompt: 'Completa:', sentence: 'Jeg ___ fra Spania.',
  answers: ['er'], bank: ['er', 'bor', 'heter'], es: 'Soy de España.', explain: '...' }

// ordenar palabras (la puntuación va pegada a la última palabra)
{ type: 'order', prompt: 'Ordena:', words: ['Hva', 'heter', 'du?'],
  es: '¿Cómo te llamas?', explain: '...' }
```

Para añadir expresiones coloquiales, edita el array `colloquial` con
`register` ∈ `neutro | informal | muy informal | fuerte | vulgar | oral`.

## Notas

- Sin `fetch`: los datos son un `<script>` clásico, así que todo funciona también
  abriendo el archivo en local. Si algún día pasas a módulos ES, necesitarás el
  servidor local.
- El progreso es local al navegador. Para sincronizar entre dispositivos haría
  falta backend o exportar/importar JSON.
- La calidad del audio depende de las voces instaladas en el sistema
  (`speechSynthesis.getVoices()`). En Linux sin voces noruego puede sonar raro;
  en macOS/Windows suele haber una voz `nb-NO` decente.
