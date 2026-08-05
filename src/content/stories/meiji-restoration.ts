import type { Story } from '../types'

/**
 * Voice: Marius Jansen's register — magisterial, patient with continuities,
 * and resistant to the "miracle" framing. Tokugawa Japan was not a blank page,
 * the emperor did not seize anything, and the transformation was carried out by
 * a small group of men who abolished their own class on purpose.
 */
export const meijiRestoration: Story = {
  slug: 'meiji-restoration',
  title: 'Forty Years to Undo Eleven Pages',
  subtitle: 'Japan, 1853–1911 — four ships arrived, a treaty was signed at gunpoint, and a country rebuilt itself around getting that treaty cancelled.',
  hook: 'Four American warships forced Japan open in 1853. The men who took power fifteen years later spent the rest of their lives on a single objective: making the country impossible to do that to again.',
  era: 'industrial',
  category: 'eras',
  years: [1853, 1912],
  regions: ['Japan', 'United States', 'Britain'],
  nodes: ['meiji-restoration', 'tokugawa-shogunate', 'perry-expedition', 'samurai', 'charter-oath'],
  tags: ['modernisation', 'empire', 'reform', 'asia', 'treaties', 'legend'],
  readingMinutes: 11,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'Four American warships arrived in 1853 and forced a country open in a week.' },
    { beat: 'hook', text: 'Forty years later that country had a navy that could beat a European empire.' },
    { beat: 'worldBefore', kicker: '1603–1853', text: 'Japan has had two and a half centuries of peace under a military government,' },
    { beat: 'worldBefore', text: 'with foreign contact narrowed to a few licensed channels — Dutch traders on one island.' },
    { beat: 'worldBefore', punch: true, text: 'Not sealed. Filtered. And the filter is the point: the shogun decides what gets in.' },
    { beat: 'problem', kicker: '1842', text: 'Then the reports come through from Nagasaki about what happened to China,' },
    { beat: 'problem', text: 'and Edo reads them correctly. This is what refusing costs now.' },
    { beat: 'problem', punch: true, text: 'They soften the rules on foreign ships eleven years before anyone arrives.' },
    { beat: 'story', kicker: 'July 1853', text: 'Perry brings four ships into Edo Bay, two of them steamers,' },
    { beat: 'story', text: 'which move against the wind and the current, which nothing in Japan can do.' },
    { beat: 'story', text: 'He delivers a letter, says he will return for the answer, and leaves.' },
    { beat: 'story', punch: true, mark: 'gate', text: 'He comes back with more ships. The treaty is signed.' },
    { beat: 'story', text: 'Then a second treaty: fixed tariffs, and foreigners tried in their own courts.' },
    { beat: 'story', punch: true, text: 'The government exists to keep foreigners out, and has just proved it cannot.' },
    { beat: 'story', kicker: '1863', text: 'Two great domains try expelling the barbarians by force, and are shelled flat.' },
    { beat: 'story', punch: true, mark: 'reversal', text: 'So they invert the slogan. If you cannot expel them, become them.' },
    { beat: 'story', kicker: '1868', text: 'A short civil war, and a fifteen-year-old emperor is restored to power he does not hold.' },
    { beat: 'whyItHappened', text: 'What follows is the strangest part. The men now running Japan are samurai,' },
    { beat: 'whyItHappened', text: 'and within eight years they abolish the samurai — stipends, swords, the lot.' },
    { beat: 'whyItHappened', punch: true, text: 'They dissolve their own class because a conscript army beats a warrior caste.' },
    { beat: 'whyItHappened', text: 'Half the cabinet leaves the country for twenty-two months to study how others do it.' },
    { beat: 'whyItHappened', mark: 'chain', text: 'Railways, telegraph, banks, a constitution, compulsory school, a modern navy.' },
    { beat: 'consequences', kicker: '1899', text: 'The foreign courts go. In 1911 Japan sets its own tariffs again.' },
    { beat: 'consequences', punch: true, text: 'Forty-three years of national effort to cancel two treaties. That was always the point.' },
    { beat: 'whyItMatters', text: 'And then Japan takes Taiwan, and Korea, and does it to somebody else.' },
    { beat: 'whyItMatters', punch: true, text: 'The tools that stop you being a colony are the same tools for making one.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'From 1603 Japan was governed by the Tokugawa shogunate: a military government under a hereditary shogun, with the emperor in Kyoto as a sacred figure who reigned and did not rule. It delivered two and a half centuries without a serious war, which is a remarkable record for any state anywhere.',
        'It also restricted foreign contact, from the 1630s, to a small number of controlled channels — Dutch traders confined to the artificial island of Dejima in Nagasaki harbour, Chinese merchants in the same city, Korean embassies through Tsushima, and trade with the Ryukyus and the Ainu at the edges. Christianity was banned, Japanese subjects were forbidden to leave, and ocean-going ships were not built.',
        'The word usually attached to this is *sakoku*, the closed country, and it is misleading. Japan was not sealed; it was filtered, deliberately, with the shogunate controlling what came in. Dutch books were imported and studied — an entire scholarly field, *rangaku* or Dutch learning, grew up around Western medicine, astronomy and gunnery. Annual reports from the Dutch on world affairs went to the government.',
        'And the society behind the filter was not backward. Tokugawa Japan had high literacy by any pre-industrial standard, with thousands of village schools; a sophisticated commercial economy with rice futures traded at Osaka; a dense urban network including Edo, probably the largest city on earth; and proto-industrial production in textiles and metalwork. This matters, because it is why what came later was possible so fast.',
        'What it did not have was a modern military, a national government capable of taxing directly, or any recent experience of being threatened.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'By the early nineteenth century something like forty per cent of Japanese boys and perhaps fifteen per cent of girls received some formal schooling — comparable with, and in places ahead of, contemporary Europe. A country that can already read is a country that can be retrained.',
        sourceId: 'jansen-2000',
      },
      sourceIds: ['jansen-2000', 'gordon-2003'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'The shogunate learned what was coming before it arrived, and from a good source.',
        'The Dutch at Nagasaki submitted annual intelligence reports, and in the early 1840s those reports described the Opium War: a Chinese empire that had refused Western trade demands, been comprehensively defeated by a small British force, and forced to sign a treaty ceding territory, opening ports and paying an indemnity. Edo read this correctly and immediately. In 1842 the shogunate quietly revoked its 1825 order to fire on any foreign ship approaching the coast, replacing it with an instruction to supply them with water and fuel and send them away politely.',
        'That is eleven years before Perry. The government understood the situation precisely: it could not win a war against a Western power, refusing outright had just been demonstrated to be catastrophic, and it had no good options.',
        'The problem was that the entire legitimacy of the shogunate rested on its ability to defend the realm. The shogun’s formal title meant something close to "barbarian-subduing generalissimo". A military government that cannot repel a military threat has a very specific difficulty, and everybody in Japan could see it.',
        'So when the ships did arrive, the crisis was not really about foreign policy. It was about who had the right to rule.',
      ],
      sourceIds: ['jansen-2000', 'beasley-1972'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'On 8 July 1853, Commodore Matthew Perry brought four United States warships into Edo Bay and refused to move to Nagasaki, where foreigners were supposed to go. Two of his ships were steam-powered, and they manoeuvred into the bay against wind and current — a capability nothing in Japan possessed and everyone watching understood. He delivered a letter from the President demanding a treaty, said he would return the following year for the answer, and left.',
        'He returned in February 1854 with nine ships. The Convention of Kanagawa was signed on 31 March: two ports opened, shipwrecked sailors protected, an American consul admitted. Four years later the consul, Townsend Harris, negotiated the treaty that actually mattered — trade at fixed low tariffs Japan could not alter, and extraterritoriality, meaning foreigners accused of crimes in Japan would be tried by their own consuls under their own law. Britain, France, Russia and the Netherlands obtained the same terms within months.',
        'These are the unequal treaties, and they are the same instrument used on China after the Opium Wars. Everything that follows in this story is about getting rid of them.',
        'The domestic result was fifteen years of political crisis. A movement crystallised around the slogan *sonnō jōi* — revere the emperor, expel the barbarians — which was in practice a way of saying that the shogun had failed and the emperor’s authority should be invoked against him. Foreigners were attacked. The court in Kyoto, ignored for centuries, became the centre of national politics.',
        'Then two of the great western domains tried the second half of the slogan literally. Satsuma killed a British merchant in 1862 and had Kagoshima bombarded by the Royal Navy in reply. Chōshū fired on foreign shipping in the Shimonoseki Strait and, in 1864, had its shore batteries destroyed by a combined British, French, Dutch and American squadron.',
        'Both domains drew the same conclusion from being shelled, and it is the hinge of the entire story: the barbarians could not be expelled, so the only way to be safe from them was to acquire what made them strong. The men who had led the anti-foreign movement became the most determined modernisers in Japan, and they had learned it the hard way, in person.',
        'Satsuma and Chōshū allied in 1866, defeated the shogunate in a short civil war, and on 3 January 1868 proclaimed the restoration of direct imperial rule. The emperor was fifteen. Real power lay with a group of mid-ranking samurai from the victorious domains, most of them in their thirties.',
        'In April 1868 they issued the Charter Oath — five brief articles promising deliberative assemblies, an end to the old class restrictions on occupation, the abandonment of "evil customs of the past", and, in the fifth article, that knowledge should be sought throughout the world in order to strengthen the foundations of imperial rule. That last line was not rhetoric. It was a programme, and they executed it.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'The fifth article of the Charter Oath of April 1868 states that knowledge shall be sought throughout the world, so as to strengthen the foundations of imperial rule. Three years later, half the senior government left Japan for twenty-two months to inspect the institutions of the United States and Europe at first hand. The document meant exactly what it said.',
        sourceId: 'charter-oath-1868',
      },
      sourceIds: ['perry-narrative-1856', 'kanagawa-1854', 'charter-oath-1868', 'beasley-1972'],
    },

    whyItHappened: {
      heading: 'Why it worked',
      paragraphs: [
        'Plenty of states in the nineteenth century tried to modernise under Western pressure. Almost none succeeded on this scale. The reasons are specific and mostly unglamorous.',
        '**They knew exactly what they were buying.** The objective was never modernity in the abstract; it was treaty revision. Extraterritoriality was justified on the grounds that Japanese law was uncivilised, so Japan wrote civil and criminal codes on European models. Tariff autonomy required being taken seriously as a state, so Japan built the apparatus of one. Each reform had an argument attached, and the argument was: this is what it takes to get the treaties cancelled.',
        '**They abolished their own class.** This is the part that has no real parallel. The men running the country were samurai. Between 1871 and 1876 they abolished the domains, ended the samurai monopoly on arms, introduced conscription of commoners, commuted hereditary stipends into one-off bonds, and banned the wearing of swords. They dismantled the privileges of roughly two million people including themselves, because a conscript army with rifles beats a warrior caste and they had watched the demonstration.',
        '**They went and looked.** The Iwakura Mission of 1871–73 took roughly fifty senior officials — including half the effective cabinet — out of the country for twenty-two months to study American and European government, industry, law and education directly. No other state facing this problem sent its own leadership away for nearly two years to take notes.',
        '**They started with real foundations.** Tokugawa Japan already had widespread literacy, a monetised commercial economy, a merchant class, and a tradition of Dutch learning that had kept a channel open to Western science for two centuries. The Meiji government did not build a modern state on a blank page; it rebuilt a functioning one on new principles.',
        '**And they hired ruthlessly and temporarily.** Thousands of foreign experts — the *oyatoi* — were brought in at enormous salaries to build railways, teach medicine and draft codes, and then systematically replaced by Japanese who had trained under them. The point was never to import expertise permanently. It was to acquire it and then stop paying for it.',
        'It also cost. Land tax reform in 1873 put the burden squarely on farmers, and there were hundreds of peasant protests. Discontented samurai rebelled repeatedly, culminating in the Satsuma Rebellion of 1877, in which Saigō Takamori — one of the architects of the Restoration — died leading his own class against the government he had helped create. The conscript army defeated him, which settled the argument permanently.',
      ],
      sourceIds: ['jansen-2000', 'iwakura-1878', 'gordon-2003'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'A country reorganised itself from top to bottom in roughly one generation, and then used what it had built.',
      ],
      shortTerm: [
        'The domains were abolished in 1871 and replaced with prefectures under central government — three hundred years of decentralised rule undone in a stroke.',
        'Conscription was introduced in 1873, compulsory elementary education in 1872, and a modern land tax in 1873 which for the first time gave the state a predictable national revenue.',
        'Samurai stipends were commuted to government bonds in 1876, and the wearing of swords was banned the same year. The class ceased to exist as a legal category.',
        'The Satsuma Rebellion of 1877 was the last stand of the old warrior order, and a peasant conscript army beat it.',
        'Railways opened between Tokyo and Yokohama in 1872, the telegraph followed, and state model factories — the Tomioka silk mill among them — were built and later sold to private owners.',
      ],
      longTerm: [
        'A constitution was promulgated in 1889 on a Prussian model, and the first Diet met in 1890 — the first functioning national parliament in Asia.',
        'Extraterritoriality was abolished by the 1894 treaty with Britain and took effect in 1899. Full tariff autonomy was recovered in 1911. The programme took forty-three years and it worked.',
        'Japan defeated China in 1894–95 and Russia in 1904–05, the second being the first defeat of a European great power by an Asian state in the modern era, and it reverberated across every colonised country in the world.',
        'It also acquired an empire: Taiwan in 1895, southern Sakhalin in 1905, Korea annexed in 1910 — imposing on its neighbours the instruments that had been imposed on it.',
        'The institutional settlement of 1889, in which the military reported to the emperor rather than to the cabinet, became one of the structural causes of the 1930s. The strengths and the catastrophe came out of the same design.',
      ],
      unexpected: [
        'The men who shouted "expel the barbarians" became the men who imported the barbarians’ railways, law codes and navy. Being shelled changed their minds, and they said so.',
        'Half the senior government left the country for nearly two years in 1871 to study abroad, at a moment of acute domestic instability. It is difficult to imagine any modern state doing this.',
        'Japan issued government bonds to buy out the samurai class — effectively purchasing the dissolution of the aristocracy, with the aristocrats voting for it.',
        'Emperor Meiji was fifteen at the Restoration and had no independent power for years. The revolution carried out in his name was run by men in their thirties.',
        'The first modern Japanese warships were built in British yards, and the fleet that destroyed the Russian navy at Tsushima in 1905 was substantially British-built — bought with the tax revenue of a country that had been forced open fifty years earlier.',
      ],
      sourceIds: ['gordon-2003', 'jansen-2000'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'This is the clearest case in modern history of a state looking at what was happening to its neighbours, correctly identifying what would happen to it, and reorganising itself deliberately to prevent it. The Opium Wars are the control group: China faced the same pressure first, and the atlas tells that story elsewhere. What separates the two outcomes is not the pressure but the response.',
        'The mechanism worth taking away is that the Meiji leaders treated modernisation as instrumental rather than aspirational. They were not trying to become Western. They had a defined objective — cancel the unequal treaties — and they worked backwards from it, adopting what served that end and discarding what did not. Legal codes because extraterritoriality was justified by legal difference. Industry because a navy needs an economy. Conscription because a warrior class cannot fight a modern war. Every reform had a reason you could state in one sentence.',
        'The second thing is the price they were willing to pay, and who paid it. A ruling class abolished itself, which is nearly unique. Farmers paid for the whole programme through a land tax that took no account of harvests. Saigō Takamori, one of the men who made the Restoration, died fighting it eight years later, and the government that killed him later put up his statue.',
        'And the third is the part that resists a comfortable ending. Within thirty years of escaping the unequal treaties, Japan was imposing equivalent arrangements on Korea, and by 1910 had annexed it outright. The tools that make a country impossible to colonise — a modern army, an industrial base, a state that can tax and conscript and mobilise — are precisely the tools for colonising somebody else. Nothing in the toolkit tells you which to do with it.',
        'That is not an argument against what Japan did in 1868. It is a reason to be careful about the moral we draw from it. The Meiji Restoration is a story about capability, and capability is not a direction.',
      ],
      sourceIds: ['jansen-2000', 'gordon-2003'],
    },
  },

  timeline: [
    { year: 1603, title: 'The Tokugawa shogunate is established', detail: 'A military government under a hereditary shogun begins two and a half centuries without serious war, with the emperor a sacred figure in Kyoto.' },
    { year: 1639, title: 'Foreign contact is narrowed', detail: 'Christianity banned, Japanese forbidden to leave, and foreign trade reduced to controlled channels — the Dutch confined to one island in Nagasaki harbour.', pivotal: true },
    { year: 1842, title: 'The Opium War report reaches Edo', detail: 'Dutch intelligence describes China’s defeat. The shogunate revokes its order to fire on foreign ships, eleven years before any American arrives.', pivotal: true },
    { year: 1853, date: '1853-07-08', title: 'Perry enters Edo Bay', detail: 'Four American warships, two of them steamers moving against wind and current. He delivers a demand for a treaty and says he will return for the answer.', pivotal: true },
    { year: 1854, date: '1854-03-31', title: 'The Convention of Kanagawa', detail: 'Perry returns with nine ships. Two ports open, shipwrecked sailors are protected, and an American consul is admitted.', pivotal: true },
    { year: 1858, title: 'The Harris Treaty', detail: 'Trade at tariffs Japan cannot set, and foreigners tried in their own consular courts. Britain, France, Russia and the Netherlands get identical terms.', pivotal: true },
    { year: 1863, title: 'Kagoshima and Shimonoseki', detail: 'Satsuma and Chōshū try expelling the foreigners by force and are shelled by Western squadrons. Both conclude that the barbarians cannot be expelled.', pivotal: true },
    { year: 1868, date: '1868-01-03', title: 'The Restoration is proclaimed', detail: 'After a short civil war, direct imperial rule is declared. The emperor is fifteen; power lies with mid-ranking samurai from the victorious domains.', pivotal: true },
    { year: 1868, date: '1868-04-06', title: 'The Charter Oath', detail: 'Five articles, ending with the promise that knowledge shall be sought throughout the world to strengthen imperial rule. It is a programme, not a flourish.', pivotal: true },
    { year: 1871, title: 'The domains are abolished, and the Iwakura Mission departs', detail: 'Three centuries of decentralised rule end in a stroke, and roughly fifty senior officials leave for twenty-two months to study the West at first hand.', pivotal: true },
    { year: 1876, title: 'The samurai are abolished', detail: 'Hereditary stipends are commuted to bonds and the wearing of swords is banned. The government dissolves the class every one of its members belongs to.', pivotal: true },
    { year: 1877, title: 'The Satsuma Rebellion', detail: 'Saigō Takamori, an architect of the Restoration, leads the last samurai revolt and is defeated by a peasant conscript army.' },
    { year: 1889, title: 'The Meiji Constitution', detail: 'A Prussian-model constitution is promulgated and the first Diet meets in 1890 — with the military reporting to the emperor rather than the cabinet.' },
    { year: 1899, title: 'Extraterritoriality ends', detail: 'The 1894 treaty with Britain takes effect and foreign consular courts close. Full tariff autonomy follows in 1911, forty-three years after the Restoration.', pivotal: true },
    { year: 1910, title: 'Korea is annexed', detail: 'Having escaped the unequal treaties, Japan imposes equivalent arrangements on its neighbours and then takes the country outright.', pivotal: true },
  ],

  causeEffect: [
    { cause: 'Britain defeats China in the Opium War', effect: 'Japan changes its coastal defence policy in 1842', because: 'Dutch reports gave Edo an accurate account of what refusing Western demands now cost, eleven years before it was tested.' },
    { cause: 'Two of Perry’s four ships are steamers', effect: 'The demonstration cannot be argued with', because: 'Ships that move into a bay against wind and current show that the technological gap is not a matter of degree.' },
    { cause: 'The shogunate signs treaties it cannot refuse', effect: 'Its legitimacy collapses', because: 'A military government whose entire claim to rule is defence of the realm has nothing left when it demonstrably cannot defend it.' },
    { cause: 'Satsuma and Chōshū are shelled in 1863–64', effect: 'The anti-foreign movement becomes the modernising movement', because: 'Having tried expulsion and been destroyed, the same men concluded that acquiring Western capability was the only route to safety.' },
    { cause: 'The unequal treaties are justified by Japanese legal difference', effect: 'Japan writes European-style legal codes', because: 'If the stated reason for extraterritoriality is that your law is uncivilised, removing that reason is the direct route to removing the clause.' },
    { cause: 'A conscript army with rifles beats a warrior caste', effect: 'The samurai class is abolished by samurai', because: 'The men in government had personally watched Western firepower work, and hereditary swordsmen were now an expensive irrelevance.' },
    { cause: 'The land tax of 1873 falls on farmers regardless of harvest', effect: 'The state gains predictable revenue and the countryside pays for it', because: 'Industrialisation needs steady income, and the only sector large enough to supply it was agriculture.' },
    { cause: 'Japan acquires a modern army, navy and industrial base', effect: 'It builds an empire in Taiwan and Korea', because: 'The capability that makes a state impossible to colonise is the same capability required to colonise somewhere else.' },
  ],

  myths: [
    {
      myth: 'Japan was a sealed, isolated country that knew nothing of the outside world.',
      reality: '*Sakoku* was a filter, not a wall. Dutch traders operated at Nagasaki throughout, Chinese merchants traded there, Korean embassies came through Tsushima, and an entire scholarly discipline — Dutch learning — studied Western medicine, astronomy and gunnery. The shogunate received annual intelligence reports on world affairs and learned about the Opium War promptly.',
      whyItPersists: '"Closed country" is a real contemporary term and a memorable image, and Perry’s own account was written to present him as opening a hermit kingdom.',
      sourceIds: ['jansen-2000', 'perry-narrative-1856'],
    },
    {
      myth: 'Japan modernised from nothing in a single generation.',
      reality: 'It industrialised extraordinarily fast, but not from nothing. Tokugawa Japan had high literacy, thousands of village schools, a monetised commercial economy with a futures market in rice, dense cities, and existing proto-industry. Meiji reform rebuilt a functioning society on new principles rather than creating one.',
      whyItPersists: 'The speed is genuinely astonishing, and both Japanese national narrative and Western observers had reasons to describe it as a miracle rather than as a well-prepared society moving fast.',
      sourceIds: ['jansen-2000', 'gordon-2003'],
    },
    {
      myth: 'The Emperor Meiji seized power and led the transformation.',
      reality: 'He was fifteen at the Restoration and had no independent authority for years. The revolution was carried out in his name by a small group of mid-ranking samurai from Satsuma and Chōshū, most in their thirties. Imperial authority was the instrument, not the agent.',
      whyItPersists: 'It was in the interests of the new government for the emperor to appear to be ruling, and that presentation was official policy for eighty years.',
      sourceIds: ['beasley-1972', 'jansen-2000'],
    },
    {
      myth: 'The samurai were destroyed by outsiders.',
      reality: 'They were abolished by their own class. Every senior figure in the Meiji government was a samurai, and between 1871 and 1876 they ended the domains, introduced commoner conscription, commuted hereditary stipends into bonds and banned the sword. When Saigō Takamori led the last samurai revolt in 1877, he was defeated by an army of conscripted peasants.',
      whyItPersists: 'The last-samurai narrative is far more romantic than a group of officials deciding their own privileges were a strategic liability and voting them away.',
      sourceIds: ['jansen-2000', 'gordon-2003'],
    },
  ],

  disagreements: [
    {
      question: 'Was the Restoration a revolution or a coup by one faction of the elite?',
      positions: [
        { view: 'A revolution in effect: it abolished the domains, the class system and the samurai, remade landholding, law, education and the military, and transformed the basis of the state within a decade.', heldBy: 'Marius Jansen and the transformational reading', sourceId: 'jansen-2000' },
        { view: 'In form a seizure of power by samurai from two western domains, using imperial authority as legitimation. The social revolution followed from their strategic calculations rather than from any popular movement.', heldBy: 'W. G. Beasley’s political analysis', sourceId: 'beasley-1972' },
      ],
      atlasPosition: 'The atlas describes it as a coup by a faction that then carried out a revolution, because both descriptions fit the evidence at different stages and neither alone explains what happened.',
    },
    {
      question: 'How much did the Tokugawa inheritance explain the speed of change?',
      positions: [
        { view: 'A great deal. Literacy, commercial networks, urban density, proto-industry and Dutch learning meant the Meiji state was rebuilding rather than building, which is why it moved so fast.', heldBy: 'The continuity reading in recent scholarship', sourceId: 'gordon-2003' },
        { view: 'Less than that. The decisive factors were political — the collapse of the shogunate, the concentration of power in a small determined group, and the willingness to break institutions including their own.', heldBy: 'Accounts emphasising the Restoration as rupture', sourceId: 'beasley-1972' },
      ],
      atlasPosition: 'The atlas gives weight to both: the foundations made the speed possible, and the political rupture made the decisions possible. It rejects the framing of Meiji Japan as a society starting from nothing.',
    },
  ],

  didYouKnow: [
    'Japan learned about China’s defeat in the Opium War from Dutch reports and changed its coastal defence policy in 1842 — eleven years before Perry arrived.',
    'Two of Perry’s four ships were steamers. Moving into Edo Bay against the wind was the part of the demonstration that mattered.',
    'The slogan of the movement that overthrew the shogunate was "revere the emperor, expel the barbarians". Its leaders became Japan’s most determined importers of Western technology.',
    'In 1871 roughly fifty senior officials, including half the effective cabinet, left Japan for twenty-two months to study Western institutions in person.',
    'The samurai class was abolished by a government composed entirely of samurai, who bought out their own hereditary stipends with government bonds.',
    'Saigō Takamori helped make the Restoration in 1868 and died leading a revolt against it in 1877. The government later erected a statue of him in Tokyo.',
    'Emperor Meiji was fifteen when power was "restored" to him, and the men actually running the country were mostly in their thirties.',
    'Extraterritoriality ended in 1899 and tariff autonomy was recovered in 1911 — forty-three years of national effort to cancel two treaties.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Japan had been governed since 1603 by a military shogunate that limited foreign contact to a few controlled channels. It was not ignorant of the world: Dutch traders at Nagasaki supplied annual reports, and news of China’s defeat in the Opium War caused the shogunate to soften its coastal defence policy in 1842.',
        'In July 1853 Commodore Perry brought four American warships into Edo Bay, two of them steamers. The Convention of Kanagawa followed in 1854, and the Harris Treaty of 1858 imposed fixed tariffs and extraterritoriality — the same unequal terms used on China.',
        'A military government that cannot repel a military threat loses its reason to exist. A movement to "revere the emperor and expel the barbarians" grew, and when two great domains tried expulsion literally and were shelled by Western squadrons in 1863–64, they inverted the slogan: acquire what makes them strong. They overthrew the shogunate in 1868 and restored a fifteen-year-old emperor to nominal power.',
        'The samurai who now governed abolished the domains, introduced conscription, ended their own class, sent half the cabinet abroad for twenty-two months, and built railways, schools, industry, legal codes, a constitution and a navy. Extraterritoriality ended in 1899 and tariff autonomy in 1911 — the entire objective. Japan then used the same capabilities to take Taiwan and Korea.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'For about two hundred and fifty years, Japan let only a very few foreigners in, and kept a close eye on all of them. It was peaceful and it worked.',
        'But Japan was watching the news. And the news from China was terrible: Britain had turned up with warships, beaten China badly, and made it sign a horrible agreement. Japan realised the same thing was probably coming for them.',
        'In 1853 four American warships sailed into the bay near Tokyo. Two of them were steam ships, which meant they could go wherever they liked even against the wind — and no ship in Japan could do that. The Americans handed over a letter demanding a trade deal and said they would be back for an answer.',
        'Japan had to sign. And the deal was unfair: foreigners who committed crimes in Japan got tried by their own countries’ judges, and Japan was not allowed to decide its own import taxes.',
        'Some Japanese warriors decided to throw the foreigners out by force. They tried it. Western warships flattened their forts. So they changed their minds completely and said: fine — if we cannot beat them, we will learn everything they know.',
        'And they did. They took over the government, built railways and factories and schools and a modern navy, and even got rid of the warrior class they themselves belonged to, because modern armies do not work that way. Forty-three years later, they finally got those unfair agreements cancelled.',
        'And then, sadly, Japan did to Korea and Taiwan almost exactly what it had been so frightened of having done to itself.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The historiography has moved decisively from rupture towards continuity. The older framing — a feudal, isolated society transformed by external shock — has given way to accounts emphasising Tokugawa foundations: commercialisation and proto-industrialisation, a monetised rural economy, literacy rates at or above contemporary European levels, and the *rangaku* channel maintaining engagement with Western science. Meiji reform is thus better read as a redirection of existing capacity than as construction from a low base, which also explains its implausible speed.',
        'On causation, Beasley’s political analysis remains foundational: the *bakumatsu* crisis is best understood as a legitimation crisis, in which the treaties destroyed the shogunate’s claim to the *taisei* by demonstrating its inability to discharge the defensive function on which that claim rested. The *sonnō jōi* movement functions less as a coherent ideology than as a vocabulary for asserting court authority against the bakufu, which is why its adherents could abandon *jōi* entirely after 1864 without ideological embarrassment.',
        'The treaty-revision objective deserves more centrality than general accounts give it. The sequencing of reform tracks the diplomatic requirements closely: the Boissonade and later German-influenced codes respond directly to the extraterritoriality justification; the 1889 constitution and 1890 Diet supply the constitutional-state criterion; the 1894 Aoki-Kimberley treaty and its 1899 implementation, followed by tariff recovery in 1911, close the programme. Reading Meiji policy as generalised Westernisation misses the instrumentality.',
        'The dissolution of the samurai estate is the strongest case in modern history of an elite dismantling its own legal privileges, and the mechanism deserves attention: the *chitsuroku shobun* commuted stipends into interest-bearing bonds, converting a fiscal liability of roughly a third of government expenditure into a manageable debt while creating a rentier stratum that partly capitalised early banking. Coercion and compensation ran together, and the Satsuma Rebellion marks the limit of what compensation could absorb.',
        'Finally, the continuity between defensive modernisation and imperial expansion should not be treated as a moral epilogue but as an analytic problem. The 1889 settlement’s provision for military command reporting directly to the throne, the strategic logic of the "line of advantage" articulated by Yamagata, and the acquisition of Taiwan and Korea all follow from the same state-building project. Any account that treats Japanese imperialism as a departure from Meiji purposes has to explain why the institutions were built the way they were.',
      ],
    },
    {
      id: 'the-objective',
      label: 'Working backwards from a treaty',
      kind: 'angle',
      paragraphs: [
        'The Meiji reforms look like a general programme of Westernisation. They were not. They were a list of prerequisites for one specific outcome, and each item can be traced to an argument the foreign powers were making.',
        '**They said: your legal system is not civilised, so our citizens cannot be tried in it.** Japan commissioned European legal experts, wrote a criminal code, a civil code and a commercial code, and reorganised its courts. That is the direct answer to the stated justification for extraterritoriality.',
        '**They said: you are not a constitutional state.** Japan promulgated a constitution in 1889 and opened a national parliament in 1890 — the first in Asia. Whatever else it was for, it removed an argument.',
        '**They said, implicitly: you cannot enforce anything.** So Japan built an army on the Prussian model, a navy substantially in British yards, a railway network, a telegraph system, a national land tax and compulsory schooling. A state that can tax, conscript, move and communicate is a state that other states negotiate with.',
        '**And the timetable proves the intent.** The revised treaty with Britain was signed in 1894 and took effect in 1899, ending consular jurisdiction. Tariff autonomy came back in 1911. Then the intensity of the reform programme drops noticeably, because the objective had been reached.',
        'Forty-three years, an abolished aristocracy, a heavy tax on farmers and a civil war — to cancel two documents. It is one of the most sustained pieces of goal-directed statecraft on record, and the goal was always legible.',
      ],
    },
    {
      id: 'china-and-japan',
      label: 'The same pressure, two answers',
      kind: 'contrast',
      paragraphs: [
        'China and Japan met the same problem within about fifteen years of each other, and the atlas tells both stories. The comparison is the point.',
        '**China, from 1839.** A vast, confident empire with a sophisticated bureaucracy, defeated in two wars, forced into treaty ports, indemnities, extraterritoriality and fixed tariffs. Reform attempts — the Self-Strengthening Movement — bought ships and arsenals but could not reorganise the state around them, because the interests that would have had to be broken were the interests that ran the country.',
        '**Japan, from 1853.** A smaller, poorer, more decentralised country with a government that collapsed almost immediately under the same pressure. The collapse is the crucial difference: it produced a new ruling group with no stake in the old arrangements, drawn from domains that had been excluded from power for two hundred and fifty years, and therefore willing to abolish institutions that the previous regime could not have touched.',
        '**The uncomfortable reading** is that Japan’s advantage was partly that its old order failed fast. China’s imperial state was strong enough to survive the shock and too entangled to be rebuilt; it took until 1911 for the dynasty to fall, and by then the treaty system had been in place for seventy years.',
        'Both countries produced a modern state in the end. One did it in forty years and got the treaties cancelled; the other took a century and called the intervening period the Century of Humiliation. The difference was not intelligence, or culture, or willingness. It was mostly about which institutions had to be destroyed first, and whether anyone was in a position to destroy them.',
      ],
    },
  ],

  beforeAfter: {
    label: 'Japan, before and after',
    before: {
      title: 'In 1853',
      points: [
        'A shogun ruling through 260 semi-autonomous domains',
        'A hereditary warrior class of about two million on stipends',
        'Foreign contact filtered through Nagasaki and a few edges',
        'No national army, navy, currency or direct tax system',
        'Treaties imposed at gunpoint within a year',
      ],
    },
    after: {
      title: 'By 1911',
      points: [
        'A centralised state with prefectures and a national civil service',
        'A conscript army and a modern navy, and no samurai at all',
        'Embassies, a constitution, a parliament and a legal code',
        'Railways, telegraph, compulsory schooling and industry',
        'The unequal treaties cancelled, and an empire of its own',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the shogunate had survived and led the reforms itself?',
      reasoning: 'The Tokugawa government was already reforming in the 1860s — sending students abroad, buying warships, building an arsenal at Yokosuka with French help. A shogunate that modernised successfully would have produced a different Japan: more decentralised, with the domains and the samurai class intact, and quite possibly slower to abolish the arrangements that stood in the way.',
      constraint: 'That is exactly the problem, and it is why the counterfactual is doubtful. The Tokugawa could not abolish the domains, because the domains were the basis of its own authority, and it could not abolish the samurai, because the samurai were its constituency. China’s Self-Strengthening Movement is the closest real example of a state trying to modernise without breaking the interests that blocked it.',
    },
    {
      question: 'What if Japan had recovered tariff autonomy in the 1870s?',
      reasoning: 'Fixed low tariffs prevented Japan from protecting infant industries for four decades, and the delay is a standing complaint in the economic history. Early tariff autonomy might have accelerated industrialisation and shifted the balance from export silk towards heavy industry considerably sooner.',
      constraint: 'It is also possible that the constraint helped: unable to protect, Japan competed on cost and on absorbing foreign technique, and the fiscal pressure forced the land tax reform that gave the state its revenue base. The counterfactual removes both the disadvantage and the discipline, and there is no way to say which mattered more.',
    },
  ],

  quiz: [
    {
      question: 'How did Japan learn what was coming before Perry arrived?',
      options: [
        'Spies in Beijing',
        'Dutch reports at Nagasaki describing China’s defeat in the Opium War',
        'A British ambassador warned them',
        'It did not — Perry was a complete surprise',
      ],
      answerIndex: 1,
      explains: 'The Dutch at Nagasaki submitted annual intelligence reports. Edo learned of China’s defeat and revoked its order to fire on foreign ships in 1842, eleven years before Perry.',
    },
    {
      question: 'What did the movement to "expel the barbarians" become?',
      options: [
        'A successful campaign to close Japan again',
        'The most determined modernising movement in Japan',
        'A religious revival',
        'A peasant uprising',
      ],
      answerIndex: 1,
      explains: 'After Satsuma and Chōshū tried expulsion and had Kagoshima and Shimonoseki shelled in 1863–64, the same leaders concluded that acquiring Western capability was the only route to safety.',
    },
    {
      question: 'Who abolished the samurai class?',
      options: [
        'The Americans, as a treaty condition',
        'The shogun, before 1868',
        'The Meiji government, which was composed entirely of samurai',
        'A peasant revolution',
      ],
      answerIndex: 2,
      explains: 'Between 1871 and 1876 the samurai in government ended the domains, introduced commoner conscription, commuted hereditary stipends into bonds and banned the sword — dissolving their own class.',
    },
    {
      question: 'What was the central objective of the Meiji reforms?',
      options: [
        'Becoming culturally Western',
        'Conquering China',
        'Getting the unequal treaties cancelled',
        'Restoring real power to the emperor',
      ],
      answerIndex: 2,
      explains: 'Every major reform can be traced to a prerequisite for treaty revision. Extraterritoriality ended in 1899 and tariff autonomy was recovered in 1911 — forty-three years of work on one goal.',
    },
  ],

  sources: [
    {
      id: 'kanagawa-1854',
      kind: 'primary',
      author: 'The United States and the Tokugawa shogunate',
      title: 'The Convention of Kanagawa',
      year: 1854,
      detail: 'Signed 31 March 1854; text in the US Statutes at Large and in Japanese diplomatic collections',
      note: 'The first treaty. Modest on its face — two ports, shipwrecked sailors, a consul — and the opening that made the 1858 commercial treaty unavoidable.',
    },
    {
      id: 'perry-narrative-1856',
      kind: 'primary',
      author: 'Francis L. Hawks, from the notes of Matthew C. Perry',
      title: 'Narrative of the Expedition of an American Squadron to the China Seas and Japan',
      year: 1856,
      detail: 'Published by order of the US Congress, Washington, 1856, in three volumes',
      note: 'The official American account, and a document about how the expedition wished to be understood. Read for the intent as much as the events.',
    },
    {
      id: 'charter-oath-1868',
      kind: 'primary',
      author: 'The Meiji government',
      title: 'The Charter Oath (Gokajō no Goseimon)',
      year: 1868,
      detail: 'Promulgated 6 April 1868; standard translation in "Sources of Japanese Tradition", Columbia University Press',
      note: 'Five articles, one page. The fifth — seek knowledge throughout the world — turns out to describe the next forty years of policy accurately.',
    },
    {
      id: 'iwakura-1878',
      kind: 'primary',
      author: 'Kume Kunitake',
      title: 'Beiō kairan jikki (A True Account of the Ambassador Extraordinary’s Journey through America and Europe)',
      year: 1878,
      detail: 'Five volumes, Tokyo, 1878; trans. as "The Iwakura Embassy 1871–1873", Japan Documents, 2002',
      note: 'The official record of the twenty-two-month study mission, written by its secretary. What half the Japanese government thought when it looked at the West directly.',
    },
    {
      id: 'beasley-1972',
      kind: 'book',
      author: 'W. G. Beasley',
      title: 'The Meiji Restoration',
      year: 1972,
      detail: 'Stanford University Press. ISBN 978-0-8047-0815-0',
      note: 'The standard political analysis of how the shogunate fell and who replaced it. Strongest on the legitimation crisis and the domain politics.',
    },
    {
      id: 'jansen-2000',
      kind: 'book',
      author: 'Marius B. Jansen',
      title: 'The Making of Modern Japan',
      year: 2000,
      detail: 'Harvard University Press. ISBN 978-0-674-00334-7',
      note: 'The magisterial survey from Tokugawa to the twentieth century, and the source of this story’s insistence on continuity over miracle.',
    },
    {
      id: 'gordon-2003',
      kind: 'book',
      author: 'Andrew Gordon',
      title: 'A Modern History of Japan: From Tokugawa Times to the Present',
      year: 2003,
      detail: 'Oxford University Press. ISBN 978-0-19-511060-7',
      note: 'Particularly good on who paid for the transformation — the land tax, the rural protests, and the social cost of the reforms.',
    },
  ],
}
