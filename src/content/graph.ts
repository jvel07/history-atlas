import type { Lang } from '@/lib/i18n'
import type { GraphEdge, GraphNode } from './types'
import { EDGE_NOTE_ES, NODE_ES } from './es/graph'

/**
 * The knowledge graph.
 *
 * Nodes are things a person can be curious about. Edges are the *reason* one
 * thing led to another, written as a sentence rather than stored as a weight —
 * "you might also like" is a recommendation, "paid for" is an explanation, and
 * only one of the two makes someone read the next page.
 *
 * Two clusters live here on purpose: the British/Chinese opium chain and the
 * Baghdad/algebra chain. They look unrelated. They are not — follow
 * `hindu-arabic-numerals` forward and you arrive at the accounting that made a
 * joint-stock company like the East India Company possible. Surfacing that kind
 * of link is the whole point of the graph.
 */

export const NODES: GraphNode[] = [
  /* ---------------------------------------------- the opium chain ---- */
  {
    id: 'opium-wars',
    label: 'The Opium Wars',
    kind: 'event',
    blurb: 'Two wars Britain fought to keep selling a drug to a country that had banned it.',
    era: 'industrial',
    years: [1839, 1860],
    story: 'opium-wars',
  },
  {
    id: 'british-empire',
    label: 'The British Empire',
    kind: 'empire',
    blurb: 'At its height it governed roughly a quarter of the world’s people, and it ran on trade before it ran on armies.',
    era: 'early-modern',
    years: [1600, 1997],
  },
  {
    id: 'industrial-revolution',
    label: 'The Industrial Revolution',
    kind: 'event',
    blurb: 'The moment human muscle stopped being the main source of power in the world.',
    era: 'industrial',
    years: [1760, 1840],
  },
  {
    id: 'steam-engine',
    label: 'The steam engine',
    kind: 'technology',
    blurb: 'A machine that turned burning coal into motion — and made distance cheap.',
    era: 'industrial',
    years: [1712, 1840],
  },
  {
    id: 'tea-trade',
    label: 'The tea trade',
    kind: 'trade',
    blurb: 'Britain drank its way into a currency crisis. Tea was the reason the silver kept leaving.',
    era: 'early-modern',
    years: [1660, 1860],
  },
  {
    id: 'east-india-company',
    label: 'The East India Company',
    kind: 'organisation',
    blurb: 'A private company with its own army, its own navy and, for a while, its own empire.',
    era: 'early-modern',
    years: [1600, 1874],
  },
  {
    id: 'india',
    label: 'India under Company rule',
    kind: 'place',
    blurb: 'The subcontinent whose land, farmers and taxes paid for a trade war on the other side of Asia.',
    era: 'early-modern',
    years: [1757, 1858],
  },
  {
    id: 'mughal-empire',
    label: 'The Mughal Empire',
    kind: 'empire',
    blurb: 'The wealthiest state on earth in 1700, and a hollow shell by 1800.',
    era: 'early-modern',
    years: [1526, 1857],
  },
  {
    id: 'battle-of-plassey',
    label: 'The Battle of Plassey',
    kind: 'event',
    blurb: 'A one-sided battle in 1757 that handed a trading company the tax revenue of Bengal.',
    era: 'early-modern',
    years: [1757, 1757],
  },
  {
    id: 'opium-trade',
    label: 'The opium trade',
    kind: 'trade',
    blurb: 'Grown in India, sold in China, banned in China, and for decades the largest commodity trade in the world.',
    era: 'industrial',
    years: [1780, 1917],
  },
  {
    id: 'qing-dynasty',
    label: 'The Qing dynasty',
    kind: 'empire',
    blurb: 'China’s last dynasty: vast, confident, and unprepared for steam-powered gunboats.',
    era: 'early-modern',
    years: [1644, 1912],
  },
  {
    id: 'canton-system',
    label: 'The Canton System',
    kind: 'idea',
    blurb: 'One port, licensed merchants, strict rules — China’s way of trading with Europe on its own terms.',
    era: 'early-modern',
    years: [1757, 1842],
  },
  {
    id: 'lin-zexu',
    label: 'Lin Zexu',
    kind: 'person',
    blurb: 'The official who destroyed 1,000 tonnes of opium and wrote to Queen Victoria asking how she could allow it.',
    era: 'industrial',
    years: [1785, 1850],
  },
  {
    id: 'spanish-silver',
    label: 'New World silver',
    kind: 'trade',
    blurb: 'Mountains of American silver flowed to China for two centuries. When it slowed, everything shifted.',
    era: 'early-modern',
    years: [1545, 1820],
  },
  {
    id: 'mercantilism',
    label: 'Mercantilism',
    kind: 'idea',
    blurb: 'The belief that a country wins by hoarding bullion — and that trade is a fight, not an exchange.',
    era: 'early-modern',
    years: [1500, 1800],
  },
  {
    id: 'free-trade',
    label: 'Free trade',
    kind: 'idea',
    blurb: 'The argument that opening markets makes everyone richer, used both to end slavery-era tariffs and to justify a war over opium.',
    era: 'industrial',
    years: [1776, 1900],
  },
  {
    id: 'treaty-of-nanking',
    label: 'The Treaty of Nanking',
    kind: 'event',
    blurb: 'The 1842 treaty that opened five Chinese ports, set an indemnity, and gave Britain Hong Kong.',
    era: 'industrial',
    years: [1842, 1842],
  },
  {
    id: 'hong-kong',
    label: 'Hong Kong',
    kind: 'place',
    blurb: 'A rocky island nobody wanted, taken as a harbour, that became one of the richest cities on earth.',
    era: 'industrial',
    years: [1842, 1997],
  },
  {
    id: 'unequal-treaties',
    label: 'The unequal treaties',
    kind: 'idea',
    blurb: 'A century of agreements China signed after losing wars, each one taking a little more sovereignty.',
    era: 'industrial',
    years: [1842, 1943],
  },
  {
    id: 'century-of-humiliation',
    label: 'The Century of Humiliation',
    kind: 'idea',
    blurb: 'How modern China names the period from 1839 to 1949 — and why that name still shapes its foreign policy.',
    era: 'modern',
    years: [1839, 1949],
  },
  {
    id: 'modern-china',
    label: 'Modern China',
    kind: 'place',
    blurb: 'A state that tells its own story starting from the moment the opium arrived.',
    era: 'contemporary',
    years: [1949, 2026],
  },

  /* ------------------------------------------- the algebra chain ---- */
  {
    id: 'al-khwarizmi',
    label: 'Al-Khwārizmī',
    kind: 'person',
    blurb: 'A scholar in Baghdad whose name became the word "algorithm" and whose book title became "algebra".',
    era: 'medieval',
    years: [780, 850],
    story: 'al-khwarizmi',
  },
  {
    id: 'algebra',
    label: 'Algebra',
    kind: 'idea',
    blurb: 'The move from solving *this* problem to solving *every problem of this shape*.',
    era: 'medieval',
    years: [820, 2026],
  },
  {
    id: 'algorithm',
    label: 'The algorithm',
    kind: 'idea',
    blurb: 'A recipe so exact that following it needs no understanding — which is why a machine can follow it.',
    era: 'medieval',
    years: [820, 2026],
  },
  {
    id: 'hindu-arabic-numerals',
    label: 'Hindu-Arabic numerals',
    kind: 'idea',
    blurb: 'Ten symbols, place value, and a zero: the notation that made arithmetic something ordinary people could do.',
    era: 'medieval',
    years: [500, 1500],
  },
  {
    id: 'brahmagupta',
    label: 'Brahmagupta',
    kind: 'person',
    blurb: 'The Indian mathematician who, in 628, wrote down the rules for calculating with zero and with negative numbers.',
    era: 'medieval',
    years: [598, 668],
  },
  {
    id: 'house-of-wisdom',
    label: 'The House of Wisdom',
    kind: 'organisation',
    blurb: 'Baghdad’s library and translation works — smaller and stranger than the legend, and more important than the legend needs it to be.',
    era: 'medieval',
    years: [780, 1258],
  },
  {
    id: 'abbasid-caliphate',
    label: 'The Abbasid Caliphate',
    kind: 'empire',
    blurb: 'The empire that decided, as state policy, to translate the world’s knowledge into Arabic.',
    era: 'medieval',
    years: [750, 1258],
  },
  {
    id: 'baghdad',
    label: 'Baghdad',
    kind: 'place',
    blurb: 'A perfectly round city built from nothing in 762, and for two centuries the largest city on earth.',
    era: 'medieval',
    years: [762, 1258],
  },
  {
    id: 'translation-movement',
    label: 'The translation movement',
    kind: 'event',
    blurb: 'Two centuries of state-funded work turning Greek, Persian and Sanskrit science into Arabic.',
    era: 'medieval',
    years: [750, 1000],
  },
  {
    id: 'islamic-golden-age',
    label: 'The Islamic Golden Age',
    kind: 'event',
    blurb: 'The centuries when the fastest place to learn anything was somewhere between Córdoba and Samarkand.',
    era: 'medieval',
    years: [750, 1258],
  },
  {
    id: 'paper-making',
    label: 'Paper',
    kind: 'technology',
    blurb: 'Cheap writing surface, arriving from China. Ideas cost less to copy, so more of them survived.',
    era: 'medieval',
    years: [751, 1300],
  },
  {
    id: 'hellenistic-science',
    label: 'Greek science',
    kind: 'idea',
    blurb: 'Euclid, Ptolemy, Galen — a body of work that survived mostly because someone else chose to copy it.',
    era: 'classical',
    years: [-300, 200],
  },
  {
    id: 'mongol-invasion',
    label: 'The Mongol invasion of Baghdad',
    kind: 'event',
    blurb: 'In 1258 the city fell in thirteen days. What that did to Islamic science is still argued about.',
    era: 'medieval',
    years: [1258, 1258],
  },
  {
    id: 'toledo-translations',
    label: 'The Toledo translators',
    kind: 'event',
    blurb: 'In twelfth-century Spain, Christians, Muslims and Jews translated Arabic science into Latin, and Europe started catching up.',
    era: 'medieval',
    years: [1120, 1284],
  },
  {
    id: 'fibonacci',
    label: 'Fibonacci',
    kind: 'person',
    blurb: 'A Pisan merchant’s son who learned Arabic arithmetic in North Africa and sold it to Europe as a business tool.',
    era: 'medieval',
    years: [1170, 1250],
  },
  {
    id: 'double-entry-bookkeeping',
    label: 'Double-entry bookkeeping',
    kind: 'idea',
    blurb: 'Write every transaction twice and the books catch their own errors. Modern companies are built on it.',
    era: 'early-modern',
    years: [1300, 1600],
  },
  {
    id: 'printing-press',
    label: 'The printing press',
    kind: 'technology',
    blurb: 'Movable type in Europe around 1440: the cost of a copy collapsed, and so did control of what people read.',
    era: 'early-modern',
    years: [1440, 1600],
    story: 'printing-press',
  },
  {
    id: 'european-renaissance',
    label: 'The European Renaissance',
    kind: 'event',
    blurb: 'Europe rediscovering classical knowledge — much of it arriving back through Arabic.',
    era: 'early-modern',
    years: [1300, 1600],
  },

  /* ------------------------------------------ beyond the legend ---- */
  {
    id: 'vlad-tepes',
    label: 'Vlad Țepeș',
    kind: 'person',
    blurb: 'The real Dracula: a prince who held a small country against an empire, and whose enemies got to write it all down.',
    era: 'medieval',
    years: [1431, 1476],
    story: 'vlad-tepes',
  },
  {
    id: 'wallachia',
    label: 'Wallachia',
    kind: 'place',
    blurb: 'A small principality wedged between two empires, where a prince lasted about two years.',
    era: 'medieval',
    years: [1330, 1859],
  },
  {
    id: 'ottoman-empire',
    label: 'The Ottoman Empire',
    kind: 'empire',
    blurb: 'Six centuries across three continents, and for much of it the most powerful state in Europe.',
    era: 'medieval',
    years: [1299, 1922],
  },
  {
    id: 'mehmed-ii',
    label: 'Mehmed II',
    kind: 'person',
    blurb: 'Took Constantinople at twenty-one, and is said to have turned back from a field of stakes at thirty.',
    era: 'medieval',
    years: [1432, 1481],
  },
  {
    id: 'fall-of-constantinople',
    label: 'The fall of Constantinople',
    kind: 'event',
    blurb: 'In 1453 the walls that had held for a thousand years came down to gunpowder, and an age ended.',
    era: 'medieval',
    years: [1453, 1453],
    story: 'fall-of-constantinople',
  },
  {
    id: 'order-of-the-dragon',
    label: 'The Order of the Dragon',
    kind: 'organisation',
    blurb: 'A knightly order sworn to fight the Ottomans. Joining it gave one family the surname the world remembers.',
    era: 'medieval',
    years: [1408, 1500],
  },
  {
    id: 'radu-cel-frumos',
    label: 'Radu the Handsome',
    kind: 'person',
    blurb: 'Vlad’s younger brother, raised in the same Ottoman court — and sent back to take his throne.',
    era: 'medieval',
    years: [1437, 1475],
  },
  {
    id: 'matthias-corvinus',
    label: 'Matthias Corvinus',
    kind: 'person',
    blurb: 'King of Hungary, who took crusade money, did not crusade, and needed someone to blame.',
    era: 'medieval',
    years: [1443, 1490],
  },
  {
    id: 'dracula-pamphlets',
    label: 'The Dracula pamphlets',
    kind: 'idea',
    blurb: 'Printed atrocity stories about a foreign prince — among the first mass-market bestsellers in Europe.',
    era: 'early-modern',
    years: [1463, 1560],
  },
  {
    id: 'dracula-novel',
    label: 'Stoker’s Dracula',
    kind: 'idea',
    blurb: 'The 1897 novel that made a vampire out of a name its author found in a library footnote.',
    era: 'modern',
    years: [1897, 1897],
  },
  {
    id: 'bram-stoker',
    label: 'Bram Stoker',
    kind: 'person',
    blurb: 'A theatre manager in London who needed a better name than "Count Wampyr".',
    era: 'modern',
    years: [1847, 1912],
  },

  /* ------------------------------------------------ the octopus ---- */
  {
    id: 'guatemala-coup',
    label: 'The Guatemalan coup',
    kind: 'event',
    blurb: 'In 1954 a fruit company, a public relations man and the CIA ended a country’s ten-year experiment in democracy.',
    era: 'contemporary',
    years: [1952, 1954],
    story: 'united-fruit',
  },
  {
    id: 'united-fruit',
    label: 'The United Fruit Company',
    kind: 'organisation',
    blurb: 'Guatemalans called it El Pulpo — the octopus. It held the railway, the port, the telegraph and most of the arable land.',
    era: 'modern',
    years: [1899, 1970],
  },
  {
    id: 'guatemala',
    label: 'Guatemala',
    kind: 'place',
    blurb: 'A country whose ten years of democracy sit between a dictator and forty years of war.',
    era: 'contemporary',
    years: [1944, 1996],
  },
  {
    id: 'jacobo-arbenz',
    label: 'Jacobo Árbenz',
    kind: 'person',
    blurb: 'Elected president in 1951 on a promise to make Guatemala a modern capitalist country. Removed for trying.',
    era: 'contemporary',
    years: [1913, 1971],
  },
  {
    id: 'decree-900',
    label: 'Decree 900',
    kind: 'idea',
    blurb: 'A land reform that bought uncultivated estates at the value their owners had declared for tax. That was the problem.',
    era: 'contemporary',
    years: [1952, 1954],
  },
  {
    id: 'cia',
    label: 'The CIA',
    kind: 'organisation',
    blurb: 'Four years after Guatemala it was still using the same playbook, and the operation had a name: PBSUCCESS.',
    era: 'contemporary',
    years: [1947, 2026],
  },
  {
    id: 'edward-bernays',
    label: 'Edward Bernays',
    kind: 'person',
    blurb: 'Freud’s nephew, the self-described father of public relations, and United Fruit’s man in the American press.',
    era: 'modern',
    years: [1891, 1995],
  },
  {
    id: 'public-relations',
    label: 'Public relations',
    kind: 'idea',
    blurb: 'The deliberate manufacture of consent — invented as a profession, and tested on a country.',
    era: 'modern',
    years: [1920, 2026],
  },
  {
    id: 'banana-republic',
    label: '"Banana republic"',
    kind: 'idea',
    blurb: 'A phrase coined by a novelist hiding from a fraud charge, fifty years before the coup it now describes.',
    era: 'modern',
    years: [1904, 2026],
  },
  {
    id: 'cold-war',
    label: 'The Cold War',
    kind: 'event',
    blurb: 'The frame that turned every local argument about land or wages into a question about which side you were on.',
    era: 'contemporary',
    years: [1947, 1991],
  },
  {
    id: 'guatemalan-civil-war',
    label: 'The Guatemalan civil war',
    kind: 'event',
    blurb: 'Thirty-six years, some 200,000 dead, and a truth commission that used the word genocide.',
    era: 'contemporary',
    years: [1960, 1996],
  },

  /* ------------------------------------------ the warning ignored ---- */
  {
    id: 'harry-markopolos',
    label: 'Harry Markopolos',
    kind: 'person',
    blurb: 'A financial analyst who proved Bernie Madoff was a fraud in an afternoon, and spent nine years being ignored.',
    era: 'contemporary',
    years: [1956, 2026],
    story: 'markopolos',
  },
  {
    id: 'madoff-fraud',
    label: 'The Madoff fraud',
    kind: 'event',
    blurb: 'The largest Ponzi scheme in history — and one that a single analyst had reported to the regulator for years.',
    era: 'contemporary',
    years: [1990, 2008],
  },
  {
    id: 'bernie-madoff',
    label: 'Bernie Madoff',
    kind: 'person',
    blurb: 'A former NASDAQ chairman whose respectability was the disguise. He never traded; he only took the money.',
    era: 'contemporary',
    years: [1938, 2021],
  },
  {
    id: 'sec',
    label: 'The SEC',
    kind: 'organisation',
    blurb: 'The US markets regulator, which examined Madoff repeatedly and cleared him every time.',
    era: 'contemporary',
    years: [1934, 2026],
  },
  {
    id: 'ponzi-scheme',
    label: 'The Ponzi scheme',
    kind: 'idea',
    blurb: 'Pay the old investors with the new ones’ money. It looks like genius until the new money stops.',
    era: 'modern',
    years: [1920, 2026],
  },
  {
    id: 'charles-ponzi',
    label: 'Charles Ponzi',
    kind: 'person',
    blurb: 'A Boston swindler whose 1920 scheme with postal coupons was so notorious it named the structure.',
    era: 'modern',
    years: [1882, 1949],
  },
  {
    id: 'nasdaq',
    label: 'NASDAQ',
    kind: 'organisation',
    blurb: 'The electronic stock market Madoff helped build and briefly chaired — the credential that made him unquestionable.',
    era: 'modern',
    years: [1971, 2026],
  },
  {
    id: 'financial-crisis-2008',
    label: 'The 2008 financial crisis',
    kind: 'event',
    blurb: 'The crash that made frightened investors ask for their money back — and found there was none.',
    era: 'contemporary',
    years: [2007, 2009],
  },

  /* ------------------------------------------- the perfect battle ---- */
  {
    id: 'battle-of-cannae',
    label: 'The Battle of Cannae',
    kind: 'event',
    blurb: 'One August afternoon in 216 BC, and still the deadliest single day any European army has ever had.',
    era: 'classical',
    years: [-216, -216],
    story: 'cannae',
  },
  {
    id: 'hannibal',
    label: 'Hannibal Barca',
    kind: 'person',
    blurb: 'He beat Rome in the field for fifteen years without ever being able to beat Rome.',
    era: 'classical',
    years: [-247, -183],
  },
  {
    id: 'carthage',
    label: 'Carthage',
    kind: 'empire',
    blurb: 'A trading city on the North African coast that owned the western Mediterranean, until it did not exist.',
    era: 'classical',
    years: [-814, -146],
  },
  {
    id: 'roman-republic',
    label: 'The Roman Republic',
    kind: 'empire',
    blurb: 'A state whose real weapon was not its army but its refusal to accept that it had lost one.',
    era: 'classical',
    years: [-509, -27],
  },
  {
    id: 'second-punic-war',
    label: 'The Second Punic War',
    kind: 'event',
    blurb: 'Seventeen years that decided which city would run the Mediterranean for the next six hundred.',
    era: 'classical',
    years: [-218, -201],
  },
  {
    id: 'polybius',
    label: 'Polybius',
    kind: 'person',
    blurb: 'A Greek hostage in Rome who wrote the war down as a problem in cause and effect, not a list of heroes.',
    era: 'classical',
    years: [-200, -118],
  },
  {
    id: 'double-envelopment',
    label: 'The double envelopment',
    kind: 'idea',
    blurb: 'Let the enemy walk forward into a bag, then close it. Every staff college on earth still teaches this one afternoon.',
    era: 'classical',
    years: [-216, 2026],
  },
  {
    id: 'fabian-strategy',
    label: 'The Fabian strategy',
    kind: 'idea',
    blurb: 'Refuse the battle you would lose, and keep existing until the other side cannot. Named after the man Rome mocked for it.',
    era: 'classical',
    years: [-217, 2026],
  },
  {
    id: 'scipio-africanus',
    label: 'Scipio Africanus',
    kind: 'person',
    blurb: 'A young officer who survived the massacre, spent fourteen years learning from it, and used it on its inventor.',
    era: 'classical',
    years: [-236, -183],
  },
  {
    id: 'battle-of-zama',
    label: 'The Battle of Zama',
    kind: 'event',
    blurb: 'In 202 BC Hannibal finally lost a battle, in Africa, to a man who had been at Cannae as a boy.',
    era: 'classical',
    years: [-202, -202],
  },

  /* ------------------------------------------ the walls come down ---- */
  {
    id: 'byzantine-empire',
    label: 'The Byzantine Empire',
    kind: 'empire',
    blurb: 'The half of the Roman Empire that did not fall in 476, and went on calling itself Roman for another thousand years.',
    era: 'medieval',
    years: [330, 1453],
  },
  {
    id: 'constantinople',
    label: 'Constantinople',
    kind: 'place',
    blurb: 'For a thousand years the largest, richest and best-defended city in Christendom, and by 1453 mostly orchards.',
    era: 'medieval',
    years: [330, 1453],
  },
  {
    id: 'theodosian-walls',
    label: 'The Theodosian Walls',
    kind: 'technology',
    blurb: 'A triple line of stone finished in 413 that turned away every army that came at it for a thousand years.',
    era: 'medieval',
    years: [413, 1453],
  },
  {
    id: 'siege-cannon',
    label: 'The siege cannon',
    kind: 'technology',
    blurb: 'Gunpowder artillery big enough to make height and thickness stop counting — and to make stone castles obsolete.',
    era: 'medieval',
    years: [1400, 1600],
  },
  {
    id: 'constantine-xi',
    label: 'Constantine XI Palaiologos',
    kind: 'person',
    blurb: 'The last Roman emperor, ruling a city he could not fill and defending walls he could not man.',
    era: 'medieval',
    years: [1405, 1453],
  },

  /* -------------------------------------------- the cost of a copy ---- */
  {
    id: 'gutenberg',
    label: 'Johannes Gutenberg',
    kind: 'person',
    blurb: 'A Mainz goldsmith who did not invent printing, and did invent the way to make identical letters by the thousand.',
    era: 'early-modern',
    years: [1400, 1468],
  },
  {
    id: 'movable-type',
    label: 'Movable type',
    kind: 'technology',
    blurb: 'Letters cast one by one and reassembled into any page you like — invented in Asia, industrialised in Mainz.',
    era: 'medieval',
    years: [1040, 1500],
  },
  {
    id: 'textual-fixity',
    label: 'The fixed text',
    kind: 'idea',
    blurb: 'When every copy says the same thing, you can cite a page number — and a mistake becomes correctable rather than eternal.',
    era: 'early-modern',
    years: [1460, 1700],
  },
  {
    id: 'reformation',
    label: 'The Reformation',
    kind: 'event',
    blurb: 'The argument that split Western Christianity, and the first one conducted in cheap pamphlets bought by ordinary people.',
    era: 'early-modern',
    years: [1517, 1648],
  },
  {
    id: 'martin-luther',
    label: 'Martin Luther',
    kind: 'person',
    blurb: 'A monk with a grievance about indulgences who turned out to be the first author of the mass-market age.',
    era: 'early-modern',
    years: [1483, 1546],
  },

  /* --------------------------------------------- a sentence a second ---- */
  {
    id: 'transatlantic-cable',
    label: 'The transatlantic cable',
    kind: 'technology',
    blurb: 'From 1866, a message could cross the Atlantic in minutes instead of ten days. Nothing about distance meant the same afterwards.',
    era: 'industrial',
    years: [1854, 1866],
    story: 'transatlantic-cable',
  },
  {
    id: 'telegraph',
    label: 'The electric telegraph',
    kind: 'technology',
    blurb: 'The first time a message could travel faster than the person carrying it, which had been true for all of previous history.',
    era: 'industrial',
    years: [1837, 1900],
  },
  {
    id: 'cyrus-field',
    label: 'Cyrus West Field',
    kind: 'person',
    blurb: 'A retired paper merchant who knew no science, and spent twelve years and four failures getting a wire across an ocean.',
    era: 'industrial',
    years: [1819, 1892],
  },
  {
    id: 'great-eastern',
    label: 'The Great Eastern',
    kind: 'technology',
    blurb: 'Brunel’s enormous failure of a passenger ship, and the only vessel on earth that could carry an ocean’s worth of cable.',
    era: 'industrial',
    years: [1858, 1889],
  },
  {
    id: 'william-thomson',
    label: 'William Thomson (Lord Kelvin)',
    kind: 'person',
    blurb: 'The physicist who worked out why long cables blur a signal, and then built the instrument delicate enough to read one.',
    era: 'industrial',
    years: [1824, 1907],
  },

  /* ---------------------------------------------- the library myth ---- */
  {
    id: 'library-of-alexandria',
    label: 'The Library of Alexandria',
    kind: 'organisation',
    blurb: 'The most famous library in history, and the one whose destruction almost certainly never happened the way you were told.',
    era: 'classical',
    years: [-290, 400],
    story: 'library-of-alexandria',
  },
  {
    id: 'alexandria',
    label: 'Alexandria',
    kind: 'place',
    blurb: 'A Greek city on an Egyptian coast, built to be the capital of a Mediterranean that had not existed before it.',
    era: 'classical',
    years: [-331, 641],
  },
  {
    id: 'ptolemaic-egypt',
    label: 'Ptolemaic Egypt',
    kind: 'empire',
    blurb: 'Three centuries of Greek pharaohs who funded scholarship as a matter of state prestige, until they stopped.',
    era: 'classical',
    years: [-305, -30],
  },
  {
    id: 'eratosthenes',
    label: 'Eratosthenes',
    kind: 'person',
    blurb: 'Chief librarian at Alexandria, who measured the size of the earth with a stick, a well and a walk’s worth of arithmetic.',
    era: 'classical',
    years: [-276, -194],
  },
  {
    id: 'julius-caesar',
    label: 'Julius Caesar',
    kind: 'person',
    blurb: 'Trapped in Alexandria in 48 BC with a small force, he set fire to the harbour — and got blamed for a library for two thousand years.',
    era: 'classical',
    years: [-100, -44],
  },

  /* ------------------------------------------- when everything fell ---- */
  {
    id: 'bronze-age-collapse',
    label: 'The Late Bronze Age collapse',
    kind: 'event',
    blurb: 'Within about fifty years around 1200 BC, almost every kingdom in the eastern Mediterranean stopped existing.',
    era: 'ancient',
    years: [-1250, -1150],
    story: 'bronze-age-collapse',
  },
  {
    id: 'sea-peoples',
    label: 'The Sea Peoples',
    kind: 'idea',
    blurb: 'A name Egyptian scribes gave to enemies arriving by ship. Whether they were a cause of the collapse or a symptom is still argued.',
    era: 'ancient',
    years: [-1210, -1150],
  },
  {
    id: 'hittite-empire',
    label: 'The Hittite Empire',
    kind: 'empire',
    blurb: 'One of the great powers of the age, with a capital of stone gates and archives, abandoned so completely it was forgotten for three thousand years.',
    era: 'ancient',
    years: [-1650, -1180],
  },
  {
    id: 'ugarit',
    label: 'Ugarit',
    kind: 'place',
    blurb: 'A rich Syrian port that burned around 1190 BC, leaving its last letters in the ruins for us to read.',
    era: 'ancient',
    years: [-1450, -1185],
  },
  {
    id: 'mycenaean-greece',
    label: 'Mycenaean Greece',
    kind: 'empire',
    blurb: 'Palace kingdoms with an accounting script, a bureaucracy and a Trojan war story — all of which stopped at once.',
    era: 'ancient',
    years: [-1600, -1100],
  },
  {
    id: 'greek-dark-age',
    label: 'The Greek Dark Age',
    kind: 'event',
    blurb: 'Four centuries in which Greece forgot how to write, build in stone, or make anything a palace would have wanted.',
    era: 'ancient',
    years: [-1100, -750],
  },
  {
    id: 'phoenicia',
    label: 'Phoenicia',
    kind: 'trade',
    blurb: 'The Levantine port cities that survived the collapse and inherited a Mediterranean with nobody left to answer to.',
    era: 'ancient',
    years: [-1200, -539],
  },
  {
    id: 'phoenician-alphabet',
    label: 'The alphabet',
    kind: 'idea',
    blurb: 'Twenty-two signs a merchant could learn in a week, instead of hundreds only a palace scribe could afford to master.',
    era: 'ancient',
    years: [-1050, -750],
  },
  {
    id: 'iron-working',
    label: 'Iron',
    kind: 'technology',
    blurb: 'Worse than bronze at first, and everywhere. It won because the trade routes that carried tin stopped working.',
    era: 'ancient',
    years: [-1200, -800],
  },
]

