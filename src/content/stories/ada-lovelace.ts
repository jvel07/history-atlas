import type { Story } from '../types'

/**
 * Voice: the register James Gleick works in — the intellectual thrill of an idea
 * arriving a century before anything can run it, told with precision about what
 * was actually claimed and by whom. The Notes are the evidence; the argument
 * about authorship is real and is treated as real rather than as an insult.
 */
export const adaLovelace: Story = {
  slug: 'ada-lovelace',
  title: 'Note G',
  subtitle: '1843 — she translated a paper about a machine that was never built, and buried in her footnotes is the idea the twentieth century ran on.',
  hook: 'In 1843 Ada Lovelace translated a French paper about an unbuilt machine, added footnotes three times longer than the original, and in one of them described something nobody would build for a hundred years.',
  era: 'industrial',
  category: 'icons',
  years: [1815, 1852],
  regions: ['United Kingdom', 'Italy'],
  nodes: ['ada-lovelace', 'analytical-engine', 'charles-babbage', 'computing', 'jacquard-loom'],
  tags: ['computing', 'mathematics', 'women', 'science', 'credit', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'In 1843 she translated a short French paper and added footnotes three times longer.' },
    { beat: 'hook', text: 'In one of them is the idea the next century was built on.' },
    { beat: 'worldBefore', kicker: '1815', text: 'Her father is Lord Byron, who leaves a month after she is born and never returns.' },
    { beat: 'worldBefore', text: 'Her mother has her taught mathematics, hard, as protection against inheriting him.' },
    { beat: 'worldBefore', punch: true, text: 'It is meant as an antidote to poetry. It does not work like that.' },
    { beat: 'problem', kicker: '1833', text: 'At seventeen she meets a man with a machine that calculates by itself,' },
    { beat: 'problem', text: 'and unlike everyone else at the party, she asks how it works.' },
    { beat: 'problem', text: 'Babbage never finishes it. He is already designing something much stranger:' },
    { beat: 'problem', punch: true, mark: 'chain', text: 'a machine you do not rebuild for each task. You feed it cards, and it does what they say.' },
    { beat: 'story', text: 'He takes the idea from a loom that weaves patterns off punched cards.' },
    { beat: 'story', kicker: '1840', text: 'He lectures on it in Turin. An Italian engineer writes the lecture up in French.' },
    { beat: 'story', text: 'Lovelace translates it — and Babbage asks why she has not written her own paper.' },
    { beat: 'story', punch: true, text: 'So she adds notes. Seven of them, labelled A to G, longer than the thing she translated.' },
    { beat: 'story', text: 'Note G lays out, step by step, how the machine would compute a hard series of numbers,' },
    { beat: 'story', punch: true, text: 'with loops, and reused variables, and a table you could hand to an operator.' },
    { beat: 'story', text: 'That is a program, published, for a machine that did not exist.' },
    { beat: 'whyItHappened', punch: true, mark: 'reversal', text: 'But Note G is not the astonishing part. Note A is.' },
    { beat: 'whyItHappened', text: 'Everyone else, Babbage included, is thinking about arithmetic.' },
    { beat: 'whyItHappened', text: 'She writes that the engine weaves patterns the way the loom weaves flowers,' },
    { beat: 'whyItHappened', punch: true, text: 'and that if you could write music down as relations, it could compose.' },
    { beat: 'whyItHappened', text: 'The machine is not about numbers. It is about anything you can write as symbols.' },
    { beat: 'consequences', text: 'She also says, carefully, that it cannot originate anything —' },
    { beat: 'consequences', punch: true, text: 'a line Turing was still arguing with by name a hundred and seven years later.' },
    { beat: 'consequences', text: 'She dies at thirty-six. The Analytical Engine is never built.' },
    { beat: 'whyItMatters', text: 'The argument about how much of the Notes was hers has run ever since,' },
    { beat: 'whyItMatters', punch: true, text: 'and the letters show her catching an error of his, which settles more than the argument does.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'Augusta Ada Byron was born in December 1815 to Lord Byron and Annabella Milbanke. Byron left the country a month later and never saw his daughter again. Her mother, who had mathematical training herself and whom Byron had called the Princess of Parallelograms, set about having Ada taught mathematics rigorously and from an early age — in part, by her own account, as protection against inheriting her father’s temperament.',
        'The tutors were serious. Mary Somerville, one of the leading science writers in Britain, and later Augustus De Morgan, a professor of mathematics at University College London who wrote to Lady Byron that Ada’s aptitude was of a kind he had rarely seen in a student of any sex.',
        'The world she was being trained into had no computers, and had a specific problem that made people want them. Navigation, engineering, astronomy and insurance all ran on printed mathematical tables — logarithms, sines, tides, positions. Those tables were calculated by hand by teams of human "computers", typeset by hand, and were riddled with errors. A wrong figure in a nautical table could put a ship on rocks.',
        'Charles Babbage’s response was to design a machine to remove the human from both stages: calculate the table mechanically, and set the type mechanically too, so no error could enter. The Difference Engine, begun in 1822, consumed a very large government grant and was never finished — although the Science Museum built one to his drawings in 1991 and it worked exactly as designed.',
        'It calculates. That is all it does, and it does it by turning a handle.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'Babbage failed to finish his machines for a mixture of reasons — the engineering tolerances were at the limit of what Victorian workshops could do, he kept redesigning, and he fell out with his engineer. "It was impossible at the time" is the popular version and is not quite right: the 1991 build used no techniques unavailable in the 1840s.',
        sourceId: 'swade-2001',
      },
      sourceIds: ['swade-2001', 'hollings-2018'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'In 1833, aged seventeen, Ada was taken to see a demonstration model of the Difference Engine. Sophia Frend, who was there, later recalled that while other visitors admired it the way one admires a conjuring trick, Ada wanted to understand what it was doing.',
        'By then Babbage had already moved on to a far more radical design, and the difference between the two machines is the whole point of this story.',
        'The Difference Engine does one thing. Its behaviour is built into its gears; to make it do something else you would have to rebuild it.',
        'The Analytical Engine, designed from 1834, does not have a fixed task. It has a "store" — memory, planned for a thousand numbers of forty digits — and a "mill", which performs operations on numbers fetched from the store and returns the results. What it does at any moment is determined by punched cards fed into it, which specify both the operations and the variables they act on. It can repeat sequences of cards, and — critically — it can be made to take a different path depending on the result of a calculation it has just performed.',
        'Memory, a processor, loops, conditional branching, and instructions held separately from the machine. That is a general-purpose computer, described in the 1830s, in brass and steam.',
        'The idea of instructions on cards came directly from the textile industry. Joseph-Marie Jacquard’s loom, in commercial use from about 1804, read the pattern it was weaving off a chain of punched cards; change the cards and the same loom weaves a different design. Babbage owned a woven portrait of Jacquard, produced by such a loom from around 24,000 cards, and used to show it to visitors.',
        'The problem was that nobody understood what he had. He was famously bad at explaining, he had a public reputation for cranky brilliance and unfinished projects, and the machine did not exist to be pointed at.',
      ],
      sourceIds: ['menabrea-lovelace-1843', 'swade-2001', 'babbage-1864'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'In 1840 Babbage gave a series of lectures on the Analytical Engine in Turin — the only substantial public account he ever gave of it. A young Italian military engineer in the audience, Luigi Federico Menabrea, later Prime Minister of Italy, wrote the lectures up in French and published them in Geneva in 1842.',
        'Lovelace, by then married and known as the Countess of Lovelace, translated Menabrea’s paper into English. When Babbage saw the translation he asked why she had not written an original paper of her own on a subject she knew so well. Her reply, in effect, was that it had not occurred to her. He suggested she add notes.',
        'The Notes, labelled A to G, run to roughly two and a half times the length of the paper they annotate. They were published in 1843 in Taylor’s *Scientific Memoirs*, signed only "A.A.L." — initials, because a countess putting her name to a scientific publication was not straightforward in 1843.',
        'What is in them divides into two things, and they are usually run together, which does neither any favours.',
        '**Note G is the program.** It sets out how the Analytical Engine would compute the Bernoulli numbers — a genuinely awkward recursive series, where each value depends on the ones before it. The note works through the mathematics and then presents a table: a numbered sequence of operations, showing which variables are read, which are written, what operation is performed, and where the loop returns to. It is recognisably code. It was published, in full, for a machine that had never been built and never would be.',
        '**Note A is the idea.** Here she is not describing what the machine does but what kind of thing it is. The Analytical Engine, she writes, weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves. And then the sentence that matters: supposing that the fundamental relations of pitched sounds could be expressed and adapted, the engine might compose elaborate and scientific pieces of music of any degree of complexity or extent.',
        'That is the leap. Everyone else, Babbage included, was thinking about a machine for numbers. Lovelace saw that the numbers were incidental — the machine manipulates symbols according to rules, and if you can encode something in symbols, the machine can operate on it. Music. Language. Anything. This is the conceptual foundation of computing, and it appears first, in print, in a footnote in 1843.',
        'Note G also contains her most-quoted sentence, and it is a limit rather than a promise: the Analytical Engine has no pretensions whatever to originate anything, and can do only whatever we know how to order it to perform. A hundred and seven years later, Alan Turing devoted a section of his paper on machine intelligence to arguing with it, under the heading "Lady Lovelace’s Objection".',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'From Note A, 1843: the Analytical Engine, she writes, weaves algebraical patterns in just the way the Jacquard loom weaves flowers and leaves — and if the fundamental relations of pitched sounds could be expressed, it might compose elaborate pieces of music of any complexity. Nobody else was saying anything remotely like this about a calculating machine.',
        sourceId: 'menabrea-lovelace-1843',
      },
      sourceIds: ['menabrea-lovelace-1843', 'turing-1950', 'hollings-2018'],
    },

    whyItHappened: {
      heading: 'Whose work was it?',
      paragraphs: [
        'This has been argued about for over fifty years, sometimes bad-temperedly, and it deserves setting out properly rather than being waved away in either direction.',
        '**The sceptical case.** Babbage had been working on the Engine for a decade and had written programs for it himself, though he did not publish them. He supplied Lovelace with material during 1843, and in his own memoir he says that they discussed the illustrations together and that he suggested the Bernoulli numbers as a subject. Bruce Collier, in a 1970 Harvard thesis, put the sceptical case at its most extreme, arguing that Babbage was effectively the author. Dorothy Stein’s 1985 biography also concluded that Lovelace’s mathematical grasp was weaker than her admirers claim.',
        '**The case for her.** The 1843 correspondence between them survives, and it does not read like dictation. She sends drafts, argues, pushes back, and asks for material she wants; he sends notes and comments. In one exchange she catches an error in a calculation he had supplied and tells him so, which is not something a scribe does. And the general-purpose insight in Note A has no precedent anywhere in Babbage’s own writing — he described his machine as a calculating engine to the end of his life.',
        '**Where the current scholarship lands.** Hollings, Martin and Rice went through the mathematical correspondence in the archives and concluded that the mathematics in the Notes is substantially Lovelace’s own work, developed with Babbage’s input and material, and that her grasp was real if not that of a research mathematician. Doron Swade, who spent years building Babbage’s machines, has argued specifically that the leap beyond number is hers and is the most important thing in the document.',
        '**And there is the framing problem.** "The first computer programmer" is a claim the Notes cannot quite carry, because Babbage had written machine programs earlier without publishing them, and because the title imports a modern job description into 1843. It is also a strangely small claim to make for her. The interesting thing in the Notes is not that a sequence of operations is tabulated — Babbage could do that — but that somebody looked at a brass calculating machine and understood it as a device for operating on symbols in general.',
        'The uncomfortable meta-point is that the argument itself has never been conducted neutrally. She has been alternately inflated into a lone genius and dismissed as a well-connected amateur, and both have been done for reasons that had little to do with the document. The document is available. It is worth reading.',
      ],
      sourceIds: ['hollings-2018', 'babbage-1864', 'swade-2001', 'toole-1992'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'In the short term, almost nothing. That is the strangest fact about this story.',
      ],
      shortTerm: [
        'The Notes were published in 1843 and read by very few people. The Analytical Engine was never built, and Babbage never secured further funding.',
        'Lovelace proposed to Babbage in 1844 that she take on the management of his affairs and his public case. He declined, and the collaboration effectively ended.',
        'She developed uterine cancer and died in November 1852, aged thirty-six — the same age at which her father had died. At her request she was buried beside him.',
        'Babbage continued designing until his death in 1871, and the Analytical Engine was never completed. His son assembled part of the mill from his drawings afterwards.',
      ],
      longTerm: [
        'The line of descent was broken. When the first electronic computers were built in the 1940s, their designers were mostly not working from Babbage — the ideas had to be arrived at again independently.',
        'Turing knew the Notes and engaged with them directly: the section of his 1950 paper headed "Lady Lovelace’s Objection" answers her claim that a machine cannot originate anything.',
        'B. V. Bowden’s 1953 book *Faster Than Thought* reprinted the Notes and brought them back into circulation for the computing profession.',
        'In 1980 the US Department of Defense named its new standardised programming language Ada, and the reference manual carries a military standard number chosen for her birth year.',
        'The general-purpose insight of Note A is now simply how everybody understands a computer, which is the strongest possible evidence that it was correct and the reason it is easy to miss how strange it was in 1843.',
      ],
      unexpected: [
        'The published table in Note G contains a small error, which is oddly reassuring: it is exactly the kind of mistake made by somebody actually working through a computation rather than copying one.',
        'Babbage owned a silk portrait of Jacquard, woven on a Jacquard loom from around twenty-four thousand punched cards, and showed it to visitors as an illustration of what his machine would do.',
        'Lovelace tried to apply mathematics to gambling with a group of friends in the late 1840s, lost heavily, and reportedly pawned family jewels to cover it.',
        'She was buried, at her own request, next to a father she had never known, in the church at Hucknall in Nottinghamshire.',
        'Her most quoted line is a statement of the machine’s limits, not its promise — and it is the one that provoked the most consequential reply in the history of artificial intelligence.',
      ],
      sourceIds: ['hollings-2018', 'turing-1950', 'swade-2001'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The reason to keep this story is not that a woman did mathematics in 1843, although that is true and was harder than it sounds. It is that the most important idea in the document is a conceptual one, arrived at by looking at a machine and asking what kind of thing it actually was.',
        'Babbage built and designed brilliantly and described his work, for forty years, as calculation. Lovelace looked at the same design and saw that arithmetic was a special case. The cards do not know they are carrying numbers. If you can express something — a musical structure, a logical relation, a piece of language — in symbols with rules, then a machine that follows rules on symbols can operate on it. Everything that a computer has since turned out to be, from a spreadsheet to a chess engine to a large language model, is downstream of that sentence.',
        'It also arrived a full century before there was anything to run it on, which is worth sitting with. Ideas are not always adopted when they are correct; they are adopted when there is something to do with them. The Notes were published, read by almost nobody, and had to be rediscovered in the 1950s by people who had already built the machines independently.',
        'And the argument about who wrote what is worth keeping honestly, on both sides, because collaborations are genuinely hard to attribute and the temptation to resolve them by preference is very strong. The letters exist. They show two people arguing about mathematics, one of whom found a mistake in the other’s work. That is what a collaboration looks like, and it is a better story than either of the tidier ones.',
        'The last thing is her caution. She insisted the Engine could originate nothing and could only do what we knew how to order it to perform. She was describing the machine she knew. A century later Turing took the sentence seriously enough to answer it by name, and the question of whether a machine following instructions can produce something genuinely new has not stopped being live since.',
      ],
      sourceIds: ['menabrea-lovelace-1843', 'turing-1950'],
    },
  },

  timeline: [
    { year: 1804, title: 'The Jacquard loom goes into use', detail: 'A loom that reads its pattern from a chain of punched cards. Change the cards and the same machine weaves something else.', pivotal: true },
    { year: 1815, title: 'Ada Byron is born', detail: 'Her father leaves the country a month later and never sees her again. Her mother has her taught mathematics rigorously and deliberately.' },
    { year: 1822, title: 'Babbage begins the Difference Engine', detail: 'A machine to calculate and typeset mathematical tables without human error. It receives a large government grant and is never finished.' },
    { year: 1833, title: 'Ada meets Babbage', detail: 'Aged seventeen, she is shown the demonstration model of the Difference Engine and asks how it works rather than admiring it.', pivotal: true },
    { year: 1834, title: 'The Analytical Engine is designed', detail: 'A general-purpose machine with a store, a mill, punched-card instructions, loops and conditional branching. It is never built.', pivotal: true },
    { year: 1840, title: 'Babbage lectures in Turin', detail: 'The only substantial public account he ever gives of the Analytical Engine. A young engineer, Menabrea, takes notes.' },
    { year: 1842, title: 'Menabrea publishes in French', detail: 'The Turin lectures are written up and published in Geneva — the first printed description of the machine.' },
    { year: 1843, title: 'The Notes are published', detail: 'Lovelace’s translation with seven notes, two and a half times the length of the original, signed only "A.A.L.". Note G is the program; Note A is the idea.', pivotal: true },
    { year: 1852, title: 'Lovelace dies at thirty-six', detail: 'Of uterine cancer, the same age at which her father died. She is buried beside him at her own request.', pivotal: true },
    { year: 1871, title: 'Babbage dies', detail: 'Still designing. Neither engine was completed in his lifetime, and the line of ideas is effectively broken for eighty years.' },
    { year: 1950, title: 'Turing answers her by name', detail: '"Computing Machinery and Intelligence" devotes a section to "Lady Lovelace’s Objection" — her claim that a machine can originate nothing.', pivotal: true },
    { year: 1953, title: 'The Notes are reprinted', detail: 'B. V. Bowden’s "Faster Than Thought" puts them back in front of the computing profession, a century after publication.' },
    { year: 1991, title: 'A Difference Engine is built', detail: 'The Science Museum completes one to Babbage’s drawings, using no technique unavailable in his lifetime. It works.', pivotal: true },
  ],

  causeEffect: [
    { cause: 'Printed mathematical tables are full of human errors', effect: 'Babbage designs a machine to calculate and typeset them', because: 'A wrong figure in a navigation table can wreck a ship, and the errors entered at both the calculating and the typesetting stage.' },
    { cause: 'The Difference Engine can only do one thing', effect: 'Babbage designs a machine that takes instructions', because: 'If behaviour is built into the gears, changing the task means rebuilding the machine — so separate the instructions from the mechanism.' },
    { cause: 'The Jacquard loom reads patterns from punched cards', effect: 'The Analytical Engine takes its instructions from cards', because: 'The textile industry had already solved the problem of feeding a machine a changeable set of instructions, and Babbage borrowed the solution wholesale.' },
    { cause: 'Babbage lectures in Turin and Menabrea writes it up', effect: 'There is finally a document to translate', because: 'Babbage never published a full account himself, so the only printed description of his machine was in French, by someone who had listened to him.' },
    { cause: 'Babbage asks why she has not written her own paper', effect: 'Lovelace adds seven notes to the translation', because: 'A suggestion to annotate turned a translation into an original work two and a half times longer than the thing it annotated.' },
    { cause: 'She sees the cards as carrying symbols rather than numbers', effect: 'The machine becomes general-purpose in principle', because: 'If a rule-following machine acts on symbols, then anything expressible in symbols — including music — is in scope.' },
    { cause: 'The Analytical Engine is never built', effect: 'The ideas have to be rediscovered in the 1940s', because: 'An idea with nothing to run on has no users, no successors and no reason for anyone to keep the document in circulation.' },
  ],

  myths: [
    {
      myth: 'Ada Lovelace was the first computer programmer.',
      reality: 'She published the first program in a scientific journal, which is a real and defensible claim. But Babbage had written sequences of operations for the Analytical Engine earlier, without publishing them, and the phrase imports a modern job title into 1843. It is also a smaller claim than the one the Notes actually support.',
      whyItPersists: 'It is short, it fits on a poster, and it slots her into a familiar category. The general-purpose insight in Note A is harder to compress and much more significant.',
      sourceIds: ['hollings-2018', 'babbage-1864'],
    },
    {
      myth: 'Babbage wrote the Notes and she merely translated them.',
      reality: 'The 1843 correspondence survives and shows drafts going back and forth, disagreements, and Lovelace catching an error in material Babbage had sent her. Current scholarship, having gone through the mathematical letters in the archives, concludes the mathematics is substantially hers, developed with his input. The general-purpose insight in Note A appears nowhere in his own writing.',
      whyItPersists: 'The sceptical case was put forcefully in the 1970s and 80s and has a long afterlife, and collaborations are genuinely easy to reassign to whichever party the writer finds more plausible.',
      sourceIds: ['hollings-2018', 'toole-1992'],
    },
    {
      myth: 'Babbage’s machines could not have been built with Victorian technology.',
      reality: 'The Science Museum completed a Difference Engine to his drawings in 1991, using only techniques and tolerances available in the 1840s, and it works. The reasons for failure were funding, endless redesign, and a catastrophic falling-out with his chief engineer.',
      whyItPersists: '"Ahead of his time" is a more flattering explanation than "could not manage a project", and it removes the need to look at what actually went wrong.',
      sourceIds: ['swade-2001'],
    },
    {
      myth: 'She predicted the modern computer.',
      reality: 'She understood something true and general about what a symbol-manipulating machine could be, and said so in print in 1843. She did not anticipate electronics, stored programs, or the specific architecture of modern machines, and her own most-quoted line insists the engine could originate nothing. Precision here serves her better than enthusiasm.',
      whyItPersists: 'The Note A passage is genuinely startling, and the gap between it and modern computing is so wide that it is tempting to close it with a word like "predicted".',
      sourceIds: ['menabrea-lovelace-1843', 'turing-1950'],
    },
  ],

  disagreements: [
    {
      question: 'How much of the Notes is Lovelace’s own work?',
      positions: [
        { view: 'Substantially hers. The archival correspondence shows her developing the mathematics, arguing with Babbage, requesting material and correcting an error in what he sent — and the conceptual leap in Note A has no counterpart in his writing.', heldBy: 'Hollings, Martin and Rice, working from the letters', sourceId: 'hollings-2018' },
        { view: 'Substantially Babbage’s. He had worked on the machine for a decade, supplied material, suggested the Bernoulli numbers as the example, and had written unpublished programs of his own beforehand.', heldBy: 'Bruce Collier and Dorothy Stein, and Babbage’s own memoir', sourceId: 'babbage-1864' },
      ],
      atlasPosition: 'The atlas treats the Notes as a collaboration in which the mathematics is largely hers and the machine is entirely his, and attributes the general-purpose insight to Lovelace specifically, because it appears in her text and nowhere in his.',
    },
    {
      question: 'Was the Analytical Engine buildable in the nineteenth century?',
      positions: [
        { view: 'The Difference Engine certainly was — one was built to the original drawings in 1991 with period-appropriate tolerances, and it works. Babbage’s failures were managerial and financial.', heldBy: 'Doron Swade, who led the reconstruction', sourceId: 'swade-2001' },
        { view: 'The Analytical Engine is a different proposition: far larger, more complex, never finalised as a single design, and requiring precision at a scale nobody has yet attempted to reproduce.', heldBy: 'The cautious reading among historians of computing', sourceId: 'hollings-2018' },
      ],
      atlasPosition: 'The atlas states that the Difference Engine was demonstrably buildable and that the Analytical Engine remains untested, because no complete version has been constructed. It does not claim either that it was impossible or that it would have worked.',
    },
  ],

  didYouKnow: [
    'Her mother had her taught mathematics deliberately, as protection against inheriting her father’s temperament. Her father was Lord Byron.',
    'The Notes are about two and a half times longer than the paper they annotate, and were signed only with her initials.',
    'The punched-card idea came from the Jacquard loom. Babbage owned a silk portrait of Jacquard woven from around twenty-four thousand cards.',
    'The Analytical Engine had memory, a processor, loops and conditional branching — designed in 1834, and never built.',
    'Note G contains a small error in its published table, which is what a working computation looks like rather than a copied one.',
    'Her most-quoted sentence is a limit: the engine "has no pretensions whatever to originate anything".',
    'Turing answered that sentence by name in 1950, under the heading "Lady Lovelace’s Objection".',
    'The Science Museum built a Difference Engine to Babbage’s drawings in 1991, using no technique unavailable in the 1840s. It works.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Charles Babbage designed two machines in the 1830s. The Difference Engine calculated mathematical tables; the Analytical Engine, designed from 1834, was general-purpose — with memory, a processor, instructions on punched cards borrowed from the Jacquard loom, loops and conditional branching. Neither was built in his lifetime.',
        'Babbage described the Analytical Engine publicly only once, in lectures at Turin in 1840. An Italian engineer, Menabrea, published an account in French. Ada Lovelace translated it into English and, at Babbage’s suggestion, added seven notes running to two and a half times the length of the original.',
        'Note G sets out how the machine would compute the Bernoulli numbers, as a numbered table of operations with loops and variables — the first program published in a scientific journal. Note A is the more important one: she wrote that the engine weaves algebraical patterns as the Jacquard loom weaves flowers, and that if musical relations could be expressed in symbols, it could compose music. That is the insight that a computer is not a machine for numbers but for symbols.',
        'She died in 1852 aged thirty-six. The machine was never built, and the ideas had to be rediscovered in the 1940s. Turing engaged with her most famous line — that the engine could originate nothing — by name in 1950.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Nearly two hundred years ago, a man called Charles Babbage designed a machine made of brass gears that could do sums by itself. Then he designed a much cleverer one. Instead of building a machine for one job, he made a machine you could *tell* what to do, by feeding it cards with holes punched in them. He got that idea from weaving machines, which used punched cards to decide the pattern.',
        'He never actually built it. It was only drawings.',
        'A woman called Ada Lovelace read about the machine and translated the description into English. Then she added notes at the end — and her notes ended up more than twice as long as the thing she was translating.',
        'In one note she wrote out, step by step, exactly what cards you would need to make the machine work out a very tricky set of numbers. That is basically a computer program, written for a computer that did not exist.',
        'But her cleverest idea is in a different note. Everybody else thought the machine was for numbers. Ada realised that the machine does not know it is working with numbers — it is just following rules about symbols. So if you could write music down as symbols, she said, the machine could write music.',
        'That is exactly what computers do now: pictures, music, words, games. She worked it out in 1843, and then nobody built a real computer for another hundred years.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The primary document is Menabrea (1842) in Lovelace’s translation with Notes A–G, published in Taylor’s *Scientific Memoirs* III (1843). Any serious assessment has to distinguish three claims that popular accounts conflate: the tabulated Bernoulli computation in Note G; the recognition of the Engine as a general symbol-manipulating device in Note A; and the epistemic claim about origination, also in Note G.',
        'On the attribution question, the archival basis is the 1843 Lovelace–Babbage correspondence, principally in the Bodleian and the British Library, with substantial reproduction in Toole (1992). Hollings, Martin and Rice (2018) provide the most careful mathematical reading and conclude that the analytical content is largely Lovelace’s, developed under Babbage’s supervision and with material supplied by him. The Collier (1970) and Stein (1985) sceptical positions remain in circulation and should be engaged rather than dismissed, though neither had access to the mathematical correspondence in the depth later work has used.',
        'The Note A claim deserves separate treatment because it is the one with no antecedent in Babbage. His own conception, sustained from the 1820s to *Passages* (1864), is arithmetical: the Engine "eats its own tail" and computes. Lovelace’s formulation — that the Engine acts on the abstract relations of things, of which number is one instance — is a claim about the semantics of mechanised operation rather than about its arithmetic, and is the genuine conceptual antecedent of the general-purpose machine.',
        'Turing’s treatment in *Mind* (1950), section 6, subheading "Lady Lovelace’s Objection", is the reception event that matters. His counter — that we do not know what we have ordered a sufficiently complex machine to perform, and that learning machines may surprise their designers — is the origin of a debate that has not closed. Note that Turing engages with the strong reading of her claim, whereas her own text, read closely, is arguably making a narrower point about the Engine’s dependence on analysis already performed by a human.',
        'Finally, the counterfactual literature on Babbage should be handled with the Swade reconstruction in view: the 1991 Difference Engine No. 2 demonstrates that the failure was not one of manufacturing capacity. Extending that conclusion to the Analytical Engine is not warranted, since no complete design was ever finalised and no reconstruction has been attempted.',
      ],
    },
    {
      id: 'note-a-and-note-g',
      label: 'The two things in the Notes',
      kind: 'angle',
      paragraphs: [
        'Almost every account of Lovelace collapses her contribution into one claim. There are two, they are different in kind, and separating them makes both clearer.',
        '**Note G: the program.** A table showing how the Analytical Engine would compute the Bernoulli numbers. It has numbered operations, specifies which variables are read and written at each step, and includes a loop — a section of the sequence executed repeatedly with changing values. This is the first program published in a scientific journal, and the case for the "first programmer" title rests on it. It is also the weaker of her two contributions, because a table of operations is a thing Babbage could produce and had produced.',
        '**Note A: the idea.** Here she asks what the machine *is*. Her answer: it weaves algebraical patterns the way the Jacquard loom weaves flowers and leaves; it operates on the abstract relations between things, and number is only one kind of thing it could operate on. If the relations of pitched sounds could be expressed, it might compose music.',
        'Note G describes how to use the machine. Note A describes what kind of machine it is. Every computer since has been a machine of the kind described in Note A, and the entire discipline of computing rests on the observation that the symbols do not have to mean quantity.',
        'The reason this matters for the credit question is that Note A has no counterpart anywhere in Babbage’s forty years of writing. He called it a calculating engine to the day he died. The strongest claim for Lovelace is not the program, which is contestable. It is the sentence about music, which is not.',
      ],
    },
    {
      id: 'the-objection',
      label: 'The sentence Turing had to answer',
      kind: 'contrast',
      paragraphs: [
        'The most quoted line in the Notes is a restriction, and following it forward is the best way to see how live these questions still are.',
        '**1843, Lovelace.** The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform. In context, she is making a careful and modest point: the machine executes an analysis that a human has already carried out, and it cannot supply the analysis.',
        '**1950, Turing.** In *Computing Machinery and Intelligence*, he sets out objections to the idea of a thinking machine and gives one of them her name. His answer has two parts. First, that "we know how to order it to perform" is doing a great deal of work — the behaviour of a sufficiently complex machine routinely surprises the person who built it, and Babbage’s machine was simply too small to demonstrate this. Second, and more radically, that a machine which learns is not restricted to what its designer anticipated.',
        '**Now.** The objection has not gone away and neither has the answer. Every argument about whether a system that produces text or images is doing something original, or merely recombining what it was given, is a version of this exchange. The vocabulary has changed; the question is Lovelace’s, and the standard reply is Turing’s.',
        'It is worth noticing that she may have been misread in a productive way. Her text is arguably about the Engine’s dependence on prior human analysis, not about machine creativity in general. Turing engaged with the strong version, and the strong version is the one that turned out to be worth a century of argument.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Two machines',
    before: {
      title: 'The Difference Engine',
      points: [
        'Does one thing: calculates and prints tables',
        'Behaviour fixed in the gears',
        'To change the task you rebuild the machine',
        'Funded by government, never completed',
        'Built successfully to the original drawings in 1991',
      ],
    },
    after: {
      title: 'The Analytical Engine',
      points: [
        'Does whatever the cards tell it to do',
        'A store for numbers and a mill to operate on them',
        'Loops and conditional branching, designed in 1834',
        'Never funded, never built, never finalised',
        'Described in print only by Menabrea and Lovelace',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the Analytical Engine had been built?',
      reasoning: 'A working general-purpose computer in the 1840s would have given the Notes something to be tested against, and a community of users to develop the ideas. Programming, in some form, would have become a nineteenth-century activity, and the eighty-year gap before the ideas were rediscovered would not have opened.',
      constraint: 'Speculation of a strong kind. The design was never finalised, the machine would have been enormous and slow, and its practical advantage over teams of human computers is genuinely unclear — the Difference Engine was funded and abandoned partly because the case for it was not obvious even to its backers.',
    },
    {
      question: 'What if Lovelace had lived another thirty years?',
      reasoning: 'She had proposed in 1844 to take over the management of Babbage’s affairs, which he refused; she was a considerably better communicator than he was and moved in circles he could not. A long collaboration might have secured funding, or at least produced further published work developing the general-purpose argument in Note A.',
      constraint: 'This is speculation about a career, and it rests on the assumption that the obstacle was advocacy. Babbage’s difficulties were also technical and temperamental, he had already alienated the Treasury, and the Notes themselves were read by almost nobody at the time — better advocacy for an unbuilt machine may not have changed much.',
    },
  ],

  quiz: [
    {
      question: 'What is the difference between the Difference Engine and the Analytical Engine?',
      options: [
        'The second was larger',
        'The first calculated tables; the second was general-purpose and took instructions on cards',
        'The second was electrical',
        'The first was Lovelace’s design',
      ],
      answerIndex: 1,
      explains: 'The Difference Engine had its task built into its gears. The Analytical Engine had memory, a processor, and punched-card instructions, so it could be told what to do rather than rebuilt.',
    },
    {
      question: 'Where did the punched-card idea come from?',
      options: [
        'Railway signalling',
        'Naval navigation tables',
        'The Jacquard loom, which read weaving patterns off cards',
        'Bank ledgers',
      ],
      answerIndex: 2,
      explains: 'Jacquard’s loom, in commercial use from around 1804, read its pattern from a chain of punched cards. Babbage took the mechanism directly, and owned a silk portrait of Jacquard woven on one.',
    },
    {
      question: 'What is the most significant idea in Lovelace’s Notes?',
      options: [
        'The table for computing Bernoulli numbers',
        'That the machine operates on symbols, so anything expressible in symbols is in scope',
        'That the machine would be faster than human calculators',
        'That the machine could be built cheaply',
      ],
      answerIndex: 1,
      explains: 'Note A argues the engine weaves algebraical patterns as the loom weaves flowers, and could compose music if musical relations were expressible. That insight appears nowhere in Babbage’s own writing.',
    },
    {
      question: 'What did Turing call "Lady Lovelace’s Objection"?',
      options: [
        'Her claim that the machine could not be built',
        'Her claim that the machine has no pretensions to originate anything',
        'Her claim that women could not be programmers',
        'Her claim that the Bernoulli table was wrong',
      ],
      answerIndex: 1,
      explains: 'In his 1950 paper he devoted a section to her statement that the engine can only do what we know how to order it to perform — and argued that complex and learning machines routinely surprise their designers.',
    },
  ],

  sources: [
    {
      id: 'menabrea-lovelace-1843',
      kind: 'primary',
      author: 'L. F. Menabrea, translated with notes by Ada Augusta, Countess of Lovelace',
      title: 'Sketch of the Analytical Engine invented by Charles Babbage, with Notes by the Translator',
      year: 1843,
      detail: 'Taylor’s Scientific Memoirs, vol. 3, pp. 666–731; Notes A–G signed "A.A.L."',
      note: 'The document itself. Note G holds the Bernoulli program; Note A holds the general-purpose insight. Everything else in this story is commentary on it.',
    },
    {
      id: 'babbage-1864',
      kind: 'primary',
      author: 'Charles Babbage',
      title: 'Passages from the Life of a Philosopher',
      year: 1864,
      detail: 'Longman, Green, Longman, Roberts & Green, London',
      note: 'His own account, including his description of how the Notes were produced and his suggestion of the Bernoulli numbers. A participant with a case to make.',
    },
    {
      id: 'toole-1992',
      kind: 'archive',
      author: 'Betty Alexandra Toole (ed.)',
      title: 'Ada, the Enchantress of Numbers: A Selection from the Letters of Lord Byron’s Daughter',
      year: 1992,
      detail: 'Strawberry Press, Mill Valley, California',
      note: 'The correspondence, including the 1843 exchanges with Babbage. The primary evidence for how the Notes were actually written.',
    },
    {
      id: 'hollings-2018',
      kind: 'book',
      author: 'Christopher Hollings, Ursula Martin and Adrian Rice',
      title: 'Ada Lovelace: The Making of a Computer Scientist',
      year: 2018,
      detail: 'Bodleian Library Publishing. ISBN 978-1-85124-488-1',
      note: 'The careful modern assessment, based on the mathematical correspondence in the archives. The source for the attribution position taken here.',
    },
    {
      id: 'swade-2001',
      kind: 'book',
      author: 'Doron Swade',
      title: 'The Difference Engine: Charles Babbage and the Quest to Build the First Computer',
      year: 2001,
      detail: 'Viking. ISBN 978-0-670-91020-0',
      note: 'By the man who led the 1991 reconstruction. Settles the question of whether the machines were buildable, and is clear about what was actually Lovelace’s.',
    },
    {
      id: 'turing-1950',
      kind: 'paper',
      author: 'A. M. Turing',
      title: 'Computing Machinery and Intelligence',
      year: 1950,
      detail: 'Mind, vol. LIX, no. 236, pp. 433–460; section 6 includes "Lady Lovelace’s Objection"',
      note: 'The reception that mattered. He takes her limiting claim seriously enough to name it and spend several pages answering it.',
    },
  ],
}
