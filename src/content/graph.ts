import type { GraphEdge, GraphNode } from './types'

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
  },
  {
    id: 'european-renaissance',
    label: 'The European Renaissance',
    kind: 'event',
    blurb: 'Europe rediscovering classical knowledge — much of it arriving back through Arabic.',
    era: 'early-modern',
    years: [1300, 1600],
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
]

/* ------------------------------------------------------- lookups ----- */

export const NODE_BY_ID = new Map(NODES.map((n) => [n.id, n]))

export function nodeById(id: string): GraphNode | undefined {
  return NODE_BY_ID.get(id)
}

export interface Connection {
  edge: GraphEdge
  /** The node at the other end, from the perspective of the node you asked about. */
  node: GraphNode
  direction: 'out' | 'in'
}

/** Everything touching a node, in both directions, with the far node resolved. */
export function connectionsFor(id: string): Connection[] {
  const out: Connection[] = []
  for (const edge of EDGES) {
    if (edge.from === id) {
      const node = NODE_BY_ID.get(edge.to)
      if (node) out.push({ edge, node, direction: 'out' })
    } else if (edge.to === id) {
      const node = NODE_BY_ID.get(edge.from)
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
export function pathBetween(fromId: string, toId: string): GraphNode[] | null {
  if (fromId === toId) {
    const single = NODE_BY_ID.get(fromId)
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
        return path.map((nodeId) => NODE_BY_ID.get(nodeId)!).filter(Boolean)
      }
      queue.push(node.id)
    }
  }
  return null
}

/** The relationship joining two adjacent nodes, in whichever direction it exists. */
export function edgeBetween(a: string, b: string): GraphEdge | undefined {
  return EDGES.find((e) => (e.from === a && e.to === b) || (e.from === b && e.to === a))
}

/** Most-connected first — used to pick what the home page offers a stranger. */
export function hubs(limit: number): GraphNode[] {
  return [...NODES]
    .map((node) => ({ node, degree: connectionsFor(node.id).length }))
    .sort((a, b) => b.degree - a.degree)
    .slice(0, limit)
    .map((entry) => entry.node)
}