export const EDGES: GraphEdge[] = [
  /* ---------------------------------------------- the opium chain ---- */
  {
    from: 'industrial-revolution',
    to: 'british-empire',
    relation: 'enabled',
    note: 'Factories needed raw materials coming in and buyers going out, and the empire supplied both.',
  },
  {
    from: 'steam-engine',
    to: 'industrial-revolution',
    relation: 'enabled',
    note: 'Power stopped depending on rivers, wind and muscle, so a factory could be built anywhere.',
  },
  {
    from: 'british-empire',
    to: 'tea-trade',
    relation: 'funded',
    note: 'Tea was taxed heavily at home; the duty on it was a real slice of British government revenue.',
  },
  {
    from: 'tea-trade',
    to: 'spanish-silver',
    relation: 'caused',
    note: 'China sold tea and wanted silver in return, so silver drained east year after year.',
  },
  {
    from: 'tea-trade',
    to: 'opium-trade',
    relation: 'caused',
    note: 'Britain needed something China would buy. Opium was the answer it found.',
  },
  {
    from: 'east-india-company',
    to: 'tea-trade',
    relation: 'ruled',
    note: 'The Company held a legal monopoly on British trade with China until 1834.',
  },
  {
    from: 'battle-of-plassey',
    to: 'east-india-company',
    relation: 'enabled',
    note: 'Winning at Plassey in 1757 turned a trading company into the tax collector of Bengal.',
  },
  {
    from: 'mughal-empire',
    to: 'india',
    relation: 'succeeded-by',
    note: 'As Mughal authority fragmented, the Company filled the gap province by province.',
  },
  {
    from: 'east-india-company',
    to: 'india',
    relation: 'ruled',
    note: 'By 1800 a private company governed tens of millions of people and licensed their farmland.',
  },
  {
    from: 'india',
    to: 'opium-trade',
    relation: 'funded',
    note: 'Company-licensed farmers in Bengal and Bihar grew the poppy; the Company auctioned the chests in Calcutta.',
  },
  {
    from: 'opium-trade',
    to: 'opium-wars',
    relation: 'caused',
    note: 'China had banned opium since 1729 and could not stop the smuggling. Enforcement finally met a navy.',
  },
  {
    from: 'canton-system',
    to: 'opium-trade',
    relation: 'caused',
    note: 'One legal port and no legal way in for British goods pushed the trade into smuggling routes.',
  },
  {
    from: 'qing-dynasty',
    to: 'canton-system',
    relation: 'ruled',
    note: 'The Qing set the terms of foreign trade and, for a century, everyone accepted them.',
  },
  {
    from: 'lin-zexu',
    to: 'opium-wars',
    relation: 'caused',
    note: 'His seizure and destruction of 20,283 chests in 1839 was the act Britain treated as the casus belli.',
  },
  {
    from: 'qing-dynasty',
    to: 'lin-zexu',
    relation: 'ruled',
    note: 'The Daoguang Emperor sent him to Canton as Imperial Commissioner with orders to end the trade.',
  },
  {
    from: 'mercantilism',
    to: 'tea-trade',
    relation: 'inspired',
    note: 'A trade deficit looked like a national wound rather than a preference, which made the imbalance intolerable.',
  },
  {
    from: 'free-trade',
    to: 'opium-wars',
    relation: 'inspired',
    note: 'The war was argued in Parliament as a defence of open commerce, not as a defence of opium.',
    confidence: 'contested',
  },
  {
    from: 'opium-wars',
    to: 'treaty-of-nanking',
    relation: 'caused',
    note: 'The 1842 treaty ended the first war on Britain’s terms, and opium itself was never mentioned in it.',
  },
  {
    from: 'treaty-of-nanking',
    to: 'hong-kong',
    relation: 'caused',
    note: 'Hong Kong Island was ceded outright — a deep-water harbour Britain could hold without asking anyone.',
  },
  {
    from: 'treaty-of-nanking',
    to: 'unequal-treaties',
    relation: 'inspired',
    note: 'It set the template: indemnity, opened ports, and foreigners exempt from Chinese law.',
  },
  {
    from: 'unequal-treaties',
    to: 'century-of-humiliation',
    relation: 'caused',
    note: 'A hundred years of concessions became a single national story with a name.',
  },
  {
    from: 'century-of-humiliation',
    to: 'modern-china',
    relation: 'inspired',
    note: 'Chinese schoolbooks and state rhetoric still begin the modern era in 1839, not 1911 or 1949.',
  },
  {
    from: 'hong-kong',
    to: 'modern-china',
    relation: 'succeeded-by',
    note: 'The 1997 handover was framed at home as the closing of the wound opened in 1842.',
  },

  /* ------------------------------------------- the algebra chain ---- */
  {
    from: 'abbasid-caliphate',
    to: 'baghdad',
    relation: 'enabled',
    note: 'Al-Mansur founded a new circular capital in 762 to be the centre of the empire he was building.',
  },
  {
    from: 'abbasid-caliphate',
    to: 'translation-movement',
    relation: 'funded',
    note: 'Caliphs, courtiers and wealthy families paid working rates for translations for roughly two centuries.',
  },
  {
    from: 'paper-making',
    to: 'translation-movement',
    relation: 'enabled',
    note: 'Paper reached the Islamic world from China and made copying a book an affordable act.',
    confidence: 'contested',
  },
  {
    from: 'hellenistic-science',
    to: 'translation-movement',
    relation: 'preserved',
    note: 'Greek works survived in Arabic translation, and some exist today in no other version.',
  },
  {
    from: 'translation-movement',
    to: 'house-of-wisdom',
    relation: 'enabled',
    note: 'The Bayt al-Ḥikma was where much of that material was collected, copied and consulted.',
  },
  {
    from: 'house-of-wisdom',
    to: 'al-khwarizmi',
    relation: 'studied-at',
    note: 'He worked in the Abbasid scholarly world in Baghdad under al-Maʾmūn.',
    confidence: 'contested',
  },
  {
    from: 'brahmagupta',
    to: 'hindu-arabic-numerals',
    relation: 'wrote',
    note: 'In 628 he set out rules for zero and for negative numbers as numbers, not as absences.',
  },
  {
    from: 'hindu-arabic-numerals',
    to: 'al-khwarizmi',
    relation: 'inspired',
    note: 'He wrote the book that carried Indian decimal arithmetic into the Arabic-speaking world.',
  },
  {
    from: 'al-khwarizmi',
    to: 'algebra',
    relation: 'wrote',
    note: 'Al-jabr — "restoring" — was one of his two operations, and it named the subject.',
  },
  {
    from: 'al-khwarizmi',
    to: 'algorithm',
    relation: 'inspired',
    note: 'Latin readers called his method "Algoritmi", and the word outlived every memory of the man.',
  },
  {
    from: 'islamic-golden-age',
    to: 'al-khwarizmi',
    relation: 'enabled',
    note: 'He is the best-known figure of a period that produced hundreds like him.',
  },
  {
    from: 'baghdad',
    to: 'islamic-golden-age',
    relation: 'enabled',
    note: 'For two centuries it was the largest city on earth, and scholarship followed the money and the patrons.',
  },
  {
    from: 'mongol-invasion',
    to: 'baghdad',
    relation: 'destroyed',
    note: 'Hulagu’s army took the city in February 1258 and killed the caliph.',
  },
  {
    from: 'mongol-invasion',
    to: 'islamic-golden-age',
    relation: 'destroyed',
    note: 'The tidy version says science died in 1258. Historians increasingly disagree — see the story.',
    confidence: 'contested',
  },
  {
    from: 'toledo-translations',
    to: 'european-renaissance',
    relation: 'enabled',
    note: 'Arabic versions of Greek and Arabic science were rendered into Latin and read across Europe.',
  },
  {
    from: 'algebra',
    to: 'toledo-translations',
    relation: 'preserved',
    note: 'Al-Khwārizmī’s algebra reached Latin readers through Robert of Chester and Gerard of Cremona.',
  },
  {
    from: 'fibonacci',
    to: 'hindu-arabic-numerals',
    relation: 'inspired',
    note: 'The Liber Abaci (1202) pitched the new numerals to merchants using worked profit-and-loss problems.',
  },
  {
    from: 'hindu-arabic-numerals',
    to: 'double-entry-bookkeeping',
    relation: 'enabled',
    note: 'Columns of figures you can add quickly are the precondition for balancing a ledger at all.',
    confidence: 'contested',
  },
  {
    from: 'double-entry-bookkeeping',
    to: 'east-india-company',
    relation: 'enabled',
    note: 'A joint-stock company with thousands of shareholders needs books that can be audited. This is where the two chains meet.',
    confidence: 'contested',
  },
  {
    from: 'printing-press',
    to: 'european-renaissance',
    relation: 'enabled',
    note: 'The recovered texts stopped being rare objects and became things a student could own.',
  },
  {
    from: 'european-renaissance',
    to: 'industrial-revolution',
    relation: 'inspired',
    note: 'A long line, not a short one — but the habit of measuring and publishing starts here.',
    confidence: 'contested',
  },

  /* ------------------------------------------ beyond the legend ---- */
  {
    from: 'vlad-tepes',
    to: 'wallachia',
    relation: 'ruled',
    note: 'Three separate reigns, totalling about seven years. The middle one is the famous six.',
  },
  {
    from: 'ottoman-empire',
    to: 'wallachia',
    relation: 'conquered',
    note: 'Not occupied but made tributary — pay, send sons as hostages, and keep your prince.',
  },
  {
    from: 'order-of-the-dragon',
    to: 'vlad-tepes',
    relation: 'named',
    note: 'His father joined it and took the name Dracul, the dragon. Drăculea means son of the dragon.',
  },
  {
    from: 'ottoman-empire',
    to: 'vlad-tepes',
    relation: 'held',
    note: 'He spent his adolescence as a hostage at the Ottoman court, guaranteeing his father’s loyalty.',
  },
  {
    from: 'ottoman-empire',
    to: 'radu-cel-frumos',
    relation: 'held',
    note: 'The younger brother, hostage in the same court — who stayed, converted, and rose.',
  },
  {
    from: 'radu-cel-frumos',
    to: 'vlad-tepes',
    relation: 'succeeded-by',
    note: 'In 1462 the Ottomans took the throne from Vlad and gave it to the brother raised beside him.',
  },
  {
    from: 'fall-of-constantinople',
    to: 'ottoman-empire',
    relation: 'enabled',
    note: 'Taking the city in 1453 turned a large Balkan power into the heir of Rome, with the confidence to match.',
  },
  {
    from: 'mehmed-ii',
    to: 'fall-of-constantinople',
    relation: 'conquered',
    note: 'He was twenty-one, and he brought guns that could break walls a thousand years old.',
  },
  {
    from: 'vlad-tepes',
    to: 'mehmed-ii',
    relation: 'fought',
    note: 'In June 1462 he rode into the Ottoman camp at night to kill the sultan personally. He missed.',
  },
  {
    from: 'matthias-corvinus',
    to: 'vlad-tepes',
    relation: 'held',
    note: 'Vlad fled to Hungary for help and was imprisoned there for roughly twelve years instead.',
  },
  {
    from: 'matthias-corvinus',
    to: 'dracula-pamphlets',
    relation: 'inspired',
    note: 'He had taken crusade funds and not crusaded. A monstrous ally was a useful explanation.',
    confidence: 'contested',
  },
  {
    from: 'printing-press',
    to: 'dracula-pamphlets',
    relation: 'enabled',
    note: 'Cheap print was decades old and this is what it turned out to be good at: atrocity, reprinted.',
  },
  {
    from: 'dracula-pamphlets',
    to: 'vlad-tepes',
    relation: 'destroyed',
    note: 'They fixed his reputation across German-speaking Europe for five hundred years.',
  },
  {
    from: 'bram-stoker',
    to: 'dracula-novel',
    relation: 'wrote',
    note: 'He had called his villain Count Wampyr until he found a better name in a library book.',
  },
  {
    from: 'dracula-novel',
    to: 'vlad-tepes',
    relation: 'named',
    note: 'Stoker took the name and a footnote’s worth of meaning. The rest of the connection was built in the 1970s.',
    confidence: 'contested',
  },
  {
    from: 'mongol-invasion',
    to: 'ottoman-empire',
    relation: 'enabled',
    note: 'The Mongol wrecking of Seljuk Anatolia left the frontier where the Ottoman beylik grew.',
    confidence: 'contested',
  },
  {
    from: 'fall-of-constantinople',
    to: 'european-renaissance',
    relation: 'enabled',
    note: 'Greek scholars and manuscripts moved west afterwards — an accelerant, on a fire already lit.',
    confidence: 'contested',
  },

  /* ------------------------------------------------ the octopus ---- */
  {
    from: 'united-fruit',
    to: 'guatemala',
    relation: 'ruled',
    note: 'Not the government — the railway, the only Caribbean port, the telegraph, and most of the usable land.',
  },
  {
    from: 'jacobo-arbenz',
    to: 'decree-900',
    relation: 'wrote',
    note: 'Uncultivated land above a threshold, bought by the state, paid for in bonds at the owner’s own declared value.',
  },
  {
    from: 'decree-900',
    to: 'united-fruit',
    relation: 'fought',
    note: 'The company had undervalued its land for years to lower its taxes. Compensation was calculated on those numbers.',
  },
  {
    from: 'united-fruit',
    to: 'guatemala-coup',
    relation: 'caused',
    note: 'It lobbied a Washington in which the Secretary of State and the CIA director had both worked for its law firm.',
  },
  {
    from: 'edward-bernays',
    to: 'public-relations',
    relation: 'named',
    note: 'He called it that deliberately, because "propaganda" had stopped being a word you could use after 1918.',
  },
  {
    from: 'edward-bernays',
    to: 'guatemala-coup',
    relation: 'enabled',
    note: 'Years of press junkets and planted stories made a land reform legible to Americans as a communist beachhead.',
  },
  {
    from: 'cold-war',
    to: 'guatemala-coup',
    relation: 'enabled',
    note: 'It supplied the frame. Any local argument about land could be restated as a question about sides.',
  },
  {
    from: 'cia',
    to: 'guatemala-coup',
    relation: 'caused',
    note: 'PBSUCCESS: a few hundred men, some unmarked aircraft, and a radio station pretending to be a rebel army.',
  },
  {
    from: 'guatemala-coup',
    to: 'guatemalan-civil-war',
    relation: 'caused',
    note: 'The reform was reversed within a year. The war that followed ran for thirty-six.',
  },
  {
    from: 'united-fruit',
    to: 'banana-republic',
    relation: 'named',
    note: 'The phrase predates the coup by fifty years — O. Henry coined it in 1904 about Honduras.',
  },
  {
    from: 'east-india-company',
    to: 'united-fruit',
    relation: 'inspired',
    note: 'Not a lineage — a shape that recurs. A company holding a country’s infrastructure, and a government willing to send force when the terms change.',
    confidence: 'contested',
  },
  {
    from: 'free-trade',
    to: 'united-fruit',
    relation: 'inspired',
    note: 'Open markets as an argument, deployed by the party that already owned the ports.',
    confidence: 'contested',
  },
  {
    from: 'dracula-pamphlets',
    to: 'public-relations',
    relation: 'inspired',
    note: 'Four centuries apart, the same mechanism: a motivated author, a receptive audience, and a distribution technology that rewards the extreme version.',
    confidence: 'contested',
  },

  /* ------------------------------------------ the warning ignored ---- */
  {
    from: 'bernie-madoff',
    to: 'madoff-fraud',
    relation: 'ran',
    note: 'For years there was no trading at all — just new money paying old investors, and statements printed to match.',
  },
  {
    from: 'bernie-madoff',
    to: 'nasdaq',
    relation: 'led',
    note: 'He was its non-executive chairman in the early 1990s. That credential was the reason no one looked twice.',
  },
  {
    from: 'harry-markopolos',
    to: 'madoff-fraud',
    relation: 'exposed',
    note: 'Asked to copy Madoff’s returns, he found them mathematically impossible instead — and never let it go.',
  },
  {
    from: 'harry-markopolos',
    to: 'sec',
    relation: 'warned',
    note: 'Five submissions from 2000 on, including a 2005 report titled "The World’s Largest Hedge Fund Is a Fraud".',
  },
  {
    from: 'sec',
    to: 'harry-markopolos',
    relation: 'ignored',
    note: 'It examined Madoff repeatedly and cleared him each time. The failure was never a shortage of warning.',
  },
  {
    from: 'madoff-fraud',
    to: 'ponzi-scheme',
    relation: 'was',
    note: 'The oldest structure there is, run at a scale nobody thought a structure that simple could reach.',
  },
  {
    from: 'charles-ponzi',
    to: 'ponzi-scheme',
    relation: 'named',
    note: 'His 1920 Boston swindle with international postal coupons was notorious enough to name the whole idea.',
  },
  {
    from: 'financial-crisis-2008',
    to: 'madoff-fraud',
    relation: 'exposed',
    note: 'When frightened investors asked for about seven billion dollars back, there was nothing behind the statements to send.',
  },
  {
    from: 'public-relations',
    to: 'madoff-fraud',
    relation: 'enabled',
    note: 'Not Bernays’ doing — the same currency. Madoff was believed because of who he was, not because anyone checked the returns.',
    confidence: 'contested',
  },

  /* ------------------------------------------- the perfect battle ---- */
  {
    from: 'carthage',
    to: 'hannibal',
    relation: 'funded',
    note: 'His family ran the silver mines of southern Spain, and the army that crossed the Alps was paid for out of them.',
  },
  {
    from: 'hannibal',
    to: 'second-punic-war',
    relation: 'caused',
    note: 'He started it by taking a Spanish city Rome had declared under its protection, and he meant to.',
  },
  {
    from: 'second-punic-war',
    to: 'battle-of-cannae',
    relation: 'caused',
    note: 'Two defeats in two years had already made Rome desperate enough to try the one thing Hannibal wanted.',
  },
  {
    from: 'hannibal',
    to: 'battle-of-cannae',
    relation: 'led',
    note: 'He chose the ground, the shape of his own line, and the moment it was supposed to give way.',
  },
  {
    from: 'roman-republic',
    to: 'battle-of-cannae',
    relation: 'fought',
    note: 'Eight legions, the largest army the Republic had ever put in one field, and the reason so many died.',
  },
  {
    from: 'hannibal',
    to: 'roman-republic',
    relation: 'fought',
    note: 'Fifteen years inside Italy, never beaten in a set battle there, and never once able to take the city.',
  },
  {
    from: 'battle-of-cannae',
    to: 'double-envelopment',
    relation: 'named',
    note: 'Schlieffen spent his career trying to repeat it, and armies still mark a perfect encirclement by this word.',
  },
  {
    from: 'battle-of-cannae',
    to: 'fabian-strategy',
    relation: 'caused',
    note: 'Rome had mocked the delayer, fought the battle his way instead, and went back to him afterwards for good.',
  },
  {
    from: 'polybius',
    to: 'battle-of-cannae',
    relation: 'wrote',
    note: 'He walked the ground, questioned survivors on both sides, and wrote the account everything since is arguing with.',
  },
  {
    from: 'hellenistic-science',
    to: 'polybius',
    relation: 'inspired',
    note: 'The Greek habit of asking why a thing happened, rather than listing who it happened to, is what he brought to Roman history.',
  },
  {
    from: 'battle-of-cannae',
    to: 'scipio-africanus',
    relation: 'inspired',
    note: 'He was a junior officer in the trap and got out of it. Fourteen years later he closed the same trap on Hannibal.',
  },
  {
    from: 'scipio-africanus',
    to: 'battle-of-zama',
    relation: 'led',
    note: 'The only battle Hannibal lost, won by a man using Hannibal’s own method against him.',
  },
  {
    from: 'battle-of-zama',
    to: 'carthage',
    relation: 'conquered',
    note: 'It ended the war: no navy, no army outside Africa, and an indemnity payable for fifty years.',
  },
  {
    from: 'roman-republic',
    to: 'carthage',
    relation: 'destroyed',
    note: 'In 146 BC the city was taken, its people sold, and the site left empty. The word for that is not defeat.',
  },
  {
    from: 'roman-republic',
    to: 'byzantine-empire',
    relation: 'succeeded-by',
    note: 'The eastern half outlived the western by a thousand years and never once stopped calling itself Roman.',
  },

  /* ------------------------------------------ the walls come down ---- */
  {
    from: 'byzantine-empire',
    to: 'constantinople',
    relation: 'ruled',
    note: 'The empire and the city had shrunk into each other: by 1450 one was very nearly all that was left of the other.',
  },
  {
    from: 'theodosian-walls',
    to: 'constantinople',
    relation: 'preserved',
    note: 'Avars, Arabs, Bulgars, Rus and Ottomans all came and all went home. That is what a thousand years of holding looks like.',
  },
  {
    from: 'constantine-xi',
    to: 'byzantine-empire',
    relation: 'ruled',
    note: 'The last Roman emperor, crowned over a city of orchards and ruins with perhaps fifty thousand people in it.',
  },
  {
    from: 'constantine-xi',
    to: 'fall-of-constantinople',
    relation: 'fought',
    note: 'He refused the terms that would have let him leave alive, and died somewhere in the breach with his men.',
  },
  {
    from: 'mehmed-ii',
    to: 'siege-cannon',
    relation: 'funded',
    note: 'A Hungarian founder named Orban offered the guns to the emperor first. The emperor could not pay; the sultan could.',
  },
  {
    from: 'siege-cannon',
    to: 'theodosian-walls',
    relation: 'destroyed',
    note: 'Not by being clever. By making thickness and height stop being the thing that decided a siege.',
  },
  {
    from: 'siege-cannon',
    to: 'fall-of-constantinople',
    relation: 'enabled',
    note: 'Fifty-three days of bombardment did what a thousand years of ladders, rams and starvation could not.',
  },
  {
    from: 'byzantine-empire',
    to: 'hellenistic-science',
    relation: 'preserved',
    note: 'Almost every Greek text anyone reads today survives because Byzantine scribes kept copying them for a thousand years.',
  },
  {
    from: 'fall-of-constantinople',
    to: 'printing-press',
    relation: 'inspired',
    note: 'Greek manuscripts moved west with their owners, and within forty years the presses of Venice were selling them.',
  },

  /* -------------------------------------------- the cost of a copy ---- */
  {
    from: 'movable-type',
    to: 'printing-press',
    relation: 'enabled',
    note: 'Korea was printing books with metal type by 1377. What Mainz added was a way to make the letters fast enough to matter.',
  },
  {
    from: 'gutenberg',
    to: 'movable-type',
    relation: 'enabled',
    note: 'The hand mould: one engraved punch, one copper matrix, and then as many identical letters as you can pour metal for.',
  },
  {
    from: 'paper-making',
    to: 'printing-press',
    relation: 'enabled',
    note: 'A press needs something cheap to print on. Paper had been moving west out of China for six hundred years to be there.',
  },
  {
    from: 'printing-press',
    to: 'textual-fixity',
    relation: 'caused',
    note: 'Copies stopped drifting. You could now argue with a page number, and expect the other person to be looking at the same words.',
  },
  {
    from: 'printing-press',
    to: 'reformation',
    relation: 'enabled',
    note: 'Hus said much the same in 1415 and was burned quietly. Luther said it into a machine that made thirty thousand copies.',
  },
  {
    from: 'martin-luther',
    to: 'reformation',
    relation: 'led',
    note: 'He wrote short, in German, for people who were not scholars — the first author to work out what the new medium wanted.',
  },
  {
    from: 'textual-fixity',
    to: 'double-entry-bookkeeping',
    relation: 'enabled',
    note: 'Pacioli’s method spread as a printed manual in 1494, identical in every copy, which is the only way a standard can become one.',
  },

  /* --------------------------------------------- a sentence a second ---- */
  {
    from: 'industrial-revolution',
    to: 'telegraph',
    relation: 'enabled',
    note: 'Railways needed to know where their trains were, and paid for the first wires strung alongside the track.',
  },
  {
    from: 'telegraph',
    to: 'transatlantic-cable',
    relation: 'enabled',
    note: 'Land wires had already made a message instant inside a country. The ocean was the last gap, and the hardest.',
  },
  {
    from: 'cyrus-field',
    to: 'transatlantic-cable',
    relation: 'funded',
    note: 'Four failed attempts and twelve years of raising money from people who had watched him lose theirs before.',
  },
  {
    from: 'great-eastern',
    to: 'transatlantic-cable',
    relation: 'enabled',
    note: 'Too big to earn a living as a passenger ship, and the only hull on earth that could hold 4,000 kilometres of cable at once.',
  },
  {
    from: 'william-thomson',
    to: 'transatlantic-cable',
    relation: 'enabled',
    note: 'He showed that a long cable smears a signal rather than weakening it, and built a mirror galvanometer that could read the smear.',
  },
  {
    from: 'telegraph',
    to: 'british-empire',
    relation: 'ran',
    note: 'By 1900 an instruction from London reached Bombay, Cape Town or Sydney the same day, over cable Britain owned.',
  },
  {
    from: 'transatlantic-cable',
    to: 'free-trade',
    relation: 'enabled',
    note: 'Prices in London and New York converged within days of it opening, because arbitrage now moved faster than the goods.',
  },

  /* ---------------------------------------------- the library myth ---- */
  {
    from: 'ptolemaic-egypt',
    to: 'library-of-alexandria',
    relation: 'funded',
    note: 'It was a state prestige project, which is why it worked — and why it died when the state stopped paying for it.',
  },
  {
    from: 'library-of-alexandria',
    to: 'alexandria',
    relation: 'named',
    note: 'The city is remembered for a building nobody has ever found the foundations of.',
  },
  {
    from: 'eratosthenes',
    to: 'library-of-alexandria',
    relation: 'studied-at',
    note: 'Chief librarian, and the man who measured the circumference of the earth to within a few per cent from a well in Aswan.',
  },
  {
    from: 'julius-caesar',
    to: 'library-of-alexandria',
    relation: 'destroyed',
    note: 'His fire in the harbour in 48 BC burned books. Whether it touched the Library is the oldest unresolved question here.',
    confidence: 'contested',
  },
  {
    from: 'library-of-alexandria',
    to: 'hellenistic-science',
    relation: 'preserved',
    note: 'Euclid, Ptolemy and Galen come to us through the editions made and corrected here, not through their own hands.',
  },
  {
    from: 'library-of-alexandria',
    to: 'house-of-wisdom',
    relation: 'inspired',
    note: 'Not a lineage — a comparison the atlas makes deliberately. Both are real institutions buried under a much larger legend.',
    confidence: 'contested',
  },
  {
    from: 'ptolemaic-egypt',
    to: 'roman-republic',
    relation: 'succeeded-by',
    note: 'Cleopatra was the last of the line. Rome annexed Egypt in 30 BC and inherited the richest province it would ever hold.',
  },
  {
    from: 'julius-caesar',
    to: 'roman-republic',
    relation: 'destroyed',
    note: 'He was besieged in Alexandria in the middle of the civil war that ended it. Fourteen years later there was an emperor.',
  },
  {
    from: 'byzantine-empire',
    to: 'alexandria',
    relation: 'ruled',
    note: 'The city stayed Roman, then Byzantine, for six centuries after the Ptolemies — and was still arguing about theology when the Arabs arrived.',
  },

  /* ------------------------------------------- when everything fell ---- */
  {
    from: 'bronze-age-collapse',
    to: 'hittite-empire',
    relation: 'destroyed',
    note: 'The capital was emptied — records removed, gates blocked — and then burned. That reads as an evacuation, not a sack.',
  },
  {
    from: 'bronze-age-collapse',
    to: 'mycenaean-greece',
    relation: 'destroyed',
    note: 'Every palace burned or was abandoned within a couple of generations, and the writing system went with them.',
  },
  {
    from: 'bronze-age-collapse',
    to: 'ugarit',
    relation: 'destroyed',
    note: 'The city burned around 1190 BC and was never reoccupied, which is why its last diplomatic letters are still readable.',
  },
  {
    from: 'sea-peoples',
    to: 'bronze-age-collapse',
    relation: 'caused',
    note: 'The Egyptian version, carved on a temple wall by the one king who beat them. Whether they were cause or symptom is unsettled.',
    confidence: 'contested',
  },
  {
    from: 'hittite-empire',
    to: 'ugarit',
    relation: 'ruled',
    note: 'A vassal port that paid tribute and sent troops — including, in its final year, the troops it needed at home.',
  },
  {
    from: 'hittite-empire',
    to: 'iron-working',
    relation: 'held',
    note: 'They were working iron early and seem to have kept it scarce. How much of a monopoly this really was is disputed.',
    confidence: 'contested',
  },
  {
    from: 'bronze-age-collapse',
    to: 'iron-working',
    relation: 'enabled',
    note: 'Bronze needs tin from thousands of miles away. Iron ore is under your feet. When the long routes died, the local metal won.',
  },
  {
    from: 'bronze-age-collapse',
    to: 'greek-dark-age',
    relation: 'caused',
    note: 'Greece stopped writing for roughly four hundred years. Homer is composed inside that silence, about the world before it.',
  },
  {
    from: 'bronze-age-collapse',
    to: 'phoenicia',
    relation: 'enabled',
    note: 'The port cities that came through inherited a sea with no great powers left in it, and became the traders of the next age.',
  },
  {
    from: 'phoenicia',
    to: 'phoenician-alphabet',
    relation: 'named',
    note: 'A script built for cargo manifests rather than for palaces, which is precisely why it spread past the people who made it.',
  },
  {
    from: 'phoenician-alphabet',
    to: 'hellenistic-science',
    relation: 'enabled',
    note: 'Greek is written in borrowed Phoenician letters. Everything later written in Greek rests on a trader’s shorthand.',
  },
  {
    from: 'phoenicia',
    to: 'carthage',
    relation: 'named',
    note: 'Tyre planted a colony on the North African coast around 814 BC. Six centuries later it fought Rome for the western sea.',
  },
  {
    from: 'greek-dark-age',
    to: 'phoenician-alphabet',
    relation: 'succeeded-by',
    note: 'Greece came out of the silence writing again — but in a merchant’s alphabet, not the palace syllabary it had lost.',
  },
]

