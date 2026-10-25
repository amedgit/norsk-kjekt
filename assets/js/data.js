/* Norsk Kjekt — contenido del curso.
   Para añadir una lección: copia un objeto de "lessons", cámbialo y súbelo al array.
   Tipos de ejercicio: mcq | gap | order */

window.COURSE = {
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'hei',
      num: 1,
      emoji: '👋',
      level: 'A1',
      title: 'Hei! Bli kjent',
      subtitle: 'Saludar, presentarte y decir de dónde eres',
      goals: ['Saludar a cualquier hora', 'Decir tu nombre y tu origen', 'Usar «jeg er» y «jeg bor»'],
      text: [
        {
          no: 'Jeg heter Alex. Jeg er fra Spania, men nå bor jeg i Oslo.',
          es: 'Me llamo Alex. Soy de España, pero ahora vivo en Oslo.'
        },
        {
          no: 'Jeg jobber på en kafé og lærer norsk hver dag.',
          es: 'Trabajo en una cafetería y aprendo noruego cada día.'
        },
        {
          no: 'Om morgenen sier jeg «hei» til alle. Noen sier «hei hei».',
          es: 'Por la mañana saludo a todos con «hei». Algunos dicen «hei hei».'
        },
        {
          no: 'Det er veldig hyggelig. Men jeg snakker fortsatt som en turist.',
          es: 'Es muy agradable. Pero todavía hablo como un turista.'
        }
      ],
      vocab: [
        { no: 'hei', es: 'hola' },
        { no: 'heter', es: 'me llamo', note: 'jeg heter = me llamo' },
        { no: 'fra', es: 'de (origen)' },
        { no: 'bor', es: 'vivo (resido)', note: 'bo = vivir en un sitio' },
        { no: 'jobber', es: 'trabajo' },
        { no: 'hver dag', es: 'cada día' },
        { no: 'om morgenen', es: 'por la mañana' },
        { no: 'alle', es: 'todos' },
        { no: 'noen', es: 'algunos / alguien' },
        { no: 'hyggelig', es: 'agradable, simpático' },
        { no: 'veldig', es: 'muy' },
        { no: 'nå', es: 'ahora' }
      ],
      phrases: [
        { no: 'Hva heter du?', es: '¿Cómo te llamas?' },
        { no: 'Hyggelig å møte deg.', es: 'Encantado de conocerte.' },
        { no: 'Jeg kommer fra Spania.', es: 'Soy de España.' },
        { no: 'Jeg snakker litt norsk.', es: 'Hablo un poco de noruego.' }
      ],
      tip: 'Casi nadie espera que hables noruego, pero si dices «jeg lærer norsk» la conversación cambia por completo. Ojo con «hyggelig»: la «y» es una vocal que no existe en español — redondea los labios e intenta decir «i».',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué significa «hyggelig»?',
          options: ['Aburrido', 'Agradable, simpático', 'Cansado', 'Caro'],
          answer: 1,
          explain: 'Es una de las palabras más noruegas que existen. Se usa para personas, planes, casas... todo lo que da buena vibra.'
        },
        {
          type: 'mcq',
          prompt: '¿Cómo dices «Me llamo Alex»?',
          options: ['Jeg er Alex', 'Jeg heter Alex', 'Jeg har Alex', 'Jeg bor Alex'],
          answer: 1,
          explain: '«Å hete» = llamarse. «Jeg er Alex» se entiende, pero suena a que estás describiendo quién eres, no tu nombre.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el verbo correcto:',
          sentence: 'Jeg ___ fra Spania.',
          answers: ['er'],
          bank: ['er', 'bor', 'heter'],
          es: 'Soy de España.',
          explain: '«Er» viene de «å være» (ser/estar): jeg er, du er, han/hun er.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el verbo correcto:',
          sentence: 'Nå ___ jeg i Oslo.',
          answers: ['bor'],
          bank: ['bor', 'er', 'lærer'],
          es: 'Ahora vivo en Oslo.',
          explain: '«Å bo» = residir. No lo confundas con «å leve», que es estar vivo.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Jeg', 'lærer', 'norsk', 'hver', 'dag.'],
          es: 'Aprendo noruego cada día.',
          explain: 'En noruego el verbo ocupa la segunda posición: sujeto + verbo + el resto.'
        },
        {
          type: 'order',
          prompt: 'Ordena la pregunta:',
          words: ['Hva', 'heter', 'du?'],
          es: '¿Cómo te llamas?',
          explain: 'En las preguntas el verbo va antes del sujeto. El signo de interrogación solo se escribe al final.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'kafe',
      num: 2,
      emoji: '☕',
      level: 'A1',
      title: 'På kafé',
      subtitle: 'Pedir, preguntar precios y despedirte como un local',
      goals: ['Pedir con «kan jeg få»', 'Entender el precio', 'Despedirte con «takk for meg»'],
      text: [
        {
          no: 'Det er tirsdag morgen. Alex står i kø på kafeen.',
          es: 'Es martes por la mañana. Alex hace cola en la cafetería.'
        },
        {
          no: '«Hei! Hva skal det være?» spør damen bak disken.',
          es: '«¡Hola! ¿Qué te pongo?» pregunta la mujer detrás del mostrador.'
        },
        {
          no: '«En kaffe, takk. Og en kanelsnurr,» sier Alex.',
          es: '«Un café, por favor. Y un rollo de canela», dice Alex.'
        },
        {
          no: '«Vil du ha melk i kaffen?» «Ja, takk. Hvor mye koster det?»',
          es: '«¿Quieres leche en el café?» «Sí, por favor. ¿Cuánto cuesta?»'
        },
        {
          no: '«Det blir åtti kroner.» Alex betaler med kort og sier «takk for meg».',
          es: '«Son ochenta coronas.» Alex paga con tarjeta y dice «gracias y hasta luego».'
        },
        {
          no: 'Kaffen er varm, bollen er søt, og livet er ganske bra.',
          es: 'El café está caliente, el bollo está dulce y la vida es bastante buena.'
        }
      ],
      vocab: [
        { no: 'kafé', es: 'cafetería' },
        { no: 'står i kø', es: 'hace cola' },
        { no: 'hva skal det være?', es: '¿qué te pongo?', note: 'lo dice el camarero' },
        { no: 'kanelsnurr', es: 'rollo de canela' },
        { no: 'vil du ha', es: '¿quieres?' },
        { no: 'melk', es: 'leche' },
        { no: 'hvor mye koster det?', es: '¿cuánto cuesta?' },
        { no: 'det blir', es: 'son / sale (el total)' },
        { no: 'betaler', es: 'paga' },
        { no: 'kort', es: 'tarjeta' },
        { no: 'takk for meg', es: 'gracias y hasta luego', note: 'al irte' },
        { no: 'varm', es: 'caliente' },
        { no: 'søt', es: 'dulce' },
        { no: 'ganske', es: 'bastante' }
      ],
      phrases: [
        { no: 'Kan jeg få en kaffe, takk?', es: '¿Me das un café, por favor?' },
        { no: 'Hvor mye koster det?', es: '¿Cuánto cuesta?' },
        { no: 'Takk for meg.', es: 'Gracias y hasta luego (al irte).' },
        { no: 'Kos deg!', es: '¡Disfruta!' }
      ],
      tip: 'No traduzcas «por favor» literalmente: en noruego «takk» hace ese trabajo al pedir. «Vær så snill» existe, pero suena a súplica insistente.',
      exercises: [
        {
          type: 'gap',
          prompt: 'Completa el pedido:',
          sentence: 'Kan jeg få en kaffe, ___?',
          answers: ['takk'],
          bank: ['takk', 'vær så snill', 'unnskyld'],
          es: '¿Me das un café, por favor?',
          explain: '«Takk» al final del pedido es el «por favor» noruego. Suena educado y natural.'
        },
        {
          type: 'mcq',
          prompt: 'Entras en una cafetería y quieres pedir. ¿Qué dices?',
          options: [
            'Kan jeg få en kaffe, takk?',
            'Hvor mye er du?',
            'Jeg trenger kaffe nå.',
            'Kaffen er kald.'
          ],
          answer: 0,
          explain: 'La fórmula mágica: «Kan jeg få» + cosa + «takk». Sirve en cafeterías, bares y tiendas.'
        },
        {
          type: 'mcq',
          prompt: '«Hvor mye koster det?» significa:',
          options: ['¿Dónde está?', '¿Cuánto cuesta?', '¿Qué es esto?', '¿Cuándo abre?'],
          answer: 1,
          explain: '«Å koste» = costar. «Hvor mye» = cuánto.'
        },
        {
          type: 'gap',
          prompt: 'Completa la preposición:',
          sentence: 'Jeg betaler ___ kort.',
          answers: ['med'],
          bank: ['med', 'i', 'på'],
          es: 'Pago con tarjeta.',
          explain: '«Med» = con (instrumento). «På kort» no se usa.'
        },
        {
          type: 'order',
          prompt: 'Ordena la oferta:',
          words: ['Vil', 'du', 'ha', 'melk', 'i', 'kaffen?'],
          es: '¿Quieres leche en el café?',
          explain: '«Vil du ha...?» es la forma estándar de ofrecer algo.'
        },
        {
          type: 'order',
          prompt: 'Ordena la respuesta del camarero:',
          words: ['Det', 'blir', 'åtti', 'kroner.'],
          es: 'Son ochenta coronas.',
          explain: '«Det blir...» es como se dice el total en voz alta. Memorízalo: lo vas a oír siempre.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'butikk',
      num: 3,
      emoji: '🛒',
      level: 'A2',
      title: 'På butikken',
      subtitle: 'Comprar, preguntar dónde está algo y salir sin bolsa',
      goals: ['Pedir ayuda en una tienda', 'Usar «ved siden av»', 'Responder en la caja'],
      text: [
        {
          no: 'Alex handler i butikken. Han trenger brød, melk og ost.',
          es: 'Alex está comprando en la tienda. Necesita pan, leche y queso.'
        },
        {
          no: '«Unnskyld, hvor finner jeg osten?» spør han.',
          es: '«Perdón, ¿dónde encuentro el queso?», pregunta.'
        },
        {
          no: '«Den er i kjøleskapet, ved siden av smøret,» sier en ansatt.',
          es: '«Está en la nevera, al lado de la mantequilla», dice un empleado.'
        },
        {
          no: 'Alex tar en ost, to liter melk og et brød.',
          es: 'Alex coge un queso, dos litros de leche y un pan.'
        },
        {
          no: 'I kassen sier han: «Nei, jeg trenger ikke pose.»',
          es: 'En la caja dice: «No, no necesito bolsa».'
        },
        {
          no: 'Det koster hundre og tjue kroner. «Ha en fin dag!» sier damen i kassen.',
          es: 'Cuesta ciento veinte coronas. «¡Que tengas un buen día!», dice la mujer de la caja.'
        }
      ],
      vocab: [
        { no: 'butikk', es: 'tienda' },
        { no: 'handler', es: 'compra (hace la compra)' },
        { no: 'trenger', es: 'necesito' },
        { no: 'brød', es: 'pan' },
        { no: 'ost', es: 'queso' },
        { no: 'unnskyld', es: 'perdón, disculpe' },
        { no: 'hvor finner jeg', es: '¿dónde encuentro...?' },
        { no: 'kjøleskap', es: 'nevera' },
        { no: 'ved siden av', es: 'al lado de' },
        { no: 'smør', es: 'mantequilla' },
        { no: 'kasse', es: 'caja (del supermercado)' },
        { no: 'pose', es: 'bolsa' },
        { no: 'ha en fin dag', es: 'que tengas un buen día' }
      ],
      phrases: [
        { no: 'Unnskyld, hvor er ...?', es: 'Perdón, ¿dónde está...?' },
        { no: 'Jeg trenger ikke pose.', es: 'No necesito bolsa.' },
        { no: 'Kan jeg betale med kort?', es: '¿Puedo pagar con tarjeta?' },
        { no: 'Ha en fin dag!', es: '¡Que tengas un buen día!' }
      ],
      tip: 'En la caja te preguntarán «Trenger du pose?». Respuesta rápida y educada: «Nei, takk» o «Ja, takk». Y si te desean buen día, se contesta «Takk, i like måte!» (igualmente).',
      exercises: [
        {
          type: 'gap',
          prompt: 'Completa la pregunta:',
          sentence: 'Unnskyld, hvor ___ jeg osten?',
          answers: ['finner'],
          bank: ['finner', 'koster', 'trenger'],
          es: 'Perdón, ¿dónde encuentro el queso?',
          explain: '«Å finne» = encontrar. «Hvor finner jeg...?» funciona para cualquier producto.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué es una «pose»?',
          options: ['Un bolso de mano', 'Una bolsa (de plástico)', 'Un puesto del mercado', 'Una caja registradora'],
          answer: 1,
          explain: 'En Noruega las bolsas se pagan, así que la pregunta «Trenger du pose?» es constante.'
        },
        {
          type: 'gap',
          prompt: 'Completa la expresión de lugar:',
          sentence: 'Osten er ___ siden av smøret.',
          answers: ['ved'],
          bank: ['ved', 'på', 'i'],
          es: 'El queso está al lado de la mantequilla.',
          explain: '«Ved siden av» = al lado de. Es una fórmula fija, no se cambia la preposición.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Jeg', 'trenger', 'ikke', 'pose.'],
          es: 'No necesito bolsa.',
          explain: 'La negación «ikke» va después del verbo: «trenger ikke».'
        },
        {
          type: 'mcq',
          prompt: 'Quieres disculparte por molestar a alguien en la tienda. Dices:',
          options: ['Unnskyld', 'Takk', 'Vær så god', 'Ha det'],
          answer: 0,
          explain: '«Unnskyld» = perdón/disculpe. «Ha det» es adiós y «vær så god» es aquí tiene.'
        },
        {
          type: 'order',
          prompt: 'Ordena la despedida:',
          words: ['Ha', 'en', 'fin', 'dag!'],
          es: '¡Que tengas un buen día!',
          explain: 'Se dice al salir de tiendas y cafeterías. Se responde «Takk, i like måte!».'
        }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'buss',
      num: 4,
      emoji: '🚌',
      level: 'A2',
      title: 'På bussen',
      subtitle: 'Billetes, asientos y entender las paradas',
      goals: ['Comprar un billete', 'Pedir o ceder un asiento', 'Reconocer «neste stopp»'],
      text: [
        {
          no: 'Alex skal til sentrum. Han tar bussen.',
          es: 'Alex va al centro. Coge el autobús.'
        },
        {
          no: '«Hei, kan jeg kjøpe en billett?» «Ja, trettini kroner.»',
          es: '«Hola, ¿puedo comprar un billete?» «Sí, treinta y nueve coronas.»'
        },
        {
          no: 'Alex setter seg ned. En eldre dame spør: «Er dette setet ledig?»',
          es: 'Alex se sienta. Una señora mayor pregunta: «¿Está libre este asiento?»'
        },
        {
          no: '«Ja, vær så god.» Bussen stopper ved Jernbanetorget.',
          es: '«Sí, adelante.» El autobús para en Jernbanetorget.'
        },
        {
          no: '«Neste stopp er Majorstuen,» sier en stemme.',
          es: '«La próxima parada es Majorstuen», dice una voz.'
        },
        {
          no: 'Alex går av på riktig stopp — denne gangen.',
          es: 'Alex se baja en la parada correcta — esta vez.'
        }
      ],
      vocab: [
        { no: 'buss', es: 'autobús' },
        { no: 'trikk', es: 'tranvía' },
        { no: 'sentrum', es: 'centro (de la ciudad)' },
        { no: 'billett', es: 'billete' },
        { no: 'kjøpe', es: 'comprar' },
        { no: 'setter seg ned', es: 'se sienta' },
        { no: 'eldre', es: 'mayor (de edad)' },
        { no: 'ledig', es: 'libre, disponible' },
        { no: 'opptatt', es: 'ocupado' },
        { no: 'vær så god', es: 'aquí tiene / adelante' },
        { no: 'neste stopp', es: 'próxima parada' },
        { no: 'går av', es: 'se baja (del transporte)' },
        { no: 'riktig', es: 'correcto' },
        { no: 'denne gangen', es: 'esta vez' }
      ],
      phrases: [
        { no: 'Kan jeg kjøpe en billett?', es: '¿Puedo comprar un billete?' },
        { no: 'Er dette setet ledig?', es: '¿Está libre este asiento?' },
        { no: 'Jeg skal til sentrum.', es: 'Voy al centro.' },
        { no: 'Neste stopp er ...', es: 'La próxima parada es ...' }
      ],
      tip: 'En Oslo el billete sencillo ronda las 40 coronas y se compra en la app de Ruter. «Neste stopp» significa que la siguiente es la tuya: aún no te has pasado. Cuando suena, pulsas el botón y te preparas.',
      exercises: [
        {
          type: 'gap',
          prompt: 'Completa el verbo:',
          sentence: 'Kan jeg ___ en billett?',
          answers: ['kjøpe'],
          bank: ['kjøpe', 'koste', 'gå'],
          es: '¿Puedo comprar un billete?',
          explain: '«Å kjøpe» = comprar; «å koste» = costar. Se parecen, pero no son lo mismo.'
        },
        {
          type: 'mcq',
          prompt: '«Er dette setet ledig?» significa:',
          options: ['¿Está ocupado este asiento?', '¿Está libre este asiento?', '¿Es este tu asiento?', '¿Dónde está el asiento?'],
          answer: 1,
          explain: '«Ledig» = libre/disponible. Su opuesto es «opptatt» (ocupado).'
        },
        {
          type: 'gap',
          prompt: 'Completa la partícula:',
          sentence: 'Alex går ___ på riktig stopp.',
          answers: ['av'],
          bank: ['av', 'ut', 'ned'],
          es: 'Alex se baja en la parada correcta.',
          explain: '«Å gå av» = bajarse del transporte. «Å gå ut» es salir de un sitio.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Jeg', 'skal', 'til', 'sentrum.'],
          es: 'Voy al centro.',
          explain: '«Skal til» + lugar = ir a un sitio. Muy frecuente: «Jeg skal til byen».'
        },
        {
          type: 'mcq',
          prompt: 'Alguien te cede el paso y dice «Vær så god». Significa:',
          options: ['De nada', 'Aquí tiene / adelante', 'Lo siento', 'Buen viaje'],
          answer: 1,
          explain: 'Es la fórmula al ofrecer o entregar algo. También se usa al responder a «takk» en una tienda.'
        },
        {
          type: 'order',
          prompt: 'Ordena el aviso del autobús:',
          words: ['Neste', 'stopp', 'er', 'Majorstuen.'],
          es: 'La próxima parada es Majorstuen.',
          explain: 'Lo oirás en bucle en buses y tranvías de Oslo.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'vaer',
      num: 5,
      emoji: '🌧️',
      level: 'A2',
      title: 'Været og småprat',
      subtitle: 'Small talk noruego: el clima como salvavidas social',
      goals: ['Hablar del tiempo', 'Usar «for et ...!»', 'Sobrevivir a una conversación en el tranvía'],
      text: [
        {
          no: 'Det regner i Oslo. Igjen.',
          es: 'Llueve en Oslo. Otra vez.'
        },
        {
          no: 'Alex står på trikken og ser ut av vinduet.',
          es: 'Alex va en el tranvía y mira por la ventana.'
        },
        {
          no: '«Fy søren, for et vær!» sier mannen ved siden av.',
          es: '«¡Caramba, qué tiempo!», dice el hombre de al lado.'
        },
        {
          no: '«Ja, det regner hele tiden,» sier Alex.',
          es: '«Sí, no para de llover», dice Alex.'
        },
        {
          no: '«Men det blir bedre i mai,» sier mannen optimistisk.',
          es: '«Pero mejora en mayo», dice el hombre, optimista.'
        },
        {
          no: 'Nordmenn snakker ikke mye på trikken, men de snakker alltid om været.',
          es: 'Los noruegos no hablan mucho en el tranvía, pero siempre hablan del tiempo.'
        }
      ],
      vocab: [
        { no: 'vær', es: 'tiempo (clima)' },
        { no: 'regner', es: 'llueve' },
        { no: 'snør', es: 'nieva' },
        { no: 'blåser', es: 'hace viento' },
        { no: 'igjen', es: 'otra vez' },
        { no: 'trikk', es: 'tranvía' },
        { no: 'hele tiden', es: 'todo el tiempo' },
        { no: 'blir bedre', es: 'mejora' },
        { no: 'mai', es: 'mayo' },
        { no: 'håper', es: 'espero' },
        { no: 'ler', es: 'se ríe' },
        { no: 'snakker', es: 'habla' },
        { no: 'for et vær', es: 'qué tiempo (de malo)' }
      ],
      phrases: [
        { no: 'For et vær!', es: '¡Qué tiempo!' },
        { no: 'Det regner hele tiden.', es: 'Llueve todo el tiempo.' },
        { no: 'Det blir bedre i mai.', es: 'Mejora en mayo.' },
        { no: 'Jeg håper det.', es: 'Eso espero.' }
      ],
      tip: 'El clima es el tema social universal. Un «Fy søren, for et vær!» abre conversaciones en la parada del bus. Y sí, existe el dicho: «det finnes ikke dårlig vær, bare dårlige klær».',
      exercises: [
        {
          type: 'gap',
          prompt: 'Completa el verbo:',
          sentence: 'Det ___ i Oslo igjen.',
          answers: ['regner'],
          bank: ['regner', 'snør', 'blåser'],
          es: 'En Oslo llueve otra vez.',
          explain: '«Å regne» = llover; «å snø» = nevar; «å blåse» = hacer viento.'
        },
        {
          type: 'mcq',
          prompt: '¿De qué hablan los noruegos con desconocidos en el transporte?',
          options: ['Del tiempo', 'De política', 'De su sueldo', 'De fútbol americano'],
          answer: 0,
          explain: 'El «vær» es el tema seguro. Si no sabes de qué hablar, empieza por ahí.'
        },
        {
          type: 'gap',
          prompt: 'Completa la preposición:',
          sentence: 'Det blir bedre ___ mai.',
          answers: ['i'],
          bank: ['i', 'på', 'til'],
          es: 'Mejora en mayo.',
          explain: 'Meses y años llevan «i»: i mai, i januar. Los días llevan «på»: på mandag.'
        },
        {
          type: 'order',
          prompt: 'Ordena la exclamación:',
          words: ['For', 'et', 'vær!'],
          es: '¡Qué tiempo!',
          explain: 'Estructura «For et + sustantivo!» = ¡Qué ...! También «For en dag!».'
        },
        {
          type: 'mcq',
          prompt: '«Fy søren!» expresa:',
          options: ['Sorpresa o fastidio leve', 'Agradecimiento', 'Una disculpa', 'Una despedida'],
          answer: 0,
          explain: 'Es un eufemismo suave de «fy faen». Perfecto para quejarse del tiempo sin resultar vulgar.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Det', 'regner', 'hele', 'tiden.'],
          es: 'Llueve todo el tiempo.',
          explain: '«Hele tiden» = todo el tiempo. También «hele dagen» (todo el día) y «hele uka» (toda la semana).'
        }
      ]
    }
  ],

  /* -------------------------------------------------------------------- */
  colloquial: [
    {
      term: 'Hei hei',
      literal: 'hola hola',
      meaning: 'Saludo doble, más cálido que un simple «hei».',
      register: 'informal',
      example: [
        { who: 'A', no: 'Hei hei! Så hyggelig å se deg.', es: '¡Hola hola! Qué alegría verte.' },
        { who: 'B', no: 'Hei! Lenge siden.', es: '¡Hola! Cuánto tiempo.' }
      ],
      tip: 'Duplicar el saludo lo hace cercano. «Hei» solo es neutro; «hei hei» es amistoso.'
    },
    {
      term: 'Morn',
      literal: '(saludo del norte)',
      meaning: 'Hola informal, típico de Trøndelag y del norte.',
      register: 'muy informal',
      example: [
        { who: 'A', no: 'Morn du! Alt bra?', es: '¡Hola! ¿Todo bien?' },
        { who: 'B', no: 'Morn, bare bra.', es: 'Hola, todo bien.' }
      ],
      tip: 'No lo uses en una entrevista de trabajo, pero con vecinos y en el bar funciona perfecto.'
    },
    {
      term: 'Kos deg',
      literal: 'disfrútate',
      meaning: 'Disfruta, pásalo bien. También «kos dere» en plural.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Kos deg med kaffen!', es: '¡Disfruta el café!' },
        { who: 'B', no: 'Takk, det skal jeg.', es: 'Gracias, eso haré.' }
      ],
      tip: 'De la misma familia: «koselig» = acogedor. Es el «hygge» noruego.'
    },
    {
      term: 'Kult',
      literal: 'culto → cool',
      meaning: 'Guay, chulo.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Jeg har fått ny jobb!', es: '¡He conseguido trabajo nuevo!' },
        { who: 'B', no: 'Så kult!', es: '¡Qué guay!' }
      ],
      tip: 'Los jóvenes también dicen «sjukt» para algo increíble, y «dritbra» para algo buenísimo.'
    },
    {
      term: 'Dritbra',
      literal: '"mierda buena"',
      meaning: 'Buenísimo, genial.',
      register: 'fuerte',
      example: [
        { who: 'A', no: 'Hvordan var filmen?', es: '¿Qué tal la peli?' },
        { who: 'B', no: 'Dritbra!', es: '¡Buenísima!' }
      ],
      tip: '«Drit-» intensifica mucho, pero es vulgar. Con desconocidos mayores, usa «kjempebra».'
    },
    {
      term: 'Kjempebra',
      literal: 'gigante-bueno',
      meaning: 'Genial, buenísimo (versión fina).',
      register: 'informal',
      example: [
        { who: 'A', no: 'Jeg klarte testen!', es: '¡Aprobé el examen!' },
        { who: 'B', no: 'Kjempebra jobba!', es: '¡Buenísimo trabajo!' }
      ],
      tip: '«Kjempe-» es el intensificador familiar: kjempegøy, kjempegod, kjempefint.'
    },
    {
      term: 'Fy søren!',
      literal: '(eufemismo de fy faen)',
      meaning: '¡Caramba! ¡Vaya! Sorpresa o fastidio leve.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Fy søren, så dyrt!', es: '¡Caramba, qué caro!' },
        { who: 'B', no: 'Ja, helt sykt.', es: 'Sí, una locura.' }
      ],
      tip: 'Es la versión fina de «fy faen». Puedes decirla delante de niños sin problema.'
    },
    {
      term: 'Fy faen',
      literal: '"¡puñetera!"',
      meaning: '¡Joder! Sorpresa fuerte o enfado.',
      register: 'vulgar',
      example: [
        { who: 'A', no: 'Fy faen, jeg glemte nøklene!', es: '¡Joder, me olvidé las llaves!' },
        { who: 'B', no: 'Igjen?', es: '¿Otra vez?' }
      ],
      tip: 'Se oye mucho en la calle, pero no en contextos formales ni con gente mayor.'
    },
    {
      term: 'Herlig!',
      literal: 'glorioso',
      meaning: '¡Qué bien! ¡Genial! Alegría tranquila.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Vi ses klokka sju.', es: 'Nos vemos a las siete.' },
        { who: 'B', no: 'Herlig, da sees vi.', es: 'Genial, entonces nos vemos.' }
      ],
      tip: 'También describe algo rico o bonito: «en herlig dag», «herlig mat».'
    },
    {
      term: 'Slapp av',
      literal: 'suelta (relájate)',
      meaning: 'Relájate, tranquilo.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Beklager, jeg er sen!', es: '¡Perdón, llego tarde!' },
        { who: 'B', no: 'Slapp av, det går bra.', es: 'Tranquilo, no pasa nada.' }
      ],
      tip: 'El verbo es «å slappe av»: «jeg slapper av» = estoy descansando.'
    },
    {
      term: 'Skjerp deg',
      literal: 'afílate',
      meaning: 'Ponte las pilas, no hagas el tonto.',
      register: 'fuerte',
      example: [
        { who: 'A', no: 'Jeg gidder ikke i dag.', es: 'Hoy no me apetece.' },
        { who: 'B', no: 'Skjerp deg, vi kommer for sent.', es: 'Ponte las pilas, llegamos tarde.' }
      ],
      tip: 'Es un reproche directo. Entre amigos; con un jefe, ni de broma.'
    },
    {
      term: 'Liksom',
      literal: '"así como"',
      meaning: 'Tipo, o sea (muletilla).',
      register: 'oral',
      example: [
        { who: 'A', no: 'Det er liksom ikke så lett.', es: 'Es como que no es tan fácil.' },
        { who: 'B', no: 'Nei, jeg skjønner.', es: 'No, lo entiendo.' }
      ],
      tip: 'Es el «like» inglés. No abuses: en exceso suena muy juvenil.'
    },
    {
      term: 'Altså',
      literal: 'por lo tanto',
      meaning: 'O sea, pues, es que (muletilla).',
      register: 'oral',
      example: [
        { who: 'A', no: 'Altså, jeg vet ikke helt.', es: 'Es que no sé muy bien.' },
        { who: 'B', no: 'Ta deg god tid.', es: 'Tómate tu tiempo.' }
      ],
      tip: 'Puede abrir frase («Altså, ...») o cerrarla («... altså»). Muy noruego.'
    },
    {
      term: 'Det går bra',
      literal: 'va bien',
      meaning: 'No pasa nada, está bien.',
      register: 'neutro',
      example: [
        { who: 'A', no: 'Beklager at jeg er sen.', es: 'Perdón por llegar tarde.' },
        { who: 'B', no: 'Det går bra.', es: 'No pasa nada.' }
      ],
      tip: 'Respuesta estándar a una disculpa. Para «de nada» se usa «bare hyggelig».'
    },
    {
      term: 'Bare hyggelig',
      literal: 'solo agradable',
      meaning: 'De nada (con gusto).',
      register: 'neutro',
      example: [
        { who: 'A', no: 'Takk for hjelpen!', es: '¡Gracias por la ayuda!' },
        { who: 'B', no: 'Bare hyggelig.', es: 'De nada.' }
      ],
      tip: 'También se dice al ofrecer ayuda: «Bare hyggelig, jeg har tid».'
    },
    {
      term: 'Jeg er gira',
      literal: 'estoy "girado"',
      meaning: 'Tengo muchas ganas, estoy emocionado.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Konserten er i morgen!', es: '¡El concierto es mañana!' },
        { who: 'B', no: 'Jeg er så gira!', es: '¡Tengo tantas ganas!' }
      ],
      tip: 'Slang puro: «gira» aquí no tiene nada que ver con girar. También «gira på» + algo.'
    },
    {
      term: 'Null stress',
      literal: 'cero estrés',
      meaning: 'Sin problema, tranqui.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Kan du komme senere?', es: '¿Puedes venir más tarde?' },
        { who: 'B', no: 'Null stress.', es: 'Sin problema.' }
      ],
      tip: 'Préstamo del inglés, muy usado por gente joven en Oslo.'
    },
    {
      term: 'Takk for meg',
      literal: 'gracias por mí',
      meaning: 'Gracias y hasta luego (al despedirte de una casa o una cena).',
      register: 'neutro',
      example: [
        { who: 'A', no: 'Takk for meg, vi må gå.', es: 'Gracias y hasta luego, nos tenemos que ir.' },
        { who: 'B', no: 'Takk for besøket!', es: '¡Gracias por la visita!' }
      ],
      tip: 'Se dice al irte, nunca al llegar. Es la fórmula estrella al terminar una visita.'
    }
  ]
};
