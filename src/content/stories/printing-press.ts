import type { Story } from '../types'

/**
 * Voice: Eisenstein's argument told the way a good technology narrative tells
 * one — the claim is not "books got cheaper", it is that a copy stopped being
 * a thing a person made, and everything downstream of that changed. Johns is
 * kept in the room throughout, because he is the strongest objection to it.
 */
export const printingPress: Story = {
  slug: 'printing-press',
  title: 'The Price of a Copy',
  subtitle: 'Mainz, 1450s — Gutenberg did not invent printing. He invented a way to make identical letters faster than anyone could use them.',
  hook: 'Before 1450 every book in Europe was made by a person copying another book by hand — and that single fact was quietly holding down everything Europe could know.',
  era: 'early-modern',
  category: 'milestones',
  years: [1440, 1550],
  regions: ['Germany', 'Italy', 'Korea', 'China'],
  nodes: ['printing-press', 'gutenberg', 'movable-type', 'reformation', 'martin-luther'],
  tags: ['technology', 'media', 'religion', 'knowledge', 'europe', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'ledger',

  reel: [
    { beat: 'hook', punch: true, text: 'Before 1450, every book in Europe was a person copying another book by hand.' },
    { beat: 'hook', text: 'One person, one book, months. That is the whole bottleneck.' },
    { beat: 'worldBefore', text: 'A monastery library of three hundred volumes is a serious library,' },
    { beat: 'worldBefore', text: 'and every copy in it drifts a little from the one it was copied from —' },
    { beat: 'worldBefore', punch: true, text: 'so there is no such thing as page forty-one. Not really.' },
    { beat: 'problem', kicker: '868', text: 'China had been printing whole carved pages for six hundred years,' },
    { beat: 'problem', kicker: '1377', text: 'and Korea had printed a book with metal type before Gutenberg was born.' },
    { beat: 'problem', punch: true, text: 'So the invention everyone credits him with was already invented.' },
    { beat: 'problem', text: 'What nobody had was a way to make the letters fast enough.' },
    { beat: 'story', kicker: 'Mainz', text: 'Gutenberg is a goldsmith, and he solves it as a goldsmith would:' },
    { beat: 'story', text: 'cut one steel punch, strike it into copper, and you have a mould' },
    { beat: 'story', punch: true, mark: 'press', text: 'that pours the same letter, exactly, all afternoon.' },
    { beat: 'story', text: 'Then an oil-based ink that will stick to metal, and a wine press to squeeze it down.' },
    { beat: 'story', kicker: '1455', text: 'The Bible he prints is beautiful, and it ruins him —' },
    { beat: 'story', punch: true, text: 'his financier sues, wins, and takes the workshop.' },
    { beat: 'story', text: 'Gutenberg gets a pension and a title, and not the business.' },
    { beat: 'whyItHappened', kicker: '1500', text: 'In fifty years there are presses in some two hundred and fifty towns,' },
    { beat: 'whyItHappened', text: 'and the thing that has actually changed is not speed. It is sameness.' },
    { beat: 'whyItHappened', punch: true, mark: 'echo', text: 'Every copy says the same words, so a page number starts to mean something.' },
    { beat: 'whyItHappened', text: 'You can be corrected. You can be checked. You can be quoted back at.' },
    { beat: 'consequences', kicker: '1517', text: 'A monk nails up an argument about indulgences, in Latin, for scholars,' },
    { beat: 'consequences', text: 'and printers translate it and sell it before he has decided what he meant.' },
    { beat: 'consequences', punch: true, text: 'Luther writes short, in German, and becomes the first bestselling author alive.' },
    { beat: 'consequences', text: 'Hus had said much the same a century earlier, and was burned quietly.' },
    { beat: 'consequences', mark: 'web', text: 'The same presses sell witch-hunting manuals, and atrocity pamphlets, and lies.' },
    { beat: 'whyItMatters', text: 'A machine that makes copying cheap does not make people wiser.' },
    { beat: 'whyItMatters', text: 'It makes whatever is already spreading spread further and faster,' },
    { beat: 'whyItMatters', punch: true, text: 'and every argument about that since has been the same argument.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'A medieval book was made by a person, at a desk, copying another book. A skilled scribe could produce a few pages a day. A full Bible took a single copyist something like a year of work — and that was before the parchment, which for a large Bible meant the skins of perhaps two hundred animals.',
        'This is why libraries were counted in hundreds rather than thousands, and why a book was a form of wealth. It is also why owning one was mostly a monastic, aristocratic or academic condition. The universities had a system, the *pecia*, for renting out approved exemplars in sections so several students could copy at once, which tells you exactly how scarce the alternative was.',
        'The second consequence is less obvious and more important. Every hand copy differs from its parent. A scribe skips a line, misreads a word, silently corrects something he thinks is wrong, or adds a note that the next copyist mistakes for text. Over ten generations of copying, a text drifts.',
        'So a scholar in Paris and a scholar in Bologna reading "the same" book were often not reading the same words, and had no way of discovering it. You could not cite a page number, because your page forty-one was not anyone else’s. Cross-referencing, in the modern sense, was not so much difficult as meaningless.',
        'Everything Europe knew was held in a system where knowledge decayed a little every time it was passed on, and where the total number of copies was limited by the number of people willing to spend a year at a desk.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'Around 1450, Europe held perhaps a few million manuscript books, accumulated over a thousand years. By 1500 — fifty years later — the presses had produced somewhere between eight and twenty million printed copies. The bottleneck did not widen. It disappeared.',
        sourceId: 'fussel-2005',
      },
      sourceIds: ['fussel-2005', 'eisenstein-1979'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Here is the part usually left out: printing was not new, and movable type was not new, and neither was invented in Europe.',
        'China had been printing from carved wooden blocks since at least the ninth century — the Diamond Sutra of 868 is a dated, printed, illustrated book, six hundred years before Gutenberg. Around 1040 an artisan named Bi Sheng made movable type from fired clay. Korea went further and cast type in metal: the *Jikji*, printed at a temple near Cheongju in 1377, is the oldest surviving book made with metal movable type, and it is seventy-eight years older than the Gutenberg Bible.',
        'So the question is not "who thought of movable type", because that was settled in Asia. The question is why it changed less there and more in Europe, and the honest answer has several parts. A Chinese or Korean compositor faced thousands of distinct characters rather than a couple of dozen letters, which changes the economics of casting type completely. Korean metal printing was largely a state project for a small elite readership. And Europe had, by accident, an alphabet of twenty-odd shapes, a cursive commercial culture, cheap paper arriving from the Islamic world, and a wine-and-oil press already sitting in every town.',
        'What was genuinely missing everywhere was a way to manufacture letters. If each piece of type has to be carved individually, you have simply replaced one artisan bottleneck with another. To print a page you need thousands of pieces; to print a book you need tens of thousands, all exactly the same height, or the page prints unevenly.',
        'That is the problem Gutenberg solved, and it is a metalworking problem, not a publishing one.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: '"Gutenberg invented printing" is the version on the poster. He did not. He invented a manufacturing process for type, and assembled a working system around it. Which is a smaller claim, and a better one, because it is true and it explains more.',
      },
      sourceIds: ['fussel-2005', 'jikji-1377'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'Johannes Gensfleisch zur Laden zum Gutenberg was a goldsmith’s son from Mainz who spent time in Strasbourg working on things he made people swear not to discuss. He came back to Mainz around 1448 and borrowed money.',
        'His solution to the type problem is the hand mould, and it is beautiful. You engrave one letter, in reverse, on the end of a steel punch — a goldsmith’s skill. You strike the punch into a bar of softer copper, leaving a sunken impression: the matrix. You clamp the matrix into an adjustable two-part mould, pour in molten alloy, open the mould, and out drops a piece of type. Then you do it again, and again, all day.',
        'Two details make it work rather than nearly work. The mould is adjustable in width but fixed in height, so an *i* and an *m* differ in width but every piece stands exactly the same height — which is what lets a page of thousands of loose pieces print evenly. And the alloy is not lead but lead with tin and antimony, a mixture that melts low enough to cast easily, hardens fast, and — unusually — expands very slightly as it sets, so it fills the matrix completely and gives a sharp letter.',
        'Around that he built the rest of the system: an oil-and-varnish based ink, closer to a paint than to the water-based ink scribes used, because water-based ink beads up and slides off metal; and a screw press adapted from the kind used for wine and olives, which applies even pressure over a whole page at once.',
        'The first great product was the 42-line Bible, printed at Mainz around 1454–55: roughly 180 copies, most on paper and a few dozen on vellum, in a type designed to look like the best manuscript hand of the region. It is one of the most beautiful books ever made, and it was made to look handmade, because that was what a book was supposed to look like.',
        'It also bankrupted him. The money had come from a Mainz businessman named Johann Fust, and in 1455 Fust sued for repayment. We know the details because a notary wrote the judgement down, and the document survives: Fust won, and took the workshop, the type and the materials. He went into business with Gutenberg’s foreman, Peter Schöffer, who married his daughter, and the firm of Fust and Schöffer printed the first book to carry a printer’s name and a date — the Mainz Psalter of 1457.',
        'Gutenberg printed a little more, went blind or nearly so, and in 1465 was given a courtier’s pension by the Archbishop of Mainz: grain, wine, clothing and exemption from tax. He died in 1468. He had invented the machine that would define the next four centuries and lost it in court.',
        'The technology, meanwhile, did not stay in Mainz. In 1462 the city was sacked in a local archbishops’ quarrel and the printers scattered. Within a decade there were presses in Cologne, Basel, Rome, Venice, Paris, Kraków. By 1500 there were presses in something like 250 to 280 European towns, and they had produced around 28,000 distinct editions — the books we now call incunabula, "things in the cradle".',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'The notary Ulrich Helmasperger recorded, on 6 November 1455, that Johann Fust swore he had raised money on interest to lend to Gutenberg for "the work of the books", and that the court awarded him repayment. It is a dull legal instrument about a debt, and it is the best documentary evidence we have that any of this happened.',
        sourceId: 'helmasperger-1455',
      },
      sourceIds: ['fussel-2005', 'helmasperger-1455', 'eisenstein-1979'],
    },

    whyItHappened: {
      heading: 'Why it mattered so much',
      paragraphs: [
        'The obvious answer is volume, and volume is real. But the argument Elizabeth Eisenstein made — and it is the argument that changed how historians think about this — is that the deeper effects come from properties that have nothing to do with speed.',
        '**Standardisation.** Every copy off a given setting of type is identical. That sounds trivial and is not. It means a page number refers to something. It means two people in different countries can argue about the same sentence. It means an error can be *found*, because it is in everybody’s copy in the same place, rather than being one scribe’s private slip.',
        '**Fixity.** A hand-copied text degrades across generations. A printed one does not drift, because the copies do not descend from each other. For the first time, a text could be improved cumulatively rather than eroded — each edition correcting the last, instead of each copy inheriting the last one’s mistakes.',
        '**Recombination.** Printers put things next to each other that had never shared a shelf: maps with tables, star charts with observations, one authority’s claim beside a rival’s. Contradictions that had been spread across centuries and libraries turned up on adjacent pages, which is an uncomfortable and enormously productive thing to have happen.',
        '**And preservation by scattering.** A manuscript is one fire away from gone. A thousand printed copies in a thousand places are, collectively, very hard to destroy — which is why the printed classical texts of the fifteenth century have survived and a great deal of what preceded them has not.',
        'That is the strong version of the case. It has a serious critic, and he should be in the room: Adrian Johns argues that fixity was not a property the machine possessed but a reputation the print trade slowly built. Early print was full of piracy, misattribution and garbled reprints; a reader in 1600 had every reason to distrust a printed book, and the trustworthiness Eisenstein treats as inherent was in fact constructed over two centuries by publishers, guilds and licensing. Both readings explain real evidence, and the honest position holds them together.',
      ],
      sourceIds: ['eisenstein-1979', 'johns-1998', 'fussel-2005'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'The clearest demonstration of what the press had done arrived sixty years later, in the form of an argument about indulgences.',
      ],
      shortTerm: [
        'In 1517 Martin Luther circulated ninety-five theses in Latin, intended for scholarly debate. Printers had them translated and on sale across Germany within weeks, without asking him.',
        'He adapted fast. He began writing short, cheap, vernacular pamphlets — eight or sixteen pages, readable in an evening, priced like a chicken — and became the first author in history to sell in tens of thousands.',
        'Between 1518 and 1525, works by Luther have been estimated at around a third of all books sold in German. No author had ever occupied a market that way, because no market had existed to occupy.',
        'The Church replied in the same medium and lost the exchange badly, partly because its scholars kept writing long books in Latin for each other.',
        'Wittenberg, a small town with a new university, became a publishing centre, and the printers who backed Luther became rich.',
      ],
      longTerm: [
        'Western Christianity split, and the split held, because the arguments could no longer be contained by silencing the people making them.',
        'Vernacular languages standardised around printed forms. Luther’s German Bible did more to fix written German than any decree, and the same process ran in English, French and Italian.',
        'Scientific work became cumulative in a new way: identical diagrams, identical tables, and the ability to say "as against what Ptolemy has on this page".',
        'Governments invented censorship as a permanent institution — licensing, privileges, the Index of Prohibited Books from 1559 — because for the first time there was a supply of dangerous copies rather than a supply of dangerous people.',
        'The author became an economic figure. Copyright is a direct descendant of the printers’ monopolies granted to manage a business that could now make a thousand of something.',
      ],
      unexpected: [
        'The press was as good at spreading nonsense as at spreading knowledge. The *Malleus Maleficarum*, the witch-hunting manual, went through some thirty editions after 1487 and industrialised a persecution that had been local and sporadic.',
        'It also created the first cheap atrocity literature: the pamphlets about Vlad Ţepeş, printed in German from the 1480s, fixed a reputation for five hundred years on the word of his political enemies.',
        'Gutenberg’s Bible was designed to imitate handwriting so well that early buyers sometimes did not realise it was printed. New media almost always begin by pretending to be the old one.',
        'The most consequential single printed book of the century commercially may have been Luca Pacioli’s 1494 mathematics textbook, which contained the first printed description of double-entry bookkeeping and turned a Venetian merchant practice into a European standard.',
      ],
      sourceIds: ['pettegree-2015', 'eisenstein-1979', 'fussel-2005'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The temptation is to file this under "great inventions" and move on. The more useful reading is that the printing press is the first clean case of a pattern we keep living through: a technology that collapses the cost of copying, and a society discovering afterwards what that actually did to it.',
        'It did not make people cleverer. It made whatever was spreading spread further. The same shops that printed Cicero printed the witch manual; the same pipeline that carried the Reformation carried five hundred years of libel about a Wallachian prince. Cheap copies amplify. They do not filter, and nothing in the machine ever promised to.',
        'The deeper change — the one Eisenstein saw and the one that is easy to miss because it is invisible — was sameness. Once every copy said the same words, it became possible to check, to cite, to correct, to build on. That is the precondition for cumulative knowledge, and it is why the scientific revolution happened after the press rather than before it.',
        'And the counter-argument matters just as much. Johns is right that trust in print was not automatic; it had to be built, slowly, by institutions willing to stake their names on accuracy, and it could be lost. Anyone watching a newer copying machine reach the same question — where a copy costs nothing, what makes any of it trustworthy? — is watching an argument that started in Mainz in the 1450s and has never been closed.',
      ],
      sourceIds: ['eisenstein-1979', 'johns-1998'],
    },
  },

  timeline: [
    { year: 868, title: 'The Diamond Sutra is printed in China', detail: 'A dated, illustrated book produced from carved wooden blocks — the oldest printed book with a date on it, six centuries before Mainz.', pivotal: true },
    { year: 1040, title: 'Bi Sheng makes movable type from clay', detail: 'Individual characters in fired ceramic, set into an iron frame. The idea of movable type is settled in China four hundred years early.' },
    { year: 1377, title: 'The Jikji is printed in Korea with metal type', detail: 'A Buddhist anthology cast and printed at a temple near Cheongju — the oldest surviving book made with metal movable type.', pivotal: true },
    { year: 1448, title: 'Gutenberg returns to Mainz and borrows money', detail: 'After secretive experiments in Strasbourg, he sets up a workshop financed by loans he will not be able to repay.' },
    { year: 1455, title: 'The 42-line Bible, and the lawsuit', detail: 'Around 180 copies of a Bible so fine it was mistaken for manuscript. The same year, Fust sues; the notarial record of the judgement survives.', pivotal: true },
    { year: 1457, title: 'The Mainz Psalter', detail: 'Printed by Fust and Schöffer in Gutenberg’s former workshop — the first book to carry a printer’s name and a printing date.' },
    { year: 1462, title: 'Mainz is sacked and the printers scatter', detail: 'A local war disperses the only people who knew how the process worked, which is how the technology reaches the rest of Europe so fast.' },
    { year: 1494, title: 'Pacioli prints double-entry bookkeeping', detail: 'A mathematics textbook containing the first printed account of the Venetian method turns a local practice into a European standard.' },
    { year: 1500, title: 'Presses in some 250 towns', detail: 'Around 28,000 distinct editions have been printed in fifty years — perhaps eight to twenty million copies in a Europe that had a few million books.', pivotal: true },
    { year: 1517, title: 'Luther’s theses are printed and translated', detail: 'A Latin academic document is turned into vernacular pamphlets and sold across Germany within weeks, by printers who never asked him.', pivotal: true },
    { year: 1520, title: 'The pamphlet war', detail: 'Luther switches to short, cheap German pamphlets. Between 1518 and 1525 his works make up perhaps a third of all German books sold.' },
    { year: 1559, title: 'The Index of Prohibited Books', detail: 'Rome publishes a formal list of banned titles. Censorship becomes a standing institution because copies, not authors, are now the problem.' },
  ],

  causeEffect: [
    { cause: 'Every book must be copied by hand', effect: 'Books are rare and expensive', because: 'A full Bible cost a scribe about a year of work plus the skins of two hundred animals, which prices out everyone but institutions.' },
    { cause: 'Hand copies drift from their parent', effect: 'There is no stable "same text"', because: 'Each copyist introduces small errors and silent corrections, so after ten generations two copies genuinely differ.' },
    { cause: 'Type must be carved individually', effect: 'Movable type stays a limited technology', because: 'Replacing one artisan bottleneck with another gains you nothing; a book needs tens of thousands of identical pieces.' },
    { cause: 'Gutenberg builds an adjustable hand mould', effect: 'Type can be manufactured, not carved', because: 'One punch strikes one matrix, and the matrix casts identical letters of uniform height all day long.' },
    { cause: 'Copies become identical', effect: 'Citation, correction and cumulative knowledge become possible', because: 'A page number only means something if everybody’s page forty-one carries the same words.' },
    { cause: 'Printing makes a pamphlet cheap', effect: 'Luther succeeds where Hus was silenced', because: 'A century earlier the Church suppressed an argument by removing the man; you cannot remove thirty thousand copies.' },
    { cause: 'Cheap copies reward whatever spreads', effect: 'The same presses industrialise witch-hunting and libel', because: 'A machine that lowers the cost of copying amplifies what is already moving, and has no view about what that is.' },
  ],

  myths: [
    {
      myth: 'Gutenberg invented printing.',
      reality: 'Printing from carved blocks is Chinese and at least six centuries older; movable type is Bi Sheng’s, around 1040; metal movable type is Korean, and the Jikji of 1377 predates the Gutenberg Bible by seventy-eight years. What Gutenberg invented was the adjustable hand mould, an alloy and an ink that made type manufacturable in quantity — a production system, not the idea.',
      whyItPersists: 'European histories were written by Europeans, and "invented the printing press" is a much shorter sentence than "invented the industrial process for casting type".',
      sourceIds: ['jikji-1377', 'fussel-2005'],
    },
    {
      myth: 'The printing press caused the Reformation.',
      reality: 'It made it survivable. The theological arguments were a century old — Jan Hus made many of them and was burned in 1415, and the movement was contained. What print changed was that suppressing the author no longer suppressed the argument, and that Luther could reach a lay audience directly, in their own language, faster than the Church could reply.',
      whyItPersists: 'The correlation is genuinely striking, and "the press caused it" is easier to teach than "the press changed what suppression could achieve".',
      sourceIds: ['pettegree-2015', 'eisenstein-1979'],
    },
    {
      myth: 'Printing immediately made ordinary people literate and well-informed.',
      reality: 'Literacy rose slowly over centuries, not decades. Most incunabula were in Latin and most were religious. The first mass audience for print was reached in the 1520s, seventy years after the Bible, and mainly by pamphlets — and the same market bought witch-hunting manuals and atrocity stories.',
      whyItPersists: 'We tend to assume a technology’s eventual effects were its immediate ones, and the enlightening uses are the ones that got remembered.',
      sourceIds: ['eisenstein-1979', 'pettegree-2015'],
    },
    {
      myth: 'A printed book was trusted because printed things are reliable.',
      reality: 'Early print was riddled with piracy, false imprints, misattributed authors and garbled reprints, and readers knew it. Adrian Johns’ central point is that the credibility of print was built over two centuries by guilds, licensing and reputations — it was not a property the machine handed over.',
      whyItPersists: 'We inherited the trust and forgot the construction, which is exactly what makes it feel natural.',
      sourceIds: ['johns-1998'],
    },
  ],

  disagreements: [
    {
      question: 'Was "fixity" a property of print, or a reputation the print trade built?',
      positions: [
        { view: 'A property. Identical copies made standardisation, citation, cumulative correction and preservation-by-scattering possible, and those changes drove the scientific revolution.', heldBy: 'Elizabeth Eisenstein', sourceId: 'eisenstein-1979' },
        { view: 'A reputation. Early printed books were unreliable, pirated and inconsistent; trust in print was constructed slowly by publishers, guilds and licensing regimes, and could have gone otherwise.', heldBy: 'Adrian Johns', sourceId: 'johns-1998' },
      ],
      atlasPosition: 'The atlas describes the capabilities print made available and does not claim they were automatic. Identical copies made fixity possible; institutions made it credible. Where a claim needs one reading rather than the other, the atlas names whose reading it is.',
    },
    {
      question: 'Why did movable type transform Europe rather than East Asia, where it was invented?',
      positions: [
        { view: 'Script economics. An alphabet of a few dozen shapes makes cast type overwhelmingly efficient; thousands of distinct characters do not, so block printing stayed competitive in China and Korea.', heldBy: 'The standard technical explanation', sourceId: 'fussel-2005' },
        { view: 'Demand and institutions. Korean metal printing was a court project for a small elite readership, while Europe had universities, a commercial class, a church in argument with itself and a competitive market of independent printers.', heldBy: 'Historians of the book emphasising social context', sourceId: 'eisenstein-1979' },
      ],
      atlasPosition: 'The atlas gives both, because they are not rivals: the script made European type cheap, and the market gave it something to print. It rejects any account that has Asia failing to think of something it demonstrably did first.',
    },
  ],

  didYouKnow: [
    'The oldest surviving book printed with metal movable type is Korean — the Jikji, 1377, seventy-eight years before the Gutenberg Bible. It is in Paris.',
    'Gutenberg’s real invention was a mould: adjustable in width, fixed in height, so an "i" and an "m" differ in width but every piece stands exactly the same height.',
    'His type alloy expands slightly as it cools, which is why the letters come out sharp. Lead alone would have given mushy edges.',
    'Scribal ink is water-based and slides off metal type, so he had to invent an oil-based ink closer to paint.',
    'The press itself was borrowed. It is a wine-and-olive press, adapted to squeeze a page evenly.',
    'Gutenberg lost his workshop in a lawsuit in 1455, the year of his Bible. The notarial record of the judgement is our best evidence that any of it happened.',
    'Between 1518 and 1525, works by Luther may have made up around a third of all books sold in German.',
    'The witch-hunting manual *Malleus Maleficarum* went through roughly thirty printings after 1487. The same technology carried both.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Before the 1450s every European book was copied by hand, which made books rare and made every copy slightly different from every other. There was no reliable "same text" and therefore no such thing as a page reference.',
        'Printing itself was not new: China had block printing from the ninth century, and Korea printed with metal movable type in 1377. What was missing everywhere was a way to manufacture type quickly. Gutenberg, a Mainz goldsmith, solved it with an adjustable hand mould, a lead-tin-antimony alloy that casts sharply, an oil-based ink and an adapted wine press.',
        'He printed the 42-line Bible around 1455 and lost his workshop the same year in a lawsuit brought by his financier. The technology spread anyway: by 1500 there were presses in around 250 towns and some 28,000 editions had been printed.',
        'The deepest effect was not volume but sameness — identical copies made citation, correction and cumulative knowledge possible. The most visible effect was Luther, who used cheap vernacular pamphlets to win an argument the Church could not suppress, because you can silence an author but not thirty thousand copies. The same presses sold witch-hunting manuals.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Imagine the only way to get a book was to copy one out by hand. A big book would take you a whole year. That is how every book in Europe was made for a thousand years.',
        'And here is the sneaky problem: when you copy something by hand, you make little mistakes. Then someone copies your copy and adds their own. After a while, nobody’s book quite matches anybody else’s, so you cannot say "look at page forty-one" — because their page forty-one is different.',
        'A man in Germany called Gutenberg was a metalworker, and he thought about it like a metalworker. He made a little mould that could pour out the same letter, over and over, perfectly. Then you line the letters up to make a page, ink them, and squash paper onto them with a press. Now you can make hundreds of books that are all exactly the same.',
        'That "exactly the same" part is the magic bit. It meant people could argue about the same words, spot mistakes, and fix them.',
        'It also meant anything at all could spread fast — good things and nasty things. A monk called Luther used cheap little booklets to start an argument that split the church in half. The very same printers were also selling horrible books about how to hunt witches.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The field is still organised around Eisenstein (1979) and the response to it. Her thesis identifies dissemination, standardisation, fixity, preservation and recombination as the operative "print effects", and attributes to them a causal role in the scientific revolution and the Reformation. The strength of the argument is that it specifies mechanisms rather than asserting influence; its vulnerability is that it treats those properties as intrinsic to the technology.',
        'Johns (1998) supplies the systematic counter. Working from the seventeenth-century English trade, he documents piracy, false imprints, unauthorised revision and the resulting reader scepticism, and argues that fixity and credibility were achieved through the social and legal construction of the book trade rather than delivered by the press. The productive synthesis treats print as expanding the space of what was achievable while leaving the achievement contingent on institutions.',
        'On the East Asian priority, the comparative literature has moved decisively away from a diffusionist or deficiency framing. The relevant variables are orthographic (type-casting economics under a logographic script), institutional (court-controlled versus market printing), and demand-side (the size and composition of the vernacular reading public). Note also that the question of whether knowledge of Asian techniques reached Mainz is unresolved and largely undocumented; independent invention of the mould is the parsimonious reading.',
        'For the Reformation, Pettegree (2015) reframes Luther as a media innovator: the shift to short-form vernacular *Flugschriften*, the standardisation of Wittenberg title-page design as a form of branding, and the alignment of author, printer and market. This is a useful corrective to accounts in which print is a passive channel — the medium’s affordances were actively discovered, and by a theologian.',
      ],
    },
    {
      id: 'the-mould',
      label: 'The actual invention, in four objects',
      kind: 'angle',
      paragraphs: [
        'Strip away the significance and the invention is four physical things that had to work together.',
        '**The punch.** A steel rod with one letter engraved in relief on its end, in mirror image. This is goldsmith’s work, and it is where Gutenberg’s training shows.',
        '**The matrix and mould.** Strike the punch into softer copper and you have a sunken letter — the matrix. Clamp it into a two-part mould that adjusts sideways but not vertically, pour metal, and you get a piece of type whose width fits the letter and whose height is identical to every other piece ever cast. That uniform height is the whole game: it is why thousands of loose pieces can print an even page.',
        '**The alloy.** Lead, tin and antimony. Melts low enough to cast repeatedly, hardens fast enough to work at speed, and expands very slightly as it sets so it fills every corner of the matrix. Pure lead gives you soft, blurred letters.',
        '**The ink.** Oil and varnish based, more like paint than the water-based ink scribes used, because water-based ink beads on metal and prints as a smear.',
        'Notice what is *not* on the list: the press. That part he borrowed from winemakers. The reason we call the whole thing a printing press is a historical accident of naming — the press was the least novel component in the room.',
      ],
    },
    {
      id: 'the-amplifier',
      label: 'What a copying machine actually does',
      kind: 'contrast',
      paragraphs: [
        'It is tempting to read the press as the moment knowledge won. Set the two columns side by side and it looks different.',
        '**It carried:** classical texts preserved by scattering, identical star charts and anatomical plates, Copernicus, vernacular Bibles, Pacioli’s bookkeeping, and the ability to say "you are wrong, on page forty-one".',
        '**It also carried:** the *Malleus Maleficarum* in thirty editions, a persecution that had been local going continental; the German pamphlets that fixed Vlad Ţepeş as a monster on the word of his enemies; and confessional hatreds that a century of religious war ran on.',
        'The machine has no opinion. It lowers the cost of a copy, and what gets copied is whatever people want copied — which is often the extreme version, because the extreme version sells. That was as true in 1487 as it is now.',
        'The thing that made it net good was not the technology. It was the two centuries of slow, unglamorous work — licensing, imprints, publishers with reputations to lose, and eventually citation itself — that made it possible to tell a reliable copy from an unreliable one. That work is not a footnote to the invention. It is the other half of it.',
      ],
    },
  ],

  beforeAfter: {
    label: 'A text, before and after',
    before: {
      title: 'The manuscript world',
      points: [
        'One copy is one person’s year of work',
        'Every copy differs slightly from its parent',
        'Page references mean nothing across copies',
        'A text decays a little with each generation',
        'Suppressing an argument means silencing its author',
      ],
    },
    after: {
      title: 'The printed world',
      points: [
        'One setting of type produces hundreds of copies',
        'Every copy of an edition is identical',
        'Citation by page becomes possible and normal',
        'Editions can correct each other and accumulate',
        'Suppressing an argument means finding every copy',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if Gutenberg had won the lawsuit?',
      reasoning: 'He would have kept the workshop, the type and the business, and might have become the wealthy founder of a printing dynasty instead of a pensioner. The technology’s spread would have looked much the same, since it was the 1462 sack of Mainz that scattered the trained workmen across Europe.',
      constraint: 'This is speculation about a person, not an outcome. Fust and Schöffer printed competently and expanded fast, and nothing suggests the diffusion depended on which of them owned the shop. The interesting counterfactual is not the lawsuit but the sack.',
    },
    {
      question: 'What if a European press had existed in 1400, before Hus?',
      reasoning: 'Hus made arguments close to Luther’s and had a popular following in Bohemia. With cheap vernacular pamphlets, a Bohemian reformation might have spread beyond the Czech lands, and the religious map of Europe could have been redrawn a century early and along different borders.',
      constraint: 'Speculation, and constrained speculation. Luther’s success also needed a fragmented German political landscape whose princes had reasons to protect him, a vernacular reading public, and paper mills at scale. Print without those may simply have produced a better-documented suppression.',
    },
  ],

  quiz: [
    {
      question: 'What did Gutenberg actually invent?',
      options: [
        'Printing itself',
        'Movable type',
        'A mould that could manufacture identical type in quantity',
        'Paper',
      ],
      answerIndex: 2,
      explains: 'Block printing and movable type both existed in Asia centuries earlier. His contribution was the adjustable hand mould, the alloy and the ink — a way to make type fast enough to be worth using.',
    },
    {
      question: 'Which is older than the Gutenberg Bible?',
      options: [
        'The Korean Jikji, printed with metal type in 1377',
        'The Mainz Psalter',
        'Luther’s ninety-five theses',
        'Pacioli’s bookkeeping manual',
      ],
      answerIndex: 0,
      explains: 'The Jikji was printed with metal movable type in 1377, seventy-eight years before the 42-line Bible, and survives in the French national library.',
    },
    {
      question: 'According to Eisenstein, what mattered most about printed copies?',
      options: [
        'They were cheaper',
        'They were identical, so texts could be cited and corrected',
        'They were more beautiful',
        'They lasted longer than manuscripts',
      ],
      answerIndex: 1,
      explains: 'Sameness is the deep change. Identical copies make page references meaningful, errors findable and corrections cumulative — the preconditions for building knowledge rather than eroding it.',
    },
    {
      question: 'Why did Luther succeed where Jan Hus was suppressed a century earlier?',
      options: [
        'His theology was more radical',
        'He had a larger army',
        'Suppressing the author no longer suppressed the argument',
        'The Church had lost interest in heresy',
      ],
      answerIndex: 2,
      explains: 'Hus was burned in 1415 and his movement contained. Luther’s pamphlets existed in tens of thousands of copies across Germany within weeks — you can remove a man, but not the copies.',
    },
  ],

  sources: [
    {
      id: 'jikji-1377',
      kind: 'primary',
      author: 'Baegun (compiler), Heungdeok Temple, Cheongju',
      title: 'Jikji simche yojeol',
      year: 1377,
      detail: 'Volume II held at the Bibliothèque nationale de France; UNESCO Memory of the World register, 2001',
      note: 'The oldest surviving book printed with metal movable type, seventy-eight years before the Gutenberg Bible. The physical answer to "who was first".',
    },
    {
      id: 'helmasperger-1455',
      kind: 'primary',
      author: 'Ulrich Helmasperger, notary',
      title: 'The Helmasperger Notarial Instrument',
      year: 1455,
      detail: 'Dated 6 November 1455; University of Göttingen library',
      note: 'The record of Fust’s successful suit against Gutenberg. Dry, legal, and the single best documentary evidence for the Mainz workshop.',
    },
    {
      id: 'gutenberg-bible-1455',
      kind: 'primary',
      author: 'Johannes Gutenberg (printer)',
      title: 'The 42-line Bible',
      year: 1455,
      detail: 'Mainz, c. 1454–55; around 180 copies printed, 48 substantially surviving',
      note: 'The object itself. Designed to imitate the finest manuscript hand of the region — the new medium beginning, as they do, by impersonating the old one.',
    },
    {
      id: 'eisenstein-1979',
      kind: 'book',
      author: 'Elizabeth L. Eisenstein',
      title: 'The Printing Press as an Agent of Change',
      year: 1979,
      detail: 'Cambridge University Press, two volumes. ISBN 978-0-521-29955-8',
      note: 'The book that shifted the question from "how many copies" to "what does sameness do". The source of the fixity and standardisation arguments used here.',
    },
    {
      id: 'johns-1998',
      kind: 'book',
      author: 'Adrian Johns',
      title: 'The Nature of the Book: Print and Knowledge in the Making',
      year: 1998,
      detail: 'University of Chicago Press. ISBN 978-0-226-40122-4',
      note: 'The strongest objection to Eisenstein: fixity as a reputation the trade built rather than a property the machine had. Read the two together or neither properly.',
    },
    {
      id: 'fussel-2005',
      kind: 'book',
      author: 'Stephan Füssel',
      title: 'Gutenberg and the Impact of Printing',
      year: 2005,
      detail: 'Ashgate; trans. Douglas Martin. ISBN 978-0-7546-3537-3',
      note: 'The technical and biographical ground: the mould, the alloy, the ink, the lawsuit, and how fast the trade spread after 1462.',
    },
    {
      id: 'pettegree-2015',
      kind: 'book',
      author: 'Andrew Pettegree',
      title: 'Brand Luther',
      year: 2015,
      detail: 'Penguin Press. ISBN 978-1-59420-496-8',
      note: 'Luther as the first author to understand a mass medium, and Wittenberg as a publishing business. The source for the pamphlet figures.',
    },
  ],
}
