import type { Story } from '../../types'

export const mansaMusaEs: Story = {
  slug: 'mansa-musa',
  title: 'El hombre que hundió el precio del oro',
  subtitle: '1324 — cruzó el Sáhara hasta La Meca, gastó tanto en El Cairo que la moneda seguía hundida una década después, y puso su imperio en los mapas de Europa.',
  hook: 'En 1324 un rey de África occidental pasó por El Cairo camino de La Meca y regaló tanto oro que el valor del dinar egipcio seguía hundido doce años después.',
  era: 'medieval',
  category: 'icons',
  years: [1312, 1375],
  regions: ['Malí', 'Egipto', 'Arabia', 'Europa'],
  nodes: ['mansa-musa', 'mali-empire', 'timbuktu', 'trans-saharan-trade', 'catalan-atlas'],
  tags: ['africa', 'trade', 'gold', 'islam', 'empire', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'En 1324 un rey de África occidental pasó por El Cairo y regaló tanto oro' },
    { beat: 'hook', text: 'que la moneda egipcia seguía hundida doce años después.' },
    { beat: 'worldBefore', kicker: '1235–', text: 'Malí no es una aldea con suerte. Es un Estado del tamaño de Europa occidental,' },
    { beat: 'worldBefore', text: 'con un siglo de vida cuando Musa lo hereda, con provincias, ejércitos y una corte.' },
    { beat: 'worldBefore', punch: true, text: 'Y su negocio no es extraer oro. Es gravar todo lo que se mueve.' },
    { beat: 'problem', text: 'El oro sale de unos campos del sur, trabajados por gente a la que Malí no gobierna,' },
    { beat: 'problem', text: 'y se cambia en silencio, saco por saco, sin que las dos partes se vean.' },
    { beat: 'problem', punch: true, mark: 'imbalance', text: 'Malí no es dueño de la mina. Es dueño del camino, que es mejor.' },
    { beat: 'problem', text: 'Hacia el norte, por el desierto, va el oro, y van personas vendidas como esclavas.' },
    { beat: 'problem', text: 'Hacia el sur vienen sal, caballos, telas y libros.' },
    { beat: 'story', kicker: '1324', text: 'Musa sale hacia La Meca. Son dos meses de desierto en cada sentido,' },
    { beat: 'story', text: 'con una columna tan grande que las fuentes no coinciden en ninguna cifra.' },
    { beat: 'story', kicker: 'El Cairo', text: 'Se queda tres meses y gasta como quien está demostrando algo,' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'y el precio del oro en el mayor mercado del mundo islámico cae, y se queda abajo.' },
    { beat: 'story', text: 'Un funcionario egipcio que escribe doce años después dice que no se ha recuperado.' },
    { beat: 'story', text: 'De vuelta a casa anexiona Tombuctú y se trae consigo a un arquitecto.' },
    { beat: 'whyItHappened', text: 'Y el objetivo no eran nunca las compras. Un hajj es una reclamación,' },
    { beat: 'whyItHappened', text: 'hecha en el único idioma que sabía leer todo Estado de España a Persia.' },
    { beat: 'whyItHappened', punch: true, text: 'Llegó desconocido y salió siendo un nombre en las crónicas de tres continentes.' },
    { beat: 'consequences', kicker: '1375', text: 'Cincuenta años después, un cartógrafo de Mallorca lo dibuja con una pepita de oro,' },
    { beat: 'consequences', punch: true, text: 'y lo rotula como el rey más rico de toda la tierra. Europa no lo olvidó del todo.' },
    { beat: 'consequences', text: 'El oro de una moneda florentina había subido por aquel desierto.' },
    { beat: 'whyItMatters', text: 'Hoy se le vende como el hombre más rico de la historia, con una cifra al lado,' },
    { beat: 'whyItMatters', text: 'y eso no es historia. Nadie puede poner precio en dólares a un tesoro del siglo XIV.' },
    { beat: 'whyItMatters', punch: true, text: 'Lo interesante es el imperio, y el imperio es la parte que nadie repite.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'El Imperio de Malí se fundó en el siglo XIII, tradicionalmente por Sunyata Keita tras su victoria en Kirina hacia 1235, y cuando Musa llegó al trono alrededor de 1312 llevaba casi un siglo funcionando como Estado. En su apogeo se extendía aproximadamente desde la costa atlántica hasta el recodo del Níger, una superficie comparable a la de Europa occidental.',
        'Conviene tener claro qué clase de cosa era, porque la versión popular suele saltárselo. Malí tenía provincias con gobernadores nombrados, un ejército permanente, una corte con cargos y protocolo formales, un cuerpo de tradición constitucional oral y un sistema sucesorio que producía disputas exactamente igual que los europeos. Musa fue el noveno o décimo gobernante de la línea. No creó el imperio: lo heredó.',
        'Su riqueza venía de la posición. El oro de África occidental, de los campos de Bambuk y Buré, estaba entre las fuentes más importantes del metal en el mundo medieval, y las rutas que lo llevaban al norte a través del Sáhara pasaban por territorio maliense. También lo hacían las que traían sal desde las minas saharianas de Taghaza, siendo la sal una necesidad real en un clima caluroso y, en algunos momentos y lugares, cambiada peso por peso contra el oro.',
        'La recaudación del imperio venía de gravar ese tráfico, no de poseer las minas. Los campos auríferos quedaban fuera del control maliense, trabajados por pueblos que guardaban celosamente su ubicación, y los relatos clásicos describen un «comercio silencioso»: mercancía dejada en un punto acordado, oro dejado a cambio, y ningún encuentro entre las partes. Un rey que intente apoderarse de una mina así descubre que los mineros han dejado de extraer. Gravar el camino es más fiable, y los gobernantes de Malí lo entendían perfectamente.',
        'Y las caravanas hacia el norte no llevaban solo oro. El comercio transahariano de personas esclavizadas funcionó durante siglos y es inseparable de la riqueza que describe esta historia. La propia columna del hajj de Musa incluía, según todos los relatos, gran número de personas esclavizadas.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: 'Casi todo lo que sabemos de Malí en este periodo viene de autores árabes de El Cairo y del norte de África, la mayoría de los cuales no estuvieron allí, más Ibn Battuta, que sí fue pero llegó casi treinta años después del hajj. No hay ninguna crónica escrita maliense del siglo XIV. Las tradiciones orales son fuentes históricas reales y se recogieron mucho después.',
        sourceId: 'levtzion-hopkins-1981',
      },
      sourceIds: ['gomez-2018', 'levtzion-hopkins-1981'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Malí era rico, musulmán y casi por completo desconocido en el resto del mundo islámico. Esa combinación es el planteamiento de lo que hizo Musa.',
        'Los Estados del Mediterráneo y de Oriente Próximo sabían que el oro venía de algún punto del oeste de África —llevaban siglos acuñándolo—, pero la fuente era un rumor. Los geógrafos árabes repetían historias sobre una tierra donde el oro crecía como zanahorias y se cosechaba al amanecer. Europa sabía todavía menos; el África al sur del Magreb estaba prácticamente en blanco.',
        'Para un gobernante musulmán en esa situación, el hajj no es solo una obligación religiosa. Es el instrumento diplomático más eficaz disponible: un acontecimiento al que acude todo el mundo islámico, por rutas jalonadas por las cortes de otros gobernantes, con un viaje de vuelta por las grandes ciudades. Cumplirlo te establece como soberano musulmán legítimo a ojos de gente que, si no, te tomaría por una curiosidad lejana.',
        'El viaje en sí no era trámite. Unos cuatro mil kilómetros en cada sentido, dos meses de travesía sahariana en cada dirección, por rutas donde perder los pozos significaba perder la caravana. De su predecesor se dice, en un relato, que desapareció intentando una expedición atlántica, y el desierto mataba gente con normalidad.',
        'Así que el viaje fue un acto meditado de política de un gobernante con un problema concreto: un Estado enormemente rico del que nadie había oído hablar.',
      ],
      sourceIds: ['al-umari-1337', 'gomez-2018'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'Musa salió de Malí en 1324. El tamaño de su columna es el dato que más se repite sobre él y el menos fiable: las cifras de sesenta mil personas, doce mil esclavos cargando cada uno una barra de oro y ochenta camellos llevando cientos de kilos cada uno vienen de fuentes escritas mucho después y varían enormemente entre sí. En lo que coinciden todos los relatos es en que era enorme, en que estaba organizada y en que llevaba muchísimo oro.',
        'La parada que importó fue El Cairo, entonces la ciudad más grande y más rica del mundo islámico y sede del sultán mameluco. Se quedó unos tres meses, y los detalles que sobreviven son los pequeños, que suele ser señal de transmisión por testigos.',
        'Al principio se negó a postrarse ante el sultán al-Nasir Muhammad, un momento diplomático incómodo, porque de los visitantes se esperaba la postración y Musa se consideraba soberano y no suplicante. Lo convencieron de inclinarse ante Dios en vez de ante el sultán, lo que permitió que todos siguieran adelante.',
        'Y entonces gastó. Dio oro a funcionarios, a los pobres, a la corte del sultán, a quien se acercara. Los comerciantes egipcios, según los relatos, le sacaron todo lo que pudieron, vendiéndole mercancía a varias veces su valor, que él pagaba sin discutir. Estaba comprando reputación, y no andaba corto.',
        'La consecuencia es lo más concreto de esta historia, porque es una observación económica hecha por un hombre que vivía allí. Al-Umari, funcionario de la cancillería mameluca que visitó El Cairo unos doce años después y habló con gente que había tratado con Musa, deja constancia de que entró tanto oro en el mercado que su valor cayó y todavía no se había recuperado: el dinar había perdido una parte sustancial de su valor frente a él.',
        'Eso es lo que pasa cuando aumentas la oferta de una mercancía más rápido de lo que el mercado puede absorberla, y es la medición conservada más clara de cuánto oro había realmente.',
        'En el viaje de vuelta anexionó Tombuctú y Gao, y se trajo consigo a un poeta y arquitecto de Granada, Abu Ishaq al-Sahili, a quien se atribuye la construcción de la mezquita de Djingareyber en Tombuctú hacia 1327. También, según varios relatos, se quedó sin dinero de camino a casa y tuvo que pedir prestado en El Cairo a intereses ruinosos a los mismos comerciantes que le habían desplumado a la ida.',
        'Cincuenta años después, un cartógrafo de Mallorca —muy probablemente Abraham Cresques— dibujó el Atlas catalán para el rey de Aragón. En el espacio vacío de abajo, donde estaba África, dibujó a un rey negro coronado sentado en un trono, con una pepita de oro en una mano y un cetro en la otra, y una leyenda que lo identifica como señor de los negros de Guinea y el rey más rico y más noble de toda aquella tierra. Es la imagen de Mansa Musa que se quedó Europa.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'Al-Umari, funcionario de la cancillería mameluca, visitó El Cairo unos doce años después del hajj y recogió lo que allí se seguía contando: que Musa y los suyos habían inundado la ciudad de oro, que lo regalaban y lo gastaban sin medida, y que como consecuencia su valor había caído y no se había recuperado desde entonces. No está repitiendo una leyenda. Está informando de un precio.',
        sourceId: 'al-umari-1337',
      },
      sourceIds: ['al-umari-1337', 'ibn-khaldun-1377', 'catalan-atlas-1375'],
    },

    whyItHappened: {
      heading: 'Por qué lo hizo',
      paragraphs: [
        'El gasto parece extravagancia y fue sobre todo estrategia, cosa que se ve mejor sabiendo qué obtuvo Musa a cambio.',
        '**Reconocimiento.** Antes de 1324 Malí apenas aparece en los escritos árabes. Después aparece en las crónicas de Egipto, en la historia de Ibn Jaldún, en obras geográficas y con el tiempo en mapas europeos. Un gobernante que quería que su Estado fuera tratado como igual de mamelucos y meriníes tenía que ser visto, y el hajj era donde se te veía.',
        '**Legitimidad religiosa.** El islam llevaba siglos presente en las ciudades comerciales de África occidental, pero los gobernantes de Malí administraban una población que en buena parte no era musulmana, y su autoridad se apoyaba también en fuentes más antiguas. Un hajj cumplido, en público y a un coste enorme, zanjaba una pregunta sobre qué clase de gobernante era, fuera y dentro.',
        '**Reclutamiento erudito y técnico.** Volvió con gente. Al-Sahili el arquitecto es el caso famoso, pero el patrón más amplio es que una conexión demostrada con El Cairo y La Meca hizo que juristas, maestros y libros empezaran a moverse hacia el sur por rutas que antes solo llevaban sal. La fama posterior de Tombuctú como centro de estudios nace de ese flujo.',
        '**Y el comercio.** Establecer que la fuente del oro era un Estado musulmán organizado con corte y ejército, y no un rumor al final de una ruta de caravanas, tenía valor comercial para todos los implicados en moverlo.',
        'Conviene decir también el coste. Gastó tanto que tuvo que endeudarse para volver, a los tipos que fijaron los comerciantes cairotas. Y el hundimiento del precio del oro perjudicó a los tenedores egipcios de oro y a cualquiera cuya riqueza estuviera denominada en él. Hacer esto no salió gratis, y tampoco salió gratis para otra gente.',
      ],
      sourceIds: ['gomez-2018', 'al-umari-1337', 'levtzion-hopkins-1981'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'El hajj puso a Malí en el mapa, en sentido literal, y el mapa duró más que el imperio.',
      ],
      shortTerm: [
        'Los precios del oro en El Cairo cayeron y, según al-Umari escribiendo unos doce años después, no se habían recuperado: la prueba conservada más clara de la escala de lo que llevaba.',
        'Musa anexionó Tombuctú y Gao en el viaje de vuelta, extendiendo el control maliense sobre las principales ciudades comerciales del Níger.',
        'Se trajo al poeta y arquitecto granadino al-Sahili, a quien se atribuye la mezquita de Djingareyber de Tombuctú, construida hacia 1327.',
        'Malí entró en el registro escrito del mundo islámico: los cronistas egipcios, Ibn Jaldún y los geógrafos posteriores beben de información que llegó a El Cairo en 1324 y después.',
        'Se quedó sin dinero antes de llegar a casa y pidió prestado en El Cairo en condiciones que, según todos los relatos, fueron durísimas.',
      ],
      longTerm: [
        'Ibn Battuta viajó a Malí en 1352-53, bajo el hermano de Musa, Sulayman, y dejó el único relato ocular sustancial del imperio hecho por un extranjero.',
        'El Atlas catalán de 1375 colocó a Musa en la parte baja del cuadro europeo del mundo, con un pedazo de oro en la mano. Es la imagen que fijó África occidental en la imaginación europea como fuente de riqueza.',
        'Esa imagen tuvo consecuencias. Los viajes portugueses por la costa africana en el siglo XV fueron en parte un intento de alcanzar por mar la fuente del oro, esquivando a los intermediarios saharianos.',
        'Tombuctú se desarrolló durante los dos siglos siguientes como centro erudito de verdad: su gran florecimiento llegó más tarde, bajo el dominio songhay, de lo que sugiere la asociación popular con Musa.',
        'Malí decayó a lo largo del siglo XV y fue desplazado por el Imperio songhay, que tomó Tombuctú en 1468. Las propias rutas transaharianas acabaron siendo desbancadas por la navegación atlántica.',
      ],
      unexpected: [
        'El oro del florín florentino y del genovino —las primeras acuñaciones estables de oro de Europa en cinco siglos— venía en buena parte de África occidental, por esas mismas rutas.',
        'Malí no controlaba los campos auríferos. Quedaban fuera del imperio, trabajados por gente que guardaba en secreto su localización, y los relatos clásicos describen un comercio hecho sin que las dos partes se encontraran nunca.',
        'Del predecesor de Musa, según una historia que se dice que el propio Musa contó en El Cairo, se cuenta que se hizo a la mar hacia el Atlántico con una gran flota para averiguar qué había al otro lado y no volvió jamás.',
        'Cuando Ibn Battuta llegó en 1352, Musa había muerto y el imperio estaba en una disputa sucesoria. El visitante encontró la corte impresionante, el sistema de justicia admirable y la comida decepcionante, y lo dijo.',
        'La célebre afirmación de que fue la persona más rica de la historia viene de una lista publicada en una web en 2012 y no tiene ninguna base académica. No hay manera de convertir un tesoro del siglo XIV en moneda moderna.',
      ],
      sourceIds: ['ibn-battuta-1355', 'catalan-atlas-1375', 'gomez-2018'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'Mansa Musa es hoy famoso por una cifra que no significa nada. El «hombre más rico de la historia, con 400.000 millones de dólares» sale de una lista publicada en una web en 2012 y se ha repetido desde entonces. No hay método que la produzca: el dominio de un gobernante del siglo XIV sobre oro, tierra, trabajo y tributo no se convierte en dólares modernos, porque las cosas que se comparan no tienen una medida común.',
        'Lo que queda cuando quitas la cifra es más interesante. Malí era un Estado grande y sofisticado en sus instituciones, con gobernadores, ejército, sistema legal y base fiscal, que llevaba funcionando un siglo antes de Musa y siguió después. Era rico porque se sentaba sobre las rutas entre los campos auríferos del sur y los mercados mediterráneos del norte, y porque sus gobernantes entendían que gravar el tráfico gana a poseer minas.',
        'El hajj merece conservarse por lo que fue de verdad: una operación de Estado, ejecutada en el único medio disponible en 1324 para hacer visible un Estado ante otros Estados. Funcionó. Antes del viaje Malí apenas está en el registro; después está en las crónicas de Egipto y en un mapa catalán, y el mapa es donde empieza el interés europeo por el oro de África occidental, un interés que lleva directamente a las carabelas portuguesas bajando por la costa un siglo más tarde.',
        'Y esa es también la parte incómoda. La riqueza exhibida en El Cairo salía de un comercio que llevaba oro hacia el norte y personas esclavizadas hacia el norte con él, y las mismas rutas y la misma demanda dieron forma al comercio atlántico que vino después. Nada de la historia del hajj es separable de eso.',
        'Y la versión que reduce un imperio de cien años al dinero de bolsillo de un hombre repite, en un registro más amable, lo más viejo que se ha dicho de África en la escritura europea: que es un sitio donde la riqueza simplemente existe, en vez de un sitio donde se construyen Estados, se recaudan impuestos y se toman decisiones. El oro es lo menos interesante de Mansa Musa. El imperio es la historia.',
      ],
      sourceIds: ['gomez-2018', 'levtzion-hopkins-1981'],
    },
  },

  timeline: [
    { year: 1235, title: 'Se funda Malí', detail: 'Sunyata Keita derrota a su rival en Kirina, según la tradición, y empieza el imperio. Tiene un siglo antes de que Musa lo herede.', pivotal: true, confidence: 'contested' },
    { year: 1252, title: 'Florencia acuña el florín', detail: 'La primera moneda de oro estable de Europa en cinco siglos, acuñada en buena parte con oro traído al norte por el Sáhara.' },
    { year: 1312, title: 'Musa llega al trono', detail: 'El noveno o décimo gobernante de Malí, heredando un Estado consolidado con provincias, ejército y corte.' },
    { year: 1324, title: 'Empieza el hajj', detail: 'Musa sale hacia La Meca, unos cuatro mil kilómetros en cada sentido, con una columna lo bastante grande como para que ninguna fuente coincida en su tamaño.', pivotal: true },
    { year: 1324, title: 'Tres meses en El Cairo', detail: 'Se niega a postrarse ante el sultán, lo convencen de inclinarse ante Dios, y reparte oro a una escala de la que la ciudad habla durante décadas.', pivotal: true },
    { year: 1325, title: 'Se anexionan Tombuctú y Gao', detail: 'En el viaje de vuelta Malí toma el control de las principales ciudades comerciales del Níger. Se lleva a casa al arquitecto granadino al-Sahili.', pivotal: true },
    { year: 1327, title: 'La mezquita de Djingareyber', detail: 'Construida en Tombuctú y atribuida a al-Sahili. La afirmación de que introdujo la arquitectura de adobe en la región es exagerada.', confidence: 'contested' },
    { year: 1337, title: 'Al-Umari recoge las consecuencias', detail: 'Un funcionario mameluco en El Cairo escribe que el precio del oro cayó tras la visita de Musa y todavía no se ha recuperado. La medición conservada más concreta.', pivotal: true },
    { year: 1352, title: 'Ibn Battuta llega a Malí', detail: 'Viajando bajo el hermano de Musa, Sulayman, deja el único relato ocular sustancial del imperio hecho por un observador externo.', pivotal: true },
    { year: 1375, title: 'El Atlas catalán', detail: 'Un cartógrafo mallorquín dibuja a Musa con una pepita de oro, rotulado como el rey más rico de la tierra. Esta es la imagen que se queda Europa.', pivotal: true },
    { year: 1468, title: 'Songhay toma Tombuctú', detail: 'Malí decae en el siglo XV y es desplazado como potencia dominante del Níger. La edad de oro erudita de Tombuctú llega bajo los songhay.' },
    { year: 2012, title: 'Aparece la cifra de 400.000 millones', detail: 'Una lista de una web lo nombra la persona más rica de la historia. No hay base académica para el número ni método que pudiera producirlo.' },
  ],

  causeEffect: [
    { cause: 'Los campos auríferos quedan fuera del control maliense', effect: 'Malí grava el comercio en vez de poseer las minas', because: 'A unos mineros a los que confiscas simplemente dejan de extraer, mientras que una ruta de caravanas la puede gravar de forma fiable quien controle el territorio que cruza.' },
    { cause: 'La sal es una necesidad y el Sáhara tiene minas llenas', effect: 'Se desarrolla un comercio de ida y vuelta por el desierto', because: 'Con oro subiendo y sal bajando, merece la pena financiar las dos direcciones de una travesía brutal de dos meses.' },
    { cause: 'Malí es rico pero desconocido en el mundo islámico', effect: 'Musa hace el hajj a una escala espectacular', because: 'La peregrinación era la única ocasión que reunía a todo el mundo islámico, y gastar era la manera de que te recordara.' },
    { cause: 'Entran de golpe cantidades enormes de oro en el mercado de El Cairo', effect: 'El precio del oro cae y sigue bajo durante años', because: 'Un choque de oferta mayor de lo que un mercado puede absorber mueve el precio, y El Cairo no pudo absorber este.' },
    { cause: 'El hajj establece a Malí como Estado musulmán soberano', effect: 'Eruditos, juristas y libros viajan al sur', because: 'El reconocimiento crea una ruta: en cuanto una corte es conocida y legítima, quienes se mueven entre cortes empiezan a incluirla.' },
    { cause: 'Los cartógrafos europeos oyen hablar de Musa', effect: 'África occidental aparece como fuente de oro en el Atlas catalán', because: 'Los cartógrafos dibujaban lo que contaban mercaderes y viajeros, y lo que volvía de El Cairo era un rey con una pepita en la mano.' },
    { cause: 'Europa cree que el oro tiene una fuente localizable', effect: 'Los barcos portugueses bajan por la costa africana', because: 'Alcanzar la fuente por mar eliminaría por completo a los intermediarios saharianos, lo que valía varias décadas de viajes carísimos.' },
  ],

  myths: [
    {
      myth: 'Mansa Musa fue la persona más rica de la historia, con unos 400.000 millones de dólares.',
      reality: 'La cifra viene de una lista publicada en una web en 2012 y no tiene base académica. No existe un método aceptado para convertir el dominio de un gobernante del siglo XIV sobre oro, tierra, tributo y trabajo en moneda moderna: las economías no tienen medida común. Lo que sí puede decirse es que en la ciudad más rica del mundo islámico se quedaron asombrados, y que el precio del oro allí se movió.',
      whyItPersists: 'Un número con un símbolo de dólar llega más lejos que un párrafo de salvedades, y la afirmación la repite de buena fe gente que supone que alguien la comprobó.',
      sourceIds: ['gomez-2018', 'al-umari-1337'],
    },
    {
      myth: 'Malí era rico porque poseía las minas de oro.',
      reality: 'Los campos auríferos de Bambuk y Buré quedaban fuera del control maliense, trabajados por pueblos que guardaban su localización y que, en los relatos clásicos, comerciaban sin encontrarse siquiera con los compradores. La riqueza de Malí venía de gravar las rutas y las ciudades comerciales: controlar el camino y no la mina, que es a la vez más fácil y más fiable.',
      whyItPersists: 'Poseer una mina de oro es una historia más simple que operar un régimen aduanero, y los imperios se describen normalmente por lo que poseen y no por lo que administran.',
      sourceIds: ['levtzion-hopkins-1981', 'gomez-2018'],
    },
    {
      myth: 'Conocemos el tamaño de su caravana: sesenta mil personas y doce mil esclavos cargando oro.',
      reality: 'Esas cifras aparecen en fuentes escritas décadas o siglos después del hecho y se contradicen sustancialmente entre sí. Los relatos egipcios contemporáneos describen una columna enorme e impresionante sin dar números fiables. El atlas dice que era enorme y no repite un recuento.',
      whyItPersists: 'Los números concretos parecen pruebas, y se llevan copiando de un relato popular al siguiente desde hace muchísimo tiempo.',
      sourceIds: ['al-umari-1337', 'levtzion-hopkins-1981'],
    },
    {
      myth: 'Musa fundó Tombuctú y la convirtió en un gran centro de estudios.',
      reality: 'Tombuctú existía desde unos dos siglos antes de que él la anexionara en 1325, y su gran florecimiento como ciudad erudita llegó después, sobre todo bajo el dominio songhay de los siglos XV y XVI. La aportación de Musa fue la anexión, la construcción y las conexiones que iniciaron el flujo de libros y juristas hacia el sur.',
      whyItPersists: 'Atribuir toda la fama de una ciudad a su gobernante más célebre es una compresión estándar, y la mezquita que construyó sigue en pie.',
      sourceIds: ['gomez-2018', 'ibn-battuta-1355'],
    },
  ],

  disagreements: [
    {
      question: '¿Cómo de grande fue el efecto sobre el mercado del oro de El Cairo?',
      positions: [
        { view: 'Sustancial y duradero: al-Umari, un funcionario que estuvo en El Cairo unos doce años después, afirma que el precio del oro cayó y no se había recuperado.', heldBy: 'Al-Umari y los relatos que lo siguen', sourceId: 'al-umari-1337' },
        { view: 'Real, pero probablemente exagerado en la transmisión. El Cairo era un mercado enorme con entradas continuas de oro, y los relatos posteriores han amplificado una perturbación real de corto plazo hasta un hundimiento de una década.', heldBy: 'La lectura prudente entre los historiadores modernos', sourceId: 'gomez-2018' },
      ],
      atlasPosition: 'El atlas recoge la afirmación de al-Umari como testimonio de un observador bien situado y cercano al hecho, y señala que las versiones posteriores han crecido al contarse. No pone un porcentaje a la caída.',
    },
    {
      question: '¿Qué construyó realmente al-Sahili?',
      positions: [
        { view: 'Introdujo un estilo arquitectónico nuevo en el Sudán occidental, y la mezquita de Djingareyber y otros edificios representan una importación granadina.', heldBy: 'El relato más antiguo, siguiendo algunas fuentes árabes', sourceId: 'levtzion-hopkins-1981' },
        { view: 'Construyó edificios concretos dentro de una tradición local de adobe ya existente y sofisticada. La idea de que la arquitectura de África occidental empieza con un andalusí importado es un supuesto de época colonial que las pruebas no sostienen.', heldBy: 'La investigación arquitectónica y arqueológica actual', sourceId: 'gomez-2018' },
      ],
      atlasPosition: 'El atlas le acredita edificios, Djingareyber incluida, y rechaza la afirmación de que introdujera la técnica. La construcción local en adobe es muy anterior a él.',
    },
  ],

  didYouKnow: [
    'Malí no controlaba los campos auríferos. Su riqueza venía de gravar las rutas: ser dueño del camino y no de la mina.',
    'El oro y la sal se comerciaban por el Sáhara en las dos direcciones, y en algunos momentos y lugares la sal se cambiaba peso por peso contra el oro.',
    'Musa se negó a postrarse ante el sultán mameluco, y el atasco se resolvió inclinándose ante Dios en su lugar.',
    'Un funcionario egipcio que escribía doce años después dijo que el precio del oro en El Cairo había caído tras la visita de Musa y seguía sin recuperarse.',
    'Gastó tanto en el viaje que tuvo que pedir dinero prestado en El Cairo a la vuelta, a los comerciantes que le habían cobrado de más a la ida.',
    'El Atlas catalán de 1375 lo muestra sentado con una pepita de oro en la mano: la imagen que fijó África occidental en la imaginación europea.',
    'El oro de las primeras monedas de oro estables de Europa, el florín florentino y el genovino, subía en buena parte por las rutas transaharianas.',
    'La cifra de «persona más rica de la historia» sale de una lista publicada en una web en 2012 y no tiene absolutamente ninguna base académica.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'El Imperio de Malí se fundó en el siglo XIII y, cuando Mansa Musa lo heredó hacia 1312, era un Estado grande y desarrollado institucionalmente: provincias, gobernadores, ejército, corte. Su riqueza venía de gravar el comercio transahariano: oro y personas esclavizadas hacia el norte, sal, caballos y libros hacia el sur. No poseía los campos auríferos, que quedaban fuera de su control.',
        'En 1324 Musa hizo la peregrinación a La Meca, unos cuatro mil kilómetros en cada sentido. Paró en El Cairo unos tres meses y repartió y gastó oro a una escala que allí no se había visto. Al-Umari, funcionario mameluco que estuvo en la ciudad doce años después, recoge que el precio del oro había caído en consecuencia y seguía sin recuperarse.',
        'El hajj era política de Estado. Antes de él, Malí apenas aparece en los escritos árabes; después está en las crónicas de Egipto y, hacia 1375, en el Atlas catalán, donde un cartógrafo mallorquín dibujó a Musa con una pepita de oro y lo llamó el rey más rico de la tierra. Esa imagen impulsó el interés europeo por el oro de África occidental y, con el tiempo, los viajes portugueses por la costa.',
        'La afirmación moderna de que fue la persona más rica de la historia, con 400.000 millones de dólares, viene de una lista de una web de 2012 y no puede sostenerse: no hay manera de poner precio en dólares a un tesoro del siglo XIV.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Hace setecientos años había un imperio enorme en África occidental que se llamaba Malí. Era más o menos del tamaño de Europa occidental, con gobernadores y ejércitos y una corte: un país en condiciones, no una aldea.',
        'Era riquísimo, y aquí viene lo listo: no era rico porque tuviera minas de oro. Las minas estaban fuera del imperio, y la gente que las trabajaba ni siquiera decía dónde estaban. Malí se hizo rico cobrando impuestos a todo lo que pasaba por allí: el oro que subía por el desierto, la sal que bajaba. Si controlas el camino, no te hace falta la mina.',
        'En 1324 el rey, Mansa Musa, decidió viajar a La Meca, que está a unos cuatro mil kilómetros y con dos meses de desierto en medio. Se llevó un grupo enorme de gente y una cantidad enorme de oro.',
        'Cuando paró en El Cairo —entonces la ciudad más grande y rica de por allí— regaló oro a todo el mundo. Tanto oro que de repente había demasiado en la ciudad, y el precio del oro bajó y se quedó bajo durante años. Es como si de golpe todo el mundo tuviera cien de algo: deja de valer tanto.',
        'Y le funcionó, porque de eso se trataba. Antes del viaje, casi nadie fuera de África había oído hablar de Malí. Después, los cartógrafos europeos lo dibujaban sujetando un pedazo grande de oro y escribían al lado «el rey más rico del mundo».',
        'Una cosa con cuidado: por internet dicen que fue la persona más rica de la historia y ponen una cifra en dólares. Eso nadie puede calcularlo de verdad. Y el imperio es mucho mejor historia que el viaje de compras.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'La base probatoria es casi por completo externa. El *Masalik al-absar* de al-Umari es lo más parecido a un testimonio próximo, compilado en El Cairo aproximadamente una década después del hajj a partir de informantes que habían tratado con la comitiva maliense, y aporta la observación sobre el precio del oro que ancla casi toda la discusión cuantitativa. La *Rihla* de Ibn Battuta cubre 1352-53 bajo Mansa Sulayman y es la única etnografía ocular sustancial del imperio; el *Kitab al-Ibar* de Ibn Jaldún conserva información dinástica recogida de informantes en la década de 1370. Levtzion y Hopkins sigue siendo el corpus crítico estándar en traducción.',
        'La ausencia de documentación interna del siglo XIV es el problema metodológico central. La epopeya de Sunyata y las tradiciones orales afines son fuentes históricas genuinas con su propia historia de transmisión, pero se recogieron a partir del siglo XIX y no pueden leerse como anales. Gomez (2018) intenta reconstruir las instituciones políticas malienses —sucesión, cargos, la relación entre la mansaya y las fuentes preislámicas de autoridad— en gran medida a partir de esos materiales leídos contra el corpus árabe, y es el punto de partida actual.',
        'En cuanto a la economía, el correctivo importante afecta al modo de extracción. Malí no ejercía control directo sobre los aluviones de Bambuk y Buré; la base fiscal del Estado era el tránsito y el mercado más el tributo, cosa coherente con el patrón general de las entidades sahelianas cuyo poder derivaba de su posición en los corredores comerciales y no de activos productivos. Los relatos del comercio silencioso deben tratarse tanto como tópico como descripción, pero el punto de fondo sobre el no control de la fuente está bien sostenido.',
        'El efecto sobre el precio en El Cairo se ha tratado con demasiada credulidad en la literatura popular y con demasiado desdén en algunas correcciones. El testimonio de al-Umari es temprano y está bien situado; una perturbación sustancial a corto plazo en un mercado de metal con recuperación a lo largo de años no tiene nada de sorprendente. Lo que las pruebas no sostienen es un hundimiento cuantificado de varias décadas, y desde luego no sostienen las valoraciones modernas en dólares, que implican una inconmensurabilidad que ningún índice resuelve.',
        'Por último, la historia de la recepción es un tema en sí. La imagen del Atlas catalán es el punto de origen de una iconografía europea del oro africano que atraviesa la exploración atlántica portuguesa y, después, los encuadres coloniales de la riqueza africana como natural y no como administrada. El meme moderno del «hombre más rico de la historia» reproduce ese encuadre con la polaridad invertida y la estructura intacta.',
      ],
    },
    {
      id: 'the-road-not-the-mine',
      label: 'Por qué el camino gana a la mina',
      kind: 'angle',
      paragraphs: [
        'El dato más útil sobre el Imperio de Malí es uno que las historias del oro siempre se saltan: no controlaba los campos auríferos.',
        '**Dónde estaba el oro.** En los depósitos aluviales de Bambuk y Buré, al sur y al oeste, trabajados por pueblos que no eran súbditos malienses y que guardaban celosamente las localizaciones. Las fuentes árabes describen un comercio hecho sin contacto: mercancía dejada en un punto acordado, oro dejado a cambio, sin negociación y sin encuentro.',
        '**Por qué nadie se los quedaba.** El detalle que se repite en los relatos es que cuando un gobernante intentaba el control directo, la producción se detenía. Sean o no fiables las anécdotas concretas, la estructura de incentivos está clara: el oro aluvial requiere mano de obra dispersa con conocimiento local, y una mano de obra dispersa con conocimiento local puede sencillamente parar.',
        '**Qué hizo Malí en su lugar.** Controlar las ciudades comerciales y las rutas: gravar la entrada y salida de mercancías, quedarse una parte del tráfico de caravanas y administrar los mercados donde el oro se encontraba con la sal. Eso es un régimen aduanero, no uno extractivo, y escala con el comercio y no con la conquista.',
        '**Por qué eso condiciona todo lo demás.** Un Estado financiado por el tránsito tiene interés en que el tráfico sea seguro, previsible y abundante. Quiere rutas patrulladas, disputas resueltas y mercaderes confiados — que es exactamente lo que observó y admiró Ibn Battuta en 1352, cuando comentó lo seguro que era moverse por territorio maliense.',
        'El oro es el titular. La aduana es el imperio.',
      ],
    },
    {
      id: 'the-number',
      label: 'De dónde salen los 400.000 millones',
      kind: 'contrast',
      paragraphs: [
        'Merece la pena rastrear esto con precisión, porque es un buen caso de estudio de cómo se fabrica un dato.',
        '**La afirmación.** Mansa Musa fue la persona más rica que ha vivido, con una fortuna equivalente a unos 400.000 millones de dólares actuales.',
        '**La fuente.** Una lista publicada en una web de patrimonios de famosos en 2012, que ordenaba a personajes históricos por riqueza estimada. La recogieron medios de noticias, después webs educativas, después todo el mundo.',
        '**Por qué no puede ser correcta.** No porque la cifra verdadera sea menor, sino porque no hay cifra verdadera. La riqueza de Musa consistía en el control sobre flujos de oro, el tributo de las provincias, la tierra y el trabajo de muchísima gente, personas esclavizadas incluidas. Nada de eso se convierte en dólares, porque la conversión requiere una cesta común de bienes y no la hay a través de setecientos años. Pregúntate qué compra hoy mil millones y luego qué habría comprado en Niani en 1320, y la pregunta se disuelve.',
        '**Qué se puede decir con honestidad.** Los contemporáneos de El Cairo, la ciudad más rica del mundo islámico, se quedaron asombrados por la escala de su gasto. Un funcionario bien situado dejó constancia de que el precio del oro cayó como consecuencia y no se había recuperado una década después. Son observaciones de gente que estuvo allí, y establecen que la cantidad fue extraordinaria según el criterio del mayor mercado que existía.',
        'Esa es mejor afirmación que la cifra, porque es comprobable. Y hace algo que la cifra no hace: te dice que el efecto se midió en su momento, y lo midió alguien con un interés profesional en la moneda.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Malí en el registro, antes y después de 1324',
    before: {
      title: 'Antes del hajj',
      points: [
        'Un imperio grande apenas mencionado en los escritos árabes',
        'Oro conocido en el Mediterráneo, y su origen un rumor',
        'El África al sur del Magreb en blanco en los mapas',
        'Tombuctú y Gao fuera del control maliense',
        'La erudición islámica llegando al sur solo con cuentagotas',
      ],
    },
    after: {
      title: 'Después del hajj',
      points: [
        'Malí en las crónicas de Egipto y en Ibn Jaldún',
        'Un rey con nombre identificado como origen del oro',
        'Una figura coronada con una pepita en el Atlas catalán',
        'Tombuctú y Gao anexionadas, y obra nueva en ambas',
        'Juristas, maestros y manuscritos bajando por las rutas',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si Musa no hubiera hecho nunca el hajj?',
      reasoning: 'Malí probablemente habría seguido siendo, en el registro externo, un rumor al final de una ruta de caravanas. Sin el espectáculo de El Cairo no hay motivo para que los cronistas egipcios reúnan información sobre él, probablemente no hay retrato en el Atlas catalán, y hay una base más débil para la creencia europea de que existía un reino de África occidental concreto, localizable y enormemente rico.',
      constraint: 'El oro habría seguido fluyendo hacia el norte igualmente, y el interés europeo por llegar a su fuente era comercial antes que iconográfico. Los viajes portugueses tuvieron muchos impulsores. Esto cambia lo que Europa imaginaba sobre África occidental, y probablemente no si fue a buscarla.',
    },
    {
      question: '¿Y si Malí hubiera controlado directamente los campos auríferos?',
      reasoning: 'El control directo habría convertido un Estado aduanero en uno extractivo, con una parte mucho mayor del valor y una posición fiscal mucho más fuerte: potencialmente un imperio más duradero, mejor capacitado para resistir la expansión songhay del siglo XV.',
      constraint: 'Los relatos sugieren de forma consistente que los intentos de control directo detenían la producción, y el oro aluvial recuperado por mano de obra local y dispersa es insólitamente difícil de coaccionar. Puede que sea un escenario que la tecnología del comercio sencillamente no permitía, cosa que ya es en sí el hallazgo interesante.',
    },
  ],

  quiz: [
    {
      question: '¿De dónde venía en realidad la riqueza de Malí?',
      options: [
        'De poseer y explotar las minas de oro',
        'De gravar las rutas comerciales y las ciudades de mercado',
        'De la conquista y el saqueo del norte de África',
        'De la agricultura a lo largo del Níger',
      ],
      answerIndex: 1,
      explains: 'Los campos auríferos quedaban fuera del control maliense, trabajados por pueblos que guardaban su localización. Malí gravaba en su lugar las caravanas y los mercados: era dueño del camino, no de la mina.',
    },
    {
      question: '¿Qué pasó en El Cairo durante la estancia de Musa en 1324?',
      options: [
        'El sultán le negó la entrada',
        'Regaló tanto oro que su precio cayó y siguió bajo durante años',
        'Le robaron todo su tesoro',
        'Estableció una embajada maliense permanente',
      ],
      answerIndex: 1,
      explains: 'Al-Umari, funcionario mameluco en El Cairo unos doce años después, dejó constancia de que entró tanto oro en el mercado que su valor cayó y todavía no se había recuperado.',
    },
    {
      question: '¿Por qué importaba políticamente el hajj?',
      options: [
        'Era obligatorio para ser rey',
        'Hacía visible a Malí como Estado musulmán legítimo ante el resto del mundo islámico',
        'Aseguraba una alianza militar con Egipto',
        'Abría una nueva ruta comercial',
      ],
      answerIndex: 1,
      explains: 'Antes de 1324 Malí apenas aparece en los escritos árabes. Después está en las crónicas de Egipto, en Ibn Jaldún y con el tiempo en los mapas europeos, que era el objetivo del ejercicio.',
    },
    {
      question: '¿En qué se basa lo de llamarlo la persona más rica de la historia?',
      options: [
        'En registros detallados del tesoro maliense',
        'En cálculos de historiadores económicos',
        'En una lista de una web de patrimonios de famosos publicada en 2012',
        'En las cifras de al-Umari desde El Cairo',
      ],
      answerIndex: 2,
      explains: 'La cifra de 400.000 millones de dólares viene de una clasificación web de 2012 y no tiene base académica. La riqueza del siglo XIV no se convierte en moneda moderna de ninguna manera con sentido.',
    },
  ],

  sources: [
    {
      id: 'al-umari-1337',
      kind: 'primary',
      author: 'Shihab al-Din al-Umari',
      title: 'Masalik al-absar fi mamalik al-amsar',
      year: 1337,
      detail: 'Compilado en El Cairo hacia 1337-38; traducido en Levtzion y Hopkins, «Corpus of Early Arabic Sources for West African History»',
      note: 'Lo más parecido a un testimonio próximo: un funcionario mameluco recogiendo relatos en El Cairo una década después de la visita. Fuente de la observación sobre el precio del oro.',
    },
    {
      id: 'ibn-battuta-1355',
      kind: 'primary',
      author: 'Ibn Battuta',
      title: 'Rihla — the journey to Mali',
      year: 1355,
      detail: 'Viajó en 1352-53; dictado en 1355. Trad. en Levtzion y Hopkins, y en Hamdun y King, «Ibn Battuta in Black Africa»',
      note: 'El único relato ocular sustancial del imperio por un extranjero: llegó bajo el hermano de Musa y admiró la seguridad de los caminos y la administración de justicia.',
    },
    {
      id: 'ibn-khaldun-1377',
      kind: 'primary',
      author: 'Ibn Khaldun',
      title: 'Kitab al-‘Ibar, on the kings of Mali',
      year: 1377,
      detail: 'Compilado hacia 1374-78 a partir de informantes; traducido en Levtzion y Hopkins',
      note: 'El armazón dinástico —sucesiones, reinados y la secuencia de gobernantes— reunido por un historiador que trabajaba con gente que había estado allí.',
    },
    {
      id: 'catalan-atlas-1375',
      kind: 'primary',
      author: 'Attributed to Abraham Cresques, Majorca',
      title: 'The Catalan Atlas',
      year: 1375,
      detail: 'Bibliothèque nationale de France, Espagnol 30; seis paneles de vitela',
      note: 'La imagen que fijó África occidental en la imaginación europea: un rey coronado con una pepita de oro, rotulado como el más rico y noble de la tierra.',
    },
    {
      id: 'levtzion-hopkins-1981',
      kind: 'book',
      author: 'Nehemia Levtzion and J. F. P. Hopkins (eds.)',
      title: 'Corpus of Early Arabic Sources for West African History',
      year: 1981,
      detail: 'Cambridge University Press; reeditado por Markus Wiener, 2000. ISBN 978-1-55876-241-1',
      note: 'La traducción crítica de referencia del material árabe, con el aparato necesario para ver qué afirmaciones vienen de testigos y cuáles de copistas.',
    },
    {
      id: 'gomez-2018',
      kind: 'book',
      author: 'Michael A. Gomez',
      title: 'African Dominion: A New History of Empire in Early and Medieval West Africa',
      year: 2018,
      detail: 'Princeton University Press. ISBN 978-0-691-19682-4',
      note: 'La reconstrucción actual de Malí como sistema político y no como tesoro, y la fuente de la insistencia de esta historia en las instituciones por encima del oro.',
    },
  ],
}
