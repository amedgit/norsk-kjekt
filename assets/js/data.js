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
      id: 'restauranten',
      image: 'assets/img/dialogues/restauranten.svg',
      imageAlt: 'Camarero tomando nota en un restaurante noruego',
      emoji: '🍽️',
      level: 'A2',
      title: 'På restauranten',
      subtitle: 'Pedir, preguntar y pagar sin agobios',
      intro: 'Has reservado una mesa, el camarero llega y tienes dudas, alergias y una cuenta que pagar. Esta escena reúne lo que se dice antes, durante y después de comer en un restaurante noruego.',
      lines: [
        { who: 'Servitør', no: 'God kveld! Har dere reservert bord?', es: '¡Buenas noches! ¿Tienen mesa reservada?' },
        { who: 'Du', no: 'Ja, vi har reservert bord til to personer klokka sju.', es: 'Sí, hemos reservado mesa para dos a las siete.' },
        { who: 'Servitør', no: 'Hva heter dere?', es: '¿A nombre de quién?' },
        { who: 'Du', no: 'Det er på navnet García.', es: 'Está a nombre de García.' },
        { who: 'Servitør', no: 'Vær så god, her er menyen. Ønsker dere noe å drikke først?', es: 'Aquí tienen el menú. ¿Desean algo de beber primero?' },
        { who: 'Du', no: 'Ja, to glass vann, takk. Og hva anbefaler du?', es: 'Sí, dos vasos de agua, gracias. ¿Y qué recomiendas?' },
        { who: 'Servitør', no: 'Dagens rett er torsk med grønnsaker. Den er veldig god.', es: 'El plato del día es bacalao con verduras. Está muy bueno.' },
        { who: 'Du', no: 'Jeg er allergisk mot nøtter. Er det nøtter i retten?', es: 'Soy alérgico a los frutos secos. ¿Lleva frutos secos el plato?' },
        { who: 'Servitør', no: 'Nei, det er ikke nøtter i den. Men jeg skal sjekke med kjøkkenet.', es: 'No, no lleva. Pero lo comprobaré con la cocina.' },
        { who: 'Du', no: 'Tusen takk. Vi tar to av dagens rett.', es: 'Muchas gracias. Tomaremos dos del plato del día.' },
        { who: 'Servitør', no: 'Vil dere ha dessert?', es: '¿Quieren postre?' },
        { who: 'Du', no: 'Nei takk, men vi vil gjerne ha regningen. Kan vi betale hver for oss?', es: 'No, gracias, pero quisiéramos la cuenta. ¿Podemos pagar por separado?' },
        { who: 'Servitør', no: 'Selvfølgelig. Jeg tar kortet når dere er klare.', es: 'Por supuesto. Tomo la tarjeta cuando estén listos.' },
        { who: 'Du', no: 'Takk for maten!', es: '¡Gracias por la comida!' }
      ],
      vocab: [
        { no: 'reservere', es: 'reservar' },
        { no: 'bord', es: 'mesa' },
        { no: 'meny', es: 'menú' },
        { no: 'servitør', es: 'camarero' },
        { no: 'drikke', es: 'beber, bebida' },
        { no: 'anbefale', es: 'recomendar' },
        { no: 'dagens rett', es: 'plato del día' },
        { no: 'allergisk mot', es: 'alérgico a' },
        { no: 'nøtter', es: 'frutos secos' },
        { no: 'kjøkken', es: 'cocina' },
        { no: 'dessert', es: 'postre' },
        { no: 'regning', es: 'cuenta' },
        { no: 'hver for oss', es: 'por separado' },
        { no: 'tips', es: 'propina' }
      ],
      phrases: [
        { no: 'Har dere reservert bord?', es: '¿Tienen mesa reservada?' },
        { no: 'Vi har reservert bord til to.', es: 'Hemos reservado mesa para dos.' },
        { no: 'Hva anbefaler du?', es: '¿Qué recomiendas?' },
        { no: 'Jeg er allergisk mot ...', es: 'Soy alérgico a ...' },
        { no: 'Kan vi betale hver for oss?', es: '¿Podemos pagar por separado?' },
        { no: 'Takk for maten!', es: '¡Gracias por la comida!' }
      ],
      tip: 'En Noruega lo normal es esperar a que te sienten, pedir en la mesa y pagar al final. El agua del grifo suele ser gratis; si quieres una botella, pídela. La propina no es obligatoria: si el servicio ha estado bien, puedes redondear o dejar un poco. Para alérgenos, di «Jeg er allergisk mot ...» y pregunta «Er det ... i retten?». Para pagar, «regningen» es la cuenta y «hver for oss» significa por separado. «Takk for maten» se dice al terminar, también en casas particulares.',
      exercises: [
        {
          type: 'mcq',
          prompt: '¿Qué piden para beber al principio?',
          options: ['Dos vasos de agua', 'Dos cervezas', 'Una botella de vino', 'Dos cafés'],
          answer: 0,
          explain: 'El cliente dice «to glass vann, takk».'
        },
        {
          type: 'gap',
          prompt: 'Completa la frase:',
          sentence: 'Jeg er allergisk ___ nøtter.',
          answers: ['mot'],
          bank: ['mot', 'på', 'av'],
          es: 'Soy alérgico a los frutos secos.',
          explain: 'La expresión fija es «allergisk mot».'
        },
        {
          type: 'order',
          prompt: 'Ordena la frase:',
          words: ['Kan', 'vi', 'betale', 'hver', 'for', 'oss?'],
          es: '¿Podemos pagar por separado?',
          explain: '«Hver for oss» = cada uno por su lado; «betale hver for oss» = pagar por separado.'
        },
        {
          type: 'listen',
          audio: 'Hva anbefaler du?',
          es: '¿Qué recomiendas?',
          explain: '«Å anbefale» = recomendar. Es la pregunta perfecta si no conoces el menú.'
        },
        {
          type: 'cloze',
          prompt: 'Completa la escena:',
          text: 'Vi har reservert ___ til to. Jeg er allergisk ___ nøtter. Kan vi få ___?',
          answers: ['bord', 'mot', 'regningen'],
          bank: ['bord', 'mot', 'regningen', 'meny', 'tips', 'kjøkkenet'],
          es: 'Hemos reservado mesa para dos. Soy alérgico a los frutos secos. ¿Nos trae la cuenta?',
          explain: 'Las tres palabras clave: «bord», «allergisk mot» y «regningen».'
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
  core: {
    totalTarget: 1000,
    packs: [
      {
        id: '1',
        num: 1,
        level: 'A1',
        emoji: '🚀',
        title: 'Supervivencia',
        subtitle: 'Las 100 palabras y frases para apañarte desde el primer día.',
        words: [
          { id: 'p1-01', cat: 'greet', no: 'hei', es: 'hola' },
          { id: 'p1-02', cat: 'greet', no: 'hei hei', es: 'hola (más cálido)', chunk: true },
          { id: 'p1-03', cat: 'greet', no: 'god morgen', es: 'buenos días', chunk: true },
          { id: 'p1-04', cat: 'greet', no: 'god kveld', es: 'buenas noches (al llegar)', chunk: true },
          { id: 'p1-05', cat: 'greet', no: 'ha det', es: 'adiós', chunk: true },
          { id: 'p1-06', cat: 'greet', no: 'takk', es: 'gracias' },
          { id: 'p1-07', cat: 'greet', no: 'tusen takk', es: 'muchas gracias', chunk: true },
          { id: 'p1-08', cat: 'greet', no: 'vær så snill', es: 'por favor', chunk: true },
          { id: 'p1-09', cat: 'greet', no: 'unnskyld', es: 'perdón, disculpe' },
          { id: 'p1-10', cat: 'greet', no: 'ingen årsak', es: 'de nada', chunk: true },
          { id: 'p1-11', cat: 'pron', no: 'jeg', es: 'yo' },
          { id: 'p1-12', cat: 'pron', no: 'du', es: 'tú' },
          { id: 'p1-13', cat: 'pron', no: 'han', es: 'él' },
          { id: 'p1-14', cat: 'pron', no: 'hun', es: 'ella' },
          { id: 'p1-15', cat: 'pron', no: 'vi', es: 'nosotros' },
          { id: 'p1-16', cat: 'pron', no: 'dere', es: 'vosotros, ustedes' },
          { id: 'p1-17', cat: 'pron', no: 'de', es: 'ellos' },
          { id: 'p1-18', cat: 'pron', no: 'det', es: 'eso, lo' },
          { id: 'p1-19', cat: 'pron', no: 'her', es: 'aquí' },
          { id: 'p1-20', cat: 'pron', no: 'der', es: 'allí' },
          { id: 'p1-21', cat: 'q', no: 'hva', es: 'qué' },
          { id: 'p1-22', cat: 'q', no: 'hvem', es: 'quién' },
          { id: 'p1-23', cat: 'q', no: 'hvor', es: 'dónde' },
          { id: 'p1-24', cat: 'q', no: 'når', es: 'cuándo' },
          { id: 'p1-25', cat: 'q', no: 'hvorfor', es: 'por qué' },
          { id: 'p1-26', cat: 'q', no: 'hvordan', es: 'cómo' },
          { id: 'p1-27', cat: 'q', no: 'hvor mye', es: 'cuánto', chunk: true },
          { id: 'p1-28', cat: 'q', no: 'hvor mange', es: 'cuántos', chunk: true },
          { id: 'p1-29', cat: 'q', no: 'kan du ...?', es: '¿puedes ...?', chunk: true },
          { id: 'p1-30', cat: 'q', no: 'hvor er ...?', es: '¿dónde está ...?', chunk: true },
          { id: 'p1-31', cat: 'verb1', no: 'være', es: 'ser, estar', forms: 'er · var · har vært' },
          { id: 'p1-32', cat: 'verb1', no: 'ha', es: 'tener', forms: 'har · hadde · har hatt' },
          { id: 'p1-33', cat: 'verb1', no: 'gjøre', es: 'hacer', forms: 'gjør · gjorde · har gjort' },
          { id: 'p1-34', cat: 'verb1', no: 'gå', es: 'ir, caminar', forms: 'går · gikk · har gått' },
          { id: 'p1-35', cat: 'verb1', no: 'komme', es: 'venir', forms: 'kommer · kom · har kommet' },
          { id: 'p1-36', cat: 'verb1', no: 'spise', es: 'comer', forms: 'spiser · spiste · har spist' },
          { id: 'p1-37', cat: 'verb1', no: 'drikke', es: 'beber', forms: 'drikker · drakk · har drukket' },
          { id: 'p1-38', cat: 'verb1', no: 'bo', es: 'vivir, residir', forms: 'bor · bodde · har bodd' },
          { id: 'p1-39', cat: 'verb1', no: 'jobbe', es: 'trabajar', forms: 'jobber · jobbet · har jobbet' },
          { id: 'p1-40', cat: 'verb1', no: 'snakke', es: 'hablar', forms: 'snakker · snakket · har snakket' },
          { id: 'p1-41', cat: 'verb2', no: 'forstå', es: 'entender', forms: 'forstår · forsto · har forstått' },
          { id: 'p1-42', cat: 'verb2', no: 'vite', es: 'saber', forms: 'vet · visste · har visst' },
          { id: 'p1-43', cat: 'verb2', no: 'kunne', es: 'poder, saber', forms: 'kan · kunne · har kunnet' },
          { id: 'p1-44', cat: 'verb2', no: 'ville', es: 'querer', forms: 'vil · ville · har villet' },
          { id: 'p1-45', cat: 'verb2', no: 'måtte', es: 'tener que', forms: 'må · måtte · har måttet' },
          { id: 'p1-46', cat: 'verb2', no: 'skulle', es: 'deber, ir a', forms: 'skal · skulle · har skullet' },
          { id: 'p1-47', cat: 'verb2', no: 'like', es: 'gustar', forms: 'liker · likte · har likt' },
          { id: 'p1-48', cat: 'verb2', no: 'trenge', es: 'necesitar', forms: 'trenger · trengte · har trengt' },
          { id: 'p1-49', cat: 'verb2', no: 'kjøpe', es: 'comprar', forms: 'kjøper · kjøpte · har kjøpt' },
          { id: 'p1-50', cat: 'verb2', no: 'betale', es: 'pagar', forms: 'betaler · betalte · har betalt' },
          { id: 'p1-51', cat: 'time', no: 'i dag', es: 'hoy', chunk: true },
          { id: 'p1-52', cat: 'time', no: 'i morgen', es: 'mañana', chunk: true },
          { id: 'p1-53', cat: 'time', no: 'i går', es: 'ayer', chunk: true },
          { id: 'p1-54', cat: 'time', no: 'nå', es: 'ahora' },
          { id: 'p1-55', cat: 'time', no: 'klokka', es: 'la hora, a las' },
          { id: 'p1-56', cat: 'time', no: 'en', es: 'uno' },
          { id: 'p1-57', cat: 'time', no: 'to', es: 'dos' },
          { id: 'p1-58', cat: 'time', no: 'tre', es: 'tres' },
          { id: 'p1-59', cat: 'time', no: 'fire', es: 'cuatro' },
          { id: 'p1-60', cat: 'time', no: 'fem', es: 'cinco' },
          { id: 'p1-61', cat: 'place', no: 'hjem', es: 'a casa', forms: 'hjemme = en casa' },
          { id: 'p1-62', cat: 'place', no: 'jobb', es: 'trabajo', forms: 'en jobb, jobber' },
          { id: 'p1-63', cat: 'place', no: 'butikk', es: 'tienda', forms: 'en butikk, butikker' },
          { id: 'p1-64', cat: 'place', no: 'kafé', es: 'cafetería', forms: 'en kafé, kaféer' },
          { id: 'p1-65', cat: 'place', no: 'skole', es: 'escuela', forms: 'en skole, skoler' },
          { id: 'p1-66', cat: 'place', no: 'by', es: 'ciudad', forms: 'en by, byer' },
          { id: 'p1-67', cat: 'place', no: 'gate', es: 'calle', forms: 'en gate, gater' },
          { id: 'p1-68', cat: 'place', no: 'buss', es: 'autobús', forms: 'en buss, busser' },
          { id: 'p1-69', cat: 'place', no: 'tog', es: 'tren', forms: 'et tog, tog' },
          { id: 'p1-70', cat: 'place', no: 'til venstre', es: 'a la izquierda', chunk: true },
          { id: 'p1-71', cat: 'food', no: 'mat', es: 'comida', forms: 'maten' },
          { id: 'p1-72', cat: 'food', no: 'vann', es: 'agua', forms: 'et vann' },
          { id: 'p1-73', cat: 'food', no: 'kaffe', es: 'café', forms: 'en kaffe' },
          { id: 'p1-74', cat: 'food', no: 'brød', es: 'pan', forms: 'et brød, brød' },
          { id: 'p1-75', cat: 'food', no: 'melk', es: 'leche', forms: 'en melk' },
          { id: 'p1-76', cat: 'food', no: 'ost', es: 'queso', forms: 'en ost, oster' },
          { id: 'p1-77', cat: 'food', no: 'egg', es: 'huevo', forms: 'et egg, egg' },
          { id: 'p1-78', cat: 'food', no: 'frukt', es: 'fruta', forms: 'en frukt, frukter' },
          { id: 'p1-79', cat: 'food', no: 'pris', es: 'precio', forms: 'en pris, priser' },
          { id: 'p1-80', cat: 'food', no: 'kvittering', es: 'recibo', forms: 'en kvittering, kvitteringer' },
          { id: 'p1-81', cat: 'health', no: 'hode', es: 'cabeza', forms: 'hodet' },
          { id: 'p1-82', cat: 'health', no: 'mage', es: 'barriga', forms: 'magen' },
          { id: 'p1-83', cat: 'health', no: 'hals', es: 'garganta', forms: 'halsen' },
          { id: 'p1-84', cat: 'health', no: 'vondt', es: 'dolor', forms: 'vondt i ...' },
          { id: 'p1-85', cat: 'health', no: 'syk', es: 'enfermo' },
          { id: 'p1-86', cat: 'health', no: 'lege', es: 'médico', forms: 'en lege, leger' },
          { id: 'p1-87', cat: 'health', no: 'apotek', es: 'farmacia', forms: 'et apotek, apotek' },
          { id: 'p1-88', cat: 'health', no: 'hjelp', es: 'ayuda' },
          { id: 'p1-89', cat: 'health', no: 'feber', es: 'fiebre', forms: 'feberen' },
          { id: 'p1-90', cat: 'health', no: 'medisin', es: 'medicina', forms: 'en medisin, medisiner' },
          { id: 'p1-91', cat: 'link', no: 'ja', es: 'sí' },
          { id: 'p1-92', cat: 'link', no: 'nei', es: 'no' },
          { id: 'p1-93', cat: 'link', no: 'kanskje', es: 'quizá' },
          { id: 'p1-94', cat: 'link', no: 'selvfølgelig', es: 'por supuesto' },
          { id: 'p1-95', cat: 'link', no: 'greit', es: 'vale, bien' },
          { id: 'p1-96', cat: 'link', no: 'fint', es: 'bien, bonito' },
          { id: 'p1-97', cat: 'link', no: 'men', es: 'pero' },
          { id: 'p1-98', cat: 'link', no: 'og', es: 'y' },
          { id: 'p1-99', cat: 'link', no: 'fordi', es: 'porque' },
          { id: 'p1-100', cat: 'link', no: 'lykke til', es: 'buena suerte', chunk: true }
        ]
      },
      {
        id: '2',
        num: 2,
        level: 'A2',
        emoji: '🏠',
        title: 'Vida diaria',
        subtitle: 'Casa, comida, transporte y compras.',
        words: [
          { id: 'p2-01', cat: 'home', no: 'hus', es: 'casa', forms: 'et hus, hus' },
          { id: 'p2-02', cat: 'home', no: 'leilighet', es: 'piso, apartamento', forms: 'en leilighet, leiligheter' },
          { id: 'p2-03', cat: 'home', no: 'rom', es: 'habitación', forms: 'et rom, rom' },
          { id: 'p2-04', cat: 'home', no: 'kjøkken', es: 'cocina', forms: 'et kjøkken, kjøkken' },
          { id: 'p2-05', cat: 'home', no: 'bad', es: 'baño', forms: 'et bad, bad' },
          { id: 'p2-06', cat: 'home', no: 'stue', es: 'salón', forms: 'en stue, stuer' },
          { id: 'p2-07', cat: 'home', no: 'soverom', es: 'dormitorio', forms: 'et soverom, soverom' },
          { id: 'p2-08', cat: 'home', no: 'bord', es: 'mesa', forms: 'et bord, bord' },
          { id: 'p2-09', cat: 'home', no: 'stol', es: 'silla', forms: 'en stol, stoler' },
          { id: 'p2-10', cat: 'home', no: 'seng', es: 'cama', forms: 'en seng, senger' },
          { id: 'p2-11', cat: 'objects', no: 'dør', es: 'puerta', forms: 'en dør, dører' },
          { id: 'p2-12', cat: 'objects', no: 'vindu', es: 'ventana', forms: 'et vindu, vinduer' },
          { id: 'p2-13', cat: 'objects', no: 'nøkkel', es: 'llave', forms: 'en nøkkel, nøkler' },
          { id: 'p2-14', cat: 'objects', no: 'lys', es: 'luz', forms: 'et lys, lys' },
          { id: 'p2-15', cat: 'objects', no: 'telefon', es: 'teléfono', forms: 'en telefon, telefoner' },
          { id: 'p2-16', cat: 'objects', no: 'klokke', es: 'reloj', forms: 'en klokke, klokker' },
          { id: 'p2-17', cat: 'objects', no: 'håndkle', es: 'toalla', forms: 'et håndkle, håndklær' },
          { id: 'p2-18', cat: 'objects', no: 'såpe', es: 'jabón', forms: 'en såpe, såper' },
          { id: 'p2-19', cat: 'objects', no: 'tannbørste', es: 'cepillo de dientes', forms: 'en tannbørste, tannbørster' },
          { id: 'p2-20', cat: 'objects', no: 'toalett', es: 'inodoro', forms: 'et toalett, toaletter' },
          { id: 'p2-21', cat: 'kitchen', no: 'frokost', es: 'desayuno', forms: 'en frokost, frokoster' },
          { id: 'p2-22', cat: 'kitchen', no: 'lunsj', es: 'almuerzo', forms: 'en lunsj, lunsjer' },
          { id: 'p2-23', cat: 'kitchen', no: 'middag', es: 'cena', forms: 'en middag, middager' },
          { id: 'p2-24', cat: 'kitchen', no: 'kjøleskap', es: 'nevera', forms: 'et kjøleskap, kjøleskap' },
          { id: 'p2-25', cat: 'kitchen', no: 'komfyr', es: 'cocina, fogón', forms: 'en komfyr, komfyrer' },
          { id: 'p2-26', cat: 'kitchen', no: 'tallerken', es: 'plato', forms: 'en tallerken, tallerkener' },
          { id: 'p2-27', cat: 'kitchen', no: 'glass', es: 'vaso', forms: 'et glass, glass' },
          { id: 'p2-28', cat: 'kitchen', no: 'kniv', es: 'cuchillo', forms: 'en kniv, kniver' },
          { id: 'p2-29', cat: 'kitchen', no: 'gaffel', es: 'tenedor', forms: 'en gaffel, gafler' },
          { id: 'p2-30', cat: 'kitchen', no: 'skje', es: 'cuchara', forms: 'en skje, skjeer' },
          { id: 'p2-31', cat: 'shop', no: 'handle', es: 'comprar, hacer la compra', forms: 'handler · handlet · har handlet' },
          { id: 'p2-32', cat: 'shop', no: 'kurv', es: 'cesta', forms: 'en kurv, kurver' },
          { id: 'p2-33', cat: 'shop', no: 'tilbud', es: 'oferta', forms: 'et tilbud, tilbud' },
          { id: 'p2-34', cat: 'shop', no: 'kort', es: 'tarjeta', forms: 'et kort, kort' },
          { id: 'p2-35', cat: 'shop', no: 'kontanter', es: 'efectivo', forms: 'kontanter' },
          { id: 'p2-36', cat: 'shop', no: 'pose', es: 'bolsa', forms: 'en pose, poser' },
          { id: 'p2-37', cat: 'shop', no: 'størrelse', es: 'talla', forms: 'en størrelse, størrelser' },
          { id: 'p2-38', cat: 'shop', no: 'bytte', es: 'cambiar', forms: 'bytter · byttet · har byttet' },
          { id: 'p2-39', cat: 'shop', no: 'åpningstid', es: 'horario de apertura', forms: 'en åpningstid, åpningstider' },
          { id: 'p2-40', cat: 'shop', no: 'kø', es: 'cola', forms: 'en kø, køer' },
          { id: 'p2-41', cat: 'transport', no: 'trikk', es: 'tranvía', forms: 'en trikk, trikker' },
          { id: 'p2-42', cat: 'transport', no: 't-bane', es: 'metro', forms: 'en t-bane, t-baner' },
          { id: 'p2-43', cat: 'transport', no: 'bil', es: 'coche', forms: 'en bil, biler' },
          { id: 'p2-44', cat: 'transport', no: 'sykkel', es: 'bicicleta', forms: 'en sykkel, sykler' },
          { id: 'p2-45', cat: 'transport', no: 'fly', es: 'avión', forms: 'et fly, fly' },
          { id: 'p2-46', cat: 'transport', no: 'båt', es: 'barco', forms: 'en båt, båter' },
          { id: 'p2-47', cat: 'transport', no: 'billett', es: 'billete', forms: 'en billett, billetter' },
          { id: 'p2-48', cat: 'transport', no: 'holdeplass', es: 'parada', forms: 'en holdeplass, holdeplasser' },
          { id: 'p2-49', cat: 'transport', no: 'stasjon', es: 'estación', forms: 'en stasjon, stasjoner' },
          { id: 'p2-50', cat: 'transport', no: 'busskort', es: 'abono de bus', forms: 'et busskort, busskort' },
          { id: 'p2-51', cat: 'directions', no: 'høyre', es: 'derecha', forms: 'til høyre' },
          { id: 'p2-52', cat: 'directions', no: 'rett frem', es: 'todo recto', chunk: true },
          { id: 'p2-53', cat: 'directions', no: 'hjørne', es: 'esquina', forms: 'et hjørne, hjørner' },
          { id: 'p2-54', cat: 'directions', no: 'kryss', es: 'cruce', forms: 'et kryss, kryss' },
          { id: 'p2-55', cat: 'directions', no: 'nær', es: 'cerca' },
          { id: 'p2-56', cat: 'directions', no: 'langt', es: 'lejos' },
          { id: 'p2-57', cat: 'directions', no: 'kart', es: 'mapa', forms: 'et kart, kart' },
          { id: 'p2-58', cat: 'directions', no: 'adresse', es: 'dirección', forms: 'en adresse, adresser' },
          { id: 'p2-59', cat: 'directions', no: 'sentrum', es: 'centro', forms: 'sentrum' },
          { id: 'p2-60', cat: 'directions', no: 'vei', es: 'camino, carretera', forms: 'en vei, veier' },
          { id: 'p2-61', cat: 'routine', no: 'morgen', es: 'mañana', forms: 'en morgen, morgener' },
          { id: 'p2-62', cat: 'routine', no: 'kveld', es: 'tarde, noche', forms: 'en kveld, kvelder' },
          { id: 'p2-63', cat: 'routine', no: 'natt', es: 'noche', forms: 'en natt, netter' },
          { id: 'p2-64', cat: 'routine', no: 'alltid', es: 'siempre' },
          { id: 'p2-65', cat: 'routine', no: 'ofte', es: 'a menudo' },
          { id: 'p2-66', cat: 'routine', no: 'noen ganger', es: 'a veces', chunk: true },
          { id: 'p2-67', cat: 'routine', no: 'aldri', es: 'nunca' },
          { id: 'p2-68', cat: 'routine', no: 'tidlig', es: 'temprano' },
          { id: 'p2-69', cat: 'routine', no: 'sent', es: 'tarde' },
          { id: 'p2-70', cat: 'routine', no: 'snart', es: 'pronto' },
          { id: 'p2-71', cat: 'actions', no: 'vaske', es: 'lavar', forms: 'vasker · vasket · har vasket' },
          { id: 'p2-72', cat: 'actions', no: 'rydde', es: 'ordenar', forms: 'rydder · ryddet · har ryddet' },
          { id: 'p2-73', cat: 'actions', no: 'sove', es: 'dormir', forms: 'sover · sov · har sovet' },
          { id: 'p2-74', cat: 'actions', no: 'stå opp', es: 'levantarse', chunk: true, forms: 'står opp · sto opp · har stått opp' },
          { id: 'p2-75', cat: 'actions', no: 'kle på seg', es: 'vestirse', chunk: true, forms: 'kler på seg · kledde på seg · har kledd på seg' },
          { id: 'p2-76', cat: 'actions', no: 'hvile', es: 'descansar', forms: 'hviler · hvilte · har hvilt' },
          { id: 'p2-77', cat: 'actions', no: 'dusje', es: 'ducharse', forms: 'dusjer · dusjet · har dusjet' },
          { id: 'p2-78', cat: 'actions', no: 'lage mat', es: 'cocinar', chunk: true, forms: 'lager mat · lagde mat · har laget mat' },
          { id: 'p2-79', cat: 'actions', no: 'gå ut', es: 'salir', chunk: true, forms: 'går ut · gikk ut · har gått ut' },
          { id: 'p2-80', cat: 'actions', no: 'komme hjem', es: 'llegar a casa', chunk: true, forms: 'kommer hjem · kom hjem · har kommet hjem' },
          { id: 'p2-81', cat: 'money', no: 'bank', es: 'banco', forms: 'en bank, banker' },
          { id: 'p2-82', cat: 'money', no: 'konto', es: 'cuenta', forms: 'en konto, kontoer' },
          { id: 'p2-83', cat: 'money', no: 'regning', es: 'factura', forms: 'en regning, regninger' },
          { id: 'p2-84', cat: 'money', no: 'lønn', es: 'salario', forms: 'en lønn, lønninger' },
          { id: 'p2-85', cat: 'money', no: 'skatt', es: 'impuesto', forms: 'en skatt, skatter' },
          { id: 'p2-86', cat: 'money', no: 'leie', es: 'alquiler', forms: 'en leie, leier' },
          { id: 'p2-87', cat: 'money', no: 'strøm', es: 'electricidad', forms: 'en strøm' },
          { id: 'p2-88', cat: 'money', no: 'internett', es: 'internet', forms: 'et internett' },
          { id: 'p2-89', cat: 'money', no: 'avtale', es: 'cita, acuerdo', forms: 'en avtale, avtaler' },
          { id: 'p2-90', cat: 'money', no: 'kundeservice', es: 'atención al cliente', forms: 'en kundeservice' },
          { id: 'p2-91', cat: 'social', no: 'hjelpe', es: 'ayudar', forms: 'hjelper · hjalp · har hjulpet' },
          { id: 'p2-92', cat: 'social', no: 'spørre', es: 'preguntar', forms: 'spør · spurte · har spurt' },
          { id: 'p2-93', cat: 'social', no: 'svare', es: 'responder', forms: 'svarer · svarte · har svart' },
          { id: 'p2-94', cat: 'social', no: 'vente', es: 'esperar', forms: 'venter · ventet · har ventet' },
          { id: 'p2-95', cat: 'social', no: 'møte', es: 'encontrarse, reunirse', forms: 'møter · møtte · har møtt' },
          { id: 'p2-96', cat: 'social', no: 'besøke', es: 'visitar', forms: 'besøker · besøkte · har besøkt' },
          { id: 'p2-97', cat: 'social', no: 'ringe', es: 'llamar', forms: 'ringer · ringte · har ringt' },
          { id: 'p2-98', cat: 'social', no: 'sende', es: 'enviar', forms: 'sender · sendte · har sendt' },
          { id: 'p2-99', cat: 'social', no: 'åpne', es: 'abrir', forms: 'åpner · åpnet · har åpnet' },
          { id: 'p2-100', cat: 'social', no: 'lukke', es: 'cerrar', forms: 'lukker · lukket · har lukket' }
        ]
      },
      {
        id: '3',
        num: 3,
        level: 'A2',
        emoji: '👥',
        title: 'Personas y planes',
        subtitle: 'Familia, gustos, quedadas y tiempo libre.',
        words: [
          { id: 'p3-01', cat: 'family', no: 'mor', es: 'madre', forms: 'en mor, mødre' },
          { id: 'p3-02', cat: 'family', no: 'far', es: 'padre', forms: 'en far, fedre' },
          { id: 'p3-03', cat: 'family', no: 'foreldre', es: 'padres', forms: 'foreldre' },
          { id: 'p3-04', cat: 'family', no: 'søster', es: 'hermana', forms: 'en søster, søstre' },
          { id: 'p3-05', cat: 'family', no: 'bror', es: 'hermano', forms: 'en bror, brødre' },
          { id: 'p3-06', cat: 'family', no: 'datter', es: 'hija', forms: 'en datter, døtre' },
          { id: 'p3-07', cat: 'family', no: 'sønn', es: 'hijo', forms: 'en sønn, sønner' },
          { id: 'p3-08', cat: 'family', no: 'bestemor', es: 'abuela', forms: 'en bestemor, bestemødre' },
          { id: 'p3-09', cat: 'family', no: 'bestefar', es: 'abuelo', forms: 'en bestefar, bestefedre' },
          { id: 'p3-10', cat: 'family', no: 'barn', es: 'niño, hijo', forms: 'et barn, barn' },
          { id: 'p3-11', cat: 'people', no: 'venn', es: 'amigo', forms: 'en venn, venner' },
          { id: 'p3-12', cat: 'people', no: 'kjæreste', es: 'pareja', forms: 'en kjæreste, kjærester' },
          { id: 'p3-13', cat: 'people', no: 'nabo', es: 'vecino', forms: 'en nabo, naboer' },
          { id: 'p3-14', cat: 'people', no: 'kollega', es: 'colega', forms: 'en kollega, kolleger' },
          { id: 'p3-15', cat: 'people', no: 'sjef', es: 'jefe', forms: 'en sjef, sjefer' },
          { id: 'p3-16', cat: 'people', no: 'gift', es: 'casado' },
          { id: 'p3-17', cat: 'people', no: 'singel', es: 'soltero' },
          { id: 'p3-18', cat: 'people', no: 'sammen', es: 'juntos' },
          { id: 'p3-19', cat: 'people', no: 'alene', es: 'solo' },
          { id: 'p3-20', cat: 'people', no: 'kjent', es: 'conocido' },
          { id: 'p3-21', cat: 'feelings', no: 'glad', es: 'contento, alegre' },
          { id: 'p3-22', cat: 'feelings', no: 'trist', es: 'triste' },
          { id: 'p3-23', cat: 'feelings', no: 'sint', es: 'enfadado' },
          { id: 'p3-24', cat: 'feelings', no: 'sliten', es: 'agotado' },
          { id: 'p3-25', cat: 'feelings', no: 'stresset', es: 'estresado' },
          { id: 'p3-26', cat: 'feelings', no: 'nervøs', es: 'nervioso' },
          { id: 'p3-27', cat: 'feelings', no: 'rolig', es: 'tranquilo' },
          { id: 'p3-28', cat: 'feelings', no: 'overrasket', es: 'sorprendido' },
          { id: 'p3-29', cat: 'feelings', no: 'skuffet', es: 'decepcionado' },
          { id: 'p3-30', cat: 'feelings', no: 'forelsket', es: 'enamorado' },
          { id: 'p3-31', cat: 'plans', no: 'interessert', es: 'interesado' },
          { id: 'p3-32', cat: 'plans', no: 'hobby', es: 'afición', forms: 'en hobby, hobbyer' },
          { id: 'p3-33', cat: 'plans', no: 'ferie', es: 'vacaciones', forms: 'en ferie, ferier' },
          { id: 'p3-34', cat: 'plans', no: 'fest', es: 'fiesta', forms: 'en fest, fester' },
          { id: 'p3-35', cat: 'plans', no: 'konsert', es: 'concierto', forms: 'en konsert, konserter' },
          { id: 'p3-36', cat: 'plans', no: 'kino', es: 'cine', forms: 'en kino, kinoer' },
          { id: 'p3-37', cat: 'plans', no: 'restaurant', es: 'restaurante', forms: 'en restaurant, restauranter' },
          { id: 'p3-38', cat: 'plans', no: 'tur', es: 'excursión, vuelta', forms: 'en tur, turer' },
          { id: 'p3-39', cat: 'plans', no: 'besøk', es: 'visita', forms: 'et besøk, besøk' },
          { id: 'p3-40', cat: 'plans', no: 'invitasjon', es: 'invitación', forms: 'en invitasjon, invitasjoner' },
          { id: 'p3-41', cat: 'freetime', no: 'danse', es: 'bailar', forms: 'danser · danset · har danset' },
          { id: 'p3-42', cat: 'freetime', no: 'synge', es: 'cantar', forms: 'synger · sang · har sunget' },
          { id: 'p3-43', cat: 'freetime', no: 'spille', es: 'jugar, tocar', forms: 'spiller · spilte · har spilt' },
          { id: 'p3-44', cat: 'freetime', no: 'lese', es: 'leer', forms: 'leser · leste · har lest' },
          { id: 'p3-45', cat: 'freetime', no: 'skrive', es: 'escribir', forms: 'skriver · skrev · har skrevet' },
          { id: 'p3-46', cat: 'freetime', no: 'tegne', es: 'dibujar', forms: 'tegner · tegnet · har tegnet' },
          { id: 'p3-47', cat: 'freetime', no: 'trene', es: 'entrenar', forms: 'trener · trente · har trent' },
          { id: 'p3-48', cat: 'freetime', no: 'svømme', es: 'nadar', forms: 'svømmer · svømte · har svømt' },
          { id: 'p3-49', cat: 'freetime', no: 'reise', es: 'viajar', forms: 'reiser · reiste · har reist' },
          { id: 'p3-50', cat: 'freetime', no: 'fiske', es: 'pescar', forms: 'fisker · fisket · har fisket' },
          { id: 'p3-51', cat: 'future', no: 'i kveld', es: 'esta noche', chunk: true },
          { id: 'p3-52', cat: 'future', no: 'i helgen', es: 'este fin de semana', chunk: true },
          { id: 'p3-53', cat: 'future', no: 'neste uke', es: 'la semana que viene', chunk: true },
          { id: 'p3-54', cat: 'future', no: 'senere', es: 'más tarde' },
          { id: 'p3-55', cat: 'future', no: 'plan', es: 'plan', forms: 'en plan, planer' },
          { id: 'p3-56', cat: 'future', no: 'idé', es: 'idea', forms: 'en idé, idéer' },
          { id: 'p3-57', cat: 'future', no: 'sikkert', es: 'seguro, seguramente' },
          { id: 'p3-58', cat: 'future', no: 'dessverre', es: 'por desgracia' },
          { id: 'p3-59', cat: 'future', no: 'heldigvis', es: 'por suerte' },
          { id: 'p3-60', cat: 'future', no: 'opptatt', es: 'ocupado' },
          { id: 'p3-61', cat: 'socialfood', no: 'kake', es: 'tarta', forms: 'en kake, kaker' },
          { id: 'p3-62', cat: 'socialfood', no: 'brus', es: 'refresco', forms: 'en brus, brus' },
          { id: 'p3-63', cat: 'socialfood', no: 'øl', es: 'cerveza', forms: 'et øl, øl' },
          { id: 'p3-64', cat: 'socialfood', no: 'vin', es: 'vino', forms: 'en vin, viner' },
          { id: 'p3-65', cat: 'socialfood', no: 'snacks', es: 'aperitivos', forms: 'snacks' },
          { id: 'p3-66', cat: 'socialfood', no: 'potetgull', es: 'patatas fritas', forms: 'et potetgull' },
          { id: 'p3-67', cat: 'socialfood', no: 'godteri', es: 'chuches', forms: 'et godteri' },
          { id: 'p3-68', cat: 'socialfood', no: 'bake', es: 'hornear', forms: 'baker · bakte · har bakt' },
          { id: 'p3-69', cat: 'socialfood', no: 'dele', es: 'compartir', forms: 'deler · delte · har delt' },
          { id: 'p3-70', cat: 'socialfood', no: 'smake', es: 'probar, saber', forms: 'smaker · smakte · har smakt' },
          { id: 'p3-71', cat: 'personality', no: 'morsom', es: 'divertido' },
          { id: 'p3-72', cat: 'personality', no: 'seriøs', es: 'serio' },
          { id: 'p3-73', cat: 'personality', no: 'sjenert', es: 'tímido' },
          { id: 'p3-74', cat: 'personality', no: 'utadvendt', es: 'extrovertido' },
          { id: 'p3-75', cat: 'personality', no: 'ærlig', es: 'honesto' },
          { id: 'p3-76', cat: 'personality', no: 'pålitelig', es: 'fiable' },
          { id: 'p3-77', cat: 'personality', no: 'tålmodig', es: 'paciente' },
          { id: 'p3-78', cat: 'personality', no: 'sta', es: 'cabezota' },
          { id: 'p3-79', cat: 'personality', no: 'kreativ', es: 'creativo' },
          { id: 'p3-80', cat: 'personality', no: 'hyggelig', es: 'agradable' },
          { id: 'p3-81', cat: 'communication', no: 'fortelle', es: 'contar', forms: 'forteller · fortalte · har fortalt' },
          { id: 'p3-82', cat: 'communication', no: 'forklare', es: 'explicar', forms: 'forklarer · forklarte · har forklart' },
          { id: 'p3-83', cat: 'communication', no: 'prate', es: 'charlar', forms: 'prater · pratet · har pratet' },
          { id: 'p3-84', cat: 'communication', no: 'vits', es: 'chiste', forms: 'en vits, vitser' },
          { id: 'p3-85', cat: 'communication', no: 'historie', es: 'historia', forms: 'en historie, historier' },
          { id: 'p3-86', cat: 'communication', no: 'nyhet', es: 'noticia', forms: 'en nyhet, nyheter' },
          { id: 'p3-87', cat: 'communication', no: 'melding', es: 'mensaje', forms: 'en melding, meldinger' },
          { id: 'p3-88', cat: 'communication', no: 'samtale', es: 'conversación', forms: 'en samtale, samtaler' },
          { id: 'p3-89', cat: 'communication', no: 'savne', es: 'echar de menos', forms: 'savner · savnet · har savnet' },
          { id: 'p3-90', cat: 'communication', no: 'holde kontakt', es: 'mantener el contacto', chunk: true },
          { id: 'p3-91', cat: 'celebration', no: 'bursdag', es: 'cumpleaños', forms: 'en bursdag, bursdager' },
          { id: 'p3-92', cat: 'celebration', no: 'jul', es: 'Navidad', forms: 'en jul' },
          { id: 'p3-93', cat: 'celebration', no: 'påske', es: 'Pascua', forms: 'en påske' },
          { id: 'p3-94', cat: 'celebration', no: 'nyttår', es: 'Año Nuevo', forms: 'et nyttår' },
          { id: 'p3-95', cat: 'celebration', no: 'feire', es: 'celebrar', forms: 'feirer · feiret · har feiret' },
          { id: 'p3-96', cat: 'celebration', no: 'gratulerer', es: 'enhorabuena', chunk: true },
          { id: 'p3-97', cat: 'celebration', no: 'gave', es: 'regalo', forms: 'en gave, gaver' },
          { id: 'p3-98', cat: 'celebration', no: 'gjest', es: 'invitado', forms: 'en gjest, gjester' },
          { id: 'p3-99', cat: 'celebration', no: 'selskap', es: 'fiesta, celebración', forms: 'et selskap, selskaper' },
          { id: 'p3-100', cat: 'celebration', no: 'høytid', es: 'festividad', forms: 'en høytid, høytider' }
        ]
      },
      {
        id: '4',
        num: 4,
        level: 'A2',
        emoji: '🩺',
        title: 'Salud y cuerpo',
        subtitle: 'Síntomas, médico, farmacia y emergencias.',
        words: [
          { id: 'p4-01', cat: 'bodyparts', no: 'skulder', es: 'hombro', forms: 'en skulder, skuldre' },
          { id: 'p4-02', cat: 'bodyparts', no: 'arm', es: 'brazo', forms: 'en arm, armer' },
          { id: 'p4-03', cat: 'bodyparts', no: 'hånd', es: 'mano', forms: 'en hånd, hender' },
          { id: 'p4-04', cat: 'bodyparts', no: 'finger', es: 'dedo', forms: 'en finger, fingre' },
          { id: 'p4-05', cat: 'bodyparts', no: 'rygg', es: 'espalda', forms: 'en rygg, rygger' },
          { id: 'p4-06', cat: 'bodyparts', no: 'hofte', es: 'cadera', forms: 'en hofte, hofter' },
          { id: 'p4-07', cat: 'bodyparts', no: 'lår', es: 'muslo', forms: 'et lår, lår' },
          { id: 'p4-08', cat: 'bodyparts', no: 'kne', es: 'rodilla', forms: 'et kne, knær' },
          { id: 'p4-09', cat: 'bodyparts', no: 'ankel', es: 'tobillo', forms: 'en ankel, ankler' },
          { id: 'p4-10', cat: 'bodyparts', no: 'fot', es: 'pie', forms: 'en fot, føtter' },
          { id: 'p4-11', cat: 'organs', no: 'hjerte', es: 'corazón', forms: 'et hjerte, hjerter' },
          { id: 'p4-12', cat: 'organs', no: 'lunge', es: 'pulmón', forms: 'en lunge, lunger' },
          { id: 'p4-13', cat: 'organs', no: 'tarm', es: 'intestino', forms: 'en tarm, tarmer' },
          { id: 'p4-14', cat: 'organs', no: 'nyre', es: 'riñón', forms: 'en nyre, nyrer' },
          { id: 'p4-15', cat: 'organs', no: 'lever', es: 'hígado', forms: 'en lever, levere' },
          { id: 'p4-16', cat: 'organs', no: 'blod', es: 'sangre', forms: 'et blod' },
          { id: 'p4-17', cat: 'organs', no: 'hud', es: 'piel', forms: 'en hud' },
          { id: 'p4-18', cat: 'organs', no: 'bein', es: 'hueso, pierna', forms: 'et bein, bein' },
          { id: 'p4-19', cat: 'organs', no: 'muskel', es: 'músculo', forms: 'en muskel, muskler' },
          { id: 'p4-20', cat: 'organs', no: 'hjerne', es: 'cerebro', forms: 'en hjerne, hjerner' },
          { id: 'p4-21', cat: 'symptoms', no: 'smerte', es: 'dolor', forms: 'en smerte, smerter' },
          { id: 'p4-22', cat: 'symptoms', no: 'stiv', es: 'rígido' },
          { id: 'p4-23', cat: 'symptoms', no: 'hoven', es: 'hinchado' },
          { id: 'p4-24', cat: 'symptoms', no: 'svimmel', es: 'mareado' },
          { id: 'p4-25', cat: 'symptoms', no: 'kvalm', es: 'con náuseas' },
          { id: 'p4-26', cat: 'symptoms', no: 'trøtt', es: 'cansado' },
          { id: 'p4-27', cat: 'symptoms', no: 'tett', es: 'tapado, congestionado' },
          { id: 'p4-28', cat: 'symptoms', no: 'hoste', es: 'tos', forms: 'en hoste' },
          { id: 'p4-29', cat: 'symptoms', no: 'nys', es: 'estornudo', forms: 'et nys, nys' },
          { id: 'p4-30', cat: 'symptoms', no: 'kløe', es: 'picor', forms: 'en kløe' },
          { id: 'p4-31', cat: 'doctor', no: 'fastlege', es: 'médico de cabecera', forms: 'en fastlege, fastleger' },
          { id: 'p4-32', cat: 'doctor', no: 'legevakt', es: 'urgencias', forms: 'en legevakt, legevakter' },
          { id: 'p4-33', cat: 'doctor', no: 'sykehus', es: 'hospital', forms: 'et sykehus, sykehus' },
          { id: 'p4-34', cat: 'doctor', no: 'undersøkelse', es: 'exploración', forms: 'en undersøkelse, undersøkelser' },
          { id: 'p4-35', cat: 'doctor', no: 'resept', es: 'receta', forms: 'en resept, resepter' },
          { id: 'p4-36', cat: 'doctor', no: 'prøve', es: 'prueba, análisis', forms: 'en prøve, prøver' },
          { id: 'p4-37', cat: 'doctor', no: 'svar', es: 'respuesta, resultado', forms: 'et svar, svar' },
          { id: 'p4-38', cat: 'doctor', no: 'behandling', es: 'tratamiento', forms: 'en behandling, behandlinger' },
          { id: 'p4-39', cat: 'doctor', no: 'operasjon', es: 'operación', forms: 'en operasjon, operasjoner' },
          { id: 'p4-40', cat: 'doctor', no: 'kontroll', es: 'revisión', forms: 'en kontroll, kontroller' },
          { id: 'p4-41', cat: 'pharmacy', no: 'tablett', es: 'pastilla', forms: 'en tablett, tabletter' },
          { id: 'p4-42', cat: 'pharmacy', no: 'plaster', es: 'tirita', forms: 'et plaster, plaster' },
          { id: 'p4-43', cat: 'pharmacy', no: 'salve', es: 'pomada', forms: 'en salve, salver' },
          { id: 'p4-44', cat: 'pharmacy', no: 'dråper', es: 'gotas', forms: 'dråper' },
          { id: 'p4-45', cat: 'pharmacy', no: 'sprøyte', es: 'jeringuilla', forms: 'en sprøyte, sprøyter' },
          { id: 'p4-46', cat: 'pharmacy', no: 'dosering', es: 'dosis', forms: 'en dosering, doseringer' },
          { id: 'p4-47', cat: 'pharmacy', no: 'bivirkning', es: 'efecto secundario', forms: 'en bivirkning, bivirkninger' },
          { id: 'p4-48', cat: 'pharmacy', no: 'allergi', es: 'alergia', forms: 'en allergi, allergier' },
          { id: 'p4-49', cat: 'pharmacy', no: 'vaksine', es: 'vacuna', forms: 'en vaksine, vaksiner' },
          { id: 'p4-50', cat: 'pharmacy', no: 'hostesaft', es: 'jarabe para la tos', forms: 'en hostesaft, hostesafter' },
          { id: 'p4-51', cat: 'emergency', no: 'ulykke', es: 'accidente', forms: 'en ulykke, ulykker' },
          { id: 'p4-52', cat: 'emergency', no: 'skade', es: 'lesión', forms: 'en skade, skader' },
          { id: 'p4-53', cat: 'emergency', no: 'ambulanse', es: 'ambulancia', forms: 'en ambulanse, ambulanser' },
          { id: 'p4-54', cat: 'emergency', no: 'politi', es: 'policía', forms: 'et politi' },
          { id: 'p4-55', cat: 'emergency', no: 'nødnummer', es: 'número de emergencia', forms: 'et nødnummer, nødnumre' },
          { id: 'p4-56', cat: 'emergency', no: 'redd', es: 'asustado' },
          { id: 'p4-57', cat: 'emergency', no: 'trygg', es: 'seguro' },
          { id: 'p4-58', cat: 'emergency', no: 'fare', es: 'peligro', forms: 'en fare, farer' },
          { id: 'p4-59', cat: 'emergency', no: 'alvorlig', es: 'grave' },
          { id: 'p4-60', cat: 'emergency', no: 'brann', es: 'incendio', forms: 'en brann, branner' },
          { id: 'p4-61', cat: 'habits', no: 'søvn', es: 'sueño', forms: 'en søvn' },
          { id: 'p4-62', cat: 'habits', no: 'kosthold', es: 'alimentación', forms: 'et kosthold' },
          { id: 'p4-63', cat: 'habits', no: 'grønnsaker', es: 'verduras', forms: 'grønnsaker' },
          { id: 'p4-64', cat: 'habits', no: 'røyke', es: 'fumar', forms: 'røyker · røykte · har røykt' },
          { id: 'p4-65', cat: 'habits', no: 'slappe av', es: 'relajarse', chunk: true },
          { id: 'p4-66', cat: 'habits', no: 'strekke seg', es: 'estirarse', chunk: true },
          { id: 'p4-67', cat: 'habits', no: 'sunn', es: 'sano' },
          { id: 'p4-68', cat: 'habits', no: 'usunn', es: 'poco saludable' },
          { id: 'p4-69', cat: 'habits', no: 'vekt', es: 'peso', forms: 'en vekt, vekter' },
          { id: 'p4-70', cat: 'habits', no: 'energi', es: 'energía', forms: 'en energi, energier' },
          { id: 'p4-71', cat: 'mental', no: 'stress', es: 'estrés', forms: 'et stress' },
          { id: 'p4-72', cat: 'mental', no: 'angst', es: 'ansiedad', forms: 'en angst' },
          { id: 'p4-73', cat: 'mental', no: 'depresjon', es: 'depresión', forms: 'en depresjon, depresjoner' },
          { id: 'p4-74', cat: 'mental', no: 'følelse', es: 'sentimiento', forms: 'en følelse, følelser' },
          { id: 'p4-75', cat: 'mental', no: 'tanke', es: 'pensamiento', forms: 'en tanke, tanker' },
          { id: 'p4-76', cat: 'mental', no: 'psykolog', es: 'psicólogo', forms: 'en psykolog, psykologer' },
          { id: 'p4-77', cat: 'mental', no: 'terapi', es: 'terapia', forms: 'en terapi, terapier' },
          { id: 'p4-78', cat: 'mental', no: 'puste', es: 'respirar', forms: 'puster · pustet · har pustet' },
          { id: 'p4-79', cat: 'mental', no: 'gråte', es: 'llorar', forms: 'gråter · gråt · har grått' },
          { id: 'p4-80', cat: 'mental', no: 'trøst', es: 'consuelo', forms: 'en trøst' },
          { id: 'p4-81', cat: 'appointments', no: 'time', es: 'cita, hora', forms: 'en time, timer' },
          { id: 'p4-82', cat: 'appointments', no: 'venteliste', es: 'lista de espera', forms: 'en venteliste, ventelister' },
          { id: 'p4-83', cat: 'appointments', no: 'journal', es: 'historial médico', forms: 'en journal, journaler' },
          { id: 'p4-84', cat: 'appointments', no: 'erklæring', es: 'certificado', forms: 'en erklæring, erklæringer' },
          { id: 'p4-85', cat: 'appointments', no: 'sykmelding', es: 'baja médica', forms: 'en sykmelding, sykmeldinger' },
          { id: 'p4-86', cat: 'appointments', no: 'forsikring', es: 'seguro (póliza)', forms: 'en forsikring, forsikringer' },
          { id: 'p4-87', cat: 'appointments', no: 'egenandel', es: 'copago', forms: 'en egenandel, egenandeler' },
          { id: 'p4-88', cat: 'appointments', no: 'henvisning', es: 'derivación', forms: 'en henvisning, henvisninger' },
          { id: 'p4-89', cat: 'appointments', no: 'klinikk', es: 'clínica', forms: 'en klinikk, klinikker' },
          { id: 'p4-90', cat: 'appointments', no: 'venterom', es: 'sala de espera', forms: 'et venterom, venterom' },
          { id: 'p4-91', cat: 'movement', no: 'bevege', es: 'mover', forms: 'beveger · beveget · har beveget' },
          { id: 'p4-92', cat: 'movement', no: 'løfte', es: 'levantar', forms: 'løfter · løftet · har løftet' },
          { id: 'p4-93', cat: 'movement', no: 'bøye', es: 'doblar', forms: 'bøyer · bøyde · har bøyd' },
          { id: 'p4-94', cat: 'movement', no: 'svette', es: 'sudar', forms: 'svetter · svettet · har svettet' },
          { id: 'p4-95', cat: 'movement', no: 'sitte', es: 'sentarse, estar sentado', forms: 'sitter · satt · har sittet' },
          { id: 'p4-96', cat: 'movement', no: 'stå', es: 'estar de pie', forms: 'står · sto · har stått' },
          { id: 'p4-97', cat: 'movement', no: 'ligge', es: 'estar tumbado', forms: 'ligger · lå · har ligget' },
          { id: 'p4-98', cat: 'movement', no: 'reise seg', es: 'ponerse de pie', chunk: true },
          { id: 'p4-99', cat: 'movement', no: 'sette seg', es: 'sentarse', chunk: true },
          { id: 'p4-100', cat: 'movement', no: 'kjenne', es: 'sentir', forms: 'kjenner · kjente · har kjent' }
        ]
      },
      {
        id: '5',
        num: 5,
        level: 'B1',
        emoji: '💼',
        title: 'Trabajo y trámites',
        subtitle: 'Oficina, dinero, contratos y papeleo.',
        words: [
          { id: 'p5-01', cat: 'jobsearch', no: 'stilling', es: 'puesto, vacante', forms: 'en stilling, stillinger' },
          { id: 'p5-02', cat: 'jobsearch', no: 'søknad', es: 'solicitud', forms: 'en søknad, søknader' },
          { id: 'p5-03', cat: 'jobsearch', no: 'CV', es: 'currículum', forms: 'en CV, CV-er' },
          { id: 'p5-04', cat: 'jobsearch', no: 'intervju', es: 'entrevista', forms: 'et intervju, intervjuer' },
          { id: 'p5-05', cat: 'jobsearch', no: 'arbeidsgiver', es: 'empleador', forms: 'en arbeidsgiver, arbeidsgivere' },
          { id: 'p5-06', cat: 'jobsearch', no: 'arbeidstaker', es: 'empleado, trabajador', forms: 'en arbeidstaker, arbeidstakere' },
          { id: 'p5-07', cat: 'jobsearch', no: 'kvalifikasjon', es: 'cualificación', forms: 'en kvalifikasjon, kvalifikasjoner' },
          { id: 'p5-08', cat: 'jobsearch', no: 'referanse', es: 'referencia', forms: 'en referanse, referanser' },
          { id: 'p5-09', cat: 'jobsearch', no: 'søke', es: 'solicitar, buscar', forms: 'søker · søkte · har søkt' },
          { id: 'p5-10', cat: 'jobsearch', no: 'ansettelse', es: 'contratación', forms: 'en ansettelse, ansettelser' },
          { id: 'p5-11', cat: 'workplace', no: 'kontor', es: 'oficina', forms: 'et kontor, kontorer' },
          { id: 'p5-12', cat: 'workplace', no: 'arbeidsplass', es: 'lugar de trabajo', forms: 'en arbeidsplass, arbeidsplasser' },
          { id: 'p5-13', cat: 'workplace', no: 'medarbeider', es: 'compañero de trabajo', forms: 'en medarbeider, medarbeidere' },
          { id: 'p5-14', cat: 'workplace', no: 'leder', es: 'líder, jefe', forms: 'en leder, ledere' },
          { id: 'p5-15', cat: 'workplace', no: 'avdeling', es: 'departamento', forms: 'en avdeling, avdelinger' },
          { id: 'p5-16', cat: 'workplace', no: 'arbeidsmøte', es: 'reunión de trabajo', forms: 'et arbeidsmøte, arbeidsmøter' },
          { id: 'p5-17', cat: 'workplace', no: 'prosjekt', es: 'proyecto', forms: 'et prosjekt, prosjekter' },
          { id: 'p5-18', cat: 'workplace', no: 'oppgave', es: 'tarea', forms: 'en oppgave, oppgaver' },
          { id: 'p5-19', cat: 'workplace', no: 'frist', es: 'plazo', forms: 'en frist, frister' },
          { id: 'p5-20', cat: 'workplace', no: 'ansvar', es: 'responsabilidad', forms: 'et ansvar, ansvar' },
          { id: 'p5-21', cat: 'contract', no: 'arbeidsavtale', es: 'contrato de trabajo', forms: 'en arbeidsavtale, arbeidsavtaler' },
          { id: 'p5-22', cat: 'contract', no: 'kontrakt', es: 'contrato', forms: 'en kontrakt, kontrakter' },
          { id: 'p5-23', cat: 'contract', no: 'vilkår', es: 'condición', forms: 'et vilkår, vilkår' },
          { id: 'p5-24', cat: 'contract', no: 'grunnlønn', es: 'salario base', forms: 'en grunnlønn, grunnlønner' },
          { id: 'p5-25', cat: 'contract', no: 'overtid', es: 'horas extra', forms: 'en overtid' },
          { id: 'p5-26', cat: 'contract', no: 'feriepenger', es: 'paga de vacaciones', forms: 'feriepenger' },
          { id: 'p5-27', cat: 'contract', no: 'oppsigelse', es: 'despido, renuncia', forms: 'en oppsigelse, oppsigelser' },
          { id: 'p5-28', cat: 'contract', no: 'prøvetid', es: 'periodo de prueba', forms: 'en prøvetid, prøvetider' },
          { id: 'p5-29', cat: 'contract', no: 'tariff', es: 'convenio', forms: 'en tariff, tariffer' },
          { id: 'p5-30', cat: 'contract', no: 'pensjon', es: 'pensión', forms: 'en pensjon, pensjoner' },
          { id: 'p5-31', cat: 'salary', no: 'utbetaling', es: 'pago', forms: 'en utbetaling, utbetalinger' },
          { id: 'p5-32', cat: 'salary', no: 'skattetrekk', es: 'retención fiscal', forms: 'et skattetrekk, skattetrekk' },
          { id: 'p5-33', cat: 'salary', no: 'fradrag', es: 'deducción', forms: 'et fradrag, fradrag' },
          { id: 'p5-34', cat: 'salary', no: 'bonus', es: 'bonificación', forms: 'en bonus, bonuser' },
          { id: 'p5-35', cat: 'salary', no: 'timelønn', es: 'salario por hora', forms: 'en timelønn, timelønner' },
          { id: 'p5-36', cat: 'salary', no: 'månedlig', es: 'mensual' },
          { id: 'p5-37', cat: 'salary', no: 'brutto', es: 'bruto' },
          { id: 'p5-38', cat: 'salary', no: 'netto', es: 'neto' },
          { id: 'p5-39', cat: 'salary', no: 'bankkonto', es: 'cuenta bancaria', forms: 'en bankkonto, bankkontoer' },
          { id: 'p5-40', cat: 'salary', no: 'lønnsslipp', es: 'nómina', forms: 'en lønnsslipp, lønnsslipper' },
          { id: 'p5-41', cat: 'paperwork', no: 'skjema', es: 'formulario', forms: 'et skjema, skjemaer' },
          { id: 'p5-42', cat: 'paperwork', no: 'dokument', es: 'documento', forms: 'et dokument, dokumenter' },
          { id: 'p5-43', cat: 'paperwork', no: 'kopi', es: 'copia', forms: 'en kopi, kopier' },
          { id: 'p5-44', cat: 'paperwork', no: 'signatur', es: 'firma', forms: 'en signatur, signaturer' },
          { id: 'p5-45', cat: 'paperwork', no: 'søknadsfrist', es: 'plazo de solicitud', forms: 'en søknadsfrist, søknadsfrister' },
          { id: 'p5-46', cat: 'paperwork', no: 'vedlegg', es: 'anexo', forms: 'et vedlegg, vedlegg' },
          { id: 'p5-47', cat: 'paperwork', no: 'bekreftelse', es: 'confirmación, certificado', forms: 'en bekreftelse, bekreftelser' },
          { id: 'p5-48', cat: 'paperwork', no: 'tillatelse', es: 'permiso', forms: 'en tillatelse, tillatelser' },
          { id: 'p5-49', cat: 'paperwork', no: 'oppholdstillatelse', es: 'permiso de residencia', forms: 'en oppholdstillatelse, oppholdstillatelser' },
          { id: 'p5-50', cat: 'paperwork', no: 'personnummer', es: 'número de identificación', forms: 'et personnummer, personnumre' },
          { id: 'p5-51', cat: 'authority', no: 'myndighet', es: 'autoridad', forms: 'en myndighet, myndigheter' },
          { id: 'p5-52', cat: 'authority', no: 'kommune', es: 'municipio', forms: 'en kommune, kommuner' },
          { id: 'p5-53', cat: 'authority', no: 'stat', es: 'estado', forms: 'en stat, stater' },
          { id: 'p5-54', cat: 'authority', no: 'offentlig', es: 'público (oficial)' },
          { id: 'p5-55', cat: 'authority', no: 'saksbehandler', es: 'gestor de expedientes', forms: 'en saksbehandler, saksbehandlere' },
          { id: 'p5-56', cat: 'authority', no: 'behandlingstid', es: 'tiempo de tramitación', forms: 'en behandlingstid, behandlingstider' },
          { id: 'p5-57', cat: 'authority', no: 'klage', es: 'reclamación', forms: 'en klage, klager' },
          { id: 'p5-58', cat: 'authority', no: 'regel', es: 'regla', forms: 'en regel, regler' },
          { id: 'p5-59', cat: 'authority', no: 'lov', es: 'ley', forms: 'en lov, lover' },
          { id: 'p5-60', cat: 'authority', no: 'rettighet', es: 'derecho', forms: 'en rettighet, rettigheter' },
          { id: 'p5-61', cat: 'meetings', no: 'agenda', es: 'orden del día', forms: 'en agenda, agendaer' },
          { id: 'p5-62', cat: 'meetings', no: 'referat', es: 'acta', forms: 'et referat, referater' },
          { id: 'p5-63', cat: 'meetings', no: 'innlegg', es: 'intervención', forms: 'et innlegg, innlegg' },
          { id: 'p5-64', cat: 'meetings', no: 'diskusjon', es: 'debate', forms: 'en diskusjon, diskusjoner' },
          { id: 'p5-65', cat: 'meetings', no: 'beslutning', es: 'decisión', forms: 'en beslutning, beslutninger' },
          { id: 'p5-66', cat: 'meetings', no: 'enighet', es: 'acuerdo', forms: 'en enighet' },
          { id: 'p5-67', cat: 'meetings', no: 'uenig', es: 'en desacuerdo' },
          { id: 'p5-68', cat: 'meetings', no: 'forslag', es: 'propuesta', forms: 'et forslag, forslag' },
          { id: 'p5-69', cat: 'meetings', no: 'tilbakemelding', es: 'comentario, feedback', forms: 'en tilbakemelding, tilbakemeldinger' },
          { id: 'p5-70', cat: 'meetings', no: 'presentasjon', es: 'presentación', forms: 'en presentasjon, presentasjoner' },
          { id: 'p5-71', cat: 'skills', no: 'yrkeserfaring', es: 'experiencia laboral', forms: 'en yrkeserfaring, yrkeserfaringer' },
          { id: 'p5-72', cat: 'skills', no: 'utdanning', es: 'formación', forms: 'en utdanning, utdanninger' },
          { id: 'p5-73', cat: 'skills', no: 'kurs', es: 'curso', forms: 'et kurs, kurs' },
          { id: 'p5-74', cat: 'skills', no: 'sertifikat', es: 'certificado', forms: 'et sertifikat, sertifikater' },
          { id: 'p5-75', cat: 'skills', no: 'ferdighet', es: 'habilidad', forms: 'en ferdighet, ferdigheter' },
          { id: 'p5-76', cat: 'skills', no: 'kompetanse', es: 'competencia', forms: 'en kompetanse, kompetanser' },
          { id: 'p5-77', cat: 'skills', no: 'lære', es: 'aprender', forms: 'lærer · lærte · har lært' },
          { id: 'p5-78', cat: 'skills', no: 'øve', es: 'practicar', forms: 'øver · øvde · har øvd' },
          { id: 'p5-79', cat: 'skills', no: 'forbedre', es: 'mejorar', forms: 'forbedrer · forbedret · har forbedret' },
          { id: 'p5-80', cat: 'skills', no: 'mestring', es: 'dominio', forms: 'en mestring' },
          { id: 'p5-81', cat: 'jobtypes', no: 'lærer', es: 'profesor', forms: 'en lærer, lærere' },
          { id: 'p5-82', cat: 'jobtypes', no: 'sykepleier', es: 'enfermero', forms: 'en sykepleier, sykepleiere' },
          { id: 'p5-83', cat: 'jobtypes', no: 'ingeniør', es: 'ingeniero', forms: 'en ingeniør, ingeniører' },
          { id: 'p5-84', cat: 'jobtypes', no: 'elektriker', es: 'electricista', forms: 'en elektriker, elektrikere' },
          { id: 'p5-85', cat: 'jobtypes', no: 'kokk', es: 'cocinero', forms: 'en kokk, kokker' },
          { id: 'p5-86', cat: 'jobtypes', no: 'servitør', es: 'camarero', forms: 'en servitør, servitører' },
          { id: 'p5-87', cat: 'jobtypes', no: 'butikkmedarbeider', es: 'dependiente', forms: 'en butikkmedarbeider, butikkmedarbeidere' },
          { id: 'p5-88', cat: 'jobtypes', no: 'sjåfør', es: 'conductor', forms: 'en sjåfør, sjåfører' },
          { id: 'p5-89', cat: 'jobtypes', no: 'håndverker', es: 'artesano, técnico', forms: 'en håndverker, håndverkere' },
          { id: 'p5-90', cat: 'jobtypes', no: 'frilanser', es: 'autónomo', forms: 'en frilanser, frilansere' },
          { id: 'p5-91', cat: 'worklife', no: 'arbeidstid', es: 'horario laboral', forms: 'en arbeidstid, arbeidstider' },
          { id: 'p5-92', cat: 'worklife', no: 'pause', es: 'pausa', forms: 'en pause, pauser' },
          { id: 'p5-93', cat: 'worklife', no: 'hjemmekontor', es: 'teletrabajo', forms: 'et hjemmekontor, hjemmekontor' },
          { id: 'p5-94', cat: 'worklife', no: 'sykmeldt', es: 'de baja médica' },
          { id: 'p5-95', cat: 'worklife', no: 'permisjon', es: 'permiso, excedencia', forms: 'en permisjon, permisjoner' },
          { id: 'p5-96', cat: 'worklife', no: 'oppsigelsestid', es: 'preaviso', forms: 'en oppsigelsestid, oppsigelsestider' },
          { id: 'p5-97', cat: 'worklife', no: 'arbeidsmiljø', es: 'ambiente laboral', forms: 'et arbeidsmiljø, arbeidsmiljø' },
          { id: 'p5-98', cat: 'worklife', no: 'trivsel', es: 'bienestar', forms: 'en trivsel' },
          { id: 'p5-99', cat: 'worklife', no: 'stressende', es: 'estresante' },
          { id: 'p5-100', cat: 'worklife', no: 'balanse', es: 'equilibrio', forms: 'en balanse, balanser' }
        ]
      },
      {
        id: '6',
        num: 6,
        level: 'B1',
        emoji: '🧭',
        title: 'Ciudad y viajes',
        subtitle: 'Barrios, transporte, hotel y turismo.',
        words: [
          { id: 'p6-01', cat: 'city', no: 'bydel', es: 'barrio, distrito', forms: 'en bydel, bydeler' },
          { id: 'p6-02', cat: 'city', no: 'torg', es: 'plaza', forms: 'et torg, torg' },
          { id: 'p6-03', cat: 'city', no: 'fortau', es: 'acera', forms: 'et fortau, fortau' },
          { id: 'p6-04', cat: 'city', no: 'rundkjøring', es: 'rotonda', forms: 'en rundkjøring, rundkjøringer' },
          { id: 'p6-05', cat: 'city', no: 'bro', es: 'puente', forms: 'en bro, broer' },
          { id: 'p6-06', cat: 'city', no: 'park', es: 'parque', forms: 'en park, parker' },
          { id: 'p6-07', cat: 'city', no: 'lekeplass', es: 'parque infantil', forms: 'en lekeplass, lekeplasser' },
          { id: 'p6-08', cat: 'city', no: 'bibliotek', es: 'biblioteca', forms: 'et bibliotek, biblioteker' },
          { id: 'p6-09', cat: 'city', no: 'rådhus', es: 'ayuntamiento', forms: 'et rådhus, rådhus' },
          { id: 'p6-10', cat: 'city', no: 'nabolag', es: 'vecindario', forms: 'et nabolag, nabolag' },
          { id: 'p6-11', cat: 'transport', no: 'bussholdeplass', es: 'parada de autobús', forms: 'en bussholdeplass, bussholdeplasser' },
          { id: 'p6-12', cat: 'transport', no: 't-banestasjon', es: 'estación de metro', forms: 'en t-banestasjon, t-banestasjoner' },
          { id: 'p6-13', cat: 'transport', no: 'trikkholdeplass', es: 'parada de tranvía', forms: 'en trikkholdeplass, trikkholdeplasser' },
          { id: 'p6-14', cat: 'transport', no: 'reisekort', es: 'tarjeta de transporte', forms: 'et reisekort, reisekort' },
          { id: 'p6-15', cat: 'transport', no: 'billettautomat', es: 'máquina de billetes', forms: 'en billettautomat, billettautomater' },
          { id: 'p6-16', cat: 'transport', no: 'rutetabell', es: 'horario de transportes', forms: 'en rutetabell, rutetabeller' },
          { id: 'p6-17', cat: 'transport', no: 'overgang', es: 'transbordo', forms: 'en overgang, overganger' },
          { id: 'p6-18', cat: 'transport', no: 'forsinkelse', es: 'retraso', forms: 'en forsinkelse, forsinkelser' },
          { id: 'p6-19', cat: 'transport', no: 'perrong', es: 'andén', forms: 'en perrong, perronger' },
          { id: 'p6-20', cat: 'transport', no: 'pendle', es: 'desplazarse al trabajo', forms: 'pendler · pendlet · har pendlet' },
          { id: 'p6-21', cat: 'travel', no: 'ferietur', es: 'viaje de vacaciones', forms: 'en ferietur, ferieturer' },
          { id: 'p6-22', cat: 'travel', no: 'bagasje', es: 'equipaje', forms: 'en bagasje' },
          { id: 'p6-23', cat: 'travel', no: 'håndbagasje', es: 'equipaje de mano', forms: 'en håndbagasje' },
          { id: 'p6-24', cat: 'travel', no: 'pass', es: 'pasaporte', forms: 'et pass, pass' },
          { id: 'p6-25', cat: 'travel', no: 'flybillett', es: 'billete de avión', forms: 'en flybillett, flybilletter' },
          { id: 'p6-26', cat: 'travel', no: 'avgang', es: 'salida', forms: 'en avgang, avganger' },
          { id: 'p6-27', cat: 'travel', no: 'ankomst', es: 'llegada', forms: 'en ankomst, ankomster' },
          { id: 'p6-28', cat: 'travel', no: 'reiseforsikring', es: 'seguro de viaje', forms: 'en reiseforsikring, reiseforsikringer' },
          { id: 'p6-29', cat: 'travel', no: 'toll', es: 'aduana', forms: 'en toll, toller' },
          { id: 'p6-30', cat: 'travel', no: 'grense', es: 'frontera', forms: 'en grense, grenser' },
          { id: 'p6-31', cat: 'hotel', no: 'hotell', es: 'hotel', forms: 'et hotell, hoteller' },
          { id: 'p6-32', cat: 'hotel', no: 'resepsjon', es: 'recepción', forms: 'en resepsjon, resepsjoner' },
          { id: 'p6-33', cat: 'hotel', no: 'hotellrom', es: 'habitación de hotel', forms: 'et hotellrom, hotellrom' },
          { id: 'p6-34', cat: 'hotel', no: 'nøkkelkort', es: 'tarjeta llave', forms: 'et nøkkelkort, nøkkelkort' },
          { id: 'p6-35', cat: 'hotel', no: 'enkeltrom', es: 'habitación individual', forms: 'et enkeltrom, enkeltrom' },
          { id: 'p6-36', cat: 'hotel', no: 'dobbeltrom', es: 'habitación doble', forms: 'et dobbeltrom, dobbeltrom' },
          { id: 'p6-37', cat: 'hotel', no: 'frokostbuffet', es: 'buffet de desayuno', forms: 'en frokostbuffet, frokostbuffeter' },
          { id: 'p6-38', cat: 'hotel', no: 'innsjekking', es: 'registro de entrada', forms: 'en innsjekking, innsjekkinger' },
          { id: 'p6-39', cat: 'hotel', no: 'utsjekking', es: 'salida del hotel', forms: 'en utsjekking, utsjekkinger' },
          { id: 'p6-40', cat: 'hotel', no: 'booking', es: 'reserva', forms: 'en booking, bookinger' },
          { id: 'p6-41', cat: 'tourism', no: 'turist', es: 'turista', forms: 'en turist, turister' },
          { id: 'p6-42', cat: 'tourism', no: 'severdighet', es: 'lugar de interés', forms: 'en severdighet, severdigheter' },
          { id: 'p6-43', cat: 'tourism', no: 'museum', es: 'museo', forms: 'et museum, museer' },
          { id: 'p6-44', cat: 'tourism', no: 'galleri', es: 'galería', forms: 'et galleri, gallerier' },
          { id: 'p6-45', cat: 'tourism', no: 'guide', es: 'guía', forms: 'en guide, guider' },
          { id: 'p6-46', cat: 'tourism', no: 'omvisning', es: 'visita guiada', forms: 'en omvisning, omvisninger' },
          { id: 'p6-47', cat: 'tourism', no: 'suvenir', es: 'recuerdo, souvenir', forms: 'en suvenir, suvenirer' },
          { id: 'p6-48', cat: 'tourism', no: 'opplevelse', es: 'experiencia', forms: 'en opplevelse, opplevelser' },
          { id: 'p6-49', cat: 'tourism', no: 'anbefale', es: 'recomendar', forms: 'anbefaler · anbefalte · har anbefalt' },
          { id: 'p6-50', cat: 'tourism', no: 'bestille', es: 'reservar, pedir', forms: 'bestiller · bestilte · har bestilt' },
          { id: 'p6-51', cat: 'weather', no: 'vær', es: 'tiempo atmosférico', forms: 'et vær' },
          { id: 'p6-52', cat: 'weather', no: 'værmelding', es: 'pronóstico del tiempo', forms: 'en værmelding, værmeldinger' },
          { id: 'p6-53', cat: 'weather', no: 'regn', es: 'lluvia', forms: 'et regn' },
          { id: 'p6-54', cat: 'weather', no: 'snø', es: 'nieve', forms: 'en snø' },
          { id: 'p6-55', cat: 'weather', no: 'vind', es: 'viento', forms: 'en vind, vinder' },
          { id: 'p6-56', cat: 'weather', no: 'sol', es: 'sol', forms: 'en sol, soler' },
          { id: 'p6-57', cat: 'weather', no: 'sky', es: 'nube', forms: 'en sky, skyer' },
          { id: 'p6-58', cat: 'weather', no: 'tåke', es: 'niebla', forms: 'en tåke, tåker' },
          { id: 'p6-59', cat: 'weather', no: 'temperatur', es: 'temperatura', forms: 'en temperatur, temperaturer' },
          { id: 'p6-60', cat: 'weather', no: 'grad', es: 'grado', forms: 'en grad, grader' },
          { id: 'p6-61', cat: 'nature', no: 'fjord', es: 'fiordo', forms: 'en fjord, fjorder' },
          { id: 'p6-62', cat: 'nature', no: 'fjell', es: 'montaña', forms: 'et fjell, fjell' },
          { id: 'p6-63', cat: 'nature', no: 'skog', es: 'bosque', forms: 'en skog, skoger' },
          { id: 'p6-64', cat: 'nature', no: 'innsjø', es: 'lago', forms: 'en innsjø, innsjøer' },
          { id: 'p6-65', cat: 'nature', no: 'elv', es: 'río', forms: 'en elv, elver' },
          { id: 'p6-66', cat: 'nature', no: 'strand', es: 'playa', forms: 'en strand, strender' },
          { id: 'p6-67', cat: 'nature', no: 'øy', es: 'isla', forms: 'en øy, øyer' },
          { id: 'p6-68', cat: 'nature', no: 'sti', es: 'sendero', forms: 'en sti, stier' },
          { id: 'p6-69', cat: 'nature', no: 'natur', es: 'naturaleza', forms: 'en natur' },
          { id: 'p6-70', cat: 'nature', no: 'utsikt', es: 'vista', forms: 'en utsikt, utsikter' },
          { id: 'p6-71', cat: 'culture', no: 'festival', es: 'festival', forms: 'en festival, festivaler' },
          { id: 'p6-72', cat: 'culture', no: 'teater', es: 'teatro', forms: 'et teater, teatre' },
          { id: 'p6-73', cat: 'culture', no: 'film', es: 'película', forms: 'en film, filmer' },
          { id: 'p6-74', cat: 'culture', no: 'utstilling', es: 'exposición', forms: 'en utstilling, utstillinger' },
          { id: 'p6-75', cat: 'culture', no: 'scene', es: 'escenario', forms: 'en scene, scener' },
          { id: 'p6-76', cat: 'culture', no: 'inngangsbillett', es: 'entrada (billete)', forms: 'en inngangsbillett, inngangsbilletter' },
          { id: 'p6-77', cat: 'culture', no: 'arrangement', es: 'evento', forms: 'et arrangement, arrangementer' },
          { id: 'p6-78', cat: 'culture', no: 'publikum', es: 'público (espectadores)', forms: 'et publikum, publikumer' },
          { id: 'p6-79', cat: 'culture', no: 'kunstner', es: 'artista', forms: 'en kunstner, kunstnere' },
          { id: 'p6-80', cat: 'culture', no: 'forestilling', es: 'función', forms: 'en forestilling, forestillinger' },
          { id: 'p6-81', cat: 'abroad', no: 'utlandet', es: 'el extranjero', forms: 'utlandet' },
          { id: 'p6-82', cat: 'abroad', no: 'utenlandsk', es: 'extranjero' },
          { id: 'p6-83', cat: 'abroad', no: 'ambassade', es: 'embajada', forms: 'en ambassade, ambassader' },
          { id: 'p6-84', cat: 'abroad', no: 'visum', es: 'visado', forms: 'et visum, visa' },
          { id: 'p6-85', cat: 'abroad', no: 'valuta', es: 'moneda', forms: 'en valuta, valutaer' },
          { id: 'p6-86', cat: 'abroad', no: 'veksle', es: 'cambiar dinero', forms: 'veksler · vekslet · har vekslet' },
          { id: 'p6-87', cat: 'abroad', no: 'tollkontroll', es: 'control de aduanas', forms: 'en tollkontroll, tollkontroller' },
          { id: 'p6-88', cat: 'abroad', no: 'flyplass', es: 'aeropuerto', forms: 'en flyplass, flyplasser' },
          { id: 'p6-89', cat: 'abroad', no: 'terminal', es: 'terminal', forms: 'en terminal, terminaler' },
          { id: 'p6-90', cat: 'abroad', no: 'forsinket', es: 'retrasado' },
          { id: 'p6-91', cat: 'directions', no: 'retning', es: 'sentido, dirección', forms: 'en retning, retninger' },
          { id: 'p6-92', cat: 'directions', no: 'nord', es: 'norte' },
          { id: 'p6-93', cat: 'directions', no: 'sør', es: 'sur' },
          { id: 'p6-94', cat: 'directions', no: 'øst', es: 'este' },
          { id: 'p6-95', cat: 'directions', no: 'vest', es: 'oeste' },
          { id: 'p6-96', cat: 'directions', no: 'venstre', es: 'izquierda' },
          { id: 'p6-97', cat: 'directions', no: 'høyreside', es: 'lado derecho', forms: 'en høyreside, høyresider' },
          { id: 'p6-98', cat: 'directions', no: 'opp', es: 'arriba' },
          { id: 'p6-99', cat: 'directions', no: 'ned', es: 'abajo' },
          { id: 'p6-100', cat: 'directions', no: 'kompass', es: 'brújula', forms: 'et kompass, kompass' }
        ]
      },
      {
        id: '7',
        num: 7,
        level: 'B1',
        emoji: '🔗',
        title: 'Conectores y matices',
        subtitle: 'Unir ideas, opinar y sonar natural.',
        words: [
          { id: 'p7-01', cat: 'add', no: 'dessuten', es: 'además' },
          { id: 'p7-02', cat: 'add', no: 'i tillegg', es: 'además de eso', chunk: true },
          { id: 'p7-03', cat: 'add', no: 'også', es: 'también' },
          { id: 'p7-04', cat: 'add', no: 'både', es: 'tanto (både ... og)' },
          { id: 'p7-05', cat: 'add', no: 'verken', es: 'ni (verken ... eller)' },
          { id: 'p7-06', cat: 'add', no: 'samt', es: 'junto con, además' },
          { id: 'p7-07', cat: 'add', no: 'videre', es: 'asimismo' },
          { id: 'p7-08', cat: 'add', no: 'ytterligere', es: 'adicionalmente' },
          { id: 'p7-09', cat: 'add', no: 'til og med', es: 'incluso', chunk: true },
          { id: 'p7-10', cat: 'add', no: 'for øvrig', es: 'por lo demás', chunk: true },
          { id: 'p7-11', cat: 'contrast', no: 'imidlertid', es: 'sin embargo' },
          { id: 'p7-12', cat: 'contrast', no: 'likevel', es: 'aun así' },
          { id: 'p7-13', cat: 'contrast', no: 'derimot', es: 'en cambio' },
          { id: 'p7-14', cat: 'contrast', no: 'tvert imot', es: 'al contrario', chunk: true },
          { id: 'p7-15', cat: 'contrast', no: 'på den annen side', es: 'por el otro lado', chunk: true },
          { id: 'p7-16', cat: 'contrast', no: 'selv om', es: 'aunque', chunk: true },
          { id: 'p7-17', cat: 'contrast', no: 'enda', es: 'aún' },
          { id: 'p7-18', cat: 'contrast', no: 'like fullt', es: 'no obstante', chunk: true },
          { id: 'p7-19', cat: 'contrast', no: 'til tross for', es: 'a pesar de', chunk: true },
          { id: 'p7-20', cat: 'contrast', no: 'snarere', es: 'más bien' },
          { id: 'p7-21', cat: 'cause', no: 'på grunn av', es: 'debido a', chunk: true },
          { id: 'p7-22', cat: 'cause', no: 'grunnet', es: 'a causa de' },
          { id: 'p7-23', cat: 'cause', no: 'ettersom', es: 'puesto que' },
          { id: 'p7-24', cat: 'cause', no: 'siden', es: 'ya que' },
          { id: 'p7-25', cat: 'cause', no: 'av den grunn', es: 'por esa razón', chunk: true },
          { id: 'p7-26', cat: 'cause', no: 'derav', es: 'de ahí' },
          { id: 'p7-27', cat: 'cause', no: 'følgelig', es: 'por consiguiente' },
          { id: 'p7-28', cat: 'cause', no: 'altså', es: 'por lo tanto' },
          { id: 'p7-29', cat: 'cause', no: 'dermed', es: 'con ello' },
          { id: 'p7-30', cat: 'cause', no: 'nemlig', es: 'en efecto' },
          { id: 'p7-31', cat: 'consequence', no: 'derfor', es: 'por eso' },
          { id: 'p7-32', cat: 'consequence', no: 'således', es: 'así, por consiguiente' },
          { id: 'p7-33', cat: 'consequence', no: 'konsekvens', es: 'consecuencia', forms: 'en konsekvens, konsekvenser' },
          { id: 'p7-34', cat: 'consequence', no: 'følge', es: 'secuela', forms: 'en følge, følger' },
          { id: 'p7-35', cat: 'consequence', no: 'virkning', es: 'efecto', forms: 'en virkning, virkninger' },
          { id: 'p7-36', cat: 'consequence', no: 'resultat', es: 'resultado', forms: 'et resultat, resultater' },
          { id: 'p7-37', cat: 'consequence', no: 'medføre', es: 'conllevar', forms: 'medfører · medførte · har medført' },
          { id: 'p7-38', cat: 'consequence', no: 'føre til', es: 'llevar a', chunk: true, forms: 'fører til · førte til · har ført til' },
          { id: 'p7-39', cat: 'consequence', no: 'resultere i', es: 'resultar en', chunk: true, forms: 'resulterer i · resulterte i · har resultert i' },
          { id: 'p7-40', cat: 'consequence', no: 'bidra til', es: 'contribuir a', chunk: true, forms: 'bidrar til · bidro til · har bidratt til' },
          { id: 'p7-41', cat: 'sequence', no: 'først', es: 'primero' },
          { id: 'p7-42', cat: 'sequence', no: 'deretter', es: 'después' },
          { id: 'p7-43', cat: 'sequence', no: 'samtidig', es: 'al mismo tiempo' },
          { id: 'p7-44', cat: 'sequence', no: 'i mellomtiden', es: 'mientras tanto', chunk: true },
          { id: 'p7-45', cat: 'sequence', no: 'tidligere', es: 'anteriormente' },
          { id: 'p7-46', cat: 'sequence', no: 'etterpå', es: 'luego' },
          { id: 'p7-47', cat: 'sequence', no: 'straks', es: 'en seguida' },
          { id: 'p7-48', cat: 'sequence', no: 'endelig', es: 'finalmente' },
          { id: 'p7-49', cat: 'sequence', no: 'til slutt', es: 'al final', chunk: true },
          { id: 'p7-50', cat: 'sequence', no: 'så langt', es: 'hasta ahora', chunk: true },
          { id: 'p7-51', cat: 'purpose', no: 'for å', es: 'para', chunk: true },
          { id: 'p7-52', cat: 'purpose', no: 'slik at', es: 'de modo que', chunk: true },
          { id: 'p7-53', cat: 'purpose', no: 'for at', es: 'para que', chunk: true },
          { id: 'p7-54', cat: 'purpose', no: 'med hensikt', es: 'con la intención', chunk: true },
          { id: 'p7-55', cat: 'purpose', no: 'hensikt', es: 'propósito', forms: 'en hensikt, hensikter' },
          { id: 'p7-56', cat: 'purpose', no: 'formål', es: 'objetivo', forms: 'et formål, formål' },
          { id: 'p7-57', cat: 'purpose', no: 'mål', es: 'meta', forms: 'et mål, mål' },
          { id: 'p7-58', cat: 'purpose', no: 'strategi', es: 'estrategia', forms: 'en strategi, strategier' },
          { id: 'p7-59', cat: 'purpose', no: 'metode', es: 'método', forms: 'en metode, metoder' },
          { id: 'p7-60', cat: 'purpose', no: 'tilnærming', es: 'enfoque', forms: 'en tilnærming, tilnærminger' },
          { id: 'p7-61', cat: 'condition', no: 'dersom', es: 'si (formal)' },
          { id: 'p7-62', cat: 'condition', no: 'så lenge', es: 'siempre que', chunk: true },
          { id: 'p7-63', cat: 'condition', no: 'med mindre', es: 'a menos que', chunk: true },
          { id: 'p7-64', cat: 'condition', no: 'i tilfelle', es: 'en caso de', chunk: true },
          { id: 'p7-65', cat: 'condition', no: 'forutsatt at', es: 'suponiendo que', chunk: true },
          { id: 'p7-66', cat: 'condition', no: 'betingelse', es: 'condición (requisito)', forms: 'en betingelse, betingelser' },
          { id: 'p7-67', cat: 'condition', no: 'avhengig av', es: 'dependiendo de', chunk: true },
          { id: 'p7-68', cat: 'condition', no: 'unntak', es: 'excepción', forms: 'et unntak, unntak' },
          { id: 'p7-69', cat: 'condition', no: 'unntatt', es: 'excepto' },
          { id: 'p7-70', cat: 'condition', no: 'kun', es: 'solamente' },
          { id: 'p7-71', cat: 'nuance', no: 'faktisk', es: 'de hecho' },
          { id: 'p7-72', cat: 'nuance', no: 'egentlig', es: 'en realidad' },
          { id: 'p7-73', cat: 'nuance', no: 'tilsynelatende', es: 'aparentemente' },
          { id: 'p7-74', cat: 'nuance', no: 'angivelig', es: 'supuestamente' },
          { id: 'p7-75', cat: 'nuance', no: 'tilsvarende', es: 'correspondiente' },
          { id: 'p7-76', cat: 'nuance', no: 'på sett og vis', es: 'en cierto modo', chunk: true },
          { id: 'p7-77', cat: 'nuance', no: 'stort sett', es: 'en general', chunk: true },
          { id: 'p7-78', cat: 'nuance', no: 'hovedsakelig', es: 'principalmente' },
          { id: 'p7-79', cat: 'nuance', no: 'delvis', es: 'parcialmente' },
          { id: 'p7-80', cat: 'nuance', no: 'fullstendig', es: 'completamente' },
          { id: 'p7-81', cat: 'discourse', no: 'innledningsvis', es: 'para empezar' },
          { id: 'p7-82', cat: 'discourse', no: 'avslutningsvis', es: 'para terminar' },
          { id: 'p7-83', cat: 'discourse', no: 'for det første', es: 'en primer lugar', chunk: true },
          { id: 'p7-84', cat: 'discourse', no: 'for det andre', es: 'en segundo lugar', chunk: true },
          { id: 'p7-85', cat: 'discourse', no: 'på den ene siden', es: 'por un lado', chunk: true },
          { id: 'p7-86', cat: 'discourse', no: 'på den andre siden', es: 'por otro lado', chunk: true },
          { id: 'p7-87', cat: 'discourse', no: 'med andre ord', es: 'en otras palabras', chunk: true },
          { id: 'p7-88', cat: 'discourse', no: 'kort sagt', es: 'en resumen', chunk: true },
          { id: 'p7-89', cat: 'discourse', no: 'som nevnt', es: 'como se ha mencionado', chunk: true },
          { id: 'p7-90', cat: 'discourse', no: 'når det gjelder', es: 'en cuanto a', chunk: true },
          { id: 'p7-91', cat: 'degree', no: 'omtrent', es: 'aproximadamente' },
          { id: 'p7-92', cat: 'degree', no: 'nesten', es: 'casi' },
          { id: 'p7-93', cat: 'degree', no: 'knapt', es: 'apenas' },
          { id: 'p7-94', cat: 'degree', no: 'nøyaktig', es: 'exactamente' },
          { id: 'p7-95', cat: 'degree', no: 'særlig', es: 'especialmente' },
          { id: 'p7-96', cat: 'degree', no: 'spesielt', es: 'particularmente' },
          { id: 'p7-97', cat: 'degree', no: 'i hovedsak', es: 'en esencia', chunk: true },
          { id: 'p7-98', cat: 'degree', no: 'generelt', es: 'generalmente' },
          { id: 'p7-99', cat: 'degree', no: 'absolutt', es: 'absolutamente' },
          { id: 'p7-100', cat: 'degree', no: 'muligens', es: 'posiblemente' }
        ]
      },
      {
        id: '8',
        num: 8,
        level: 'B2',
        emoji: '💬',
        title: 'Opiniones y debate',
        subtitle: 'Argumentar, comparar y matizar.',
        words: [
          { id: 'p8-01', cat: 'opinion', no: 'mening', es: 'opinión', forms: 'en mening, meninger' },
          { id: 'p8-02', cat: 'opinion', no: 'synspunkt', es: 'punto de vista', forms: 'et synspunkt, synspunkter' },
          { id: 'p8-03', cat: 'opinion', no: 'oppfatning', es: 'percepción, opinión', forms: 'en oppfatning, oppfatninger' },
          { id: 'p8-04', cat: 'opinion', no: 'holdning', es: 'actitud', forms: 'en holdning, holdninger' },
          { id: 'p8-05', cat: 'opinion', no: 'standpunkt', es: 'postura', forms: 'et standpunkt, standpunkter' },
          { id: 'p8-06', cat: 'opinion', no: 'subjektiv', es: 'subjetivo' },
          { id: 'p8-07', cat: 'opinion', no: 'objektiv', es: 'objetivo (imparcial)' },
          { id: 'p8-08', cat: 'opinion', no: 'personlig', es: 'personal' },
          { id: 'p8-09', cat: 'opinion', no: 'etter min mening', es: 'en mi opinión', chunk: true },
          { id: 'p8-10', cat: 'opinion', no: 'jeg synes at', es: 'creo que', chunk: true },
          { id: 'p8-11', cat: 'agreement', no: 'enig', es: 'de acuerdo' },
          { id: 'p8-12', cat: 'agreement', no: 'uenighet', es: 'desacuerdo', forms: 'en uenighet, uenigheter' },
          { id: 'p8-13', cat: 'agreement', no: 'samtykke', es: 'consentimiento', forms: 'et samtykke, samtykker' },
          { id: 'p8-14', cat: 'agreement', no: 'støtte', es: 'apoyo', forms: 'en støtte, støtter' },
          { id: 'p8-15', cat: 'agreement', no: 'avvise', es: 'rechazar', forms: 'avviser · avviste · har avvist' },
          { id: 'p8-16', cat: 'agreement', no: 'godta', es: 'aceptar', forms: 'godtar · godtok · har godtatt' },
          { id: 'p8-17', cat: 'agreement', no: 'akseptere', es: 'aceptar formalmente', forms: 'aksepterer · aksepterte · har akseptert' },
          { id: 'p8-18', cat: 'agreement', no: 'innvende', es: 'objetar', forms: 'innvender · innvendte · har innvendt' },
          { id: 'p8-19', cat: 'agreement', no: 'kompromiss', es: 'compromiso', forms: 'et kompromiss, kompromisser' },
          { id: 'p8-20', cat: 'agreement', no: 'forhandle', es: 'negociar', forms: 'forhandler · forhandlet · har forhandlet' },
          { id: 'p8-21', cat: 'argument', no: 'argument', es: 'argumento', forms: 'et argument, argumenter' },
          { id: 'p8-22', cat: 'argument', no: 'begrunnelse', es: 'justificación', forms: 'en begrunnelse, begrunnelser' },
          { id: 'p8-23', cat: 'argument', no: 'påstand', es: 'afirmación', forms: 'en påstand, påstander' },
          { id: 'p8-24', cat: 'argument', no: 'bevis', es: 'prueba', forms: 'et bevis, bevis' },
          { id: 'p8-25', cat: 'argument', no: 'eksempel', es: 'ejemplo', forms: 'et eksempel, eksempler' },
          { id: 'p8-26', cat: 'argument', no: 'motargument', es: 'contraargumento', forms: 'et motargument, motargumenter' },
          { id: 'p8-27', cat: 'argument', no: 'resonnement', es: 'razonamiento', forms: 'et resonnement, resonnementer' },
          { id: 'p8-28', cat: 'argument', no: 'logikk', es: 'lógica', forms: 'en logikk' },
          { id: 'p8-29', cat: 'argument', no: 'premiss', es: 'premisa', forms: 'en premiss, premisser' },
          { id: 'p8-30', cat: 'argument', no: 'konklusjon', es: 'conclusión', forms: 'en konklusjon, konklusjoner' },
          { id: 'p8-31', cat: 'comparison', no: 'sammenligne', es: 'comparar', forms: 'sammenligner · sammenlignet · har sammenlignet' },
          { id: 'p8-32', cat: 'comparison', no: 'sammenlignet med', es: 'comparado con', chunk: true },
          { id: 'p8-33', cat: 'comparison', no: 'forskjell', es: 'diferencia', forms: 'en forskjell, forskjeller' },
          { id: 'p8-34', cat: 'comparison', no: 'likhet', es: 'similitud', forms: 'en likhet, likheter' },
          { id: 'p8-35', cat: 'comparison', no: 'i motsetning til', es: 'a diferencia de', chunk: true },
          { id: 'p8-36', cat: 'comparison', no: 'til sammenligning', es: 'en comparación', chunk: true },
          { id: 'p8-37', cat: 'comparison', no: 'likestille', es: 'equiparar', forms: 'likestiller · likestilte · har likestilt' },
          { id: 'p8-38', cat: 'comparison', no: 'overlegen', es: 'superior' },
          { id: 'p8-39', cat: 'comparison', no: 'underlegen', es: 'inferior' },
          { id: 'p8-40', cat: 'comparison', no: 'forhold', es: 'relación', forms: 'et forhold, forhold' },
          { id: 'p8-41', cat: 'doubt', no: 'tvil', es: 'duda', forms: 'en tvil' },
          { id: 'p8-42', cat: 'doubt', no: 'tvile', es: 'dudar', forms: 'tviler · tvilte · har tvilt' },
          { id: 'p8-43', cat: 'doubt', no: 'usikker', es: 'inseguro' },
          { id: 'p8-44', cat: 'doubt', no: 'sikker', es: 'seguro (certeza)' },
          { id: 'p8-45', cat: 'doubt', no: 'mulighet', es: 'posibilidad', forms: 'en mulighet, muligheter' },
          { id: 'p8-46', cat: 'doubt', no: 'sannsynlig', es: 'probable' },
          { id: 'p8-47', cat: 'doubt', no: 'usannsynlig', es: 'improbable' },
          { id: 'p8-48', cat: 'doubt', no: 'åpenbar', es: 'obvio' },
          { id: 'p8-49', cat: 'doubt', no: 'uklar', es: 'poco claro' },
          { id: 'p8-50', cat: 'doubt', no: 'forutsetning', es: 'suposición', forms: 'en forutsetning, forutsetninger' },
          { id: 'p8-51', cat: 'discussion', no: 'debatt', es: 'debate (formal)', forms: 'en debatt, debatter' },
          { id: 'p8-52', cat: 'discussion', no: 'diskutere', es: 'discutir', forms: 'diskuterer · diskuterte · har diskutert' },
          { id: 'p8-53', cat: 'discussion', no: 'meningsutveksling', es: 'intercambio de opiniones', forms: 'en meningsutveksling, meningsutvekslinger' },
          { id: 'p8-54', cat: 'discussion', no: 'replikk', es: 'réplica', forms: 'en replikk, replikker' },
          { id: 'p8-55', cat: 'discussion', no: 'motpart', es: 'contraparte', forms: 'en motpart, motparter' },
          { id: 'p8-56', cat: 'discussion', no: 'moderator', es: 'moderador', forms: 'en moderator, moderatorer' },
          { id: 'p8-57', cat: 'discussion', no: 'tilhører', es: 'oyente', forms: 'en tilhører, tilhørere' },
          { id: 'p8-58', cat: 'discussion', no: 'problemstilling', es: 'planteamiento', forms: 'en problemstilling, problemstillinger' },
          { id: 'p8-59', cat: 'discussion', no: 'tema', es: 'tema', forms: 'et tema, temaer' },
          { id: 'p8-60', cat: 'discussion', no: 'sak', es: 'asunto', forms: 'en sak, saker' },
          { id: 'p8-61', cat: 'society', no: 'samfunn', es: 'sociedad', forms: 'et samfunn, samfunn' },
          { id: 'p8-62', cat: 'society', no: 'politikk', es: 'política', forms: 'en politikk' },
          { id: 'p8-63', cat: 'society', no: 'demokrati', es: 'democracia', forms: 'et demokrati, demokratier' },
          { id: 'p8-64', cat: 'society', no: 'velferd', es: 'estado de bienestar', forms: 'en velferd' },
          { id: 'p8-65', cat: 'society', no: 'likestilling', es: 'igualdad', forms: 'en likestilling' },
          { id: 'p8-66', cat: 'society', no: 'innvandring', es: 'inmigración', forms: 'en innvandring' },
          { id: 'p8-67', cat: 'society', no: 'integrering', es: 'integración', forms: 'en integrering' },
          { id: 'p8-68', cat: 'society', no: 'arbeidsmarked', es: 'mercado laboral', forms: 'et arbeidsmarked, arbeidsmarkeder' },
          { id: 'p8-69', cat: 'society', no: 'utdanningssystem', es: 'sistema educativo', forms: 'et utdanningssystem, utdanningssystemer' },
          { id: 'p8-70', cat: 'society', no: 'helsevesen', es: 'sistema sanitario', forms: 'et helsevesen, helsevesen' },
          { id: 'p8-71', cat: 'ethics', no: 'etikk', es: 'ética', forms: 'en etikk' },
          { id: 'p8-72', cat: 'ethics', no: 'moral', es: 'moral', forms: 'en moral' },
          { id: 'p8-73', cat: 'ethics', no: 'ansvarlig', es: 'responsable' },
          { id: 'p8-74', cat: 'ethics', no: 'rettferdig', es: 'justo' },
          { id: 'p8-75', cat: 'ethics', no: 'urettferdig', es: 'injusto' },
          { id: 'p8-76', cat: 'ethics', no: 'frihet', es: 'libertad', forms: 'en frihet, friheter' },
          { id: 'p8-77', cat: 'ethics', no: 'plikt', es: 'deber', forms: 'en plikt, plikter' },
          { id: 'p8-78', cat: 'ethics', no: 'verdighet', es: 'dignidad', forms: 'en verdighet' },
          { id: 'p8-79', cat: 'ethics', no: 'respekt', es: 'respeto', forms: 'en respekt' },
          { id: 'p8-80', cat: 'ethics', no: 'toleranse', es: 'tolerancia', forms: 'en toleranse' },
          { id: 'p8-81', cat: 'persuasion', no: 'overtale', es: 'persuadir', forms: 'overtaler · overtalte · har overtalt' },
          { id: 'p8-82', cat: 'persuasion', no: 'påvirke', es: 'influir', forms: 'påvirker · påvirket · har påvirket' },
          { id: 'p8-83', cat: 'persuasion', no: 'overbevise', es: 'convencer', forms: 'overbeviser · overbeviste · har overbevist' },
          { id: 'p8-84', cat: 'persuasion', no: 'appellere', es: 'apelar', forms: 'appellerer · appellerte · har appellert' },
          { id: 'p8-85', cat: 'persuasion', no: 'retorikk', es: 'retórica', forms: 'en retorikk' },
          { id: 'p8-86', cat: 'persuasion', no: 'emosjon', es: 'emoción', forms: 'en emosjon, emosjoner' },
          { id: 'p8-87', cat: 'persuasion', no: 'tillit', es: 'confianza', forms: 'en tillit' },
          { id: 'p8-88', cat: 'persuasion', no: 'troverdighet', es: 'credibilidad', forms: 'en troverdighet' },
          { id: 'p8-89', cat: 'persuasion', no: 'engasjere', es: 'involucrar', forms: 'engasjerer · engasjerte · har engasjert' },
          { id: 'p8-90', cat: 'persuasion', no: 'oppfordre', es: 'exhortar', forms: 'oppfordrer · oppfordret · har oppfordret' },
          { id: 'p8-91', cat: 'conclusion', no: 'oppsummere', es: 'resumir', forms: 'oppsummerer · oppsummerte · har oppsummert' },
          { id: 'p8-92', cat: 'conclusion', no: 'sammenfatning', es: 'resumen', forms: 'en sammenfatning, sammenfatninger' },
          { id: 'p8-93', cat: 'conclusion', no: 'avslutning', es: 'cierre, conclusión', forms: 'en avslutning, avslutninger' },
          { id: 'p8-94', cat: 'conclusion', no: 'konkludere', es: 'concluir', forms: 'konkluderer · konkluderte · har konkludert' },
          { id: 'p8-95', cat: 'conclusion', no: 'avgjørelse', es: 'decisión final', forms: 'en avgjørelse, avgjørelser' },
          { id: 'p8-96', cat: 'conclusion', no: 'løsning', es: 'solución', forms: 'en løsning, løsninger' },
          { id: 'p8-97', cat: 'conclusion', no: 'anbefaling', es: 'recomendación', forms: 'en anbefaling, anbefalinger' },
          { id: 'p8-98', cat: 'conclusion', no: 'perspektiv', es: 'perspectiva', forms: 'et perspektiv, perspektiver' },
          { id: 'p8-99', cat: 'conclusion', no: 'konsensus', es: 'consenso', forms: 'en konsensus' },
          { id: 'p8-100', cat: 'conclusion', no: 'oppfordring', es: 'exhortación, llamada a la acción', forms: 'en oppfordring, oppfordringer' }
        ]
      },
      { id: '9', num: 9, level: 'B2', emoji: '📰', title: 'Cultura y sociedad', subtitle: 'Noticias, política, clima y vida noruega.', soon: true },
      { id: '10', num: 10, level: 'B1–B2', emoji: '🏁', title: 'Repaso y fluidez', subtitle: 'Las palabras que cierran el círculo.', soon: true }
    ]
  },

  /* -------------------------------------------------------------------- */
  stories: {
    totalTarget: 12,
    chapters: [
      {
        id: '1',
        num: 1,
        level: 'A2',
        emoji: '🧳',
        title: 'Ankomst',
        subtitle: 'La llegada a Oslo',
        intro: 'Lucía llega a Oslo con dos maletas, un contrato de alquiler y muchas ganas. El primer día pone a prueba su noruego y su paciencia.',
        place: 'Grünerløkka',
        places: ['Oslo S', 'Grünerløkka', 'Thorvald Meyers gate', 'Akerselva', 'Rema 1000'],
        paragraphs: [
          { no: 'Lucía står på Oslo S med to tunge kofferter. Det regner ute, og hun føler seg trøtt og nervøs. Hun har reist fra Spania for å bo og jobbe i Norge. Rundt henne går folk fort forbi, og ingen ser på henne.', es: 'Lucía está en Oslo S con dos maletas pesadas. Fuera llueve, y se siente cansada y nerviosa. Ha viajado desde España para vivir y trabajar en Noruega. A su alrededor la gente pasa deprisa y nadie la mira.' },
          { no: 'Hun tar trikken til Grünerløkka. Der har hun leid en liten leilighet i Thorvald Meyers gate. Utleieren venter utenfor bygningen med en nøkkel i hånden. Han heter Bjørn, og han sier «velkommen» på en rolig måte.', es: 'Coge el tranvía hasta Grünerløkka. Allí ha alquilado un pequeño piso en Thorvald Meyers gate. El casero la espera fuera del edificio con una llave en la mano. Se llama Bjørn y dice «bienvenida» con calma.' },
          { no: 'Leiligheten er ikke stor, men den er lys. Det er et lite kjøkken, et bad og ett soverom. Møblene er enkle: en seng, et bord og en gammel stol. Lucía åpner vinduet og hører folk som snakker norsk på gaten.', es: 'El piso no es grande, pero es luminoso. Tiene una cocina pequeña, un baño y un dormitorio. Los muebles son sencillos: una cama, una mesa y una silla vieja. Lucía abre la ventana y oye a gente hablando noruego en la calle.' },
          { no: 'Hun går til en Rema 1000 i nærheten for å kjøpe mat. Hun finner brød, melk, ost, egg og kaffe. I kassen sier hun «takk» og betaler med kort. Det er første gang hun gjør noe helt vanlig i den nye byen.', es: 'Va a un Rema 1000 cercano a comprar comida. Encuentra pan, leche, queso, huevos y café. En la caja dice «gracias» y paga con tarjeta. Es la primera vez que hace algo completamente normal en la nueva ciudad.' },
          { no: 'På vei hjem møter hun Ingrid, som bor i leiligheten ved siden av. Ingrid sier «hei» og spør hvordan det går. Lucía svarer at alt er nytt, og at hun er litt sliten. Ingrid smiler og sier at det er helt normalt. De snakker litt om været og om butikken i gaten. Det er en liten samtale, men for Lucía føles den stor.', es: 'De camino a casa conoce a Ingrid, que vive en el piso de al lado. Ingrid le dice «hola» y le pregunta qué tal. Lucía responde que todo es nuevo y que está un poco cansada. Ingrid sonríe y le dice que es totalmente normal. Hablan un poco del tiempo y de la tienda de la calle. Es una conversación pequeña, pero para Lucía se siente enorme.' },
          { no: 'Om kvelden sitter hun ved vinduet og ser på Akerselva. Vannet er mørkt, og lysene fra byen speiler seg i det. Hun savner familien og vennene sine. Hun tenker: «Hva har jeg gjort?»', es: 'Por la noche se sienta junto a la ventana y mira el Akerselva. El agua está oscura y las luces de la ciudad se reflejan en ella. Echa de menos a su familia y a sus amigos. Piensa: «¿Qué he hecho?».' },
          { no: 'Men hun tenker også på jobben hun vil finne, og på menneskene hun vil møte. Hun puster dypt inn og sier til seg selv: «Nå begynner det.» Så lager hun en kopp te og skriver hjem: «Jeg er fremme. Alt er nytt, men jeg er okay.»', es: 'Pero también piensa en el trabajo que quiere encontrar y en las personas que quiere conocer. Respira hondo y se dice: «Ahora empieza.» Luego se hace una taza de té y escribe a casa: «Ya he llegado. Todo es nuevo, pero estoy bien.»' }
        ],
        vocab: [
          { no: 'ankomme', es: 'llegar', forms: 'ankommer · ankom · har ankommet' },
          { no: 'koffert', es: 'maleta', forms: 'en koffert, kofferter' },
          { no: 'regne', es: 'llover', forms: 'regner · regnet · har regnet' },
          { no: 'føle seg', es: 'sentirse', forms: 'føler seg · følte seg · har følt seg' },
          { no: 'utleier', es: 'casero', forms: 'en utleier, utleiere' },
          { no: 'nøkkel', es: 'llave', forms: 'en nøkkel, nøkler' },
          { no: 'leilighet', es: 'piso, apartamento', forms: 'en leilighet, leiligheter' },
          { no: 'kjøkken', es: 'cocina', forms: 'et kjøkken, kjøkken' },
          { no: 'gate', es: 'calle', forms: 'en gate, gater' },
          { no: 'i nærheten', es: 'cerca', chunk: true },
          { no: 'kasse', es: 'caja', forms: 'en kasse, kasser' },
          { no: 'betale', es: 'pagar', forms: 'betaler · betalte · har betalt' },
          { no: 'savne', es: 'echar de menos', forms: 'savner · savnet · har savnet' },
          { no: 'tenke', es: 'pensar', forms: 'tenker · tenkte · har tenkt' },
          { no: 'puste', es: 'respirar', forms: 'puster · pustet · har pustet' }
        ],
        grammar: {
          title: 'Presens: lo que pasa ahora',
          es: 'Para contar lo que pasa ahora o cada día se usa el presente: hun bor, hun tar, hun kjøper. Muchos verbos terminan en -er, pero algunos son irregulares: hun tar, hun ser.',
          examples: [
            { no: 'Hun bor i Oslo.', es: 'Ella vive en Oslo.' },
            { no: 'Hun tar trikken.', es: 'Ella coge el tranvía.' },
            { no: 'Hun kjøper mat.', es: 'Ella compra comida.' }
          ]
        },
        exercises: [
          {
            type: 'mcq',
            prompt: '¿Dónde vive Lucía?',
            options: ['En Grünerløkka', 'En Bergen', 'En Trondheim', 'En Stavanger'],
            answer: 0,
            explain: 'El texto dice que ha alquilado un piso en Thorvald Meyers gate, en Grünerløkka.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el verbo correcto:',
            sentence: 'Hun ___ seg trøtt og nervøs.',
            answers: ['føler'],
            bank: ['føler', 'har', 'tar'],
            es: 'Se siente cansada y nerviosa.',
            explain: '«Å føle seg» = sentirse. La forma es «hun føler seg».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase:',
            words: ['Lucía', 'tar', 'trikken', 'til', 'Grünerløkka.'],
            es: 'Lucía coge el tranvía hasta Grünerløkka.',
            explain: '«Å ta trikken» = coger el tranvía. El destino va con «til».'
          },
          {
            type: 'listen',
            audio: 'Hun savner familien og vennene sine.',
            es: 'Echa de menos a su familia y a sus amigos.',
            explain: '«Å savne» = echar de menos. «Familien og vennene sine» = su familia y sus amigos.'
          },
          {
            type: 'match',
            prompt: 'Empareja el vocabulario de la llegada:',
            pairs: [
              { a: 'koffert', b: 'maleta' },
              { a: 'nøkkel', b: 'llave' },
              { a: 'kjøkken', b: 'cocina' },
              { a: 'kasse', b: 'caja' }
            ],
            explain: 'Cuatro palabras del primer día.'
          }
        ]
      },
      {
        id: '2',
        num: 2,
        level: 'A2',
        emoji: '💼',
        title: 'Jobbsøking',
        subtitle: 'Buscar trabajo en noruego',
        intro: 'NAV, Finn.no, una CV y una entrevista. Lucía descubre que buscar trabajo también es aprender un idioma.',
        place: 'Bjørvika',
        places: ['NAV', 'Finn.no', 'Deichman Bjørvika', 'Bjørvika'],
        paragraphs: [
          { no: 'Tre dager senere går Lucía til NAV. Hun trenger hjelp til å forstå reglene og til å finne en jobb. Kontoret er fullt av mennesker, og hun må vente lenge. Hun kjenner at hun blir litt stresset.', es: 'Tres días después, Lucía va a NAV. Necesita ayuda para entender las reglas y encontrar trabajo. La oficina está llena de gente y tiene que esperar mucho. Nota que se pone un poco nerviosa.' },
          { no: 'En ansatt forklarer at hun må lage en CV og en søknad. Lucía åpner Finn.no på telefonen og finner flere stillinger på kafeer og i butikker. Hun vet ikke helt hvor hun skal begynne, men hun noterer tre interessante jobber.', es: 'Una empleada le explica que tiene que hacer un currículum y una solicitud. Lucía abre Finn.no en el móvil y encuentra varios puestos en cafeterías y tiendas. No sabe muy bien por dónde empezar, pero apunta tres trabajos interesantes.' },
          { no: 'Hun går til Deichman Bjørvika for å skrive ut CV-en. Biblioteket er stort og lyst, og hun finner en rolig plass ved vinduet. Der sitter hun i to timer og slår opp hvert ord. Det går sakte, men hun gir ikke opp.', es: 'Va a Deichman Bjørvika a imprimir el currículum. La biblioteca es grande y luminosa, y encuentra un sitio tranquilo junto a la ventana. Allí se sienta dos horas y busca cada palabra. Va despacio, pero no se rinde.' },
          { no: 'På biblioteket møter hun Sofie, som også leter etter jobb. Sofie har bodd i Oslo i ett år og kjenner reglene bedre. Hun hjelper Lucía med å finne de riktige ordene, og de avtaler å øve på intervjuet sammen. «Du må ikke være redd for å gjøre feil,» sier Sofie. «Alle gjør feil. Det viktigste er å prøve.»', es: 'En la biblioteca conoce a Sofie, que también busca trabajo. Sofie lleva un año viviendo en Oslo y conoce mejor las reglas. Ayuda a Lucía a encontrar las palabras correctas, y quedan para practicar la entrevista juntas. «No tienes que tener miedo de equivocarte», dice Sofie. «Todo el mundo se equivoca. Lo importante es intentarlo.»' },
          { no: 'Til slutt sender hun en kort søknad til en kafé i Bjørvika. Hun skriver at hun har erfaring fra service, at hun liker å møte mennesker, og at hun lærer norsk hver dag. Hun leser teksten tre ganger før hun trykker «send».', es: 'Por fin envía una solicitud corta a una cafetería de Bjørvika. Escribe que tiene experiencia en atención al cliente, que le gusta conocer gente y que aprende noruego cada día. Lee el texto tres veces antes de pulsar «enviar».' },
          { no: 'Dagen etter ringer sjefen. «Kan du komme på intervju i morgen klokka ti?» Lucía sier ja, men hjertet banker fort. Hun forstår ikke alt på telefonen, men hun later som hun gjør det. Etterpå skriver hun ned alt hun husker.', es: 'Al día siguiente llama el jefe. «¿Puedes venir a una entrevista mañana a las diez?» Lucía dice que sí, pero el corazón le late deprisa. No entiende todo por teléfono, pero finge que sí. Después apunta todo lo que recuerda.' },
          { no: 'På intervjuet spør sjefen om erfaring og om hvorfor hun vil jobbe der. Lucía forteller om kafeen i Spania. Hun gjør noen feil, men hun prøver å svare rolig og tydelig. Sjefen sier: «Vi ringer deg på fredag.» Lucía går ut i regnet, både glad og redd. På fredag får hun en prøvevakt, og hun gråter av lettelse.', es: 'En la entrevista, el jefe le pregunta por su experiencia y por qué quiere trabajar allí. Lucía habla de la cafetería de España. Comete algunos errores, pero intenta responder con calma y claridad. El jefe dice: «Te llamamos el viernes.» Lucía sale bajo la lluvia, contenta y asustada a la vez. El viernes le ofrecen un turno de prueba y llora de alivio.' }
        ],
        vocab: [
          { no: 'ansatt', es: 'empleado', forms: 'en ansatt, ansatte' },
          { no: 'forklare', es: 'explicar', forms: 'forklarer · forklarte · har forklart' },
          { no: 'CV', es: 'currículum', forms: 'en CV, CV-er' },
          { no: 'søknad', es: 'solicitud', forms: 'en søknad, søknader' },
          { no: 'stilling', es: 'puesto de trabajo', forms: 'en stilling, stillinger' },
          { no: 'intervju', es: 'entrevista', forms: 'et intervju, intervjuer' },
          { no: 'erfaring', es: 'experiencia', forms: 'en erfaring, erfaringer' },
          { no: 'prøvevakt', es: 'turno de prueba', forms: 'en prøvevakt, prøvevakter' },
          { no: 'svare', es: 'responder', forms: 'svarer · svarte · har svart' },
          { no: 'ringe', es: 'llamar', forms: 'ringer · ringte · har ringt' },
          { no: 'melding', es: 'mensaje', forms: 'en melding, meldinger' },
          { no: 'gråte', es: 'llorar', forms: 'gråter · gråt · har grått' },
          { no: 'tårer', es: 'lágrimas', forms: 'tårer' },
          { no: 'stolt', es: 'orgulloso' },
          { no: 'vente', es: 'esperar', forms: 'venter · ventet · har ventet' }
        ],
        grammar: {
          title: 'Modale verb: kan, må, vil',
          es: 'Los verbos modales van seguidos de infinitivo sin «å»: hun kan komme, hun må vente, hun vil jobbe. El verbo principal no cambia.',
          examples: [
            { no: 'Hun kan komme i morgen.', es: 'Puede venir mañana.' },
            { no: 'Hun må vente lenge.', es: 'Tiene que esperar mucho.' },
            { no: 'Hun vil jobbe på en kafé.', es: 'Quiere trabajar en una cafetería.' }
          ]
        },
        exercises: [
          {
            type: 'mcq',
            prompt: '¿Qué necesita hacer Lucía para buscar trabajo?',
            options: ['Una CV y una solicitud', 'Un pasaporte nuevo', 'Una casa más grande', 'Un curso de cocina'],
            answer: 0,
            explain: 'La empleada de NAV le explica que debe preparar una CV y una søknad.'
          },
          {
            type: 'gap',
            prompt: 'Completa la frase:',
            sentence: 'Hun får en ___ på fredag.',
            answers: ['prøvevakt'],
            bank: ['prøvevakt', 'ferie', 'regning'],
            es: 'Le dan un turno de prueba el viernes.',
            explain: '«Prøvevakt» es el turno de prueba antes de conseguir el trabajo.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase:',
            words: ['Hun', 'søker', 'jobb', 'på', 'en', 'kafé', 'i', 'Bjørvika.'],
            es: 'Busca trabajo en una cafetería de Bjørvika.',
            explain: '«Å søke jobb» = buscar trabajo; «på en kafé» = en una cafetería.'
          },
          {
            type: 'listen',
            audio: 'Kan du komme på intervju i morgen?',
            es: '¿Puedes venir a la entrevista mañana?',
            explain: '«Å komme på intervju» = ir a la entrevista.'
          },
          {
            type: 'cloze',
            prompt: 'Completa la búsqueda de trabajo:',
            text: 'Hun lager en ___ og en ___. Etter intervjuet får hun en ___.',
            answers: ['CV', 'søknad', 'prøvevakt'],
            bank: ['CV', 'søknad', 'prøvevakt', 'ferie', 'regning', 'melding'],
            es: 'Hace un currículum y una solicitud. Después de la entrevista le dan un turno de prueba.',
            explain: 'Las tres palabras clave del capítulo.'
          }
        ]
      },
      {
        id: '3',
        num: 3,
        level: 'B1',
        emoji: '🤝',
        title: 'Nye venner',
        subtitle: 'Gimnasio, idioma y amistad',
        intro: 'Un gimnasio, una språkkafé y una caminata a Sognsvann. Poco a poco, Oslo empieza a parecerse a casa.',
        place: 'Sognsvann',
        places: ['Grünerløkka', 'Markveien', 'Deichman Bjørvika', 'Sognsvann'],
        paragraphs: [
          { no: 'To uker senere begynner Lucía på et treningssenter på Grünerløkka. Hun vil bli sterkere og få nye venner. Den første uken er hun sjenert og trener alene. Hun føler seg litt utenfor.', es: 'Dos semanas después, Lucía empieza en un gimnasio de Grünerløkka. Quiere ponerse más fuerte y hacer nuevos amigos. La primera semana es tímida y entrena sola. Se siente un poco fuera de lugar.' },
          { no: 'En ettermiddag spør en jente om hun kan låne en manual. Jenta heter Mari, og hun er også ganske ny i byen. De begynner å snakke mens de trener. Etter treningen spør Mari om Lucía vil ta en kaffe.', es: 'Una tarde, una chica le pregunta si puede coger prestada una mancuerna. La chica se llama Mari y también es bastante nueva en la ciudad. Empiezan a hablar mientras entrenan. Después del entrenamiento, Mari le pregunta a Lucía si quiere tomar un café.' },
          { no: 'De setter seg på en kafé i Markveien og snakker i to timer. Lucía forteller om Spania, og Mari forteller om familien sin. De oppdager at de begge savner noe fra hjemlandet, men at de også liker Oslo mer og mer.', es: 'Se sientan en una cafetería de Markveien y hablan durante dos horas. Lucía habla de España y Mari de su familia. Descubren que las dos echan de menos algo de su país, pero que también les gusta cada vez más Oslo.' },
          { no: 'Mari forteller om en språkkafé på Deichman Bjørvika. Der møter Lucía folk fra mange land. De snakker norsk, gjør feil og ler sammen. Ingen bryr seg om feilene. For første gang føler Lucía at hun ikke trenger å være perfekt.', es: 'Mari le habla de un café de idiomas en Deichman Bjørvika. Allí Lucía conoce a gente de muchos países. Hablan noruego, cometen errores y se ríen juntos. A nadie le importan los errores. Por primera vez, Lucía siente que no necesita ser perfecta.' },
          { no: 'På jobben i kafeen har Lucía nå faste vakter. Hun lærer navnene på kundene og husker hva de pleier å bestille. Noen ganger blir hun sliten, men hun liker å snakke med folk. Kollegene sier at hun har blitt tryggere på norsk. En kunde sier: «Du snakker bedre enn i forrige uke.» Lucía ler og sier takk. Hun vet at hun fortsatt gjør feil, men hun tør mer.', es: 'En el trabajo de la cafetería, Lucía ya tiene turnos fijos. Aprende los nombres de los clientes y recuerda qué suelen pedir. A veces se cansa, pero le gusta hablar con la gente. Los compañeros dicen que se ha vuelto más segura con el noruego. Un cliente le dice: «Hablas mejor que la semana pasada.» Lucía se ríe y da las gracias. Sabe que todavía comete errores, pero se atreve más.' },
          { no: 'En lørdag går Lucía, Mari og to andre venner på tur til Sognsvann. Det er kaldt, men himmelen er blå. De har med kaffe og matpakke, og de går rundt vannet. Lucía tar bilder og sender dem hjem.', es: 'Un sábado, Lucía, Mari y otros dos amigos van de excursión a Sognsvann. Hace frío, pero el cielo está azul. Llevan café y comida, y dan la vuelta al lago. Lucía hace fotos y las envía a casa.' },
          { no: 'Om kvelden tenker hun på den første natten i leiligheten. Hun var alene og redd. Nå har hun en jobb, venner og en by hun begynner å kjenne. Det er fortsatt vanskelig å snakke norsk, og hun savner Spania. Men hun vet at hun ikke er alene. Hun skriver hjem: «Jeg har fått venner. Vi skal på tur igjen neste helg.» Så sier hun høyt: «Vi sees i morgen.»', es: 'Por la noche piensa en la primera noche en el piso. Estaba sola y asustada. Ahora tiene un trabajo, amigos y una ciudad que empieza a conocer. Sigue siendo difícil hablar noruego y echa de menos España. Pero sabe que no está sola. Escribe a casa: «He hecho amigos. El próximo fin de semana volvemos de excursión.» Luego dice en voz alta: «Nos vemos mañana.»' }
        ],
        vocab: [
          { no: 'treningssenter', es: 'gimnasio', forms: 'et treningssenter, treningssentre' },
          { no: 'sterk', es: 'fuerte' },
          { no: 'sjenert', es: 'tímido' },
          { no: 'manual', es: 'mancuerna', forms: 'en manual, manualer' },
          { no: 'låne', es: 'prestar, coger prestado', forms: 'låner · lånte · har lånt' },
          { no: 'språkkafé', es: 'café de idiomas', forms: 'en språkkafé, språkkaféer' },
          { no: 'land', es: 'país', forms: 'et land, land' },
          { no: 'feil', es: 'error', forms: 'en feil, feil' },
          { no: 'le', es: 'reír', forms: 'ler · lo · har ledd' },
          { no: 'tur', es: 'excursión, vuelta', forms: 'en tur, turer' },
          { no: 'himmel', es: 'cielo', forms: 'en himmel, himler' },
          { no: 'hjemme', es: 'en casa' },
          { no: 'kjenne', es: 'conocer, sentir', forms: 'kjenner · kjente · har kjent' },
          { no: 'alene', es: 'solo, sola' },
          { no: 'føle seg hjemme', es: 'sentirse en casa', chunk: true }
        ],
        grammar: {
          title: 'Refleksive verb: føle seg, glede seg',
          es: 'Algunos verbos llevan un pronombre reflexivo: hun føler seg hjemme, hun gleder seg til helgen. «Å bli kjent med» significa conocer a alguien.',
          examples: [
            { no: 'Hun føler seg hjemme.', es: 'Se siente en casa.' },
            { no: 'Hun gleder seg til helgen.', es: 'Tiene ganas de que llegue el fin de semana.' },
            { no: 'Hun blir kjent med Mari.', es: 'Conoce a Mari.' }
          ]
        },
        exercises: [
          {
            type: 'mcq',
            prompt: '¿Dónde conoce Lucía a Mari?',
            options: ['En el gimnasio', 'En NAV', 'En el supermercado', 'En el médico'],
            answer: 0,
            explain: 'Se conocen en el treningssenter de Grünerløkka, cuando Mari le pide una mancuerna.'
          },
          {
            type: 'gap',
            prompt: 'Completa la frase:',
            sentence: 'Lucía føler seg endelig litt ___.',
            answers: ['hjemme'],
            bank: ['hjemme', 'syk', 'sen'],
            es: 'Lucía se siente por fin un poco en casa.',
            explain: '«Å føle seg hjemme» = sentirse en casa.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase:',
            words: ['De', 'går', 'på', 'tur', 'til', 'Sognsvann', 'sammen.'],
            es: 'Van juntos de excursión a Sognsvann.',
            explain: '«Å gå på tur» = ir de excursión; «sammen» = juntos.'
          },
          {
            type: 'listen',
            audio: 'Det er fortsatt vanskelig å snakke norsk.',
            es: 'Todavía es difícil hablar noruego.',
            explain: '«Fortsett» = todavía; «vanskelig å ...» = difícil de...'
          },
          {
            type: 'fix',
            prompt: 'Toca la palabra equivocada:',
            sentence: 'Hun blir kjent på Mari.',
            wrong: 3,
            correct: 'Hun blir kjent med Mari.',
            es: 'Conoce a Mari.',
            explain: 'La expresión es «å bli kjent med» alguien, no «på».'
          }
        ]
      },
      {
        id: '4',
        num: 4,
        level: 'B1',
        emoji: '💰',
        title: 'Første lønning',
        subtitle: 'El primer sueldo y una vida que empieza',
        intro: 'El primer sueldo de Lucía llega con alivio, orgullo y una llamada a casa. También trae una pregunta nueva: ¿en qué quiere convertirse su vida en Oslo?',
        place: 'Grünerløkka',
        places: ['Bjørvika', 'Thorvald Meyers gate', 'Rema 1000', 'Markveien', 'Akerselva'],
        paragraphs: [
          { no: 'På jobben i Bjørvika er det en vanlig tirsdag. Lucía står bak disken og lager kaffe. Sjefen kommer bort til henne og sier: «Lønnen er på kontoen.» Lucía takker, men hun prøver å være rolig. Hun vil ikke vise hvor glad hun er.', es: 'En el trabajo en Bjørvika es un martes normal. Lucía está detrás del mostrador preparando café. El jefe se acerca y le dice: «El sueldo ya está en la cuenta.» Lucía da las gracias, pero intenta estar tranquila. No quiere mostrar lo contenta que está.' },
          { no: 'Etter vakten åpner hun bankappen på telefonen. Der står det et tall som hun har ventet på i mange uker. Det er hennes første lønn i Norge. Hun ser på det en stund. Så smiler hun til ingen og sier stille: «Jeg klarte det.»', es: 'Después del turno abre la app del banco en el móvil. Allí aparece una cifra que ha esperado durante muchas semanas. Es su primer sueldo en Noruega. La mira un rato. Luego sonríe sin nadie y dice en voz baja: «Lo conseguí.»' },
          { no: 'Hjemme i Thorvald Meyers gate betaler hun husleien til Bjørn. Hun overfører også penger til en konto hun har satt av til regninger. Det er ikke mye igjen, men det er nok. For første gang føler hun at hun ikke bare låner plass i byen. Hun betaler for den.', es: 'En casa, en Thorvald Meyers gate, paga el alquiler a Bjørn. También transfiere dinero a una cuenta que ha reservado para facturas. No queda mucho, pero es suficiente. Por primera vez siente que no solo está ocupando un sitio en la ciudad. Está pagando por él.' },
          { no: 'Hun går til Rema 1000 og kjøper mat til uken. Denne gangen tar hun også med en liten plante og litt dyrere kaffe. Det er ikke en stor ting, men det kjennes stort. På vei hjem ringer hun moren sin. «Jeg har fått lønn,» sier hun. Moren blir stille, og så hører Lucía at hun gråter.', es: 'Va a Rema 1000 y compra comida para la semana. Esta vez también coge una planta pequeña y un café un poco más caro. No es una cosa importante, pero se siente importante. De camino a casa llama a su madre. «He cobrado», dice. Su madre se queda en silencio y luego Lucía la oye llorar.' },
          { no: 'Om kvelden møter hun Mari på en kafé i Markveien. Lucía vil feire, men ikke bruke for mye penger. De bestiller kaffe og et stykke kake. Mari løfter koppen og sier: «Gratulerer med første lønn!» Lucía ler. Det er første gang hun føler seg som en ordentlig arbeidstaker i Oslo.', es: 'Por la noche queda con Mari en una cafetería de Markveien. Lucía quiere celebrarlo, pero sin gastar demasiado. Piden café y un trozo de tarta. Mari levanta la taza y dice: «¡Enhorabuena por tu primer sueldo!» Lucía se ríe. Es la primera vez que se siente una trabajadora de verdad en Oslo.' },
          { no: 'De snakker om hva Lucía skal gjøre med pengene. Hun vil spare litt hver måned. Kanskje til en tur hjem, kanskje til et norskkurs. Mari sier at hun må unne seg noe også. Lucía tenker på den lille planten hjemme og blir glad. Hun har begynt å planlegge en framtid, ikke bare en uke.', es: 'Hablan de qué hará Lucía con el dinero. Quiere ahorrar un poco cada mes. Quizá para un viaje a casa, quizá para un curso de noruego. Mari dice que también tiene que darse un capricho. Lucía piensa en la planta pequeña de casa y se alegra. Ha empezado a planear un futuro, no solo una semana.' },
          { no: 'Sent på kvelden sitter hun ved vinduet og hører på Akerselva. Hun er fortsatt trøtt, og norsken er fortsatt vanskelig. Men nå vet hun at hun kan klare mer enn hun trodde. Hun skriver i dagboken: «Første lønn. Jeg betalte husleie, kjøpte mat og feiret med en venn. Nå begynner livet mitt her.»', es: 'Ya tarde, se sienta junto a la ventana y escucha el Akerselva. Sigue cansada y el noruego sigue siendo difícil. Pero ahora sabe que puede conseguir más de lo que creía. Escribe en su diario: «Primer sueldo. Pagué el alquiler, compré comida y celebré con una amiga. Ahora empieza mi vida aquí.»' }
        ],
        vocab: [
          { no: 'lønn', es: 'salario, sueldo', forms: 'en lønn, lønninger' },
          { no: 'konto', es: 'cuenta', forms: 'en konto, kontoer' },
          { no: 'overføre', es: 'transferir', forms: 'overfører · overførte · har overført' },
          { no: 'husleie', es: 'alquiler', forms: 'en husleie, husleier' },
          { no: 'regning', es: 'factura', forms: 'en regning, regninger' },
          { no: 'unne seg', es: 'darse un capricho', chunk: true, forms: 'unner seg · unte seg · har unt seg' },
          { no: 'feire', es: 'celebrar', forms: 'feirer · feiret · har feiret' },
          { no: 'kake', es: 'tarta', forms: 'en kake, kaker' },
          { no: 'arbeidstaker', es: 'trabajador, empleado', forms: 'en arbeidstaker, arbeidstakere' },
          { no: 'spare', es: 'ahorrar', forms: 'sparer · sparte · har spart' },
          { no: 'framtid', es: 'futuro', forms: 'en framtid, framtider' },
          { no: 'planlegge', es: 'planear', forms: 'planlegger · planla · har planlagt' },
          { no: 'dagbok', es: 'diario', forms: 'en dagbok, dagbøker' },
          { no: 'stille', es: 'en voz baja' },
          { no: 'klare', es: 'conseguir, lograr', forms: 'klarer · klarte · har klart' }
        ],
        grammar: {
          title: 'Perfektum: har + participio',
          es: 'El perfecto se forma con «har» + participio: hun har fått, hun har betalt, hun har kjøpt. Se usa para acciones pasadas que importan ahora. Algunos participios son irregulares: få → fått, betale → betalt, kjøpe → kjøpt.',
          examples: [
            { no: 'Hun har fått sin første lønn.', es: 'Ha recibido su primer sueldo.' },
            { no: 'Hun har betalt husleien.', es: 'Ha pagado el alquiler.' },
            { no: 'Hun har kjøpt mat til uken.', es: 'Ha comprado comida para la semana.' }
          ]
        },
        exercises: [
          {
            type: 'mcq',
            prompt: '¿Qué recibe Lucía en este capítulo?',
            options: ['Su primer sueldo', 'Un billete de avión', 'Una bicicleta nueva', 'Una oferta de trabajo'],
            answer: 0,
            explain: 'El jefe le dice que el sueldo ya está en la cuenta.'
          },
          {
            type: 'gap',
            prompt: 'Completa con el participio correcto:',
            sentence: 'Lucía har ___ husleien til Bjørn.',
            answers: ['betalt'],
            bank: ['betalt', 'kjøpt', 'spart'],
            es: 'Lucía ha pagado el alquiler a Bjørn.',
            explain: '«Å betale» → «har betalt».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase:',
            words: ['Hun', 'har', 'fått', 'sin', 'første', 'lønn', 'i', 'Norge.'],
            es: 'Ha recibido su primer sueldo en Noruega.',
            explain: '«Å få» → «har fått». El perfecto va con «har» + participio.'
          },
          {
            type: 'listen',
            audio: 'Jeg har fått lønn, og nå kan jeg betale husleien.',
            es: 'He cobrado y ahora puedo pagar el alquiler.',
            explain: '«Å få lønn» = cobrar el sueldo; «å betale husleien» = pagar el alquiler.'
          },
          {
            type: 'cloze',
            prompt: 'Completa el resumen del capítulo:',
            text: 'Hun har ___ lønn. Hun har ___ husleien, og hun har ___ litt penger.',
            answers: ['fått', 'betalt', 'spart'],
            bank: ['fått', 'betalt', 'spart', 'kjøpt', 'glemt', 'reist'],
            es: 'Ha cobrado el sueldo. Ha pagado el alquiler y ha ahorrado un poco de dinero.',
            explain: 'Los tres participios clave: fått, betalt y spart.'
          }
        ]
      },
      {
        id: '5',
        num: 5,
        level: 'B1',
        emoji: '❄️',
        title: 'Vinteren',
        subtitle: 'El primer invierno en Oslo',
        intro: 'La oscuridad, el primer hielo y la nieve ponen a prueba a Lucía. Pero el invierno también trae nuevas costumbres, amistades y pequeñas victorias.',
        place: 'Grünerløkka',
        places: ['Grünerløkka', 'Oslo City', 'Sognsvann', 'Holmenkollen', 'Akerselva'],
        paragraphs: [
          { no: 'Det er november, og Lucía har vært i Oslo i noen måneder. Når hun går fra jobben klokka fire, er det allerede mørkt. Gatene er fulle av folk som har det travelt. Hun føler seg trøtt, og hun savner lyset fra Spania.', es: 'Es noviembre y Lucía lleva unos meses en Oslo. Cuando sale del trabajo a las cuatro, ya está oscuro. Las calles están llenas de gente con prisa. Se siente cansada y echa de menos la luz de España.' },
          { no: 'En morgen våkner hun og ser ut av vinduet. Alt er hvitt. Det har snødd om natten. Lucía blir glad, men da hun går ut, kjenner hun hvor kaldt det er. Hun har ikke gode sko, og det er glatt på veien.', es: 'Una mañana se despierta y mira por la ventana. Todo está blanco. Ha nevado durante la noche. Lucía se alegra, pero cuando sale, nota cuánto frío hace. No tiene buenos zapatos y la calle está resbaladiza.' },
          { no: 'På jobben sier Mari at hun må kjøpe ordentlige vinterklær. Etter jobben går de til Oslo City. Lucía kjøper en varm jakke, en lue, votter, et skjerf og et par støvler. Det koster mer enn hun hadde trodd, men hun fryser ikke lenger.', es: 'En el trabajo, Mari le dice que tiene que comprar ropa de invierno de verdad. Después del trabajo van a Oslo City. Lucía compra una chaqueta cálida, un gorro, guantes, una bufanda y un par de botas. Cuesta más de lo que pensaba, pero ya no pasa frío.' },
          { no: 'Om kvelden sitter de på en kafé i Grünerløkka. Mari forklarer at vinteren i Oslo er mørkere og kaldere enn i Spania, men at det også kan være koselig. De drikker varm kakao og ser på snøen som faller utenfor vinduet.', es: 'Por la noche se sientan en una cafetería de Grünerløkka. Mari le explica que el invierno en Oslo es más oscuro y más frío que en España, pero que también puede ser acogedor. Beben chocolate caliente y miran la nieve que cae fuera de la ventana.' },
          { no: 'En søndag drar de til Sognsvann. Det er mange folk ute, noen går på ski og noen bare går tur. Lucía låner ski for første gang. Hun faller i snøen og ler. Mari hjelper henne opp, og de fortsetter sammen. Hun er sliten, men hun er også stolt.', es: 'Un domingo van a Sognsvann. Hay mucha gente fuera: algunos esquían y otros simplemente pasean. Lucía coge esquís prestados por primera vez. Se cae en la nieve y se ríe. Mari la ayuda a levantarse y siguen juntas. Está cansada, pero también orgullosa.' },
          { no: 'Men ikke alle dager er like lette. Noen dager er det bare grått og vått, og Lucía føler seg alene. Hun ringer moren sin og sier at hun er sliten. Moren sier at det er normalt, og at hun må ta vare på seg selv.', es: 'Pero no todos los días son igual de fáciles. Algunos días solo hay gris y humedad, y Lucía se siente sola. Llama a su madre y le dice que está agotada. Su madre le dice que es normal y que tiene que cuidarse.' },
          { no: 'Lucía begynner å tenne lys, gå på trening og møte venner selv når det er mørkt. Hun lærer at vinteren ikke bare er kald og vanskelig. Den er også stillhet, snø og varme stunder med mennesker hun liker. Våren kommer, men først skal hun klare vinteren.', es: 'Lucía empieza a encender velas, ir al gimnasio y quedar con amigos incluso cuando está oscuro. Aprende que el invierno no solo es frío y difícil. También es silencio, nieve y momentos cálidos con personas que quiere. La primavera llegará, pero primero tiene que superar el invierno.' }
        ],
        vocab: [
          { no: 'vinter', es: 'invierno', forms: 'en vinter, vintre' },
          { no: 'snø', es: 'nieve', forms: 'en snø' },
          { no: 'kald', es: 'frío' },
          { no: 'mørk', es: 'oscuro' },
          { no: 'varm', es: 'cálido' },
          { no: 'ull', es: 'lana', forms: 'en ull' },
          { no: 'lue', es: 'gorro', forms: 'en lue, luer' },
          { no: 'votter', es: 'guantes', forms: 'votter' },
          { no: 'skjerf', es: 'bufanda', forms: 'et skjerf, skjerf' },
          { no: 'jakke', es: 'chaqueta', forms: 'en jakke, jakker' },
          { no: 'støvler', es: 'botas', forms: 'støvler' },
          { no: 'glatt', es: 'resbaladizo' },
          { no: 'falle', es: 'caer', forms: 'faller · falt · har falt' },
          { no: 'ski', es: 'esquí', forms: 'en ski, ski' },
          { no: 'koselig', es: 'acogedor' }
        ],
        grammar: {
          title: 'Sammenligninger: kaldere, kaldest',
          es: 'Para comparar se usa -ere + enn: kaldere enn, mørkere enn. El superlativo suele ser -est: kaldest, mørkest. Con adjetivos largos se usa mer/mest. «Like ... som» significa tan ... como.',
          examples: [
            { no: 'Oslo er kaldere enn Spania om vinteren.', es: 'Oslo es más frío que España en invierno.' },
            { no: 'Desember er den mørkeste måneden.', es: 'Diciembre es el mes más oscuro.' },
            { no: 'Vinteren er mer krevende enn sommeren.', es: 'El invierno es más exigente que el verano.' },
            { no: 'Det er ikke like varmt som i Spania.', es: 'No hace tanto calor como en España.' }
          ]
        },
        exercises: [
          {
            type: 'mcq',
            prompt: '¿Qué compra Lucía para el invierno?',
            options: ['Ropa de invierno', 'Un billete de avión', 'Unos esquís', 'Una lámpara'],
            answer: 0,
            explain: 'Compra una chaqueta, un gorro, guantes, una bufanda y botas.'
          },
          {
            type: 'gap',
            prompt: 'Completa la comparación:',
            sentence: 'Oslo er ___ enn Spania om vinteren.',
            answers: ['kaldere'],
            bank: ['kaldere', 'kaldest', 'kald'],
            es: 'Oslo es más frío que España en invierno.',
            explain: 'El comparativo de «kald» es «kaldere», seguido de «enn».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase:',
            words: ['Vinteren', 'er', 'mørkere', 'enn', 'høsten.'],
            es: 'El invierno es más oscuro que el otoño.',
            explain: '«Mørkere enn» = más oscuro que. El comparativo va antes de «enn».'
          },
          {
            type: 'listen',
            audio: 'Det er glatt på veien om morgenen.',
            es: 'La calle está resbaladiza por la mañana.',
            explain: '«Glatt» = resbaladizo. «På veien» = en la calle/carretera.'
          },
          {
            type: 'cloze',
            prompt: 'Completa el resumen del capítulo:',
            text: 'Om vinteren er det ___ og ___. Lucía kjøper en varm ___.',
            answers: ['kaldt', 'mørkt', 'jakke'],
            bank: ['kaldt', 'mørkt', 'jakke', 'snø', 'ski', 'votter'],
            es: 'En invierno hace frío y está oscuro. Lucía compra una chaqueta cálida.',
            explain: '«Kaldt» y «mørkt» describen el tiempo; «jakke» es la prenda que compra.'
          }
        ]
      },
      { id: '6', num: 6, level: 'B1', emoji: '👨‍👩‍👧', title: 'Familien kommer', soon: true },
      { id: '7', num: 7, level: 'B1', emoji: '📦', title: 'Flyttedag', soon: true },
      { id: '8', num: 8, level: 'B1', emoji: '⚡', title: 'Konflikt på jobben', soon: true },
      { id: '9', num: 9, level: 'B2', emoji: '☀️', title: 'Sommer i Oslo', soon: true },
      { id: '10', num: 10, level: 'B2', emoji: '🤔', title: 'Et valg', soon: true },
      { id: '11', num: 11, level: 'B2', emoji: '✈️', title: 'Hjemreise', soon: true },
      { id: '12', num: 12, level: 'B2', emoji: '🏡', title: 'Hjemme', soon: true }
    ]
  },
  /* -------------------------------------------------------------------- */
  games: {
    dagensOrd: {
      // Palabras válidas para las conjeturas (5 letras). Las respuestas se
      // derivan de las palabras de 5 letras del núcleo.
      valid: [
      'aldri', 'alene', 'altså', 'andre', 'angst', 'ankel', 'annen', 'annet', 'april', 'bedre', 'begge', 'beste',
      'besøk', 'betyr', 'bevis', 'bidra', 'bjørn', 'blant', 'blikk', 'blitt', 'boden', 'bonus', 'brann', 'bruke',
      'bunke', 'bydel', 'bygge', 'bytte', 'dagen', 'dager', 'damen', 'danse', 'deler', 'denne', 'derav', 'dette',
      'dusje', 'eldre', 'eller', 'endre', 'enkel', 'enkle', 'etikk', 'etter', 'faste', 'feber', 'feire', 'ferie',
      'fersk', 'finne', 'fiske', 'fjell', 'fjord', 'flere', 'forbi', 'forby', 'fordi', 'frist', 'frukt', 'fullt',
      'føler', 'føles', 'følge', 'først', 'gaten', 'gjest', 'gjort', 'gjøre', 'glass', 'glemt', 'godta', 'greit',
      'grunn', 'gråte', 'guide', 'hadde', 'helst', 'henne', 'heter', 'hevde', 'hjelp', 'hobby', 'hodet', 'hofte',
      'holde', 'hoste', 'hoven', 'hvert', 'hvile', 'hvitt', 'hylle', 'hytta', 'håper', 'hører', 'høyre', 'igjen',
      'ingen', 'ironi', 'jenta', 'jente', 'jobbe', 'kaffe', 'kaldt', 'kassa', 'kasse', 'kaste', 'kjent', 'kjøpe',
      'kjøpt', 'klage', 'klare', 'klart', 'knapt', 'komme', 'konto', 'koste', 'kryss', 'kunde', 'kunne', 'kvalm',
      'kveld', 'lager', 'laget', 'langt', 'later', 'leder', 'ledig', 'legen', 'legge', 'leien', 'lenge', 'leser',
      'leses', 'leter', 'lever', 'ligge', 'liker', 'lille', 'liten', 'liter', 'livet', 'lover', 'lukke', 'lunge',
      'lunsj', 'lykke', 'lytte', 'låner', 'lærer', 'løfte', 'mange', 'maten', 'mener', 'moral', 'moren', 'motiv',
      'mulig', 'måler', 'målet', 'måned', 'måtte', 'mørkt', 'møter', 'møtes', 'natur', 'neste', 'netto', 'nevnt',
      'norsk', 'nyhet', 'osten', 'pakke', 'papir', 'pappa', 'passe', 'pause', 'peker', 'plass', 'plast', 'plikt',
      'poeng', 'posen', 'prate', 'prøve', 'puste', 'påske', 'regel', 'regne', 'reise', 'reist', 'ringe', 'rolig',
      'rolle', 'roper', 'runde', 'rundt', 'rydde', 'røyke', 'saken', 'sakte', 'salve', 'samle', 'samme', 'satte',
      'savne', 'scene', 'sende', 'setet', 'sette', 'siden', 'siste', 'sitte', 'skade', 'skatt', 'skjer', 'skole',
      'slutt', 'smake', 'snakk', 'snart', 'snill', 'snilt', 'sover', 'spare', 'spart', 'spise', 'sterk', 'stige',
      'stolt', 'stopp', 'stort', 'strøm', 'stund', 'svake', 'svare', 'synes', 'synge', 'søker', 'tanke', 'tavle',
      'tegne', 'tempo', 'tenke', 'tiden', 'timen', 'timer', 'tjene', 'tolke', 'tomme', 'torsk', 'trene', 'trikk',
      'trist', 'tross', 'trygg', 'trygt', 'trøst', 'trøtt', 'tunge', 'tungt', 'turen', 'tusen', 'tvert', 'tvile',
      'tyder', 'tårer', 'uenig', 'uklar', 'ulike', 'usunn', 'varer', 'vaske', 'velge', 'vente', 'verre', 'verst',
      'ville', 'vindu', 'viser', 'visst', 'visum', 'vokse', 'vokst', 'vondt', 'været', 'åpner', 'åpnet', 'årene',
      'årsak', 'ærlig', 'øvrig',
      ]
    }
  },

  /* -------------------------------------------------------------------- */
  grammar: {
    topics: [
      {
        id: 'pronomen',
        num: 1,
        level: 'A0',
        emoji: '👤',
        title: 'Pronombres personales',
        subtitle: 'jeg, du, han, hun, vi, dere, de',
        intro: 'Los pronombres de sujeto son la base de cualquier frase. En noruego no hay una forma formal separada para «usted»: «du» sirve para las dos.',
        notes: [
          'Sujeto: jeg, du, han, hun, det, vi, dere, de.',
          '«Det» se usa para cosas y como sujeto impersonal: Det regner.',
          'El pronombre va antes del verbo en una frase normal: Jeg bor i Oslo.'
        ],
        examples: [
          { no: 'Jeg er fra Spania.', es: 'Yo soy de España.' },
          { no: 'Hun bor i Oslo.', es: 'Ella vive en Oslo.' },
          { no: 'Vi lærer norsk.', es: 'Nosotros aprendemos noruego.' }
        ],
        mistake: { wrong: 'Jeg heter er Lucía.', right: 'Jeg heter Lucía.', why: 'El verbo «å hete» no necesita «er»: significa «llamarse».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa la frase.',
            sentence: '___ bor i Oslo.',
            answers: ['Hun'],
            bank: ['Hun', 'Han', 'Vi'],
            es: 'Ella vive en Oslo.',
            explain: '«Hun» = ella. «Han» = él; «vi» = nosotros.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'er', 'fra', 'Spania.'],
            es: 'Yo soy de España.',
            explain: 'El orden normal es sujeto + verbo + complemento.'
          }
        ]
      },
      {
        id: 'vaere-ha',
        num: 2,
        level: 'A0',
        emoji: '🧩',
        title: 'Presente de være y ha',
        subtitle: 'er, har y sus usos',
        intro: '«Å være» (ser/estar) y «å ha» (tener) son los dos verbos más frecuentes. Se conjugan igual con todas las personas.',
        notes: [
          'Være: jeg er, du er, han/hun er, vi er, dere er, de er.',
          'Ha: jeg har, du har, han/hun har, vi har, dere har, de har.',
          'La edad se dice con «er»: Jeg er 28 år.',
        ],
        examples: [
          { no: 'Jeg er student.', es: 'Soy estudiante.' },
          { no: 'Hun har en bil.', es: 'Ella tiene un coche.' },
          { no: 'Vi er i Norge.', es: 'Estamos en Noruega.' }
        ],
        mistake: { wrong: 'Jeg har 28 år.', right: 'Jeg er 28 år.', why: 'En noruego la edad se expresa con «er», no con «har».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa la frase.',
            sentence: 'Jeg ___ fra Norge.',
            answers: ['er'],
            bank: ['er', 'har', 'heter'],
            es: 'Soy de Noruega.',
            explain: '«Å være» = ser/estar. La forma es «er».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Hun', 'har', 'en', 'bil.'],
            es: 'Ella tiene un coche.',
            explain: '«Har» es la forma de «å ha» para todas las personas.'
          }
        ]
      },
      {
        id: 'ordstilling',
        num: 3,
        level: 'A0',
        emoji: '🔀',
        title: 'Orden básico y regla V2',
        subtitle: 'El verbo en segunda posición',
        intro: 'El noruego no usa el orden español en todo. La regla más importante es que el verbo conjugado ocupa la segunda posición de la frase principal.',
        notes: [
          'Orden normal: sujeto + verbo + objeto: Jeg leser en bok.',
          'Si empiezas por otra palabra, el verbo va después y el sujeto detrás: I dag leser jeg.',
          'Después de un modal, el verbo principal va en infinitivo sin «å».'
        ],
        examples: [
          { no: 'I dag leser jeg en bok.', es: 'Hoy leo un libro.' },
          { no: 'Nå bor hun i Oslo.', es: 'Ahora ella vive en Oslo.' },
          { no: 'Kanskje kommer han senere.', es: 'Quizá venga más tarde.' }
        ],
        mistake: { wrong: 'I dag jeg leser en bok.', right: 'I dag leser jeg en bok.', why: 'Cuando la frase empieza por «i dag», el verbo pasa a la segunda posición y el sujeto va después.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa la frase.',
            sentence: 'I dag ___ jeg hjemme.',
            answers: ['er'],
            bank: ['er', 'har', 'bor'],
            es: 'Hoy estoy en casa.',
            explain: '«I dag» ocupa la primera posición; el verbo «er» va en la segunda.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Nå', 'bor', 'hun', 'i', 'Oslo.'],
            es: 'Ahora ella vive en Oslo.',
            explain: '«Nå» + verbo + sujeto. Es la regla V2 en acción.'
          }
        ]
      },
      {
        id: 'sporsmal',
        num: 4,
        level: 'A0',
        emoji: '❓',
        title: 'Preguntas',
        subtitle: 'Sí/no y palabras interrogativas',
        intro: 'Para preguntar sí o no, se invierte el orden: verbo + sujeto. Para preguntar por información, se añade una palabra interrogativa delante.',
        notes: [
          'Sí/no: Bor du i Oslo? = ¿Vives en Oslo?',
          'Palabras: hva, hvor, hvem, når, hvorfor, hvordan.',
          'El verbo va antes del sujeto: Hvor bor du?',
        ],
        examples: [
          { no: 'Bor du i Oslo?', es: '¿Vives en Oslo?' },
          { no: 'Hva heter du?', es: '¿Cómo te llamas?' },
          { no: 'Hvorfor lærer du norsk?', es: '¿Por qué aprendes noruego?' }
        ],
        mistake: { wrong: 'Hvor du bor?', right: 'Hvor bor du?', why: 'En las preguntas el verbo va antes del sujeto.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa la pregunta.',
            sentence: '___ heter du?',
            answers: ['Hva'],
            bank: ['Hva', 'Hvor', 'Hvem'],
            es: '¿Cómo te llamas?',
            explain: '«Hva heter du?» es la fórmula fija para preguntar el nombre.'
          },
          {
            type: 'order',
            prompt: 'Ordena la pregunta.',
            words: ['Hvor', 'bor', 'du?'],
            es: '¿Dónde vives?',
            explain: 'Palabra interrogativa + verbo + sujeto.'
          }
        ]
      },
      {
        id: 'negasjon',
        num: 5,
        level: 'A0',
        emoji: '🚫',
        title: 'La negación',
        subtitle: 'ikke, ingen, aldri',
        intro: '«Ikke» es la negación básica. Su posición cambia un poco en las subordinadas, así que conviene aprenderla desde el principio.',
        notes: [
          'En una frase normal, «ikke» va después del verbo: Jeg bor ikke i Oslo.',
          'En una subordinada, «ikke» va antes del verbo: fordi jeg ikke bor der.',
          'Otras negaciones: ingen (nadie/ningún), ingenting (nada), aldri (nunca).'
        ],
        examples: [
          { no: 'Jeg bor ikke i Oslo.', es: 'No vivo en Oslo.' },
          { no: 'Hun snakker ikke norsk.', es: 'Ella no habla noruego.' },
          { no: 'Jeg har aldri vært der.', es: 'Nunca he estado allí.' }
        ],
        mistake: { wrong: 'Jeg ikke bor her.', right: 'Jeg bor ikke her.', why: 'En una frase principal «ikke» va después del verbo.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa la frase.',
            sentence: 'Jeg ___ ikke norsk.',
            answers: ['snakker'],
            bank: ['snakker', 'snakke', 'snakket'],
            es: 'No hablo noruego.',
            explain: 'El verbo conjugado va antes de «ikke».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'bor', 'ikke', 'her.'],
            es: 'No vivo aquí.',
            explain: 'Sujeto + verbo + ikke + complemento.'
          }
        ]
      },
      {
        id: 'artikler',
        num: 6,
        level: 'A0',
        emoji: '🏷️',
        title: 'Artículos y género',
        subtitle: 'en, et, ei y el sufijo definido',
        intro: 'Cada sustantivo noruego tiene género. El artículo indefinido va delante, pero el definido se añade como sufijo al final de la palabra.',
        notes: [
          'Indefinido: en bil, et hus, ei bok.',
          'Definido: bilen, huset, boka/boken.',
          '«Ei» es opcional en bokmål; muchas personas usan «en» también para el femenino.'
        ],
        examples: [
          { no: 'Jeg har en bil.', es: 'Tengo un coche.' },
          { no: 'Huset er stort.', es: 'La casa es grande.' },
          { no: 'Boken ligger på bordet.', es: 'El libro está sobre la mesa.' }
        ],
        mistake: { wrong: 'en hus', right: 'et hus', why: '«Hus» es neutro: et hus, huset.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el artículo correcto.',
            sentence: 'Jeg har ___ bil.',
            answers: ['en'],
            bank: ['en', 'et', 'ei'],
            es: 'Tengo un coche.',
            explain: '«Bil» es de género común: en bil.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Huset', 'er', 'stort.'],
            es: 'La casa es grande.',
            explain: '«Huset» es la forma definida de «et hus».'
          }
        ]
      },
      {
        id: 'flertall',
        num: 7,
        level: 'A0',
        emoji: '🔢',
        title: 'El plural',
        subtitle: 'biler, hus, barn',
        intro: 'El plural no siempre se forma igual. La terminación más común es -er, pero los neutros suelen quedarse igual y algunos sustantivos son irregulares.',
        notes: [
          'Común: en bil → biler; en gutt → gutter.',
          'Neutro: et hus → hus; et barn → barn.',
          'Definido plural: bilene, husene; irregulares: menn, barn.'
        ],
        examples: [
          { no: 'Jeg har to biler.', es: 'Tengo dos coches.' },
          { no: 'Det er mange hus her.', es: 'Hay muchas casas aquí.' },
          { no: 'Barna leker ute.', es: 'Los niños juegan fuera.' }
        ],
        mistake: { wrong: 'to bils', right: 'to biler', why: 'El plural de «bil» es «biler», no se añade una «s».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa el plural.',
            sentence: 'Jeg har to ___.',
            answers: ['biler'],
            bank: ['biler', 'bil', 'bilen'],
            es: 'Tengo dos coches.',
            explain: '«En bil» hace el plural en «biler».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Det', 'er', 'mange', 'hus', 'her.'],
            es: 'Hay muchas casas aquí.',
            explain: '«Hus» no cambia en plural: et hus, flere hus.'
          }
        ]
      },
      {
        id: 'presens',
        num: 8,
        level: 'A1',
        emoji: '⏱️',
        title: 'El presente de los verbos',
        subtitle: 'leser, bor, kjøper',
        intro: 'El presente se usa para lo que pasa ahora, lo que pasa cada día y también para el futuro cercano. La misma forma sirve para todas las personas.',
        notes: [
          'Muchos verbos añaden -er: å lese → leser; å kjøpe → kjøper.',
          'No cambia según la persona: jeg leser, du leser, han leser.',
          'Irregulares frecuentes: være → er, ha → har, gjøre → gjør, se → ser.'
        ],
        examples: [
          { no: 'Jeg leser en bok.', es: 'Leo un libro.' },
          { no: 'Hun bor i Oslo.', es: 'Ella vive en Oslo.' },
          { no: 'Vi kjøper mat.', es: 'Compramos comida.' }
        ],
        mistake: { wrong: 'Jeg er leser.', right: 'Jeg leser.', why: 'No se usa «er» delante del verbo principal en presente.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el presente.',
            sentence: 'Hun ___ i Oslo.',
            answers: ['bor'],
            bank: ['bor', 'bode', 'bo'],
            es: 'Ella vive en Oslo.',
            explain: 'El presente de «å bo» es «bor».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Vi', 'kjøper', 'mat', 'hver', 'dag.'],
            es: 'Compramos comida cada día.',
            explain: 'El presente también sirve para rutinas.'
          }
        ]
      },
      {
        id: 'modaler',
        num: 9,
        level: 'A1',
        emoji: '🔑',
        title: 'Verbos modales',
        subtitle: 'kan, må, vil, skal, bør',
        intro: 'Los modales expresan posibilidad, obligación, voluntad o consejo. Van seguidos del infinitivo sin «å» y no cambian según la persona.',
        notes: [
          'Kan = poder; må = tener que; vil = querer; skal = ir a; bør = deberías.',
          'Después del modal, el verbo principal va sin «å»: Jeg kan svømme.',
          'No cambian por persona: jeg kan, du kan, han kan.'
        ],
        examples: [
          { no: 'Jeg kan svømme.', es: 'Sé nadar.' },
          { no: 'Du må vente.', es: 'Tienes que esperar.' },
          { no: 'Vi skal reise i morgen.', es: 'Vamos a viajar mañana.' }
        ],
        mistake: { wrong: 'Jeg kan å svømme.', right: 'Jeg kan svømme.', why: 'Después de un modal no se pone «å» delante del infinitivo.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el modal correcto.',
            sentence: 'Du ___ vente her.',
            answers: ['må'],
            bank: ['må', 'måtte', 'mått'],
            es: 'Tienes que esperar aquí.',
            explain: '«Må» = tener que. El pasado es «måtte».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'kan', 'svømme.'],
            es: 'Sé nadar.',
            explain: 'Modal + infinitivo sin «å».'
          }
        ]
      },
      {
        id: 'eiendomsord',
        num: 10,
        level: 'A1',
        emoji: '🔗',
        title: 'Posesivos',
        subtitle: 'min, din, hans, hennes',
        intro: 'Los posesivos concuerdan con el sustantivo poseído, no con el poseedor. Por eso hay formas para común, neutro y plural.',
        notes: [
          'Común: min bil, din bil, hans bil, hennes bil, vår bil, deres bil.',
          'Neutro: mitt hus, ditt hus, hans hus...; plural: mine biler.',
          'También se puede poner el poseedor detrás: bilen min.'
        ],
        examples: [
          { no: 'Det er min bil.', es: 'Es mi coche.' },
          { no: 'Huset mitt er gammelt.', es: 'Mi casa es vieja.' },
          { no: 'Bøkene mine er nye.', es: 'Mis libros son nuevos.' }
        ],
        mistake: { wrong: 'min hus', right: 'mitt hus', why: '«Hus» es neutro, así que el posesivo es «mitt».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el posesivo correcto.',
            sentence: 'Det er ___ bil.',
            answers: ['min'],
            bank: ['min', 'mitt', 'mine'],
            es: 'Es mi coche.',
            explain: '«Bil» es común: min bil.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Huset', 'mitt', 'er', 'gammelt.'],
            es: 'Mi casa es vieja.',
            explain: 'El posesivo puede ir después del sustantivo definido: huset mitt.'
          }
        ]
      },
      {
        id: 'preposisjoner',
        num: 11,
        level: 'A1',
        emoji: '📍',
        title: 'Preposiciones básicas',
        subtitle: 'i, på, til, fra',
        intro: 'Las preposiciones no siempre se traducen de forma directa. Muchas veces hay que aprender la combinación completa: i Norge, på jobb, til Oslo.',
        notes: [
          'I = dentro de; på = en/sobre; til = a/hacia; fra = de/desde.',
          'Hay combinaciones fijas: på jobb, i skolen, til byen.',
          'No traduzcas siempre del español: «en Oslo» es «i Oslo».'
        ],
        examples: [
          { no: 'Jeg bor i Norge.', es: 'Vivo en Noruega.' },
          { no: 'Hun går på jobb.', es: 'Ella va al trabajo.' },
          { no: 'Vi reiser til Oslo.', es: 'Viajamos a Oslo.' }
        ],
        mistake: { wrong: 'Jeg bor på Norge.', right: 'Jeg bor i Norge.', why: 'Con países se usa normalmente «i»: i Norge, i Spania.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con la preposición correcta.',
            sentence: 'Jeg går ___ jobb.',
            answers: ['til'],
            bank: ['til', 'i', 'på'],
            es: 'Voy al trabajo.',
            explain: '«Til jobb» = al trabajo; «på jobb» = en el trabajo.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'bor', 'i', 'Norge.'],
            es: 'Vivo en Noruega.',
            explain: 'Con países se usa «i».'
          }
        ]
      },
      {
        id: 'preteritum',
        num: 12,
        level: 'A1',
        emoji: '📜',
        title: 'El pasado simple',
        subtitle: 'jobbet, kjøpte, bodde',
        intro: 'El pasado simple se usa para acciones terminadas. Los verbos regulares se dividen en grupos según la terminación; los irregulares hay que memorizarlos.',
        notes: [
          'Regulares: -et (jobbet), -te (kjøpte), -de (bodde).',
          'Irregulares frecuentes: var, hadde, gikk, kom, så.',
          'No cambia según la persona: jeg jobbet, du jobbet, han jobbet.'
        ],
        examples: [
          { no: 'I går jobbet jeg hjemme.', es: 'Ayer trabajé en casa.' },
          { no: 'Hun kjøpte en bok.', es: 'Ella compró un libro.' },
          { no: 'Vi var i Oslo.', es: 'Estuvimos en Oslo.' }
        ],
        mistake: { wrong: 'Jeg gådde hjem.', right: 'Jeg gikk hjem.', why: '«Å gå» es irregular: gikk, no «gådde».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el pasado.',
            sentence: 'I går ___ jeg hjemme.',
            answers: ['var'],
            bank: ['var', 'er', 'har'],
            es: 'Ayer estuve en casa.',
            explain: 'El pasado de «å være» es «var».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Hun', 'kjøpte', 'en', 'bok', 'i', 'går.'],
            es: 'Ella compró un libro ayer.',
            explain: '«Kjøpte» es el pasado de «å kjøpe».'
          }
        ]
      },
      {
        id: 'perfektum',
        num: 13,
        level: 'A1',
        emoji: '✅',
        title: 'El perfecto',
        subtitle: 'har jobbet, har vært',
        intro: 'El perfecto se forma con «har» + participio. Se usa para experiencias y para acciones pasadas que todavía importan en el presente.',
        notes: [
          'Regular: har jobbet, har kjøpt, har bodd.',
          'Irregular: har vært, har hatt, har gått, har sett.',
          'El participio no cambia según la persona.'
        ],
        examples: [
          { no: 'Jeg har bodd i Norge i to år.', es: 'He vivido en Noruega durante dos años.' },
          { no: 'Hun har kjøpt en ny jakke.', es: 'Ella ha comprado una chaqueta nueva.' },
          { no: 'Vi har vært i Oslo.', es: 'Hemos estado en Oslo.' }
        ],
        mistake: { wrong: 'Jeg har gådd hjem.', right: 'Jeg har gått hjem.', why: 'El participio de «å gå» es «gått».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el participio.',
            sentence: 'Jeg har ___ i Norge.',
            answers: ['bodd'],
            bank: ['bodd', 'bor', 'bo'],
            es: 'He vivido en Noruega.',
            explain: 'El perfecto de «å bo» es «har bodd».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Vi', 'har', 'vært', 'i', 'Oslo.'],
            es: 'Hemos estado en Oslo.',
            explain: '«Har vært» es el perfecto de «å være».'
          }
        ]
      },
      {
        id: 'futurum',
        num: 14,
        level: 'A2',
        emoji: '🔮',
        title: 'El futuro',
        subtitle: 'skal, kommer til å, presente',
        intro: 'No hay una sola forma de futuro. «Skal» expresa planes y decisiones; «kommer til å» se usa para predicciones; el presente sirve para un futuro cercano.',
        notes: [
          'Plan o decisión: Jeg skal reise i morgen.',
          'Predicción: Det kommer til å regne.',
          'Futuro cercano con presente: Jeg reiser i morgen.',
        ],
        examples: [
          { no: 'Jeg skal begynne på norskkurs.', es: 'Voy a empezar un curso de noruego.' },
          { no: 'Det kommer til å bli kaldt.', es: 'Va a hacer frío.' },
          { no: 'Vi reiser på fredag.', es: 'Viajamos el viernes.' }
        ],
        mistake: { wrong: 'Jeg skal å reise.', right: 'Jeg skal reise.', why: 'Después de «skal» no se pone «å».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el futuro adecuado.',
            sentence: 'Det ___ til å regne.',
            answers: ['kommer'],
            bank: ['kommer', 'skal', 'er'],
            es: 'Va a llover.',
            explain: '«Kommer til å» + infinitivo expresa una predicción.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'skal', 'reise', 'i', 'morgen.'],
            es: 'Voy a viajar mañana.',
            explain: '«Skal» + infinitivo expresa un plan.'
          }
        ]
      },
      {
        id: 'refleksiv',
        num: 15,
        level: 'A2',
        emoji: '🪞',
        title: 'Verbos reflexivos',
        subtitle: 'føle seg, sette seg, glede seg',
        intro: 'Algunos verbos noruegos llevan un pronombre reflexivo que cambia según la persona. Son muy frecuentes y conviene aprenderlos como una unidad.',
        notes: [
          'Pronombres: meg, deg, seg, oss, dere, seg.',
          'Ejemplos: føle seg, sette seg, kle på seg, glede seg.',
          'El pronombre va después del verbo: Hun føler seg hjemme.'
        ],
        examples: [
          { no: 'Hun føler seg hjemme.', es: 'Ella se siente en casa.' },
          { no: 'Jeg setter meg ned.', es: 'Me siento.' },
          { no: 'Vi gleder oss til ferien.', es: 'Tenemos ganas de las vacaciones.' }
        ],
        mistake: { wrong: 'Hun føler hjemme.', right: 'Hun føler seg hjemme.', why: '«Å føle seg» necesita el pronombre reflexivo «seg».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el verbo correcto.',
            sentence: 'Jeg ___ meg hjemme.',
            answers: ['føler'],
            bank: ['føler', 'føle', 'følte'],
            es: 'Me siento en casa.',
            explain: 'La forma de presente es «føler»; el reflexivo es «meg».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Hun', 'føler', 'seg', 'hjemme.'],
            es: 'Ella se siente en casa.',
            explain: 'Verbo + pronombre reflexivo + complemento.'
          }
        ]
      },
      {
        id: 'objektpronomen',
        num: 16,
        level: 'A2',
        emoji: '🎯',
        title: 'Pronombres objeto',
        subtitle: 'meg, deg, ham, henne, dem',
        intro: 'Cuando el pronombre es el objeto de la frase, cambia de forma. «Jeg» pasa a «meg», «han» a «ham», «hun» a «henne».',
        notes: [
          'Objeto: meg, deg, ham, henne, det, oss, dere, dem.',
          'Va después del verbo: Jeg ser ham.',
          'No confundas «han» (sujeto) con «ham» (objeto).'
        ],
        examples: [
          { no: 'Jeg ser ham.', es: 'Lo veo a él.' },
          { no: 'Hun hjelper meg.', es: 'Ella me ayuda.' },
          { no: 'Vi kjenner dem.', es: 'Los conocemos.' }
        ],
        mistake: { wrong: 'Jeg ser han.', right: 'Jeg ser ham.', why: 'Como objeto se usa «ham», no «han».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el pronombre objeto.',
            sentence: 'Jeg ringer ___ i morgen.',
            answers: ['deg'],
            bank: ['deg', 'du', 'din'],
            es: 'Te llamo mañana.',
            explain: '«Du» es sujeto; «deg» es objeto.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'ser', 'ham.'],
            es: 'Lo veo a él.',
            explain: 'El pronombre objeto va después del verbo.'
          }
        ]
      },
      {
        id: 'subordinater',
        num: 17,
        level: 'A2',
        emoji: '🔗',
        title: 'Subordinadas y conjunciones',
        subtitle: 'at, fordi, når, hvis',
        intro: 'Las conjunciones unen dos ideas. En la subordinada, el orden cambia: «ikke» va antes del verbo y el verbo no se mueve a la segunda posición.',
        notes: [
          'Conjunciones: at, fordi, når, hvis, selv om, mens.',
          'En la subordinada: sujeto + ikke + verbo + complemento.',
          'La frase principal mantiene la regla V2.'
        ],
        examples: [
          { no: 'Jeg vet at han bor i Oslo.', es: 'Sé que él vive en Oslo.' },
          { no: 'Jeg blir hjemme fordi jeg ikke er syk.', es: 'Me quedo en casa porque no estoy enfermo.' },
          { no: 'Hvis det regner, tar jeg bussen.', es: 'Si llueve, cojo el autobús.' }
        ],
        mistake: { wrong: 'Fordi jeg er ikke hjemme.', right: 'Fordi jeg ikke er hjemme.', why: 'En la subordinada «ikke» va antes del verbo.' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa la subordinada.',
            sentence: 'Jeg vet at han ___ i Oslo.',
            answers: ['bor'],
            bank: ['bor', 'bo', 'bode'],
            es: 'Sé que él vive en Oslo.',
            explain: 'En la subordinada el verbo va en presente: «bor».'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Jeg', 'blir', 'hjemme', 'fordi', 'jeg', 'ikke', 'er', 'syk.'],
            es: 'Me quedo en casa porque no estoy enfermo.',
            explain: '«Fordi» introduce la subordinada; «ikke» va antes del verbo.'
          }
        ]
      },
      {
        id: 'relativsetninger',
        num: 18,
        level: 'A2',
        emoji: '🧷',
        title: 'Oraciones de relativo con som',
        subtitle: 'El hombre que vive aquí',
        intro: '«Som» es el pronombre relativo más importante. Sirve para sujeto y objeto, y no cambia de forma.',
        notes: [
          'Persona o cosa: Mannen som bor der; boken som jeg leser.',
          '«Som» puede omitirse cuando es objeto: boken jeg leser.',
          'No se usa «hvem» como relativo.'
        ],
        examples: [
          { no: 'Mannen som bor der, er lærer.', es: 'El hombre que vive allí es profesor.' },
          { no: 'Boken som jeg leser, er god.', es: 'El libro que leo es bueno.' },
          { no: 'Folk som lærer norsk, øver hver dag.', es: 'La gente que aprende noruego practica cada día.' }
        ],
        mistake: { wrong: 'Mannen hvem bor der.', right: 'Mannen som bor der.', why: 'El relativo es «som», no «hvem».' },
        exercises: [
          {
            type: 'gap',
            prompt: 'Completa con el relativo.',
            sentence: 'Boken ___ jeg leser, er god.',
            answers: ['som'],
            bank: ['som', 'hvem', 'at'],
            es: 'El libro que leo es bueno.',
            explain: '«Som» introduce la oración de relativo.'
          },
          {
            type: 'order',
            prompt: 'Ordena la frase.',
            words: ['Mannen', 'som', 'bor', 'der,', 'er', 'lærer.'],
            es: 'El hombre que vive allí es profesor.',
            explain: '«Som» une el sustantivo con la información que lo describe.'
          }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------------- */
  a0: {
    subtitle: 'El alfabeto, los sonidos y las primeras palabras',
    intro: 'Un punto de partida para quien nunca ha estudiado noruego: cómo funciona el idioma, cómo se leen sus letras y las primeras frases para presentarte.',
    language: [
      {
        title: 'Dos formas escritas',
        text: 'En Noruega se usan sobre todo el bokmål y el nynorsk. Este curso usa bokmål, la forma más común para quienes aprenden noruego.'
      },
      {
        title: 'Muchos dialectos',
        text: 'No hay una pronunciación única. Aquí usamos como referencia el noruego de Oslo y del este; en otras regiones sonará distinto.'
      },
      {
        title: 'Escucha y repite',
        text: 'Al principio no intentes pronunciar perfecto. Escucha el audio, repite en voz alta y fíjate en el ritmo.'
      }
    ],
    alphabet: [
      { letter: 'a', word: 'dag', es: 'día' },
      { letter: 'b', word: 'bok', es: 'libro' },
      { letter: 'c', word: 'café', es: 'café' },
      { letter: 'd', word: 'dør', es: 'puerta' },
      { letter: 'e', word: 'se', es: 'ver' },
      { letter: 'f', word: 'fisk', es: 'pescado' },
      { letter: 'g', word: 'gå', es: 'ir' },
      { letter: 'h', word: 'hus', es: 'casa' },
      { letter: 'i', word: 'bil', es: 'coche' },
      { letter: 'j', word: 'jobb', es: 'trabajo' },
      { letter: 'k', word: 'katt', es: 'gato' },
      { letter: 'l', word: 'lys', es: 'luz' },
      { letter: 'm', word: 'mat', es: 'comida' },
      { letter: 'n', word: 'natt', es: 'noche' },
      { letter: 'o', word: 'sol', es: 'sol' },
      { letter: 'p', word: 'penn', es: 'bolígrafo' },
      { letter: 'q', word: 'quiz', es: 'concurso' },
      { letter: 'r', word: 'rød', es: 'rojo' },
      { letter: 's', word: 'suppe', es: 'sopa' },
      { letter: 't', word: 'tak', es: 'tejado' },
      { letter: 'u', word: 'hund', es: 'perro' },
      { letter: 'v', word: 'vann', es: 'agua' },
      { letter: 'w', word: 'wok', es: 'wok' },
      { letter: 'x', word: 'taxi', es: 'taxi' },
      { letter: 'y', word: 'sykkel', es: 'bicicleta' },
      { letter: 'z', word: 'zoo', es: 'zoo' },
      { letter: 'æ', word: 'lære', es: 'aprender' },
      { letter: 'ø', word: 'øl', es: 'cerveza' },
      { letter: 'å', word: 'år', es: 'año' }
    ],
    vowels: [
      { letter: 'a', sound: 'como la «a» española', example: 'tak', exampleEs: 'tejado', note: 'En «tak» es larga; en «takk», corta.' },
      { letter: 'e', sound: 'como la «e» española, relajada al final', example: 'se', exampleEs: 'ver', note: 'En «se» es larga; en «sekk», corta.' },
      { letter: 'i', sound: 'como la «i» española', example: 'fin', exampleEs: 'fino', note: 'En «fin» es larga; en «finn», corta.' },
      { letter: 'o', sound: 'como la «o» española, con los labios más redondos', example: 'sol', exampleEs: 'sol', note: 'A veces suena más cerca de «å», sobre todo en palabras frecuentes.' },
      { letter: 'u', sound: 'como la «u» española, con los labios muy redondos', example: 'hund', exampleEs: 'perro', note: 'No es la «u» relajada del inglés.' },
      { letter: 'y', sound: 'no existe en español: di «i» con los labios redondos', example: 'sykkel', exampleEs: 'bicicleta', note: 'Es una vocal clave para sonar natural.' },
      { letter: 'æ', sound: 'entre «a» y «e», como la «a» de «cat» en inglés', example: 'lære', exampleEs: 'aprender', note: 'Aparece en palabras como «lære».' },
      { letter: 'ø', sound: 'como la «u» francesa de «tu» o la «eu» de «peu»', example: 'øl', exampleEs: 'cerveza', note: 'Aparece en «øl».' },
      { letter: 'å', sound: 'como una «o» abierta, parecida a «aw» en inglés', example: 'år', exampleEs: 'año', note: 'Aparece en «år» y «gå».' }
    ],
    pairs: [
      { long: 'tak', longEs: 'tejado', short: 'takk', shortEs: 'gracias', note: 'La vocal es larga en «tak» y corta en «takk».' },
      { long: 'se', longEs: 'ver', short: 'sekk', shortEs: 'saco', note: 'La doble consonante acorta la vocal.' },
      { long: 'fin', longEs: 'fino', short: 'finn', shortEs: 'finlandés', note: 'Escucha la diferencia de duración.' }
    ],
    consonants: [
      { title: 'j', text: 'Suena como la «y» española de «ya».', examples: [{ no: 'jobb', es: 'trabajo' }, { no: 'jeg', es: 'yo' }] },
      { title: 'kj / tj', text: 'Un sonido parecido a «ch», pero más palatal. No es la «ch» fuerte del español.', examples: [{ no: 'kjøpe', es: 'comprar' }, { no: 'tjue', es: 'veinte' }] },
      { title: 'skj / sj', text: 'Suena como «sh» en inglés.', examples: [{ no: 'skje', es: 'cuchara' }, { no: 'sju', es: 'siete' }] },
      { title: 'ng', text: 'Como la «ng» de «sing» en inglés, sin pronunciar una g separada.', examples: [{ no: 'sang', es: 'canción' }, { no: 'lang', es: 'largo' }] },
      { title: 'Letras mudas', text: 'La h no se pronuncia en hv-, gj- y lj-. La d desaparece en -ld y -nd; la t de «det» también.', examples: [{ no: 'hva', es: 'qué' }, { no: 'gjøre', es: 'hacer' }, { no: 'land', es: 'país' }] },
      { title: 'Palabras frecuentes', text: 'Algunas palabras no se pronuncian como se escriben. Escúchalas y memoriza el sonido.', examples: [{ no: 'jeg', es: 'yo' }, { no: 'det', es: 'eso' }, { no: 'og', es: 'y' }, { no: 'ikke', es: 'no' }] }
    ],
    phrases: [
      { no: 'Hei!', es: '¡Hola!' },
      { no: 'God morgen.', es: 'Buenos días.' },
      { no: 'Takk.', es: 'Gracias.' },
      { no: 'Unnskyld.', es: 'Perdón.' },
      { no: 'Ja. / Nei.', es: 'Sí. / No.' },
      { no: 'Jeg heter Lucía.', es: 'Me llamo Lucía.' },
      { no: 'Jeg kommer fra Spania.', es: 'Soy de España.' },
      { no: 'Jeg snakker litt norsk.', es: 'Hablo un poco de noruego.' },
      { no: 'Jeg forstår ikke.', es: 'No entiendo.' },
      { no: 'Kan du gjenta?', es: '¿Puedes repetirlo?' },
      { no: 'Hva betyr det?', es: '¿Qué significa?' },
      { no: 'Ha det bra!', es: '¡Que te vaya bien!' }
    ],
    exercises: [
      {
        type: 'mcq',
        prompt: '¿Cuántas letras tiene el alfabeto noruego?',
        options: ['26', '27', '28', '29'],
        answer: 3,
        explain: 'Tiene 29 letras: las 26 del alfabeto latino más æ, ø y å.'
      },
      {
        type: 'mcq',
        prompt: '¿Cuáles son las tres letras que no están en el alfabeto español?',
        options: ['æ, ø, å', 'ä, ö, ü', 'å, ä, ö', 'æ, ø, ö'],
        answer: 0,
        explain: 'Las tres letras propias del noruego son æ, ø y å.'
      },
      {
        type: 'mcq',
        prompt: '¿En qué palabra la vocal es corta?',
        options: ['takk', 'tak', 'bil', 'sol'],
        answer: 0,
        explain: 'La doble consonante de «takk» acorta la vocal. En «tak», la vocal es larga.'
      },
      {
        type: 'gap',
        prompt: 'Completa la presentación:',
        sentence: 'Jeg ___ fra Spania.',
        answers: ['kommer'],
        bank: ['kommer', 'heter', 'snakker'],
        es: 'Soy de España.',
        explain: '«Å komme fra» = ser de / venir de. «Jeg kommer fra Spania».'
      },
      {
        type: 'order',
        prompt: 'Ordena la frase:',
        words: ['Jeg', 'snakker', 'litt', 'norsk.'],
        es: 'Hablo un poco de noruego.',
        explain: '«Å snakke» = hablar; «litt» = un poco.'
      },
      {
        type: 'listen',
        audio: 'Kan du gjenta?',
        es: '¿Puedes repetirlo?',
        explain: '«Å gjenta» = repetir. Se usa cuando no has entendido algo.'
      },
      {
        type: 'match',
        prompt: 'Empareja las palabras con su significado:',
        pairs: [
          { a: 'jobb', b: 'trabajo' },
          { a: 'kjøpe', b: 'comprar' },
          { a: 'skje', b: 'cuchara' },
          { a: 'sang', b: 'canción' }
        ],
        explain: 'Cuatro palabras para practicar j, kj, skj y ng.'
      },
      {
        type: 'fix',
        prompt: 'Toca la palabra que sobra:',
        sentence: 'Jeg heter på Lucía.',
        wrong: 2,
        correct: 'Jeg heter Lucía.',
        es: 'Me llamo Lucía.',
        explain: '«Å hete» no lleva «på»: se dice «Jeg heter Lucía».'
      }
    ]
  },

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
    },
    {
      term: 'Tuller du?',
      literal: '¿bromeas tú?',
      meaning: '¿Estás de broma? Se usa cuando no te crees lo que oyes.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Tuller du? Har du virkelig kjøpt en elg?', es: '¿Estás de broma? ¿De verdad has comprado un alce?' },
        { who: 'B', no: 'Nei, jeg tuller ikke. Den står i hagen.', es: 'No, no bromeo. Está en el jardín.' }
      ],
      tip: '«Å tulle» es bromear. «Tuller du?» es la reacción natural ante algo increíble; más suave que «kødder du?», que es más vulgar.'
    },
    {
      term: 'Jeg gidder ikke',
      literal: 'no me digno',
      meaning: 'No me apetece / no pienso hacerlo. Pereza o rechazo.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Skal vi rydde i dag?', es: '¿Recogemos hoy?' },
        { who: 'B', no: 'Nei, jeg gidder ikke. Vi gjør det i morgen.', es: 'No, no me apetece. Lo hacemos mañana.' }
      ],
      tip: '«Gidde» es tener ganas de molestarse. «Jeg gidder ikke» puede sonar borde; suaviza con «jeg orker ikke akkurat nå».'
    },
    {
      term: 'Jeg orker ikke',
      literal: 'no aguanto',
      meaning: 'No tengo fuerzas / no puedo más, física o mentalmente.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Blir du med på trening?', es: '¿Vienes a entrenar?' },
        { who: 'B', no: 'Nei, jeg orker ikke i dag. Jeg er helt sliten.', es: 'No, hoy no puedo. Estoy agotado.' }
      ],
      tip: '«Orke» es tener energía para algo. «Jeg orker ikke» es cansancio, no necesariamente rechazo; no lo confundas con «gidde» (pereza).'
    },
    {
      term: 'Å ha peiling',
      literal: 'tener conocimiento',
      meaning: 'Tener idea / controlar de algo.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Kan du fikse sykkelen?', es: '¿Puedes arreglar la bici?' },
        { who: 'B', no: 'Ja, jeg har peiling på sykler.', es: 'Sí, controlo de bicis.' }
      ],
      tip: '«Peiling» es conocimiento práctico. «Jeg har ikke peiling» es «no tengo ni idea», más suave que «jeg aner ikke».'
    },
    {
      term: 'Å ane',
      literal: 'vislumbrar',
      meaning: 'Tener ni idea / sospechar.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Hvor er nøklene?', es: '¿Dónde están las llaves?' },
        { who: 'B', no: 'Jeg aner ikke. Har du sett i jakken?', es: 'Ni idea. ¿Has mirado en la chaqueta?' }
      ],
      tip: '«Jeg aner ikke» es la forma más común de decir «no tengo ni idea». En este sentido, «ane» se usa sobre todo en negativo.'
    },
    {
      term: 'Å henge',
      literal: 'colgar',
      meaning: 'Pasar el rato / hacer «hanging out».',
      register: 'informal',
      example: [
        { who: 'A', no: 'Hva skal dere gjøre i helgen?', es: '¿Qué vais a hacer el finde?' },
        { who: 'B', no: 'Vi henger bare hjemme hos meg.', es: 'Solo vamos a pasar el rato en mi casa.' }
      ],
      tip: '«Å henge» es el «hang out» noruego. «Vi henger» = pasamos el rato; «henge med» = juntarse con alguien.'
    },
    {
      term: 'Å stikke',
      literal: 'pinchar',
      meaning: 'Irse / largarse.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Skal du allerede?', es: '¿Ya te vas?' },
        { who: 'B', no: 'Ja, jeg stikker. Vi snakkes!', es: 'Sí, me largo. ¡Hablamos!' }
      ],
      tip: '«Å stikke» es irse rápido. «Jeg stikker» suena informal; en una entrevista usa «jeg må gå».'
    },
    {
      term: 'Helt konge',
      literal: 'totalmente rey',
      meaning: 'Genial / del carajo (en positivo).',
      register: 'informal',
      example: [
        { who: 'A', no: 'Hvordan var konserten?', es: '¿Qué tal el concierto?' },
        { who: 'B', no: 'Helt konge! Du burde ha vært der.', es: '¡Genial! Deberías haber estado.' }
      ],
      tip: '«Konge» como adjetivo es «genial». «Helt konge» es muy noruego y no tiene nada que ver con la monarquía.'
    },
    {
      term: 'Digg',
      literal: '(jerga) rico, agradable',
      meaning: 'Buenísimo / rico / agradable.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Smaker det?', es: '¿Está bueno?' },
        { who: 'B', no: 'Så digg! Prøv.', es: '¡Buenísimo! Prueba.' }
      ],
      tip: '«Digg» vale para comida, música o planes. Es slang; en un texto formal escribe «godt» o «deilig».'
    },
    {
      term: 'Uff da',
      literal: 'uf, pues',
      meaning: 'Vaya / pobrecillo / qué pena.',
      register: 'neutro',
      example: [
        { who: 'A', no: 'Jeg mistet telefonen i gulvet.', es: 'Se me cayó el móvil al suelo.' },
        { who: 'B', no: 'Uff da! Gikk den i stykker?', es: '¡Vaya! ¿Se rompió?' }
      ],
      tip: '«Uff da» es empatía suave. No es insulto ni lástima exagerada; se dice mucho ante pequeñas desgracias.'
    },
    {
      term: 'Det ordner seg',
      literal: 'se arregla',
      meaning: 'Ya se arreglará / todo saldrá bien.',
      register: 'neutro',
      example: [
        { who: 'A', no: 'Jeg rekker ikke bussen!', es: '¡No llego al autobús!' },
        { who: 'B', no: 'Slapp av, det ordner seg.', es: 'Tranquilo, ya se arreglará.' }
      ],
      tip: '«Å ordne» es arreglar. «Det ordner seg» es el «todo va a salir bien» noruego, muy usado para calmar.'
    },
    {
      term: 'Vi snakkes',
      literal: 'nos hablamos',
      meaning: 'Hasta luego / hablamos.',
      register: 'informal',
      example: [
        { who: 'A', no: 'Jeg må gå nå.', es: 'Me tengo que ir ya.' },
        { who: 'B', no: 'Ok, vi snakkes!', es: 'Vale, ¡hablamos!' }
      ],
      tip: 'Despedida estándar e informal. «Vi sees» es «nos vemos»; «ha det» es más neutro.'
    },
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
