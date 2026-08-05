import type { Story } from '../../types'

export const penicillinEs: Story = {
  slug: 'penicillin',
  title: 'El moho era lo fácil',
  subtitle: 'De 1928 a 1941 — Fleming lo encontró, no supo fabricarlo y lo dejó. Tres personas en Oxford tardaron tres años en convertirlo en medicina.',
  hook: 'Fleming vio el moho en 1928 y lo publicó en 1929, y después no pasó nada durante una década — porque ver algo que mata bacterias no es lo mismo que tener un medicamento.',
  era: 'modern',
  category: 'discoveries',
  years: [1928, 1945],
  regions: ['Reino Unido', 'Estados Unidos'],
  nodes: ['penicillin', 'alexander-fleming', 'oxford-team', 'antibiotics', 'germ-theory'],
  tags: ['medicine', 'science', 'credit', 'war', 'industry', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'jungle',

  reel: [
    { beat: 'hook', punch: true, text: 'Fleming encontró la penicilina en 1928, la publicó en 1929, y luego no pasó nada durante diez años.' },
    { beat: 'hook', text: 'Ver algo que mata bacterias no es lo mismo que tener un medicamento.' },
    { beat: 'worldBefore', text: 'Antes de esto, un arañazo podía matarte, y lo hacía con regularidad.' },
    { beat: 'worldBefore', text: 'La neumonía mataba a un tercio de quienes la cogían. El parto mataba madres.' },
    { beat: 'worldBefore', punch: true, text: 'Los médicos podían nombrar el microbio, verlo multiplicarse y no hacer básicamente nada.' },
    { beat: 'problem', kicker: 'Septiembre de 1928', text: 'Fleming vuelve de vacaciones a un montón de placas que se dejó fuera,' },
    { beat: 'problem', text: 'y una tiene moho encima con un anillo transparente alrededor,' },
    { beat: 'problem', punch: true, text: 'donde las bacterias sencillamente se han parado.' },
    { beat: 'problem', text: 'Lo publica con honestidad. Casi nadie lo lee, y no consigue purificar aquello,' },
    { beat: 'problem', punch: true, text: 'así que a mediados de los treinta ya lo ha dejado. Ahí acaba la historia famosa.' },
    { beat: 'story', kicker: 'Oxford, 1938', text: 'Entonces Ernst Chain, repasando artículos viejos, encuentra el de 1929,' },
    { beat: 'story', text: 'y Howard Florey decide que el laboratorio intentará extraer la sustancia activa.' },
    { beat: 'story', text: 'Norman Heatley monta el aparato con cuñas de hospital, lecheras y un timbre.' },
    { beat: 'story', kicker: 'Mayo de 1940', text: 'Ocho ratones reciben una dosis letal de estreptococos. Cuatro reciben el extracto.' },
    { beat: 'story', punch: true, mark: 'spike', text: 'Por la mañana los cuatro sin tratar están muertos y los cuatro tratados están bien.' },
    { beat: 'story', kicker: 'Febrero de 1941', text: 'El primer paciente es un policía que se muere de una infección por un arañazo.' },
    { beat: 'story', text: 'Mejora tan rápido que no se lo creen — y entonces se acaban las existencias.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'Filtran su orina para recuperar el fármaco y devolvérselo. Muere igual.' },
    { beat: 'whyItHappened', text: 'El problema nunca fue la biología. Era que tenían gramos de aquello,' },
    { beat: 'whyItHappened', text: 'y una sola persona necesita más de lo que un laboratorio cultiva en un mes.' },
    { beat: 'whyItHappened', punch: true, text: 'Así que descubrir la penicilina era en realidad un problema de fabricación, y costó una guerra.' },
    { beat: 'consequences', text: 'Estados Unidos monta tanques de fermentación y halla un moho mejor en un melón de mercado,' },
    { beat: 'consequences', text: 'y para el desembarco de Normandía hay millones de dosis en el suministro.' },
    { beat: 'consequences', punch: true, text: 'Fleming, Florey y Chain reciben el Nobel. Heatley, que montó la máquina, no está en la lista.' },
    { beat: 'whyItMatters', text: 'Y en su discurso Nobel, Fleming dice en voz alta lo incómodo:' },
    { beat: 'whyItMatters', text: 'toma poca cantidad y criarás las bacterias que la sobrevivan.' },
    { beat: 'whyItMatters', punch: true, mark: 'echo', text: 'Describió la resistencia a los antibióticos, con exactitud, en 1945, en plena fiesta.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Cuesta de verdad tener presente lo reciente que es esto. Dentro de la memoria de gente viva, no existía ningún tratamiento fiable para una infección bacteriana. No uno caro, ni uno lento. Ninguno.',
        'La teoría microbiana estaba asentada desde la década de 1870, lo que significaba que los médicos podían identificar el organismo, cultivarlo, verlo multiplicarse y explicar exactamente qué iba a pasar. Lo que no podían era intervenir. Los antisépticos mataban bacterias y también mataban tejido, así que servían en superficies e instrumentos y no dentro de una persona.',
        'Las consecuencias lo atravesaban todo. Un arañazo de una espina de rosal o una patada en un partido de fútbol podían convertirse en una septicemia mortal. La neumonía mataba a alrededor de un tercio de quienes la desarrollaban. La fiebre puerperal seguía matando madres. La cirugía era sobrevivible, pero la infección posterior era una apuesta de verdad, y una fractura abierta significaba a menudo amputar, con el razonamiento de que sin una pierna se puede vivir.',
        'Sí había habido un avance real. En 1932 Gerhard Domagk, en Bayer, descubrió que un colorante rojo, el Prontosil, protegía a los ratones frente a la infección estreptocócica, y en 1935 las sulfamidas estaban en uso clínico. Funcionaban, salvaron vidas —a Churchill lo trataron con una— y tenían límites reales: un abanico estrecho de organismos, una toxicidad apreciable y resistencias que aparecían pronto.',
        'Así que el campo no estaba vacío cuando el equipo de Oxford empezó. Estaba escaso, y todos los que estaban en él sabían qué faltaba: algo que matase un abanico amplio de bacterias y no matase al paciente.',
      ],
      aside: {
        kind: 'number',
        label: 'La cifra',
        body: 'Para tratar a un adulto de una infección en 1941, el equipo de Oxford necesitaba aproximadamente lo que rendían dos mil litros de cultivo de moho. Todo su laboratorio producía lo justo para unos días de un solo paciente. Ese hueco —biología resuelta, cantidad imposible— es la historia de verdad.',
        sourceId: 'lax-2004',
      },
      sourceIds: ['bud-2007', 'lax-2004'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'En septiembre de 1928 Alexander Fleming volvió a su laboratorio del hospital St Mary’s de Londres tras unas vacaciones, y encontró un montón de placas de Petri que había dejado en la mesa. Una, sembrada con *Staphylococcus*, tenía una mancha de moho creciendo, y alrededor del moho había un halo transparente donde las colonias bacterianas se habían disuelto.',
        'Lo investigó como es debido. Identificó el moho como un *Penicillium*, demostró que el caldo en que crecía inhibía una serie de bacterias, demostró que no era tóxico para los glóbulos blancos, llamó penicilina a la sustancia activa y publicó el trabajo en el *British Journal of Experimental Pathology* en 1929.',
        'Y entonces la historia se atasca, y se atasca por buenas razones. La penicilina está presente en el caldo en cantidades minúsculas y es extraordinariamente inestable: se degrada con el calor, con el ácido, con el álcali, con el tiempo. Fleming y sus ayudantes no lograban concentrarla ni conservarla. Sin un preparado purificado y estable no puedes inyectarlo, no puedes dosificarlo y no puedes ensayarlo.',
        'Para lo que Fleming sí veía que servía era como técnica de laboratorio —añadir penicilina a un cultivo frena unas bacterias y deja crecer otras, cosa útil para aislar organismos— y posiblemente como antiséptico de superficie. Lo probó en unas pocas infecciones superficiales con resultados desiguales. A mediados de los años treinta había dejado prácticamente de trabajar en ello.',
        'Esa es la parte que se salta la historia famosa. Durante once años, la penicilina fue una curiosidad publicada que un bacteriólogo competente había reportado con honestidad y no podía usar.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: 'La placa no se contaminó por una ventana abierta. St Mary’s tenía un laboratorio de micología en la planta de abajo, y las esporas de allí son el origen más probable. El tiempo que hizo en Londres aquel septiembre —una ola de frío seguida de calor— también forma parte del accidente: permitió que el moho se instalara primero y las bacterias crecieran después.',
        sourceId: 'lax-2004',
      },
      sourceIds: ['fleming-1929', 'lax-2004'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'En 1938, en la Escuela de Patología Sir William Dunn de Oxford, Ernst Chain —un bioquímico que había salido de Alemania en 1933— repasaba la literatura sobre sustancias antibacterianas y se topó con el artículo de Fleming. El director del departamento, Howard Florey, patólogo australiano, coincidió en que valía la pena seguirlo y pidió financiación para trabajar en ello. La Fundación Rockefeller les dio una subvención. El gobierno británico les dio veinticinco libras.',
        'La persona que hizo que funcionara fue Norman Heatley, y su aportación es la que más sistemáticamente se ha borrado. El problema era extraer un compuesto inestable de litros de caldo sin destruirlo. Heatley ideó una extracción a contracorriente: pasar la penicilina a un disolvente orgánico a pH ácido y devolverla de inmediato al agua a pH neutro, de forma continua, lo bastante rápido como para que no tuviera tiempo de degradarse. Montó el aparato con tubo de vidrio, lecheras, un timbre y, cuando hicieron falta recipientes para cultivar el moho, cuñas de hospital — que resultaron tener exactamente la forma adecuada, así que encargó a una alfarería de Stoke seiscientas copias de cerámica.',
        'El 25 de mayo de 1940 hicieron el experimento que lo zanjó. A ocho ratones se les inyectó una dosis letal de estreptococos. Cuatro recibieron penicilina. A la mañana siguiente los cuatro sin tratar estaban muertos y los cuatro tratados estaban vivos y sanos. El comentario que se le atribuye a Florey es que aquello parecía un milagro.',
        'El primer paciente humano fue Albert Alexander, un policía de Oxford de cuarenta y tres años, ingresado en febrero de 1941 con una septicemia que se le había extendido a la cara, los ojos y los pulmones. Se estaba muriendo. Le dieron penicilina y en veinticuatro horas mejoraba a ojos vistas; en cinco días la infección retrocedía.',
        'Y entonces se les acabó. Todas las existencias nacionales de penicilina eran lo que podía fabricar la Dunn School, y las habían gastado. Recogieron su orina y volvieron a extraer el fármaco de ella para devolvérselo, lo que dio unos días más. Después también se acabó eso. Recayó, y el 15 de marzo de 1941 murió.',
        'Florey sacó la conclusión correcta, que no es la de que hacían falta más ratones. La biología estaba demostrada. Lo que faltaba era capacidad industrial, y la Gran Bretaña de 1941 no tenía ninguna de sobra y la estaban bombardeando.',
        'En junio de 1941 Florey y Heatley volaron a Estados Unidos, llevando muestras de moho untadas en el forro de sus abrigos por si el avión se veía obligado a aterrizar. En el Northern Regional Research Laboratory de Peoria, Illinois, dos cosas transformaron los rendimientos: el agua de maceración de maíz, un residuo de la industria maicera local, resultó un medio de cultivo excelente; y una ayudante de laboratorio llevó un melón cantalupo de un mercado de Peoria con una cepa de *Penicillium* que producía muchísimo más que la de Fleming. La fermentación en tanques profundos, desarrollada con las farmacéuticas estadounidenses, hizo el resto.',
        'Para el desembarco de Normandía, en junio de 1944, había penicilina suficiente en el suministro médico aliado para tratar a todos los heridos que la necesitaran.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'El equipo de Oxford publicó sus primeros resultados clínicos en el Lancet en agosto de 1941, y el tono es característico: cuidadoso, cuantitativo y franco sobre los límites. Describen respuestas espectaculares en pacientes graves, y dicen sin rodeos que el suministro del fármaco era el factor que limitaba el tratamiento, incluido el caso que terminó con la muerte del paciente.',
        sourceId: 'abraham-1941',
      },
      sourceIds: ['chain-florey-1940', 'abraham-1941', 'lax-2004'],
    },

    whyItHappened: {
      heading: 'Por qué costó doce años',
      paragraphs: [
        'El hueco entre 1929 y 1941 no es una historia sobre un genio ignorado. Es una historia sobre en qué consiste de verdad un descubrimiento.',
        '**La química era realmente difícil.** La penicilina es inestable en casi cualquier condición que usarías para concentrar algo. Fleming era un bacteriólogo sin bioquímico al lado, y el problema de la extracción no se resolvió hasta que Heatley lo abordó como un problema de ingeniería y no de química.',
        '**Nadie tenía el equipo adecuado.** Lo que reunió Oxford era insólito: un patólogo capaz de diseñar y dirigir ensayos animales y clínicos, un bioquímico capaz de pensar en la molécula, y un experimentalista de banco capaz de construir aparatos con lo que hubiera en el edificio. Fleming no tenía nada de eso alrededor, y decirlo no es una crítica.',
        '**El problema de escala era el de verdad.** Incluso cuando Oxford ya podía fabricar penicilina utilizable, no podía fabricar suficiente. Un solo paciente consumía todo lo que producía un buen departamento universitario. Un fármaco que existe en gramos es un resultado de investigación; un fármaco que existe en toneladas es una medicina, y la distancia entre ambos es un programa de ingeniería química, no un laboratorio.',
        '**Y entonces la guerra dio la razón para pagarlo.** Las heridas infectadas eran una causa importante de muerte militar, y Estados Unidos tenía la industria de fermentación, el capital y la distancia respecto a los bombardeos. Entre 1943 y 1945 la producción estadounidense pasó de unos pocos miles de millones de unidades al año a cientos de miles de millones. Es incómodo y es cierto que el fármaco llegó al mundo cuando llegó porque los ejércitos lo necesitaban.',
        'En cuanto a por qué el mérito se lo llevó Fleming: había hecho de verdad la observación inicial y la había publicado, que no es poco. Pero la fama también se fabricó. St Mary’s tenía un gabinete de prensa activo, Fleming estaba dispuesto a hablar con los periodistas, y Florey —que consideraba la publicidad poco profesional y temía generar expectativas mientras el suministro era escaso— se negó en redondo. Un lado de la historia informaba a los periódicos y el otro no.',
      ],
      sourceIds: ['lax-2004', 'bud-2007'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'La penicilina no añadió simplemente un tratamiento. Eliminó toda una categoría de muerte corriente.',
      ],
      shortTerm: [
        'Para el desembarco de Normandía, en junio de 1944, había penicilina para todos los heridos aliados que la necesitaran, y las muertes por infección de heridas de guerra cayeron con fuerza.',
        'El fármaco pasó a la venta civil general en Gran Bretaña y Estados Unidos en 1945, y los precios se hundieron con la escala: una dosis que costaba veinte dólares en 1943 costaba céntimos en 1946.',
        'Fleming, Florey y Chain compartieron el Nobel de Fisiología o Medicina de 1945.',
        'Norman Heatley no fue incluido —el premio se limita a tres— y no recibió ningún reconocimiento formal durante décadas.',
        'Gran Bretaña, habiéndolo desarrollado, no llegó en general a patentarlo ni a industrializarlo, y acabó comprando penicilina bajo patentes de proceso estadounidenses.',
      ],
      longTerm: [
        'La infección bacteriana dejó de ser una causa principal de muerte en los países ricos. La neumonía, la septicemia, la endocarditis, la fiebre puerperal y muchas complicaciones quirúrgicas se volvieron tratables.',
        'El resto de la medicina moderna se hizo posible encima: la cirugía mayor, los trasplantes, la quimioterapia y los cuidados intensivos dependen de poder controlar la infección posterior.',
        'Detrás llegó toda una familia: la estreptomicina contra la tuberculosis en 1943, y luego tetraciclinas, cefalosporinas y demás. A las dos décadas siguientes a la guerra todavía se las llama la edad de oro de los antibióticos.',
        'La resistencia llegó exactamente como se había predicho. Se describieron estafilococos resistentes a la penicilina a los pocos años del uso general, y la carrera no se ha detenido desde entonces.',
        'En 1990, a los ochenta años y cuarenta y nueve después de construir el aparato, Norman Heatley recibió un doctorado honorífico en medicina por Oxford: el primero que la universidad concedía a alguien que no era médico en ochocientos años.',
      ],
      unexpected: [
        'El moho que acabó produciendo la penicilina del mundo salió de un melón cantalupo comprado en un mercado de Peoria, Illinois. Todavía se usan descendientes de esa cepa.',
        'Florey y Heatley se untaron esporas de moho en el forro del abrigo antes de volar a América, para que la cepa sobreviviera si se perdía el avión.',
        'El equipo de Oxford cultivó el moho en cuñas de hospital hasta que consiguieron que una alfarería les hiciera seiscientos recipientes cerámicos de la misma forma.',
        'Cuando su primer paciente mejoró y se acabaron las existencias, extrajeron penicilina de su orina y se la volvieron a administrar. No bastó.',
        'Fleming aprovechó su discurso Nobel de 1945 para describir con precisión cómo la infradosificación criaría bacterias resistentes, incluido un hombre hipotético que compra poca cantidad para sí mismo y luego contagia a otro con una cepa resistente.',
      ],
      sourceIds: ['lax-2004', 'bud-2007', 'fleming-nobel-1945'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'La versión que todo el mundo conoce —un científico despistado, una ventana abierta, un moho afortunado y la medicina moderna— está mal de una manera que importa, porque enseña lo que no es sobre cómo ocurren los descubrimientos.',
        'La observación de Fleming fue real y la reportó con honestidad. Después se quedó una década en la literatura sin hacer nada, porque una observación no es un tratamiento. Lo que la convirtió en medicina fue un bioquímico leyendo artículos viejos, un experimentalista montando un extractor a contracorriente con cuñas y un timbre, un patólogo dirigiendo un ensayo animal limpio, y al final unos ingenieros estadounidenses resolviendo la fermentación en tanque profundo a escala industrial. La idea fue la parte barata. Todo lo posterior fue el trabajo.',
        'Merece la pena insistir en ello, porque premiamos sistemáticamente de más el momento de darse cuenta y de menos los doce años de volverlo utilizable: en premios, en financiación y en cómo le contamos la historia a los niños. Heatley resolvió el problema que de hecho bloqueaba el fármaco y no pudo recibir el premio, porque las reglas admiten tres nombres y la historia ya había elegido uno de ellos.',
        'Y luego está el aviso, que es la parte más rara. El 11 de diciembre de 1945, al recoger el Nobel, Fleming se levantó y explicó que la resistencia a la penicilina venía de camino, que la causaría la gente que tomase poca durante poco tiempo, y que quien hiciera eso sería moralmente responsable de la muerte de aquel a quien contagiara después. Eso no es visión retrospectiva. Es el descubridor, en el momento de máximo triunfo, describiendo correctamente el modo de fallo.',
        'Llevamos desde entonces haciendo ese experimento. El atlas mantiene un hilo con avisos que se hicieron con claridad, pronto y en público, y no se atendieron. Este se pronunció desde un atril de Estocolmo, ante la prensa mundial, por el científico más famoso del momento.',
      ],
      sourceIds: ['fleming-nobel-1945', 'lax-2004'],
    },
  },

  timeline: [
    { year: 1870, title: 'Se observa que algunos mohos frenan a las bacterias', detail: 'Lister y otros registran que ciertos mohos impiden el crecimiento bacteriano. La observación se repite y no lleva a ninguna parte durante sesenta años.', confidence: 'contested' },
    { year: 1932, title: 'Domagk encuentra el Prontosil', detail: 'Un colorante rojo protege a los ratones frente a los estreptococos. Las sulfamidas llegan en 1935: reales, útiles, estrechas y propensas a la resistencia.', pivotal: true },
    { year: 1928, date: '1928-09', title: 'La placa contaminada de Fleming', detail: 'De vuelta de vacaciones, encuentra una colonia de Penicillium sobre una placa de estafilococos con un halo limpio donde las bacterias se han disuelto.', pivotal: true },
    { year: 1929, title: 'Fleming publica', detail: 'El British Journal of Experimental Pathology recoge un artículo honesto y cuidadoso. No llama la atención de casi nadie, y él no consigue purificar la sustancia.', pivotal: true },
    { year: 1938, title: 'Chain encuentra el artículo', detail: 'En Oxford, un bioquímico que revisa sustancias antibacterianas da con el artículo de 1929, y Florey acepta que el laboratorio lo persiga.', pivotal: true },
    { year: 1940, date: '1940-05-25', title: 'El experimento de los ratones', detail: 'Ocho ratones, una dosis letal de estreptococos, cuatro tratados. Por la mañana los cuatro sin tratar están muertos y los cuatro tratados están bien.', pivotal: true },
    { year: 1940, date: '1940-08-24', title: 'El artículo del Lancet', detail: 'El equipo de Oxford publica «Penicillin as a Chemotherapeutic Agent»: los resultados que lo convierten en fármaco y no en curiosidad.' },
    { year: 1941, date: '1941-02-12', title: 'Tratan a Albert Alexander', detail: 'Un policía de Oxford que se muere de septicemia mejora espectacularmente y recae cuando se agotan todas las existencias nacionales. Muere en marzo.', pivotal: true },
    { year: 1941, date: '1941-07', title: 'Florey y Heatley vuelan a América', detail: 'Con moho en el forro de los abrigos, van a buscar la capacidad industrial que Gran Bretaña no puede dar mientras la bombardean.', pivotal: true },
    { year: 1943, title: 'Peoria: agua de maíz y un melón', detail: 'Un residuo de la industria maicera y una cepa hallada en un melón de mercado disparan los rendimientos. Después llega la fermentación en tanque profundo.', pivotal: true },
    { year: 1944, date: '1944-06', title: 'Suficiente para el Día D', detail: 'El suministro médico aliado lleva penicilina bastante para todos los heridos que la necesiten. Las muertes por infección de heridas caen con fuerza.' },
    { year: 1945, date: '1945-12-11', title: 'El Nobel, y el aviso', detail: 'Fleming, Florey y Chain comparten el premio. En su discurso, Fleming describe exactamente cómo la infradosificación criará bacterias resistentes.', pivotal: true },
    { year: 1990, title: 'Por fin honran a Heatley', detail: 'Oxford le concede un doctorado honorífico en medicina: el primero otorgado a alguien que no era médico en los ochocientos años de la universidad.' },
  ],

  causeEffect: [
    { cause: 'La teoría microbiana establece que las bacterias causan enfermedad', effect: 'Se vuelve posible buscar algo que las mate', because: 'No puedes buscar cura para una causa en cuya existencia no crees; había que identificar el blanco antes de que nadie pudiera apuntarle.' },
    { cause: 'Una espora de Penicillium cae en una placa de estafilococos', effect: 'Fleming observa la disolución bacteriana alrededor del moho', because: 'El moho segrega un compuesto que impide construir la pared celular bacteriana, y eso deja un anillo visible y limpio en las colonias.' },
    { cause: 'La penicilina es inestable con el calor, el ácido y el álcali', effect: 'Fleming no consigue purificarla ni conservarla', because: 'Todas las técnicas corrientes de concentración destruían la sustancia más rápido de lo que podía recuperarse.' },
    { cause: 'Heatley idea la extracción continua a contracorriente', effect: 'Por fin se pueden producir cantidades utilizables', because: 'Mover el compuesto entre disolvente y agua lo bastante rápido superaba su propio ritmo de degradación: una respuesta de ingeniería a un problema químico.' },
    { cause: 'Un solo paciente consume todas las existencias nacionales', effect: 'Se ve que el cuello de botella es fabricar, no la biología', because: 'Un fármaco que funciona pero no puede hacerse en kilos es un resultado de investigación, no un tratamiento.' },
    { cause: 'La guerra crea demanda y América tiene la industria de fermentación', effect: 'La producción escala varios órdenes de magnitud', because: 'La fermentación en tanque profundo exigía capital, ingenieros y fábricas fuera del alcance de los bombardeos, y solo un país tenía las tres cosas.' },
    { cause: 'St Mary’s promociona a Fleming mientras Florey rechaza entrevistas', effect: 'El relato público se convierte en la historia de un solo hombre', because: 'La cobertura de prensa sigue a quien hable con la prensa, y el registro se endurece después alrededor de lo que se imprimió.' },
    { cause: 'Los antibióticos se usan en dosis demasiado bajas o demasiado cortas', effect: 'Se seleccionan cepas resistentes', because: 'Los supervivientes de un tratamiento incompleto son, por definición, las bacterias menos afectadas por el fármaco, y son las que se reproducen.' },
  ],

  myths: [
    {
      myth: 'Fleming descubrió la penicilina y salvó millones de vidas.',
      reality: 'Las dos mitades son ciertas y falta la frase de en medio. Fleming observó el efecto y lo publicó en 1929, y después no consiguió purificarlo ni estabilizarlo y abandonó en buena medida el trabajo a mediados de los treinta. La penicilina se convirtió en medicina porque Florey, Chain y Heatley resolvieron la extracción en Oxford desde 1938, y porque la industria estadounidense resolvió la producción desde 1943.',
      whyItPersists: 'Los descubrimientos se recuerdan por un solo nombre, y Fleming estaba dispuesto a hablar con los periodistas mientras Florey consideraba la publicidad poco profesional y se negaba.',
      sourceIds: ['lax-2004', 'bud-2007'],
    },
    {
      myth: 'El moho entró por una ventana abierta.',
      reality: 'El origen más probable es el laboratorio de micología de la planta de abajo de St Mary’s, donde un colega trabajaba con mohos. El tiempo insólito de aquel septiembre londinense —frío y luego calor— también contó, y permitió que el moho se instalara antes de que crecieran los estafilococos.',
      whyItPersists: 'La ventana abierta es mejor imagen, y el propio Fleming contó la historia de forma laxa en entrevistas posteriores.',
      sourceIds: ['lax-2004'],
    },
    {
      myth: 'La penicilina fue el primer fármaco capaz de curar una infección bacteriana.',
      reality: 'Las sulfamidas llegaron antes. Domagk halló el Prontosil en 1932 y las sulfamidas estaban en uso clínico desde 1935, y salvaron muchas vidas en los primeros años de la guerra. La penicilina era más amplia, mucho menos tóxica y con el tiempo mucho más disponible, pero llegó a un campo que ya tenía una respuesta que funcionaba.',
      whyItPersists: 'La penicilina era tan superior que dejó a su predecesora en nota al pie, y las sulfamidas no tenían una historia de origen equivalente.',
      sourceIds: ['bud-2007'],
    },
    {
      myth: 'Nadie podía saber que venía la resistencia.',
      reality: 'Fleming describió el mecanismo en su discurso Nobel de diciembre de 1945, antes de que la penicilina llevara un año en uso civil general, incluido un escenario concreto de un hombre que compra una dosis pequeña, se trata de menos y transmite un organismo resistente. Se describieron estafilococos resistentes a los pocos años.',
      whyItPersists: 'Es más cómodo tratar la resistencia como una consecuencia imprevisible que como una predicción documentada que no se atendió.',
      sourceIds: ['fleming-nobel-1945'],
    },
  ],

  disagreements: [
    {
      question: '¿Cuánto mérito le corresponde a Fleming?',
      positions: [
        { view: 'Mucho. Hizo la observación original, reconoció que era importante, caracterizó el moho, estableció que la sustancia no era tóxica para los leucocitos, la nombró y la publicó. Sin el artículo de 1929, Chain no habría tenido nada que encontrar.', heldBy: 'El relato tradicional, y el propio artículo de 1929', sourceId: 'fleming-1929' },
        { view: 'Mucho menos del que recibió. No consiguió purificarla, no hizo experimentos de protección animal como es debido, la trató sobre todo como herramienta de laboratorio y la abandonó. El trabajo que la convirtió en medicina lo hicieron en Oxford personas de las que el público no ha oído hablar.', heldBy: 'Eric Lax y la mayoría de los historiadores del episodio', sourceId: 'lax-2004' },
      ],
      atlasPosition: 'El atlas acredita a Fleming una observación real y honestamente reportada, y acredita a Florey, Chain y Heatley haberla convertido en medicina. Trata el desequilibrio de la memoria pública como un hecho sobre el acceso a la prensa, no sobre la ciencia.',
    },
    {
      question: '¿La toma estadounidense de la producción en guerra fue un rescate o una apropiación?',
      positions: [
        { view: 'Un rescate. La Gran Bretaña de 1941 estaba bajo bombardeo y sin capacidad industrial de sobra; sin las plantas de fermentación estadounidenses la penicilina habría llegado años más tarde y salvado a muchísima menos gente.', heldBy: 'El relato estándar de la misión de 1941', sourceId: 'lax-2004' },
        { view: 'Una apropiación con consecuencias duraderas. Los investigadores británicos entregaron cepas y conocimiento sin protección, y Gran Bretaña tuvo después que licenciar patentes de proceso estadounidenses para fabricar un fármaco que había desarrollado.', heldBy: 'Robert Bud y los historiadores de la industria farmacéutica', sourceId: 'bud-2007' },
      ],
      atlasPosition: 'El atlas sostiene las dos: la transferencia fue necesaria entonces, y no proteger la posición fue una decisión real y cara. No presenta ninguna de las dos como el relato completo.',
    },
  ],

  didYouKnow: [
    'La penicilina se publicó en 1929 y no trató a un paciente hasta 1941. El hueco fue de química y de fabricación, no de biología.',
    'El equipo de Oxford cultivaba el moho en cuñas de hospital, y luego encargó a una alfarería seiscientos recipientes cerámicos con esa misma forma.',
    'Norman Heatley construyó el aparato de extracción con tubo de vidrio, lecheras y un timbre.',
    'Cuando a su primer paciente se le acabaron las existencias, volvieron a extraer penicilina de su orina y se la devolvieron.',
    'Florey y Heatley se untaron moho en el forro del abrigo antes de volar a América, por si el avión caía.',
    'La cepa de alto rendimiento que abasteció al mundo salió de un melón cantalupo comprado en un mercado de Peoria, Illinois.',
    'A Heatley lo dejaron fuera del Nobel porque el premio lo pueden compartir tres personas como mucho. Oxford lo honró en 1990, a los ochenta años.',
    'Fleming usó su discurso Nobel de 1945 para predecir la resistencia a los antibióticos y describir exactamente cómo la causaría la infradosificación.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'En septiembre de 1928 Alexander Fleming encontró un moho creciendo en una placa de cultivo bacteriano en el hospital St Mary’s, con un anillo limpio alrededor donde las bacterias se habían disuelto. Lo identificó, llamó penicilina a la sustancia activa y publicó en 1929 — y después no consiguió purificarla ni estabilizarla, así que a mediados de los treinta lo había dejado.',
        'En 1938 Ernst Chain dio con el artículo en Oxford. Howard Florey respaldó el trabajo, y Norman Heatley resolvió la extracción con un montaje continuo a contracorriente hecho de tubo de vidrio, lecheras y un timbre, cultivando el moho en cuñas de hospital.',
        'El 25 de mayo de 1940, cuatro ratones con una dosis letal de estreptococos sobrevivieron con penicilina mientras morían cuatro controles sin tratar. El primer paciente, un policía de Oxford con septicemia, mejoró espectacularmente en febrero de 1941 — y entonces se agotaron todas las existencias nacionales. Volvieron a extraer el fármaco de su orina, se acabó otra vez, y murió.',
        'El cuello de botella era la fabricación. Florey y Heatley llevaron el moho a Estados Unidos en 1941; el agua de maceración de maíz, una cepa de alto rendimiento hallada en un melón de un mercado de Peoria y la fermentación en tanque profundo dispararon la producción. Para el Día D había suficiente para todos los heridos aliados. Fleming, Florey y Chain compartieron el Nobel de 1945; Heatley no.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'No hace tanto, si te hacías un corte feo y se te infectaba, un médico no podía hacer prácticamente nada. Podía decirte exactamente qué microbio te estaba matando. Simplemente no podía pararlo.',
        'En 1928 un científico llamado Fleming volvió de vacaciones y vio que una de sus placas de microbios se había llenado de moho. Y en un anillo alrededor del moho, los microbios habían desaparecido. Algo del moho los estaba matando.',
        'Esa es la parte que todo el mundo conoce. Y aquí va la que no te cuentan: durante los diez años siguientes no pasó nada. Fleming no conseguía sacar del moho la sustancia que mataba microbios sin destrozarla, así que lo dejó estar.',
        'Entonces tres personas de Oxford cogieron su artículo viejo y lo intentaron. Uno de ellos, Norman Heatley, construyó una máquina para sacar la medicina del caldo de moho, usando tubos de vidrio, lecheras y un timbre de verdad. Cultivaban el moho en cuñas de hospital, porque las cuñas tenían justo la forma buena.',
        'Funcionó. Pero solo podían hacer una cantidad diminuta: tan poca que un policía enfermo se gastó toda la del país entero, y tuvieron que recoger su pis y volver a sacar la medicina de ahí para darle más. Aun así murió, porque se les acabó.',
        'Así que el problema de verdad no era «cómo encontramos una medicina». Era «cómo fabricamos una cantidad enorme». Unas fábricas de Estados Unidos resolvieron eso, y de repente un arañazo dejó de ser una forma de morir.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El episodio es un caso de estudio estándar en sociología del crédito científico, y la asimetría tiene una causa documentada: el hospital St Mary’s operaba un gabinete de prensa eficaz bajo Charles Wilson, Fleming concedía entrevistas con facilidad, y Florey rechazó todo contacto con periodistas por el doble motivo de la corrección profesional y el riesgo de generar una demanda que el suministro no podía cubrir. La prensa de Beaverbrook consolidó el relato del descubridor único entre 1942 y 1943, y la mención Nobel de 1945, que nombra a tres, no lo desplazó.',
        'En cuanto a la ciencia, Fleming (1929) es un artículo competente y honesto cuyos límites suelen enunciarse mal. Sí estableció el espectro antibacteriano y la baja toxicidad leucocitaria, pero no realizó experimentos de protección sistémica en animales, y su encuadre de la penicilina como medio de cultivo selectivo y posible antiséptico tópico refleja una concepción de bacteriólogo y no quimioterapéutica. La aportación de Oxford no es un mero escalado: el trabajo de Chain y Abraham sobre la molécula, y el diseño por Florey del experimento de protección en ratones de mayo de 1940, constituyen el paso de la observación a la hipótesis terapéutica.',
        'La extracción a contracorriente de Heatley merece un énfasis aparte como caso de ingeniería resolviendo un problema de inestabilidad química manipulando el tiempo de residencia en vez de las condiciones. Es también la muestra más clara de la asimetría de crédito, ya que los estatutos del Nobel limitan a tres laureados y las aportaciones técnicas han sido históricamente las excluidas.',
        'La fase industrial, tratada con más amplitud por Bud (2007), plantea la cuestión de propiedad intelectual que marcó la política farmacéutica británica de posguerra: el grupo de Oxford no patentó, en parte por razones éticas entonces muy compartidas en la medicina académica británica, y la dependencia resultante de patentes de proceso estadounidenses se convirtió en un agravio político recurrente y en un argumento para las políticas británicas posteriores de transferencia tecnológica.',
        'Por último, el discurso Nobel de Fleming (1945) debería leerse como documento primario en la historia de la resistencia antimicrobiana. Enuncia el mecanismo de selección, identifica la dosificación subterapéutica como motor y ofrece un escenario de transmisión. La resistencia en *Staphylococcus aureus* se documentó en entornos clínicos a los pocos años, lo que hace de este un caso insólitamente bien fechado de aviso público exacto anterior al daño.',
      ],
    },
    {
      id: 'the-bedpans',
      label: 'La parte montada con cuñas de hospital',
      kind: 'angle',
      paragraphs: [
        'Quita la fama y el trabajo de Oxford es una serie de problemas muy concretos, resueltos cada uno por alguien mirando qué había físicamente en el edificio.',
        '**Cultivarlo.** El Penicillium crece como una capa sobre la superficie del líquido, así que quieres recipientes anchos y poco profundos con mucha superficie. Probaron latas de galletas, fuentes de tarta y botellas, y se quedaron con las cuñas de hospital, que tienen exactamente esa forma. Cuando necesitaron cientos, Heatley consiguió que una alfarería de Stoke-on-Trent les hiciera seiscientas versiones cerámicas.',
        '**Sacarlo.** El compuesto activo está en concentración minúscula en litros de caldo y se deshace con calor, ácido o álcali. La respuesta de Heatley fue moverlo rápido: pasarlo a acetato de amilo a pH bajo y devolverlo enseguida al agua a pH neutro, de forma continua, en un montaje a contracorriente, de modo que el compuesto pase el mínimo tiempo posible en cualquier condición que lo destruya. El aparato usaba un timbre como alarma y lecheras como depósitos.',
        '**Saber cuánto tienes.** No tenían manera de pesar un compuesto que no podían aislar puro, así que definieron una unidad por lo que hacía: la unidad Oxford, la cantidad que inhibía un cultivo estándar de estafilococos sobre una superficie dada. Medir un fármaco por su efecto y no por su masa es una cosa perfectamente razonable de hacer y ligeramente inquietante de leer.',
        '**Demostrarlo.** Ocho ratones, cuatro tratados. Simple, decisivo, y de esos experimentos que solo parecen obvios cuando a alguien se le ha ocurrido una razón para estar lo bastante seguro como para intentarlo.',
        'Nada de esto es glamuroso, y todo esto era la barrera real. El moho llevaba once años en la literatura esperando a que alguien resolviera las tuberías.',
      ],
    },
    {
      id: 'the-warning',
      label: 'El aviso en el discurso de aceptación',
      kind: 'contrast',
      paragraphs: [
        'El 11 de diciembre de 1945, Alexander Fleming se puso en pie en Estocolmo para recoger el Nobel, en el momento de máxima reputación de la penicilina como milagro, y usó parte del discurso para explicar cómo se estropearía.',
        '**Lo que dijo.** Que es fácil volver resistentes a las bacterias en el laboratorio, exponiéndolas a concentraciones demasiado bajas para matarlas. Que lo mismo pasará en el cuerpo. Y que el peligro es la persona que toma una dosis insuficiente: la que no mata al organismo, sino que lo educa.',
        '**El escenario que puso.** Un hombre con dolor de garganta compra penicilina, toma poca, cría estreptococos resistentes en su propia garganta y contagia a su mujer, que desarrolla una neumonía que la penicilina ya no puede tratar. En ese caso, dijo Fleming, el hombre es moralmente responsable de su muerte.',
        '**Lo que pasó.** El *Staphylococcus aureus* resistente a la penicilina apareció en los hospitales a los pocos años. La meticilina se introdujo en 1959; en 1960 se describieron cepas resistentes a la meticilina. El patrón se ha repetido con cada familia de antibióticos desde entonces, y la resistencia antimicrobiana está hoy entre las principales causas de muerte del mundo.',
        'El atlas mantiene un hilo por historias como esta, y no es un hilo sobre lo difícil que es predecir. Fleming acertó, en público, en el momento más cubierto por la prensa de su vida, hace ochenta años. Lo difícil no ha sido nunca saberlo.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Una infección bacteriana, antes y después',
    before: {
      title: 'Antes de 1941',
      points: [
        'Un arañazo podía convertirse en una septicemia mortal',
        'La neumonía mataba a alrededor de un tercio de quienes la sufrían',
        'Los médicos podían identificar el organismo y poco más',
        'Cirugía sobrevivible, y la infección posterior una apuesta',
        'Sulfamidas desde 1935: estrechas, tóxicas, pronto resistidas',
      ],
    },
    after: {
      title: 'Después de 1945',
      points: [
        'La mayoría de las infecciones bacterianas curables con una inyección',
        'Neumonía y septicemia ya no como causas rutinarias de muerte',
        'Trasplantes, quimioterapia y cuidados intensivos hechos posibles',
        'Una dosis de veinte dólares en 1943 costando céntimos en 1946',
        'Resistencias apareciendo en pocos años, exactamente como se predijo',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si Chain no hubiera dado con el artículo de Fleming de 1929?',
      reasoning: 'El artículo llevaba nueve años sin leerse. Sin la revisión bibliográfica de Chain, Oxford habría perseguido otra sustancia antibacteriana —ya estaban trabajando con la lisozima— y la penicilina podría haber esperado años más, perdiéndose el empujón industrial de la guerra que hizo posible la producción en masa.',
      constraint: 'Especulación, y probablemente acotada. Varios grupos buscaban sustancias antibacterianas después de que las sulfamidas demostraran el concepto, y la inhibición por mohos se había observado repetidamente desde el siglo XIX. Un retraso es plausible; el olvido permanente no.',
    },
    {
      question: '¿Y si el equipo de Oxford hubiera patentado la penicilina?',
      reasoning: 'Gran Bretaña habría conservado regalías y capacidad de negociación en vez de licenciar patentes de proceso estadounidenses para fabricar un fármaco que había desarrollado, y el dinero podría haber financiado una base de investigación farmacéutica británica más fuerte en la posguerra.',
      constraint: 'La decisión de no patentar reflejaba una idea genuina y muy compartida en la medicina académica británica de que patentar un medicamento era poco ético, y las patentes estadounidenses eran de procesos de producción y no del compuesto, que el equipo de Oxford no había desarrollado. Especular lo contrario exige cambiar la cultura profesional, no solo una decisión.',
    },
  ],

  quiz: [
    {
      question: '¿Por qué no pasó nada durante una década tras la publicación de Fleming en 1929?',
      options: [
        'Nadie creyó sus resultados',
        'No conseguía purificar ni estabilizar la penicilina, así que no podía usarse como fármaco',
        'Las revistas rechazaron el artículo',
        'Mantuvo el descubrimiento en secreto',
      ],
      answerIndex: 1,
      explains: 'La penicilina se degrada con el calor, el ácido, el álcali y el tiempo, y está en concentraciones minúsculas. Sin un preparado puro y estable no puedes dosificarlo, inyectarlo ni ensayarlo.',
    },
    {
      question: '¿Cuál fue la aportación de Norman Heatley?',
      options: [
        'Descubrió el moho',
        'Financió la investigación',
        'Ideó el método de extracción y montó el aparato que hizo posibles las cantidades utilizables',
        'Dirigió el ensayo clínico',
      ],
      answerIndex: 2,
      explains: 'La extracción continua a contracorriente de Heatley —hecha con tubo de vidrio, lecheras y un timbre— superaba el propio ritmo de degradación de la penicilina. Lo dejaron fuera del Nobel, que solo admite tres nombres.',
    },
    {
      question: '¿Qué le pasó al primer paciente tratado con penicilina?',
      options: [
        'Se recuperó del todo',
        'Mejoró espectacularmente y murió cuando se acabaron las existencias',
        'Sufrió una reacción alérgica mortal',
        'Rechazó el tratamiento',
      ],
      answerIndex: 1,
      explains: 'Albert Alexander mejoró en un día. Se agotaron todas las existencias nacionales; el equipo volvió a extraer el fármaco de su orina para continuar, se acabó otra vez, y recayó y murió en marzo de 1941.',
    },
    {
      question: '¿De qué avisó Fleming en su discurso Nobel de 1945?',
      options: [
        'De que el moho podía extinguirse',
        'De que la penicilina sería demasiado cara',
        'De que la infradosificación criaría bacterias resistentes',
        'De que los médicos abusarían de las inyecciones',
      ],
      answerIndex: 2,
      explains: 'Describió el mecanismo de selección con precisión, incluido un escenario de un hombre que toma una dosis demasiado pequeña, cría organismos resistentes y se los pasa a otra persona. Los estafilococos resistentes aparecieron a los pocos años.',
    },
  ],

  sources: [
    {
      id: 'fleming-1929',
      kind: 'paper',
      author: 'Alexander Fleming',
      title: 'On the Antibacterial Action of Cultures of a Penicillium, with Special Reference to their Use in the Isolation of B. influenzae',
      year: 1929,
      detail: 'British Journal of Experimental Pathology, vol. 10, n.º 3, pp. 226–236',
      note: 'El artículo original. Honesto, cuidadoso y revelador ya en el título: lo presenta sobre todo como técnica para aislar otras bacterias.',
    },
    {
      id: 'chain-florey-1940',
      kind: 'paper',
      author: 'E. Chain, H. W. Florey, A. D. Gardner, N. G. Heatley and others',
      title: 'Penicillin as a Chemotherapeutic Agent',
      year: 1940,
      detail: 'The Lancet, vol. 236, 24 de agosto de 1940, pp. 226–228',
      note: 'El artículo que convierte una curiosidad en un fármaco: el experimento de protección en ratones y la extracción que lo hizo posible.',
    },
    {
      id: 'abraham-1941',
      kind: 'paper',
      author: 'E. P. Abraham, E. Chain, C. M. Fletcher, H. W. Florey and others',
      title: 'Further Observations on Penicillin',
      year: 1941,
      detail: 'The Lancet, vol. 238, 16 de agosto de 1941, pp. 177–189',
      note: 'Los primeros casos clínicos, incluido el policía de Oxford. Notable por decir sin rodeos que el factor limitante era el suministro y no la eficacia.',
    },
    {
      id: 'fleming-nobel-1945',
      kind: 'primary',
      author: 'Alexander Fleming',
      title: 'Penicillin — Nobel Lecture',
      year: 1945,
      detail: 'Pronunciado el 11 de diciembre de 1945; publicado por la Fundación Nobel',
      note: 'El aviso sobre la resistencia, dado en el momento del triunfo: el mecanismo, la causa y un escenario concreto de cómo la infradosificación mata a otra persona.',
    },
    {
      id: 'lax-2004',
      kind: 'book',
      author: 'Eric Lax',
      title: 'The Mold in Dr. Florey’s Coat: The Story of the Penicillin Miracle',
      year: 2004,
      detail: 'Henry Holt. ISBN 978-0-8050-7778-0',
      note: 'La historia de Oxford completa, con el aparato de Heatley y el vuelo a América. El principal correctivo a la versión del descubridor único.',
    },
    {
      id: 'bud-2007',
      kind: 'book',
      author: 'Robert Bud',
      title: 'Penicillin: Triumph and Tragedy',
      year: 2007,
      detail: 'Oxford University Press. ISBN 978-0-19-925406-4',
      note: 'La historia industrial, política y cultural: las sulfamidas anteriores, el escalado estadounidense, la cuestión de las patentes y la resistencia posterior.',
    },
  ],
}
