import type { Story } from '../../types'

export const alKhwarizmiEs: Story = {
  slug: 'al-khwarizmi',
  title: 'El hombre que se convirtió en palabra',
  subtitle: 'Al-Juarismi — el sabio cuyo nombre mal copiado hace funcionar todas las máquinas.',
  hook: 'Cada máquina de la tierra funciona con algoritmos, y la palabra es el nombre de un hombre que murió hace mil doscientos años.',
  era: 'medieval',
  years: [780, 850],
  regions: ['Bagdad', 'Asia Central', 'al-Ándalus'],
  nodes: ['al-khwarizmi', 'algebra', 'algorithm', 'house-of-wisdom', 'baghdad'],
  tags: ['mathematics', 'science', 'islamic-golden-age', 'computing', 'ideas'],
  readingMinutes: 9,
  reviewed: '2026-08-03',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'Cada máquina de la tierra funciona con una palabra, y la palabra es el nombre de un hombre.' },
    { beat: 'hook', text: 'Murió hace mil doscientos años, y los copistas escribieron mal su nombre.' },
    { beat: 'worldBefore', text: 'Prueba a multiplicar 148 por 39 en números romanos — CXLVIII por XXXIX.' },
    { beat: 'worldBefore', text: 'No puedes, porque no hay columnas que alinear' },
    { beat: 'worldBefore', text: 'ni ningún símbolo para la nada,' },
    { beat: 'worldBefore', punch: true, text: 'así que la aritmética no es algo que haces. Es alguien a quien contratas.' },
    { beat: 'problem', kicker: '762', text: 'Entonces Bagdad se levanta de un terreno vacío, un círculo perfecto,' },
    { beat: 'problem', text: 'la mayor ciudad de la tierra, gobernando un imperio a base de números,' },
    { beat: 'problem', text: 'y en cada pueblo espera el mismo problema: la herencia,' },
    { beat: 'problem', text: 'fracciones exactas, fijadas por ley, en cada muerte,' },
    { beat: 'problem', punch: true, text: 'donde equivocarse no es un error sino una injusticia.' },
    { beat: 'story', kicker: 'hacia 820', text: 'Así que un sabio llamado al-Juarismi escribe un libro para arreglarlo,' },
    { beat: 'story', text: 'y el método entero se reduce a dos movimientos —' },
    { beat: 'story', text: 'restaurar lo que se quitó, y luego equilibrar lo que queda.' },
    { beat: 'story', text: 'En árabe el primero de esos movimientos es al-yabr,' },
    { beat: 'story', punch: true, mark: 'chain', text: 'al-yabr → álgebra.' },
    { beat: 'story', text: 'No hay una x, ni un signo igual, ni notación de ninguna clase;' },
    { beat: 'story', text: 'cada ecuación es una frase y cada demostración un dibujo.' },
    { beat: 'story', punch: true, text: 'No resolvió un problema. Resolvió todos los problemas de esa forma.' },
    { beat: 'whyItHappened', text: 'Y dice sin rodeos para qué lo escribió — no por belleza' },
    { beat: 'whyItHappened', punch: true, text: 'sino para herencias, comercio y cavar canales. El álgebra nació para el papeleo.' },
    { beat: 'consequences', text: 'Luego escribe un segundo libro, sobre las cifras indias y el valor posicional' },
    { beat: 'consequences', text: 'y un pequeño círculo que no representa nada,' },
    { beat: 'consequences', punch: true, text: 'que es como Europa acaba teniendo el cero.' },
    { beat: 'consequences', text: 'Todas las copias árabes de ese libro se pierden — todas —' },
    { beat: 'consequences', text: 'y solo sobrevive una traducción latina, que abre con dos palabras:' },
    { beat: 'consequences', text: 'Dixit Algoritmi. «Dijo al-Juarismi».' },
    { beat: 'consequences', punch: true, text: 'Los lectores lo tomaron por el nombre del método. Era el nombre del hombre.' },
    { beat: 'whyItMatters', text: 'De ahí viene «algoritmo» — pasos tan exactos' },
    { beat: 'whyItMatters', punch: true, mark: 'echo', text: 'que no hace falta entenderlos para seguirlos, que es la única razón por la que una máquina pudo hacerlo.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Prueba a multiplicar 148 por 39 con números romanos. CXLVIII por XXXIX. Adelante.',
        'No puedes, en realidad — no como te enseñaron. No hay columnas que alinear, ni un sitio al que llevarte una cifra, ni símbolo alguno para «aquí no hay nada». Los números romanos son excelentes para anotar un número y casi inútiles para calcular con él.',
        'Así que durante casi toda la historia la aritmética no era algo que se hiciera en papel. Era algo que se hacía con un tablero de cuentas, con piedrecitas en surcos o con los dedos — y había libros que enseñaban posiciones de dedos para números de hasta diez mil. Echar cuentas era una destreza de especialista, como tocar un instrumento.',
        'Lo que significaba que si eras mercader, recaudador o juez repartiendo una herencia, tú no calculabas. Contratabas a alguien que supiera.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Imagínalo así',
        body: 'Imagina que la escritura existiera, pero solo supieran leer los escribas formados — y que cada vez que quisieras saber qué dice una carta tuvieras que buscar a uno y pagarle. Eso era la aritmética durante casi toda la historia humana.',
      },
      sourceIds: ['al-khalili-2010'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'En el año 762, un califa llamado al-Mansur fundó una capital nueva a orillas del Tigris. Se construyó como un círculo perfecto, y en pocas décadas era la mayor ciudad de la tierra. Bagdad.',
        'Un imperio de ese tamaño funciona con números. Hay que medir la tierra y gravarla. Hay que cavar canales con la pendiente correcta. Las rutas comerciales necesitan conversión de moneda. Las horas de oración necesitan astronomía, y la dirección de La Meca necesita geometría esférica desde donde quiera que estés.',
        'Y había un problema al que el Estado abasí se enfrentaba sin parar, en cada pueblo, cada semana: la herencia.',
        'El derecho sucesorio islámico es preciso y fraccionario. La viuda recibe una parte fijada, hijos e hijas reciben partes en una proporción fija, las deudas y los legados se descuentan antes, y todo tiene que cuadrar exactamente. Si te equivocas no has cometido un error aritmético — has cometido una injusticia.',
        'Estos cálculos se resolvían caso por caso, por gente que conocía muchísimos trucos particulares. Lo que nadie tenía era un *método*: un único procedimiento que resolviera no este problema, sino todos los problemas con su misma forma.',
      ],
      sourceIds: ['rashed-2009', 'gutas-1998'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'Sabemos asombrosamente poco de Muḥammad ibn Mūsā al-Juarismi como persona. Hasta su nombre es una pista más que un dato: sugiere que su familia venía de Corasmia, una región de oasis al sur del mar de Aral, aunque una fuente temprana sitúa a los suyos cerca de Bagdad. No existe ningún retrato. Ninguna partida de nacimiento. Tenemos sus libros, y casi nada más.',
        'Lo que sí sabemos es que trabajó en Bagdad en la primera mitad del siglo IX, bajo el califa al-Ma’mūn, en el mundo erudito agrupado en torno a la corte y su biblioteca — la Bayt al-Ḥikma, la Casa de la Sabiduría.',
        'Hacia el año 820 escribió un libro con un título largo que empieza *al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala*: «Compendio de cálculo por restauración y equilibrio».',
        'Esas dos últimas palabras son la idea entera.',
        '**Restaurar** —*al-jabr*— significa que si algo se ha quitado de un lado de una ecuación, lo devuelves, y haces lo mismo en el otro lado. **Equilibrar** —*al-muqābala*— significa que si lo mismo aparece en ambos lados, lo cancelas en los dos.',
        'Suena obvio. Es obvio ahora gracias a este libro. Lo que hizo al-Juarismi fue darse cuenta de que esos dos movimientos, aplicados en orden, reducen cualquier problema de toda una familia a una de seis formas estándar — y luego mostró cómo resolver cada una de las seis, siempre, sin necesidad de inspiración.',
        'Aquí está la parte que sorprende: no hay un solo símbolo en él. Ninguna *x*. Ningún signo igual. Se inventaron siglos después, en Europa. Al-Juarismi escribía cada ecuación con palabras —«un cuadrado y diez raíces son iguales a treinta y nueve dirhams»— y demostraba cada solución con un diagrama geométrico, completando literalmente un cuadrado.',
        'También te decía por qué lo había escrito. No por gloria, ni por las matemáticas en sí: por lo que la gente necesita, dijo, en casos de herencias, legados, particiones, pleitos y comercio, y al medir tierras y cavar canales.',
        'El álgebra se inventó para las testamentarías.',
        'Después escribió un segundo libro, y puede que este importara todavía más. Explicaba un sistema de cálculo que había aprendido de fuentes indias — nueve cifras, un sistema de valor posicional y un pequeño círculo para marcar una columna vacía. El cero.',
        'El original árabe de ese libro está perdido. Todas las copias. Lo que sobrevive es una traducción latina hecha en la España del siglo XII, y el traductor la abrió nombrando su fuente de la única manera que le permitían las letras latinas: *Dixit Algoritmi*. «Dijo al-Juarismi».',
        'Los lectores latinos tomaron «Algoritmi» por el nombre del método y no por el del hombre. Calcular a la nueva manera —con cifras, en columnas, sobre papel— era hacer *algorismo*. En castellano la misma raíz dejó otra huella: «guarismo», que sigue significando cifra. La palabra sobrevivió, se desplazó, se endureció, y para el siglo XX significaba cualquier procedimiento exacto que produce un resultado sin exigir que quien lo sigue entienda por qué funciona.',
        'Que es precisamente la propiedad que permite que lo siga una máquina.',
      ],
      aside: {
        kind: 'number',
        label: 'Las seis formas',
        body: 'Al-Juarismi necesitaba seis tipos estándar de ecuación donde nosotros necesitamos uno. En notación moderna son todos casos de ax² + bx + c = 0 — pero los números negativos no se aceptaban como coeficientes, así que «cuadrados iguales a raíces» y «cuadrados más raíces iguales a números» había que tratarlos como problemas genuinamente distintos.',
      },
      sourceIds: ['khwarizmi-820', 'rosen-1831', 'rashed-2009'],
    },

    whyItHappened: {
      heading: 'Por qué pasó allí',
      paragraphs: [
        'En todos los siglos aparecen grandes matemáticos. Lo que Bagdad tenía era un sistema para conservar su trabajo.',
        '**El Estado pagó traducciones durante doscientos años.** Desde mediados del siglo VIII la corte abasí financió un esfuerzo sostenido para verter al árabe la ciencia griega, persa y sánscrita. No era la afición de un califa ilustrado — sobrevivió a gobernantes concretos, sacó dinero de cortesanos, generales y familias mercantiles, y pagó a los traductores tarifas profesionales. Euclides, Ptolomeo, Arquímedes, Galeno y Aristóteles entraron todos por ahí.',
        '**El papel abarató copiar.** El papel llegó al mundo islámico desde China durante el siglo VIII, y Bagdad tenía molinos a finales de él. El pergamino requería un rebaño; el papel requería trapos. El coste de conservar una idea cayó un orden de magnitud, y el número de ideas que sobrevivieron subió a juego.',
        '**El imperio conectó tradiciones que nunca se habían encontrado.** La geometría griega, la aritmética india y la astronomía persa llegaron a la misma ciudad, en la misma lengua, en una generación. Los dos grandes libros de al-Juarismi son exactamente ese choque: demostración geométrica griega aplicada a cifras indias para resolver problemas planteados por el derecho islámico.',
        '**Y las preguntas eran prácticas.** Estas matemáticas se financiaron porque respondían a cosas que el Estado y el mercado necesitaban de verdad responder. Eso no es una limitación. Es la razón de que alguien las pagara.',
      ],
      sourceIds: ['gutas-1998', 'saliba-2007'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'Un método, a diferencia de un problema resuelto, no hay que redescubrirlo. Esa es la diferencia que trajo esto.',
      ],
      shortTerm: [
        'Los cálculos de herencias, impuestos y comercio ganaron un procedimiento estándar, y el propio libro de al-Juarismi dedica una sección larga a casos jurídicos resueltos.',
        'Los números indoarábigos empezaron a extenderse por el mundo de habla árabe, llegando con un manual y no como curiosidad.',
        'Sus tablas astronómicas, el Zīj al-Sindhind, y su revisión de la geografía de Ptolomeo dieron al Estado abasí obras de referencia propias y utilizables.',
      ],
      longTerm: [
        'En el Toledo y la Segovia del siglo XII, traductores latinos como Roberto de Chester y Gerardo de Cremona vertieron el álgebra al latín, y Europa adquirió una disciplina que no tenía.',
        'En 1202 Fibonacci, criado entre mercaderes en el norte de África, publicó el Liber Abaci — que vendió las nuevas cifras a los comerciantes europeos con ejemplos resueltos de pérdidas y ganancias. El comercio las adoptó mucho antes que las universidades.',
        'En cuanto los números se pudieron escribir en columnas alineadas y sumar deprisa, la partida doble se volvió practicable — y con ella la sociedad por acciones auditable.',
        '«Al-jabr» dio álgebra; «Algoritmi» dio algoritmo, y en castellano también guarismo. Palabras de uso diario, una de ellas el concepto que organiza una industria entera.',
      ],
      unexpected: [
        'En español, un *algebrista* fue durante siglos un componedor de huesos — alguien que devuelve las partes rotas a su sitio. Cervantes usa la palabra así en el Quijote. Es el mismo *al-jabr*: restaurar.',
        'El libro que dio a la informática su palabra central sobrevive solo en traducción. No se conoce ni un manuscrito árabe de la aritmética de al-Juarismi.',
        'Los mongoles, retratados como destructores de la ciencia islámica, fundaron el observatorio más avanzado del mundo en Maraghe menos de un año después de saquear Bagdad — y lo dotaron con el astrónomo que habían capturado allí.',
        'Al-Juarismi tiene un cráter en la cara oculta de la Luna.',
      ],
      sourceIds: ['rashed-2009', 'saliba-2007', 'al-khalili-2010'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'Cada programa que has usado en tu vida es un montón de algoritmos. La palabra significa lo que era el método de al-Juarismi: una secuencia de pasos tan completamente especificada que seguirla no exige ningún juicio.',
        'Esa propiedad es lo que hizo posibles los ordenadores. Una máquina no puede entender un problema. Solo puede seguir un procedimiento. Novecientos años antes de que nadie construyera uno, al-Juarismi había establecido que toda una clase de problemas podía reducirse a procedimientos — y esa es la suposición desde la que sigue trabajando cualquier programador.',
        'Hay una segunda cosa que merece la pena llevarse de aquí, y va sobre cómo viaja de verdad el conocimiento.',
        'La geometría griega sobrevivió porque unos sabios de lengua árabe decidieron copiarla. La aritmética india llegó a Europa porque un matemático de nombre persa en Bagdad escribió un manual. Ese manual llegó a Inglaterra a través de España, en latín, traducido por gente que trabajaba codo con codo con colegas musulmanes y judíos en una ciudad que acababa de cambiar de manos.',
        'Ni un solo paso de esa cadena era inevitable. Las ideas no se difunden porque sean buenas. Se difunden porque personas concretas, casi siempre por razones prácticas propias, deciden llevarlas.',
      ],
      sourceIds: ['saliba-2007', 'gutas-1998'],
    },
  },

  timeline: [
    { year: 628, title: 'Brahmagupta escribe las reglas del cero', detail: 'En el Brāhmasphuṭasiddhānta el cero se trata como un número con el que se puede calcular, no como un mero hueco.', pivotal: true },
    { year: 751, title: 'El papel empieza a moverse hacia el oeste', detail: 'La fabricación de papel se extiende al mundo islámico durante el siglo VIII; Bagdad tiene molinos hacia 795. La historia de que unos papeleros chinos capturados enseñaron el oficio tras la batalla de Talas es una tradición posterior.', confidence: 'contested' },
    { year: 762, title: 'Se funda Bagdad', detail: 'Al-Mansur levanta una nueva capital circular sobre el Tigris. En décadas es la mayor ciudad de la tierra.', pivotal: true },
    { year: 780, title: 'Nace al-Juarismi', detail: 'Probablemente en Corasmia o procedente de allí, al sur del mar de Aral. La fecha es estimada; casi nada de su vida está documentado.', confidence: 'contested' },
    { year: 813, title: 'Al-Ma’mūn llega al califato', detail: 'Su reinado marca el momento álgido del mecenazgo estatal a la traducción y a las ciencias.' },
    { year: 820, title: 'El libro sobre al-jabr y al-muqābala', detail: 'Restaurar y equilibrar: dos movimientos que reducen toda una familia de problemas a seis formas resolubles. Escrito enteramente con palabras, demostrado con geometría.', pivotal: true },
    { year: 825, title: 'El libro sobre el cálculo indio', detail: 'Nueve cifras, valor posicional y cero, explicados como método de trabajo. El original árabe está perdido.', pivotal: true },
    { year: 830, title: 'Kitāb ṣūrat al-arḍ', detail: 'Su revisión de la geografía de Ptolomeo, corrigiendo coordenadas de las tierras que los abasíes gobernaban de verdad.' },
    { year: 850, title: 'Muere al-Juarismi', detail: 'La fecha, como la del nacimiento, es aproximada.' },
    { year: 1145, title: 'Roberto de Chester traduce el álgebra al latín', detail: 'Trabajando en Segovia. Gerardo de Cremona produce otra versión en Toledo. Europa adquiere el álgebra.', pivotal: true },
    { year: 1202, title: 'Fibonacci publica el Liber Abaci', detail: 'Las nuevas cifras vendidas a los mercaderes mediante problemas resueltos de beneficio, interés y cambio de moneda.' },
    { year: 1258, title: 'Los mongoles toman Bagdad', detail: 'La ciudad cae en trece días y el califa muere. Qué le hizo esto a la ciencia islámica se discute hasta hoy.', pivotal: true },
    { year: 1259, title: 'Se funda el observatorio de Maraghe', detail: 'Hulagu lo financia, y Nasir al-Din al-Tusi —capturado en Bagdad— lo dirige. Llega a ser el observatorio más avanzado del mundo.' },
    { year: 1494, title: 'Pacioli codifica la partida doble', detail: 'La Summa de arithmetica describe el método veneciano; la contabilidad de la empresa moderna empieza aquí.' },
    { year: 1843, title: 'La palabra se vuelve mecánica', detail: 'Ada Lovelace publica un procedimiento paso a paso pensado para que lo ejecute una máquina — un algoritmo en el sentido moderno.' },
    { year: 1936, title: 'Turing lo hace preciso', detail: 'La computabilidad define exactamente qué puede ser un algoritmo, y da a la palabra su sentido técnico definitivo.' },
  ],

  causeEffect: [
    { cause: 'Un imperio necesita medir tierras, tasar impuestos y repartir herencias', effect: 'El Estado financia matemáticas prácticas', because: 'El derecho sucesorio es fraccionario e implacable, y en cada pueblo hacía falta que las cuentas salieran bien.' },
    { cause: 'La corte abasí financia traducciones durante dos siglos', effect: 'La ciencia griega, india y persa llega en una sola lengua', because: 'A los traductores les pagaban tarifas profesionales mecenas de toda la élite, no solo el califa.' },
    { cause: 'Llega el papel desde China', effect: 'Copiar un libro deja de ser un lujo', because: 'El pergamino necesitaba ganado; el papel necesitaba trapos, y trapos había en todas partes.' },
    { cause: 'Al-Juarismi reduce los problemas a seis formas estándar', effect: 'Las matemáticas ganan métodos generales en vez de trucos particulares', because: 'Un procedimiento se puede enseñar y reutilizar; una solución ingeniosa a un problema, no.' },
    { cause: 'Los escribas latinos escriben su nombre como «Algoritmi»', effect: 'La palabra «algoritmo» entra en las lenguas europeas', because: 'Los lectores tomaron el nombre transliterado por el nombre del propio método.' },
    { cause: 'Los traductores de Toledo pasan la ciencia árabe al latín', effect: 'Las universidades europeas adquieren álgebra y astronomía', because: 'La España del siglo XII era donde los sabios que leían árabe y los que escribían latín estaban en la misma sala.' },
    { cause: 'Las columnas alineadas de cifras hacen rápida la aritmética', effect: 'La partida doble se vuelve practicable', because: 'Un libro que cuadra exige sumar columnas largas deprisa y sin fallos.' },
  ],

  myths: [
    {
      myth: 'La Casa de la Sabiduría era una enorme universidad de investigación con la mayor biblioteca del mundo.',
      reality: 'Las pruebas sobre la Bayt al-Ḥikma son escasas. Parece haber sido una biblioteca palaciega y una actividad de traducción vinculada a la corte abasí — real y útil, pero no la academia de la leyenda. La versión grandiosa se formó sobre todo en relatos modernos.',
      whyItPersists: 'Es una imagen magnífica, y rellena un hueco donde las fuentes callan de forma frustrante.',
      sourceIds: ['gutas-1998'],
    },
    {
      myth: 'Los sabios árabes se limitaron a preservar el saber griego hasta que Europa estuvo lista.',
      reality: 'Lo corrigieron. La astronomía de Ptolomeo se contrastó con observaciones nuevas y se revisó; la óptica, el álgebra y la trigonometría se construyeron en buena medida, no se copiaron. El álgebra de al-Juarismi no tiene precedente griego con esa forma.',
      whyItPersists: 'Permite que la historia de la ciencia vaya en línea recta de Atenas a Europa, con un periodo de custodia en medio.',
      sourceIds: ['saliba-2007', 'rashed-2009'],
    },
    {
      myth: 'La ciencia islámica murió cuando los mongoles saquearon Bagdad en 1258.',
      reality: 'En menos de un año los mongoles financiaban el observatorio de Maraghe, cuyos astrónomos produjeron modelos que algunos historiadores sostienen que llegaron a Copérnico. La astronomía y las matemáticas siguieron a gran nivel durante siglos.',
      whyItPersists: 'Una sola fecha dramática es más fácil de enseñar que un cambio largo, desigual y todavía discutido.',
      sourceIds: ['saliba-2007'],
    },
    {
      myth: 'Al-Juarismi inventó los números que llamamos arábigos.',
      reality: 'Las cifras y el sistema posicional venían de la India, y él lo dice — el título latino de su libro es literalmente «sobre los números indios». Su aportación fue el método y el manual, que es por lo que viajaron.',
      whyItPersists: 'Las cifras llegaron a Europa por vía árabe, así que Europa las nombró por el mensajero.',
      sourceIds: ['rashed-2009'],
    },
  ],

  disagreements: [
    {
      question: '¿De dónde era realmente al-Juarismi?',
      positions: [
        { view: 'De Corasmia, en Asia Central, como indica su nombre.', heldBy: 'La lectura mayoritaria, siguiendo su nisba' },
        { view: 'De Qutrubbull, cerca de Bagdad — el historiador al-Ṭabarī le da esa nisba adicional.', heldBy: 'Una posición minoritaria basada en una sola fuente temprana' },
      ],
      atlasPosition: 'El atlas dice que su nombre apunta a Corasmia y que una fuente temprana lo complica. No afirma un lugar de nacimiento.',
    },
    {
      question: '¿Influyó la astronomía de Maraghe en Copérnico?',
      positions: [
        { view: 'Sí — los recursos matemáticos que usa Copérnico aparecen antes en Maraghe, y existían rutas de transmisión por Bizancio e Italia.', heldBy: 'George Saliba, F. Jamil Ragep y otros', sourceId: 'saliba-2007' },
        { view: 'Sin probar — el parecido es real, pero no se ha encontrado ningún documento que muestre a Copérnico leyendo esos textos.', heldBy: 'Los escépticos de la tesis de la transmisión' },
      ],
      atlasPosition: 'Se presenta como cuestión abierta. El atlas afirma el parecido, que no se discute, y etiqueta la transmisión como no probada.',
    },
  ],

  didYouKnow: [
    'Al-Juarismi escribió álgebra sin un solo símbolo — ni x, ni signo igual. Cada ecuación es una frase, y cada demostración un dibujo.',
    'Él mismo cuenta en su prólogo que lo escribió para pleitos de herencias, litigios, comercio y excavación de canales.',
    'El original árabe de su aritmética está completamente perdido. Sobrevive solo porque alguien en España lo tradujo al latín trescientos años después.',
    'En español, un «algebrista» era antes un componedor de huesos — quien devuelve lo roto a su sitio, de la misma raíz que álgebra.',
    'La palabra castellana «guarismo» sale del mismo nombre, por la misma vía latina que dio «algoritmo».',
    'Al-Ma’mūn mandó equipos a medir la longitud de un grado de latitud en las llanuras de Sinyar para calcular el tamaño de la Tierra. Su respuesta se acercó bastante.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'En el Bagdad del siglo IX, un sabio llamado al-Juarismi escribió un libro sobre resolver ecuaciones «restaurando y equilibrando» — al-jabr y al-muqābala. La primera de esas palabras se convirtió en «álgebra».',
        'Su hallazgo fue que toda una familia de problemas podía reducirse a seis formas estándar, cada una con un procedimiento fiable. No una respuesta ingeniosa a una pregunta: un método para todas. Lo escribió por razones prácticas — derecho sucesorio, comercio, medición de tierras.',
        'Escribió un segundo libro explicando las cifras indias: nueve dígitos, valor posicional y cero. El original árabe está perdido, pero sobrevive una traducción latina que abre con «Dixit Algoritmi» — «Dijo al-Juarismi». Los lectores latinos confundieron el nombre con el método.',
        'De ahí viene «algoritmo». Acabó significando un procedimiento tan exactamente especificado que seguirlo no exige entenderlo — que es exactamente lo que hace un ordenador.',
      ],
    },
    {
      id: 'age-16',
      label: 'Explícamelo con 16 años',
      kind: 'age',
      paragraphs: [
        'El salto conceptual va de *soluciones* a *procedimientos*. Antes de al-Juarismi, resolver una ecuación significaba encontrar el truco que servía para esa ecuación. Después de él, significaba clasificar la ecuación en una de seis formas canónicas y aplicar el algoritmo indicado para esa forma.',
        'Las dos operaciones son transformaciones que preservan la igualdad. Al-jabr elimina una cantidad restada sumándola a ambos lados; al-muqābala cancela términos iguales que aparecen en los dos. Aplicadas en secuencia, normalizan una cuadrática arbitraria en una de las seis formas — necesario porque no se admitían coeficientes negativos, así que lo que hoy escribimos como una ecuación tenía que ser seis.',
        'Las demostraciones son geométricas, no simbólicas. Para resolver x² + 10x = 39 construye un cuadrado real, añade cuatro rectángulos de ancho 10/4 a lo largo de sus lados y completa la figura con cuatro cuadraditos en las esquinas. «Completar el cuadrado» no es una metáfora; es una construcción.',
        'La transmisión importa tanto como las matemáticas. La traducción latina de Roberto de Chester en 1145 le dio a Europa el álgebra, y la latinización de su nombre le dio «algoritmo» — una palabra que solo adquirió mucho después su sentido moderno de procedimiento mecánicamente ejecutable, vía Lovelace y Turing.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'La edición de Rashed establece el Kitāb al-jabr como texto fundacional del álgebra en tanto disciplina autónoma: su objeto no es el número ni la magnitud sino la ecuación misma, tratada como algo que hay que clasificar y transformar. Ese movimiento reflexivo —las matemáticas tomando sus propias operaciones como materia— es lo que lo distingue de Diofanto y de la tradición babilónica de problemas.',
        'Gutas reencuadra el movimiento de traducción como fenómeno social sostenido y no como episodio de entusiasmo califal: financiado por toda la élite abasí, impulsado por necesidades políticas e ideológicas identificables y prolongado unos dos siglos. Eso desinfla notablemente a la Bayt al-Ḥikma como institución a la vez que refuerza el caso del programa más amplio.',
        'La intervención de Saliba apunta directamente al relato de la «preservación»: sostiene que la tradición astronómica que culmina en Maraghe constituyó un programa de investigación crítico dirigido a defectos conocidos de los modelos ptolemaicos, y que el aparato matemático que reaparece en De revolutionibus justifica una hipótesis de transmisión, incluso sin canal documentado.',
        'La cautela historiográfica que conviene llevarse: el registro biográfico de al-Juarismi está esencialmente vacío, y la tentación persistente es proyectar la grandeza institucional de los relatos posteriores sobre una figura que solo conocemos por cuatro obras conservadas.',
      ],
    },
    {
      id: 'computing',
      label: 'El ángulo informático',
      kind: 'angle',
      paragraphs: [
        'La palabra «algoritmo» pasó casi toda su vida significando algo más estrecho que hoy: hacer algorismo era simplemente calcular con cifras indoarábigas en vez de con ábaco.',
        'Su generalización llegó cuando hizo falta un nombre para lo que una máquina podía seguir. Las notas de Ada Lovelace de 1843 contienen un procedimiento completamente especificado para que la Máquina Analítica calculara números de Bernoulli. El artículo de Turing de 1936 hizo exacta la noción al definir qué podía computarse por medios mecánicos.',
        'Lo que sobrevive del siglo IX es la propiedad de fondo, y es extraña: un algoritmo tiene que funcionar sin ser entendido. La persona —o la máquina— que lo ejecuta no necesita ningún modelo de por qué los pasos son correctos. La corrección es una propiedad del procedimiento, no de quien lo ejecuta.',
        'Esa separación es el cimiento entero de la informática. También es la razón de que un algoritmo pueda estar mal de maneras que nadie nota durante años: nada en su ejecución exige que alguien esté pensando en lo que significa.',
      ],
    },
    {
      id: 'transmission',
      label: 'Cómo viajó el conocimiento',
      kind: 'angle',
      paragraphs: [
        'Sigue una sola idea y te sale un mapa del mundo medieval.',
        'El cero y el valor posicional se trabajan en la India y los deja escritos Brahmagupta en 628. Llegan a Bagdad con textos astronómicos sánscritos en el siglo VIII. Al-Juarismi escribe el manual hacia 825.',
        'El manual viaja al oeste por el norte de África hasta al-Ándalus. En el siglo XII, en Toledo y Segovia —ciudades donde sabios árabes, latinos y hebreos trabajaban en las mismas instituciones— se traduce al latín. Hacia 1202 Fibonacci, que aprendió el sistema de niño en Bugía, escribe la versión que convence a los mercaderes italianos.',
        'Cuatro lenguas, cinco siglos, y en cada paso alguien tenía una razón práctica para molestarse: un califa necesitaba tablas, un traductor necesitaba un encargo, un mercader necesitaba calcular intereses. Nadie en la cadena intentaba construir el mundo moderno.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Echar cuentas, antes y después',
    before: {
      title: 'Con números romanos y un tablero de cuentas',
      points: [
        'El cálculo se hace en un aparato físico — ábaco, tablero o dedos',
        'No queda registro escrito del proceso, solo del resultado',
        'No hay símbolo para un lugar vacío',
        'Multiplicar y dividir son destrezas de especialista',
        'Los errores no se pueden rastrear, porque no hay rastro',
      ],
    },
    after: {
      title: 'Con cifras, valor posicional y cero',
      points: [
        'El cálculo se hace en papel, en columnas alineadas',
        'El proceso queda escrito y otra persona puede comprobarlo',
        'El cero ocupa un lugar vacío, así que 105 no se lee como 15',
        'El mismo procedimiento sirve para números de cualquier tamaño',
        'Los errores se pueden encontrar — que es lo que hace posible auditar',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si los traductores latinos hubieran escrito bien su nombre?',
      reasoning: 'La disciplina existiría igual y los procedimientos serían idénticos. Simplemente los llamaríamos de otra manera — el latín para «el arte indio de calcular» ya circulaba como nombre rival.',
      constraint: 'Esta de verdad es solo una palabra. Es un buen recordatorio de que la palabra no es el logro: el logro es la idea de que una clase de problemas puede reducirse a un procedimiento fijo.',
    },
    {
      question: '¿Y si los abasíes no hubieran financiado nunca el movimiento de traducción?',
      reasoning: 'Se habría perdido del todo una cantidad considerable de ciencia griega — varias obras de Euclides, Ptolomeo, Galeno y otros sobreviven hoy solo en árabe. La recuperación europea del siglo XII tuvo que llegar por el árabe porque el griego, en muchos casos, ya no estaba.',
      constraint: 'Bizancio conservaba manuscritos griegos, y algo de transmisión habría ocurrido más tarde y más delgada. La pérdida habría sido grave más que total — lo cual sigue siendo una diferencia enorme.',
    },
  ],

  quiz: [
    {
      question: '¿Qué significan realmente «al-jabr» y «al-muqābala»?',
      options: [
        'Sumar y restar',
        'Restaurar y equilibrar',
        'Contar y medir',
        'Elevar al cuadrado y sacar la raíz',
      ],
      answerIndex: 1,
      explains: 'Al-jabr devuelve a ambos lados una cantidad restada; al-muqābala cancela los términos que aparecen en los dos. Juntos reducen una ecuación a una forma estándar resoluble.',
    },
    {
      question: '¿Por qué necesitaba al-Juarismi seis tipos de ecuación cuadrática donde nosotros necesitamos uno?',
      options: [
        'No había descubierto la fórmula cuadrática',
        'La escritura árabe no podía expresar ecuaciones generales',
        'No se aceptaban números negativos como coeficientes, así que los casos no podían juntarse',
        'Estaba siguiendo seis fuentes griegas distintas',
      ],
      answerIndex: 2,
      explains: 'Sin coeficientes negativos, «cuadrados más raíces igual a números» y «cuadrados igual a raíces más números» son problemas genuinamente distintos, cada uno con su procedimiento.',
    },
    {
      question: '¿De dónde viene la palabra «algoritmo»?',
      options: [
        'De una palabra griega para contar',
        'Del latín para «un paso»',
        'Del título de su libro sobre ecuaciones',
        'De los escribas latinos escribiendo su nombre como «Algoritmi»',
      ],
      answerIndex: 3,
      explains: 'La traducción latina de su aritmética abre con «Dixit Algoritmi» — «Dijo al-Juarismi». Los lectores tomaron el nombre por el nombre del método.',
    },
    {
      question: '¿Para qué dijo él que escribía su álgebra?',
      options: [
        'Por la belleza de las matemáticas puras',
        'Para pleitos de herencias, comercio, litigios y medición de tierras',
        'Para la predicción astronómica',
        'Para enseñar a los hijos del califa',
      ],
      answerIndex: 1,
      explains: 'Lo dice en su propio prólogo. El álgebra se construyó como herramienta práctica para la aritmética jurídica y comercial corriente de un Estado grande.',
    },
  ],

  sources: [
    {
      id: 'khwarizmi-820',
      kind: 'primary',
      author: 'Muḥammad ibn Mūsā al-Khwārizmī',
      title: 'al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala',
      year: 820,
      detail: 'Escrito en Bagdad; fecha aproximada',
      note: 'El texto fundacional del álgebra como disciplina. Enteramente verbal, con demostraciones geométricas.',
    },
    {
      id: 'rosen-1831',
      kind: 'primary',
      author: 'Frederic Rosen (translator)',
      title: 'The Algebra of Mohammed ben Musa',
      year: 1831,
      detail: 'Oriental Translation Fund, Londres',
      note: 'La primera traducción al inglés, impresa junto al texto árabe. Sigue siendo la vía más accesible para leer el argumento original.',
    },
    {
      id: 'rashed-2009',
      kind: 'book',
      author: 'Roshdi Rashed',
      title: 'Al-Khwārizmī: The Beginnings of Algebra',
      year: 2009,
      detail: 'Saqi Books. ISBN 978-0-86356-430-7',
      note: 'Edición crítica y comentario; la referencia académica sobre lo que el texto hace realmente.',
    },
    {
      id: 'gutas-1998',
      kind: 'book',
      author: 'Dimitri Gutas',
      title: 'Greek Thought, Arabic Culture: The Graeco-Arabic Translation Movement in Baghdad and Early ʿAbbāsid Society',
      year: 1998,
      detail: 'Routledge. ISBN 978-0-415-06133-2',
      note: 'El relato de referencia sobre el movimiento de traducción, y la fuente de la lectura desinflada de la Casa de la Sabiduría.',
    },
    {
      id: 'saliba-2007',
      kind: 'book',
      author: 'George Saliba',
      title: 'Islamic Science and the Making of the European Renaissance',
      year: 2007,
      detail: 'MIT Press. ISBN 978-0-262-19557-7',
      note: 'Argumenta contra el relato de la «preservación» y a favor de la innovación continuada tras 1258, incluida la tesis de la transmisión de Maraghe.',
    },
    {
      id: 'al-khalili-2010',
      kind: 'book',
      author: 'Jim Al-Khalili',
      title: 'Pathfinders: The Golden Age of Arabic Science',
      year: 2010,
      detail: 'Allen Lane. ISBN 978-1-84614-161-4',
      note: 'Panorámica para público general; útil para el contexto del periodo en conjunto.',
    },
  ],
}
