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
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'jobbintervju',
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
