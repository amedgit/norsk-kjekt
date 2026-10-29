/* Norsk Kjekt — contenido del curso.
   Para añadir una lección: copia un objeto de "lessons", cámbialo y súbelo al array.
   Tipos de ejercicio: mcq | gap | order */

window.COURSE = {
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'hei',
      image: 'assets/img/lessons/hei.svg',
      imageAlt: 'Dos personas saludándose delante de casas noruegas',
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
          audio: 'Jeg heter Alex',
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
      image: 'assets/img/lessons/kafe.svg',
      imageAlt: 'Cafetería noruega con café y rollo de canela',
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
          audio: 'Kan jeg få en kaffe, takk?',
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
      image: 'assets/img/lessons/butikk.svg',
      imageAlt: 'Tienda noruega con estanterías, cesta y caja',
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
          audio: 'Unnskyld',
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
      image: 'assets/img/lessons/buss.svg',
      imageAlt: 'Autobús urbano en una parada bajo la lluvia',
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
      image: 'assets/img/lessons/vaer.svg',
      imageAlt: 'Paisaje noruego con sol, lluvia, nieve y una persona con impermeable',
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
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'jobbintervju',
      image: 'assets/img/lessons/jobbintervju.svg',
      imageAlt: 'Entrevista de trabajo en una oficina luminosa',
      num: 6,
      emoji: '💼',
      level: 'B1',
      title: 'På jobbintervju',
      subtitle: 'Presentarte, contar tu experiencia y hacer preguntas',
      goals: ['Hablar de experiencia con «har jobbet»', 'Describir fortalezas y retos', 'Cerrar la entrevista con buenas preguntas'],
      text: [
        {
          no: 'Alex har søkt på jobb som servitør i en ny restaurant i Oslo. I dag er intervjuet.',
          es: 'Alex ha solicitado un puesto de camarero en un restaurante nuevo de Oslo. Hoy es la entrevista.'
        },
        {
          no: '«Fortell litt om deg selv,» sier sjefen. Alex forteller at han har jobbet på kafé i to år, og at han liker å møte nye mennesker.',
          es: '«Cuéntame un poco sobre ti», dice el jefe. Alex cuenta que ha trabajado en una cafetería durante dos años y que le gusta conocer gente nueva.'
        },
        {
          no: '«Hva er du spesielt god til?» «Jeg er rolig når det er mye å gjøre, og jeg lærer fort.»',
          es: '«¿En qué eres especialmente bueno?» «Soy tranquilo cuando hay mucho que hacer y aprendo rápido.»'
        },
        {
          no: '«Hva er den største utfordringen din?» «Jeg vil gjerne bli flinkere til å si nei. Noen ganger tar jeg på meg for mye.»',
          es: '«¿Cuál es tu mayor reto?» «Me gustaría mejorar en saber decir no. A veces asumo demasiado.»'
        },
        {
          no: 'Til slutt spør Alex om arbeidstidene og om de tilbyr opplæring. Sjefen sier at de ringer i morgen.',
          es: 'Al final, Alex pregunta por el horario y si ofrecen formación. El jefe dice que llamarán mañana.'
        }
      ],
      vocab: [
        { no: 'å søke', es: 'solicitar', note: 'søke på en jobb = solicitar un trabajo' },
        { no: 'intervju', es: 'entrevista' },
        { no: 'erfaring', es: 'experiencia' },
        { no: 'å fortelle', es: 'contar' },
        { no: 'sjef', es: 'jefe, jefa' },
        { no: 'å møte', es: 'conocer, encontrarse con' },
        { no: 'ansvar', es: 'responsabilidad' },
        { no: 'utfordring', es: 'reto, desafío' },
        { no: 'å ta på seg', es: 'asumir (una tarea)' },
        { no: 'arbeidstid', es: 'horario laboral' },
        { no: 'opplæring', es: 'formación' },
        { no: 'å ringe', es: 'llamar por teléfono' },
        { no: 'fast stilling', es: 'puesto fijo' }
      ],
      phrases: [
        { no: 'Kan du fortelle litt om deg selv?', es: '¿Puedes contarme un poco sobre ti?' },
        { no: 'Jeg har to års erfaring fra service.', es: 'Tengo dos años de experiencia en atención al cliente.' },
        { no: 'Hvordan ser en vanlig arbeidsdag ut?', es: '¿Cómo es un día normal de trabajo?' },
        { no: 'Når kan jeg forvente å høre fra dere?', es: '¿Cuándo puedo esperar noticias suyas?' }
      ],
      tip: 'En Noruega la entrevista suele ser bastante informal y se tutea desde el principio. Llega puntual, mira a los ojos y prepara una pregunta para el final. Distingue «fast stilling» (puesto fijo) de «vikariat» (contrato temporal): cambia todo lo que puedes planificar.',
      grammar: {
        title: 'Pretérito perfecto: har + participio',
        points: [
          'Se forma con «har» + participio: jeg har jobbet, han har søkt.',
          'Los verbos regulares añaden -et o -te: jobbe → jobbet, snakke → snakket. Otros son irregulares: søke → søkt.',
          'Se usa para experiencias sin momento concreto. Con «i går» va el pretérito: jeg jobbet i går.',
          'El participio no cambia con el sujeto: vi har jobbet.'
        ],
        examples: [
          { no: 'Jeg har jobbet som servitør i to år.', es: 'He trabajado de camarero durante dos años.' },
          { no: 'Har du søkt på jobben?', es: '¿Has solicitado el trabajo?' },
          { no: 'Vi har ikke fått svar ennå.', es: 'Todavía no hemos recibido respuesta.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: 'Hvor lenge har Alex jobbet på kafé?',
          options: ['To år', 'To måneder', 'Fem år', 'Ett år'],
          answer: 0,
          explain: 'Alex dice «jeg har jobbet på kafé i to år»: dos años.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el verbo correcto:',
          sentence: 'Jeg ___ jobbet som servitør i to år.',
          answers: ['har'],
          bank: ['har', 'er', 'hadde'],
          es: 'He trabajado de camarero durante dos años.',
          explain: 'El pretérito perfecto es «har» + participio: har jobbet.'
        },
        {
          type: 'cloze',
          prompt: 'Completa con la forma correcta del verbo:',
          text: 'Alex ___ på jobben. Han ___ i service i to år. Nå ___ han prøve noe nytt.',
          answers: ['har søkt', 'har jobbet', 'vil'],
          bank: ['har søkt', 'har jobbet', 'vil', 'søker', 'jobbet', 'ville'],
          es: 'Alex ha solicitado el trabajo. Ha trabajado en atención al cliente durante dos años. Ahora quiere probar algo nuevo.',
          explain: '«Har søkt» y «har jobbet» son pretérito perfecto. «Nå» pide presente: vil.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pretérito perfecto:',
          source: 'Jeg jobber på en kafé.',
          answer: 'Jeg har jobbet på en kafé.',
          hint: 'har + participio',
          es: 'He trabajado en una cafetería.',
          explain: '«Jobber» → «har jobbet». Los verbos en -e suelen hacer el participio en -et.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pretérito perfecto:',
          source: 'Han søker på en ny jobb.',
          answer: 'Han har søkt på en ny jobb.',
          hint: 'søke tiene un participio irregular',
          es: 'Ha solicitado un trabajo nuevo.',
          explain: 'El participio de «å søke» es «søkt», no «søket». Es una de las formas que hay que memorizar.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Jeg har to års erfaring fra service.',
          hint: '7 palabras · habla de experiencia',
          es: 'Tengo dos años de experiencia en atención al cliente.',
          explain: '«To års erfaring» va en genitivo: dos años de experiencia.'
        },
        {
          type: 'match',
          prompt: 'Empareja el vocabulario de la entrevista:',
          pairs: [
            { a: 'erfaring', b: 'experiencia' },
            { a: 'utfordring', b: 'reto' },
            { a: 'arbeidstid', b: 'horario laboral' },
            { a: 'opplæring', b: 'formación' },
            { a: 'søknad', b: 'solicitud' },
            { a: 'lønn', b: 'salario' }
          ],
          explain: '«Søknad» es la solicitud escrita; «intervju» es la entrevista. «Lønn» es el salario, no el sueldo mensual concreto (det er «månedslønn»).'
        },
        {
          type: 'mcq',
          prompt: '¿Qué pregunta encaja mejor al final de una entrevista?',
          options: ['Hvor mye kan jeg ta fri?', 'Hvordan ser en vanlig arbeidsdag ut?', 'Hvorfor har dere så dårlig rykte?', 'Kan jeg få jobben nå?'],
          answer: 1,
          explain: 'Preguntar por un día normal demuestra interés real y suena profesional. Las otras opciones suenan a exigencia o a desconfianza.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'hoslegen',
      image: 'assets/img/lessons/hoslegen.svg',
      imageAlt: 'Consulta médica con médica, paciente y medicinas',
      num: 7,
      emoji: '🩺',
      level: 'B1',
      title: 'Hos legen',
      subtitle: 'Explicar síntomas, entender al médico y pedir hora',
      goals: ['Describir síntomas y su duración', 'Entender instrucciones médicas', 'Pedir cita y hablar de medicinas'],
      text: [
        {
          no: 'Alex har vært forkjølet i en uke, men nå er det verre. Han har vondt i halsen og hoster om natten.',
          es: 'Alex lleva una semana resfriado, pero ahora está peor. Le duele la garganta y tose por la noche.'
        },
        {
          no: 'Han ringer legekontoret og får en time samme dag. «Hva er problemet?» spør resepsjonisten.',
          es: 'Llama a la consulta médica y consigue cita para el mismo día. «¿Cuál es el problema?», pregunta la recepcionista.'
        },
        {
          no: 'Legen måler temperaturen og lytter på lungene. «Du har en halsbetennelse,» sier hun. «Du trenger penicillin.»',
          es: 'La médica le mide la temperatura y le ausculta los pulmones. «Tienes una infección de garganta», dice. «Necesitas penicilina.»'
        },
        {
          no: '«Hvor ofte skal jeg ta medisinen?» spør Alex. «Tre ganger om dagen i ti dager. Og bli hjemme i to dager.»',
          es: '«¿Con qué frecuencia tomo la medicina?», pregunta Alex. «Tres veces al día durante diez días. Y quédate en casa dos días.»'
        },
        {
          no: 'Alex får en sykmelding og går rett på apoteket. Han føler seg lettet, men også litt sliten.',
          es: 'Alex recibe una baja médica y va directo a la farmacia. Se siente aliviado, pero también algo cansado.'
        }
      ],
      vocab: [
        { no: 'forkjølet', es: 'resfriado' },
        { no: 'vondt i halsen', es: 'dolor de garganta' },
        { no: 'å hoste', es: 'toser' },
        { no: 'legekontor', es: 'consulta médica' },
        { no: 'å få en time', es: 'conseguir cita' },
        { no: 'resepsjonist', es: 'recepcionista' },
        { no: 'å måle', es: 'medir' },
        { no: 'halsbetennelse', es: 'infección de garganta, amigdalitis' },
        { no: 'å ta medisin', es: 'tomar medicina' },
        { no: 'sykmelding', es: 'baja médica' },
        { no: 'apotek', es: 'farmacia' },
        { no: 'lettet', es: 'aliviado' },
        { no: 'sliten', es: 'cansado' }
      ],
      phrases: [
        { no: 'Jeg vil gjerne bestille en time.', es: 'Quisiera pedir cita.' },
        { no: 'Jeg har hatt vondt i halsen i en uke.', es: 'Llevo una semana con dolor de garganta.' },
        { no: 'Hvor ofte skal jeg ta medisinen?', es: '¿Con qué frecuencia debo tomar la medicina?' },
        { no: 'Trenger jeg en sykmelding?', es: '¿Necesito una baja médica?' }
      ],
      tip: 'En Noruega tienes un «fastlege» asignado: para algo urgente, llama a primera hora y suelen darte hora el mismo día. La receta va electrónica al apotek, así que solo necesitas el ID. «Jeg er syk» es estoy enfermo; «jeg er sjuk» suena a nynorsk o dialecto.',
      grammar: {
        title: 'Duración: perfecto con «i» y «siden»',
        points: [
          '«Jeg har vært syk i tre dager» = llevo tres días enfermo (y sigo).',
          '«Jeg var syk i tre dager» = estuve tres días enfermo (ya terminó).',
          '«i» + duración: i en uke, i to dager. «siden» + momento: siden mandag.',
          'El perfecto conecta pasado y presente; el pretérito cuenta algo cerrado.'
        ],
        examples: [
          { no: 'Jeg har hatt vondt i halsen i en uke.', es: 'Llevo una semana con dolor de garganta.' },
          { no: 'Jeg var hos legen i går.', es: 'Ayer fui al médico.' },
          { no: 'Hun har vært sykmeldt siden mandag.', es: 'Está de baja desde el lunes.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: 'Hva feiler Alex?',
          options: ['Han har vondt i magen', 'Han har halsbetennelse', 'Han har brukket beinet', 'Han har hodepine'],
          answer: 1,
          explain: 'El médico dice «du har en halsbetennelse»: infección de garganta.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la preposición correcta:',
          sentence: 'Jeg har hatt vondt i halsen ___ en uke.',
          answers: ['i'],
          bank: ['i', 'på', 'for', 'siden'],
          es: 'Llevo una semana con dolor de garganta.',
          explain: 'Duración con «i»: i en uke, i to dager. «Siden» iría con un momento: siden mandag.'
        },
        {
          type: 'cloze',
          prompt: 'Completa el texto con el presente correcto:',
          text: 'Legen sier at Alex ___ en halsbetennelse. Han ___ medisinen tre ganger om dagen. Alex ___ hjemme i to dager.',
          answers: ['har', 'tar', 'blir'],
          bank: ['har', 'tar', 'blir', 'hadde', 'tok', 'ble'],
          es: 'La médica dice que Alex tiene una infección de garganta. Toma la medicina tres veces al día. Alex se queda en casa dos días.',
          explain: 'Todo el texto describe la situación actual, así que va en presente: har, tar, blir.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pretérito perfecto:',
          source: 'Jeg er forkjølet.',
          answer: 'Jeg har vært forkjølet.',
          hint: 'el participio de «å være» es irregular',
          es: 'He estado resfriado.',
          explain: '«Være» → «har vært». Es una de las formas más frecuentes del noruego.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pretérito perfecto:',
          source: 'Hun tar medisinen.',
          answer: 'Hun har tatt medisinen.',
          hint: 'tar → tatt',
          es: 'Ha tomado la medicina.',
          explain: '«Å ta» hace «har tatt». El participio no cambia aunque el sujeto sea «hun».'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Jeg vil gjerne bestille en time.',
          hint: '6 palabras · pedir cita',
          es: 'Quisiera pedir cita.',
          explain: '«Jeg vil gjerne» suaviza la petición: es el «quisiera» noruego.'
        },
        {
          type: 'match',
          prompt: 'Empareja los términos de salud:',
          pairs: [
            { a: 'hoste', b: 'toser' },
            { a: 'vondt i halsen', b: 'dolor de garganta' },
            { a: 'sykmelding', b: 'baja médica' },
            { a: 'apotek', b: 'farmacia' },
            { a: 'å måle', b: 'medir' },
            { a: 'sliten', b: 'cansado' }
          ],
          explain: '«Sykmelding» es el documento de baja; «sykepenger» es el dinero que cobras durante la baja.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué significa «tre ganger om dagen»?',
          options: ['Tres días a la semana', 'Tres veces al día', 'Cada tres horas', 'Durante tres días'],
          answer: 1,
          explain: '«Ganger» = veces; «om dagen» = al día. «Tre ganger om dagen» es tres veces al día.'
        },
        {
          type: 'gap',
          prompt: 'Completa la pregunta:',
          sentence: 'Hvor ___ skal jeg ta medisinen?',
          answers: ['ofte'],
          bank: ['ofte', 'mye', 'lenge', 'mange'],
          es: '¿Con qué frecuencia debo tomar la medicina?',
          explain: '«Hvor ofte» = con qué frecuencia. «Hvor lenge» = cuánto tiempo; «hvor mye» = cuánto.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: 'bolig',
      image: 'assets/img/lessons/bolig.svg',
      imageAlt: 'Casa noruega con llaves y cajas de mudanza',
      num: 8,
      emoji: '🏠',
      level: 'B1',
      title: 'Å leie bolig',
      subtitle: 'Buscar piso, entender el contrato y hablar con el casero',
      goals: ['Describir un piso y sus condiciones', 'Entender un anuncio de alquiler', 'Negociar y revisar un contrato'],
      text: [
        {
          no: 'Alex leter etter en ny leilighet i Oslo. Den han bor i nå, er for liten og for dyr.',
          es: 'Alex busca un piso nuevo en Oslo. El que tiene ahora es demasiado pequeño y demasiado caro.'
        },
        {
          no: 'På Finn.no finner han en lys toroms på Grünerløkka. Leien er 14 000 kroner i måneden, uten strøm.',
          es: 'En Finn.no encuentra un piso luminoso de dos habitaciones en Grünerløkka. El alquiler son 14 000 coronas al mes, sin electricidad.'
        },
        {
          no: 'Han sender en melding til utleieren og får komme på visning dagen etter. Leiligheten er fin, men det er langt til nærmeste butikk.',
          es: 'Envía un mensaje al casero y puede ir a verlo al día siguiente. El piso está bien, pero hay lejos a la tienda más cercana.'
        },
        {
          no: '«Er det mulig å ha en katt her?» spør Alex. «Ja, men da må du betale et depositum,» sier utleieren.',
          es: '«¿Es posible tener un gato aquí?», pregunta Alex. «Sí, pero entonces tienes que pagar una fianza», dice el casero.'
        },
        {
          no: 'Alex leser kontrakten nøye. Oppsigelsestiden er tre måneder, og han må betale husleie den første i hver måned.',
          es: 'Alex lee el contrato con atención. El plazo de preaviso es de tres meses y debe pagar el alquiler el día primero de cada mes.'
        }
      ],
      vocab: [
        { no: 'å leie', es: 'alquilar' },
        { no: 'leilighet', es: 'piso, apartamento' },
        { no: 'toroms', es: 'de dos habitaciones (salón + dormitorio)' },
        { no: 'leie', es: 'alquiler' },
        { no: 'strøm', es: 'electricidad' },
        { no: 'utleier', es: 'casero, casera' },
        { no: 'visning', es: 'visita del piso' },
        { no: 'depositum', es: 'fianza' },
        { no: 'kontrakt', es: 'contrato' },
        { no: 'oppsigelsestid', es: 'plazo de preaviso' },
        { no: 'husleie', es: 'alquiler mensual' },
        { no: 'nabolag', es: 'barrio' },
        { no: 'å flytte', es: 'mudarse' }
      ],
      phrases: [
        { no: 'Jeg er interessert i leiligheten.', es: 'Me interesa el piso.' },
        { no: 'Er strøm inkludert i leien?', es: '¿Está la electricidad incluida en el alquiler?' },
        { no: 'Når kan jeg flytte inn?', es: '¿Cuándo puedo mudarme?' },
        { no: 'Kan vi skrive en kontrakt?', es: '¿Podemos firmar un contrato?' }
      ],
      tip: 'En Noruega lo normal es un depósito de tres meses y un preaviso de tres meses. La «husleie» se paga el día 1. Ojo con el vocabulario: «bolig» es vivienda en general y «leilighet» es piso; un «toroms» tiene salón y una habitación, no dos dormitorios.',
      grammar: {
        title: 'Comparativos y «for ... til»',
        points: [
          'Comparativo: stor → større, dyr → dyrere, liten → mindre. Superlativo: størst, dyrest, minst.',
          '«for liten» = demasiado pequeño; «for dyr» = demasiado caro.',
          '«like ... som» = tan ... como; «ikke like ... som» = no tan ... como.',
          'El comparativo se une con «enn»: større enn, dyrere enn.'
        ],
        examples: [
          { no: 'Leiligheten er for liten og for dyr.', es: 'El piso es demasiado pequeño y demasiado caro.' },
          { no: 'Denne leiligheten er lysere enn den andre.', es: 'Este piso es más luminoso que el otro.' },
          { no: 'Leien er ikke like høy som i sentrum.', es: 'El alquiler no es tan alto como en el centro.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: 'Hvor mye koster leiligheten i måneden?',
          options: ['14 000 kroner', '4 000 kroner', '40 000 kroner', '1 400 kroner'],
          answer: 0,
          explain: 'El texto dice «leien er 14 000 kroner i måneden, uten strøm».'
        },
        {
          type: 'gap',
          prompt: 'Completa con la palabra correcta:',
          sentence: 'Leiligheten er ___ liten for Alex.',
          answers: ['for'],
          bank: ['for', 'til', 'enn', 'som'],
          es: 'El piso es demasiado pequeño para Alex.',
          explain: '«For» + adjetivo = demasiado. «Til» indica destino o finalidad, no exceso.'
        },
        {
          type: 'gap',
          prompt: 'Completa la comparación:',
          sentence: 'Leien er høyere ___ i sentrum.',
          answers: ['enn'],
          bank: ['enn', 'som', 'til', 'for'],
          es: 'El alquiler es más alto que en el centro.',
          explain: 'Comparativo + «enn» = que. «Som» se usa con «like ... som» (tan ... como).'
        },
        {
          type: 'cloze',
          prompt: 'Completa el anuncio con la forma correcta:',
          text: 'Leiligheten er ___ enn den han har nå, men den er også ___. Leien er 14 000 kroner, og strøm er ikke ___. Alex må betale et ___ før han flytter inn.',
          answers: ['lysere', 'dyrere', 'inkludert', 'depositum'],
          bank: ['lysere', 'dyrere', 'inkludert', 'depositum', 'lys', 'dyr', 'inkluderer', 'kontrakt'],
          es: 'El piso es más luminoso que el que tiene ahora, pero también es más caro. El alquiler son 14 000 coronas y la electricidad no está incluida. Alex debe pagar una fianza antes de mudarse.',
          explain: 'Comparativos: lys → lysere, dyr → dyrere. «Inkludert» = incluido; «depositum» = fianza.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe con «for» (= demasiado):',
          source: 'Leiligheten er veldig dyr.',
          answer: 'Leiligheten er for dyr.',
          hint: 'for + adjetivo',
          es: 'El piso es demasiado caro.',
          explain: '«Veldig dyr» es muy caro; «for dyr» es demasiado caro. No son lo mismo.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Er strøm inkludert i leien?',
          hint: '5 palabras · una pregunta clave',
          es: '¿Está la electricidad incluida en el alquiler?',
          explain: '«Inkludert i» = incluido en. La pregunta empieza por el verbo, como en casi todas las preguntas noruegas.'
        },
        {
          type: 'match',
          prompt: 'Empareja el vocabulario de la vivienda:',
          pairs: [
            { a: 'utleier', b: 'casero' },
            { a: 'depositum', b: 'fianza' },
            { a: 'husleie', b: 'alquiler mensual' },
            { a: 'oppsigelsestid', b: 'plazo de preaviso' },
            { a: 'visning', b: 'visita del piso' },
            { a: 'å flytte', b: 'mudarse' }
          ],
          explain: '«Å flytte» es mudarse; «å flytte inn» es mudarse a un sitio concreto. El «depositum» se devuelve al final si no hay daños.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué significa «oppsigelsestiden er tre måneder»?',
          options: ['Puedes mudarte en tres meses', 'Debes avisar con tres meses de antelación', 'El contrato dura tres meses', 'La fianza es de tres meses'],
          answer: 1,
          explain: '«Oppsigelsestid» es el plazo que tienes que respetar para dejar el contrato, no la duración total.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 9 */
    {
      id: 'nyheter',
      image: 'assets/img/lessons/nyheter.svg',
      imageAlt: 'Periódico, móvil con alerta y café sobre una mesa',
      num: 9,
      emoji: '📰',
      level: 'B2',
      title: 'Nyheter og meninger',
      subtitle: 'Resumir una noticia y dar tu opinión con matices',
      goals: ['Resumir una noticia con conectores', 'Expresar acuerdo y desacuerdo', 'Matizar sin sonar brusco'],
      text: [
        {
          no: 'I går publiserte NRK en sak om at flere unge i Norge sliter med å komme inn på boligmarkedet. Prisene har steget kraftig de siste ti årene, spesielt i Oslo og Bergen.',
          es: 'Ayer NRK publicó un reportaje sobre que cada vez más jóvenes en Noruega tienen dificultades para entrar en el mercado inmobiliario. Los precios han subido mucho en los últimos diez años, sobre todo en Oslo y Bergen.'
        },
        {
          no: 'Ifølge artikkelen tjener en gjennomsnittlig førstegangskjøper ikke nok til å få lån til en vanlig leilighet. Mange velger derfor å leie lenger enn før.',
          es: 'Según el artículo, un comprador primerizo medio no gana lo suficiente para conseguir un préstamo para un piso normal. Por eso muchos eligen alquilar durante más tiempo que antes.'
        },
        {
          no: 'Noen økonomer mener at markedet vil roe seg ned. Andre peker på at byggetakten er for lav, og at problemet bare vil bli større.',
          es: 'Algunos economistas opinan que el mercado se calmará. Otros señalan que el ritmo de construcción es demasiado bajo y que el problema solo irá a más.'
        },
        {
          no: 'Kommentarfeltet er delt. «Dette er en politisk oppgave, ikke noe markedet kan løse alene,» skriver en leser. En annen svarer: «Men vi kan ikke bygge ned hele byen heller.»',
          es: 'La sección de comentarios está dividida. «Esta es una tarea política, algo que el mercado no puede resolver solo», escribe un lector. Otro responde: «Pero tampoco podemos construir hasta derribar toda la ciudad.»'
        },
        {
          no: 'Saken viser hvor vanskelig det er å være ung i en storby i dag – og hvor ulike løsningene kan se ut.',
          es: 'El reportaje muestra lo difícil que es ser joven en una gran ciudad hoy, y lo distintas que pueden ser las soluciones.'
        }
      ],
      vocab: [
        { no: 'å publisere', es: 'publicar' },
        { no: 'sak', es: 'noticia, caso, reportaje' },
        { no: 'boligmarked', es: 'mercado inmobiliario' },
        { no: 'å stige', es: 'subir (un precio)' },
        { no: 'kraftig', es: 'fuertemente, considerablemente' },
        { no: 'ifølge', es: 'según' },
        { no: 'gjennomsnittlig', es: 'medio, promedio' },
        { no: 'førstegangskjøper', es: 'comprador primerizo' },
        { no: 'å få lån', es: 'conseguir un préstamo' },
        { no: 'økonom', es: 'economista' },
        { no: 'å roe seg ned', es: 'calmarse' },
        { no: 'byggetakt', es: 'ritmo de construcción' },
        { no: 'kommentarfelt', es: 'sección de comentarios' },
        { no: 'delt', es: 'dividido' },
        { no: 'løsning', es: 'solución' }
      ],
      phrases: [
        { no: 'Ifølge artikkelen har prisene steget kraftig.', es: 'Según el artículo, los precios han subido mucho.' },
        { no: 'Jeg er enig i at byggetakten er for lav.', es: 'Estoy de acuerdo en que el ritmo de construcción es demasiado bajo.' },
        { no: 'Jeg er ikke helt enig.', es: 'No estoy del todo de acuerdo.' },
        { no: 'På den ene siden er det dyrt, på den andre siden er det sentralt.', es: 'Por un lado es caro; por otro, está céntrico.' }
      ],
      tip: 'En Noruega se discute sin subir el tono: «jeg er uenig» es normal y no es descortés. Suaviza con «jeg tror», «kanskje» o «på en måte». Evita «du tar feil» (estás equivocado) y di «jeg ser det annerledes» (lo veo de otra forma).',
      grammar: {
        title: 'Conectores y opinión',
        points: [
          'Para añadir: dessuten, i tillegg, også.',
          'Para contrastar: men, likevel, på den andre siden, derimot.',
          'Para causa: fordi, siden, på grunn av + sustantivo.',
          'Para consecuencia: derfor, dermed, som følge av.',
          'Para opinión: jeg mener at, jeg synes at, etter min mening.'
        ],
        examples: [
          { no: 'Prisene har steget kraftig, derfor er det vanskelig å kjøpe.', es: 'Los precios han subido mucho; por eso es difícil comprar.' },
          { no: 'På den ene siden er det dyrt, på den andre siden er det sentralt.', es: 'Por un lado es caro; por otro, está céntrico.' },
          { no: 'Jeg er enig i at byggetakten er for lav.', es: 'Estoy de acuerdo en que el ritmo de construcción es demasiado bajo.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: 'Hva er hovedsaken i artikkelen?',
          options: [
            'Prisene på boliger har steget, og unge har vanskelig for å kjøpe.',
            'NRK skal bygge nye leiligheter.',
            'Alle unge vil flytte fra Oslo.',
            'Bankene vil senke renten.'
          ],
          answer: 0,
          explain: 'El texto habla del acceso de los jóvenes al mercado inmobiliario y de la subida de precios.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el adverbio correcto:',
          sentence: 'Prisene har steget ___ de siste ti årene.',
          answers: ['kraftig'],
          bank: ['kraftig', 'kort', 'gjerne', 'sjelden'],
          es: 'Los precios han subido mucho en los últimos diez años.',
          explain: '«Kraftig» describe un aumento fuerte. «Gjerne» significa con gusto; «sjelden», rara vez.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el conector correcto:',
          sentence: '___ artikkelen tjener ikke unge nok til å få lån.',
          answers: ['Ifølge'],
          bank: ['Ifølge', 'Fordi', 'Likevel', 'Derfor'],
          es: 'Según el artículo, los jóvenes no ganan lo suficiente para conseguir un préstamo.',
          explain: '«Ifølge» = según y va delante de la fuente, sin preposición. «Fordi» introduce causa.'
        },
        {
          type: 'cloze',
          prompt: 'Completa el resumen de la noticia:',
          text: 'Prisene har steget ___, og mange unge får ikke ___. Noen mener at markedet vil ___ seg ned, mens andre tror at problemet blir ___. Løsningen avhenger av hvilken ___ man velger.',
          answers: ['kraftig', 'lån', 'roe', 'større', 'politikk'],
          bank: ['kraftig', 'lån', 'roe', 'større', 'politikk', 'kort', 'låner', 'roer', 'stor', 'politisk'],
          es: 'Los precios han subido mucho y muchos jóvenes no consiguen préstamo. Algunos creen que el mercado se calmará, mientras que otros piensan que el problema irá a más. La solución depende de la política que se elija.',
          explain: '«Få lån», «roe seg ned», «bli større» y «velge politikk» son colocaciones fijas.'
        },
        {
          type: 'transform',
          prompt: 'Une las dos frases con «derfor»:',
          source: 'Prisene stiger. Det er vanskelig å kjøpe.',
          answer: 'Prisene stiger, derfor er det vanskelig å kjøpe.',
          hint: 'derfor = por eso',
          es: 'Los precios suben; por eso es difícil comprar.',
          explain: '«Derfor» introduce la consecuencia y va seguido del verbo: derfor er det ...'
        },
        {
          type: 'transform',
          prompt: 'Fusiona las dos frases con «enig i at»:',
          source: 'Jeg er enig. Byggetakten er for lav.',
          answer: 'Jeg er enig i at byggetakten er for lav.',
          hint: 'enig i at + sujeto + verbo',
          es: 'Estoy de acuerdo en que el ritmo de construcción es demasiado bajo.',
          explain: '«Å være enig i at» introduce una opinión compartida. «Enig med» se usa con personas: jeg er enig med deg.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Ifølge artikkelen har prisene steget kraftig.',
          hint: '6 palabras · una fuente y una tendencia',
          es: 'Según el artículo, los precios han subido mucho.',
          explain: 'Fíjate en el orden: ifølge + fuente, luego verbo + sujeto.'
        },
        {
          type: 'match',
          prompt: 'Empareja los conectores con su significado:',
          pairs: [
            { a: 'derfor', b: 'por eso' },
            { a: 'likevel', b: 'sin embargo' },
            { a: 'dessuten', b: 'además' },
            { a: 'ifølge', b: 'según' },
            { a: 'på den andre siden', b: 'por otro lado' },
            { a: 'siden', b: 'ya que' }
          ],
          explain: '«Siden» y «fordi» son parecidos, pero «siden» suele dar información ya conocida. «Likevel» marca contraste.'
        },
        {
          type: 'mcq',
          prompt: '¿Cuál suena más matizado al discrepar?',
          options: ['Du tar feil.', 'Jeg ser det annerledes.', 'Det er helt dumt.', 'Nei, aldri.'],
          answer: 1,
          explain: '«Jeg ser det annerledes» discrepa sin atacar a la persona. Es la opción más útil en una discusión noruega.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 10 */
    {
      id: 'miljo',
      image: 'assets/img/lessons/miljo.svg',
      imageAlt: 'Fiordo noruego con turbinas eólicas, reciclaje y coche eléctrico',
      num: 10,
      emoji: '🌍',
      level: 'B2',
      title: 'Miljø og samfunn',
      subtitle: 'Sostenibilidad, consumo y cambios que empiezan en pequeño',
      goals: ['Argumentar sobre medio ambiente', 'Hablar de hábitos y consumo', 'Usar la pasiva y «man»'],
      text: [
        {
          no: 'Nordmenn kaster i gjennomsnitt 450 kilo søppel hvert år. Samtidig sier ni av ti at de er opptatt av miljøet.',
          es: 'Los noruegos tiran de media 450 kilos de basura al año. Al mismo tiempo, nueve de cada diez dicen que les importa el medio ambiente.'
        },
        {
          no: 'Forskjellen mellom det vi sier og det vi gjør, kalles gjerne «grønnvasking» når den brukes bevisst av selskaper.',
          es: 'La diferencia entre lo que decimos y lo que hacemos suele llamarse «greenwashing» cuando las empresas la usan a propósito.'
        },
        {
          no: 'Mange kommuner har innført sortering av matavfall, plast og papir. Målet er at mindre skal ende opp på deponi.',
          es: 'Muchos municipios han introducido la clasificación de residuos orgánicos, plástico y papel. El objetivo es que menos acabe en el vertedero.'
        },
        {
          no: 'Kritikerne mener at ansvaret flyttes fra produsentene til forbrukerne. «Det hjelper lite å sortere hvis produktene ikke varer,» sier en miljøforsker.',
          es: 'Los críticos opinan que la responsabilidad se traslada de los productores a los consumidores. «De poco sirve clasificar si los productos no duran», dice una investigadora ambiental.'
        },
        {
          no: 'Likevel skjer det noe: stadig flere velger tog fremfor fly, og bruktmarkedet vokser. Endring tar tid, men den begynner ofte i det små.',
          es: 'Aun así, algo está pasando: cada vez más gente elige el tren en vez del avión y el mercado de segunda mano crece. El cambio lleva tiempo, pero a menudo empieza en pequeño.'
        }
      ],
      vocab: [
        { no: 'søppel', es: 'basura' },
        { no: 'avfall', es: 'residuos' },
        { no: 'å kaste', es: 'tirar' },
        { no: 'gjenvinning', es: 'reciclaje' },
        { no: 'å sortere', es: 'clasificar' },
        { no: 'forbruker', es: 'consumidor' },
        { no: 'produsent', es: 'productor' },
        { no: 'ansvar', es: 'responsabilidad' },
        { no: 'bærekraftig', es: 'sostenible' },
        { no: 'utslipp', es: 'emisiones' },
        { no: 'å redusere', es: 'reducir' },
        { no: 'deponi', es: 'vertedero' },
        { no: 'bruktmarked', es: 'mercado de segunda mano' },
        { no: 'å vokse', es: 'crecer' },
        { no: 'endring', es: 'cambio' }
      ],
      phrases: [
        { no: 'Jeg prøver å redusere flyreiser.', es: 'Intento reducir los viajes en avión.' },
        { no: 'Det er viktig at vi tenker langsiktig.', es: 'Es importante que pensemos a largo plazo.' },
        { no: 'Ansvaret må fordeles bedre.', es: 'La responsabilidad debe repartirse mejor.' },
        { no: 'Små endringer kan ha stor effekt.', es: 'Los pequeños cambios pueden tener un gran efecto.' }
      ],
      tip: 'El «dugnad» (trabajo comunitario voluntario) y el «friluftsliv» explican mucha de la cultura noruega. Y el «pant»: cada botella tiene un depósito que recuperas al devolverla en la máquina del supermercado. Reciclar ahí no es solo ecología, es dinero.',
      grammar: {
        title: 'Voz pasiva y «man»',
        points: [
          'Pasiva con «bli» + participio: Søppel blir sortert. (La basura se clasifica.)',
          'Pasiva con «-s»: Det selges mye brukt. (Se vende mucho de segunda mano.)',
          '«man» = uno, se, la gente: Man må sortere avfallet.',
          '«det» impersonal: Det er viktig å redusere utslippene.'
        ],
        examples: [
          { no: 'Matavfall blir sortert i mange kommuner.', es: 'Los residuos orgánicos se clasifican en muchos municipios.' },
          { no: 'Det selges stadig mer brukt.', es: 'Cada vez se vende más de segunda mano.' },
          { no: 'Man bør tenke på hva man kjøper.', es: 'Uno debería pensar en lo que compra.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: 'Hva mener kritikerne?',
          options: [
            'At forbrukerne bør sortere mer.',
            'At ansvaret flyttes fra produsentene til forbrukerne.',
            'At deponiene er for dyre.',
            'At gjenvinning ikke fungerer.'
          ],
          answer: 1,
          explain: 'El texto lo dice: «ansvaret flyttes fra produsentene til forbrukerne».'
        },
        {
          type: 'gap',
          prompt: 'Completa la pasiva:',
          sentence: 'Søppel ___ sortert i mange kommuner.',
          answers: ['blir'],
          bank: ['blir', 'er', 'har', 'skal'],
          es: 'La basura se clasifica en muchos municipios.',
          explain: 'La pasiva con «bli» + participio describe una acción: blir sortert.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el pronombre impersonal («uno»):',
          sentence: '___ må redusere utslippene.',
          answers: ['Man'],
          bank: ['Man', 'De', 'Vi', 'Det'],
          es: 'Uno debe reducir las emisiones.',
          explain: '«Man» es el sujeto impersonal. «Vi» también sería correcto gramaticalmente, pero no es impersonal.'
        },
        {
          type: 'cloze',
          prompt: 'Completa el texto sobre consumo y reciclaje:',
          text: 'Hver nordmann kaster mye ___. Derfor er ___ viktig. I mange kommuner ___ matavfall og plast sortert. Men kritikerne mener at ansvaret ikke bare ligger hos ___. Produsentene må også lage produkter som ___ lenge.',
          answers: ['søppel', 'gjenvinning', 'blir', 'forbrukerne', 'varer'],
          bank: ['søppel', 'gjenvinning', 'blir', 'forbrukerne', 'varer', 'avfall', 'sorterer', 'produsentene', 'kaster'],
          es: 'Cada noruego tira mucha basura. Por eso el reciclaje es importante. En muchos municipios se clasifican los residuos orgánicos y el plástico. Pero los críticos opinan que la responsabilidad no recae solo en los consumidores. Los productores también deben fabricar productos que duren.',
          explain: '«Blir sortert» es pasiva; «varer» es el presente de «å vare» (durar).'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pasiva con «bli»:',
          source: 'Kommunen sorterer matavfallet.',
          answers: ['Matavfallet blir sortert av kommunen.', 'Matavfallet blir sortert.'],
          hint: 'objeto → sujeto + blir + participio',
          es: 'Los residuos orgánicos son clasificados por el municipio.',
          explain: 'El objeto «matavfallet» pasa a sujeto. «Av kommunen» es opcional; si lo pones, va al final.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Ansvaret må fordeles bedre.',
          hint: '4 palabras · una exigencia',
          es: 'La responsabilidad debe repartirse mejor.',
          explain: '«Å fordeles» es pasiva con -s: repartirse. «Bedre» es el comparativo de «bra».'
        },
        {
          type: 'match',
          prompt: 'Empareja el vocabulario del medio ambiente:',
          pairs: [
            { a: 'utslipp', b: 'emisiones' },
            { a: 'avfall', b: 'residuos' },
            { a: 'bærekraftig', b: 'sostenible' },
            { a: 'forbruker', b: 'consumidor' },
            { a: 'gjenvinning', b: 'reciclaje' },
            { a: 'bruktmarked', b: 'mercado de segunda mano' }
          ],
          explain: '«Bærekraftig» se usa mucho en política y empresa; «gjenvinning» es reciclar como proceso, mientras «å resirkulere» también se oye.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué es «grønnvasking»?',
          options: [
            'Reciclar en casa',
            'Cuando una empresa dice ser ecológica sin serlo',
            'Lavar la ropa con poca agua',
            'Comprar solo productos locales'
          ],
          answer: 1,
          explain: '«Grønn» (verde) + «vasking» (lavado): lavado de imagen verde, el greenwashing.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 11 */
    {
      id: 'arbeidsliv',
      image: 'assets/img/lessons/arbeidsliv.svg',
      imageAlt: 'Equipo trabajando en una oficina híbrida',
      num: 11,
      emoji: '⚖️',
      level: 'B2',
      title: 'Rettigheter i arbeidslivet',
      subtitle: 'Contratos, derechos y cómo defenderte en el trabajo',
      goals: ['Entender un contrato de trabajo', 'Conocer vacaciones, baja y horas extra', 'Saber a quién acudir si algo va mal'],
      text: [
        {
          no: 'Da Alex begynte i den nye jobben, fikk han en skriftlig arbeidskontrakt. Der stod det hvor mye han skulle tjene, hvor mange timer han skulle jobbe, og hvor lang prøvetiden var.',
          es: 'Cuando Alex empezó en el nuevo trabajo, recibió un contrato de trabajo por escrito. Ahí constaba cuánto iba a ganar, cuántas horas iba a trabajar y cuánto duraba el periodo de prueba.'
        },
        {
          no: 'I Norge har alle rett til ferie, sykepenger og et trygt arbeidsmiljø. Reglene står i arbeidsmiljøloven, og de gjelder også deltidsansatte.',
          es: 'En Noruega todos tienen derecho a vacaciones, pago por baja médica y un entorno laboral seguro. Las normas están en la ley del entorno laboral y también se aplican a los empleados a tiempo parcial.'
        },
        {
          no: 'Likevel er det ikke alltid slik i praksis. Noen arbeidsgivere ringer ansatte på fritiden eller ber dem jobbe uten å betale for overtid.',
          es: 'Aun así, no siempre es así en la práctica. Algunos empleadores llaman a los empleados en su tiempo libre o les piden trabajar sin pagar las horas extra.'
        },
        {
          no: '«Du har rett til å si nei,» sier den tillitsvalgte. «Men det er lurt å samle dokumentasjon og snakke med oss først.»',
          es: '«Tienes derecho a decir no», dice el representante de los trabajadores. «Pero es recomendable reunir documentación y hablar con nosotros primero.»'
        },
        {
          no: 'Alex er glad for at han spurte. Nå vet han hvor han skal henvende seg hvis noe er uklart – og at en kontrakt ikke er et papir man bare signerer.',
          es: 'Alex se alegra de haber preguntado. Ahora sabe a dónde dirigirse si algo no está claro, y que un contrato no es un papel que uno firma sin más.'
        }
      ],
      vocab: [
        { no: 'arbeidskontrakt', es: 'contrato de trabajo' },
        { no: 'arbeidsgiver', es: 'empleador, empleadora' },
        { no: 'arbeidstaker', es: 'trabajador, trabajadora' },
        { no: 'prøvetid', es: 'periodo de prueba' },
        { no: 'lønn', es: 'salario' },
        { no: 'ferie', es: 'vacaciones' },
        { no: 'sykepenger', es: 'pago por baja médica' },
        { no: 'arbeidsmiljø', es: 'entorno laboral' },
        { no: 'arbeidsmiljøloven', es: 'ley del entorno laboral' },
        { no: 'deltidsansatt', es: 'empleado a tiempo parcial' },
        { no: 'overtid', es: 'horas extra' },
        { no: 'tillitsvalgt', es: 'representante de los trabajadores' },
        { no: 'å henvende seg', es: 'dirigirse (a alguien)' },
        { no: 'dokumentasjon', es: 'documentación' },
        { no: 'oppsigelse', es: 'despido, rescisión' }
      ],
      phrases: [
        { no: 'Hva står i kontrakten min?', es: '¿Qué dice mi contrato?' },
        { no: 'Har jeg rett til å si nei?', es: '¿Tengo derecho a decir no?' },
        { no: 'Kan du betale for overtiden?', es: '¿Puedes pagar las horas extra?' },
        { no: 'Jeg vil gjerne snakke med den tillitsvalgte.', es: 'Quisiera hablar con el representante de los trabajadores.' }
      ],
      tip: 'El «tillitsvalgt» es la persona de confianza del sindicato en la empresa; afiliarse a un «fagforening» es habitual y te da apoyo legal. Guarda contratos, horarios y mensajes: en una disputa, la documentación manda. Y sí, el periodo de prueba no elimina tus derechos.',
      grammar: {
        title: 'Modales: må, skal, bør, kan',
        points: [
          '«må» = obligación fuerte (tiene que); «skal» = plan, norma o mandato; «bør» = recomendación (debería); «kan» = posibilidad o permiso.',
          '«ikke må» = prohibición (no debe); «ikke trenger» = no hace falta.',
          '«å ha rett til» + infinitivo = tener derecho a.',
          '«å være nødt til» = verse obligado a.'
        ],
        examples: [
          { no: 'Du må ikke jobbe uten betalt overtid.', es: 'No debes trabajar horas extra sin cobrar.' },
          { no: 'Du bør samle dokumentasjon.', es: 'Deberías reunir documentación.' },
          { no: 'Har jeg rett til å si nei?', es: '¿Tengo derecho a decir no?' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: 'Hva fikk Alex da han begynte i jobben?',
          options: ['En muntlig avtale', 'En skriftlig arbeidskontrakt', 'Et telefonnummer', 'En ferie'],
          answer: 1,
          explain: 'El texto dice «fikk han en skriftlig arbeidskontrakt»: contrato por escrito.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el modal de prohibición:',
          sentence: 'Du ___ ikke jobbe uten betalt overtid.',
          answers: ['må'],
          bank: ['må', 'kan', 'bør', 'skal'],
          es: 'No debes trabajar horas extra sin cobrar.',
          explain: '«Må ikke» expresa prohibición. «Bør ikke» sería solo un consejo.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el verbo que expresa recomendación («deberías»):',
          sentence: 'Du ___ samle dokumentasjon før du klager.',
          answers: ['bør'],
          bank: ['bør', 'må', 'kan', 'skal'],
          es: 'Deberías reunir documentación antes de quejarte.',
          explain: '«Bør» es el modal de recomendación; «må» sería una obligación más fuerte.'
        },
        {
          type: 'cloze',
          prompt: 'Completa con el modal o la palabra adecuada:',
          text: 'Arbeidsgiveren ___ betale for overtid. Hvis noe er uklart, ___ du snakke med den tillitsvalgte. Du ___ ikke signere en kontrakt uten å lese den. Alle har rett til ___ og sykepenger.',
          answers: ['skal', 'bør', 'må', 'ferie'],
          bank: ['skal', 'bør', 'må', 'ferie', 'kan', 'vil', 'lønn', 'overtid'],
          es: 'El empleador debe pagar las horas extra. Si algo no está claro, deberías hablar con el representante. No debes firmar un contrato sin leerlo. Todos tienen derecho a vacaciones y pago por baja.',
          explain: '«Skal» marca norma, «bør» recomendación, «må ikke» prohibición. «Ferie» es vacaciones.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe como recomendación («deberías»):',
          source: 'Du må snakke med sjefen.',
          answer: 'Du bør snakke med sjefen.',
          hint: 'må → bør',
          es: 'Deberías hablar con el jefe.',
          explain: '«Må» obliga; «bør» aconseja. En una situación delicada, «bør» suena mucho más suave.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pasiva:',
          source: 'Arbeidsgiveren betaler ikke overtid.',
          answer: 'Overtiden blir ikke betalt.',
          hint: 'bli + participio',
          es: 'Las horas extra no se pagan.',
          explain: '«Overtid» pasa a sujeto definido: overtiden. El agente no hace falta mencionarlo.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Du har rett til å si nei.',
          hint: '7 palabras · un derecho básico',
          es: 'Tienes derecho a decir no.',
          explain: '«Å ha rett til å» + infinitivo es la estructura fija para expresar un derecho.'
        },
        {
          type: 'match',
          prompt: 'Empareja los términos laborales:',
          pairs: [
            { a: 'arbeidsgiver', b: 'empleador' },
            { a: 'arbeidstaker', b: 'trabajador' },
            { a: 'prøvetid', b: 'periodo de prueba' },
            { a: 'overtid', b: 'horas extra' },
            { a: 'tillitsvalgt', b: 'representante de los trabajadores' },
            { a: 'oppsigelse', b: 'despido' }
          ],
          explain: '«Arbeidsgiver» da el trabajo; «arbeidstaker» lo recibe. «Oppsigelse» puede ser despido o renuncia según el contexto.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué es el «tillitsvalgt»?',
          options: [
            'El jefe de recursos humanos',
            'La persona que representa a los trabajadores',
            'El inspector de trabajo',
            'El abogado de la empresa'
          ],
          answer: 1,
          explain: 'Es el representante de los trabajadores, normalmente vinculado al sindicato. No forma parte de la dirección.'
        }
      ]
    },
    /* ------------------------------------------------------------------ 12 */
    {
      id: 'retorikk',
      image: 'assets/img/lessons/retorikk.svg',
      imageAlt: 'Persona dando un discurso ante un público con burbujas de argumentos',
      num: 12,
      emoji: '🎤',
      level: 'C1',
      title: 'Retorikk i debatten',
      subtitle: 'Argumentar con matices, refutar y detectar trucos retóricos',
      goals: [
        'Estructurar una argumentación con concesiones',
        'Refutar sin descalificar al adversario',
        'Reconocer recursos retóricos en un texto'
      ],
      text: [
        {
          no: 'Debatten om skjermtid i skolen har pågått lenge. På den ene siden står foreldre som mener at mobilen ødelegger konsentrasjonen. På den andre siden står lærere som hevder at skjermen er blitt en naturlig del av undervisningen.',
          es: 'El debate sobre el tiempo de pantalla en la escuela lleva mucho tiempo en marcha. Por un lado están los padres que opinan que el móvil destruye la concentración. Por otro, los profesores que afirman que la pantalla se ha convertido en una parte natural de la enseñanza.'
        },
        {
          no: 'Det er lett å velge side. Men spørsmålet er ikke om skjermen er god eller dårlig; spørsmålet er når, hvordan og hvor mye den brukes. Her er det grunn til å være nyansert.',
          es: 'Es fácil tomar partido. Pero la pregunta no es si la pantalla es buena o mala; la pregunta es cuándo, cómo y cuánto se usa. Aquí hay motivos para ser matizado.'
        },
        {
          no: 'Riktignok viser flere studier at hyppige avbrytelser svekker læringen. Det er et tungt argument for tydelige regler. Samtidig viser annen forskning at digitale verktøy kan gi elever med svake norskferdigheter bedre støtte enn en lærebok alene.',
          es: 'Es cierto que varios estudios muestran que las interrupciones frecuentes debilitan el aprendizaje. Es un argumento de peso a favor de normas claras. Al mismo tiempo, otras investigaciones muestran que las herramientas digitales pueden dar a los alumnos con pocas competencias en noruego un apoyo mejor que un libro de texto por sí solo.'
        },
        {
          no: 'Motstanderne av skjerm i skolen peker ofte på at elevene blir passive. Men er det skjermen som gjør dem passive, eller er det undervisningen? Et dårlig opplegg blir ikke bedre av å bytte ut nettbrettet med en tavle.',
          es: 'Los opositores a las pantallas en la escuela suelen señalar que los alumnos se vuelven pasivos. Pero ¿es la pantalla lo que los vuelve pasivos, o es la enseñanza? Un mal planteamiento no mejora por cambiar la tableta por una pizarra.'
        },
        {
          no: 'Poenget er ikke å forby eller å lovprise, men å stille krav til bruken. Skolen bør derfor ikke velge mellom skjerm og papir. Den bør velge det som faktisk får elevene til å tenke – og det kan være begge deler.',
          es: 'La cuestión no es prohibir ni elogiar sin medida, sino exigir un uso responsable. Por eso la escuela no debería elegir entre pantalla y papel. Debería elegir lo que de verdad hace pensar a los alumnos, y eso puede ser ambas cosas.'
        }
      ],
      vocab: [
        { no: 'å pågå', es: 'estar en curso, prolongarse', note: 'debatten har pågått lenge = el debate lleva mucho tiempo' },
        { no: 'på den ene siden', es: 'por un lado' },
        { no: 'å hevde', es: 'afirmar, sostener' },
        { no: 'nyansert', es: 'matizado, con matices' },
        { no: 'riktignok', es: 'ciertamente, es verdad que' },
        { no: 'avbrytelse', es: 'interrupción' },
        { no: 'å svekke', es: 'debilitar' },
        { no: 'samtidig', es: 'al mismo tiempo' },
        { no: 'motstander', es: 'opositor, adversario' },
        { no: 'passiv', es: 'pasivo' },
        { no: 'å bytte ut', es: 'sustituir, cambiar por' },
        { no: 'å lovprise', es: 'elogiar efusivamente' },
        { no: 'å stille krav', es: 'exigir, poner requisitos' },
        { no: 'å innvende', es: 'objetar' },
        { no: 'tungt argument', es: 'argumento de peso' }
      ],
      phrases: [
        { no: 'Det er lett å velge side. Men spørsmålet er ...', es: 'Es fácil tomar partido. Pero la pregunta es...' },
        { no: 'Riktignok ... men ...', es: 'Es cierto que... pero...' },
        { no: 'Poenget er ikke å ..., men å ...', es: 'La cuestión no es..., sino...' },
        { no: 'Det kan innvendes at ...', es: 'Se puede objetar que...' }
      ],
      tip: 'En un debate noruego, la concesión no es debilidad: «riktignok ... men ...» demuestra que has entendido al otro. Evita «du tar feil» y usa «jeg ser det annerledes» o «det er et godt poeng, men». Los tríos y las preguntas retóricas suenan bien en un kronikk, pero en una conversación pueden sonar a discurso.',
      grammar: {
        title: 'Concesión y refutación',
        points: [
          '«Riktignok ... men ...» reconoce un punto y lo contrapone: Riktignok er det dyrt, men det er verdt det.',
          '«Det stemmer at ..., men ...» valida al adversario y después refuta.',
          '«På den ene siden ... på den andre siden ...» ordena perspectivas, aunque no sean simétricas.',
          '«Det kan innvendes at ...» introduce una objeción sin atacar a nadie.',
          'Adverbios como likevel, derimot y tvert imot refuerzan el giro argumental.'
        ],
        examples: [
          { no: 'Riktignok viser studiene at avbrytelser svekker læringen, men det betyr ikke at all skjerm er skadelig.', es: 'Es cierto que los estudios muestran que las interrupciones debilitan el aprendizaje, pero eso no significa que toda pantalla sea dañina.' },
          { no: 'Det stemmer at elevene blir passive; spørsmålet er hva som gjør dem passive.', es: 'Es verdad que los alumnos se vuelven pasivos; la pregunta es qué los vuelve pasivos.' },
          { no: 'Det kan innvendes at reglene er vanskelige å håndheve. Likevel er de bedre enn ingen regler.', es: 'Se puede objetar que las normas son difíciles de aplicar. Aun así, son mejores que ninguna norma.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Cuál es la tesis central del texto?',
          options: [
            'Que el móvil debería prohibirse por completo en clase',
            'Que lo importante no es el soporte, sino cómo se usa',
            'Que los libros funcionan mejor que los dispositivos',
            'Que los profesores no saben usar la tecnología'
          ],
          answer: 1,
          explain: 'El texto rechaza la elección entre pantalla y papel y pone el foco en el uso: cuándo, cómo y cuánto.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el conector que introduce el contraste:',
          sentence: 'Riktignok er skjermen nyttig, ___ den kan også forstyrre.',
          answers: ['men'],
          bank: ['men', 'fordi', 'derfor'],
          es: 'Cierto que la pantalla es útil, pero también puede distraer.',
          explain: '«Riktignok ... men ...» es la pareja clásica de concesión y contraste.'
        },
        {
          type: 'cloze',
          prompt: 'Completa el párrafo con las palabras del debate:',
          text: 'Poenget er ikke å ___ skjermen, men å ___ krav til bruken. Det kan ___ at reglene er vanskelige, men de er ___ bedre enn ingen regler.',
          answers: ['forby', 'stille', 'innvendes', 'likevel'],
          bank: ['forby', 'stille', 'innvendes', 'likevel', 'lovprise', 'svekke'],
          es: 'La cuestión no es prohibir la pantalla, sino exigir un uso responsable. Se puede objetar que las normas son difíciles, pero aun así son mejores que ninguna norma.',
          explain: '«Forby» y «stille krav» forman la antítesis; «det kan innvendes at» introduce la objeción y «likevel» la cierra.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué efecto tiene la pregunta «Men er det skjermen som gjør dem passive, eller er det undervisningen?»?',
          options: [
            'Cierra el debate con una respuesta definitiva.',
            'Traslada toda la responsabilidad a los alumnos.',
            'Cuestiona la premisa del adversario con una alternativa.',
            'Introduce una cita de investigación.'
          ],
          answer: 2,
          explain: 'La pregunta retórica no pide información: obliga a revisar la premisa de que la pantalla es la causa.'
        },
        {
          type: 'order',
          prompt: 'Ordena la objeción:',
          words: ['Det', 'kan', 'innvendes', 'at', 'reglene', 'er', 'vanskelige,', 'men', 'de', 'er', 'nødvendige.'],
          es: 'Se puede objetar que las normas son difíciles, pero son necesarias.',
          explain: 'El verbo modal «kan» ocupa la segunda posición y el infinitivo «innvendes» va al final del primer bloque.'
        },
        {
          type: 'transform',
          prompt: 'Une las dos frases con una concesión:',
          source: 'Skjermen er nyttig. Den kan også forstyrre.',
          answer: 'Riktignok er skjermen nyttig, men den kan også forstyrre.',
          hint: 'riktignok ... men ...',
          es: 'Cierto que la pantalla es útil, pero también puede distraer.',
          explain: 'Al empezar con «riktignok», el verbo «er» se coloca detrás: riktignok er skjermen nyttig.'
        },
        {
          type: 'match',
          prompt: 'Empareja cada recurso con su función:',
          pairs: [
            { a: 'riktignok ... men', b: 'concesión y contraste' },
            { a: 'det kan innvendes at', b: 'objeción hipotética' },
            { a: 'på den ene siden', b: 'ordenar perspectivas' },
            { a: 'tvert imot', b: 'corrección fuerte del rumbo' },
            { a: 'er det skjermen ...?', b: 'pregunta retórica' }
          ],
          explain: 'Reconocer la función de cada fórmula permite usarla sin copiar frases hechas.'
        },
        {
          type: 'odd',
          prompt: '¿Qué palabra no pertenece al lenguaje del debate?',
          options: ['å hevde', 'å innvende', 'å lovprise', 'kanelsnurr'],
          answer: 3,
          explain: '«Kanelsnurr» es un rollo de canela. Delicioso, pero no forma parte del repertorio argumentativo.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Poenget er ikke å forby skjermen, men å stille krav til bruken.',
          hint: '12 palabras · la tesis del texto',
          es: 'La cuestión no es prohibir la pantalla, sino exigir un uso responsable.',
          explain: '«Ikke ... men ...» contrasta dos infinitivos: forby y stille krav.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 13 */
    {
      id: 'akademisk',
      image: 'assets/img/lessons/akademisk.svg',
      imageAlt: 'Escritorio con libros, portátil, apuntes y una taza de café',
      num: 13,
      emoji: '🎓',
      level: 'C1',
      title: 'Akademisk skriving',
      subtitle: 'Resumir fuentes, matizar hallazgos y escribir con precisión',
      goals: [
        'Describir un estudio con lenguaje académico',
        'Matizar afirmaciones con «tyde på», «kan» y «trolig»',
        'Estructurar introducción, método y conclusión'
      ],
      text: [
        {
          no: 'Søvn har lenge vært antatt å spille en viktig rolle for læring. I denne studien undersøker vi sammenhengen mellom søvnvaner og skoleprestasjoner blant 240 elever i videregående skole.',
          es: 'Desde hace tiempo se supone que el sueño desempeña un papel importante en el aprendizaje. En este estudio investigamos la relación entre los hábitos de sueño y el rendimiento escolar de 240 alumnos de secundaria.'
        },
        {
          no: 'Datamaterialet ble samlet inn gjennom et spørreskjema og elevenes karakterer fra to skoleår. Analysen indikerer at elever som sover mindre enn seks timer per natt, i gjennomsnitt oppnår lavere karakterer enn elever som sover mer.',
          es: 'Los datos se recogieron mediante un cuestionario y las notas de los alumnos de dos cursos escolares. El análisis indica que los alumnos que duermen menos de seis horas por noche obtienen de media notas más bajas que los que duermen más.'
        },
        {
          no: 'Sammenhengen er imidlertid svakere enn forventet når vi kontrollerer for sosioøkonomisk bakgrunn. Dette tyder på at søvn ikke alene forklarer forskjellene, men at den kan forsterke effekten av andre faktorer.',
          es: 'Sin embargo, la relación es más débil de lo esperado cuando controlamos el origen socioeconómico. Esto indica que el sueño no explica por sí solo las diferencias, pero puede reforzar el efecto de otros factores.'
        },
        {
          no: 'Studien har flere begrensninger. Datamaterialet er selvrapportert, og vi kan ikke utelukke at elever med gode karakterer også husker søvnvanene sine bedre. Funnene bør derfor tolkes med forsiktighet.',
          es: 'El estudio tiene varias limitaciones. Los datos son autoinformados y no podemos descartar que los alumnos con buenas notas también recuerden mejor sus hábitos de sueño. Por eso los resultados deben interpretarse con cautela.'
        },
        {
          no: 'På bakgrunn av dette argumenterer vi for at skoler bør informere om søvn, samtidig som de ikke bør fremstille søvn som en enkel løsning på strukturelle problemer. Videre forskning bør undersøke hvordan søvnvaner endrer seg over tid.',
          es: 'Sobre esta base, defendemos que las escuelas informen sobre el sueño, sin presentarlo como una solución sencilla a problemas estructurales. La investigación futura debería examinar cómo cambian los hábitos de sueño con el tiempo.'
        }
      ],
      vocab: [
        { no: 'å undersøke', es: 'investigar, examinar' },
        { no: 'sammenheng', es: 'relación, conexión' },
        { no: 'skoleprestasjon', es: 'rendimiento escolar' },
        { no: 'datamateriale', es: 'datos, material de datos' },
        { no: 'å samle inn', es: 'recoger, recopilar' },
        { no: 'å indikere', es: 'indicar' },
        { no: 'i gjennomsnitt', es: 'de media, en promedio' },
        { no: 'å kontrollere for', es: 'controlar (una variable)' },
        { no: 'sosioøkonomisk', es: 'socioeconómico' },
        { no: 'å forsterke', es: 'reforzar' },
        { no: 'begrensning', es: 'limitación' },
        { no: 'selvrapportert', es: 'autoinformado' },
        { no: 'å utelukke', es: 'descartar, excluir' },
        { no: 'med forsiktighet', es: 'con cautela' },
        { no: 'på bakgrunn av', es: 'sobre la base de, a partir de' },
        { no: 'å fremstille', es: 'presentar, describir' }
      ],
      phrases: [
        { no: 'I denne studien undersøker vi ...', es: 'En este estudio investigamos...' },
        { no: 'Funnene tyder på at ...', es: 'Los resultados indican que...' },
        { no: 'Det er imidlertid viktig å understreke at ...', es: 'Sin embargo, es importante subrayar que...' },
        { no: 'Funnene bør tolkes med forsiktighet.', es: 'Los resultados deben interpretarse con cautela.' }
      ],
      tip: 'El buen texto académico no dice «dette beviser» si el estudio es pequeño: dice «dette tyder på», «det kan se ut som» o «i denne studien». Ese matiz no es falta de seguridad, es precisión. Y no nominalices todo: «gjennomføringen av analysen» pesa más que «da vi analyserte».',
      grammar: {
        title: 'Precisión académica: pasiva, nominalización y matices',
        points: [
          'Pasiva con «bli»: Datamaterialet ble samlet inn. Sin agente, el foco está en el proceso.',
          'Nominalización: å analysere → analysen; å påvirke → påvirkningen. Aporta densidad, pero cansa si abusas.',
          'Matices epistémicos: kan, trolig, muligens, det ser ut til at, funnene tyder på at. Rebajan la certeza.',
          'Referencia a fuentes: ifølge, basert på, i tråd med, i motsetning til. Evita «alle vet».',
          '«På bakgrunn av dette» y «av den grunn» conectan el análisis con la conclusión.'
        ],
        examples: [
          { no: 'Datamaterialet ble samlet inn gjennom et spørreskjema.', es: 'Los datos se recogieron mediante un cuestionario.' },
          { no: 'Funnene tyder på at sammenhengen er svakere enn forventet.', es: 'Los resultados indican que la relación es más débil de lo esperado.' },
          { no: 'På bakgrunn av dette argumenterer vi for at skolene bør informere om søvn.', es: 'Sobre esta base, defendemos que las escuelas deberían informar sobre el sueño.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué relación describe mejor el estudio entre sueño y notas?',
          options: [
            'Una causa directa demostrada sin dudas',
            'Una correlación que se debilita al controlar el origen socioeconómico',
            'Ninguna relación relevante',
            'Una relación más fuerte de lo esperado'
          ],
          answer: 1,
          explain: 'El texto presenta una relación, pero reconoce que pierde fuerza al controlar el contexto socioeconómico.'
        },
        {
          type: 'cloze',
          prompt: 'Completa con las fórmulas académicas adecuadas:',
          text: 'Funnene ___ på at søvn har betydning, men sammenhengen er ___ enn forventet. Studien ___ imidlertid flere begrensninger, og resultatene bør ___ med forsiktighet.',
          answers: ['tyder', 'svakere', 'har', 'tolkes'],
          bank: ['tyder', 'svakere', 'har', 'tolkes', 'beviser', 'sterkere'],
          es: 'Los resultados indican que el sueño importa, pero la relación es más débil de lo esperado. El estudio tiene varias limitaciones y los resultados deben interpretarse con cautela.',
          explain: '«Tyder på» expresa una inferencia prudente; «beviser» sería demasiado categórico para estos datos.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en pasiva:',
          source: 'Vi samlet inn dataene gjennom et spørreskjema.',
          answer: 'Dataene ble samlet inn gjennom et spørreskjema.',
          hint: 'bli + participio',
          es: 'Los datos se recogieron mediante un cuestionario.',
          explain: 'El objeto «dataene» pasa a sujeto y el verbo va en pasado pasivo: ble samlet inn.'
        },
        {
          type: 'match',
          prompt: 'Empareja las fórmulas con su función:',
          pairs: [
            { a: 'ifølge', b: 'según (fuente)' },
            { a: 'i tråd med', b: 'en línea con' },
            { a: 'i motsetning til', b: 'a diferencia de' },
            { a: 'på bakgrunn av', b: 'sobre la base de' },
            { a: 'det ser ut til at', b: 'parece que' }
          ],
          explain: 'Estas fórmulas sitúan la información respecto a una fuente, una expectativa o una conclusión.'
        },
        {
          type: 'order',
          prompt: 'Ordena la conclusión:',
          words: ['På', 'bakgrunn', 'av', 'dette', 'argumenterer', 'vi', 'for', 'at', 'skolene', 'bør', 'informere.'],
          es: 'Sobre esta base, defendemos que las escuelas deberían informar.',
          explain: 'La fórmula «på bakgrunn av dette» abre la frase y el verbo principal «argumenterer» va en segunda posición.'
        },
        {
          type: 'mcq',
          prompt: '¿Cuál es la formulación más académica y prudente?',
          options: [
            'Afirmar que el sueño determina las notas.',
            'Generalizar diciendo que todos los alumnos duermen poco.',
            'Usar «kan tyde på» para presentar una inferencia.',
            'Afirmar que se ha demostrado la relación.'
          ],
          answer: 2,
          explain: '«Kan tyde på» deja espacio a la incertidumbre y evita convertir una correlación en una ley.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la preposición correcta:',
          sentence: 'Funnene bør tolkes ___ forsiktighet.',
          answers: ['med'],
          bank: ['med', 'på', 'for'],
          es: 'Los resultados deben interpretarse con cautela.',
          explain: 'La colocación fija es «å tolke noe med forsiktighet».'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Funnene tyder på at sammenhengen er svakere enn forventet.',
          hint: '9 palabras · un hallazgo matizado',
          es: 'Los resultados indican que la relación es más débil de lo esperado.',
          explain: '«Tyder på at» introduce la interpretación; «svakere enn forventet» compara con la expectativa.'
        },
        {
          type: 'fix',
          prompt: 'Toca la palabra que suena demasiado categórica:',
          sentence: 'Studien beviser at søvn er viktig.',
          wrong: 1,
          correct: 'Studien tyder på at søvn er viktig.',
          es: 'El estudio indica que el sueño es importante.',
          explain: 'Un estudio descriptivo no «beviser» una relación compleja. «Tyder på» es la opción académica.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 14 */
    {
      id: 'mellomlinjene',
      image: 'assets/img/lessons/mellomlinjene.svg',
      imageAlt: 'Dos personas conversando con mascarillas de teatro y burbujas con doble sentido',
      num: 14,
      emoji: '🎭',
      level: 'C2',
      title: 'Mellom linjene',
      subtitle: 'Leer la ironía, el eufemismo y todo lo que no se dice',
      goals: [
        'Interpretar la ironía y el understatement según el contexto',
        'Usar partículas modales para cambiar el tono',
        'Reconocer eufemismos y lenguaje indirecto'
      ],
      text: [
        {
          no: 'Det sies at nordmenn ikke har sans for ironi. Det er, som mye annet her i landet, en sannhet med modifikasjoner. Vi bruker den bare litt mindre høyt.',
          es: 'Se dice que los noruegos no tienen sentido de la ironía. Es, como tantas otras cosas aquí, una verdad con matices. Solo la usamos un poco menos alto.'
        },
        {
          no: 'Tenk på en typisk norsk samtale etter en tur i regnet. «Det var da enda godt at vi hadde med regntøy,» sier noen. Ingen tror at turen var behagelig. Setningen betyr omtrent: «Dette var forferdelig, men vi overlevde.»',
          es: 'Piensa en una conversación noruega típica después de una caminata bajo la lluvia. «Menos mal que llevamos impermeable», dice alguien. Nadie cree que el paseo fuera agradable. La frase viene a significar: «Esto fue horrible, pero sobrevivimos».'
        },
        {
          no: 'Underdrivelsen er en del av språket. Når en nordmann sier «ikke verst», kan det bety alt fra «helt greit» til «imponerende». Når han sier «det går nok», lover han ingenting. Og når han sier «jaja», har samtalen ofte allerede tatt en annen retning.',
          es: 'La atenuación forma parte de la lengua. Cuando un noruego dice «no está mal», puede significar desde «bastante bien» hasta «impresionante». Cuando dice «ya saldrá», no promete nada. Y cuando dice «bueno...», la conversación a menudo ya ha tomado otra dirección.'
        },
        {
          no: 'Ironi handler ikke bare om ord, men om tonefall, blikk og fellesskap. Den som sier «så hyggelig» med et skjevt smil, mener kanskje det motsatte. Derfor er det lettere å misforstå ironi i skrift – særlig på meldinger, der stemmen mangler.',
          es: 'La ironía no va solo de palabras, sino de entonación, mirada y complicidad. Quien dice «qué agradable» con una sonrisa torcida quizá quiere decir lo contrario. Por eso es más fácil malinterpretar la ironía por escrito, sobre todo en los mensajes, donde falta la voz.'
        },
        {
          no: 'For den som lærer norsk, er det fristende å ta alt bokstavelig. Men noen ganger ligger poenget ikke i setningen, men i det som ikke blir sagt. Å lytte etter pausene er også å lære språket.',
          es: 'Para quien aprende noruego, es tentador tomarlo todo al pie de la letra. Pero a veces el quid no está en la frase, sino en lo que no se dice. Escuchar las pausas también es aprender la lengua.'
        }
      ],
      vocab: [
        { no: 'å ha sans for', es: 'tener sensibilidad para, apreciar' },
        { no: 'sannhet med modifikasjoner', es: 'verdad con matices' },
        { no: 'underdrivelse', es: 'atenuación, expresión contenida' },
        { no: 'enda godt', es: 'menos mal' },
        { no: 'omtrent', es: 'aproximadamente, más o menos' },
        { no: 'å overleve', es: 'sobrevivir' },
        { no: 'ikke verst', es: 'no está mal' },
        { no: 'å love', es: 'prometer' },
        { no: 'tonefall', es: 'entonación' },
        { no: 'blikk', es: 'mirada' },
        { no: 'skjevt smil', es: 'sonrisa torcida' },
        { no: 'å misforstå', es: 'malinterpretar' },
        { no: 'bokstavelig', es: 'literal, al pie de la letra' },
        { no: 'pause', es: 'pausa' },
        { no: 'å ligge i', es: 'estar en, residir en', note: 'poenget ligger i ... = el quid está en...' }
      ],
      phrases: [
        { no: 'Det var da enda godt.', es: 'Menos mal.' },
        { no: 'Det går nok.', es: 'Ya saldrá / seguro que sale.' },
        { no: 'Ikke verst, altså.', es: 'No está nada mal.' },
        { no: 'Jeg tar meg ikke nær av det.', es: 'No me lo tomo a mal.' }
      ],
      tip: 'El «nei» noruego a menudo empieza con «jeg vet ikke helt» o «det kan nok være». No es evasión: es cortesía. Y cuidado con el understatement: «det var da enda godt» puede ser alivio sincero o ironía pura. Sin contexto, elige la lectura literal; con un «liksom» o una sonrisa torcida, sospecha.',
      grammar: {
        title: 'Partículas modales, ironía y eufemismo',
        points: [
          'Partículas como jo, da, vel, nok y visst no cambian el contenido, pero sí la actitud: Det er jo sant; Det går nok.',
          '«jo» busca acuerdo; «da» suaviza o enfatiza; «vel» expresa duda cortés; «nok» probabilidad; «visst» rumor o distancia.',
          'El understatement resta intensidad: «ikke verst», «ganske greit», «det kunne vært verre».',
          'El eufemismo evita la palabra directa: å gå bort (morir), en utfordring (un problema), å være kreativ med sannheten (mentir).',
          'En la escritura, la ironía necesita contexto: comillas, contraste o una frase que corrija la lectura literal.'
        ],
        examples: [
          { no: 'Det er jo ikke akkurat sommer i dag.', es: 'Es que hoy no es precisamente verano.' },
          { no: 'Det går nok bra, skal du se.', es: 'Ya verás como sale bien.' },
          { no: '«Litt utfordrende» kan bety «kaos».', es: '«Un poco complicado» puede significar «caos».' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué significa «Det var da enda godt» tras una caminata bajo la lluvia?',
          options: [
            'Que el paseo fue agradable',
            'Alivio irónico: menos mal que sobrevivimos',
            'Que no llevaban impermeable',
            'Una invitación a repetir el paseo'
          ],
          answer: 1,
          explain: 'La frase reconoce un pequeño alivio dentro de una situación desagradable. El tono puede ser sincero o irónico.'
        },
        {
          type: 'match',
          prompt: 'Empareja cada expresión con su intención:',
          pairs: [
            { a: 'ikke verst', b: 'no está mal; puede ser un elogio' },
            { a: 'det går nok', b: 'probabilidad tranquila, sin promesa' },
            { a: 'jaja', b: 'cambio de tema o resignación' },
            { a: 'så hyggelig', b: 'puede ser ironía si la sonrisa es torcida' },
            { a: 'det kunne vært verre', b: 'consuelo con atenuación' }
          ],
          explain: 'La misma fórmula puede ser sincera o irónica. El contexto y la entonación deciden.'
        },
        {
          type: 'cloze',
          prompt: 'Completa con las partículas modales:',
          text: 'Det er ___ sant at han kom sent. – Ja, det er ___ typisk ham. – Det går ___ bra.',
          answers: ['jo', 'da', 'nok'],
          bank: ['jo', 'da', 'nok', 'vel', 'visst'],
          es: 'Es que es verdad que llegó tarde. — Sí, es típico de él. — Seguro que sale bien.',
          explain: '«Jo» busca acuerdo, «da» presenta lo evidente con un matiz de resignación y «nok» expresa probabilidad.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué significa «Han gikk bort» en un contexto serio?',
          options: [
            'Se mudó',
            'Murió',
            'Se perdió',
            'Se enfadó'
          ],
          answer: 1,
          explain: '«Å gå bort» es un eufemismo establecido para morir. En otro contexto puede ser literal, pero aquí manda el registro.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe con un understatement:',
          source: 'Filmen var kjedelig.',
          answer: 'Filmen var ikke akkurat spennende.',
          hint: 'ikke akkurat + adjetivo',
          es: 'La película no era precisamente emocionante.',
          explain: '«Ikke akkurat spennende» dice lo mismo que «kjedelig», pero con más distancia y menos ataque directo.'
        },
        {
          type: 'gap',
          prompt: 'Completa la frase con el remate del understatement:',
          sentence: 'Etter ulykken sa hun bare: «Det kunne vært ___.»',
          answers: ['verre'],
          bank: ['verre', 'bedre', 'bra'],
          es: 'Después del accidente solo dijo: «Podría haber sido peor».',
          explain: '«Det kunne vært verre» es una fórmula fija de consuelo contenido.'
        },
        {
          type: 'order',
          prompt: 'Ordena la idea clave:',
          words: ['Noen', 'ganger', 'ligger', 'poenget', 'i', 'det', 'som', 'ikke', 'blir', 'sagt.'],
          es: 'A veces el quid está en lo que no se dice.',
          explain: '«Ligge i» se usa aquí en sentido figurado: el punto reside en algo.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Jeg sovnet bare to ganger. Det sier vel sitt.',
          hint: '9 palabras · ironía suave',
          es: 'Solo me dormí dos veces. Eso lo dice todo.',
          explain: '«Det sier vel sitt» es una forma irónica de decir que algo habla por sí solo.'
        },
        {
          type: 'fix',
          prompt: 'Toca la palabra que sobra:',
          sentence: 'Jeg tar meg ikke nær av det, jeg.',
          wrong: 7,
          correct: 'Jeg tar meg ikke nær av det.',
          es: 'No me lo tomo a mal.',
          explain: 'El pronombre final «jeg» sobra: la frase ya tiene sujeto. En el habla se oye, pero en la escritura estorba.'
        }
      ]
    },

    /* ------------------------------------------------------------------ 15 */
    {
      id: 'litteratur',
      image: 'assets/img/lessons/litteratur.svg',
      imageAlt: 'Libro abierto del que sale una ventana con una planta y lluvia',
      num: 15,
      emoji: '📖',
      level: 'C2',
      title: 'Litteratur og tolkning',
      subtitle: 'Leer símbolos, voz narrativa y silencios en un relato',
      goals: [
        'Analizar la voz narrativa y el punto de vista',
        'Interpretar símbolos con pruebas del texto',
        'Escribir una interpretación matizada en presente'
      ],
      text: [
        {
          no: 'Leiligheten luktet fortsatt av kaffe og sitron. Ingrid satte flyttekassene fra seg i gangen og åpnet vinduet. Ute var det april, og bjørka i gården hadde akkurat fått musører.',
          es: 'El piso seguía oliendo a café y limón. Ingrid dejó las cajas de mudanza en el recibidor y abrió la ventana. Fuera era abril, y el abedul del patio acababa de echar sus primeras hojas.'
        },
        {
          no: 'Moren hadde bodd der i trettifem år. I skuffen ved komfyren lå det en bunke kvitteringer, en saks og et fotografi av en mann Ingrid ikke kjente. På baksiden stod det bare et årstall: 1978.',
          es: 'Su madre había vivido allí treinta y cinco años. En el cajón junto a la cocina había un montón de recibos, unas tijeras y una fotografía de un hombre que Ingrid no conocía. En el reverso solo ponía un año: 1978.'
        },
        {
          no: 'Hun satte fotografiet på spisebordet og fortsatte å pakke. Hver gjenstand var lett å legge ned, men vanskelig å kaste. Etter en time hadde hun fylt tre kasser og tomt nesten ingenting.',
          es: 'Puso la fotografía sobre la mesa y siguió haciendo cajas. Cada objeto era fácil de guardar, pero difícil de tirar. Al cabo de una hora había llenado tres cajas y vaciado casi nada.'
        },
        {
          no: 'Da hun skulle ta ned planten fra vinduskarmen, så hun at potten var sprukket. Røttene hadde vokst gjennom sprekken og laget et tynt, hvitt nett mot glasset. Hun lot den stå.',
          es: 'Cuando fue a bajar la planta del alféizar, vio que la maceta estaba rajada. Las raíces habían crecido por la grieta y formaban una red fina y blanca contra el cristal. La dejó donde estaba.'
        },
        {
          no: 'Utenfor begynte det å regne. Ingrid tenkte at hun kanskje skulle ringe broren sin. Hun hadde sagt at hun ikke trengte hjelp. Det var sant, og det var ikke sant, på samme tid.',
          es: 'Fuera empezó a llover. Ingrid pensó que quizá debería llamar a su hermano. Había dicho que no necesitaba ayuda. Era verdad, y no era verdad, al mismo tiempo.'
        }
      ],
      vocab: [
        { no: 'forteller', es: 'narrador, narradora' },
        { no: 'synsvinkel', es: 'punto de vista, perspectiva narrativa' },
        { no: 'motiv', es: 'motivo (tema recurrente)' },
        { no: 'symbol', es: 'símbolo' },
        { no: 'metafor', es: 'metáfora' },
        { no: 'besjeling', es: 'personificación' },
        { no: 'stemning', es: 'atmósfera, ambiente' },
        { no: 'antydning', es: 'insinuación, sugerencia' },
        { no: 'ambivalens', es: 'ambivalencia' },
        { no: 'undertekst', es: 'subtexto' },
        { no: 'å tolke', es: 'interpretar' },
        { no: 'å tyde', es: 'descifrar, interpretar' },
        { no: 'språklig virkemiddel', es: 'recurso lingüístico' },
        { no: 'å utelate', es: 'omitir, dejar fuera' },
        { no: 'gjennomgående', es: 'recurrente, constante' }
      ],
      phrases: [
        { no: 'Teksten kan leses som ...', es: 'El texto puede leerse como...' },
        { no: 'Det er nærliggende å tolke ...', es: 'Es tentador interpretar...' },
        { no: 'Forfatteren overlater til leseren å ...', es: 'La autora deja al lector...' },
        { no: 'Symbolikken peker mot ...', es: 'El simbolismo apunta a...' }
      ],
      tip: 'Una interpretación no es adivinar la intención secreta del autor: es proponer una lectura y defenderla con detalles. En noruego académico se dice «teksten kan tolkes som», no «teksten betyr egentlig». Una duda bien argumentada vale más que una certeza sin pruebas.',
      grammar: {
        title: 'Voz, símbolo y subtexto',
        points: [
          'Synsvinkel: una tercera persona que solo sabe lo que sabe Ingrid da cercanía y, a la vez, distancia.',
          'Symbol: un objeto concreto (la ventana, la planta, la fotografía) que adquiere varias capas de sentido.',
          'Metafor y personificación: «bjørka hadde fått musører» da vida a la naturaleza y marca la estación.',
          'Undertekst: lo que no se dice directamente. Las repeticiones y contradicciones («sant» / «ikke sant») apuntan hacia ello.',
          'Para escribir sobre literatura: presente, verbos como skildrer, antyder, peker mot, y siempre un detalle o una cita como apoyo.'
        ],
        examples: [
          { no: 'Vinduet fungerer som en terskel mellom inne og ute.', es: 'La ventana funciona como umbral entre el interior y el exterior.' },
          { no: 'Planten som vokser gjennom den sprukne potten, kan tolkes som et bilde på det som ikke lar seg pakke bort.', es: 'La planta que crece a través de la maceta rajada puede interpretarse como una imagen de lo que no se deja guardar.' },
          { no: 'Fortelleren sier ikke at Ingrid er ensom; hun lar leseren forstå det.', es: 'La narradora no dice que Ingrid esté sola; deja que el lector lo entienda.' }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué tipo de narrador tiene el relato?',
          options: [
            'Primera persona: Ingrid cuenta su propia historia',
            'Tercera persona limitada al punto de vista de Ingrid',
            'Narrador omnisciente que conoce a todos los personajes',
            'Segunda persona: se dirige al lector'
          ],
          answer: 1,
          explain: 'El relato usa tercera persona, pero solo muestra lo que Ingrid ve, recuerda y piensa.'
        },
        {
          type: 'match',
          prompt: 'Empareja cada recurso con su ejemplo o función:',
          pairs: [
            { a: 'synsvinkel', b: 'solo vemos lo que Ingrid ve y sabe' },
            { a: 'symbol', b: 'la planta en la maceta rajada' },
            { a: 'besjeling', b: '«bjørka ... hadde fått musører»' },
            { a: 'undertekst', b: '«Det var sant, og det var ikke sant»' },
            { a: 'motiv', b: 'el piso, la ventana y la lluvia' }
          ],
          explain: 'El análisis literario une un recurso con un detalle concreto, no con una impresión vaga.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué lectura de la planta es más defendible?',
          options: [
            'Que Ingrid es jardinera profesional',
            'Que la vida sigue y no todo se puede empaquetar',
            'Que la madre odiaba las plantas',
            'Que el piso está en mal estado y nada más'
          ],
          answer: 1,
          explain: 'La maceta rajada y las raíces que escapan sostienen la idea de algo que crece y no se deja guardar.'
        },
        {
          type: 'cloze',
          prompt: 'Completa el análisis con los verbos adecuados:',
          text: 'Teksten ___ Ingrids forsøk på å rydde morens leilighet. Vinduet ___ mot gården, og planten ___ som et bilde på noe som vokser videre. Fortelleren ___ imidlertid ikke at Ingrid er alene.',
          answers: ['skildrer', 'vender', 'fungerer', 'sier'],
          bank: ['skildrer', 'vender', 'fungerer', 'sier', 'gjemmer', 'roper'],
          es: 'El texto describe el intento de Ingrid de vaciar el piso de su madre. La ventana da al patio y la planta funciona como imagen de algo que sigue creciendo. Sin embargo, la narradora no dice que Ingrid esté sola.',
          explain: '«Skildrer» describe, «fungerer som» establece una función simbólica y «sier ikke» señala lo que queda en el subtexto.'
        },
        {
          type: 'order',
          prompt: 'Ordena la tesis de un análisis:',
          words: ['Teksten', 'kan', 'leses', 'som', 'en', 'fortelling', 'om', 'tap', 'og', 'videreføring.'],
          es: 'El texto puede leerse como un relato sobre la pérdida y la continuidad.',
          explain: '«Kan leses som» es una fórmula académica prudente para proponer una interpretación.'
        },
        {
          type: 'transform',
          prompt: 'Reescribe en presente y con un matiz académico:',
          source: 'Ingrid var ensom, men hun innrømmet det ikke.',
          answer: 'Teksten antyder at Ingrid er ensom, men hun innrømmer det ikke.',
          hint: 'antydet at + presente',
          es: 'El texto sugiere que Ingrid está sola, pero ella no lo admite.',
          explain: 'El análisis literario suele ir en presente. «Antyder at» presenta la lectura como inferencia, no como hecho.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el verbo que expresa dirección simbólica:',
          sentence: 'Symbolikken ___ mot det som ikke lar seg si.',
          answers: ['peker'],
          bank: ['peker', 'ser', 'går'],
          es: 'El simbolismo apunta a lo que no se puede decir.',
          explain: '«Å peke mot» es la colocación habitual para indicar hacia dónde apunta un símbolo.'
        },
        {
          type: 'listen',
          prompt: 'Dictado: escribe exactamente lo que oyes.',
          audio: 'Hun hadde sagt at hun ikke trengte hjelp.',
          hint: '8 palabras · una frase clave del relato',
          es: 'Había dicho que no necesitaba ayuda.',
          explain: 'El pluscuamperfecto «hadde sagt» marca una acción anterior al momento de la mudanza.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué detalle del texto es más ambiguo?',
          options: [
            'El olor a café y limón',
            'El año 1978 en la fotografía',
            'La lluvia tras la ventana',
            'Las cajas de mudanza'
          ],
          answer: 1,
          explain: 'El año y el hombre desconocido abren una historia que el relato no explica. Esa ausencia es parte del sentido.'
        }
      ]
    }
  ],

  /* -------------------------------------------------------------------- */
  dialogues: [
    {
      id: 'oppgangen',
      image: 'assets/img/dialogues/oppgangen.svg',
      imageAlt: 'Dos vecinos conversando en el portal de un edificio',
      emoji: '🏢',
      level: 'A2',
      title: 'I oppgangen',
      subtitle: 'El vecino, el paquete y el reciclaje',
      intro: 'Llegas a casa con las manos llenas y te encuentras con el vecino en el portal. Una conversación corta, educada y muy noruega: primero el saludo, luego la ayuda práctica.',
      lines: [
        { who: 'Nabo', no: 'Hei! Du bor i leiligheten ved siden av meg, ikke sant?', es: '¡Hola! Vives en el piso de al lado, ¿verdad?' },
        { who: 'Du', no: 'Jo, det stemmer. Jeg flyttet inn for to uker siden.', es: 'Sí, exacto. Me mudé hace dos semanas.' },
        { who: 'Nabo', no: 'Velkommen! Jeg heter Bjørn. Har du fått nøkkelen til boden?', es: '¡Bienvenido! Me llamo Bjørn. ¿Ya tienes la llave del trastero?' },
        { who: 'Du', no: 'Nei, ikke ennå. Vet du hvem jeg skal spørre?', es: 'No, todavía no. ¿Sabes a quién tengo que preguntar?' },
        { who: 'Nabo', no: 'Snakk med vaktmesteren. Han er her på tirsdager.', es: 'Habla con el conserje. Está aquí los martes.' },
        { who: 'Du', no: 'Takk! Forresten, er det en pakke til meg der?', es: '¡Gracias! Por cierto, ¿hay un paquete para mí ahí?' },
        { who: 'Nabo', no: 'Ja, den kom i går. Jeg tok den inn så den ikke skulle bli våt.', es: 'Sí, llegó ayer. Lo metí dentro para que no se mojara.' },
        { who: 'Du', no: 'Så snilt av deg. Vil du ha en kaffe som takk?', es: 'Qué amable de tu parte. ¿Quieres un café en agradecimiento?' },
        { who: 'Nabo', no: 'Gjerne det! Jeg kommer ned om ti minutter.', es: '¡Con gusto! Bajo en diez minutos.' }
      ],
      vocab: [
        { no: 'oppgang', es: 'portal, escalera' },
        { no: 'leilighet', es: 'piso, apartamento' },
        { no: 'ved siden av', es: 'al lado de' },
        { no: 'flyttet inn', es: 'me mudé (a un sitio)' },
        { no: 'bod', es: 'trastero' },
        { no: 'vaktmester', es: 'conserje, manitas' },
        { no: 'pakke', es: 'paquete' },
        { no: 'våt', es: 'mojado' },
        { no: 'snill', es: 'amable, bueno' },
        { no: 'gjerne', es: 'con gusto, claro' }
      ],
      phrases: [
        { no: 'ikke sant?', es: '¿verdad?' },
        { no: 'Har du fått ...?', es: '¿Ya has recibido ...?' },
        { no: 'Så snilt av deg.', es: 'Qué amable de tu parte.' },
        { no: 'Jeg kommer ned om ti minutter.', es: 'Bajo en diez minutos.' }
      ],
      tip: '«Jo» es la respuesta a una pregunta negativa o a una suposición: «Du bor her, ikke sant?» → «Jo». Si contestas «ja» también se entiende, pero «jo» suena más natural. Y fíjate en «bod»: casi nadie te explica qué es, pero todo edificio noruego tiene uno.',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué ha pasado con el paquete?',
          options: ['Está mojado', 'Está en el trastero', 'El vecino lo ha metido dentro', 'No es para el protagonista'],
          answer: 2,
          explain: 'El vecino lo metió dentro para que no se mojara. Ese es el pequeño favor que abre la conversación.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la palabra correcta:',
          sentence: 'Jeg flyttet ___ for to uker siden.',
          answers: ['inn'],
          bank: ['inn', 'ut', 'opp'],
          es: 'Me mudé hace dos semanas.',
          explain: '«Flytte inn» = mudarse a un sitio. «Flytte ut» = mudarse fuera.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Han', 'er', 'her', 'på', 'tirsdager.'],
          es: 'Está aquí los martes.',
          explain: '«På tirsdager» = los martes, en plural. Es una rutina, no un martes concreto.'
        },
        {
          type: 'listen',
          audio: 'Jeg tok den inn så den ikke skulle bli våt.',
          es: 'Lo metí dentro para que no se mojara.',
          explain: '«Så ... ikke skulle» = para que no... El verbo «skulle» marca la intención.'
        },
        {
          type: 'mcq',
          prompt: '¿Qué significa «Gjerne det»?',
          options: ['Claro que sí', 'Quizá mañana', 'No, gracias', 'Lo siento'],
          answer: 0,
          explain: '«Gjerne» acepta una oferta con gusto. Es una de las palabras más útiles para sonar natural.'
        }
      ]
    },
    {
      id: 'kafeen',
      image: 'assets/img/dialogues/kafeen.svg',
      imageAlt: 'Dos personas pidiendo café en una cafetería noruega',
      emoji: '☕',
      level: 'A2',
      title: 'På kafeen',
      subtitle: 'Pedir café sin quedarte en blanco',
      intro: 'La cola avanza, el camarero te mira y tú solo recuerdas «kaffe». Esta escena te da las frases justas para pedir, pagar y encontrar sitio.',
      lines: [
        { who: 'Ansatt', no: 'Hei! Hva skal du ha?', es: '¡Hola! ¿Qué vas a tomar?' },
        { who: 'Du', no: 'En kaffe, takk. Har dere kanelboller?', es: 'Un café, por favor. ¿Tenéis rollos de canela?' },
        { who: 'Ansatt', no: 'Ja, de er ferske. Vil du ha stor eller liten kaffe?', es: 'Sí, están recién hechos. ¿Quieres el café grande o pequeño?' },
        { who: 'Du', no: 'Stor, takk. Kan jeg betale med kort?', es: 'Grande, por favor. ¿Puedo pagar con tarjeta?' },
        { who: 'Ansatt', no: 'Ja, det går fint. Vil du ha kvittering?', es: 'Sí, claro. ¿Quieres recibo?' },
        { who: 'Du', no: 'Nei takk. Kan jeg sitte ved vinduet?', es: 'No, gracias. ¿Puedo sentarme junto a la ventana?' },
        { who: 'Ansatt', no: 'Selvfølgelig. Jeg roper navnet ditt når det er klart.', es: 'Por supuesto. Gritaré tu nombre cuando esté listo.' },
        { who: 'Du', no: 'Det er meg: Alex. Tusen takk!', es: 'Ese soy yo: Alex. ¡Muchas gracias!' }
      ],
      vocab: [
        { no: 'hva skal du ha', es: 'qué vas a tomar' },
        { no: 'kanelbolle', es: 'rollo de canela' },
        { no: 'fersk', es: 'recién hecho, fresco' },
        { no: 'stor', es: 'grande' },
        { no: 'liten', es: 'pequeño' },
        { no: 'betale med kort', es: 'pagar con tarjeta' },
        { no: 'kvittering', es: 'recibo' },
        { no: 'ved vinduet', es: 'junto a la ventana' },
        { no: 'selvfølgelig', es: 'por supuesto' },
        { no: 'rope', es: 'gritar, llamar' }
      ],
      phrases: [
        { no: 'Hva skal du ha?', es: '¿Qué vas a tomar?' },
        { no: 'Kan jeg betale med kort?', es: '¿Puedo pagar con tarjeta?' },
        { no: 'Jeg roper navnet ditt.', es: 'Gritaré tu nombre.' },
        { no: 'Tusen takk!', es: '¡Muchas gracias!' }
      ],
      tip: 'En Noruega se pide en la barra y se paga al momento. «Vil du ha ...?» es la fórmula del camarero; tú puedes responder solo «Ja, takk» o «Nei takk». Ojo: «en kaffe» es un café sin más; si lo quieres con leche, pide «en latte» o «kaffe med melk».',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué pide el cliente para comer?',
          options: ['Un rollo de canela', 'Un sándwich', 'Nada', 'Una tarta'],
          answer: 0,
          explain: 'Pregunta «Har dere kanelboller?» y el camarero confirma que están recién hechos.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la palabra correcta:',
          sentence: 'Kan jeg betale ___ kort?',
          answers: ['med'],
          bank: ['med', 'på', 'av'],
          es: '¿Puedo pagar con tarjeta?',
          explain: 'La colocación es «betale med kort». «På» y «av» no encajan aquí.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Jeg', 'roper', 'navnet', 'ditt', 'når', 'det', 'er', 'klart.'],
          es: 'Gritaré tu nombre cuando esté listo.',
          explain: '«Når det er klart» = cuando esté listo. El orden es el normal de una subordinada.'
        },
        {
          type: 'listen',
          audio: 'Vil du ha stor eller liten kaffe?',
          es: '¿Quieres el café grande o pequeño?',
          explain: '«Stor eller liten» es la elección clásica en la barra. Responde solo «Stor, takk».'
        },
        {
          type: 'cloze',
          prompt: 'Completa el pedido:',
          text: 'Jeg vil gjerne ha en ___ og en ___. Kan jeg betale med ___?',
          answers: ['kaffe', 'kanelbolle', 'kort'],
          bank: ['kaffe', 'kanelbolle', 'kort', 'pose', 'kvittering', 'vindu'],
          es: 'Quiero un café y un rollo de canela. ¿Puedo pagar con tarjeta?',
          explain: '«Jeg vil gjerne ha» es la forma educada de pedir. «Med kort» completa la pregunta de pago.'
        }
      ]
    },
    {
      id: 'butikken',
      image: 'assets/img/dialogues/butikken.svg',
      imageAlt: 'Cliente y dependienta en un supermercado noruego',
      emoji: '🛒',
      level: 'A2',
      title: 'I butikken',
      subtitle: 'Encontrar lo que buscas y pagar sin drama',
      intro: 'Un supermercado noruego tiene pasillos silenciosos y precios que no siempre están donde miras. Aquí practicas cómo preguntar, comparar y pagar.',
      lines: [
        { who: 'Du', no: 'Unnskyld, hvor finner jeg melk?', es: 'Perdón, ¿dónde encuentro la leche?' },
        { who: 'Ansatt', no: 'Melken står i kjøleskapet helt bakerst til venstre.', es: 'La leche está en la nevera, del todo al fondo a la izquierda.' },
        { who: 'Du', no: 'Takk. Og har dere brød uten gluten?', es: 'Gracias. ¿Y tenéis pan sin gluten?' },
        { who: 'Ansatt', no: 'Ja, det er i hyllen ved siden av kassa.', es: 'Sí, está en el estante junto a la caja.' },
        { who: 'Du', no: 'Perfekt. Hvor mye koster denne osten?', es: 'Perfecto. ¿Cuánto cuesta este queso?' },
        { who: 'Ansatt', no: 'Den koster 89 kroner. Den er på tilbud i dag.', es: 'Cuesta 89 coronas. Hoy está de oferta.' },
        { who: 'Du', no: 'Da tar jeg den. Kan jeg få en pose?', es: 'Entonces me lo llevo. ¿Me das una bolsa?' },
        { who: 'Ansatt', no: 'Ja, posen koster tre kroner. Vil du ha kvittering?', es: 'Sí, la bolsa cuesta tres coronas. ¿Quieres recibo?' },
        { who: 'Du', no: 'Nei takk, jeg tar den på mobilen.', es: 'No, gracias, la llevo en el móvil.' }
      ],
      vocab: [
        { no: 'unnskyld', es: 'perdón, disculpe' },
        { no: 'hvor finner jeg', es: 'dónde encuentro' },
        { no: 'kjøleskap', es: 'nevera' },
        { no: 'bakerst', es: 'al fondo' },
        { no: 'hylle', es: 'estante' },
        { no: 'kasse', es: 'caja' },
        { no: 'koste', es: 'costar' },
        { no: 'tilbud', es: 'oferta' },
        { no: 'pose', es: 'bolsa' },
        { no: 'kvittering', es: 'recibo' }
      ],
      phrases: [
        { no: 'Hvor finner jeg ...?', es: '¿Dónde encuentro ...?' },
        { no: 'Hvor mye koster ...?', es: '¿Cuánto cuesta ...?' },
        { no: 'Den er på tilbud.', es: 'Está de oferta.' },
        { no: 'Da tar jeg den.', es: 'Entonces me lo llevo.' }
      ],
      tip: '«Tilbud» es una oferta de precio, no una oferta de trabajo (esa es «jobbtilbud»). En la caja te preguntarán «Vil du ha pose?»; si llevas tu propia bolsa, di «Nei takk, jeg har med egen pose». Y «jeg tar den» sirve para casi cualquier compra.',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Dónde está la leche?',
          options: ['En la caja', 'En la nevera, al fondo a la izquierda', 'Junto al pan', 'Fuera de la tienda'],
          answer: 1,
          explain: 'La dependienta dice «i kjøleskapet helt bakerst til venstre»: nevera, al fondo, a la izquierda.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la palabra correcta:',
          sentence: 'Hvor mye ___ denne osten?',
          answers: ['koster'],
          bank: ['koster', 'kjøper', 'finner'],
          es: '¿Cuánto cuesta este queso?',
          explain: '«Å koste» = costar. «Kjøpe» = comprar y «finne» = encontrar.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Kan', 'jeg', 'få', 'en', 'pose?'],
          es: '¿Me das una bolsa?',
          explain: '«Kan jeg få ...?» es la forma más natural de pedir algo en una tienda.'
        },
        {
          type: 'listen',
          audio: 'Den er på tilbud i dag.',
          es: 'Hoy está de oferta.',
          explain: '«På tilbud» = de oferta. Es una de las primeras expresiones que oirás en la caja.'
        },
        {
          type: 'match',
          prompt: 'Empareja el vocabulario de la compra:',
          pairs: [
            { a: 'kasse', b: 'caja' },
            { a: 'pose', b: 'bolsa' },
            { a: 'tilbud', b: 'oferta' },
            { a: 'kvittering', b: 'recibo' }
          ],
          explain: 'Cuatro palabras que aparecen en cualquier compra. «Kasse» también es la caja del supermercado.'
        }
      ]
    },
    {
      id: 'jobben',
      image: 'assets/img/dialogues/jobben.svg',
      imageAlt: 'Jefe y empleado hablando en una oficina',
      emoji: '💼',
      level: 'B1',
      title: 'På jobben',
      subtitle: 'Pedir más tiempo sin parecer que te escaqueas',
      intro: 'Tu jefe quiere hablar antes de comer. En Noruega eso no siempre es malo: a veces solo quiere decirte que el cliente está contento. Aprende a aceptar el halago y a pedir lo que necesitas.',
      lines: [
        { who: 'Sjef', no: 'Har du tid til en kort prat før lunsj?', es: '¿Tienes un momento para hablar antes de comer?' },
        { who: 'Du', no: 'Ja, selvfølgelig. Er det noe galt med rapporten?', es: 'Sí, claro. ¿Pasa algo con el informe?' },
        { who: 'Sjef', no: 'Nei, tvert imot. Kunden er veldig fornøyd.', es: 'No, todo lo contrario. El cliente está muy contento.' },
        { who: 'Du', no: 'Så bra! Men jeg trenger kanskje litt mer tid på neste oppgave.', es: '¡Qué bien! Pero quizá necesito algo más de tiempo para la próxima tarea.' },
        { who: 'Sjef', no: 'Hvor mye tid trenger du?', es: '¿Cuánto tiempo necesitas?' },
        { who: 'Du', no: 'To dager ekstra, hvis det er mulig. Jeg vil gjerne gjøre det skikkelig.', es: 'Dos días más, si es posible. Prefiero hacerlo bien.' },
        { who: 'Sjef', no: 'Det går fint. Send meg en ny frist på e-post, så informerer jeg teamet.', es: 'No hay problema. Mándame un nuevo plazo por correo y aviso al equipo.' },
        { who: 'Du', no: 'Takk for at du er fleksibel. Jeg skal holde deg oppdatert.', es: 'Gracias por ser flexible. Te mantendré al día.' }
      ],
      vocab: [
        { no: 'prat', es: 'charla' },
        { no: 'rapport', es: 'informe' },
        { no: 'tvert imot', es: 'todo lo contrario' },
        { no: 'fornøyd', es: 'contento, satisfecho' },
        { no: 'trenger', es: 'necesito' },
        { no: 'ekstra', es: 'extra' },
        { no: 'mulig', es: 'posible' },
        { no: 'skikkelig', es: 'bien, de verdad' },
        { no: 'frist', es: 'plazo' },
        { no: 'holde oppdatert', es: 'mantener al día' }
      ],
      phrases: [
        { no: 'Har du tid til en kort prat?', es: '¿Tienes un momento para hablar?' },
        { no: 'Er det noe galt med ...?', es: '¿Pasa algo con ...?' },
        { no: 'Tvert imot.', es: 'Todo lo contrario.' },
        { no: 'Jeg skal holde deg oppdatert.', es: 'Te mantendré al día.' }
      ],
      tip: '«Tvert imot» suena fuerte en español, pero en noruego es neutro y muy útil para corregir un malentendido. Pedir «to dager ekstra» no te hace peor trabajador; lo que molesta es no avisar. Y «skikkelig» aquí significa «bien hecho», no «serio».',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Cómo reacciona el jefe al informe?',
          options: ['Está enfadado', 'El cliente está contento', 'Quiere despedir al protagonista', 'No lo ha leído'],
          answer: 1,
          explain: 'Dice «tvert imot» y «kunden er veldig fornøyd»: la conversación empieza mejor de lo que el empleado temía.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la palabra correcta:',
          sentence: 'Jeg trenger to dager ___.',
          answers: ['ekstra'],
          bank: ['ekstra', 'alltid', 'sammen'],
          es: 'Necesito dos días más.',
          explain: '«Ekstra» se coloca después del sustantivo: «to dager ekstra».'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Send', 'meg', 'en', 'ny', 'frist', 'på', 'e-post.'],
          es: 'Mándame un nuevo plazo por correo.',
          explain: '«Send meg ...» es el imperativo de «sende». «På e-post» = por correo electrónico.'
        },
        {
          type: 'listen',
          audio: 'Jeg vil gjerne gjøre det skikkelig.',
          es: 'Prefiero hacerlo bien.',
          explain: '«Vil gjerne» suaviza el deseo. «Skikkelig» aquí significa «bien hecho».'
        },
        {
          type: 'cloze',
          prompt: 'Completa la conversación:',
          text: 'Kunden er veldig ___, så jeg trenger ikke å ___ rapporten. Men jeg vil gjerne ha en ny ___.',
          answers: ['fornøyd', 'endre', 'frist'],
          bank: ['fornøyd', 'endre', 'frist', 'glemme', 'ferie', 'prat'],
          es: 'El cliente está muy contento, así que no necesito cambiar el informe. Pero quiero un nuevo plazo.',
          explain: '«Fornøyd» describe al cliente; «endre» es cambiar; «frist» es el plazo que se negocia.'
        }
      ]
    },
    {
      id: 'lege',
      image: 'assets/img/dialogues/lege.svg',
      imageAlt: 'Médica examinando a un paciente en una consulta',
      emoji: '🩺',
      level: 'B1',
      title: 'Hos legen',
      subtitle: 'Explicar síntomas sin traductor',
      intro: 'Llevas una semana con dolor de garganta y no sabes si es para tanto. En la consulta noruega importa describir bien los síntomas y entender cuándo volver.',
      lines: [
        { who: 'Lege', no: 'Hva kan jeg hjelpe deg med i dag?', es: '¿En qué puedo ayudarte hoy?' },
        { who: 'Du', no: 'Jeg har hatt vondt i halsen og hostet i nesten en uke.', es: 'He tenido dolor de garganta y tos desde hace casi una semana.' },
        { who: 'Lege', no: 'Har du hatt feber?', es: '¿Has tenido fiebre?' },
        { who: 'Du', no: 'Ja, litt om kvelden. Men jeg har ikke vært forkjølet.', es: 'Sí, un poco por la noche. Pero no he estado resfriado.' },
        { who: 'Lege', no: 'Jeg skal lytte på lungene dine. Pust dypt inn.', es: 'Voy a escucharte los pulmones. Respira hondo.' },
        { who: 'Du', no: 'Gjør det vondt? Jeg er litt nervøs.', es: '¿Duele? Estoy un poco nervioso.' },
        { who: 'Lege', no: 'Nei, det går helt fint. Det ser ut som en vanlig halsbetennelse.', es: 'No, no pasa nada. Parece una faringitis normal.' },
        { who: 'Du', no: 'Trenger jeg antibiotika?', es: '¿Necesito antibióticos?' },
        { who: 'Lege', no: 'Nei, du bør hvile og drikke mye vann. Kom tilbake hvis det ikke blir bedre.', es: 'No, deberías descansar y beber mucha agua. Vuelve si no mejora.' }
      ],
      vocab: [
        { no: 'hjelpe', es: 'ayudar' },
        { no: 'vondt i halsen', es: 'dolor de garganta' },
        { no: 'hoste', es: 'toser' },
        { no: 'feber', es: 'fiebre' },
        { no: 'forkjølet', es: 'resfriado' },
        { no: 'lytte på', es: 'escuchar (con el fonendoscopio)' },
        { no: 'puste dypt inn', es: 'respirar hondo' },
        { no: 'nervøs', es: 'nervioso' },
        { no: 'halsbetennelse', es: 'faringitis, infección de garganta' },
        { no: 'hvile', es: 'descansar' }
      ],
      phrases: [
        { no: 'Hva kan jeg hjelpe deg med?', es: '¿En qué puedo ayudarte?' },
        { no: 'Jeg har vondt i ...', es: 'Me duele ...' },
        { no: 'Har du hatt feber?', es: '¿Has tenido fiebre?' },
        { no: 'Kom tilbake hvis det ikke blir bedre.', es: 'Vuelve si no mejora.' }
      ],
      tip: '«Jeg har vondt i halsen» = me duele la garganta; «det gjør vondt» = duele (en general). En Noruega no recetan antibióticos por una faringitis normal, así que no te sorprendas si la respuesta es «hvile og drikke vann». Si necesitas baja médica, pide «en sykmelding».',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Cuánto tiempo lleva enfermo?',
          options: ['Dos días', 'Casi una semana', 'Un mes', 'Desde ayer'],
          answer: 1,
          explain: 'Dice «i nesten en uke»: casi una semana con dolor de garganta y tos.'
        },
        {
          type: 'gap',
          prompt: 'Completa con la preposición correcta:',
          sentence: 'Jeg har hatt vondt ___ halsen.',
          answers: ['i'],
          bank: ['i', 'på', 'av'],
          es: 'He tenido dolor de garganta.',
          explain: 'La colocación es «vondt i halsen», «vondt i hodet», «vondt i ryggen».'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Du', 'bør', 'hvile', 'og', 'drikke', 'mye', 'vann.'],
          es: 'Deberías descansar y beber mucha agua.',
          explain: '«Bør» = deberías. Va seguido del infinitivo sin «å»: «bør hvile».'
        },
        {
          type: 'listen',
          audio: 'Det ser ut som en vanlig halsbetennelse.',
          es: 'Parece una faringitis normal.',
          explain: '«Det ser ut som» = parece. «Vanlig» = normal, corriente.'
        },
        {
          type: 'cloze',
          prompt: 'Completa la consulta:',
          text: 'Jeg har ___ og vondt i ___. Legen sier at jeg bør ___ og drikke vann.',
          answers: ['feber', 'halsen', 'hvile'],
          bank: ['feber', 'halsen', 'hvile', 'ferie', 'hodet', 'jobbe'],
          es: 'Tengo fiebre y dolor de garganta. El médico dice que debo descansar y beber agua.',
          explain: '«Feber», «halsen» y «hvile» son las tres palabras clave de la consulta.'
        }
      ]
    },
    {
      id: 'telefonen',
      image: 'assets/img/dialogues/telefonen.svg',
      imageAlt: 'Persona cambiando una cita por teléfono',
      emoji: '📞',
      level: 'B1',
      title: 'I telefonen',
      subtitle: 'Cambiar una cita sin perder los nervios',
      intro: 'El dentista llama, o tú llamas para mover la cita. Por teléfono no ves la cara del otro, así que las fórmulas importan el doble.',
      lines: [
        { who: 'Ansatt', no: 'Hei, du har kommet til tannklinikken. Hva kan jeg hjelpe med?', es: 'Hola, has llamado a la clínica dental. ¿En qué puedo ayudarte?' },
        { who: 'Du', no: 'Hei, jeg har en time på torsdag, men jeg må flytte den.', es: 'Hola, tengo cita el jueves, pero tengo que cambiarla.' },
        { who: 'Ansatt', no: 'Hva heter du?', es: '¿Cómo te llamas?' },
        { who: 'Du', no: 'Alex García. Timen er klokka halv tre.', es: 'Alex García. La cita es a las dos y media.' },
        { who: 'Ansatt', no: 'Jeg ser den. Når passer det bedre?', es: 'La veo. ¿Cuándo te viene mejor?' },
        { who: 'Du', no: 'Helst neste uke, på formiddagen. Har dere noe ledig på tirsdag?', es: 'Preferiblemente la semana que viene, por la mañana. ¿Tenéis algo libre el martes?' },
        { who: 'Ansatt', no: 'Vi har en ledig time tirsdag klokka ti. Passer det?', es: 'Tenemos una hora libre el martes a las diez. ¿Te va bien?' },
        { who: 'Du', no: 'Ja, det passer perfekt. Må jeg betale noe for å flytte timen?', es: 'Sí, me va perfecto. ¿Tengo que pagar algo por cambiar la cita?' },
        { who: 'Ansatt', no: 'Nei, det er gratis så lenge du sier fra før dagen.', es: 'No, es gratis siempre que avises antes del día.' }
      ],
      vocab: [
        { no: 'kommet til', es: 'has llamado a, has llegado a' },
        { no: 'tannklinikk', es: 'clínica dental' },
        { no: 'time', es: 'cita, hora' },
        { no: 'flytte', es: 'mover, cambiar' },
        { no: 'halv tre', es: 'las dos y media' },
        { no: 'helst', es: 'preferiblemente' },
        { no: 'formiddag', es: 'mañana (antes de mediodía)' },
        { no: 'ledig', es: 'libre, disponible' },
        { no: 'passe', es: 'ir bien, convenir' },
        { no: 'si fra', es: 'avisar' }
      ],
      phrases: [
        { no: 'Jeg må flytte timen.', es: 'Tengo que cambiar la cita.' },
        { no: 'Når passer det bedre?', es: '¿Cuándo te viene mejor?' },
        { no: 'Har dere noe ledig?', es: '¿Tenéis algo libre?' },
        { no: 'Det passer perfekt.', es: 'Me va perfecto.' }
      ],
      tip: '«Halv tre» son las 14:30, no las 3:30: el noruego cuenta hacia la hora siguiente. «Formiddag» va de la mañana hasta el mediodía; «ettermiddag» es la tarde. Y «si fra» es el verbo que usan para todo: avisar, decir, cancelar con tiempo.',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿A qué hora es la cita original?',
          options: ['A las 13:30', 'A las 14:30', 'A las 15:30', 'A las 10:00'],
          answer: 1,
          explain: '«Halv tre» significa las dos y media: se cuenta media hora hacia las tres.'
        },
        {
          type: 'gap',
          prompt: 'Completa con el verbo correcto:',
          sentence: 'Kan du ___ timen til tirsdag?',
          answers: ['flytte'],
          bank: ['flytte', 'betale', 'rope'],
          es: '¿Puedes cambiar la cita al martes?',
          explain: '«Flytte timen» = cambiar la cita. «Flytte» también se usa para mudarse.'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Det', 'passer', 'perfekt', 'for', 'meg.'],
          es: 'Me va perfecto.',
          explain: '«Passer for meg» = me conviene. En la conversación basta con «Det passer perfekt».'
        },
        {
          type: 'listen',
          audio: 'Har dere noe ledig på tirsdag?',
          es: '¿Tenéis algo libre el martes?',
          explain: '«Noe ledig» = algo libre. Es la pregunta clave para cambiar una cita.'
        },
        {
          type: 'cloze',
          prompt: 'Completa la llamada:',
          text: 'Jeg har en ___ på torsdag, men jeg må ___ den. Er det ___ å bytte?',
          answers: ['time', 'flytte', 'gratis'],
          bank: ['time', 'flytte', 'gratis', 'prat', 'betale', 'ledig'],
          es: 'Tengo cita el jueves, pero tengo que cambiarla. ¿Es gratis cambiarla?',
          explain: '«Time» es la cita, «flytte» es cambiarla y «gratis» responde a la duda del precio.'
        }
      ]
    }
  ],

  /* -------------------------------------------------------------------- */
  chats: [
    {
      id: 'oppganga',
      emoji: '🏢',
      level: 'A2',
      title: 'Oppganga 3B',
      subtitle: 'Dugnad, vafler y el lavadero',
      intro: 'El grupo del portal: avisos, dugnad y la promesa de gofres. Así se organiza un edificio noruego sin levantar la voz.',
      day: 'mandag',
      people: [
        { id: 'kari', name: 'Kari', color: '#ba0c2f' },
        { id: 'bjorn', name: 'Bjørn', color: '#00205b' },
        { id: 'lene', name: 'Lene', color: '#a86500' },
        { id: 'me', name: 'Du', color: '#12855a' }
      ],
      messages: [
        { who: 'kari', time: '08:12', say: 'Morn, alle sammen! Påminnelse: dugnad på lørdag klokka ti.', no: 'Morn, alle sammen! 🌞 Påminnelse: dugnad på lørdag kl 10 🧹', es: '¡Holaaa a todos! 🌞 Recordatorio: dugnad el sábado a las 10 🧹' },
        { who: 'bjorn', time: '08:15', no: 'Godt poeng. Jeg tar med koster og sekker 💪', es: 'Buena idea. Yo llevo escobas y bolsas 💪' },
        { who: 'lene', time: '08:21', say: 'Kan jeg komme klokka elleve? Jobber nattvakt.', no: 'Kan jeg komme kl 11? Jobber nattvakt 😴', es: '¿Puedo venir a las 11? Trabajo en turno de noche 😴' },
        { who: 'kari', time: '08:22', no: 'Selvfølgelig! Bare kom når du kan 😊', es: '¡Claro! Ven cuando puedas 😊' },
        { who: 'me', time: '08:40', no: 'Jeg kan vaske trappen i 3. etasje 🧽', es: 'Yo puedo limpiar la escalera del 3.º 🧽' },
        { who: 'kari', time: '08:41', no: 'Kult! Den trengs etter vinteren ❄️', es: '¡Genial! Le hace falta después del invierno ❄️' },
        { who: 'bjorn', time: '08:43', say: 'Forresten: vaskerommet er ledig søndag igjen. Ingen kø!', no: 'Btw: vaskerommet er ledig søndag igjen. Ingen kø! 🎉', es: 'Por cierto: el lavadero está libre el domingo otra vez. ¡Sin cola! 🎉' },
        { who: 'lene', time: '08:44', say: 'Endelig! Sist sto det tre stykker og ventet.', no: 'Endelig 😅 sist sto det tre stk og ventet', es: 'Por fin 😅 la otra vez había tres personas esperando' },
        { who: 'kari', time: '09:02', no: 'Jeg lager vafler til alle etterpå 🧇', es: 'Hago gofres para todos después 🧇' },
        { who: 'me', time: '09:03', no: 'Da er jeg med 😍', es: 'Entonces yo voy 😍' },
        { who: 'bjorn', time: '09:05', no: 'Samme her. Jeg tar med kaffe ☕', es: 'Yo también. Llevo el café ☕' },
        { who: 'lene', time: '09:06', no: 'Beste oppgang i Oslo, hands down 🙌', es: 'El mejor portal de Oslo, sin duda 🙌' }
      ],
      glossary: [
        { no: 'morn', es: '«hola» informal, del norte' },
        { no: 'kl', say: 'klokka', es: 'klokka = a las (hora)' },
        { no: 'dugnad', es: 'trabajo comunitario del vecindario' },
        { no: 'nattvakt', es: 'turno de noche' },
        { no: 'stk', say: 'stykker', es: 'stykker = personas, unidades' },
        { no: 'vafler', es: 'gofres' },
        { no: 'samme her', es: 'yo también' },
        { no: 'hands down', es: 'sin duda (préstamo del inglés)' }
      ],
      tip: 'La «dugnad» —el trabajo comunitario del edificio— es casi sagrada en Noruega. Fíjate en las abreviaturas: «kl» es «klokka», «stk» es «stykker». En los chats casi todo va en minúsculas y los préstamos del inglés («btw», «hands down») son del todo normales.'
    },
    {
      id: 'familien',
      emoji: '👨‍👩‍👧',
      level: 'A2',
      title: 'FAMILIEN',
      subtitle: 'Cumpleaños, pinnekjøtt y la cabaña',
      intro: 'El grupo de la familia: felicitar a papá, planear la cena del domingo y hablar de la cabaña. Abreviaturas y muchos corazones.',
      day: 'torsdag',
      people: [
        { id: 'mor', name: 'Mor', color: '#ba0c2f' },
        { id: 'far', name: 'Pappa', color: '#00205b' },
        { id: 'ida', name: 'Ida', color: '#7a4d2d' },
        { id: 'me', name: 'Du', color: '#12855a' }
      ],
      messages: [
        { who: 'mor', time: '07:58', say: 'Gratulerer med dagen, pappa!', no: 'HBD til pappa i dag!!! 🎂🎉', es: '¡¡¡Felicidades, papá!!! 🎂🎉' },
        { who: 'ida', time: '07:59', say: 'Gratulerer med dagen, pappa!', no: 'HBD pappa!!! ❤️❤️❤️', es: '¡¡Felicidades, papá!! ❤️❤️❤️' },
        { who: 'me', time: '08:01', say: 'Gratulerer med dagen! Ringer deg etter jobb.', no: 'Hbd! 🥳 Ringer deg etter jobb', es: '¡Felicidades! 🥳 Te llamo después del trabajo' },
        { who: 'far', time: '08:03', no: 'Takk, takk 😊 58 år, kan dere tro det', es: 'Gracias, gracias 😊 58 años, ¿os lo creéis?' },
        { who: 'mor', time: '08:04', say: 'Middag søndag klokka sytten. Pinnekjøtt.', no: 'Middag søndag kl 17. Pinnekjøtt 🍖', es: 'Cena el domingo a las 17. Pinnekjøtt 🍖' },
        { who: 'ida', time: '08:05', no: 'Nam!! Kan jeg ta med Jonas?', es: '¡Ñam! ¿Puedo traer a Jonas?' },
        { who: 'mor', time: '08:06', no: 'Alltid plass til Jonas 💕', es: 'Siempre hay sitio para Jonas 💕' },
        { who: 'far', time: '08:10', no: 'Sender bilder fra hytta. Snø her nå!! ⛷️', es: 'Os mando fotos de la cabaña. ¡¡Nieve aquí!! ⛷️' },
        { who: 'me', time: '08:12', no: 'Så fint!! Savner hytta 😍', es: '¡¡Qué bonito!! Echo de menos la cabaña 😍' },
        { who: 'ida', time: '08:13', no: 'Kan vi dra neste helg? 🙏', es: '¿Podemos ir el finde que viene? 🙏' },
        { who: 'far', time: '08:15', no: 'Kanskje, hvis været holder ❄️', es: 'Quizá, si aguanta el tiempo ❄️' },
        { who: 'mor', time: '08:16', no: 'Ta med ullundertøy, alle sammen 🧣 Det blir kaldt!', es: 'Llevad ropa interior de lana todos 🧣 ¡Va a hacer frío!' }
      ],
      glossary: [
        { no: 'hbd', es: 'happy birthday = feliz cumple' },
        { no: 'takk takk', es: 'gracias, gracias (más cálido)' },
        { no: 'pinnekjøtt', es: 'cordero curado al vapor, plato de fiesta' },
        { no: 'nam', es: 'ñam (qué rico)' },
        { no: 'hytta', es: 'la cabaña (la de la familia)' },
        { no: 'å dra', es: 'ir (coloquial)' },
        { no: 'ullundertøy', es: 'ropa interior de lana' },
        { no: 'alle sammen', es: 'todos (en familia, en grupo)' }
      ],
      tip: '«HBD» es «happy birthday» a lo noruego: las familias abrevian mucho y duplican emojis. «Pinnekjøtt» es el plato de cordero de las fiestas, y «hytta» no es una cabaña cualquiera: es LA cabaña, la de la familia, la de los fines de semana.'
    },
    {
      id: 'fredag',
      emoji: '🍻',
      level: 'B1',
      title: 'Fredag??',
      subtitle: 'Quiz, Vipps y «no lo gafes»',
      intro: 'El grupo de los amigos: organizar el viernes por chat, con préstamos del inglés en cada línea. Lo que oyes en la calle, pero escrito.',
      day: 'onsdag',
      people: [
        { id: 'mari', name: 'Mari', color: '#ba0c2f' },
        { id: 'jonas', name: 'Jonas', color: '#00205b' },
        { id: 'ahmed', name: 'Ahmed', color: '#7a4d2d' },
        { id: 'me', name: 'Du', color: '#12855a' }
      ],
      messages: [
        { who: 'mari', time: '16:02', say: 'Fredagsquiz på kafeen klokka nitten?', no: 'FREDAGSQUIZ på kafeen kl 19?? 🍻', es: '¿QUIZ DE VIERNES en la cafetería a las 19?? 🍻' },
        { who: 'jonas', time: '16:03', no: 'Er med! Det var dødsgøy sist 😂', es: '¡Me apunto! La última vez fue la bomba 😂' },
        { who: 'ahmed', time: '16:05', no: 'Kan ikke før 20 😕 skiftet på jobb', es: 'No puedo antes de las 20 😕 cambio en el trabajo' },
        { who: 'mari', time: '16:06', no: 'De venter til 20, chill', es: 'Esperan hasta las 20, tranqui' },
        { who: 'me', time: '16:10', no: 'Jeg også! Møtes 19.30?', es: '¡Yo también! ¿Quedamos a las 19.30?' },
        { who: 'jonas', time: '16:11', no: 'Perf. Jeg bestiller bord nå 👍', es: 'Perf. Reservo mesa ahora 👍' },
        { who: 'ahmed', time: '16:12', no: 'Hvis vi vinner igjen, kjøper jeg en runde 🏆', es: 'Si ganamos otra vez, invito a una ronda 🏆' },
        { who: 'mari', time: '16:13', no: 'Deal 🤝 men du sier det HVER gang', es: 'Trato 🤝 pero lo dices TODAS las veces' },
        { who: 'jonas', time: '16:14', no: 'Og vi vinner hver gang 😎', es: 'Y ganamos todas 😎' },
        { who: 'me', time: '16:15', no: 'Ikke jinx det!! 🤞', es: '¡¡No lo gafes!! 🤞' },
        { who: 'mari', time: '16:16', no: 'Ta med kontanter, de tar ikke vipps der', es: 'Llevad efectivo, allí no aceptan Vipps' },
        { who: 'ahmed', time: '16:17', say: 'Boomer-kafé, haha. Vi ses!', no: 'Boomer-kafé, lol. Vi ses! 👋', es: 'Café para boomers, jaja. ¡Nos vemos! 👋' }
      ],
      glossary: [
        { no: 'er med', es: 'me apunto' },
        { no: 'dødsgøy', es: 'divertidísimo (lit. mortal de risa)' },
        { no: 'chill', es: 'tranqui, sin prisa' },
        { no: 'perf', es: 'perfecto' },
        { no: 'en runde', es: 'una ronda (de bebidas)' },
        { no: 'deal', es: 'trato' },
        { no: 'jinx', es: 'gafar (préstamo del inglés)' },
        { no: 'vipps', es: 'la app noruega de pagos' }
      ],
      tip: 'El chat de amigos mezcla noruego e inglés sin pensarlo: «chill», «deal», «perf», «jinx». «Ikke jinx det» es «no lo gafes». Y «Vipps» es la app de pagos noruega, tan común que «å vippse» se usa como verbo: «jeg vippser deg» = te lo paso por Vipps.'
    },
    {
      id: 'vakter',
      emoji: '☕',
      level: 'B1',
      title: 'Vakter · kafeen',
      subtitle: 'Turnos, cambios y rollos de canela',
      intro: 'El grupo del trabajo: cambiar turnos, avisar de que se acaban los kanelboller y agradecer el esfuerzo. Informal incluso con la jefa.',
      day: 'tirsdag',
      people: [
        { id: 'siri', name: 'Siri (sjef)', color: '#ba0c2f' },
        { id: 'ole', name: 'Ole', color: '#00205b' },
        { id: 'nina', name: 'Nina', color: '#7a4d2d' },
        { id: 'me', name: 'Du', color: '#12855a' }
      ],
      messages: [
        { who: 'siri', time: '07:30', no: 'Morgen! Noen som kan ta kveldsvakt i morgen? 🙏', es: '¡Buenos días! ¿Alguien puede hacer el turno de tarde mañana? 🙏' },
        { who: 'ole', time: '07:33', no: 'Kan dessverre ikke, skal til tannlegen 🦷', es: 'No puedo, lo siento, voy al dentista 🦷' },
        { who: 'nina', time: '07:35', no: 'Jeg kan bytte hvis du tar lørdagsvakten min?', es: 'Puedo cambiar si tú haces mi turno del sábado' },
        { who: 'me', time: '07:38', no: 'Deal! Tar du søndagen min da?', es: '¡Trato! ¿Y tú haces mi domingo?' },
        { who: 'nina', time: '07:39', no: 'Funker 👍', es: 'Me vale 👍' },
        { who: 'siri', time: '07:40', no: 'Dere er gull 🌟 Oppdatert i systemet nå', es: 'Sois de oro 🌟 Ya está actualizado en el sistema' },
        { who: 'ole', time: '07:41', say: 'Forresten: vi er tomme for kanelboller igjen.', no: 'Btw: vi er tomme for kanelboller igjen 😅', es: 'Oye: nos hemos quedado sin rollos de canela otra vez 😅' },
        { who: 'siri', time: '07:43', no: 'Seriøst?? Bestiller 200 til fredag', es: '¿¿En serio?? Pido 200 para el viernes' },
        { who: 'nina', time: '07:44', no: 'Folk elsker dem på morgenen 🥐', es: 'La gente los adora por la mañana 🥐' },
        { who: 'siri', time: '07:46', no: 'Og takk for innsatsen i helgen, alle sammen 💪', es: 'Y gracias por el esfuerzo del finde a todos 💪' },
        { who: 'ole', time: '07:47', no: 'Bra tempo lørdag! Vi rocka 😎', es: '¡Buen ritmo el sábado! Lo petamos 😎' },
        { who: 'me', time: '07:48', no: 'Enig! Men nå: kaffepause ☕😴', es: '¡De acuerdo! Pero ahora: pausa para el café ☕😴' }
      ],
      glossary: [
        { no: 'vakt', es: 'turno (de trabajo)' },
        { no: 'å bytte', es: 'cambiar (turnos)' },
        { no: 'deal', es: 'trato' },
        { no: 'funker', es: 'funciona, me vale' },
        { no: 'tomme for', es: 'sin existencias de' },
        { no: 'btw', es: 'by the way = por cierto' },
        { no: 'takk for innsatsen', es: 'gracias por el esfuerzo' },
        { no: 'vi rocka', es: 'lo petamos (lit. rockeamos)' }
      ],
      tip: 'Incluso con la jefa el tono es informal: «dere er gull» (sois de oro), «vi rocka» (lo petamos). «Vakt» es turno y «å bytte» es cambiar; negociar turnos por chat es deporte nacional. «Kveldsvakt» es el turno de tarde/noche, «lørdagsvakt» el del sábado.'
    }
  ],

  /* -------------------------------------------------------------------- */
  body: {
    zones: ['hode', 'overkropp', 'rygg', 'arm', 'hånd', 'bein', 'fot'],
    parts: [
      { id: 'hode', no: 'hode', def: 'hodet', es: 'la cabeza', zone: 'hode' },
      { id: 'oye', no: 'øye', def: 'øyet', es: 'el ojo', zone: 'hode' },
      { id: 'ore', no: 'øre', def: 'øret', es: 'la oreja', zone: 'hode' },
      { id: 'nese', no: 'nese', def: 'nesen', es: 'la nariz', zone: 'hode' },
      { id: 'munn', no: 'munn', def: 'munnen', es: 'la boca', zone: 'hode' },
      { id: 'tann', no: 'tann', def: 'tannen', es: 'el diente', zone: 'hode' },
      { id: 'hals', no: 'hals', def: 'halsen', es: 'la garganta', zone: 'hode' },
      { id: 'skulder', no: 'skulder', def: 'skulderen', es: 'el hombro', zone: 'overkropp' },
      { id: 'bryst', no: 'bryst', def: 'brystet', es: 'el pecho', zone: 'overkropp' },
      { id: 'mage', no: 'mage', def: 'magen', es: 'la barriga', zone: 'overkropp' },
      { id: 'hofte', no: 'hofte', def: 'hoften', es: 'la cadera', zone: 'overkropp' },
      { id: 'nakke', no: 'nakke', def: 'nakken', es: 'la nuca', zone: 'rygg' },
      { id: 'rygg', no: 'rygg', def: 'ryggen', es: 'la espalda', zone: 'rygg' },
      { id: 'korsrygg', no: 'korsrygg', def: 'korsryggen', es: 'la zona lumbar', zone: 'rygg' },
      { id: 'arm', no: 'arm', def: 'armen', es: 'el brazo', zone: 'arm' },
      { id: 'albue', no: 'albue', def: 'albuen', es: 'el codo', zone: 'arm' },
      { id: 'handledd', no: 'håndledd', def: 'håndleddet', es: 'la muñeca', zone: 'arm' },
      { id: 'hand', no: 'hånd', def: 'hånden', es: 'la mano', zone: 'hånd' },
      { id: 'tommel', no: 'tommel', def: 'tommelen', es: 'el pulgar', zone: 'hånd' },
      { id: 'pekefinger', no: 'pekefinger', def: 'pekefingeren', es: 'el dedo índice', zone: 'hånd' },
      { id: 'langfinger', no: 'langfinger', def: 'langfingeren', es: 'el dedo corazón', zone: 'hånd' },
      { id: 'ringfinger', no: 'ringfinger', def: 'ringfingeren', es: 'el dedo anular', zone: 'hånd' },
      { id: 'lillefinger', no: 'lillefinger', def: 'lillefingeren', es: 'el meñique', zone: 'hånd' },
      { id: 'lar', no: 'lår', def: 'låret', es: 'el muslo', zone: 'bein' },
      { id: 'kne', no: 'kne', def: 'kneet', es: 'la rodilla', zone: 'bein' },
      { id: 'legg', no: 'legg', def: 'leggen', es: 'la pantorrilla', zone: 'bein' },
      { id: 'ankel', no: 'ankel', def: 'ankelen', es: 'el tobillo', zone: 'bein' },
      { id: 'fot', no: 'fot', def: 'foten', es: 'el pie', zone: 'fot' },
      { id: 'hael', no: 'hæl', def: 'hælen', es: 'el talón', zone: 'fot' },
      { id: 'storta', no: 'stortå', def: 'stortåa', es: 'el dedo gordo del pie', zone: 'fot' },
      { id: 'andreta', no: 'andretå', def: 'andretåa', es: 'el segundo dedo del pie', zone: 'fot' },
      { id: 'tredjeta', no: 'tredje tå', def: 'tredje tåa', es: 'el tercer dedo del pie', zone: 'fot' },
      { id: 'fjerdeta', no: 'fjerde tå', def: 'fjerde tåa', es: 'el cuarto dedo del pie', zone: 'fot' },
      { id: 'lilleta', no: 'lilletå', def: 'lilletåa', es: 'el quinto dedo del pie', zone: 'fot' }
    ],
    sensations: [
      { id: 'verkende', no: 'verkende', es: 'El dolor es sordo.', phrase: 'Det verker.' },
      { id: 'bankende', no: 'bankende', es: 'Late como un pulso.', phrase: 'Det banker.' },
      { id: 'stikkende', no: 'stikkende', es: 'Es un dolor punzante.', phrase: 'Det stikker.' },
      { id: 'stiv', no: 'stiv', es: 'Está rígido.', phrase: 'Det føles stivt.' },
      { id: 'hoven', no: 'hoven', es: 'Está hinchado.', phrase: 'Det er hovent.' },
      { id: 'nummen', no: 'nummen', es: 'Está adormecido.', phrase: 'Det er numment.' }
    ],
    intensities: [
      { id: 'litt', no: 'litt', es: 'Me duele un poco.', phrase: 'Det gjør litt vondt.' },
      { id: 'ganske', no: 'ganske', es: 'Me duele bastante.', phrase: 'Det gjør ganske vondt.' },
      { id: 'veldig', no: 'veldig', es: 'Me duele mucho.', phrase: 'Det gjør veldig vondt.' }
    ],
    durations: [
      { id: 'i dag', no: 'i dag', es: 'hoy' },
      { id: 'i to dager', no: 'i to dager', es: 'desde hace dos días' },
      { id: 'i en uke', no: 'i en uke', es: 'desde hace una semana' },
      { id: 'i tre uker', no: 'i tre uker', es: 'desde hace tres semanas' }
    ],
    phrases: [
      { no: 'Hvor gjør det vondt?', es: '¿Dónde te duele?' },
      { no: 'Det gjør vondt her.', es: 'Me duele aquí.' },
      { no: 'Jeg har vondt i ...', es: 'Me duele ...' },
      { no: 'Jeg har hatt vondt i ... i ... dager.', es: 'Llevo ... días con dolor en ...' },
      { no: 'Det er hovent og rødt.', es: 'Está hinchado y rojo.' },
      { no: 'Jeg klarer ikke å gå på det.', es: 'No puedo apoyarme en él.' },
      { no: 'Jeg har feber og fryser.', es: 'Tengo fiebre y escalofríos.' },
      { no: 'Jeg er kvalm.', es: 'Tengo náuseas.' },
      { no: 'Kan jeg få en time hos fastlegen?', es: '¿Puedo pedir cita con mi médico de cabecera?' },
      { no: 'Jeg trenger en sykmelding.', es: 'Necesito una baja médica.' }
    ],
    scenarios: [
      {
        id: 'hodepine',
        title: 'Hodepine',
        intro: 'Un dolor de cabeza que no se va.',
        lines: [
          { who: 'Lege', no: 'Hvor lenge har du hatt vondt i hodet?', es: '¿Cuánto tiempo llevas con dolor de cabeza?' },
          { who: 'Du', no: 'I tre dager. Det banker, og jeg er kvalm.', es: 'Desde hace tres días. Me late y tengo náuseas.' },
          { who: 'Lege', no: 'Har du tatt noe smertestillende?', es: '¿Has tomado algo para el dolor?' },
          { who: 'Du', no: 'Ja, men det hjelper ikke.', es: 'Sí, pero no ayuda.' }
        ]
      },
      {
        id: 'mage',
        title: 'Magesmerter',
        intro: 'Dolor en la parte baja del abdomen.',
        lines: [
          { who: 'Lege', no: 'Hvor gjør det vondt?', es: '¿Dónde te duele?' },
          { who: 'Du', no: 'Her, nederst i magen. Det stikker.', es: 'Aquí, en la parte baja del estómago. Es punzante.' },
          { who: 'Lege', no: 'Har du hatt diaré eller feber?', es: '¿Has tenido diarrea o fiebre?' },
          { who: 'Du', no: 'Litt feber, men ikke diaré.', es: 'Un poco de fiebre, pero no diarrea.' }
        ]
      },
      {
        id: 'ankel',
        title: 'Forstuet ankel',
        intro: 'Un tobillo torcido después de entrenar.',
        lines: [
          { who: 'Lege', no: 'Hva har skjedd?', es: '¿Qué ha pasado?' },
          { who: 'Du', no: 'Jeg tråkket over på trening. Ankelen er hoven.', es: 'Me torcí el tobillo entrenando. Lo tengo hinchado.' },
          { who: 'Lege', no: 'Kan du stå på foten?', es: '¿Puedes apoyar el pie?' },
          { who: 'Du', no: 'Ja, men det gjør veldig vondt.', es: 'Sí, pero me duele mucho.' }
        ]
      }
    ],
    tip: 'La fórmula base es «jeg har vondt i» + la forma definida de la parte del cuerpo: «hodet», «kneet», «tåa». No uses «på»: «vondt på magen» es el error clásico. Para la duración, «i tre dager» significa «desde hace tres días»; el verbo pasa a «jeg har hatt».',
    exercises: [
      {
        type: 'mcq',
        prompt: '¿Qué significa «tå»?',
        options: ['Dedo del pie', 'Dedo de la mano', 'Talón', 'Tobillo'],
        answer: 0,
        explain: '«Tå» es un dedo del pie; «fot» es el pie entero y «hæl» el talón.'
      },
      {
        type: 'gap',
        prompt: 'Completa con la preposición correcta:',
        sentence: 'Jeg har vondt ___ hodet.',
        answers: ['i'],
        bank: ['i', 'på', 'av'],
        es: 'Me duele la cabeza.',
        explain: 'La colocación es «vondt i» + parte del cuerpo en forma definida.'
      },
      {
        type: 'order',
        prompt: 'Ordena la frase:',
        words: ['Jeg', 'har', 'hatt', 'vondt', 'i', 'kneet', 'i', 'tre', 'dager.'],
        es: 'Llevo tres días con dolor en la rodilla.',
        explain: 'Con duración se usa «har hatt vondt i ... i ... dager».'
      },
      {
        type: 'listen',
        audio: 'Det gjør vondt når jeg går.',
        es: 'Me duele cuando camino.',
        explain: '«Når jeg går» = cuando camino. Sirve para describir cuándo duele.'
      },
      {
        type: 'match',
        prompt: 'Empareja las partes del cuerpo:',
        pairs: [
          { a: 'hode', b: 'cabeza' },
          { a: 'fot', b: 'pie' },
          { a: 'tann', b: 'diente' },
          { a: 'kne', b: 'rodilla' }
        ],
        explain: 'Cuatro básicas para cualquier consulta.'
      },
      {
        type: 'fix',
        prompt: 'Toca la palabra equivocada:',
        sentence: 'Jeg har vondt på magen.',
        wrong: 3,
        correct: 'Jeg har vondt i magen.',
        es: 'Me duele la barriga.',
        explain: 'Siempre «vondt i», nunca «vondt på».'
      },
      {
        type: 'cloze',
        prompt: 'Completa la consulta:',
        text: 'Jeg har ___ i halsen og ___. Jeg trenger en ___.',
        answers: ['vondt', 'feber', 'sykmelding'],
        bank: ['vondt', 'feber', 'sykmelding', 'varm', 'ferie', 'time'],
        es: 'Me duele la garganta y tengo fiebre. Necesito una baja médica.',
        explain: '«Vondt i halsen», «feber» y «sykmelding» son las tres palabras clave.'
      },
      {
        type: 'mcq',
        prompt: 'El médico pregunta: «Gjør det vondt når jeg trykker her?». ¿Qué te está preguntando?',
        options: ['Si duele cuando presiona ahí', 'Si puedes caminar', 'Si tienes fiebre', 'Cuándo comiste'],
        answer: 0,
        explain: '«Å trykke» es presionar; «gjør det vondt» pregunta si duele.'
      }
    ]
  },

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
  ],

  /* ==================================================================
     TULL & TØYS — ejercicios absurdos, tablas y juegos
     ================================================================== */
  fun: {
    intro: 'Noruego para reírte un poco. Aquí no hay exámenes: hay alces en la lavadora, jefes que hablan como robots y palabras que significan lo contrario de lo que parece. Si te equivocas, mejor: de eso se ríe uno en Noruega.',
    packs: [
      {
        id: 'absurd',
        emoji: '🤪',
        level: 'A1–A2',
        title: 'Absurdistan',
        subtitle: 'Alces, cactus y gatos que hablan noruego',
        intro: 'Frases que no necesitas en la vida real, pero que te obligan a mirar la gramática sin dormirte. El nivel es A1–A2; el absurdo es internacional.',
        exercises: [
          {
            type: 'mcq',
            prompt: '¿Qué significa «Jeg spiser en kaktus»?',
            options: ['Como un cactus', 'Abrazo un cactus', 'Riego un cactus', 'Me duele un cactus'],
            answer: 0,
            audio: 'Jeg spiser en kaktus',
            explain: '«Å spise» = comer. En Noruega nadie come cactus, pero el verbo ya no se te olvida.'
          },
          {
            type: 'odd',
            prompt: '¿Qué palabra no encaja en una cafetería?',
            options: ['kaffe', 'te', 'kanelsnurr', 'sko'],
            answer: 3,
            explain: '«Sko» son zapatos. Puedes entrar con ellos, pero no pedirlos con leche.'
          },
          {
            type: 'gap',
            prompt: 'Completa el chiste:',
            sentence: 'Katten min ___ norsk, men bare på mandager.',
            answers: ['snakker'],
            bank: ['snakker', 'spiser', 'bor'],
            es: 'Mi gato habla noruego, pero solo los lunes.',
            explain: '«Snakker» es la forma de presente de «å snakke». El gato es raro, no la conjugación.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra que sobra:',
            sentence: 'Jeg heter for Alex.',
            wrong: 2,
            correct: 'Jeg heter Alex.',
            es: 'Me llamo Alex.',
            explain: '«Å hete» no lleva «for». «Jeg heter Alex» ya está completo; «for» sobra como un invitado en una boda vegana.'
          },
          {
            type: 'order',
            prompt: 'Ordena la escena doméstica:',
            words: ['Elgen', 'sover', 'i', 'vaskemaskinen.'],
            es: 'El alce duerme en la lavadora.',
            explain: 'Sujeto + verbo + lugar. El orden es lo único normal de esta frase.'
          },
          {
            type: 'mcq',
            prompt: 'Estás en el bus y aparece un alce. ¿Qué dices?',
            options: ['Unnskyld, er dette setet ditt?', 'Elgen er sjefen min.', 'Jeg heter alke.', 'Hvor er kaktusen?'],
            answer: 0,
            explain: 'La cortesía noruega no se pierde ni delante de un alce. «Er dette setet ditt?» = ¿es este tu asiento?'
          },
          {
            type: 'gap',
            prompt: 'Completa con la prenda correcta:',
            sentence: 'Om vinteren bruker jeg tre gensere og en ___ på hodet.',
            answers: ['lue'],
            bank: ['lue', 'sko', 'hanske'],
            es: 'En invierno uso tres jerséis y un gorro en la cabeza.',
            explain: '«Lue» es el gorro de lana. «Hanske» es el guante, que va en la mano y no en la cabeza.'
          },
          {
            type: 'cloze',
            prompt: 'Completa el relato del vecino:',
            text: 'Jeg våknet klokka fire fordi naboen ___ opera i dusjen. Jeg banket på døren, men han ___ bare «Carmen!»',
            answers: ['sang', 'ropte'],
            bank: ['sang', 'ropte', 'sov', 'hvisket'],
            es: 'Me desperté a las cuatro porque el vecino cantaba ópera en la ducha. Llamé a la puerta, pero él solo gritó «¡Carmen!».',
            explain: '«Sang» es el pasado de «å synge» (cantar) y «ropte» el de «å rope» (gritar). El vecino no se disculpó.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Unnskyld, er det din pingvin?',
            hint: '5 palabras · un animal inesperado',
            es: 'Perdona, ¿es tu pingüino?',
            explain: '«Pingvin» se pronuncia más o menos «ping-vin». La pregunta educada no arregla el pingüino, pero ayuda.'
          },
          {
            type: 'mcq',
            prompt: '¿Cuál es la frase correcta?',
            options: ['Jeg liker ikke fisk.', 'Jeg liker ikke av fisk.', 'Jeg ikke liker fisk.', 'Jeg liker fisk ikke.'],
            answer: 0,
            explain: 'La negación «ikke» va detrás del verbo. «Jeg liker ikke fisk» = no me gusta el pescado.'
          },
          {
            type: 'odd',
            prompt: '¿Qué no es un día de la semana?',
            options: ['mandag', 'tirsdag', 'torsdag', 'kjøleskap'],
            answer: 3,
            explain: '«Kjøleskap» es nevera. Un día de la semana muy frío, pero no aparece en el calendario.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Hun bor på Norge.',
            wrong: 2,
            correct: 'Hun bor i Norge.',
            es: 'Ella vive en Noruega.',
            explain: 'Con países se usa «i»: i Norge, i Spania. «På» se queda para islas y para «på jobb».'
          },
          {
            type: 'order',
            prompt: 'Ordena la compra más noruega:',
            words: ['Elgen', 'bestilte', 'en', 'kaffe', 'og', 'betalte', 'med', 'kort.'],
            es: 'El alce pidió un café y pagó con tarjeta.',
            explain: '«Bestilte» y «betalte» son pasados regulares. El alce, en cambio, es un cliente difícil.'
          },
          {
            type: 'gap',
            prompt: 'Completa la presentación de Olga:',
            sentence: 'Jeg har en ___ som heter Olga. Hun er sjefen i huset.',
            answers: ['katt'],
            bank: ['katt', 'kaktus', 'elg'],
            es: 'Tengo una gata que se llama Olga. Ella es la jefa de la casa.',
            explain: '«Katt» es gato o gata; «en katt» es común, «ei katt» también se oye. Olga manda igual.'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «tull»?',
            options: ['Tonterías', 'Tulipán', 'Turbina', 'Túnel'],
            answer: 0,
            explain: '«Tull» son tonterías. «Tull og tøys» es la expresión que da nombre a esta sección: puro disparate.'
          }
        ]
      },
      {
        id: 'overlevelse',
        emoji: '🧯',
        level: 'A2–B1',
        title: 'Norsk for overlevelse',
        subtitle: 'Quedar, disculparte y entender lo que no se dice',
        intro: 'El noruego que necesitas para no quedarte mirando al suelo en una quedada, una cena o una clase de spinning. Incluye mentiras piadosas y excusas oficiales.',
        exercises: [
          {
            type: 'mcq',
            prompt: 'Alguien te dice «Kos deg!». ¿Qué te está deseando?',
            options: ['Que disfrutes', 'Que te calles', 'Que pagues', 'Que corras'],
            answer: 0,
            audio: 'Kos deg!',
            explain: '«Kos deg» = disfruta. Se dice con café, con cena y hasta con una tarde de sofá y manta.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Jeg gleder meg for å se deg i morgen.',
            wrong: 3,
            correct: 'Jeg gleder meg til å se deg i morgen.',
            es: 'Tengo ganas de verte mañana.',
            explain: 'La expresión fija es «glede seg til». «For» aquí no pega ni con cola.'
          },
          {
            type: 'gap',
            prompt: 'Completa el tópico noruego:',
            sentence: 'Det er typisk norsk å ta med egen ___ på tur.',
            answers: ['matpakke'],
            bank: ['matpakke', 'pizza', 'kaktus'],
            es: 'Es típicamente noruego llevar tu propia fiambrera de excursión.',
            explain: 'La «matpakke» es sagrada: pan con queso envuelto en papel. No se discute.'
          },
          {
            type: 'odd',
            prompt: '¿Qué no es una comida?',
            options: ['frokost', 'lunsj', 'middag', 'møte'],
            answer: 3,
            explain: '«Møte» es reunión. En algunas empresas ocupa el horario de la comida, pero no cuenta como alimento.'
          },
          {
            type: 'match',
            prompt: 'Empareja estos falsos amigos (o casi):',
            pairs: [
              { a: 'flink', b: 'hábil, bueno' },
              { a: 'gøy', b: 'divertido' },
              { a: 'snill', b: 'amable' },
              { a: 'kjekk', b: 'guapo' },
              { a: 'aktuell', b: 'relevante' },
              { a: 'real', b: 'de fiar, legal' }
            ],
            explain: '«Flink» no es flink, «snill» no es silly y «real» no es real. Son falsos amigos con muy buena reputación.'
          },
          {
            type: 'cloze',
            prompt: 'Completa el dicho noruego:',
            text: 'Det finnes ikke dårlig vær, bare dårlige ___.',
            answers: ['klær'],
            bank: ['klær', 'sko', 'ord'],
            es: 'No existe el mal tiempo, solo ropa mala.',
            explain: 'El dicho es «Det finnes ikke dårlig vær, bare dårlige klær». En Bergen lo repiten cada mañana.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Jeg kommer litt senere, jeg må finne sokker.',
            hint: '8 palabras · una excusa muy noruega',
            es: 'Llego un poco más tarde, tengo que encontrar calcetines.',
            explain: '«Litt senere» = un poco más tarde. Los calcetines son una causa nacional de retraso.'
          },
          {
            type: 'transform',
            prompt: 'Reescribe en pasado:',
            source: 'Jeg kjøper melk.',
            answer: 'Jeg kjøpte melk.',
            hint: 'kjøpe → kjøpte',
            es: 'Compré leche.',
            explain: 'Los verbos en -e suelen hacer el pasado en -te: kjøpe → kjøpte. La leche sigue siendo leche.'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «å kjede seg»?',
            options: ['Aburrirse', 'Encadenarse', 'Quedarse en casa', 'Tener frío'],
            answer: 0,
            explain: 'Es aburrirse. No tiene nada que ver con «kid» ni con cadenas, aunque un lunes por la mañana se parezca.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Jeg har bodd i Norge siden to år.',
            wrong: 5,
            correct: 'Jeg har bodd i Norge i to år.',
            es: 'He vivido en Noruega durante dos años.',
            explain: '«Siden» va con un momento concreto (siden 2020); para una duración se usa «i» (i to år).'
          },
          {
            type: 'order',
            prompt: 'Ordena la petición desesperada:',
            words: ['Kan', 'du', 'sende', 'meg', 'koden', 'til', 'wifi-en?'],
            es: '¿Puedes enviarme la contraseña del wifi?',
            explain: 'Pregunta con verbo primero: Kan du...? El wifi es un derecho humano en las cabañas noruegas.'
          },
          {
            type: 'mcq',
            prompt: 'Llegas tarde a una cita. ¿Qué suena más noruego?',
            options: ['Beklager, jeg er litt sen.', 'Jeg er ikke sen, du er tidlig.', 'Beklager, jeg er en elg.', 'Jeg kommer aldri.'],
            answer: 0,
            explain: 'Disculpa breve, sin drama. «Litt sen» suaviza el retraso; lo de ser un alce se reserva para emergencias.'
          },
          {
            type: 'gap',
            prompt: 'Completa el concepto nacional:',
            sentence: 'Nordmenn elsker ___ og bål.',
            answers: ['friluftsliv'],
            bank: ['friluftsliv', 'kino', 'shopping'],
            es: 'A los noruegos les encanta la vida al aire libre y las hogueras.',
            explain: '«Friluftsliv» = vida al aire libre. Es una palabra, un deporte y una religión con botas de montaña.'
          },
          {
            type: 'cloze',
            prompt: 'Completa la compra del viernes:',
            text: 'På fredag skulle jeg bare kjøpe melk, men jeg kom hjem med ___ og ___.',
            answers: ['godteri', 'potetgull'],
            bank: ['godteri', 'potetgull', 'melk', 'brød'],
            es: 'El viernes solo iba a comprar leche, pero volví a casa con chuches y patatas fritas.',
            explain: '«Godteri» son chuches y «potetgull» patatas fritas. La leche se quedó en la tienda, como siempre.'
          },
          {
            type: 'odd',
            prompt: '¿Qué palabra no es una estación?',
            options: ['vinter', 'vår', 'sommer', 'helg'],
            answer: 3,
            explain: '«Helg» es fin de semana. No es una estación, pero a veces dura menos que el invierno.'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «å ta seg en tur»?',
            options: ['Salir a dar una vuelta', 'Tomar una ducha', 'Coger el autobús', 'Hacer la compra'],
            answer: 0,
            explain: 'Es salir a pasear o hacer una excursión corta. Puede ser al bosque, a la playa o a la nevera.'
          }
        ]
      },
      {
        id: 'kontor',
        emoji: '💼',
        level: 'B1',
        title: 'Kontoret kaller',
        subtitle: 'Reuniones, correos y frases que significan otra cosa',
        intro: 'El español de oficina tiene «te lo reenvío»; el noruego tiene «bare en liten påminnelse». Aprende a sobrevivir a la semana laboral sin perder la sonrisa.',
        exercises: [
          {
            type: 'mcq',
            prompt: '«Hei, bare en liten påminnelse ...». ¿Qué tono tiene?',
            options: ['Recordatorio educado (pero puede ser pasivo-agresivo)', 'Una declaración de amor', 'Una amenaza legal', 'Una invitación a cenar'],
            answer: 0,
            explain: 'Es un recordatorio suave. «Bare en liten» es la sonrisa antes de decirte que ya van tres correos.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra que sobra:',
            sentence: 'Vi må diskutere om saken på møtet.',
            wrong: 3,
            correct: 'Vi må diskutere saken på møtet.',
            es: 'Tenemos que discutir el asunto en la reunión.',
            explain: '«Å diskutere» ya lleva objeto directo: diskutere saken. «Om» sobra y suena a traducción automática.'
          },
          {
            type: 'gap',
            prompt: 'Completa el correo:',
            sentence: 'Kan du sende meg ___ innen fredag?',
            answers: ['referatet'],
            bank: ['referatet', 'kaffen', 'kaktusen'],
            es: '¿Puedes enviarme el acta antes del viernes?',
            explain: '«Referatet» es el acta o resumen de la reunión. «Innen fredag» = antes del viernes.'
          },
          {
            type: 'cloze',
            prompt: 'Completa el correo de baja:',
            text: 'Kjære kolleger, jeg er dessverre ___ i dag. Jeg har fått en ___ som gjør at jeg snakker som en ___.',
            answers: ['syk', 'forkjølelse', 'frosk'],
            bank: ['syk', 'forkjølelse', 'frosk', 'frisk', 'ferie', 'elg'],
            es: 'Estimados colegas: hoy estoy enfermo, por desgracia. He pillado un resfriado que hace que hable como una rana.',
            explain: '«Syk» = enfermo, «forkjølelse» = resfriado y «frosk» = rana. La rana es lo más honesto del correo.'
          },
          {
            type: 'match',
            prompt: 'Empareja el vocabulario de oficina:',
            pairs: [
              { a: 'å følge opp', b: 'hacer seguimiento' },
              { a: 'å ta en avgjørelse', b: 'tomar una decisión' },
              { a: 'å utsette', b: 'posponer' },
              { a: 'å delegere', b: 'delegar' },
              { a: 'frist', b: 'plazo' },
              { a: 'innspill', b: 'aportación, sugerencia' }
            ],
            explain: '«Frist» es el plazo, no el fin de semana (helg). Y «å utsette» es lo que pasa con todos los plazos.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase de reunión:',
            words: ['Møtet', 'varer', 'til', 'klokka', 'tre.'],
            es: 'La reunión dura hasta las tres.',
            explain: '«Å vare» = durar. Si dura hasta las tres, la agenda era optimista.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Jeg har sendt deg en e-post, men du har ikke svart.',
            hint: '10 palabras · el seguimiento clásico',
            es: 'Te he enviado un correo, pero no has respondido.',
            explain: '«Å svare» = responder. El correo existe; la respuesta, todavía no.'
          },
          {
            type: 'transform',
            prompt: 'Reescribe en pasiva:',
            source: 'Vi tar beslutningen i morgen.',
            answer: 'Beslutningen tas i morgen.',
            hint: 'El objeto pasa al principio: beslutningen + tas',
            es: 'La decisión se toma mañana.',
            explain: 'En pasiva, «tar» se convierte en «tas»: beslutningen tas. Suena más formal y más de acta.'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «å være sykmeldt»?',
            options: ['Estar de baja médica', 'Estar de vacaciones', 'Trabajar desde casa', 'Estar en prácticas'],
            answer: 0,
            explain: 'Es estar de baja con justificante médico. No es lo mismo que «ferie» (vacaciones), aunque las dos se disfruten.'
          },
          {
            type: 'odd',
            prompt: '¿Qué no es un trabajo?',
            options: ['lærer', 'sykepleier', 'møte', 'baker'],
            answer: 2,
            explain: '«Møte» es reunión. Hay quien vive de ellas, pero no cuenta como profesión oficial.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Jeg ser frem for å høre fra deg.',
            wrong: 3,
            correct: 'Jeg ser frem til å høre fra deg.',
            es: 'Espero tener noticias tuyas.',
            explain: 'La expresión es «se frem til». «For» aquí es el error que todos cometemos el primer día.'
          },
          {
            type: 'mcq',
            prompt: 'El jefe dice «Det er en spennende utfordring». ¿Qué significa en la práctica?',
            options: ['Es un marrón interesante', 'Es un ascenso seguro', 'Es un día libre', 'Es una felicitación'],
            answer: 0,
            explain: '«Spennende utfordring» suele ser un problema disfrazado de oportunidad. Sonríe y pide el plazo por escrito.'
          },
          {
            type: 'order',
            prompt: 'Ordena la petición educada:',
            words: ['Kan', 'du', 'sende', 'referatet', 'før', 'lunsj?'],
            es: '¿Puedes enviar el acta antes de comer?',
            explain: '«Før lunsj» = antes de comer. Es una fecha límite que todo el mundo entiende.'
          },
          {
            type: 'gap',
            prompt: 'Completa con la forma correcta:',
            sentence: 'Jeg jobber ___ hver tirsdag.',
            answers: ['hjemmefra'],
            bank: ['hjemmefra', 'hjemme', 'hjem'],
            es: 'Trabajo desde casa todos los martes.',
            explain: '«Hjemmefra» = desde casa. «Hjemme» = en casa, sin movimento. «Hjem» = hacia casa.'
          },
          {
            type: 'cloze',
            prompt: 'Completa el drama de la reunión:',
            text: 'Sjefen sa at vi skulle ___ en ny ___ , men vi endte med å ___ møtet igjen.',
            answers: ['ta', 'avgjørelse', 'utsette'],
            bank: ['ta', 'avgjørelse', 'utsette', 'spise', 'ferie', 'kake'],
            es: 'El jefe dijo que tomaríamos una nueva decisión, pero acabamos posponiendo la reunión otra vez.',
            explain: '«Ta en avgjørelse» = tomar una decisión. «Endte med å utsette» = acabamos posponiendo. El círculo se cierra.'
          },
          {
            type: 'mcq',
            prompt: '¿Cuál es la forma más natural de pedir algo en el trabajo?',
            options: ['Kan du ...?', 'Du skal ...', 'Kanskje du burde ...', 'Jeg befaler ...'],
            answer: 0,
            explain: '«Kan du ...?» es directo y educado. Las otras opciones van del pasivo-agresivo al emperador romano.'
          }
        ]
      },
      {
        id: 'lytt',
        emoji: '🎧',
        level: 'A2–B1',
        title: 'Lytt og le',
        subtitle: 'Dictados cortos con sorpresa final',
        intro: 'Ocho frases para entrenar el oído. No hay trampa: hay acentos, risas y algún animal. Escucha, escribe y comprueba. Puedes repetir tantas veces como quieras.',
        exercises: [
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Katten min heter Olga og hun hater mandager.',
            hint: '7 palabras · una gata con opiniones',
            es: 'Mi gata se llama Olga y odia los lunes.',
            explain: '«Hater» es odiar. Olga tiene razón: los lunes son un invento.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Unnskyld, kan du gjenta det? Jeg tenkte på middag.',
            hint: '9 palabras · la atención va y viene',
            es: 'Perdona, ¿puedes repetirlo? Estaba pensando en la cena.',
            explain: '«Å gjenta» = repetir; «middag» = cena. La honestidad es la mejor excusa.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Det regner i Bergen, som vanlig.',
            hint: '6 palabras · el parte meteorológico nacional',
            es: 'Llueve en Bergen, como de costumbre.',
            explain: '«Som vanlig» = como de costumbre. En Bergen no es pesimismo: es clima.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Jeg har kjøpt en ny sykkel, men jeg kan ikke sykle.',
            hint: '10 palabras · una compra cuestionable',
            es: 'He comprado una bici nueva, pero no sé montar en bici.',
            explain: '«Å sykle» = montar en bici. Comprarla es el primer paso; aprender, el segundo.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Elgen står utenfor døren og vil ha kaffe.',
            hint: '8 palabras · visita inesperada',
            es: 'El alce está fuera de la puerta y quiere café.',
            explain: '«Utenfor» = fuera de. El alce no llama al timbre porque es un animal directo.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Nordmenn sier «det går bra» når det egentlig ikke går bra.',
            hint: '10 palabras · la mentira nacional',
            es: 'Los noruegos dicen «no pasa nada» cuando en realidad no va nada bien.',
            explain: '«Det går bra» puede ser «no pasa nada» o «esto es un desastre, pero sonrío». El contexto lo decide.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Jeg lover å slutte å utsette ting. I morgen.',
            hint: '9 palabras · promesa de año nuevo',
            es: 'Prometo dejar de posponer las cosas. Mañana.',
            explain: '«Å utsette» = posponer. La segunda frase desmonta la primera, y así funciona el año nuevo.'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Kan du snakke litt saktere? Jeg er fortsatt på «hei».',
            hint: '9 palabras · nivel principiante honesto',
            es: '¿Puedes hablar un poco más despacio? Todavía estoy en «hola».',
            explain: '«Saktere» = más despacio. «Fortstatt» = todavía. Todos hemos estado en «hei».'
          },
          {
            type: 'listen',
            prompt: 'Dictado: escribe exactamente lo que oyes.',
            audio: 'Jeg har bare spist frokost tre ganger i dag.',
            hint: '9 palabras · un día muy noruego',
            es: 'Solo he desayunado tres veces hoy.',
            explain: '«Bare» = solo; «tre ganger» = tres veces. El desayuno es un deporte de resistencia.'
          }
        ]
      },
      {
        id: 'hjernetrim',
        emoji: '🧠',
        level: 'B1–B2',
        title: 'Hjernetrim',
        subtitle: 'Modismos, memoria y trampas de nivel',
        intro: 'Para cuando ya entiendes las palabras pero los noruegos siguen diciendo cosas rarísimas. Modismos, condicionales y un memory para demostrar que tu cerebro funciona antes del café.',
        exercises: [
          {
            type: 'odd',
            prompt: '¿Cuál no es un falso amigo?',
            options: ['flink', 'gøy', 'snill', 'katt'],
            answer: 3,
            explain: '«Katt» es gato, sin doble sentido. Los otros tres te miran con cara de «¿seguro que sabes español?».'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Han er veldig flink i å lage mat.',
            wrong: 4,
            correct: 'Han er veldig flink til å lage mat.',
            es: 'Es muy bueno cocinando.',
            explain: '«Flink til å» + infinitivo. «Flink i» suena a que es bueno en una asignatura, no en una actividad.'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «å ta det med en klype salt»?',
            options: ['Tomarlo con pinzas', 'Echar sal a la comida', 'Tener sed', 'Ser muy salado'],
            answer: 0,
            explain: 'Es exactamente «tomarlo con una pizca de sal»: no te lo creas del todo. La expresión existe casi igual en español.'
          },
          {
            type: 'memory',
            prompt: 'Memoria: encuentra las parejas de modismos.',
            pairs: [
              { a: 'å ha bein i nesa', b: 'tener carácter' },
              { a: 'å være på bærtur', b: 'estar muy perdido' },
              { a: 'å ta en spansk en', b: 'hacer una trampa' },
              { a: 'å være blåøyd', b: 'ser ingenuo' },
              { a: 'å ha en klump i magen', b: 'tener un nudo en el estómago' },
              { a: 'å kaste inn håndkleet', b: 'rendirse' }
            ],
            explain: '«Å være på bærtur» es literalmente «estar en el camino de las bayas», o sea, perdidísimo. Muy útil en el bosque y en la vida.'
          },
          {
            type: 'cloze',
            prompt: 'Completa la frase hipotética:',
            text: 'Hvis jeg ___ rik, ville jeg kjøpt en ___ til hunden min.',
            answers: ['var', 'hytte'],
            bank: ['var', 'er', 'hytte', 'kaktus'],
            es: 'Si fuera rico, compraría una cabaña para mi perro.',
            explain: 'Condicional irreal: «hvis» + pasado, «ville» + infinitivo. El perro ya tiene planes para la cabaña.'
          },
          {
            type: 'transform',
            prompt: 'Reescribe con «Det er lenge siden»:',
            source: 'Jeg har ikke sett ham på lenge.',
            answers: ['Det er lenge siden jeg har sett ham.', 'Det er lenge siden jeg så ham.'],
            hint: 'Det er lenge siden + sujeto + verbo',
            es: 'Hace mucho que no lo veo.',
            explain: 'Las dos versiones son válidas: con perfecto («har sett») o con pasado («så»). La segunda suena más narrativa.'
          },
          {
            type: 'odd',
            prompt: '¿Qué expresión no existe?',
            options: ['ta det med ro', 'ta det med salt', 'ta det med storm', 'ta det med et smil'],
            answer: 1,
            explain: 'Existen «ta det med ro» (tranquilo), «ta noe med storm» (tomar algo por asalto) y «ta det med et smil» (tomárselo con una sonrisa). «Ta det med salt» no.'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «å kaste inn håndkleet»?',
            options: ['Rendirse', 'Lavar la ropa', 'Secarse las manos', 'Entrar en el ring'],
            answer: 0,
            explain: 'Literalmente «lanzar la toalla». Es rendirse, igual que en el boxeo. A veces lo más sano.'
          },
          {
            type: 'gap',
            prompt: 'Completa la comparación:',
            sentence: 'Han snakker norsk som en ___.',
            answers: ['innfødt'],
            bank: ['innfødt', 'turist', 'kaktus'],
            es: 'Habla noruego como un nativo.',
            explain: '«Innfødt» = nativo. «Som en innfødt» es el cumplido que todo estudiante quiere oír.'
          },
          {
            type: 'match',
            prompt: 'Empareja más modismos noruegos:',
            pairs: [
              { a: 'å gå på limpinnen', b: 'caer en la trampa' },
              { a: 'å ha noe på hjertet', b: 'tener algo que decir' },
              { a: 'å være i fyr og flamme', b: 'estar entusiasmado' },
              { a: 'å tråkke i salaten', b: 'meter la pata' },
              { a: 'å ta kaka', b: 'ser el colmo' },
              { a: 'å være på gli', b: 'estar casi convencido' }
            ],
            explain: '«Å tråkke i salaten» es pisar la ensalada, o sea, meter la pata. Todos lo hemos hecho, algunos sin ensalada.'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Jeg er enig med at det er vanskelig.',
            wrong: 3,
            correct: 'Jeg er enig i at det er vanskelig.',
            es: 'Estoy de acuerdo en que es difícil.',
            explain: '«Enig i» + opinión; «enig med» + persona. Aquí la opinión es «at det er vanskelig».'
          },
          {
            type: 'mcq',
            prompt: '¿Qué significa «å tråkke i salaten»?',
            options: ['Meter la pata', 'Pisar la ensalada', 'Hacer una ensalada', 'Caerse en el barro'],
            answer: 0,
            explain: 'Es meter la pata. La ensalada es solo la víctima metafórica.'
          },
          {
            type: 'transform',
            prompt: 'Reescribe en condicional:',
            source: 'Hvis jeg har tid, går jeg på kino.',
            answer: 'Hvis jeg hadde tid, ville jeg gå på kino.',
            hint: 'hadde + ville + infinitivo',
            es: 'Si tuviera tiempo, iría al cine.',
            explain: '«Har» → «hadde» y «går» → «ville gå». El cine sigue siendo una buena excusa.'
          },
          {
            type: 'mcq',
            prompt: '¿Cuál suena más natural para discrepar con educación?',
            options: ['Jeg ser det litt annerledes.', 'Du tar helt feil.', 'Det er tull.', 'Nei, aldri.'],
            answer: 0,
            explain: '«Jeg ser det litt annerledes» = lo veo un poco distinto. Las otras opciones son un debate de televisión.'
          }
        ]
      },
      {
        id: 'verbos',
        emoji: '🧩',
        level: 'A1–B1',
        title: 'Verbo loco',
        subtitle: 'Presente, pasado y perfecto sin drama',
        intro: 'La tabla de verbos, pero en movimiento. Presente, pasado y perfecto con frases cortas. Si aciertas todas, puedes presumir en la cola del supermercado.',
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el presente:',
            sentence: 'Jeg ___ norsk hver dag.',
            answers: ['snakker'],
            bank: ['snakker', 'snakket', 'har snakket'],
            es: 'Hablo noruego cada día.',
            explain: 'Presente de «å snakke»: snakker. La misma forma vale para jeg, du, han, hun, vi, dere y de.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el pasado:',
            sentence: 'I går ___ jeg på kino.',
            answers: ['gikk'],
            bank: ['går', 'gikk', 'har gått'],
            es: 'Ayer fui al cine.',
            explain: '«Gikk» es el pasado de «å gå». «I går» pide pasado, no perfecto.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el presente:',
            sentence: 'Hun ___ i Oslo.',
            answers: ['bor'],
            bank: ['bor', 'bodde', 'har bodd'],
            es: 'Ella vive en Oslo.',
            explain: '«Bor» es presente de «å bo». «Bodde» es pasado y «har bodd» perfecto.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el pasado:',
            sentence: 'Vi ___ hjemme i går.',
            answers: ['var'],
            bank: ['er', 'var', 'har vært'],
            es: 'Ayer estábamos en casa.',
            explain: '«Var» es el pasado de «å være». «Har vært» sería perfecto: hemos estado.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el presente:',
            sentence: 'De ___ kaffe nå.',
            answers: ['drikker'],
            bank: ['drikker', 'drakk', 'har drukket'],
            es: 'Ellos beben café ahora.',
            explain: '«Nå» pide presente: drikker. «Drakk» es pasado y «har drukket» perfecto.'
          },
          {
            type: 'transform',
            prompt: 'Reescribe en pasado:',
            source: 'Jeg spiser frokost.',
            answer: 'Jeg spiste frokost.',
            hint: 'spise → spiste',
            es: 'Desayuné.',
            explain: '«Spiste» es el pasado de «å spise». El desayuno no cambia, solo el tiempo verbal.'
          },
          {
            type: 'transform',
            prompt: 'Reescribe en perfecto:',
            source: 'Han jobber hjemme.',
            answer: 'Han har jobbet hjemme.',
            hint: 'har + participio',
            es: 'Ha trabajado desde casa.',
            explain: 'Perfecto: «har» + «jobbet». El participio no cambia con la persona.'
          },
          {
            type: 'mcq',
            prompt: '¿Cuál es el pasado de «å kjøpe»?',
            options: ['kjøpte', 'kjøper', 'har kjøpt', 'kjøpt'],
            answer: 0,
            explain: '«Kjøpte» es pasado; «kjøper» presente; «har kjøpt» perfecto; «kjøpt» participio.'
          },
          {
            type: 'mcq',
            prompt: '¿Cuál es el perfecto de «å se»?',
            options: ['har sett', 'så', 'ser', 'har se'],
            answer: 0,
            explain: '«Har sett» = he visto. «Så» es pasado y «ser» presente. «Har se» no existe, aunque suene lógico.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el participio:',
            sentence: 'Jeg har ___ i Norge i tre år.',
            answers: ['bodd'],
            bank: ['bodde', 'bodd', 'bo'],
            es: 'He vivido en Noruega durante tres años.',
            explain: 'Perfecto: har + participio. El participio de «å bo» es «bodd», con dos d.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el participio:',
            sentence: 'Hun har ___ en ny bil.',
            answers: ['kjøpt'],
            bank: ['kjøpte', 'kjøpt', 'kjøpe'],
            es: 'Ella ha comprado un coche nuevo.',
            explain: '«Har kjøpt» = ha comprado. «Kjøpte» es el pasado simple.'
          },
          {
            type: 'odd',
            prompt: '¿Cuál no es pretérito?',
            options: ['gikk', 'spiste', 'kjøpte', 'kjøper'],
            answer: 3,
            explain: '«Kjøper» es presente. Los otros tres son pasado. La trampa es clásica.'
          },
          {
            type: 'cloze',
            prompt: 'Completa la crónica del café:',
            text: 'I går ___ jeg kaffe, og nå har jeg ___ to kopper.',
            answers: ['drakk', 'drukket'],
            bank: ['drakk', 'drukket', 'drikker', 'drikke'],
            es: 'Ayer bebí café y ahora he bebido dos tazas.',
            explain: 'Pasado «drakk», perfecto «har drukket». El café es irregular incluso en noruego.'
          },
          {
            type: 'order',
            prompt: 'Ordena la confesión:',
            words: ['Jeg', 'har', 'aldri', 'vært', 'i', 'Bergen.'],
            es: 'Nunca he estado en Bergen.',
            explain: '«Har aldri vært» = nunca he estado. «Aldri» va entre el auxiliar y el participio.'
          }
        ]
      }
    ]
  },

  /* ==================================================================
     TABLA DE PALABRAS
     ================================================================== */
  wordbank: [
    { no: 'hei', es: 'hola', level: 'A1', tag: 'social' },
    { no: 'takk', es: 'gracias', level: 'A1', tag: 'social' },
    { no: 'unnskyld', es: 'perdón', level: 'A1', tag: 'social' },
    { no: 'kaffe', es: 'café', level: 'A1', tag: 'café' },
    { no: 'vann', es: 'agua', level: 'A1', tag: 'comida' },
    { no: 'brød', es: 'pan', level: 'A1', tag: 'comida' },
    { no: 'ost', es: 'queso', level: 'A1', tag: 'comida' },
    { no: 'melk', es: 'leche', level: 'A1', tag: 'comida' },
    { no: 'hus', es: 'casa', level: 'A1', tag: 'casa' },
    { no: 'bil', es: 'coche', level: 'A1', tag: 'transporte' },
    { no: 'buss', es: 'autobús', level: 'A1', tag: 'transporte' },
    { no: 'hund', es: 'perro', level: 'A1', tag: 'animales' },
    { no: 'katt', es: 'gato, gata', level: 'A1', tag: 'animales', note: 'En Noruega el gato manda. Tú solo pagas el pienso.' },
    { no: 'sol', es: 'sol', level: 'A1', tag: 'clima' },
    { no: 'regn', es: 'lluvia', level: 'A1', tag: 'clima', note: 'Bergen tiene dos estaciones: lluvia y lluvia con viento.' },
    { no: 'snø', es: 'nieve', level: 'A1', tag: 'clima' },
    { no: 'frokost', es: 'desayuno', level: 'A1', tag: 'comida' },
    { no: 'matpakke', es: 'fiambrera', level: 'A1', tag: 'comida', note: 'El objeto más sagrado de Noruega después del móvil.' },
    { no: 'lue', es: 'gorro', level: 'A1', tag: 'ropa' },
    { no: 'sykkel', es: 'bicicleta', level: 'A1', tag: 'transporte' },
    { no: 'koselig', es: 'acogedor', level: 'A2', tag: 'social' },
    { no: 'hyggelig', es: 'agradable', level: 'A2', tag: 'social' },
    { no: 'gøy', es: 'divertido', level: 'A2', tag: 'social' },
    { no: 'sliten', es: 'cansado', level: 'A2', tag: 'sentimientos' },
    { no: 'sulten', es: 'hambriento', level: 'A2', tag: 'sentimientos' },
    { no: 'tørst', es: 'sediento', level: 'A2', tag: 'sentimientos' },
    { no: 'billig', es: 'barato', level: 'A2', tag: 'dinero' },
    { no: 'dyr', es: 'caro', level: 'A2', tag: 'dinero', note: 'También significa «animal». El contexto decide si te quejas del precio o vas al zoo.' },
    { no: 'nær', es: 'cerca', level: 'A2', tag: 'lugar' },
    { no: 'langt', es: 'lejos', level: 'A2', tag: 'lugar' },
    { no: 'å handle', es: 'comprar, hacer la compra', level: 'A2', tag: 'dinero' },
    { no: 'å betale', es: 'pagar', level: 'A2', tag: 'dinero' },
    { no: 'å kjøpe', es: 'comprar', level: 'A2', tag: 'dinero' },
    { no: 'å selge', es: 'vender', level: 'A2', tag: 'dinero' },
    { no: 'å leie', es: 'alquilar', level: 'A2', tag: 'casa' },
    { no: 'å eie', es: 'poseer', level: 'A2', tag: 'casa' },
    { no: 'å låne', es: 'prestar, pedir prestado', level: 'A2', tag: 'social' },
    { no: 'å gi', es: 'dar', level: 'A2', tag: 'social' },
    { no: 'å huske', es: 'recordar', level: 'A2', tag: 'mente' },
    { no: 'å glemme', es: 'olvidar', level: 'A2', tag: 'mente' },
    { no: 'ansvar', es: 'responsabilidad', level: 'B1', tag: 'trabajo' },
    { no: 'avgjørelse', es: 'decisión', level: 'B1', tag: 'trabajo' },
    { no: 'erfaring', es: 'experiencia', level: 'B1', tag: 'trabajo' },
    { no: 'fordel', es: 'ventaja', level: 'B1', tag: 'trabajo' },
    { no: 'ulempe', es: 'desventaja', level: 'B1', tag: 'trabajo' },
    { no: 'mulighet', es: 'oportunidad', level: 'B1', tag: 'trabajo' },
    { no: 'utfordring', es: 'reto', level: 'B1', tag: 'trabajo' },
    { no: 'løsning', es: 'solución', level: 'B1', tag: 'trabajo' },
    { no: 'påminnelse', es: 'recordatorio', level: 'B1', tag: 'trabajo' },
    { no: 'frist', es: 'plazo', level: 'B1', tag: 'trabajo' },
    { no: 'møte', es: 'reunión', level: 'B1', tag: 'trabajo' },
    { no: 'referat', es: 'acta, resumen', level: 'B1', tag: 'trabajo' },
    { no: 'oppgave', es: 'tarea', level: 'B1', tag: 'trabajo' },
    { no: 'kollega', es: 'colega', level: 'B1', tag: 'trabajo' },
    { no: 'arbeidsgiver', es: 'empleador', level: 'B1', tag: 'trabajo' },
    { no: 'lønn', es: 'salario', level: 'B1', tag: 'trabajo' },
    { no: 'ferie', es: 'vacaciones', level: 'B1', tag: 'trabajo' },
    { no: 'sykmeldt', es: 'de baja médica', level: 'B1', tag: 'trabajo' },
    { no: 'oppsigelse', es: 'despido', level: 'B1', tag: 'trabajo' },
    { no: 'ansettelse', es: 'contratación', level: 'B1', tag: 'trabajo' },
    { no: 'samfunn', es: 'sociedad', level: 'B2', tag: 'sociedad' },
    { no: 'påvirkning', es: 'influencia', level: 'B2', tag: 'sociedad' },
    { no: 'bærekraftig', es: 'sostenible', level: 'B2', tag: 'sociedad' },
    { no: 'forbruk', es: 'consumo', level: 'B2', tag: 'sociedad' },
    { no: 'holdning', es: 'actitud', level: 'B2', tag: 'sociedad' },
    { no: 'forskjell', es: 'diferencia', level: 'B2', tag: 'sociedad' },
    { no: 'sammenheng', es: 'conexión, contexto', level: 'B2', tag: 'sociedad' },
    { no: 'utvikling', es: 'desarrollo', level: 'B2', tag: 'sociedad' },
    { no: 'tilbud', es: 'oferta', level: 'B2', tag: 'sociedad' },
    { no: 'etterspørsel', es: 'demanda', level: 'B2', tag: 'sociedad' },
    { no: 'regelverk', es: 'normativa', level: 'B2', tag: 'sociedad' },
    { no: 'ansvarlig', es: 'responsable', level: 'B2', tag: 'sociedad' },
    { no: 'gjensidig', es: 'mutuo', level: 'B2', tag: 'sociedad' },
    { no: 'omfattende', es: 'amplio', level: 'B2', tag: 'sociedad' },
    { no: 'nødvendigvis', es: 'necesariamente', level: 'B2', tag: 'sociedad' },
    { no: 'likevel', es: 'sin embargo', level: 'B2', tag: 'sociedad' },
    { no: 'derimot', es: 'en cambio', level: 'B2', tag: 'sociedad' },
    { no: 'ifølge', es: 'según', level: 'B2', tag: 'sociedad' },
    { no: 'forutsetning', es: 'condición previa', level: 'B2', tag: 'sociedad' },
    { no: 'konsekvens', es: 'consecuencia', level: 'B2', tag: 'sociedad' },
    { no: 'rar', es: 'extraño', level: 'A2', tag: 'falsos amigos', note: 'No es «raro» de malo: es simplemente extraño. Un «rar fyr» es un tipo peculiar.' },
    { no: 'flink', es: 'hábil, bueno', level: 'A2', tag: 'falsos amigos', note: 'No es «flink»: es el que hace las cosas bien. «Du er flink!» = ¡qué crack!' },
    { no: 'snill', es: 'amable', level: 'A2', tag: 'falsos amigos', note: 'No es «silly». Un perro snill no hace gracias: es bueno.' },
    { no: 'kjekk', es: 'guapo, majo', level: 'A2', tag: 'falsos amigos', note: 'No es «cheeky». También puede significar «majo» sin más.' },
    { no: 'aktuell', es: 'relevante', level: 'B2', tag: 'falsos amigos', note: 'No es «actual»: es lo que está sobre la mesa ahora.' },
    { no: 'real', es: 'de fiar, legal', level: 'B1', tag: 'falsos amigos', note: '«En real fyr» es un tío de fiar, no alguien real.' },
    { no: 'retorikk', es: 'retórica', level: 'C1', tag: 'sociedad' },
    { no: 'premiss', es: 'premisa', level: 'C1', tag: 'sociedad' },
    { no: 'kilde', es: 'fuente', level: 'C1', tag: 'sociedad', note: 'kildekritikk = espíritu crítico con las fuentes' },
    { no: 'nyansert', es: 'matizado', level: 'C1', tag: 'mente' },
    { no: 'underdrivelse', es: 'atenuación', level: 'C2', tag: 'mente' },
    { no: 'tonefall', es: 'entonación', level: 'C2', tag: 'mente' },
    { no: 'undertekst', es: 'subtexto', level: 'C2', tag: 'mente' },
    { no: 'forteller', es: 'narrador, narradora', level: 'C2', tag: 'mente' }
  ],

  /* ==================================================================
     TABLA DE VERBOS
     ================================================================== */
  verbs: [
    { inf: 'å være', es: 'ser, estar', present: 'er', past: 'var', perfect: 'har vært' },
    { inf: 'å ha', es: 'tener', present: 'har', past: 'hadde', perfect: 'har hatt' },
    { inf: 'å gjøre', es: 'hacer', present: 'gjør', past: 'gjorde', perfect: 'har gjort' },
    { inf: 'å gå', es: 'ir, caminar', present: 'går', past: 'gikk', perfect: 'har gått' },
    { inf: 'å komme', es: 'venir', present: 'kommer', past: 'kom', perfect: 'har kommet' },
    { inf: 'å spise', es: 'comer', present: 'spiser', past: 'spiste', perfect: 'har spist' },
    { inf: 'å snakke', es: 'hablar', present: 'snakker', past: 'snakket', perfect: 'har snakket' },
    { inf: 'å bo', es: 'vivir', present: 'bor', past: 'bodde', perfect: 'har bodd' },
    { inf: 'å jobbe', es: 'trabajar', present: 'jobber', past: 'jobbet', perfect: 'har jobbet' },
    { inf: 'å kjøpe', es: 'comprar', present: 'kjøper', past: 'kjøpte', perfect: 'har kjøpt' },
    { inf: 'å ta', es: 'tomar', present: 'tar', past: 'tok', perfect: 'har tatt' },
    { inf: 'å se', es: 'ver', present: 'ser', past: 'så', perfect: 'har sett' },
    { inf: 'å drikke', es: 'beber', present: 'drikker', past: 'drakk', perfect: 'har drukket' },
    { inf: 'å lære', es: 'aprender', present: 'lærer', past: 'lærte', perfect: 'har lært' }
  ],

  /* ==================================================================
     SIMULACRO DE EXAMEN (estilo Norskprøven A1–B2)
     Estructura oficial: 4 delprøver independientes evaluadas por destreza.
     El bokmål (textos, preguntas, opciones, audio, modelos) NO se traduce.
     ================================================================== */
  exam: {
    intro: 'Cuatro delprøver independientes, como en la Norskprøven real: comprensión lectora, comprensión auditiva, expresión escrita y expresión oral. Cada destreza se evalúa por separado y obtienes un nivel estimado (A1–B2).',
    disclaimer: 'Simulacro no oficial, creado para practicar. No sustituye a la Norskprøven de HK-dir ni tiene validez oficial.',
    howto: [
      'Elige tu nivel. Las pruebas de escritura y oral siguen el nivel que elijas, como en el examen real.',
      'Cada parte tiene su propio cronómetro; al acabarse el tiempo pasa sola a la siguiente.',
      'Lesing y lytting se corrigen al instante. Skriving y muntlig se autoevalúan con una rúbrica breve.',
      'Al terminar verás un informe por destreza, como el prøvebevis oficial.'
    ],
    levels: [
      /* ------------------------------------------------------------ A1 */
      {
        id: 'a1',
        level: 'A1',
        title: 'Simulacro A1',
        blurb: 'Frases cortas, vocabulario cotidiano y situaciones muy predecibles.',
        reading: {
          minutes: 20,
          texts: [
            {
              title: 'På kafeen',
              body: [
                'Alex jobber på en kafé i Oslo. Hver morgen kommer han klokka sju. Han lager kaffe og serverer brød til kundene.',
                'Mange kunder sier «hei» til ham. Alex liker jobben sin, men han er alltid trøtt om kvelden. Etter jobben går han hjem og sover en liten stund.'
              ],
              questions: [
                { q: 'Hvor jobber Alex?', options: ['På en skole', 'På en kafé', 'I en butikk'], answer: 1, explain: 'El primer texto dice «Alex jobber på en kafé i Oslo».' },
                { q: 'Når begynner han om morgenen?', options: ['Klokka ni', 'Klokka fem', 'Klokka sju'], answer: 2, explain: '«Hver morgen kommer han klokka sju»: empieza a las siete.' },
                { q: 'Hva gjør han på jobben?', options: ['Lager kaffe og serverer brød', 'Vasker biler', 'Kjører buss'], answer: 0, explain: '«Han lager kaffe og serverer brød til kundene».' },
                { q: 'Hvordan føler han seg om kvelden?', options: ['Sulten', 'Sint', 'Trøtt'], answer: 2, explain: '«han er alltid trøtt om kvelden»: siempre está cansado por la noche.' }
              ]
            },
            {
              title: 'Familien til Ingrid',
              body: [
                'Ingrid bor i Bergen med mannen sin og to barn. De har en liten leilighet nær sjøen.',
                'Om sommeren går de ofte på tur i fjellet. Ingrid liker å lese, og barna liker å spille fotball. Om vinteren er det mye regn, så de er mye inne. Familien har også en katt som heter Pus.'
              ],
              questions: [
                { q: 'Hvor bor Ingrid?', options: ['I Oslo', 'I Bergen', 'I Tromsø'], answer: 1, explain: '«Ingrid bor i Bergen».' },
                { q: 'Hvor mange barn har hun?', options: ['To', 'Tre', 'Ett'], answer: 0, explain: '«med mannen sin og to barn»: dos hijos.' },
                { q: 'Hva liker barna å gjøre?', options: ['Å lese', 'Å spille fotball', 'Å svømme'], answer: 1, explain: '«barna liker å spille fotball».' },
                { q: 'Hvordan er været om vinteren?', options: ['Mye snø', 'Mye regn', 'Alltid sol'], answer: 1, explain: '«Om vinteren er det mye regn».' }
              ]
            }
          ]
        },
        listening: {
          minutes: 12,
          items: [
            { audio: 'Hei! Jeg vil gjerne bestille en kaffe og et brød, takk.', q: 'Hva vil personen ha?', options: ['Kaffe og brød', 'Te og kake', 'Vann og frukt'], answer: 0, explain: 'Pide «en kaffe og et brød»: un café y un pan.' },
            { audio: 'Unnskyld, hvor er togstasjonen?', q: 'Hva spør personen om?', options: ['Prisen på toget', 'Når toget går', 'Veien til togstasjonen'], answer: 2, explain: '«Hvor er togstasjonen?» pregunta dónde está la estación de tren.' },
            { audio: 'Jeg heter Marta. Jeg kommer fra Polen, og jeg bor i Trondheim.', q: 'Hvor kommer Marta fra?', options: ['Polen', 'Norge', 'Sverige'], answer: 0, explain: '«Jeg kommer fra Polen»: viene de Polonia.' },
            { audio: 'Kan du hjelpe meg? Jeg finner ikke nøklene mine.', q: 'Hva mangler personen?', options: ['Telefonen', 'Nøklene', 'Vesken'], answer: 1, explain: '«Jeg finner ikke nøklene mine»: no encuentra las llaves.' },
            { audio: 'Butikken er åpen fra ni til seks.', q: 'Når stenger butikken?', options: ['Klokka seks', 'Klokka ni', 'Klokka fem'], answer: 0, explain: '«fra ni til seks»: abre de nueve a seis, cierra a las seis.' },
            { audio: 'Det er kaldt i dag. Ta på deg en jakke!', q: 'Hva bør du ta på deg?', options: ['Solbriller', 'En lue', 'En jakke'], answer: 2, explain: '«Ta på deg en jakke»: ponte una chaqueta.' }
          ]
        },
        writing: {
          minutes: 35,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Skriv en kort melding til en venn. Fortell hvor du er, og hva du gjør.',
              minWords: 20,
              maxWords: 40,
              checklist: ['Saludo y nombre', 'Dónde estás', 'Qué estás haciendo', 'Despedida'],
              model: 'Hei Kari! Jeg er på kafeen i sentrum. Jeg drikker kaffe og leser en bok. Vi snakkes! Hilsen Alex'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Skriv fem setninger om deg selv: navn, alder, by, jobb eller skole, og en hobby.',
              minWords: 25,
              maxWords: 50,
              checklist: ['Nombre y edad', 'Ciudad', 'Trabajo o estudios', 'Una afición', 'Frases completas'],
              model: 'Jeg heter Alex. Jeg er tjuefem år. Jeg bor i Oslo. Jeg jobber på en kafé. På fritiden liker jeg å lese.'
            }
          ]
        },
        speaking: {
          minutes: 8,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Presenter deg selv: navn, alder, hvor du bor, og hva du liker.',
              prepSeconds: 45,
              speakSeconds: 60,
              checklist: ['Te presentas', 'Dices dónde vives', 'Dices qué te gusta', 'Frases completas'],
              model: 'Hei! Jeg heter ... og jeg er ... år. Jeg bor i ... Jeg liker å ... og å ...'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Beskriv rommet ditt. Bruk minst fem ord om møbler og farger.',
              prepSeconds: 30,
              speakSeconds: 45,
              checklist: ['Nombras muebles', 'Usas colores', 'Usas «det er» / «jeg har»', 'Cinco palabras o más'],
              model: 'I stuen min er det et stort bord og en blå sofa. Jeg har også en hvit bokhylle og et lite vindu.'
            },
            {
              title: 'Oppgave 3',
              prompt: 'Du er i en butikk. Kjøp en kaffe, og spør hva den koster.',
              prepSeconds: 20,
              speakSeconds: 45,
              checklist: ['Saludas', 'Pides algo con «jeg vil gjerne»', 'Preguntas el precio', 'Das las gracias'],
              model: 'Hei! Jeg vil gjerne ha en kaffe, takk. Hva koster den? ... Tusen takk! Ha det!'
            }
          ]
        }
      },

      /* ------------------------------------------------------------ A2 */
      {
        id: 'a2',
        level: 'A2',
        title: 'Simulacro A2',
        blurb: 'Textos breves con información concreta y situaciones del día a día.',
        reading: {
          minutes: 25,
          texts: [
            {
              title: 'Helgen på hytta',
              body: [
                'Hei Jonas! Hvordan går det? Nå sitter jeg på toget til Lillehammer. Familien min har en hytte der, og vi skal være der hele helgen.',
                'Været er fint, så vi skal gå på ski og lage mat ute. På søndag må jeg reise hjem tidlig, fordi jeg jobber på mandag. Har du lyst til å bli med neste gang? Hilsen Mina'
              ],
              questions: [
                { q: 'Hvor skal Mina?', options: ['Til Lillehammer', 'Til Bergen', 'Til utlandet'], answer: 0, explain: '«Nå sitter jeg på toget til Lillehammer».' },
                { q: 'Hvordan reiser hun?', options: ['Med buss', 'Med tog', 'Med bil'], answer: 1, explain: '«på toget»: va en tren.' },
                { q: 'Hva skal de gjøre i helgen?', options: ['Gå på ski og lage mat ute', 'Dra på kino', 'Besøke venner i byen'], answer: 0, explain: '«vi skal gå på ski og lage mat ute».' },
                { q: 'Hvorfor reiser hun hjem tidlig på søndag?', options: ['Hun er syk', 'Hun jobber på mandag', 'Toget er fullt'], answer: 1, explain: '«fordi jeg jobber på mandag».' }
              ]
            },
            {
              title: 'Ledig leilighet',
              body: [
                'Ledig leilighet i sentrum. 45 kvadratmeter, ett soverom, kjøkken og bad. Møblert.',
                'Husleie: 12 000 kroner i måneden. Strøm kommer i tillegg. Ledig fra 1. august. Ingen kjæledyr. Kontakt oss på e-post: utleie@sentrum.no.'
              ],
              questions: [
                { q: 'Hvor stor er leiligheten?', options: ['35 kvadratmeter', '45 kvadratmeter', '55 kvadratmeter'], answer: 1, explain: 'El anuncio dice «45 kvadratmeter».' },
                { q: 'Hva er inkludert i husleien?', options: ['Strøm', 'Internett', 'Møbler'], answer: 2, explain: '«Møblert» significa amueblado; la luz «kommer i tillegg», se paga aparte.' },
                { q: 'Når er leiligheten ledig?', options: ['Fra 1. august', 'Fra 1. juli', 'Fra 1. september'], answer: 0, explain: '«Ledig fra 1. august».' },
                { q: 'Hva er ikke lov?', options: ['Å ha møbler', 'Å ha kjæledyr', 'Å bruke strøm'], answer: 1, explain: '«Ingen kjæledyr»: no se admiten mascotas.' }
              ]
            }
          ]
        },
        listening: {
          minutes: 15,
          items: [
            { audio: 'Toget til Bergen går ikke klokka 15.30. Det er forsinket med tjue minutter.', q: 'Når går toget?', options: ['Klokka 15.10', 'Klokka 15.30', 'Klokka 15.50'], answer: 2, explain: 'Sale a las 15.30 pero lleva veinte minutos de retraso: 15.50.' },
            { audio: 'Hei, det er meg. Jeg blir litt sen til middagen fordi jeg må jobbe overtid. Begynn uten meg!', q: 'Hvorfor kommer personen sent?', options: ['Fordi han må jobbe overtid', 'Fordi toget er forsinket', 'Fordi han er syk'], answer: 0, explain: '«jeg må jobbe overtid»: tiene que hacer horas extra.' },
            { audio: 'På lørdag åpner biblioteket bare fra ti til to.', q: 'Hvor lenge er biblioteket åpent på lørdag?', options: ['Fire timer', 'To timer', 'Hele dagen'], answer: 0, explain: 'De las diez a las dos: cuatro horas.' },
            { audio: 'Jeg har bodd i Norge i tre år, og jeg lærer fortsatt nye ord hver uke.', q: 'Hvor lenge har personen bodd i Norge?', options: ['Tre måneder', 'Tre år', 'Ti år'], answer: 1, explain: '«i tre år»: tres años.' },
            { audio: 'Vær forsiktig! Det er glatt på veien i dag.', q: 'Hva er faren?', options: ['Det er mye trafikk', 'Veien er glatt', 'Det er mørkt'], answer: 1, explain: '«Det er glatt på veien»: la carretera está resbaladiza.' },
            { audio: 'Du må huske å ta med legitimasjon når du henter pakken.', q: 'Hva må du ha med?', options: ['En kvittering', 'Legitimasjon', 'En hjelm'], answer: 1, explain: '«ta med legitimasjon»: llevar el documento de identidad.' }
          ]
        },
        writing: {
          minutes: 45,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Skriv en e-post til en venn. Inviter ham eller henne til bursdagen din. Skriv når og hvor festen er.',
              minWords: 40,
              maxWords: 70,
              checklist: ['Saludo adecuado', 'Invitación clara', 'Fecha y lugar', 'Pregunta o cierre amable'],
              model: 'Hei Kari! Hvordan går det? På lørdag har jeg bursdag, og jeg vil gjerne invitere deg hjem til meg. Festen begynner klokka sju. Jeg bor i Storgata 12. Kan du komme? Hilsen Alex'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Ovnen på kjøkkenet virker ikke. Skriv en melding til utleieren og be om hjelp.',
              minWords: 40,
              maxWords: 70,
              checklist: ['Saludo', 'Explicas el problema', 'Pides ayuda', 'Ofreces disponibilidad'],
              model: 'Hei! Jeg skriver fordi ovnen på kjøkkenet ikke virker. Den blir ikke varm når jeg slår den på. Kan du sende noen for å reparere den? Jeg er hjemme etter klokka fire. Hilsen Alex'
            }
          ]
        },
        speaking: {
          minutes: 10,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Fortell om en vanlig dag: hva du gjør om morgenen, på jobben eller skolen, og om kvelden.',
              prepSeconds: 60,
              speakSeconds: 90,
              checklist: ['Usas verbos en presente', 'Mencionas horas', 'Conectores como «først», «etterpå»', 'Hablas con fluidez'],
              model: 'Jeg står opp klokka sju. Først spiser jeg frokost, og etterpå går jeg på jobb. Om kvelden lager jeg middag og ser på TV.'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Sammenlign livet i Norge med livet i hjemlandet ditt. Nevn to forskjeller.',
              prepSeconds: 60,
              speakSeconds: 90,
              checklist: ['Dos diferencias claras', 'Usas «mens» o «i forhold til»', 'Justificas con ejemplos', 'Cierras la idea'],
              model: 'I Norge spiser mange brød til lunsj, mens vi i hjemlandet mitt spiser varm mat. I tillegg er butikkene åpne lenger i Norge.'
            },
            {
              title: 'Oppgave 3',
              prompt: 'Du ringer legekontoret. Bestill en time og forklar hva som er galt.',
              prepSeconds: 30,
              speakSeconds: 60,
              checklist: ['Saludas por teléfono', 'Explicas el síntoma', 'Pides una cita', 'Confirmas día y hora'],
              model: 'Hei, jeg heter Alex. Jeg vil gjerne bestille en time. Jeg har hatt vondt i halsen i tre dager. Kan jeg komme i morgen?'
            }
          ]
        }
      },

      /* ------------------------------------------------------------ B1 */
      {
        id: 'b1',
        level: 'B1',
        title: 'Simulacro B1',
        blurb: 'Textos de opinión y temas cotidianos con algo de abstracción.',
        reading: {
          minutes: 30,
          texts: [
            {
              title: 'Jobbe for å leve',
              body: [
                'Mange nordmenn sier at de jobber for å leve, ikke lever for å jobbe. Arbeidsdagen slutter vanligvis klokka fire, og de fleste har fri i helgene.',
                'Likevel er det ikke alle som klarer å koble helt av. Undersøkelser viser at mange svarer på jobb-e-poster om kvelden, og noen føler at de aldri er helt ferdige.',
                'Fagforeningene mener at arbeidsgiverne må ta ansvar for å begrense kontakten etter arbeidstid. Samtidig sier flere ansatte at de selv velger å være tilgjengelige, fordi de er redde for å bli sett på som lite engasjerte.'
              ],
              questions: [
                { q: 'Hva sier mange nordmenn om arbeid?', options: ['De lever for å jobbe', 'De jobber for å leve', 'De jobber bare om sommeren'], answer: 1, explain: '«de jobber for å leve, ikke lever for å jobbe».' },
                { q: 'Når slutter arbeidsdagen vanligvis?', options: ['Klokka fire', 'Klokka seks', 'Klokka åtte'], answer: 0, explain: '«Arbeidsdagen slutter vanligvis klokka fire».' },
                { q: 'Hva viser undersøkelsene?', options: ['At alle har fri i helgene', 'At mange svarer på jobb-e-poster om kvelden', 'At fagforeningene vil jobbe mer'], answer: 1, explain: '«mange svarer på jobb-e-poster om kvelden».' },
                { q: 'Hva mener fagforeningene?', options: ['At ansatte bør jobbe mer', 'At arbeidsgiverne må begrense kontakten etter arbeidstid', 'At e-post bør forbys helt'], answer: 1, explain: '«arbeidsgiverne må ta ansvar for å begrense kontakten etter arbeidstid».' }
              ]
            },
            {
              title: 'Debatt: La bussen være billig',
              body: [
                'Jeg forstår at kommunen trenger penger, men å øke billettprisene er feil løsning. Når det blir dyrere å ta bussen, velger flere å kjøre bil. Det gir mer kø, mer forurensning og dårligere luft i byen.',
                'I stedet burde kommunen investere i flere avganger og bedre informasjon. Hvis bussen går ofte og er til å stole på, vil folk bruke den – selv om bilen står i garasjen.',
                'Prisen er viktig, men pålitelighet er enda viktigere. Jeg håper politikerne lytter til oss som bruker kollektivtransport hver dag.'
              ],
              questions: [
                { q: 'Hva er skribenten imot?', options: ['Å øke billettprisene', 'Å kjøre bil', 'Å bygge flere veier'], answer: 0, explain: '«å øke billettprisene er feil løsning».' },
                { q: 'Hva skjer når bussen blir dyrere?', options: ['Færre folk reiser', 'Flere kjører bil', 'Bussen går oftere'], answer: 1, explain: '«velger flere å kjøre bil».' },
                { q: 'Hva mener skribenten at kommunen bør gjøre?', options: ['Senke lønningene', 'Investere i flere avganger og bedre informasjon', 'Stenge sentrum for biler'], answer: 1, explain: '«burde kommunen investere i flere avganger og bedre informasjon».' },
                { q: 'Hva er viktigst for skribenten?', options: ['Prisen', 'Påliteligheten', 'Farten'], answer: 1, explain: '«Prisen er viktig, men pålitelighet er enda viktigere».' }
              ]
            }
          ]
        },
        listening: {
          minutes: 18,
          items: [
            { audio: 'Kommunen har bestemt at den nye skolen skal åpne neste høst, men byggingen er forsinket på grunn av dårlig vær.', q: 'Hvorfor er skolen forsinket?', options: ['På grunn av dårlig vær', 'På grunn av penger', 'På grunn av lærermangel'], answer: 0, explain: '«forsinket på grunn av dårlig vær».' },
            { audio: 'Hvis du har mistet bankkortet ditt, må du sperre det med en gang og deretter bestille et nytt.', q: 'Hva bør du gjøre først?', options: ['Bestille et nytt kort', 'Sperre kortet', 'Ring banken neste uke'], answer: 1, explain: '«må du sperre det med en gang og deretter bestille et nytt».' },
            { audio: 'Jeg trodde kurset var på tirsdager, men det er visst på torsdager. Kan du sende meg lenken igjen?', q: 'Hva vil personen ha?', options: ['En ny time', 'Lenken til kurset', 'En ny lærer'], answer: 1, explain: '«Kan du sende meg lenken igjen?».' },
            { audio: 'Mange unge flytter fra distriktene for å studere, men noen velger å komme tilbake når de får barn.', q: 'Hvorfor flytter noen tilbake?', options: ['Fordi de får barn', 'Fordi de er ferdige med studiene', 'Fordi de ikke liker byen'], answer: 0, explain: '«komme tilbake når de får barn».' },
            { audio: 'Til tross for at det regnet hele dagen, ble turen en suksess.', q: 'Hvordan gikk turen?', options: ['Dårlig', 'Bra, tross regnet', 'Den ble avlyst'], answer: 1, explain: '«ble turen en suksess» = fue un éxito, aunque llovió.' },
            { audio: 'Vi må utsette møtet fordi sjefen er syk. Jeg sender ny innkalling i morgen.', q: 'Hva skal skje i morgen?', options: ['Møtet blir avlyst', 'Sjefen kommer tilbake', 'Det sendes en ny innkalling'], answer: 2, explain: '«Jeg sender ny innkalling i morgen».' }
          ]
        },
        writing: {
          minutes: 55,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Skriv en e-post til kommunen om et problem i nabolaget ditt (for eksempel søppel, lys eller trafikk). Forklar problemet og foreslå en løsning.',
              minWords: 80,
              maxWords: 120,
              checklist: ['Saludo formal', 'Describes el problema', 'Propones una solución', 'Cierre formal'],
              model: 'Hei! Jeg bor i Storgata, og jeg vil gjerne melde om et problem med søppel i gata vår. De siste ukene har containerne vært fulle, og søppel har samlet seg på fortauet. Dette gir dårlig lukt og tiltrekker rotter. Jeg foreslår at kommunen tømmer containerne oftere, eller setter ut en ekstra container. Jeg håper dere kan se på saken. Med vennlig hilsen Alex Hansen'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Bør studenter jobbe ved siden av studiene? Skriv en kort tekst der du gir din mening og begrunner den.',
              minWords: 100,
              maxWords: 150,
              checklist: ['Postura clara', 'Dos argumentos', 'Ejemplo o experiencia', 'Conclusión'],
              model: 'Mange studenter jobber ved siden av studiene, og jeg mener det kan være både positivt og negativt. På den ene siden gir en jobb verdifull erfaring og bedre økonomi. På den andre siden kan mange timer på jobb føre til at studentene bruker for lite tid på fagene. Etter min mening bør studenter jobbe litt, men ikke så mye at studiene blir lidende. En liten stilling i helgene kan være en god løsning.'
            }
          ]
        },
        speaking: {
          minutes: 12,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Beskriv et problem i området der du bor, og foreslå to løsninger.',
              prepSeconds: 60,
              speakSeconds: 90,
              checklist: ['Describes el problema', 'Dos soluciones', 'Justificas', 'Estructura clara'],
              model: 'I området mitt er det for lite belysning om kvelden, og mange føler seg utrygge. For det første bør kommunen sette opp flere gatelys. For det andre kan naboene samarbeide om å holde oppgangene opplyst.'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Hva synes du om å jobbe hjemmefra? Gi fordeler og ulemper.',
              prepSeconds: 60,
              speakSeconds: 120,
              checklist: ['Ventajas', 'Inconvenientes', 'Opinión personal', 'Léxico variado'],
              model: 'Å jobbe hjemmefra har mange fordeler: man sparer tid og kan konsentrere seg. Samtidig kan det være vanskelig å skille mellom jobb og fritid, og man mister det sosiale miljøet. Jeg tror en kombinasjon er best.'
            },
            {
              title: 'Oppgave 3',
              prompt: 'Du er på jobbintervju. Fortell om erfaringen din og hvorfor du passer til jobben.',
              prepSeconds: 45,
              speakSeconds: 120,
              checklist: ['Experiencia concreta', 'Motivación', 'Preguntas al entrevistador', 'Tono adecuado'],
              model: 'Jeg har jobbet på kafé i to år, så jeg er vant til å møte kunder og jobbe i et høyt tempo. Jeg liker å lære nye ting, og jeg tror jeg passer godt fordi jeg er pålitelig og samarbeider godt.'
            }
          ]
        }
      },

      /* ------------------------------------------------------------ B2 */
      {
        id: 'b2',
        level: 'B2',
        title: 'Simulacro B2',
        blurb: 'Artículos y columnas con argumentación, matices y vocabulario abstracto.',
        reading: {
          minutes: 35,
          texts: [
            {
              title: 'Det grønne skiftet',
              body: [
                'Det grønne skiftet skaper nye jobber, men ikke nødvendigvis der folk bor. Mange stillinger innen fornybar energi og teknologi havner i byene, mens distriktene fortsatt er avhengige av tradisjonell industri.',
                'Regjeringen sier at den vil satse på kompetanseheving, slik at arbeidstakere kan flytte seg mellom bransjer. Kritikerne mener likevel at tiltakene kommer for sent, og at mange mister jobben før de har fått ny utdanning.',
                'For å lykkes må overgangen være rettferdig: de som rammes, må få reell støtte, ikke bare gode intensjoner.'
              ],
              questions: [
                { q: 'Hvor skapes de nye jobbene?', options: ['I distriktene', 'I byene', 'I utlandet'], answer: 1, explain: '«Mange stillinger ... havner i byene».' },
                { q: 'Hva vil regjeringen satse på?', options: ['Kompetanseheving', 'Høyere skatter', 'Mer industri i byene'], answer: 0, explain: '«den vil satse på kompetanseheving».' },
                { q: 'Hva mener kritikerne?', options: ['At tiltakene kommer for sent', 'At skiftet går for fort', 'At byene får for lite penger'], answer: 0, explain: '«Kritikerne mener likevel at tiltakene kommer for sent».' },
                { q: 'Hva kreves for en vellykket overgang?', options: ['At folk flytter til byene', 'Reell støtte til dem som rammes', 'At all industri legges ned'], answer: 1, explain: '«de som rammes, må få reell støtte».' }
              ]
            },
            {
              title: 'Overvåkning på jobben: tillit eller kontroll?',
              body: [
                'Det er blitt vanlig å måle ansattes produktivitet med digitale verktøy. Noen bedrifter følger med på hvor mange minutter du bruker på hver oppgave, og hvem du snakker med.',
                'Tilhengerne hevder at dette gir bedre oversikt og rettferdige vurderinger. Men når hver bevegelse registreres, endrer arbeidsmiljøet seg: folk slutter å ta pauser, tør ikke spørre om hjelp og skjuler feil.',
                'Tillit er ikke bare et spørsmål om trivsel; det er en forutsetning for læring og kvalitet. Bedrifter som vil ha engasjerte ansatte, bør heller investere i tydelige mål og god ledelse enn i detaljert kontroll.'
              ],
              questions: [
                { q: 'Hva handler teksten om?', options: ['Lønninger i Norge', 'Overvåkning på arbeidsplassen', 'Digitale møter'], answer: 1, explain: 'La columna trata de la vigilancia de los empleados.' },
                { q: 'Hva mener tilhengerne?', options: ['At kontroll gir bedre oversikt og rettferdige vurderinger', 'At ansatte bør bestemme mer', 'At tillit er viktigere enn resultater'], answer: 0, explain: '«dette gir bedre oversikt og rettferdige vurderinger».' },
                { q: 'Hva skjer når alt registreres?', options: ['Folk jobber mer effektivt', 'Folk slutter å ta pauser og skjuler feil', 'Bedriftene sparer penger'], answer: 1, explain: '«folk slutter å ta pauser, tør ikke spørre om hjelp og skjuler feil».' },
                { q: 'Hva bør bedrifter gjøre i stedet?', options: ['Investere i tydelige mål og god ledelse', 'Øke kontrollen', 'Ansette flere sjefer'], answer: 0, explain: '«bør heller investere i tydelige mål og god ledelse enn i detaljert kontroll».' }
              ]
            }
          ]
        },
        listening: {
          minutes: 20,
          items: [
            { audio: 'Selv om arbeidsledigheten har gått ned, sliter mange unge med å få sin første faste stilling.', q: 'Hva er problemet?', options: ['Arbeidsledigheten øker', 'Unge får ikke sin første faste jobb', 'Det er for få studenter'], answer: 1, explain: '«mange unge sliter med å få sin første faste stilling».' },
            { audio: 'Forskerne understreker at funnene ikke kan generaliseres, fordi utvalget var for lite.', q: 'Hvorfor kan ikke resultatene generaliseres?', options: ['Fordi utvalget var for lite', 'Fordi forskerne er uenige', 'Fordi studien er gammel'], answer: 0, explain: '«utvalget var for lite»: la muestra era demasiado pequeña.' },
            { audio: 'Kommunen innfører strengere regler for utleie av boliger for å hindre at beboere blir presset ut av markedet.', q: 'Hva er målet med reglene?', options: ['Å øke husleien', 'Å hindre at beboere blir presset ut', 'Å bygge flere hoteller'], answer: 1, explain: '«hindre at beboere blir presset ut av markedet».' },
            { audio: 'Ledelsen beklager at beslutningen ble tatt uten tilstrekkelig involvering av de ansatte.', q: 'Hva beklager ledelsen?', options: ['At beslutningen var feil', 'At de ansatte ikke ble involvert nok', 'At møtet varte for lenge'], answer: 1, explain: '«uten tilstrekkelig involvering av de ansatte».' },
            { audio: 'Til tross for kritikken holder hun fast ved at ordningen er nødvendig for å sikre like muligheter.', q: 'Hvordan reagerer hun på kritikken?', options: ['Hun endrer mening', 'Hun forsvarer ordningen', 'Hun slutter i jobben'], answer: 1, explain: '«holder hun fast ved at ordningen er nødvendig»: defiende el sistema.' },
            { audio: 'Prosjektet ble forsinket, ikke på grunn av manglende midler, men fordi ingen hadde ansvar for fremdriften.', q: 'Hvorfor ble prosjektet forsinket?', options: ['Mangel på penger', 'Ingen hadde ansvar for fremdriften', 'Dårlig vær'], answer: 1, explain: '«ingen hadde ansvar for fremdriften»: nadie era responsable del avance.' }
          ]
        },
        writing: {
          minutes: 70,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Du har hatt en dårlig opplevelse med et selskap (for eksempel internett eller transport). Skriv en formell klage der du beskriver problemet og hva du forventer.',
              minWords: 120,
              maxWords: 180,
              checklist: ['Estructura formal', 'Hechos concretos', 'Petición clara', 'Tono respetuoso'],
              model: 'Til kundeservice i Nordnett. Jeg skriver for å klage på internettforbindelsen hjemme hos meg. I de siste tre ukene har forbindelsen vært nede flere ganger om dagen, og jeg har måttet bruke mobilen for å jobbe. Jeg har kontaktet kundeservice to ganger uten at problemet ble løst. Jeg forventer at dere undersøker saken og gir meg en skriftlig tilbakemelding innen en uke. Dersom problemet ikke blir løst, vil jeg vurdere å avslutte abonnementet. Med vennlig hilsen Alex Hansen'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Er det riktig å overvåke ansatte på jobben? Skriv en argumenterende tekst der du veier for og imot.',
              minWords: 150,
              maxWords: 200,
              checklist: ['Tesis clara', 'Argumentos a favor y en contra', 'Ejemplos', 'Conclusión matizada'],
              model: 'Spørsmålet om overvåkning på arbeidsplassen er blitt stadig mer aktuelt. På den ene siden kan digitale verktøy gi bedriftene bedre oversikt og gjøre det lettere å vurdere resultater på en rettferdig måte. På den andre siden kan detaljert kontroll skade tilliten mellom ledelse og ansatte. Når folk føler seg overvåket, tar de færre pauser og skjuler feil i stedet for å lære av dem. Etter min mening bør bedrifter bruke overvåkning med måte. Tydelige mål og god ledelse gir bedre resultater enn kontroll av hver minutt. Overvåkning kan være et hjelpemiddel, men aldri en erstatning for tillit.'
            }
          ]
        },
        speaking: {
          minutes: 14,
          tasks: [
            {
              title: 'Oppgave 1',
              prompt: 'Presenter et samfunnsproblem og forsvare ditt syn på hva som bør gjøres.',
              prepSeconds: 60,
              speakSeconds: 120,
              checklist: ['Problema definido', 'Postura clara', 'Dos argumentos', 'Propuesta concreta'],
              model: 'Et av de største problemene i byen vår er boligprisene. Mange unge har ikke råd til å kjøpe bolig. Jeg mener kommunen bør bygge flere rimelige utleieboliger og regulere korttidsutleie. Det vil gi flere unge mulighet til å bli boende i byen.'
            },
            {
              title: 'Oppgave 2',
              prompt: 'Drøft fordeler og ulemper med digitalisering i arbeidslivet.',
              prepSeconds: 60,
              speakSeconds: 150,
              checklist: ['Varias perspectivas', 'Conectores', 'Ejemplos', 'Conclusión'],
              model: 'Digitalisering gjør arbeidet mer effektivt og gir fleksibilitet, men den kan også føre til at noen faller utenfor. De som ikke har digital kompetanse, trenger opplæring. Jeg tror derfor at digitalisering må følges av investering i kompetanse.'
            },
            {
              title: 'Oppgave 3',
              prompt: 'Rollespill: du og kollegaen din er uenige om fordelingen av arbeidsoppgaver. Forhandle frem en løsning.',
              prepSeconds: 45,
              speakSeconds: 150,
              checklist: ['Escuchas y respondes', 'Propones alternativas', 'Buscas acuerdo', 'Lenguaje adecuado'],
              model: 'Jeg forstår at du har mye å gjøre, men jeg opplever at jeg tar flere kveldsvakter enn deg. Kan vi se på listen sammen og fordele oppgavene på nytt? Kanskje vi kan bytte annenhver uke, slik at det blir rettferdig for begge.'
            }
          ]
        }
      }
    ]
  }

};
