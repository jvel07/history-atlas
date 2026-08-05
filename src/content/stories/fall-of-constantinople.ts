import type { Story } from '../types'

/**
 * Voice: the register Steven Runciman wrote the 1453 book in — formal, elegiac,
 * unhurried, and never sentimental about the empire it is mourning — with
 * Crowley's habit of staying at eye level in the ditch. The city had been dying
 * for two hundred and fifty years; the siege is where it stopped.
 */
export const fallOfConstantinople: Story = {
  slug: 'fall-of-constantinople',
  title: 'The Last Day of Rome',
  subtitle: 'Constantinople, 1453 — the walls had held for a thousand years, and then a gun changed what a wall was for.',
  hook: 'The Roman Empire did not end in 476. It ended on a Tuesday morning in 1453, defended by seven thousand men on walls built for a city ten times the size.',
  era: 'medieval',
  category: 'battles',
  years: [1451, 1453],
  regions: ['Byzantium', 'Ottoman Empire', 'Italy'],
  nodes: ['fall-of-constantinople', 'byzantine-empire', 'constantinople', 'mehmed-ii', 'theodosian-walls'],
  tags: ['siege', 'empire', 'technology', 'rome', 'ottoman', 'legend'],
  readingMinutes: 11,
  reviewed: '2026-08-05',
  mood: 'noir',

  reel: [
    { beat: 'hook', punch: true, text: 'The Roman Empire did not fall in 476. It fell on a Tuesday morning in 1453.' },
    { beat: 'hook', text: 'Nobody in the city called themselves Byzantine. They said Roman, and meant it.' },
    { beat: 'worldBefore', kicker: '413', text: 'Constantinople is defended by three lines of stone, a ditch, and a thousand years of results —' },
    { beat: 'worldBefore', text: 'Avars, Arabs, Bulgars, Rus, all came, all went home.' },
    { beat: 'worldBefore', kicker: '1204', text: 'Then a crusade sacked it, and it never really got up again.' },
    { beat: 'worldBefore', punch: true, text: 'By 1453 the great city is mostly orchards, and about fifty thousand people.' },
    { beat: 'problem', kicker: '1451', text: 'A sultan of twenty-one inherits an empire that surrounds the city on every side,' },
    { beat: 'problem', text: 'and decides the thing his father and his great-grandfather could not do.' },
    { beat: 'problem', text: 'A Hungarian gunfounder called Orban offers his cannon to the emperor first.' },
    { beat: 'problem', punch: true, mark: 'gate', text: 'The emperor cannot pay him. The sultan can pay him four times over.' },
    { beat: 'story', kicker: '6 April', text: 'The gun is eight metres long and throws a stone the weight of a small car,' },
    { beat: 'story', text: 'seven times a day, at walls that were never designed against anything like it,' },
    { beat: 'story', punch: true, text: 'and every night the defenders go out and rebuild what it broke.' },
    { beat: 'story', text: 'Seven thousand men are holding twenty kilometres of fortification.' },
    { beat: 'story', kicker: '22 April', text: 'Then the sultan takes seventy ships out of the water and moves them over a hill,' },
    { beat: 'story', punch: true, mark: 'reversal', text: 'and the harbour the defenders had chained shut is suddenly full of his fleet.' },
    { beat: 'story', kicker: '29 May', text: 'The assault comes before dawn, in waves, the best troops sent in last,' },
    { beat: 'story', text: 'and the man commanding the breach is hit and carried out through his own lines.' },
    { beat: 'story', punch: true, text: 'The defence does not lose the wall. It watches its commander leave, and comes apart.' },
    { beat: 'whyItHappened', text: 'People will say the walls failed. The walls held for fifty-three days,' },
    { beat: 'whyItHappened', text: 'against artillery nobody had built when they were made.' },
    { beat: 'whyItHappened', punch: true, text: 'What failed was arithmetic. One man per four metres, and no one coming.' },
    { beat: 'whyItHappened', text: 'Europe had promised help for years and sent almost none,' },
    { beat: 'whyItHappened', text: 'because the price of it was a church union the city had already refused.' },
    { beat: 'consequences', text: 'The last emperor throws off his insignia and goes into the breach. No one finds the body.' },
    { beat: 'consequences', mark: 'collapse', text: 'Mehmed rides to Hagia Sophia and has it made a mosque the same week,' },
    { beat: 'consequences', punch: true, text: 'and takes a title no Ottoman had claimed. Caesar of Rome.' },
    { beat: 'whyItMatters', text: 'Every stone castle in Europe became a liability that year,' },
    { beat: 'whyItMatters', text: 'and the thing that killed the last Roman city was not an army.' },
    { beat: 'whyItMatters', punch: true, text: 'It was that height and thickness had stopped being an answer.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'The people inside the city did not call themselves Byzantines. That word was invented by a German scholar a century after they were gone. They called themselves *Rhomaioi* — Romans — because that is what they were: the eastern half of the Roman Empire, which had never fallen, had merely gone on, in Greek, from a capital founded by Constantine in 330.',
        'For most of that run, Constantinople was the largest and richest city in Christendom, and the reason was partly geography and mostly a wall. The Theodosian Walls, finished in 413, ran four miles across the peninsula in three lines: a moat sixty feet wide, an outer wall, and behind it an inner wall forty feet high with ninety-six towers. Between 413 and 1453 they were attacked by Persians, Avars, Arabs twice, Bulgars, Rus, and Ottomans, and they turned all of them away.',
        'What finally got through was Christian. In 1204 the Fourth Crusade, diverted by debt and Venetian politics, took the city and sacked it for three days. The empire was broken into pieces, and although a Greek emperor returned in 1261, the thing he returned to was not the same thing. The treasury never refilled. The population, perhaps four hundred thousand before 1204, fell and kept falling.',
        'By the fifteenth century the empire consisted of the city, a strip of coast, and the Peloponnese. Inside the walls were fields, vineyards and villages with open ground between them; travellers described a city of separate settlements inside a fortification built for an imperial capital. Around fifty thousand people lived in a defensive perimeter designed for half a million.',
        'And around all of it was the Ottoman Empire, which had already taken the Balkans, and for which the city was less a strategic prize than an inconvenience — a foreign enclave sitting in the middle of its territory, in the gap between its European and Asian halves.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'Roughly 20 kilometres of land and sea walls. Roughly 7,000 defenders, by the count the emperor’s own secretary made and was told to keep quiet about. That is about one man for every three metres — and men cannot be in two places, which is what a siege is for finding out.',
        sourceId: 'sphrantzes-chronicle',
      },
      sourceIds: ['runciman-1965', 'crowley-2005', 'sphrantzes-chronicle'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Mehmed II became sultan for the second time in 1451, aged nineteen. The European powers who had met him in his first, brief reign as a boy read him as inexperienced and probably manageable. This was a serious misreading. Within a year he had built a fortress at the narrowest point of the Bosphorus — the locals called it the Throat-Cutter — and began sinking ships that would not stop to be taxed.',
        'His real innovation was not tactical. It was procurement. A cannon founder named Orban, from Hungary or Transylvania, came to Constantinople and offered the emperor a gun larger than anything then in existence. Constantine XI could not pay him what he asked, and could not supply the materials. Orban went to Edirne and made the same offer to the sultan, who asked whether the gun could break the walls of Constantinople, agreed to pay him four times his asking price, and gave him everything he needed.',
        'The result was a bronze bombard about eight metres long, throwing a stone ball of roughly six hundred kilograms. It needed sixty oxen and two hundred men to move, took hours to cool between shots, and could fire perhaps seven times a day. It was not accurate. It did not need to be. A wall is a fixed target.',
        'This is the actual problem of 1453, and it is not really a military problem. Fortification had been the technology that made a small rich state survivable against a large one for a thousand years. Gunpowder artillery, in the space of about fifty years, ended that. Constantinople was simply the most spectacular thing standing when the change arrived.',
      ],
      sourceIds: ['crowley-2005', 'runciman-1965', 'kritovoulos-1467'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'The siege began on 6 April 1453 and lasted fifty-three days.',
        'The defence was commanded, in practice, by a Genoese professional soldier named Giovanni Giustiniani Longo, who had arrived in January with seven hundred men and was given charge of the land walls. The garrison as a whole was tiny: George Sphrantzes, the emperor’s secretary, was ordered to count it and found under five thousand Greeks able to bear arms, plus about two thousand foreigners. Constantine told him to keep the number secret, which is the kind of order that tells you what the number meant.',
        'The pattern of the siege was set in the first week. The great gun and the smaller bombards would fire all day at the Mesoteichion, the weakest stretch of wall in the valley of the Lycus. Masonry would come down. And at night the defenders and the civilian population — women and children included, by every account — would go out into the ditch with barrels of earth, vine cuttings and rubble and build a stockade across the gap, which absorbed shot better than stone did.',
        'For six weeks the city won more of these exchanges than it lost. On 20 April four Christian ships fought their way through the entire Ottoman fleet to reach the harbour, in full view of both armies and of the sultan, who is said to have ridden his horse into the sea in fury. Mehmed’s attempts to mine under the walls were located and countermined by a German engineer in the city. His attempt to roll a great siege tower up to the ditch was burned in a night sortie.',
        'Then, on 22 April, the sultan did the thing that is remembered. The Golden Horn — the deep harbour on the city’s northern flank — was closed by a great iron chain on floats, and the sea walls behind it were thin because they had never had to be thick. Mehmed had a road of greased timbers laid over the hill behind Genoese Galata, and hauled some seventy ships out of the Bosphorus, over the ridge, and down into the harbour on the other side of the chain.',
        'It was not decisive by itself. What it did was arithmetic: the defenders now had to man the harbour walls too, out of the same seven thousand men. Every soldier moved north was a soldier not standing in the breach in the west.',
        'The final assault came in the small hours of 29 May, and it was organised the way a professional army organises one. The irregulars went first, for two hours, to exhaust the defence and use up its arrows. Then the Anatolian regiments. Then, at first light, the Janissaries — the sultan’s standing infantry, the best troops in Europe — went in fresh against men who had been fighting all night without relief.',
        'Two things then happened close together, and the sources disagree about the order. A small postern gate called the Kerkoporta was found unbarred, and a party of Ottoman soldiers got through it and onto the inner wall. And Giustiniani was hit — by a gunshot, through the breastplate, in the arm or the chest depending on the account — and asked to be carried out. The emperor is said to have begged him to stay. He was taken through the inner gate to a ship, and his Genoese followed him.',
        'The defence of the breach dissolved from that moment. Not because it had been beaten: because the men holding it saw the gate behind them open, saw their commander carried through it, and drew the obvious conclusion. Constantine XI, by the accounts that reach us, threw off his imperial insignia so as not to be taken alive and rode into the fighting at the Gate of St Romanus. No one identified his body afterwards.',
        'By mid-morning the city was taken. The sultan entered in the afternoon, rode to Hagia Sophia — a church for nine hundred and sixteen years — and gave the order that made it a mosque.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: '“All through the night the Turks fired the great cannon at the walls, and all through the night we of the city laboured in the ditch with earth and barrels and timber, women carrying stones with the men, and by morning the wall stood again where it had fallen.” — the substance of the Venetian ship’s surgeon Nicolò Barbaro’s day-by-day diary, kept inside the city throughout the siege.',
        sourceId: 'barbaro-1453',
      },
      sourceIds: ['barbaro-1453', 'runciman-1965', 'crowley-2005', 'philippides-hanak-2011'],
    },

    whyItHappened: {
      heading: 'Why it fell',
      paragraphs: [
        'The satisfying answer is the cannon, and the cannon matters, but it is not sufficient. The great gun cracked twice and had to be repaired, killed Orban himself at some point in the siege by most accounts, and never opened a breach the defenders could not close overnight. Artillery ground the walls down. It did not knock them over.',
        '**The sufficient answer is the ratio.** Twenty kilometres of wall and seven thousand men. Every device Mehmed used — the ships over the hill, the feints against the sea walls, the two hours of irregulars before the real attack — was an attack on that ratio rather than on the masonry. A defence with no reserve cannot lose anywhere without losing everywhere.',
        '**Behind the ratio is a diplomatic failure fifty years long.** The emperors had spent decades trying to buy western military help with the only currency they had, which was the submission of the Orthodox Church to Rome. John VIII signed the union at Florence in 1439. The city rejected it: the population, the monasteries and much of the clergy regarded it as selling the faith, and one of the great officers of state is quoted as saying he would rather see the sultan’s turban in the city than the cardinal’s hat. The union produced fury at home and, in the end, a few hundred Italian soldiers and a papal galley or two.',
        '**And behind that is 1204.** The reason Constantinople could not raise a real army in 1453 is that it had been destroyed as an economic power by a Christian crusade two hundred and fifty years earlier, and had never recovered its revenue, its population or its trade — Genoa and Venice held that now. The empire that fell to Mehmed had been a great power within living memory of nobody alive.',
        'Put those together and the siege reads differently. Mehmed did not defeat the Roman Empire. He arrived at the end of a very long decline with a new technology and enough men to finish it, and had the sense to attack the one thing that was genuinely scarce inside the walls, which was people.',
      ],
      sourceIds: ['runciman-1965', 'philippides-hanak-2011', 'crowley-2005'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'A date that ends an empire is usually a historian’s convenience. This one is not: on 28 May 1453 there was a Roman emperor, and on 30 May there was not, and there has not been one since.',
      ],
      shortTerm: [
        'Custom allowed the army three days of plunder. Most accounts agree Mehmed ended it early — on the first day by some, later by others — because he wanted the city intact as his capital, not stripped.',
        'Hagia Sophia became a mosque within days. It stayed one until 1934, became a museum, and was returned to use as a mosque in 2020.',
        'Mehmed took the title Kayser-i Rûm — Caesar of Rome — and meant it as a claim of succession, not a flourish. He was twenty-one.',
        'The Ottoman capital moved to the city, and stayed there for four hundred and seventy years.',
        'Mehmed immediately began repopulating it, by invitation and by compulsion, resettling Greeks, Armenians, Jews and Turks. Within twenty-five years it was bigger than it had been in 1453.',
      ],
      longTerm: [
        'The high stone wall stopped being a serious defence anywhere in Europe. Within a century fortification had been redesigned around low, thick, angled earthworks built to absorb shot — the trace italienne — and the age of the castle was over.',
        'The Ottoman Empire became the dominant power in the eastern Mediterranean and remained a first-rank European state until 1918.',
        'Greek scholars and manuscripts continued moving west, adding to a transfer that had been running for decades, and Venice’s presses began printing Greek texts within forty years.',
        'Moscow began, over the following century, to describe itself as the Third Rome — a claim of inheritance that still shows up in Russian self-description.',
        'The date is used as a boundary marker between medieval and modern in a great many textbooks, which says more about the convenience of round endings than about 1453.',
      ],
      unexpected: [
        'Orban, who built the gun that made the siege possible, had offered it to the defenders first. The fall of Constantinople turned on a budget decision.',
        'Some of the biggest guns were not new: an Ottoman bombard cast in 1464, of the same family, was still in British service on the Dardanelles and fired on a Royal Navy squadron in 1807.',
        'The Genoese colony of Galata, directly across the harbour, stayed formally neutral throughout the siege, traded with both sides, and surrendered on terms the day after the city fell.',
        'Sphrantzes, who counted the garrison, survived, was enslaved, was ransomed, lost his children to the sultan’s household, and wrote the only eyewitness memoir by a senior Byzantine official — which is also the source for the number he was told to keep quiet.',
      ],
      sourceIds: ['runciman-1965', 'crowley-2005', 'kritovoulos-1467', 'sphrantzes-chronicle'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The clean version of 1453 is that a great city fell to a great gun, and an era changed hands. The gun is the part everyone keeps, and it deserves keeping: this is the moment fortification lost its long argument with artillery, and every ruler in Europe who owned a castle understood within a decade that they now owned a liability.',
        'But the part worth carrying is the arithmetic. The walls did their job. They were being repaired every night by civilians and were still standing when the city fell. What ran out was people — and the reason there were no people was two hundred and fifty years of decline, a sack by allies, a church union bought and then repudiated, and promises of help from a Europe that always meant to send it next year.',
        'That is the shape of most falls. Not a single catastrophic blow but a long thinning, until something ordinary arrives and there is no longer enough of anything to absorb it. The catastrophe gets the date because the thinning has no date.',
        'And there is the matter of who names it. The people inside called their state Roman for eleven hundred years. We call it Byzantine, after a word coined by a scholar in 1557, which quietly files the whole thing as something other than the Roman Empire — as if the ending had already been agreed. It is worth remembering that they did not think they were the last of anything until the morning they were.',
      ],
      sourceIds: ['runciman-1965', 'philippides-hanak-2011'],
    },
  },

  timeline: [
    { year: 330, title: 'Constantine founds the city', detail: 'A new capital on the Bosphorus for the Roman Empire, positioned where Europe and Asia and two seas meet.' },
    { year: 413, title: 'The Theodosian Walls are finished', detail: 'Three lines and a moat across four miles of peninsula. Nothing gets through them from outside for eight hundred years.', pivotal: true },
    { year: 1204, title: 'The Fourth Crusade sacks the city', detail: 'A crusade aimed at Egypt takes Constantinople instead and plunders it for three days. The empire never recovers its wealth or its population.', pivotal: true },
    { year: 1261, title: 'A Greek emperor returns', detail: 'The city is retaken, but the state that comes back is a fragment — coastline, a capital and the Peloponnese.' },
    { year: 1439, title: 'The union of the churches is signed at Florence', detail: 'The emperor accepts papal authority in exchange for military help. The city rejects the deal and the help barely comes.', pivotal: true },
    { year: 1451, title: 'Mehmed II becomes sultan again', detail: 'Nineteen years old, underestimated by every European court, and immediately planning the siege his ancestors failed at.' },
    { year: 1452, title: 'The Throat-Cutter is built', detail: 'A fortress at the narrowest point of the Bosphorus closes the strait, and ships that decline to stop are sunk.' },
    { year: 1452, title: 'Orban casts the great bombard', detail: 'Turned away by the emperor for lack of money, the gunfounder builds an eight-metre cannon for the sultan instead.', pivotal: true },
    { year: 1453, date: '1453-04-06', title: 'The siege begins', detail: 'Around seven thousand defenders on twenty kilometres of wall, against an army several times larger with the largest guns yet built.' },
    { year: 1453, date: '1453-04-20', title: 'Four ships break through', detail: 'Three Genoese vessels and an imperial grain ship fight through the whole Ottoman fleet into the harbour, in sight of both armies.' },
    { year: 1453, date: '1453-04-22', title: 'The fleet crosses the hill', detail: 'Some seventy ships are hauled overland on greased timbers into the Golden Horn, bypassing the chain and stretching the defence.', pivotal: true },
    { year: 1453, date: '1453-05-29', title: 'The city falls', detail: 'A three-wave assault before dawn; Giustiniani is wounded and carried out; the defence of the breach collapses. The last emperor dies in the fighting.', pivotal: true },
    { year: 1453, title: 'Hagia Sophia becomes a mosque', detail: 'Mehmed rides to the church the same afternoon and orders the change. He takes the title Caesar of Rome.' },
    { year: 1478, title: 'The city is bigger than before the siege', detail: 'A survey shows a repopulated capital of Greeks, Turks, Armenians and Jews, moved in by invitation and by force.' },
  ],

  causeEffect: [
    { cause: 'The Fourth Crusade sacks Constantinople in 1204', effect: 'The empire never recovers economically', because: 'Its trade revenue passed permanently to Venice and Genoa, and a state without revenue cannot buy soldiers or ships.' },
    { cause: 'The emperor cannot pay Orban', effect: 'The gun is built for the sultan instead', because: 'Artillery of that scale was a capital project, and only one of the two sides had a working treasury.' },
    { cause: 'Mehmed builds a fortress on the Bosphorus', effect: 'The city is cut off from Black Sea grain', because: 'Constantinople had always been fed by ships from the north, and a strait closed by cannon is a strait closed.' },
    { cause: 'The union of the churches is signed at Florence', effect: 'The city divides against itself and gets little help anyway', because: 'The price demanded was religious submission, which cost the emperor his own population without buying an army.' },
    { cause: 'Seventy ships are moved overland into the Golden Horn', effect: 'The defenders must man the harbour walls too', because: 'A garrison with no reserve is defeated by being made to cover more ground, not by being outfought.' },
    { cause: 'Giustiniani is wounded and carried out through the inner gate', effect: 'The defence of the breach collapses', because: 'Exhausted men who see their commander leave through a gate behind them read it as the end, and they were right.' },
    { cause: 'Cannon make high stone walls indefensible', effect: 'European fortification is redesigned within a century', because: 'Low, thick, angled earthworks absorb a cannonball where a tall stone curtain concentrates its effect.' },
  ],

  myths: [
    {
      myth: 'The fall of Constantinople caused the Renaissance, by sending Greek scholars west.',
      reality: 'Greek scholars and manuscripts had been moving to Italy for decades before 1453 — Manuel Chrysoloras was teaching Greek in Florence in 1397, and Bessarion’s library was assembled by a man who had come west for the Council of Florence in 1438. The fall added to a flow already running. It did not start it.',
      whyItPersists: 'It is a clean causal story with a date attached, and dates are easier to teach than fifty years of gradual migration.',
      sourceIds: ['runciman-1965', 'philippides-hanak-2011'],
    },
    {
      myth: 'The Ottomans closed the trade routes to Asia, which forced Europe to look for a sea route and led to 1492.',
      reality: 'The Ottomans wanted the customs revenue and kept the trade running; Venetian and Genoese commerce with the Levant continued after 1453. The Portuguese had been working down the African coast since the 1420s, before the city fell. The search for sea routes had its own long causes.',
      whyItPersists: 'It links two famous dates neatly, and neat links survive longer than accurate ones.',
      sourceIds: ['crowley-2005', 'philippides-hanak-2011'],
    },
    {
      myth: 'The city fell because someone left the Kerkoporta gate open — a single act of carelessness or treachery.',
      reality: 'The postern story appears in some sources and not others, and where it appears the details differ. Even where it is accepted, it happened alongside Giustiniani’s wounding at a moment when a wall held by exhausted men was already being assaulted by fresh Janissaries. A single unbarred gate is not why a city with one defender per three metres fell.',
      whyItPersists: 'A small human error is a more satisfying cause than an unfixable shortage of soldiers, and it gives the story a hinge.',
      sourceIds: ['philippides-hanak-2011', 'runciman-1965'],
    },
    {
      myth: 'They were Byzantines, and the Byzantine Empire is a different thing from the Roman Empire.',
      reality: 'The state called itself Roman, its people called themselves Romans, and its law, titles and self-understanding descended unbroken from Rome. "Byzantine" was coined by the German scholar Hieronymus Wolf in 1557, a century after the state ended.',
      whyItPersists: 'The label is useful shorthand and now unavoidable, but it quietly encodes the judgement that the eastern empire was a successor rather than a continuation.',
      sourceIds: ['runciman-1965'],
    },
  ],

  disagreements: [
    {
      question: 'How large was the Ottoman army?',
      positions: [
        { view: 'Very large — the eyewitness and near-contemporary accounts give figures from 150,000 to over 400,000, including camp followers.', heldBy: 'Barbaro and several other contemporary accounts', sourceId: 'barbaro-1453' },
        { view: 'Perhaps 50,000 to 80,000 fighting men, of whom a minority were regulars. The larger numbers are rhetorical, as ancient and medieval army figures usually are.', heldBy: 'Runciman, Philippides and Hanak, and the modern consensus', sourceId: 'philippides-hanak-2011' },
      ],
      atlasPosition: 'The atlas uses the modern range and does not repeat the contemporary totals as counts. The ratio that mattered — several attackers for every defender — holds under every estimate.',
    },
    {
      question: 'Did Mehmed cut the three-day sack short?',
      positions: [
        { view: 'Yes, and quickly, because he wanted a functioning capital rather than a ruin — the Greek historian writing under his patronage says so.', heldBy: 'Kritovoulos, and accounts following him', sourceId: 'kritovoulos-1467' },
        { view: 'The plunder was severe and lasted longer than the sultan’s admirers admit; the eyewitness accounts from inside describe systematic looting and mass enslavement.', heldBy: 'Barbaro and other Latin eyewitnesses', sourceId: 'barbaro-1453' },
      ],
      atlasPosition: 'The atlas says the sack was real and severe, that Mehmed had a strong interest in stopping it, and that the sources closest to him are the ones most confident he did. It does not state a number of days as settled.',
    },
    {
      question: 'Was the city’s fall inevitable by 1453?',
      positions: [
        { view: 'Effectively yes. With fifty thousand inhabitants, no revenue, no field army and an encircling empire, the city was a strategic anomaly waiting for a sultan willing to spend the money.', heldBy: 'The mainstream modern reading', sourceId: 'runciman-1965' },
        { view: 'Not on the day. The defence had held for seven weeks and was winning individual exchanges; a serious western relief fleet, or a different hour on 29 May, could have ended the siege as previous ones ended.', heldBy: 'Roger Crowley and others who emphasise the contingency of the final morning', sourceId: 'crowley-2005' },
      ],
      atlasPosition: 'The atlas holds both: the long decline made the fall overwhelmingly likely, and the particular morning was still close. Neither reading excuses the other from the evidence.',
    },
  ],

  didYouKnow: [
    'The man who built the great cannon offered it to the defenders first. They could not afford him.',
    'Every night the civilians of the city, women included, rebuilt the wall the guns had knocked down that day — with earth and barrels, which absorbed shot better than stone.',
    'Mehmed had about seventy ships hauled overland on greased timbers, over a hill, into a harbour closed by a chain.',
    'The emperor’s secretary counted under five thousand Greeks able to fight, and was ordered to keep the figure secret.',
    'Nobody in the city called it the Byzantine Empire. That name was invented in 1557, a century after it ended.',
    'Constantine XI is said to have taken off his imperial insignia before going into the breach, so as not to be recognised. His body was never identified.',
    'The Genoese colony across the harbour stayed neutral, traded with both sides during the siege, and surrendered the day after the city fell.',
    'An Ottoman bombard of the same family, cast in 1464, was still in service on the Dardanelles and fired on a British squadron in 1807.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Constantinople was the capital of the eastern Roman Empire, protected since 413 by the strongest fortifications in Europe. It was sacked by the Fourth Crusade in 1204 and never economically recovered; by 1453 it held around fifty thousand people inside walls built for half a million, surrounded on all sides by the Ottoman Empire.',
        'In 1451 Mehmed II became sultan at nineteen and set out to take it. He hired a gunfounder, Orban, who had offered the same cannon to the emperor first and been turned down for lack of money, and built artillery larger than anything then in existence.',
        'The siege ran from 6 April to 29 May 1453. About seven thousand defenders held twenty kilometres of wall, repairing the breaches every night. Mehmed hauled seventy ships overland into the Golden Horn to stretch them further. The final assault came in three waves before dawn; the Genoese commander Giustiniani was wounded and carried out, the defence of the breach collapsed, and the last emperor died in the fighting.',
        'Mehmed made the city his capital and took the title Caesar of Rome. High stone walls stopped being a defence anywhere in Europe, and the eleven-hundred-year Roman state ended on a Tuesday morning.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'There was a city with the best walls in the world. Three walls, one behind another, with a big ditch in front. For a thousand years armies came, threw themselves at it, and went home.',
        'But the city had got small and poor. It had walls for a huge city and only enough people for a little one — about seven thousand men to guard a wall you would need a whole day to walk around.',
        'A young sultan wanted the city. He hired a man who could make an enormous cannon — so big it needed sixty oxen to pull it — and pointed it at the walls. Every day it knocked holes. Every night the people of the city, including the women and children, went out and filled the holes back in with earth and barrels.',
        'They held out for fifty-three days. Then the sultan attacked with everything at once, in the dark, and the man in charge of the defence was badly hurt and carried away. The soldiers saw him go, and it fell apart.',
        'Here is the real reason it fell: not the cannon. There simply were not enough people left to stand on the walls, and nobody came to help.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The source base is unusually rich and unusually treacherous. Barbaro’s *Giornale* is a dated eyewitness diary from a Venetian ship’s surgeon and is invaluable for chronology, but it is also Venetian and hostile to Genoa, which shapes its treatment of Giustiniani. Sphrantzes is the senior Byzantine insider, writing from exile and grief. Kritovoulos wrote under Ottoman patronage and is systematically favourable to Mehmed, which makes him the best witness to the sultan’s intentions and the worst to his conduct. Philippides and Hanak (2011) is the necessary modern survey of what each text can and cannot bear.',
        'The military-technical question — whether 1453 marks the decisive supersession of vertical masonry by gunpowder artillery — should be handled carefully. The bombards ground the Mesoteichion down over seven weeks without producing an unrepairable breach, and the nightly stockade-building demonstrates that earth-and-timber revetment already worked against shot. What 1453 demonstrates is less that guns beat walls than that guns changed the cost curve of a siege, which is precisely the insight the trace italienne encodes.',
        'On causation, the historiography has moved decisively away from 1453 as a rupture and towards 1204 as the structural break. The economic subordination of the empire to the Italian maritime republics, the fiscal collapse, and the demographic contraction all predate Mehmed by generations. The ecclesiastical politics of 1439 belong to the same story: the union was an attempt to convert doctrinal capital into military aid at a point when no other capital remained.',
        'Finally, the reception history is itself a subject — the Third Rome ideology in Muscovy, the Ottoman claim to Roman succession expressed in Kayser-i Rûm, and the nineteenth-century Greek Megali Idea all take 1453 as a founding wound or founding right, which is a reason to be careful about treating the date as a neutral periodisation marker.',
      ],
    },
    {
      id: 'the-arithmetic',
      label: 'One man every three metres',
      kind: 'angle',
      paragraphs: [
        'Forget the cannon for a moment and do the sum the emperor’s secretary did.',
        'Twenty kilometres of wall, land and sea. Under seven thousand men who could carry a weapon, and that figure counts the seven hundred Genoese who arrived in January and the sailors pulled off the ships in the harbour. That is roughly one defender every three metres, standing all day and all night, with nobody behind them to take a turn.',
        'Now read Mehmed’s decisions again. The fortress on the Bosphorus: cuts the grain, so fewer men can be fed. The ships over the hill into the Golden Horn: adds several kilometres of wall that must now be manned from the same seven thousand. The feints along the sea walls at night: forces the reserve — there is no reserve — to move. The two hours of irregulars before the real assault: uses up the defenders’ arrows and their sleep.',
        'None of that is aimed at masonry. All of it is aimed at the ratio. The great gun is the famous part, but the siege was won by an accountant’s logic: make the scarce thing scarcer, and keep doing it until there is not enough of it in the one place that matters.',
      ],
    },
    {
      id: 'the-long-fall',
      label: 'The two hundred and fifty year fall',
      kind: 'contrast',
      paragraphs: [
        'A city can fall in a morning. An empire takes longer, and this one had been falling since 1204.',
        '**1204.** A crusade financed by Venice takes and sacks the city. The relics, the bronze horses and the treasury go west. The trade — the customs revenue that had paid for everything — passes to the Italian republics and never comes back.',
        '**1261 to 1400.** A Greek emperor returns to a capital he cannot afford. Territory is lost steadily in Anatolia and the Balkans. Emperors travel personally to Italy, France and England to ask for help, and one is briefly detained in Venice over a debt.',
        '**1439.** The union of the churches is signed. It is the last asset the empire has: its own religious independence, sold for an army. The population repudiates the sale, and the army does not arrive.',
        '**1453.** Fifty-three days.',
        'The gun is the thing everyone remembers, and it is genuinely the technological hinge. But the reason seven thousand men were holding those walls is spread across two and a half centuries, and every one of the decisions that got them there was taken by someone who thought they had more time.',
      ],
    },
  ],

  beforeAfter: {
    label: 'The city, before and after',
    before: {
      title: 'On 28 May 1453',
      points: [
        'A Roman emperor, in unbroken succession from Augustus',
        'Hagia Sophia a church, as it had been for 916 years',
        'Around fifty thousand people in a shrinking capital',
        'The high stone wall as the standard of defence in Europe',
        'The Ottoman Empire split around a foreign enclave',
      ],
    },
    after: {
      title: 'By 30 May 1453',
      points: [
        'No Roman emperor anywhere, and never again',
        'Hagia Sophia a mosque, by order given the same afternoon',
        'A capital being deliberately repopulated from across the empire',
        'Fortification redesigned within a century around low angled earthworks',
        'One continuous Ottoman state from the Danube to Anatolia',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the western relief fleet had arrived?',
      reasoning: 'A papal squadron was assembling in the Aegean and a Venetian fleet was authorised. The four ships that broke through on 20 April showed that a determined Christian force could beat the Ottoman navy in the Bosphorus. A relief force in early May, landing men and supplies, might have made the ratio survivable and forced Mehmed — whose own court contained a faction urging him to abandon the siege — to withdraw.',
      constraint: 'It is speculation, and the reason the fleet was late is not an accident of weather but the same fifty-year pattern: western help was always conditional, always slow and always smaller than promised. Even a successful relief postpones rather than reverses; the city still had no revenue, no army and no hinterland, and Mehmed was twenty-one.',
    },
    {
      question: 'What if the emperor had been able to pay Orban?',
      reasoning: 'The gunfounder went to Constantinople first. Had the city bought his services, the largest artillery in the world would have been mounted on the walls rather than aimed at them, and Ottoman siege lines are far more vulnerable to bombardment than a stone curtain is.',
      constraint: 'The empire could not pay him because it had no money, and having no money is the whole condition being described — this is a counterfactual that requires undoing 1204. Orban was also not unique; Ottoman founders were already casting large guns, and Mehmed had the resources to commission them from someone else.',
    },
  ],

  quiz: [
    {
      question: 'Who did Orban, the cannon founder, offer his gun to first?',
      options: [
        'Sultan Mehmed II',
        'The Byzantine emperor Constantine XI',
        'The Republic of Venice',
        'The Pope',
      ],
      answerIndex: 1,
      explains: 'He went to Constantinople first. The emperor could not pay what he asked, so he took the offer to the sultan, who paid four times the price.',
    },
    {
      question: 'What did Mehmed do on 22 April 1453?',
      options: [
        'Broke the chain across the harbour with cannon',
        'Hauled about seventy ships overland into the Golden Horn',
        'Mined under the walls and blew a breach',
        'Offered the emperor terms',
      ],
      answerIndex: 1,
      explains: 'A road of greased timbers was laid over the hill behind Galata, and the ships were dragged over it into the harbour — which stretched a defence that had no reserve.',
    },
    {
      question: 'What was the defenders’ fundamental problem?',
      options: [
        'The walls were old and crumbling',
        'They had no food at all',
        'About seven thousand men had to hold twenty kilometres of wall',
        'Their weapons were obsolete',
      ],
      answerIndex: 2,
      explains: 'The walls held for fifty-three days and were rebuilt nightly. What ran out was people: roughly one defender every three metres, with no reserve and no relief.',
    },
    {
      question: 'What is wrong with saying the fall of Constantinople caused the Renaissance?',
      options: [
        'The Renaissance had already ended by 1453',
        'Greek scholars and manuscripts had been moving west for decades already',
        'No Greek scholars left the city',
        'Italy had no interest in Greek texts',
      ],
      answerIndex: 1,
      explains: 'Chrysoloras was teaching Greek in Florence in 1397, and the Council of Florence brought Greek scholars and books west in 1438. The fall added to a flow that was already running.',
    },
  ],

  sources: [
    {
      id: 'barbaro-1453',
      kind: 'primary',
      author: 'Nicolò Barbaro',
      title: 'Giornale dell’assedio di Costantinopoli',
      year: 1453,
      detail: 'Diary kept during the siege; ed. E. Cornet, Vienna 1856; trans. J. R. Jones as "Diary of the Siege of Constantinople 1453"',
      note: 'A Venetian ship’s surgeon inside the city, writing day by day. The best chronology we have, and openly hostile to the Genoese — read the dates, weigh the blame.',
    },
    {
      id: 'sphrantzes-chronicle',
      kind: 'primary',
      author: 'George Sphrantzes',
      title: 'Chronicon Minus',
      year: 1477,
      detail: 'Trans. Marios Philippides as "The Fall of the Byzantine Empire: A Chronicle by George Sphrantzes 1401–1477"',
      note: 'The emperor’s own secretary, who counted the garrison and was told to keep the number quiet. A memoir written by a man who lost his family in the aftermath.',
    },
    {
      id: 'kritovoulos-1467',
      kind: 'primary',
      author: 'Kritovoulos of Imbros',
      title: 'History of Mehmed the Conqueror',
      year: 1467,
      detail: 'Trans. Charles T. Riggs, Princeton University Press, 1954',
      note: 'A Greek writing for the sultan. Systematically favourable to Mehmed, which makes him the best source on Ottoman intentions and the weakest on Ottoman conduct.',
    },
    {
      id: 'runciman-1965',
      kind: 'book',
      author: 'Steven Runciman',
      title: 'The Fall of Constantinople 1453',
      year: 1965,
      detail: 'Cambridge University Press. ISBN 978-0-521-39832-9',
      note: 'The standard narrative in English for two generations, and still the clearest account of the diplomacy and the church union behind the siege.',
    },
    {
      id: 'crowley-2005',
      kind: 'book',
      author: 'Roger Crowley',
      title: 'Constantinople: The Last Great Siege, 1453',
      year: 2005,
      detail: 'Faber & Faber; published in the US as "1453". ISBN 978-0-571-22185-1',
      note: 'The narrative history of the siege itself, strongest on the artillery, the harbour and the day-by-day fighting.',
    },
    {
      id: 'philippides-hanak-2011',
      kind: 'book',
      author: 'Marios Philippides and Walter K. Hanak',
      title: 'The Siege and the Fall of Constantinople in 1453: Historiography, Topography and Military Studies',
      year: 2011,
      detail: 'Ashgate. ISBN 978-1-4094-1064-5',
      note: 'The scholarly apparatus: which sources are eyewitness, which are later, which numbers can be supported, and which famous details cannot.',
    },
  ],
}
