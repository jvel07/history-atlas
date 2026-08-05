import type { Story } from '../types'

/**
 * Voice: the register Barbara Tuchman works in — the specific human texture of
 * a catastrophe, told without abstraction and without flinching, and always
 * anchored to a named place on a dated day. Benedictow supplies the discipline
 * about numbers; Herlihy supplies the argument about what came after.
 */
export const blackDeath: Story = {
  slug: 'black-death',
  title: 'The Wage After',
  subtitle: '1346–1353 — it killed perhaps half of Europe in seven years, and the survivors ended up better off. Both halves are the story.',
  hook: 'The Black Death killed between a third and a half of everyone in Europe in seven years — and within a generation the people who lived through it were being paid more than their parents had ever earned.',
  era: 'medieval',
  category: 'eras',
  years: [1346, 1381],
  regions: ['Europe', 'Middle East', 'Central Asia'],
  nodes: ['black-death', 'yersinia-pestis', 'feudalism', 'silk-road', 'plague-pogroms'],
  tags: ['plague', 'economics', 'labour', 'medicine', 'europe', 'legend'],
  readingMinutes: 11,
  reviewed: '2026-08-05',
  mood: 'noir',

  reel: [
    { beat: 'hook', punch: true, text: 'It killed somewhere between a third and a half of Europe in seven years.' },
    { beat: 'hook', text: 'And the people who survived it ended up richer than their parents had ever been.' },
    { beat: 'worldBefore', kicker: 'c. 1300', text: 'Europe is full. Land is subdivided, harvests are marginal, wages are low,' },
    { beat: 'worldBefore', text: 'and a famine in 1315 has already killed perhaps a tenth of the north.' },
    { beat: 'worldBefore', punch: true, text: 'There are too many people for the land, and no way out of it.' },
    { beat: 'problem', text: 'And Eurasia has never been so easy to cross. One empire runs from Hungary to Korea,' },
    { beat: 'problem', mark: 'web', text: 'so caravans move, and ships move, and everything they carry moves with them.' },
    { beat: 'problem', kicker: '1346', text: 'Something arrives at a Genoese trading port on the Black Sea.' },
    { beat: 'story', kicker: 'October 1347', text: 'Twelve galleys reach Messina in Sicily with most of the crews dead or dying.' },
    { beat: 'story', text: 'The city expels them. It is much too late; it is already ashore.' },
    { beat: 'story', text: 'Genoa by winter. Marseille. Paris by summer. England the following June.' },
    { beat: 'story', punch: true, mark: 'spike', text: 'It moves at the speed of a person travelling, because it is travelling with people.' },
    { beat: 'story', text: 'A physician in Florence writes that the sick died in three days, often in one.' },
    { beat: 'story', text: 'Nobody knows what it is. The best doctors in Europe blame the alignment of planets.' },
    { beat: 'story', punch: true, text: 'So people look for someone to blame instead, and find their neighbours.' },
    { beat: 'story', kicker: 'Strasbourg, 1349', text: 'Hundreds of Jewish communities are accused of poisoning wells, and destroyed.' },
    { beat: 'story', text: 'The pope points out, twice and in writing, that Jews are dying of it too.' },
    { beat: 'story', punch: true, text: 'It changes nothing, because the accusation was never about evidence.' },
    { beat: 'whyItHappened', text: 'Then it stops, and Europe counts, and the arithmetic has quietly inverted.' },
    { beat: 'whyItHappened', text: 'The land is still there. The mills are still there. Half the workers are not.' },
    { beat: 'whyItHappened', punch: true, mark: 'reversal', text: 'For the first time in centuries, labour is the scarce thing.' },
    { beat: 'consequences', text: 'Wages rise. Rents fall. Serfs leave for better offers and are not brought back.' },
    { beat: 'consequences', kicker: '1351', text: 'England makes it illegal to pay more than the wages of 1346.' },
    { beat: 'consequences', punch: true, text: 'The law is enforced constantly, everywhere, for thirty years — which tells you it failed.' },
    { beat: 'consequences', text: 'In 1381 the labourers march on London, and serfdom does not survive the century.' },
    { beat: 'whyItMatters', text: 'None of this was a silver lining. It was a consequence of the scale of the death.' },
    { beat: 'whyItMatters', punch: true, text: 'What made the survivors valuable was that there were so few of them left.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'Europe in 1300 was crowded. Three centuries of population growth had pushed people onto marginal land, subdivided holdings until they were barely viable, and driven real wages down to about the lowest they would be for five hundred years. There were perhaps eighty million people, and the agricultural technology to feed roughly that many in a good year.',
        'The Great Famine of 1315–17 was the first sign that the good years had run out. Rain ruined harvests across northern Europe for three successive seasons, and something like a tenth of the population of the affected regions died. It was survivable, and everything went back to how it had been, which was: too many people, not enough land, wages at subsistence.',
        'This is what economists call a Malthusian trap, and the point about it is that there is no way out from the inside. Any improvement in yields is absorbed by more children surviving, and you end up back at subsistence with more people. Europe had been stuck in it for a very long time.',
        'The other relevant fact about the fourteenth century is that Eurasia had never been so easy to cross. The Mongol conquests had produced a single overarching authority from Hungary to Korea, and under it the overland routes were, for the first time in centuries, safe enough for merchants to use routinely. Genoese and Venetian trading posts sat on the Black Sea coast, at the western end of that system.',
        'Goods moved along it. So did paper, and gunpowder, and stories, and — in the 1340s — something in the fur of a marmot or the fleas in a sack of grain.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Picture it',
        body: 'Imagine an economy where the one thing there is far too much of is people. Land is what pays; if you own it you set the terms, and if you do not, you accept them. Every institution of medieval Europe — serfdom, guild restrictions, land rents — was built on the assumption that a worker could always be replaced. In 1348 that assumption stopped being true, and nothing was designed for it.',
      },
      sourceIds: ['herlihy-1997', 'benedictow-2004'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'The disease was plague, caused by the bacterium *Yersinia pestis*. That sentence was contested for decades and is now about as settled as anything in medieval history: in 2011 a team recovered and reconstructed a draft *Y. pestis* genome from the teeth of victims buried in the East Smithfield emergency cemetery in London, dug in 1348 specifically for the dead of this epidemic.',
        'In 2022 another team went further back, sequencing plague genomes from a cemetery near Lake Issyk-Kul in Kyrgyzstan where the burials of 1338–39 are marked with an unusual phrase — that the deceased died of pestilence. Those strains sit at exactly the point in the bacterium’s family tree from which the fourteenth-century pandemic descends. It is the strongest evidence yet for where it came from.',
        'What is much less settled is how it spread, and this matters more than it sounds. The textbook model is rats and their fleas: the bacterium circulates in rodents, the fleas bite humans when the rats die, and the disease follows the rat population. That fits the bubonic form and the Indian plague outbreaks that were studied in detail around 1900.',
        'It fits the Black Death considerably less well. This epidemic moved too fast, spread in winter, moved through regions with no significant rat populations, and killed at rates the rat model struggles to produce. Recent modelling work argues that human ectoparasites — the human flea and the body louse — fit the observed pattern far better, and that person-to-person transmission was doing most of the work.',
        'Either way, one thing was true and is the whole horror of it: nobody at the time had any idea. The medical faculty of the University of Paris, asked by the king for an explanation, produced a report attributing the plague to a conjunction of Saturn, Jupiter and Mars in the sign of Aquarius on 20 March 1345.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'That the pathogen was *Yersinia pestis* is now established by ancient DNA. How it was transmitted at the scale and speed observed is genuinely open, and the rat-flea model that appears in most textbooks is under serious challenge. Those are two different questions and the atlas keeps them separate.',
        sourceId: 'bos-2011',
      },
      sourceIds: ['bos-2011', 'spyrou-2022', 'benedictow-2004'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'In 1346 the plague appeared at Caffa, a Genoese trading colony in the Crimea, during a siege by the Golden Horde. A notary from Piacenza named Gabriele de’ Mussis later wrote that the besiegers catapulted their own plague dead over the walls, and this has been retold ever since as the first recorded use of biological warfare. It may have happened. De’ Mussis was not there, and the plague was going to reach the Mediterranean by ship regardless.',
        'In October 1347 twelve galleys put into the harbour at Messina in Sicily with most of the men aboard dead or dying. The city ordered them out. It made no difference; the port had been infected the moment they tied up. From Sicily it went to Genoa and Venice, to Marseille in the winter of 1347, across France through the spring, to Paris by June 1348, to England later that month, to Scandinavia in 1349, and to Russia in 1351 — arriving, finally, from the west, having gone all the way around.',
        'It travelled at roughly the speed of human movement: about two to four kilometres a day overland, and as fast as a ship along the coasts. That, more than anything, is what identifies it as something people were carrying.',
        'The symptoms in the bubonic form were swellings — buboes — in the groin, armpit or neck, with fever and black or purple blotches, and death usually within three to five days. There was also a pneumonic form, in the lungs, spread by coughing, which killed in a day or two and killed nearly everyone it touched.',
        'Contemporary accounts converge on the same details, in different countries, from different kinds of writer: the speed, the smell, the abandonment. Boccaccio, who was in Florence in 1348, describes people breakfasting with their families and dining with their ancestors, brothers abandoning brothers, and — the detail that recurs everywhere — bodies in the street with nobody willing to move them for any price.',
        'Estimates of the death toll have been revised upward over the last generation. The old figure of one third came from limited English data. Ole Benedictow, working through local records across Europe, argues for around sixty per cent. Most historians now use a range of a third to a half, with some regions far worse and a few — Milan, parts of Poland and Bohemia — largely spared for reasons nobody fully understands.',
        'And then there is what people did while it was happening. With no explanation available, some concluded that the wells had been poisoned. Between 1348 and 1351 Jewish communities across the Rhineland and beyond were accused, tortured into confession and destroyed: Basel, Strasbourg, Mainz, Cologne, Erfurt, Brussels, and hundreds of smaller places. In Strasbourg on 14 February 1349, some two thousand Jews were burned in the city’s Jewish cemetery. The plague had not yet reached the city.',
        'Pope Clement VI issued two bulls, in July and September 1348, condemning the killings and pointing out that Jews were dying of the plague in the same numbers as everyone else. He was ignored. Where communities were destroyed, their debts were frequently cancelled and their property distributed, which is the part that suggests the accusation was doing work other than explanation.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'Boccaccio, writing in Florence within a year or two of the epidemic, describes a city where the customary rites of death simply stopped: the dying left alone, funerals without mourners, and corpses carried out and laid at the doors of houses in such numbers that the living stepped past them. He is not writing history. He is writing what he had just watched happen.',
        sourceId: 'boccaccio-1353',
      },
      sourceIds: ['boccaccio-1353', 'de-mussis-1348', 'clement-vi-1348', 'benedictow-2004'],
    },

    whyItHappened: {
      heading: 'Why the survivors got richer',
      paragraphs: [
        'Here is the part that is genuinely counter-intuitive, and it is arithmetic rather than consolation.',
        'A pandemic kills people. It does not destroy fields, mills, ploughs, buildings, roads or livestock — unlike a war, which destroys all of them. So on the other side of the Black Death, Europe had roughly the same amount of capital and land as before, and between a third and a half fewer people to work it.',
        '**Land became abundant and labour became scarce.** The marginal fields, the ones that had barely been worth farming when there were too many mouths, went out of cultivation, and everyone worked the good land. Output per person rose because the worst land was abandoned.',
        '**Which meant workers could bargain.** Real wages in England roughly doubled over the following century, and stayed high for two hundred years. A labourer could refuse an offer and walk to the next village, where somebody would meet his price, because everybody needed hands.',
        '**And the legal machinery of serfdom stopped working.** Serfdom depends on the labourer having nowhere else to go. When every manor in the country is short of workers and quietly hiring runaways, a lord who insists on his ancient dues finds his land empty. In western Europe serfdom faded within roughly a century, not because anyone abolished it but because it stopped being enforceable.',
        'Governments understood exactly what was happening and tried to stop it. England passed the Ordinance of Labourers in 1349 and the Statute of Labourers in 1351, fixing wages at their 1346 levels and making it a criminal offence to demand or to offer more. The enforcement records are extensive, and that is precisely the evidence that it did not work: a law that is obeyed does not need prosecuting for thirty years.',
        'What it did produce was a generation of labourers with more money and a state that was visibly trying to take it back. In 1381, after a third poll tax, they marched on London, killed the Archbishop of Canterbury and the Lord Treasurer, and demanded the end of serfdom outright. The revolt was crushed and its leaders executed. Serfdom died anyway, over the following century, of economics.',
      ],
      sourceIds: ['herlihy-1997', 'statute-of-labourers-1351', 'benedictow-2004'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'It is the largest demographic event in European history, and almost nothing looked the same afterwards.',
      ],
      shortTerm: [
        'Between a third and a half of Europe’s population died between 1347 and 1353 — perhaps twenty-five to fifty million people out of about eighty million.',
        'Hundreds of Jewish communities were destroyed in massacres between 1348 and 1351, most concentrated in the Rhineland and often before the plague had even arrived.',
        'The flagellant movement spread across Germany and the Low Countries, marching from town to town scourging themselves, until Clement VI condemned it in October 1349.',
        'Roughly a fifth of English villages were abandoned outright over the following decades, leaving the earthwork outlines still visible in fields today.',
        'Wages began rising immediately, and governments across Europe legislated to stop them.',
      ],
      longTerm: [
        'Real wages in England roughly doubled and remained high until the sixteenth century. It was the best time to be an ordinary labourer in Europe until the industrial era.',
        'Serfdom effectively disappeared in western Europe over the following century — while in eastern Europe, where lords were politically stronger, it was tightened instead. The same shock produced opposite outcomes depending on who held power.',
        'Labour scarcity pushed employers towards anything that saved labour: water mills, better ploughs, printing later on. Herlihy’s argument is that the plague broke a Malthusian deadlock and moved Europe onto a higher-wage, more capital-intensive path.',
        'Deference to authority took lasting damage. The Church had prayed and processed and buried its own priests in enormous numbers, and the university physicians had blamed the planets. Neither recovered its former standing entirely.',
        'The plague did not leave. It returned roughly every generation for three hundred years — Milan in 1630, London in 1665, Marseille in 1720 — before finally receding from Europe.',
      ],
      unexpected: [
        'The best evidence for where it started comes from two cemeteries in Kyrgyzstan, where tombstones dated 1338 and 1339 record deaths from pestilence, and the bacteria recovered from the graves sit at the root of the pandemic’s family tree.',
        'The 1351 Statute of Labourers is one of the earliest wage-control laws in English history, and the volume of prosecutions under it is our best proof of how completely wages had risen.',
        'In many places the massacres of Jewish communities happened before the plague arrived, which means they were not a reaction to local deaths but to the news that deaths were coming.',
        'Because so much wealth was inherited by so few survivors, a generation of ordinary families found itself unexpectedly rich, and the market for luxury goods, art and building in Italy expanded rather than collapsed.',
        'English became the language of the English courts and parliament in the decades after the plague. One suggested reason is that the French-speaking elite lost disproportionate numbers, and their children were raised by English-speaking survivors.',
      ],
      sourceIds: ['herlihy-1997', 'spyrou-2022', 'statute-of-labourers-1351'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The Black Death is the clearest case in history of a catastrophe changing a society’s structure rather than merely damaging it — and the mechanism is not moral, it is arithmetic.',
        'Nothing about the plague was constructive. It killed tens of millions of people in agony, in seven years, and the survivors watched it. What followed happened *because* of the scale of the death, not in spite of it: land and tools survive an epidemic and people do not, so the ratio between them inverts, and everything built on the old ratio comes under pressure at once. Serfdom, wage law, the price of bread, the balance between landlord and labourer — all of it moved because the arithmetic underneath had moved.',
        'That is worth holding carefully, because the story is very easy to tell badly. This is not "every cloud has a silver lining". It is closer to the opposite: the survivors got a better deal only in proportion to how many of their neighbours had died, and the moment population recovered in the sixteenth century, wages fell again.',
        'The second thing worth keeping is what people did with an unexplained disaster. Offered no cause they could act on, a great many communities settled on one they could — and the massacres of 1348–49 frequently preceded the plague’s arrival, which means they were a response to fear rather than to loss. The pope told them in writing that it made no sense. It did not matter, because the explanation was not the point.',
        'And the third is that the same shock produced serfdom’s collapse in the west and its tightening in the east. The plague did not decide that. The relative power of lords and labourers in each place decided it. A disaster does not have a politics of its own; it applies pressure, and the existing arrangement decides which way things break.',
      ],
      sourceIds: ['herlihy-1997', 'benedictow-2004'],
    },
  },

  timeline: [
    { year: 1315, title: 'The Great Famine', detail: 'Three years of ruined harvests across northern Europe kill perhaps a tenth of the population, and demonstrate how little slack the system has.' },
    { year: 1338, title: 'Deaths from pestilence near Issyk-Kul', detail: 'Tombstones in a cemetery in what is now Kyrgyzstan record an unusual cause of death. Plague genomes recovered there sit at the root of the pandemic.', pivotal: true, confidence: 'contested' },
    { year: 1346, title: 'Plague at Caffa', detail: 'It appears at a Genoese trading colony in the Crimea during a siege. The story of corpses catapulted over the walls comes from a writer who was not there.', pivotal: true },
    { year: 1347, date: '1347-10', title: 'Twelve galleys reach Messina', detail: 'They arrive in Sicily with most of the crews dead or dying. The city expels them, far too late — the port is already infected.', pivotal: true },
    { year: 1348, title: 'Across the continent', detail: 'Genoa and Venice in the winter, Marseille, then France through the spring, Paris by June, and England later the same month.', pivotal: true },
    { year: 1348, title: 'Clement VI defends the Jewish communities', detail: 'Two papal bulls condemn the massacres and note that Jews are dying of the plague in the same numbers as everyone else. They change nothing.', pivotal: true },
    { year: 1349, date: '1349-02-14', title: 'The Strasbourg massacre', detail: 'Around two thousand Jews are burned in the city’s cemetery, on the accusation of poisoning wells. The plague has not yet reached Strasbourg.', pivotal: true },
    { year: 1349, title: 'The Ordinance of Labourers', detail: 'With workers demanding higher pay, England makes it an offence to ask for or offer more than pre-plague wages.' },
    { year: 1351, title: 'The Statute of Labourers', detail: 'Parliament makes the wage freeze statutory. Prosecutions run for decades, which is the evidence that wages kept rising anyway.', pivotal: true },
    { year: 1353, title: 'The first wave ends', detail: 'The pandemic subsides after reaching Russia from the west. Between a third and a half of Europe has died in about seven years.', pivotal: true },
    { year: 1381, title: 'The Peasants’ Revolt', detail: 'After a third poll tax, English labourers march on London and demand the end of serfdom. The revolt is crushed; serfdom fades anyway.', pivotal: true },
    { year: 1665, title: 'The Great Plague of London', detail: 'One of the last major European outbreaks. The disease returned roughly every generation for three centuries after 1353.' },
    { year: 2011, title: 'The genome from East Smithfield', detail: 'A draft Yersinia pestis genome is reconstructed from the teeth of victims in a London cemetery dug in 1348, settling what the disease was.', pivotal: true },
  ],

  causeEffect: [
    { cause: 'Three centuries of population growth fill Europe', effect: 'Wages fall to subsistence and land is subdivided', because: 'When labour is abundant relative to land, the people who own land set the terms and everyone else accepts them.' },
    { cause: 'The Mongol conquests unify Eurasia', effect: 'Overland trade routes become usable again', because: 'A single authority from Hungary to Korea meant caravans could cross without negotiating with a dozen hostile powers.' },
    { cause: 'Trade routes carry goods faster and further', effect: 'A bacterium reaches the Black Sea', because: 'Plague circulates in rodents in central Asia, and a rodent or its fleas travel very well in a grain sack.' },
    { cause: 'The disease spreads with people rather than rats alone', effect: 'It moves at the speed of human travel', because: 'Two to four kilometres a day overland and ship-speed by sea is the signature of something being carried, not something crawling.' },
    { cause: 'Nobody can explain the cause', effect: 'Communities invent one and kill their neighbours', because: 'An unexplained catastrophe is unbearable, and an accusation with debts attached to it was useful to more than one party.' },
    { cause: 'A third to a half of the workforce dies', effect: 'Land becomes abundant and labour becomes scarce', because: 'Plague kills people and leaves fields, mills and ploughs standing, so the ratio between them inverts overnight.' },
    { cause: 'Labour becomes scarce', effect: 'Real wages roughly double and serfdom collapses in the west', because: 'A worker who can walk to the next manor and be hired has leverage, and serfdom depends on there being nowhere else to go.' },
    { cause: 'Governments legislate to freeze wages', effect: 'Thirty years of prosecutions and eventually a revolt', because: 'A law against economics is enforceable only at a cost, and the cost here was the loyalty of everyone it was enforced against.' },
  ],

  myths: [
    {
      myth: 'The Black Death killed a third of Europe.',
      reality: 'A third was the older estimate, based largely on English clerical records. Work across a much wider range of local sources has pushed estimates up: Benedictow argues for around sixty per cent, and most historians now use a range of a third to a half, noting large regional variation. The honest statement is a range, not a figure.',
      whyItPersists: 'The one-third figure was in textbooks for a century, and it is easier to remember one number than a range with a regional caveat attached.',
      sourceIds: ['benedictow-2004'],
    },
    {
      myth: 'It was spread by rats and their fleas.',
      reality: 'The pathogen is certainly *Yersinia pestis*, confirmed by DNA from fourteenth-century burials. But the rat-flea model comes from studying plague in India around 1900, and it fits this pandemic poorly: the Black Death moved too fast, spread in winter, and reached regions with few rats. Recent work argues that human fleas and body lice — person to person — better explain the observed pattern.',
      whyItPersists: 'The rat is in every textbook and every illustration, and the correction is recent, technical and less vivid than a rat.',
      sourceIds: ['bos-2011', 'benedictow-2004'],
    },
    {
      myth: 'The Mongols invented biological warfare by catapulting plague corpses into Caffa.',
      reality: 'The story comes from Gabriele de’ Mussis, a notary in Piacenza who was not present and wrote it up afterwards. It may be true. It is also not needed to explain anything: the plague was moving along the trade routes and would have reached Mediterranean ports by ship in any case.',
      whyItPersists: 'It is a startling image and it gives an amorphous catastrophe a deliberate human author, which stories prefer.',
      sourceIds: ['de-mussis-1348', 'benedictow-2004'],
    },
    {
      myth: 'Doctors wore the beaked plague masks during the Black Death.',
      reality: 'The beaked mask was designed by Charles de Lorme in the 1610s — more than two hundred and fifty years later — for later plague outbreaks, and even then its use was limited. Nobody in 1348 wore one.',
      whyItPersists: 'It is the single most recognisable image associated with plague, and images travel backwards through time much more easily than dates do.',
      sourceIds: ['benedictow-2004'],
    },
  ],

  disagreements: [
    {
      question: 'How was the plague actually transmitted?',
      positions: [
        { view: 'Classically, by rat fleas: the bacterium circulates in rodent populations, and fleas transfer to humans when rats die. This is the model derived from the Indian outbreaks studied around 1900.', heldBy: 'The traditional epidemiological account', sourceId: 'benedictow-2004' },
        { view: 'Mainly by human ectoparasites — human fleas and body lice — passing person to person. This better explains the speed, the winter spread and the regions with few rats.', heldBy: 'Recent modelling work on the mortality curves', sourceId: 'bos-2011' },
      ],
      atlasPosition: 'The atlas states that the pathogen was *Yersinia pestis*, which ancient DNA has settled, and treats the transmission route as an open question with the rat-flea model under serious challenge. It does not narrate rats as the established mechanism.',
    },
    {
      question: 'How many people died?',
      positions: [
        { view: 'Around a third of Europe — the long-standing estimate, drawn largely from English ecclesiastical records.', heldBy: 'The older consensus', sourceId: 'herlihy-1997' },
        { view: 'Closer to sixty per cent, based on a systematic survey of local records across Europe rather than a few well-documented regions.', heldBy: 'Ole Benedictow', sourceId: 'benedictow-2004' },
      ],
      atlasPosition: 'The atlas uses "between a third and a half" as its working range, notes Benedictow’s higher figure, and flags the wide regional variation. It does not present any single percentage as established.',
    },
    {
      question: 'Did the plague cause the economic transformation that followed?',
      positions: [
        { view: 'Yes, decisively. It broke a Malthusian deadlock, inverted the land-to-labour ratio, doubled real wages, ended western serfdom and pushed Europe towards labour-saving technology.', heldBy: 'David Herlihy', sourceId: 'herlihy-1997' },
        { view: 'It was a powerful shock whose effects depended entirely on local political structures — the same demographic collapse tightened serfdom in eastern Europe while dissolving it in the west.', heldBy: 'The comparative economic-history literature', sourceId: 'benedictow-2004' },
      ],
      atlasPosition: 'The atlas holds both: the demographic shock created the pressure, and existing power relations decided which way each region broke. It does not present the western outcome as the natural or inevitable one.',
    },
  ],

  didYouKnow: [
    'Plague kills people and leaves fields, mills and ploughs standing — which is why the survivors ended up with more capital each, and why wages rose.',
    'England made it a criminal offence in 1351 to pay or accept more than 1346 wages. It was prosecuted for thirty years, which is how we know it failed.',
    'Real wages in England roughly doubled after the plague and stayed high for two centuries. It was the best time to be a labourer until the industrial age.',
    'In many towns the massacres of Jewish communities happened before the plague arrived — a reaction to the news, not to local deaths.',
    'Pope Clement VI issued two bulls in 1348 pointing out that Jews were dying of the plague in the same numbers as everyone else. It changed nothing.',
    'The beaked plague mask was invented in the 1610s, more than two hundred and fifty years after the Black Death.',
    'The disease was finally identified beyond argument in 2011, from DNA in the teeth of victims buried in a London cemetery dug in 1348.',
    'The same demographic collapse ended serfdom in western Europe and tightened it in eastern Europe. The difference was who held political power.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Europe in 1300 was overcrowded, with wages near subsistence and no way out of the trap. Meanwhile the Mongol conquests had made Eurasian trade routes usable again, and in 1346 plague reached a Genoese colony on the Black Sea.',
        'In October 1347 twelve galleys arrived at Messina with most of the crews dead. From Sicily the disease crossed Europe in about six years — Paris by June 1348, England that same month, Russia by 1351 — travelling at the speed of human movement. Between a third and a half of the population died. Nobody knew what it was; the University of Paris blamed a planetary conjunction.',
        'With no explanation available, hundreds of Jewish communities were accused of poisoning wells and destroyed, often before the plague had even arrived. The pope condemned the killings in writing, twice, and was ignored.',
        'Then the arithmetic inverted. Plague kills people but leaves land, mills and tools intact, so labour became scarce for the first time in centuries. Wages roughly doubled, serfdom became unenforceable in western Europe, and England spent thirty years prosecuting people under a law freezing wages at their 1346 level. In 1381 the labourers marched on London. Serfdom died anyway — of economics.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'In the 1340s a disease arrived in Europe and killed somewhere between a third and a half of everybody. Not a third of one town — a third of everyone, in about seven years. It is the worst thing that has ever happened to Europe.',
        'Nobody knew what caused it. The cleverest doctors in France said it was because the planets had lined up wrong. And when people cannot explain something terrible, some of them start blaming other people: Jewish communities all over Germany were accused of poisoning the wells, and thousands were murdered — sometimes before the disease had even reached their town.',
        'Now here is the strange part. After it stopped, the people who were still alive slowly became better off than their parents had ever been.',
        'Think about why. The disease killed people, but it did not burn the fields, or break the mills, or kill the sheep. So afterwards there was the same amount of land and stuff, and only about half as many people to share it. If you were a worker, suddenly everybody needed you, and you could say "pay me more or I will go and work in the next village".',
        'The government in England actually made it against the law to pay people more. They spent thirty years taking people to court over it, and it did not work, because you cannot really stop that once it has started.',
        'It is important not to call this a happy ending. It was only better for the survivors because so many people had died.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The aetiological question is now closed. Bos et al. (2011) reconstructed a draft *Y. pestis* genome from East Smithfield, and subsequent work has confirmed and extended it; Spyrou et al. (2022) locate the source population of the polytomy in the Tian Shan region via genomes from Kara-Djigach, dated by inscriptions to 1338–39. The Twigg–Cohn revisionist position that the Black Death was not plague is no longer tenable on the molecular evidence, although Cohn’s epidemiological objections retain force as objections to the *transmission model* rather than to the pathogen.',
        'That transmission question is the live one. The classical rat–*Xenopsylla cheopis* model, derived from the Third Pandemic in India, generates mortality curves and spatial diffusion rates that fit the fourteenth-century evidence poorly: observed spread velocities, winter transmission, and diffusion through low-*Rattus* zones are all difficult to accommodate. Compartmental modelling comparing rat, human-ectoparasite and pneumonic models against mortality series from multiple European cities favours human ectoparasite transmission in most, which has substantial implications for how one reads the mortality figures.',
        'On demography, Benedictow’s revision upward to c. 60 per cent rests on aggregating local studies rather than extrapolating from the well-documented English clerical series, and has been criticised for selection effects in which localities produce usable records. The prudent range remains one third to one half with high regional variance, and the variance itself is the interesting datum.',
        'The economic historiography turns on the Herlihy thesis: the plague as exogenous shock releasing a Malthusian equilibrium, raising the marginal product of labour, doubling real wages and inducing labour-saving technical change. The strongest test is the divergence between western and eastern Europe under an identical demographic shock — the *Gutsherrschaft* consolidation east of the Elbe against the dissolution of villeinage in England — which indicates that factor-ratio shifts are mediated by the pre-existing distribution of coercive capacity. Brenner’s formulation of this remains the standard framing of the debate.',
        'Finally, the 1348–49 persecutions warrant treatment on their own evidential terms. Their frequent temporal precedence relative to local plague arrival, and the correlated cancellation of debts and redistribution of property, argue against a purely epidemiological-panic explanation and towards models incorporating pre-existing credit relations and municipal politics.',
      ],
    },
    {
      id: 'the-arithmetic',
      label: 'Why the survivors got a raise',
      kind: 'angle',
      paragraphs: [
        'The economics of this is simple enough to do on paper, and it explains almost everything that followed.',
        '**Start with what a plague destroys.** People. That is the list. The fields are still there in the spring. The mills still turn. The ploughs, the barns, the sheep, the roads, the town walls — all of it survives. This is what makes an epidemic different from a war, which destroys the capital and the people together.',
        '**Now the ratio.** Before 1347, Europe had a great deal of labour and a fixed amount of good land, so land was the scarce factor and landowners captured the surplus. After 1353, the same land had between a third and a half fewer people working it. Labour became the scarce factor. Whoever holds the scarce factor sets the price.',
        '**Then the second-order effect.** With fewer people, the worst land — the marginal plots that had been farmed only because there was no alternative — was abandoned. Everybody worked the good land. So output per worker rose as well, which meant there was genuinely more to go around per head, not just a redistribution.',
        '**And the institutional collapse.** Serfdom is a legal arrangement that only works if the serf cannot leave. When every manor in the country is desperate for hands and quietly hiring anyone who arrives, the arrangement stops being enforceable, regardless of what the law says. England’s wage laws are the proof: nobody legislates against something that is not happening.',
        'The uncomfortable corollary is that this reverses. As European population recovered through the sixteenth century, real wages fell back towards subsistence, and by 1600 an English labourer was worse off than his great-great-grandfather had been in 1450. Nothing had been won permanently. The advantage was a function of how many people had died.',
      ],
    },
    {
      id: 'east-and-west',
      label: 'The same shock, opposite results',
      kind: 'contrast',
      paragraphs: [
        'If demographic collapse automatically frees labour, then serfdom should have ended everywhere. It did not, and the exception is the most instructive thing in the whole subject.',
        '**West of the Elbe.** Labour scarcity, competing employers, relatively strong royal jurisdiction and towns willing to shelter runaways. Serfs bargained, moved and bought their freedom; lords converted labour dues to rents and then rents to money. Villeinage in England is effectively gone by the later fifteenth century, without ever being abolished.',
        '**East of the Elbe.** The same labour scarcity, and the opposite outcome. Landlords were politically dominant, towns were weaker, and central authority was thin. Rather than compete for labour, lords used their control of local law to tie peasants to the land more tightly than before — restricting movement, increasing labour services, and consolidating large demesne estates producing grain for export west. Historians call it the second serfdom, and in parts of eastern Europe it lasted into the nineteenth century.',
        'Identical shock. Identical economics. Opposite institutional result — because in one place the peasants could walk away and in the other the lords could stop them.',
        'That is the lesson worth taking, and it generalises well past 1348. A shock does not have a political direction of its own. It applies pressure to whatever arrangement already exists, and the arrangement decides where the pressure goes.',
      ],
    },
  ],

  beforeAfter: {
    label: 'A labourer’s world, before and after',
    before: {
      title: 'Europe in 1340',
      points: [
        'Too many people for the available good land',
        'Real wages at or near subsistence',
        'Serfdom enforceable, because there is nowhere to go',
        'Marginal fields farmed because there is no alternative',
        'Landlords capturing the surplus',
      ],
    },
    after: {
      title: 'Europe in 1400',
      points: [
        'Land abundant, and a third to a half of the workers gone',
        'Real wages roughly doubled and staying high',
        'Serfdom unenforceable in the west, tightened in the east',
        'Marginal land abandoned, output per worker higher',
        'Governments legislating, unsuccessfully, to hold wages down',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the plague had never crossed into Europe?',
      reasoning: 'Europe would have remained in the Malthusian condition of 1300: high population, subsistence wages, subdivided holdings and enforceable serfdom. Herlihy’s argument implies that the pressure to adopt labour-saving technology, and the wage levels that made urban skilled labour attractive, would both have been much weaker for much longer.',
      constraint: 'Speculation, and it should not be read as the plague being necessary for European development. Population was already pressing against a technological ceiling that other shocks — famine, war, climate — were also testing, and the eastern European outcome shows that the same shock can entrench the old arrangement rather than break it.',
    },
    {
      question: 'What if the wage laws had been enforceable?',
      reasoning: 'If England had successfully frozen wages at 1346 levels, the surplus created by labour scarcity would have gone to landlords rather than labourers, serfdom might have been sustained by statute in the west as it was by lordly power in the east, and the divergence between the two halves of Europe might never have opened.',
      constraint: 'It is not obvious that it was enforceable at any price. The state had no police, enforcement depended on the same local gentry who were themselves competing for workers, and every employer had a private incentive to break the law. Eastern Europe achieved the outcome through lordly power over local jurisdiction rather than through national statute, which suggests the mechanism matters.',
    },
  ],

  quiz: [
    {
      question: 'Why did wages rise after the Black Death?',
      options: [
        'Governments raised them by law',
        'Plague killed people but left land, mills and tools intact, so labour became scarce',
        'New farming methods were invented',
        'Trade with Asia made Europe richer',
      ],
      answerIndex: 1,
      explains: 'An epidemic destroys people and not capital. With the same fields and half the workers, labour became the scarce factor — and whoever holds the scarce factor can set the price.',
    },
    {
      question: 'What was the Statute of Labourers?',
      options: [
        'A law guaranteeing a minimum wage',
        'A law freeing serfs from their obligations',
        'A 1351 English law making it illegal to pay or demand more than pre-plague wages',
        'A tax on landowners',
      ],
      answerIndex: 2,
      explains: 'Parliament tried to freeze wages at their 1346 level. It was prosecuted continuously for thirty years, which is the clearest evidence that wages were rising regardless.',
    },
    {
      question: 'What is the current state of the rat-flea explanation?',
      options: [
        'It is confirmed by DNA evidence',
        'It is seriously challenged: the spread was too fast and reached regions with few rats',
        'It has been abandoned entirely',
        'It was never proposed by scientists',
      ],
      answerIndex: 1,
      explains: 'DNA confirms the pathogen was Yersinia pestis, but not the route. The rat model comes from studying plague around 1900 and fits the fourteenth century poorly; human fleas and lice are now a leading alternative.',
    },
    {
      question: 'Why did serfdom end in western Europe but tighten in eastern Europe?',
      options: [
        'The plague was much worse in the west',
        'Eastern rulers passed better laws',
        'Landlords in the east had enough local power to stop peasants leaving',
        'The east had no labour shortage',
      ],
      answerIndex: 2,
      explains: 'The demographic shock was similar. Where peasants could walk away and be hired, they bargained their way out; where lords controlled local jurisdiction, they tied peasants down instead.',
    },
  ],

  sources: [
    {
      id: 'boccaccio-1353',
      kind: 'primary',
      author: 'Giovanni Boccaccio',
      title: 'The Decameron, introduction to the First Day',
      year: 1353,
      detail: 'Written c. 1349–53; standard English translation by G. H. McWilliam, Penguin Classics',
      note: 'An eyewitness of Florence in 1348, writing within a year or two. The best account of what the epidemic did to ordinary social behaviour.',
    },
    {
      id: 'de-mussis-1348',
      kind: 'primary',
      author: 'Gabriele de’ Mussis',
      title: 'Historia de Morbo (Account of the Plague)',
      year: 1348,
      detail: 'Written in Piacenza c. 1348; trans. in Rosemary Horrox, "The Black Death", Manchester University Press, 1994',
      note: 'The source of the Caffa catapult story, and of much else. He was not at Caffa, which is the necessary caveat every time it is repeated.',
    },
    {
      id: 'clement-vi-1348',
      kind: 'primary',
      author: 'Pope Clement VI',
      title: 'Papal bulls on the protection of the Jews (July and 26 September 1348)',
      year: 1348,
      detail: 'Issued at Avignon; texts in Horrox, "The Black Death", and in Simonsohn, "The Apostolic See and the Jews"',
      note: 'Condemns the massacres and points out that Jews were dying of the plague too. Evidence that the accusation was known to be baseless at the time.',
    },
    {
      id: 'statute-of-labourers-1351',
      kind: 'primary',
      author: 'The Parliament of England',
      title: 'The Statute of Labourers, 25 Edward III',
      year: 1351,
      detail: 'Statutes of the Realm, vol. I; following the Ordinance of Labourers, 1349',
      note: 'Wages frozen by law at 1346 levels. The extensive record of prosecutions under it is the best single proof of how far wages had actually risen.',
    },
    {
      id: 'benedictow-2004',
      kind: 'book',
      author: 'Ole J. Benedictow',
      title: 'The Black Death 1346–1353: The Complete History',
      year: 2004,
      detail: 'Boydell Press. ISBN 978-0-85115-943-0',
      note: 'The most systematic survey of local mortality data, and the source of the higher death-rate estimates. Careful, granular and argumentative.',
    },
    {
      id: 'herlihy-1997',
      kind: 'book',
      author: 'David Herlihy',
      title: 'The Black Death and the Transformation of the West',
      year: 1997,
      detail: 'Harvard University Press, ed. Samuel K. Cohn Jr. ISBN 978-0-674-07613-6',
      note: 'The argument that the plague broke a Malthusian deadlock and pushed Europe onto a higher-wage, more technological path. The source of this story’s spine.',
    },
    {
      id: 'bos-2011',
      kind: 'paper',
      author: 'Kirsten I. Bos, Verena J. Schuenemann, G. Brian Golding and others',
      title: 'A draft genome of Yersinia pestis from victims of the Black Death',
      year: 2011,
      detail: 'Nature, vol. 478, pp. 506–510',
      note: 'DNA from the teeth of victims in the East Smithfield cemetery, dug in London in 1348. This is what settled what the disease was.',
    },
    {
      id: 'spyrou-2022',
      kind: 'paper',
      author: 'Maria A. Spyrou, Lyazzat Musralina, Johannes Krause and others',
      title: 'The source of the Black Death in fourteenth-century central Eurasia',
      year: 2022,
      detail: 'Nature, vol. 606, pp. 718–724',
      note: 'Plague genomes from graves near Lake Issyk-Kul dated by their own inscriptions to 1338–39, sitting at the root of the pandemic’s family tree.',
    },
  ],
}
