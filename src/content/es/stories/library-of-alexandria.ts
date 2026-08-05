import type { Story } from '../../types'

export const libraryOfAlexandriaEs: Story = {
  slug: 'library-of-alexandria',
  title: 'La biblioteca que no ardió',
  subtitle: 'Alejandría — la destrucción más famosa de la historia, y ningún autor antiguo la cuenta.',
  hook: 'Todo el mundo sabe que la Biblioteca de Alejandría ardió y se llevó el saber del mundo antiguo. Ninguna fuente antigua describe esa noche, y el final real es peor.',
  era: 'classical',
  category: 'ancient',
  years: [-331, 415],
  regions: ['Egipto', 'Grecia', 'Roma'],
  nodes: ['library-of-alexandria', 'alexandria', 'ptolemaic-egypt', 'eratosthenes', 'julius-caesar'],
  tags: ['knowledge', 'myth', 'egypt', 'greece', 'libraries', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'Todo el mundo sabe que la Biblioteca de Alejandría ardió en una noche terrible.' },
    { beat: 'hook', text: 'Ningún autor antiguo describe esa noche. Ni uno.' },
    { beat: 'worldBefore', kicker: 's. III a. C.', text: 'Los Ptolomeos son faraones griegos con capital nueva y algo que demostrar,' },
    { beat: 'worldBefore', text: 'así que montan un instituto de investigación e intentan reunir todos los libros que existen.' },
    { beat: 'worldBefore', punch: true, text: 'A los barcos que atracan en Alejandría los registran — buscando libros, que copian y se quedan.' },
    { beat: 'worldBefore', text: 'Piden prestadas las tragedias oficiales de Atenas con fianza, y también se las quedan.' },
    { beat: 'problem', text: 'Y el trabajo que se hace allí es real. Un bibliotecario mide la tierra' },
    { beat: 'problem', mark: 'spike', text: 'con la sombra de un palo y un pozo del sur, y acierta casi.' },
    { beat: 'problem', punch: true, text: 'Otro escribe el primer catálogo, porque una colección que no se busca es un montón.' },
    { beat: 'story', kicker: '48 a. C.', text: 'Entonces César queda atrapado en el puerto y prende fuego a la flota,' },
    { beat: 'story', text: 'el fuego se extiende, y arden unos libros almacenados junto a los muelles.' },
    { beat: 'story', punch: true, text: 'No la Biblioteca. Unos libros. La distinción tarda dos mil años en perderse.' },
    { beat: 'story', text: 'Un geógrafo la visita veinte años después y describe el sitio funcionando.' },
    { beat: 'story', kicker: '272 d. C.', text: 'El barrio donde estaba se destruye en una guerra. Luego cae un templo en 391,' },
    { beat: 'story', text: 'y los relatos de aquello no mencionan ningún libro.' },
    { beat: 'whyItHappened', punch: true, mark: 'echo', text: 'Porque el final no fue un incendio. Fue un presupuesto.' },
    { beat: 'whyItHappened', text: 'El papiro se pudre. Un rollo dejado dos siglos a su aire es polvo,' },
    { beat: 'whyItHappened', text: 'así que una biblioteca no es un edificio. Es una nómina de gente copiando.' },
    { beat: 'whyItHappened', text: 'La dinastía decae, los sabios son expulsados en una purga,' },
    { beat: 'whyItHappened', punch: true, text: 'y después de eso ya nadie paga a nadie por copiar nada.' },
    { beat: 'consequences', text: 'Lo que perdimos, lo perdimos despacio, y sobre todo por indiferencia.' },
    { beat: 'consequences', text: 'De ciento veinte obras de Sófocles sobreviven siete.' },
    { beat: 'consequences', punch: true, text: 'Nadie quemó las otras ciento trece. Simplemente dejaron de copiarse.' },
    { beat: 'whyItMatters', text: 'El incendio es la historia cómoda, porque un incendio tiene culpable,' },
    { beat: 'whyItMatters', text: 'y un culpable significa que nosotros no podríamos haberlo evitado.' },
    { beat: 'whyItMatters', punch: true, text: 'El saber muere de verdad cuando alguien decide que conservarlo cuesta demasiado.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Alejandro fundó Alejandría en el 331 a. C. y murió ocho años después. Su general Ptolomeo se quedó Egipto, se hizo faraón y fundó una dinastía de gobernantes de habla griega que administraban la civilización más antigua del Mediterráneo y eran agudamente conscientes de ser nuevos.',
        'Su respuesta a eso fue la cultura, financiada a escala imperial. Hacia el 290 a. C. —la fecha exacta no consta, lo que ya es un aviso sobre todo lo que sigue— fundaron el Museion, literalmente un santuario de las Musas, que funcionaba entre templo, instituto de investigación y club de comidas muy bueno. Los sabios vivían allí, cobraban un sueldo, estaban exentos de impuestos y se esperaba que produjeran.',
        'La Biblioteca era parte de esa institución, no una maravilla aparte. Y fue, de verdad, una operación de acopio de ambición sin precedentes. Los barcos que entraban en el puerto eran registrados, y los libros que llevaran se retiraban, se copiaban y —según Galeno, que escribe cuatro siglos después— se devolvía la copia al dueño y el original se quedaba. Se catalogaban como «de los barcos».',
        'La mejor historia de la tradición, si es cierta, es la de las tragedias atenienses. Atenas conservaba los textos oficiales de Esquilo, Sófocles y Eurípides. Ptolomeo III pidió tomarlos prestados para copiarlos y depositó una fianza de quince talentos, una suma enorme. Luego se quedó los originales, devolvió copias y perdió la fianza. Sea cierta o no, que se contara de los Ptolomeos dice cómo se los veía.',
        'Y la erudición no era decorativa. Zenódoto y Aristarco produjeron las ediciones críticas de Homero que determinan el texto que leemos. Calímaco compiló las *Pínakes*, un catálogo en 120 rollos ordenado por materias y autores, discutiblemente el primer catálogo de biblioteca del mundo. Y Eratóstenes, bibliotecario jefe, midió la circunferencia de la tierra por la diferencia de ángulo de las sombras entre Alejandría y Asuán, y le salió una cifra con pocos puntos de error.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Imagínalo',
        body: 'No una sala abovedada con columnas de mármol y un millón de libros: eso es un cuadro del siglo XIX. Piensa en un departamento universitario bien dotado, con investigadores residentes, subvención estatal, una política de adquisiciones agresivísima y salas de estanterías con cajas de rollos. Nadie ha encontrado nunca sus cimientos. No sabemos con certeza en qué punto de la ciudad estaba.',
      },
      sourceIds: ['strabo-geography', 'el-abbadi-1990', 'bagnall-2002'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Empecemos por la cifra, porque la cifra está haciendo un trabajo enorme dentro de la leyenda.',
        'Las fuentes antiguas hablan de entre 40.000 y 700.000 rollos. La Carta de Aristeas, un documento en parte ficticio, dice 200.000 y subiendo. Aulo Gelio dice 700.000. Son cifras salvajemente inconsistentes, y vienen de autores que no estuvieron allí, escribiendo siglos después, en un género donde los números redondos grandes señalaban importancia en vez de contar nada.',
        'Roger Bagnall ha planteado el argumento más afilado contra ellas: intenta calcular qué pudo haber realmente que coleccionar. Coge a todos los autores griegos conocidos anteriores al siglo III a. C., concédeles producciones generosas, añade duplicados y ediciones múltiples, y cuesta llegar a cien mil rollos — y habría hecho falta adquirir, en esencia, todo lo que alguien hubiera escrito jamás en griego. Las cifras mayores describen una colección varias veces más grande que todo el corpus conservado y atestiguado de la literatura griega.',
        'El segundo problema es físico. El papiro no dura. En el clima egipcio, un rollo en uso puede aguantar un siglo o dos antes de volverse inservible; los papiros que nos llegan lo hacen por haber estado enterrados en arena seca, no por haber sido bien cuidados. Una biblioteca de ese tamaño no es, por tanto, un depósito de objetos. Es un proceso industrial continuo de recopia, que exige escribas, papiro y un presupuesto permanente.',
        'Lo que significa que la pregunta interesante sobre la Biblioteca de Alejandría no es qué la destruyó. Es quién pagaba, y hasta cuándo.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: 'Un «rollo» no es un libro. Una obra larga ocupaba muchos rollos; Tucídides pasaba de ocho. Algunos totales antiguos quizá cuenten rollos, otros obras, y algunos puede que no cuenten nada. Cualquier argumento que dependa del tamaño exacto de la colección se apoya en arena.',
        sourceId: 'bagnall-2002',
      },
      sourceIds: ['bagnall-2002', 'aulus-gellius', 'letter-of-aristeas'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'Hay cuatro candidatos habituales para la destrucción, y ninguno hace lo que la leyenda necesita.',
        '**Julio César, 48 a. C.** César llegó a Alejandría persiguiendo a Pompeyo, se enredó en una guerra civil ptolemaica y acabó sitiado en el barrio del palacio con pocas fuerzas. Prendió fuego a los barcos del puerto para que la flota egipcia no se usara contra él, y el fuego se propagó a tierra. Varios autores posteriores dicen que ardieron libros. Séneca dice 40.000; Plutarco dice que el fuego destruyó «la gran biblioteca»; Casio Dión, con más cuidado, dice que ardió un almacén de grano y libros junto a los muelles.',
        'Y aquí está la dificultad. Estrabón, un geógrafo serio, estuvo en Alejandría unos veinte años después, describe el Museion en presente como algo en marcha y no dice absolutamente nada de una catástrofe. Los sabios siguen trabajando allí siglos después. Algo ardió en el 48 a. C., muy probablemente mercancía almacenada para exportación junto al puerto. La institución siguió funcionando.',
        '**Aureliano, 272 d. C.** El emperador sofocó una revuelta en Alejandría y destruyó el Bruquión, el barrio real donde probablemente estaba el Museion. Es el candidato más plausible para el final de la institución original, y casi nadie lo conoce, porque no lleva escena dramática ni villano que valga la pena.',
        '**Teófilo y el Serapeo, 391 d. C.** El obispo de Alejandría encabezó la destrucción del templo de Serapis, que había albergado una «biblioteca hija». Este episodio es real, documentado y violento: multitudes cristianas demoliendo un templo pagano. Pero los relatos que conservamos, incluidos los paganos hostiles, que tenían todos los motivos para mencionarlo, no describen la quema de libros. El consenso académico es que la colección del Serapeo ya se había ido décadas antes.',
        '**El califa Omar, 642 d. C.** La versión célebre: el general árabe pregunta qué hacer con los libros; el califa responde que si coinciden con el Corán sobran y si discrepan son perniciosos, así que quémense igual; y calientan los baños de la ciudad durante seis meses. Es una historia magnífica y aparece por primera vez en el siglo XIII, seiscientos años después, en la obra de Bar Hebreo. Ninguna fuente contemporánea la menciona, incluidos cronistas cristianos que se habrían relamido. Historiadores de toda procedencia la tratan como invención tardía, y fue demostrablemente útil a la polémica de la época de las cruzadas.',
        'Resumen: un incendio portuario que la institución sobrevivió, una guerra civil que nadie recuerda, la destrucción de un templo sin libros dentro y un cuento popular de seis siglos después. Lo único que las fuentes no nos dan es la noche de la que todo el mundo está seguro.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'Estrabón, escribiendo su Geografía hacia el 20 a. C. —dos décadas después del incendio de César—, describe el Museion como parte del complejo palaciego, con su paseo cubierto, su pórtico, su comedor común y sus sabios asalariados bajo un sacerdote nombrado por César. Está haciendo la visita guiada de una institución en funcionamiento, y no menciona ningún desastre.',
        sourceId: 'strabo-geography',
      },
      sourceIds: ['strabo-geography', 'plutarch-caesar', 'bagnall-2002', 'el-abbadi-1990'],
    },

    whyItHappened: {
      heading: 'Qué pasó de verdad',
      paragraphs: [
        'La Biblioteca terminó como suelen terminar las instituciones: la desfinanciaron, y luego la olvidaron, y ninguna de las dos cosas tiene fecha.',
        '**La dinastía dejó de pagar.** El Estado ptolemaico decayó durante los siglos II y I a. C. — asesinatos dinásticos, guerras civiles, injerencia romana, ingresos menguantes. Hacia el 145 a. C. Ptolomeo VIII hizo una purga de los intelectuales alejandrinos; el bibliotecario jefe huyó y los sabios se dispersaron por el mundo griego. Eso suele describirse como un desastre para Alejandría y un regalo para todos los demás, que es exactamente lo que fue, y ocurrió un siglo antes de que llegara César.',
        '**El papiro siguió pudriéndose todo ese tiempo.** Esta es la parte que hace letal, y no solo triste, la desfinanciación. Cada rollo de la colección tenía un reloj encima. Una biblioteca que no se recopia de forma continua no está conservando nada: está sosteniendo un objeto en descomposición hasta que se deshace. Corta los sueldos y la colección no se queda ahí esperando un incendio. Se convierte discretamente en basura en dos o tres generaciones.',
        '**Y Alejandría dejó de ser el único sitio.** Pérgamo construyó una biblioteca rival. Roma construyó varias. Los libros se dispersaron. Para época imperial romana, el centro de gravedad erudito se había movido, y el Museion era una institución entre muchas, no la institución.',
        'Después, en el 272, el barrio donde estaba fue destruido en una guerra, y a esas alturas no está claro cuánto quedaba por destruir.',
        'Todo esto significa que la pregunta famosa —¿quién quemó la Biblioteca de Alejandría?— es la pregunta equivocada, formulada con la forma equivocada. Nadie la quemó. Se dejó que se parara.',
      ],
      sourceIds: ['bagnall-2002', 'el-abbadi-1990'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'Las pérdidas del mundo antiguo son reales y enormes. Simplemente no ocurrieron como cuenta la historia.',
      ],
      shortTerm: [
        'La purga del 145 a. C. dispersó a los sabios de Alejandría por el mundo griego, lo que dañó a Alejandría y enriqueció a Rodas, Pérgamo, Atenas y con el tiempo Roma.',
        'Las ediciones críticas hechas en Alejandría —la de Homero sobre todo— se volvieron los textos de referencia, y son en lo esencial las versiones que nos han llegado.',
        'Alejandría siguió siendo un centro de medicina, astronomía y matemáticas durante siglos después de la mejor época de la Biblioteca: Ptolomeo el astrónomo trabajó allí en el siglo II, Hipatia en el IV.',
        'La vida intelectual de la ciudad se apagó por etapas y no de golpe, con la destrucción del Bruquión en el 272 como corte más nítido.',
      ],
      longTerm: [
        'De unas 120 obras de Sófocles se conservan siete completas. De unas 90 de Esquilo, siete. De las obras de Aristóteles escritas para publicar, casi nada. Esa es la escala real de la pérdida.',
        'Ocurrió por desgaste: las obras dejaron de copiarse porque no se enseñaban, no estaban de moda o no parecían valer el papiro, y en cuanto la última copia se degradó, la obra desapareció.',
        'Lo que sí sobrevivió lo hizo en buena parte porque alguien decidió seguir copiándolo: escribas bizantinos durante mil años, luego el movimiento de traducción abasí vertiendo la ciencia griega al árabe, luego Toledo devolviendo el árabe al latín.',
        'La Biblioteca se convirtió en un símbolo desprendido de su historia: el incendio de Alejandría se invoca en discusiones sobre censura, violencia religiosa, colonialismo y conservación digital, casi siempre por gente que nunca ha tenido motivo para comprobar si pasó.',
      ],
      unexpected: [
        'Nadie sabe dónde estaba la Biblioteca. No se han identificado con seguridad sus cimientos, y buena parte del barrio real de la Alejandría antigua está hoy bajo el agua o bajo la ciudad moderna.',
        'La historia del califa Omar aparece por primera vez en el siglo XIII y se popularizó en Europa durante y después de las cruzadas: una anécdota útil sobre la barbarie musulmana, inventada con seiscientos años de retraso.',
        'A Hipatia, asesinada por una turba en 415, la incorporan rutinariamente a la destrucción de la Biblioteca en las versiones populares. Su muerte es real y espantosa, y no tuvo nada que ver con ninguna biblioteca.',
        'El trabajo de conservación más importante sobre la ciencia griega se hizo siglos después, por traductores de lengua árabe en Bagdad y por monjes cristianos en Constantinopla: es decir, por las dos culturas contra las que suele esgrimirse la leyenda de la biblioteca ardiendo.',
      ],
      sourceIds: ['bagnall-2002', 'el-abbadi-1990'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'La biblioteca ardiendo es una de las historias que contamos con más satisfacción emocional, y conviene preguntarse para qué sirve esa satisfacción.',
        'Un incendio tiene un culpable. César, una turba, un califa, un obispo: alguien hizo esto, en una noche, y de no ser por ellos lo tendríamos todo. Esa historia nos exculpa a todos. Convierte la pérdida del saber antiguo en una atrocidad y no en un fallo de mantenimiento, y las atrocidades son cosas que cometen otros.',
        'El mecanismo real es más gris y mucho más inquietante. El saber murió porque se dejó de copiar. El papiro se pudre; el pergamino se raspa y se reutiliza; una obra que no se enseña en una generación no se copia en la siguiente, y después de eso desaparece por mucho que alguien la hubiera querido. La inmensa mayoría de lo que hemos perdido de la Antigüedad se perdió así, en silencio, por defecto, sin nadie a quien culpar y sin fecha que señalar.',
        'Y ese mecanismo no ha cambiado nada. Todo archivo digital es un rollo de papiro: sobrevive exactamente mientras alguien siga pagando por migrarlo al siguiente formato, en el siguiente soporte, dentro de la siguiente institución. Los formatos se pudren más rápido que el papiro. Lo que llamamos almacenamiento permanente es una suscripción.',
        'Así que la lección útil de Alejandría no es «cuidado con los que queman libros». Es que una biblioteca no es un edificio ni una colección. Es una decisión, renovada de forma continua, de seguir pagando la copia — y el hundimiento que de verdad mata una biblioteca nunca parece un incendio. Parece una partida presupuestaria.',
      ],
      sourceIds: ['bagnall-2002'],
    },
  },

  timeline: [
    { year: -331, title: 'Alejandro funda Alejandría', detail: 'Una ciudad griega nueva en la costa egipcia, situada para dominar el Mediterráneo oriental. Su fundador muere ocho años después.' },
    { year: -290, title: 'Se funda el Museion', detail: 'Los Ptolomeos crean una institución de investigación pagada por el Estado con sabios asalariados y exentos de impuestos. La Biblioteca forma parte de ella. La fecha es aproximada.', pivotal: true, confidence: 'contested' },
    { year: -245, title: 'Calímaco compila las Pínakes', detail: 'Un catálogo de la colección en 120 rollos por materias y autores: discutiblemente el primer catálogo de biblioteca de la historia.' },
    { year: -240, title: 'Eratóstenes mide la tierra', detail: 'El bibliotecario jefe calcula la circunferencia del planeta a partir del ángulo de las sombras en Alejandría y Asuán, y se queda a pocos puntos.', pivotal: true },
    { year: -145, title: 'Ptolomeo VIII purga a los sabios', detail: 'Una purga dinástica echa del país a los intelectuales de Alejandría. El bibliotecario jefe huye. Esta es la herida sobre la que nadie cuenta historias.', pivotal: true },
    { year: -48, title: 'El incendio de César en el puerto', detail: 'Sitiado en el barrio del palacio, César quema la flota; el fuego se extiende y destruye libros almacenados junto a los muelles. La institución continúa.', pivotal: true },
    { year: -20, title: 'Estrabón la visita y la encuentra funcionando', detail: 'El geógrafo describe el Museion en presente —paseo, comedor, sabios asalariados— y no menciona desastre alguno.', pivotal: true },
    { year: 272, title: 'Aureliano destruye el Bruquión', detail: 'El barrio real, donde con más probabilidad estaba el Museion, se destruye al sofocar una revuelta. Es el candidato más sólido para el final.', pivotal: true },
    { year: 391, title: 'Se destruye el Serapeo', detail: 'Multitudes cristianas dirigidas por el obispo Teófilo demuelen el templo de Serapis. Los relatos, incluidos los hostiles, no mencionan libros.' },
    { year: 415, title: 'Asesinan a Hipatia', detail: 'La matemática y filósofa muere a manos de una turba. Las versiones populares lo pegan a la destrucción de la Biblioteca; no tienen relación.' },
    { year: 642, title: 'La conquista árabe de Egipto', detail: 'La ciudad cambia de manos. El cuento del califa Omar mandando quemar los libros aparece seiscientos años después y los historiadores lo rechazan.' },
    { year: 1663, title: 'La historia de Bar Hebreo llega a Europa', detail: 'La anécdota del siglo XIII sobre el califa se imprime en latín y se convierte, durante tres siglos, en el relato estándar del final.' },
  ],

  causeEffect: [
    { cause: 'Unos reyes griegos gobiernan Egipto y se sienten recién llegados', effect: 'Financian la erudición a escala imperial', because: 'El prestigio cultural era la única legitimidad que una dinastía extranjera podía comprar sin más, y tenían la recaudación de Egipto para comprarla.' },
    { cause: 'Se requisan libros de todos los barcos del puerto', effect: 'La colección crece extraordinariamente rápido', because: 'Un Estado dispuesto a confiscar en vez de comprar adquiere a una velocidad que ningún coleccionista privado puede igualar.' },
    { cause: 'El papiro se degrada en uno o dos siglos', effect: 'Una biblioteca debe recopiar sin parar o desaparecer', because: 'Conservar es un proceso y no un estado; un rollo dejado en paz es un rollo camino de ser polvo.' },
    { cause: 'Ptolomeo VIII purga a los sabios en el 145 a. C.', effect: 'Termina el monopolio intelectual de Alejandría', because: 'Los expulsados se llevaron su competencia a Pérgamo, Rodas y Roma, que tenían dinero para contratarlos.' },
    { cause: 'El Estado ptolemaico decae', effect: 'Desaparece el presupuesto de copia', because: 'Escribas asalariados y papiro son un gasto recurrente, y el gasto recurrente es lo primero que recorta un tesoro que mengua.' },
    { cause: 'César quema la flota en el 48 a. C.', effect: 'Arden libros próximos a los muelles', because: 'Un fuego en un puerto se propaga a los almacenes, y Alejandría exportaba papiro y libros como mercancía.' },
    { cause: 'Los autores posteriores necesitan un final dramático único', effect: 'Una decadencia gradual se convierte en una noche legendaria', because: 'Una historia con culpable y fecha se transmite, y una historia sobre mantenimiento aplazado no.' },
  ],

  myths: [
    {
      myth: 'La Biblioteca de Alejandría fue destruida en un solo incendio catastrófico.',
      reality: 'Ninguna fuente antigua describe tal cosa. Hay cuatro candidatos a destrucción repartidos en siete siglos —César en el 48 a. C., Aureliano en 272, el Serapeo en 391, la conquista árabe en 642— y todos fallan ante las pruebas. Estrabón la visita veinte años después del incendio de César y describe una institución en marcha.',
      whyItPersists: 'Una sola noche con un culpable es una historia. Tres siglos de subfinanciación son una condición, y las condiciones no se recuentan.',
      sourceIds: ['bagnall-2002', 'strabo-geography', 'el-abbadi-1990'],
    },
    {
      myth: 'El califa Omar mandó quemar los libros para calentar los baños.',
      reality: 'La historia aparece por primera vez en el siglo XIII, seiscientos años después de la conquista, en Bar Hebreo. Ninguna fuente contemporánea la menciona, incluidos cronistas cristianos con todos los motivos para recogerla. Los historiadores del campo la rechazan, y circuló en Europa como polémica de época de cruzadas.',
      whyItPersists: 'Es vívida, tiene una frase citable y durante siglos fue políticamente útil en Europa. Viveza más utilidad mantienen viva una historia mucho después de que se le hayan ido las pruebas.',
      sourceIds: ['el-abbadi-1990', 'bagnall-2002'],
    },
    {
      myth: 'Tenía medio millón de rollos o más.',
      reality: 'Las cifras antiguas van de 40.000 a 700.000 y son incompatibles entre sí, escritas siglos después por gente que no contó nada. La reconstrucción de Bagnall —coge a todos los autores griegos conocidos y estima con generosidad— cuesta llevarla a cien mil rollos, y eso suponiendo que la colección adquiriera prácticamente todo.',
      whyItPersists: 'Los números enormes y redondos eran un recurso retórico en la Antigüedad y lo son ahora. El tamaño de la pérdida es todo el punto emocional de la leyenda.',
      sourceIds: ['bagnall-2002', 'aulus-gellius'],
    },
    {
      myth: 'Perder la Biblioteca retrasó mil años la ciencia.',
      reality: 'La obra alejandrina más importante se conserva en buena parte, justamente porque se copió en otros sitios: Euclides, la astronomía de Ptolomeo, la medicina de Galeno. Lo que se perdió de la Antigüedad se perdió gradualmente en todo el Mediterráneo, al caer las obras fuera del programa de enseñanza y dejar de copiarse.',
      whyItPersists: 'Hace que un solo suceso cargue con el peso de un proceso difuso, sin dramatismo y mucho mayor, y halaga la idea de que el progreso es frágil de una manera interesante en vez de aburrida.',
      sourceIds: ['bagnall-2002', 'el-abbadi-1990'],
    },
  ],

  disagreements: [
    {
      question: '¿Dañó el incendio de César del 48 a. C. a la propia Biblioteca?',
      positions: [
        { view: 'Sí: varios autores antiguos lo dicen, y Plutarco afirma que el fuego destruyó la gran biblioteca, mientras Séneca da una cifra de 40.000 libros.', heldBy: 'Plutarco, Séneca y una larga tradición que los sigue', sourceId: 'plutarch-caesar' },
        { view: 'No, o no de forma significativa. Estrabón describe el Museion funcionando dos décadas después, los sabios siguen allí siglos, y Casio Dión precisa que era un almacén portuario de grano y libros.', heldBy: 'Bagnall, El-Abbadi y la mayor parte de la investigación actual', sourceId: 'bagnall-2002' },
      ],
      atlasPosition: 'El atlas dice que en el 48 a. C. ardieron libros y que la institución continuó, porque eso es lo que describe el testigo más cercano. Trata la identificación de aquel incendio con la destrucción de la Biblioteca como una confusión posterior.',
    },
    {
      question: '¿Cuándo dejó de existir realmente la Biblioteca?',
      positions: [
        { view: 'En la práctica durante los siglos II y I a. C., por la decadencia ptolemaica y la purga del 145 a. C., y el resto físico se destruyó después casi de forma incidental.', heldBy: 'La lectura de la desfinanciación, siguiendo a Bagnall', sourceId: 'bagnall-2002' },
        { view: 'En el 272 d. C., cuando Aureliano destruyó el barrio del Bruquión, donde estaba el Museion. Hasta entonces hay pruebas de actividad erudita ligada a la institución.', heldBy: 'El-Abbadi y otros que fechan el final en un suceso concreto', sourceId: 'el-abbadi-1990' },
      ],
      atlasPosition: 'El atlas las presenta como compatibles: la institución quedó vaciada por la desfinanciación mucho antes de que se destruyera el barrio que la contenía. No ofrece una fecha única, porque las fuentes no la sostienen.',
    },
  ],

  didYouKnow: [
    'Ninguna fuente antigua describe la destrucción de la Biblioteca de Alejandría. La noche famosa es una deducción muy posterior.',
    'Estrabón recorrió el Museion unos veinte años después del incendio de César y lo describió en marcha, sin mencionar ningún desastre.',
    'A los barcos que atracaban en Alejandría los registraban buscando libros, que se confiscaban y se copiaban. Los ejemplares requisados se catalogaban como «de los barcos».',
    'Se cuenta que Ptolomeo III pidió prestados los textos oficiales atenienses de los grandes trágicos con una fianza enorme, se quedó los originales, devolvió copias y perdió el dinero.',
    'Eratóstenes, bibliotecario jefe, midió la circunferencia de la tierra por el ángulo de las sombras y se quedó a pocos puntos.',
    'El catálogo de la colección hecho por Calímaco ocupaba 120 rollos, y es discutiblemente el primer catálogo de biblioteca de la historia.',
    'La historia del califa Omar quemando los libros para calentar los baños aparece por primera vez seiscientos años después del hecho.',
    'Nadie sabe dónde estaba la Biblioteca. Sus cimientos no se han identificado nunca con seguridad.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'La Biblioteca de Alejandría formaba parte del Museion, una institución de investigación financiada por el Estado y fundada por los faraones griegos de Egipto hacia el 290 a. C. Coleccionaba de forma agresiva —se confiscaban y copiaban libros de los barcos del puerto— y la erudición era real: los textos de referencia de Homero, el primer catálogo de biblioteca y la medición de la tierra de Eratóstenes salen de allí.',
        'No ardió en una noche. Ninguna fuente antigua describe tal cosa. El incendio portuario de César del 48 a. C. destruyó libros almacenados junto a los muelles, pero Estrabón describe la institución funcionando veinte años después. Aureliano destruyó el barrio donde estaba en el 272 d. C. El Serapeo fue demolido en 391, y los relatos no mencionan libros. El cuento del califa Omar quemándolos en 642 aparece seiscientos años después y lo rechazan los historiadores.',
        'Lo que la mató fue el dinero. El papiro se pudre en uno o dos siglos, así que una biblioteca solo sobrevive recopiándose sin parar, lo que exige escribas asalariados. La decadencia ptolemaica, y una purga de sabios en el 145 a. C., acabaron con esa financiación mucho antes que cualquiera de las destrucciones famosas.',
        'Las pérdidas de la Antigüedad son enormes y reales —de las 120 obras de Sófocles se conservan siete—, pero ocurrieron por desgaste, no por incendio.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Seguramente has oído que la biblioteca más grande del mundo ardió una noche y que se perdió todo el saber del mundo antiguo. Es una historia buenísima. Y no es lo que pasó.',
        'La biblioteca era real. Estaba en Egipto, y los reyes de allí pagaban a gente lista para vivir dentro y estudiar, y les gustaba tanto reunir libros que registraban todos los barcos que entraban en el puerto y se quedaban los libros que encontraban.',
        'Y ahora lo que no te cuentan: los libros eran de papiro, que es una especie de papel grueso hecho con juncos, y se pudre. Al cabo de unos cien años, un rollo es prácticamente migas. Así que la única forma de tener una biblioteca es que haya gente copiando todos los libros otra vez, para siempre.',
        'Eso cuesta muchísimo dinero. Y al cabo de unos siglos los reyes se quedaron sin dinero, y encima se enfadaron con la gente lista y echaron a muchos del país. Ya no había nadie pagando las copias.',
        'Así que los libros no ardieron. Simplemente se fueron deshaciendo poco a poco, porque todo el mundo había dejado de cuidarlos. Lo cual es más triste, la verdad — y también es lo que podría volver a pasar, porque todo lo que está en un ordenador también necesita que alguien lo siga copiando.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El giro historiográfico aquí es Bagnall (2002), cuyo argumento es cuantitativo antes que narrativo: reconstruye cotas superiores plausibles para la colección a partir del corpus atestiguado de literatura griega preptolemaica y muestra que las cifras transmitidas son insostenibles por aproximadamente un orden de magnitud. La consecuencia no es solo que los números estén mal, sino que todo el marco de la «pérdida catastrófica» se apoya en ellos.',
        'El problema de fuentes es agudo. No hay ninguna descripción contemporánea de los fondos, la organización ni el final de la Biblioteca. Estrabón (XVII.1.8) es lo más parecido a una autopsia y describe el Museion, no la Biblioteca; Aulo Gelio, Amiano, Plutarco y Séneca escriben todos a gran distancia y dentro de tradiciones que valoraban la magnitud. La Carta de Aristeas es un texto apologético judeohelenístico y no puede tratarse como documental.',
        'Sobre el incendio del 48 a. C., la prueba negativa decisiva es la continuidad de la actividad erudita alejandrina en época romana y el silencio de Estrabón. Casio Dión (XLII.38) precisa la quema de un depósito portuario, cosa coherente con el papel de Alejandría como exportadora de papiro y libros. La formulación de Plutarco es el origen de la confusión.',
        'La tradición del 642 (Bar Hebreo, *Mujtasar ta’rij al-duwal*) es un tópico del siglo XIII sin atestiguación anterior y con una historia de transmisión identificable hacia la polémica europea moderna; El-Abbadi la rastrea. Merece enseñarse precisamente como caso de cómo una historia alcanza estatus canónico sin ninguna base probatoria, y de para qué se pone a trabajar.',
        'Por último, lo sustantivo para la historia del conocimiento: la transmisión manuscrita es un flujo, no un depósito. La supervivencia correlaciona con el estatus curricular — lo que se enseñaba se copiaba, y lo copiado sobrevivió. Eso explica la supervivencia diferencial de Euclides y Galeno frente a, por ejemplo, casi toda la poesía helenística mucho mejor que cualquier relato centrado en sucesos destructivos.',
      ],
    },
    {
      id: 'the-real-mechanism',
      label: 'Cómo mueren de verdad los libros',
      kind: 'angle',
      paragraphs: [
        'Lo interesante de la pérdida de la literatura antigua es que sabemos más o menos cómo funcionó, y no es nada dramático.',
        '**Paso uno: el material caduca.** El papiro en uso dura quizá uno o dos siglos. El pergamino dura más, pero es caro y se raspa y se reutiliza. Nada sobrevive quedándose quieto.',
        '**Paso dos: copiar es caro y selectivo.** El tiempo de un escriba y un stock de material de escritura son costes reales. Nadie lo copia todo; se copia lo que se quiere, que significa lo que se enseña, se cita, se admira o se exige legalmente.',
        '**Paso tres: pasar de moda es letal.** Si una obra no está en el programa un par de generaciones, no se hacen copias nuevas. Las copias existentes siguen degradándose a su ritmo. Y un día queda una, y luego ninguna, y nadie se entera del cambio.',
        'Por eso la supervivencia es tan desigual. Euclides se conserva porque todo el mundo enseñaba geometría. Galeno se conserva porque los médicos lo necesitaban. Casi toda la poesía helenística no se conserva, porque se dejó de leer — y la diferencia entre esos desenlaces no es un incendio, es un temario.',
        'Y por eso también los grandes conservadores del saber griego no fueron griegos. Los monjes bizantinos siguieron copiando mil años. La Bagdad abasí pagó la traducción al árabe como política de Estado. Toledo devolvió el árabe al latín. Cada uno fue una decisión de seguir gastando, tomada por gente que no tenía ninguna obligación de hacerlo.',
      ],
    },
    {
      id: 'why-we-want-the-fire',
      label: 'Por qué queremos que ardiera',
      kind: 'contrast',
      paragraphs: [
        'Compara las dos historias y se ve enseguida por qué solo una es famosa.',
        '**El incendio.** Una sola noche. Un culpable con nombre: un general, un obispo, un califa, una turba. Saber irremplazable perdido en horas. Una moraleja limpia: la barbarie destruye la civilización, y aquí está la fecha. Se cuenta en una frase y le hace sentir algo a quien la cuenta.',
        '**La verdad.** Tres siglos de desfinanciación gradual, una comunidad erudita dispersa y un soporte físico que se degrada salvo que alguien pague de forma continua por copiarlo. Sin villano. Sin fecha. Sin frase.',
        'La historia del incendio hace además un trabajo político, y por eso se recuenta con culpables distintos según quién la cuente. La quemaron los cristianos. La quemaron los musulmanes. La quemó César. Cada versión llega convenientemente enganchada a una discusión que alguien quería ganar.',
        'Lo incómodo es que la versión verdadera nos señala a nosotros y no a otros. Si el saber se pierde por desfinanciación y desidia y no por incendio, la pregunta no es «quién haría algo así» sino «qué estamos dejando de pagar por copiar ahora mismo». Esa historia no la quiere nadie. No tiene más villano que una comisión de presupuestos, y la comisión de presupuestos somos normalmente nosotros.',
      ],
    },
  ],

  beforeAfter: {
    label: 'La leyenda y el expediente',
    before: {
      title: 'La historia tal como se cuenta',
      points: [
        'Un único incendio catastrófico en una noche',
        'Medio millón de rollos destruidos o más',
        'Un villano con nombre: César, un obispo o un califa',
        'Todo el saber del mundo antiguo perdido de golpe',
        'La ciencia retrasada mil años',
      ],
    },
    after: {
      title: 'Lo que sostienen las fuentes',
      points: [
        'No existe ningún relato antiguo de tal noche',
        'Fondos plausibles quizá de una décima parte de la cifra mayor',
        'Cuatro sucesos candidatos en siete siglos, y todos fallan',
        'Pérdidas acumuladas por todo el Mediterráneo durante siglos',
        'La ciencia alejandrina conservada en gran parte, copiada en otros sitios',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si los Ptolomeos la hubieran seguido financiando tres siglos más?',
      reasoning: 'El activo real de la Biblioteca era una operación de copia permanente y asalariada. Una financiación sostenida hasta época imperial romana habría significado copias nuevas de obras que en cambio se degradaron sin lector: plausiblemente buena parte de la poesía, la historiografía y las matemáticas helenísticas que hoy solo conocemos por citas.',
      constraint: 'Es especulación, y da por hecho que las decisiones de copia habrían sido amplias y no de moda. Incluso una biblioteca bien dotada copia lo que sus sabios valoran; el mismo filtro curricular que nos costó esas obras funcionaba también dentro de Alejandría. La financiación cambia el volumen, no necesariamente la selección.',
    },
    {
      question: '¿Y si la historia del incendio no hubiera cuajado?',
      reasoning: 'Sin una imagen catastrófica única, la comprensión popular de cómo se perdió el saber antiguo podría haberse centrado en la transmisión y la desidia — que es lo que pasó de verdad, y que se aplica directamente a los archivos modernos y a la conservación digital.',
      constraint: 'Esto es especular sobre una cultura alternativa, no sobre un suceso alternativo. La historia del incendio le ha resultado útil a demasiadas discusiones distintas durante demasiado tiempo; algo parecido se habría inventado igual, porque la explicación alternativa carece de dramatismo y es difícil de vender.',
    },
  ],

  quiz: [
    {
      question: '¿Qué dicen las fuentes antiguas sobre la noche en que ardió la Biblioteca?',
      options: [
        'Dan fechas contradictorias',
        'Nada: ninguna fuente antigua describe tal suceso',
        'Culpan al califa Omar',
        'Registran 700.000 rollos perdidos en un incendio',
      ],
      answerIndex: 1,
      explains: 'No hay ningún relato antiguo de una destrucción catastrófica única. La noche famosa es una deducción posterior cosida a partir de cuatro sucesos distintos y mucho más flojos.',
    },
    {
      question: '¿Cuál es la prueba más fuerte de que el incendio de César del 48 a. C. no destruyó la Biblioteca?',
      options: [
        'César lo negó en sus propios escritos',
        'Estrabón describe la institución funcionando veinte años después',
        'El incendio fue en el lado equivocado de la ciudad',
        'No hubo ningún incendio',
      ],
      answerIndex: 1,
      explains: 'Estrabón, geógrafo cuidadoso, recorrió Alejandría hacia el 20 a. C. y describe el Museion en presente, con sus sabios y sus instalaciones, sin mencionar desastre alguno.',
    },
    {
      question: '¿Por qué una biblioteca de papiro necesita financiación continua para sobrevivir?',
      options: [
        'Para pagar vigilantes contra incendios',
        'Porque el papiro se degrada y hay que recopiar cada rollo',
        'Para comprar libros nuevos cada año',
        'Porque los rollos se alquilaban, no se poseían',
      ],
      answerIndex: 1,
      explains: 'El papiro dura quizá uno o dos siglos en uso. Conservar es un proceso continuo de copia que exige escribas y materiales: si dejas de pagar, la colección se deshace en silencio.',
    },
    {
      question: '¿Cómo se perdió en realidad la mayor parte de la literatura antigua?',
      options: [
        'La quemaron invasores',
        'La destruyó deliberadamente la Iglesia',
        'Dejó de copiarse, y las copias existentes se degradaron',
        'Se perdió en naufragios',
      ],
      answerIndex: 2,
      explains: 'La supervivencia seguía al temario. Las obras que pasaban de moda no se recopiaban, y en cuanto se deshacía la última copia, desaparecía la obra: sin incendio ninguno.',
    },
  ],

  sources: [
    {
      id: 'strabo-geography',
      kind: 'primary',
      author: 'Strabo',
      title: 'Geography, Book XVII',
      year: 20,
      detail: 'Escrito hacia 20 a. C. – 23 d. C.; edición Loeb, trad. H. L. Jones',
      note: 'Lo más parecido a un testigo presencial. Describe el Museion funcionando unos veinte años después del incendio de César y no menciona destrucción alguna: la prueba más importante de todo esto.',
    },
    {
      id: 'plutarch-caesar',
      kind: 'primary',
      author: 'Plutarch',
      title: 'Life of Caesar, 49',
      year: 100,
      detail: 'Escrito hacia 100 d. C.; edición Loeb, Vidas paralelas vol. VII',
      note: 'El origen de la confusión: Plutarco dice que el incendio del puerto destruyó la gran biblioteca. Escrito siglo y medio después del suceso, por un biógrafo, no por un testigo.',
    },
    {
      id: 'aulus-gellius',
      kind: 'primary',
      author: 'Aulus Gellius',
      title: 'Attic Nights, VII.17',
      year: 180,
      detail: 'Escrito hacia 180 d. C.; edición Loeb, trad. J. C. Rolfe',
      note: 'Fuente de la cifra de 700.000 volúmenes, escrita más de dos siglos después del incendio de César y cuatro después de la mejor época de la Biblioteca. Se cita como prueba sobre la retórica antigua, no sobre la colección.',
    },
    {
      id: 'letter-of-aristeas',
      kind: 'primary',
      author: 'Anonymous ("Aristeas to Philocrates")',
      title: 'The Letter of Aristeas',
      year: -150,
      detail: 'Texto judeohelenístico, probablemente del siglo II a. C.',
      note: 'Da la cifra de 200.000 rollos y subiendo. Una obra apologética en parte ficticia sobre la traducción de las escrituras hebreas: sirve como testigo de lo que se afirmaba, no de los hechos.',
    },
    {
      id: 'bagnall-2002',
      kind: 'paper',
      author: 'Roger S. Bagnall',
      title: 'Alexandria: Library of Dreams',
      year: 2002,
      detail: 'Proceedings of the American Philosophical Society, vol. 146, n.º 4, pp. 348–362',
      note: 'El artículo que desmonta las cifras reconstruyendo qué pudo existir plausiblemente para coleccionar, y reformula el final como degradación y desfinanciación en vez de destrucción.',
    },
    {
      id: 'el-abbadi-1990',
      kind: 'book',
      author: 'Mostafa El-Abbadi',
      title: 'The Life and Fate of the Ancient Library of Alexandria',
      year: 1990,
      detail: 'Unesco / PNUD, París. ISBN 978-92-3-102632-4',
      note: 'El relato académico de referencia sobre qué fue la institución y cómo surgió cada historia de destrucción, incluida la transmisión de la leyenda del califa Omar.',
    },
  ],
}
