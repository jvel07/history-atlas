import type { Story } from '../../types'

export const markopolosEs: Story = {
  slug: 'markopolos',
  title: 'Nueve años antes',
  subtitle: 'Harry Markopolos — demostró el mayor fraude de la historia en una tarde, y lo ignoraron nueve años.',
  hook: 'El mayor fraude de la historia nunca estuvo escondido: un analista lo demostró en una tarde de 1999, y nadie le hizo caso durante nueve años.',
  era: 'contemporary',
  category: 'icons',
  years: [1999, 2009],
  regions: ['Estados Unidos'],
  nodes: ['harry-markopolos', 'madoff-fraud', 'bernie-madoff', 'sec', 'ponzi-scheme'],
  tags: ['fraud', 'finance', 'whistleblower', 'regulation', 'ponzi', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-03',
  mood: 'ledger',

  reel: [
    { beat: 'hook', punch: true, text: 'El mayor fraude de la historia nunca estuvo escondido, y un hombre lo vio en una tarde.' },
    { beat: 'hook', text: 'Y luego pasó nueve años teniendo razón, y siendo ignorado.' },
    { beat: 'worldBefore', kicker: '1999', text: 'Bernie Madoff es el nombre más fiable de Wall Street —' },
    { beat: 'worldBefore', text: 'expresidente del NASDAQ, al frente de un fondo' },
    { beat: 'worldBefore', text: 'que nadie recuerda haber visto tener un mal mes,' },
    { beat: 'worldBefore', punch: true, text: 'lo cual no es éxito. Es la señal.' },
    { beat: 'problem', text: 'A Harry Markopolos le piden copiar la estrategia para una firma rival,' },
    { beat: 'problem', text: 'y como es hombre de números empieza por los rendimientos,' },
    { beat: 'problem', punch: true, mark: 'toosmooth', text: 'y los rendimientos reales van dentados, mientras los de Madoff suben en línea recta.' },
    { beat: 'problem', punch: true, text: 'Ningún mercado se mueve así, porque ningún mercado es tan amable.' },
    { beat: 'story', text: 'Así que desmonta la estrategia que Madoff dice estar aplicando,' },
    { beat: 'story', text: 'que necesita opciones sobre el S&P 100 en cantidades enormes —' },
    { beat: 'story', punch: true, mark: 'imbalance', text: 'más de las que existen en todo el mercado.' },
    { beat: 'story', text: 'Las operaciones no pueden haber ocurrido, lo que significa que nunca ocurrieron,' },
    { beat: 'story', punch: true, text: 'lo que significa que no está operando en absoluto.' },
    { beat: 'story', text: 'El dinero nuevo paga al viejo, detrás de uno de los grandes nombres de las finanzas.' },
    { beat: 'story', kicker: '2000', text: 'Markopolos lo lleva a la SEC, y lo vuelve a llevar, y otra vez,' },
    { beat: 'story', kicker: '2005', punch: true, text: 'bajo un título que nadie podía malinterpretar. «El mayor fondo de cobertura del mundo es un fraude.»' },
    { beat: 'whyItHappened', text: 'El regulador abre investigaciones, más de una vez,' },
    { beat: 'whyItHappened', punch: true, text: 'y lo absuelve todas y cada una de las veces,' },
    { beat: 'whyItHappened', text: 'porque allí nadie sabía seguir las matemáticas que les había mandado,' },
    { beat: 'whyItHappened', text: 'y porque a una leyenda no se la acusa por la palabra de un desconocido.' },
    { beat: 'whyItHappened', mark: 'echo', text: 'Así que el aviso llega, se archiva, y vuelve a llegar,' },
    { beat: 'whyItHappened', punch: true, text: 'y resulta que lo difícil no era verlo. Es que te crean.' },
    { beat: 'consequences', kicker: '2008', text: 'Entonces llega el desplome y todos quieren su dinero a la vez,' },
    { beat: 'consequences', mark: 'collapse', text: 'el dinero nuevo se para, y detrás de los extractos no hay nada.' },
    { beat: 'consequences', punch: true, text: 'Madoff confiesa. Los extractos decían sesenta y cinco mil millones.' },
    { beat: 'consequences', text: 'Casi todo eso nunca había existido.' },
    { beat: 'whyItMatters', text: 'La versión cómoda es que nadie podía haberlo sabido,' },
    { beat: 'whyItMatters', punch: true, text: 'pero alguien lo supo, nueve años antes, y eso no cambió nada.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'A finales de los noventa, Bernard L. Madoff Investment Securities era uno de los nombres más respetados de Wall Street, y el propio Bernie Madoff era lo más parecido a un hombre intachable que producía el sector.',
        'Había ayudado a construir el NASDAQ —el mercado electrónico que rompió el viejo monopolio del parqué— y había sido su presidente no ejecutivo. Su firma era un creador de mercado importante y legítimo, que ejecutaba un volumen real y enorme de operaciones corrientes. Ese negocio era auténtico.',
        'Junto a él corría una operación privada de inversión, y esa era de la que se cuchicheaba — no porque pareciera turbia, sino porque parecía *demasiado buena*. Rendía algo así como entre el uno y el uno y medio por ciento al mes, año tras año, con el mercado al alza y a la baja. Casi nunca tenía un mes en pérdidas.',
        'Para entrar solía hacer falta una invitación. Gestores de patrimonio colocaban con él los ahorros de sus clientes y preguntaban poco, porque los rendimientos eran constantes y el hombre era Bernie Madoff. Detrás fueron fundaciones, universidades y fondos de pensiones.',
        'Un historial así de liso es lo que sueña cualquier inversor. Y es también la señal más clara, para quien sepa cómo se comportan de verdad los mercados, de que algo va mal.',
      ],
      aside: {
        kind: 'number',
        label: 'Qué significa «demasiado liso»',
        body: 'Los rendimientos reales de inversión son volátiles — zigzaguean, porque los mercados zigzaguean. Una línea que sube en diagonal casi perfecta haga lo que haga el mercado no es prueba de habilidad. Ninguna estrategia legítima es así de constante, porque ningún mercado lo es.',
      },
      sourceIds: ['henriques-2011', 'markopolos-2010'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'En 1999, Harry Markopolos era gestor de carteras en Rampart Investment Management, en Boston. Un colega, Frank Casey, volvió de una reunión habiendo sabido que una firma rival estaba captando dinero apoyándose en los rendimientos de Madoff, y los directivos de Rampart le hicieron a Markopolos una pregunta sencilla: ¿podía construir un producto que hiciera lo mismo?',
        'Markopolos era, por formación y por carácter, un analista cuantitativo — alguien que reduce una afirmación a su aritmética. Cogió los rendimientos declarados de Madoff e intentó reconstruir a la inversa la estrategia que los producía.',
        'No pudo. En unas cuatro horas, según su propio relato, había concluido que los rendimientos no eran meramente difíciles de replicar sino matemáticamente imposibles. Sospecharlo le llevó minutos; demostrarlo, la tarde.',
        'El problema no era que Madoff fuera mejor que todos los demás. El problema era que las cifras que Madoff declaraba no podían producirse con la estrategia que Madoff describía, ni con ninguna otra estrategia.',
      ],
      sourceIds: ['markopolos-2010', 'markopolos-2005'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'Madoff decía aplicar una «split-strike conversion» — una estrategia de opciones real y nada llamativa. Tienes una cesta de grandes valores y usas opciones sobre un índice para acotar el resultado: compras puts para limitar las pérdidas y vendes calls para pagarlas. Eso suaviza un poco los rendimientos. No los convierte en una línea recta, y desde luego no bate al mercado año tras año casi sin meses malos.',
        'Markopolos lo atacó por dos vías, y las dos acabaron en el mismo sitio.',
        'Primero, la correlación. Si Madoff tuviera de verdad una cesta de valores acotada con opciones sobre índice, sus rendimientos se moverían más o menos con el mercado, solo que más suaves. No lo hacían. Subían casi con independencia de lo que hiciera el mercado. La estrategia que describía no podía producir los rendimientos que declaraba.',
        'Segundo —y este es el argumento que debería haberlo zanjado— las opciones sencillamente no existían. Para que un fondo del tamaño del de Madoff aplicara esa estrategia, habría tenido que comprar y vender opciones sobre el S&P 100 en cantidades muy superiores a todo lo que se negociaba en esas opciones. Las contrapartes no estaban. El volumen no estaba. Sobre el papel operaba con instrumentos en cantidades que no existían para ser negociadas.',
        'Solo había una explicación que encajara con todas las cifras: Madoff no estaba aplicando la estrategia. Lo más probable es que no estuviera operando en absoluto. Los «rendimientos» eran ficticios, y el dinero que se pagaba a quien retiraba era sencillamente el dinero que había metido alguien más nuevo.',
        'Eso es un esquema Ponzi, y tiene una regla de hierro: funciona solo mientras el dinero nuevo entre más rápido de lo que sale el viejo.',
        'En mayo de 2000, Markopolos llevó su análisis a la oficina de Boston de la Securities and Exchange Commission. No pasó nada. Lo afinó y volvió a presentarlo en 2001. No pasó nada. En noviembre de 2005 mandó a la SEC un documento cuyo título hacía innecesaria cualquier interpretación —«El mayor fondo de cobertura del mundo es un fraude»— y exponía, en veintinueve señales de alarma numeradas, exactamente qué fallaba y aproximadamente de qué tamaño era.',
        'No estaba del todo solo en la duda. Ese mismo año 2001, una periodista llamada Erin Arvedlund había publicado un artículo escéptico en Barron’s, y una revista sectorial había sacado otro. Pero Markopolos era quien había hecho la aritmética completa, y quien la llevó, una y otra vez, al organismo cuyo trabajo era actuar sobre ella.',
        'La SEC investigó a Madoff. Fue peor que no mirar: miró, y lo absolvió.',
      ],
      aside: {
        kind: 'voice',
        label: 'Del escrito de 2005 a la SEC',
        body: '«Bernie Madoff dirige el mayor fondo de cobertura no registrado del mundo. Ha organizado este negocio como un fondo de fondos que ponen su propia marca a sus fondos, que Bernie Madoff gestiona en secreto para ellos con una estrategia de split-strike conversion, cobrando solo comisiones de negociación que no se declaran.»',
        sourceId: 'markopolos-2005',
      },
      sourceIds: ['markopolos-2005', 'markopolos-2010', 'sec-oig-2009'],
    },

    whyItHappened: {
      heading: 'Por qué lo ignoraron',
      paragraphs: [
        'El propio inspector general de la SEC dedicó después nueve meses a reconstruir esto, y el informe que produjo es de los documentos más demoledores que un organismo público ha escrito sobre sí mismo. No encontró prueba alguna de que nadie en la SEC hubiera sido sobornado ni fuera corrupto. Lo que encontró era peor a su manera: una serie de investigaciones de aspecto competente que nunca entendieron qué tenían delante.',
        '**Los examinadores no sabían seguir las matemáticas.** Markopolos les había entregado un caso cuantitativo, y el personal que lo recibió carecía en general de la formación para evaluarlo. Las investigaciones las llevaban abogados buscando infracciones de papeleo, no analistas capaces de ver que el volumen declarado era imposible.',
        '**Buscaban el delito equivocado.** Cuando la SEC investigó, tendió a sospechar que Madoff hacía «front-running» — usar el conocimiento de las órdenes de clientes de su bróker para operar por delante de ellas. Es un delito real, y mucho menor. Perseguirlo significaba no hacer nunca la pregunta grande: si estaba operando siquiera.',
        '**Y Madoff era Madoff.** Era expresidente del NASDAQ, un fijo del sector, un hombre que había ayudado a escribir las reglas que los examinadores aplicaban. Al ser confrontado se mostraba tranquilo, fluido y condescendiente, y a más de un investigador joven le resultó más fácil creer a la leyenda que al analista de fuera que la acusaba.',
        '**Markopolos, mientras tanto, era un competidor.** Trabajaba para una firma que habría salido ganando con replicar o desacreditar a Madoff, lo que daba una razón a quien quisiera despacharlo. Además era, según su propia descripción, áspero y obsesivo con el asunto — no el mensajero ideal, que suele ser exactamente la persona que se da cuenta.',
        'Nada de esto es corrupción. Juntos son algo más difícil de arreglar: una institución que recibió la respuesta correcta, por escrito, más de una vez, y no estaba construida para oírla.',
      ],
      sourceIds: ['sec-oig-2009', 'markopolos-2010', 'markopolos-testimony-2009'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'No se deshizo porque alguien acabara escuchando. Se deshizo porque se acabó el dinero nuevo.',
      ],
      shortTerm: [
        'A finales de 2008, con los mercados hundiéndose, los inversores intentaron retirar unos siete mil millones de dólares. Madoff no pudo producirlos, porque no estaban.',
        'El 10 de diciembre de 2008 les dijo a sus hijos que el negocio era «una gran mentira». Lo denunciaron, y lo detuvieron al día siguiente.',
        'En marzo de 2009 se declaró culpable de once delitos graves; en junio lo condenaron a 150 años de prisión. Murió allí en 2021.',
        'Markopolos declaró ante el Congreso en febrero de 2009 y describió una SEC que era, en sus palabras, analfabeta en finanzas y capturada por el sector al que vigilaba.',
      ],
      longTerm: [
        'Un síndico designado judicialmente pasó años recuperando dinero de quienes habían retirado más de lo que aportaron, y acabó recobrando la mayor parte de los aproximadamente diecisiete mil millones de dólares de capital real invertido.',
        'La SEC se reorganizó a fondo — nueva dirección, una división de vigilancia rehecha y un programa formal de denunciantes que paga y protege al siguiente Markopolos.',
        'La frase «si parece demasiado bueno para ser verdad» adquirió un caso concreto y enseñable, que hoy se estudia en los cursos de finanzas como el ejemplo de manual de una serie de rendimientos demasiado lisa para ser real.',
        'El daño se lo llevó la confianza misma. La lección que sacaron los inversores —verificar de forma independiente, no tomar nunca los extractos del propio custodio como prueba— rehízo la manera de auditar fondos.',
      ],
      unexpected: [
        'La cifra famosa, sesenta y cinco mil millones de dólares, nunca se robó como el número da a entender. Era el total de los extractos falsificados — dinero que la mayoría de los inversores creía tener, pero que nunca había existido. El efectivo realmente perdido rondaba los diecisiete mil millones.',
        'Con esa medida, muchas «víctimas» habían ganado dinero sobre el papel — habían retirado con los años más de lo que ingresaron, financiadas por inversores posteriores, y el síndico las demandó para recuperarlo.',
        'Markopolos temió por su vida todo ese tiempo. Convencido de que Madoff o sus clientes poderosos podían hacerlo matar, revisaba su coche por si tenía bombas y tuvo un arma cargada a mano durante años.',
        'Nunca cobró ninguna recompensa de denunciante, porque el programa moderno que se la habría pagado se creó, en parte como respuesta a su caso, solo después de que Madoff ya hubiera caído.',
      ],
      sourceIds: ['sec-oig-2009', 'henriques-2011', 'usa-madoff-2009'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'La versión cómoda de un desastre es que nadie podía haberlo sabido. Exculpa a todo el mundo. El fraude de Madoff no ofrece ese consuelo, y por eso mismo merece conservarse.',
        'Alguien lo supo. Lo supo pronto, lo supo con pruebas, y se lo contó a la única institución cuyo propósito entero era actuar sobre lo que él sabía. El fallo no fue de información. La información estuvo en un archivador en Boston, correcta, durante años.',
        'Fue un fallo de otra clase — el de una organización que no podía entender el aviso que le habían entregado, que buscaba un delito más pequeño y a la que le resultó más fácil fiarse de un hombre famoso que de un extraño incómodo. Esos fallos no se anuncian. Desde dentro parecen trabajo competente y corriente.',
        'Esa es la lección incómoda y portátil. Lo difícil casi nunca es detectar el problema. Alguien suele detectar el problema. Lo difícil es ser una institución capaz de creer a quien lo detectó.',
      ],
      sourceIds: ['sec-oig-2009', 'markopolos-2010'],
    },
  },

  timeline: [
    { year: 1920, title: 'Charles Ponzi le da nombre al esquema', detail: 'Su operación de Boston, que prometía enormes rendimientos con cupones de respuesta postal internacional, se hunde y presta su nombre a la estructura.' },
    { year: 1960, title: 'Madoff funda su firma', detail: 'Bernard L. Madoff Investment Securities empieza como creador de mercado legítimo. El brazo de inversión fraudulento crece a su lado durante décadas.' },
    { year: 1990, title: 'Madoff preside el NASDAQ', detail: 'Ejerce de presidente no ejecutivo del mercado electrónico que ayudó a construir — la credencial que después lo vuelve incuestionable.', confidence: 'contested' },
    { year: 1999, title: 'Le piden a Markopolos copiar los rendimientos', detail: 'Un analista cuantitativo de Boston intenta reconstruir a la inversa la estrategia de Madoff para un producto rival, y descubre que es imposible.', pivotal: true },
    { year: 2000, title: 'El primer escrito a la SEC', detail: 'Markopolos lleva su análisis a la oficina de Boston de la SEC en mayo. No sale nada de ahí.', pivotal: true },
    { year: 2001, title: 'La prensa también se fija', detail: 'Erin Arvedlund publica un artículo escéptico en Barron’s, y una revista sectorial saca otro. Madoff esquiva los dos.' },
    { year: 2005, title: '«El mayor fondo de cobertura del mundo es un fraude»', detail: 'Markopolos manda a la SEC un informe con veintinueve señales de alarma numeradas. Es su caso más completo, y se archiva.', pivotal: true },
    { year: 2006, title: 'La SEC investiga, y lo absuelve', detail: 'Se abre una investigación, se centra en parte en el front-running, le saca correcciones a Madoff y no encuentra ningún esquema Ponzi.', pivotal: true },
    { year: 2008, date: '2008-12-10', title: 'La confesión', detail: 'Con peticiones de reembolso que no puede atender, Madoff les dice a sus hijos que el negocio es «una gran mentira». Lo detienen al día siguiente.', pivotal: true },
    { year: 2009, date: '2009-02', title: 'Markopolos declara ante el Congreso', detail: 'Describe una SEC analfabeta en finanzas y deferente con el sector al que debía vigilar.' },
    { year: 2009, date: '2009-06-29', title: 'Condenado a 150 años', detail: 'Madoff se declara culpable de once delitos graves y recibe la pena máxima. Muere en prisión federal en 2021.' },
    { year: 2010, title: 'Se crea un programa de denunciantes', detail: 'La ley Dodd-Frank establece recompensas y protecciones de la SEC para denunciantes — el sistema que habría pagado a un Markopolos, creado justo demasiado tarde para él.' },
  ],

  causeEffect: [
    { cause: 'Madoff declara rendimientos que nunca tienen un mal mes', effect: 'Los inversores sofisticados se tranquilizan en vez de alarmarse', because: 'Un historial liso parece el sueño, salvo que sepas que ningún mercado real produce uno.' },
    { cause: 'Le piden a Markopolos replicar la estrategia', effect: 'Descubre que no se puede replicar, ni hacer siquiera', because: 'Reconstruir las cifras a la inversa es justo lo que destapa que las cifras son imposibles.' },
    { cause: 'La estrategia declarada necesita más opciones de las que existen', effect: 'Las operaciones no pueden ser reales', because: 'No puedes comprar y vender instrumentos en volúmenes mayores que todo su mercado.' },
    { cause: 'Markopolos le entrega a la SEC un caso cuantitativo', effect: 'La SEC no puede evaluarlo', because: 'Las investigaciones las llevaban abogados a la caza de papeleo, no analistas capaces de ver que el volumen era ficticio.' },
    { cause: 'La SEC sospecha front-running en su lugar', effect: 'Nunca se pregunta si Madoff opera siquiera', because: 'Perseguir el delito menor y más familiar desplazó al mayor y más extraño.' },
    { cause: 'Madoff es expresidente del NASDAQ', effect: 'Los examinadores creen a la leyenda antes que al de fuera', because: 'El estatus se lee como prueba, y enfrentarse a un pilar del sector parecía menos plausible que despachar a quien lo acusaba.' },
    { cause: 'El desplome de 2008 dispara las retiradas masivas', effect: 'El esquema se derrumba por fin', because: 'Un Ponzi sobrevive solo mientras el dinero nuevo supere al viejo que sale, y la crisis invirtió eso de la noche a la mañana.' },
  ],

  myths: [
    {
      myth: 'Madoff robó 65.000 millones de dólares.',
      reality: 'Los 65.000 millones eran el total impreso en los extractos falsos — dinero que los inversores creían tener, y que en su mayor parte nunca existió. El efectivo realmente invertido y perdido rondaba los 17.500 millones, y un síndico judicial acabó recuperando la mayor parte.',
      whyItPersists: 'Es el número de todos los titulares, y es genuinamente la cifra que los inversores veían en sus extractos. Solo que mide la mentira, no el robo.',
      sourceIds: ['henriques-2011', 'usa-madoff-2009'],
    },
    {
      myth: 'Nadie podría haberlo pillado a tiempo.',
      reality: 'Harry Markopolos lo pilló en una tarde de 1999 y lo denunció repetidamente a la SEC desde el año 2000. Una periodista y una revista sectorial plantearon dudas en 2001. La información existió, por escrito, durante años antes del derrumbe.',
      whyItPersists: 'Es la versión que consuela, y la que no le exige nada a las instituciones que fallaron.',
      sourceIds: ['markopolos-2005', 'markopolos-2010', 'sec-oig-2009'],
    },
    {
      myth: 'La SEC nunca investigó a Madoff.',
      reality: 'Lo investigó varias veces y lo absolvió todas — lo cual es peor que no haber mirado. Su propio inspector general documentó después con detalle las inspecciones fallidas.',
      whyItPersists: 'La gente supone que un fraude así de grande tuvo que quedar sin examinar. La verdad, que se examinó y pasó, cuesta más digerirla.',
      sourceIds: ['sec-oig-2009'],
    },
    {
      myth: 'Era una estrategia de inversión sofisticada que al final salió mal.',
      reality: 'No había estrategia. Los investigadores comprobaron que durante años Madoff no operaba en absoluto — ni split-strike conversion, ni opciones, ni valores. Era un esquema Ponzi liso y llano detrás de un nombre famoso, desde muy pronto.',
      whyItPersists: 'La coartada elaborada —una estrategia real, con nombre— era el disfraz, y sobrevivió al hombre que lo llevaba.',
      sourceIds: ['usa-madoff-2009', 'henriques-2011'],
    },
  ],

  disagreements: [
    {
      question: '¿La SEC fue corrupta o solo incompetente?',
      positions: [
        { view: 'Incompetente, no corrupta. Su propio inspector general no halló prueba de sobornos ni de influencias indebidas — solo investigaciones que no entendieron lo que examinaban.', heldBy: 'El informe de la Oficina del Inspector General de la SEC (2009)', sourceId: 'sec-oig-2009' },
        { view: 'Capturada en la práctica. Faltaran o no los sobornos, la deferencia hacia una figura poderosa del sector y la cercanía de la puerta giratoria produjeron el mismo resultado que habría producido la corrupción.', heldBy: 'Harry Markopolos en su declaración ante el Congreso, y algunos críticos posteriores', sourceId: 'markopolos-testimony-2009' },
      ],
      atlasPosition: 'El atlas afirma lo documentado —ninguna prueba de corrupción, incompetencia generalizada— y señala que Markopolos y otros leen la deferencia institucional como una forma propia de captura. No afirma que hubiera sobornos, porque no se encontró ninguno.',
    },
    {
      question: '¿Cuánto se perdió realmente?',
      positions: [
        { view: 'Unos 65.000 millones de dólares — la cifra de los extractos finales y de la acusación penal.', heldBy: 'El número de titular, y la base del cargo por fraude', sourceId: 'usa-madoff-2009' },
        { view: 'Unos 17.500 millones de capital real, buena parte del cual recuperó el síndico. La cifra mayor es riqueza ficticia sobre el papel.', heldBy: 'La contabilidad del síndico designado judicialmente', sourceId: 'henriques-2011' },
      ],
      atlasPosition: 'Ambas son medidas ciertas de cosas distintas. El atlas usa los 65.000 millones para la escala de la ficción y unos 17.500 millones para el dinero realmente perdido, y nunca deja que la primera pase por la segunda.',
    },
  ],

  didYouKnow: [
    'Markopolos dijo que tardó cinco minutos en sospechar que Madoff era un fraude y unas cuatro horas en demostrarlo matemáticamente.',
    'Su argumento decisivo fue que Madoff decía negociar más opciones de las que existían en todo su mercado.',
    'Convencido de que podían matarlo por lo que sabía, Markopolos revisaba su coche por si llevaba bombas y tuvo un arma cargada durante años.',
    'La cifra de 65.000 millones era el total de los extractos falsos. El dinero real perdido rondaba los 17.500 millones.',
    'Como a los primeros inversores se les pagaba con el dinero de los últimos, algunas «víctimas» habían retirado más de lo que llegaron a poner — y se las demandó para que lo devolvieran.',
    'La SEC investigó a Madoff y lo absolvió. Su propio inspector general escribió después un informe de 477 páginas sobre cómo.',
    'El programa de recompensas a denunciantes que le habría pagado a Markopolos se creó, en parte por su caso, solo después de que Madoff cayera.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'Bernie Madoff era un expresidente del NASDAQ cuyo fondo de inversión declaraba rendimientos positivos y constantes casi todos los meses durante años. Esa constancia era imposible, y en 1999 un analista llamado Harry Markopolos lo demostró.',
        'Cuando le pidieron replicar la estrategia de Madoff, Markopolos vio que no se podía. Los rendimientos no seguían al mercado como la estrategia declarada exigía, y esa estrategia habría necesitado más opciones sobre índice de las que se negociaban en todo el mercado. La única explicación que encajaba era que Madoff no estaba operando en absoluto — un esquema Ponzi, pagando a los inversores viejos con el dinero de los nuevos.',
        'Markopolos se lo comunicó a la SEC en 2000, en 2001 y otra vez en 2005, en un documento titulado «El mayor fondo de cobertura del mundo es un fraude». La SEC investigó a Madoff varias veces y lo absolvió todas, en parte porque sus examinadores no sabían seguir las matemáticas, en parte porque sospechaban un delito menor y en parte porque Madoff era demasiado respetado para dudar de él.',
        'El esquema solo se derrumbó cuando el desplome de 2008 provocó retiradas que Madoff no podía cubrir. Los extractos decían 65.000 millones; las pérdidas reales rondaban los 17.500. Alguien lo había pillado nueve años antes, y no cambió nada hasta que se acabó el dinero.',
      ],
    },
    {
      id: 'age-16',
      label: 'Explícamelo con 16 años',
      kind: 'age',
      paragraphs: [
        'La señal era la volatilidad, o más bien su ausencia. Los rendimientos genuinos son ruidosos porque los mercados lo son; una serie de rendimientos que sube en línea casi recta y casi sin caídas no indica una habilidad excepcional sino una casi imposibilidad estadística. Esa fue la primera sospecha de Markopolos, la de cinco minutos.',
        'Su prueba se apoyaba en dos patas independientes. Una: la correlación. La split-strike conversion que Madoff decía aplicar dejaría los rendimientos siguiendo a grandes rasgos al índice, amortiguados — pero los rendimientos declarados apenas correlacionaban con el mercado. Dos, y decisiva: la capacidad. El volumen de opciones necesario para aplicar esa estrategia a la escala de Madoff superaba el interés abierto y el volumen negociado totales en las opciones relevantes del S&P 100. Las operaciones no eran solo improbables; eran mayores que el mercado en el que supuestamente ocurrían.',
        'El fallo de detección es una historia de diseño institucional. La función inspectora de la SEC estaba dotada para infracciones legales y de transparencia, no para fraude cuantitativo; se ancló en un delito menor plausible (el front-running) y nunca puso a prueba la hipótesis nula de que no hubiera operación ninguna. La deferencia hacia el estatus de Madoff dio el empujón final.',
        'Y fíjate en el matiz contable que sobrevive en los titulares: los 65.000 millones son valor nocional de extracto, no pérdida realizada. Como un Ponzi paga las salidas con las entradas, el capital neto perdido (unos 17.500 millones) es menor, y los «beneficios» retirados por los primeros inversores se reclamaron como transferencias fraudulentas.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El episodio es un caso canónico en la literatura sobre fallos regulatorios, y el documento primario es el informe del OIG de la SEC (Kotz, 2009), que reconstruye al menos cinco inspecciones e investigaciones distintas entre 1992 y 2008 que no detectaron el esquema pese a disponer, en varios casos, de medios para confirmarlo trivialmente pidiendo registros independientes de liquidación al DTC.',
        'El escrito de Markopolos de 2005 destaca menos como detección —Arvedlund y Ocrant habían planteado dudas públicamente en 2001— que como demostración de la asimetría entre la capacidad analítica fuera del regulador y dentro de él. Su caso era falsable, cuantitativo y, según el OIG, sustancialmente correcto; la restricción operativa era la incapacidad de los examinadores para evaluarlo.',
        'El debate «captura frente a competencia» conviene mantenerlo abierto. Kotz descarta expresamente pruebas de corrupción, algo que la literatura sobre captura regulatoria trataría como compatible con una captura cultural o cognitiva más que venal — la deferencia hacia un actor establecido de alto estatus funcionando como mecanismo de captura sin ninguna contraprestación.',
        'Sobre la magnitud, la distinción entre los 64.800 millones nocionales y los ~17.500 millones de capital neto no es pedantería: determina la teoría de recuperación del síndico bajo el derecho de transferencias fraudulentas, y el marco de «ganadores netos / perdedores netos» que rigió las devoluciones y sigue discutiéndose en la literatura concursal.',
      ],
    },
    {
      id: 'follow-the-math',
      label: 'Los dos números que lo rompieron',
      kind: 'angle',
      paragraphs: [
        'No hace falta saber finanzas para seguir el caso que montó Markopolos. Se reduce a dos imposibilidades.',
        '**La línea era demasiado recta.** Dibuja los rendimientos honestos de cualquier inversor y te sale una línea dentada — meses buenos, meses malos, algún año malo. La línea de Madoff subía en diagonal suave durante años, igual en las burbujas que en los desplomes. Nada en un mercado real se mueve así, porque el propio mercado no lo hace.',
        '**Las operaciones eran demasiado grandes para existir.** Madoff decía proteger su fondo comprando y vendiendo opciones sobre un índice bursátil. Markopolos sumó cuántas de esas opciones habría necesitado — y salían más que el total comprado y vendido por todo el mundo, en todas partes, en ese mercado. Decía operar en una piscina más grande que la piscina.',
        'Cualquiera de los dos números por separado ya es una alarma. Juntos dejan una sola conclusión: las operaciones no estaban ocurriendo. Y si las operaciones no ocurrían, los rendimientos eran inventados, y el único dinero real del edificio era el que acababan de entregar los inversores más nuevos.',
      ],
    },
    {
      id: 'the-messenger',
      label: 'Por qué rebotó la respuesta correcta',
      kind: 'angle',
      paragraphs: [
        'La lección más dura de aquí no va de Madoff. Va de por qué un aviso correcto, escrito y repetido no logró nada durante nueve años.',
        '**Quien lo recibía no sabía leerlo.** Un caso de fraude cuantitativo entregado a examinadores formados en derecho de transparencia es un mensaje en una lengua que el destinatario no habla. No lo ignoraron tanto como no lo descifraron.',
        '**Quien lo recibía cazaba una pieza más pequeña.** Cuando la SEC entró, encuadró a Madoff como posible front-runner — un delito real pero menor. Un encuadre equivocado es peor que ninguno, porque se siente como diligencia mientras apunta hacia el lado contrario.',
        '**Al mensajero era fácil descontarlo.** Markopolos era un competidor con algo que ganar, áspero y cada vez más obsesivo. Todo eso lo hacía más fácil de despachar — y nada de eso lo hacía estar equivocado. Quien detecta un fraude es muy a menudo quien tiene una razón para mirar y el carácter para seguir mirando, es decir, exactamente la persona de la que una institución está predispuesta a desconfiar.',
      ],
    },
  ],

  beforeAfter: {
    label: 'El fraude, y la cuenta',
    before: {
      title: 'Mientras funcionaba',
      points: [
        'Rendimientos positivos y constantes declarados casi todos los meses',
        'Un expresidente del NASDAQ, creído sin preguntas',
        'Una estrategia «split-strike» real dada como método',
        'La SEC examinándolo y absolviéndolo una y otra vez',
        'Los avisos de Markopolos archivados y olvidados',
      ],
    },
    after: {
      title: 'Después del derrumbe',
      points: [
        'Ninguna operación acreditada durante años',
        '150 años de prisión; muerto allí en 2021',
        'La estrategia revelada como un esquema Ponzi liso y llano',
        'La SEC reorganizada, con un nuevo programa de denunciantes',
        'Markopolos reivindicado, nueve años tarde para evitarlo',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si la SEC hubiera actuado con el informe de 2005?',
      reasoning: 'En 2005 el caso estaba completo y era correcto. Actuar sobre él —pedir a la cámara de compensación los registros de liquidación independientes de Madoff, que habrían mostrado que las operaciones no existían— podría haber acabado con el esquema tres años antes de que se derrumbara, cuando las pérdidas eran menores y miles de inversores posteriores aún no habían entrado.',
      constraint: 'La misma ceguera institucional que ignoró los escritos de 2000 y 2001 seguía ahí. El documento era mejor; el lector no. Nada en 2005 sugiere que el informe se hubiera entendido de otra manera, que es precisamente la tragedia.',
    },
    {
      question: '¿Y si no hubiera llegado el desplome de 2008?',
      reasoning: 'Un esquema Ponzi no se acaba solo; se acaba cuando las retiradas superan a los ingresos. Sin la oleada de reembolsos que trajo la crisis, Madoff podría haber seguido varios años más, y el agujero final habría sido mayor, no menor.',
      constraint: 'Se habría derrumbado igualmente tarde o temprano — todos los Ponzi lo hacen, porque el dinero debido crece más rápido que el que entra. El desplome puso la fecha, no el desenlace.',
    },
  ],

  quiz: [
    {
      question: '¿Qué le dijo primero a Markopolos que los rendimientos de Madoff eran falsos?',
      options: [
        'Un soplo desde dentro de la firma',
        'Subían en una línea suave, como ningún mercado real',
        'Madoff se negó a reunirse con él',
        'El fondo no estaba registrado',
      ],
      answerIndex: 1,
      explains: 'Los rendimientos genuinos son volátiles. Una línea ascendente casi recta, igual en las burbujas que en los desplomes, no es habilidad — es la señal más clara de que las cifras no son reales.',
    },
    {
      question: '¿Cuál fue la prueba decisiva de que Madoff no operaba?',
      options: [
        'Su oficina estaba vacía',
        'Decía negociar más opciones sobre índice de las que existían en todo el mercado',
        'Sus rendimientos eran demasiado bajos',
        'No tenía clientes',
      ],
      answerIndex: 1,
      explains: 'Para aplicar la estrategia que describía a su escala, Madoff habría tenido que comprar y vender más opciones de las que negociaba todo el mercado. Las operaciones no podían haber ocurrido.',
    },
    {
      question: '¿Qué hizo la SEC con los avisos de Markopolos?',
      options: [
        'Nunca los recibió',
        'Actuó de inmediato',
        'Investigó a Madoff varias veces y lo absolvió todas',
        'Le pagó una recompensa',
      ],
      answerIndex: 2,
      explains: 'El fallo no fue falta de aviso. La SEC examinó a Madoff repetidamente y, incapaz de entender el caso, lo absolvió cada vez.',
    },
    {
      question: '¿Qué mide realmente la famosa cifra de «65.000 millones»?',
      options: [
        'El efectivo que robó Madoff',
        'El total de los extractos falsos, que en su mayor parte nunca existió',
        'La multa de la SEC',
        'La fortuna personal de Madoff',
      ],
      answerIndex: 1,
      explains: 'Era el valor ficticio que los inversores creían tener. El dinero real perdido rondaba los 17.500 millones, buena parte recuperado después.',
    },
  ],

  sources: [
    {
      id: 'markopolos-2005',
      kind: 'primary',
      author: 'Harry Markopolos',
      title: 'The World’s Largest Hedge Fund Is a Fraud',
      year: 2005,
      detail: 'Escrito presentado a la U.S. Securities and Exchange Commission, 7 de noviembre de 2005',
      note: 'El documento primario central: veintinueve señales de alarma exponiendo el caso años antes del derrumbe. Ampliamente reproducido.',
    },
    {
      id: 'sec-oig-2009',
      kind: 'primary',
      author: 'U.S. SEC Office of Inspector General (H. David Kotz)',
      title: 'Investigation of Failure of the SEC to Uncover Bernard Madoff’s Ponzi Scheme',
      year: 2009,
      detail: 'Informe n.º OIG-509, 31 de agosto de 2009',
      note: 'La reconstrucción de 477 páginas del propio organismo sobre cómo examinó a Madoff repetidamente y no vio el fraude. Concluye incompetencia, no corrupción.',
    },
    {
      id: 'markopolos-testimony-2009',
      kind: 'primary',
      author: 'Harry Markopolos',
      title: 'Testimony before the U.S. House Committee on Financial Services',
      year: 2009,
      detail: '4 de febrero de 2009',
      note: 'Su relato del esfuerzo de nueve años, y su acusación de que la SEC era analfabeta en finanzas y estaba capturada por el sector.',
    },
    {
      id: 'usa-madoff-2009',
      kind: 'primary',
      author: 'United States District Court, Southern District of New York',
      title: 'United States v. Bernard L. Madoff — plea and sentencing',
      year: 2009,
      detail: 'Declaración de culpabilidad el 12 de marzo de 2009; condena el 29 de junio de 2009',
      note: 'El expediente penal: once delitos graves, la escala imputada del fraude y la condena de 150 años.',
    },
    {
      id: 'markopolos-2010',
      kind: 'book',
      author: 'Harry Markopolos',
      title: 'No One Would Listen: A True Financial Thriller',
      year: 2010,
      detail: 'John Wiley & Sons. ISBN 978-0-470-55373-2',
      note: 'Su relato en primera persona de la investigación y de los años de indiferencia. Memoria de un implicado; léase junto al informe del OIG.',
    },
    {
      id: 'henriques-2011',
      kind: 'book',
      author: 'Diana B. Henriques',
      title: 'The Wizard of Lies: Bernie Madoff and the Death of Trust',
      year: 2011,
      detail: 'Times Books. ISBN 978-0-8050-9134-2',
      note: 'La historia periodística de referencia, y el relato más claro de los mecanismos, las pérdidas y la recuperación.',
    },
    {
      id: 'arvedlund-2001',
      kind: 'primary',
      author: 'Erin Arvedlund',
      title: '“Don’t Ask, Don’t Tell: Bernie Madoff is so secretive, he even asks investors to keep mum”',
      year: 2001,
      detail: 'Barron’s, 7 de mayo de 2001',
      note: 'Un artículo escéptico de siete años antes del derrumbe — prueba de que las dudas eran públicas, no solo de Markopolos.',
    },
  ],
}
