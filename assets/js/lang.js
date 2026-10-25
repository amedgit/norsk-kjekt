/* Norsk Kjekt — idioma de la interfaz y localización del contenido.
   ES es el idioma base; EN se guarda en content-en.js.
   El noruego (títulos de lección, textos, vocabulario) nunca se traduce. */
(function () {
  'use strict';

  var KEY = 'norsk-kjekt-lang';
  var lang = 'es';
  try { if (localStorage.getItem(KEY) === 'en') lang = 'en'; } catch (e) { /* modo privado */ }

  var UI = {
    es: {
      'meta.title': 'Norsk Kjekt — aprende noruego de verdad',
      'meta.description': 'Curso de noruego bokmål A1–B2: 11 lecciones, 165 ejercicios, 6 packs de humor, tabla de 86 palabras con audio y el noruego coloquial que no sale en los libros.',
      'meta.ogDescription': '11 lecciones de bokmål (A1–B2), 165 ejercicios interactivos, 6 packs de humor y 18 expresiones de la calle. Sin registro y sin build.',
      'meta.ogAlt': 'Norsk Kjekt: portal de noruego con ejercicios interactivos',
      'skip': 'Saltar al contenido',
      'nav.primary': 'Principal',
      'nav.lessons': 'Lecciones',
      'nav.fun': 'Tull & tøys',
      'nav.colloquial': 'Coloquial',
      'nav.review': 'Repaso',
      'audio.label': 'Audio',
      'audio.speed': 'Velocidad del audio',
      'hud.streak': 'Días seguidos practicando',
      'hud.xp': 'Puntos de experiencia',
      'lang.label': 'Idioma',
      'lang.switch': 'Cambiar idioma',
      'footer.tagline': 'bokmål A1–B2 · hecho para practicar un poco cada día.',
      'footer.audio': 'Audio neuronal pregrabado en bokmål (nb_NO). Sin cuentas: tu progreso se guarda en este dispositivo.',

      'say.listenNo': 'Escuchar en noruego',
      'say.title': 'Escuchar',

      'preview.order': 'Ordena: ',
      'preview.cloze': 'Completa el texto',
      'preview.listen': 'Dictado: ',
      'preview.transform': 'Transforma: ',
      'preview.match.one': 'Empareja: {n} par',
      'preview.match.many': 'Empareja: {n} pares',
      'preview.odd': '¿Qué sobra? ',
      'preview.fix': 'Encuentra el error: ',
      'preview.memory.one': 'Memoria: {n} par',
      'preview.memory.many': 'Memoria: {n} pares',

      'ex.practice': 'Práctica',
      'ex.correct': '✅ ¡Riktig! (correcto)',
      'ex.almost': '❌ Casi — mira la respuesta',
      'ex.seeResult': 'Ver resultado →',
      'ex.next': 'Siguiente →',
      'ex.listen': '▶ Escuchar',
      'ex.check': 'Comprobar',
      'ex.clear': 'Borrar',
      'ex.yourSentence': 'Tu frase…',
      'ex.writeWhatYouHear': 'Escribe lo que oyes…',
      'ex.writeYourSentence': 'Tu frase…',
      'ex.answer': 'Respuesta',
      'ex.missingWord': 'Palabra que falta',
      'ex.gap': 'Hueco {n}',
      'ex.dictation': 'Dictado',
      'ex.matchHint': 'Toca una palabra de la primera columna y luego su pareja.',
      'ex.oddHint': 'Una de estas palabras ha venido a la fiesta sin invitación.',
      'ex.fixHint': 'Toca la palabra que sobra o que está mal. Solo hay una.',
      'ex.memoryHint': 'Toca dos cartas. Si son pareja, se quedan boca arriba.',
      'ex.complete': '¡Completado!',
      'ex.choosePair': 'Ahora elige su pareja.',
      'ex.findPair': 'Ahora busca su pareja.',
      'ex.chooseFirst': 'Primero elige una palabra de la primera columna.',
      'ex.remaining.one': '¡Bien! Queda {n}.',
      'ex.remaining.many': '¡Bien! Quedan {n}.',
      'ex.remainingPairs.one': '¡Bien! Queda {n} pareja.',
      'ex.remainingPairs.many': '¡Bien! Quedan {n} parejas.',
      'ex.tryAgain': 'Casi. Prueba otra vez.',
      'ex.fixFound': '¡Ahí estaba! La frase correcta aparece abajo.',
      'ex.fixOther': 'Esa palabra está bien. La que falla es la marcada en verde.',
      'ex.memoryPerfect': '¡Memoria de elefante!',
      'ex.memoryDone.one': 'Completado con {n} fallo.',
      'ex.memoryDone.many': 'Completado con {n} fallos.',
      'ex.cardUp': 'Carta boca arriba: {text}',
      'ex.cardDown': 'Carta boca abajo',
      'ex.cardN': 'Carta {n} boca abajo',
      'ex.defaultCloze': 'Completa el texto:',
      'ex.defaultListen': 'Escucha y escribe lo que oyes:',
      'ex.defaultListenHint': 'Puedes repetirlo las veces que quieras.',
      'ex.defaultTransform': 'Reescribe la frase:',
      'ex.defaultMatch': 'Empareja cada palabra con su pareja:',
      'ex.defaultOdd': '¿Qué palabra no encaja?',
      'ex.defaultFix': 'Encuentra el error y toca la palabra equivocada:',
      'ex.defaultMemory': 'Memoria: encuentra las parejas.',
      'ex.defaultGap': 'Completa la frase:',
      'ex.defaultOrder': 'Ordena la frase:',
      'ex.orderHint': 'Toca las palabras en el orden correcto.',

      'result.perfect': '¡Perfekt! Te has salido. 🎉',
      'result.great': '¡Bra jobba! Muy bien, ya casi lo tienes.',
      'result.ok': 'No está mal. Repite los fallos y se queda.',
      'result.low': 'Tranquilo: nadie aprende noruego en una tarde. Repite y verás.',
      'result.again': 'Repetir',
      'result.reviewN': 'Repasar {n}',
      'result.continue': 'Seguir',
      'result.finish': 'Terminar',
      'result.progress': 'Progreso guardado · +{n} XP',
      'result.reviewSaved': 'Repaso guardado · +{n} XP',

      'home.eyebrow': 'Bokmål · A1–B2 · sin prisa',
      'home.title': 'Noruego que se usa <em>de verdad</em>.',
      'home.intro': '{lessons} lecciones, {exercises} ejercicios que corrigen al instante, {packs} packs de humor y una tabla de {words} palabras con audio. El noruego de calle que no sale en los libros.',
      'home.start': 'Empezar',
      'home.continue': 'Seguir',
      'home.street': 'Ver coloquial',
      'home.streak': 'Racha',
      'home.days.one': 'día',
      'home.days.many': 'días',
      'home.lessons': 'Lecciones',
      'home.of': 'de {n}',
      'home.wordOfDay': 'Palabra del día',
      'home.basicTitle': 'Paso a paso',
      'home.basicSub': 'A1–A2 · la base',
      'home.b1Title': 'B1 · soltarte',
      'home.b1Sub': 'ya te defiendes en el día a día',
      'home.b2Title': 'B2 · opinar y discutir',
      'home.b2Sub': 'textos reales, más matices',
      'home.funEyebrow': 'Nuevo · A1–B2',
      'home.funTitle': '¿Cansado de ser un alumno serio?',
      'home.funText': 'Alces en la lavadora, jefes que dicen «reto interesante» y una tabla de palabras que puedes ordenar, filtrar y escuchar. {n} ejercicios nuevos para aprender riéndote.',
      'home.funEnter': 'Entrar en Tull & tøys',
      'home.mix': '🎲 Mezcla aleatoria',
      'home.streetTitle': 'De la calle',
      'home.streetSub': 'sin diccionario',
      'home.seeExpressions.one': 'Ver la expresión →',
      'home.seeExpressions.many': 'Ver las {n} expresiones →',

      'lesson.cardNum': 'Lección {n}',
      'lesson.new': 'nueva',
      'lesson.exercises.one': '{n} ejercicio',
      'lesson.exercises.many': '{n} ejercicios',
      'lesson.crumb': 'Lecciones',
      'lesson.breadcrumb': 'Lección {n}',
      'lesson.text': 'Texto',
      'lesson.folded': 'traducción plegada',
      'lesson.showTranslation': 'Ver traducción',
      'lesson.hideTranslation': 'Ocultar traducción',
      'lesson.grammar': 'Gramática',
      'lesson.vocab': 'Vocabulario',
      'lesson.phrases': 'Frases clave',
      'lesson.tip': 'Truco:',
      'lesson.practice': 'Práctica',
      'lesson.start': 'Empezar práctica · {n} ejercicios',
      'lesson.best': 'Tu mejor resultado: {best}/{total}',
      'lesson.label': 'Lección {n}',

      'fun.eyebrow': 'A1–B2 · sin vergüenza',
      'fun.mix': '🎲 Mezcla aleatoria · 10',
      'fun.wordTable': '📚 Tabla de palabras',
      'fun.verbs': '🧩 Verbos',
      'fun.newExercises': 'Ejercicios nuevos',
      'fun.toLaugh': 'para reír',
      'fun.wordsInTable': 'Palabras en la tabla',
      'fun.withAudio': 'con audio',
      'fun.quoteBy': '— Todo noruego, siempre',
      'fun.chooseChaos': 'Elige tu caos',
      'fun.chooseChaosSub': '6 packs, cero solemnidad',
      'fun.tableTitle': 'Tabla de palabras',
      'fun.tableNote': '{n} palabras · audio incluido',
      'fun.tableIntro': 'Filtra por nivel o tema, ordena las columnas y escucha cada palabra. Activa el modo examen para tapar el español y probarte.',
      'fun.verbTitle': 'Tabla de verbos',
      'fun.verbNote': 'presente · pasado · perfecto',
      'fun.verbIntro': 'Los 14 verbos que más se repiten en el curso. Oculta las formas y recítalas como si fuera un examen sorpresa.',
      'fun.searchWords': 'Buscar en noruego o en español…',
      'fun.allTopics': 'Todos los temas',
      'fun.examMode': 'Modo examen',
      'fun.all': 'Todos',
      'fun.colNo': 'Norsk',
      'fun.colEs': 'Español',
      'fun.colLevel': 'Nivel',
      'fun.colTag': 'Tema',
      'fun.noResults': 'Nada por aquí. Prueba otra búsqueda o quita el filtro.',
      'fun.wordCount.one': '{n} palabra de {total} · toca el altavoz para oírla',
      'fun.wordCount.many': '{n} palabras de {total} · toca el altavoz para oírla',
      'fun.wordCountHide': ' · toca una fila para destapar el español',
      'fun.searchLabel': 'Buscar palabra',
      'fun.filterLabel': 'Filtrar por tema',
      'fun.infinitive': 'Infinitivo',
      'fun.present': 'Presente',
      'fun.past': 'Pasado',
      'fun.perfect': 'Perfecto',
      'fun.showForms': 'Mostrar formas',
      'fun.hideForms': 'Ocultar formas',
      'fun.practice': 'Practicar →',
      'fun.verbTip': 'Truco: en noruego el presente y el pasado son iguales para todas las personas. Solo cambia el pronombre. El perfecto es «har» + participio.',
      'fun.play': 'Jugar →',
      'fun.newPack': 'nuevo',
      'fun.start': 'Empezar · {n} ejercicios',
      'fun.best': 'Tu mejor resultado: {best}/{total}',
      'fun.back': 'Volver a Tull',
      'fun.mixTitle': 'Mezcla aleatoria',
      'fun.mixSub': 'Diez ejercicios de todos los packs, en orden sorpresa',
      'fun.mixIntro': 'Una muestra aleatoria de todo el caos. Cada vez que entres, cambia. Ideal para calentar antes de una lección seria.',
      'fun.mixLabel': 'Tull',

      'colo.title': 'Noruego de la calle, sin filtro',
      'colo.intro': 'Esto es bokmål real, el que aparece en mensajes, cafeterías y grupos de WhatsApp. Ojo con el registro: lo que suena perfecto entre amigos puede quedar fatal en una entrevista.',
      'colo.search': 'Buscar expresión, significado…',
      'colo.all': 'Todo',
      'colo.literal': 'lit.: ',
      'colo.none': 'Nada por aquí. Prueba otra palabra.',
      'reg.neutro': 'Neutro',
      'reg.informal': 'Informal',
      'reg.muy informal': 'Muy informal',
      'reg.fuerte': 'Informal fuerte',
      'reg.vulgar': 'Vulgar',
      'reg.oral': 'Oral',

      'review.title': 'Repaso',
      'review.intro': 'Aquí caen los ejercicios que fallas, para que no se te escapen.',
      'review.empty': 'Todavía no hay nada que repasar.<br>Haz una lección y lo que falles aparecerá aquí.',
      'review.pending.one': '{n} ejercicio pendiente. Los que aciertes desaparecen.',
      'review.pending.many': '{n} ejercicios pendientes. Los que aciertes desaparecen.',
      'review.all': 'Repasar todo',
      'review.label': 'Repaso',
      'review.lessonLabel': 'L{n}',

      'tag.social': 'social',
      'tag.café': 'café',
      'tag.comida': 'comida',
      'tag.casa': 'casa',
      'tag.transporte': 'transporte',
      'tag.animales': 'animales',
      'tag.clima': 'clima',
      'tag.ropa': 'ropa',
      'tag.sentimientos': 'sentimientos',
      'tag.dinero': 'dinero',
      'tag.lugar': 'lugar',
      'tag.mente': 'mente',
      'tag.trabajo': 'trabajo',
      'tag.sociedad': 'sociedad',
      'tag.falsos amigos': 'falsos amigos'
    },

    en: {
      'meta.title': 'Norsk Kjekt — learn Norwegian for real',
      'meta.description': 'Norwegian bokmål course A1–B2: 11 lessons, 165 exercises, 6 humour packs, an 86-word table with audio and the street Norwegian that never makes it into textbooks.',
      'meta.ogDescription': '11 bokmål lessons (A1–B2), 165 interactive exercises, 6 humour packs and 18 street expressions. No sign-up, no build.',
      'meta.ogAlt': 'Norsk Kjekt: a Norwegian portal with interactive exercises',
      'skip': 'Skip to content',
      'nav.primary': 'Main',
      'nav.lessons': 'Lessons',
      'nav.fun': 'Tull & tøys',
      'nav.colloquial': 'Street talk',
      'nav.review': 'Review',
      'audio.label': 'Audio',
      'audio.speed': 'Audio speed',
      'hud.streak': 'Consecutive days practising',
      'hud.xp': 'Experience points',
      'lang.label': 'Language',
      'lang.switch': 'Switch language',
      'footer.tagline': 'bokmål A1–B2 · made for a little practice every day.',
      'footer.audio': 'Pre-recorded neural audio in bokmål (nb_NO). No accounts: your progress is saved on this device.',

      'say.listenNo': 'Listen in Norwegian',
      'say.title': 'Listen',

      'preview.order': 'Order: ',
      'preview.cloze': 'Complete the text',
      'preview.listen': 'Dictation: ',
      'preview.transform': 'Transform: ',
      'preview.match.one': 'Match: {n} pair',
      'preview.match.many': 'Match: {n} pairs',
      'preview.odd': "What doesn't belong? ",
      'preview.fix': 'Find the mistake: ',
      'preview.memory.one': 'Memory: {n} pair',
      'preview.memory.many': 'Memory: {n} pairs',

      'ex.practice': 'Practice',
      'ex.correct': '✅ Riktig! (correct)',
      'ex.almost': '❌ Almost — check the answer',
      'ex.seeResult': 'See result →',
      'ex.next': 'Next →',
      'ex.listen': '▶ Listen',
      'ex.check': 'Check',
      'ex.clear': 'Clear',
      'ex.yourSentence': 'Your sentence…',
      'ex.writeWhatYouHear': 'Write what you hear…',
      'ex.writeYourSentence': 'Your sentence…',
      'ex.answer': 'Answer',
      'ex.missingWord': 'Missing word',
      'ex.gap': 'Gap {n}',
      'ex.dictation': 'Dictation',
      'ex.matchHint': 'Tap a word in the first column, then its match.',
      'ex.oddHint': 'One of these words came to the party uninvited.',
      'ex.fixHint': "Tap the extra or wrong word. There's only one.",
      'ex.memoryHint': 'Tap two cards. If they match, they stay face up.',
      'ex.complete': 'Done!',
      'ex.choosePair': 'Now choose its match.',
      'ex.findPair': 'Now find its match.',
      'ex.chooseFirst': 'First choose a word from the first column.',
      'ex.remaining.one': 'Nice! {n} left.',
      'ex.remaining.many': 'Nice! {n} left.',
      'ex.remainingPairs.one': 'Nice! {n} pair left.',
      'ex.remainingPairs.many': 'Nice! {n} pairs left.',
      'ex.tryAgain': 'Almost. Try again.',
      'ex.fixFound': 'There it is! The correct sentence is below.',
      'ex.fixOther': 'That word is fine. The wrong one is highlighted in green.',
      'ex.memoryPerfect': 'Elephant memory!',
      'ex.memoryDone.one': 'Completed with {n} mistake.',
      'ex.memoryDone.many': 'Completed with {n} mistakes.',
      'ex.cardUp': 'Card face up: {text}',
      'ex.cardDown': 'Card face down',
      'ex.cardN': 'Card {n} face down',
      'ex.defaultCloze': 'Complete the text:',
      'ex.defaultListen': 'Listen and write what you hear:',
      'ex.defaultListenHint': 'You can play it as many times as you like.',
      'ex.defaultTransform': 'Rewrite the sentence:',
      'ex.defaultMatch': 'Match each word with its pair:',
      'ex.defaultOdd': "Which word doesn't fit?",
      'ex.defaultFix': 'Find the mistake and tap the wrong word:',
      'ex.defaultMemory': 'Memory: find the pairs.',
      'ex.defaultGap': 'Complete the sentence:',
      'ex.defaultOrder': 'Put the sentence in order:',
      'ex.orderHint': 'Tap the words in the correct order.',

      'result.perfect': 'Perfekt! You nailed it. 🎉',
      'result.great': 'Bra jobba! Nice work, you are nearly there.',
      'result.ok': "Not bad. Review your mistakes and it'll stick.",
      'result.low': "Easy: nobody learns Norwegian in an afternoon. Try again and you'll see.",
      'result.again': 'Try again',
      'result.reviewN': 'Review {n}',
      'result.continue': 'Continue',
      'result.finish': 'Finish',
      'result.progress': 'Progress saved · +{n} XP',
      'result.reviewSaved': 'Review saved · +{n} XP',

      'home.eyebrow': 'Bokmål · A1–B2 · no rush',
      'home.title': 'Norwegian that people <em>actually</em> use.',
      'home.intro': '{lessons} lessons, {exercises} exercises with instant feedback, {packs} humour packs and a {words}-word table with audio. The street Norwegian that never makes it into textbooks.',
      'home.start': 'Start',
      'home.continue': 'Continue',
      'home.street': 'Street talk',
      'home.streak': 'Streak',
      'home.days.one': 'day',
      'home.days.many': 'days',
      'home.lessons': 'Lessons',
      'home.of': 'of {n}',
      'home.wordOfDay': 'Word of the day',
      'home.basicTitle': 'Step by step',
      'home.basicSub': 'A1–A2 · the basics',
      'home.b1Title': 'B1 · finding your feet',
      'home.b1Sub': 'you can already handle everyday life',
      'home.b2Title': 'B2 · opinions and debate',
      'home.b2Sub': 'real texts, more nuance',
      'home.funEyebrow': 'New · A1–B2',
      'home.funTitle': 'Tired of being a serious student?',
      'home.funText': "Moose in the washing machine, bosses who say 'interesting challenge' and a word table you can sort, filter and listen to. {n} new exercises to learn while laughing.",
      'home.funEnter': 'Enter Tull & tøys',
      'home.mix': '🎲 Random mix',
      'home.streetTitle': 'From the street',
      'home.streetSub': 'no dictionary needed',
      'home.seeExpressions.one': 'See the expression →',
      'home.seeExpressions.many': 'See all {n} expressions →',

      'lesson.cardNum': 'Lesson {n}',
      'lesson.new': 'new',
      'lesson.exercises.one': '{n} exercise',
      'lesson.exercises.many': '{n} exercises',
      'lesson.crumb': 'Lessons',
      'lesson.breadcrumb': 'Lesson {n}',
      'lesson.text': 'Text',
      'lesson.folded': 'translation hidden',
      'lesson.showTranslation': 'Show translation',
      'lesson.hideTranslation': 'Hide translation',
      'lesson.grammar': 'Grammar',
      'lesson.vocab': 'Vocabulary',
      'lesson.phrases': 'Key phrases',
      'lesson.tip': 'Tip:',
      'lesson.practice': 'Practice',
      'lesson.start': 'Start practice · {n} exercises',
      'lesson.best': 'Your best score: {best}/{total}',
      'lesson.label': 'Lesson {n}',

      'fun.eyebrow': 'A1–B2 · zero shame',
      'fun.mix': '🎲 Random mix · 10',
      'fun.wordTable': '📚 Word table',
      'fun.verbs': '🧩 Verbs',
      'fun.newExercises': 'New exercises',
      'fun.toLaugh': 'to laugh at',
      'fun.wordsInTable': 'Words in the table',
      'fun.withAudio': 'with audio',
      'fun.quoteBy': '— All Norwegian, always',
      'fun.chooseChaos': 'Choose your chaos',
      'fun.chooseChaosSub': '6 packs, zero solemnity',
      'fun.tableTitle': 'Word table',
      'fun.tableNote': '{n} words · audio included',
      'fun.tableIntro': 'Filter by level or topic, sort the columns and listen to every word. Turn on exam mode to hide the English and test yourself.',
      'fun.verbTitle': 'Verb table',
      'fun.verbNote': 'present · past · perfect',
      'fun.verbIntro': 'The 14 most common verbs in the course. Hide the forms and recite them like a pop quiz.',
      'fun.searchWords': 'Search in Norwegian or English…',
      'fun.allTopics': 'All topics',
      'fun.examMode': 'Exam mode',
      'fun.all': 'All',
      'fun.colNo': 'Norsk',
      'fun.colEs': 'English',
      'fun.colLevel': 'Level',
      'fun.colTag': 'Topic',
      'fun.noResults': 'Nothing here. Try another search or clear the filter.',
      'fun.wordCount.one': '{n} word out of {total} · tap the speaker to hear it',
      'fun.wordCount.many': '{n} words out of {total} · tap the speaker to hear it',
      'fun.wordCountHide': ' · tap a row to reveal the English',
      'fun.searchLabel': 'Search word',
      'fun.filterLabel': 'Filter by topic',
      'fun.infinitive': 'Infinitive',
      'fun.present': 'Present',
      'fun.past': 'Past',
      'fun.perfect': 'Perfect',
      'fun.showForms': 'Show forms',
      'fun.hideForms': 'Hide forms',
      'fun.practice': 'Practise →',
      'fun.verbTip': 'Trick: in Norwegian the present and past are the same for every person. Only the pronoun changes. The perfect is «har» + past participle.',
      'fun.play': 'Play →',
      'fun.newPack': 'new',
      'fun.start': 'Start · {n} exercises',
      'fun.best': 'Your best score: {best}/{total}',
      'fun.back': 'Back to Tull',
      'fun.mixTitle': 'Random mix',
      'fun.mixSub': 'Ten exercises from all packs, in a surprise order',
      'fun.mixIntro': 'A random sample of all the chaos. It changes every time you come in. Perfect warm-up before a serious lesson.',
      'fun.mixLabel': 'Tull',

      'colo.title': 'Street Norwegian, unfiltered',
      'colo.intro': 'This is real bokmål: the kind you see in texts, cafés and WhatsApp groups. Watch the register: what sounds perfect among friends can land terribly in an interview.',
      'colo.search': 'Search expression, meaning…',
      'colo.all': 'All',
      'colo.literal': 'lit.: ',
      'colo.none': 'Nothing here. Try another word.',
      'reg.neutro': 'Neutral',
      'reg.informal': 'Informal',
      'reg.muy informal': 'Very informal',
      'reg.fuerte': 'Strong informal',
      'reg.vulgar': 'Vulgar',
      'reg.oral': 'Spoken',

      'review.title': 'Review',
      'review.intro': "The exercises you get wrong end up here, so they don't slip away.",
      'review.empty': 'Nothing to review yet.<br>Do a lesson and your mistakes will show up here.',
      'review.pending.one': '{n} exercise pending. The ones you get right disappear.',
      'review.pending.many': '{n} exercises pending. The ones you get right disappear.',
      'review.all': 'Review all',
      'review.label': 'Review',
      'review.lessonLabel': 'L{n}',

      'tag.social': 'social',
      'tag.café': 'café',
      'tag.comida': 'food',
      'tag.casa': 'home',
      'tag.transporte': 'transport',
      'tag.animales': 'animals',
      'tag.clima': 'weather',
      'tag.ropa': 'clothing',
      'tag.sentimientos': 'feelings',
      'tag.dinero': 'money',
      'tag.lugar': 'places',
      'tag.mente': 'mind',
      'tag.trabajo': 'work',
      'tag.sociedad': 'society',
      'tag.falsos amigos': 'false friends'
    }
  };

  function fmt(str, vars) {
    if (!vars) return str;
    return String(str).replace(/\{(\w+)\}/g, function (m, k) {
      return Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : m;
    });
  }

  function t(key, vars) {
    var table = UI[lang] || UI.es;
    var s = table[key];
    if (s === undefined) s = UI.es[key];
    if (s === undefined) return key;
    return fmt(s, vars);
  }

  function tp(key, n, vars) {
    var k = key + (Number(n) === 1 ? '.one' : '.many');
    var table = UI[lang] || UI.es;
    if (table[k] === undefined && UI.es[k] === undefined) k = key;
    var merged = vars || {};
    merged.n = n;
    return t(k, merged);
  }

  function tagLabel(tag) { return t('tag.' + tag); }
  function regLabel(reg) { return t('reg.' + reg); }

  /* ---------- contenido: sustituye solo los campos en español ---------- */

  function collectNorwegian(C) {
    var no = new Set();
    function add(s) { if (typeof s === 'string' && s.trim()) no.add(s); }
    function addExercise(e) {
      ['sentence', 'text', 'source', 'correct', 'audio'].forEach(function (k) { add(e[k]); });
      ['answers', 'bank', 'words'].forEach(function (k) {
        if (Array.isArray(e[k])) e[k].forEach(add);
      });
      if (Array.isArray(e.pairs)) e.pairs.forEach(function (p) { add(p.a); });
    }
    C.lessons.forEach(function (l) {
      add(l.title);
      l.text.forEach(function (p) { add(p.no); });
      l.vocab.forEach(function (v) { add(v.no); });
      l.phrases.forEach(function (p) { add(p.no); });
      if (l.grammar) l.grammar.examples.forEach(function (e) { add(e.no); });
      l.exercises.forEach(addExercise);
    });
    C.colloquial.forEach(function (c) {
      add(c.term);
      c.example.forEach(function (e) { add(e.no); add(e.who); });
    });
    C.fun.packs.forEach(function (p) {
      add(p.level);
      p.exercises.forEach(addExercise);
    });
    C.wordbank.forEach(function (w) { add(w.no); });
    C.verbs.forEach(function (v) {
      add(v.inf); add(v.present); add(v.past); add(v.perfect);
    });
    return no;
  }

  function localizeCourse(C) {
    if (lang !== 'en') return;
    var EN = window.EN_STRINGS || {};
    var NO = collectNorwegian(C);

    function tf(s) { return typeof s === 'string' && EN[s] ? EN[s] : s; }
    function to(s) { return (typeof s === 'string' && !NO.has(s) && EN[s]) ? EN[s] : s; }

    function localizeExercise(e) {
      if (typeof e.prompt === 'string') e.prompt = tf(e.prompt);
      if (typeof e.explain === 'string') e.explain = tf(e.explain);
      if (typeof e.es === 'string') e.es = tf(e.es);
      if (typeof e.hint === 'string') e.hint = tf(e.hint);
      if (Array.isArray(e.options)) e.options = e.options.map(to);
      if (Array.isArray(e.pairs)) e.pairs.forEach(function (p) {
        if (typeof p.b === 'string') p.b = tf(p.b);
      });
    }

    C.lessons.forEach(function (l) {
      if (l.imageAlt) l.imageAlt = tf(l.imageAlt);
      l.subtitle = tf(l.subtitle);
      if (Array.isArray(l.goals)) l.goals = l.goals.map(tf);
      l.text.forEach(function (p) { p.es = tf(p.es); });
      l.vocab.forEach(function (v) {
        v.es = tf(v.es);
        if (v.note) v.note = tf(v.note);
      });
      l.phrases.forEach(function (p) { p.es = tf(p.es); });
      l.tip = tf(l.tip);
      if (l.grammar) {
        l.grammar.title = tf(l.grammar.title);
        l.grammar.points = l.grammar.points.map(tf);
        l.grammar.examples.forEach(function (ex) { ex.es = tf(ex.es); });
      }
      l.exercises.forEach(localizeExercise);
    });

    C.colloquial.forEach(function (c) {
      c.literal = tf(c.literal);
      c.meaning = tf(c.meaning);
      c.tip = tf(c.tip);
      c.example.forEach(function (e) { e.es = tf(e.es); });
    });

    C.fun.intro = tf(C.fun.intro);
    C.fun.packs.forEach(function (p) {
      p.title = tf(p.title);
      p.subtitle = tf(p.subtitle);
      p.intro = tf(p.intro);
      p.exercises.forEach(localizeExercise);
    });

    C.wordbank.forEach(function (w) {
      w.es = tf(w.es);
      if (w.note) w.note = tf(w.note);
    });
    C.verbs.forEach(function (v) { v.es = tf(v.es); });
  }

  localizeCourse(window.COURSE || { lessons: [], fun: { packs: [] }, colloquial: [], wordbank: [], verbs: [] });

  /* ---------- textos estáticos del HTML ---------- */

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    [['meta[name="description"]', 'meta.description'],
     ['meta[property="og:title"]', 'meta.title'],
     ['meta[property="og:description"]', 'meta.ogDescription'],
     ['meta[property="og:image:alt"]', 'meta.ogAlt'],
     ['meta[name="twitter:title"]', 'meta.title'],
     ['meta[name="twitter:description"]', 'meta.ogDescription']].forEach(function (pair) {
      var el = document.querySelector(pair[0]);
      if (el) el.setAttribute('content', t(pair[1]));
    });
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.dataset.i18nTitle));
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      var active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLang(next) {
    if (next !== 'es' && next !== 'en') return;
    if (next === lang) return;
    try { localStorage.setItem(KEY, next); } catch (e) { /* modo privado */ }
    location.reload();
  }

  function bindSwitch() {
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
  }

  window.I18N = {
    lang: lang,
    t: t,
    tp: tp,
    tagLabel: tagLabel,
    regLabel: regLabel,
    setLang: setLang,
    applyStatic: applyStatic
  };

  applyStatic();
  bindSwitch();
})();
