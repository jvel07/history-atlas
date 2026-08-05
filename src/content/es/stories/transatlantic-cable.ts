import type { Story } from '../../types'

export const transatlanticCableEs: Story = {
  slug: 'transatlantic-cable',
  title: 'De diez días a diez minutos',
  subtitle: '1866 — durante toda la historia humana un mensaje viajó a la velocidad de un barco. Y entonces, en un verano, dejó de hacerlo.',
  hook: 'Hasta 1866 las noticias cruzaron el Atlántico a la velocidad de un barco. Luego un comerciante de papel sin formación científica pasó doce años volviéndolas instantáneas.',
  era: 'industrial',
  category: 'milestones',
  years: [1854, 1866],
  regions: ['Reino Unido', 'Estados Unidos', 'Terranova', 'Irlanda'],
  nodes: ['transatlantic-cable', 'telegraph', 'cyrus-field', 'great-eastern', 'william-thomson'],
  tags: ['technology', 'communication', 'business', 'science', 'empire', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'Durante toda la historia humana, las noticias viajaron a la velocidad del caballo o del barco más rápido.' },
    { beat: 'hook', text: 'En un verano eso dejó de ser cierto, y no volvió a serlo nunca.' },
    { beat: 'worldBefore', kicker: 'Década de 1850', text: 'Una pregunta de Londres a Nueva York y su respuesta son tres semanas —' },
    { beat: 'worldBefore', text: 'así que un diplomático negocia con instrucciones escritas antes de la crisis,' },
    { beat: 'worldBefore', punch: true, text: 'y un comerciante compra a un precio que dejó de ser cierto hace diez días.' },
    { beat: 'problem', text: 'Los cables ya cruzan países enteros. El problema son tres mil kilómetros de océano' },
    { beat: 'problem', text: 'con cuatro kilómetros de fondo, donde nadie ha tendido nunca nada.' },
    { beat: 'problem', kicker: '1854', text: 'Cyrus Field es un comerciante de papel retirado que no sabe absolutamente nada de física,' },
    { beat: 'problem', punch: true, text: 'lo que resulta no ser la cualificación que importa.' },
    { beat: 'story', kicker: '1858', text: 'El primer cable llega, los dos países lo celebran, la reina telegrafía al presidente:' },
    { beat: 'story', text: 'noventa y ocho palabras, dieciséis horas en enviarse.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'Tres semanas después se queda mudo, y los periódicos deciden que era un fraude.' },
    { beat: 'story', text: 'El electricista le estaba metiendo dos mil voltios para forzar la señal.' },
    { beat: 'story', text: 'Un físico de Glasgow había dicho que el cable emborronaría, no debilitaría, y no le hicieron caso.' },
    { beat: 'story', kicker: '1865', text: 'Field vuelve a reunir dinero y contrata el barco más grande jamás construido:' },
    { beat: 'story', text: 'un desastre comercial que resulta ser el único casco capaz de llevar un océano de cable.' },
    { beat: 'story', punch: true, text: 'A dos tercios de camino, el cable se parte y cae cuatro kilómetros hacia la oscuridad.' },
    { beat: 'story', kicker: '27 de julio de 1866', text: 'Lo intenta otra vez al año siguiente. Esta vez llega.' },
    { beat: 'story', punch: true, mark: 'chain', text: 'Y luego el barco vuelve, rastrea el cable que perdió y también lo termina.' },
    { beat: 'whyItHappened', text: 'Funcionó porque alguien por fin escuchó al físico,' },
    { beat: 'whyItHappened', text: 'que había demostrado que un cable largo emborrona un pulso hasta volverlo un arrastre,' },
    { beat: 'whyItHappened', punch: true, text: 'así que no grites más. Construye un aparato capaz de oír un susurro.' },
    { beat: 'consequences', text: 'Veinte libras por veinte palabras, cuando un jornalero ganaba cincuenta al año.' },
    { beat: 'consequences', text: 'Los precios de Londres y Nueva York convergen en días. Algodón, trigo, oro.' },
    { beat: 'consequences', punch: true, text: 'Y un imperio descubre que puede dar una orden a la India antes de cenar.' },
    { beat: 'whyItMatters', text: 'Se dijo que acabaría con la guerra, porque los países que pueden hablarse no pelean.' },
    { beat: 'whyItMatters', text: 'Se dijo del telégrafo, y se volvió a decir después, de otros cables.' },
    { beat: 'whyItMatters', punch: true, text: 'La distancia se cerró. Todo lo demás que iba a arreglar, no.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Hasta mediados del siglo XIX, la información se movía a la velocidad de lo que la llevaba. Una carta de Londres llegaba a Nueva York cuando llegaba un barco —diez o catorce días con suerte, más si el tiempo iba en contra— y la respuesta tardaba otro tanto.',
        'Ese solo hecho daba forma a todo lo construido encima. Los embajadores tenían un margen amplísimo porque no había manera de preguntar. Los mercados financieros de las dos orillas del Atlántico ponían precios distintos a la misma mercancía durante semanas, y se hacían fortunas por quitarle un día a la travesía. La batalla de Nueva Orleans se libró en enero de 1815, dos semanas después de que la guerra a la que pertenecía terminara por un tratado del que nadie en Luisiana había oído hablar.',
        'El telégrafo eléctrico ya había arreglado esto en tierra, y lo había arreglado a una velocidad brutal. Desde finales de la década de 1830 se tendieron cables junto a las vías del ferrocarril —los ferrocarriles los necesitaban para saber dónde estaban sus trenes— y para los años cincuenta un mensaje cruzaba Gran Bretaña, o Estados Unidos, en minutos. Los contemporáneos entendían perfectamente el tamaño de aquello: los periódicos hablaban de la aniquilación del espacio y el tiempo, y lo decían en serio.',
        'Lo que quedaba era el agua. Los cables submarinos cortos funcionaban: Inglaterra-Francia en 1851, el mar de Irlanda, el Mediterráneo. El Atlántico era un problema de otro orden: unos tres mil kilómetros sobre un fondo de dos a cuatro kilómetros que apenas se había sondeado a grandes rasgos, y que exigía un conductor continuo más largo que nada jamás fabricado.',
        'Todos coincidían en que valdría una cantidad enorme de dinero. La mayoría de la gente sensata pensaba que no se podía hacer.',
      ],
      aside: {
        kind: 'number',
        label: 'La cifra',
        body: 'De diez a catorce días en cada sentido. Esa es la latencia de ida y vuelta del Atlántico en 1850 — pongamos tres semanas para una pregunta y su respuesta. Después de julio de 1866 eran unos minutos. No ha habido un salto comparable en velocidad de comunicación ni antes ni después; todo lo posterior ha sido una mejora sobre «prácticamente instantáneo».',
      },
      sourceIds: ['standage-1998', 'gordon-2002'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Cyrus West Field era un empresario estadounidense que había hecho una fortuna en el papel al por mayor, se había retirado a los treinta y tres y buscaba algo que hacer. No sabía nada de electricidad y nunca llegó a aprender. Lo que tenía era una capacidad irrazonable para sacar dinero a gente que ya había perdido dinero con la misma idea.',
        'Se metió en el proyecto en 1854 y le dedicó los doce años siguientes. Los problemas de ingeniería eran reales y en buena parte sin precedente: ¿cómo se fabrican tres mil kilómetros de conductor de cobre sin un solo defecto? ¿Cómo se aísla del agua de mar a una presión enorme? ¿Cómo se larga desde un barco en movimiento exactamente al ritmo correcto —demasiado rápido y desperdicias cable, demasiado lento y se parte por su propio peso— sin poder parar a pensar?',
        'La respuesta al aislamiento fue la gutapercha, un látex de un árbol malayo que se ablanda con el calor y fragua duro, que resulta ser un aislante eléctrico excelente y al que no le afecta el agua salada. Llevaba una década usándose en cables más cortos. También se degrada si la dejas al sol, cosa que va a importar.',
        'La física era peor, porque al principio casi nadie la entendía. William Thomson —después lord Kelvin— había deducido matemáticamente que un cable largo sumergido se comporta como un condensador: un pulso nítido enviado por un extremo llega al otro emborronado en una subida y una bajada lentas. La consecuencia es un límite a la velocidad de señalización y la necesidad de una detección extremadamente sensible en la recepción. Lo que desde luego no pide es más voltaje.',
        'El electricista jefe de la compañía, un antiguo cirujano llamado Wildman Whitehouse, discrepó de Thomson en público y con extensión, y la compañía se quedó con los dos.',
      ],
      sourceIds: ['gordon-2002', 'thomson-1855', 'standage-1998'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'El primer intento serio, en 1857, partió el cable en aguas profundas a los pocos días. El segundo, en 1858, consistió en que dos barcos se encontraran en mitad del Atlántico, empalmaran y navegaran en direcciones opuestas; falló tres veces antes de salir bien a la cuarta. El 5 de agosto de 1858 los extremos tocaron tierra en Valentia (Irlanda) y en Trinity Bay (Terranova), y los dos continentes perdieron la cabeza.',
        'Hubo fuegos artificiales en Nueva York —tantos que se incendió el ayuntamiento—, desfiles, sermones, medallas conmemorativas y trozos de cable sobrante vendidos como recuerdo por un joven llamado Tiffany. La reina Victoria mandó al presidente Buchanan un mensaje de noventa y ocho palabras. Se tardó unas dieciséis horas en transmitirlo, cosa que nadie mencionó en los desfiles.',
        'Whitehouse, incapaz de sacar una señal utilizable, hizo lo que le dictaba su teoría y aplicó bobinas de inducción que generaban algo así como dos mil voltios. En tres semanas el cable estaba muerto. Casi con seguridad ya estaba dañado —mal almacenado al sol, mal fabricado, con fallos de aislamiento—, pero el voltaje enorme lo remató. La comisión conjunta que se reunió después, en 1861, diseccionó tanto la fabricación como las decisiones de operación, y la reputación de Whitehouse no sobrevivió. Durante un tiempo tampoco sobrevivió la fe del público: mucha gente concluyó que todo aquello había sido un fraude bursátil y que jamás había cruzado ningún mensaje.',
        'Field siguió. La guerra civil estadounidense lo paró todo cuatro años. Cuando volvió en 1865, tres cosas habían cambiado. El cable se fabricaba con una especificación muchísimo mejor y con pruebas de verdad. La lectura de la física de Thomson había ganado, y su galvanómetro de espejo —un imán con un espejito que lanza un punto de luz sobre una escala, de modo que una señal demasiado débil para mover una aguja se lee como un punto que se desplaza por la pared— era el instrumento de recepción.',
        'Y había un barco. El *Great Eastern* de Isambard Kingdom Brunel era seis veces mayor que cualquier nave a flote, había sido una catástrofe comercial como transatlántico de pasajeros y era el único casco existente capaz de llevar todo el cable en una sola carga. La expedición de 1865 largó dos tercios del Atlántico antes de que el cable se partiera y desapareciera bajo cuatro kilómetros de agua. Pasaron días rastreándolo con ganchos en un cabo de acero, lo subieron dos veces y lo perdieron dos veces.',
        'Volvieron en 1866. Esta vez salió perfecto —casi aburrido, que era la gracia— y el 27 de julio el cable tocó tierra en Heart’s Content, Terranova, y siguió funcionando.',
        'Y entonces el *Great Eastern* hizo lo que convierte una historia de éxito en una buena historia. Volvió a navegar hasta la posición donde se había perdido el cable de 1865, pasó dos semanas arrastrando el fondo, lo encontró, lo enganchó, lo subió desde cuatro kilómetros, lo empalmó y lo llevó el resto del camino hasta Terranova. En septiembre de 1866 había dos cables funcionando a través del Atlántico.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'El corresponsal de guerra W. H. Russell navegó en el Great Eastern y publicó un relato del viaje de 1865, ilustrado por Robert Dudley: el cable enredado, el trabajo con el rezón, los hombres viendo desaparecer un alambre por la popa. Es lo más parecido a una cámara en cubierta que tenemos, y se escribió para venderlo a los accionistas.',
        sourceId: 'russell-1865',
      },
      sourceIds: ['gordon-2002', 'russell-1865', 'standage-1998'],
    },

    whyItHappened: {
      heading: 'Por qué funcionó al final',
      paragraphs: [
        'El cable de 1866 funcionó por tres razones, y solo una de ellas es heroica.',
        '**Esta vez la física era la correcta.** Thomson había demostrado que el enemigo no es la atenuación sino la dispersión: el cable almacena carga, así que un pulso limpio llega como un arrastre, y apretar más solo lo emborrona peor y acaba perforando el aislamiento. La respuesta correcta es enviar suave y detectar fino. Su galvanómetro de espejo amplificaba mecánicamente lo que no podía amplificarse eléctricamente —no existía ninguna válvula de vacío hasta cincuenta años después— colgando un espejo del imán móvil y dejando que un haz de luz largo hiciera la ampliación.',
        '**Esta vez la fabricación era la correcta.** El cable de 1858 lo habían hecho a toda prisa dos empresas con criterios distintos, se había almacenado mal y se había probado poco. El cable de 1865–66 era más pesado, mejor aislado, probado de forma continua durante la fabricación y durante el tendido y —crucialmente— mantenido fuera del sol. Casi toda la diferencia entre el fracaso y el éxito es aburrido control de calidad, que es donde suele estar casi toda la diferencia.',
        '**Y el barco existía.** Esto es casi un accidente. El *Great Eastern* se construyó con un propósito completamente distinto, fracasó en él y resultó ser el único objeto del planeta capaz de contener 4.000 kilómetros de cable y largarlo de forma continua. Empalmar en mitad del océano entre dos barcos, como en 1858, introduce justo la clase de fallo del que la expedición de 1865 demostró que no se sale fácilmente.',
        'La parte heroica es Field, y conviene precisar qué hizo exactamente. No inventó, diseñó ni calculó nada. Reunió dinero, una y otra vez, de inversores que le habían visto perderlo — después de un fracaso público, de una acusación pública de fraude y de una guerra de cuatro años. Esa es la habilidad más rara, y el proyecto la necesitaba más que a otro ingeniero.',
      ],
      sourceIds: ['thomson-1855', 'joint-committee-1861', 'gordon-2002'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'El cable no abarató la comunicación. La volvió instantánea, que es otra cosa, y durante veinte años esas dos cosas se separaron de maneras interesantes.',
      ],
      shortTerm: [
        'La tarifa inicial era de 20 libras por veinte palabras: unos cinco meses de jornal de un obrero. No era un descuido: la capacidad era mínima, así que el precio era el mecanismo de racionamiento.',
        'Los precios del algodón, el trigo y el oro en Londres y Nueva York convergieron en días, porque el arbitraje se movía ahora más rápido que la mercancía.',
        'Las agencias de noticias se transformaron. Reuters y sus rivales se habían construido sobre conseguir la información unas horas antes; ahora la ventaja se medía en minutos, y el negocio se reorganizó en torno a eso.',
        'La diplomacia cambió de forma. Un embajador al que se podía preguntar dejó de ser quien decidía y pasó a ser un canal, un cambio del que los diplomáticos se quejaron de inmediato y no han dejado de quejarse.',
        'La tarifa fue bajando según se tendían más cables, y para la década de 1880 el Atlántico llevaba varias líneas en competencia.',
      ],
      longTerm: [
        'Gran Bretaña acabó siendo dueña o controlando la mayor parte de la red submarina mundial —la «All Red Line»—, lo que significaba que en guerra podía leer, retrasar o cortar el tráfico de casi cualquiera. Cortó los cables atlánticos de Alemania en los primeros días de agosto de 1914.',
        'La disciplina horaria mundial siguió al cable. Coordinar mensajes instantáneos entre lugares con mediodías distintos hizo los husos horarios necesarios y no solo ordenados.',
        'Los mercados financieros se volvieron continuos e internacionales de una forma reconociblemente moderna, con el mismo activo cotizando contra sí mismo a través de un océano en tiempo real.',
        'El cable submarino sigue siendo la base física de la comunicación intercontinental. Los satélites llevan una fracción marginal; casi todo internet cruza los océanos por cables acorazados por rutas muy parecidas.',
        'Quedó establecida una costumbre retórica duradera: toda tecnología de comunicación nueva se ha anunciado desde entonces como aquello que acabará con los malentendidos entre naciones.',
      ],
      unexpected: [
        'El *Great Eastern*, un fracaso comercial absoluto en todo aquello para lo que se diseñó, se recuerda casi solo por un trabajo que nadie imaginó cuando se construyó. Acabó sus días como valla publicitaria flotante de unos grandes almacenes de Liverpool.',
        'El cable de 1858 funcionó lo justo para ahorrar dinero antes de morirse: se dice que un mensaje que anulaba el traslado de dos regimientos británicos desde Canadá ahorró al gobierno unas 50.000 libras, más que el dividendo anual que esperaba la compañía.',
        'Field no ganó gran cosa con ello. Se arruinó años después en una especulación ferroviaria sin relación, en Wall Street.',
        'La confiada afirmación victoriana de que la comunicación instantánea haría imposible la guerra se hizo del telégrafo, del cable, del teléfono, de la radio y del avión. Se ha hecho ya de prácticamente toda tecnología de comunicación de la historia, con un historial constante.',
      ],
      sourceIds: ['standage-1998', 'headrick-1991', 'gordon-2002'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'Este es el mayor cambio en la velocidad de la comunicación humana que ha ocurrido nunca, y es el que no se puede repetir. Pasar de diez días a diez minutos es un factor de unos mil. Todo lo posterior —teléfono, radio, satélite, fibra— ha sido una mejora sobre «ya prácticamente instantáneo». Vivimos al otro lado de una discontinuidad que ocurrió en un verano de 1866.',
        'Es además el caso más claro de un patrón que conviene reconocer. Quienes entendían la física tenían razón y los anuló quien entendía de autoridad; el fracaso posterior se le achacó a la tecnología y no a la decisión; y el éxito acabó llegando de hacer bien las cosas aburridas, a un coste que nadie quiso pagar la primera vez. Esa secuencia no es una curiosidad victoriana. Es la descripción de casi todos los fallos de infraestructura desde entonces.',
        'Y el cable es un buen correctivo contra la idea de que el mundo conectado es nuevo. Los victorianos ya tuvieron entera la discusión: noticias instantáneas, saturación de información, sobresaltos de precios propagándose en minutos, quejas por la muerte de la correspondencia reposada, mensajes cifrados y estafas por cable, y gobiernos leyendo discretamente todo lo que cruzaba sus líneas. También tuvieron el optimismo: los países que pueden hablarse, coincidía todo el mundo, no irán a la guerra. Eso se escribió en 1866, y en 1914 el primer acto británico de la guerra fue cortar los cables alemanes.',
        'El hecho físico de debajo sigue siendo cierto y sigue sorprendiendo. Casi todo lo que cruza un océano electrónicamente viaja todavía por un cable en el fondo del mar, por rutas elegidas por hombres que en la década de 1860 arrastraban una plomada con una cuerda para averiguar la profundidad.',
      ],
      sourceIds: ['standage-1998', 'headrick-1991'],
    },
  },

  timeline: [
    { year: 1838, title: 'El telégrafo eléctrico se vuelve comercial', detail: 'Los cables siguen a los ferrocarriles, porque los ferrocarriles necesitan saber dónde están sus trenes. Dentro de un país, un mensaje se vuelve instantáneo.' },
    { year: 1851, title: 'El primer cable submarino que funciona', detail: 'Inglaterra-Francia, aislado con gutapercha. Se demuestra que las travesías cortas son posibles, que es lo que hace pensar a la gente en las largas.' },
    { year: 1854, title: 'Cyrus Field se hace cargo del Atlántico', detail: 'Un comerciante de papel retirado y sin formación científica decide unir dos continentes, y empieza doce años de reunir dinero.', pivotal: true },
    { year: 1855, title: 'Thomson publica la teoría', detail: 'Demuestra que un cable largo sumergido emborrona el pulso en vez de solo debilitarlo, lo que fija un límite de velocidad y descarta la fuerza bruta.', pivotal: true },
    { year: 1857, title: 'El primer intento parte el cable', detail: 'Se rompe en aguas profundas a los pocos días de salir de Irlanda, y se pierden varios cientos de kilómetros de cable.' },
    { year: 1858, date: '1858-08-05', title: 'El cable llega, y los dos países lo celebran', detail: 'La reina Victoria telegrafía al presidente Buchanan noventa y ocho palabras. Se tarda unas dieciséis horas. Nueva York organiza un desfile.', pivotal: true },
    { year: 1858, date: '1858-09', title: 'El cable muere', detail: 'El electricista jefe fuerza dos mil voltios por una línea ya dañada. En tres semanas está mudo, y la prensa grita fraude.', pivotal: true },
    { year: 1861, title: 'La comisión conjunta emite su informe', detail: 'Una comisión del Board of Trade y de la compañía disecciona la fabricación, el almacenaje y la operación del cable de 1858. Es la razón de que 1866 funcione.' },
    { year: 1865, title: 'El Great Eastern pierde el cable', detail: 'A dos tercios de camino, se parte y cae cuatro kilómetros. Rastrean durante días, lo suben dos veces y lo pierden dos veces.' },
    { year: 1866, date: '1866-07-27', title: 'El cable llega a Heart’s Content', detail: 'Una travesía limpia con mejor cable y el galvanómetro de espejo de Thomson en la recepción. Este se queda funcionando.', pivotal: true },
    { year: 1866, date: '1866-09-02', title: 'El cable perdido se rescata y se termina', detail: 'El Great Eastern vuelve, rastrea el fondo dos semanas, engancha el cable de 1865 a cuatro kilómetros de profundidad y lo completa. Ya son dos líneas.', pivotal: true },
    { year: 1914, title: 'Gran Bretaña corta los cables alemanes', detail: 'En los primeros días de la guerra, la red que Gran Bretaña llevaba cincuenta años comprando se usa como arma en cuestión de horas.' },
  ],

  causeEffect: [
    { cause: 'Los mensajes viajan solo tan rápido como los barcos', effect: 'Diplomáticos y comerciantes actúan con información caducada', because: 'Un viaje de ida y vuelta de tres semanas significa que toda instrucción se escribió antes de la situación que pretende resolver.' },
    { cause: 'Los ferrocarriles necesitan seguir a sus trenes', effect: 'Los cables telegráficos se extienden junto a las vías', because: 'El primer cliente de la comunicación instantánea fue un negocio que sin ella chocaba trenes.' },
    { cause: 'Un cable largo almacena carga como un condensador', effect: 'Las señales llegan emborronadas y no solo débiles', because: 'La línea se carga y se descarga, así que un pulso nítido se ensancha: eso limita la velocidad y no se arregla gritando.' },
    { cause: 'Whitehouse aplica dos mil voltios', effect: 'El cable de 1858 muere en tres semanas', because: 'El alto voltaje perfora un aislamiento ya dañado, y la teoría equivocada llevó directamente al remedio equivocado.' },
    { cause: 'El fracaso de 1858 es público y humillante', effect: 'El cable de 1866 se fabrica y se prueba como es debido', because: 'Un fracaso así de caro es lo único que compra de forma fiable el presupuesto para el aburrido control de calidad.' },
    { cause: 'El Great Eastern fracasa como barco de pasajeros', effect: 'Queda disponible como buque cablero', because: 'Era el único casco capaz de llevar el Atlántico entero en una carga, lo que eliminaba por completo el empalme en mitad del océano.' },
    { cause: 'El cable se abre en 1866', effect: 'Los precios de Londres y Nueva York convergen en días', because: 'El arbitraje se mueve a la velocidad de la información, y la información iba ahora más rápido que cualquier barco con mercancía.' },
    { cause: 'Gran Bretaña posee la mayoría de los cables del mundo', effect: 'Puede dejar incomunicados a sus enemigos en horas', because: 'Quien posee la ruta física posee el tráfico, y eso vale igual para un cable en el fondo del mar que para una carretera.' },
  ],

  myths: [
    {
      myth: 'El cable transatlántico se completó en 1858.',
      reality: 'Un cable llegó a tierra en agosto de 1858 y llevó tráfico unas tres semanas antes de morir. Hubo desfiles, medallas y recuerdos primero, y un enlace que funcionaba después, brevemente. La conexión permanente data del 27 de julio de 1866, tras dos fracasos más.',
      whyItPersists: 'Las celebraciones de 1858 fueron enormes y están bien documentadas, y el fracaso fue más silencioso que la fiesta.',
      sourceIds: ['gordon-2002', 'joint-committee-1861'],
    },
    {
      myth: 'Cyrus Field fue el inventor del cable transatlántico.',
      reality: 'No inventó nada. Era un comerciante de papel retirado que no podía seguir la física, y su aportación fue reunir dinero durante doce años a través de cuatro fracasos, una acusación de fraude y una guerra civil. La ciencia era de Thomson, la fabricación de las cableras y el barco de Brunel.',
      whyItPersists: 'Los proyectos se recuerdan por un solo nombre, y quien no deja de pedir dinero suele ser el que sigue en pie al final.',
      sourceIds: ['gordon-2002', 'standage-1998'],
    },
    {
      myth: 'El cable de 1858 falló porque la tecnología sencillamente no estaba lista.',
      reality: 'Falló por una combinación de mala fabricación, almacenaje descuidado —parte de él al sol, que degrada la gutapercha—, pruebas insuficientes y luego un electricista jefe aplicando unos dos mil voltios sobre una teoría equivocada. La comisión de 1861 lo documentó todo. La tecnología era justa; las decisiones fueron peores.',
      whyItPersists: '«Demasiado pronto» absuelve a todo el mundo, y culpar a una máquina es más cómodo que nombrar a una comisión.',
      sourceIds: ['joint-committee-1861', 'gordon-2002'],
    },
    {
      myth: 'Los satélites sustituyeron a los cables submarinos.',
      reality: 'Casi todos los datos intercontinentales siguen viajando por cables acorazados en el fondo del mar, muchas veces por rutas cartografiadas en el siglo XIX. Los enlaces por satélite llevan una fracción pequeña y tienen mucha peor latencia, porque la señal tiene que subir a la órbita y bajar.',
      whyItPersists: 'Los satélites son visibles y futuristas; un cable en el fango no es ninguna de las dos cosas, y nadie hace una película sobre uno.',
      sourceIds: ['headrick-1991'],
    },
  ],

  disagreements: [
    {
      question: '¿Qué mató realmente al cable de 1858?',
      positions: [
        { view: 'La decisión de operación. Las bobinas de inducción de Whitehouse metieron unos dos mil voltios en una línea que había que señalizar con suavidad, y perforaron el aislamiento.', heldBy: 'La lectura dominante, siguiendo la comisión de 1861', sourceId: 'joint-committee-1861' },
        { view: 'El cable ya se estaba muriendo. Fallos de fabricación, pruebas pobres y un almacenaje largo en el calor habían degradado la gutapercha antes de entrar en el agua; el voltaje aceleró un fallo que ya existía.', heldBy: 'Evaluaciones técnicas posteriores del expediente de fabricación', sourceId: 'gordon-2002' },
      ],
      atlasPosition: 'El atlas dice las dos cosas, en ese orden: el cable estaba comprometido antes de tenderse, y el alto voltaje lo remató. No presenta a Whitehouse como causa única, y no exculpa a la fabricación.',
    },
    {
      question: '¿Fue el cable un logro científico o financiero?',
      positions: [
        { view: 'Científico. La restricción decisiva era entender la física del cable y construir un instrumento lo bastante sensible para leer una señal emborronada: el trabajo de Thomson es por lo que 1866 salió donde 1858 falló.', heldBy: 'El relato técnico', sourceId: 'thomson-1855' },
        { view: 'Financiero y organizativo. La física se publicó en 1855 y se ignoró; lo verdaderamente escaso era la capacidad de seguir levantando capital a través de fracasos públicos repetidos.', heldBy: 'John Steele Gordon y las historias empresariales del proyecto', sourceId: 'gordon-2002' },
      ],
      atlasPosition: 'El atlas los trata como las dos mitades de una misma respuesta. Thomson hizo la cosa posible; Field hizo que ocurriera igualmente después de que se demostrara imposible dos veces. Ninguno de los dos habría entregado un cable solo.',
    },
  ],

  didYouKnow: [
    'El mensaje de noventa y ocho palabras de la reina Victoria al presidente Buchanan en 1858 tardó unas dieciséis horas en transmitirse.',
    'Las celebraciones de 1858 en Nueva York fueron tan entusiastas que los fuegos artificiales incendiaron el ayuntamiento.',
    'El cable sobrante se cortó en trozos y se vendió como recuerdo. Lo vendía Tiffany.',
    'Cuando el cable murió unas semanas después, bastante gente concluyó que todo había sido un fraude bursátil y que jamás había cruzado ningún mensaje.',
    'El galvanómetro de espejo de Thomson funcionaba colgando un espejito de un imán y rebotando un haz de luz por la sala: amplificación mecánica, cincuenta años antes de la válvula de vacío.',
    'El Great Eastern fue un desastre comercial como transatlántico de pasajeros y se recuerda casi solo por un trabajo que nadie imaginó cuando se construyó.',
    'Después de tender el cable de 1866, el barco volvió, rastreó el fondo dos semanas, enganchó el cable perdido el año anterior a cuatro kilómetros de profundidad y lo terminó.',
    'El primer acto ofensivo británico de la Primera Guerra Mundial fue cortar los cables submarinos alemanes, a los pocos días de empezar.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'Antes de 1866, un mensaje cruzaba el Atlántico a la velocidad de un barco: de diez a catorce días en cada sentido. El telégrafo eléctrico ya había hecho instantáneos los mensajes dentro de un país, pero tres mil kilómetros de océano profundo eran otro problema.',
        'Cyrus Field, un comerciante de papel estadounidense retirado y sin formación científica, se hizo cargo en 1854. Un cable llegó a tierra en agosto de 1858 con enorme celebración y murió en tres semanas, sobre todo porque el electricista jefe de la compañía forzó unos dos mil voltios por una línea ya dañada, contra el consejo del físico William Thomson.',
        'Thomson había demostrado que un cable largo sumergido emborrona la señal en vez de debilitarla, así que la respuesta es una detección delicada y no más potencia. Su galvanómetro de espejo —un espejo sobre un imán que lanza un punto de luz a una escala— podía leer una señal demasiado débil para mover una aguja.',
        'Tras un fracaso en 1865, el Great Eastern, el único barco lo bastante grande para llevar todo el cable, dejó en tierra una línea funcionando en Heart’s Content (Terranova) el 27 de julio de 1866, y luego volvió a rescatar y completar el cable perdido el año anterior. La comunicación de ida y vuelta pasó de tres semanas a minutos: el mayor salto de velocidad comunicativa de la historia.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Imagina que quieres preguntarle algo a alguien que vive al otro lado del océano. Escribes una carta, la carta se sube a un barco y el barco tarda unas dos semanas. Luego te contesta, y eso tarda otras dos semanas. O sea que una pregunta y su respuesta son un mes.',
        'La gente ya había descubierto cómo mandar mensajes rapidísimo por un cable: eso es un telégrafo. Pero no puedes soltar un cable en el mar sin más. El Atlántico mide tres mil kilómetros y en algunos sitios tiene cuatro de profundidad.',
        'Un hombre llamado Cyrus Field decidió hacerlo igualmente. No era científico en absoluto. Simplemente se le daba de maravilla convencer a la gente para que le diera dinero, cosa que le hizo mucha falta, porque el primer intento se partió, el segundo funcionó tres semanas y se murió, y el tercero se volvió a partir.',
        'El cable fallaba en parte porque intentaban empujar el mensaje con más fuerza, como gritar por una tubería larguísima. Un científico llamado William Thomson dijo que así no: el mensaje no sale bajito, sale borroso. Así que en vez de eso construyó un aparato capaz de ver un temblorcito: un espejito que hacía moverse un puntito de luz en la pared.',
        'Al cuarto intento, en 1866, funcionó. De repente un mensaje cruzaba el océano en minutos en vez de en dos semanas. Y la gente dijo que aquello acabaría con las guerras, porque ahora todos podían hablar. No fue así.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El núcleo técnico es el tratamiento por Thomson del cable sumergido como línea RC distribuida, publicado ante la Royal Society en 1855: la difusión de la carga produce una forma de onda recibida cuyo tiempo de subida escala con el cuadrado de la longitud, lo que da la «ley de los cuadrados» y una restricción absoluta sobre la velocidad de señalización. El rechazo público de Whitehouse a esto, y su afirmación empírica de que las bobinas de inducción podían forzar una señalización suficiente, es el caso canónico de la autoridad del práctico anulando a la teoría, y el informe de la comisión conjunta de 1861 es el documento primario para reconstruirlo.',
        'La instrumentación importa tanto como la teoría. A falta de cualquier amplificación electrónica —el triodo es de 1906—, el galvanómetro de espejo y después el registrador de sifón de Thomson lograron ganancia mecánica y óptica: suspensión torsional de un imán con espejo adherido y una palanca óptica larga que convierte deflexiones de microrradianes en desplazamientos legibles. Es un buen ejemplo de rodear una restricción en vez de resolverla.',
        'La economía política la trata mejor Headrick: la red de cables es la infraestructura del imperio informal, y el dominio británico en fabricación, tendido y propiedad —impulsado por el suministro de gutapercha, la posición de Telcon y la capacidad hidrográfica del Almirantazgo— se tradujo directamente en capacidades de interceptación, censura y denegación ejercidas desde 1914. El cable de 1866 es, por tanto, un artefacto fundacional de la geopolítica de las comunicaciones, no solo del comercio.',
        'Por último, la cautela historiográfica: el marco de Standage del telégrafo como «internet victoriano» es iluminador y puede forzarse. La analogía se sostiene con fuerza en los efectos sociales —saturación informativa, fraude, codificación, romance, integración de mercados— y débilmente en la arquitectura, ya que el telégrafo era un servicio punto a punto, mediado por operadores y fuertemente racionado, no una red de conmutación de paquetes abierta al usuario final.',
      ],
    },
    {
      id: 'the-law-of-squares',
      label: 'Por qué gritar lo empeoraba',
      kind: 'angle',
      paragraphs: [
        'Lo más instructivo de esta historia es un error de física, y merece entenderse porque no es intuitivo.',
        'Imagina mandar un chasquido seco por una tubería larguísima. Esperas que llegue más flojo. Un cable submarino largo hace otra cosa: llega *emborronado*. El cable, rodeado de agua de mar conductora con un aislante fino entre medias, se comporta como una cadena larga de condensadores. La carga tiene que llenar la línea antes de que el extremo lejano note nada, y luego tiene que vaciarse. Entra un punto nítido; sale una ondulación lenta.',
        'De ahí salen dos cosas. Primera, hay un límite de velocidad: manda puntos más rápido de lo que la línea puede cargarse y descargarse, y se funden unos con otros. Thomson calculó que el retardo escala con el cuadrado de la longitud, y por eso un cable corto del Canal no se comporta como uno atlántico. Segunda, y aquí es donde Whitehouse se equivocó fatalmente, el problema no es la amplitud. Meter más voltaje no afila el pulso. Solo castiga el aislamiento hasta que cede.',
        'La respuesta correcta es la opuesta a la instintiva: señaliza suave y construye un receptor capaz de ver casi nada. El galvanómetro de Thomson detectaba desviaciones demasiado pequeñas para mover una aguja colgando un espejo del imán y rebotando un haz de luz por la sala: el haz es una palanca sin peso de varios metros.',
        'Todos los sistemas de transmisión a larga distancia posteriores se han enfrentado a una versión de ese compromiso, y la tentación de resolverlo subiendo la potencia ha sido fatal para muchísimos de ellos.',
      ],
    },
    {
      id: 'the-victorian-internet',
      label: 'Ellos tuvieron esta discusión primero',
      kind: 'contrast',
      paragraphs: [
        'Es facilísimo pensar que la comunicación global instantánea es nuestra. Lee la prensa de los años sesenta y setenta del XIX y resulta incómodamente familiar.',
        '**Saturación informativa.** Los directores se quejaban en menos de una década de que el volumen de noticias entrantes por cable era inmanejable y había degradado la calidad del pensamiento: que ahora la gente lo sabía todo y no entendía nada.',
        '**Compresión y jerga.** A veinte libras por veinte palabras apareció toda una industria de códigos comerciales que asignaban a una sola palabra frases enteras. Los operadores desarrollaron abreviaturas y una jerga profesional que los de fuera no sabían leer.',
        '**Fraude y seguridad.** La manipulación bursátil por cable empezó casi de inmediato, el cifrado se volvió una necesidad comercial y los gobiernos leían por costumbre lo que cruzaba su territorio.',
        '**Romance y comunidad.** Operadores que no se habían visto nunca se cortejaban en morse por los cables; al menos una boda se celebró por línea telegráfica.',
        '**Y la gran promesa.** La comunicación instantánea entre naciones, decían los sermones y los editoriales de 1858 y de 1866, haría imposible la guerra, porque la causa de la guerra era el malentendido y esto era el remedio contra el malentendido.',
        'Esa promesa se ha hecho ya del telégrafo, del cable, del teléfono, de la radio, de la televisión, del satélite y de internet. Tiene un historial impecable, y siempre es sincera.',
      ],
    },
  ],

  beforeAfter: {
    label: 'El Atlántico, antes y después',
    before: {
      title: 'Antes de julio de 1866',
      points: [
        'Una pregunta y su respuesta son unas tres semanas',
        'Los embajadores deciden, porque no pueden preguntar',
        'La misma mercancía tiene dos precios durante quince días',
        'Las noticias llegan a bultos cuando atraca un barco',
        'La distancia es una restricción real para toda institución',
      ],
    },
    after: {
      title: 'Después de julio de 1866',
      points: [
        'Una pregunta y su respuesta son minutos',
        'Los embajadores transmiten, porque se les puede preguntar',
        'Los precios convergen en días, y luego en horas',
        'Las noticias llegan de forma continua, y las raciona el precio',
        'La distancia pasa a ser un coste y no una restricción',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si a Whitehouse le hubieran quitado la razón en 1858?',
      reasoning: 'Si se hubieran usado los instrumentos y el método de Thomson en el primer cable, quizá habría llevado tráfico a poca velocidad durante meses o años en vez de tres semanas. Un enlace funcionando en 1858 habría adelantado casi una década la conexión atlántica permanente, antes de la guerra civil estadounidense y no después.',
      constraint: 'El cable de 1858 probablemente ya estaba comprometido antes de entrar en el agua: mal fabricado, mal probado y almacenado al sol. Señalizar con suavidad quizá habría alargado su vida en vez de salvarla, y todavía había que aprender la técnica de tendido en aguas profundas, que es lo que enseñó el fracaso de 1865.',
    },
    {
      question: '¿Y si el cable atlántico hubiera fracasado otros veinte años?',
      reasoning: 'Retrasarlo más allá de la década de 1880 habría llevado la comunicación transatlántica instantánea a una época de materiales y de comprensión eléctrica mucho mejores, y posiblemente a un periodo en que las empresas estadounidenses, y no las británicas, dominaran la fabricación de cable: lo que habría cambiado quién poseía y podía pinchar la red mundial en 1914.',
      constraint: 'Esto es especular sobre la propiedad, no sobre la posibilidad. La demanda era abrumadora y competían varios grupos; alguien habría tendido un cable que funcionara en pocos años de todas formas. La posición británica se apoyaba en el suministro de gutapercha y en la capacidad de fabricación, y un retraso no elimina ninguna de las dos con claridad.',
    },
  ],

  quiz: [
    {
      question: '¿Cuál fue la aportación real de Cyrus Field?',
      options: [
        'Inventó el galvanómetro de espejo',
        'Calculó la física de los cables largos',
        'Reunió el dinero, una y otra vez, durante doce años de fracasos',
        'Capitaneó el Great Eastern',
      ],
      answerIndex: 2,
      explains: 'Field era un comerciante de papel retirado que no entendía nada de la ciencia. Su habilidad insólita fue convencer a inversores de financiar un cuarto intento tras tres fracasos públicos y una acusación de fraude.',
    },
    {
      question: '¿Por qué destruyeron el cable de 1858 los dos mil voltios?',
      options: [
        'Fundieron el conductor de cobre',
        'Un cable largo emborrona la señal en vez de debilitarla, así que más potencia solo castiga el aislamiento',
        'Atrajeron rayos',
        'Invirtieron la polaridad',
      ],
      answerIndex: 1,
      explains: 'Thomson había demostrado que el cable se comporta como un condensador: los pulsos llegan emborronados, no débiles. Más voltaje no los afila; perfora un aislamiento que ya estaba dañado.',
    },
    {
      question: '¿Qué hizo el Great Eastern después de tender el cable de 1866?',
      options: [
        'Fue desguazado de inmediato',
        'Volvió a Irlanda con la noticia',
        'Volvió atrás, rescató el cable perdido en 1865 desde cuatro kilómetros de profundidad y lo terminó',
        'Tendió un tercer cable a Francia',
      ],
      answerIndex: 2,
      explains: 'Rastreó el fondo unas dos semanas, enganchó el cable perdido de 1865, lo empalmó y lo llevó hasta Terranova: dos cables atlánticos funcionando en septiembre de 1866.',
    },
    {
      question: '¿Qué transporta hoy casi todos los datos intercontinentales?',
      options: [
        'Los satélites',
        'Los cables submarinos',
        'La radio de largo alcance',
        'Las torres de microondas',
      ],
      answerIndex: 1,
      explains: 'Cables acorazados en el fondo del mar, muchas veces por rutas cartografiadas en el siglo XIX. Los enlaces por satélite llevan una fracción pequeña y tienen mucha peor latencia.',
    },
  ],

  sources: [
    {
      id: 'thomson-1855',
      kind: 'paper',
      author: 'William Thomson (Lord Kelvin)',
      title: 'On the Theory of the Electric Telegraph',
      year: 1855,
      detail: 'Proceedings of the Royal Society of London, vol. 7, pp. 382–399',
      note: 'La física que decidió el proyecto: un cable sumergido ensancha el pulso en vez de solo debilitarlo, lo que fija un límite de velocidad y descarta la fuerza bruta.',
    },
    {
      id: 'joint-committee-1861',
      kind: 'primary',
      author: 'Board of Trade and the Atlantic Telegraph Company',
      title: 'Report of the Joint Committee appointed to inquire into the construction of submarine telegraph cables',
      year: 1861,
      detail: 'HMSO, Londres, 1861',
      note: 'La autopsia de 1858: fabricación, almacenaje, pruebas y la cuestión del voltaje, examinadas en público. Es la razón de que el cable de 1866 se construyera de otra manera.',
    },
    {
      id: 'russell-1865',
      kind: 'primary',
      author: 'William Howard Russell, illustrated by Robert Dudley',
      title: 'The Atlantic Telegraph',
      year: 1865,
      detail: 'Day & Son, Londres; relato de la expedición del Great Eastern de 1865',
      note: 'Un corresponsal de guerra en cubierta, contratado para dejar constancia del intento. Testigo y propaganda a la vez: léase por la escena, no por el veredicto.',
    },
    {
      id: 'standage-1998',
      kind: 'book',
      author: 'Tom Standage',
      title: 'The Victorian Internet',
      year: 1998,
      detail: 'Walker & Company. ISBN 978-0-8027-1342-4',
      note: 'La historia social de la era del telégrafo: saturación, códigos, fraude, romance y la promesa recurrente de que esta vez se acaba la guerra.',
    },
    {
      id: 'gordon-2002',
      kind: 'book',
      author: 'John Steele Gordon',
      title: 'A Thread Across the Ocean: The Heroic Story of the Transatlantic Cable',
      year: 2002,
      detail: 'Walker & Company. ISBN 978-0-8027-1364-6',
      note: 'El relato de los cuatro intentos, la financiación y los personajes. Muy fuerte en Field y en lo cerca que estuvo el proyecto de terminar tras 1858.',
    },
    {
      id: 'headrick-1991',
      kind: 'book',
      author: 'Daniel R. Headrick',
      title: 'The Invisible Weapon: Telecommunications and International Politics 1851–1945',
      year: 1991,
      detail: 'Oxford University Press. ISBN 978-0-19-506273-9',
      note: 'Qué significaba ser dueño de los cables: interceptación, censura y los cortes de 1914. La mitad política de una historia que suele contarse como ingeniería.',
    },
  ],
}
