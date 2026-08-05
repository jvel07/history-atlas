import type { Story } from '../../types'

export const semmelweisEs: Story = {
  slug: 'semmelweis',
  title: 'Lávate las manos',
  subtitle: 'Viena, 1847 — bajó la mortalidad de su sala un noventa por ciento en un mes, y le costó todo.',
  hook: 'En una maternidad de Viena moría cerca de una madre de cada diez. En la sala de al lado, una de cada veinticinco. La única diferencia era quién se había lavado las manos.',
  era: 'industrial',
  category: 'discoveries',
  years: [1846, 1867],
  regions: ['Austria', 'Hungría', 'Reino Unido'],
  nodes: ['semmelweis', 'puerperal-fever', 'handwashing', 'vienna-general-hospital', 'institutional-denial'],
  tags: ['medicine', 'evidence', 'institutions', 'science', 'whistleblower', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'noir',

  reel: [
    { beat: 'hook', punch: true, text: 'Dos maternidades en un mismo edificio. En la primera moría cerca de una madre de cada diez.' },
    { beat: 'hook', text: 'En la segunda, una de cada veinticinco. Mismo edificio, misma ciudad, mismo año.' },
    { beat: 'worldBefore', kicker: 'Viena, 1846', text: 'Las mujeres lo saben. Suplican que las manden a la segunda clínica,' },
    { beat: 'worldBefore', text: 'y algunas paren en la calle antes que entrar en la primera —' },
    { beat: 'worldBefore', punch: true, text: 'y las que hacen eso sobreviven en mejor proporción que las que entran.' },
    { beat: 'problem', text: 'Todos tienen una teoría. El aire malo. El hacinamiento. El miedo. La campanilla del cura.' },
    { beat: 'problem', text: 'Un ayudante húngaro joven las va probando una por una,' },
    { beat: 'problem', punch: true, text: 'y todas mueren contra el mismo hecho. Las dos salas lo tienen. Solo una mata.' },
    { beat: 'story', text: 'La única diferencia real es quién asiste los partos.' },
    { beat: 'story', text: 'La segunda clínica forma comadronas. La primera forma estudiantes de medicina,' },
    { beat: 'story', punch: true, mark: 'chain', text: 'que llegan a las camas directos de la sala de autopsias, limpiándose las manos en la bata.' },
    { beat: 'story', kicker: '1847', text: 'Entonces un amigo suyo se corta con un bisturí en una autopsia y muere,' },
    { beat: 'story', text: 'y lo que se ve en su cuerpo es lo que se ve en las madres muertas.' },
    { beat: 'story', punch: true, text: 'No están cogiendo una enfermedad. Se la están dando.' },
    { beat: 'story', text: 'Manda poner cal clorada en la puerta. Lávate antes de tocar a nadie.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'Las muertes de la sala caen del dieciocho por ciento a cerca de uno, en dos meses.' },
    { beat: 'whyItHappened', text: 'Y ahí es donde se tuerce, porque no sabe decir por qué funciona.' },
    { beat: 'whyItHappened', text: 'A los microbios les faltan veinte años. Lo único que tiene es una tabla de números,' },
    { beat: 'whyItHappened', punch: true, text: 'y una conclusión a la que ningún médico de Europa quiere llegar. Lo llevábamos nosotros.' },
    { beat: 'whyItHappened', text: 'No le renuevan el contrato. Se va de Viena sin avisar a sus colegas.' },
    { beat: 'whyItHappened', mark: 'echo', text: 'Tarda catorce años en publicar, y luego escribe cartas abiertas llamándolos asesinos,' },
    { beat: 'whyItHappened', punch: true, text: 'lo cual es cierto, y le hace perder todas las discusiones que le quedaban.' },
    { beat: 'consequences', kicker: '1865', text: 'Lo internan en un manicomio, lo sujetan y los celadores le dan una paliza.' },
    { beat: 'consequences', text: 'Muere dos semanas después de una herida infectada. Tiene cuarenta y siete años.' },
    { beat: 'consequences', punch: true, text: 'Dos años más tarde Lister hace lo mismo en Glasgow, y lo nombran caballero.' },
    { beat: 'whyItMatters', text: 'La diferencia no fueron las pruebas. Semmelweis tenía pruebas mejores.' },
    { beat: 'whyItMatters', text: 'La diferencia fue que Lister podía nombrar lo que estaba matando.' },
    { beat: 'whyItMatters', punch: true, text: 'Tener razón no es lo difícil. Lo difícil es que te crean.' },
  ],

  beats: {
    worldBefore: {
      heading: 'El mundo de antes',
      paragraphs: [
        'El Hospital General de Viena era uno de los grandes hospitales docentes de Europa, y su servicio de maternidad era gratuito, lo que significa que atendía a las mujeres más pobres de la ciudad, y no le faltaban.',
        'Por razones administrativas se había dividido en 1840 en dos clínicas. La Primera formaba estudiantes de medicina. La Segunda formaba comadronas. Los ingresos se alternaban por días, así que en qué clínica entraba una mujer no dependía de nada salvo de cuándo llegaba.',
        'Las tasas de mortalidad no eran iguales. En la Primera Clínica, la mortalidad por fiebre puerperal rondaba el diez por ciento a lo largo de la década de 1840 y llegaba al dieciocho en los meses malos. En la Segunda andaba por el cuatro. Y no era un secreto: las cifras se publicaban cada año, y las mujeres de Viena las conocían perfectamente.',
        'Suplicaban, lloraban y se arrodillaban para que las admitieran en la Segunda. Algunas, al ver que las asignaban a la Primera, parían en la calle y luego se presentaban para los cuidados posteriores — y Semmelweis observó, con cierta incomodidad, que esos partos callejeros tenían una mortalidad *menor* que el ingreso en su propia sala.',
        'La fiebre puerperal se aceptaba como un hecho de la maternidad, igual que el tiempo. Las explicaciones disponibles eran las corrientes de la época: un desequilibrio de humores, influencias atmosférico-cósmico-telúricas, miasmas del aire malo, hacinamiento, mala ventilación o el estado emocional de la madre.',
      ],
      aside: {
        kind: 'number',
        label: 'La cifra',
        body: 'Primera Clínica, 1846: 459 muertes en 4.010 partos, cerca del once por ciento. Segunda Clínica ese mismo año: 105 muertes en 3.754 partos, un dos coma ocho. Mismo hospital, misma calle, misma política de ingresos. Las cifras se publicaban, y nadie sabía explicarlas.',
        sourceId: 'semmelweis-1861',
      },
      sourceIds: ['semmelweis-1861', 'nuland-2003'],
    },

    problem: {
      heading: 'El problema',
      paragraphs: [
        'Ignaz Semmelweis tenía veintiocho años cuando en 1846 se hizo ayudante de la Primera Clínica, y la discrepancia se convirtió de inmediato en lo que no podía dejar en paz. Lo que hizo a continuación es, visto ahora, inconfundiblemente un método científico, ejecutado sin nada de la teoría que lo habría hecho fácil.',
        'Cogió cada explicación y la puso a prueba contra el hecho de que las dos clínicas se diferenciaban. ¿Hacinamiento? La Segunda estaba más llena, porque todo el mundo quería entrar en ella. ¿Clima y atmósfera? Las dos salas estaban en el mismo edificio respirando el mismo aire. ¿La dieta, la ropa de cama, la ventilación, el nivel de los cuidados? Todo compartido.',
        'Existía la teoría de que el susto que causaba el cura al cruzar la sala con su campanilla, camino de administrar los últimos sacramentos, provocaba la fiebre. Semmelweis hizo que el sacerdote cambiara de ruta y dejara de tocarla. No cambió nada.',
        'Se fijó en que las mujeres que parían boca arriba morían más que las que parían de lado, y en que las dos clínicas diferían en eso. Cambió la práctica en su propia sala. No cambió nada.',
        'A principios de 1847 había eliminado todo lo que se le ocurría salvo una diferencia, y era una diferencia que nadie consideraba médicamente interesante: la Primera Clínica la atendían estudiantes de medicina, y la Segunda, aprendices de comadrona.',
      ],
      aside: {
        kind: 'caution',
        label: 'Con cuidado',
        body: 'Es tentador describir esto como un ensayo controlado. No lo era: Semmelweis trabajaba con registros existentes y variación natural, y su razonamiento estadístico era informal. Lo que tenía era observación fuerte, honesta y repetida. La distinción importa, porque es parte de por qué sus colegas se sintieron con derecho a despacharlo.',
      },
      sourceIds: ['semmelweis-1861', 'carter-1994'],
    },

    story: {
      heading: 'La historia',
      paragraphs: [
        'En marzo de 1847, el amigo y colega de Semmelweis, Jakob Kolletschka, se cortó un dedo con el bisturí de un estudiante durante una autopsia. Enfermó y murió. Semmelweis leyó el informe de la autopsia de su amigo y vio una lista de hallazgos que reconoció de inmediato, porque llevaba un año leyéndola en los cuerpos de las madres muertas.',
        'La conclusión que sacó es toda la historia, y es terrible. Kolletschka había muerto de lo mismo de lo que morían las mujeres. Kolletschka lo había cogido de un cadáver, por una herida. Y los estudiantes de la Primera Clínica pasaban las mañanas diseccionando cadáveres en la sala de autopsias y las tardes explorando a mujeres de parto, con un intervalo consistente en limpiarse las manos en un pañuelo.',
        'Las comadronas de la Segunda Clínica no hacían autopsias en absoluto.',
        'Semmelweis llamó al agente «partículas cadavéricas». No tenía ni idea de qué eran; la palabra bacteria no significaba todavía nada. Pero no necesitaba saber qué eran para saber cómo detenerlas, y en mayo de 1847 puso una palangana con solución de cal clorada en la puerta de la sala y exigió que todo el que entrara se frotara las manos hasta que se le fuera el olor de la sala de autopsias. El cloro no se eligió porque mate microorganismos. Se eligió porque quita el olor.',
        'La mortalidad de la Primera Clínica en abril de 1847 fue del 18,3 por ciento. En junio fue del 2,2. En julio, del 1,2. En dos meses de aquel año no murió ninguna mujer de la sala. Durante el año siguiente las dos clínicas convergieron, y hubo momentos en que la Primera era la más segura de las dos.',
        'Un año después extendió la exigencia a los instrumentos además de a las manos, tras notar que la infección podía pasar también desde un paciente vivo con una herida infectada y no solo desde los muertos.',
        'Ese es el descubrimiento. Está completo, es correcto, y su efecto sobre la práctica fue inmediato y enorme. Lo que pasó después es la parte que merece estudiarse.',
      ],
      aside: {
        kind: 'voice',
        label: 'Una voz de la época',
        body: 'Escribiendo en 1861, Semmelweis dijo con todas las letras lo que significaba su propia conclusión: que él había estado presente en aquellas muertes, que solo Dios sabe cuántas mujeres bajaron a la tumba por su causa, y que había manipulado cadáveres más que casi ningún otro obstetra. No está describiendo un descubrimiento. Está describiendo una confesión.',
        sourceId: 'semmelweis-1861',
      },
      sourceIds: ['semmelweis-1861', 'nuland-2003', 'carter-1994'],
    },

    whyItHappened: {
      heading: 'Por qué nadie le hizo caso',
      paragraphs: [
        'La versión estándar de esta historia es que un genio fue perseguido por unos necios. Las pruebas apoyan algo más incómodo y más útil.',
        '**No sabía decir por qué funcionaba.** A la teoría microbiana le faltaban dos décadas. «Partículas cadavéricas» no era un mecanismo; era un hueco con nombre. Para un establishment médico que explicaba la enfermedad por humores y miasmas, Semmelweis ofrecía un procedimiento sin teoría detrás, apoyado en estadística, que la medicina todavía no consideraba prueba. Tener razón no es lo mismo que poder ser comprobado.',
        '**Aceptarlo significaba una confesión.** La afirmación no era «aquí hay una manera de bajar la mortalidad». La afirmación era: *usted ha estado llevando la muerte de la sala de autopsias a la cama de parto en sus manos sin lavar, y las mujeres a su cargo han muerto por su culpa*. Ningún cuerpo profesional ha encontrado eso fácil nunca, y cuanto más veterano el médico, más cadáveres cubre la admisión.',
        '**Y lo llevó mal.** Este es el punto duro de Nuland y no conviene suavizarlo. Semmelweis no publicó durante catorce años. Dio pocas conferencias y no escribió ningún relato claro mientras las pruebas estaban frescas. Se fue de Viena de golpe en 1850 sin decírselo a sus colegas. Otros publicaron en su nombre, de forma imperfecta, y se atacaron las imperfecciones. Cuando por fin escribió, en 1861, produjo un libro largo y desordenado, y lo siguió con cartas abiertas acusando a catedráticos concretos de ser asesinos y su docencia asunto de la policía.',
        'Tenía razón, por supuesto, al llamarlos así. Y era también la manera más eficaz posible de garantizar que ningún catedrático de Europa pudiera adoptar su método sin estar admitiendo en público que era un asesino.',
        'Y hay que decir que el establishment no fue uniformemente hostil. Algunas clínicas adoptaron el lavado. Otras lo probaron, lo aplicaron a medias, no vieron un efecto espectacular y concluyeron que no funcionaba. Un procedimiento sin teoría es fácil de hacer mal, y hacerlo mal se parece exactamente a refutarlo.',
      ],
      sourceIds: ['nuland-2003', 'carter-1994', 'semmelweis-1861'],
    },

    consequences: {
      heading: 'Qué cambió',
      paragraphs: [
        'El método era correcto y no se adoptó, y el hombre que lo encontró no sobrevivió a tener razón.',
      ],
      shortTerm: [
        'A Semmelweis no le renovaron el puesto en Viena en 1849, y en 1850 se marchó a Pest, donde se hizo cargo de la maternidad del hospital de San Roque y bajó su mortalidad por debajo del uno por ciento.',
        'Publicó *Die Ätiologie, der Begriff und die Prophylaxis des Kindbettfiebers* en 1861, catorce años después del descubrimiento.',
        'Después llegaron las cartas abiertas, dirigidas a los principales obstetras de Europa y acusándolos, por su nombre, de matar a sus pacientes.',
        'En julio de 1865 lo llevaron a un manicomio de Baja Austria, al parecer con engaños. Intentó salir, lo sujetaron y los celadores le dieron una paliza grave, y acabó con camisa de fuerza en una celda a oscuras.',
        'Murió el 13 de agosto de 1865, a los cuarenta y siete años, de una sepsis por una herida infectada: la misma clase de infección que había dedicado su carrera a evitar.',
      ],
      longTerm: [
        'En 1867 Joseph Lister publicó su método antiséptico en el Lancet, basado en el trabajo de Pasteur sobre la fermentación, y fue aceptado, honrado y con el tiempo ennoblecido.',
        'La teoría microbiana hizo explicable el lavado de manos, y en cuanto fue explicable se volvió obligatorio. El procedimiento de Semmelweis sigue vigente casi sin cambios, con mejores productos.',
        'La fiebre puerperal no terminó en realidad con el lavado de manos. La redujo la antisepsia y la remataron los antibióticos en los años treinta y cuarenta, que mataban directamente al estreptococo.',
        'A Semmelweis se lo rehabilitó póstumamente y a fondo. La universidad de Budapest lleva su nombre, su casa es un museo, y el libro de 1861 está en el registro Memoria del Mundo de la Unesco.',
        'La expresión «reflejo Semmelweis» entró en el idioma para el rechazo automático de pruebas que contradicen una posición establecida — acuñada mucho después de su muerte, y usada a menudo por gente cuyas pruebas no se parecen en nada a las suyas.',
      ],
      unexpected: [
        'Las mujeres que parían en la calle antes que entrar en la Primera Clínica tenían mejores probabilidades de sobrevivir que las ingresadas en ella. Lo señaló el propio Semmelweis, y es la acusación más limpia contra un hospital jamás registrada en sus propias estadísticas.',
        'La cal clorada se eligió para quitar el olor de la sala de disección, no para matar nada. Acertó por una razón que no podía conocer.',
        'No fue el primero en decirlo. Oliver Wendell Holmes publicó la misma conclusión en Boston en 1843, cuatro años antes, y un obstetra estadounidense de renombre le respondió que los médicos son caballeros, y las manos de un caballero están limpias.',
        'Su propia enfermedad final se discute. Nuland defiende la paliza del manicomio y la gangrena; otras lecturas proponen una demencia de inicio temprano, o una neurosífilis. Lo que no se discute es que murió de una infección en un hospital.',
      ],
      sourceIds: ['nuland-2003', 'holmes-1843', 'lister-1867'],
    },

    whyItMatters: {
      heading: 'Por qué sigue importando',
      paragraphs: [
        'Dos hombres propusieron casi la misma intervención con veinte años de diferencia. A Semmelweis lo apartaron y murió en un manicomio. A Lister lo celebraron y lo hicieron barón. La diferencia no fue la calidad de las pruebas: Semmelweis tenía un experimento natural entre dos salas de un mismo hospital, con miles de partos y tablas de mortalidad publicadas, que son mejores pruebas de las que Lister presentó jamás.',
        'La diferencia fue que Lister llegó después de Pasteur, y por tanto podía decir qué estaba matando. Un procedimiento con mecanismo se puede enseñar, discutir, extender y mejorar. Un procedimiento sin él es una superstición que resulta funcionar, y una profesión que acababa de tirar a la basura las sangrías y las purgas no estaba de humor para otra.',
        'Esa es la lección duradera, y corta por los dos lados. No basta con tener razón: hay que ser comprobable, porque una afirmación que no se puede examinar no se puede adoptar con responsabilidad, por cierta que sea. Y a la vez: una institución que solo acepte resultados para los que ya tiene teoría se perderá sistemáticamente los resultados que más importan.',
        'Y luego está la parte del coste. Lo que hacía insoportable esta afirmación no era que fuera rara, sino que era acusatoria. Cada catedrático que la aceptaba tenía que aceptar lo que habían hecho sus propias manos. El atlas sigue este hilo en otros sitios —un analista de fraudes con pruebas, presentándolas una y otra vez a un regulador que no podía permitirse leerlas— porque el mecanismo es idéntico. Los avisos que se ignoran rara vez son los inverosímiles. Son aquellos cuya aceptación sale cara a quien tiene que aceptarlos.',
        'Y a Semmelweis no conviene lijarlo hasta convertirlo en santo. Tenía razón, lo trataron de forma atroz, y también se pasó catorce años sin escribir el artículo y luego escribió cartas llamando asesinos a sus lectores. Las dos mitades son ciertas. La segunda no exculpa a la profesión que lo ignoró; solo significa que la historia va de cómo viaja de verdad un descubrimiento entre personas, que es algo más difícil y más útil de aprender que «a los genios los persiguen».',
      ],
      sourceIds: ['nuland-2003', 'lister-1867'],
    },
  },

  timeline: [
    { year: 1795, title: 'Alexander Gordon, en Aberdeen, nombra la causa', detail: 'Concluye que la fiebre puerperal la llevan de una paciente a otra los propios asistentes, y no le creen. Va cincuenta años por delante.', confidence: 'contested' },
    { year: 1840, title: 'Viena divide su servicio de maternidad', detail: 'La Primera Clínica toma a los estudiantes de medicina, la Segunda a las aprendices de comadrona. El ingreso se alterna por días, que es lo que hace posible la comparación.', pivotal: true },
    { year: 1843, title: 'Holmes publica en Boston', detail: 'Oliver Wendell Holmes sostiene que la fiebre puerperal la llevan los médicos y exige que se laven y se cambien de ropa. Los grandes obstetras lo atacan.', pivotal: true },
    { year: 1846, title: 'Semmelweis llega a la Primera Clínica', detail: 'A los veintiocho años toma la ayudantía y empieza a repasar todas las explicaciones de una mortalidad tres veces la de la sala de al lado.' },
    { year: 1847, date: '1847-03', title: 'Muere Kolletschka', detail: 'Su amigo se corta con un bisturí en una autopsia y muere con exactamente los hallazgos que se ven en las madres muertas. El mecanismo se vuelve evidente.', pivotal: true },
    { year: 1847, date: '1847-05', title: 'Cal clorada en la puerta', detail: 'Todo el que entre en la sala debe frotarse hasta que se le vaya el olor de la sala de disección. La mortalidad cae del 18,3 al 2,2 por ciento en semanas.', pivotal: true },
    { year: 1848, title: 'También los instrumentos', detail: 'Extiende la regla a los instrumentos tras un brote rastreado hasta una paciente con una herida infectada: la infección no viene solo de los muertos.' },
    { year: 1850, title: 'Se va de Viena', detail: 'No le renuevan el puesto y se marcha de golpe a Pest sin decírselo a sus colegas. En Hungría baja la mortalidad por debajo del uno por ciento.', pivotal: true },
    { year: 1861, title: 'Se publica la Ätiologie', detail: 'Catorce años después del descubrimiento, un libro largo y desordenado. Le siguen cartas abiertas acusando de asesinato a catedráticos con nombre y apellidos.', pivotal: true },
    { year: 1865, date: '1865-08-13', title: 'Semmelweis muere en un manicomio', detail: 'Internado en julio, sujetado y apaleado por los celadores, muere dos semanas después de una sepsis por una herida infectada, a los cuarenta y siete años.', pivotal: true },
    { year: 1867, title: 'Lister publica la cirugía antiséptica', detail: 'Partiendo de Pasteur, aplica ácido fénico a heridas e instrumentos — y se le acepta, porque puede nombrar lo que está matando.', pivotal: true },
    { year: 1935, title: 'Las sulfamidas llegan a la fiebre puerperal', detail: 'El Prontosil y sus sucesores matan directamente al estreptococo. La mortalidad materna se hunde, y remata lo que había empezado la antisepsia.' },
  ],

  causeEffect: [
    { cause: 'El hospital se divide en una clínica de estudiantes y otra de comadronas', effect: 'Se crea un experimento natural', because: 'Dos salas de un mismo edificio que difieren en una sola variable son lo más parecido a una comparación controlada que produjo la época, y fue por accidente.' },
    { cause: 'Los estudiantes de medicina diseccionan cadáveres cada mañana', effect: 'Llevan la infección a las mujeres de parto', because: 'Nada entre la sala de autopsias y la cama de parto retiraba lo que llevaban en las manos, y nadie tenía motivo para pensar que debiera.' },
    { cause: 'Kolletschka muere por un corte de bisturí', effect: 'Semmelweis identifica el mecanismo', because: 'Los hallazgos de su autopsia coincidían exactamente con los de las madres muertas, lo que implicaba una sola causa y una sola vía de entrada al cuerpo.' },
    { cause: 'Se exige cal clorada antes de cada exploración', effect: 'La mortalidad cae alrededor de un noventa por ciento', because: 'Un producto elegido para quitar el olor de la putrefacción destruía también los organismos que lo producían, cosa que entonces nadie sabía.' },
    { cause: 'Todavía no existe una teoría de los microbios', effect: 'El resultado no se puede explicar ni defender', because: 'La medicina aceptaba mecanismos, no estadísticas, y un procedimiento sin mecanismo se lee como una superstición que casualmente funciona.' },
    { cause: 'Aceptar el hallazgo implica asumir responsabilidad por muertes', effect: 'Los médicos veteranos son los que más lo rechazan', because: 'Cuantos más partos había atendido un médico, más le costaba la admisión, así que el incentivo para no creerlo crecía con la antigüedad.' },
    { cause: 'Semmelweis tarda en publicar y luego insulta a sus lectores', effect: 'El método se extiende mucho más despacio de lo que merecían las pruebas', because: 'Un hallazgo viaja a través de personas, y las personas que más necesitaban adoptarlo eran a las que él había llamado asesinos en público.' },
    { cause: 'Pasteur establece la teoría microbiana en los años sesenta del XIX', effect: 'Se acepta la intervención idéntica de Lister', because: 'El mismo procedimiento con un mecanismo detrás es un avance científico y no un ritual inexplicado.' },
  ],

  myths: [
    {
      myth: 'Semmelweis descubrió que los médicos contagiaban la fiebre puerperal, y nadie lo había sugerido antes.',
      reality: 'Alexander Gordon, en Aberdeen, sostuvo en 1795 que los asistentes llevaban la enfermedad de una paciente a otra, y Oliver Wendell Holmes publicó la misma conclusión en Boston en 1843, cuatro años antes que Viena. A los dos les negaron la razón. La aportación de Semmelweis fueron las pruebas y la intervención, no la idea.',
      whyItPersists: 'Las historias de un solo descubridor se cuentan mejor, y la versión de Semmelweis lleva un martirio incorporado que las otras no tienen.',
      sourceIds: ['holmes-1843', 'carter-1994'],
    },
    {
      myth: 'Lo rechazaron solo porque los médicos eran unos necios arrogantes.',
      reality: 'La arrogancia fue real, y también lo fue el coste profesional de la admisión. Pero además no tenía ningún mecanismo que ofrecer en una época que lo exigía, no publicó en catorce años, se fue de Viena sin explicarse, y acabó acusando a sus lectores de asesinato en cartas abiertas. La lectura de Nuland es que la propia conducta de Semmelweis retrasó materialmente la adopción.',
      whyItPersists: 'La historia del genio perseguido es más satisfactoria y más halagadora para cualquiera que se sienta ignorado, y por eso el «reflejo Semmelweis» lo invoca tanta gente con pruebas muchísimo peores.',
      sourceIds: ['nuland-2003', 'carter-1994'],
    },
    {
      myth: 'El lavado de manos acabó con la fiebre puerperal.',
      reality: 'Podría haberlo hecho, y donde se aplicó bien lo hizo. Pero la adopción fue irregular durante décadas, y lo que de verdad eliminó la enfermedad como gran causa de muerte fue la antisepsia tras Lister y luego los antibióticos en los años treinta y cuarenta, que mataban directamente al estreptococo responsable.',
      whyItPersists: 'La historia tiene un final natural en el descubrimiento, y los cincuenta años enredados posteriores no encajan en la forma de un triunfo.',
      sourceIds: ['lister-1867', 'nuland-2003'],
    },
    {
      myth: 'Se volvió loco por que lo ignoraran, y murió de pena.',
      reality: 'Se deterioró gravemente en sus últimos años, y la causa se discute de verdad: entre las explicaciones propuestas hay demencia de inicio temprano y neurosífilis, junto al efecto de años de rechazo profesional. Lo internaron, los celadores lo apalearon y murió de una herida infectada. La infección está documentada; la causa psiquiátrica no está resuelta.',
      whyItPersists: 'Cierra la tragedia con elegancia, y el expediente médico real es a la vez más sombrío y menos concluyente que la versión poética.',
      sourceIds: ['nuland-2003'],
    },
  ],

  disagreements: [
    {
      question: '¿Por qué no se adoptó el hallazgo de Semmelweis?',
      positions: [
        { view: 'Sobre todo por el establishment médico: estaba comprometido teóricamente con los miasmas y los humores, no trataba la estadística como prueba, y no podía aceptar una conclusión que acusaba a sus propios miembros.', heldBy: 'K. Codell Carter, y la lectura tradicional', sourceId: 'carter-1994' },
        { view: 'En buena medida por el propio Semmelweis: catorce años sin publicar, ninguna exposición clara mientras las pruebas estaban frescas, una salida abrupta de Viena, y al final cartas abiertas llamando asesinos a sus colegas.', heldBy: 'Sherwin Nuland', sourceId: 'nuland-2003' },
      ],
      atlasPosition: 'El atlas da las dos, en ese orden de peso. La resistencia institucional fue real y habría sido formidable de todos modos; la conducta de Semmelweis hizo bastante más difícil un caso ya difícil. Ninguna de las dos lecturas hace aceptable el desenlace.',
    },
    {
      question: '¿Qué causó su derrumbe final y su muerte?',
      positions: [
        { view: 'La paliza de los celadores del manicomio, que produjo una herida infectada y una sepsis mortal en un hombre ya destrozado por años de rechazo.', heldBy: 'Nuland, leyendo el informe de la autopsia', sourceId: 'nuland-2003' },
        { view: 'Una enfermedad orgánica de base —se han propuesto tanto una demencia de inicio temprano como una neurosífilis— que produjo la conducta que llevó a su internamiento.', heldBy: 'Diversas valoraciones médicas posteriores', sourceId: 'carter-1994' },
      ],
      atlasPosition: 'El atlas dice lo que está documentado: lo internaron, lo apalearon y murió de una sepsis por una herida. Presenta las enfermedades de base propuestas como propuestas y no afirma ninguna.',
    },
  ],

  didYouKnow: [
    'Las mujeres asignadas a la clínica más mortífera a veces parían en la calle, y sobrevivían en mejor proporción que las ingresadas.',
    'Semmelweis puso a prueba la teoría de que la campanilla del cura asustaba a las mujeres hasta enfermarlas haciendo que el sacerdote cambiara de ruta. No cambió nada.',
    'Eligió la cal clorada porque quitaba el olor de la sala de disección, no porque creyera que mataba algo.',
    'En su sala, la mortalidad cayó del 18,3 por ciento en abril de 1847 al 1,2 en julio. En dos meses de aquel año no murió nadie.',
    'Oliver Wendell Holmes había publicado la misma conclusión en Boston cuatro años antes, y le respondieron que los médicos son caballeros y las manos de un caballero están limpias.',
    'Semmelweis tardó catorce años en publicar como es debido, y entonces atacó a sus lectores por su nombre llamándolos asesinos.',
    'Murió de una sepsis por una herida infectada, que es la misma clase de infección que se pasó la vida evitando.',
    'Su libro de 1861 está en el registro Memoria del Mundo de la Unesco, y la universidad médica de Budapest lleva su nombre.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'En un minuto',
      kind: 'length',
      paragraphs: [
        'El Hospital General de Viena tenía dos maternidades en el mismo edificio. En la atendida por estudiantes de medicina moría cerca de una madre de cada diez de fiebre puerperal. En la atendida por aprendices de comadrona, una de cada veinticinco. El ingreso se alternaba por días, así que la diferencia no podían ser las pacientes.',
        'Ignaz Semmelweis fue eliminando todas las explicaciones disponibles —hacinamiento, aire, dieta, postura del parto, incluso la campanilla del cura— hasta que solo quedó una diferencia. Entonces, en 1847, un colega murió tras cortarse en una autopsia, con los mismos hallazgos que se veían en las madres muertas. Los estudiantes diseccionaban cadáveres por la mañana y asistían partos por la tarde.',
        'Exigió que todo el que entrara en la sala se lavara con cal clorada. La mortalidad cayó del 18,3 por ciento en abril al 1,2 en julio.',
        'No se adoptó. La teoría microbiana no existía, así que no podía decir por qué funcionaba; aceptarlo significaba aceptar que los médicos habían estado matando pacientes; y Semmelweis tardó catorce años en publicar, y entonces escribió cartas abiertas llamando asesinos a sus colegas. Lo internaron en un manicomio en 1865, lo apalearon los celadores y murió de una herida infectada a los cuarenta y siete. Dos años después Lister publicó el mismo principio, con Pasteur detrás, y lo hicieron barón.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explícamelo como si tuviera 10 años',
      kind: 'age',
      paragraphs: [
        'En un hospital grande de Viena había dos salas de bebés, una al lado de la otra. En una morían muchísimas madres después de dar a luz. En la otra, muchísimas menos. Nadie sabía por qué, y las madres tenían tanto miedo de la sala mala que algunas preferían tener el bebé en la calle.',
        'Un médico joven llamado Ignaz decidió averiguarlo. Comprobó todas las ideas que se le ocurrían a la gente. ¿Hay demasiada gente? No, la sala buena está más llena. ¿Es el aire? Comparten el mismo aire. ¿Es el cura tocando la campanilla y asustando a todas? Le pidió que dejara de tocarla. Nada cambió.',
        'Entonces vio la única diferencia de verdad. En la sala mortal, los médicos y los estudiantes pasaban la mañana abriendo cadáveres para aprender — y luego iban directos a las madres, limpiándose las manos en la bata.',
        'Así que puso un barreño con cloro en la puerta y obligó a todos a frotarse las manos hasta que ya no olieran a cadáver. Casi de inmediato, las madres dejaron de morirse.',
        'Y aquí viene lo horrible: casi nadie le creyó. Todavía no se sabía nada de los microbios, así que no podía explicar *por qué* funcionaba — y creerle significaba admitir que los médicos llevaban años matando madres sin querer. Lo echaron de su trabajo, y él mismo acabó muriendo en un hospital, por una infección.',
      ],
    },
    {
      id: 'scholar',
      label: 'Nivel universitario',
      kind: 'age',
      paragraphs: [
        'El caso es una referencia estándar en filosofía de la ciencia, sobre todo por el uso que hace Hempel de él en *Filosofía de la ciencia natural* como ilustración de la eliminación de hipótesis. La estructura eliminativa es genuina: Semmelweis puso a prueba en serie hipótesis atmosféricas, dietéticas, posicionales y psicológicas contra el diferencial entre clínicas, y todas fallaron ante la restricción de las condiciones compartidas. Lo que no pudo aportar fue un mecanismo causal, solo un marcador etiológico —«partículas cadavéricas»—, que es exactamente la carencia que hizo resistible su conclusión bajo los criterios explicativos de la medicina clínica de los años cuarenta del XIX.',
        'El problema de recepción epistémica es el más interesante. La inferencia estadística no tenía estatus probatorio asentado en medicina; el método numérico de Louis es contemporáneo y estaba a su vez discutido. Una profesión que trata el mecanismo como criterio de adecuación explicativa infravalorará sistemáticamente una regularidad estadística bien apoyada y sin mecanismo, y eso no es irracionalidad simple: es una regla de decisión que acierta más veces de las que falla, y que falla de forma catastrófica en un caso concreto.',
        'La literatura revisionista, principalmente Nuland (2003) frente a la tradición hagiográfica, redistribuye la responsabilidad causal de la no adopción hacia Semmelweis: los catorce años de retraso en publicar, la ausencia de una exposición temprana clara, la dependencia de colegas que difundieron versiones imperfectas de su posición, y las cartas abiertas de 1861–62. Carter y Carter (1994) dan más peso a la obstrucción institucional y teórica. Las dos posiciones no son excluyentes y las pruebas apoyan un relato mixto.',
        'Sobre la comparación con Lister, nótese que la asimetría probatoria corre en sentido inverso a la asimetría de recepción: Semmelweis tenía los datos más fuertes y Lister la teoría más fuerte. Es la mejor ilustración disponible de la tesis de que la adopción de una práctica clínica la gobierna la asimilabilidad teórica antes que la fuerza probatoria por sí sola, cuestión que sigue viva donde una intervención eficaz carece de explicación mecanicista.',
      ],
    },
    {
      id: 'the-two-wards',
      label: 'El experimento que nadie diseñó',
      kind: 'angle',
      paragraphs: [
        'La razón de que este caso sea tan limpio es que Viena había construido sin querer un ensayo controlado y lo había dejado funcionando siete años.',
        '**El mismo edificio.** Las dos clínicas estaban en el Hospital General de Viena, compartiendo aire, agua, comida, ropa de cama y estación del año. Toda explicación ambiental —miasma, ventilación, clima, constitución epidémica— se aplica igual a las dos salas y, por tanto, no explica nada sobre la diferencia.',
        '**Una asignación casi aleatoria.** Los ingresos se alternaban por días. Una mujer iba a la Primera o a la Segunda según cuándo se le pusiera el parto, que es lo más parecido a una aleatorización que iba a conseguir el siglo XIX sin proponérselo.',
        '**Una sola variable.** Las clínicas se diferenciaban en quién asistía el parto: estudiantes de medicina en la Primera, aprendices de comadrona en la Segunda. Todo lo demás era administrativamente idéntico.',
        '**Una variable de resultado publicada.** Las cifras de mortalidad de las dos clínicas se recopilaban cada año y eran públicas. Semmelweis no tuvo que reunir datos; tuvo que leerlos.',
        'Ese es un montaje experimental mejor que casi todo lo que produjo la medicina en los cincuenta años siguientes, y no fue idea de nadie. También explica por qué Semmelweis estaba tan seguro, y por qué su seguridad se leyó como arrogancia: desde donde él estaba, la respuesta no era una interpretación de las pruebas. Era lo único que seguía en pie tras eliminar todo lo demás.',
      ],
    },
    {
      id: 'semmelweis-and-lister',
      label: 'Por qué a Lister sí le creyeron',
      kind: 'contrast',
      paragraphs: [
        'La misma idea, con veinte años de diferencia y resultados opuestos. La comparación es lo más instructivo de esta historia.',
        '**Semmelweis, 1847.** Pruebas: dos salas, miles de partos, mortalidad anual publicada, una reducción del noventa por ciento sostenida durante un año. Mecanismo: «partículas cadavéricas», que no significa nada. Comunicación: catorce años sin publicar, y luego un libro desordenado y cartas llamando asesinos a sus lectores. Resultado: apartado, ignorado, muerto en un manicomio.',
        '**Lister, 1867.** Pruebas: una serie de casos de fractura abierta, números pequeños, sin grupo de control. Mecanismo: la teoría microbiana de Pasteur, aplicada directamente — el aire lleva organismos vivos, el ácido fénico los mata. Comunicación: publicación inmediata en el Lancet, giras de conferencias, y una década discutiendo con paciencia con sus críticos. Resultado: adoptado en toda Europa, presidente de la Royal Society, un título nobiliario.',
        'Lister tenía las pruebas más débiles y la posición más fuerte, porque un mecanismo hace algo que las pruebas por sí solas no pueden: te dice qué más hacer. Si los microbios causan la infección, entonces también hay que esterilizar instrumentos, cubrir heridas, hervir agua y preocuparse por la bata del cirujano. Una regularidad estadística sin teoría te dice una cosa que hacer y nada sobre lo que implica.',
        'Nada de lo cual hace defendible el trato que recibió Semmelweis. Sí significa que «él tenía razón y ellos eran necios» es un relato incompleto de lo que pasó, y un relato inútil para cualquiera que quiera que su propio hallazgo correcto se adopte.',
      ],
    },
  ],

  beforeAfter: {
    label: 'La Primera Clínica, antes y después de mayo de 1847',
    before: {
      title: 'Antes de la palangana',
      points: [
        'Cerca de una madre de cada diez muriendo de fiebre puerperal',
        'Estudiantes pasando de la sala de autopsias a la cama de parto',
        'Explicaciones basadas en miasmas, hacinamiento y miedo',
        'Mujeres suplicando que las mandaran a la otra sala',
        'Mortalidad tres veces mayor que la clínica de las comadronas',
      ],
    },
    after: {
      title: 'Después de la palangana',
      points: [
        'Mortalidad en torno al uno por ciento en dos meses',
        'Frotado con cal clorada obligatorio para todo el que entre',
        'Una práctica correcta sin ninguna teoría que la explique',
        'Las dos clínicas convergiendo, y a veces la Primera más segura',
        'El responsable sin trabajo en menos de dos años',
      ],
    },
  },

  whatIf: [
    {
      question: '¿Y si Semmelweis hubiera publicado con claridad en 1848?',
      reasoning: 'Las pruebas estaban en su momento más fresco y más espectacular el año siguiente a la intervención, y las tablas de mortalidad eran inequívocas. Un artículo rápido y bien organizado —en alemán y en francés, justo cuando se hablaba de las cifras— habría puesto la afirmación ante la profesión mientras era una curiosidad y no una acusación, y varias clínicas ya estaban experimentando.',
      constraint: 'Especulación. Holmes sí publicó de inmediato, en 1843, y lo despacharon igual. El obstáculo no era solo la falta de un artículo: era la falta de mecanismo y la presencia de una confesión implícita, y ninguna de las dos cosas la habría cambiado una prosa mejor.',
    },
    {
      question: '¿Y si Pasteur hubiera llegado veinte años antes?',
      reasoning: 'Con la teoría microbiana disponible en 1847, Semmelweis habría tenido un mecanismo que enganchar a sus números, y la comparación con Lister sugiere que esa es la variable decisiva. La antisepsia podría haberse extendido por la medicina europea dos décadas antes, en cirugía además de en obstetricia, en un momento en que la mortalidad hospitalaria tras una operación era altísima.',
      constraint: 'Esto reordena toda la historia de la biología del siglo XIX y no una sola carrera, así que es especulación a gran escala. Además deja intacto el carácter acusatorio del hallazgo: un mecanismo explica por qué los médicos llevaban la infección, lo que no es evidentemente más fácil de aceptar que que te lo digan sin él.',
    },
  ],

  quiz: [
    {
      question: '¿Cuál era la única diferencia real entre las dos maternidades de Viena?',
      options: [
        'La Primera estaba más llena',
        'La Primera la atendían estudiantes de medicina que también hacían autopsias',
        'La Segunda admitía pacientes más ricas',
        'La Segunda tenía mejor ventilación',
      ],
      answerIndex: 1,
      explains: 'Las dos salas estaban en el mismo edificio, con el mismo aire, la misma comida y la misma política de ingresos. La Primera formaba estudiantes de medicina, que llegaban a los partos desde la sala de disección; la Segunda formaba comadronas, que no hacían autopsias.',
    },
    {
      question: '¿Qué le hizo ver a Semmelweis el mecanismo?',
      options: [
        'Vio bacterias al microscopio',
        'Un colega murió con los mismos hallazgos tras cortarse en una autopsia',
        'Se lo dijo una comadrona',
        'Leyó a Pasteur',
      ],
      answerIndex: 1,
      explains: 'Jakob Kolletschka se cortó con un bisturí durante una autopsia y murió. Los hallazgos de su autopsia coincidían exactamente con los de las madres muertas, lo que implicaba la misma causa entrando por una herida.',
    },
    {
      question: '¿Por qué se rechazó su hallazgo pese a los resultados?',
      options: [
        'Se discutían las cifras de mortalidad',
        'No podía explicar por qué funcionaba, y aceptarlo significaba que los médicos habían causado las muertes',
        'Su método era caro',
        'Otros hospitales no podían conseguir cloro',
      ],
      answerIndex: 1,
      explains: 'A la teoría microbiana le faltaban veinte años, así que tenía un procedimiento sin mecanismo en una época que lo exigía — y la conclusión equivalía a una acusación contra todo médico que hubiera asistido un parto.',
    },
    {
      question: '¿Por qué se aceptó a Lister veinte años después por el mismo principio?',
      options: [
        'Tenía muchísimos más datos',
        'Era británico',
        'Podía nombrar lo que estaba matando, porque Pasteur había establecido la teoría microbiana',
        'Trataba a más pacientes',
      ],
      answerIndex: 2,
      explains: 'Lister tenía en realidad pruebas más débiles. Lo que tenía era un mecanismo —los microbios— que hacía la práctica explicable, enseñable y extensible a instrumentos, apósitos y agua.',
    },
  ],

  sources: [
    {
      id: 'semmelweis-1861',
      kind: 'primary',
      author: 'Ignaz Semmelweis',
      title: 'Die Ätiologie, der Begriff und die Prophylaxis des Kindbettfiebers',
      year: 1861,
      detail: 'Pest, Viena y Leipzig, 1861; trad. de K. Codell Carter como «The Etiology, Concept, and Prophylaxis of Childbed Fever», University of Wisconsin Press, 1983',
      note: 'Su propio relato, catorce años tarde: las tablas de mortalidad de las clínicas, el razonamiento, y el pasaje en que se cuenta a sí mismo entre los responsables de aquellas muertes.',
    },
    {
      id: 'holmes-1843',
      kind: 'primary',
      author: 'Oliver Wendell Holmes',
      title: 'The Contagiousness of Puerperal Fever',
      year: 1843,
      detail: 'New England Quarterly Journal of Medicine and Surgery, vol. 1, pp. 503–530',
      note: 'La misma conclusión, cuatro años antes y al otro lado del océano, publicada de inmediato y despachada igual. La mejor prueba de que publicar no era el único obstáculo.',
    },
    {
      id: 'lister-1867',
      kind: 'primary',
      author: 'Joseph Lister',
      title: 'On a New Method of Treating Compound Fracture, Abscess, etc.',
      year: 1867,
      detail: 'The Lancet, vol. 89, de marzo a julio de 1867, en varias entregas',
      note: 'El principio antiséptico, publicado con la teoría microbiana de Pasteur detrás. Pruebas más débiles que las de Semmelweis, y aceptado: en esa comparación gira esta historia.',
    },
    {
      id: 'nuland-2003',
      kind: 'book',
      author: 'Sherwin B. Nuland',
      title: 'The Doctors’ Plague: Germs, Childbed Fever, and the Strange Story of Ignác Semmelweis',
      year: 2003,
      detail: 'W. W. Norton (colección Great Discoveries). ISBN 978-0-393-05299-4',
      note: 'La lectura de un cirujano, y el argumento más fuerte de que la conducta del propio Semmelweis retrasó la adopción. Rechaza la versión del martirio sin exculpar a la profesión.',
    },
    {
      id: 'carter-1994',
      kind: 'book',
      author: 'K. Codell Carter and Barbara R. Carter',
      title: 'Childbed Fever: A Scientific Biography of Ignaz Semmelweis',
      year: 1994,
      detail: 'Greenwood Press; reeditado por Transaction Publishers, 2005. ISBN 978-1-4128-0467-7',
      note: 'Del traductor de la Ätiologie. La reconstrucción más completa del razonamiento, y el contrapeso a Nuland sobre dónde recae la responsabilidad de la no adopción.',
    },
  ],
}
