/**
 * The map in Spanish.
 *
 * Only the words move. Node ids, kinds, eras, years, story links, edge
 * directions and relations all live once, in `../graph.ts`, because they are
 * the shape of the map rather than its language — and because a Spanish reader
 * following a chain and an English reader following the same chain have to end
 * up in the same place. `check-content.mjs` fails if any node or edge here is
 * missing, extra, or pointing at something that does not exist.
 */

export const NODE_ES: Record<string, { label: string; blurb: string }> = {
  'opium-wars': {
    label: 'Las Guerras del Opio',
    blurb: 'Dos guerras que libró Gran Bretaña para seguir vendiendo una droga a un país que la había prohibido.',
  },
  'british-empire': {
    label: 'El Imperio británico',
    blurb: 'En su apogeo gobernaba a una cuarta parte de la humanidad, y funcionaba con comercio antes que con ejércitos.',
  },
  'industrial-revolution': {
    label: 'La Revolución Industrial',
    blurb: 'El momento en que el músculo humano dejó de ser la principal fuente de energía del mundo.',
  },
  'steam-engine': {
    label: 'La máquina de vapor',
    blurb: 'Una máquina que convertía carbón ardiendo en movimiento — y abarató la distancia.',
  },
  'tea-trade': {
    label: 'El comercio del té',
    blurb: 'Gran Bretaña bebió hasta meterse en una crisis monetaria. El té era la razón por la que la plata se marchaba.',
  },
  'east-india-company': {
    label: 'La Compañía de las Indias Orientales',
    blurb: 'Una empresa privada con su propio ejército, su propia armada y, durante un tiempo, su propio imperio.',
  },
  india: {
    label: 'La India bajo la Compañía',
    blurb: 'El subcontinente cuya tierra, campesinos e impuestos pagaron una guerra comercial al otro lado de Asia.',
  },
  'mughal-empire': {
    label: 'El Imperio mogol',
    blurb: 'El Estado más rico de la tierra en 1700, y una cáscara vacía en 1800.',
  },
  'battle-of-plassey': {
    label: 'La batalla de Plassey',
    blurb: 'Una batalla desigual en 1757 que entregó a una compañía comercial la recaudación de Bengala.',
  },
  'opium-trade': {
    label: 'El comercio del opio',
    blurb: 'Cultivado en la India, vendido en China, prohibido en China, y durante décadas el mayor comercio de mercancías del mundo.',
  },
  'qing-dynasty': {
    label: 'La dinastía Qing',
    blurb: 'La última dinastía china: enorme, segura de sí misma y sin preparación para los cañoneros de vapor.',
  },
  'canton-system': {
    label: 'El sistema de Cantón',
    blurb: 'Un solo puerto, mercaderes con licencia, reglas estrictas — la manera china de comerciar con Europa en sus propios términos.',
  },
  'lin-zexu': {
    label: 'Lin Zexu',
    blurb: 'El funcionario que destruyó mil toneladas de opio y escribió a la reina Victoria preguntándole cómo podía permitirlo.',
  },
  'spanish-silver': {
    label: 'La plata americana',
    blurb: 'Montañas de plata americana fluyeron hacia China durante dos siglos. Cuando el flujo se frenó, todo cambió de sitio.',
  },
  mercantilism: {
    label: 'El mercantilismo',
    blurb: 'La idea de que un país gana acumulando metal precioso — y de que el comercio es una pelea, no un intercambio.',
  },
  'free-trade': {
    label: 'El libre comercio',
    blurb: 'El argumento de que abrir mercados enriquece a todos, usado tanto para tumbar aranceles como para justificar una guerra por el opio.',
  },
  'treaty-of-nanking': {
    label: 'El Tratado de Nankín',
    blurb: 'El tratado de 1842 que abrió cinco puertos chinos, fijó una indemnización y entregó Hong Kong a Gran Bretaña.',
  },
  'hong-kong': {
    label: 'Hong Kong',
    blurb: 'Una isla rocosa que no quería nadie, tomada como puerto, que acabó siendo una de las ciudades más ricas del mundo.',
  },
  'unequal-treaties': {
    label: 'Los tratados desiguales',
    blurb: 'Un siglo de acuerdos que China firmó tras perder guerras, cada uno llevándose un poco más de soberanía.',
  },
  'century-of-humiliation': {
    label: 'El Siglo de la Humillación',
    blurb: 'Así llama la China actual al periodo de 1839 a 1949 — y por eso ese nombre sigue marcando su política exterior.',
  },
  'modern-china': {
    label: 'La China actual',
    blurb: 'Un Estado que empieza a contar su propia historia en el momento en que llegó el opio.',
  },
  'al-khwarizmi': {
    label: 'Al-Juarismi',
    blurb: 'Un sabio de Bagdad cuyo nombre se convirtió en la palabra «algoritmo» y el título de cuyo libro se convirtió en «álgebra».',
  },
  algebra: {
    label: 'El álgebra',
    blurb: 'El salto de resolver *este* problema a resolver *todos los problemas de esta forma*.',
  },
  algorithm: {
    label: 'El algoritmo',
    blurb: 'Una receta tan exacta que seguirla no exige entenderla — y por eso puede seguirla una máquina.',
  },
  'hindu-arabic-numerals': {
    label: 'Los números indoarábigos',
    blurb: 'Diez símbolos, valor posicional y un cero: la notación que puso la aritmética al alcance de cualquiera.',
  },
  brahmagupta: {
    label: 'Brahmagupta',
    blurb: 'El matemático indio que en 628 escribió las reglas para calcular con el cero y con los números negativos.',
  },
  'house-of-wisdom': {
    label: 'La Casa de la Sabiduría',
    blurb: 'La biblioteca y el taller de traducción de Bagdad — más pequeña y más rara que la leyenda, y más importante de lo que la leyenda necesita.',
  },
  'abbasid-caliphate': {
    label: 'El califato abasí',
    blurb: 'El imperio que decidió, como política de Estado, traducir al árabe el saber del mundo.',
  },
  baghdad: {
    label: 'Bagdad',
    blurb: 'Una ciudad perfectamente redonda levantada de la nada en 762, y durante dos siglos la mayor del mundo.',
  },
  'translation-movement': {
    label: 'El movimiento de traducción',
    blurb: 'Dos siglos de trabajo pagado por el Estado volcando al árabe la ciencia griega, persa y sánscrita.',
  },
  'islamic-golden-age': {
    label: 'La Edad de Oro islámica',
    blurb: 'Los siglos en que el sitio más rápido para aprender cualquier cosa estaba entre Córdoba y Samarcanda.',
  },
  'paper-making': {
    label: 'El papel',
    blurb: 'Una superficie barata para escribir, llegada de China. Copiar ideas costó menos, así que sobrevivieron más.',
  },
  'hellenistic-science': {
    label: 'La ciencia griega',
    blurb: 'Euclides, Ptolomeo, Galeno — una obra que sobrevivió sobre todo porque otros decidieron copiarla.',
  },
  'mongol-invasion': {
    label: 'La invasión mongola de Bagdad',
    blurb: 'En 1258 la ciudad cayó en trece días. Qué le hizo eso a la ciencia islámica todavía se discute.',
  },
  'toledo-translations': {
    label: 'La escuela de traductores de Toledo',
    blurb: 'En la España del siglo XII, cristianos, musulmanes y judíos vertieron la ciencia árabe al latín, y Europa empezó a alcanzar al resto.',
  },
  fibonacci: {
    label: 'Fibonacci',
    blurb: 'El hijo de un mercader pisano que aprendió aritmética árabe en el norte de África y la vendió a Europa como herramienta de negocio.',
  },
  'double-entry-bookkeeping': {
    label: 'La partida doble',
    blurb: 'Anota cada movimiento dos veces y los libros detectan sus propios errores. Las empresas modernas se levantan sobre eso.',
  },
  'printing-press': {
    label: 'La imprenta',
    blurb: 'Tipos móviles en Europa hacia 1440: el coste de una copia se desplomó, y con él el control sobre lo que la gente leía.',
  },
  'european-renaissance': {
    label: 'El Renacimiento europeo',
    blurb: 'Europa redescubriendo el saber clásico — buena parte del cual volvía a través del árabe.',
  },
  'vlad-tepes': {
    label: 'Vlad Țepeș',
    blurb: 'El Drácula real: un príncipe que sostuvo un país pequeño frente a un imperio, y cuyos enemigos se quedaron con la pluma.',
  },
  wallachia: {
    label: 'Valaquia',
    blurb: 'Un pequeño principado encajado entre dos imperios, donde un príncipe duraba unos dos años.',
  },
  'ottoman-empire': {
    label: 'El Imperio otomano',
    blurb: 'Seis siglos en tres continentes, y durante buena parte de ellos el Estado más poderoso de Europa.',
  },
  'mehmed-ii': {
    label: 'Mehmed II',
    blurb: 'Tomó Constantinopla a los veintiuno, y se dice que a los treinta dio media vuelta ante un campo de estacas.',
  },
  'fall-of-constantinople': {
    label: 'La caída de Constantinopla',
    blurb: 'En 1453 las murallas que habían aguantado mil años cayeron ante la pólvora, y se acabó una época.',
  },
  'order-of-the-dragon': {
    label: 'La Orden del Dragón',
    blurb: 'Una orden de caballería jurada contra los otomanos. Entrar en ella le dio a una familia el apellido que el mundo recuerda.',
  },
  'radu-cel-frumos': {
    label: 'Radu el Hermoso',
    blurb: 'El hermano menor de Vlad, criado en la misma corte otomana — y devuelto para ocupar su trono.',
  },
  'matthias-corvinus': {
    label: 'Matías Corvino',
    blurb: 'Rey de Hungría, que cobró dinero para una cruzada, no cruzó, y necesitaba a quién culpar.',
  },
  'dracula-pamphlets': {
    label: 'Los panfletos de Drácula',
    blurb: 'Relatos impresos de atrocidades sobre un príncipe extranjero — de los primeros superventas de masas de Europa.',
  },
  'dracula-novel': {
    label: 'El Drácula de Stoker',
    blurb: 'La novela de 1897 que hizo un vampiro con un nombre que su autor encontró en la nota a pie de página de un libro.',
  },
  'bram-stoker': {
    label: 'Bram Stoker',
    blurb: 'Un gerente de teatro en Londres que necesitaba un nombre mejor que «conde Wampyr».',
  },
  'guatemala-coup': {
    label: 'El golpe de Guatemala',
    blurb: 'En 1954 una empresa frutera, un publicista y la CIA acabaron con el experimento democrático de diez años de un país.',
  },
  'united-fruit': {
    label: 'La United Fruit Company',
    blurb: 'Los guatemaltecos la llamaban El Pulpo. Tenía el ferrocarril, el puerto, el telégrafo y casi toda la tierra cultivable.',
  },
  guatemala: {
    label: 'Guatemala',
    blurb: 'Un país cuyos diez años de democracia quedan entre un dictador y cuarenta años de guerra.',
  },
  'jacobo-arbenz': {
    label: 'Jacobo Árbenz',
    blurb: 'Elegido presidente en 1951 con la promesa de hacer de Guatemala un país capitalista moderno. Derribado por intentarlo.',
  },
  'decree-900': {
    label: 'El Decreto 900',
    blurb: 'Una reforma agraria que compraba las fincas sin cultivar al valor que sus dueños habían declarado a Hacienda. Ese era el problema.',
  },
  cia: {
    label: 'La CIA',
    blurb: 'Cuatro años después de Guatemala seguía usando el mismo manual, y la operación tenía nombre: PBSUCCESS.',
  },
  'edward-bernays': {
    label: 'Edward Bernays',
    blurb: 'Sobrino de Freud, autoproclamado padre de las relaciones públicas y hombre de la United Fruit en la prensa estadounidense.',
  },
  'public-relations': {
    label: 'Las relaciones públicas',
    blurb: 'La fabricación deliberada del consentimiento — inventada como profesión, y probada sobre un país.',
  },
  'banana-republic': {
    label: '«República bananera»',
    blurb: 'Una expresión que acuñó un novelista huyendo de una causa por fraude, cincuenta años antes del golpe que ahora describe.',
  },
  'cold-war': {
    label: 'La Guerra Fría',
    blurb: 'El marco que convirtió cualquier discusión local sobre tierra o salarios en una pregunta sobre de qué lado estabas.',
  },
  'guatemalan-civil-war': {
    label: 'La guerra civil guatemalteca',
    blurb: 'Treinta y seis años, unos 200.000 muertos y una comisión de la verdad que usó la palabra genocidio.',
  },
  'harry-markopolos': {
    label: 'Harry Markopolos',
    blurb: 'Un analista financiero que demostró en una tarde que Bernie Madoff era un fraude, y pasó nueve años sin que nadie le hiciera caso.',
  },
  'madoff-fraud': {
    label: 'El fraude de Madoff',
    blurb: 'El mayor esquema Ponzi de la historia — y uno que un solo analista llevaba años denunciando ante el regulador.',
  },
  'bernie-madoff': {
    label: 'Bernie Madoff',
    blurb: 'Un expresidente del NASDAQ cuya respetabilidad era el disfraz. Nunca operó; solo cogía el dinero.',
  },
  sec: {
    label: 'La SEC',
    blurb: 'El regulador bursátil estadounidense, que examinó a Madoff una y otra vez y lo absolvió todas las veces.',
  },
  'ponzi-scheme': {
    label: 'El esquema Ponzi',
    blurb: 'Pagar a los inversores viejos con el dinero de los nuevos. Parece genialidad hasta que el dinero nuevo se acaba.',
  },
  'charles-ponzi': {
    label: 'Charles Ponzi',
    blurb: 'Un estafador de Boston cuyo montaje de 1920 con cupones postales fue tan sonado que dio nombre a la estructura.',
  },
  nasdaq: {
    label: 'NASDAQ',
    blurb: 'El mercado electrónico que Madoff ayudó a construir y presidió brevemente — la credencial que lo hizo incuestionable.',
  },
  'financial-crisis-2008': {
    label: 'La crisis financiera de 2008',
    blurb: 'El desplome que hizo que los inversores asustados pidieran su dinero — y descubrieran que no había.',
  },

  /* ------------------------------------------- la batalla perfecta ---- */
  'battle-of-cannae': {
    label: 'La batalla de Cannas',
    blurb: 'Una tarde de agosto del 216 a. C., y todavía el día más mortífero que ha tenido nunca un ejército europeo.',
  },
  hannibal: {
    label: 'Aníbal Barca',
    blurb: 'Venció a Roma en el campo durante quince años sin poder vencer nunca a Roma.',
  },
  carthage: {
    label: 'Cartago',
    blurb: 'Una ciudad comercial de la costa norteafricana que era dueña del Mediterráneo occidental, hasta que dejó de existir.',
  },
  'roman-republic': {
    label: 'La República romana',
    blurb: 'Un Estado cuya arma de verdad no era su ejército, sino su negativa a aceptar que había perdido uno.',
  },
  'second-punic-war': {
    label: 'La Segunda Guerra Púnica',
    blurb: 'Diecisiete años que decidieron qué ciudad mandaría en el Mediterráneo durante los seiscientos siguientes.',
  },
  polybius: {
    label: 'Polibio',
    blurb: 'Un rehén griego en Roma que escribió la guerra como un problema de causas y efectos, no como una lista de héroes.',
  },
  'double-envelopment': {
    label: 'El doble envolvimiento',
    blurb: 'Deja que el enemigo entre solo en la bolsa, y ciérrala. Todas las academias militares del mundo siguen estudiando esa tarde.',
  },
  'fabian-strategy': {
    label: 'La estrategia fabiana',
    blurb: 'Rechaza la batalla que perderías y sigue existiendo hasta que el otro no pueda. Lleva el nombre del hombre del que Roma se burló por hacerlo.',
  },
  'scipio-africanus': {
    label: 'Escipión el Africano',
    blurb: 'Un oficial joven que sobrevivió a la matanza, pasó catorce años aprendiendo de ella y se la aplicó a su inventor.',
  },
  'battle-of-zama': {
    label: 'La batalla de Zama',
    blurb: 'En el 202 a. C. Aníbal perdió por fin una batalla, en África, contra un hombre que de muchacho había estado en Cannas.',
  },

  /* ------------------------------------------- caen las murallas ---- */
  'byzantine-empire': {
    label: 'El Imperio bizantino',
    blurb: 'La mitad del Imperio romano que no cayó en el 476, y que siguió llamándose romana otros mil años.',
  },
  constantinople: {
    label: 'Constantinopla',
    blurb: 'Durante mil años la ciudad más grande, rica y mejor defendida de la cristiandad; en 1453, sobre todo huertos.',
  },
  'theodosian-walls': {
    label: 'Las murallas teodosianas',
    blurb: 'Una triple línea de piedra terminada en el 413 que rechazó a todos los ejércitos que fueron a por ella durante mil años.',
  },
  'siege-cannon': {
    label: 'El cañón de asedio',
    blurb: 'Artillería de pólvora lo bastante grande como para que la altura y el grosor dejaran de contar — y los castillos de piedra, de servir.',
  },
  'constantine-xi': {
    label: 'Constantino XI Paleólogo',
    blurb: 'El último emperador romano, al frente de una ciudad que no podía llenar y de unas murallas que no podía guarnecer.',
  },

  /* -------------------------------------------- lo que cuesta una copia ---- */
  gutenberg: {
    label: 'Johannes Gutenberg',
    blurb: 'Un orfebre de Maguncia que no inventó la imprenta, y sí inventó la manera de fabricar letras idénticas a millares.',
  },
  'movable-type': {
    label: 'Los tipos móviles',
    blurb: 'Letras fundidas una a una y recompuestas en la página que quieras — inventadas en Asia, industrializadas en Maguncia.',
  },
  'textual-fixity': {
    label: 'El texto fijo',
    blurb: 'Cuando todas las copias dicen lo mismo, puedes citar un número de página — y un error pasa a ser corregible en vez de eterno.',
  },
  reformation: {
    label: 'La Reforma',
    blurb: 'La discusión que partió el cristianismo occidental, y la primera que se libró en panfletos baratos comprados por gente corriente.',
  },
  'martin-luther': {
    label: 'Martín Lutero',
    blurb: 'Un monje con una queja sobre las indulgencias que resultó ser el primer autor de la era del gran público.',
  },

  /* --------------------------------------------- una frase por segundo ---- */
  'transatlantic-cable': {
    label: 'El cable transatlántico',
    blurb: 'Desde 1866, un mensaje cruzaba el Atlántico en minutos y no en diez días. Después, nada relativo a la distancia significaba lo mismo.',
  },
  telegraph: {
    label: 'El telégrafo eléctrico',
    blurb: 'La primera vez que un mensaje pudo viajar más rápido que quien lo llevaba, cosa que había sido cierta durante toda la historia anterior.',
  },
  'cyrus-field': {
    label: 'Cyrus West Field',
    blurb: 'Un comerciante de papel retirado que no sabía nada de ciencia, y dedicó doce años y cuatro fracasos a cruzar un océano con un cable.',
  },
  'great-eastern': {
    label: 'El Great Eastern',
    blurb: 'El descomunal fracaso de barco de pasajeros de Brunel, y el único casco del mundo capaz de cargar un océano de cable.',
  },
  'william-thomson': {
    label: 'William Thomson (lord Kelvin)',
    blurb: 'El físico que explicó por qué un cable largo emborrona la señal, y luego construyó el instrumento capaz de leer el borrón.',
  },

  /* ---------------------------------------------- el mito de la biblioteca ---- */
  'library-of-alexandria': {
    label: 'La Biblioteca de Alejandría',
    blurb: 'La biblioteca más famosa de la historia, y aquella cuya destrucción casi con seguridad no ocurrió como te la contaron.',
  },
  alexandria: {
    label: 'Alejandría',
    blurb: 'Una ciudad griega en una costa egipcia, construida para ser la capital de un Mediterráneo que antes de ella no existía.',
  },
  'ptolemaic-egypt': {
    label: 'El Egipto ptolemaico',
    blurb: 'Tres siglos de faraones griegos que financiaron la erudición por prestigio de Estado, hasta que dejaron de hacerlo.',
  },
  eratosthenes: {
    label: 'Eratóstenes',
    blurb: 'Bibliotecario jefe en Alejandría, que midió el tamaño de la tierra con un palo, un pozo y un rato de aritmética.',
  },
  'julius-caesar': {
    label: 'Julio César',
    blurb: 'Atrapado en Alejandría en el 48 a. C. con pocas fuerzas, prendió fuego al puerto — y cargó con una biblioteca durante dos mil años.',
  },

  /* ------------------------------------------- cuando cayó todo ---- */
  'bronze-age-collapse': {
    label: 'El colapso del Bronce Final',
    blurb: 'En unos cincuenta años, hacia el 1200 a. C., casi todos los reinos del Mediterráneo oriental dejaron de existir.',
  },
  'sea-peoples': {
    label: 'Los Pueblos del Mar',
    blurb: 'Un nombre que los escribas egipcios dieron a unos enemigos llegados en barco. Si fueron causa o síntoma del colapso todavía se discute.',
  },
  'hittite-empire': {
    label: 'El Imperio hitita',
    blurb: 'Una de las grandes potencias de la época, con una capital de puertas de piedra y archivos, abandonada tan del todo que se olvidó tres mil años.',
  },
  ugarit: {
    label: 'Ugarit',
    blurb: 'Un puerto sirio rico que ardió hacia el 1190 a. C. y dejó sus últimas cartas entre las ruinas para que las leamos.',
  },
  'mycenaean-greece': {
    label: 'La Grecia micénica',
    blurb: 'Reinos palaciales con escritura contable, burocracia y una historia sobre Troya — y todo eso se detuvo a la vez.',
  },
  'greek-dark-age': {
    label: 'La Edad Oscura griega',
    blurb: 'Cuatro siglos en los que Grecia olvidó cómo escribir, cómo construir en piedra y cómo hacer nada que un palacio hubiera querido.',
  },
  phoenicia: {
    label: 'Fenicia',
    blurb: 'Las ciudades portuarias del Levante que sobrevivieron al colapso y heredaron un Mediterráneo sin nadie a quien rendir cuentas.',
  },
  'phoenician-alphabet': {
    label: 'El alfabeto',
    blurb: 'Veintidós signos que un mercader aprendía en una semana, en vez de cientos que solo un escriba de palacio podía permitirse dominar.',
  },
  'iron-working': {
    label: 'El hierro',
    blurb: 'Al principio peor que el bronce, y en todas partes. Ganó porque dejaron de funcionar las rutas que traían el estaño.',
  },

  /* ------------------------------------------------- lávate las manos ---- */
  semmelweis: {
    label: 'Ignaz Semmelweis',
    blurb: 'Redujo la mortalidad de su sala un noventa por ciento en un mes, y por ello lo apartaron, lo ridiculizaron y lo internaron.',
  },
  'puerperal-fever': {
    label: 'La fiebre puerperal',
    blurb: 'La infección que mataba a las mujeres en las maternidades a un ritmo que habría cerrado cualquier otro edificio de la ciudad.',
  },
  handwashing: {
    label: 'El lavado de manos',
    blurb: 'Cal clorada, veinte segundos, antes de tocar a una paciente. Funcionó dos décadas antes de que nadie pudiera explicar por qué.',
  },
  'vienna-general-hospital': {
    label: 'El Hospital General de Viena',
    blurb: 'El mayor hospital docente de Europa, cuyas dos maternidades solo se diferenciaban en quién asistía los partos — y en cuántas mujeres morían.',
  },
  'institutional-denial': {
    label: 'El aviso ignorado',
    blurb: 'La forma que se repite: alguien tiene razón pronto, con pruebas y por escrito — y lo rechazan por lo que costaría creerle.',
  },
  'germ-theory': {
    label: 'La teoría microbiana',
    blurb: 'Las enfermedades las causan seres vivos demasiado pequeños para verlos. Aceptado eso, hubo que reconstruir casi toda la medicina.',
  },
  'joseph-lister': {
    label: 'Joseph Lister',
    blurb: 'Hizo lo mismo que Semmelweis veinte años después y le creyeron, porque para entonces ya podía decir qué estaba matando.',
  },

  /* ------------------------------------------------ la historia del moho ---- */
  penicillin: {
    label: 'La penicilina',
    blurb: 'Una placa contaminada en 1928, un medicamento en 1941, y la razón de que un arañazo dejara de ser una forma de morir.',
  },
  'alexander-fleming': {
    label: 'Alexander Fleming',
    blurb: 'Vio el moho, lo publicó, no consiguió convertirlo en medicina y se llevó casi todo el mérito.',
  },
  'oxford-team': {
    label: 'El equipo de Oxford',
    blurb: 'Florey, Chain y Heatley, que pasaron tres años convirtiendo una curiosidad de revista en algo que podías inyectar.',
  },
  antibiotics: {
    label: 'Los antibióticos',
    blurb: 'Fármacos que matan bacterias sin matarte a ti. Han añadido años a la vida humana media más rápido que ninguna otra cosa.',
  },
  'antibiotic-resistance': {
    label: 'La resistencia a los antibióticos',
    blurb: 'Las bacterias evolucionan. El hombre que encontró la penicilina lo dijo en su discurso Nobel, en 1945, y describió exactamente cómo lo provocaríamos.',
  },
}

