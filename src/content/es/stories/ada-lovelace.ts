import type { Story } from '../../types'

export const adaLovelaceEs: Story = {
  slug: 'ada-lovelace',
  title: 'La Nota G',
  subtitle: '1843 — tradujo un artículo sobre una máquina que nunca se construyó, y en sus notas al pie está enterrada la idea con la que funcionó el siglo XX.',
  hook: 'En 1843 Ada Lovelace tradujo un artículo francés sobre una máquina no construida, le añadió notas tres veces más largas que el original, y en una de ellas describió algo que nadie construiría en cien años.',
  era: 'industrial',
  category: 'icons',
  years: [1815, 1852],
  regions: ['Reino Unido', 'Italia'],
  nodes: ['ada-lovelace', 'analytical-engine', 'charles-babbage', 'computing', 'jacquard-loom'],
  tags: ['computing', 'mathematics', 'women', 'science', 'credit', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'En 1843 tradujo un artículo francés corto y le añadió notas tres veces más largas.' },
    { beat: 'hook', text: 'En una de ellas está la idea sobre la que se construyó el siglo siguiente.' },
    { beat: 'worldBefore', kicker: '1815', text: 'Su padre es lord Byron, que se marcha un mes después de nacer ella y no vuelve.' },
    { beat: 'worldBefore', text: 'Su madre le hace estudiar matemáticas, duro, como protección contra heredarlo.' },
    { beat: 'worldBefore', punch: true, text: 'Se piensa como antídoto contra la poesía. No funciona así.' },
    { beat: 'problem', kicker: '1833', text: 'A los diecisiete conoce a un hombre con una máquina que calcula sola,' },
    { beat: 'problem', text: 'y a diferencia de los demás en la sala, ella pregunta cómo funciona.' },
    { beat: 'problem', text: 'Babbage nunca la termina. Ya está diseñando algo mucho más raro:' },
    { beat: 'problem', punch: true, mark: 'chain', text: 'una máquina que no rehaces para cada tarea. Le das tarjetas y hace lo que dicen.' },
    { beat: 'story', text: 'Coge la idea de un telar que teje patrones leyendo tarjetas perforadas.' },
    { beat: 'story', kicker: '1840', text: 'Da unas conferencias en Turín. Un ingeniero italiano las publica en francés.' },
    { beat: 'story', text: 'Lovelace lo traduce, y Babbage le pregunta por qué no escribe un artículo propio.' },
    { beat: 'story', punch: true, text: 'Así que añade notas. Siete, de la A a la G, más largas que lo que ha traducido.' },
    { beat: 'story', text: 'La Nota G expone paso a paso cómo calcularía la máquina una serie difícil de números,' },
    { beat: 'story', punch: true, text: 'con bucles, variables reutilizadas y una tabla que podrías darle a un operario.' },
    { beat: 'story', text: 'Eso es un programa, publicado, para una máquina que no existía.' },
    { beat: 'whyItHappened', punch: true, mark: 'reversal', text: 'Pero lo asombroso no es la Nota G. Es la Nota A.' },
    { beat: 'whyItHappened', text: 'Todos los demás, Babbage incluido, están pensando en aritmética.' },
    { beat: 'whyItHappened', text: 'Ella escribe que la máquina teje patrones como el telar teje flores,' },
    { beat: 'whyItHappened', punch: true, text: 'y que si pudieras escribir la música como relaciones, podría componer.' },
    { beat: 'whyItHappened', text: 'La máquina no va de números. Va de todo lo que puedas escribir como símbolos.' },
    { beat: 'consequences', text: 'También dice, con cuidado, que la máquina no puede originar nada:' },
    { beat: 'consequences', punch: true, text: 'una frase con la que Turing seguía discutiendo, por su nombre, ciento siete años después.' },
    { beat: 'consequences', text: 'Muere a los treinta y seis. La máquina analítica nunca se construye.' },
    { beat: 'whyItMatters', text: 'La discusión sobre cuánto de las Notas era suyo dura desde entonces,' },
    { beat: 'whyItMatters', punch: true, text: 'y las cartas la muestran cazándole un error a él, lo que zanja más que la discusión.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Augusta Ada Byron nació en diciembre de 1815, hija de lord Byron y de Annabella Milbanke. Byron se marchó del país un mes después y no volvió a ver a su hija. Su madre, que tenía formación matemática y a quien Byron había llamado la Princesa de los Paralelogramos, se propuso que a Ada le enseñaran matemáticas con rigor y desde pequeña, en parte —según ella misma— como protección contra heredar el temperamento de su padre.',
        'Los tutores eran serios. Mary Somerville, una de las principales divulgadoras científicas de Gran Bretaña, y después Augustus De Morgan, catedrático de matemáticas en el University College de Londres, que escribió a lady Byron diciendo que la aptitud de Ada era de una clase que rara vez había visto en un alumno de ningún sexo.',
        'El mundo para el que la estaban formando no tenía ordenadores, y tenía un problema concreto que hacía que la gente los quisiera. La navegación, la ingeniería, la astronomía y los seguros funcionaban con tablas matemáticas impresas: logaritmos, senos, mareas, posiciones. Esas tablas las calculaban a mano equipos de «computadores» humanos, se componían a mano y estaban plagadas de errores. Una cifra equivocada en una tabla náutica podía llevar un barco contra las rocas.',
        'La respuesta de Charles Babbage fue diseñar una máquina que eliminara al humano de las dos fases: calcular la tabla mecánicamente y componer los tipos también mecánicamente, para que no pudiera entrar ningún error. La máquina diferencial, empezada en 1822, se comió una subvención pública enorme y nunca se terminó, aunque el Science Museum construyó una siguiendo sus planos en 1991 y funcionó exactamente como estaba diseñada.',
        'Calcula. Eso es todo lo que hace, y lo hace girando una manivela.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: 'Babbage no terminó sus máquinas por una mezcla de razones: las tolerancias estaban en el límite de lo que podían hacer los talleres victorianos, no dejaba de rediseñar y se peleó con su ingeniero. «Era imposible en su época» es la versión popular y no es del todo cierta: la construcción de 1991 no usó ninguna técnica indisponible en la década de 1840.',
        sourceId: 'swade-2001',
      },
      sourceIds: ['swade-2001', 'hollings-2018'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'En 1833, con diecisiete años, llevaron a Ada a ver un modelo de demostración de la máquina diferencial. Sophia Frend, que estaba allí, recordó después que mientras los demás visitantes la admiraban como se admira un truco de magia, Ada quería entender qué estaba haciendo.',
        'Para entonces Babbage ya había pasado a un diseño mucho más radical, y la diferencia entre las dos máquinas es todo el asunto de esta historia.',
        'La máquina diferencial hace una cosa. Su comportamiento está incorporado en los engranajes; para que hiciera otra cosa habría que reconstruirla.',
        'La máquina analítica, diseñada desde 1834, no tiene tarea fija. Tiene un «almacén» —memoria, prevista para mil números de cuarenta cifras— y un «molino», que ejecuta operaciones sobre números traídos del almacén y devuelve los resultados. Lo que hace en cada momento lo determinan tarjetas perforadas que se le introducen, y que especifican tanto las operaciones como las variables sobre las que actúan. Puede repetir secuencias de tarjetas y —crucialmente— puede tomar un camino distinto según el resultado de un cálculo que acaba de hacer.',
        'Memoria, procesador, bucles, bifurcación condicional e instrucciones guardadas aparte de la máquina. Eso es un ordenador de propósito general, descrito en la década de 1830, en latón y vapor.',
        'La idea de las instrucciones en tarjetas venía directamente de la industria textil. El telar de Joseph-Marie Jacquard, en uso comercial desde alrededor de 1804, leía el patrón que estaba tejiendo en una cadena de tarjetas perforadas; cambias las tarjetas y el mismo telar teje otro diseño. Babbage tenía un retrato de Jacquard tejido por una de esas máquinas a partir de unas veinticuatro mil tarjetas, y se lo enseñaba a las visitas.',
        'El problema era que nadie entendía lo que tenía. Se le daba fatal explicarse, tenía fama pública de genio cascarrabias con proyectos sin terminar, y la máquina no existía para poder señalarla.',
      ],
      sourceIds: ['menabrea-lovelace-1843', 'swade-2001', 'babbage-1864'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'En 1840 Babbage dio una serie de conferencias sobre la máquina analítica en Turín, el único relato público sustancial que hizo nunca de ella. Un joven ingeniero militar italiano del público, Luigi Federico Menabrea, después primer ministro de Italia, las puso por escrito en francés y las publicó en Ginebra en 1842.',
        'Lovelace, ya casada y conocida como condesa de Lovelace, tradujo al inglés el artículo de Menabrea. Cuando Babbage vio la traducción, le preguntó por qué no había escrito un artículo propio sobre un tema que conocía tan bien. Ella respondió, en esencia, que no se le había ocurrido. Él le sugirió que añadiera notas.',
        'Las Notas, rotuladas de la A a la G, ocupan aproximadamente dos veces y media el artículo que anotan. Se publicaron en 1843 en las *Scientific Memoirs* de Taylor, firmadas solo con «A.A.L.»: iniciales, porque en 1843 que una condesa pusiera su nombre en una publicación científica no era sencillo.',
        'Lo que hay dentro se divide en dos cosas, y normalmente se mezclan, lo que no le hace favores a ninguna.',
        '**La Nota G es el programa.** Expone cómo calcularía la máquina analítica los números de Bernoulli, una serie recursiva genuinamente incómoda en la que cada valor depende de los anteriores. La nota desarrolla las matemáticas y luego presenta una tabla: una secuencia numerada de operaciones que indica qué variables se leen, cuáles se escriben, qué operación se realiza y a dónde vuelve el bucle. Es código reconocible. Se publicó entero, para una máquina que no se había construido y no se construiría.',
        '**La Nota A es la idea.** Aquí no describe lo que la máquina hace, sino qué clase de cosa es. La máquina analítica, escribe, teje patrones algebraicos igual que el telar de Jacquard teje flores y hojas. Y luego la frase que importa: suponiendo que las relaciones fundamentales de los sonidos con altura pudieran expresarse y adaptarse, la máquina podría componer piezas musicales elaboradas y científicas de cualquier grado de complejidad o extensión.',
        'Ese es el salto. Todos los demás, Babbage incluido, pensaban en una máquina para números. Lovelace vio que los números eran accesorios: la máquina manipula símbolos según reglas, y si puedes codificar algo en símbolos, la máquina puede operar sobre ello. Música. Lenguaje. Lo que sea. Ese es el cimiento conceptual de la computación, y aparece por primera vez, impreso, en una nota al pie de 1843.',
        'La Nota G contiene también su frase más citada, y es un límite y no una promesa: la máquina analítica no tiene pretensión alguna de originar nada, y solo puede hacer aquello que sepamos ordenarle que haga. Ciento siete años después, Alan Turing dedicó una sección de su artículo sobre inteligencia de las máquinas a discutir con ella, bajo el epígrafe «La objeción de lady Lovelace».',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'De la Nota A, 1843: la máquina analítica, escribe, teje patrones algebraicos igual que el telar de Jacquard teje flores y hojas — y si las relaciones fundamentales de los sonidos pudieran expresarse, podría componer piezas musicales de cualquier complejidad. Nadie más estaba diciendo nada ni remotamente parecido sobre una máquina de calcular.',
        sourceId: 'menabrea-lovelace-1843',
      },
      sourceIds: ['menabrea-lovelace-1843', 'turing-1950', 'hollings-2018'],
    },

    whyItHappened: {
      heading: '¿De quién era el trabajo?',
      paragraphs: [
        'Esto se lleva discutiendo más de cincuenta años, a veces con mal genio, y merece exponerse bien en vez de despacharse en cualquiera de las dos direcciones.',
        '**El argumento escéptico.** Babbage llevaba una década trabajando en la máquina y había escrito programas para ella él mismo, aunque no los publicó. Le suministró material a Lovelace durante 1843, y en sus propias memorias dice que discutieron juntos los ejemplos y que él sugirió los números de Bernoulli como tema. Bruce Collier, en una tesis de Harvard de 1970, llevó la postura escéptica al extremo y sostuvo que el autor era en la práctica Babbage. La biografía de Dorothy Stein de 1985 también concluyó que el dominio matemático de Lovelace era menor de lo que afirman sus admiradores.',
        '**El argumento a su favor.** La correspondencia de 1843 entre ambos se conserva, y no se lee como un dictado. Ella manda borradores, discute, replica y pide el material que quiere; él manda notas y comentarios. En un intercambio le caza un error en un cálculo que él le había mandado y se lo dice, cosa que no hace un amanuense. Y la intuición de propósito general de la Nota A no tiene precedente en ningún escrito del propio Babbage: él describió su máquina como una máquina de calcular hasta el final de su vida.',
        '**Dónde está hoy la investigación.** Hollings, Martin y Rice repasaron la correspondencia matemática de los archivos y concluyeron que las matemáticas de las Notas son en lo sustancial obra propia de Lovelace, desarrollada con aportaciones y material de Babbage, y que su dominio era real aunque no el de una matemática investigadora. Doron Swade, que pasó años construyendo las máquinas de Babbage, ha sostenido específicamente que el salto más allá del número es de ella y es lo más importante del documento.',
        '**Y está el problema del encuadre.** «La primera programadora» es una afirmación que las Notas no sostienen del todo, porque Babbage había escrito antes secuencias de operaciones sin publicarlas, y porque el título traslada una descripción laboral moderna a 1843. Es también una afirmación extrañamente pequeña para lo que hay. Lo interesante de las Notas no es que se tabule una secuencia de operaciones —eso podía hacerlo Babbage—, sino que alguien mirase una máquina de calcular de latón y la entendiera como un dispositivo para operar sobre símbolos en general.',
        'Lo incómodo del metanivel es que la discusión nunca se ha llevado de forma neutral. A ella la han inflado hasta genio solitaria y la han despachado como aficionada bien relacionada, y las dos cosas se han hecho por razones que poco tenían que ver con el documento. El documento está disponible. Merece leerse.',
      ],
      sourceIds: ['hollings-2018', 'babbage-1864', 'swade-2001', 'toole-1992'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'A corto plazo, casi nada. Ese es el dato más raro de esta historia.',
      ],
      shortTerm: [
        'Las Notas se publicaron en 1843 y las leyó muy poca gente. La máquina analítica nunca se construyó y Babbage no consiguió más financiación.',
        'En 1844 Lovelace le propuso a Babbage encargarse de la gestión de sus asuntos y de su defensa pública. Él se negó, y la colaboración terminó en la práctica.',
        'Ella desarrolló un cáncer de útero y murió en noviembre de 1852, con treinta y seis años, la misma edad a la que había muerto su padre. A petición suya la enterraron junto a él.',
        'Babbage siguió diseñando hasta su muerte en 1871, y la máquina analítica no se completó nunca. Su hijo montó después parte del molino a partir de sus planos.',
      ],
      longTerm: [
        'La línea de descendencia se rompió. Cuando se construyeron los primeros ordenadores electrónicos en los años cuarenta, sus diseñadores en general no trabajaban a partir de Babbage: hubo que llegar otra vez a las ideas de forma independiente.',
        'Turing conocía las Notas y las abordó directamente: la sección de su artículo de 1950 titulada «La objeción de lady Lovelace» responde a su afirmación de que una máquina no puede originar nada.',
        'El libro de B. V. Bowden de 1953, *Faster Than Thought*, reeditó las Notas y las devolvió a la circulación dentro de la profesión informática.',
        'En 1980 el Departamento de Defensa estadounidense llamó Ada a su nuevo lenguaje de programación normalizado, y el manual de referencia lleva un número de norma militar elegido por su año de nacimiento.',
        'La intuición de propósito general de la Nota A es hoy sencillamente cómo entiende todo el mundo un ordenador, que es la prueba más fuerte posible de que era correcta y la razón de que sea fácil no ver lo extraña que resultaba en 1843.',
      ],
      unexpected: [
        'La tabla publicada de la Nota G contiene un pequeño error, cosa que resulta extrañamente tranquilizadora: es justo el tipo de fallo que comete quien está realizando de verdad un cálculo y no quien lo copia.',
        'Babbage tenía un retrato de Jacquard en seda, tejido en un telar de Jacquard con unas veinticuatro mil tarjetas perforadas, y se lo enseñaba a las visitas como ilustración de lo que haría su máquina.',
        'Lovelace intentó aplicar las matemáticas a las apuestas con un grupo de amigos a finales de la década de 1840, perdió mucho y, según se cuenta, empeñó joyas familiares para cubrirlo.',
        'La enterraron, por deseo propio, junto a un padre al que no había conocido, en la iglesia de Hucknall, en Nottinghamshire.',
        'Su frase más citada es una afirmación sobre los límites de la máquina y no sobre su promesa — y es la que provocó la respuesta más trascendente de la historia de la inteligencia artificial.',
      ],
      sourceIds: ['hollings-2018', 'turing-1950', 'swade-2001'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'La razón para conservar esta historia no es que una mujer hiciera matemáticas en 1843, aunque sea cierto y fuera más difícil de lo que suena. Es que la idea más importante del documento es conceptual, y se alcanzó mirando una máquina y preguntando qué clase de cosa era en realidad.',
        'Babbage construyó y diseñó de forma brillante y describió su trabajo, durante cuarenta años, como cálculo. Lovelace miró el mismo diseño y vio que la aritmética era un caso particular. Las tarjetas no saben que llevan números. Si puedes expresar algo —una estructura musical, una relación lógica, un fragmento de lenguaje— en símbolos con reglas, entonces una máquina que sigue reglas sobre símbolos puede operar sobre ello. Todo lo que un ordenador ha acabado siendo, de una hoja de cálculo a un motor de ajedrez o a un modelo de lenguaje, viene aguas abajo de esa frase.',
        'Y llegó un siglo entero antes de que hubiera nada donde ejecutarla, cosa que conviene sostener un momento. Las ideas no se adoptan cuando son correctas; se adoptan cuando hay algo que hacer con ellas. Las Notas se publicaron, no las leyó casi nadie y hubo que redescubrirlas en los años cincuenta, por gente que ya había construido las máquinas por su cuenta.',
        'Y la discusión sobre quién escribió qué merece conservarse con honestidad, por los dos lados, porque las colaboraciones son genuinamente difíciles de atribuir y la tentación de resolverlas por preferencia es fortísima. Las cartas existen. Muestran a dos personas discutiendo de matemáticas, una de las cuales encontró un error en el trabajo de la otra. Eso es lo que parece una colaboración, y es mejor historia que cualquiera de las dos versiones más ordenadas.',
        'Lo último es su cautela. Insistió en que la máquina no podía originar nada y solo podía hacer lo que supiéramos ordenarle. Estaba describiendo la máquina que conocía. Un siglo después Turing se tomó la frase lo bastante en serio como para responderla por su nombre, y la pregunta de si una máquina que sigue instrucciones puede producir algo genuinamente nuevo no ha dejado de estar viva desde entonces.',
      ],
      sourceIds: ['menabrea-lovelace-1843', 'turing-1950'],
    },
  },

  timeline: [
    { year: 1804, title: 'Entra en uso el telar de Jacquard', detail: 'Un telar que lee su patrón en una cadena de tarjetas perforadas. Cambias las tarjetas y la misma máquina teje otra cosa.', pivotal: true },
    { year: 1815, title: 'Nace Ada Byron', detail: 'Su padre se va del país un mes después y no vuelve a verla. Su madre hace que le enseñen matemáticas con rigor y a propósito.' },
    { year: 1822, title: 'Babbage empieza la máquina diferencial', detail: 'Una máquina para calcular y componer tablas matemáticas sin error humano. Recibe una gran subvención pública y no se termina nunca.' },
    { year: 1833, title: 'Ada conoce a Babbage', detail: 'Con diecisiete años le enseñan el modelo de demostración de la máquina diferencial, y ella pregunta cómo funciona en vez de admirarla.', pivotal: true },
    { year: 1834, title: 'Se diseña la máquina analítica', detail: 'Una máquina de propósito general con almacén, molino, instrucciones en tarjetas, bucles y bifurcación condicional. No se construye nunca.', pivotal: true },
    { year: 1840, title: 'Babbage da conferencias en Turín', detail: 'El único relato público sustancial que hace nunca de la máquina analítica. Un joven ingeniero, Menabrea, toma notas.' },
    { year: 1842, title: 'Menabrea publica en francés', detail: 'Las conferencias de Turín se redactan y se publican en Ginebra: la primera descripción impresa de la máquina.' },
    { year: 1843, title: 'Se publican las Notas', detail: 'La traducción de Lovelace con siete notas, dos veces y media el original, firmadas solo «A.A.L.». La Nota G es el programa; la Nota A es la idea.', pivotal: true },
    { year: 1852, title: 'Lovelace muere a los treinta y seis', detail: 'De cáncer de útero, la misma edad a la que murió su padre. La entierran junto a él por deseo propio.', pivotal: true },
    { year: 1871, title: 'Muere Babbage', detail: 'Todavía diseñando. Ninguna de las dos máquinas se completó en vida, y la línea de ideas queda rota durante ochenta años.' },
    { year: 1950, title: 'Turing la responde por su nombre', detail: '«Computing Machinery and Intelligence» dedica una sección a «La objeción de lady Lovelace»: su afirmación de que una máquina no puede originar nada.', pivotal: true },
    { year: 1953, title: 'Se reeditan las Notas', detail: '«Faster Than Thought», de B. V. Bowden, las pone de nuevo ante la profesión informática, un siglo después de su publicación.' },
    { year: 1991, title: 'Se construye una máquina diferencial', detail: 'El Science Museum completa una siguiendo los planos de Babbage, sin usar ninguna técnica indisponible en su época. Funciona.', pivotal: true },
  ],

  causeEffect: [
    { cause: 'Las tablas matemáticas impresas están llenas de errores humanos', effect: 'Babbage diseña una máquina que las calcule y las componga', because: 'Una cifra errónea en una tabla de navegación puede hundir un barco, y los errores entraban tanto al calcular como al componer los tipos.' },
    { cause: 'La máquina diferencial solo puede hacer una cosa', effect: 'Babbage diseña una máquina que recibe instrucciones', because: 'Si el comportamiento está en los engranajes, cambiar de tarea significa reconstruir la máquina, así que hay que separar las instrucciones del mecanismo.' },
    { cause: 'El telar de Jacquard lee patrones en tarjetas perforadas', effect: 'La máquina analítica toma sus instrucciones de tarjetas', because: 'La industria textil ya había resuelto cómo darle a una máquina un juego de instrucciones intercambiable, y Babbage se llevó la solución entera.' },
    { cause: 'Babbage da conferencias en Turín y Menabrea las redacta', effect: 'Por fin hay un documento que traducir', because: 'Babbage nunca publicó un relato completo, así que la única descripción impresa de su máquina estaba en francés y la firmaba alguien que lo había escuchado.' },
    { cause: 'Babbage le pregunta por qué no escribe su propio artículo', effect: 'Lovelace añade siete notas a la traducción', because: 'La sugerencia de anotar convirtió una traducción en una obra original dos veces y media más larga que aquello que anotaba.' },
    { cause: 'Ella ve las tarjetas como portadoras de símbolos y no de números', effect: 'La máquina se vuelve de propósito general en principio', because: 'Si una máquina que sigue reglas actúa sobre símbolos, entonces cualquier cosa expresable en símbolos —la música incluida— entra en su alcance.' },
    { cause: 'La máquina analítica no se construye nunca', effect: 'Las ideas hay que redescubrirlas en los años cuarenta', because: 'Una idea sin nada donde ejecutarse no tiene usuarios, ni continuadores, ni motivo para que nadie mantenga el documento en circulación.' },
  ],

  myths: [
    {
      myth: 'Ada Lovelace fue la primera programadora informática.',
      reality: 'Publicó el primer programa en una revista científica, lo cual es real y defendible. Pero Babbage había escrito antes secuencias de operaciones para la máquina analítica sin publicarlas, y la expresión traslada un título laboral moderno a 1843. Es además una afirmación más pequeña que la que las Notas sí sostienen.',
      whyItPersists: 'Es corta, cabe en un póster y la mete en una categoría familiar. La intuición de propósito general de la Nota A es más difícil de comprimir y mucho más importante.',
      sourceIds: ['hollings-2018', 'babbage-1864'],
    },
    {
      myth: 'Las Notas las escribió Babbage y ella solo tradujo.',
      reality: 'La correspondencia de 1843 se conserva y muestra borradores yendo y viniendo, desacuerdos y a Lovelace cazando un error en material que Babbage le había mandado. La investigación actual, tras repasar las cartas matemáticas de los archivos, concluye que las matemáticas son en lo sustancial suyas, desarrolladas con aportación de él. La intuición de propósito general de la Nota A no aparece en ningún escrito de Babbage.',
      whyItPersists: 'El argumento escéptico se planteó con fuerza en los años setenta y ochenta y tiene una larga estela, y las colaboraciones son genuinamente fáciles de reasignar a la parte que al que escribe le parezca más verosímil.',
      sourceIds: ['hollings-2018', 'toole-1992'],
    },
    {
      myth: 'Las máquinas de Babbage no podían construirse con la tecnología victoriana.',
      reality: 'El Science Museum completó una máquina diferencial según sus planos en 1991, usando solo técnicas y tolerancias disponibles en la década de 1840, y funciona. Las razones del fracaso fueron la financiación, el rediseño interminable y una ruptura catastrófica con su ingeniero jefe.',
      whyItPersists: '«Adelantado a su tiempo» es una explicación más halagadora que «no supo gestionar un proyecto», y ahorra tener que mirar qué salió mal de verdad.',
      sourceIds: ['swade-2001'],
    },
    {
      myth: 'Predijo el ordenador moderno.',
      reality: 'Entendió algo cierto y general sobre lo que podía ser una máquina que manipula símbolos, y lo dijo por escrito en 1843. No anticipó la electrónica, ni el programa almacenado, ni la arquitectura concreta de las máquinas modernas, y su frase más citada insiste en que la máquina no podía originar nada. Aquí la precisión la sirve mejor que el entusiasmo.',
      whyItPersists: 'El pasaje de la Nota A es de verdad sorprendente, y la distancia entre él y la computación moderna es tan grande que tienta cerrarla con una palabra como «predijo».',
      sourceIds: ['menabrea-lovelace-1843', 'turing-1950'],
    },
  ],

  disagreements: [
    {
      question: '¿Cuánto de las Notas es obra propia de Lovelace?',
      positions: [
        { view: 'En lo sustancial suyo. La correspondencia de archivo la muestra desarrollando las matemáticas, discutiendo con Babbage, pidiendo material y corrigiendo un error de lo que él le mandó — y el salto conceptual de la Nota A no tiene equivalente en los escritos de él.', heldBy: 'Hollings, Martin y Rice, a partir de las cartas', sourceId: 'hollings-2018' },
        { view: 'En lo sustancial de Babbage. Llevaba una década con la máquina, suministró material, sugirió los números de Bernoulli como ejemplo y había escrito antes programas propios sin publicar.', heldBy: 'Bruce Collier y Dorothy Stein, y las memorias del propio Babbage', sourceId: 'babbage-1864' },
      ],
      atlasPosition: 'El atlas trata las Notas como una colaboración en la que las matemáticas son en gran medida de ella y la máquina es enteramente de él, y atribuye la intuición de propósito general a Lovelace en concreto, porque aparece en su texto y en ninguno de los de él.',
    },
    {
      question: '¿Se podía construir la máquina analítica en el siglo XIX?',
      positions: [
        { view: 'La diferencial desde luego sí: en 1991 se construyó una con los planos originales y tolerancias de época, y funciona. Los fracasos de Babbage fueron de gestión y de dinero.', heldBy: 'Doron Swade, que dirigió la reconstrucción', sourceId: 'swade-2001' },
        { view: 'La analítica es otra cosa: mucho mayor, más compleja, nunca cerrada como diseño único y con exigencias de precisión a una escala que nadie ha intentado reproducir todavía.', heldBy: 'La lectura prudente entre los historiadores de la computación', sourceId: 'hollings-2018' },
      ],
      atlasPosition: 'El atlas afirma que la máquina diferencial era demostrablemente construible y que la analítica sigue sin ponerse a prueba, porque no se ha construido ninguna versión completa. No sostiene que fuera imposible ni que habría funcionado.',
    },
  ],

  didYouKnow: [
    'Su madre hizo que le enseñaran matemáticas a propósito, como protección contra heredar el temperamento de su padre. Su padre era lord Byron.',
    'Las Notas son unas dos veces y media más largas que el artículo que anotan, y se firmaron solo con sus iniciales.',
    'La idea de las tarjetas perforadas viene del telar de Jacquard. Babbage tenía un retrato de Jacquard en seda tejido con unas veinticuatro mil tarjetas.',
    'La máquina analítica tenía memoria, procesador, bucles y bifurcación condicional — diseñada en 1834, y nunca construida.',
    'La Nota G contiene un pequeño error en su tabla publicada, que es lo que parece un cálculo trabajado de verdad y no uno copiado.',
    'Su frase más citada es un límite: la máquina «no tiene pretensión alguna de originar nada».',
    'Turing respondió a esa frase por su nombre en 1950, bajo el epígrafe «La objeción de lady Lovelace».',
    'El Science Museum construyó una máquina diferencial con los planos de Babbage en 1991, sin usar ninguna técnica indisponible en los años cuarenta del XIX. Funciona.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'Charles Babbage diseñó dos máquinas en la década de 1830. La diferencial calculaba tablas matemáticas; la analítica, diseñada desde 1834, era de propósito general, con memoria, procesador, instrucciones en tarjetas perforadas tomadas del telar de Jacquard, bucles y bifurcación condicional. No construyó ninguna en vida.',
        'Babbage describió públicamente la máquina analítica una sola vez, en unas conferencias en Turín en 1840. Un ingeniero italiano, Menabrea, publicó un relato en francés. Ada Lovelace lo tradujo al inglés y, por sugerencia de Babbage, le añadió siete notas que suman dos veces y media el original.',
        'La Nota G expone cómo calcularía la máquina los números de Bernoulli, como una tabla numerada de operaciones con bucles y variables: el primer programa publicado en una revista científica. La Nota A es la más importante: escribió que la máquina teje patrones algebraicos como el telar teje flores, y que si las relaciones musicales pudieran expresarse en símbolos, podría componer música. Esa es la intuición de que un ordenador no es una máquina para números sino para símbolos.',
        'Murió en 1852, a los treinta y seis. La máquina no se construyó nunca, y las ideas hubo que redescubrirlas en los años cuarenta del siglo XX. Turing abordó su frase más célebre —que la máquina no podía originar nada— por su nombre en 1950.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Hace casi doscientos años, un señor llamado Charles Babbage diseñó una máquina de engranajes de latón que podía hacer cuentas ella sola. Luego diseñó otra mucho más lista. En vez de una máquina para un solo trabajo, hizo una máquina a la que podías *decirle* qué hacer, dándole tarjetas con agujeros. Esa idea la copió de las máquinas de tejer, que usaban tarjetas perforadas para decidir el dibujo.',
        'Nunca llegó a construirla. Se quedó en planos.',
        'Una mujer llamada Ada Lovelace leyó sobre la máquina y tradujo la descripción al inglés. Y luego le añadió notas al final — y sus notas acabaron siendo más del doble de largas que lo que estaba traduciendo.',
        'En una nota escribió, paso a paso, exactamente qué tarjetas harían falta para que la máquina calculara un conjunto de números muy complicado. Eso es básicamente un programa de ordenador, escrito para un ordenador que no existía.',
        'Pero su idea más lista está en otra nota. Todos los demás pensaban que la máquina servía para números. Ada se dio cuenta de que la máquina no sabe que trabaja con números: solo está siguiendo reglas sobre símbolos. Así que si pudieras escribir la música con símbolos, dijo, la máquina podría escribir música.',
        'Y eso es exactamente lo que hacen los ordenadores ahora: imágenes, música, palabras, juegos. Ella lo dedujo en 1843, y luego nadie construyó un ordenador de verdad hasta cien años después.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El documento primario es Menabrea (1842) en la traducción de Lovelace con las Notas A-G, publicado en las *Scientific Memoirs* de Taylor III (1843). Cualquier valoración seria tiene que distinguir tres afirmaciones que los relatos populares mezclan: el cálculo tabulado de los números de Bernoulli de la Nota G; el reconocimiento de la máquina como dispositivo general de manipulación de símbolos de la Nota A; y la afirmación epistémica sobre la originación, también en la Nota G.',
        'Sobre la atribución, la base de archivo es la correspondencia Lovelace-Babbage de 1843, principalmente en la Bodleiana y la British Library, con reproducción sustancial en Toole (1992). Hollings, Martin y Rice (2018) ofrecen la lectura matemática más cuidadosa y concluyen que el contenido analítico es en gran medida de Lovelace, desarrollado bajo la supervisión de Babbage y con material aportado por él. Las posturas escépticas de Collier (1970) y Stein (1985) siguen en circulación y deben discutirse en vez de despacharse, aunque ninguna tuvo acceso a la correspondencia matemática con la profundidad que ha usado el trabajo posterior.',
        'La afirmación de la Nota A merece tratamiento aparte porque es la que no tiene antecedente en Babbage. Su propia concepción, sostenida desde la década de 1820 hasta *Passages* (1864), es aritmética: la máquina «se come su propia cola» y calcula. La formulación de Lovelace —que la máquina actúa sobre las relaciones abstractas de las cosas, de las cuales el número es una instancia— es una afirmación sobre la semántica de la operación mecanizada y no sobre su aritmética, y es el antecedente conceptual genuino de la máquina de propósito general.',
        'El tratamiento de Turing en *Mind* (1950), sección 6, con el subtítulo «La objeción de lady Lovelace», es el hecho de recepción que importa. Su réplica —que no sabemos qué le hemos ordenado hacer a una máquina suficientemente compleja, y que las máquinas que aprenden pueden sorprender a sus diseñadores— es el origen de un debate que no se ha cerrado. Nótese que Turing discute con la lectura fuerte de la afirmación, mientras que el texto de ella, leído de cerca, plantea posiblemente un punto más estrecho sobre la dependencia de la máquina de un análisis ya realizado por un humano.',
        'Por último, la literatura contrafáctica sobre Babbage debe manejarse con la reconstrucción de Swade a la vista: la máquina diferencial n.º 2 de 1991 demuestra que el fracaso no fue de capacidad manufacturera. Extender esa conclusión a la máquina analítica no está justificado, ya que nunca se cerró un diseño completo y no se ha intentado ninguna reconstrucción.',
      ],
    },
    {
      id: 'note-a-and-note-g',
      label: 'Las dos cosas que hay en las Notas',
      kind: 'angle',
      paragraphs: [
        'Casi todos los relatos sobre Lovelace comprimen su aportación en una sola afirmación. Son dos, son de distinta clase, y separarlas aclara las dos.',
        '**Nota G: el programa.** Una tabla que muestra cómo calcularía la máquina analítica los números de Bernoulli. Tiene operaciones numeradas, especifica qué variables se leen y se escriben en cada paso e incluye un bucle: una sección de la secuencia ejecutada repetidamente con valores cambiantes. Es el primer programa publicado en una revista científica, y en él se apoya el título de «primera programadora». Es también la más débil de sus dos aportaciones, porque una tabla de operaciones es algo que Babbage podía producir y había producido.',
        '**Nota A: la idea.** Aquí se pregunta qué *es* la máquina. Su respuesta: teje patrones algebraicos igual que el telar de Jacquard teje flores y hojas; opera sobre las relaciones abstractas entre cosas, y el número es solo una clase de cosa sobre la que podría operar. Si las relaciones de los sonidos con altura pudieran expresarse, podría componer música.',
        'La Nota G describe cómo usar la máquina. La Nota A describe qué clase de máquina es. Todos los ordenadores posteriores han sido máquinas de la clase descrita en la Nota A, y toda la disciplina de la computación se apoya en la observación de que los símbolos no tienen por qué significar cantidad.',
        'Y esto importa para la cuestión del mérito porque la Nota A no tiene equivalente en cuarenta años de escritos de Babbage. La llamó máquina de calcular hasta el día de su muerte. La afirmación más fuerte a favor de Lovelace no es el programa, que es discutible. Es la frase sobre la música, que no lo es.',
      ],
    },
    {
      id: 'the-objection',
      label: 'La frase que Turing tuvo que responder',
      kind: 'contrast',
      paragraphs: [
        'La frase más citada de las Notas es una restricción, y seguirla hacia delante es la mejor manera de ver lo vivas que siguen estas preguntas.',
        '**1843, Lovelace.** La máquina analítica no tiene pretensión alguna de originar nada. Puede hacer aquello que sepamos ordenarle que haga. En su contexto está planteando algo cuidadoso y modesto: la máquina ejecuta un análisis que un humano ya ha realizado, y no puede aportar ese análisis.',
        '**1950, Turing.** En *Computing Machinery and Intelligence* enumera objeciones a la idea de una máquina pensante y a una de ellas le pone su nombre. Su respuesta tiene dos partes. Primera, que «lo que sepamos ordenarle que haga» está haciendo muchísimo trabajo: el comportamiento de una máquina suficientemente compleja sorprende con regularidad a quien la construyó, y la de Babbage era sencillamente demasiado pequeña para demostrarlo. Segunda, y más radical, que una máquina que aprende no está limitada a lo que su diseñador anticipó.',
        '**Ahora.** La objeción no ha desaparecido y la respuesta tampoco. Toda discusión sobre si un sistema que produce texto o imágenes está haciendo algo original o solo recombinando lo que se le dio es una versión de este intercambio. El vocabulario ha cambiado; la pregunta es de Lovelace, y la réplica habitual es de Turing.',
        'Conviene notar que quizá se la leyó mal de forma productiva. Su texto va posiblemente sobre la dependencia de la máquina respecto de un análisis humano previo, y no sobre la creatividad de las máquinas en general. Turing discutió con la versión fuerte, y la versión fuerte resultó ser la que ha merecido un siglo de discusión.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Dos máquinas',
    before: {
      title: 'La máquina diferencial',
      points: [
        'Hace una cosa: calcula e imprime tablas',
        'El comportamiento está fijado en los engranajes',
        'Para cambiar de tarea hay que reconstruir la máquina',
        'Financiada por el Estado, nunca completada',
        'Construida con éxito según los planos originales en 1991',
      ],
    },
    after: {
      title: 'La máquina analítica',
      points: [
        'Hace lo que le digan las tarjetas',
        'Un almacén para números y un molino que opera sobre ellos',
        'Bucles y bifurcación condicional, diseñados en 1834',
        'Nunca financiada, nunca construida, nunca cerrada',
        'Descrita por escrito solo por Menabrea y por Lovelace',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si la máquina analítica se hubiera construido?',
      reasoning: 'Un ordenador de propósito general funcionando en la década de 1840 habría dado a las Notas algo contra lo que ponerse a prueba, y una comunidad de usuarios que desarrollara las ideas. Programar, de alguna forma, habría sido una actividad decimonónica, y no se habría abierto el hueco de ochenta años hasta el redescubrimiento.',
      constraint: 'Especulación fuerte. El diseño nunca se cerró, la máquina habría sido enorme y lenta, y su ventaja práctica sobre equipos de calculistas humanos no está nada clara: la máquina diferencial se financió y se abandonó en parte porque el argumento a su favor no era evidente ni para quienes la pagaban.',
    },
    {
      question: '¿Y si Lovelace hubiera vivido treinta años más?',
      reasoning: 'En 1844 propuso encargarse de la gestión de los asuntos de Babbage, cosa que él rechazó; ella comunicaba bastante mejor que él y se movía en círculos a los que él no llegaba. Una colaboración larga podría haber conseguido financiación, o al menos haber producido más obra publicada desarrollando el argumento de propósito general de la Nota A.',
      constraint: 'Esto es especular sobre una carrera, y descansa en suponer que el obstáculo era la difusión. Las dificultades de Babbage eran también técnicas y de carácter, ya se había enemistado con el Tesoro, y las propias Notas las leyó casi nadie en su momento: defender mejor una máquina no construida quizá no habría cambiado gran cosa.',
    },
  ],

  quiz: [
    {
      question: '¿Cuál es la diferencia entre la máquina diferencial y la analítica?',
      options: [
        'La segunda era más grande',
        'La primera calculaba tablas; la segunda era de propósito general y recibía instrucciones en tarjetas',
        'La segunda era eléctrica',
        'La primera era diseño de Lovelace',
      ],
      answerIndex: 1,
      explains: 'La diferencial tenía su tarea incorporada en los engranajes. La analítica tenía memoria, procesador e instrucciones en tarjetas perforadas, así que se le podía decir qué hacer en vez de reconstruirla.',
    },
    {
      question: '¿De dónde salió la idea de las tarjetas perforadas?',
      options: [
        'De la señalización ferroviaria',
        'De las tablas de navegación naval',
        'Del telar de Jacquard, que leía los patrones de tejido en tarjetas',
        'De los libros de contabilidad bancaria',
      ],
      answerIndex: 2,
      explains: 'El telar de Jacquard, en uso comercial desde alrededor de 1804, leía su patrón en una cadena de tarjetas perforadas. Babbage tomó el mecanismo directamente y tenía un retrato de Jacquard tejido en uno.',
    },
    {
      question: '¿Cuál es la idea más importante de las Notas de Lovelace?',
      options: [
        'La tabla para calcular los números de Bernoulli',
        'Que la máquina opera sobre símbolos, así que entra en su alcance todo lo expresable en símbolos',
        'Que la máquina sería más rápida que los calculistas humanos',
        'Que la máquina podía construirse barata',
      ],
      answerIndex: 1,
      explains: 'La Nota A sostiene que la máquina teje patrones algebraicos como el telar teje flores, y que podría componer música si las relaciones musicales fueran expresables. Esa intuición no aparece en ningún escrito de Babbage.',
    },
    {
      question: '¿A qué llamó Turing «la objeción de lady Lovelace»?',
      options: [
        'A su afirmación de que la máquina no podía construirse',
        'A su afirmación de que la máquina no tiene pretensión de originar nada',
        'A su afirmación de que las mujeres no podían programar',
        'A su afirmación de que la tabla de Bernoulli estaba mal',
      ],
      answerIndex: 1,
      explains: 'En su artículo de 1950 dedicó una sección a su frase de que la máquina solo puede hacer lo que sepamos ordenarle, y sostuvo que las máquinas complejas y las que aprenden sorprenden con regularidad a sus diseñadores.',
    },
  ],

  sources: [
    {
      id: 'menabrea-lovelace-1843',
      kind: 'primary',
      author: 'L. F. Menabrea, translated with notes by Ada Augusta, Countess of Lovelace',
      title: 'Sketch of the Analytical Engine invented by Charles Babbage, with Notes by the Translator',
      year: 1843,
      detail: 'Scientific Memoirs de Taylor, vol. 3, pp. 666-731; Notas A-G firmadas «A.A.L.»',
      note: 'El documento en sí. La Nota G contiene el programa de Bernoulli; la Nota A, la intuición de propósito general. Todo lo demás en esta historia es comentario sobre él.',
    },
    {
      id: 'babbage-1864',
      kind: 'primary',
      author: 'Charles Babbage',
      title: 'Passages from the Life of a Philosopher',
      year: 1864,
      detail: 'Longman, Green, Longman, Roberts & Green, Londres',
      note: 'Su propio relato, incluida su descripción de cómo se produjeron las Notas y su sugerencia de los números de Bernoulli. Un participante con un caso que defender.',
    },
    {
      id: 'toole-1992',
      kind: 'archive',
      author: 'Betty Alexandra Toole (ed.)',
      title: 'Ada, the Enchantress of Numbers: A Selection from the Letters of Lord Byron’s Daughter',
      year: 1992,
      detail: 'Strawberry Press, Mill Valley, California',
      note: 'La correspondencia, incluidos los intercambios de 1843 con Babbage. La prueba primaria de cómo se escribieron realmente las Notas.',
    },
    {
      id: 'hollings-2018',
      kind: 'book',
      author: 'Christopher Hollings, Ursula Martin and Adrian Rice',
      title: 'Ada Lovelace: The Making of a Computer Scientist',
      year: 2018,
      detail: 'Bodleian Library Publishing. ISBN 978-1-85124-488-1',
      note: 'La valoración moderna cuidadosa, basada en la correspondencia matemática de los archivos. La fuente de la postura sobre atribución que se adopta aquí.',
    },
    {
      id: 'swade-2001',
      kind: 'book',
      author: 'Doron Swade',
      title: 'The Difference Engine: Charles Babbage and the Quest to Build the First Computer',
      year: 2001,
      detail: 'Viking. ISBN 978-0-670-91020-0',
      note: 'Del hombre que dirigió la reconstrucción de 1991. Zanja si las máquinas eran construibles, y es claro sobre qué fue realmente de Lovelace.',
    },
    {
      id: 'turing-1950',
      kind: 'paper',
      author: 'A. M. Turing',
      title: 'Computing Machinery and Intelligence',
      year: 1950,
      detail: 'Mind, vol. LIX, n.º 236, pp. 433-460; la sección 6 incluye «Lady Lovelace’s Objection»',
      note: 'La recepción que importó. Se toma su afirmación limitativa lo bastante en serio como para nombrarla y dedicarle varias páginas de respuesta.',
    },
  ],
}
