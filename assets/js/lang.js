/* Norsk Kjekt — idioma de la interfaz y localización del contenido.
   ES es el idioma base; EN vive en content-en.js y FA (فارسی, de derecha a
   izquierda) en content-fa.js. El noruego nunca se traduce. */
(function () {
  'use strict';

  var KEY = 'norsk-kjekt-lang';
  var LANGS = { es: 'ltr', en: 'ltr', fa: 'rtl' };
  var lang = 'es';
  try {
    var saved = localStorage.getItem(KEY);
    if (saved && LANGS[saved]) lang = saved;
  } catch (e) { /* modo privado */ }

  var UI = {
    es: {
      'meta.title': 'Norsk Kjekt — aprende noruego de verdad',
      'meta.description': 'Curso de noruego bokmål A1–C2: 15 lecciones, 231 ejercicios, 6 conversaciones cotidianas, 6 packs de humor, tablas con audio y 4 simulacros de la Norskprøven.',
      'meta.ogDescription': '15 lecciones de bokmål (A1–C2), 231 ejercicios, 6 conversaciones con audio, 6 packs de humor, 18 expresiones de la calle y 4 simulacros de examen. Sin registro y sin build.',
      'meta.ogAlt': 'Norsk Kjekt: portal de noruego con ejercicios interactivos',
      'skip': 'Saltar al contenido',
      'nav.primary': 'Principal',
      'nav.lessons': 'Lecciones',
      'nav.dialogues': 'Samtaler',
      'nav.fun': 'Tull & tøys',
      'nav.colloquial': 'Coloquial',
      'nav.review': 'Repaso',
      'nav.exam': 'Examen',

      'exam.eyebrow': 'Norskprøven · simulacro no oficial',
      'exam.title': 'Simulacro de examen',
      'exam.homeText': 'Cuatro pruebas como en la Norskprøven oficial: lectura, audición, escritura y oral, con informe por destreza.',
      'exam.start': 'Empezar simulacro',
      'exam.startA1': 'Empezar por A1',
      'exam.totalTime': '≈ {n} min',
      'exam.startNow': 'Empezar',
      'exam.howtoTitle': 'Cómo funciona',
      'exam.levelsTitle': 'Elige nivel',
      'exam.levelsSub': 'uno por cada nivel del MCER',
      'exam.questions': '{n} preguntas',
      'exam.audio': '{n} audios',
      'exam.tasks': '{n} tareas',
      'exam.crumb': 'Exámenes',
      'exam.briefing': 'Estructura del simulacro',
      'exam.readMinutes': 'Lesing · {n} min',
      'exam.listenMinutes': 'Lytting · {n} min',
      'exam.writeMinutes': 'Skriving · {n} min',
      'exam.speakMinutes': 'Muntlig · {n} min',
      'exam.note': 'Nota: el examen real lo corrige HK-dir; aquí solo practicas.',
      'exam.part.reading': 'Leseprøve · comprensión lectora',
      'exam.part.listening': 'Lytteprøve · comprensión auditiva',
      'exam.part.writing': 'Skriveprøve · expresión escrita',
      'exam.part.speaking': 'Muntlig prøve · expresión oral',
      'exam.part.check': 'Autoevaluación',
      'exam.timeLeft': 'Tiempo restante',
      'exam.textN': 'Texto {n} de {total}',
      'exam.questionN': 'Pregunta {n} de {total}',
      'exam.taskN': 'Tarea {n} de {total}',
      'exam.prev': '← Anterior',
      'exam.next': 'Siguiente →',
      'exam.finishReading': 'Terminar lesing',
      'exam.finishListening': 'Terminar lytting',
      'exam.checkTitle': 'Autoevaluación',
      'exam.toSpeaking': 'Continuar a muntlig',
      'exam.seeReport': 'Ver informe',
      'exam.readNote': 'Lee el texto y elige una opción. Sin corrección hasta el final.',
      'exam.listenNote': 'Escucha el audio las veces que necesites y responde.',
      'exam.writeNote': 'Escribe en bokmål. Cuenta las palabras: el mínimo importa más que el máximo.',
      'exam.speakNote': 'Prepara la respuesta y habla en voz alta. No hay corrección automática.',
      'exam.words': '{n} palabras',
      'exam.noText': 'No has escrito nada en esta tarea.',
      'exam.wordsRange': 'Entre {min} y {max} palabras',
      'exam.model': 'Respuestas modelo',
      'exam.checkIntro': 'Marca lo que has conseguido. Sé sincero: el nivel orientativo depende de esto.',
      'exam.selfNote': 'autoevaluación',
      'exam.resultsTitle': 'Informe del simulacro',
      'exam.resultsSub': 'Nivel estimado por destreza, como en el prøvebevis oficial.',
      'exam.skillLabel': 'Destreza',
      'exam.scoreLabel': 'Puntos',
      'exam.levelLabel': 'Nivel',
      'exam.skill.reading': 'Lesing',
      'exam.skill.listening': 'Lytting',
      'exam.skill.writing': 'Skriving',
      'exam.skill.speaking': 'Muntlig',
      'exam.underLevel': 'Por debajo de {level}',
      'exam.reviewTitle': 'Revisión de respuestas',
      'exam.correctAnswer': 'Correcta',
      'exam.yourAnswer': 'Tu respuesta',
      'exam.noAnswer': 'Sin responder',
      'exam.retry': 'Repetir simulacro',
      'exam.back': 'Volver a exámenes',
      'exam.saved': 'Resultado guardado en este dispositivo · +{n} XP',
      'exam.timeUp': 'Se acabó el tiempo: pasamos a la siguiente prueba.',
      'exam.prep': 'Preparar · {s} s',
      'exam.speakNow': '🎙 Hablar · {s} s',
      'exam.speakDone': 'Listo',
      'audio.label': 'Audio',
      'audio.speed': 'Velocidad del audio',
      'hud.streak': 'Días seguidos practicando',
      'hud.xp': 'Puntos de experiencia',
      'lang.label': 'Idioma',
      'lang.switch': 'Cambiar idioma',
      'footer.tagline': 'bokmål A1–C2 · hecho para practicar un poco cada día.',
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

      'home.eyebrow': 'Bokmål · A1–C2 · sin prisa',
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
      'home.c1Title': 'C1 · argumentar y matizar',
      'home.c1Sub': 'debate, academia y precisión',
      'home.c2Title': 'C2 · leer entre líneas',
      'home.c2Sub': 'ironía, estilo y literatura',
      'home.funEyebrow': 'Nuevo · A1–B2',
      'home.funTitle': '¿Cansado de ser un alumno serio?',
      'home.funText': 'Alces en la lavadora, jefes que dicen «reto interesante» y una tabla de palabras que puedes ordenar, filtrar y escuchar. {n} ejercicios nuevos para aprender riéndote.',
      'home.funEnter': 'Entrar en Tull & tøys',
      'home.mix': '🎲 Mezcla aleatoria',
      'home.streetTitle': 'De la calle',
      'home.streetSub': 'sin diccionario',
      'home.seeExpressions.one': 'Ver la expresión →',
      'home.seeExpressions.many': 'Ver las {n} expresiones →',
      'home.dialogueEyebrow': 'Nuevo · A2–B1',
      'home.dialogueTitle': 'Samtaler: noruego de cada día',
      'home.dialogueText': '{n} conversaciones cotidianas con audio, traducciones y ejercicios. El noruego que oirás en el portal, en la cafetería o en la consulta del médico.',
      'home.dialogueEnter': 'Ver las conversaciones',
      'home.seeDialogues.one': 'Ver la conversación →',
      'home.seeDialogues.many': 'Ver las {n} conversaciones →',

      'dlg.eyebrow': 'Samtaler · A2–B1',
      'dlg.title': 'Conversaciones cotidianas',
      'dlg.intro': '{n} escenas para practicar el noruego que se habla de verdad: portal, cafetería, tienda, trabajo, médico y teléfono. Cada diálogo trae audio por réplica, traducciones y {exercises} ejercicios.',
      'dlg.progress': 'Has completado {done} de {total}.',
      'dlg.crumb': 'Samtaler',
      'dlg.cardNum': 'Samtale · {level}',
      'dlg.lines.one': '{n} réplica',
      'dlg.lines.many': '{n} réplicas',
      'dlg.dialogue': 'Diálogo',
      'dlg.showTranslations': 'Mostrar traducciones',
      'dlg.hideTranslations': 'Ocultar traducciones',
      'dlg.vocab': 'Palabras del diálogo',
      'dlg.phrases': 'Frases útiles',
      'dlg.tip': 'Consejo',
      'dlg.practice': 'Practica',
      'dlg.start': 'Hacer los {n} ejercicios',
      'dlg.best': 'Mejor resultado: {best}/{total}',
      'dlg.label': 'Samtale · {title}',
      'dlg.reviewLabel': 'Samtale · {level}',
      'dlg.a2Title': 'A2 · situaciones cotidianas',
      'dlg.a2Sub': 'portal, café y tienda',
      'dlg.b1Title': 'B1 · con más soltura',
      'dlg.b1Sub': 'trabajo, médico y teléfono',

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
      'meta.description': 'Norwegian bokmål course A1–C2: 15 lessons, 231 exercises, 6 everyday conversations, 6 humour packs, audio word tables and 4 Norskprøven mock exams.',
      'meta.ogDescription': '15 bokmål lessons (A1–C2), 231 interactive exercises, 6 conversations with audio, 6 humour packs, 18 street expressions and 4 mock exams. No sign-up, no build.',
      'meta.ogAlt': 'Norsk Kjekt: a Norwegian portal with interactive exercises',
      'skip': 'Skip to content',
      'nav.primary': 'Main',
      'nav.lessons': 'Lessons',
      'nav.dialogues': 'Dialogues',
      'nav.fun': 'Tull & tøys',
      'nav.colloquial': 'Street talk',
      'nav.review': 'Review',
      'nav.exam': 'Exam',

      'exam.eyebrow': 'Norskprøven · unofficial mock exam',
      'exam.title': 'Mock exam',
      'exam.homeText': 'Four tests like the official Norskprøven: reading, listening, writing and speaking, with a report per skill.',
      'exam.start': 'Start mock exam',
      'exam.startA1': 'Start with A1',
      'exam.totalTime': '≈ {n} min',
      'exam.startNow': 'Start',
      'exam.howtoTitle': 'How it works',
      'exam.levelsTitle': 'Choose a level',
      'exam.levelsSub': 'one for each CEFR level',
      'exam.questions': '{n} questions',
      'exam.audio': '{n} audio clips',
      'exam.tasks': '{n} tasks',
      'exam.crumb': 'Exams',
      'exam.briefing': 'Mock exam structure',
      'exam.readMinutes': 'Lesing · {n} min',
      'exam.listenMinutes': 'Lytting · {n} min',
      'exam.writeMinutes': 'Skriving · {n} min',
      'exam.speakMinutes': 'Muntlig · {n} min',
      'exam.note': 'Note: the real exam is marked by HK-dir; this is practice only.',
      'exam.part.reading': 'Leseprøve · reading comprehension',
      'exam.part.listening': 'Lytteprøve · listening comprehension',
      'exam.part.writing': 'Skriveprøve · written production',
      'exam.part.speaking': 'Muntlig prøve · oral production',
      'exam.part.check': 'Self-assessment',
      'exam.timeLeft': 'Time left',
      'exam.textN': 'Text {n} of {total}',
      'exam.questionN': 'Question {n} of {total}',
      'exam.taskN': 'Task {n} of {total}',
      'exam.prev': '← Previous',
      'exam.next': 'Next →',
      'exam.finishReading': 'Finish lesing',
      'exam.finishListening': 'Finish lytting',
      'exam.checkTitle': 'Self-assessment',
      'exam.toSpeaking': 'Continue to muntlig',
      'exam.seeReport': 'See report',
      'exam.readNote': 'Read the text and pick one option. No feedback until the end.',
      'exam.listenNote': 'Listen as many times as you need, then answer.',
      'exam.writeNote': 'Write in bokmål. Count your words: the minimum matters more than the maximum.',
      'exam.speakNote': 'Prepare your answer and speak aloud. There is no automatic marking.',
      'exam.words': '{n} words',
      'exam.noText': "You haven't written anything for this task.",
      'exam.wordsRange': 'Between {min} and {max} words',
      'exam.model': 'Model answers',
      'exam.checkIntro': 'Tick what you managed. Be honest: the estimated level depends on it.',
      'exam.selfNote': 'self-assessment',
      'exam.resultsTitle': 'Mock exam report',
      'exam.resultsSub': 'Estimated level per skill, as in the official prøvebevis.',
      'exam.skillLabel': 'Skill',
      'exam.scoreLabel': 'Score',
      'exam.levelLabel': 'Level',
      'exam.skill.reading': 'Lesing',
      'exam.skill.listening': 'Lytting',
      'exam.skill.writing': 'Skriving',
      'exam.skill.speaking': 'Muntlig',
      'exam.underLevel': 'Below {level}',
      'exam.reviewTitle': 'Answer review',
      'exam.correctAnswer': 'Correct',
      'exam.yourAnswer': 'Your answer',
      'exam.noAnswer': 'Not answered',
      'exam.retry': 'Retake the mock exam',
      'exam.back': 'Back to exams',
      'exam.saved': 'Result saved on this device · +{n} XP',
      'exam.timeUp': "Time's up: moving on to the next test.",
      'exam.prep': 'Prepare · {s}s',
      'exam.speakNow': '🎙 Speak · {s}s',
      'exam.speakDone': 'Ready',
      'audio.label': 'Audio',
      'audio.speed': 'Audio speed',
      'hud.streak': 'Consecutive days practising',
      'hud.xp': 'Experience points',
      'lang.label': 'Language',
      'lang.switch': 'Switch language',
      'footer.tagline': 'bokmål A1–C2 · made for a little practice every day.',
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

      'home.eyebrow': 'Bokmål · A1–C2 · no rush',
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
      'home.c1Title': 'C1 · argue and nuance',
      'home.c1Sub': 'debate, academia and precision',
      'home.c2Title': 'C2 · read between the lines',
      'home.c2Sub': 'irony, style and literature',
      'home.funEyebrow': 'New · A1–B2',
      'home.funTitle': 'Tired of being a serious student?',
      'home.funText': "Moose in the washing machine, bosses who say 'interesting challenge' and a word table you can sort, filter and listen to. {n} new exercises to learn while laughing.",
      'home.funEnter': 'Enter Tull & tøys',
      'home.mix': '🎲 Random mix',
      'home.streetTitle': 'From the street',
      'home.streetSub': 'no dictionary needed',
      'home.seeExpressions.one': 'See the expression →',
      'home.seeExpressions.many': 'See all {n} expressions →',
      'home.dialogueEyebrow': 'New · A2–B1',
      'home.dialogueTitle': 'Samtaler: everyday Norwegian',
      'home.dialogueText': '{n} everyday conversations with audio, translations and exercises. The Norwegian you will hear in the stairwell, at the café or at the doctor’s.',
      'home.dialogueEnter': 'See the conversations',
      'home.seeDialogues.one': 'See the conversation →',
      'home.seeDialogues.many': 'See all {n} conversations →',

      'dlg.eyebrow': 'Samtaler · A2–B1',
      'dlg.title': 'Everyday conversations',
      'dlg.intro': '{n} scenes to practise the Norwegian people actually speak: stairwell, café, shop, work, doctor and phone. Every dialogue has audio for each line, translations and {exercises} exercises.',
      'dlg.progress': 'You have completed {done} of {total}.',
      'dlg.crumb': 'Samtaler',
      'dlg.cardNum': 'Dialogue · {level}',
      'dlg.lines.one': '{n} line',
      'dlg.lines.many': '{n} lines',
      'dlg.dialogue': 'Dialogue',
      'dlg.showTranslations': 'Show translations',
      'dlg.hideTranslations': 'Hide translations',
      'dlg.vocab': 'Dialogue vocabulary',
      'dlg.phrases': 'Useful phrases',
      'dlg.tip': 'Tip',
      'dlg.practice': 'Practise',
      'dlg.start': 'Do the {n} exercises',
      'dlg.best': 'Best score: {best}/{total}',
      'dlg.label': 'Dialogue · {title}',
      'dlg.reviewLabel': 'Dialogue · {level}',
      'dlg.a2Title': 'A2 · everyday situations',
      'dlg.a2Sub': 'stairwell, café and shop',
      'dlg.b1Title': 'B1 · more confidence',
      'dlg.b1Sub': 'work, doctor and phone',

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
,

    fa: {
      'meta.title': "Norsk Kjekt — نروژی را واقعی یاد بگیر",
      'meta.description': "دوره زبان نروژی بوکمول A1–C2: ۱۵ درس، ۲۳۱ تمرین، ۶ گفت‌وگوی روزمره، ۶ بسته طنز، جدول‌های واژه با صدا و ۴ آزمون آزمایشی Norskprøven.",
      'meta.ogDescription': "۱۵ درس بوکمول (A1–C2)، ۲۳۱ تمرین تعاملی، ۶ گفت‌وگو با صدا، ۶ بسته طنز، ۱۸ اصطلاح خیابانی و ۴ آزمون آزمایشی. بدون ثبت‌نام و بدون build.",
      'meta.ogAlt': "Norsk Kjekt: پرتال نروژی با تمرین‌های تعاملی",
      'skip': "پرش به محتوا",
      'nav.primary': "اصلی",
      'nav.lessons': "درس‌ها",
      'nav.dialogues': "گفت‌وگوها",
      'nav.fun': "Tull & tøys",
      'nav.colloquial': "محاوره",
      'nav.review': "مرور",
      'nav.exam': "آزمون",
      'exam.eyebrow': "Norskprøven · آزمون آزمایشی غیررسمی",
      'exam.title': "آزمون آزمایشی",
      'exam.homeText': "چهار آزمون مانند Norskprøven رسمی: خواندن، شنیدن، نوشتن و گفتار، با گزارش برای هر مهارت.",
      'exam.start': "شروع آزمون آزمایشی",
      'exam.startA1': "شروع با A1",
      'exam.totalTime': "≈ {n} دقیقه",
      'exam.startNow': "شروع",
      'exam.howtoTitle': "چطور کار می‌کند",
      'exam.levelsTitle': "سطح را انتخاب کن",
      'exam.levelsSub': "یکی برای هر سطح CEFR",
      'exam.questions': "{n} پرسش",
      'exam.audio': "{n} فایل صوتی",
      'exam.tasks': "{n} تکلیف",
      'exam.crumb': "آزمون‌ها",
      'exam.briefing': "ساختار آزمون آزمایشی",
      'exam.readMinutes': "Lesing · {n} دقیقه",
      'exam.listenMinutes': "Lytting · {n} دقیقه",
      'exam.writeMinutes': "Skriving · {n} دقیقه",
      'exam.speakMinutes': "Muntlig · {n} دقیقه",
      'exam.note': "توجه: آزمون واقعی را HK-dir تصحیح می‌کند؛ اینجا فقط تمرین می‌کنی.",
      'exam.part.reading': "Leseprøve · درک خواندن",
      'exam.part.listening': "Lytteprøve · درک شنیدن",
      'exam.part.writing': "Skriveprøve · بیان نوشتاری",
      'exam.part.speaking': "Muntlig prøve · بیان گفتاری",
      'exam.part.check': "خودارزیابی",
      'exam.timeLeft': "زمان باقی‌مانده",
      'exam.textN': "متن {n} از {total}",
      'exam.questionN': "پرسش {n} از {total}",
      'exam.taskN': "تکلیف {n} از {total}",
      'exam.prev': "قبلی →",
      'exam.next': "← بعدی",
      'exam.finishReading': "پایان Lesing",
      'exam.finishListening': "پایان Lytting",
      'exam.checkTitle': "خودارزیابی",
      'exam.toSpeaking': "ادامه به Muntlig",
      'exam.seeReport': "دیدن گزارش",
      'exam.readNote': "متن را بخوان و یک گزینه را انتخاب کن. تا پایان تصحیحی نیست.",
      'exam.listenNote': "هر چند بار که لازم است گوش بده و پاسخ بده.",
      'exam.writeNote': "به بوکمول بنویس. شمار واژه‌ها مهم است: حداقل مهم‌تر از حداکثر است.",
      'exam.speakNote': "پاسخ را آماده کن و بلند حرف بزن. تصحیح خودکار وجود ندارد.",
      'exam.words': "{n} واژه",
      'exam.noText': "برای این تکلیف چیزی ننوشته‌ای.",
      'exam.wordsRange': "بین {min} و {max} واژه",
      'exam.model': "پاسخ‌های نمونه",
      'exam.checkIntro': "هر چه انجام داده‌ای را علامت بزن. صادق باش: سطح تقریبی به این بستگی دارد.",
      'exam.selfNote': "خودارزیابی",
      'exam.resultsTitle': "گزارش آزمون آزمایشی",
      'exam.resultsSub': "سطح تقریبی برای هر مهارت، مانند prøvebevis رسمی.",
      'exam.skillLabel': "مهارت",
      'exam.scoreLabel': "امتیاز",
      'exam.levelLabel': "سطح",
      'exam.skill.reading': "Lesing",
      'exam.skill.listening': "Lytting",
      'exam.skill.writing': "Skriving",
      'exam.skill.speaking': "Muntlig",
      'exam.underLevel': "پایین‌تر از {level}",
      'exam.reviewTitle': "بازبینی پاسخ‌ها",
      'exam.correctAnswer': "درست",
      'exam.yourAnswer': "پاسخ تو",
      'exam.noAnswer': "بی‌پاسخ",
      'exam.retry': "تکرار آزمون",
      'exam.back': "بازگشت به آزمون‌ها",
      'exam.saved': "نتیجه در این دستگاه ذخیره شد · +{n} امتیاز",
      'exam.timeUp': "زمان تمام شد: به بخش بعدی می‌رویم.",
      'exam.prep': "آماده‌سازی · {s} ثانیه",
      'exam.speakNow': "🎙 صحبت · {s} ثانیه",
      'exam.speakDone': "آماده",
      'audio.label': "صدا",
      'audio.speed': "سرعت صدا",
      'hud.streak': "روزهای پیاپی تمرین",
      'hud.xp': "امتیاز تجربه",
      'lang.label': "زبان",
      'lang.switch': "تغییر زبان",
      'footer.tagline': "بوکمول A1–C2 · ساخته‌شده برای کمی تمرین هر روز.",
      'footer.audio': "صدای عصبی از پیش ضبط‌شده به بوکمول (nb_NO). بدون حساب کاربری: پیشرفت شما روی همین دستگاه ذخیره می‌شود.",
      'say.listenNo': "به نروژی گوش بده",
      'say.title': "گوش دادن",
      'preview.order': "مرتب کن: ",
      'preview.cloze': "متن را کامل کن",
      'preview.listen': "دیکته: ",
      'preview.transform': "تبدیل کن: ",
      'preview.match.one': "جورکردن: {n} جفت",
      'preview.match.many': "جورکردن: {n} جفت",
      'preview.odd': "کدام اضافه است؟ ",
      'preview.fix': "خطا را پیدا کن: ",
      'preview.memory.one': "حافظه: {n} جفت",
      'preview.memory.many': "حافظه: {n} جفت",
      'ex.practice': "تمرین",
      'ex.correct': "✅ Riktig! (درست)",
      'ex.almost': "❌ نزدیک بود — پاسخ را ببین",
      'ex.seeResult': "دیدن نتیجه ←",
      'ex.next': "بعدی ←",
      'ex.listen': "▶ گوش بده",
      'ex.check': "بررسی",
      'ex.clear': "پاک کردن",
      'ex.yourSentence': "جمله تو…",
      'ex.writeWhatYouHear': "آنچه می‌شنوی بنویس…",
      'ex.writeYourSentence': "جمله تو…",
      'ex.answer': "پاسخ",
      'ex.missingWord': "واژه جاافتاده",
      'ex.gap': "جای خالی {n}",
      'ex.dictation': "دیکته",
      'ex.matchHint': "روی یک واژه از ستون اول بزن و بعد روی جفتش.",
      'ex.oddHint': "یکی از این واژه‌ها بدون دعوت به جشن آمده است.",
      'ex.fixHint': "روی واژهٔ اضافی یا نادرست بزن. فقط یکی است.",
      'ex.memoryHint': "روی دو کارت بزن. اگر جفت باشند، رو به بالا می‌مانند.",
      'ex.complete': "کامل شد!",
      'ex.choosePair': "حالا جفتش را انتخاب کن.",
      'ex.findPair': "حالا جفتش را پیدا کن.",
      'ex.chooseFirst': "اول یک واژه از ستون اول انتخاب کن.",
      'ex.remaining.one': "آفرین! {n} تا مانده.",
      'ex.remaining.many': "آفرین! {n} تا مانده.",
      'ex.remainingPairs.one': "آفرین! {n} جفت مانده.",
      'ex.remainingPairs.many': "آفرین! {n} جفت مانده.",
      'ex.tryAgain': "نزدیک بود. دوباره امتحان کن.",
      'ex.fixFound': "همان‌جا بود! جملهٔ درست پایین ظاهر می‌شود.",
      'ex.fixOther': "آن واژه درست است. اشتباه، واژه‌ای است که به سبز مشخص شده.",
      'ex.memoryPerfect': "حافظهٔ فیل!",
      'ex.memoryDone.one': "با {n} خطا کامل شد.",
      'ex.memoryDone.many': "با {n} خطا کامل شد.",
      'ex.cardUp': "کارت رو به بالا: {text}",
      'ex.cardDown': "کارت رو به پایین",
      'ex.cardN': "کارت {n} رو به پایین",
      'ex.defaultCloze': "متن را کامل کن:",
      'ex.defaultListen': "گوش بده و آنچه می‌شنوی بنویس:",
      'ex.defaultListenHint': "می‌توانی هر چند بار که می‌خواهی تکرارش کنی.",
      'ex.defaultTransform': "جمله را بازنویسی کن:",
      'ex.defaultMatch': "هر واژه را با جفتش جور کن:",
      'ex.defaultOdd': "کدام واژه جور درنمی‌آید؟",
      'ex.defaultFix': "خطا را پیدا کن و روی واژهٔ نادرست بزن:",
      'ex.defaultMemory': "حافظه: جفت‌ها را پیدا کن.",
      'ex.defaultGap': "جمله را کامل کن:",
      'ex.defaultOrder': "جمله را مرتب کن:",
      'ex.orderHint': "واژه‌ها را به ترتیب درست بزن.",
      'result.perfect': "Perfekt! فوق‌العاده بود. 🎉",
      'result.great': "Bra jobba! خیلی خوب، تقریباً یاد گرفتی.",
      'result.ok': "بد نیست. خطاها را تکرار کن تا جا بیفتد.",
      'result.low': "آرام باش: کسی در یک بعدازظهر نروژی یاد نمی‌گیرد. تکرار کن، خواهی دید.",
      'result.again': "تکرار",
      'result.reviewN': "مرور {n} تا",
      'result.continue': "ادامه",
      'result.finish': "تمام",
      'result.progress': "پیشرفت ذخیره شد · +{n} XP",
      'result.reviewSaved': "مرور ذخیره شد · +{n} XP",
      'home.eyebrow': "بوکمول · A1–C2 · بدون عجله",
      'home.title': "نروژی‌ای که <em>واقعاً</em> استفاده می‌شود.",
      'home.intro': "{lessons} درس، {exercises} تمرین که بیدرنگ اصلاح می‌کند، {packs} بسته طنز و جدولی از {words} واژه با صدا. نروژی خیابانی که در کتاب‌ها نمی‌آید.",
      'home.start': "شروع",
      'home.continue': "ادامه",
      'home.street': "دیدن محاوره",
      'home.streak': "پیاپی",
      'home.days.one': "روز",
      'home.days.many': "روز",
      'home.lessons': "درس‌ها",
      'home.of': "از {n}",
      'home.wordOfDay': "واژهٔ روز",
      'home.basicTitle': "قدم‌به‌قدم",
      'home.basicSub': "A1–A2 · پایه",
      'home.b1Title': "B1 · روان گفتن",
      'home.b1Sub': "از پس روزمرگی برمی‌آیی",
      'home.b2Title': "B2 · نظر دادن و بحث",
      'home.b2Sub': "متن‌های واقعی، ظرافت‌های بیشتر",
      'home.c1Title': "C1 · استدلال و ظرافت",
      'home.c1Sub': "مناظره، دانشگاه و دقت",
      'home.c2Title': "C2 · خواندن بین خطوط",
      'home.c2Sub': "طعنه، سبک و ادبیات",
      'home.funEyebrow': "جدید · A1–B2",
      'home.funTitle': "از شاگرد باوقار بودن خسته شده‌ای؟",
      'home.funText': "گوزن‌ها در ماشین لباسشویی، رئیس‌هایی که می‌گویند «چالش جالبی است» و جدول واژه‌هایی که می‌توانی مرتب کنی، پالایش کنی و گوش بدهی. {n} تمرین جدید برای یادگیری با خنده.",
      'home.funEnter': "ورود به Tull & tøys",
      'home.mix': "🎲 ترکیب تصادفی",
      'home.streetTitle': "خیابانی",
      'home.streetSub': "بدون فرهنگ لغت",
      'home.seeExpressions.one': "دیدن اصطلاح ←",
      'home.seeExpressions.many': "دیدن {n} اصطلاح ←",
      'home.dialogueEyebrow': "جدید · A2–B1",
      'home.dialogueTitle': "گفت‌وگوهای روزمره",
      'home.dialogueText': "{n} گفت‌وگوی روزمره با صدا، ترجمه و تمرین. نروژی‌ای که در راه‌پله، کافه یا مطب پزشک می‌شنوی.",
      'home.dialogueEnter': "دیدن گفت‌وگوها",
      'home.seeDialogues.one': "دیدن گفت‌وگو ←",
      'home.seeDialogues.many': "دیدن {n} گفت‌وگو ←",

      'dlg.eyebrow': "Samtaler · A2–B1",
      'dlg.title': "گفت‌وگوهای روزمره",
      'dlg.intro': "{n} صحنه برای تمرین نروژی واقعی: راه‌پله، کافه، فروشگاه، محل کار، مطب و تلفن. هر گفت‌وگو صدا برای هر جمله، ترجمه و {exercises} تمرین دارد.",
      'dlg.progress': "{done} از {total} را کامل کرده‌ای.",
      'dlg.crumb': "گفت‌وگوها",
      'dlg.cardNum': "گفت‌وگو · {level}",
      'dlg.lines.one': "{n} جمله",
      'dlg.lines.many': "{n} جمله",
      'dlg.dialogue': "گفت‌وگو",
      'dlg.showTranslations': "نمایش ترجمه‌ها",
      'dlg.hideTranslations': "پنهان کردن ترجمه‌ها",
      'dlg.vocab': "واژه‌های گفت‌وگو",
      'dlg.phrases': "جمله‌های کاربردی",
      'dlg.tip': "نکته",
      'dlg.practice': "تمرین",
      'dlg.start': "انجام {n} تمرین",
      'dlg.best': "بهترین نتیجه: {best}/{total}",
      'dlg.label': "گفت‌وگو · {title}",
      'dlg.reviewLabel': "گفت‌وگو · {level}",
      'dlg.a2Title': "A2 · موقعیت‌های روزمره",
      'dlg.a2Sub': "راه‌پله، کافه و فروشگاه",
      'dlg.b1Title': "B1 · روان‌تر",
      'dlg.b1Sub': "کار، پزشک و تلفن",
      'lesson.cardNum': "درس {n}",
      'lesson.new': "جدید",
      'lesson.exercises.one': "{n} تمرین",
      'lesson.exercises.many': "{n} تمرین",
      'lesson.crumb': "درس‌ها",
      'lesson.breadcrumb': "درس {n}",
      'lesson.text': "متن",
      'lesson.folded': "ترجمه تا‌شده",
      'lesson.showTranslation': "دیدن ترجمه",
      'lesson.hideTranslation': "پنهان کردن ترجمه",
      'lesson.grammar': "دستور زبان",
      'lesson.vocab': "واژگان",
      'lesson.phrases': "جمله‌های کلیدی",
      'lesson.tip': "نکته:",
      'lesson.practice': "تمرین",
      'lesson.start': "شروع تمرین · {n} تمرین",
      'lesson.best': "بهترین نتیجهٔ تو: {best}/{total}",
      'lesson.label': "درس {n}",
      'fun.eyebrow': "A1–B2 · بدون خجالت",
      'fun.mix': "🎲 ترکیب تصادفی · ۱۰",
      'fun.wordTable': "📚 جدول واژه‌ها",
      'fun.verbs': "🧩 فعل‌ها",
      'fun.newExercises': "تمرین‌های جدید",
      'fun.toLaugh': "برای خنده",
      'fun.wordsInTable': "واژه‌ها در جدول",
      'fun.withAudio': "با صدا",
      'fun.quoteBy': "— همه‌اش نروژی، همیشه",
      'fun.chooseChaos': "آشوبت را انتخاب کن",
      'fun.chooseChaosSub': "۶ بسته، هیچ جدیتی",
      'fun.tableTitle': "جدول واژه‌ها",
      'fun.tableNote': "{n} واژه · صدا هم دارد",
      'fun.tableIntro': "بر اساس سطح یا موضوع پالایش کن، ستون‌ها را مرتب کن و هر واژه را گوش بده. حالت آزمون را روشن کن تا ستون فارسی را بپوشانی و خودت را محک بزنی.",
      'fun.verbTitle': "جدول فعل‌ها",
      'fun.verbNote': "مضارع · گذشته · کامل",
      'fun.verbIntro': "آن ۱۴ فعلی که در سراسر دوره بیش از همه تکرار می‌شوند. شکل‌ها را پنهان کن و همانند یک آزمون شگفت‌زده بازگو کن.",
      'fun.searchWords': "جستجو در نروژی یا فارسی…",
      'fun.allTopics': "همهٔ موضوع‌ها",
      'fun.examMode': "حالت آزمون",
      'fun.all': "همه",
      'fun.colNo': "Norsk",
      'fun.colEs': "فارسی",
      'fun.colLevel': "سطح",
      'fun.colTag': "موضوع",
      'fun.noResults': "اینجا چیزی نیست. جستجوی دیگری امتحان کن یا پالایه را بردار.",
      'fun.wordCount.one': "{n} واژه از {total} · برای شنیدنش روی بلندگو بزن",
      'fun.wordCount.many': "{n} واژه از {total} · برای شنیدنش روی بلندگو بزن",
      'fun.wordCountHide': " · برای آشکار شدن فارسی روی یک ردیف بزن",
      'fun.searchLabel': "جستجوی واژه",
      'fun.filterLabel': "پالایش بر اساس موضوع",
      'fun.infinitive': "مصدر",
      'fun.present': "مضارع",
      'fun.past': "گذشته",
      'fun.perfect': "کامل",
      'fun.showForms': "نشان دادن شکل‌ها",
      'fun.hideForms': "پنهان کردن شکل‌ها",
      'fun.practice': "تمرین ←",
      'fun.verbTip': "نکته: در نروژی مضارع و گذشته برای همهٔ شخص‌ها یکسان است. فقط ضمیر عوض می‌شود. حالت کامل «har» + اسم‌مفعول است.",
      'fun.play': "بازی ←",
      'fun.newPack': "جدید",
      'fun.start': "شروع · {n} تمرین",
      'fun.best': "بهترین نتیجهٔ تو: {best}/{total}",
      'fun.back': "بازگشت به Tull",
      'fun.mixTitle': "ترکیب تصادفی",
      'fun.mixSub': "ده تمرین از همهٔ بسته‌ها، به ترتیبی غافلگیرکننده",
      'fun.mixIntro': "نمونه‌ای تصادفی از تمام این آشوب. هر بار که وارد شوی، عوض می‌شود. عالی برای گرم‌شدن پیش از یک درس جدی.",
      'fun.mixLabel': "Tull",
      'colo.title': "نروژی خیابانی، بدون فیلتر",
      'colo.intro': "این بوکمول واقعی است؛ همان که در پیام‌ها، کافه‌ها و گروه‌های واتساپ دیده می‌شود. به سطح رسمیِ زبان دقت کن: آنچه میان دوستان کاملاً طبیعی به نظر می‌رسد، در یک مصاحبه می‌تواند مصیبت باشد.",
      'colo.search': "جستجوی اصطلاح، معنی…",
      'colo.all': "همه",
      'colo.literal': "حرف‌به‌حرف: ",
      'colo.none': "اینجا چیزی نیست. واژهٔ دیگری امتحان کن.",
      'reg.neutro': "خنثی",
      'reg.informal': "غیررسمی",
      'reg.muy informal': "خیلی غیررسمی",
      'reg.fuerte': "غیررسمی شدید",
      'reg.vulgar': "رکیک",
      'reg.oral': "گفتاری",
      'review.title': "مرور",
      'review.intro': "تمرین‌هایی که اشتباه می‌کنی اینجا می‌افتند تا از دستشان ندهی.",
      'review.empty': "هنوز چیزی برای مرور نیست.<br>یک درس انجام بده؛ آنچه اشتباه کنی اینجا ظاهر می‌شود.",
      'review.pending.one': "{n} تمرین در انتظار است. آن‌هایی که درست پاسخ بدهی حذف می‌شوند.",
      'review.pending.many': "{n} تمرین در انتظار است. آن‌ها که درست پاسخ بدهی حذف می‌شوند.",
      'review.all': "مرور همه",
      'review.label': "مرور",
      'review.lessonLabel': "L{n}",
      'tag.social': "اجتماعی",
      'tag.café': "کافه",
      'tag.comida': "غذا",
      'tag.casa': "خانه",
      'tag.transporte': "ترابری",
      'tag.animales': "جانوران",
      'tag.clima': "آب‌وهوا",
      'tag.ropa': "پوشاک",
      'tag.sentimientos': "احساسات",
      'tag.dinero': "پول",
      'tag.lugar': "مکان",
      'tag.mente': "ذهن",
      'tag.trabajo': "کار",
      'tag.sociedad': "جامعه",
      'tag.falsos amigos': "دوستان کاذب"
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
    (C.dialogues || []).forEach(function (d) {
      d.lines.forEach(function (l) { add(l.no); add(l.who); });
      d.vocab.forEach(function (v) { add(v.no); });
      d.phrases.forEach(function (p) { add(p.no); });
      d.exercises.forEach(addExercise);
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

  function langStrings() {
    if (lang === 'en') return window.EN_STRINGS || {};
    if (lang === 'fa') return window.FA_STRINGS || {};
    return {};
  }

  function localizeCourse(C) {
    if (lang === 'es') return;
    var EN = langStrings();
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

    (C.dialogues || []).forEach(function (d) {
      if (d.imageAlt) d.imageAlt = tf(d.imageAlt);
      d.subtitle = tf(d.subtitle);
      d.intro = tf(d.intro);
      d.tip = tf(d.tip);
      d.lines.forEach(function (l) { l.es = tf(l.es); });
      d.vocab.forEach(function (v) { v.es = tf(v.es); });
      d.phrases.forEach(function (p) { p.es = tf(p.es); });
      d.exercises.forEach(localizeExercise);
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

    if (C.exam) {
      C.exam.intro = tf(C.exam.intro);
      C.exam.disclaimer = tf(C.exam.disclaimer);
      C.exam.howto = C.exam.howto.map(tf);
      C.exam.levels.forEach(function (lv) {
        lv.title = tf(lv.title);
        lv.blurb = tf(lv.blurb);
        lv.reading.texts.forEach(function (tx) {
          tx.questions.forEach(function (q) { q.explain = tf(q.explain); });
        });
        lv.listening.items.forEach(function (it) { it.explain = tf(it.explain); });
        lv.writing.tasks.forEach(function (tk) { tk.checklist = tk.checklist.map(tf); });
        lv.speaking.tasks.forEach(function (tk) { tk.checklist = tk.checklist.map(tf); });
      });
    }
  }

  localizeCourse(window.COURSE || { lessons: [], fun: { packs: [] }, colloquial: [], wordbank: [], verbs: [] });

  /* ---------- textos estáticos del HTML ---------- */

  function applyStatic() {
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGS[lang] || 'ltr';
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
    if (!LANGS[next]) return;
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