export const EDGE_NOTE_ES: Record<string, string> = {
  'industrial-revolution>british-empire':
    'Las fábricas necesitaban materias primas que entraran y compradores que salieran, y el imperio ponía las dos cosas.',
  'steam-engine>industrial-revolution':
    'La energía dejó de depender de ríos, viento y músculo, así que una fábrica podía levantarse en cualquier sitio.',
  'british-empire>tea-trade':
    'El té pagaba fuertes impuestos en casa; ese arancel era una tajada real de los ingresos del Estado británico.',
  'tea-trade>spanish-silver':
    'China vendía té y quería plata a cambio, así que la plata se drenaba hacia el este año tras año.',
  'tea-trade>opium-trade':
    'Gran Bretaña necesitaba algo que China comprase. El opio fue la respuesta que encontró.',
  'east-india-company>tea-trade':
    'La Compañía tuvo el monopolio legal del comercio británico con China hasta 1834.',
  'battle-of-plassey>east-india-company':
    'Ganar en Plassey en 1757 convirtió a una compañía comercial en el recaudador de Bengala.',
  'mughal-empire>india':
    'A medida que la autoridad mogol se fragmentaba, la Compañía ocupó el hueco provincia a provincia.',
  'east-india-company>india':
    'Hacia 1800 una empresa privada gobernaba a decenas de millones de personas y daba licencia a sus tierras.',
  'india>opium-trade':
    'Campesinos con licencia de la Compañía cultivaban la adormidera en Bengala y Bihar; la Compañía subastaba los cajones en Calcuta.',
  'opium-trade>opium-wars':
    'China había prohibido el opio desde 1729 y no lograba frenar el contrabando. La aplicación de la ley acabó topándose con una armada.',
  'canton-system>opium-trade':
    'Un único puerto legal y ninguna vía legal de entrada para los productos británicos empujaron el comercio a las rutas de contrabando.',
  'qing-dynasty>canton-system':
    'Los Qing fijaban las condiciones del comercio exterior y, durante un siglo, todo el mundo las aceptó.',
  'lin-zexu>opium-wars':
    'Su incautación y destrucción de 20.283 cajones en 1839 fue el acto que Gran Bretaña tomó como casus belli.',
  'qing-dynasty>lin-zexu':
    'El emperador Daoguang lo envió a Cantón como comisionado imperial con la orden de acabar con el comercio.',
  'mercantilism>tea-trade':
    'Un déficit comercial parecía una herida nacional y no una preferencia, lo que hacía el desequilibrio intolerable.',
  'free-trade>opium-wars':
    'La guerra se defendió en el Parlamento como defensa del comercio abierto, no como defensa del opio.',
  'opium-wars>treaty-of-nanking':
    'El tratado de 1842 cerró la primera guerra en los términos británicos, y el opio no se mencionaba en él ni una vez.',
  'treaty-of-nanking>hong-kong':
    'La isla de Hong Kong se cedió sin más — un puerto de aguas profundas que Gran Bretaña podía tener sin pedirle permiso a nadie.',
  'treaty-of-nanking>unequal-treaties':
    'Fijó la plantilla: indemnización, puertos abiertos y extranjeros exentos de la ley china.',
  'unequal-treaties>century-of-humiliation':
    'Cien años de concesiones se convirtieron en un único relato nacional con nombre propio.',
  'century-of-humiliation>modern-china':
    'Los libros de texto chinos y el discurso oficial siguen empezando la era moderna en 1839, no en 1911 ni en 1949.',
  'hong-kong>modern-china':
    'La entrega de 1997 se presentó en casa como el cierre de la herida abierta en 1842.',
  'abbasid-caliphate>baghdad':
    'Al-Mansur fundó en 762 una nueva capital circular para que fuera el centro del imperio que estaba construyendo.',
  'abbasid-caliphate>translation-movement':
    'Califas, cortesanos y familias ricas pagaron traducciones a precio de mercado durante unos dos siglos.',
  'paper-making>translation-movement':
    'El papel llegó al mundo islámico desde China e hizo de copiar un libro algo asequible.',
  'hellenistic-science>translation-movement':
    'Obras griegas sobrevivieron en traducción árabe, y algunas hoy no existen en ninguna otra versión.',
  'translation-movement>house-of-wisdom':
    'La Bayt al-Ḥikma fue donde se reunió, copió y consultó buena parte de ese material.',
  'house-of-wisdom>al-khwarizmi':
    'Trabajó en el mundo erudito abasí de Bagdad bajo al-Ma’mūn.',
  'brahmagupta>hindu-arabic-numerals':
    'En 628 estableció reglas para el cero y para los negativos como números, no como ausencias.',
  'hindu-arabic-numerals>al-khwarizmi':
    'Escribió el libro que llevó la aritmética decimal india al mundo de habla árabe.',
  'al-khwarizmi>algebra':
    'Al-yabr —«restaurar»— era una de sus dos operaciones, y le dio nombre a la disciplina.',
  'al-khwarizmi>algorithm':
    'Los lectores latinos llamaron a su método «Algoritmi», y la palabra sobrevivió a todo recuerdo del hombre.',
  'islamic-golden-age>al-khwarizmi':
    'Es la figura más conocida de un periodo que produjo cientos como él.',
  'baghdad>islamic-golden-age':
    'Durante dos siglos fue la mayor ciudad del mundo, y la erudición siguió al dinero y a los mecenas.',
  'mongol-invasion>baghdad':
    'El ejército de Hulagu tomó la ciudad en febrero de 1258 y mató al califa.',
  'mongol-invasion>islamic-golden-age':
    'La versión cómoda dice que la ciencia murió en 1258. Los historiadores discrepan cada vez más — mira la historia.',
  'toledo-translations>european-renaissance':
    'Versiones árabes de ciencia griega y árabe se vertieron al latín y se leyeron por toda Europa.',
  'algebra>toledo-translations':
    'El álgebra de al-Juarismi llegó a los lectores latinos por Roberto de Chester y Gerardo de Cremona.',
  'fibonacci>hindu-arabic-numerals':
    'El Liber Abaci (1202) vendió los nuevos números a los mercaderes con problemas resueltos de pérdidas y ganancias.',
  'hindu-arabic-numerals>double-entry-bookkeeping':
    'Columnas de cifras que puedes sumar deprisa son la condición previa para cuadrar un libro siquiera.',
  'double-entry-bookkeeping>east-india-company':
    'Una sociedad por acciones con miles de accionistas necesita libros auditables. Aquí es donde se juntan las dos cadenas.',
  'printing-press>european-renaissance':
    'Los textos recuperados dejaron de ser objetos raros y pasaron a ser algo que un estudiante podía tener.',
  'european-renaissance>industrial-revolution':
    'Una línea larga, no corta — pero la costumbre de medir y publicar empieza aquí.',
  'vlad-tepes>wallachia':
    'Tres reinados separados, unos siete años en total. El del medio es el de los seis años famosos.',
  'ottoman-empire>wallachia':
    'No ocupada sino hecha tributaria — paga, manda hijos como rehenes y quédate con tu príncipe.',
  'order-of-the-dragon>vlad-tepes':
    'Su padre entró en ella y tomó el nombre de Dracul, el dragón. Drăculea significa hijo del dragón.',
  'ottoman-empire>vlad-tepes':
    'Pasó la adolescencia como rehén en la corte otomana, garantizando la lealtad de su padre.',
  'ottoman-empire>radu-cel-frumos':
    'El hermano menor, rehén en la misma corte — que se quedó, se convirtió y ascendió.',
  'radu-cel-frumos>vlad-tepes':
    'En 1462 los otomanos le quitaron el trono a Vlad y se lo dieron al hermano criado a su lado.',
  'fall-of-constantinople>ottoman-empire':
    'Tomar la ciudad en 1453 convirtió a una gran potencia balcánica en heredera de Roma, con la seguridad que eso da.',
  'mehmed-ii>fall-of-constantinople':
    'Tenía veintiún años, y trajo cañones capaces de romper murallas de mil años.',
  'vlad-tepes>mehmed-ii':
    'En junio de 1462 entró de noche en el campamento otomano para matar al sultán en persona. Falló.',
  'matthias-corvinus>vlad-tepes':
    'Vlad huyó a Hungría a pedir ayuda y en su lugar pasó allí preso unos doce años.',
  'matthias-corvinus>dracula-pamphlets':
    'Había cobrado fondos de cruzada y no había cruzado. Un aliado monstruoso era una explicación útil.',
  'printing-press>dracula-pamphlets':
    'La imprenta barata tenía décadas y resultó que se le daba bien esto: la atrocidad, reimpresa.',
  'dracula-pamphlets>vlad-tepes':
    'Fijaron su reputación en la Europa de habla alemana durante quinientos años.',
  'bram-stoker>dracula-novel':
    'Había llamado a su villano conde Wampyr hasta que encontró un nombre mejor en un libro de biblioteca.',
  'dracula-novel>vlad-tepes':
    'Stoker cogió el nombre y el sentido de una nota al pie. El resto de la conexión se construyó en los años setenta.',
  'mongol-invasion>ottoman-empire':
    'El destrozo mongol de la Anatolia selyúcida dejó la frontera en la que creció el beylicato otomano.',
  'fall-of-constantinople>european-renaissance':
    'Eruditos y manuscritos griegos se movieron hacia el oeste después — un acelerante, sobre un fuego ya encendido.',
  'united-fruit>guatemala':
    'No el gobierno — el ferrocarril, el único puerto del Caribe, el telégrafo y casi toda la tierra aprovechable.',
  'jacobo-arbenz>decree-900':
    'Tierra sin cultivar por encima de un umbral, comprada por el Estado y pagada en bonos al valor que el propio dueño había declarado.',
  'decree-900>united-fruit':
    'La empresa llevaba años infravalorando su tierra para pagar menos impuestos. La indemnización se calculó con esos números.',
  'united-fruit>guatemala-coup':
    'Presionó a un Washington en el que el secretario de Estado y el director de la CIA habían trabajado para su bufete.',
  'edward-bernays>public-relations':
    'Lo llamó así a propósito, porque «propaganda» había dejado de ser una palabra usable después de 1918.',
  'edward-bernays>guatemala-coup':
    'Años de viajes de prensa y noticias colocadas hicieron que una reforma agraria se leyera en Estados Unidos como una cabeza de puente comunista.',
  'cold-war>guatemala-coup':
    'Puso el marco. Cualquier discusión local sobre tierra podía reformularse como una pregunta sobre bandos.',
  'cia>guatemala-coup':
    'PBSUCCESS: unos cientos de hombres, algunos aviones sin identificación y una emisora que fingía ser un ejército rebelde.',
  'guatemala-coup>guatemalan-civil-war':
    'La reforma se revirtió en menos de un año. La guerra que vino después duró treinta y seis.',
  'united-fruit>banana-republic':
    'La expresión es cincuenta años anterior al golpe — O. Henry la acuñó en 1904 hablando de Honduras.',
  'east-india-company>united-fruit':
    'No es un linaje — es una forma que se repite. Una empresa con la infraestructura de un país, y un gobierno dispuesto a mandar fuerza cuando cambian las condiciones.',
  'free-trade>united-fruit':
    'Mercados abiertos como argumento, esgrimido por quien ya era dueño de los puertos.',
  'dracula-pamphlets>public-relations':
    'Cuatro siglos de distancia, el mismo mecanismo: un autor interesado, un público receptivo y una tecnología de difusión que premia la versión extrema.',
  'bernie-madoff>madoff-fraud':
    'Durante años no hubo operación ninguna — solo dinero nuevo pagando a inversores viejos, y extractos impresos para que cuadrase.',
  'bernie-madoff>nasdaq':
    'Fue su presidente no ejecutivo a principios de los noventa. Esa credencial fue la razón de que nadie mirase dos veces.',
  'harry-markopolos>madoff-fraud':
    'Le pidieron que copiara los rendimientos de Madoff y lo que encontró fue que eran matemáticamente imposibles — y no lo soltó nunca.',
  'harry-markopolos>sec':
    'Cinco escritos desde el año 2000, incluido un informe de 2005 titulado «El mayor fondo de cobertura del mundo es un fraude».',
  'sec>harry-markopolos':
    'Examinó a Madoff una y otra vez y lo absolvió cada vez. Lo que faltó nunca fue el aviso.',
  'madoff-fraud>ponzi-scheme':
    'La estructura más vieja que hay, a una escala que nadie creía que algo tan simple pudiera alcanzar.',
  'charles-ponzi>ponzi-scheme':
    'Su timo de Boston en 1920 con cupones postales internacionales fue tan sonado que dio nombre a la idea entera.',
  'financial-crisis-2008>madoff-fraud':
    'Cuando los inversores asustados pidieron de vuelta unos siete mil millones de dólares, detrás de los extractos no había nada que mandar.',
  'public-relations>madoff-fraud':
    'No fue cosa de Bernays — pero era la misma moneda. A Madoff lo creyeron por quién era, no porque nadie comprobara los rendimientos.',

  /* ------------------------------------------- la batalla perfecta ---- */
  'carthage>hannibal':
    'Su familia explotaba las minas de plata del sur de Hispania, y el ejército que cruzó los Alpes salió pagado de allí.',
  'hannibal>second-punic-war':
    'La empezó él, tomando una ciudad hispana que Roma había declarado bajo su protección, y lo hizo a propósito.',
  'second-punic-war>battle-of-cannae':
    'Dos derrotas en dos años ya habían dejado a Roma lo bastante desesperada como para intentar lo único que Aníbal quería.',
  'hannibal>battle-of-cannae':
    'Eligió el terreno, la forma de su propia línea y el momento en que debía ceder.',
  'roman-republic>battle-of-cannae':
    'Ocho legiones, el mayor ejército que la República había puesto nunca en un solo campo, y la razón de que murieran tantos.',
  'hannibal>roman-republic':
    'Quince años dentro de Italia, sin perder allí una sola batalla campal, y sin poder tomar nunca la ciudad.',
  'battle-of-cannae>double-envelopment':
    'Schlieffen se pasó la carrera intentando repetirlo, y los ejércitos todavía llaman así a un cerco perfecto.',
  'battle-of-cannae>fabian-strategy':
    'Roma se había burlado del que retrasaba, dio la batalla a su manera y después volvió con él para siempre.',
  'polybius>battle-of-cannae':
    'Recorrió el terreno, preguntó a supervivientes de los dos bandos y escribió el relato con el que discute todo lo demás.',
  'hellenistic-science>polybius':
    'La costumbre griega de preguntar por qué pasó algo, en vez de enumerar a quién le pasó, es lo que él llevó a la historia romana.',
  'battle-of-cannae>scipio-africanus':
    'Era un oficial joven metido en la trampa y salió de ella. Catorce años después le cerró la misma trampa a Aníbal.',
  'scipio-africanus>battle-of-zama':
    'La única batalla que perdió Aníbal, ganada por un hombre que usó contra él su propio método.',
  'battle-of-zama>carthage':
    'Terminó la guerra: sin flota, sin ejército fuera de África y con una indemnización pagadera durante cincuenta años.',
  'roman-republic>carthage':
    'En el 146 a. C. la ciudad fue tomada, su gente vendida y el sitio dejado vacío. Eso no se llama derrota.',
  'roman-republic>byzantine-empire':
    'La mitad oriental sobrevivió mil años a la occidental y no dejó nunca de llamarse romana.',

  /* ------------------------------------------- caen las murallas ---- */
  'byzantine-empire>constantinople':
    'El imperio y la ciudad se habían encogido el uno dentro del otro: hacia 1450 uno era casi todo lo que quedaba del otro.',
  'theodosian-walls>constantinople':
    'Ávaros, árabes, búlgaros, rus y otomanos vinieron todos y se volvieron todos. Eso es aguantar mil años.',
  'constantine-xi>byzantine-empire':
    'El último emperador romano, coronado sobre una ciudad de huertos y ruinas con quizá cincuenta mil habitantes.',
  'constantine-xi>fall-of-constantinople':
    'Rechazó las condiciones que le habrían dejado salir vivo y murió en algún punto de la brecha con los suyos.',
  'mehmed-ii>siege-cannon':
    'Un fundidor húngaro llamado Orbán ofreció los cañones primero al emperador. El emperador no podía pagarlos; el sultán sí.',
  'siege-cannon>theodosian-walls':
    'No por ingenio. Porque hizo que el grosor y la altura dejaran de ser lo que decidía un asedio.',
  'siege-cannon>fall-of-constantinople':
    'Cincuenta y tres días de bombardeo hicieron lo que no habían logrado mil años de escalas, arietes y hambre.',
  'byzantine-empire>hellenistic-science':
    'Casi todo texto griego que hoy se lee sobrevive porque los escribas bizantinos siguieron copiándolo mil años.',
  'fall-of-constantinople>printing-press':
    'Los manuscritos griegos se fueron al oeste con sus dueños, y en cuarenta años las imprentas de Venecia los vendían.',

  /* -------------------------------------------- lo que cuesta una copia ---- */
  'movable-type>printing-press':
    'Corea imprimía libros con tipos de metal ya en 1377. Lo que añadió Maguncia fue una manera de fabricar las letras lo bastante rápido.',
  'gutenberg>movable-type':
    'El molde de mano: un punzón grabado, una matriz de cobre y luego tantas letras idénticas como metal puedas verter.',
  'paper-making>printing-press':
    'Una prensa necesita algo barato sobre lo que imprimir. El papel llevaba seiscientos años viajando desde China para estar allí.',
  'printing-press>textual-fixity':
    'Las copias dejaron de derivar. Ahora podías discutir citando una página, esperando que el otro tuviera delante las mismas palabras.',
  'printing-press>reformation':
    'Hus dijo casi lo mismo en 1415 y lo quemaron en silencio. Lutero lo dijo dentro de una máquina que hizo treinta mil copias.',
  'martin-luther>reformation':
    'Escribía corto, en alemán y para gente que no era erudita: el primer autor que entendió qué quería el medio nuevo.',
  'textual-fixity>double-entry-bookkeeping':
    'El método de Pacioli se difundió como manual impreso en 1494, idéntico en cada copia, que es el único modo de que un estándar lo sea.',

  /* --------------------------------------------- una frase por segundo ---- */
  'industrial-revolution>telegraph':
    'Los ferrocarriles necesitaban saber dónde estaban sus trenes, y pagaron los primeros cables tendidos junto a la vía.',
  'telegraph>transatlantic-cable':
    'Los cables terrestres ya habían hecho instantáneo un mensaje dentro de un país. El océano era el último hueco, y el más difícil.',
  'cyrus-field>transatlantic-cable':
    'Cuatro intentos fallidos y doce años sacando dinero a gente que ya le había visto perder el suyo.',
  'great-eastern>transatlantic-cable':
    'Demasiado grande para ganarse la vida con pasajeros, y el único casco del mundo capaz de llevar 4.000 kilómetros de cable de una vez.',
  'william-thomson>transatlantic-cable':
    'Demostró que un cable largo emborrona la señal en vez de debilitarla, y construyó un galvanómetro de espejo capaz de leer el borrón.',
  'telegraph>british-empire':
    'Hacia 1900 una orden salida de Londres llegaba el mismo día a Bombay, Ciudad del Cabo o Sídney, por cable de propiedad británica.',
  'transatlantic-cable>free-trade':
    'Los precios de Londres y Nueva York convergieron a los pocos días de abrirse, porque el arbitraje pasó a moverse más rápido que la mercancía.',

  /* ---------------------------------------------- el mito de la biblioteca ---- */
  'ptolemaic-egypt>library-of-alexandria':
    'Era un proyecto de prestigio estatal, y por eso funcionó — y por eso murió cuando el Estado dejó de pagarlo.',
  'library-of-alexandria>alexandria':
    'La ciudad se recuerda por un edificio del que nadie ha encontrado nunca los cimientos.',
  'eratosthenes>library-of-alexandria':
    'Bibliotecario jefe, y el hombre que midió la circunferencia de la tierra con pocos puntos de error desde un pozo de Asuán.',
  'julius-caesar>library-of-alexandria':
    'Su incendio del puerto en el 48 a. C. quemó libros. Si llegó a la Biblioteca es la pregunta sin resolver más vieja de esta historia.',
  'library-of-alexandria>hellenistic-science':
    'Euclides, Ptolomeo y Galeno nos llegan por las ediciones hechas y corregidas aquí, no por su propia mano.',
  'library-of-alexandria>house-of-wisdom':
    'No es un linaje: es una comparación que el atlas hace a propósito. Ambas son instituciones reales enterradas bajo una leyenda mucho mayor.',
  'ptolemaic-egypt>roman-republic':
    'Cleopatra fue la última de la línea. Roma anexionó Egipto en el 30 a. C. y heredó la provincia más rica que llegaría a tener.',
  'julius-caesar>roman-republic':
    'Estuvo sitiado en Alejandría en plena guerra civil que acabó con ella. Catorce años después había un emperador.',
  'byzantine-empire>alexandria':
    'La ciudad siguió siendo romana, y luego bizantina, seis siglos después de los Ptolomeos — y todavía discutía de teología cuando llegaron los árabes.',

  /* ------------------------------------------- cuando cayó todo ---- */
  'bronze-age-collapse>hittite-empire':
    'La capital se vació —archivos retirados, puertas tapiadas— y luego ardió. Eso se lee como una evacuación, no como un saqueo.',
  'bronze-age-collapse>mycenaean-greece':
    'Todos los palacios ardieron o quedaron abandonados en un par de generaciones, y la escritura se fue con ellos.',
  'bronze-age-collapse>ugarit':
    'La ciudad ardió hacia el 1190 a. C. y no volvió a ocuparse, y por eso sus últimas cartas diplomáticas siguen siendo legibles.',
  'sea-peoples>bronze-age-collapse':
    'La versión egipcia, tallada en el muro de un templo por el único rey que los venció. Si fueron causa o síntoma sigue sin resolverse.',
  'hittite-empire>ugarit':
    'Un puerto vasallo que pagaba tributo y mandaba tropas — incluidas, en su último año, las tropas que necesitaba en casa.',
  'hittite-empire>iron-working':
    'Trabajaban el hierro pronto y parece que lo mantuvieron escaso. Cuánto de monopolio fue aquello se discute.',
  'bronze-age-collapse>iron-working':
    'El bronce necesita estaño traído de miles de kilómetros. El mineral de hierro lo tienes bajo los pies. Muertas las rutas largas, ganó el metal local.',
  'bronze-age-collapse>greek-dark-age':
    'Grecia dejó de escribir unos cuatrocientos años. Homero se compone dentro de ese silencio, y sobre el mundo anterior a él.',
  'bronze-age-collapse>phoenicia':
    'Las ciudades portuarias que salieron adelante heredaron un mar sin grandes potencias, y se volvieron los comerciantes de la era siguiente.',
  'phoenicia>phoenician-alphabet':
    'Una escritura hecha para listas de carga y no para palacios, que es exactamente por lo que se extendió más allá de quienes la crearon.',
  'phoenician-alphabet>hellenistic-science':
    'El griego se escribe con letras fenicias prestadas. Todo lo escrito después en griego se apoya en la taquigrafía de un comerciante.',
  'phoenicia>carthage':
    'Tiro plantó una colonia en la costa norteafricana hacia el 814 a. C. Seis siglos después peleaba con Roma por el mar occidental.',
  'greek-dark-age>phoenician-alphabet':
    'Grecia salió del silencio volviendo a escribir — pero con el alfabeto de un mercader, no con el silabario palacial que había perdido.',

  /* ------------------------------------------------- lávate las manos ---- */
  'semmelweis>vienna-general-hospital':
    'Ayudante de la Primera Clínica Obstétrica desde 1846, donde moría cerca de una madre de cada diez y nadie sabía decir por qué.',
  'vienna-general-hospital>puerperal-fever':
    'Dos clínicas, una misma enfermedad, y una mortalidad tres veces mayor en aquella donde los médicos llegaban directos de la sala de autopsias.',
  'semmelweis>puerperal-fever':
    'Encontró la causa contando: dos salas, el mismo edificio, y la única diferencia real era de quién eran las manos que asistían el parto.',
  'semmelweis>handwashing':
    'Cal clorada antes de cada exploración. La mortalidad de su sala cayó de cerca del dieciocho por ciento a casi uno, en semanas.',
  'handwashing>puerperal-fever':
    'La detuvo. Nadie pudo explicar el mecanismo hasta veinte años después, y eso resultó ser el problema fatal.',
  'semmelweis>institutional-denial':
    'La prueba era una tabla de mortalidad que cualquiera podía leer. Aceptarla significaba aceptar que los médicos habían estado matando pacientes.',
  'institutional-denial>harry-markopolos':
    'La misma forma siglo y medio después: pruebas por escrito, entregadas una y otra vez, a un organismo que no podía permitirse creerlas.',
  'joseph-lister>handwashing':
    'La cirugía antiséptica desde 1867 hizo lo que había hecho Semmelweis y se aceptó, porque Lister sí podía nombrar lo que estaba matando.',
  'joseph-lister>germ-theory':
    'Leyó a Pasteur sobre la fermentación y se hizo la pregunta del cirujano: si unos seres vivos estropean el vino, ¿qué estropea las heridas?',
  'germ-theory>handwashing':
    'No el descubrimiento: la explicación. Una práctica que nadie sabía justificar pasó a ser una práctica que nadie podía discutir.',

  /* ------------------------------------------------ la historia del moho ---- */
  'germ-theory>penicillin':
    'No puedes buscar algo que mate bacterias hasta que aceptas que las bacterias son lo que está matando al paciente.',
  'alexander-fleming>penicillin':
    'Vio el anillo transparente alrededor del moho en 1928, lo publicó en 1929 y no logró sacar de ello un medicamento utilizable.',
  'oxford-team>penicillin':
    'Chain encontró el artículo, Heatley montó la extracción, Florey dirigió el ensayo. Tres años de la curiosidad a la inyección.',
  'penicillin>antibiotics':
    'No fue el primer antibacteriano —las sulfamidas llegaron antes—, pero sí el que hizo parecer posible toda la familia.',
  'antibiotics>puerperal-fever':
    'Lo que terminó de verdad con la fiebre puerperal no fue convencer a nadie del lavado de manos. Fue un fármaco que mataba al estreptococo.',
  'antibiotics>antibiotic-resistance':
    'Cada dosis selecciona a las bacterias que la sobreviven. Eso no es un mal uso de la tecnología: es cómo funciona la tecnología.',
  'alexander-fleming>antibiotic-resistance':
    'En su discurso Nobel de 1945 describió a un hombre comprando poca penicilina, tratándose de menos y criando una cepa resistente.',
}
