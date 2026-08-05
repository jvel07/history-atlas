import type { Story } from '../../types'

export const printingPressEs: Story = {
  slug: 'printing-press',
  title: 'Lo que cuesta una copia',
  subtitle: 'Maguncia, década de 1450 — Gutenberg no inventó la imprenta. Inventó cómo fabricar letras idénticas más rápido de lo que nadie podía gastarlas.',
  hook: 'Antes de 1450, todos los libros de Europa los hacía una persona copiando otro libro a mano — y ese solo hecho estaba frenando en silencio todo lo que Europa podía llegar a saber.',
  era: 'early-modern',
  category: 'milestones',
  years: [1440, 1550],
  regions: ['Alemania', 'Italia', 'Corea', 'China'],
  nodes: ['printing-press', 'gutenberg', 'movable-type', 'reformation', 'martin-luther'],
  tags: ['technology', 'media', 'religion', 'knowledge', 'europe', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'ledger',

  reel: [
    { beat: 'hook', punch: true, text: 'Antes de 1450, cada libro de Europa era una persona copiando a mano otro libro.' },
    { beat: 'hook', text: 'Una persona, un libro, meses. Ese es todo el cuello de botella.' },
    { beat: 'worldBefore', text: 'Una biblioteca monástica de trescientos volúmenes es una biblioteca seria,' },
    { beat: 'worldBefore', text: 'y cada copia se aparta un poco de aquella de la que se copió —' },
    { beat: 'worldBefore', punch: true, text: 'así que la página cuarenta y uno no existe. No de verdad.' },
    { beat: 'problem', kicker: '868', text: 'China llevaba seiscientos años imprimiendo páginas enteras talladas,' },
    { beat: 'problem', kicker: '1377', text: 'y Corea imprimió un libro con tipos de metal antes de que Gutenberg naciera.' },
    { beat: 'problem', punch: true, text: 'O sea que el invento que todos le atribuyen ya estaba inventado.' },
    { beat: 'problem', text: 'Lo que nadie tenía era cómo fabricar las letras lo bastante rápido.' },
    { beat: 'story', kicker: 'Maguncia', text: 'Gutenberg es orfebre, y lo resuelve como lo resolvería un orfebre:' },
    { beat: 'story', text: 'talla un punzón de acero, golpéalo contra cobre y tienes un molde' },
    { beat: 'story', punch: true, mark: 'press', text: 'que vierte la misma letra, exacta, toda la tarde.' },
    { beat: 'story', text: 'Luego una tinta de aceite que agarre en el metal, y una prensa de vino que apriete.' },
    { beat: 'story', kicker: '1455', text: 'La Biblia que imprime es hermosa, y lo arruina:' },
    { beat: 'story', punch: true, text: 'su financiador lo demanda, gana y se queda el taller.' },
    { beat: 'story', text: 'Gutenberg recibe una pensión y un título, y no el negocio.' },
    { beat: 'whyItHappened', kicker: '1500', text: 'En cincuenta años hay imprentas en unas doscientas cincuenta ciudades,' },
    { beat: 'whyItHappened', text: 'y lo que ha cambiado de verdad no es la velocidad. Es la igualdad.' },
    { beat: 'whyItHappened', punch: true, mark: 'echo', text: 'Todas las copias dicen lo mismo, así que un número de página empieza a significar algo.' },
    { beat: 'whyItHappened', text: 'Te pueden corregir. Te pueden comprobar. Te pueden citar de vuelta.' },
    { beat: 'consequences', kicker: '1517', text: 'Un monje clava una discusión sobre indulgencias, en latín, para eruditos,' },
    { beat: 'consequences', text: 'y los impresores la traducen y la venden antes de que él decida qué quería decir.' },
    { beat: 'consequences', punch: true, text: 'Lutero escribe corto, en alemán, y se vuelve el primer autor superventas vivo.' },
    { beat: 'consequences', text: 'Hus había dicho casi lo mismo un siglo antes, y lo quemaron en silencio.' },
    { beat: 'consequences', mark: 'web', text: 'Las mismas prensas venden manuales de caza de brujas, panfletos de atrocidades y mentiras.' },
    { beat: 'whyItMatters', text: 'Una máquina que abarata copiar no hace más sabia a la gente.' },
    { beat: 'whyItMatters', text: 'Hace que lo que ya se estaba difundiendo llegue más lejos y más rápido,' },
    { beat: 'whyItMatters', punch: true, text: 'y todas las discusiones sobre eso desde entonces han sido la misma discusión.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Un libro medieval lo hacía una persona, sentada a una mesa, copiando otro libro. Un escriba diestro sacaba unas pocas páginas al día. Una Biblia entera le costaba a un copista algo así como un año de trabajo — y eso antes del pergamino, que para una Biblia grande significaba las pieles de quizá doscientos animales.',
        'Por eso las bibliotecas se contaban por centenares y no por millares, y por eso un libro era una forma de riqueza. Y también por eso tener uno era sobre todo una condición monástica, aristocrática o universitaria. Las universidades tenían un sistema, la *pecia*, para alquilar por cuadernillos ejemplares aprobados y que varios estudiantes copiaran a la vez: lo que dice exactamente cómo de escasa era la alternativa.',
        'La segunda consecuencia es menos evidente y más importante. Toda copia hecha a mano se aparta de la que la engendró. El escriba salta una línea, lee mal una palabra, corrige en silencio algo que le parece erróneo o añade una nota que el siguiente copista toma por texto. En diez generaciones de copia, un texto deriva.',
        'Así que un erudito de París y otro de Bolonia leyendo «el mismo» libro a menudo no leían las mismas palabras, y no tenían manera de descubrirlo. No podías citar un número de página, porque tu página cuarenta y uno no era la de nadie más. Las referencias cruzadas, en el sentido moderno, no eran tanto difíciles como carentes de sentido.',
        'Todo lo que Europa sabía estaba guardado en un sistema donde el conocimiento se degradaba un poco cada vez que se transmitía, y donde el número total de copias lo limitaba el número de personas dispuestas a pasar un año en una mesa.',
      ],
      aside: {
        kind: 'number',
        label: 'La cifra',
        body: 'Hacia 1450, Europa tenía quizá unos pocos millones de libros manuscritos, acumulados en mil años. Para 1500 —cincuenta años después— las prensas habían producido entre ocho y veinte millones de copias impresas. El cuello de botella no se ensanchó. Desapareció.',
        sourceId: 'fussel-2005',
      },
      sourceIds: ['fussel-2005', 'eisenstein-1979'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Aquí va la parte que se suele omitir: imprimir no era nuevo, los tipos móviles no eran nuevos, y ninguna de las dos cosas se inventó en Europa.',
        'China imprimía con bloques de madera tallados desde al menos el siglo IX — el Sutra del Diamante del 868 es un libro impreso, ilustrado y fechado, seiscientos años antes de Gutenberg. Hacia 1040 un artesano llamado Bi Sheng hizo tipos móviles de arcilla cocida. Corea fue más lejos y fundió tipos en metal: el *Jikji*, impreso en un templo cerca de Cheongju en 1377, es el libro más antiguo conservado hecho con tipos móviles metálicos, y es setenta y ocho años anterior a la Biblia de Gutenberg.',
        'Así que la pregunta no es «quién ideó los tipos móviles», porque eso se resolvió en Asia. La pregunta es por qué cambió menos allí y más en Europa, y la respuesta honesta tiene varias partes. Un cajista chino o coreano se enfrentaba a miles de caracteres distintos y no a un par de docenas de letras, lo que cambia por completo la economía de fundir tipos. La imprenta metálica coreana fue en buena medida un proyecto estatal para un público lector reducido. Y Europa tenía, por accidente, un alfabeto de una veintena de formas, una cultura mercantil de escritura cursiva, papel barato llegado del mundo islámico y una prensa de vino y de aceite ya instalada en cada pueblo.',
        'Lo que faltaba de verdad en todas partes era una manera de fabricar letras. Si cada pieza de tipo hay que tallarla una a una, has sustituido un cuello de botella artesanal por otro. Para imprimir una página necesitas miles de piezas; para imprimir un libro, decenas de miles, todas exactamente de la misma altura, o la página sale desigual.',
        'Ese es el problema que resolvió Gutenberg, y es un problema de metalistería, no de edición.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: '«Gutenberg inventó la imprenta» es la versión del cartel. No la inventó. Inventó un proceso de fabricación de tipos y montó a su alrededor un sistema que funcionaba. Que es una afirmación más pequeña y mejor, porque es cierta y explica más.',
      },
      sourceIds: ['fussel-2005', 'jikji-1377'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'Johannes Gensfleisch zur Laden zum Gutenberg era hijo de un orfebre de Maguncia y pasó un tiempo en Estrasburgo trabajando en cosas sobre las que hacía jurar a la gente que no hablaría. Volvió a Maguncia hacia 1448 y pidió dinero prestado.',
        'Su solución al problema del tipo es el molde de mano, y es preciosa. Grabas una letra, al revés, en el extremo de un punzón de acero: destreza de orfebre. Golpeas el punzón contra una barra de cobre, más blando, y dejas una impresión hundida: la matriz. Sujetas la matriz en un molde de dos piezas ajustable, viertes la aleación fundida, abres el molde y sale una pieza de tipo. Y luego otra vez, y otra, todo el día.',
        'Dos detalles hacen que funcione en vez de casi funcionar. El molde se ajusta en anchura pero es fijo en altura, así que una *i* y una *m* difieren en anchura pero todas las piezas quedan exactamente a la misma altura — que es lo que permite que una página de miles de piezas sueltas imprima pareja. Y la aleación no es plomo sino plomo con estaño y antimonio, una mezcla que funde lo bastante bajo para colarse fácil, endurece deprisa y —cosa insólita— se dilata levemente al fraguar, de modo que llena la matriz por completo y da una letra nítida.',
        'Alrededor de eso montó el resto del sistema: una tinta a base de aceite y barniz, más cercana a una pintura que a la tinta al agua de los escribas, porque la tinta al agua se agrupa en gotas y resbala del metal; y una prensa de husillo adaptada de las que se usaban para el vino y la aceituna, que aplica presión pareja sobre toda una página a la vez.',
        'El primer gran producto fue la Biblia de 42 líneas, impresa en Maguncia hacia 1454–55: unos 180 ejemplares, la mayoría en papel y unas pocas docenas en vitela, con un tipo diseñado para parecerse a la mejor letra manuscrita de la región. Es uno de los libros más hermosos jamás hechos, y se hizo para parecer hecho a mano, porque eso era lo que un libro debía parecer.',
        'También lo arruinó. El dinero había venido de un hombre de negocios de Maguncia, Johann Fust, y en 1455 Fust reclamó judicialmente la devolución. Conocemos los detalles porque un notario levantó acta de la sentencia y el documento se conserva: Fust ganó y se quedó el taller, los tipos y los materiales. Se asoció con el capataz de Gutenberg, Peter Schöffer, que se casó con su hija, y la firma Fust y Schöffer imprimió el primer libro que lleva nombre de impresor y fecha: el Salterio de Maguncia de 1457.',
        'Gutenberg imprimió algo más, se quedó ciego o casi, y en 1465 el arzobispo de Maguncia le concedió una pensión de cortesano: grano, vino, ropa y exención de impuestos. Murió en 1468. Había inventado la máquina que definiría los cuatro siglos siguientes y la había perdido en un juicio.',
        'La tecnología, mientras tanto, no se quedó en Maguncia. En 1462 la ciudad fue saqueada en una pelea entre arzobispos y los impresores se dispersaron. En una década había prensas en Colonia, Basilea, Roma, Venecia, París, Cracovia. Para 1500 había prensas en unas 250 o 280 ciudades europeas y habían producido unas 28.000 ediciones distintas: los libros que hoy llamamos incunables, «cosas en la cuna».',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'El notario Ulrich Helmasperger dejó constancia, el 6 de noviembre de 1455, de que Johann Fust juró haber tomado dinero a interés para prestárselo a Gutenberg para «la obra de los libros», y de que el tribunal le concedió la devolución. Es un instrumento legal aburrido sobre una deuda, y es la mejor prueba documental que tenemos de que todo esto ocurrió.',
        sourceId: 'helmasperger-1455',
      },
      sourceIds: ['fussel-2005', 'helmasperger-1455', 'eisenstein-1979'],
    },

    whyItHappened: {
      heading: 'Por qué importó tanto',
      paragraphs: [
        'La respuesta obvia es el volumen, y el volumen es real. Pero el argumento que planteó Elizabeth Eisenstein —y es el argumento que cambió cómo piensan los historiadores sobre esto— es que los efectos profundos vienen de propiedades que no tienen nada que ver con la velocidad.',
        '**Normalización.** Todas las copias salidas de una misma composición de tipos son idénticas. Suena trivial y no lo es. Significa que un número de página se refiere a algo. Significa que dos personas de países distintos pueden discutir sobre la misma frase. Significa que un error puede *encontrarse*, porque está en el mismo sitio en el ejemplar de todos, en vez de ser el desliz privado de un escriba.',
        '**Fijeza.** Un texto copiado a mano se degrada de generación en generación. Uno impreso no deriva, porque las copias no descienden unas de otras. Por primera vez, un texto podía mejorar de forma acumulativa en vez de erosionarse: cada edición corrigiendo a la anterior, en lugar de cada copia heredando los errores de la anterior.',
        '**Recombinación.** Los impresores pusieron juntas cosas que nunca habían compartido estante: mapas con tablas, cartas estelares con observaciones, la afirmación de una autoridad al lado de la de su rival. Contradicciones repartidas por siglos y bibliotecas aparecieron en páginas contiguas, que es algo incómodo y enormemente productivo.',
        '**Y conservación por dispersión.** Un manuscrito está a un incendio de desaparecer. Mil copias impresas en mil sitios son, en conjunto, dificilísimas de destruir — que es por qué los textos clásicos impresos en el siglo XV han sobrevivido y mucho de lo anterior no.',
        'Esa es la versión fuerte del argumento. Tiene un crítico serio, y conviene tenerlo en la sala: Adrian Johns sostiene que la fijeza no era una propiedad de la máquina sino una reputación que el gremio de la imprenta fue construyendo despacio. La primera imprenta estaba llena de piratería, atribuciones falsas y reimpresiones estropeadas; un lector de 1600 tenía todas las razones para desconfiar de un libro impreso, y la fiabilidad que Eisenstein da por inherente la fabricaron durante dos siglos editores, gremios y sistemas de licencias. Ambas lecturas explican pruebas reales, y la postura honesta las sostiene juntas.',
      ],
      sourceIds: ['eisenstein-1979', 'johns-1998', 'fussel-2005'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'La demostración más clara de lo que había hecho la imprenta llegó sesenta años después, en forma de una discusión sobre indulgencias.',
      ],
      shortTerm: [
        'En 1517 Martín Lutero hizo circular noventa y cinco tesis en latín, pensadas para el debate académico. Los impresores las tradujeron y las pusieron a la venta por toda Alemania en semanas, sin preguntarle.',
        'Él se adaptó rápido. Empezó a escribir panfletos cortos, baratos y en lengua vulgar —de ocho o dieciséis páginas, leíbles en una tarde, al precio de un pollo— y se convirtió en el primer autor de la historia que vendía por decenas de miles.',
        'Entre 1518 y 1525, se ha estimado que las obras de Lutero fueron alrededor de un tercio de todos los libros vendidos en alemán. Ningún autor había ocupado nunca un mercado así, porque no había existido un mercado que ocupar.',
        'La Iglesia respondió en el mismo medio y perdió el intercambio con claridad, en parte porque sus eruditos siguieron escribiendo libros largos en latín los unos para los otros.',
        'Wittenberg, un pueblo pequeño con una universidad nueva, se convirtió en centro editorial, y los impresores que apostaron por Lutero se hicieron ricos.',
      ],
      longTerm: [
        'El cristianismo occidental se partió, y la ruptura se mantuvo, porque los argumentos ya no podían contenerse callando a quien los hacía.',
        'Las lenguas vernáculas se normalizaron en torno a las formas impresas. La Biblia alemana de Lutero hizo más por fijar el alemán escrito que cualquier decreto, y el mismo proceso corrió en inglés, francés e italiano.',
        'El trabajo científico se volvió acumulativo de una manera nueva: diagramas idénticos, tablas idénticas y la posibilidad de decir «frente a lo que Ptolomeo pone en esta página».',
        'Los gobiernos inventaron la censura como institución permanente —licencias, privilegios, el Índice de Libros Prohibidos desde 1559— porque por primera vez había una oferta de copias peligrosas y no una oferta de personas peligrosas.',
        'El autor se convirtió en figura económica. El copyright desciende en línea directa de los monopolios de impresor concedidos para gestionar un negocio que ahora podía hacer mil unidades de algo.',
      ],
      unexpected: [
        'La imprenta era tan buena difundiendo disparates como conocimiento. El *Malleus Maleficarum*, el manual de caza de brujas, tuvo unas treinta ediciones a partir de 1487 e industrializó una persecución que había sido local y esporádica.',
        'También creó la primera literatura barata de atrocidades: los panfletos sobre Vlad Țepeș, impresos en alemán desde la década de 1480, fijaron durante quinientos años una reputación sobre la palabra de sus enemigos políticos.',
        'La Biblia de Gutenberg se diseñó para imitar tan bien la escritura a mano que algunos compradores tempranos no se daban cuenta de que era impresa. Los medios nuevos casi siempre empiezan fingiendo ser el antiguo.',
        'El libro impreso comercialmente más trascendente del siglo quizá fuera el manual de matemáticas de Luca Pacioli de 1494, que contenía la primera descripción impresa de la partida doble y convirtió una práctica de mercaderes venecianos en un estándar europeo.',
      ],
      sourceIds: ['pettegree-2015', 'eisenstein-1979', 'fussel-2005'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'La tentación es archivar esto en «grandes inventos» y pasar página. La lectura más útil es que la imprenta es el primer caso limpio de un patrón que no dejamos de vivir: una tecnología que hunde el coste de copiar, y una sociedad que descubre después qué le ha hecho eso de verdad.',
        'No volvió más lista a la gente. Hizo que lo que ya se difundía se difundiera más. Los mismos talleres que imprimían a Cicerón imprimían el manual de brujas; la misma tubería que llevó la Reforma llevó quinientos años de calumnia sobre un príncipe de Valaquia. Las copias baratas amplifican. No filtran, y la máquina nunca prometió lo contrario.',
        'El cambio profundo —el que vio Eisenstein y el que es fácil pasar por alto porque es invisible— fue la igualdad. En cuanto todas las copias dijeron lo mismo, se pudo comprobar, citar, corregir y construir encima. Esa es la condición previa del conocimiento acumulativo, y es por lo que la revolución científica ocurrió después de la imprenta y no antes.',
        'Y el contraargumento importa igual. Johns tiene razón en que la confianza en lo impreso no fue automática: hubo que construirla, despacio, con instituciones dispuestas a jugarse su nombre en la exactitud, y podía perderse. Quien vea a una máquina de copiar más reciente llegar a la misma pregunta —si una copia no cuesta nada, ¿qué hace fiable a alguna?— está viendo una discusión que empezó en Maguncia en la década de 1450 y no se ha cerrado nunca.',
      ],
      sourceIds: ['eisenstein-1979', 'johns-1998'],
    },
  },

  timeline: [
    { year: 868, title: 'Se imprime en China el Sutra del Diamante', detail: 'Un libro fechado e ilustrado, producido con bloques de madera tallados: el libro impreso con fecha más antiguo, seis siglos antes de Maguncia.', pivotal: true },
    { year: 1040, title: 'Bi Sheng fabrica tipos móviles de arcilla', detail: 'Caracteres sueltos en cerámica cocida, montados en un marco de hierro. La idea del tipo móvil queda resuelta en China cuatrocientos años antes.' },
    { year: 1377, title: 'El Jikji se imprime en Corea con tipos de metal', detail: 'Una antología budista fundida e impresa en un templo cerca de Cheongju: el libro más antiguo conservado hecho con tipos móviles metálicos.', pivotal: true },
    { year: 1448, title: 'Gutenberg vuelve a Maguncia y pide dinero', detail: 'Tras unos experimentos secretos en Estrasburgo, monta un taller financiado con préstamos que no podrá devolver.' },
    { year: 1455, title: 'La Biblia de 42 líneas, y el pleito', detail: 'Unos 180 ejemplares de una Biblia tan fina que se confundía con un manuscrito. Ese mismo año Fust lo demanda; el acta notarial de la sentencia se conserva.', pivotal: true },
    { year: 1457, title: 'El Salterio de Maguncia', detail: 'Impreso por Fust y Schöffer en el antiguo taller de Gutenberg: el primer libro que lleva nombre de impresor y fecha de impresión.' },
    { year: 1462, title: 'Maguncia es saqueada y los impresores se dispersan', detail: 'Una guerra local desperdiga a las únicas personas que sabían cómo funcionaba el proceso, que es por lo que la tecnología llega tan rápido al resto de Europa.' },
    { year: 1494, title: 'Pacioli imprime la partida doble', detail: 'Un manual de matemáticas con el primer relato impreso del método veneciano convierte una práctica local en un estándar europeo.' },
    { year: 1500, title: 'Prensas en unas 250 ciudades', detail: 'Se han impreso unas 28.000 ediciones distintas en cincuenta años: quizá de ocho a veinte millones de copias en una Europa que tenía unos pocos millones de libros.', pivotal: true },
    { year: 1517, title: 'Las tesis de Lutero se imprimen y se traducen', detail: 'Un documento académico en latín se convierte en panfletos en lengua vulgar y se vende por toda Alemania en semanas, por impresores que nunca le preguntaron.', pivotal: true },
    { year: 1520, title: 'La guerra de panfletos', detail: 'Lutero pasa a panfletos alemanes cortos y baratos. Entre 1518 y 1525 sus obras son quizá un tercio de todos los libros vendidos en alemán.' },
    { year: 1559, title: 'El Índice de Libros Prohibidos', detail: 'Roma publica una lista formal de títulos vetados. La censura se vuelve institución permanente porque el problema son ahora las copias, no los autores.' },
  ],

  causeEffect: [
    { cause: 'Todo libro debe copiarse a mano', effect: 'Los libros son escasos y caros', because: 'Una Biblia entera costaba a un escriba cerca de un año de trabajo más las pieles de doscientos animales, lo que deja fuera a todos menos a las instituciones.' },
    { cause: 'Las copias manuscritas derivan de su original', effect: 'No existe un «mismo texto» estable', because: 'Cada copista introduce pequeños errores y correcciones silenciosas, así que en diez generaciones dos copias difieren de verdad.' },
    { cause: 'Los tipos hay que tallarlos uno a uno', effect: 'El tipo móvil sigue siendo una tecnología limitada', because: 'Cambiar un cuello de botella artesanal por otro no gana nada; un libro necesita decenas de miles de piezas idénticas.' },
    { cause: 'Gutenberg construye un molde de mano ajustable', effect: 'El tipo se puede fabricar, no tallar', because: 'Un punzón golpea una matriz, y la matriz funde letras idénticas de altura uniforme durante todo el día.' },
    { cause: 'Las copias se vuelven idénticas', effect: 'La cita, la corrección y el conocimiento acumulativo se hacen posibles', because: 'Un número de página solo significa algo si la página cuarenta y uno de todos lleva las mismas palabras.' },
    { cause: 'La imprenta abarata el panfleto', effect: 'Lutero triunfa donde a Hus lo callaron', because: 'Un siglo antes la Iglesia suprimió un argumento quitando de en medio al hombre; no puedes quitar de en medio treinta mil copias.' },
    { cause: 'Las copias baratas premian lo que se difunde', effect: 'Las mismas prensas industrializan la caza de brujas y la calumnia', because: 'Una máquina que abarata copiar amplifica lo que ya se mueve, y no tiene ninguna opinión sobre qué es eso.' },
  ],

  myths: [
    {
      myth: 'Gutenberg inventó la imprenta.',
      reality: 'La impresión con bloques tallados es china y al menos seis siglos anterior; el tipo móvil es de Bi Sheng, hacia 1040; el tipo móvil metálico es coreano, y el Jikji de 1377 es setenta y ocho años anterior a la Biblia de Gutenberg. Lo que inventó Gutenberg fue el molde de mano ajustable, una aleación y una tinta que hacían fabricable el tipo en cantidad: un sistema de producción, no la idea.',
      whyItPersists: 'Las historias europeas las escribieron europeos, y «inventó la imprenta» es una frase mucho más corta que «inventó el proceso industrial para fundir tipos».',
      sourceIds: ['jikji-1377', 'fussel-2005'],
    },
    {
      myth: 'La imprenta provocó la Reforma.',
      reality: 'La hizo sobrevivible. Los argumentos teológicos tenían un siglo: Jan Hus formuló muchos de ellos y fue quemado en 1415, y el movimiento se contuvo. Lo que cambió la imprenta es que suprimir al autor ya no suprimía el argumento, y que Lutero podía llegar directamente a un público laico, en su idioma, más rápido de lo que la Iglesia podía responder.',
      whyItPersists: 'La correlación es de verdad llamativa, y «la imprenta lo provocó» se enseña mejor que «la imprenta cambió lo que la represión podía conseguir».',
      sourceIds: ['pettegree-2015', 'eisenstein-1979'],
    },
    {
      myth: 'La imprenta alfabetizó e informó de inmediato a la gente corriente.',
      reality: 'La alfabetización subió despacio, a lo largo de siglos, no de décadas. La mayoría de los incunables estaban en latín y eran religiosos. El primer público masivo del impreso se alcanzó en la década de 1520, setenta años después de la Biblia, y sobre todo con panfletos — y el mismo mercado compraba manuales de caza de brujas e historias de atrocidades.',
      whyItPersists: 'Tendemos a suponer que los efectos finales de una tecnología fueron sus efectos inmediatos, y los usos ilustrados son los que se recordaron.',
      sourceIds: ['eisenstein-1979', 'pettegree-2015'],
    },
    {
      myth: 'Un libro impreso se creía porque lo impreso es fiable.',
      reality: 'La imprenta temprana estaba plagada de piratería, pies de imprenta falsos, autores mal atribuidos y reimpresiones estropeadas, y los lectores lo sabían. La tesis central de Adrian Johns es que la credibilidad de lo impreso la construyeron a lo largo de dos siglos los gremios, las licencias y las reputaciones: no era una propiedad que entregara la máquina.',
      whyItPersists: 'Heredamos la confianza y olvidamos la construcción, que es exactamente lo que la hace parecer natural.',
      sourceIds: ['johns-1998'],
    },
  ],

  disagreements: [
    {
      question: '¿La «fijeza» era una propiedad de lo impreso o una reputación construida por el gremio?',
      positions: [
        { view: 'Una propiedad. Las copias idénticas hicieron posibles la normalización, la cita, la corrección acumulativa y la conservación por dispersión, y esos cambios impulsaron la revolución científica.', heldBy: 'Elizabeth Eisenstein', sourceId: 'eisenstein-1979' },
        { view: 'Una reputación. Los primeros impresos eran poco fiables, pirateados e inconsistentes; la confianza en lo impreso la construyeron despacio editores, gremios y regímenes de licencias, y podría haber sido de otra manera.', heldBy: 'Adrian Johns', sourceId: 'johns-1998' },
      ],
      atlasPosition: 'El atlas describe las capacidades que la imprenta puso a disposición y no afirma que fueran automáticas. Las copias idénticas hicieron posible la fijeza; las instituciones la hicieron creíble. Cuando una afirmación necesita una lectura y no la otra, el atlas dice de quién es la lectura.',
    },
    {
      question: '¿Por qué transformó Europa el tipo móvil y no Asia oriental, donde se inventó?',
      positions: [
        { view: 'Economía de la escritura. Un alfabeto de unas pocas docenas de formas hace el tipo fundido enormemente eficiente; miles de caracteres distintos no, así que la xilografía siguió siendo competitiva en China y Corea.', heldBy: 'La explicación técnica estándar', sourceId: 'fussel-2005' },
        { view: 'Demanda e instituciones. La imprenta metálica coreana era un proyecto de corte para un público lector reducido, mientras que Europa tenía universidades, una clase mercantil, una iglesia discutiendo consigo misma y un mercado competitivo de impresores independientes.', heldBy: 'Historiadores del libro que subrayan el contexto social', sourceId: 'eisenstein-1979' },
      ],
      atlasPosition: 'El atlas da las dos, porque no son rivales: la escritura abarató el tipo europeo, y el mercado le dio algo que imprimir. Rechaza cualquier relato en el que Asia no se le ocurra algo que demostrablemente hizo primero.',
    },
  ],

  didYouKnow: [
    'El libro más antiguo conservado impreso con tipos móviles metálicos es coreano: el Jikji, de 1377, setenta y ocho años anterior a la Biblia de Gutenberg. Está en París.',
    'El verdadero invento de Gutenberg fue un molde: ajustable en anchura y fijo en altura, de modo que una «i» y una «m» difieren en anchura pero todas las piezas quedan exactamente a la misma altura.',
    'Su aleación de tipos se dilata un poco al enfriarse, y por eso las letras salen nítidas. El plomo solo habría dado bordes blandos.',
    'La tinta de escriba es al agua y resbala del tipo metálico, así que tuvo que inventar una tinta al aceite más parecida a la pintura.',
    'La prensa era prestada. Es una prensa de vino y aceituna, adaptada para apretar una página de forma pareja.',
    'Gutenberg perdió su taller en un pleito en 1455, el año de su Biblia. El acta notarial de la sentencia es nuestra mejor prueba de que todo aquello ocurrió.',
    'Entre 1518 y 1525, las obras de Lutero pudieron ser cerca de un tercio de todos los libros vendidos en alemán.',
    'El manual de caza de brujas *Malleus Maleficarum* tuvo unas treinta ediciones a partir de 1487. La misma tecnología llevó las dos cosas.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'Antes de la década de 1450, todos los libros europeos se copiaban a mano, lo que los hacía escasos y hacía que cada copia se diferenciara un poco de las demás. No había un «mismo texto» fiable y, por tanto, no existía nada parecido a una referencia de página.',
        'Imprimir no era nuevo: China tenía la xilografía desde el siglo IX y Corea imprimió con tipos móviles metálicos en 1377. Lo que faltaba en todas partes era cómo fabricar tipos rápido. Gutenberg, orfebre de Maguncia, lo resolvió con un molde de mano ajustable, una aleación de plomo, estaño y antimonio que funde nítida, una tinta al aceite y una prensa de vino adaptada.',
        'Imprimió la Biblia de 42 líneas hacia 1455 y perdió el taller ese mismo año en un pleito de su financiador. La tecnología se difundió igual: para 1500 había prensas en unas 250 ciudades y se habían impreso unas 28.000 ediciones.',
        'El efecto más profundo no fue el volumen sino la igualdad: las copias idénticas hicieron posibles la cita, la corrección y el conocimiento acumulativo. El efecto más visible fue Lutero, que usó panfletos baratos en lengua vulgar para ganar una discusión que la Iglesia no podía suprimir, porque se puede callar a un autor pero no a treinta mil copias. Las mismas prensas vendían manuales de caza de brujas.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Imagina que la única forma de tener un libro fuera copiarlo entero a mano. Un libro grande te llevaría un año. Así se hicieron todos los libros de Europa durante mil años.',
        'Y aquí está el problema tramposo: cuando copias algo a mano, cometes pequeños fallos. Luego otro copia tu copia y añade los suyos. Al cabo de un rato, el libro de nadie coincide del todo con el de nadie, así que no puedes decir «mira la página cuarenta y uno», porque su página cuarenta y uno es distinta.',
        'Un hombre de Alemania llamado Gutenberg trabajaba el metal, y lo pensó como quien trabaja el metal. Hizo un moldecito capaz de verter la misma letra una y otra vez, perfecta. Luego alineas las letras para formar una página, les pones tinta y aprietas el papel encima con una prensa. Ahora puedes hacer cientos de libros exactamente iguales.',
        'Esa parte de «exactamente iguales» es la magia. Significaba que la gente podía discutir sobre las mismas palabras, encontrar los errores y arreglarlos.',
        'También significaba que cualquier cosa podía difundirse rápido: las buenas y las feas. Un monje llamado Lutero usó librillos baratos para empezar una discusión que partió la iglesia en dos. Y esos mismos impresores vendían libros horribles sobre cómo cazar brujas.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El campo sigue organizándose alrededor de Eisenstein (1979) y de la respuesta que provocó. Su tesis identifica difusión, normalización, fijeza, conservación y recombinación como los «efectos de imprenta» operativos, y les atribuye un papel causal en la revolución científica y en la Reforma. La fuerza del argumento es que especifica mecanismos en vez de afirmar influencia; su punto débil es que trata esas propiedades como intrínsecas a la tecnología.',
        'Johns (1998) aporta el contrapunto sistemático. Trabajando sobre el gremio inglés del siglo XVII, documenta piratería, pies de imprenta falsos, revisión no autorizada y el consiguiente escepticismo del lector, y sostiene que la fijeza y la credibilidad se lograron mediante la construcción social y legal del comercio del libro, y no las entregó la prensa. La síntesis productiva trata lo impreso como una ampliación del espacio de lo alcanzable, dejando el logro dependiente de las instituciones.',
        'Sobre la prioridad asiática, la literatura comparada se ha alejado decididamente de un marco difusionista o de carencia. Las variables relevantes son ortográficas (la economía de fundir tipos bajo una escritura logográfica), institucionales (imprenta de corte frente a imprenta de mercado) y de demanda (el tamaño y la composición del público lector en lengua vulgar). Nótese además que si el conocimiento de las técnicas asiáticas llegó a Maguncia sigue sin resolverse y apenas está documentado; la invención independiente del molde es la lectura más económica.',
        'Para la Reforma, Pettegree (2015) reencuadra a Lutero como innovador de medios: el paso a los *Flugschriften* breves en lengua vulgar, la normalización del diseño de portada de Wittenberg como forma de marca y la alineación de autor, impresor y mercado. Es un correctivo útil frente a los relatos en los que lo impreso es un canal pasivo: las posibilidades del medio se descubrieron activamente, y las descubrió un teólogo.',
      ],
    },
    {
      id: 'the-mould',
      label: 'El invento de verdad, en cuatro objetos',
      kind: 'angle',
      paragraphs: [
        'Quita la trascendencia y el invento son cuatro objetos físicos que tenían que funcionar juntos.',
        '**El punzón.** Una varilla de acero con una letra grabada en relieve en el extremo, en espejo. Esto es trabajo de orfebre, y es donde se ve la formación de Gutenberg.',
        '**La matriz y el molde.** Golpeas el punzón contra cobre más blando y tienes una letra hundida: la matriz. La sujetas en un molde de dos piezas que se ajusta a lo ancho pero no a lo alto, viertes metal y obtienes una pieza cuya anchura se adapta a la letra y cuya altura es idéntica a la de cualquier otra pieza jamás fundida. Esa altura uniforme es todo el juego: es por lo que miles de piezas sueltas pueden imprimir una página pareja.',
        '**La aleación.** Plomo, estaño y antimonio. Funde lo bastante bajo para colarse una y otra vez, endurece lo bastante rápido para trabajar a ritmo, y se dilata levemente al fraguar, así que llena todos los rincones de la matriz. El plomo puro da letras blandas y borrosas.',
        '**La tinta.** A base de aceite y barniz, más parecida a la pintura que a la tinta al agua de los escribas, porque la tinta al agua se agrupa sobre el metal y se imprime como un manchón.',
        'Fíjate en lo que *no* está en la lista: la prensa. Esa parte se la copió a los viñadores. Que llamemos «imprenta» a todo el asunto por la prensa es un accidente histórico del nombre: la prensa era el componente menos novedoso de la sala.',
      ],
    },
    {
      id: 'the-amplifier',
      label: 'Qué hace de verdad una máquina de copiar',
      kind: 'contrast',
      paragraphs: [
        'Es tentador leer la imprenta como el momento en que ganó el conocimiento. Pon las dos columnas al lado y se ve distinto.',
        '**Llevó:** textos clásicos conservados por dispersión, cartas estelares y láminas anatómicas idénticas, a Copérnico, biblias en lengua vulgar, la contabilidad de Pacioli, y la posibilidad de decir «te equivocas, en la página cuarenta y uno».',
        '**También llevó:** el *Malleus Maleficarum* en treinta ediciones, convirtiendo en continental una persecución que era local; los panfletos alemanes que fijaron a Vlad Țepeș como monstruo sobre la palabra de sus enemigos; y odios confesionales con los que funcionó un siglo de guerras de religión.',
        'La máquina no opina. Abarata la copia, y lo que se copia es lo que la gente quiere copiar — que suele ser la versión extrema, porque la versión extrema vende. Eso era tan cierto en 1487 como ahora.',
        'Lo que hizo que el saldo fuera bueno no fue la tecnología. Fueron los dos siglos de trabajo lento y sin brillo —licencias, pies de imprenta, editores con una reputación que perder y, al final, la cita misma— que permitieron distinguir una copia fiable de una que no lo era. Ese trabajo no es una nota al pie del invento. Es su otra mitad.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Un texto, antes y después',
    before: {
      title: 'El mundo del manuscrito',
      points: [
        'Una copia es un año de trabajo de una persona',
        'Cada copia difiere un poco de aquella de la que salió',
        'Las referencias de página no significan nada entre copias',
        'Un texto se degrada un poco en cada generación',
        'Suprimir un argumento significa callar a su autor',
      ],
    },
    after: {
      title: 'El mundo impreso',
      points: [
        'Una composición de tipos produce cientos de copias',
        'Todas las copias de una edición son idénticas',
        'Citar por página se vuelve posible y normal',
        'Las ediciones pueden corregirse entre sí y acumularse',
        'Suprimir un argumento significa encontrar todas las copias',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si Gutenberg hubiera ganado el pleito?',
      reasoning: 'Habría conservado el taller, los tipos y el negocio, y podría haber sido el fundador rico de una dinastía de impresores en vez de un pensionista. La difusión de la tecnología habría sido más o menos igual, porque fue el saqueo de Maguncia de 1462 lo que dispersó por Europa a los operarios formados.',
      constraint: 'Esto es especular sobre una persona, no sobre un resultado. Fust y Schöffer imprimieron con competencia y crecieron rápido, y nada sugiere que la difusión dependiera de quién fuera el dueño del taller. El escenario interesante no es el pleito, es el saqueo.',
    },
    {
      question: '¿Y si hubiera habido una imprenta europea en 1400, antes de Hus?',
      reasoning: 'Hus formuló argumentos cercanos a los de Lutero y tenía seguimiento popular en Bohemia. Con panfletos baratos en lengua vulgar, una reforma bohemia podría haberse extendido más allá de las tierras checas, y el mapa religioso de Europa podría haberse redibujado un siglo antes y por otras fronteras.',
      constraint: 'Especulación, y especulación acotada. El éxito de Lutero necesitó además un paisaje político alemán fragmentado cuyos príncipes tenían motivos para protegerlo, un público lector en lengua vulgar y molinos de papel a escala. La imprenta sin eso quizá solo habría producido una represión mejor documentada.',
    },
  ],

  quiz: [
    {
      question: '¿Qué inventó realmente Gutenberg?',
      options: [
        'La impresión misma',
        'El tipo móvil',
        'Un molde capaz de fabricar tipos idénticos en cantidad',
        'El papel',
      ],
      answerIndex: 2,
      explains: 'La xilografía y el tipo móvil existían en Asia siglos antes. Su aportación fue el molde de mano ajustable, la aleación y la tinta: una manera de fabricar tipos lo bastante rápido para que valiera la pena.',
    },
    {
      question: '¿Qué es anterior a la Biblia de Gutenberg?',
      options: [
        'El Jikji coreano, impreso con tipos de metal en 1377',
        'El Salterio de Maguncia',
        'Las noventa y cinco tesis de Lutero',
        'El manual de contabilidad de Pacioli',
      ],
      answerIndex: 0,
      explains: 'El Jikji se imprimió con tipos móviles metálicos en 1377, setenta y ocho años antes de la Biblia de 42 líneas, y se conserva en la biblioteca nacional francesa.',
    },
    {
      question: 'Según Eisenstein, ¿qué importaba más de las copias impresas?',
      options: [
        'Que eran más baratas',
        'Que eran idénticas, así que los textos podían citarse y corregirse',
        'Que eran más bonitas',
        'Que duraban más que los manuscritos',
      ],
      answerIndex: 1,
      explains: 'La igualdad es el cambio profundo. Las copias idénticas hacen que las referencias de página signifiquen algo, que los errores se encuentren y que las correcciones se acumulen: las condiciones para construir conocimiento en vez de erosionarlo.',
    },
    {
      question: '¿Por qué triunfó Lutero donde a Jan Hus lo suprimieron un siglo antes?',
      options: [
        'Su teología era más radical',
        'Tenía un ejército más grande',
        'Suprimir al autor ya no suprimía el argumento',
        'La Iglesia había perdido interés en la herejía',
      ],
      answerIndex: 2,
      explains: 'A Hus lo quemaron en 1415 y su movimiento se contuvo. Los panfletos de Lutero existían en decenas de miles de copias por toda Alemania en semanas: puedes quitar de en medio a un hombre, no a las copias.',
    },
  ],

  sources: [
    {
      id: 'jikji-1377',
      kind: 'primary',
      author: 'Baegun (compiler), Heungdeok Temple, Cheongju',
      title: 'Jikji simche yojeol',
      year: 1377,
      detail: 'El volumen II se conserva en la Bibliothèque nationale de France; registro Memoria del Mundo de la Unesco, 2001',
      note: 'El libro más antiguo conservado impreso con tipos móviles metálicos, setenta y ocho años anterior a la Biblia de Gutenberg. La respuesta física a «quién fue primero».',
    },
    {
      id: 'helmasperger-1455',
      kind: 'primary',
      author: 'Ulrich Helmasperger, notary',
      title: 'The Helmasperger Notarial Instrument',
      year: 1455,
      detail: 'Fechado el 6 de noviembre de 1455; biblioteca de la Universidad de Gotinga',
      note: 'El acta de la demanda ganada por Fust contra Gutenberg. Seca, jurídica, y la mejor prueba documental del taller de Maguncia.',
    },
    {
      id: 'gutenberg-bible-1455',
      kind: 'primary',
      author: 'Johannes Gutenberg (printer)',
      title: 'The 42-line Bible',
      year: 1455,
      detail: 'Maguncia, hacia 1454–55; unos 180 ejemplares impresos, 48 conservados de forma sustancial',
      note: 'El objeto mismo. Diseñado para imitar la mejor letra manuscrita de la región: el medio nuevo empezando, como suelen, por hacerse pasar por el viejo.',
    },
    {
      id: 'eisenstein-1979',
      kind: 'book',
      author: 'Elizabeth L. Eisenstein',
      title: 'The Printing Press as an Agent of Change',
      year: 1979,
      detail: 'Cambridge University Press, dos volúmenes. ISBN 978-0-521-29955-8',
      note: 'El libro que desplazó la pregunta de «cuántas copias» a «qué hace la igualdad». De aquí salen los argumentos de fijeza y normalización que se usan aquí.',
    },
    {
      id: 'johns-1998',
      kind: 'book',
      author: 'Adrian Johns',
      title: 'The Nature of the Book: Print and Knowledge in the Making',
      year: 1998,
      detail: 'University of Chicago Press. ISBN 978-0-226-40122-4',
      note: 'La objeción más fuerte a Eisenstein: la fijeza como reputación construida por el gremio y no como propiedad de la máquina. Se leen juntos o no se leen bien.',
    },
    {
      id: 'fussel-2005',
      kind: 'book',
      author: 'Stephan Füssel',
      title: 'Gutenberg and the Impact of Printing',
      year: 2005,
      detail: 'Ashgate; trad. de Douglas Martin. ISBN 978-0-7546-3537-3',
      note: 'El terreno técnico y biográfico: el molde, la aleación, la tinta, el pleito, y a qué velocidad se extendió el oficio después de 1462.',
    },
    {
      id: 'pettegree-2015',
      kind: 'book',
      author: 'Andrew Pettegree',
      title: 'Brand Luther',
      year: 2015,
      detail: 'Penguin Press. ISBN 978-1-59420-496-8',
      note: 'Lutero como el primer autor que entendió un medio de masas, y Wittenberg como negocio editorial. De aquí salen las cifras de los panfletos.',
    },
  ],
}
