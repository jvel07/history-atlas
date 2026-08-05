import type { Story } from '../types'

/**
 * Voice: Eric Cline's own register in *1177 B.C.* — a working archaeologist,
 * completely comfortable saying "we do not know", far more interested in how
 * connected the world was than in naming a villain. The point of the story is
 * that a systems failure has no single cause, and that this is the frightening
 * part rather than the disappointing one.
 */
export const bronzeAgeCollapse: Story = {
  slug: 'bronze-age-collapse',
  title: 'The Year Everything Stopped',
  subtitle: 'c. 1200 BC — eight kingdoms traded, wrote and argued with each other. Within fifty years, almost none of them existed.',
  hook: 'Around 1200 BC the eastern Mediterranean held a network of great powers who wrote to each other constantly. Within about fifty years, almost every one of them had ceased to exist.',
  era: 'ancient',
  category: 'ancient',
  years: [-1300, -1100],
  regions: ['Anatolia', 'Syria', 'Greece', 'Egypt', 'Cyprus'],
  nodes: ['bronze-age-collapse', 'sea-peoples', 'hittite-empire', 'ugarit', 'mycenaean-greece'],
  tags: ['collapse', 'trade', 'climate', 'archaeology', 'mediterranean', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'Around 1200 BC there were eight great powers around the eastern Mediterranean.' },
    { beat: 'hook', text: 'Fifty years later almost none of them existed, and nobody is sure why.' },
    { beat: 'worldBefore', kicker: 'c. 1300 BC', text: 'This is not a world of isolated kingdoms. The kings write to each other constantly,' },
    { beat: 'worldBefore', text: 'call each other brother, argue about dowries, and send doctors on request.' },
    { beat: 'worldBefore', mark: 'web', text: 'A single wrecked ship off Turkey carries cargo from at least seven cultures.' },
    { beat: 'worldBefore', punch: true, text: 'Ten tonnes of copper, and a tonne of tin brought from somewhere near Afghanistan.' },
    { beat: 'problem', text: 'And that is the weakness, because bronze is copper plus tin,' },
    { beat: 'problem', text: 'and the tin comes from one end of the world to the other.' },
    { beat: 'problem', punch: true, mark: 'chain', text: 'Every sword in every army depends on a supply line no single king controls.' },
    { beat: 'story', kicker: 'c. 1190 BC', text: 'A Syrian port called Ugarit sends a last letter asking for help.' },
    { beat: 'story', text: 'The enemy ships have come, the towns are burned, the troops are away in Hatti.' },
    { beat: 'story', punch: true, text: 'The city burns and is never lived in again, which is why we can still read the letter.' },
    { beat: 'story', text: 'The Hittite capital empties. Archives cleared out, gates blocked, then fire —' },
    { beat: 'story', punch: true, text: 'which does not read as a sack. It reads as people leaving on purpose.' },
    { beat: 'story', text: 'Every Mycenaean palace in Greece burns or is abandoned within two generations.' },
    { beat: 'story', kicker: '1177 BC', text: 'Egypt beats an invasion by sea and carves the victory on a temple wall,' },
    { beat: 'story', text: 'names five peoples nobody can securely identify, and then shrinks for a century.' },
    { beat: 'whyItHappened', text: 'For a long time the answer was those raiders. It cannot only be them.' },
    { beat: 'whyItHappened', text: 'Pollen from lake beds shows three hundred years of drought beginning around 1250.' },
    { beat: 'whyItHappened', text: 'There are earthquakes, and famines, and rebellions, and a trade network unravelling.' },
    { beat: 'whyItHappened', punch: true, mark: 'collapse', text: 'None of it is sufficient alone. All of it arrives at once.' },
    { beat: 'consequences', text: 'Greece stops writing for four hundred years. The Hittites are forgotten entirely.' },
    { beat: 'consequences', text: 'Bronze gives way to iron, not because iron is better but because it is local.' },
    { beat: 'consequences', punch: true, text: 'And the traders who survive spread an alphabet a merchant can learn in a week.' },
    { beat: 'whyItMatters', text: 'A connected world is efficient, and a connected world transmits failure.' },
    { beat: 'whyItMatters', text: 'No single blow did this. A system took several at once and stopped absorbing them.' },
    { beat: 'whyItMatters', punch: true, text: 'That is the part worth being uncomfortable about. Nobody saw a cause big enough.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'The Late Bronze Age eastern Mediterranean is not a scatter of separate ancient kingdoms. It is a system, and the evidence for that is overwhelming and often charming.',
        'The great powers — Egypt, the Hittites in Anatolia, Assyria, Babylon, Mycenaean Greece, Cyprus, and the Canaanite and Syrian city-states between them — corresponded constantly. The Amarna letters, found in Egypt, preserve hundreds of these: kings addressing each other as "my brother", negotiating marriages, complaining about the quality of gifts, requesting physicians, and occasionally sulking. One Babylonian king complains that the gold Egypt sent was not up to standard. Another asks after his sister and demands proof she is alive.',
        'The material evidence is better still. A merchant ship that sank off Uluburun on the Turkish coast around 1300 BC was excavated over eleven seasons, and its cargo is the best single object in ancient economic history: ten tonnes of copper in ingots, a tonne of tin, Canaanite jars of terebinth resin, ebony from Africa, ivory, Baltic amber, Egyptian gold, Mycenaean pottery, and a wooden writing tablet. Goods from at least seven cultures, in one hull.',
        'This mattered materially and not just diplomatically, because of what bronze is. Bronze is copper alloyed with about ten per cent tin. Copper is available in the region — Cyprus is named after it, or the other way round. Tin is not. The nearest substantial sources are in Afghanistan and central Asia, with more in Cornwall, which is to say that every sword, every plough-tip, every cauldron in the Mediterranean depended on a supply chain running thousands of miles through territory no king controlled.',
        'Interdependence on this scale is a genuine achievement. It is also, in a way nobody at the time had reason to notice, a structural condition of a very particular kind.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'The Uluburun wreck carried roughly 10 tonnes of copper and 1 tonne of tin — the exact ratio for bronze, enough to equip a small army, in a single ship. It is the clearest demonstration we have that this was one economy rather than several.',
        sourceId: 'uluburun-excavation',
      },
      sourceIds: ['cline-2014', 'uluburun-excavation'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'The archaeology of the decades around 1200 BC is a list of endings, and the list is long enough that it stops reading as a coincidence.',
        'The Hittite Empire — one of the two superpowers of the age, with a capital at Hattusa of monumental stone gateways and a state archive of thousands of tablets — ceases to exist. Its capital is abandoned and burned. Its records stop. Within a few centuries the Hittites are so completely forgotten that until the nineteenth century their existence was known only from passing mentions in the Hebrew Bible.',
        'Ugarit, a rich Syrian port with its own alphabet and a substantial literature, is destroyed around 1190 BC and never reoccupied. Mycenaean Greece — the palace kingdoms of Pylos, Mycenae, Tiryns, with an accounting script and a bureaucracy that recorded oil rations and bronze inventories — burns and empties over about two generations. Cities across Cyprus and the Levant show destruction layers. Assyria and Babylon survive but contract badly.',
        'Egypt survives, which is the crucial exception, but it survives smaller and poorer. It loses its Levantine empire, its central authority weakens, and by around 1077 BC the New Kingdom is over.',
        'The scale is easier to grasp from what it does to writing. Linear B, the Mycenaean script, disappears completely. Greece does not write anything again for roughly four centuries. An entire literate administrative culture reverts to a world with no records at all — and stays there long enough that when Greeks start writing again, it is with a completely different, borrowed system.',
        'Something happened. The question that has occupied a century of scholarship is what.',
      ],
      sourceIds: ['cline-2014', 'drews-1993'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'The traditional answer, and the one carved in stone, is the Sea Peoples.',
        'In the eighth year of Ramesses III — conventionally 1177 BC, which is where Eric Cline’s title comes from — Egypt fought a land and sea battle against invaders, and recorded it in relief and text on the walls of the pharaoh’s mortuary temple at Medinet Habu. The inscription is the single most quoted document in this whole subject. It describes a confederation on the move: "no land could stand before their arms", it says, listing Hatti, Cyprus and Carchemish as already fallen, and names the invaders as the Peleset, Tjeker, Shekelesh, Denyen and Weshesh.',
        'They came, in the Egyptian telling, with their families and their ox-carts, which is the detail that changes the picture. This is not a raid. It is a migration under arms, people moving because where they were had stopped working.',
        'Now the caution. This is a victory monument, carved by the winner, in a genre with rigid conventions about how a pharaoh smites foreigners. The five names cannot be securely tied to archaeological cultures, with the probable exception of the Peleset, who are generally identified with the Philistines who settle on the Canaanite coast. And crucially: if the Sea Peoples destroyed everything, who destroyed the Sea Peoples’ homelands, and why were they moving in the first place?',
        'Set beside Medinet Habu the letters from Ugarit, and the tone changes completely. The last king, Ammurapi, writes to the king of Alashiya — Cyprus — in something close to panic: enemy ships have appeared, seven of them, they have burned his towns and done terrible things, his own troops are in Hatti, his own ships are away in Lycia, and the country has been left to itself. Another letter from a Hittite official orders grain shipped urgently, describing it as a matter of life and death. A third asks about a food shortage.',
        'These are not the letters of a state being overwhelmed by an unstoppable enemy. They are the letters of a state whose army is deployed elsewhere, whose fleet is out, whose grain is short, and which cannot cope with seven ships. Ugarit fell because it was already stretched to nothing.',
        'And then there is Hattusa, which does not fit the invasion story at all. Excavation shows the Hittite capital was emptied before it burned: the state archives were removed, valuables taken, some gateways deliberately blocked. That is not a city being sacked. That is a government evacuating, and the fire coming later, possibly much later, possibly from squatters. The Hittite state did not fall to an assault. It appears to have walked away.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'Ammurapi, the last king of Ugarit, writing to the king of Cyprus around 1190 BC: enemy ships have come, they have burned his towns and done evil things in his country; his own troops are in the land of Hatti, and all his ships are in Lycia; the country is abandoned to itself. It is the closest thing to a first-person account of the collapse that survives.',
        sourceId: 'ugarit-letters',
      },
      sourceIds: ['medinet-habu', 'ugarit-letters', 'cline-2014'],
    },

    whyItHappened: {
      heading: 'Why it happened',
      paragraphs: [
        'The honest summary of a century of scholarship is that no single cause works, and that this is the finding rather than a failure to find one.',
        '**Drought is the strongest new evidence.** Pollen cores from the Sea of Galilee and from Cyprus, and isotope work across the region, indicate a serious and prolonged dry period beginning around 1250 BC and lasting perhaps three centuries. Independently, the texts complain about grain: Hittite letters demanding urgent shipments, an Egyptian record of sending grain to relieve Hittite famine. Climate and correspondence agree, which is rare and worth weight.',
        '**Earthquakes are real but insufficient.** Amos Nur has argued for an "earthquake storm" — a sequence of major quakes along the same fault system over decades — and there is destruction evidence consistent with seismic damage at several sites. But cities recover from earthquakes routinely. What earthquakes do is remove the slack from a system that has none left.',
        '**Internal collapse matters more than it used to.** The palace economies were rigid, redistributive and top-heavy: the Linear B tablets record a bureaucracy tracking oil, wheels and bronze in obsessive detail. A system like that concentrates everything in one building, which makes it efficient in good years and catastrophic in bad ones. There is evidence at some sites of internal violence, and the palaces do not get rebuilt, which suggests nobody wanted them back.',
        '**And the trade network is the multiplier.** Cut the tin routes and every state loses its metal supply at once. Cut the grain shipments and a bad harvest becomes a famine. The interconnection that made this world rich is exactly the mechanism by which one region’s failure became everyone’s.',
        'Cline’s formulation is that this was a systems collapse: multiple stressors, none individually fatal, arriving within a few decades on a network optimised for a world where they did not all happen at once. The Sea Peoples are best read not as the cause but as part of the collapse in motion — people displaced by drought and failure, moving with their families, and becoming the shock that finished off states already down.',
      ],
      sourceIds: ['cline-2014', 'langgut-2013', 'knapp-manning-2016'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'What follows is not a pause. It is a different world, built from what was left, and in some ways a more open one.',
      ],
      shortTerm: [
        'The Hittite Empire ends and is forgotten so completely that its rediscovery in the nineteenth century was a genuine surprise.',
        'Mycenaean palace civilisation ends. Population falls sharply across Greece, sites are abandoned, and monumental building stops for centuries.',
        'Linear B disappears entirely. Greece has no writing at all for roughly four hundred years.',
        'Egypt loses its Levantine empire and its central authority fractures; the New Kingdom ends around 1077 BC.',
        'The Peleset — very probably the Philistines — settle on the Canaanite coast, bringing Aegean-style pottery and architecture with them.',
      ],
      longTerm: [
        'Iron replaces bronze, and the reason is supply rather than quality. Early iron is not obviously better; it is merely available locally, when tin from central Asia is not.',
        'The Phoenician port cities survive and inherit a Mediterranean with no great powers left in it, becoming its traders for the next five hundred years.',
        'They spread an alphabet of twenty-two signs — designed for cargo and accounts rather than for palace scribes — which Greeks borrow around 800 BC and which every European alphabet descends from.',
        'Tyre plants a colony at Carthage around 814 BC. Six centuries later it fights Rome for the western Mediterranean.',
        'Greece emerges from the silence with no palaces, no god-kings and no redistributive bureaucracy — and within a few centuries invents the polis. What grew back was not what fell.',
      ],
      unexpected: [
        'Homer is composed inside the silence, about the world that ended: an oral tradition preserving a Bronze Age it could no longer read the records of.',
        'The alphabet that made Greek literature possible is a merchant’s tool, adopted because it was cheap to learn — the opposite of the scribal monopolies the palaces had run.',
        'The Bible’s Philistines, a byword for uncultured brutality, were most likely refugees from an Aegean civilisation with palaces, frescoes and fine pottery.',
        'Egypt’s survival is why we have the story at all: the only detailed narrative account of the invasions comes from the one state that beat them and had the stone to carve it on.',
      ],
      sourceIds: ['cline-2014', 'drews-1993'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'This is the best-documented case we have of a whole interconnected civilisation stopping, and the shape of it is not what anyone expects.',
        'There is no villain. A hundred years of scholarship has looked for one — invaders, earthquake, drought, revolution, iron — and every candidate turns out to be either insufficient on its own or itself a consequence of something else. What is left is a system that had grown efficient by becoming interdependent, and that met several ordinary shocks in the same few decades.',
        'That is the uncomfortable part, and it is why the story keeps getting reached for. The Late Bronze Age did not fail because it was primitive. It failed because it was sophisticated: specialised, long-supplied, optimised, and dependent on partners it could not control. A world where your weapons need a metal from four thousand kilometres away is a rich world and a brittle one, and the two are the same fact seen from different sides.',
        'It is also worth holding onto how completely knowledge can go. Not just states and cities: an entire writing system, a bureaucracy, the ability to record anything, for four centuries. A people so thoroughly erased that for two and a half thousand years the Hittites survived only as a name in someone else’s book.',
        'And then there is what grew back, which is the part that argues against despair. The Mediterranean that came out of the collapse had no god-kings and no palace monopolies. It had cheap letters, portable metal and traders who answered to nobody. Almost everything we call classical antiquity is built on that ground, and none of it could have been built on the ground that burned.',
      ],
      sourceIds: ['cline-2014'],
    },
  },

  timeline: [
    { year: -1350, title: 'The Amarna letters', detail: 'Hundreds of diplomatic tablets show the great kings addressing each other as brothers, negotiating marriages and complaining about gifts.', pivotal: true },
    { year: -1300, title: 'The Uluburun ship sinks', detail: 'A merchant vessel goes down off Turkey with ten tonnes of copper, a tonne of tin and goods from at least seven cultures aboard.', pivotal: true },
    { year: -1274, title: 'Kadesh, and then a treaty', detail: 'Egypt and the Hittites fight the largest chariot battle known, then sign the earliest surviving international peace treaty. Both copies survive.' },
    { year: -1250, title: 'The drought begins', detail: 'Pollen cores from the Sea of Galilee and Cyprus indicate the start of a dry period lasting perhaps three centuries.', pivotal: true, confidence: 'contested' },
    { year: -1207, title: 'Merneptah repels an attack', detail: 'Egypt beats a Libyan invasion with allies from the sea — the first Egyptian record naming groups later grouped as Sea Peoples.' },
    { year: -1190, title: 'Ugarit burns', detail: 'The Syrian port sends letters begging for help, with its army in Hatti and its fleet away, and is destroyed and never reoccupied.', pivotal: true },
    { year: -1180, title: 'Hattusa is abandoned', detail: 'The Hittite capital is emptied — archives removed, gates blocked — and then burns. The empire simply stops appearing in the record.', pivotal: true },
    { year: -1177, title: 'Ramesses III at Medinet Habu', detail: 'Egypt defeats a land and sea invasion and carves the account on a temple wall, naming five peoples and claiming no land could stand before them.', pivotal: true },
    { year: -1150, title: 'The Mycenaean palaces are gone', detail: 'Pylos, Mycenae and Tiryns are burned or abandoned. Linear B stops. Greek is not written again for about four centuries.', pivotal: true },
    { year: -1077, title: 'The New Kingdom ends', detail: 'Egypt survives the collapse but not intact: central authority fragments and the Levantine empire is lost for good.' },
    { year: -814, title: 'Tyre founds Carthage', detail: 'A Phoenician city that came through the collapse plants a colony in North Africa, on the traditional date. It will later fight Rome.' },
    { year: -800, title: 'Greece borrows the alphabet', detail: 'Greeks adapt the Phoenician script, adding vowels. Writing returns — as a merchant’s tool rather than a palace monopoly.', pivotal: true },
  ],

  causeEffect: [
    { cause: 'Bronze requires tin from thousands of kilometres away', effect: 'Every state depends on routes none of them control', because: 'Copper is regional and tin is not, so the basic metal of the age could only exist as an act of long-distance cooperation.' },
    { cause: 'A prolonged drought begins around 1250 BC', effect: 'Grain shortages appear across the region', because: 'Rain-fed agriculture in the Levant and Anatolia has no margin, and the texts start demanding urgent grain shipments at exactly this point.' },
    { cause: 'Ugarit sends its army to Hatti and its fleet to Lycia', effect: 'Seven enemy ships are enough to destroy it', because: 'A city that has lent out its defences is defeated by a force that would have been trivial a decade earlier.' },
    { cause: 'Palace economies concentrate storage and administration in one building', effect: 'Destroying the palace destroys the economy', because: 'A redistributive system has no private markets to fall back on; when the centre burns, there is no second mechanism.' },
    { cause: 'Trade routes fail', effect: 'Iron replaces bronze', because: 'Iron ore is available almost everywhere, so when the tin stops arriving the inferior local metal becomes the only metal.' },
    { cause: 'The palaces and their scribes disappear', effect: 'Greece stops writing for four centuries', because: 'Linear B existed only to run palace accounts, so with no palaces there was nobody who needed it and nobody trained in it.' },
    { cause: 'The great powers vanish from the Levantine coast', effect: 'Phoenician cities inherit Mediterranean trade', because: 'Ports that survived found themselves with no overlords, no tribute and no competitors, which is an extraordinary commercial position.' },
  ],

  myths: [
    {
      myth: 'The Sea Peoples destroyed the Bronze Age civilisations.',
      reality: 'They are named in a single Egyptian victory monument, cannot be securely identified with archaeological cultures, and appear to have been migrating with families and ox-carts rather than raiding. The deeper problem is circular: if they caused the collapse, what caused them to move? Most scholars now read them as part of the collapse rather than its origin.',
      whyItPersists: 'Medinet Habu is dramatic, quotable and carved in stone, and an external invader is a far easier explanation than a systems failure with no author.',
      sourceIds: ['medinet-habu', 'cline-2014'],
    },
    {
      myth: 'Iron weapons let newcomers defeat bronze-armed empires.',
      reality: 'Early iron is not clearly superior to good bronze, and the transition follows the collapse rather than causing it. Iron won because tin stopped arriving, making bronze scarce, while iron ore is available locally almost everywhere. The metal changed because the trade failed.',
      whyItPersists: 'It is a tidy technological explanation with a mechanism you can picture, and the Bronze-to-Iron Age naming makes it feel like the metals must be doing the causal work.',
      sourceIds: ['drews-1993', 'cline-2014'],
    },
    {
      myth: 'It all happened in 1177 BC.',
      reality: 'That date is the eighth year of Ramesses III and the battle recorded at Medinet Habu, chosen by Eric Cline as a title precisely because it is a convenient marker. The collapse runs across roughly a century, with different regions failing at different times and Egypt not failing at all in the same sense.',
      whyItPersists: 'Single dates are teachable and titles are memorable. Cline himself is explicit that the year is a signpost rather than an event.',
      sourceIds: ['cline-2014'],
    },
    {
      myth: 'Ugarit’s last tablets were found still baking in the kiln, unfired, as the city burned.',
      reality: 'This vivid detail comes from the original excavator’s interpretation and has been questioned: the context of the tablets and the identification of the "oven" do not clearly support it, and the letters may not all date to the final days. The letters themselves are genuine and desperate; the kiln is decoration.',
      whyItPersists: 'It is a perfect image — a message interrupted mid-sending — and it appeared in the first accounts, which is usually enough to make a detail permanent.',
      sourceIds: ['ugarit-letters', 'cline-2014'],
    },
  ],

  disagreements: [
    {
      question: 'How much of the collapse was caused by climate?',
      positions: [
        { view: 'A great deal. Pollen and isotope records show a severe dry period from around 1250 BC, and contemporary texts independently record famine and emergency grain shipments.', heldBy: 'Langgut, Finkelstein and Neumann, and the palaeoclimate literature', sourceId: 'langgut-2013' },
        { view: 'Less than the headlines suggest. The chronological resolution of the proxies is coarse, the regional picture is uneven, and attributing a century of varied local collapses to one climate signal overreaches the data.', heldBy: 'Knapp and Manning, and other critics of monocausal climate explanations', sourceId: 'knapp-manning-2016' },
      ],
      atlasPosition: 'The atlas treats the drought as well-evidenced and as one stressor among several. It does not present climate as the cause, because the dating is not precise enough to carry that weight and the collapse is not synchronous.',
    },
    {
      question: 'Who were the Sea Peoples?',
      positions: [
        { view: 'A confederation of migrating peoples from the Aegean and western Anatolia, moving with their families under pressure, who destroyed states along their route.', heldBy: 'The reading closest to the Egyptian sources', sourceId: 'medinet-habu' },
        { view: 'Largely an Egyptian rhetorical category. The names are hard to attach to archaeological cultures, the movements were probably several unrelated migrations, and they were a symptom of collapse elsewhere.', heldBy: 'Cline and much current scholarship', sourceId: 'cline-2014' },
      ],
      atlasPosition: 'The atlas uses "Sea Peoples" as the Egyptian name for a real phenomenon of armed migration, and does not treat it as the name of a single people or as a sufficient cause. Only the Peleset-Philistine identification is treated as reasonably secure.',
    },
    {
      question: 'Was there a single cause at all?',
      positions: [
        { view: 'There was a decisive mechanism: Drews argues for a change in warfare, with massed infantry using javelins and long swords defeating the chariot armies the palace states were built around.', heldBy: 'Robert Drews', sourceId: 'drews-1993' },
        { view: 'No single cause. Drought, earthquakes, famine, internal revolt, migration and trade disruption arrived together on a system with no slack, and each amplified the others.', heldBy: 'Eric Cline and the systems-collapse reading', sourceId: 'cline-2014' },
      ],
      atlasPosition: 'The atlas follows the systems-collapse reading, which is the current mainstream, while noting that Drews’ military argument identifies a real vulnerability of chariot-based states. It does not assert a single cause, because the evidence does not support one.',
    },
  ],

  didYouKnow: [
    'The Uluburun shipwreck carried ten tonnes of copper and a tonne of tin — the exact proportions for bronze — plus goods from at least seven different cultures.',
    'The Amarna letters have great kings addressing each other as "my brother", complaining about the quality of gifts and asking to borrow doctors.',
    'The last king of Ugarit wrote asking for help because his army was in Hatti and his fleet was in Lycia. Seven enemy ships were enough.',
    'The Hittite capital was emptied before it burned — archives removed, gates blocked. That looks like a planned evacuation, not a sack.',
    'The Hittites were forgotten so completely that until the nineteenth century they were known only from passing mentions in the Hebrew Bible.',
    'Greece stopped writing for around four hundred years. When it started again it used a borrowed Phoenician alphabet, not its old script.',
    'The Philistines of the Bible were probably refugees from an Aegean palace culture, arriving on the Canaanite coast with their own fine pottery.',
    'Egypt and the Hittites signed the earliest surviving international peace treaty in about 1259 BC, and both sides’ copies survive.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Around 1200 BC the eastern Mediterranean was a connected system of great powers — Egypt, the Hittites, Mycenaean Greece, Assyria, Babylon, Cyprus and the Syrian and Canaanite ports — whose kings wrote to each other constantly and whose economies depended on long-distance trade. Bronze itself required tin from central Asia, so every kingdom’s weapons depended on routes none of them controlled.',
        'Within about fifty years, most of it was gone. The Hittite Empire ceased to exist and was forgotten for three thousand years. Ugarit burned and was never reoccupied. Every Mycenaean palace burned or was abandoned, and Greek writing disappeared for four centuries. Egypt survived, but smaller and poorer.',
        'The traditional explanation is the Sea Peoples, named on Ramesses III’s temple wall at Medinet Habu in 1177 BC. That explanation is circular: if they destroyed everything, what displaced them? Current scholarship reads them as part of the collapse rather than its cause.',
        'The better answer is that several things happened at once: a drought beginning around 1250 BC attested in both pollen cores and contemporary letters, earthquakes, famine, internal revolt, mass migration, and the unravelling of the trade network that tied it all together. None was fatal alone. Together they took down a system that had grown rich by becoming interdependent.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Three thousand two hundred years ago, all the big kingdoms around the eastern Mediterranean knew each other really well. Their kings wrote letters calling each other "brother", sent each other presents, and sometimes complained that the presents were not very good.',
        'They also needed each other. Their best metal was bronze, and to make bronze you need copper and tin mixed together. They had copper nearby — but the tin had to come from thousands of miles away, roughly where Afghanistan is now. So every sword in every army needed a delivery from the other side of the world.',
        'Then, over about fifty years, nearly all of those kingdoms stopped existing. Cities burned. One entire empire, the Hittites, vanished so completely that people forgot they had ever existed until archaeologists dug them up again in the 1800s.',
        'We still argue about why. There were invaders arriving by sea with their families in ox-carts. There was a drought that went on for a very long time. There were earthquakes. There were food shortages, and probably people rebelling because they were hungry.',
        'The answer most historians now give is a bit scary: none of those things by itself was big enough. They just all happened close together, to a world so connected that when one part broke, all of it broke.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The field has moved decisively from monocausal to systems explanations, with Cline (2014) the standard synthesis and Renfrew’s earlier systems-collapse framework the theoretical ancestor. The methodological gain is that a multi-stressor model predicts the observed asynchrony and regional variation, whereas any single agent — Sea Peoples, seismic activity, iron, drought — has to explain both the destructions and the survivals, and none does.',
        'On climate, Langgut, Finkelstein and Neumann (2013) provide the Sea of Galilee pollen sequence indicating aridification from c. 1250 BC, corroborated by Kaniewski’s Cypriot cores. Knapp and Manning (2016) supply the necessary methodological caution: proxy resolution, dating uncertainty and the inference from regional aridity to specific site destructions are all weaker than popular accounts allow. The textual evidence for famine — the Hittite grain requests, the Egyptian relief shipments — is independent and arguably the stronger leg.',
        'The Sea Peoples problem is fundamentally source-critical. Medinet Habu is a triumphal composition with formulaic elements borrowed from Merneptah’s earlier Libyan war texts, and the ethnonyms resist secure archaeological correlation apart from Peleset–Philistine, which is supported by Aegean-style material culture at Ashkelon, Ashdod and Ekron. Treating the list as a roster of historical nations imports an Egyptian rhetorical category into the archaeological record.',
        'Drews (1993) remains the most substantial dissenting monocausal account, locating the mechanism in military technology and tactics — the vulnerability of chariot-based elite warfare to massed infantry with javelins and Naue II swords. The argument is coherent and identifies a genuine structural weakness of palace states, but it struggles with the sites destroyed without evidence of battle and with Hattusa’s apparent orderly abandonment.',
        'Finally, the postcollapse period rewards attention in its own right: the Phoenician commercial expansion, alphabetic literacy and the emergence of non-palatial political forms in the Aegean are not merely recovery but structural transformation, and the case that the collapse was a precondition for them is strong.',
      ],
    },
    {
      id: 'the-tin-problem',
      label: 'Why bronze was the weak point',
      kind: 'angle',
      paragraphs: [
        'The single most useful fact in this story is a recipe. Bronze is about ninety per cent copper and ten per cent tin.',
        'Copper is regional. Cyprus had so much of it that the island and the metal share a name. Anatolia and the Levant had sources. If you were a Mediterranean kingdom, copper was a supply problem you could solve.',
        'Tin was not. There is essentially no tin in the eastern Mediterranean. The nearest substantial deposits are in central Asia — the Uluburun tin has been argued to come from what is now Uzbekistan or Afghanistan — with other sources in Cornwall at the far end of Europe. Every ingot of it crossed thousands of kilometres, through the territory of many states, by land and sea, changing hands repeatedly.',
        'Now think about what that means. The basic material of the age — weapons, armour, tools, plough-tips, cauldrons — could only exist as long as a chain of unrelated polities, none of whom answered to each other, kept a route open across half a continent. There was no substitute and no strategic reserve.',
        'A world like that is astonishingly rich, because specialisation and exchange make everyone better off. It is also a world in which a disruption anywhere on the chain is felt everywhere on it, and where no king, however powerful, could secure his own army’s metal supply by conquest.',
        'That is not a Bronze Age curiosity. It is the standard shape of an advanced economy, then and now, and it is why this particular collapse gets read so often by people who are not archaeologists.',
      ],
    },
    {
      id: 'what-grew-back',
      label: 'What grew back was better',
      kind: 'contrast',
      paragraphs: [
        'It is tempting to read the collapse as pure loss. Compare what fell with what replaced it, and the picture complicates.',
        '**What fell:** palace economies where a king’s scribes recorded every jar of oil; writing systems that only professional administrators could use; god-kings; long, fragile supply chains for the essential metal; empires whose collapse erased the memory of them entirely.',
        '**What grew back:** iron, which is worse than bronze but which you can dig up almost anywhere and which therefore nobody can cut you off from; an alphabet of twenty-two signs invented for cargo manifests, cheap enough that a merchant could learn it; trading cities with no overlords; and, eventually, in Greece, political forms with no palace at the centre at all.',
        'The Greece that emerged from four centuries of silence had no Linear B, no wanax, no redistributive bureaucracy. It had cheap letters and no memory of how the old system had worked. Within a few centuries it produced the polis, and lyric poetry, and philosophy, and everything else we file under classical antiquity.',
        'None of which is a case for collapse being good. Real people starved, cities burned, and a great deal was lost that we would very much like to have. But the ground that gets built on afterwards is not the ground that burned, and the things that could not have grown in the shadow of a palace grew there instead.',
      ],
    },
  ],

  beforeAfter: {
    label: 'The eastern Mediterranean, before and after',
    before: {
      title: 'Around 1250 BC',
      points: [
        'Eight great powers in regular diplomatic contact',
        'Bronze everywhere, on a tin route thousands of miles long',
        'Palace bureaucracies recording every jar and wheel',
        'Writing restricted to trained professional scribes',
        'Cities of monumental stone across Anatolia and Greece',
      ],
    },
    after: {
      title: 'By 1100 BC',
      points: [
        'Egypt diminished; most of the others simply gone',
        'Iron spreading, because the local metal is the only metal',
        'No palaces, and nothing left to administer',
        'No writing at all in Greece for four hundred years',
        'Phoenician ports trading in a sea with no great powers',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the drought had not coincided with the migrations?',
      reasoning: 'Each stressor on its own looks survivable. States recovered from earthquakes routinely, absorbed raiders regularly, and rode out bad harvests with the grain shipments the letters show them arranging. Spread across two centuries rather than fifty years, the same events might have produced strain and adaptation rather than a cascade.',
      constraint: 'This is speculation, and it may reverse the causation: the migrations were plausibly caused by the drought, in which case separating them is not a change to the timing but a change to the physics. It also leaves the underlying fragility — the tin dependency, the palace monopolies — completely untouched, waiting for the next coincidence.',
    },
    {
      question: 'What if the Mycenaean palaces had been rebuilt?',
      reasoning: 'Had the palace system been restored, Linear B and the scribal administration might have continued, and Greece would have entered the first millennium as a literate palace civilisation rather than an illiterate one — with continuity of records, and no need to borrow an alphabet.',
      constraint: 'The palaces were not rebuilt, and at some sites there is evidence of internal violence. That suggests the population had reasons not to want them back, which makes this less a counterfactual about capability than about consent. It would also have meant no cheap alphabet, and probably no polis.',
    },
  ],

  quiz: [
    {
      question: 'Why was bronze a strategic weakness for every Late Bronze Age state?',
      options: [
        'It was too soft for weapons',
        'It required tin from thousands of kilometres away, on routes nobody controlled',
        'Only Egypt knew how to make it',
        'It could not be recycled',
      ],
      answerIndex: 1,
      explains: 'Bronze is copper plus about ten per cent tin. Copper was regional; tin came from central Asia. Every army’s metal depended on a chain of states none of them commanded.',
    },
    {
      question: 'What does the archaeology of Hattusa, the Hittite capital, show?',
      options: [
        'A sudden violent sack with bodies in the streets',
        'That it was emptied first — archives removed, gates blocked — and burned afterwards',
        'That it was never actually abandoned',
        'That it was destroyed by an earthquake',
      ],
      answerIndex: 1,
      explains: 'The evidence looks like a planned evacuation rather than an assault: valuables and state records were taken out, some gateways deliberately blocked, and the fire came later.',
    },
    {
      question: 'Why did iron replace bronze?',
      options: [
        'Iron weapons were far superior',
        'Bronze was banned by the Egyptians',
        'Tin stopped arriving, and iron ore is available almost everywhere',
        'Iron was discovered for the first time',
      ],
      answerIndex: 2,
      explains: 'Early iron was not clearly better than good bronze. It won on supply: when the long-distance tin routes failed, the locally available metal was the only one left.',
    },
    {
      question: 'What is the main problem with blaming the Sea Peoples?',
      options: [
        'There is no evidence they existed at all',
        'They arrived a century too late',
        'It is circular — something must have displaced them, and that is the real question',
        'Egyptian records never mention them',
      ],
      answerIndex: 2,
      explains: 'They appear on an Egyptian victory monument, migrating with families and carts. If they destroyed everything, what drove them from their homes? Most scholars now read them as part of the collapse, not its origin.',
    },
  ],

  sources: [
    {
      id: 'ugarit-letters',
      kind: 'primary',
      author: 'Ammurapi of Ugarit and correspondents',
      title: 'The Ras Shamra tablets (RS 20.238 and related letters)',
      year: -1190,
      detail: 'Excavated at Ras Shamra, Syria; published in Ugaritica V and subsequent editions',
      note: 'The closest thing to a first-person account: the last king reporting burned towns with his army abroad and his fleet away. Desperate, specific and contemporary.',
    },
    {
      id: 'medinet-habu',
      kind: 'primary',
      author: 'The mortuary temple of Ramesses III',
      title: 'The Year 8 inscriptions and reliefs at Medinet Habu',
      year: -1177,
      detail: 'Published by the Epigraphic Survey, Oriental Institute of the University of Chicago, from 1930',
      note: 'The source of the Sea Peoples and of the 1177 date. A triumphal monument in a highly formulaic genre — read for what Egypt claimed, not as a neutral record.',
    },
    {
      id: 'uluburun-excavation',
      kind: 'archive',
      author: 'George F. Bass, Cemal Pulak and the Institute of Nautical Archaeology',
      title: 'The Uluburun shipwreck excavation',
      year: 1994,
      detail: 'Excavated 1984–1994 off Kaş, Turkey; reports in the American Journal of Archaeology and INA publications',
      note: 'Ten tonnes of copper, a tonne of tin and cargo from at least seven cultures in one hull. The best single object for showing this was one economy.',
    },
    {
      id: 'cline-2014',
      kind: 'book',
      author: 'Eric H. Cline',
      title: '1177 B.C.: The Year Civilization Collapsed',
      year: 2014,
      detail: 'Princeton University Press. ISBN 978-0-691-14089-6',
      note: 'The standard synthesis, and the source of the systems-collapse framing used here. Notably careful about what is not known, including about its own title date.',
    },
    {
      id: 'drews-1993',
      kind: 'book',
      author: 'Robert Drews',
      title: 'The End of the Bronze Age: Changes in Warfare and the Catastrophe ca. 1200 B.C.',
      year: 1993,
      detail: 'Princeton University Press. ISBN 978-0-691-02591-9',
      note: 'The strongest single-cause argument: massed infantry defeating chariot armies. Kept here because it identifies a real structural weakness even where the conclusion is disputed.',
    },
    {
      id: 'langgut-2013',
      kind: 'paper',
      author: 'Dafna Langgut, Israel Finkelstein and Thomas Litt',
      title: 'Climate and the Late Bronze Collapse: New Evidence from the Southern Levant',
      year: 2013,
      detail: 'Tel Aviv: Journal of the Institute of Archaeology, vol. 40, no. 2, pp. 149–175',
      note: 'The Sea of Galilee pollen sequence indicating aridification from around 1250 BC — the core evidence for the drought.',
    },
    {
      id: 'knapp-manning-2016',
      kind: 'paper',
      author: 'A. Bernard Knapp and Sturt W. Manning',
      title: 'Crisis in Context: The End of the Late Bronze Age in the Eastern Mediterranean',
      year: 2016,
      detail: 'American Journal of Archaeology, vol. 120, no. 1, pp. 99–149',
      note: 'The methodological check on climate explanations: proxy resolution, dating uncertainty, and the difficulty of inferring site destructions from regional aridity.',
    },
  ],
}
