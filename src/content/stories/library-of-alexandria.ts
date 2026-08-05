import type { Story } from '../types'

/**
 * Voice: the register Mary Beard uses on a famous story that turns out to be
 * mostly later people's wishful thinking — dry, sceptical, funny about the
 * evidence, and genuinely respectful of the thing underneath once the legend is
 * lifted off it. Bagnall supplies the demolition; El-Abbadi supplies the care.
 */
export const libraryOfAlexandria: Story = {
  slug: 'library-of-alexandria',
  title: 'The Library That Did Not Burn',
  subtitle: 'Alexandria — the most famous destruction in history, and no ancient writer describes it happening.',
  hook: 'Everyone knows the Library of Alexandria burned and took the ancient world’s knowledge with it. No ancient source describes that night, and the real ending is worse.',
  era: 'classical',
  category: 'ancient',
  years: [-331, 415],
  regions: ['Egypt', 'Greece', 'Rome'],
  nodes: ['library-of-alexandria', 'alexandria', 'ptolemaic-egypt', 'eratosthenes', 'julius-caesar'],
  tags: ['knowledge', 'myth', 'egypt', 'greece', 'libraries', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'Everyone knows the Library of Alexandria burned in one terrible night.' },
    { beat: 'hook', text: 'No ancient writer describes that night. Not one.' },
    { beat: 'worldBefore', kicker: '3rd c. BC', text: 'The Ptolemies are Greek pharaohs with a new capital and something to prove,' },
    { beat: 'worldBefore', text: 'so they build a research institute and try to collect every book that exists.' },
    { beat: 'worldBefore', punch: true, text: 'Ships docking at Alexandria are searched — for books, which are copied and kept.' },
    { beat: 'worldBefore', text: 'They borrow Athens’ official playscripts on deposit, and simply keep those too.' },
    { beat: 'problem', text: 'And the work done there is real. A librarian measures the earth' },
    { beat: 'problem', mark: 'spike', text: 'from a stick’s shadow and a well in the south, and gets close.' },
    { beat: 'problem', punch: true, text: 'Another writes the first catalogue, because a collection you cannot search is a pile.' },
    { beat: 'story', kicker: '48 BC', text: 'Then Caesar is trapped in the harbour and sets fire to the fleet,' },
    { beat: 'story', text: 'and the fire spreads, and some books stored near the docks burn.' },
    { beat: 'story', punch: true, text: 'Not the Library. Some books. The distinction takes two thousand years to lose.' },
    { beat: 'story', text: 'A geographer visits twenty years later and describes the place still working.' },
    { beat: 'story', kicker: '272 AD', text: 'The quarter it stood in is destroyed in a war. Then a temple falls in 391,' },
    { beat: 'story', text: 'and the accounts of that one do not mention any books at all.' },
    { beat: 'whyItHappened', punch: true, mark: 'echo', text: 'Because the ending was not a fire. It was a budget.' },
    { beat: 'whyItHappened', text: 'Papyrus rots. A scroll left alone for two centuries is dust,' },
    { beat: 'whyItHappened', text: 'so a library is not a building. It is a payroll of people copying.' },
    { beat: 'whyItHappened', text: 'The dynasty declines, the scholars are expelled in a purge,' },
    { beat: 'whyItHappened', punch: true, text: 'and after that nobody is paying anyone to copy anything.' },
    { beat: 'consequences', text: 'What we lost, we lost slowly, and mostly to indifference.' },
    { beat: 'consequences', text: 'Nine plays of Sophocles out of a hundred and twenty survive.' },
    { beat: 'consequences', punch: true, text: 'Nobody burned the other hundred and eleven. They just stopped being copied.' },
    { beat: 'whyItMatters', text: 'The fire is the comfortable story, because a fire has a villain,' },
    { beat: 'whyItMatters', text: 'and a villain means it could not have been prevented by us.' },
    { beat: 'whyItMatters', punch: true, text: 'The real way knowledge dies is that someone decides it costs too much to keep.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'Alexander founded Alexandria in 331 BC and died eight years later. His general Ptolemy took Egypt, made himself pharaoh, and founded a dynasty of Greek-speaking rulers who governed the oldest civilisation in the Mediterranean and were acutely aware of being new.',
        'Their answer to that was culture, funded on an imperial scale. Around 290 BC — the exact date is not recorded, which is a warning about everything that follows — they established the Mouseion, literally a shrine of the Muses, and it functioned as something between a temple, a research institute and a very good dining club. Scholars lived there, were paid a salary, were exempt from tax, and were expected to produce.',
        'The Library was part of that institution rather than a separate wonder of the world. And it was, genuinely, a collecting operation of unprecedented ambition. Ships entering the harbour were searched, and any books aboard were taken, copied, and — according to Galen, writing four centuries later — the copies returned to the owner while the originals stayed. These were catalogued as "from the ships".',
        'The best story in the tradition, if true, is the Athenian playscripts. Athens kept official texts of Aeschylus, Sophocles and Euripides. Ptolemy III asked to borrow them to make copies, and put down a deposit of fifteen talents — an enormous sum. He then kept the originals, sent back copies, and forfeited the deposit. Whether or not it happened, the fact that it was told about the Ptolemies tells you what people thought they were like.',
        'And the scholarship was not decorative. Zenodotus and Aristarchus produced the critical editions of Homer that determine the text we read. Callimachus compiled the *Pinakes*, a 120-scroll catalogue of the collection organised by subject and author — arguably the first library catalogue anywhere. And Eratosthenes, chief librarian, measured the circumference of the earth from the difference in shadow angle between Alexandria and Aswan, and got a figure within a few per cent of the truth.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Picture it',
        body: 'Not a domed hall with marble columns and a million books, which is a nineteenth-century painting. Think of a well-funded university department with residential fellows, a state grant, a very aggressive acquisitions policy, and rooms of shelved scroll-cases. Nobody has ever found its foundations. We are not certain where in the city it stood.',
      },
      sourceIds: ['strabo-geography', 'el-abbadi-1990', 'bagnall-2002'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Start with the number, because the number is doing an enormous amount of work in the legend.',
        'Ancient sources claim between 40,000 and 700,000 scrolls. The Letter of Aristeas, a partly fictional document, says 200,000 and rising. Aulus Gellius says 700,000. These figures are wildly inconsistent, and they come from writers who were not there, working centuries later, in a genre where large round numbers signalled importance rather than counting anything.',
        'Roger Bagnall has made the sharpest argument against them: try to work out what could actually have been in the collection. Take every Greek author known to have written before the third century BC, allow them generous outputs, allow for duplicates and multiple editions, and you struggle to reach a hundred thousand scrolls — and you would have had to acquire, essentially, everything anyone had ever written in Greek. The largest claims describe a collection several times larger than the entire surviving and attested corpus of Greek literature.',
        'The second problem is physical. Papyrus does not last. In the Egyptian climate a scroll in use might survive a century or two before it becomes unusable; the papyri that survive to us do so because they were buried in dry sand, not because they were looked after. A library of that size is therefore not a stock of objects. It is a continuous industrial process of recopying, requiring scribes, papyrus, and a permanent budget.',
        'Which means the interesting question about the Library of Alexandria is not what destroyed it. It is who was paying, and for how long.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'A "scroll" is not a book. A long work occupied many scrolls; Thucydides ran to eight or more. Some ancient totals may be counting scrolls, some works, and some may be counting nothing at all. Any argument that turns on the exact size of the collection is standing on sand.',
        sourceId: 'bagnall-2002',
      },
      sourceIds: ['bagnall-2002', 'aulus-gellius', 'letter-of-aristeas'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'There are four standard candidates for the destruction, and every one of them fails to do what the legend requires.',
        '**Julius Caesar, 48 BC.** Caesar arrived in Alexandria pursuing Pompey, became entangled in a Ptolemaic civil war, and found himself besieged in the palace quarter with a small force. He set fire to ships in the harbour to stop the Egyptian fleet being used against him, and the fire spread ashore. Several later writers say books burned. Seneca says 40,000; Plutarch says the fire destroyed "the great library"; Cassius Dio, more carefully, says it burned a warehouse of grain and books near the docks.',
        'Here is the difficulty. Strabo, a serious geographer, was in Alexandria about twenty years later, describes the Mouseion in the present tense as a going concern, and says nothing whatsoever about a catastrophe. Scholars continue to work there for centuries afterwards. Something burned in 48 BC — most plausibly stock warehoused for export near the harbour. The institution kept operating.',
        '**Aurelian, 272 AD.** The emperor put down a revolt in Alexandria and destroyed the Brucheion, the royal quarter where the Mouseion probably stood. This is the most likely candidate for the end of the original institution, and almost nobody has heard of it, because there is no dramatic scene attached and no villain worth the name.',
        '**Theophilus and the Serapeum, 391 AD.** The bishop of Alexandria led the destruction of the temple of Serapis, which had housed a "daughter library". This one is real, documented and violent — Christian crowds demolishing a pagan temple. But the accounts we have of the destruction, including hostile pagan ones which had every reason to mention it, do not describe books being burned. The scholarly consensus is that the Serapeum’s collection had already gone, decades earlier.',
        '**The Caliph Omar, 642 AD.** The famous version: the Arab general asks what to do with the books; the caliph replies that if they agree with the Qur’an they are superfluous and if they disagree they are pernicious, so burn them either way; they heat the city’s baths for six months. It is a wonderful story and it first appears in the thirteenth century, six hundred years after the event, in the work of Bar Hebraeus. No contemporary source mentions it, including Christian chroniclers who would have relished it. Historians of every background treat it as a later invention, and it was demonstrably useful to crusade-era polemic.',
        'So: a harbour fire that the institution survived, a civil war nobody remembers, a temple destruction with no books in it, and a folk tale from six centuries later. The one thing the sources do not give us is the night everyone is sure about.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'Strabo, writing his Geography around 20 BC — two decades after Caesar’s fire — describes the Mouseion as part of the palace complex, with its covered walk, its arcade, its communal dining hall and its salaried scholars under a priest appointed by Caesar. He is giving a tour of a functioning institution, and he does not mention a disaster.',
        sourceId: 'strabo-geography',
      },
      sourceIds: ['strabo-geography', 'plutarch-caesar', 'bagnall-2002', 'el-abbadi-1990'],
    },

    whyItHappened: {
      heading: 'What actually happened',
      paragraphs: [
        'The Library ended the way institutions usually end: it was defunded, and then it was forgotten, and neither has a date.',
        '**The dynasty stopped paying.** The Ptolemaic state declined through the second and first centuries BC — dynastic murders, civil wars, Roman interference, shrinking revenue. In about 145 BC Ptolemy VIII carried out a purge of Alexandrian intellectuals; the head librarian fled and scholars scattered across the Greek world. That is often described as a disaster for Alexandria and a windfall for everywhere else, which is exactly right, and it happened a century before Caesar arrived.',
        '**Papyrus kept rotting the whole time.** This is the part that makes defunding lethal rather than merely sad. Every scroll in the collection was on a clock. A library that is not continuously recopying itself is not preserving anything; it is holding a decaying object until it disintegrates. Stop the salaries and the collection does not sit there waiting for a fire. It quietly turns into rubbish over two or three generations.',
        '**And Alexandria stopped being the only place.** Pergamon built a rival library. Rome built several. Books dispersed. By the Roman imperial period the scholarly centre of gravity had moved, and the Mouseion was one institution among many rather than the institution.',
        'Then, in 272, the quarter it stood in was destroyed in a war, and by then it is not clear how much was left to destroy.',
        'What all this means is that the famous question — who burned the Library of Alexandria? — is the wrong question, asked in the wrong shape. Nobody burned it. It was allowed to stop.',
      ],
      sourceIds: ['bagnall-2002', 'el-abbadi-1990'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'The losses from the ancient world are real and enormous. They simply did not happen in the way the story says.',
      ],
      shortTerm: [
        'The 145 BC purge scattered Alexandria’s scholars across the Greek world, which damaged Alexandria and enriched Rhodes, Pergamon, Athens and eventually Rome.',
        'The critical editions produced at Alexandria — of Homer above all — became the standard texts, and are substantially the versions transmitted to us.',
        'Alexandria remained a centre of medicine, astronomy and mathematics for centuries after the Library’s best period: Ptolemy the astronomer worked there in the second century AD, Hypatia in the fourth.',
        'The city’s intellectual life ended in stages rather than at once, with the destruction of the Brucheion in 272 the sharpest single break.',
      ],
      longTerm: [
        'Of roughly 120 plays by Sophocles, seven survive complete. Of about 90 by Aeschylus, seven. Of the works of Aristotle written for publication, almost nothing. This is the real scale of the loss.',
        'It happened by attrition: works stopped being copied because they were not taught, not fashionable, or not thought worth the papyrus, and once the last copy decayed the work was gone.',
        'What did survive largely did so because someone chose to keep copying it — Byzantine scribes for a thousand years, then the Abbasid translation movement rendering Greek science into Arabic, then Toledo rendering Arabic back into Latin.',
        'The Library became a symbol detached from its history: the burning of Alexandria is invoked in arguments about censorship, religious violence, colonialism and digital preservation, usually by people who have never had cause to check whether it happened.',
      ],
      unexpected: [
        'Nobody knows where the Library was. No foundations have been securely identified, and much of ancient Alexandria’s royal quarter is now under water or under the modern city.',
        'The Caliph Omar story appears first in the thirteenth century, and became popular in Europe during and after the crusades — a useful anecdote about Muslim barbarism, invented six hundred years late.',
        'Hypatia, murdered by a mob in 415, is routinely folded into the Library’s destruction in popular retellings. Her death is real and appalling, and had nothing to do with a library.',
        'The most important preservation work on Greek science was done centuries later, by Arabic-speaking translators in Baghdad and by Christian monks in Constantinople — that is, by the two cultures the burning-library legend is usually deployed against.',
      ],
      sourceIds: ['bagnall-2002', 'el-abbadi-1990'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The burning library is one of the most emotionally satisfying stories we tell, and it is worth asking what the satisfaction is for.',
        'A fire has a villain. Caesar, a mob, a caliph, a bishop — someone did this, in a night, and if not for them we would have had it all. That story lets everyone off. It makes the loss of ancient knowledge an atrocity rather than a maintenance failure, and atrocities are things other people commit.',
        'The real mechanism is duller and much more frightening. Knowledge died because the copying stopped. Papyrus rots; parchment gets scraped and reused; a work not taught in a generation is not copied in the next, and after that it is gone whatever anyone would have wished. The overwhelming majority of what we have lost from antiquity was lost this way, quietly, by default, with nobody to blame and no date to mark.',
        'And that mechanism has not changed at all. Every digital archive is a papyrus scroll: it survives exactly as long as someone keeps paying to migrate it to the next format, on the next medium, in the next institution. Formats rot faster than papyrus. What we call permanent storage is a subscription.',
        'So the useful lesson of Alexandria is not "beware the people who burn books". It is that a library is not a building or a collection. It is a decision, renewed continuously, to keep paying for the copying — and the collapse that actually kills a library never looks like a fire. It looks like a line item.',
      ],
      sourceIds: ['bagnall-2002'],
    },
  },

  timeline: [
    { year: -331, title: 'Alexander founds Alexandria', detail: 'A new Greek city on the Egyptian coast, positioned to command the eastern Mediterranean. Its founder dies eight years later.' },
    { year: -290, title: 'The Mouseion is founded', detail: 'The Ptolemies establish a state-funded research institution with salaried, tax-exempt scholars. The Library is part of it. The date is approximate.', pivotal: true, confidence: 'contested' },
    { year: -245, title: 'Callimachus compiles the Pinakes', detail: 'A 120-scroll catalogue of the collection by subject and author — arguably the first library catalogue in history.' },
    { year: -240, title: 'Eratosthenes measures the earth', detail: 'The chief librarian calculates the planet’s circumference from shadow angles at Alexandria and Aswan, and lands within a few per cent.', pivotal: true },
    { year: -145, title: 'Ptolemy VIII purges the scholars', detail: 'A dynastic purge drives Alexandria’s intellectuals abroad. The head librarian flees. This is the wound nobody tells stories about.', pivotal: true },
    { year: -48, title: 'Caesar’s fire in the harbour', detail: 'Besieged in the palace quarter, Caesar burns the fleet; the fire spreads and destroys books stored near the docks. The institution continues.', pivotal: true },
    { year: -20, title: 'Strabo visits and finds it working', detail: 'The geographer describes the Mouseion in the present tense — walkway, dining hall, salaried scholars — and mentions no disaster at all.', pivotal: true },
    { year: 272, title: 'Aurelian destroys the Brucheion', detail: 'The royal quarter, where the Mouseion most likely stood, is destroyed in the suppression of a revolt. This is the strongest candidate for the end.', pivotal: true },
    { year: 391, title: 'The Serapeum is destroyed', detail: 'Christian crowds under Bishop Theophilus demolish the temple of Serapis. The accounts, including hostile ones, do not mention books.' },
    { year: 415, title: 'Hypatia is murdered', detail: 'The mathematician and philosopher is killed by a mob. Popular retellings attach this to the Library’s destruction; the two are unrelated.' },
    { year: 642, title: 'The Arab conquest of Egypt', detail: 'The city changes hands. The tale of Caliph Omar ordering the books burned appears six hundred years later and is rejected by historians.' },
    { year: 1663, title: 'Bar Hebraeus’ story reaches Europe', detail: 'The thirteenth-century anecdote about the caliph is printed in Latin and becomes, for three centuries, the standard account of how it ended.' },
  ],

  causeEffect: [
    { cause: 'Greek kings rule Egypt and feel like newcomers', effect: 'They fund scholarship on an imperial scale', because: 'Cultural prestige was the one form of legitimacy a foreign dynasty could buy outright, and they had the revenue of Egypt to buy it with.' },
    { cause: 'Books are seized from every ship in the harbour', effect: 'The collection grows extraordinarily fast', because: 'A state willing to confiscate rather than purchase acquires at a speed no private collector can match.' },
    { cause: 'Papyrus decays within a century or two', effect: 'A library must recopy continuously or vanish', because: 'Preservation is a process rather than a state; a scroll left alone is a scroll on its way to being dust.' },
    { cause: 'Ptolemy VIII purges the scholars in 145 BC', effect: 'Alexandria’s intellectual monopoly ends', because: 'The expelled scholars took their expertise to Pergamon, Rhodes and Rome, which had the money to hire them.' },
    { cause: 'The Ptolemaic state declines', effect: 'The copying budget disappears', because: 'Salaried scribes and papyrus are a recurring cost, and recurring costs are the first thing a shrinking treasury cuts.' },
    { cause: 'Caesar burns the fleet in 48 BC', effect: 'Books near the docks are destroyed', because: 'Fire in a harbour spreads to warehouses, and Alexandria exported papyrus and books as commodities.' },
    { cause: 'Later writers need a single dramatic ending', effect: 'A gradual decline becomes a legendary night', because: 'A story with a villain and a date is transmissible, and a story about deferred maintenance is not.' },
  ],

  myths: [
    {
      myth: 'The Library of Alexandria was destroyed in a single catastrophic fire.',
      reality: 'No ancient source describes such an event. There are four candidate destructions across seven centuries — Caesar in 48 BC, Aurelian in 272, the Serapeum in 391, the Arab conquest in 642 — and each fails on the evidence. Strabo visits twenty years after Caesar’s fire and describes a working institution.',
      whyItPersists: 'A single night with a culprit is a story. Three centuries of underfunding is a condition, and conditions do not get retold.',
      sourceIds: ['bagnall-2002', 'strabo-geography', 'el-abbadi-1990'],
    },
    {
      myth: 'The Caliph Omar ordered the books burned to heat the baths.',
      reality: 'The story first appears in the thirteenth century, six hundred years after the conquest, in Bar Hebraeus. No contemporary source mentions it, including Christian chroniclers with every motive to record it. It is rejected by historians across the field, and it circulated in Europe as crusade-era polemic.',
      whyItPersists: 'It is vivid, it has a quotable line, and for several centuries it was politically useful in Europe. Vividness plus utility keeps a story alive long after its evidence has gone.',
      sourceIds: ['el-abbadi-1990', 'bagnall-2002'],
    },
    {
      myth: 'It held half a million or more scrolls.',
      reality: 'The ancient figures range from 40,000 to 700,000 and are mutually inconsistent, written centuries later by people who counted nothing. Bagnall’s reconstruction — take every known Greek author and estimate generously — struggles to reach a hundred thousand rolls even assuming the collection acquired essentially everything.',
      whyItPersists: 'Round enormous numbers were a rhetorical device in antiquity and are a rhetorical device now. The size of the loss is the whole emotional point of the legend.',
      sourceIds: ['bagnall-2002', 'aulus-gellius'],
    },
    {
      myth: 'Losing the Library set science back a thousand years.',
      reality: 'The most important Alexandrian work largely survives, precisely because it was copied elsewhere: Euclid, Ptolemy’s astronomy, Galen’s medicine. What was lost from antiquity was lost gradually across the whole Mediterranean, by works falling out of the teaching curriculum and stopping being copied.',
      whyItPersists: 'It makes a single event carry the weight of a diffuse, undramatic and much larger process, and it flatters the idea that progress is fragile in an interesting way rather than in a boring one.',
      sourceIds: ['bagnall-2002', 'el-abbadi-1990'],
    },
  ],

  disagreements: [
    {
      question: 'Did Caesar’s fire in 48 BC damage the Library itself?',
      positions: [
        { view: 'Yes — several ancient writers say so, with Plutarch stating that the fire destroyed the great library, and Seneca giving a figure of 40,000 books.', heldBy: 'Plutarch, Seneca, and a long tradition following them', sourceId: 'plutarch-caesar' },
        { view: 'No, or not significantly. Strabo describes the Mouseion functioning two decades later, scholars continue there for centuries, and Cassius Dio specifies a dockside warehouse of grain and books.', heldBy: 'Bagnall, El-Abbadi and most current scholarship', sourceId: 'bagnall-2002' },
      ],
      atlasPosition: 'The atlas says books burned in 48 BC and that the institution continued, because that is what the closest witness describes. It treats the identification of that fire with the destruction of the Library as a later conflation.',
    },
    {
      question: 'When did the Library actually cease to exist?',
      positions: [
        { view: 'Effectively in the second and first centuries BC, through Ptolemaic decline and the purge of 145 BC, with the physical remnant destroyed later almost incidentally.', heldBy: 'The defunding reading, following Bagnall', sourceId: 'bagnall-2002' },
        { view: 'In 272 AD, when Aurelian destroyed the Brucheion quarter where the Mouseion stood. Until then there is evidence of continued scholarly activity attached to the institution.', heldBy: 'El-Abbadi and others who date the end to a specific event', sourceId: 'el-abbadi-1990' },
      ],
      atlasPosition: 'The atlas presents these as compatible: the institution was hollowed out by defunding long before the quarter containing it was destroyed. It does not offer a single date, because the sources do not support one.',
    },
  ],

  didYouKnow: [
    'No ancient source describes the Library of Alexandria being destroyed. The famous night is an inference made much later.',
    'Strabo toured the Mouseion about twenty years after Caesar’s fire and described it as a going concern, without mentioning any disaster.',
    'Ships docking at Alexandria were searched for books, which were confiscated and copied. The seized volumes were catalogued as "from the ships".',
    'Ptolemy III is said to have borrowed Athens’ official texts of the great tragedians on a huge deposit, kept the originals, returned copies, and forfeited the money.',
    'Eratosthenes, a chief librarian, measured the circumference of the earth from the angle of shadows and got within a few per cent.',
    'Callimachus’s catalogue of the collection ran to 120 scrolls, and is arguably the first library catalogue in history.',
    'The story about the Caliph Omar burning the books to heat the baths first appears six hundred years after the event.',
    'Nobody knows where the Library stood. Its foundations have never been securely identified.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'The Library of Alexandria was part of the Mouseion, a state-funded research institution founded by the Greek pharaohs of Egypt around 290 BC. It collected aggressively — books were confiscated from ships in the harbour and copied — and the scholarship was genuine: the standard texts of Homer, the first library catalogue, and Eratosthenes’ measurement of the earth all come from it.',
        'It did not burn down in a night. No ancient source describes such an event. Caesar’s harbour fire in 48 BC destroyed books stored near the docks, but Strabo describes the institution working twenty years later. Aurelian destroyed the quarter it stood in in 272 AD. The Serapeum was demolished in 391, and the accounts do not mention books. The tale of the Caliph Omar burning them in 642 first appears six hundred years afterwards and is rejected by historians.',
        'What actually killed it was money. Papyrus rots within a century or two, so a library survives only by continuously recopying itself, which requires salaried scribes. Ptolemaic decline, and a purge of scholars in 145 BC, ended that funding long before any of the famous destructions.',
        'The losses from antiquity are enormous and real — seven of Sophocles’ 120 plays survive — but they happened by attrition, not arson.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'You have probably heard that the greatest library in the world burned down one night, and all the knowledge of the ancient world was lost. It is a brilliant story. It is also not what happened.',
        'The library was real. It was in Egypt, and the kings there paid clever people to live in it and study, and they were so keen on collecting books that they searched every ship coming into the harbour and took any books they found.',
        'Here is the thing nobody tells you: the books were made of papyrus, which is a bit like thick paper made from reeds, and it rots. After a hundred years or so, a scroll is basically crumbs. So the only way to keep a library is to have people copying every book out again, forever.',
        'That costs a lot of money. And after a few hundred years, the kings ran out of money, and then they got angry with the clever people and threw a lot of them out of the country. Nobody was paying for the copying any more.',
        'So the books did not burn. They just slowly fell apart, because everyone had stopped looking after them. Which is sadder, honestly — and it is also the thing that could happen again, because everything on a computer needs someone to keep copying it too.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The historiographical turn here is Bagnall (2002), whose argument is quantitative rather than narrative: he reconstructs plausible upper bounds for the collection from the attested corpus of pre-Ptolemaic Greek literature and shows the transmitted figures to be untenable by roughly an order of magnitude. The consequence is not merely that the numbers are wrong but that the entire "catastrophic loss" framing rests on them.',
        'The source problem is acute. There is no contemporary description of the Library’s holdings, organisation or end. Strabo (XVII.1.8) is the closest thing to autopsy and describes the Mouseion, not the Library; Aulus Gellius, Ammianus, Plutarch and Seneca are all writing at long remove and within traditions that valued magnitude. The Letter of Aristeas is a Hellenistic Jewish apologetic text and cannot be treated as documentary.',
        'On the 48 BC fire, the decisive negative evidence is the continuity of Alexandrian scholarly activity into the Roman period and Strabo’s silence. Cassius Dio (XLII.38) specifies the burning of a dockside store, which is consistent with Alexandria’s role as an exporter of papyrus and books. Plutarch’s formulation is the origin of the conflation.',
        'The 642 tradition (Bar Hebraeus, *Mukhtasar ta’rikh al-duwal*) is a thirteenth-century topos with no earlier attestation and an identifiable transmission history into early modern European polemic; El-Abbadi traces this. It is worth teaching precisely as a case study in how a story can achieve canonical status without any evidentiary basis, and in how such stories are put to work.',
        'Finally, the substantive point for the history of knowledge: manuscript transmission is a flow, not a stock. Survival correlates with curricular status — what was taught was copied, and what was copied survived. This explains the differential survival of Euclid and Galen against, for instance, most Hellenistic poetry, far better than any account centred on destruction events.',
      ],
    },
    {
      id: 'the-real-mechanism',
      label: 'How books actually die',
      kind: 'angle',
      paragraphs: [
        'The interesting thing about the loss of ancient literature is that we know roughly how it worked, and it is not dramatic at all.',
        '**Step one: the material has a shelf life.** Papyrus in use lasts perhaps a century or two. Parchment lasts longer but is expensive and gets scraped clean and reused. Nothing survives by sitting still.',
        '**Step two: copying is expensive and selective.** A scribe’s time and a stock of writing material are real costs. Nobody copies everything; they copy what is wanted, which means what is taught, quoted, admired or legally required.',
        '**Step three: falling out of fashion is fatal.** If a work is not on the curriculum for a couple of generations, no fresh copies are made. The existing copies keep decaying on schedule. Then one day there is one, and then there is none, and nobody notices the transition.',
        'This is why survival is so lopsided. Euclid survives because everyone taught geometry. Galen survives because doctors needed him. Most Hellenistic poetry does not survive, because it stopped being read — and the difference between those outcomes is not a fire, it is a syllabus.',
        'It is also why the great preservers of Greek knowledge were not Greeks. Byzantine monks kept copying for a thousand years. Abbasid Baghdad paid for translation into Arabic as state policy. Toledo turned Arabic back into Latin. Each was a decision to keep spending, made by people with no obligation to do so.',
      ],
    },
    {
      id: 'why-we-want-the-fire',
      label: 'Why we want it to have burned',
      kind: 'contrast',
      paragraphs: [
        'Compare the two stories and it becomes obvious why only one of them is famous.',
        '**The fire.** A single night. A named culprit — a general, a bishop, a caliph, a mob. Irreplaceable knowledge lost in hours. A clean moral: barbarism destroys civilisation, and here is a date for it. It can be told in one sentence and it makes the teller feel something.',
        '**The truth.** Three centuries of gradual defunding, a scattered scholarly community, and a physical medium that decays unless somebody is continuously paid to copy it. No villain. No date. No sentence.',
        'The fire story also does political work, which is why it keeps being retold with different culprits depending on who is telling it. Christians burned it. Muslims burned it. Caesar burned it. Each version arrives conveniently attached to an argument somebody wanted to win.',
        'The uncomfortable part is that the true version implicates us rather than someone else. If knowledge is lost by defunding and neglect rather than by arson, then the question is not "who would do such a thing" but "what are we currently not paying to copy". Nobody wants that story. It has no villain in it except a budget committee, and the budget committee is usually us.',
      ],
    },
  ],

  beforeAfter: {
    label: 'The legend, and the record',
    before: {
      title: 'The story as usually told',
      points: [
        'A single catastrophic fire on one night',
        'Half a million or more scrolls destroyed',
        'A named villain: Caesar, a bishop, or a caliph',
        'All the knowledge of the ancient world lost at once',
        'Science set back by a thousand years',
      ],
    },
    after: {
      title: 'What the sources support',
      points: [
        'No ancient account of any such night exists',
        'Plausible holdings perhaps a tenth of the largest claim',
        'Four candidate events across seven centuries, all failing',
        'Losses accumulating across the Mediterranean over centuries',
        'Alexandrian science largely surviving, copied elsewhere',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the Ptolemies had kept funding it for another three centuries?',
      reasoning: 'The Library’s real asset was a permanent, salaried copying operation. Sustained funding into the Roman imperial period would have meant fresh copies of works that instead decayed unread — plausibly including much of the Hellenistic poetry, historiography and mathematics we now know only from quotations.',
      constraint: 'Speculation, and it assumes copying decisions would have been broad rather than fashionable. Even a well-funded library copies what its scholars value; the same curricular filtering that lost us those works was operating inside Alexandria too. Funding changes the volume, not necessarily the selection.',
    },
    {
      question: 'What if the burning story had never taken hold?',
      reasoning: 'Without a single catastrophic image, popular understanding of how ancient knowledge was lost might have centred on transmission and neglect — which is what actually happened, and which is directly applicable to modern archives and digital preservation.',
      constraint: 'This is speculation about a counterfactual culture, not a counterfactual event. The burning story has been useful to too many different arguments for too long; something like it would very likely have been invented anyway, because the alternative explanation is undramatic and hard to sell.',
    },
  ],

  quiz: [
    {
      question: 'What do ancient sources say about the night the Library burned?',
      options: [
        'They give conflicting dates for it',
        'Nothing — no ancient source describes such an event',
        'They blame the Caliph Omar',
        'They record 700,000 scrolls lost in one fire',
      ],
      answerIndex: 1,
      explains: 'There is no ancient account of a single catastrophic destruction. The famous night is a later inference stitched together from four separate and much weaker candidate events.',
    },
    {
      question: 'What is the strongest evidence that Caesar’s 48 BC fire did not destroy the Library?',
      options: [
        'Caesar denied it in his own writings',
        'Strabo describes the institution functioning twenty years later',
        'The fire was on the wrong side of the city',
        'There was no fire at all',
      ],
      answerIndex: 1,
      explains: 'Strabo, a careful geographer, toured Alexandria around 20 BC and describes the Mouseion in the present tense with its scholars and facilities, mentioning no disaster.',
    },
    {
      question: 'Why does a papyrus library need continuous funding to survive?',
      options: [
        'To pay for guards against fire',
        'Because papyrus decays and every scroll must be recopied',
        'To buy new books each year',
        'Because scrolls were rented, not owned',
      ],
      answerIndex: 1,
      explains: 'Papyrus lasts perhaps a century or two in use. Preservation is a continuous copying process requiring scribes and materials — stop paying and the collection quietly disintegrates.',
    },
    {
      question: 'How was most ancient literature actually lost?',
      options: [
        'Burned by invaders',
        'Deliberately destroyed by the Church',
        'It stopped being copied, and the existing copies decayed',
        'Lost in shipwrecks',
      ],
      answerIndex: 2,
      explains: 'Survival tracked the teaching curriculum. Works that fell out of fashion were not recopied, and once the last decaying copy went, so did the work — no fire required.',
    },
  ],

  sources: [
    {
      id: 'strabo-geography',
      kind: 'primary',
      author: 'Strabo',
      title: 'Geography, Book XVII',
      year: 20,
      detail: 'Written c. 20 BC–AD 23; Loeb Classical Library, trans. H. L. Jones',
      note: 'The closest thing to an eyewitness. He describes the Mouseion as functioning about twenty years after Caesar’s fire, and mentions no destruction — which is the single most important piece of evidence here.',
    },
    {
      id: 'plutarch-caesar',
      kind: 'primary',
      author: 'Plutarch',
      title: 'Life of Caesar, 49',
      year: 100,
      detail: 'Written c. AD 100; Loeb Classical Library, Parallel Lives vol. VII',
      note: 'The origin of the conflation: Plutarch says the harbour fire destroyed the great library. Written a century and a half after the event, by a biographer, not a witness.',
    },
    {
      id: 'aulus-gellius',
      kind: 'primary',
      author: 'Aulus Gellius',
      title: 'Attic Nights, VII.17',
      year: 180,
      detail: 'Written c. AD 180; Loeb Classical Library, trans. J. C. Rolfe',
      note: 'Source of the 700,000-volume figure, written more than two centuries after Caesar’s fire and four after the Library’s best period. Cited here as evidence about ancient rhetoric, not about the collection.',
    },
    {
      id: 'letter-of-aristeas',
      kind: 'primary',
      author: 'Anonymous ("Aristeas to Philocrates")',
      title: 'The Letter of Aristeas',
      year: -150,
      detail: 'Hellenistic Jewish text, probably 2nd century BC',
      note: 'Gives the 200,000-scrolls-and-growing figure. A partly fictional apologetic work about the translation of the Hebrew scriptures — usable as a witness to claims made, not to facts.',
    },
    {
      id: 'bagnall-2002',
      kind: 'paper',
      author: 'Roger S. Bagnall',
      title: 'Alexandria: Library of Dreams',
      year: 2002,
      detail: 'Proceedings of the American Philosophical Society, vol. 146, no. 4, pp. 348–362',
      note: 'The paper that dismantles the numbers by reconstructing what could plausibly have existed to collect, and reframes the ending as decay and defunding rather than destruction.',
    },
    {
      id: 'el-abbadi-1990',
      kind: 'book',
      author: 'Mostafa El-Abbadi',
      title: 'The Life and Fate of the Ancient Library of Alexandria',
      year: 1990,
      detail: 'UNESCO / UNDP, Paris. ISBN 978-92-3-102632-4',
      note: 'The standard scholarly account of what the institution was and how each destruction story arose, including the transmission history of the Caliph Omar legend.',
    },
  ],
}
