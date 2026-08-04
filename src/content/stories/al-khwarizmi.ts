import type { Story } from '../types'

export const alKhwarizmi: Story = {
  slug: 'al-khwarizmi',
  title: 'Al-Khwārizmī',
  subtitle: 'The man whose name became a word every computer in the world runs on.',
  hook: 'The most important word in computer science is the name of a man who died 1,200 years ago — mispronounced by Latin scribes and never corrected.',
  era: 'medieval',
  years: [780, 850],
  regions: ['Iraq', 'Central Asia', 'Spain'],
  nodes: ['al-khwarizmi', 'algebra', 'algorithm', 'house-of-wisdom', 'baghdad'],
  tags: ['mathematics', 'science', 'islamic-golden-age', 'computing', 'ideas'],
  readingMinutes: 9,
  reviewed: '2026-08-03',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'Every app on your phone runs on a word. The word is a man’s name.' },
    { beat: 'hook', text: 'He died about 1,200 years ago, and Latin scribes spelled him wrong.' },
    { beat: 'worldBefore', text: 'Try multiplying 148 by 39 in Roman numerals. CXLVIII by XXXIX.' },
    { beat: 'worldBefore', text: 'You cannot. There are no columns to line up. There is no symbol for nothing.' },
    { beat: 'worldBefore', punch: true, mark: 'gate', text: 'So arithmetic is not something you do. It is someone you hire.' },
    { beat: 'problem', kicker: '762', text: 'Baghdad is built as a perfect circle. Within decades it is the largest city on earth.' },
    { beat: 'problem', text: 'An empire that size runs on numbers. Land, canals, taxes, the direction of Mecca.' },
    { beat: 'problem', text: 'And one problem that turns up in every town, every week. Inheritance.' },
    { beat: 'problem', text: 'Islamic inheritance law is exact fractions. Get it wrong and it is not a maths error.' },
    { beat: 'problem', punch: true, text: 'It is an injustice.' },
    { beat: 'story', kicker: 'around 820', text: 'A scholar called al-Khwārizmī writes a book to fix it.' },
    { beat: 'story', text: 'Two moves. Restore what was taken from one side. Cancel what appears on both.' },
    { beat: 'story', text: 'In Arabic: al-jabr, and al-muqābala.' },
    { beat: 'story', punch: true, mark: 'chain', text: 'al-jabr → algebra.' },
    { beat: 'story', text: 'Here is the strange part. There is no x in it. No equals sign. Those get invented centuries later.' },
    { beat: 'story', text: 'Every equation is a sentence. Every proof is a drawing.' },
    { beat: 'story', text: '"Completing the square" was not a metaphor. He drew an actual square.' },
    { beat: 'whyItHappened', text: 'And he tells you why he wrote it. Not for glory. For inheritance disputes, lawsuits, trade and digging canals.' },
    { beat: 'whyItHappened', punch: true, text: 'Algebra was invented for probate.' },
    { beat: 'consequences', text: 'Then he writes a second book. Nine digits, place value, and a small circle for an empty column.' },
    { beat: 'consequences', text: 'Zero.' },
    { beat: 'consequences', punch: true, text: 'Every Arabic copy of that book is lost. All of them.' },
    { beat: 'consequences', text: 'What survives is a Latin translation, made in Spain three hundred years later.' },
    { beat: 'consequences', text: 'It opens by naming its source the only way Latin letters could manage. Dixit Algoritmi.' },
    { beat: 'consequences', text: '"Al-Khwārizmī said."' },
    { beat: 'consequences', text: 'Latin readers thought Algoritmi was the name of the method.' },
    { beat: 'consequences', punch: true, text: 'It was not. It was him.' },
    { beat: 'whyItMatters', text: 'That is where "algorithm" comes from.' },
    { beat: 'whyItMatters', text: 'A word that now means: steps so exact you do not need to understand them to follow them.' },
    { beat: 'whyItMatters', punch: true, mark: 'echo', text: 'Which is the only reason a machine can.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'Try multiplying 148 by 39 using Roman numerals. CXLVIII by XXXIX. Go on.',
        'You cannot, really — not the way you were taught. There are no columns to line up, no place to carry a digit into, and no symbol at all for "nothing here". Roman numerals are excellent for recording a number and almost useless for calculating with one.',
        'So for most of history, arithmetic was not something you did on paper. It was something you did with a counting board, with pebbles in grooves, or with your fingers — and there were books teaching finger positions for numbers up to ten thousand. Doing sums was a specialist skill, like playing an instrument.',
        'Which meant that if you were a merchant, a tax official, or a judge dividing up an inheritance, you did not calculate. You hired someone who could.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Picture it like this',
        body: 'Imagine if writing existed, but only trained scribes could read — and every time you wanted to know what a letter said, you had to find one and pay them. That was arithmetic for most of human history.',
      },
      sourceIds: ['al-khalili-2010'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'In the year 762, a caliph named al-Mansur founded a new capital on the Tigris. It was built as a perfect circle, and within a few decades it was the largest city on earth. Baghdad.',
        'An empire that size runs on numbers. Land has to be surveyed and taxed. Canals have to be dug at the right gradient. Trade routes need currency conversion. Prayer times need astronomy, and the direction of Mecca needs spherical geometry from wherever you happen to be standing.',
        'And there was one problem the Abbasid state faced constantly, in every town, every week: inheritance.',
        'Islamic inheritance law is precise and fractional. A widow receives a set share, sons and daughters receive shares in a fixed ratio, debts and bequests come off first, and the whole thing has to balance exactly. Get it wrong and you have not made an arithmetic error — you have committed an injustice.',
        'These calculations were being solved case by case, by people who knew a great many particular tricks. What nobody had was a *method*: a single procedure that would solve not this problem, but every problem shaped like it.',
      ],
      sourceIds: ['rashed-2009', 'gutas-1998'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'We know remarkably little about Muḥammad ibn Mūsā al-Khwārizmī the person. Even his name is a clue rather than a fact: it suggests his family came from Khwarazm, an oasis region south of the Aral Sea, though one early source places his people near Baghdad instead. No portrait exists. No birth record. We have his books, and almost nothing else.',
        'What we know is that he worked in Baghdad in the first half of the ninth century, under the caliph al-Maʾmūn, in the scholarly world clustered around the court and its library — the Bayt al-Ḥikma, the House of Wisdom.',
        'Around 820 he wrote a book with a long title that begins *al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala*: "The Compendious Book on Calculation by Restoring and Balancing".',
        'Those last two words are the whole idea.',
        '**Restoring** — *al-jabr* — means that if something has been taken away from one side of an equation, you put it back, and you do the same to the other side. **Balancing** — *al-muqābala* — means that if the same thing appears on both sides, you cancel it from both.',
        'That sounds obvious. It is obvious now because of this book. What al-Khwārizmī did was recognise that these two moves, applied in order, reduce any of a whole family of problems to one of six standard forms — and then he showed how to solve each of the six, every time, without inspiration.',
        'Here is the part that startles people: there is not a single symbol in it. No *x*. No equals sign. Those were invented centuries later, in Europe. Al-Khwārizmī wrote every equation out in words — "a square and ten roots are equal to thirty-nine dirhams" — and then proved each solution with a geometric diagram, by literally completing a square.',
        'He also told you why he had written it. Not for glory, and not for mathematics itself: for what people need, he said, in cases of inheritance, legacies, partition, lawsuits and trade, and in surveying land and digging canals.',
        'Algebra was invented for probate.',
        'Then he wrote a second book, and this one may have mattered even more. It explained a system of calculating he had learned from Indian sources — nine digits, a place-value system, and a small circle to mark an empty column. Zero.',
        'The Arabic original of that book is lost. Every copy. What survives is a Latin translation made in twelfth-century Spain, and the translator opened it by naming his source in the only way he could manage in Latin letters: *Dixit Algoritmi*. "Al-Khwārizmī said".',
        'Latin readers took "Algoritmi" to be the name of the method rather than the man. To do a calculation the new way — with digits, in columns, on paper — was to do *algorism*. The word survived into English, drifted, hardened, and by the twentieth century meant any exact procedure that produces a result without requiring the person following it to understand why it works.',
        'Which is precisely the property that lets a machine follow one.',
      ],
      aside: {
        kind: 'number',
        label: 'The six forms',
        body: 'Al-Khwārizmī needed six standard equation types where we need one. In modern notation they are all cases of ax² + bx + c = 0 — but negative numbers were not accepted as coefficients, so "squares equal roots" and "squares plus roots equal numbers" had to be handled as genuinely separate problems.',
      },
      sourceIds: ['khwarizmi-820', 'rosen-1831', 'rashed-2009'],
    },

    whyItHappened: {
      heading: 'Why it happened there',
      paragraphs: [
        'Great mathematicians appear in every century. What Baghdad had was a system for keeping their work.',
        '**The state paid for translation, for two hundred years.** From the mid-eighth century the Abbasid court funded a sustained effort to render Greek, Persian and Sanskrit science into Arabic. This was not a hobby of one enlightened caliph — it outlasted individual rulers, drew money from courtiers, generals and merchant families, and paid translators professional rates. Euclid, Ptolemy, Archimedes, Galen and Aristotle all came through it.',
        '**Paper made copying cheap.** Paper reached the Islamic world from China during the eighth century, and Baghdad had mills by the end of it. Parchment required a herd of animals; paper required rags. The cost of preserving an idea fell by an order of magnitude, and the number of ideas that survived rose to match.',
        '**The empire connected traditions that had never met.** Greek geometry, Indian arithmetic and Persian astronomy arrived in the same city, in the same language, within a generation. Al-Khwārizmī’s two great books are exactly this collision: Greek geometric proof applied to Indian numerals to solve problems posed by Islamic law.',
        '**And the questions were practical.** This mathematics was funded because it answered things the state and the market actually needed answered. That is not a limitation on it. It is why anybody paid for it.',
      ],
      sourceIds: ['gutas-1998', 'saliba-2007'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'A method, unlike a solved problem, does not have to be rediscovered. That is the difference this made.',
      ],
      shortTerm: [
        'Inheritance, tax and trade calculations acquired a standard procedure, and al-Khwārizmī’s own book devotes a long section to worked legal cases.',
        'Hindu-Arabic numerals began spreading through the Arabic-speaking world, arriving with a manual rather than as a curiosity.',
        'His astronomical tables, the Zīj al-Sindhind, and his revision of Ptolemy’s geography gave the Abbasid state working reference works of its own.',
      ],
      longTerm: [
        'In twelfth-century Toledo and Segovia, Latin translators including Robert of Chester and Gerard of Cremona rendered the algebra into Latin, and Europe acquired a subject it had not had.',
        'In 1202 Fibonacci, raised among merchants in North Africa, published the Liber Abaci — which sold the new numerals to European traders using worked profit-and-loss examples. Commerce adopted them long before universities did.',
        'Once numbers could be written in aligned columns and added quickly, double-entry bookkeeping became practical — and with it the auditable joint-stock company.',
        '"Al-jabr" became algebra; "Algoritmi" became algorithm. Two words in daily use, one of them the organising concept of an entire industry.',
      ],
      unexpected: [
        'In Spanish, an *algebrista* was for centuries a bone-setter — someone who restores broken parts to their proper place. Cervantes uses the word that way in Don Quixote. It is the same *al-jabr*: restoring.',
        'The book that gave computing its central word survives only in translation. Not one Arabic manuscript of al-Khwārizmī’s arithmetic is known.',
        'The Mongols, cast as the destroyers of Islamic science, founded the most advanced observatory in the world at Maragha within a year of sacking Baghdad — and staffed it with the astronomer they had captured there.',
        'Al-Khwārizmī has a crater on the far side of the Moon.',
      ],
      sourceIds: ['rashed-2009', 'saliba-2007', 'al-khalili-2010'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'Every piece of software you have ever used is a pile of algorithms. The word means what al-Khwārizmī’s method was: a sequence of steps so completely specified that following it requires no judgement at all.',
        'That property is what made computers possible. A machine cannot understand a problem. It can only follow a procedure. Nine hundred years before anyone built one, al-Khwārizmī had established that a whole class of problems could be reduced to procedures — and that is the assumption every programmer still works from.',
        'There is a second thing worth taking from this, and it is about how knowledge actually travels.',
        'Greek geometry survived because Arabic-speaking scholars chose to copy it. Indian arithmetic reached Europe because a Persian-named mathematician in Baghdad wrote a manual for it. That manual reached England through Spain, in Latin, translated by people working alongside Muslim and Jewish colleagues in a city that had recently changed hands.',
        'Not one step of that chain was inevitable. Ideas do not spread because they are good. They spread because specific people, usually for practical reasons of their own, decided to carry them.',
      ],
      sourceIds: ['saliba-2007', 'gutas-1998'],
    },
  },

  timeline: [
    { year: 628, title: 'Brahmagupta writes down the rules for zero', detail: 'In the Brāhmasphuṭasiddhānta, zero is treated as a number you can calculate with, not merely a gap.', pivotal: true },
    { year: 751, title: 'Paper begins moving west', detail: 'Papermaking spreads into the Islamic world during the eighth century; Baghdad has mills by around 795. The story that captured Chinese papermakers taught the craft after the Battle of Talas is a later tradition.', confidence: 'contested' },
    { year: 762, title: 'Baghdad is founded', detail: 'Al-Mansur builds a new circular capital on the Tigris. Within decades it is the largest city on earth.', pivotal: true },
    { year: 780, title: 'Al-Khwārizmī is born', detail: 'Probably in or from Khwarazm, south of the Aral Sea. The date is an estimate; almost nothing about his life is documented.', confidence: 'contested' },
    { year: 813, title: 'Al-Maʾmūn becomes caliph', detail: 'His reign marks the height of state patronage for translation and for the sciences.' },
    { year: 820, title: 'The book on al-jabr and al-muqābala', detail: 'Restoring and balancing: two moves that reduce a whole family of problems to six solvable forms. Written entirely in words, proved with geometry.', pivotal: true },
    { year: 825, title: 'The book on Indian calculation', detail: 'Nine digits, place value and zero, explained as a working method. The Arabic original is lost.', pivotal: true },
    { year: 830, title: 'Kitāb ṣūrat al-arḍ', detail: 'His revision of Ptolemy’s geography, correcting coordinates for the lands the Abbasids actually governed.' },
    { year: 850, title: 'Al-Khwārizmī dies', detail: 'The date, like the birth, is approximate.' },
    { year: 1145, title: 'Robert of Chester translates the algebra into Latin', detail: 'Working in Segovia. Gerard of Cremona produces another version at Toledo. Europe acquires algebra.', pivotal: true },
    { year: 1202, title: 'Fibonacci publishes the Liber Abaci', detail: 'The new numerals pitched to merchants through worked problems about profit, interest and currency exchange.' },
    { year: 1258, title: 'The Mongols take Baghdad', detail: 'The city falls in thirteen days and the caliph is killed. What this did to Islamic science is argued about to this day.', pivotal: true },
    { year: 1259, title: 'The Maragha observatory is founded', detail: 'Hulagu funds it, and Nasir al-Din al-Tusi — taken at Baghdad — directs it. It becomes the most advanced observatory in the world.' },
    { year: 1494, title: 'Pacioli codifies double-entry bookkeeping', detail: 'The Summa de arithmetica describes the Venetian method; the accounting of the modern company starts here.' },
    { year: 1843, title: 'The word turns mechanical', detail: 'Ada Lovelace publishes a step-by-step procedure intended for a machine to execute — an algorithm in the modern sense.' },
    { year: 1936, title: 'Turing makes it precise', detail: 'Computability defines exactly what an algorithm can be, and gives the word its final technical meaning.' },
  ],

  causeEffect: [
    { cause: 'An empire needs land surveyed, taxes assessed and estates divided', effect: 'The state funds practical mathematics', because: 'Inheritance law is fractional and unforgiving, and every town needed the sums done correctly.' },
    { cause: 'The Abbasid court funds translation for two centuries', effect: 'Greek, Indian and Persian science arrive in one language', because: 'Translators were paid professional rates by patrons across the whole elite, not just by the caliph.' },
    { cause: 'Paper arrives from China', effect: 'Copying a book stops being a luxury', because: 'Parchment needed livestock; paper needed rags, and rags were everywhere.' },
    { cause: 'Al-Khwārizmī reduces problems to six standard forms', effect: 'Mathematics gains general methods rather than particular tricks', because: 'A procedure can be taught and reused; a clever solution to one problem cannot.' },
    { cause: 'Latin scribes render his name as "Algoritmi"', effect: 'The word "algorithm" enters European languages', because: 'Readers took the transliterated name to be the name of the method itself.' },
    { cause: 'Toledo translators put Arabic science into Latin', effect: 'European universities acquire algebra and astronomy', because: 'Twelfth-century Spain was where scholars who read Arabic and scholars who wrote Latin were in the same room.' },
    { cause: 'Aligned columns of digits make arithmetic fast', effect: 'Double-entry bookkeeping becomes practical', because: 'A ledger that balances requires adding long columns quickly and reliably.' },
  ],

  myths: [
    {
      myth: 'The House of Wisdom was a vast research university with the world’s greatest library.',
      reality: 'The evidence for the Bayt al-Ḥikma is thin. It appears to have been a palace library and translation activity attached to the Abbasid court — real and useful, but not the academy of legend. The grand version largely took shape in modern retellings.',
      whyItPersists: 'It is a wonderful image, and it fills a gap where the sources are frustratingly quiet.',
      sourceIds: ['gutas-1998'],
    },
    {
      myth: 'Arabic scholars merely preserved Greek learning until Europe was ready for it.',
      reality: 'They corrected it. Ptolemy’s astronomy was tested against new observations and revised; optics, algebra and trigonometry were substantially built rather than copied. Al-Khwārizmī’s algebra has no Greek precedent in that form.',
      whyItPersists: 'It lets the story of science run in a straight line from Athens to Europe, with a holding period in between.',
      sourceIds: ['saliba-2007', 'rashed-2009'],
    },
    {
      myth: 'Islamic science died when the Mongols sacked Baghdad in 1258.',
      reality: 'Within a year the Mongols were funding the Maragha observatory, whose astronomers produced models that some historians argue reached Copernicus. Astronomy and mathematics continued at a high level for centuries afterwards.',
      whyItPersists: 'A single dramatic date is easier to teach than a long, uneven, still-debated change.',
      sourceIds: ['saliba-2007'],
    },
    {
      myth: 'Al-Khwārizmī invented the numerals we call Arabic.',
      reality: 'The digits and place-value system came from India, and he says so — the Latin title of his book is literally "on the Indian numbers". His contribution was the method and the manual, which is why they travelled.',
      whyItPersists: 'The numerals reached Europe from Arabic sources, so Europe named them after the messenger.',
      sourceIds: ['rashed-2009'],
    },
  ],

  disagreements: [
    {
      question: 'Where was al-Khwārizmī actually from?',
      positions: [
        { view: 'From Khwarazm, in Central Asia, as his name indicates.', heldBy: 'The majority reading, following his nisba' },
        { view: 'From Qutrubbull, near Baghdad — the historian al-Ṭabarī gives him that additional nisba.', heldBy: 'A minority position based on a single early source' },
      ],
      atlasPosition: 'The atlas says his name points to Khwarazm and that an early source complicates it. It does not assert a birthplace.',
    },
    {
      question: 'Did Maragha astronomy influence Copernicus?',
      positions: [
        { view: 'Yes — the mathematical devices Copernicus uses appear earlier at Maragha, and transmission routes through Byzantium and Italy existed.', heldBy: 'George Saliba, F. Jamil Ragep and others', sourceId: 'saliba-2007' },
        { view: 'Unproven — the resemblance is real, but no document showing Copernicus reading those texts has been found.', heldBy: 'Sceptics of the transmission thesis' },
      ],
      atlasPosition: 'Reported as an open question. The atlas states the resemblance, which is not disputed, and labels the transmission as unproven.',
    },
  ],

  didYouKnow: [
    'Al-Khwārizmī wrote algebra without a single symbol — no x, no equals sign. Every equation is a sentence, and every proof is a picture.',
    'He tells you in his own preface that he wrote it for inheritance disputes, lawsuits, trade and canal-digging.',
    'The Arabic original of his arithmetic is completely lost. It survives only because someone in Spain translated it into Latin three hundred years later.',
    'In Spanish, an "algebrista" used to be a bone-setter — one who restores broken things to their place, from the same root as algebra.',
    'Al-Maʾmūn had teams measure the length of a degree of latitude on the plains of Sinjar to calculate the size of the Earth. Their answer was close.',
    'There is a crater on the far side of the Moon named Al-Khwarizmi.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'In ninth-century Baghdad, a scholar named al-Khwārizmī wrote a book about solving equations by "restoring and balancing" — al-jabr and al-muqābala. The first of those words became "algebra".',
        'His insight was that a whole family of problems could be reduced to six standard forms, each with a reliable procedure. Not a clever answer to one question: a method for all of them. He wrote it for practical reasons — inheritance law, trade, surveying.',
        'He wrote a second book explaining Indian numerals: nine digits, place value, and zero. The Arabic original is lost, but a Latin translation survives, opening with "Dixit Algoritmi" — "Al-Khwārizmī said". Latin readers mistook the name for the method.',
        'That is where "algorithm" comes from. It came to mean a procedure so exactly specified that following it needs no understanding — which is exactly what a computer does.',
      ],
    },
    {
      id: 'age-16',
      label: 'Explain like I’m 16',
      kind: 'age',
      paragraphs: [
        'The conceptual leap is from *solutions* to *procedures*. Before al-Khwārizmī, solving an equation meant finding the trick that worked for that equation. After him, it meant classifying the equation into one of six canonical forms and applying the stated algorithm for that form.',
        'The two operations are transformations that preserve equality. Al-jabr eliminates a subtracted quantity by adding it to both sides; al-muqābala cancels equal terms appearing on both. Applied in sequence, they normalise an arbitrary quadratic into one of the six forms — necessary because negative coefficients were not admitted, so what we write as one equation had to be six.',
        'The proofs are geometric, not symbolic. To solve x² + 10x = 39 he constructs an actual square, adds four rectangles of width 10/4 along its sides, and completes the figure with four corner squares. "Completing the square" is not a metaphor; it is a construction.',
        'The transmission matters as much as the mathematics. Robert of Chester’s Latin translation in 1145 gave Europe algebra, and the Latinisation of his name gave it "algorithm" — a word that only acquired its modern meaning of a mechanically executable procedure much later, via Lovelace and Turing.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'Rashed’s edition establishes the Kitāb al-jabr as the founding text of algebra as an autonomous discipline: its object is not number or magnitude but the equation itself, treated as a thing to be classified and transformed. That reflexive move — mathematics taking its own operations as subject matter — is what distinguishes it from Diophantus and from the Babylonian problem tradition.',
        'Gutas reframes the translation movement as a sustained social phenomenon rather than an episode of caliphal enthusiasm: financed across the Abbasid elite, driven by identifiable political and ideological needs, and lasting roughly two centuries. This substantially deflates the Bayt al-Ḥikma as an institution while strengthening the case for the broader programme.',
        'Saliba’s intervention targets the "preservation" narrative directly, arguing that the astronomical tradition culminating at Maragha constituted a critical research programme addressing known defects in Ptolemaic models, and that the mathematical apparatus reappearing in De revolutionibus warrants a transmission hypothesis, even absent a documented channel.',
        'The historiographical caution worth carrying: the biographical record for al-Khwārizmī is essentially empty, and the persistent temptation is to read the institutional grandeur of later retellings back onto a figure we know only through four surviving works.',
      ],
    },
    {
      id: 'computing',
      label: 'The computing angle',
      kind: 'angle',
      paragraphs: [
        'The word "algorithm" spent most of its life meaning something narrower than it does now: to do algorism was simply to calculate with Hindu-Arabic digits rather than on an abacus.',
        'Its generalisation came when people needed a name for the thing a machine could follow. Ada Lovelace’s 1843 notes contain a fully specified procedure for the Analytical Engine to compute Bernoulli numbers. Turing’s 1936 paper made the notion exact by defining what could be computed by mechanical means at all.',
        'What survives from the ninth century is the underlying property, and it is a strange one: an algorithm must work without being understood. The person — or machine — executing it needs no model of why the steps are correct. Correctness is a property of the procedure, not of the executor.',
        'That separation is the entire foundation of computing. It is also why an algorithm can be wrong in ways nobody notices for years: nothing in the running of it requires anyone to be thinking about what it means.',
      ],
    },
    {
      id: 'transmission',
      label: 'How knowledge travelled',
      kind: 'angle',
      paragraphs: [
        'Follow one idea and you get a map of the medieval world.',
        'Zero and place value are worked out in India and set down by Brahmagupta in 628. They reach Baghdad with Sanskrit astronomical texts in the eighth century. Al-Khwārizmī writes the manual around 825.',
        'The manual travels west across North Africa into al-Andalus. In the twelfth century, in Toledo and Segovia — cities where Arabic, Latin and Hebrew scholars worked in the same institutions — it is translated into Latin. Around 1202 Fibonacci, who learned the system as a boy in Bugia, writes the version that convinces Italian merchants.',
        'Four languages, five centuries, and at every step someone had a practical reason to bother: a caliph needed tables, a translator needed a commission, a merchant needed to compute interest. Nobody in the chain was trying to build the modern world.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Doing arithmetic, before and after',
    before: {
      title: 'With Roman numerals and a counting board',
      points: [
        'Calculation done on a physical device — abacus, counting board, or fingers',
        'No written record of the working, only of the result',
        'No symbol for an empty place',
        'Multiplication and division are specialist skills',
        'Errors cannot be traced, because there is no trace',
      ],
    },
    after: {
      title: 'With digits, place value and zero',
      points: [
        'Calculation done on paper, in aligned columns',
        'The working is written down and can be checked by someone else',
        'Zero holds an empty place, so 105 cannot be read as 15',
        'The same procedure works at any size of number',
        'Errors are findable — which is what makes auditing possible',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the Latin translators had rendered his name correctly?',
      reasoning: 'The subject would still exist and the procedures would be identical. We would simply be calling them something else — the Latin for "the Indian art of calculation" was already in circulation as a rival name.',
      constraint: 'This one really is only a word. It is a good reminder that the word is not the achievement: the achievement is the idea that a class of problems can be reduced to a fixed procedure.',
    },
    {
      question: 'What if the Abbasids had never funded the translation movement?',
      reasoning: 'A substantial amount of Greek science would have been lost outright — several works of Euclid, Ptolemy, Galen and others survive today only in Arabic. Europe’s twelfth-century recovery had to come through Arabic because the Greek was, in many cases, gone.',
      constraint: 'Byzantium retained Greek manuscripts, and some transmission would have happened later and thinner. The loss would have been severe rather than total — which is still a very large difference.',
    },
  ],

  quiz: [
    {
      question: 'What do "al-jabr" and "al-muqābala" actually mean?',
      options: [
        'Adding and subtracting',
        'Restoring and balancing',
        'Counting and measuring',
        'Squaring and rooting',
      ],
      answerIndex: 1,
      explains: 'Al-jabr restores a subtracted quantity to both sides; al-muqābala cancels terms that appear on both. Together they reduce an equation to a standard solvable form.',
    },
    {
      question: 'Why did al-Khwārizmī need six kinds of quadratic equation where we need one?',
      options: [
        'He had not discovered the quadratic formula',
        'Arabic script could not express general equations',
        'Negative numbers were not accepted as coefficients, so the cases could not be combined',
        'He was following six separate Greek sources',
      ],
      answerIndex: 2,
      explains: 'Without negative coefficients, "squares plus roots equal numbers" and "squares equal roots plus numbers" are genuinely different problems, each needing its own procedure.',
    },
    {
      question: 'Where does the word "algorithm" come from?',
      options: [
        'A Greek word for counting',
        'The Latin for "a step"',
        'The title of his book on equations',
        'Latin scribes writing his name as "Algoritmi"',
      ],
      answerIndex: 3,
      explains: 'The Latin translation of his arithmetic opens "Dixit Algoritmi" — "Al-Khwārizmī said". Readers took the name to be the name of the method.',
    },
    {
      question: 'What did he say he wrote his algebra for?',
      options: [
        'The beauty of pure mathematics',
        'Inheritance disputes, trade, lawsuits and surveying',
        'Astronomical prediction',
        'Teaching the caliph’s children',
      ],
      answerIndex: 1,
      explains: 'He says so in his own preface. Algebra was built as a practical tool for the ordinary legal and commercial arithmetic of a large state.',
    },
  ],

  sources: [
    {
      id: 'khwarizmi-820',
      kind: 'primary',
      author: 'Muḥammad ibn Mūsā al-Khwārizmī',
      title: 'al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala',
      year: 820,
      detail: 'Written in Baghdad; date approximate',
      note: 'The founding text of algebra as a subject. Entirely verbal, with geometric proofs.',
    },
    {
      id: 'rosen-1831',
      kind: 'primary',
      author: 'Frederic Rosen (translator)',
      title: 'The Algebra of Mohammed ben Musa',
      year: 1831,
      detail: 'Oriental Translation Fund, London',
      note: 'The first English translation, printed with the Arabic text. Still the most accessible way to read the original argument.',
    },
    {
      id: 'rashed-2009',
      kind: 'book',
      author: 'Roshdi Rashed',
      title: 'Al-Khwārizmī: The Beginnings of Algebra',
      year: 2009,
      detail: 'Saqi Books. ISBN 978-0-86356-430-7',
      note: 'Critical edition and commentary; the scholarly reference for what the text actually does.',
    },
    {
      id: 'gutas-1998',
      kind: 'book',
      author: 'Dimitri Gutas',
      title: 'Greek Thought, Arabic Culture: The Graeco-Arabic Translation Movement in Baghdad and Early ʿAbbāsid Society',
      year: 1998,
      detail: 'Routledge. ISBN 978-0-415-06133-2',
      note: 'The standard account of the translation movement, and the source of the deflationary reading of the House of Wisdom.',
    },
    {
      id: 'saliba-2007',
      kind: 'book',
      author: 'George Saliba',
      title: 'Islamic Science and the Making of the European Renaissance',
      year: 2007,
      detail: 'MIT Press. ISBN 978-0-262-19557-7',
      note: 'Argues against the "preservation" narrative and for continued innovation after 1258, including the Maragha transmission thesis.',
    },
    {
      id: 'al-khalili-2010',
      kind: 'book',
      author: 'Jim Al-Khalili',
      title: 'Pathfinders: The Golden Age of Arabic Science',
      year: 2010,
      detail: 'Allen Lane. ISBN 978-1-84614-161-4',
      note: 'General readership survey; useful for context on the period as a whole.',
    },
  ],
}
