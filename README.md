# Norsk Kjekt 🇳🇴

**Publicado:** <https://norskkjekt.com/>

Portal para practicar noruego **bokmål** (A1–C2): textos cortos, ejercicios
interactivos, una sección A0, una referencia de gramática A0–B2, 100 verbos esenciales, una historia serializada en cinco capítulos, siete conversaciones
cotidianas con audio, cuatro grupos de WhatsApp noruego, seis packs de humor,
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

1. Abre <https://norskkjekt.com/> en Chrome (Android).
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
| Lecciones | 15 lecciones A1–C2 con página propia (`#/lecciones`): buscador, filtros por nivel, progreso y acceso directo a cada lección |
| Práctica | 337 ejercicios en 10 formatos, test de nivel de 18 preguntas y entrenador de números, hora y preposiciones |
| Samtaler | 7 conversaciones cotidianas (A2–B1: portal, cafetería, restaurante, tienda, trabajo, médico y teléfono) con 66 réplicas, audio por línea, traducciones plegables, vocabulario, frases y 35 ejercicios |
| A0 | Sección `#/a0` para empezar desde cero: alfabeto, vocales, consonantes, pronunciación, primeras frases y 8 ejercicios |
| Gramática | Referencia `#/gramatica` A0–B2: 30 temas con reglas, ejemplos con audio, errores típicos y 60 ejercicios |
| Verbos | 100 verbos esenciales con presente, pasado, perfecto, imperativo, ejemplo, audio y progreso |
| Juegos | **Hukommelse**: juego de memoria con parejas de palabras y traducciones, tres niveles, audio, contador de movimientos y tiempo |
| Historia | «Lucía i Oslo»: 5 capítulos piloto (A2–B1) de la serie de 12, con 7 párrafos cada uno, audio por párrafo y del capítulo completo, traducción plegable, 15 palabras, gramática y 5 ejercicios por capítulo |
| Kjerneord | Núcleo de 1000 palabras y frases en 10 paquetes de 100; los paquetes 1 a 9 (900 palabras: supervivencia, vida diaria, personas y planes, salud y cuerpo, trabajo y trámites, ciudad y viajes, conectores y matices, opiniones y debate, cultura y sociedad) ya están disponibles con audio, filtros y test |
| Meldinger | 4 grupos de WhatsApp (A2–B1: vecinos, familia, amigos y trabajo) con 48 mensajes en formato chat, audio por mensaje, traducción, glosario de abreviaturas y truco cultural |
| Kroppen | Mapa corporal interactivo (34 partes), zoom de mano y pie, constructor de síntomas, 10 frases de consulta, 3 escenarios médicos y 8 ejercicios (A1–B1) |
| Tull & tøys | 6 packs con 84 ejercicios de humor (absurdo, supervivencia, oficina, dictados, modismos y verbos) y una mezcla aleatoria de 10 |
| Tablas | 94 palabras con audio, búsqueda, filtros por nivel/tema, ordenación y modo examen; 14 verbos en presente, pasado y perfecto |
| Coloquial | 30 expresiones con registro (neutro → vulgar), diálogo de ejemplo y truco |
| Simulacro | 4 exámenes completos (A1, A2, B1 y B2) estilo Norskprøven: lesing, lytting, skriving y muntlig, con cronómetro, informe por destreza y respuestas modelo |
| Idioma | selector **ES / EN / فا** en la cabecera: traduce interfaz, explicaciones y tablas; el bokmål se queda intacto y el progreso se conserva. En persa la página cambia a dirección RTL |
| Analítica | Cloudflare Web Analytics (sin cookies) y Google Analytics 4 con Consent Mode, banner de consentimiento y página de privacidad |
| Progreso | racha, XP, mapa de calor de 12 semanas, 8 logros, repaso espaciado (1/3/7/15/30 días) y exportación/importación del progreso en JSON |
| Extras | modo oscuro, teclado noruego æ ø å en los ejercicios de escritura y PWA offline |
| Velocidad | selector 0,5×–1,3× en la cabecera; empieza en 0,85×, se aplica al audio y se recuerda |
| Audio | 2846 frases pregrabadas con voz neuronal bokmål (`nb_NO`, Piper) en MP3; si falta una frase, cae a la voz del navegador |
| App | PWA instalable (offline) con icono propio, pantalla completa y funcionamiento sin conexión; el APK está retirado temporalmente |