/* ------------------------------------------------------- lookups ----- */

export interface Connection {
  edge: GraphEdge
  /** The node at the other end, from the perspective of the node you asked about. */
  node: GraphNode
  direction: 'out' | 'in'
}

/**
 * A resolved view of the map: the same topology, with the labels and edge notes
 * in one language.
 *
 * The helpers are built per view rather than reading a module-level array so
 * that the Spanish map cannot accidentally traverse English nodes half way
 * through a path. Ids, kinds, eras, years, relations and story links are shared
 * — they are the graph; the sentences are what changes.
 */
export interface GraphView {
  nodes: GraphNode[]
  edges: GraphEdge[]
  nodeById(id: string): GraphNode | undefined
  connectionsFor(id: string): Connection[]
  pathBetween(fromId: string, toId: string): GraphNode[] | null
  edgeBetween(a: string, b: string): GraphEdge | undefined
  hubs(limit: number): GraphNode[]
}

function makeGraph(nodes: GraphNode[], edges: GraphEdge[]): GraphView {
  const byId = new Map(nodes.map((n) => [n.id, n]))

  function nodeById(id: string): GraphNode | undefined {
    return byId.get(id)
  }

  /** Everything touching a node, in both directions, with the far node resolved. */
  function connectionsFor(id: string): Connection[] {
    const out: Connection[] = []
    for (const edge of edges) {
      if (edge.from === id) {
        const node = byId.get(edge.to)
        if (node) out.push({ edge, node, direction: 'out' })
      } else if (edge.to === id) {
        const node = byId.get(edge.from)
        if (node) out.push({ edge, node, direction: 'in' })
      }
    }
    return out
  }

  /**
   * Breadth-first shortest path, used by the "how are these connected?" tool.
   * Edges are traversed in both directions: a reader does not care which way the
   * arrow points when they are asking how algebra reaches the East India Company.
   */
  function pathBetween(fromId: string, toId: string): GraphNode[] | null {
    if (fromId === toId) {
      const single = byId.get(fromId)
      return single ? [single] : null
    }
    const previous = new Map<string, string>()
    const seen = new Set([fromId])
    const queue = [fromId]

    while (queue.length) {
      const current = queue.shift()!
      for (const { node } of connectionsFor(current)) {
        if (seen.has(node.id)) continue
        seen.add(node.id)
        previous.set(node.id, current)
        if (node.id === toId) {
          const path: string[] = [toId]
          let step = toId
          while (previous.has(step)) {
            step = previous.get(step)!
            path.unshift(step)
          }
          return path.map((nodeId) => byId.get(nodeId)!).filter(Boolean)
        }
        queue.push(node.id)
      }
    }
    return null
  }

  /** The relationship joining two adjacent nodes, in whichever direction it exists. */
  function edgeBetween(a: string, b: string): GraphEdge | undefined {
    return edges.find((e) => (e.from === a && e.to === b) || (e.from === b && e.to === a))
  }

  /** Most-connected first — used to pick what the home page offers a stranger. */
  function hubs(limit: number): GraphNode[] {
    return [...nodes]
      .map((node) => ({ node, degree: connectionsFor(node.id).length }))
      .sort((a, b) => b.degree - a.degree)
      .slice(0, limit)
      .map((entry) => entry.node)
  }

  return { nodes, edges, nodeById, connectionsFor, pathBetween, edgeBetween, hubs }
}

/**
 * Translation is an *overlay*, not a second copy of the map. A Spanish node
 * carries the English node's id, kind, era, years and story; only `label` and
 * `blurb` are replaced. A node the overlay forgot would silently render in
 * English, so `check-content.mjs` requires an entry for every id and every edge.
 */
function localise(lang: Lang): GraphView {
  if (lang === 'en') return makeGraph(NODES, EDGES)

  const nodes = NODES.map((node) => {
    const es = NODE_ES[node.id]
    return es ? { ...node, label: es.label, blurb: es.blurb } : node
  })
  const edges = EDGES.map((edge) => {
    const note = EDGE_NOTE_ES[`${edge.from}>${edge.to}`]
    return note ? { ...edge, note } : edge
  })
  return makeGraph(nodes, edges)
}

const VIEWS: Partial<Record<Lang, GraphView>> = {}

export function graphFor(lang: Lang): GraphView {
  return (VIEWS[lang] ??= localise(lang))
}
