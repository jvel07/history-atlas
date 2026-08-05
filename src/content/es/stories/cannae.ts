import type { Story } from '../../types'

export const cannaeEs: Story = {
  slug: 'cannae',
  title: 'La bolsa',
  subtitle: 'Cannas, 216 a. C. — Aníbal libró la batalla más perfecta de la historia, y no le ganó la guerra.',
  hook: 'Aníbal formó su línea para que la mejor parte del ejército romano venciera — y al vencer, entrara en una bolsa que tardó seis horas en cerrarse.',
  era: 'classical',
  category: 'battles',
  years: [-218, -201],
  regions: ['Italia', 'Norte de África', 'Hispania'],
  nodes: ['battle-of-cannae', 'hannibal', 'roman-republic', 'carthage', 'second-punic-war'],
  tags: ['war', 'rome', 'carthage', 'strategy', 'tactics', 'legend'],
  readingMinutes: 11,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'Unos cincuenta mil hombres murieron en una tarde, a mano, en un campo.' },
    { beat: 'hook', text: 'Sigue siendo el día más mortífero que ha tenido nunca un ejército europeo.' },
    { beat: 'worldBefore', kicker: '218 a. C.', text: 'Aníbal ha cruzado los Alpes con un ejército que Roma no creía que pudiera llegar,' },
    { beat: 'worldBefore', text: 'y ya la ha vencido dos veces — en un río helado y luego entre la niebla de un lago —,' },
    { beat: 'worldBefore', punch: true, text: 'así que Roma hace lo romano, y construye un ejército más grande.' },
    { beat: 'problem', kicker: '216 a. C.', text: 'Ocho legiones. Unos ochenta mil hombres, la mayor fuerza que ha reunido nunca la República,' },
    { beat: 'problem', text: 'contra cincuenta mil profesionales cansados y muy lejos de casa,' },
    { beat: 'problem', punch: true, text: 'que es justo la forma que Aníbal llevaba esperando.' },
    { beat: 'story', text: 'Pone a sus peores tropas, los galos y los hispanos, en el centro,' },
    { beat: 'story', text: 'adelantados en una comba, para que las legiones los encuentren primero,' },
    { beat: 'story', text: 'y sus veteranos africanos esperan, callados, en las dos alas.' },
    { beat: 'story', kicker: 'Por la mañana', text: 'Las legiones empujan. La comba se dobla hacia atrás como se estira una cuerda,' },
    { beat: 'story', text: 'y los romanos la siguen, porque vencer se parece exactamente a esto.' },
    { beat: 'story', punch: true, mark: 'reversal', text: 'La línea no se rompe. Se invierte.' },
    { beat: 'story', text: 'Ahora hay infantería africana en los dos hombros,' },
    { beat: 'story', text: 'y la caballería cartaginesa, hecha ya con la romana, llega por detrás.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'La bolsa se cierra.' },
    { beat: 'whyItHappened', text: 'Lo que viene después no es una batalla, y todos los que están allí lo saben.' },
    { beat: 'whyItHappened', text: 'Apretado hombro con hombro no puedes levantar el escudo, ni caerte,' },
    { beat: 'whyItHappened', text: 'ni huir, porque ya no queda adónde huir.' },
    { beat: 'whyItHappened', punch: true, text: 'El tamaño de Roma es el arma que la mata.' },
    { beat: 'consequences', kicker: 'Al atardecer', text: 'Ha muerto un cónsul, y ochenta senadores, y algo cercano a la quinta parte' },
    { beat: 'consequences', text: 'de los hombres en edad de combatir de la República, en una sola tarde.' },
    { beat: 'consequences', text: 'Media Italia meridional cambia de bando. Macedonia firma con Aníbal.' },
    { beat: 'consequences', punch: true, text: 'Y Roma se niega a hablar. Ni siquiera compra de vuelta a sus prisioneros.' },
    { beat: 'consequences', text: 'Arma esclavos, prohíbe el luto público más allá de treinta días, y sigue.' },
    { beat: 'whyItMatters', text: 'Aníbal libró la batalla más perfecta que se ha librado, y perdió la guerra,' },
    { beat: 'whyItMatters', text: 'porque lo que de verdad tenía que vencer no era nunca el ejército.' },
    { beat: 'whyItMatters', punch: true, text: 'Las academias militares estudian la tarde que ganó. Roma estudió los quince años siguientes.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'Roma y Cartago eran las dos potencias del Mediterráneo occidental, y ya habían peleado una vez, veintitrés años, por Sicilia. Cartago perdió, pagó una indemnización enorme y se puso a buscar de dónde sacar el dinero. Lo encontró en el sur de Hispania, y en su plata.',
        'La familia que administraba Hispania para Cartago eran los Bárcidas, y el hijo mayor de esa casa era Aníbal. En el 218 a. C. atacó una ciudad hispana que Roma había puesto bajo su protección, que era justo el objetivo, y después hizo lo que nadie tenía previsto: en vez de esperar a ser invadido, llevó un ejército —con elefantes— por los Alpes en otoño y bajó a Italia por el norte.',
        'Llegó con acaso la mitad de los hombres con los que había salido, y venció a un ejército romano casi de inmediato, en el Trebia. Al año siguiente venció a otro, en el lago Trasimeno, escondiendo un ejército entero en la niebla de la mañana a lo largo de un camino de orilla y matando a unos quince mil hombres en un desfiladero del que no podían salir.',
        'Roma nombró entonces un dictador, Quinto Fabio Máximo, que miró el historial y sacó la conclusión correcta: a este hombre no hay que darle batalla. Fabio siguió a Aníbal, le cortó los forrajeadores, quemó lo que tenía por delante y rechazó todos los combates que le ofrecieron. Funcionó. También era humillante, y Roma lo apodó Cunctator, el Contemporizador, y no lo decía con cariño.',
        'Así que en el 216 a. C. la República volvió al método en el que creía. Eligió a dos cónsules, Lucio Emilio Paulo y Cayo Terencio Varrón, reunió el mayor ejército de su historia y lo mandó a encontrar a Aníbal y terminar con aquello.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Imagínalo',
        body: 'La manera romana de hacer la guerra no era ingeniosa. Era estructural. Podía levantar un ejército consular nuevo cada año, casi indefinidamente, a partir de un cuerpo de ciudadanos y una red de aliados itálicos que ningún otro Estado del Mediterráneo igualaba. Perder una batalla era sobrevivible. Ese era todo el plan, y estaba a punto de ponerse a prueba más duramente de lo previsto.',
      },
      sourceIds: ['polybius-histories', 'goldsworthy-2000', 'lazenby-1978'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Lo primero que hay que aclarar son las cifras, porque son también lo primero que todo el mundo equivoca. Polibio dice que los romanos pusieron en el campo unos ochenta y seis mil hombres. Livio da una cifra menor. Los historiadores modernos leen las pruebas de otro modo y se mueven entre cincuenta mil y ochenta y seis mil — pero todas las lecturas coinciden en lo esencial, que es que Roma llevó muchos más hombres que Aníbal y los formó inusualmente profundos.',
        'Enfrente, Aníbal tenía quizá cuarenta mil de a pie y diez mil de a caballo: un ejército profesional pero de retales, líbicos y númidas e hispanos y galos, lejísimos de cualquier casa, sin refuerzos en camino y sin ciudad a la que retirarse.',
        'Sobre el papel, este es el problema que Roma llevaba esperando. Terreno abierto, sin niebla, sin desfiladero, sin emboscada posible: solo muchísima infantería pesada contra menos infantería pesada, en línea recta y a plena luz.',
        'El plan romano no era estúpido. Sabiendo que su caballería estaba en inferioridad, los cónsules estrecharon el frente a propósito y profundizaron las filas, con la intención de atravesar el centro cartaginés por puro peso antes de que las alas contaran. Es un plan razonable. Y es exactamente el plan que Aníbal necesitaba que tuvieran.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: 'Las cifras antiguas de bajas y de efectivos no son mediciones. Vienen de autores que usaban relatos anteriores, a veces décadas o siglos después, en una tradición donde los números redondos tenían peso retórico. El atlas da rangos y dice de quién es cada cifra.',
      },
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'daly-2002'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'Una mañana de verano del 216 a. C. —el dos de agosto según la fecha tradicional, aunque el calendario romano de la época se había desfasado tanto del sol que la fecha real es incierta— los dos ejércitos formaron en un llano junto al río Aufidus, cerca de un pueblo en ruinas llamado Cannas.',
        'Aníbal hizo algo que a primera vista parece un error. Puso a sus tropas menos fiables, los galos y los hispanos, en mitad de su línea, y luego adelantó ese centro en una curva suave que abombaba hacia el enemigo. A su mejor infantería, los veteranos africanos equipados con armadura romana capturada, la colocó en bloques densos en los dos extremos de la línea, retrasados en ángulo y con orden de esperar. Su caballería pesada fue a la izquierda, junto al río; sus jinetes ligeros númidas, a la derecha.',
        'Las legiones avanzaron y chocaron con la comba. Aguantó, cedió, cedió más — despacio, a regañadientes, estirándose hacia atrás. Polibio dice que la retirada fue ordenada y controlada; otras lecturas sostienen que el centro sencillamente estaba perdiendo y que Aníbal hizo virtud de ello. Lo que no se discute es que Aníbal cabalgó él mismo en medio de esa línea, donde peor estaba, impidiendo que se convirtiera en desbandada.',
        'Y los romanos siguieron. Claro que siguieron: el centro enemigo se doblaba, las enseñas iban hacia delante, y todo instinto de un soldado le dice que aproveche la ventaja. La formación romana, profunda, se comprimió hacia dentro mientras avanzaba, con los hombres de los flancos cerrándose hacia el centro que retrocedía. La curva se aplanó, luego se invirtió, y el ejército romano se derramó dentro del hueco.',
        'En las alas, mientras tanto, el combate de caballería ya estaba decidido. Los jinetes pesados de Asdrúbal rompieron a la caballería romana del flanco del río, y entonces hicieron lo disciplinado en vez de lo emocionante: en lugar de perseguir fugitivos, recorrieron a caballo todo el campo por detrás del combate, dispersaron a la caballería aliada del ala opuesta y volvieron contra la espalda de la infantería romana.',
        'En ese momento, los veteranos africanos de los dos extremos de la línea, que aún no habían combatido, giraron hacia dentro y entraron en los flancos romanos.',
        'Ese es todo el truco, y conviene decirlo claro: **el ejército romano fue destruido avanzando con éxito.** Cada paso de su avance hacía la bolsa más honda y su boca más estrecha. Nada de la victoria que creía estar ganando era un espejismo. El centro cedía de verdad. Lo que pasaba es que el centro no era el objetivo.',
        'Lo que vino después es la parte que los diagramas no pueden dibujar. Un cuerpo de decenas de miles de hombres, apretado por la presión de tres lados y luego de cuatro, deja de funcionar como ejército casi de inmediato. Los del interior no veían, no podían usar espada ni escudo, no podían caerse y no podían retirarse. La matanza se hacía en los bordes, y los bordes se movieron hacia dentro durante horas. Polibio dice que los cartagineses acabaron cansándose y tuvieron que relevarse por turnos.',
        'Emilio Paulo, el cónsul que había desaconsejado combatir allí, murió. También dos cónsules del año anterior, el jefe de la caballería, veintinueve tribunos militares y unos ochenta hombres de rango senatorial. Varrón, el cónsul que lo había defendido, escapó con unos cientos de jinetes y vivió para que el Senado le diera las gracias —en público y con intención— por no haber desesperado de la República.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: '«Los cartagineses los rodearon por todas partes, y la matanza siguió hasta cubrir el suelo mismo: hombres tendidos donde habían estado en pie, incapaces de moverse, con los heridos pidiendo al enemigo que los rematara.» — el relato de Livio, escrito unos dos siglos después, de una matanza que ya era en Roma sinónimo del peor día posible.',
        sourceId: 'livy-ab-urbe',
      },
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'daly-2002', 'goldsworthy-2001'],
    },

    whyItHappened: {
      heading: 'Por qué funcionó',
      paragraphs: [
        'La respuesta táctica es que Aníbal usó la fuerza de su enemigo como mecanismo de su derrota. Sabía que las legiones empujarían, así que construyó una línea diseñada para ser empujada. Sabía que Roma había formado su infantería en profundidad para atravesar, así que hizo que el golpe cayera en un sitio que se lo tragara.',
        '**También sabía lo que sus propias tropas podían y no podían hacer.** Los galos e hispanos del centro eran valientes y estaban mal protegidos; podían absorber y retroceder, y ese fue el trabajo que les dio. Los africanos tenían disciplina para quedarse quietos viendo una batalla a cuarenta metros sin meterse en ella —lo cual es mucho más difícil que cargar— y luego girar y avanzar a la orden. Casi ningún ejército de la época podía hacer las dos cosas a la vez. El suyo sí, porque llevaba dos años marchando, combatiendo y comiendo como un solo cuerpo.',
        '**Y tenía caballería, y la usó como arma en vez de como duelo.** La caballería romana fue vencida pronto por peso de números. Todo lo demás dependió de que los jinetes de Asdrúbal no hicieran lo que casi siempre hacía la caballería antigua victoriosa, que era irse detrás de los que huían. Volvieron. Ese único acto de disciplina es lo que convirtió una maniobra de flanco en un cerco sellado.',
        'La respuesta más profunda tiene que ver con el terreno y con el apretujamiento, y es la parte que impide que Cannas sea un diagrama ingenioso. El trabajo moderno sobre la batalla —el de Daly sobre todo— sostiene que en cuanto se formó la bolsa, el ejército romano dejó de ser un ejército en ningún sentido. La formación, el mando, la posibilidad de oír una orden o de cumplirla, el espacio físico para levantar un arma: todo se fue. Lo que quedó fue una masa comprimida reducida desde fuera, y por eso las cifras de bajas están tan lejos de cualquier otra cosa en la guerra antigua.',
        'Y por eso también la historia es genuinamente incómoda, y no meramente impresionante. La maniobra más admirada de la historia militar se admira por haber producido seis horas de matar a hombres que no podían defenderse.',
      ],
      sourceIds: ['daly-2002', 'goldsworthy-2001', 'polybius-histories'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'Cannas le hizo a Roma más o menos lo que estaba diseñado para hacer. Lo que no pudo hacer fue que Roma se comportara como un Estado que ha perdido.',
      ],
      shortTerm: [
        'Entre cuarenta y cinco mil y setenta mil romanos y aliados itálicos murieron, según qué cifra antigua se siga. Polibio dice setenta mil; Livio dice unos cuarenta y ocho mil muertos y miles más capturados.',
        'Capua, la segunda ciudad de Italia, se pasó a Aníbal, y buena parte del sur con ella. Siracusa cambió de bando. Filipo V de Macedonia firmó un tratado con él.',
        'Roma se negó a negociar y se negó a rescatar a los unos ocho mil prisioneros que Aníbal ofreció devolver — una señal deliberada y cara de que no había ninguna transacción disponible.',
        'Levantó legiones nuevas con hombres por debajo del censo habitual, con muchachos y con ocho mil esclavos comprados por el Estado y armados, a los que se prometió la libertad por buen servicio.',
        'E hizo, una vez, algo para lo que casi no tenía precedente: por consejo de los libros sibilinos, dos galos y dos griegos fueron enterrados vivos en el mercado del ganado. Livio, que lo recoge, llama al rito de lo más impropio de Roma.',
      ],
      longTerm: [
        'Roma volvió al método de Fabio y se quedó ahí: seguir a Aníbal, rechazar la batalla campal, recuperar las ciudades de su retaguardia y dejar que diecisiete años hicieran el trabajo.',
        'Aníbal siguió invicto en Italia trece años más sin sacar nada decisivo de ello, porque no podía tomar ciudades amuralladas ni recibir refuerzos.',
        'La guerra se trasladó a donde Aníbal no estaba. Escipión tomó Hispania, cortando la plata y los reclutas, y luego invadió África, lo que obligó a Aníbal a volver.',
        'En Zama, el 202 a. C., Escipión lo venció con una línea romana reorganizada para dejar pasar a los elefantes y con una caballería que por fin volvió a la retaguardia: la maniobra de Cannas, ejecutada por el otro bando.',
        'Cartago perdió su flota, su territorio de ultramar y cincuenta años de pagos de indemnización. En el 146 a. C. Roma volvió y borró la ciudad entera.',
      ],
      unexpected: [
        'Cannas es la razón de que Roma dejara de hacer la guerra así. El ejército profesional y de servicio largo de la República tardía nació del descubrimiento de que las levas ciudadanas anuales podían borrarse en una tarde.',
        'Se cuenta que Magón, hermano de Aníbal, volcó un montón de anillos de oro en el suelo del senado cartaginés —arrancados de los dedos de los caballeros romanos muertos— como prueba de la escala. Las fuentes antiguas no se ponen de acuerdo sobre cuántos celemines, lo cual ya dice algo.',
        'A los supervivientes romanos de la batalla no los recibieron bien en casa. Dos legiones de ellos fueron desterradas a Sicilia mientras durase la guerra, sin paga ni relevo, como castigo por haber vivido.',
        'En 1913 el jefe del Estado Mayor alemán, Alfred von Schlieffen, publicó un estudio de la extensión de un libro sosteniendo que Cannas era el modelo de una guerra de aniquilación, y montó sobre él su plan para invadir Francia. Fracasó. Los historiadores llevan desde entonces discutiendo cuánto de ese fracaso es culpa de Cannas.',
      ],
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'goldsworthy-2000', 'schlieffen-1913'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'Cannas es el contraejemplo permanente de la idea de que las guerras se ganan ganando batallas. Aníbal ganó la batalla tan completamente como se ha ganado nunca una. Después pasó trece años más en Italia descubriendo que esa no era la pregunta relevante.',
        'Lo que le venció no fue un general mejor. Fue un Estado capaz de perder un ejército, y otro, y una quinta parte de sus jóvenes, y simplemente levantar más — porque su ciudadanía, sus alianzas itálicas y su política estaban construidas de manera que la derrota fuese sobrevivible. La fuerza de Roma no era táctica en absoluto. Era estructural, y la fuerza estructural es invisible justo hasta el momento en que es lo único que queda.',
        'La otra mitad de la lección va de cómo las fortalezas se convierten en asideros. Las legiones no perdieron por ser débiles; perdieron por ser fuertes de una manera que su enemigo había medido. Un plan que depende de que el otro se comporte previsiblemente bien es la clase de plan más peligrosa que enfrentar, y el de Roma era excelente y completamente legible.',
        'Y debería seguir siendo incómodo. Esta es la maniobra más estudiada de la historia de la guerra, enseñada en todas las academias militares del mundo, y lo que describe en realidad son cincuenta mil personas apretadas en un campo durante una tarde, casi ninguna capaz de levantar un brazo. La elegancia es real. El campo también.',
      ],
      sourceIds: ['goldsworthy-2001', 'daly-2002', 'schlieffen-1913'],
    },
  },

  timeline: [
    { year: -264, title: 'Empieza la Primera Guerra Púnica', detail: 'Roma y Cartago pelean veintitrés años por Sicilia. Cartago pierde, y queda debiendo una indemnización que tiene que encontrar cómo pagar.' },
    { year: -237, title: 'Cartago toma el sur de Hispania', detail: 'La familia Bárcida levanta un imperio nuevo en Iberia alrededor de las minas de plata, fuera del alcance romano y pagando todo lo que viene después.' },
    { year: -218, title: 'Aníbal cruza los Alpes', detail: 'Lleva un ejército y elefantes por las montañas en otoño, pierde quizá la mitad de sus hombres y llega a Italia, donde nadie esperaba ejército alguno.', pivotal: true },
    { year: -218, title: 'El Trebia', detail: 'Su primer ejército romano: atraído al otro lado de un río helado al amanecer, hambriento, y atacado desde una emboscada que su general no había buscado.' },
    { year: -217, title: 'El lago Trasimeno', detail: 'Un ejército romano entero metido en la niebla por un camino de orilla y destruido en un desfiladero. Unos quince mil muertos en pocas horas.', pivotal: true },
    { year: -217, title: 'Fabio es nombrado dictador', detail: 'Rechaza todas las batallas, sigue a Aníbal y le mata de hambre a los forrajeadores. Funciona, y Roma lo apoda el Contemporizador como insulto.' },
    { year: -216, title: 'Cannas', detail: 'Unos ochenta mil romanos se enfrentan a cincuenta mil cartagineses en campo abierto, empujan el centro hacia atrás y son rodeados y destruidos.', pivotal: true },
    { year: -216, title: 'El sur de Italia se pasa al enemigo', detail: 'Capua, la segunda ciudad de Italia, se va con Aníbal, y buena parte del sur la sigue. Roma pierde el terreno, no la guerra.' },
    { year: -215, title: 'Roma se niega a comprar de vuelta a sus prisioneros', detail: 'El Senado rechaza la oferta de Aníbal de rescatar a unos ocho mil ciudadanos capturados, y arma esclavos en su lugar.', pivotal: true },
    { year: -211, title: 'Aníbal marcha sobre Roma', detail: 'Aparece ante las murallas para obligar a los romanos a levantar el asedio de Capua. No lo levantan. Capua cae.' },
    { year: -202, title: 'Zama', detail: 'Escipión, que había sobrevivido a Cannas siendo un oficial joven, vence a Aníbal en África con una caballería que vuelve a la retaguardia en el momento decisivo.', pivotal: true },
    { year: -146, title: 'Cartago es destruida', detail: 'Roma toma la ciudad en una tercera guerra, vende a los supervivientes y deja el sitio vacío. La rivalidad termina por sustracción.' },
    { year: 1913, title: 'Schlieffen publica *Cannae*', detail: 'El Estado Mayor alemán convierte una tarde del 216 a. C. en una doctrina de aniquilación, y monta sobre ella el plan para invadir Francia.' },
  ],

  causeEffect: [
    { cause: 'Cartago pierde Sicilia y debe una indemnización enorme', effect: 'Construye un imperio nuevo en Hispania', because: 'Las minas de plata ibéricas eran la única fuente de dinero lo bastante grande para pagar a Roma y rearmarse a la vez.' },
    { cause: 'Aníbal vence en el Trebia y en Trasimeno', effect: 'Roma levanta el mayor ejército de su historia', because: 'Un Estado que cree que las batallas se ganan por peso responde a perderlas llevando más peso.' },
    { cause: 'Roma profundiza su infantería para atravesar el centro', effect: 'El ejército se comprime mientras avanza', because: 'Una formación hecha para empujar hacia delante no tiene ningún procedimiento para que el terreno de atrás se cierre.' },
    { cause: 'Aníbal adelanta en comba a sus peores tropas', effect: 'Los romanos avanzan dentro de una bolsa', because: 'Un centro enemigo que retrocede se lee como victoria, y ningún soldado deja de apretar una ventaja para comprobar la forma de la línea.' },
    { cause: 'La caballería de Asdrúbal vuelve en vez de perseguir', effect: 'El cerco se sella', because: 'La caballería antigua casi siempre perseguía fugitivos; volver es la disciplina que convierte un ataque de flanco en una trampa.' },
    { cause: 'Decenas de miles quedan apretados en una bolsa que se encoge', effect: 'El ejército romano deja de poder combatir', because: 'Hombres apretados hombro con hombro no pueden levantar un escudo, obedecer una orden ni retirarse, por valientes que sean.' },
    { cause: 'Roma se niega a negociar y a rescatar prisioneros', effect: 'La victoria de Aníbal no le compra nada', because: 'Ganar en el campo solo termina una guerra si el perdedor está dispuesto a tratarlo como un final.' },
    { cause: 'Escipión invade África', effect: 'Aníbal es llamado de vuelta desde Italia', because: 'Atacar lo que el enemigo no puede permitirse perder gana a perseguir a su mejor general por el país que él eligió.' },
  ],

  myths: [
    {
      myth: 'Aníbal pudo tomar Roma después de Cannas, y perdió la ocasión por dudar.',
      reality: 'El famoso reproche —«sabes vencer, pero no sabes aprovechar la victoria»— viene de Livio, que escribe dos siglos después, y es una buena frase más que un hecho establecido. Aníbal no tenía tren de asedio, ni suministro seguro, ni flota, y su ejército estaba agotado; Roma seguía teniendo murallas, dos legiones nuevas levantadas en días y una guarnición. La mayoría de los historiadores modernos cree que una marcha sobre Roma en el 216 a. C. habría fracasado.',
      whyItPersists: 'Hace la historia trágica en vez de estructural, y «pudo ganar pero parpadeó» es mucho mejor anécdota que «asaltar una ciudad de ese tamaño estaba fuera de su logística».',
      sourceIds: ['livy-ab-urbe', 'goldsworthy-2001', 'lazenby-1978'],
    },
    {
      myth: 'Sabemos que murieron unos setenta mil romanos.',
      reality: 'Sabemos que Polibio dice setenta mil y que Livio dice unos cuarenta y ocho mil muertos. Los dos trabajaban con relatos anteriores, y ninguno contó nada. Las estimaciones modernas van desde unos cuarenta y cinco mil hacia arriba. Lo honesto es dar un rango y nombrar las fuentes.',
      whyItPersists: 'Un número exacto se cita mejor que un rango, y la cifra más alta es la que remata el argumento.',
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'daly-2002'],
    },
    {
      myth: 'Varrón era un temerario idiota y Paulo el aristócrata prudente al que ignoraron.',
      reality: 'Eso es el relato de Polibio, y Polibio escribía como cliente y amigo de la familia a la que pertenecía Paulo. Varrón era un cónsul en ejercicio con un plan convencional, y después el Senado le dio las gracias en público, que no es como Roma trataba a los hombres a los que culpaba. Varios historiadores modernos leen el reparto de culpas como un arreglo político posterior.',
      whyItPersists: 'El relato que ha sobrevivido es el sesgado, y una historia con un villano se recuerda mejor que una historia sobre una decisión compartida y razonable.',
      sourceIds: ['polybius-histories', 'goldsworthy-2001', 'daly-2002'],
    },
    {
      myth: 'Cannas se ganó con un plan brillante ejecutado exactamente como estaba diseñado.',
      reality: 'El plan era real, pero si la retirada del centro fue del todo controlada se discute de verdad: en parte pudo ser un repliegue que Aníbal contuvo más que uno que escribiera. Él mismo cabalgó en el centro todo el tiempo, lo que sugiere algo más parecido a la gestión que a la coreografía.',
      whyItPersists: 'La versión de diagrama, con flechas limpias, es la que se enseña, y una maniobra que salió a medias mal hace un diagrama peor.',
      sourceIds: ['polybius-histories', 'daly-2002'],
    },
  ],

  disagreements: [
    {
      question: '¿La retirada del centro cartaginés fue planeada, o fue un repliegue real que Aníbal aprovechó?',
      positions: [
        { view: 'Planeada. La línea se abombó a propósito hacia delante para poder ceder terreno en orden y atraer a los romanos: una maniobra, no un accidente.', heldBy: 'Polibio, y la lectura estándar que lo sigue', sourceId: 'polybius-histories' },
        { view: 'En parte genuina. Los galos e hispanos estaban en inferioridad y los estaban empujando; el mérito de Aníbal fue impedir que ese repliegue se volviera desbandada y explotarlo.', heldBy: 'Gregory Daly y otros que parten de la mecánica del combate', sourceId: 'daly-2002' },
      ],
      atlasPosition: 'El atlas dice que el cerco fue intencionado y que el grado exacto de control sobre el centro se discute. No narra la retirada como una coreografía limpia, porque las pruebas no dan para esa precisión.',
    },
    {
      question: '¿Cuántos romanos murieron en realidad?',
      positions: [
        { view: 'Unos setenta mil, con unos pocos miles escapados: la cifra del relato más antiguo que se conserva.', heldBy: 'Polibio', sourceId: 'polybius-histories' },
        { view: 'Unos cuarenta y ocho mil muertos y unos diecinueve mil capturados: un total menor, de un autor que usaba otras fuentes.', heldBy: 'Livio', sourceId: 'livy-ab-urbe' },
      ],
      atlasPosition: 'El atlas da el rango y dice de quién es cada número. Usa «unos cincuenta mil muertos» como cifra redonda conservadora y nunca presenta setenta mil como un recuento medido.',
    },
    {
      question: '¿Pudo Aníbal tomar Roma en los días siguientes a la batalla?',
      positions: [
        { view: 'Sí, o al menos valía la pena intentarlo: el golpe fue total, y Livio conserva la acusación de que desperdició la victoria.', heldBy: 'Livio, citando a Maharbal, y una larga tradición popular', sourceId: 'livy-ab-urbe' },
        { view: 'No. Le faltaban tren de asedio, línea de suministro y hombres para cercar una ciudad de ese tamaño, y Roma levantó legiones nuevas en días.', heldBy: 'Adrian Goldsworthy, John Lazenby y la mayoría de los historiadores militares modernos', sourceId: 'goldsworthy-2001' },
      ],
      atlasPosition: 'El atlas sigue el consenso moderno de que un asalto a Roma habría fracasado casi con seguridad, y presenta la frase de Maharbal como un veredicto posterior célebre, no como prueba.',
    },
  ],

  didYouKnow: [
    'El ejército romano de Cannas fue destruido mientras vencía: su centro empujó al enemigo hacia atrás durante horas, y cada paso adelante hacía la trampa más honda.',
    'La caballería pesada de Aníbal ganó su combate y luego hizo lo insólito: no persiguió. Volver a golpear la retaguardia romana es lo que selló el cerco.',
    'Roma se negó a rescatar a unos ocho mil ciudadanos suyos capturados, para dejar claro que no había trato disponible a ningún precio.',
    'Y acto seguido armó a ocho mil esclavos, comprados por el Estado, con la promesa de libertad por buen servicio.',
    'Después de la batalla Roma enterró vivos a dos galos y dos griegos en el mercado del ganado. Livio, que lo recoge, llama al rito de lo más impropio de Roma.',
    'A los supervivientes los castigaron por sobrevivir: dos legiones fueron desterradas a Sicilia el resto de la guerra.',
    'Escipión, que venció a Aníbal en Zama catorce años después, era un oficial joven en Cannas y salió vivo de la bolsa.',
    'En 1913 el Estado Mayor alemán publicó un estudio de Cannas y montó sobre él su plan para invadir Francia. El plan fracasó.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'En el 216 a. C. Roma levantó el mayor ejército de su historia —entre cincuenta y ochenta y seis mil hombres— y lo mandó a destruir a Aníbal, que ya había vencido a dos ejércitos romanos desde que cruzó los Alpes dos años antes.',
        'Aníbal puso a sus peores tropas en el centro de su línea y las adelantó en una comba. Las legiones la atacaron y cedió. Al avanzar, los romanos se comprimieron hacia dentro; la comba se aplanó y luego se invirtió en una bolsa. Su infantería africana veterana, que esperaba en los dos extremos, giró contra los flancos romanos, y su caballería —después de vencer a la romana y de renunciar a perseguirla— volvió y cerró la retaguardia.',
        'Lo que siguió no fue realmente una batalla. Apretado por los cuatro lados, el ejército romano no podía maniobrar, ni usar sus armas, ni retirarse. Entre cuarenta y cinco mil y setenta mil hombres murieron en una sola tarde, junto con un cónsul y unos ochenta senadores.',
        'Roma se negó a negociar, se negó a rescatar a sus prisioneros, armó esclavos y volvió a evitar la batalla. Aníbal se quedó trece años más en Italia sin ganar nada decisivo. Roma ganó la guerra en el 201 a. C.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Imagina dos multitudes de un estadio empujándose la una contra la otra, solo que llevan espadas y no hay adónde ir.',
        'Aníbal tenía menos hombres, así que hizo algo astuto. Puso a sus soldados más flojos en el medio y dejó que fueran retrocediendo despacio. Los romanos creyeron que estaban ganando, así que empujaron más y más hacia el centro, apretujándose todos según avanzaban.',
        'Entonces los mejores soldados de Aníbal, que estaban quietos en los dos extremos sin hacer nada, giraron y entraron por los lados. Y sus jinetes dieron la vuelta y taparon la salida de atrás.',
        'Los romanos estaban ahora en medio de una multitud por los cuatro costados. Si alguna vez te han apretujado en un pasillo lleno de gente, sabes que casi no puedes mover los brazos. Eso les pasó a decenas de miles de personas, y por eso murieron tantas.',
        'Y aquí viene el final raro: Aníbal ganó la batalla perfectamente y aun así perdió la guerra. Roma simplemente siguió haciendo ejércitos nuevos hasta que a él se le acabó el tiempo.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'La historiografía de Cannas está dominada por el relato polibiano (III.107–117), que es a la vez la narración más antigua conservada y una narración de parte: Polibio escribía dentro de la casa de los Emilio-Escipiones, y el reparto de culpas entre Paulo y Varrón debe leerse con ese patronazgo a la vista. Livio (XXII.44–50) conserva una tradición en parte independiente, con cifras de bajas sustancialmente menores y con la anécdota de Maharbal, que no tiene ninguna pretensión de ser contemporánea.',
        'La reconstrucción táctica pivota sobre dos puntos discutidos: si el centro galo-hispano, convexo, ejecutó una retirada controlada o un repliegue contenido, y la orientación de los ejércitos respecto al Aufidus, que afecta al viento, al sol y al espacio disponible para el rodeo de Asdrúbal. Daly (2002) reformula la pregunta desplazando la atención de la maniobra a la fisiología de una masa comprimida —el modelo del «apretujamiento»—, que explica mejor una proporción de bajas por lo demás anómala en la guerra terrestre antigua.',
        'Estructuralmente, la batalla es la mejor prueba disponible de la tesis del reservorio de efectivos romano: la capacidad de la República para absorber pérdidas catastróficas venía de una base ciudadana inusualmente amplia más el sistema de los socii, y la estrategia de Aníbal —desgajar aliados itálicos en vez de asaltar Roma— era un ataque racional precisamente contra ese activo. Su éxito parcial en Capua y su fracaso en otros sitios es el verdadero tema de la guerra a partir del 216.',
        'La historia de la recepción merece tratamiento aparte. El *Cannae* de Schlieffen (1913) lee la batalla como una doctrina transferible de Vernichtungsschlacht, interpretación que trasladó un resultado táctico de un solo día a la planificación operacional en una escala en la que la analogía no se sostiene: una lección práctica de lo que pasa cuando un caso histórico asciende a plantilla.',
      ],
    },
    {
      id: 'the-mechanism',
      label: 'Por qué vencer era la trampa',
      kind: 'angle',
      paragraphs: [
        'Quita los nombres y Cannas es una máquina de tres piezas.',
        '**Pieza uno: un incentivo.** El centro enemigo cede terreno. Ahora cada soldado de la primera fila romana tiene una razón excelente para empujar, y cada oficial una razón excelente para dejarle. No hace falta engañar a nadie: el avance es de verdad la decisión local correcta.',
        '**Pieza dos: una geometría.** Una formación profunda que avanza contra una línea enemiga cóncava se estruja a sí misma. Los flancos romanos se cierran hacia el centro que retrocede, el frente se estrecha, y la proporción entre hombres que pueden alcanzar a un enemigo y hombres que solo están presentes se hunde. A media tarde, casi todo el mayor ejército que Roma reunió jamás estaba de pie en una multitud.',
        '**Pieza tres: una puerta.** La caballería cierra por detrás. Es la única parte que exigió disciplina inusual y no diseño ingenioso, y es la que convirtió un mal día romano en el peor.',
        'La generalización incómoda: la maniobra funciona *porque* la víctima es competente y está motivada. Un ejército romano dubitativo y mal mandado no habría avanzado lo bastante como para ser rodeado. Ser bueno en tu trabajo es lo que metió a las legiones en la bolsa.',
      ],
    },
    {
      id: 'what-rome-did-next',
      label: 'La parte que ganó la guerra de verdad',
      kind: 'contrast',
      paragraphs: [
        'La batalla es la mitad famosa. La respuesta es la mitad que decidió el resultado.',
        'En las semanas siguientes a Cannas, Roma hizo cinco cosas, ninguna heroica. Se negó a recibir al enviado de paz de Aníbal. Se negó a rescatar a ocho mil ciudadanos suyos, una decisión que suena cruel hasta que uno se fija en que eliminaba cualquier incentivo futuro para rendirse. Alistó a muchachos, a hombres sin propiedades y a ocho mil esclavos comprados por el Estado. Limitó el luto público a treinta días para que la ciudad no dejara de funcionar. Y dio las gracias al cónsul superviviente por no haber desesperado de la República.',
        'Y luego dejó de librar la guerra que Aníbal quería. Se acabaron las grandes batallas en Italia. En su lugar: seguirlo, asediar las ciudades que se habían pasado, y una campaña lenta para tomar Hispania —su dinero y sus reclutas—, seguida de una invasión de África que lo obligó a volver a defender Cartago.',
        'Aníbal venció a todos los ejércitos romanos que le ofrecieron batalla durante quince años. Roma sencillamente dejó de ofrecérsela. No hay respuesta más completa al genio táctico que negarse a estar en la situación donde se aplica.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Cómo hacía Roma la guerra, antes y después',
    before: {
      title: 'Antes de Cannas',
      points: [
        'Dos cónsules elegidos cada año, mandando por turnos',
        'Levas ciudadanas reunidas por una campaña y devueltas a casa',
        'La batalla buscada como la manera natural de zanjar una guerra',
        'Fabio ridiculizado por negarse a combatir',
        'La profundidad y el peso de la infantería como factor decisivo',
      ],
    },
    after: {
      title: 'Después de Cannas',
      points: [
        'Mandos prorrogados durante años, de modo que se acumulaba experiencia',
        'Ejércitos mantenidos en campaña de forma continua y lejos de casa',
        'La batalla evitada salvo que las condiciones ya fueran favorables',
        'El desgaste de Fabio adoptado como método oficial',
        'La caballería, el suministro y la lealtad de los aliados como factores decisivos',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si Aníbal hubiera marchado sobre Roma a la mañana siguiente?',
      reasoning: 'El momento psicológico era total: un cónsul muerto, ochenta senadores desaparecidos, ningún ejército de campaña en Italia. Una aparición rápida ante las murallas quizá habría quebrado los nervios del Senado o provocado un levantamiento dentro de la ciudad.',
      constraint: 'No tenía máquinas de asedio, ni línea de suministro, ni flota, y sí quizá cuarenta mil hombres cansados, frente a una ciudad amurallada de varios cientos de miles que levantó dos legiones nuevas en días. Cuando sí marchó sobre Roma, en el 211 a. C., en un momento de mucho menos impacto, no pasó absolutamente nada: es lo más parecido a un experimento controlado que puede tener la pregunta.',
    },
    {
      question: '¿Y si Roma hubiera aceptado condiciones después de Cannas?',
      reasoning: 'Una paz negociada era el final normal de una guerra mediterránea, y la estrategia de Aníbal la daba por supuesta. Cartago habría conservado Hispania y su indemnización, Roma habría perdido su hegemonía en el sur de Italia, y el Mediterráneo occidental habría tenido dos potencias en vez de una.',
      constraint: 'Esto es especulación sobre una decisión que Roma estructuralmente casi no podía tomar. La composición del Senado, su lectura religiosa de la guerra y el precedente de negarse al rescate apuntaban todos en la misma dirección, y los hombres que podrían haber defendido la paz eran desproporcionadamente los que estaban tendidos en Cannas.',
    },
  ],

  quiz: [
    {
      question: '¿Cómo funcionó de verdad la trampa de Aníbal?',
      options: [
        'Emboscó a los romanos desde un terreno oculto',
        'Dejó que su centro cediera para que los romanos avanzaran dentro de una bolsa',
        'Usó elefantes para romper la línea romana',
        'Atacó de noche',
      ],
      answerIndex: 1,
      explains: 'El centro iba adelantado y luego cedió terreno. Los romanos apretaron la ventaja aparente, se comprimieron al avanzar, y los veteranos de las alas giraron por detrás de ellos.',
    },
    {
      question: '¿Qué hizo la caballería cartaginesa que era insólito?',
      options: [
        'Se negó a cargar',
        'Atacó primero, antes que la infantería',
        'Venció a la caballería romana y luego volvió a golpear a la infantería por la espalda',
        'Se mantuvo fuera de la batalla',
      ],
      answerIndex: 2,
      explains: 'La caballería antigua victoriosa casi siempre perseguía a los fugitivos fuera del campo. Los jinetes de Asdrúbal volvieron, y esa disciplina es lo que cerró el cerco.',
    },
    {
      question: '¿Qué hizo Roma con los ocho mil ciudadanos que Aníbal capturó?',
      options: [
        'Pagó el rescate de inmediato',
        'Se negó a rescatarlos',
        'Los cambió por prisioneros cartagineses',
        'Mandó un ejército a liberarlos',
      ],
      answerIndex: 1,
      explains: 'El Senado se negó a comprarlos de vuelta. Fue caro y duro, y señalaba que no había ningún trato disponible: que era justo el objetivo.',
    },
    {
      question: '¿Por qué perdió Aníbal la guerra pese a ganar en Cannas?',
      options: [
        'Su ejército fue destruido poco después',
        'Roma pudo reponer sus pérdidas y sencillamente se negó a volver a combatir con él',
        'Cartago lo llamó de vuelta enseguida',
        'Roma tuvo mejores generales a partir de entonces',
      ],
      answerIndex: 1,
      explains: 'Roma levantó ejércitos nuevos, volvió a la política de Fabio de evitar la batalla y atacó Hispania y África. El genio táctico no tiene respuesta contra quien rechaza el combate.',
    },
  ],

  sources: [
    {
      id: 'polybius-histories',
      kind: 'primary',
      author: 'Polybius',
      title: 'The Histories, Book III',
      year: -150,
      detail: 'Escrito hacia 150 a. C. Edición Loeb Classical Library, trad. W. R. Paton, rev. F. W. Walbank y C. Habicht',
      note: 'El relato más antiguo conservado, de un griego que entrevistó a participantes y recorrió el terreno. También un relato de parte: escribía dentro de la casa de la familia de Paulo.',
    },
    {
      id: 'livy-ab-urbe',
      kind: 'primary',
      author: 'Livy (Titus Livius)',
      title: 'Ab Urbe Condita, Books XXI–XXII',
      year: -25,
      detail: 'Escrito hacia 27–25 a. C. Texto de referencia: Oxford Classical Texts; traducido también como «La guerra contra Aníbal»',
      note: 'La narración más completa, escrita unos dos siglos después de la batalla. Fuente de las cifras de bajas más bajas, del reproche de Maharbal y del sacrificio humano en el mercado del ganado.',
    },
    {
      id: 'goldsworthy-2001',
      kind: 'book',
      author: 'Adrian Goldsworthy',
      title: 'Cannae',
      year: 2001,
      detail: 'Cassell. ISBN 978-0-304-35714-6',
      note: 'Una reconstrucción a la escala de la batalla, cuidadosa con lo que las cifras antiguas pueden y no pueden sostener, y escéptica ante el escenario de la marcha sobre Roma.',
    },
    {
      id: 'goldsworthy-2000',
      kind: 'book',
      author: 'Adrian Goldsworthy',
      title: 'The Punic Wars',
      year: 2000,
      detail: 'Cassell. ISBN 978-0-304-35284-4',
      note: 'La guerra en conjunto: por qué Cartago estaba en Hispania, cómo generaba Roma sus efectivos y qué pasó en los diecisiete años posteriores a la batalla.',
    },
    {
      id: 'daly-2002',
      kind: 'book',
      author: 'Gregory Daly',
      title: 'Cannae: The Experience of Battle in the Second Punic War',
      year: 2002,
      detail: 'Routledge. ISBN 978-0-415-32743-2',
      note: 'El estudio que traslada la pregunta del diagrama al apretujamiento: qué puede hacer físicamente una masa comprimida de hombres, y por qué las bajas se salieron tanto de lo ordinario.',
    },
    {
      id: 'lazenby-1978',
      kind: 'book',
      author: 'J. F. Lazenby',
      title: 'Hannibal’s War: A Military History of the Second Punic War',
      year: 1978,
      detail: 'Aris & Phillips; reeditado por University of Oklahoma Press, 1998',
      note: 'La historia militar de referencia de toda la guerra, y uno de los argumentos más claros de que tomar Roma en el 216 a. C. estaba fuera del alcance de Aníbal.',
    },
    {
      id: 'schlieffen-1913',
      kind: 'primary',
      author: 'Alfred von Schlieffen',
      title: 'Cannae',
      year: 1913,
      detail: 'Berlín; traducción inglesa publicada por la Command and General Staff School Press, Fort Leavenworth, 1931',
      note: 'Cómo una tarde del 216 a. C. se volvió doctrina del siglo XX. Léase como prueba sobre 1913, no sobre el 216 a. C.',
    },
  ],
}