## Interfaz en español, inglés o persa

El selector **ES / EN / فا** de la cabecera cambia todo lo que no es noruego:

- textos de la interfaz, botones, filtros, avisos y resultados;
- explicaciones, objetivos, trucos y notas culturales;
- traducciones de textos, vocabulario, frases y diálogos;
- prompts, opciones, pistas y explicaciones de los 337 ejercicios;
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
    ├── audio/*.mp3      ← 2846 audios (≈28,9 MB), generados
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

### Juegos (Hukommelse)

`#/juegos` es el índice de juegos. La primera entrega es **Hukommelse**, un
juego de memoria para relacionar palabras noruegas con su traducción.

- Tres niveles: fácil (6 parejas), medio (8) y difícil (10).
- Audio de la palabra noruega al girar la carta.
- Movimientos, tiempo, parejas encontradas y mejor marca.
- Estadísticas por nivel en `state.games.hukommelse`.
- Sin prisa: no hay límite de tiempo, solo un contador.
- Funciona offline y en móvil.

### Guías SEO estáticas

Las guías pensadas para buscadores son HTML estático, separado de la app:

- `/noruego-desde-cero/`
- `/alfabeto-noruego/`
- `/vocabulario-noruego/`
- `/historias-noruego/`
- `/frases-basicas-noruego/`
- `/noruego-para-camareros/`
- `/ejercicios-noruego/`
- `/bokmal-o-nynorsk/`
- `/guias/` (índice)

Cada una tiene su propio `title`, meta description, canonical, Open Graph,
JSON-LD (`Article`, `BreadcrumbList` y `FAQPage`) y enlaces a la app. El
`sitemap.xml` incluye la portada y todas las guías. Al añadir una guía nueva,
actualiza el sitemap, enlázala desde `/guias/` y desde el pie de la app.

### Verbos esenciales

La sección `#/verbos` reúne 100 verbos de uso diario en 10 temas. En noruego no
hay conjugación por persona, así que cada verbo muestra sus formas clave:

- infinitivo, presente, pasado, perfecto e imperativo;
- ejemplo con audio y traducción;
- nivel, tema y marca de regular o irregular;
- buscador, filtros por tema y botón **«La sé»**.

El progreso vive en `state.verbos.known`. El acceso está en el menú **Más**.
### Gramática (A0–A2)

La referencia `#/gramatica` reúne 30 temas explicados desde cero:

- A0: pronombres, `være`/`ha`, orden V2, preguntas, negación, artículos y plural.
- A1: presente, modales, posesivos, preposiciones, pasado y perfecto.
- A2: futuro, reflexivos, pronombres objeto, subordinadas y relativas.
- B1: pasiva, adjetivo definido, partículas, condicionales, estilo indirecto y orden en subordinadas.
- B2: sustantivación, conectores avanzados, énfasis, registro, idiomas y cohesión.

Cada tema tiene reglas, ejemplos con audio, un error típico corregido y dos
ejercicios. El progreso vive en `state.grammar.topics`; los fallos usan la firma
`grammar#<id>#<índice>`. El acceso está en el menú superior como **Gramática**, además del pie y la página de Lecciones.

### A0 (empezar desde cero)

La sección `#/a0` está pensada para quien nunca ha estudiado noruego. Explica
el bokmål y el nynorsk, los dialectos, el alfabeto de 29 letras, las vocales
largas y cortas, las consonantes y letras mudas, y doce primeras frases.

- Acceso desde el banner de portada, la página de Lecciones y el pie.
- El alfabeto y los ejemplos tienen audio.
- 8 ejercicios con progreso en `state.a0` y firmas de repaso `a0#<índice>`.
- La pronunciación de referencia es la de Oslo/Este; se avisa de que hay
  variación dialectal.

### Historien (Lucía i Oslo)

La historia serializada vive en `stories` dentro de `data.js` y se abre en
`#/historien`. El acceso está en el menú superior como **Historia**, además del
banner de portada, el pie y «Mi progreso». El piloto tiene **5 capítulos**
abiertos de los **12** previstos; los otros siete aparecen como «próximamente».

Cada capítulo tiene `id`, `num`, `level`, `emoji`, `title`, `subtitle`, `intro`,
`place`, `places`, `paragraphs` (`no`, `es`), `vocab` (`no`, `es`, `forms`
opcional), `grammar` (`title`, `es`, `examples`) y `exercises` con los mismos
tipos que las lecciones. La ruta es `#/historien/<id>`.

- El botón **Escuchar el capítulo** reproduce los párrafos en orden con el audio
  pregrabado de cada uno.
- Cada párrafo tiene su propio botón **Mostrar traducción**, oculto por defecto.
- El progreso vive en `state.stories.chapters` con la mejor puntuación.
- Los fallos entran en el repaso con la firma `story#<id>#<índice>`.
- Los capítulos 1–5 se llaman `Ankomst`, `Jobbsøking`, `Nye venner`, `Første lønning` y `Vinteren`.
- Los lugares son reales (Grünerløkka, Thorvald Meyers gate, Bjørvika,
  Sognsvann, etc.), pero los personajes son ficticios. Evita precios, horarios
  y direcciones privadas que caduquen.
- Al añadir capítulos, ejecuta `tools/generate-audio.mjs` y
  `tools/check-i18n.mjs`, y actualiza `totalTarget` si cambia la serie.

### Lecciones

La página `#/lecciones` es el índice del curso: buscador por título/tema,
filtros A1–C2 (también con URL directa, p. ej. `#/lecciones/B1`), progreso y
resaltado de la siguiente lección. El logo de la cabecera vuelve al inicio; el
elemento **Lecciones** del menú abre este índice, no la portada.

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

### Kjerneord (las 1000 palabras clave)

`#/kjerneord` es el núcleo de vocabulario: **10 paquetes de 100** palabras y
frases, pensados para pasar de sobrevivir a conversar. El acceso está en el menú superior como **Palabras**, además del chip de la
portada y el pie. Los paquetes 1–9 (`#/kjerneord/1` a `#/kjerneord/9`, 900 palabras de
supervivencia, vida diaria, personas, salud, trabajo, viajes, conectores,
debate y sociedad) ya están abiertos; el último aparece como «próximamente» y
se irá añadiendo en tandas.

Cada paquete tiene buscador, filtros (todas/pendientes/aprendidas), audio por
palabra, formas útiles (plural, género o conjugación) y un test de 10 preguntas.
El estado vive en `state.core`:

- `known`: palabras marcadas como «la sé».
- `packs`: mejor resultado de cada test.

Al añadir un paquete, amplía `core.packs` en `data.js` con el mismo formato.

### Analítica, cookies y privacidad

- **Cloudflare Web Analytics**: visitas agregadas, países y referidos, sin cookies.
- **Google Analytics 4**: se carga con `gtag.js` y el ID de medición
  `G-W6XYF2YDXV`, solo con consentimiento. Se usa Consent Mode v2 y la elección
  se guarda en `localStorage` con la clave `norsk-kjekt-consent`.
- **Rutas `#`**: GA4 cuenta la visita inicial y los países, pero no separa
  `#/historien` de `#/kjerneord`; para eso haría falta otro tipo de evento o
  cambiar el enrutador.
- **Privacidad**: la página `#/privacidad` explica el tratamiento y permite
  reabrir el banner para cambiar la elección.

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
