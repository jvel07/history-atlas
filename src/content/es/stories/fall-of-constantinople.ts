import type { Story } from '../../types'

export const fallOfConstantinopleEs: Story = {
  slug: 'fall-of-constantinople',
  title: 'El último día de Roma',
  subtitle: 'Constantinopla, 1453 — las murallas habían aguantado mil años, y entonces un cañón cambió para qué servía una muralla.',
  hook: 'El Imperio romano no terminó en el 476. Terminó un martes por la mañana de 1453, defendido por siete mil hombres en unas murallas hechas para una ciudad diez veces mayor.',
  era: 'medieval',
  category: 'battles',
  years: [1451, 1453],
  regions: ['Bizancio', 'Imperio otomano', 'Italia'],
  nodes: ['fall-of-constantinople', 'byzantine-empire', 'constantinople', 'mehmed-ii', 'theodosian-walls'],
  tags: ['siege', 'empire', 'technology', 'rome', 'ottoman', 'legend'],
  readingMinutes: 11,
  reviewed: '2026-08-05',
  mood: 'noir',

  reel: [
    { beat: 'hook', punch: true, text: 'El Imperio romano no cayó en el 476. Cayó un martes por la mañana de 1453.' },
    { beat: 'hook', text: 'Nadie en la ciudad se llamaba a sí mismo bizantino. Decían romano, y lo decían en serio.' },
    { beat: 'worldBefore', kicker: '413', text: 'A Constantinopla la defienden tres líneas de piedra, un foso y mil años de resultados:' },
    { beat: 'worldBefore', text: 'ávaros, árabes, búlgaros, rus, todos vinieron, todos se volvieron.' },
    { beat: 'worldBefore', kicker: '1204', text: 'Entonces una cruzada la saqueó, y ya no volvió a levantarse del todo.' },
    { beat: 'worldBefore', punch: true, text: 'En 1453 la gran ciudad es sobre todo huertos, y unas cincuenta mil personas.' },
    { beat: 'problem', kicker: '1451', text: 'Un sultán de veintiún años hereda un imperio que rodea la ciudad por todos lados,' },
    { beat: 'problem', text: 'y decide hacer lo que su padre y su bisabuelo no pudieron.' },
    { beat: 'problem', text: 'Un fundidor húngaro llamado Orbán le ofrece sus cañones primero al emperador.' },
    { beat: 'problem', punch: true, mark: 'gate', text: 'El emperador no puede pagarle. El sultán puede pagarle cuatro veces.' },
    { beat: 'story', kicker: '6 de abril', text: 'El cañón mide ocho metros y lanza una piedra del peso de un coche pequeño,' },
    { beat: 'story', text: 'siete veces al día, contra unas murallas jamás pensadas para algo así,' },
    { beat: 'story', punch: true, text: 'y cada noche los defensores salen y reconstruyen lo que ha roto.' },
    { beat: 'story', text: 'Siete mil hombres sostienen veinte kilómetros de fortificación.' },
    { beat: 'story', kicker: '22 de abril', text: 'Entonces el sultán saca setenta barcos del agua y los pasa por encima de una colina,' },
    { beat: 'story', punch: true, mark: 'reversal', text: 'y el puerto que los defensores habían cerrado con una cadena aparece lleno de su flota.' },
    { beat: 'story', kicker: '29 de mayo', text: 'El asalto llega antes del alba, por oleadas, con las mejores tropas las últimas,' },
    { beat: 'story', text: 'y al hombre que manda en la brecha lo hieren y lo sacan por sus propias líneas.' },
    { beat: 'story', punch: true, text: 'La defensa no pierde la muralla. Ve marcharse a su jefe, y se deshace.' },
    { beat: 'whyItHappened', text: 'Se dirá que fallaron las murallas. Las murallas aguantaron cincuenta y tres días,' },
    { beat: 'whyItHappened', text: 'contra una artillería que no existía cuando las levantaron.' },
    { beat: 'whyItHappened', punch: true, text: 'Lo que falló fue la aritmética. Un hombre cada cuatro metros, y nadie que venga.' },
    { beat: 'whyItHappened', text: 'Europa llevaba años prometiendo ayuda y no mandó casi nada,' },
    { beat: 'whyItHappened', text: 'porque el precio era una unión de las iglesias que la ciudad ya había rechazado.' },
    { beat: 'consequences', text: 'El último emperador se quita las insignias y entra en la brecha. Nadie encuentra el cuerpo.' },
    { beat: 'consequences', mark: 'collapse', text: 'Mehmed cabalga hasta Santa Sofía y esa misma semana la hace mezquita,' },
    { beat: 'consequences', punch: true, text: 'y toma un título que ningún otomano había reclamado. César de Roma.' },
    { beat: 'whyItMatters', text: 'Aquel año todos los castillos de piedra de Europa se volvieron un pasivo,' },
    { beat: 'whyItMatters', text: 'y lo que mató a la última ciudad romana no fue un ejército.' },
    { beat: 'whyItMatters', punch: true, text: 'Fue que la altura y el grosor habían dejado de ser una respuesta.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'La gente de dentro de la ciudad no se llamaba a sí misma bizantina. Esa palabra la inventó un erudito alemán un siglo después de que desaparecieran. Se llamaban *rhomaioi* —romanos—, porque eso eran: la mitad oriental del Imperio romano, que no había caído, sino que simplemente había seguido, en griego, desde una capital fundada por Constantino en el 330.',
        'Durante casi todo ese recorrido, Constantinopla fue la ciudad más grande y más rica de la cristiandad, y la razón era en parte la geografía y sobre todo una muralla. Las murallas teodosianas, terminadas en el 413, cruzaban seis kilómetros de península en tres líneas: un foso de veinte metros de ancho, un muro exterior y, detrás, un muro interior de doce metros de alto con noventa y seis torres. Entre el 413 y 1453 las atacaron persas, ávaros, árabes dos veces, búlgaros, rus y otomanos, y las rechazaron a todas.',
        'Lo que acabó atravesándolas era cristiano. En 1204 la Cuarta Cruzada, desviada por deudas y por la política veneciana, tomó la ciudad y la saqueó durante tres días. El imperio se rompió en pedazos y, aunque un emperador griego regresó en 1261, aquello a lo que regresó no era lo mismo. El tesoro no volvió a llenarse. La población, quizá cuatrocientas mil personas antes de 1204, cayó y siguió cayendo.',
        'Para el siglo XV el imperio consistía en la ciudad, una franja de costa y el Peloponeso. Dentro de las murallas había campos, viñas y aldeas con terreno abierto entre ellas; los viajeros describían una ciudad de asentamientos separados dentro de una fortificación construida para una capital imperial. Unas cincuenta mil personas vivían en un perímetro defensivo pensado para medio millón.',
        'Y alrededor de todo ello estaba el Imperio otomano, que ya se había quedado con los Balcanes y para el que la ciudad era menos un premio estratégico que una molestia: un enclave extranjero plantado en mitad de su territorio, justo en el hueco entre su mitad europea y su mitad asiática.',
      ],
      aside: {
        kind: 'number',
        label: 'La cifra',
        body: 'Unos 20 kilómetros de murallas de tierra y de mar. Unos 7.000 defensores, según el recuento que hizo el propio secretario del emperador y que le ordenaron callar. Eso es un hombre cada tres metros — y los hombres no pueden estar en dos sitios, que es justo lo que un asedio sirve para averiguar.',
        sourceId: 'sphrantzes-chronicle',
      },
      sourceIds: ['runciman-1965', 'crowley-2005', 'sphrantzes-chronicle'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Mehmed II fue sultán por segunda vez desde 1451, con diecinueve años. Las potencias europeas que lo habían tratado en su primer y breve reinado de niño lo leyeron como inexperto y probablemente manejable. Fue una lectura gravemente equivocada. En menos de un año había construido una fortaleza en el punto más estrecho del Bósforo —los locales la llamaban el Degollador— y empezó a hundir los barcos que no se detenían a pagar.',
        'Su innovación de verdad no fue táctica. Fue de aprovisionamiento. Un fundidor de cañones llamado Orbán, de Hungría o de Transilvania, llegó a Constantinopla y ofreció al emperador un arma mayor que cualquier otra existente. Constantino XI no podía pagarle lo que pedía ni suministrarle los materiales. Orbán se fue a Edirne y le hizo la misma oferta al sultán, que le preguntó si el cañón podría romper las murallas de Constantinopla, aceptó pagarle cuatro veces lo que pedía y le dio todo lo que necesitaba.',
        'El resultado fue una bombarda de bronce de unos ocho metros que lanzaba una bola de piedra de unos seiscientos kilos. Necesitaba sesenta bueyes y doscientos hombres para moverse, tardaba horas en enfriarse entre disparos y podía disparar quizá siete veces al día. No era precisa. No le hacía falta. Una muralla es un blanco fijo.',
        'Ese es el verdadero problema de 1453, y no es en realidad un problema militar. La fortificación había sido la tecnología que permitía a un Estado pequeño y rico sobrevivir frente a uno grande durante mil años. La artillería de pólvora, en unos cincuenta años, acabó con eso. Constantinopla fue sencillamente lo más espectacular que había en pie cuando llegó el cambio.',
      ],
      sourceIds: ['crowley-2005', 'runciman-1965', 'kritovoulos-1467'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'El asedio empezó el 6 de abril de 1453 y duró cincuenta y tres días.',
        'La defensa la mandaba en la práctica un soldado profesional genovés, Giovanni Giustiniani Longo, que había llegado en enero con setecientos hombres y a quien se dio el mando de las murallas terrestres. La guarnición en conjunto era minúscula: Jorge Esfrantzés, secretario del emperador, recibió la orden de contarla y encontró menos de cinco mil griegos capaces de tomar las armas, más unos dos mil extranjeros. Constantino le mandó guardar el secreto, que es la clase de orden que dice lo que significaba la cifra.',
        'El patrón del asedio quedó fijado la primera semana. El gran cañón y las bombardas menores disparaban todo el día contra el Mesoteichion, el tramo más débil de muralla, en el valle del Lico. La mampostería se venía abajo. Y por la noche los defensores y la población civil —mujeres y niños incluidos, según todos los relatos— salían al foso con barriles de tierra, sarmientos y escombro y levantaban una empalizada que cerraba el hueco y que absorbía los impactos mejor que la piedra.',
        'Durante seis semanas la ciudad ganó más de esos intercambios de los que perdió. El 20 de abril, cuatro barcos cristianos se abrieron paso a través de toda la flota otomana hasta el puerto, a la vista de los dos ejércitos y del sultán, del que se cuenta que metió el caballo en el mar de pura rabia. Los intentos de Mehmed de minar bajo las murallas fueron localizados y contraminados por un ingeniero alemán que estaba en la ciudad. Su intento de acercar una gran torre de asedio al foso ardió en una salida nocturna.',
        'Entonces, el 22 de abril, el sultán hizo lo que se recuerda. El Cuerno de Oro —el puerto profundo del flanco norte de la ciudad— estaba cerrado por una gran cadena de hierro sobre flotadores, y las murallas marítimas de detrás eran delgadas porque nunca habían tenido que ser gruesas. Mehmed mandó tender un camino de maderos engrasados por la colina de detrás de la Gálata genovesa, y arrastró unos setenta barcos fuera del Bósforo, por encima del cerro y hasta el puerto, al otro lado de la cadena.',
        'Por sí solo no fue decisivo. Lo que hizo fue aritmética: los defensores tenían ahora que guarnecer también las murallas del puerto, con los mismos siete mil hombres. Cada soldado que subía al norte era un soldado que no estaba en la brecha del oeste.',
        'El asalto final llegó de madrugada el 29 de mayo, y estaba organizado como organiza uno un ejército profesional. Primero fueron los irregulares, durante dos horas, para agotar a la defensa y gastarle las flechas. Luego los regimientos anatolios. Y después, con las primeras luces, los jenízaros —la infantería permanente del sultán, las mejores tropas de Europa— entraron frescos contra hombres que llevaban toda la noche combatiendo sin relevo.',
        'Entonces pasaron dos cosas casi a la vez, y las fuentes no coinciden en el orden. Una poterna llamada Kerkoporta apareció sin atrancar, y una partida de soldados otomanos pasó por ella y llegó a la muralla interior. Y a Giustiniani lo hirieron —de un disparo, atravesando la coraza, en el brazo o en el pecho según el relato— y pidió que lo sacaran. Se dice que el emperador le suplicó que se quedara. Lo llevaron por la puerta interior hasta un barco, y sus genoveses lo siguieron.',
        'La defensa de la brecha se disolvió a partir de ese momento. No porque la hubieran batido: porque los hombres que la sostenían vieron abrirse la puerta que tenían detrás, vieron pasar por ella a su comandante y sacaron la conclusión evidente. Constantino XI, según los relatos que nos llegan, se quitó las insignias imperiales para que no lo cogieran vivo y se metió en el combate junto a la puerta de San Romano. Nadie identificó su cuerpo después.',
        'A media mañana la ciudad estaba tomada. El sultán entró por la tarde, cabalgó hasta Santa Sofía —iglesia durante novecientos dieciséis años— y dio la orden que la convirtió en mezquita.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: '«Toda la noche dispararon los turcos el gran cañón contra las murallas, y toda la noche trabajamos los de la ciudad en el foso con tierra y barriles y maderos, las mujeres acarreando piedras con los hombres, y por la mañana el muro estaba otra vez en pie donde había caído.» — el sentido del diario que el cirujano de barco veneciano Nicolò Barbaro llevó día a día dentro de la ciudad durante el asedio.',
        sourceId: 'barbaro-1453',
      },
      sourceIds: ['barbaro-1453', 'runciman-1965', 'crowley-2005', 'philippides-hanak-2011'],
    },

    whyItHappened: {
      heading: 'Por qué cayó',
      paragraphs: [
        'La respuesta satisfactoria es el cañón, y el cañón importa, pero no basta. El gran arma se agrietó dos veces y hubo que repararla, mató al propio Orbán en algún momento del asedio según casi todos los relatos, y nunca abrió una brecha que los defensores no pudieran cerrar esa noche. La artillería desgastó las murallas. No las tiró.',
        '**La respuesta suficiente es la proporción.** Veinte kilómetros de muralla y siete mil hombres. Todo lo que empleó Mehmed —los barcos por encima de la colina, las fintas contra las murallas marítimas, las dos horas de irregulares antes del ataque de verdad— iba contra esa proporción, no contra la mampostería. Una defensa sin reserva no puede perder en un sitio sin perder en todos.',
        '**Detrás de la proporción hay un fracaso diplomático de cincuenta años.** Los emperadores habían pasado décadas intentando comprar ayuda militar occidental con la única moneda que tenían, que era la sumisión de la Iglesia ortodoxa a Roma. Juan VIII firmó la unión en Florencia en 1439. La ciudad la rechazó: la población, los monasterios y buena parte del clero lo consideraron vender la fe, y a uno de los grandes cargos del Estado se le atribuye haber dicho que prefería ver el turbante del sultán en la ciudad al capelo del cardenal. La unión produjo furia dentro y, al final, unos pocos cientos de soldados italianos y una o dos galeras papales.',
        '**Y detrás de eso está 1204.** La razón de que Constantinopla no pudiera reunir un ejército de verdad en 1453 es que había sido destruida como potencia económica por una cruzada cristiana doscientos cincuenta años antes, y nunca recuperó su recaudación, su población ni su comercio: eso lo tenían ahora Génova y Venecia. El imperio que cayó ante Mehmed no había sido una gran potencia en la memoria de nadie vivo.',
        'Puestas juntas, el asedio se lee de otra manera. Mehmed no derrotó al Imperio romano. Llegó al final de una decadencia larguísima con una tecnología nueva y hombres suficientes para rematarla, y tuvo el juicio de atacar lo único que dentro de las murallas escaseaba de verdad, que era gente.',
      ],
      sourceIds: ['runciman-1965', 'philippides-hanak-2011', 'crowley-2005'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'Una fecha que termina un imperio suele ser una comodidad del historiador. Esta no lo es: el 28 de mayo de 1453 había un emperador romano, y el 30 de mayo no lo había, y no ha vuelto a haberlo.',
      ],
      shortTerm: [
        'La costumbre permitía al ejército tres días de saqueo. Casi todos los relatos coinciden en que Mehmed lo cortó antes —el primer día según unos, más tarde según otros— porque quería la ciudad entera como capital, no desvalijada.',
        'Santa Sofía fue mezquita en cuestión de días. Lo siguió siendo hasta 1934, pasó a museo y volvió al culto como mezquita en 2020.',
        'Mehmed tomó el título de Kayser-i Rûm —César de Roma— y lo decía como reclamación de sucesión, no como floritura. Tenía veintiún años.',
        'La capital otomana se trasladó a la ciudad, y allí siguió cuatrocientos setenta años.',
        'Mehmed empezó de inmediato a repoblarla, por invitación y por obligación, reasentando a griegos, armenios, judíos y turcos. En veinticinco años era mayor de lo que había sido en 1453.',
      ],
      longTerm: [
        'La muralla alta de piedra dejó de ser una defensa seria en toda Europa. En un siglo la fortificación se había rediseñado en torno a terraplenes bajos, gruesos y en ángulo, hechos para absorber el impacto —la traza italiana—, y la edad del castillo se acabó.',
        'El Imperio otomano se convirtió en la potencia dominante del Mediterráneo oriental y siguió siendo un Estado europeo de primer orden hasta 1918.',
        'Eruditos y manuscritos griegos siguieron moviéndose hacia el oeste, sumándose a un traslado que llevaba décadas en marcha, y en cuarenta años las imprentas de Venecia imprimían textos griegos.',
        'Moscú empezó, durante el siglo siguiente, a describirse como la Tercera Roma: una reclamación de herencia que todavía asoma en cómo se cuenta Rusia a sí misma.',
        'La fecha se usa como frontera entre lo medieval y lo moderno en muchísimos manuales, lo cual dice más sobre la comodidad de los finales redondos que sobre 1453.',
      ],
      unexpected: [
        'Orbán, que construyó el cañón que hizo posible el asedio, se lo había ofrecido antes a los defensores. La caída de Constantinopla dependió de una decisión de presupuesto.',
        'Algunos de los cañones más grandes no eran nuevos: una bombarda otomana fundida en 1464, de la misma familia, seguía en servicio británico en los Dardanelos y disparó contra una escuadra de la Royal Navy en 1807.',
        'La colonia genovesa de Gálata, justo al otro lado del puerto, se mantuvo formalmente neutral durante todo el asedio, comerció con los dos bandos y se rindió con condiciones al día siguiente de la caída.',
        'Esfrantzés, que contó la guarnición, sobrevivió, fue esclavizado, fue rescatado, perdió a sus hijos en la casa del sultán y escribió las únicas memorias de testigo de un alto cargo bizantino: que son también la fuente de la cifra que le mandaron callar.',
      ],
      sourceIds: ['runciman-1965', 'crowley-2005', 'kritovoulos-1467', 'sphrantzes-chronicle'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'La versión limpia de 1453 es que una gran ciudad cayó ante un gran cañón y que una era cambió de manos. El cañón es la parte que todo el mundo se queda, y merece quedarse: este es el momento en que la fortificación perdió su larguísima discusión con la artillería, y todo gobernante europeo con un castillo entendió en una década que ahora tenía un pasivo.',
        'Pero lo que vale la pena llevarse es la aritmética. Las murallas hicieron su trabajo. Las reparaban civiles cada noche y seguían en pie cuando la ciudad cayó. Lo que se acabó fue la gente — y la razón de que no hubiera gente son doscientos cincuenta años de decadencia, un saqueo a manos de aliados, una unión eclesiástica comprada y luego repudiada, y promesas de ayuda de una Europa que siempre pensaba mandarla el año que viene.',
        'Esa es la forma de casi todas las caídas. No un golpe catastrófico único, sino un adelgazamiento largo, hasta que llega algo corriente y ya no queda bastante de nada para absorberlo. La catástrofe se lleva la fecha porque el adelgazamiento no tiene fecha.',
        'Y está la cuestión de quién pone los nombres. Los de dentro llamaron romano a su Estado durante mil cien años. Nosotros lo llamamos bizantino, por una palabra acuñada por un erudito en 1557, lo que archiva discretamente todo el asunto como otra cosa distinta del Imperio romano: como si el final ya estuviera pactado. Conviene recordar que ellos no se creyeron los últimos de nada hasta la mañana en que lo fueron.',
      ],
      sourceIds: ['runciman-1965', 'philippides-hanak-2011'],
    },
  },

  timeline: [
    { year: 330, title: 'Constantino funda la ciudad', detail: 'Una capital nueva sobre el Bósforo para el Imperio romano, puesta donde se encuentran Europa y Asia y dos mares.' },
    { year: 413, title: 'Se terminan las murallas teodosianas', detail: 'Tres líneas y un foso cruzando seis kilómetros de península. Durante ochocientos años nada las atraviesa desde fuera.', pivotal: true },
    { year: 1204, title: 'La Cuarta Cruzada saquea la ciudad', detail: 'Una cruzada dirigida a Egipto toma Constantinopla y la saquea tres días. El imperio no recupera nunca su riqueza ni su población.', pivotal: true },
    { year: 1261, title: 'Vuelve un emperador griego', detail: 'La ciudad se recupera, pero el Estado que regresa es un fragmento: costa, una capital y el Peloponeso.' },
    { year: 1439, title: 'Se firma en Florencia la unión de las iglesias', detail: 'El emperador acepta la autoridad papal a cambio de ayuda militar. La ciudad rechaza el trato y la ayuda apenas llega.', pivotal: true },
    { year: 1451, title: 'Mehmed II vuelve a ser sultán', detail: 'Diecinueve años, subestimado por todas las cortes europeas, y planeando de inmediato el asedio en el que fallaron sus antepasados.' },
    { year: 1452, title: 'Se construye el Degollador', detail: 'Una fortaleza en el punto más estrecho del Bósforo cierra el estrecho, y los barcos que no se detienen son hundidos.' },
    { year: 1452, title: 'Orbán funde la gran bombarda', detail: 'Rechazado por el emperador por falta de dinero, el fundidor construye para el sultán un cañón de ocho metros.', pivotal: true },
    { year: 1453, date: '1453-04-06', title: 'Empieza el asedio', detail: 'Unos siete mil defensores en veinte kilómetros de muralla, contra un ejército varias veces mayor con la mayor artillería construida hasta entonces.' },
    { year: 1453, date: '1453-04-20', title: 'Cuatro barcos rompen el cerco', detail: 'Tres naves genovesas y un barco imperial de grano se abren paso por toda la flota otomana hasta el puerto, a la vista de los dos ejércitos.' },
    { year: 1453, date: '1453-04-22', title: 'La flota cruza la colina', detail: 'Unos setenta barcos son arrastrados por tierra sobre maderos engrasados hasta el Cuerno de Oro, esquivando la cadena y estirando la defensa.', pivotal: true },
    { year: 1453, date: '1453-05-29', title: 'Cae la ciudad', detail: 'Un asalto en tres oleadas antes del alba; hieren a Giustiniani y lo sacan; la defensa de la brecha se hunde. El último emperador muere combatiendo.', pivotal: true },
    { year: 1453, title: 'Santa Sofía se convierte en mezquita', detail: 'Mehmed cabalga hasta la iglesia esa misma tarde y da la orden. Toma el título de César de Roma.' },
    { year: 1478, title: 'La ciudad es mayor que antes del asedio', detail: 'Un censo muestra una capital repoblada de griegos, turcos, armenios y judíos, traídos por invitación y por la fuerza.' },
  ],

  causeEffect: [
    { cause: 'La Cuarta Cruzada saquea Constantinopla en 1204', effect: 'El imperio no se recupera económicamente', because: 'Su recaudación comercial pasó para siempre a Venecia y Génova, y un Estado sin ingresos no puede comprar soldados ni barcos.' },
    { cause: 'El emperador no puede pagar a Orbán', effect: 'El cañón se construye para el sultán', because: 'Una artillería de esa escala era una obra de inversión, y solo uno de los dos bandos tenía un tesoro que funcionara.' },
    { cause: 'Mehmed construye una fortaleza en el Bósforo', effect: 'La ciudad queda cortada del grano del mar Negro', because: 'A Constantinopla siempre la habían alimentado los barcos del norte, y un estrecho cerrado por cañones es un estrecho cerrado.' },
    { cause: 'Se firma en Florencia la unión de las iglesias', effect: 'La ciudad se divide y aun así recibe poca ayuda', because: 'El precio exigido era la sumisión religiosa, que le costó al emperador su propia población sin comprarle un ejército.' },
    { cause: 'Setenta barcos son llevados por tierra al Cuerno de Oro', effect: 'Los defensores tienen que guarnecer también las murallas del puerto', because: 'Una guarnición sin reserva se derrota haciéndole cubrir más terreno, no combatiéndola mejor.' },
    { cause: 'Hieren a Giustiniani y lo sacan por la puerta interior', effect: 'La defensa de la brecha se hunde', because: 'Hombres agotados que ven a su comandante marcharse por una puerta a su espalda lo leen como el final, y acertaban.' },
    { cause: 'Los cañones hacen indefendibles las murallas altas de piedra', effect: 'La fortificación europea se rediseña en un siglo', because: 'Un terraplén bajo, grueso y en ángulo absorbe la bala donde una cortina alta de piedra concentra su efecto.' },
  ],

  myths: [
    {
      myth: 'La caída de Constantinopla provocó el Renacimiento, al mandar eruditos griegos al oeste.',
      reality: 'Los eruditos y los manuscritos griegos llevaban décadas moviéndose hacia Italia antes de 1453: Manuel Crisoloras enseñaba griego en Florencia en 1397, y la biblioteca de Besarión la reunió un hombre que había venido al oeste para el Concilio de Florencia en 1438. La caída sumó a una corriente que ya corría. No la empezó.',
      whyItPersists: 'Es una historia causal limpia y con fecha, y las fechas se enseñan mejor que cincuenta años de migración gradual.',
      sourceIds: ['runciman-1965', 'philippides-hanak-2011'],
    },
    {
      myth: 'Los otomanos cerraron las rutas comerciales a Asia, lo que obligó a Europa a buscar una ruta marítima y llevó a 1492.',
      reality: 'Los otomanos querían los aranceles y mantuvieron el comercio en marcha; el tráfico veneciano y genovés con el Levante continuó después de 1453. Los portugueses llevaban bajando por la costa africana desde la década de 1420, antes de que cayera la ciudad. La búsqueda de rutas marítimas tenía sus propias causas largas.',
      whyItPersists: 'Enlaza dos fechas famosas con elegancia, y los enlaces elegantes duran más que los exactos.',
      sourceIds: ['crowley-2005', 'philippides-hanak-2011'],
    },
    {
      myth: 'La ciudad cayó porque alguien dejó abierta la poterna de Kerkoporta: un solo descuido, o una traición.',
      reality: 'La historia de la poterna aparece en algunas fuentes y no en otras, y donde aparece los detalles cambian. Incluso aceptándola, ocurrió a la vez que la herida de Giustiniani, en un momento en que una muralla sostenida por hombres agotados ya estaba siendo asaltada por jenízaros de refresco. Una puerta sin atrancar no es por qué cayó una ciudad con un defensor cada tres metros.',
      whyItPersists: 'Un pequeño error humano es una causa más satisfactoria que una escasez insalvable de soldados, y le da a la historia una bisagra.',
      sourceIds: ['philippides-hanak-2011', 'runciman-1965'],
    },
    {
      myth: 'Eran bizantinos, y el Imperio bizantino es otra cosa distinta del Imperio romano.',
      reality: 'El Estado se llamaba a sí mismo romano, su gente se llamaba romana, y su derecho, sus títulos y su idea de sí mismo descendían sin interrupción de Roma. «Bizantino» lo acuñó el erudito alemán Hieronymus Wolf en 1557, un siglo después de que el Estado terminara.',
      whyItPersists: 'La etiqueta es un atajo cómodo y ya inevitable, pero codifica en silencio el juicio de que el imperio oriental era un sucesor y no una continuación.',
      sourceIds: ['runciman-1965'],
    },
  ],

  disagreements: [
    {
      question: '¿Cómo de grande era el ejército otomano?',
      positions: [
        { view: 'Enorme: los relatos de testigos y casi contemporáneos dan cifras de 150.000 a más de 400.000, incluyendo a los que seguían al campamento.', heldBy: 'Barbaro y varios relatos contemporáneos', sourceId: 'barbaro-1453' },
        { view: 'Quizá entre 50.000 y 80.000 combatientes, de los cuales una minoría eran tropas regulares. Las cifras mayores son retóricas, como suelen serlo las cifras antiguas y medievales.', heldBy: 'Runciman, Philippides y Hanak, y el consenso moderno', sourceId: 'philippides-hanak-2011' },
      ],
      atlasPosition: 'El atlas usa el rango moderno y no repite los totales contemporáneos como recuentos. La proporción que importaba —varios atacantes por defensor— se sostiene con cualquiera de las estimaciones.',
    },
    {
      question: '¿Cortó Mehmed el saqueo de tres días?',
      positions: [
        { view: 'Sí, y pronto, porque quería una capital que funcionara y no una ruina: así lo dice el historiador griego que escribía bajo su patronazgo.', heldBy: 'Critóbulo, y los relatos que lo siguen', sourceId: 'kritovoulos-1467' },
        { view: 'El saqueo fue grave y duró más de lo que admiten sus admiradores; los testigos de dentro describen un pillaje sistemático y esclavizaciones en masa.', heldBy: 'Barbaro y otros testigos latinos', sourceId: 'barbaro-1453' },
      ],
      atlasPosition: 'El atlas dice que el saqueo fue real y grave, que Mehmed tenía un interés fuerte en pararlo y que las fuentes más cercanas a él son las más seguras de que lo hizo. No da por zanjado un número de días.',
    },
    {
      question: '¿Era inevitable la caída en 1453?',
      positions: [
        { view: 'En la práctica sí. Con cincuenta mil habitantes, sin ingresos, sin ejército de campaña y con un imperio alrededor, la ciudad era una anomalía estratégica que esperaba a un sultán dispuesto a gastar el dinero.', heldBy: 'La lectura moderna mayoritaria', sourceId: 'runciman-1965' },
        { view: 'No aquel día. La defensa había aguantado siete semanas y ganaba intercambios sueltos; una flota de socorro occidental seria, o una hora distinta el 29 de mayo, podrían haber terminado el asedio como terminaron los anteriores.', heldBy: 'Roger Crowley y otros que subrayan la contingencia de aquella última mañana', sourceId: 'crowley-2005' },
      ],
      atlasPosition: 'El atlas sostiene las dos cosas: la decadencia larga hizo la caída abrumadoramente probable, y aquella mañana concreta estuvo aun así reñida. Ninguna de las dos lecturas dispensa a la otra de las pruebas.',
    },
  ],

  didYouKnow: [
    'El hombre que construyó el gran cañón se lo ofreció primero a los defensores. No podían pagarlo.',
    'Cada noche los civiles de la ciudad, mujeres incluidas, reconstruían la muralla que los cañones habían derribado ese día — con tierra y barriles, que absorbían los impactos mejor que la piedra.',
    'Mehmed hizo arrastrar unos setenta barcos por tierra, sobre maderos engrasados, por encima de una colina, hasta un puerto cerrado con una cadena.',
    'El secretario del emperador contó menos de cinco mil griegos capaces de combatir, y le ordenaron guardar la cifra en secreto.',
    'Nadie en la ciudad lo llamaba Imperio bizantino. Ese nombre se inventó en 1557, un siglo después de que terminara.',
    'Se dice que Constantino XI se quitó las insignias imperiales antes de entrar en la brecha, para que no lo reconocieran. Su cuerpo nunca fue identificado.',
    'La colonia genovesa del otro lado del puerto se mantuvo neutral, comerció con los dos bandos durante el asedio y se rindió al día siguiente de la caída.',
    'Una bombarda otomana de la misma familia, fundida en 1464, seguía en servicio en los Dardanelos y disparó contra una escuadra británica en 1807.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'Constantinopla era la capital del Imperio romano de Oriente, protegida desde el 413 por las fortificaciones más fuertes de Europa. La saqueó la Cuarta Cruzada en 1204 y nunca se recuperó económicamente; en 1453 tenía unas cincuenta mil personas dentro de unas murallas hechas para medio millón, rodeada por todas partes por el Imperio otomano.',
        'En 1451 Mehmed II fue sultán con diecinueve años y se propuso tomarla. Contrató a un fundidor, Orbán, que había ofrecido el mismo cañón antes al emperador y había sido rechazado por falta de dinero, y construyó una artillería mayor que ninguna existente.',
        'El asedio fue del 6 de abril al 29 de mayo de 1453. Unos siete mil defensores sostenían veinte kilómetros de muralla, reparando las brechas cada noche. Mehmed arrastró setenta barcos por tierra hasta el Cuerno de Oro para estirarlos más. El asalto final llegó en tres oleadas antes del alba; hirieron al comandante genovés Giustiniani y lo sacaron, la defensa de la brecha se hundió y el último emperador murió combatiendo.',
        'Mehmed hizo de la ciudad su capital y tomó el título de César de Roma. Las murallas altas de piedra dejaron de ser una defensa en toda Europa, y el Estado romano de once siglos terminó un martes por la mañana.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'Había una ciudad con las mejores murallas del mundo. Tres murallas, una detrás de otra, con un foso enorme delante. Durante mil años vinieron ejércitos, se estrellaron contra ellas y se volvieron a casa.',
        'Pero la ciudad se había quedado pequeña y pobre. Tenía murallas de ciudad gigante y gente para una ciudad diminuta: unos siete mil hombres para vigilar una muralla que tardarías un día entero en rodear andando.',
        'Un sultán joven quería la ciudad. Contrató a un hombre capaz de fabricar un cañón enorme —tan grande que hacían falta sesenta bueyes para arrastrarlo— y lo apuntó a las murallas. Cada día abría agujeros. Cada noche la gente de la ciudad, mujeres y niños incluidos, salía y los rellenaba con tierra y barriles.',
        'Aguantaron cincuenta y tres días. Entonces el sultán atacó con todo a la vez, de noche, y al hombre que mandaba la defensa lo hirieron y se lo llevaron. Los soldados lo vieron marcharse, y todo se vino abajo.',
        'Y la razón de verdad de que cayera no fue el cañón. Es que ya no quedaba gente suficiente para estar en las murallas, y nadie vino a ayudar.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'La base documental es insólitamente rica e insólitamente traicionera. El *Giornale* de Barbaro es un diario fechado de un testigo, cirujano de barco veneciano, e insustituible para la cronología; pero es también veneciano y hostil a Génova, lo que condiciona su tratamiento de Giustiniani. Esfrantzés es el gran insider bizantino, escribiendo desde el exilio y el duelo. Critóbulo escribió bajo patronazgo otomano y es sistemáticamente favorable a Mehmed, lo que lo convierte en la mejor fuente sobre sus intenciones y en la más floja sobre su conducta. Philippides y Hanak (2011) es el estudio moderno imprescindible sobre qué puede sostener cada texto.',
        'La cuestión técnico-militar —si 1453 marca la superación decisiva de la mampostería vertical por la artillería de pólvora— hay que manejarla con cuidado. Las bombardas desgastaron el Mesoteichion durante siete semanas sin producir una brecha irreparable, y la construcción nocturna de la empalizada demuestra que el revestimiento de tierra y madera ya funcionaba contra el impacto. Lo que 1453 demuestra no es tanto que los cañones ganen a las murallas como que cambiaron la curva de coste de un asedio, que es exactamente lo que codifica la traza italiana.',
        'En cuanto a la causalidad, la historiografía se ha alejado decididamente de 1453 como ruptura y se ha acercado a 1204 como quiebre estructural. La subordinación económica del imperio a las repúblicas marítimas italianas, el hundimiento fiscal y la contracción demográfica son todos anteriores a Mehmed en generaciones. La política eclesiástica de 1439 pertenece a la misma historia: la unión fue un intento de convertir capital doctrinal en ayuda militar en un punto en que no quedaba ningún otro capital.',
        'Por último, la historia de la recepción es un tema en sí mismo: la ideología de la Tercera Roma en Moscovia, la reclamación otomana de sucesión romana expresada en el Kayser-i Rûm y la Megali Idea griega del siglo XIX toman 1453 como herida o como derecho fundacional, lo cual es motivo para desconfiar de esa fecha como marcador neutral de periodización.',
      ],
    },
    {
      id: 'the-arithmetic',
      label: 'Un hombre cada tres metros',
      kind: 'angle',
      paragraphs: [
        'Olvida el cañón un momento y haz la cuenta que hizo el secretario del emperador.',
        'Veinte kilómetros de muralla, de tierra y de mar. Menos de siete mil hombres capaces de llevar un arma, y esa cifra incluye a los setecientos genoveses llegados en enero y a los marineros sacados de los barcos del puerto. Eso es aproximadamente un defensor cada tres metros, de pie todo el día y toda la noche, sin nadie detrás que los releve.',
        'Ahora relee las decisiones de Mehmed. La fortaleza del Bósforo: corta el grano, así que puede alimentarse a menos hombres. Los barcos por encima de la colina hasta el Cuerno de Oro: añade varios kilómetros de muralla que hay que guarnecer con los mismos siete mil. Las fintas nocturnas contra las murallas marítimas: obligan a moverse a la reserva, que no existe. Las dos horas de irregulares antes del asalto de verdad: gastan las flechas y el sueño de los defensores.',
        'Nada de eso apunta a la mampostería. Todo apunta a la proporción. El gran cañón es la parte famosa, pero el asedio se ganó con lógica de contable: haz que lo escaso sea más escaso, y sigue haciéndolo hasta que no haya bastante en el único sitio que importa.',
      ],
    },
    {
      id: 'the-long-fall',
      label: 'La caída de doscientos cincuenta años',
      kind: 'contrast',
      paragraphs: [
        'Una ciudad puede caer en una mañana. Un imperio tarda más, y este llevaba cayendo desde 1204.',
        '**1204.** Una cruzada financiada por Venecia toma y saquea la ciudad. Las reliquias, los caballos de bronce y el tesoro se van al oeste. El comercio —los aranceles que lo pagaban todo— pasa a las repúblicas italianas y no vuelve.',
        '**De 1261 a 1400.** Un emperador griego regresa a una capital que no puede permitirse. El territorio se pierde sin parar en Anatolia y en los Balcanes. Los emperadores viajan en persona a Italia, Francia e Inglaterra a pedir ayuda, y a uno lo retienen brevemente en Venecia por una deuda.',
        '**1439.** Se firma la unión de las iglesias. Es el último activo que le queda al imperio: su propia independencia religiosa, vendida a cambio de un ejército. La población repudia la venta, y el ejército no llega.',
        '**1453.** Cincuenta y tres días.',
        'El cañón es lo que todo el mundo recuerda, y es de verdad la bisagra tecnológica. Pero la razón de que aquellas murallas las sostuvieran siete mil hombres está repartida a lo largo de dos siglos y medio, y cada una de las decisiones que llevaron hasta ahí la tomó alguien que creía tener más tiempo.',
      ],
    },
  ],

  beforeAfter: {
    label: 'La ciudad, antes y después',
    before: {
      title: 'El 28 de mayo de 1453',
      points: [
        'Un emperador romano, en sucesión ininterrumpida desde Augusto',
        'Santa Sofía, iglesia, como lo era desde hacía 916 años',
        'Unas cincuenta mil personas en una capital que menguaba',
        'La muralla alta de piedra como estándar de defensa en Europa',
        'El Imperio otomano partido alrededor de un enclave extranjero',
      ],
    },
    after: {
      title: 'El 30 de mayo de 1453',
      points: [
        'Ningún emperador romano en ninguna parte, y nunca más',
        'Santa Sofía, mezquita, por una orden dada esa misma tarde',
        'Una capital repoblada a propósito desde todo el imperio',
        'La fortificación rediseñada en un siglo en torno a terraplenes bajos y en ángulo',
        'Un Estado otomano continuo desde el Danubio hasta Anatolia',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si hubiera llegado la flota de socorro occidental?',
      reasoning: 'Una escuadra papal se estaba reuniendo en el Egeo y había una flota veneciana autorizada. Los cuatro barcos que rompieron el cerco el 20 de abril demostraron que una fuerza cristiana decidida podía batir a la armada otomana en el Bósforo. Una fuerza de socorro a principios de mayo, desembarcando hombres y suministros, quizá habría hecho sobrevivible la proporción y habría obligado a retirarse a Mehmed, en cuya propia corte había una facción que le pedía levantar el asedio.',
      constraint: 'Es especulación, y la razón de que la flota llegara tarde no es un azar meteorológico sino el mismo patrón de cincuenta años: la ayuda occidental fue siempre condicional, siempre lenta y siempre menor de lo prometido. Además, un socorro exitoso aplaza y no revierte: la ciudad seguía sin ingresos, sin ejército y sin territorio, y Mehmed tenía veintiún años.',
    },
    {
      question: '¿Y si el emperador hubiera podido pagar a Orbán?',
      reasoning: 'El fundidor fue primero a Constantinopla. Si la ciudad hubiera comprado sus servicios, la mayor artillería del mundo habría estado montada sobre las murallas en vez de apuntándolas, y unas líneas de asedio otomanas son mucho más vulnerables a un bombardeo que una cortina de piedra.',
      constraint: 'El imperio no podía pagarle porque no tenía dinero, y no tener dinero es justamente la condición que se está describiendo: este es un escenario que exige deshacer 1204. Orbán tampoco era único; los fundidores otomanos ya fundían cañones grandes, y Mehmed tenía recursos para encargárselos a otro.',
    },
  ],

  quiz: [
    {
      question: '¿A quién ofreció primero su cañón el fundidor Orbán?',
      options: [
        'Al sultán Mehmed II',
        'Al emperador bizantino Constantino XI',
        'A la República de Venecia',
        'Al papa',
      ],
      answerIndex: 1,
      explains: 'Fue primero a Constantinopla. El emperador no podía pagar lo que pedía, así que llevó la oferta al sultán, que le pagó cuatro veces el precio.',
    },
    {
      question: '¿Qué hizo Mehmed el 22 de abril de 1453?',
      options: [
        'Rompió con cañones la cadena del puerto',
        'Arrastró unos setenta barcos por tierra hasta el Cuerno de Oro',
        'Minó bajo las murallas y voló una brecha',
        'Ofreció condiciones al emperador',
      ],
      answerIndex: 1,
      explains: 'Se tendió un camino de maderos engrasados por la colina de detrás de Gálata y se arrastraron los barcos por él hasta el puerto, lo que estiró a una defensa que no tenía reserva.',
    },
    {
      question: '¿Cuál era el problema de fondo de los defensores?',
      options: [
        'Las murallas eran viejas y se desmoronaban',
        'No tenían absolutamente nada de comida',
        'Unos siete mil hombres tenían que sostener veinte kilómetros de muralla',
        'Sus armas estaban anticuadas',
      ],
      answerIndex: 2,
      explains: 'Las murallas aguantaron cincuenta y tres días y se rehacían cada noche. Lo que se acabó fue la gente: aproximadamente un defensor cada tres metros, sin reserva y sin socorro.',
    },
    {
      question: '¿Qué falla en decir que la caída de Constantinopla provocó el Renacimiento?',
      options: [
        'El Renacimiento ya había terminado en 1453',
        'Los eruditos y manuscritos griegos llevaban décadas moviéndose al oeste',
        'Ningún erudito griego salió de la ciudad',
        'A Italia no le interesaban los textos griegos',
      ],
      answerIndex: 1,
      explains: 'Crisoloras enseñaba griego en Florencia en 1397, y el Concilio de Florencia trajo eruditos y libros griegos al oeste en 1438. La caída sumó a una corriente que ya corría.',
    },
  ],

  sources: [
    {
      id: 'barbaro-1453',
      kind: 'primary',
      author: 'Nicolò Barbaro',
      title: 'Giornale dell’assedio di Costantinopoli',
      year: 1453,
      detail: 'Diario llevado durante el asedio; ed. E. Cornet, Viena 1856; trad. inglesa de J. R. Jones como «Diary of the Siege of Constantinople 1453»',
      note: 'Un cirujano de barco veneciano dentro de la ciudad, escribiendo día a día. La mejor cronología que tenemos, y abiertamente hostil a los genoveses: fíate de las fechas, pesa las culpas.',
    },
    {
      id: 'sphrantzes-chronicle',
      kind: 'primary',
      author: 'George Sphrantzes',
      title: 'Chronicon Minus',
      year: 1477,
      detail: 'Trad. de Marios Philippides como «The Fall of the Byzantine Empire: A Chronicle by George Sphrantzes 1401–1477»',
      note: 'El propio secretario del emperador, que contó la guarnición y a quien mandaron callar la cifra. Unas memorias escritas por un hombre que perdió a su familia en lo que vino después.',
    },
    {
      id: 'kritovoulos-1467',
      kind: 'primary',
      author: 'Kritovoulos of Imbros',
      title: 'History of Mehmed the Conqueror',
      year: 1467,
      detail: 'Trad. de Charles T. Riggs, Princeton University Press, 1954',
      note: 'Un griego escribiendo para el sultán. Sistemáticamente favorable a Mehmed, lo que lo hace la mejor fuente sobre las intenciones otomanas y la más floja sobre la conducta otomana.',
    },
    {
      id: 'runciman-1965',
      kind: 'book',
      author: 'Steven Runciman',
      title: 'The Fall of Constantinople 1453',
      year: 1965,
      detail: 'Cambridge University Press. ISBN 978-0-521-39832-9',
      note: 'La narración de referencia en inglés durante dos generaciones, y todavía el relato más claro de la diplomacia y de la unión de las iglesias que hay detrás del asedio.',
    },
    {
      id: 'crowley-2005',
      kind: 'book',
      author: 'Roger Crowley',
      title: 'Constantinople: The Last Great Siege, 1453',
      year: 2005,
      detail: 'Faber & Faber; publicado en Estados Unidos como «1453». ISBN 978-0-571-22185-1',
      note: 'La historia narrativa del asedio en sí, más fuerte en la artillería, el puerto y el combate día a día.',
    },
    {
      id: 'philippides-hanak-2011',
      kind: 'book',
      author: 'Marios Philippides and Walter K. Hanak',
      title: 'The Siege and the Fall of Constantinople in 1453: Historiography, Topography and Military Studies',
      year: 2011,
      detail: 'Ashgate. ISBN 978-1-4094-1064-5',
      note: 'El aparato erudito: qué fuentes son de testigo, cuáles posteriores, qué cifras se sostienen y qué detalles famosos no.',
    },
  ],
}
