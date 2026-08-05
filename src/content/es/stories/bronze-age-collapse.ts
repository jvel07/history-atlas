import type { Story } from '../../types'

export const bronzeAgeCollapseEs: Story = {
  slug: 'bronze-age-collapse',
  title: 'El año en que se paró todo',
  subtitle: 'Hacia 1200 a. C. — ocho reinos comerciaban, escribían y discutían entre sí. En cincuenta años casi ninguno existía.',
  hook: 'Hacia el 1200 a. C. el Mediterráneo oriental tenía una red de grandes potencias que se escribían constantemente. En unos cincuenta años, casi todas habían dejado de existir.',
  era: 'ancient',
  category: 'ancient',
  years: [-1300, -1100],
  regions: ['Anatolia', 'Siria', 'Grecia', 'Egipto', 'Chipre'],
  nodes: ['bronze-age-collapse', 'sea-peoples', 'hittite-empire', 'ugarit', 'mycenaean-greece'],
  tags: ['collapse', 'trade', 'climate', 'archaeology', 'mediterranean', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'Hacia el 1200 a. C. había ocho grandes potencias alrededor del Mediterráneo oriental.' },
    { beat: 'hook', text: 'Cincuenta años después casi ninguna existía, y nadie sabe bien por qué.' },
    { beat: 'worldBefore', kicker: 'h. 1300 a. C.', text: 'No es un mundo de reinos aislados. Los reyes se escriben sin parar,' },
    { beat: 'worldBefore', text: 'se llaman hermanos, discuten sobre dotes y se mandan médicos cuando se los piden.' },
    { beat: 'worldBefore', mark: 'web', text: 'Un solo barco hundido frente a Turquía lleva carga de al menos siete culturas.' },
    { beat: 'worldBefore', punch: true, text: 'Diez toneladas de cobre, y una de estaño traída de cerca de Afganistán.' },
    { beat: 'problem', text: 'Y ahí está la debilidad, porque el bronce es cobre más estaño,' },
    { beat: 'problem', text: 'y el estaño viene de un extremo del mundo al otro.' },
    { beat: 'problem', punch: true, mark: 'chain', text: 'Cada espada de cada ejército depende de una ruta que no controla ningún rey.' },
    { beat: 'story', kicker: 'h. 1190 a. C.', text: 'Un puerto sirio llamado Ugarit manda una última carta pidiendo ayuda.' },
    { beat: 'story', text: 'Han llegado los barcos enemigos, los pueblos arden, las tropas están en Hatti.' },
    { beat: 'story', punch: true, text: 'La ciudad arde y no vuelve a habitarse, y por eso todavía podemos leer la carta.' },
    { beat: 'story', text: 'La capital hitita se vacía. Archivos retirados, puertas tapiadas, y luego fuego —' },
    { beat: 'story', punch: true, text: 'lo que no se lee como un saqueo. Se lee como gente marchándose a propósito.' },
    { beat: 'story', text: 'Todos los palacios micénicos de Grecia arden o se abandonan en dos generaciones.' },
    { beat: 'story', kicker: '1177 a. C.', text: 'Egipto rechaza una invasión por mar y talla la victoria en el muro de un templo,' },
    { beat: 'story', text: 'nombra a cinco pueblos que nadie sabe identificar, y luego mengua un siglo.' },
    { beat: 'whyItHappened', text: 'Mucho tiempo la respuesta fueron esos invasores. No pueden ser solo ellos.' },
    { beat: 'whyItHappened', text: 'El polen de los lechos de lagos muestra tres siglos de sequía desde el 1250.' },
    { beat: 'whyItHappened', text: 'Hay terremotos, y hambrunas, y revueltas, y una red comercial deshilachándose.' },
    { beat: 'whyItHappened', punch: true, mark: 'collapse', text: 'Nada de eso basta por separado. Todo llega a la vez.' },
    { beat: 'consequences', text: 'Grecia deja de escribir cuatrocientos años. A los hititas se los olvida enteros.' },
    { beat: 'consequences', text: 'El bronce cede ante el hierro, no por ser mejor, sino por ser local.' },
    { beat: 'consequences', punch: true, text: 'Y los comerciantes que sobreviven extienden un alfabeto que se aprende en una semana.' },
    { beat: 'whyItMatters', text: 'Un mundo conectado es eficiente, y un mundo conectado transmite el fallo.' },
    { beat: 'whyItMatters', text: 'Ningún golpe hizo esto. Un sistema recibió varios a la vez y dejó de absorberlos.' },
    { beat: 'whyItMatters', punch: true, text: 'Esa es la parte incómoda. Nadie vio una causa lo bastante grande.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'El Mediterráneo oriental del Bronce Final no es un puñado de reinos antiguos sueltos. Es un sistema, y las pruebas de ello son abrumadoras y a menudo entrañables.',
        'Las grandes potencias —Egipto, los hititas en Anatolia, Asiria, Babilonia, la Grecia micénica, Chipre y las ciudades-estado cananeas y sirias intermedias— se escribían constantemente. Las cartas de Amarna, encontradas en Egipto, conservan cientos de esas misivas: reyes que se tratan de «hermano mío», negocian bodas, se quejan de la calidad de los regalos, piden médicos prestados y de vez en cuando se enfurruñan. Un rey babilonio protesta porque el oro que mandó Egipto no era de ley. Otro pregunta por su hermana y exige pruebas de que sigue viva.',
        'Las pruebas materiales son todavía mejores. Un barco mercante que se hundió frente a Uluburun, en la costa turca, hacia el 1300 a. C., se excavó a lo largo de once campañas, y su carga es el mejor objeto individual de la historia económica antigua: diez toneladas de cobre en lingotes, una tonelada de estaño, jarras cananeas de resina de terebinto, ébano africano, marfil, ámbar báltico, oro egipcio, cerámica micénica y una tablilla de escritura de madera. Mercancías de al menos siete culturas, en un solo casco.',
        'Y esto importaba materialmente, no solo diplomáticamente, por lo que es el bronce. El bronce es cobre aleado con un diez por ciento de estaño. El cobre lo hay en la región — Chipre se llama así por él, o al revés. El estaño no. Las fuentes importantes más cercanas están en Afganistán y Asia central, con más en Cornualles, lo que quiere decir que cada espada, cada reja de arado y cada caldero del Mediterráneo dependían de una cadena de suministro de miles de kilómetros a través de territorios que no controlaba ningún rey.',
        'Una interdependencia de esa escala es un logro real. Y es también, de una manera que nadie de entonces tenía motivos para notar, una condición estructural de un tipo muy concreto.',
      ],
      aside: {
        kind: 'number',
        label: 'La cifra',
        body: 'El pecio de Uluburun llevaba unas 10 toneladas de cobre y 1 de estaño —la proporción exacta del bronce, suficiente para equipar a un ejército pequeño— en un solo barco. Es la demostración más clara que tenemos de que aquello era una economía y no varias.',
        sourceId: 'uluburun-excavation',
      },
      sourceIds: ['cline-2014', 'uluburun-excavation'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'La arqueología de las décadas en torno al 1200 a. C. es una lista de finales, y la lista es lo bastante larga como para dejar de leerse como una casualidad.',
        'El Imperio hitita —una de las dos superpotencias de la época, con una capital en Hattusa de portadas monumentales de piedra y un archivo estatal de miles de tablillas— deja de existir. Su capital se abandona y arde. Sus registros se paran. En unos pocos siglos los hititas quedan tan completamente olvidados que hasta el siglo XIX su existencia solo se conocía por menciones de pasada en la Biblia hebrea.',
        'Ugarit, un puerto sirio rico con alfabeto propio y una literatura considerable, se destruye hacia el 1190 a. C. y no vuelve a ocuparse. La Grecia micénica —los reinos palaciales de Pilos, Micenas, Tirinte, con escritura contable y una burocracia que anotaba raciones de aceite e inventarios de bronce— arde y se vacía en unas dos generaciones. Ciudades de Chipre y del Levante muestran estratos de destrucción. Asiria y Babilonia sobreviven, pero se contraen mucho.',
        'Egipto sobrevive, que es la excepción crucial, pero sobrevive más pequeño y más pobre. Pierde su imperio levantino, su autoridad central se debilita, y hacia el 1077 a. C. el Reino Nuevo se ha terminado.',
        'La escala se capta mejor por lo que le hace a la escritura. El lineal B, la escritura micénica, desaparece del todo. Grecia no vuelve a escribir nada durante unos cuatro siglos. Toda una cultura administrativa letrada revierte a un mundo sin ningún registro — y se queda ahí tanto tiempo que, cuando los griegos vuelven a escribir, lo hacen con un sistema completamente distinto y prestado.',
        'Algo pasó. La pregunta que ha ocupado un siglo de investigación es qué.',
      ],
      sourceIds: ['cline-2014', 'drews-1993'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'La respuesta tradicional, y la que está tallada en piedra, son los Pueblos del Mar.',
        'En el octavo año de Ramsés III —convencionalmente 1177 a. C., de donde sale el título de Eric Cline— Egipto libró una batalla terrestre y naval contra unos invasores, y la dejó registrada en relieve y en texto en los muros del templo funerario del faraón en Medinet Habu. La inscripción es el documento más citado de toda esta materia. Describe una confederación en movimiento: «ninguna tierra pudo resistir ante sus armas», dice, y enumera Hatti, Chipre y Carquemis como ya caídas, y nombra a los invasores como peleset, tjeker, shekelesh, denyen y weshesh.',
        'Vinieron, según la versión egipcia, con sus familias y sus carros de bueyes, que es el detalle que cambia el cuadro. Esto no es una incursión. Es una migración armada, gente que se mueve porque donde estaba ha dejado de funcionar.',
        'Ahora, la cautela. Es un monumento a una victoria, tallado por el vencedor, en un género con convenciones rígidas sobre cómo un faraón aplasta extranjeros. Los cinco nombres no se pueden atar con seguridad a culturas arqueológicas, con la probable excepción de los peleset, a quienes se identifica en general con los filisteos que se asientan en la costa cananea. Y sobre todo: si los Pueblos del Mar lo destruyeron todo, ¿quién destruyó las tierras de origen de los Pueblos del Mar, y por qué se estaban moviendo?',
        'Pon junto a Medinet Habu las cartas de Ugarit, y el tono cambia por completo. El último rey, Ammurapi, escribe al rey de Alashiya —Chipre— en algo muy próximo al pánico: han aparecido barcos enemigos, siete de ellos, han quemado sus pueblos y han hecho cosas terribles, sus propias tropas están en Hatti, sus propios barcos están fuera, en Licia, y el país ha quedado abandonado a sí mismo. Otra carta de un funcionario hitita ordena enviar grano con urgencia y lo describe como cuestión de vida o muerte. Una tercera pregunta por una escasez de alimentos.',
        'No son las cartas de un Estado desbordado por un enemigo imparable. Son las cartas de un Estado con el ejército desplegado en otra parte, la flota fuera y el grano corto, y que no puede con siete barcos. Ugarit cayó porque ya estaba estirada hasta la nada.',
        'Y luego está Hattusa, que no encaja en absoluto con la historia de la invasión. La excavación muestra que la capital hitita se vació antes de arder: los archivos del Estado se retiraron, los objetos de valor se llevaron, algunas portadas se tapiaron a propósito. Eso no es una ciudad siendo saqueada. Es un gobierno evacuando, y el incendio viniendo después, quizá mucho después, quizá de ocupantes. El Estado hitita no cayó por un asalto. Parece que se marchó andando.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'Ammurapi, último rey de Ugarit, escribiendo al rey de Chipre hacia el 1190 a. C.: han llegado barcos enemigos, han quemado sus pueblos y han hecho el mal en su país; sus propias tropas están en la tierra de Hatti, y todos sus barcos están en Licia; el país queda abandonado a sí mismo. Es lo más parecido a un relato en primera persona del colapso que se conserva.',
        sourceId: 'ugarit-letters',
      },
      sourceIds: ['medinet-habu', 'ugarit-letters', 'cline-2014'],
    },

    whyItHappened: {
      heading: 'Por qué pasó',
      paragraphs: [
        'El resumen honesto de un siglo de investigación es que ninguna causa única funciona, y que eso es el hallazgo y no un fracaso al buscarla.',
        '**La sequía es la prueba nueva más fuerte.** Los sondeos de polen del mar de Galilea y de Chipre, y los trabajos isotópicos de la región, indican un periodo seco grave y prolongado que empieza hacia el 1250 a. C. y dura quizá tres siglos. Por otro lado, los textos se quejan del grano: cartas hititas exigiendo envíos urgentes, un registro egipcio de grano enviado para aliviar una hambruna hitita. Clima y correspondencia coinciden, lo que es raro y merece peso.',
        '**Los terremotos son reales e insuficientes.** Amos Nur ha defendido una «tormenta sísmica» —una secuencia de grandes terremotos a lo largo del mismo sistema de fallas durante décadas— y hay pruebas de destrucción compatibles con daños sísmicos en varios yacimientos. Pero las ciudades se recuperan de los terremotos de forma rutinaria. Lo que hacen los terremotos es quitarle el margen a un sistema que ya no tiene ninguno.',
        '**El derrumbe interno importa más de lo que se creía.** Las economías palaciales eran rígidas, redistributivas y muy pesadas por arriba: las tablillas en lineal B recogen una burocracia que controlaba aceite, ruedas y bronce con detalle obsesivo. Un sistema así lo concentra todo en un edificio, lo que lo hace eficiente en los años buenos y catastrófico en los malos. Hay pruebas de violencia interna en algunos yacimientos, y los palacios no se reconstruyen, lo que sugiere que nadie los quería de vuelta.',
        '**Y la red comercial es el multiplicador.** Corta las rutas del estaño y todos los Estados pierden a la vez su suministro de metal. Corta los envíos de grano y una mala cosecha se vuelve una hambruna. La interconexión que hizo rico a ese mundo es exactamente el mecanismo por el cual el fallo de una región se volvió el de todos.',
        'La formulación de Cline es que aquello fue un colapso sistémico: múltiples tensiones, ninguna fatal por separado, llegando en pocas décadas sobre una red optimizada para un mundo en el que no ocurrían todas a la vez. A los Pueblos del Mar se los lee mejor no como la causa sino como parte del colapso en movimiento: gente desplazada por la sequía y el fracaso, moviéndose con sus familias, y convertida en el golpe que rematró a Estados que ya estaban caídos.',
      ],
      sourceIds: ['cline-2014', 'langgut-2013', 'knapp-manning-2016'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'Lo que viene después no es una pausa. Es un mundo distinto, construido con lo que quedó, y en algunos aspectos más abierto.',
      ],
      shortTerm: [
        'El Imperio hitita termina y se olvida tan completamente que su redescubrimiento en el siglo XIX fue una sorpresa genuina.',
        'La civilización palacial micénica se acaba. La población cae bruscamente en toda Grecia, los yacimientos se abandonan y la construcción monumental se detiene durante siglos.',
        'El lineal B desaparece por completo. Grecia no tiene ninguna escritura durante unos cuatrocientos años.',
        'Egipto pierde su imperio levantino y su autoridad central se fractura; el Reino Nuevo termina hacia el 1077 a. C.',
        'Los peleset —muy probablemente los filisteos— se asientan en la costa cananea, y traen consigo cerámica y arquitectura de estilo egeo.',
      ],
      longTerm: [
        'El hierro sustituye al bronce, y la razón es el suministro, no la calidad. El hierro temprano no es evidentemente mejor; solo está disponible localmente, cuando el estaño de Asia central no lo está.',
        'Las ciudades portuarias fenicias sobreviven y heredan un Mediterráneo sin grandes potencias, y se convierten en sus comerciantes durante los quinientos años siguientes.',
        'Extienden un alfabeto de veintidós signos —pensado para cargamentos y cuentas, no para escribas de palacio— que los griegos toman prestado hacia el 800 a. C. y del que desciende todo alfabeto europeo.',
        'Tiro planta una colonia en Cartago hacia el 814 a. C. Seis siglos después, pelea con Roma por el Mediterráneo occidental.',
        'Grecia sale del silencio sin palacios, sin reyes divinos y sin burocracia redistributiva — y en pocos siglos inventa la polis. Lo que volvió a crecer no fue lo que había caído.',
      ],
      unexpected: [
        'Homero se compone dentro del silencio, sobre el mundo que terminó: una tradición oral conservando una Edad del Bronce cuyos registros ya no sabía leer.',
        'El alfabeto que hizo posible la literatura griega es una herramienta de comerciantes, adoptada por lo barato que era aprenderla: lo contrario de los monopolios de escribas que habían llevado los palacios.',
        'Los filisteos de la Biblia, sinónimo de brutalidad inculta, eran con toda probabilidad refugiados de una civilización egea con palacios, frescos y cerámica fina.',
        'La supervivencia de Egipto es la razón de que tengamos siquiera la historia: el único relato detallado de las invasiones viene del único Estado que las venció y que tenía piedra donde tallarlo.',
      ],
      sourceIds: ['cline-2014', 'drews-1993'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'Este es el caso mejor documentado que tenemos de una civilización entera e interconectada parándose, y su forma no es la que espera nadie.',
        'No hay villano. Un siglo de investigación ha buscado uno —invasores, terremotos, sequía, revolución, hierro— y cada candidato resulta ser insuficiente por sí solo o consecuencia de otra cosa. Lo que queda es un sistema que se había vuelto eficiente volviéndose interdependiente, y que recibió varios golpes ordinarios en las mismas décadas.',
        'Esa es la parte incómoda, y es por lo que la historia no deja de invocarse. El Bronce Final no falló por ser primitivo. Falló por ser sofisticado: especializado, abastecido a larga distancia, optimizado y dependiente de socios que no podía controlar. Un mundo donde tus armas necesitan un metal traído de cuatro mil kilómetros es un mundo rico y un mundo frágil, y las dos cosas son el mismo hecho visto desde lados distintos.',
        'También merece la pena retener lo completo que puede llegar a ser el olvido. No solo Estados y ciudades: un sistema de escritura entero, una burocracia, la capacidad de registrar cualquier cosa, durante cuatro siglos. Un pueblo tan a fondo borrado que durante dos mil quinientos años los hititas sobrevivieron solo como un nombre en el libro de otro.',
        'Y luego está lo que volvió a crecer, que es la parte que discute con el desánimo. El Mediterráneo que salió del colapso no tenía reyes divinos ni monopolios palaciales. Tenía letras baratas, metal portátil y comerciantes que no rendían cuentas a nadie. Casi todo lo que llamamos Antigüedad clásica está construido sobre ese terreno, y nada de ello podría haberse construido sobre el que ardió.',
      ],
      sourceIds: ['cline-2014'],
    },
  },

  timeline: [
    { year: -1350, title: 'Las cartas de Amarna', detail: 'Cientos de tablillas diplomáticas muestran a los grandes reyes tratándose de hermanos, negociando bodas y quejándose de los regalos.', pivotal: true },
    { year: -1300, title: 'Se hunde el barco de Uluburun', detail: 'Un mercante se va a pique frente a Turquía con diez toneladas de cobre, una de estaño y mercancías de al menos siete culturas a bordo.', pivotal: true },
    { year: -1274, title: 'Kadesh, y luego un tratado', detail: 'Egipto y los hititas libran la mayor batalla de carros conocida y después firman el tratado de paz internacional más antiguo conservado. Sobreviven las dos copias.' },
    { year: -1250, title: 'Empieza la sequía', detail: 'Los sondeos de polen del mar de Galilea y de Chipre indican el comienzo de un periodo seco que dura quizá tres siglos.', pivotal: true, confidence: 'contested' },
    { year: -1207, title: 'Merneptah rechaza un ataque', detail: 'Egipto vence una invasión libia con aliados llegados del mar: el primer registro egipcio que nombra a grupos luego agrupados como Pueblos del Mar.' },
    { year: -1190, title: 'Arde Ugarit', detail: 'El puerto sirio manda cartas suplicando ayuda, con el ejército en Hatti y la flota fuera, y es destruido y nunca vuelve a ocuparse.', pivotal: true },
    { year: -1180, title: 'Se abandona Hattusa', detail: 'La capital hitita se vacía —archivos retirados, puertas tapiadas— y luego arde. El imperio simplemente deja de aparecer en el registro.', pivotal: true },
    { year: -1177, title: 'Ramsés III en Medinet Habu', detail: 'Egipto derrota una invasión por tierra y mar y talla el relato en el muro de un templo, nombrando a cinco pueblos y afirmando que ninguna tierra les resistió.', pivotal: true },
    { year: -1150, title: 'Los palacios micénicos ya no están', detail: 'Pilos, Micenas y Tirinte arden o se abandonan. El lineal B se para. El griego no vuelve a escribirse durante unos cuatro siglos.', pivotal: true },
    { year: -1077, title: 'Termina el Reino Nuevo', detail: 'Egipto sobrevive al colapso, pero no intacto: la autoridad central se fragmenta y el imperio levantino se pierde para siempre.' },
    { year: -814, title: 'Tiro funda Cartago', detail: 'Una ciudad fenicia que salió adelante tras el colapso planta una colonia en el norte de África, según la fecha tradicional. Luego peleará con Roma.' },
    { year: -800, title: 'Grecia toma prestado el alfabeto', detail: 'Los griegos adaptan la escritura fenicia y le añaden vocales. Vuelve la escritura, como herramienta de comerciantes y no como monopolio palacial.', pivotal: true },
  ],

  causeEffect: [
    { cause: 'El bronce exige estaño traído de miles de kilómetros', effect: 'Todos los Estados dependen de rutas que ninguno controla', because: 'El cobre es regional y el estaño no, así que el metal básico de la época solo podía existir como un acto de cooperación a larga distancia.' },
    { cause: 'Hacia el 1250 a. C. empieza una sequía prolongada', effect: 'Aparecen escaseces de grano por toda la región', because: 'La agricultura de secano del Levante y Anatolia no tiene margen, y los textos empiezan a exigir envíos urgentes de grano justo en ese momento.' },
    { cause: 'Ugarit manda su ejército a Hatti y su flota a Licia', effect: 'Siete barcos enemigos bastan para destruirla', because: 'Una ciudad que ha prestado sus defensas la derrota una fuerza que una década antes habría sido trivial.' },
    { cause: 'Las economías palaciales concentran almacén y administración en un edificio', effect: 'Destruir el palacio destruye la economía', because: 'Un sistema redistributivo no tiene mercados privados a los que recurrir; cuando arde el centro, no hay un segundo mecanismo.' },
    { cause: 'Fallan las rutas comerciales', effect: 'El hierro sustituye al bronce', because: 'El mineral de hierro está disponible casi en todas partes, así que cuando deja de llegar el estaño el metal local inferior se vuelve el único metal.' },
    { cause: 'Desaparecen los palacios y sus escribas', effect: 'Grecia deja de escribir cuatro siglos', because: 'El lineal B existía solo para llevar las cuentas palaciales, así que sin palacios no había nadie que lo necesitara ni nadie formado en él.' },
    { cause: 'Las grandes potencias desaparecen de la costa levantina', effect: 'Las ciudades fenicias heredan el comercio mediterráneo', because: 'Los puertos que sobrevivieron se encontraron sin señores, sin tributo y sin competidores, que es una posición comercial extraordinaria.' },
  ],

  myths: [
    {
      myth: 'Los Pueblos del Mar destruyeron las civilizaciones del Bronce.',
      reality: 'Se los nombra en un único monumento egipcio a una victoria, no se los puede identificar con seguridad con culturas arqueológicas, y parece que migraban con familias y carros de bueyes más que saquear. El problema de fondo es circular: si ellos provocaron el colapso, ¿qué los hizo moverse? Hoy la mayoría los lee como parte del colapso, no como su origen.',
      whyItPersists: 'Medinet Habu es dramático, citable y está tallado en piedra, y un invasor externo es una explicación mucho más fácil que un fallo sistémico sin autor.',
      sourceIds: ['medinet-habu', 'cline-2014'],
    },
    {
      myth: 'Las armas de hierro permitieron a los recién llegados vencer a imperios armados con bronce.',
      reality: 'El hierro temprano no es claramente superior a un buen bronce, y la transición sigue al colapso en vez de causarlo. El hierro ganó porque dejó de llegar el estaño, lo que volvió escaso el bronce, mientras que el mineral de hierro está disponible localmente casi en todas partes. El metal cambió porque falló el comercio.',
      whyItPersists: 'Es una explicación tecnológica ordenada con un mecanismo imaginable, y el propio nombre de Edad del Bronce y Edad del Hierro hace sentir que los metales tienen que estar haciendo el trabajo causal.',
      sourceIds: ['drews-1993', 'cline-2014'],
    },
    {
      myth: 'Todo ocurrió en el 1177 a. C.',
      reality: 'Esa fecha es el octavo año de Ramsés III y la batalla registrada en Medinet Habu, elegida por Eric Cline como título precisamente por ser un mojón cómodo. El colapso se extiende cerca de un siglo, con regiones distintas fallando en momentos distintos y con Egipto no fallando en el mismo sentido.',
      whyItPersists: 'Las fechas únicas se enseñan bien y los títulos se recuerdan. El propio Cline dice explícitamente que el año es una señal y no un suceso.',
      sourceIds: ['cline-2014'],
    },
    {
      myth: 'Las últimas tablillas de Ugarit se encontraron todavía cociéndose en el horno, sin cocer, mientras la ciudad ardía.',
      reality: 'Ese detalle tan vivo procede de la interpretación del excavador original y se ha cuestionado: el contexto de las tablillas y la identificación del «horno» no lo sostienen con claridad, y puede que las cartas no sean todas de los últimos días. Las cartas son auténticas y desesperadas; el horno es decoración.',
      whyItPersists: 'Es una imagen perfecta —un mensaje interrumpido al enviarse— y apareció en los primeros relatos, que suele bastar para volver permanente un detalle.',
      sourceIds: ['ugarit-letters', 'cline-2014'],
    },
  ],

  disagreements: [
    {
      question: '¿Cuánto del colapso lo causó el clima?',
      positions: [
        { view: 'Muchísimo. Los registros de polen e isótopos muestran un periodo seco severo desde hacia el 1250 a. C., y los textos contemporáneos registran de forma independiente hambrunas y envíos de grano de emergencia.', heldBy: 'Langgut, Finkelstein y Neumann, y la literatura paleoclimática', sourceId: 'langgut-2013' },
        { view: 'Menos de lo que sugieren los titulares. La resolución cronológica de los indicadores es gruesa, el cuadro regional es desigual, y atribuir un siglo de colapsos locales variados a una sola señal climática va más allá de los datos.', heldBy: 'Knapp y Manning, y otros críticos de las explicaciones climáticas monocausales', sourceId: 'knapp-manning-2016' },
      ],
      atlasPosition: 'El atlas trata la sequía como bien documentada y como una tensión entre varias. No la presenta como la causa, porque la datación no da para sostener ese peso y el colapso no es sincrónico.',
    },
    {
      question: '¿Quiénes eran los Pueblos del Mar?',
      positions: [
        { view: 'Una confederación de pueblos migrantes del Egeo y de Anatolia occidental, moviéndose con sus familias bajo presión, que destruyeron Estados a lo largo de su ruta.', heldBy: 'La lectura más próxima a las fuentes egipcias', sourceId: 'medinet-habu' },
        { view: 'En buena medida una categoría retórica egipcia. Los nombres son difíciles de asociar a culturas arqueológicas, los movimientos fueron probablemente varias migraciones sin relación, y fueron síntoma de un colapso ocurrido en otra parte.', heldBy: 'Cline y buena parte de la investigación actual', sourceId: 'cline-2014' },
      ],
      atlasPosition: 'El atlas usa «Pueblos del Mar» como el nombre egipcio de un fenómeno real de migración armada, y no lo trata como el nombre de un solo pueblo ni como causa suficiente. Solo la identificación peleset-filisteos se considera razonablemente segura.',
    },
    {
      question: '¿Hubo alguna causa única?',
      positions: [
        { view: 'Hubo un mecanismo decisivo: Drews defiende un cambio en la guerra, con infantería en masa usando jabalinas y espadas largas para derrotar a los ejércitos de carros sobre los que se sostenían los Estados palaciales.', heldBy: 'Robert Drews', sourceId: 'drews-1993' },
        { view: 'Ninguna causa única. Sequía, terremotos, hambruna, revuelta interna, migración e interrupción comercial llegaron juntos sobre un sistema sin margen, y cada uno amplificó a los demás.', heldBy: 'Eric Cline y la lectura del colapso sistémico', sourceId: 'cline-2014' },
      ],
      atlasPosition: 'El atlas sigue la lectura del colapso sistémico, que es la mayoritaria hoy, señalando que el argumento militar de Drews identifica una vulnerabilidad real de los Estados basados en carros. No afirma una causa única, porque las pruebas no la sostienen.',
    },
  ],

  didYouKnow: [
    'El pecio de Uluburun llevaba diez toneladas de cobre y una de estaño —la proporción exacta del bronce— además de mercancías de al menos siete culturas distintas.',
    'En las cartas de Amarna los grandes reyes se tratan de «hermano mío», se quejan de la calidad de los regalos y se piden médicos prestados.',
    'El último rey de Ugarit escribió pidiendo ayuda porque su ejército estaba en Hatti y su flota en Licia. Bastaron siete barcos enemigos.',
    'La capital hitita se vació antes de arder: archivos retirados, puertas tapiadas. Eso parece una evacuación planificada, no un saqueo.',
    'A los hititas se los olvidó tan completamente que hasta el siglo XIX solo se los conocía por menciones de pasada en la Biblia hebrea.',
    'Grecia dejó de escribir unos cuatrocientos años. Cuando volvió a hacerlo usó un alfabeto fenicio prestado, no su antigua escritura.',
    'Los filisteos de la Biblia eran probablemente refugiados de una cultura palacial egea, llegados a la costa cananea con su propia cerámica fina.',
    'Egipto y los hititas firmaron hacia el 1259 a. C. el tratado de paz internacional más antiguo conservado, y se conservan las copias de los dos bandos.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'Hacia el 1200 a. C., el Mediterráneo oriental era un sistema conectado de grandes potencias —Egipto, los hititas, la Grecia micénica, Asiria, Babilonia, Chipre y los puertos sirios y cananeos— cuyos reyes se escribían constantemente y cuyas economías dependían del comercio a larga distancia. El propio bronce exigía estaño de Asia central, así que las armas de todos los reinos dependían de rutas que ninguno controlaba.',
        'En unos cincuenta años, casi todo aquello desapareció. El Imperio hitita dejó de existir y se olvidó durante tres mil años. Ugarit ardió y no volvió a ocuparse. Todos los palacios micénicos ardieron o se abandonaron, y la escritura griega desapareció cuatro siglos. Egipto sobrevivió, pero más pequeño y más pobre.',
        'La explicación tradicional son los Pueblos del Mar, nombrados en el muro del templo de Ramsés III en Medinet Habu en el 1177 a. C. Esa explicación es circular: si lo destruyeron todo, ¿qué los desplazó a ellos? La investigación actual los lee como parte del colapso y no como su causa.',
        'La mejor respuesta es que pasaron varias cosas a la vez: una sequía iniciada hacia el 1250 a. C. atestiguada tanto en sondeos de polen como en cartas de la época, terremotos, hambruna, revuelta interna, migración masiva y el deshilachado de la red comercial que lo ataba todo. Ninguna era fatal por sí sola. Juntas tumbaron un sistema que se había enriquecido volviéndose interdependiente.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Hace tres mil doscientos años, todos los reinos grandes de alrededor del Mediterráneo oriental se conocían muy bien. Sus reyes se escribían cartas llamándose «hermano», se mandaban regalos y a veces se quejaban de que los regalos no eran gran cosa.',
        'Y también se necesitaban. Su mejor metal era el bronce, y para hacer bronce necesitas mezclar cobre y estaño. Cobre tenían cerca — pero el estaño tenía que venir de miles de kilómetros, más o menos de donde ahora está Afganistán. Así que cada espada de cada ejército necesitaba un envío desde el otro lado del mundo.',
        'Entonces, en unos cincuenta años, casi todos esos reinos dejaron de existir. Ardieron ciudades. Un imperio entero, el hitita, desapareció tan del todo que la gente olvidó que hubiera existido hasta que los arqueólogos lo desenterraron en el siglo XIX.',
        'Todavía discutimos por qué. Llegaban invasores por mar con sus familias en carros de bueyes. Hubo una sequía larguísima. Hubo terremotos. Hubo escasez de comida y seguramente gente rebelándose porque pasaba hambre.',
        'La respuesta que dan hoy casi todos los historiadores da un poco de miedo: ninguna de esas cosas era, por sí sola, lo bastante grande. Simplemente ocurrieron todas seguidas, en un mundo tan conectado que cuando se rompió una parte, se rompió todo.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El campo se ha desplazado decididamente de explicaciones monocausales a explicaciones sistémicas, con Cline (2014) como síntesis de referencia y el marco de colapso sistémico de Renfrew como antecedente teórico. La ganancia metodológica es que un modelo multitensión predice la asincronía y la variación regional observadas, mientras que cualquier agente único —Pueblos del Mar, sismicidad, hierro, sequía— tiene que explicar a la vez las destrucciones y las supervivencias, y ninguno lo hace.',
        'Sobre el clima, Langgut, Finkelstein y Neumann (2013) aportan la secuencia polínica del mar de Galilea que indica aridificación desde hacia el 1250 a. C., corroborada por los sondeos chipriotas de Kaniewski. Knapp y Manning (2016) aportan la cautela metodológica necesaria: la resolución de los indicadores, la incertidumbre de datación y la inferencia desde una aridez regional hasta destrucciones concretas de yacimientos son todas más débiles de lo que admiten los relatos populares. Las pruebas textuales de hambruna —las peticiones hititas de grano, los envíos egipcios de socorro— son independientes y discutiblemente la pata más firme.',
        'El problema de los Pueblos del Mar es de crítica de fuentes. Medinet Habu es una composición triunfal con elementos formulares tomados de los textos anteriores de Merneptah sobre la guerra libia, y los etnónimos resisten la correlación arqueológica segura salvo peleset-filisteos, apoyada por cultura material de estilo egeo en Ascalón, Asdod y Ecrón. Tratar la lista como un registro de naciones históricas importa una categoría retórica egipcia al registro arqueológico.',
        'Drews (1993) sigue siendo la disidencia monocausal más sustancial, situando el mecanismo en la tecnología y la táctica militares: la vulnerabilidad de la guerra aristocrática de carros ante infantería en masa con jabalinas y espadas Naue II. El argumento es coherente e identifica una debilidad estructural real de los Estados palaciales, pero tiene dificultades con los yacimientos destruidos sin indicios de combate y con el aparente abandono ordenado de Hattusa.',
        'Por último, el periodo poscolapso merece atención propia: la expansión comercial fenicia, la alfabetización alfabética y la aparición de formas políticas no palaciales en el Egeo no son mera recuperación sino transformación estructural, y el argumento de que el colapso fue condición previa de todo ello es sólido.',
      ],
    },
    {
      id: 'the-tin-problem',
      label: 'Por qué el bronce era el punto débil',
      kind: 'angle',
      paragraphs: [
        'El dato más útil de esta historia es una receta. El bronce es alrededor de un noventa por ciento de cobre y un diez por ciento de estaño.',
        'El cobre es regional. Chipre tenía tanto que la isla y el metal comparten nombre. Anatolia y el Levante tenían yacimientos. Si eras un reino mediterráneo, el cobre era un problema de suministro que podías resolver.',
        'El estaño no. En el Mediterráneo oriental prácticamente no hay estaño. Los depósitos importantes más cercanos están en Asia central —se ha defendido que el estaño de Uluburun viene de lo que hoy es Uzbekistán o Afganistán—, con otras fuentes en Cornualles, al otro extremo de Europa. Cada lingote cruzaba miles de kilómetros por territorio de muchos Estados, por tierra y por mar, cambiando de manos repetidamente.',
        'Piensa ahora en lo que eso implica. El material básico de la época —armas, armaduras, herramientas, rejas de arado, calderos— solo podía existir mientras una cadena de entidades políticas sin relación entre sí, ninguna sometida a otra, mantuviera abierta una ruta a través de medio continente. No había sustituto ni reserva estratégica.',
        'Un mundo así es asombrosamente rico, porque la especialización y el intercambio mejoran la vida de todos. Y es también un mundo donde una interrupción en cualquier punto de la cadena se siente en toda ella, y donde ningún rey, por poderoso que fuera, podía asegurarse por conquista el metal de su propio ejército.',
        'Eso no es una curiosidad de la Edad del Bronce. Es la forma estándar de una economía avanzada, entonces y ahora, y por eso este colapso concreto lo leen tan a menudo personas que no son arqueólogas.',
      ],
    },
    {
      id: 'what-grew-back',
      label: 'Lo que volvió a crecer era mejor',
      kind: 'contrast',
      paragraphs: [
        'Es tentador leer el colapso como pérdida pura. Compara lo que cayó con lo que lo sustituyó y el cuadro se complica.',
        '**Lo que cayó:** economías palaciales donde los escribas de un rey anotaban cada jarra de aceite; sistemas de escritura que solo podían usar administradores profesionales; reyes divinos; cadenas de suministro largas y frágiles para el metal esencial; imperios cuyo hundimiento borró incluso su recuerdo.',
        '**Lo que volvió a crecer:** el hierro, que es peor que el bronce pero que puedes extraer casi en cualquier sitio y del que, por tanto, nadie puede cortarte; un alfabeto de veintidós signos inventado para listas de carga, tan barato de aprender que lo dominaba un comerciante; ciudades comerciales sin señores; y, con el tiempo, en Grecia, formas políticas sin ningún palacio en el centro.',
        'La Grecia que salió de cuatro siglos de silencio no tenía lineal B, ni wánax, ni burocracia redistributiva. Tenía letras baratas y ningún recuerdo de cómo había funcionado el sistema viejo. En pocos siglos produjo la polis, la poesía lírica, la filosofía y todo lo demás que archivamos bajo Antigüedad clásica.',
        'Nada de lo cual defiende que los colapsos sean buenos. Murió gente de hambre, ardieron ciudades y se perdió muchísimo que nos gustaría enormemente tener. Pero el terreno sobre el que se construye después no es el terreno que ardió, y las cosas que no podían crecer a la sombra de un palacio crecieron allí.',
      ],
    },
  ],

  beforeAfter: {
    label: 'El Mediterráneo oriental, antes y después',
    before: {
      title: 'Hacia 1250 a. C.',
      points: [
        'Ocho grandes potencias en contacto diplomático regular',
        'Bronce por todas partes, con una ruta del estaño de miles de kilómetros',
        'Burocracias palaciales anotando cada jarra y cada rueda',
        'Escritura reservada a escribas profesionales formados',
        'Ciudades de piedra monumental por Anatolia y Grecia',
      ],
    },
    after: {
      title: 'Hacia 1100 a. C.',
      points: [
        'Egipto disminuido; casi todos los demás sencillamente desaparecidos',
        'El hierro extendiéndose, porque el metal local es el único metal',
        'Ni palacios, ni nada que quedara por administrar',
        'Ninguna escritura en Grecia durante cuatrocientos años',
        'Puertos fenicios comerciando en un mar sin grandes potencias',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si la sequía no hubiera coincidido con las migraciones?',
      reasoning: 'Cada tensión por separado parece sobrevivible. Los Estados se recuperaban de terremotos de forma rutinaria, absorbían incursiones con regularidad y aguantaban malas cosechas con los envíos de grano que muestran las cartas. Repartidos por dos siglos en vez de por cincuenta años, los mismos sucesos podrían haber producido tensión y adaptación en lugar de una cascada.',
      constraint: 'Es especulación, y puede invertir la causalidad: las migraciones las provocó plausiblemente la sequía, en cuyo caso separarlas no es cambiar la cronología sino cambiar la física. Además deja intacta la fragilidad de fondo —la dependencia del estaño, los monopolios palaciales—, esperando a la siguiente coincidencia.',
    },
    {
      question: '¿Y si los palacios micénicos se hubieran reconstruido?',
      reasoning: 'Si se hubiera restaurado el sistema palacial, el lineal B y la administración escribana podrían haber continuado, y Grecia habría entrado en el primer milenio como una civilización palacial letrada y no analfabeta — con continuidad de registros y sin necesidad de tomar prestado un alfabeto.',
      constraint: 'Los palacios no se reconstruyeron, y en algunos yacimientos hay indicios de violencia interna. Eso sugiere que la población tenía motivos para no quererlos de vuelta, lo que hace de esto menos un escenario sobre capacidad que sobre consentimiento. También habría significado ningún alfabeto barato, y probablemente ninguna polis.',
    },
  ],

  quiz: [
    {
      question: '¿Por qué era el bronce una debilidad estratégica para todos los Estados del Bronce Final?',
      options: [
        'Era demasiado blando para armas',
        'Exigía estaño traído de miles de kilómetros, por rutas que nadie controlaba',
        'Solo Egipto sabía fabricarlo',
        'No se podía reciclar',
      ],
      answerIndex: 1,
      explains: 'El bronce es cobre más un diez por ciento de estaño. El cobre era regional; el estaño venía de Asia central. El metal de todos los ejércitos dependía de una cadena de Estados que ninguno mandaba.',
    },
    {
      question: '¿Qué muestra la arqueología de Hattusa, la capital hitita?',
      options: [
        'Un saqueo violento y repentino con cadáveres en las calles',
        'Que se vació primero —archivos retirados, puertas tapiadas— y ardió después',
        'Que en realidad nunca se abandonó',
        'Que la destruyó un terremoto',
      ],
      answerIndex: 1,
      explains: 'Las pruebas parecen una evacuación planificada más que un asalto: se sacaron objetos de valor y archivos de Estado, se tapiaron a propósito algunas portadas, y el incendio vino después.',
    },
    {
      question: '¿Por qué sustituyó el hierro al bronce?',
      options: [
        'Las armas de hierro eran muy superiores',
        'Los egipcios prohibieron el bronce',
        'Dejó de llegar el estaño, y el mineral de hierro está disponible casi en todas partes',
        'El hierro se descubrió por primera vez entonces',
      ],
      answerIndex: 2,
      explains: 'El hierro temprano no era claramente mejor que un buen bronce. Ganó por suministro: cuando fallaron las rutas largas del estaño, el metal disponible localmente era el único que quedaba.',
    },
    {
      question: '¿Cuál es el problema principal de culpar a los Pueblos del Mar?',
      options: [
        'No hay ninguna prueba de que existieran',
        'Llegaron un siglo tarde',
        'Es circular: algo tuvo que desplazarlos a ellos, y esa es la pregunta de verdad',
        'Los registros egipcios nunca los mencionan',
      ],
      answerIndex: 2,
      explains: 'Aparecen en un monumento egipcio a una victoria, migrando con familias y carros. Si lo destruyeron todo, ¿qué los echó de sus casas? Hoy casi todos los leen como parte del colapso, no como su origen.',
    },
  ],

  sources: [
    {
      id: 'ugarit-letters',
      kind: 'primary',
      author: 'Ammurapi of Ugarit and correspondents',
      title: 'The Ras Shamra tablets (RS 20.238 and related letters)',
      year: -1190,
      detail: 'Excavadas en Ras Shamra, Siria; publicadas en Ugaritica V y ediciones posteriores',
      note: 'Lo más parecido a un relato en primera persona: el último rey informando de pueblos quemados con su ejército fuera y su flota lejos. Desesperado, concreto y contemporáneo.',
    },
    {
      id: 'medinet-habu',
      kind: 'primary',
      author: 'The mortuary temple of Ramesses III',
      title: 'The Year 8 inscriptions and reliefs at Medinet Habu',
      year: -1177,
      detail: 'Publicadas por el Epigraphic Survey del Oriental Institute de la Universidad de Chicago, desde 1930',
      note: 'La fuente de los Pueblos del Mar y de la fecha de 1177. Un monumento triunfal en un género muy formulario: léase por lo que Egipto afirmaba, no como registro neutral.',
    },
    {
      id: 'uluburun-excavation',
      kind: 'archive',
      author: 'George F. Bass, Cemal Pulak and the Institute of Nautical Archaeology',
      title: 'The Uluburun shipwreck excavation',
      year: 1994,
      detail: 'Excavado entre 1984 y 1994 frente a Kaş, Turquía; informes en el American Journal of Archaeology y en publicaciones del INA',
      note: 'Diez toneladas de cobre, una de estaño y carga de al menos siete culturas en un solo casco. El mejor objeto para mostrar que aquello era una sola economía.',
    },
    {
      id: 'cline-2014',
      kind: 'book',
      author: 'Eric H. Cline',
      title: '1177 B.C.: The Year Civilization Collapsed',
      year: 2014,
      detail: 'Princeton University Press. ISBN 978-0-691-14089-6',
      note: 'La síntesis de referencia, y la fuente del marco de colapso sistémico usado aquí. Notablemente cuidadosa con lo que no se sabe, incluida la fecha de su propio título.',
    },
    {
      id: 'drews-1993',
      kind: 'book',
      author: 'Robert Drews',
      title: 'The End of the Bronze Age: Changes in Warfare and the Catastrophe ca. 1200 B.C.',
      year: 1993,
      detail: 'Princeton University Press. ISBN 978-0-691-02591-9',
      note: 'El argumento monocausal más fuerte: infantería en masa derrotando a ejércitos de carros. Se mantiene aquí porque identifica una debilidad estructural real aunque su conclusión se discuta.',
    },
    {
      id: 'langgut-2013',
      kind: 'paper',
      author: 'Dafna Langgut, Israel Finkelstein and Thomas Litt',
      title: 'Climate and the Late Bronze Collapse: New Evidence from the Southern Levant',
      year: 2013,
      detail: 'Tel Aviv: Journal of the Institute of Archaeology, vol. 40, n.º 2, pp. 149–175',
      note: 'La secuencia polínica del mar de Galilea que indica aridificación desde hacia el 1250 a. C.: la prueba central de la sequía.',
    },
    {
      id: 'knapp-manning-2016',
      kind: 'paper',
      author: 'A. Bernard Knapp and Sturt W. Manning',
      title: 'Crisis in Context: The End of the Late Bronze Age in the Eastern Mediterranean',
      year: 2016,
      detail: 'American Journal of Archaeology, vol. 120, n.º 1, pp. 99–149',
      note: 'El freno metodológico a las explicaciones climáticas: resolución de los indicadores, incertidumbre de datación y la dificultad de inferir destrucciones de yacimientos a partir de una aridez regional.',
    },
  ],
}
