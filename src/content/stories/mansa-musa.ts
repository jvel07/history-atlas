import type { Story } from '../types'

/**
 * Voice: the register Michael Gomez writes West Africa in — Mali treated as a
 * state with institutions, succession crises and a tax base, rather than as a
 * pile of gold with a king on top. The hajj is the famous part; the argument is
 * that the famous part is the least interesting thing about it.
 */
export const mansaMusa: Story = {
  slug: 'mansa-musa',
  title: 'The Man Who Broke the Price of Gold',
  subtitle: '1324 — he crossed the Sahara to Mecca, spent so much in Cairo that the currency was still depressed a decade later, and put his empire on Europe’s maps.',
  hook: 'In 1324 a West African king passed through Cairo on his way to Mecca and gave away so much gold that the value of the Egyptian dinar was still depressed twelve years later.',
  era: 'medieval',
  category: 'icons',
  years: [1312, 1375],
  regions: ['Mali', 'Egypt', 'Arabia', 'Europe'],
  nodes: ['mansa-musa', 'mali-empire', 'timbuktu', 'trans-saharan-trade', 'catalan-atlas'],
  tags: ['africa', 'trade', 'gold', 'islam', 'empire', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'In 1324 a West African king passed through Cairo and gave away so much gold' },
    { beat: 'hook', text: 'that the Egyptian currency was still depressed twelve years later.' },
    { beat: 'worldBefore', kicker: '1235–', text: 'Mali is not a village that struck lucky. It is a state the size of western Europe,' },
    { beat: 'worldBefore', text: 'a century old by the time Musa inherits it, with provinces, armies and a court.' },
    { beat: 'worldBefore', punch: true, text: 'And its business is not mining gold. It is taxing everything that moves.' },
    { beat: 'problem', text: 'The gold comes from fields to the south, worked by people Mali does not rule,' },
    { beat: 'problem', text: 'traded in silence, sack for sack, without either side meeting the other.' },
    { beat: 'problem', punch: true, mark: 'imbalance', text: 'Mali does not own the mine. It owns the road, which is better.' },
    { beat: 'problem', text: 'North across the desert goes gold, and go people sold into slavery.' },
    { beat: 'problem', text: 'South come salt, horses, cloth, and books.' },
    { beat: 'story', kicker: '1324', text: 'Musa sets out for Mecca. It is two months of desert each way,' },
    { beat: 'story', text: 'with a column so large the sources cannot agree on any number in it.' },
    { beat: 'story', kicker: 'Cairo', text: 'He stays three months and spends like a man proving something,' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'and the price of gold in the biggest market in the Islamic world falls, and stays down.' },
    { beat: 'story', text: 'An Egyptian official writing twelve years later says it has not recovered.' },
    { beat: 'story', text: 'On the way home he annexes Timbuktu and brings an architect back with him.' },
    { beat: 'whyItHappened', text: 'And the point was never the shopping. A hajj is a claim,' },
    { beat: 'whyItHappened', text: 'made in the one language every state from Spain to Persia could read.' },
    { beat: 'whyItHappened', punch: true, text: 'He arrived unknown and left as a name in the chronicles of three continents.' },
    { beat: 'consequences', kicker: '1375', text: 'Fifty years on, a mapmaker in Majorca draws him holding a nugget of gold,' },
    { beat: 'consequences', punch: true, text: 'and captions him the richest king in all the land. Europe never quite forgot.' },
    { beat: 'consequences', text: 'The gold in a Florentine coin had come up through that desert.' },
    { beat: 'whyItMatters', text: 'He is now sold as the richest man who ever lived, with a number attached,' },
    { beat: 'whyItMatters', text: 'which is not history. Nobody can price a fourteenth-century treasury in dollars.' },
    { beat: 'whyItMatters', punch: true, text: 'The interesting thing is the empire, and the empire is the part nobody repeats.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'The Mali Empire was founded in the thirteenth century, traditionally by Sunjata Keita after his victory at Kirina around 1235, and by the time Musa came to the throne around 1312 it had been a functioning state for the better part of a century. At its height it stretched roughly from the Atlantic coast to the bend of the Niger, an area comparable to western Europe.',
        'It is worth being clear about what kind of thing this was, because the popular version tends to skip it. Mali had provinces under appointed governors, a standing army, a court with formal offices and protocol, a body of oral constitutional tradition, and a succession system that produced disputes exactly as European ones did. Musa was the ninth or tenth ruler in the line. He did not create the empire; he inherited it.',
        'Its wealth came from position. West African gold, from the Bambuk and Bure fields, was among the most important sources of the metal in the medieval world, and the routes carrying it north across the Sahara ran through Malian territory. So did the routes bringing salt south from the Saharan mines at Taghaza — salt being a genuine necessity in a hot climate and, at some points and places, traded weight for weight against gold.',
        'The empire’s revenue came from taxing this traffic, not from owning the mines. The goldfields lay outside Malian control, worked by peoples who guarded their locations fiercely, and the classic accounts describe a "silent trade": goods left at an agreed place, gold left in exchange, and no meeting between the parties. A king who tries to seize such a mine finds the miners have stopped mining. Taxing the road is more reliable, and Mali’s rulers understood this perfectly.',
        'And the northbound caravans did not carry only gold. The trans-Saharan trade in enslaved people ran for centuries and is inseparable from the wealth described in this story. Musa’s own hajj column, by every account, included large numbers of enslaved people.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'Almost everything we know about Mali in this period comes from Arabic writers in Cairo and North Africa, most of whom never went there, plus Ibn Battuta, who did but arrived nearly thirty years after the hajj. There is no Malian written chronicle from the fourteenth century. The oral traditions are real historical sources and were recorded much later.',
        sourceId: 'levtzion-hopkins-1981',
      },
      sourceIds: ['gomez-2018', 'levtzion-hopkins-1981'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Mali was rich, Muslim, and almost entirely unknown in the wider Islamic world. That combination is the setup for what Musa did.',
        'The Mediterranean and Middle Eastern states knew that gold came from somewhere in the west of Africa — they had been minting it for centuries — but the source was a rumour. Arabic geographers repeated stories about a land where gold grew like carrots and was harvested at sunrise. Europe knew even less; Africa south of the Maghreb was effectively blank.',
        'For a Muslim ruler in that position, the hajj is not only a religious obligation. It is the single most effective diplomatic instrument available: an event attended by every part of the Islamic world, conducted along routes lined with the courts of other rulers, with a return journey through the great cities. Performing it establishes you as a legitimate Muslim sovereign in the eyes of people who might otherwise regard you as a distant curiosity.',
        'The journey itself was not a formality. Roughly four thousand kilometres each way, two months of Sahara crossing in each direction, on routes where losing the wells meant losing the caravan. Musa’s predecessor is said in one account to have disappeared attempting an Atlantic expedition, and the desert killed people routinely.',
        'So the trip was a considered act of policy by a ruler with a specific problem: an enormously wealthy state that nobody had heard of.',
      ],
      sourceIds: ['al-umari-1337', 'gomez-2018'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'Musa left Mali in 1324. The size of his column is the most repeated fact about him and the least reliable: figures of sixty thousand people, twelve thousand enslaved attendants each carrying a bar of gold, and eighty camels carrying hundreds of pounds each come from sources written well after the event and vary wildly between them. What every account agrees on is that it was enormous, that it was organised, and that it was carrying a great deal of gold.',
        'The stop that mattered was Cairo, then the largest and richest city in the Islamic world and the seat of the Mamluk sultan. He stayed roughly three months, and the details that survive are the small ones, which is usually a sign of eyewitness transmission.',
        'He initially declined to prostrate himself before Sultan al-Nasir Muhammad — an awkward diplomatic moment, since prostration was expected of visitors, and Musa considered himself a sovereign rather than a supplicant. He was persuaded to bow to God rather than to the sultan, which allowed everyone to proceed.',
        'And then he spent. He gave gold to officials, to the poor, to the sultan’s court, to anyone who came. Egyptian merchants, by the accounts, took him for everything they could — selling him goods at several times their value, which he paid without argument. He was buying reputation, and he was not short.',
        'The consequence is the most concrete thing in this story, because it is an economic observation made by a man who lived there. Al-Umari, an official of the Mamluk chancery who visited Cairo about twelve years later and spoke to people who had dealt with Musa, records that so much gold entered the market that its value fell and had still not recovered — the dinar had lost a substantial fraction of its worth against it.',
        'That is what happens when you increase the supply of a commodity faster than the market can absorb it, and it is the clearest surviving measurement of how much gold there actually was.',
        'On the return journey he annexed Timbuktu and Gao, and brought back with him a poet and architect from Granada, Abu Ishaq al-Sahili, who is credited with building the Djinguereber mosque at Timbuktu around 1327. He also, by several accounts, ran short of money on the way home and had to borrow in Cairo at ruinous rates from the same merchants who had fleeced him on the way out.',
        'Fifty years later, a mapmaker on Majorca — most likely Abraham Cresques — drew the Catalan Atlas for the King of Aragon. In the empty space at the bottom, where Africa was, he drew a crowned black king seated on a throne, holding a gold nugget in one hand and a sceptre in the other, with a caption identifying him as the lord of the Blacks of Guinea and the richest and most noble king in all that land. It is the image of Mansa Musa that Europe kept.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'Al-Umari, an official of the Mamluk chancery, visited Cairo about twelve years after the hajj and recorded what people there still said about it: that Musa and his people had flooded the city with gold, that they gave it away and spent it freely, and that as a result its value had dropped and had not recovered since. He is not repeating a legend. He is reporting a price.',
        sourceId: 'al-umari-1337',
      },
      sourceIds: ['al-umari-1337', 'ibn-khaldun-1377', 'catalan-atlas-1375'],
    },

    whyItHappened: {
      heading: 'Why he did it',
      paragraphs: [
        'The spending looks like extravagance and was mostly strategy, which is easier to see once you know what Musa got for it.',
        '**Recognition.** Before 1324 Mali barely appears in Arabic writing. Afterwards it appears in the chronicles of Egypt, in Ibn Khaldun’s history, in geographical works, and eventually on European maps. A ruler who wanted his state treated as a peer of the Mamluks and the Marinids had to be seen, and the hajj was where you were seen.',
        '**Religious legitimacy.** Islam had been present in West African trading cities for centuries, but Mali’s rulers governed a population that was substantially not Muslim, and their authority rested on older sources as well. A completed hajj, in public, at enormous expense, settled a question about what kind of ruler he was — both abroad and at home.',
        '**Scholarly and technical recruitment.** He came back with people. Al-Sahili the architect is the famous case, but the broader pattern is that a demonstrated connection to Cairo and Mecca meant jurists, teachers and books started moving south along routes that had previously carried salt. Timbuktu’s later reputation as a centre of learning grows out of that flow.',
        '**And trade.** Establishing that the source of the gold was a organised Muslim state with a court and an army, rather than a rumour at the end of a caravan route, was worth something commercially to everyone involved in moving it.',
        'The cost is worth stating too. He spent so heavily that he had to borrow to get home, at rates the Cairene merchants set. And the collapse in the gold price hurt Egyptian holders of gold and anyone whose wealth was denominated in it. Doing this was not free, and it was not free for other people either.',
      ],
      sourceIds: ['gomez-2018', 'al-umari-1337', 'levtzion-hopkins-1981'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'The hajj put Mali on the map, in the literal sense, and the map outlasted the empire.',
      ],
      shortTerm: [
        'Gold prices in Cairo fell and, according to al-Umari writing about twelve years later, had not recovered — the clearest surviving evidence of the scale of what he was carrying.',
        'Musa annexed Timbuktu and Gao on the return journey, extending Malian control over the major Niger trading cities.',
        'He brought back the Granadan poet and architect al-Sahili, credited with the Djinguereber mosque at Timbuktu, built around 1327.',
        'Mali entered the written record of the Islamic world: Egyptian chroniclers, Ibn Khaldun and later geographers all draw on information that reached Cairo in and after 1324.',
        'He ran out of money before he got home and borrowed in Cairo on terms that were, by all accounts, punishing.',
      ],
      longTerm: [
        'Ibn Battuta travelled to Mali in 1352–53, under Musa’s brother Sulayman, and left the only substantial eyewitness account of the empire by an outsider.',
        'The Catalan Atlas of 1375 placed Musa at the bottom of Europe’s picture of the world, holding a lump of gold. It is the image that fixed West Africa in the European imagination as a source of wealth.',
        'That image had consequences. The Portuguese voyages down the African coast in the fifteenth century were partly an attempt to reach the source of the gold by sea, bypassing the Saharan middlemen.',
        'Timbuktu developed over the following two centuries into a genuine centre of scholarship — its major flourishing came later, under Songhai rule, than the popular association with Musa suggests.',
        'Mali declined through the fifteenth century and was displaced by the Songhai Empire, which took Timbuktu in 1468. The trans-Saharan routes themselves were eventually undercut by Atlantic shipping.',
      ],
      unexpected: [
        'The gold in the Florentine florin and the Genoese genovino — Europe’s first stable gold coinages in five centuries — came substantially from West Africa, up the same routes.',
        'Mali did not control the goldfields. They lay outside the empire, worked by people who kept their location secret, and the classic accounts describe trade conducted without the two sides ever meeting.',
        'Musa’s predecessor, according to a story Musa himself is said to have told in Cairo, sailed into the Atlantic with a large fleet to find out what was on the other side and never returned.',
        'By the time Ibn Battuta arrived in 1352, Musa was dead and the empire was in a succession dispute. The visitor found the court impressive, the justice system admirable, and the food disappointing, and said so.',
        'The famous claim that he was the richest person in history comes from a 2012 website listing and has no scholarly basis. There is no way to convert a fourteenth-century treasury into modern currency.',
      ],
      sourceIds: ['ibn-battuta-1355', 'catalan-atlas-1375', 'gomez-2018'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'Mansa Musa is currently famous for a number that does not mean anything. The "richest man in history, worth $400 billion" figure comes from a website list in 2012 and has been repeated ever since. There is no method by which you could produce it: a fourteenth-century ruler’s command over gold, land, labour and tribute cannot be converted into modern dollars, because the things being compared do not have a common measure.',
        'What is left when you drop the number is more interesting. Mali was a large, institutionally sophisticated state with governors, an army, a legal system and a tax base, which had been running for a century before Musa and continued after him. It was rich because it sat on the routes between the goldfields of the south and the Mediterranean markets of the north, and because its rulers understood that taxing traffic beats owning mines.',
        'The hajj is worth keeping for what it actually was: a piece of statecraft, conducted in the only medium available in 1324 for making a state visible to other states. It worked. Before the journey Mali is barely in the record; after it, it is in the chronicles of Egypt and on a Catalan map, and the map is where Europe’s interest in West African gold begins — an interest that runs directly to the Portuguese caravels going down the coast a century later.',
        'That is also the uncomfortable part. The wealth on display in Cairo came from a trade that carried gold north and enslaved people north with it, and the same routes and the same demand shaped the Atlantic trade that followed. Nothing in the story of the hajj is separable from that.',
        'And the version of this story that reduces a hundred-year-old empire to one man’s spending money repeats, in a friendlier register, the oldest thing said about Africa in European writing: that it is a place where wealth simply exists, rather than a place where states are built, taxes are collected and decisions are made. The gold is the least interesting part of Mansa Musa. The empire is the story.',
      ],
      sourceIds: ['gomez-2018', 'levtzion-hopkins-1981'],
    },
  },

  timeline: [
    { year: 1235, title: 'Mali is founded', detail: 'Sunjata Keita defeats his rival at Kirina, by tradition, and the empire begins. It is a century old before Musa inherits it.', pivotal: true, confidence: 'contested' },
    { year: 1252, title: 'Florence strikes the florin', detail: 'Europe’s first stable gold coinage in five centuries, minted substantially from gold brought north across the Sahara.' },
    { year: 1312, title: 'Musa comes to the throne', detail: 'The ninth or tenth ruler of Mali, inheriting an established state with provinces, an army and a court.' },
    { year: 1324, title: 'The hajj begins', detail: 'Musa sets out for Mecca, roughly four thousand kilometres each way, with a column large enough that no two sources agree on its size.', pivotal: true },
    { year: 1324, title: 'Three months in Cairo', detail: 'He declines to prostrate himself before the sultan, is persuaded to bow to God instead, and gives away gold on a scale the city talks about for decades.', pivotal: true },
    { year: 1325, title: 'Timbuktu and Gao are annexed', detail: 'On the return journey Mali takes control of the major Niger trading cities. He brings the Granadan architect al-Sahili home with him.', pivotal: true },
    { year: 1327, title: 'The Djinguereber mosque', detail: 'Built at Timbuktu, and credited to al-Sahili. The claim that he introduced mudbrick architecture to the region is overstated.', confidence: 'contested' },
    { year: 1337, title: 'Al-Umari records the aftermath', detail: 'A Mamluk official in Cairo writes that the gold price fell after Musa’s visit and has still not recovered. The most concrete surviving measurement.', pivotal: true },
    { year: 1352, title: 'Ibn Battuta reaches Mali', detail: 'Travelling under Musa’s brother Sulayman, he leaves the only substantial eyewitness account of the empire by an outside observer.', pivotal: true },
    { year: 1375, title: 'The Catalan Atlas', detail: 'A Majorcan mapmaker draws Musa holding a gold nugget, captioned as the richest king in the land. This is the image Europe keeps.', pivotal: true },
    { year: 1468, title: 'Songhai takes Timbuktu', detail: 'Mali declines through the fifteenth century and is displaced as the dominant power on the Niger. Timbuktu’s scholarly golden age comes under Songhai.' },
    { year: 2012, title: 'The $400 billion figure appears', detail: 'A website list names him the richest person in history. There is no scholarly basis for the number and no method that could produce it.' },
  ],

  causeEffect: [
    { cause: 'The goldfields lie outside Malian control', effect: 'Mali taxes the trade rather than owning the mines', because: 'Miners who are seized simply stop mining, while a caravan route can be taxed reliably by whoever controls the territory it crosses.' },
    { cause: 'Salt is a necessity and the Sahara has mines full of it', effect: 'A two-way trade develops across the desert', because: 'Gold going north and salt coming south makes both directions of a brutal two-month crossing worth funding.' },
    { cause: 'Mali is wealthy but unknown in the Islamic world', effect: 'Musa performs the hajj on a spectacular scale', because: 'The pilgrimage was the one occasion that gathered the whole Islamic world, and spending was how you were remembered by it.' },
    { cause: 'Enormous quantities of gold enter the Cairo market at once', effect: 'The price of gold falls and stays down for years', because: 'A supply shock larger than a market can absorb moves the price, and Cairo could not absorb this one.' },
    { cause: 'The hajj establishes Mali as a Muslim sovereign state', effect: 'Scholars, jurists and books travel south', because: 'Recognition creates a route: once a court is known and legitimate, the people who move between courts start including it.' },
    { cause: 'European mapmakers hear about Musa', effect: 'West Africa appears as a source of gold on the Catalan Atlas', because: 'Cartographers drew what merchants and travellers reported, and what came back from Cairo was a king holding a nugget.' },
    { cause: 'Europe believes the gold has a findable source', effect: 'Portuguese ships go down the African coast', because: 'Reaching the source by sea would cut out the Saharan middlemen entirely, which was worth several decades of expensive voyages.' },
  ],

  myths: [
    {
      myth: 'Mansa Musa was the richest person in history, worth about $400 billion.',
      reality: 'The figure comes from a website list published in 2012 and has no scholarly basis. There is no accepted method for converting a fourteenth-century ruler’s command over gold, land, tribute and labour into modern currency — the economies have no common measure. What can be said is that contemporaries in the richest city in the Islamic world were astonished, and that the gold price there moved.',
      whyItPersists: 'A number with a dollar sign travels further than a paragraph of caveats, and the claim is repeated in good faith by people who assume someone checked it.',
      sourceIds: ['gomez-2018', 'al-umari-1337'],
    },
    {
      myth: 'Mali was rich because it owned the gold mines.',
      reality: 'The Bambuk and Bure goldfields lay outside Malian control, worked by peoples who guarded their locations and, in the classic accounts, traded without meeting the buyers at all. Mali’s wealth came from taxing the routes and the trading cities — controlling the road rather than the mine, which is both easier and more reliable.',
      whyItPersists: 'Owning a gold mine is a simpler story than operating a customs regime, and empires are usually described by what they possess rather than by what they administer.',
      sourceIds: ['levtzion-hopkins-1981', 'gomez-2018'],
    },
    {
      myth: 'We know the size of his caravan: sixty thousand people and twelve thousand gold-carrying attendants.',
      reality: 'Those numbers appear in sources written decades or centuries after the event and disagree with each other substantially. Contemporary Egyptian accounts describe a very large and impressive column without supplying reliable figures. The atlas reports that it was enormous and does not repeat a count.',
      whyItPersists: 'Specific numbers feel like evidence, and they have been copied from one popular account to the next for a very long time.',
      sourceIds: ['al-umari-1337', 'levtzion-hopkins-1981'],
    },
    {
      myth: 'Musa founded Timbuktu and made it a great centre of learning.',
      reality: 'Timbuktu existed for around two centuries before he annexed it in 1325, and its major flourishing as a scholarly city came later, largely under Songhai rule in the fifteenth and sixteenth centuries. Musa’s contribution was annexation, building, and the connections that started the flow of books and jurists southward.',
      whyItPersists: 'Attaching a city’s whole reputation to its most famous ruler is a standard compression, and the mosque he built is still standing.',
      sourceIds: ['gomez-2018', 'ibn-battuta-1355'],
    },
  ],

  disagreements: [
    {
      question: 'How large was the effect on the Cairo gold market?',
      positions: [
        { view: 'Substantial and lasting: al-Umari, an official who was in Cairo about twelve years afterwards, states that the price of gold fell and had not recovered.', heldBy: 'Al-Umari, and accounts following him', sourceId: 'al-umari-1337' },
        { view: 'Real but probably exaggerated in transmission. Cairo was an enormous market with continuous inflows of gold, and later retellings have amplified a genuine short-term disruption into a decade-long collapse.', heldBy: 'The cautious reading among modern historians', sourceId: 'gomez-2018' },
      ],
      atlasPosition: 'The atlas reports al-Umari’s statement as the testimony of a well-placed observer close to the event, and notes that later versions have grown in the telling. It does not put a percentage on the fall.',
    },
    {
      question: 'What did al-Sahili actually build?',
      positions: [
        { view: 'He introduced a new architectural style to the western Sudan, and the Djinguereber mosque and other buildings represent a Granadan import.', heldBy: 'The older account, following some Arabic sources', sourceId: 'levtzion-hopkins-1981' },
        { view: 'He built specific structures within an existing and sophisticated local mudbrick tradition. The idea that West African architecture began with an imported Andalusian is a colonial-era assumption that the evidence does not support.', heldBy: 'Current architectural and archaeological scholarship', sourceId: 'gomez-2018' },
      ],
      atlasPosition: 'The atlas credits al-Sahili with buildings, including Djinguereber, and rejects the claim that he introduced the technique. Local mudbrick construction long predates him.',
    },
  ],

  didYouKnow: [
    'Mali did not control the goldfields. Its wealth came from taxing the routes — owning the road rather than the mine.',
    'Gold and salt were traded across the Sahara in both directions, and at some times and places salt changed hands weight for weight against gold.',
    'Musa declined to prostrate himself before the Mamluk sultan, and the impasse was solved by his bowing to God instead.',
    'An Egyptian official writing twelve years later said the gold price in Cairo had fallen after Musa’s visit and still had not recovered.',
    'He spent so heavily on the journey that he had to borrow money in Cairo on the way home, from the merchants who had overcharged him on the way out.',
    'The Catalan Atlas of 1375 shows him seated with a gold nugget in his hand — the image that fixed West Africa in the European imagination.',
    'The gold in Europe’s first stable gold coins, the Florentine florin and the Genoese genovino, came substantially up the trans-Saharan routes.',
    'The "richest person in history" figure comes from a website list published in 2012 and has no scholarly basis whatsoever.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'The Mali Empire was founded in the thirteenth century and was a large, institutionally developed state — provinces, governors, an army, a court — by the time Mansa Musa inherited it around 1312. Its wealth came from taxing the trans-Saharan trade: gold and enslaved people moving north, salt, horses and books moving south. It did not own the goldfields, which lay outside its control.',
        'In 1324 Musa made the pilgrimage to Mecca, roughly four thousand kilometres each way. He stopped in Cairo for about three months and gave away and spent gold on a scale nobody there had seen. Al-Umari, a Mamluk official who was in the city twelve years later, records that the price of gold had fallen as a result and had still not recovered.',
        'The hajj was statecraft. Before it, Mali barely appears in Arabic writing; afterwards it is in the chronicles of Egypt and, by 1375, on the Catalan Atlas, where a Majorcan mapmaker drew Musa holding a gold nugget and called him the richest king in the land. That image drove European interest in West African gold and, eventually, the Portuguese voyages down the coast.',
        'The modern claim that he was the richest person in history, worth $400 billion, comes from a website list in 2012 and cannot be supported — there is no way to price a fourteenth-century treasury in dollars.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Seven hundred years ago there was a huge empire in West Africa called Mali. It was about as big as western Europe, with governors and armies and courts — a proper country, not a village.',
        'It was extremely rich, and here is the clever bit: it was not rich because it owned gold mines. The mines were outside the empire, and the people who worked them would not even tell anyone where they were. Mali got rich by taxing everything that travelled through — gold going north across the desert, salt coming south. If you control the road, you do not need to own the mine.',
        'In 1324 the king, Mansa Musa, decided to travel to Mecca, which is about four thousand kilometres away with two months of desert in the middle. He took an enormous group of people and a huge amount of gold.',
        'When he stopped in Cairo — then the biggest, richest city around — he gave gold away to everybody. So much gold that there was suddenly too much of it in the city, and the price of gold went down and stayed down for years. That is like everyone suddenly having a hundred of something: it stops being worth as much.',
        'And it worked, because that was the point. Before the trip, hardly anyone outside Africa had heard of Mali. Afterwards, mapmakers in Europe were drawing him holding a big lump of gold and writing "the richest king in the world" next to him.',
        'One thing to be careful about: people online say he was the richest person ever and give a number in dollars. Nobody can actually work that out. And the empire itself is a much better story than the shopping trip.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The evidentiary base is almost entirely external. Al-Umari’s *Masalik al-absar* is the closest thing to proximate testimony, compiled in Cairo roughly a decade after the hajj from informants who had dealt with the Malian party, and it supplies the gold-price observation that anchors most quantitative discussion. Ibn Battuta’s *Rihla* covers 1352–53 under Mansa Sulayman and is the only substantial eyewitness ethnography of the empire; Ibn Khaldun’s *Kitab al-Ibar* preserves dynastic information gathered from informants in the 1370s. Levtzion and Hopkins remains the standard critical corpus in translation.',
        'The absence of internal fourteenth-century documentation is the central methodological problem. The Sunjata epic and related oral traditions are genuine historical sources with their own transmission history, but they were recorded from the nineteenth century onwards and cannot be read as annalistic. Gomez (2018) attempts the reconstruction of Malian political institutions — succession, office, the relationship between the mansaya and pre-Islamic sources of authority — largely from these materials read against the Arabic corpus, and it is the current point of departure.',
        'On the economics, the important corrective concerns the mode of extraction. Mali exercised no direct control over the Bambuk and Bure alluvial fields; the state’s fiscal base was transit and market taxation plus tribute, which is consistent with the general pattern of Sahelian polities whose power derived from position on the trade corridors rather than from productive assets. The silent-trade accounts should be treated as topos as much as description, but the underlying point about non-control of the source is well supported.',
        'The Cairo price effect has been treated too credulously in popular literature and too dismissively in some corrections. Al-Umari’s testimony is early and well-placed; a substantial short-term disruption in a bullion market with recovery over years is economically unremarkable. What the evidence does not support is a quantified multi-decade collapse, and it certainly does not support the modern dollar valuations, which involve an incommensurability that no amount of index construction resolves.',
        'Finally, the reception history is a subject in its own right. The Catalan Atlas image is the origin point of a European iconography of African gold that runs through Portuguese Atlantic exploration and, later, colonial-era framings of African wealth as natural rather than administered. The modern "richest man in history" meme reproduces that framing with the polarity reversed but the structure intact.',
      ],
    },
    {
      id: 'the-road-not-the-mine',
      label: 'Why owning the road beats owning the mine',
      kind: 'angle',
      paragraphs: [
        'The single most useful fact about the Mali Empire is one the gold stories always skip: it did not control the goldfields.',
        '**Where the gold was.** The alluvial deposits of Bambuk and Bure, to the south and west, worked by peoples who were not Malian subjects and who guarded the locations closely. Arabic sources describe a trade conducted without contact — goods left at an agreed place, gold left in return, no negotiation and no meeting.',
        '**Why nobody seized them.** The recurring detail in the accounts is that when a ruler tried to take direct control, production stopped. Whether or not the specific anecdotes are reliable, the incentive structure is clear enough: alluvial gold requires dispersed labour with local knowledge, and dispersed labour with local knowledge can simply stop.',
        '**What Mali did instead.** It controlled the trading cities and the routes: taxing goods entering and leaving, taking a share of the caravan traffic, and running the markets where gold met salt. This is a customs regime, not an extractive one, and it scales with commerce rather than with conquest.',
        '**Why that shapes everything else.** A state funded by transit has an interest in traffic being safe, predictable and heavy. It wants routes patrolled, disputes settled and merchants confident — which is exactly what Ibn Battuta noticed and admired in 1352, when he remarked on how safely a traveller could move through Malian territory.',
        'The gold is the headline. The customs post is the empire.',
      ],
    },
    {
      id: 'the-number',
      label: 'Where the $400 billion came from',
      kind: 'contrast',
      paragraphs: [
        'It is worth tracing this precisely, because it is a good case study in how a fact gets manufactured.',
        '**The claim.** Mansa Musa was the richest person who ever lived, with a fortune equivalent to about $400 billion in modern money.',
        '**The source.** A list published on a celebrity net-worth website in 2012, which ranked historical figures by estimated wealth. It was picked up by news outlets, then by educational sites, then by everyone.',
        '**Why it cannot be right.** Not because the true figure is lower, but because there is no true figure. Musa’s wealth consisted of control over gold flows, tribute from provinces, land, and the labour of a very large number of people including enslaved people. None of those converts into dollars, because conversion requires a common basket of goods and there is not one across seven hundred years. Ask what a modern billion buys and then ask what it would have bought in Niani in 1320, and the question dissolves.',
        '**What can honestly be said.** Contemporaries in Cairo, the richest city in the Islamic world, were astonished by the scale of his spending. A well-placed official recorded that the gold price fell as a result and had not recovered a decade later. Those are observations by people who were there, and they establish that the quantity was extraordinary by the standards of the largest market that existed.',
        'That is a better claim than the number, because it is checkable. And it does something the number does not: it tells you the effect was measured at the time, by someone with a professional interest in currency.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Mali in the record, before and after 1324',
    before: {
      title: 'Before the hajj',
      points: [
        'A large empire barely mentioned in Arabic writing',
        'Gold known in the Mediterranean, its source a rumour',
        'Africa south of the Maghreb effectively blank on maps',
        'Timbuktu and Gao outside Malian control',
        'Islamic scholarship travelling south only thinly',
      ],
    },
    after: {
      title: 'After the hajj',
      points: [
        'Mali in the chronicles of Egypt and in Ibn Khaldun',
        'A named king identified as the source of the gold',
        'A crowned figure holding a nugget on the Catalan Atlas',
        'Timbuktu and Gao annexed, with new building at both',
        'Jurists, teachers and manuscripts moving south along the routes',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if Musa had never made the hajj?',
      reasoning: 'Mali would very likely have remained, in the external record, a rumour at the end of a caravan route. Without the Cairo spectacle there is no reason for Egyptian chroniclers to collect information about it, probably no Catalan Atlas portrait, and a weaker basis for the European belief that a specific, findable, enormously rich West African kingdom existed.',
      constraint: 'The gold would have kept flowing north regardless, and Europe’s interest in reaching its source was ultimately commercial rather than iconographic. The Portuguese voyages had many drivers. This changes what Europe imagined about West Africa, and probably not whether it went looking.',
    },
    {
      question: 'What if Mali had controlled the goldfields directly?',
      reasoning: 'Direct control would have converted a customs state into an extractive one, with a far larger share of the value and a much stronger fiscal position — potentially a longer-lived empire, better able to resist the Songhai expansion of the fifteenth century.',
      constraint: 'The accounts consistently suggest that attempts at direct control caused production to stop, and alluvial gold recovered by dispersed local labour is unusually hard to coerce. This may be a counterfactual that the technology of the trade simply did not permit, which is itself the interesting finding.',
    },
  ],

  quiz: [
    {
      question: 'Where did Mali’s wealth actually come from?',
      options: [
        'Owning and operating the gold mines',
        'Taxing the trade routes and trading cities',
        'Conquest and plunder of North Africa',
        'Agriculture along the Niger',
      ],
      answerIndex: 1,
      explains: 'The goldfields lay outside Malian control, worked by peoples who guarded their locations. Mali taxed the caravans and markets instead — owning the road rather than the mine.',
    },
    {
      question: 'What happened in Cairo during Musa’s stay in 1324?',
      options: [
        'He was refused entry by the sultan',
        'He gave away so much gold that its price fell and stayed down for years',
        'He was robbed of his entire treasury',
        'He established a permanent Malian embassy',
      ],
      answerIndex: 1,
      explains: 'Al-Umari, a Mamluk official in Cairo about twelve years later, recorded that so much gold entered the market that its value dropped and had still not recovered.',
    },
    {
      question: 'Why did the hajj matter politically?',
      options: [
        'It was required to become king',
        'It made Mali visible as a legitimate Muslim state to the rest of the Islamic world',
        'It secured a military alliance with Egypt',
        'It opened a new trade route',
      ],
      answerIndex: 1,
      explains: 'Before 1324 Mali barely appears in Arabic writing. Afterwards it is in the chronicles of Egypt, in Ibn Khaldun, and eventually on European maps — which was the point of the exercise.',
    },
    {
      question: 'What is the basis for calling him the richest person in history?',
      options: [
        'Detailed Malian treasury records',
        'Calculations by economic historians',
        'A celebrity net-worth website list published in 2012',
        'Al-Umari’s figures from Cairo',
      ],
      answerIndex: 2,
      explains: 'The $400 billion figure comes from a 2012 website ranking and has no scholarly basis. Fourteenth-century wealth cannot be converted into modern currency in any meaningful way.',
    },
  ],

  sources: [
    {
      id: 'al-umari-1337',
      kind: 'primary',
      author: 'Shihab al-Din al-Umari',
      title: 'Masalik al-absar fi mamalik al-amsar',
      year: 1337,
      detail: 'Compiled in Cairo c. 1337–38; translated in Levtzion and Hopkins, "Corpus of Early Arabic Sources for West African History"',
      note: 'The closest thing to proximate testimony: a Mamluk official gathering accounts in Cairo about a decade after the visit. Source of the gold-price observation.',
    },
    {
      id: 'ibn-battuta-1355',
      kind: 'primary',
      author: 'Ibn Battuta',
      title: 'Rihla — the journey to Mali',
      year: 1355,
      detail: 'Travelled 1352–53; dictated 1355. Trans. in Levtzion and Hopkins, and in Hamdun and King, "Ibn Battuta in Black Africa"',
      note: 'The only substantial eyewitness account of the empire by an outsider — arriving under Musa’s brother, and admiring the safety of the roads and the administration of justice.',
    },
    {
      id: 'ibn-khaldun-1377',
      kind: 'primary',
      author: 'Ibn Khaldun',
      title: 'Kitab al-‘Ibar, on the kings of Mali',
      year: 1377,
      detail: 'Compiled c. 1374–78 from informants; translated in Levtzion and Hopkins',
      note: 'The dynastic framework — succession, reigns and the sequence of rulers — assembled by a historian working from people who had been there.',
    },
    {
      id: 'catalan-atlas-1375',
      kind: 'primary',
      author: 'Attributed to Abraham Cresques, Majorca',
      title: 'The Catalan Atlas',
      year: 1375,
      detail: 'Bibliothèque nationale de France, Espagnol 30; six vellum panels',
      note: 'The image that fixed West Africa in the European imagination: a crowned king with a gold nugget, captioned as the richest and most noble in the land.',
    },
    {
      id: 'levtzion-hopkins-1981',
      kind: 'book',
      author: 'Nehemia Levtzion and J. F. P. Hopkins (eds.)',
      title: 'Corpus of Early Arabic Sources for West African History',
      year: 1981,
      detail: 'Cambridge University Press; reissued Markus Wiener, 2000. ISBN 978-1-55876-241-1',
      note: 'The standard critical translation of the Arabic material, with the apparatus needed to see which claims come from witnesses and which from copyists.',
    },
    {
      id: 'gomez-2018',
      kind: 'book',
      author: 'Michael A. Gomez',
      title: 'African Dominion: A New History of Empire in Early and Medieval West Africa',
      year: 2018,
      detail: 'Princeton University Press. ISBN 978-0-691-19682-4',
      note: 'The current reconstruction of Mali as a political system rather than a hoard, and the source of this story’s insistence on institutions over gold.',
    },
  ],
}
