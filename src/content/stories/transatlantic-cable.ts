import type { Story } from '../types'

/**
 * Voice: Tom Standage's register in *The Victorian Internet* — wry, alert to
 * how completely the Victorians already had this argument, and never smug about
 * it. The joke and the point are the same joke: they were not primitive, they
 * were us with worse insulation.
 */
export const transatlanticCable: Story = {
  slug: 'transatlantic-cable',
  title: 'Ten Days to Ten Minutes',
  subtitle: '1866 — for all of human history a message travelled at the speed of a ship. Then, over one summer, it stopped.',
  hook: 'For every year before 1866, news crossed the Atlantic at the speed of a boat. Then a retired paper merchant with no scientific training spent twelve years and four failures making it instant.',
  era: 'industrial',
  category: 'milestones',
  years: [1854, 1866],
  regions: ['United Kingdom', 'United States', 'Newfoundland', 'Ireland'],
  nodes: ['transatlantic-cable', 'telegraph', 'cyrus-field', 'great-eastern', 'william-thomson'],
  tags: ['technology', 'communication', 'business', 'science', 'empire', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'lapis',

  reel: [
    { beat: 'hook', punch: true, text: 'For all of human history, news travelled at the speed of the fastest horse or ship.' },
    { beat: 'hook', text: 'In one summer, that stopped being true, and never became true again.' },
    { beat: 'worldBefore', kicker: '1850s', text: 'A question from London to New York and an answer back is three weeks —' },
    { beat: 'worldBefore', text: 'so a diplomat negotiates on instructions written before the crisis started,' },
    { beat: 'worldBefore', punch: true, text: 'and a merchant buys at a price that stopped being true ten days ago.' },
    { beat: 'problem', text: 'Wires already cross whole countries. The problem is three thousand kilometres of ocean' },
    { beat: 'problem', text: 'four kilometres deep, and nobody has ever laid anything down there.' },
    { beat: 'problem', kicker: '1854', text: 'Cyrus Field is a retired paper merchant who knows no physics whatsoever,' },
    { beat: 'problem', punch: true, text: 'which turns out not to be the qualification that matters.' },
    { beat: 'story', kicker: '1858', text: 'The first cable lands, both nations celebrate, the Queen wires the President —' },
    { beat: 'story', text: 'ninety-eight words, sixteen hours to send.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'Three weeks later it goes dead, and the newspapers decide it was a hoax.' },
    { beat: 'story', text: 'The electrician had been pushing two thousand volts into it to force a signal through.' },
    { beat: 'story', text: 'A Glasgow physicist had said the cable would blur, not weaken, and been overruled.' },
    { beat: 'story', kicker: '1865', text: 'Field raises money again, hires the biggest ship ever built —' },
    { beat: 'story', text: 'a commercial disaster that happens to be the only hull that can hold an ocean of cable.' },
    { beat: 'story', punch: true, text: 'Two thirds of the way across, the cable snaps and falls four kilometres into the dark.' },
    { beat: 'story', kicker: '27 July 1866', text: 'He does it again the next year. This time it lands.' },
    { beat: 'story', punch: true, mark: 'chain', text: 'Then the ship sails back, grapples up the cable it lost, and finishes that one too.' },
    { beat: 'whyItHappened', text: 'It worked because someone finally listened to the physicist,' },
    { beat: 'whyItHappened', text: 'who had shown that a long cable smears a pulse into a slur,' },
    { beat: 'whyItHappened', punch: true, text: 'so you do not shout louder. You build an instrument that can hear a whisper.' },
    { beat: 'consequences', text: 'Twenty pounds for twenty words, when a labourer might earn fifty in a year.' },
    { beat: 'consequences', text: 'Prices in London and New York converge within days. Cotton, wheat, gold.' },
    { beat: 'consequences', punch: true, text: 'And an empire discovers it can give an order to India before dinner.' },
    { beat: 'whyItMatters', text: 'People said it would end war, because nations that could talk would not fight.' },
    { beat: 'whyItMatters', text: 'They said that about the telegraph, and they said it again later, about other wires.' },
    { beat: 'whyItMatters', punch: true, text: 'The distance closed. Everything else it was supposed to fix did not.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'Until the middle of the nineteenth century, information moved at the speed of the thing carrying it. A letter from London reached New York when a ship did — ten to fourteen days with luck, longer against the weather — and an answer took as long again.',
        'That single fact shaped everything built on top of it. Ambassadors were given wide discretion because there was no way to ask. Financial markets on the two sides of the Atlantic priced the same commodity differently for weeks at a time, and fortunes were made by anyone who could shave a day off the crossing. The Battle of New Orleans was fought in January 1815, two weeks after the war it belonged to had been ended by a treaty nobody in Louisiana had heard about.',
        'The electric telegraph had already fixed this on land, and fixed it violently fast. From the late 1830s wires went up alongside railway lines — the railways needed them, to know where their trains were — and by the 1850s a message could cross Britain, or the United States, in minutes. Contemporaries understood exactly how large this was: newspapers called it the annihilation of space and time, and meant it.',
        'What remained was water. Short submarine cables worked: England to France in 1851, across the Irish Sea, the Mediterranean. The Atlantic was a different order of problem — around three thousand kilometres of it, over a seabed two to four kilometres down that had only just been roughly sounded, requiring a single continuous conductor longer than anything ever manufactured.',
        'Everyone agreed it would be worth an enormous amount of money. Most sober people thought it could not be done.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'Ten to fourteen days each way. That is the round-trip latency of the Atlantic in 1850 — call it three weeks for a question and an answer. After July 1866 it was a few minutes. No comparable jump in communication speed has happened before or since; everything later has been an improvement on "effectively instant".',
      },
      sourceIds: ['standage-1998', 'gordon-2002'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Cyrus West Field was an American businessman who had made a fortune in wholesale paper, retired at thirty-three, and was looking for something to do. He knew nothing about electricity and never really learned. What he had was an unreasonable capacity to raise money from people who had already lost money on the same idea.',
        'He took up the scheme in 1854 and spent the next twelve years on it. The engineering problems were genuine and largely unprecedented: how do you manufacture three thousand kilometres of copper conductor without a flaw? How do you insulate it against seawater at enormous pressure? How do you pay it out from a moving ship at exactly the right rate — too fast and you waste cable, too slow and it snaps under its own weight — with no way to stop and think?',
        'The insulation answer was gutta-percha, a latex from a Malayan tree that softens with heat and sets hard, and which happens to be an excellent electrical insulator and unaffected by seawater. It had been in use for a decade on shorter cables. It also degrades if you leave it in the sun, which will matter.',
        'The physics was worse, because at the outset almost nobody understood it. William Thomson — later Lord Kelvin — had worked out mathematically that a long submerged cable behaves like a capacitor: a sharp pulse sent in at one end arrives at the other smeared out into a slow rise and fall. The consequence is a limit on signalling speed, and a requirement for extremely sensitive detection at the receiving end. What it emphatically does not call for is more voltage.',
        'The company’s chief electrician, a former surgeon named Wildman Whitehouse, disagreed with Thomson in public and at length, and the company kept them both.',
      ],
      sourceIds: ['gordon-2002', 'thomson-1855', 'standage-1998'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'The first serious attempt, in 1857, broke the cable in deep water within days. The second, in 1858, involved two ships meeting in mid-Atlantic, splicing, and steaming in opposite directions; it failed three times before it worked on the fourth. On 5 August 1858 the ends came ashore at Valentia in Ireland and Trinity Bay in Newfoundland, and the two continents lost their minds.',
        'There were fireworks in New York — enough that City Hall caught fire — parades, sermons, commemorative medals, and pieces of leftover cable sold as souvenirs by a young man named Tiffany. Queen Victoria sent President Buchanan a message of ninety-eight words. It took about sixteen hours to transmit, which nobody mentioned at the parades.',
        'Whitehouse, unable to get a usable signal, did what his theory told him to do and applied induction coils generating something like two thousand volts. Within three weeks the cable was dead. Almost certainly it had already been damaged — badly stored in the sun, poorly manufactured, with insulation faults — but the enormous voltage finished it. The joint inquiry that followed in 1861 dissected both the manufacturing and the operating decisions, and Whitehouse’s reputation did not survive it. Neither, for a while, did public belief: a substantial number of people concluded the whole thing had been a stock fraud and no message had ever crossed at all.',
        'Field kept going. The American Civil War stopped everything for four years. When he came back in 1865, three things had changed. The cable was being made to a far better specification, with proper testing. Thomson’s reading of the physics had won, and his mirror galvanometer — a magnet with a tiny mirror, throwing a spot of light onto a scale, so a signal too faint to move a needle could be read as a moving dot on a wall — was the receiving instrument.',
        'And there was a ship. Isambard Kingdom Brunel’s *Great Eastern* was six times larger than any vessel afloat, had been a commercial catastrophe as a passenger liner, and was the only hull in existence capable of carrying the entire cable in one load. The 1865 expedition paid out two thirds of the Atlantic before the cable parted and vanished into four kilometres of water. They spent days grappling for it with hooks on a wire rope, brought it up twice, and lost it twice.',
        'They came back in 1866. This time it went perfectly — nearly boringly, which was the point — and on 27 July the cable came ashore at Heart’s Content, Newfoundland, and stayed working.',
        'Then the *Great Eastern* did the thing that turns a success story into a good one. She steamed back out to the position where the 1865 cable had been lost, spent two weeks dragging the seabed, found it, hooked it, raised it from four kilometres down, spliced it, and carried it the rest of the way to Newfoundland. By September 1866 there were two working cables across the Atlantic.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'The war correspondent W. H. Russell sailed on the Great Eastern and published an account of the 1865 voyage, illustrated by Robert Dudley — the fouled cable, the grapnel work, the men watching a wire disappear over the stern. It is the closest thing we have to a camera on the deck, and it was written to be sold to shareholders.',
        sourceId: 'russell-1865',
      },
      sourceIds: ['gordon-2002', 'russell-1865', 'standage-1998'],
    },

    whyItHappened: {
      heading: 'Why it finally worked',
      paragraphs: [
        'The 1866 cable succeeded for three reasons, and only one of them is heroic.',
        '**The physics was right this time.** Thomson had shown that the enemy is not attenuation but dispersion: the cable stores charge, so a clean pulse arrives as a slur, and pushing harder just smears it worse and eventually punctures the insulation. The correct response is to send gently and detect finely. His mirror galvanometer amplified mechanically what could not be amplified electrically — no vacuum tube existed for another fifty years — by hanging a mirror on the moving magnet and letting a long light beam do the magnifying.',
        '**The manufacturing was right this time.** The 1858 cable had been made in a hurry by two firms to different standards, stored badly, and tested inadequately. The 1865–66 cable was heavier, better insulated, continuously tested during manufacture and during laying, and — crucially — kept out of the sun. Most of the difference between failure and success is boring quality control, which is usually where most of the difference is.',
        '**And the ship existed.** This is almost an accident. The *Great Eastern* was built for a completely different purpose, failed at it, and happened to be the one object on earth that could hold 4,000 kilometres of cable and pay it out continuously. Splicing mid-ocean between two ships, as in 1858, introduces exactly the kind of failure the 1865 expedition proved could not be recovered from easily.',
        'The heroic part is Field, and it is worth being precise about what he actually did. He did not invent, design or calculate anything. He raised money, repeatedly, from investors who had watched him lose it — after a public failure, a public accusation of fraud, and a four-year war. That is the rarer skill, and the project needed it more than it needed another engineer.',
      ],
      sourceIds: ['thomson-1855', 'joint-committee-1861', 'gordon-2002'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'The cable did not make communication cheap. It made it instant, which is a different thing, and for twenty years those two came apart in interesting ways.',
      ],
      shortTerm: [
        'The initial tariff was £20 for twenty words — around five months’ wages for a labourer. This was not an accident: the capacity was tiny, so price was the rationing mechanism.',
        'Prices for cotton, wheat and gold in London and New York converged within days, because arbitrage now moved faster than the goods did.',
        'News agencies were transformed. Reuters and its rivals had been built on getting information a few hours early; now the advantage was measured in minutes, and the business reorganised around it.',
        'Diplomacy changed shape. An ambassador who could be asked stopped being a decision-maker and started being a channel, a shift diplomats complained about immediately and have complained about since.',
        'The rate fell steadily as more cables were laid, and by the 1880s the Atlantic carried several competing lines.',
      ],
      longTerm: [
        'Britain came to own or control the majority of the world’s submarine cable network — the "All Red Line" — which meant that in wartime it could read, delay or cut almost anyone’s traffic. It cut Germany’s Atlantic cables in the first days of August 1914.',
        'Global time discipline followed the wire. Coordinating instantaneous messages between places with different local noons made standard time zones necessary rather than merely tidy.',
        'Financial markets became continuous and international in a recognisably modern way, with the same asset priced against itself across an ocean in real time.',
        'The submarine cable remains the physical basis of intercontinental communication. Satellites carry a marginal fraction; almost all of the internet crosses oceans in armoured cables along much the same routes.',
        'A durable rhetorical habit was established: every new communication technology since has been announced as the thing that will end misunderstanding between nations.',
      ],
      unexpected: [
        'The *Great Eastern*, a total commercial failure at everything she was designed for, is remembered almost entirely for a job nobody imagined when she was built. She ended her life as a floating advertising hoarding for a Liverpool department store.',
        'The 1858 cable worked well enough to save money before it died: a message countermanding the redeployment of two British regiments from Canada is said to have saved the government some £50,000 — more than the annual dividend the company was hoping for.',
        'Field never made much from it. He was ruined years later in an unrelated railway speculation on Wall Street.',
        'The confident Victorian claim that instant communication would make war impossible was made about the telegraph, about the cable, about the telephone, about radio and about the aeroplane. It has now been made about roughly every communication technology in history, with a consistent record.',
      ],
      sourceIds: ['standage-1998', 'headrick-1991', 'gordon-2002'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'This is the largest single change in the speed of human communication that has ever happened, and it is the one nobody can repeat. Going from ten days to ten minutes is a factor of about a thousand. Everything since — telephone, radio, satellite, fibre — has been an improvement on "already effectively instant". We live on the far side of a discontinuity that occurred over one summer in 1866.',
        'It is also the clearest case of a pattern worth recognising. The people who understood the physics were right and were overruled by the people who understood authority; the failure that followed was blamed on the technology rather than on the decision; and the eventual success came from doing the boring things properly, at a cost nobody wanted to pay the first time. That sequence is not a Victorian curiosity. It is a description of most infrastructure failures since.',
        'And the cable is a good corrective to the idea that the connected world is new. The Victorians had the whole argument already — instant news, information overload, price shocks propagating in minutes, complaints about the death of considered correspondence, coded messages and cable fraud, and governments quietly reading everything that crossed their wires. They also had the optimism: nations that can talk to each other, everyone agreed, will not go to war. They wrote that in 1866, and in 1914 the first British action of the war was to cut Germany’s cables.',
        'The physical fact underneath is still true and still surprising. Almost everything that crosses an ocean electronically still travels down a cable on the seabed, along routes first chosen by men in the 1860s dragging a lead weight on a rope to find out how deep it was.',
      ],
      sourceIds: ['standage-1998', 'headrick-1991'],
    },
  },

  timeline: [
    { year: 1838, title: 'The electric telegraph goes commercial', detail: 'Wires follow the railways, because railways need to know where their trains are. Inside a country, a message becomes instant.' },
    { year: 1851, title: 'The first working submarine cable', detail: 'England to France, insulated with gutta-percha. Short crossings are shown to be possible, which is what starts people thinking about long ones.' },
    { year: 1854, title: 'Cyrus Field takes up the Atlantic', detail: 'A retired paper merchant with no scientific training decides to connect two continents, and begins twelve years of raising money.', pivotal: true },
    { year: 1855, title: 'Thomson publishes the theory', detail: 'He shows a long submerged cable smears a pulse rather than merely weakening it, which sets a speed limit and rules out brute force.', pivotal: true },
    { year: 1857, title: 'The first attempt breaks the cable', detail: 'It parts in deep water within days of leaving Ireland, and several hundred miles of cable are lost.' },
    { year: 1858, date: '1858-08-05', title: 'The cable lands, and both nations celebrate', detail: 'Queen Victoria wires President Buchanan ninety-eight words. It takes about sixteen hours to send. New York holds a parade.', pivotal: true },
    { year: 1858, date: '1858-09', title: 'The cable dies', detail: 'The chief electrician forces two thousand volts through an already-damaged line. Within three weeks it is silent, and the press cries fraud.', pivotal: true },
    { year: 1861, title: 'The joint inquiry reports', detail: 'A Board of Trade and company committee dissects the manufacture, storage and operation of the 1858 cable. It is the reason 1866 works.' },
    { year: 1865, title: 'The Great Eastern loses the cable', detail: 'Two thirds of the way across, it parts and falls four kilometres. They grapple for days, raise it twice, and lose it twice.' },
    { year: 1866, date: '1866-07-27', title: 'The cable lands at Heart’s Content', detail: 'A clean crossing with better cable and Thomson’s mirror galvanometer at the receiving end. This one stays working.', pivotal: true },
    { year: 1866, date: '1866-09-02', title: 'The lost cable is raised and finished', detail: 'The Great Eastern returns, drags the seabed for two weeks, hooks the 1865 cable from four kilometres down and completes it. Two lines now.', pivotal: true },
    { year: 1914, title: 'Britain cuts Germany’s cables', detail: 'In the first days of the war, the network Britain had spent fifty years owning is used as a weapon within hours.' },
  ],

  causeEffect: [
    { cause: 'Messages travel only as fast as ships', effect: 'Diplomats and merchants act on stale information', because: 'A three-week round trip means every instruction was written before the situation it is meant to address.' },
    { cause: 'Railways need to track their trains', effect: 'Telegraph wires spread along the tracks', because: 'The first customer for instant communication was a business that would crash trains without it.' },
    { cause: 'A long cable stores charge like a capacitor', effect: 'Signals arrive smeared rather than merely faint', because: 'The line charges and discharges, so a sharp pulse spreads out — which limits speed and cannot be fixed by shouting.' },
    { cause: 'Whitehouse applies two thousand volts', effect: 'The 1858 cable dies in three weeks', because: 'High voltage punctures insulation that is already damaged, and the wrong theory led straight to the wrong remedy.' },
    { cause: 'The 1858 failure is public and humiliating', effect: 'The 1866 cable is manufactured and tested properly', because: 'A failure that expensive is the only thing that reliably buys the budget for boring quality control.' },
    { cause: 'The Great Eastern fails as a passenger ship', effect: 'She is available as a cable layer', because: 'She was the only hull that could carry the whole Atlantic in one load, which removed the mid-ocean splice entirely.' },
    { cause: 'The cable opens in 1866', effect: 'London and New York prices converge within days', because: 'Arbitrage moves at the speed of information, and information now moved faster than any ship carrying goods.' },
    { cause: 'Britain owns most of the world’s cables', effect: 'It can cut its enemies off in hours', because: 'Whoever owns the physical route owns the traffic, which is as true of a seabed cable as of a road.' },
  ],

  myths: [
    {
      myth: 'The transatlantic cable was completed in 1858.',
      reality: 'A cable landed in August 1858 and carried traffic for about three weeks before dying. There were parades, medals and souvenirs first and a working link second, briefly. The permanent connection dates from 27 July 1866, after two more failures.',
      whyItPersists: 'The 1858 celebrations were enormous and well documented, and the failure was quieter than the party.',
      sourceIds: ['gordon-2002', 'joint-committee-1861'],
    },
    {
      myth: 'Cyrus Field was the inventor of the transatlantic cable.',
      reality: 'He invented nothing. He was a retired paper merchant who could not follow the physics, and his contribution was raising money for twelve years across four failures, a fraud accusation and a civil war. The science was Thomson’s, the manufacturing was the cable firms’, the ship was Brunel’s.',
      whyItPersists: 'Projects are remembered through single names, and the person who never stops asking for money is usually the one still standing at the end.',
      sourceIds: ['gordon-2002', 'standage-1998'],
    },
    {
      myth: 'The 1858 cable failed because the technology simply was not ready.',
      reality: 'It failed from a combination of poor manufacture, careless storage — some of it left in the sun, which degrades gutta-percha — inadequate testing, and then a chief electrician applying about two thousand volts on a mistaken theory. The 1861 inquiry documented all of it. The technology was marginal; the decisions were worse.',
      whyItPersists: '"Too early" absolves everyone, and blaming a machine is more comfortable than naming a committee.',
      sourceIds: ['joint-committee-1861', 'gordon-2002'],
    },
    {
      myth: 'Satellites replaced undersea cables.',
      reality: 'Almost all intercontinental data still travels through armoured cables on the seabed, often on routes first surveyed in the nineteenth century. Satellite links carry a small fraction and have far worse latency, because the signal has to go to orbit and back.',
      whyItPersists: 'Satellites are visible and futuristic; a cable in the mud is neither, and nobody makes a film about one.',
      sourceIds: ['headrick-1991'],
    },
  ],

  disagreements: [
    {
      question: 'What actually killed the 1858 cable?',
      positions: [
        { view: 'The operating decision. Whitehouse’s induction coils forced roughly two thousand volts into a line that should have been signalled gently, and punctured the insulation.', heldBy: 'The dominant reading, following the 1861 inquiry', sourceId: 'joint-committee-1861' },
        { view: 'The cable was already dying. Manufacturing faults, poor testing and long storage in the heat had degraded the gutta-percha before it ever went into the water; the voltage hastened an existing failure.', heldBy: 'Later technical assessments of the manufacturing record', sourceId: 'gordon-2002' },
      ],
      atlasPosition: 'The atlas says both, in that order: the cable was compromised before it was laid, and the high voltage finished it. It does not present Whitehouse as the sole cause, and it does not let the manufacturing off.',
    },
    {
      question: 'Was the cable a scientific achievement or a financial one?',
      positions: [
        { view: 'Scientific. The binding constraint was understanding cable physics and building an instrument sensitive enough to read a smeared signal — Thomson’s work is why 1866 succeeded where 1858 failed.', heldBy: 'The technical account', sourceId: 'thomson-1855' },
        { view: 'Financial and organisational. The physics was published in 1855 and ignored; what was actually scarce was the ability to keep raising capital through repeated public failure.', heldBy: 'John Steele Gordon and business histories of the project', sourceId: 'gordon-2002' },
      ],
      atlasPosition: 'The atlas treats these as the two halves of one answer. Thomson made the thing possible; Field made it happen anyway after it had been proved impossible twice. Neither would have delivered a cable alone.',
    },
  ],

  didYouKnow: [
    'Queen Victoria’s ninety-eight-word message to President Buchanan in 1858 took about sixteen hours to transmit.',
    'The 1858 celebrations in New York were so enthusiastic that the fireworks set City Hall on fire.',
    'Leftover cable was cut up and sold as souvenirs by Tiffany.',
    'When the cable died a few weeks later, a good number of people concluded the whole thing had been a stock-market fraud and no message had ever crossed.',
    'Thomson’s mirror galvanometer worked by hanging a tiny mirror on a magnet and bouncing a light beam across the room — mechanical amplification, fifty years before the vacuum tube.',
    'The Great Eastern was a commercial disaster as a passenger liner and is remembered almost entirely for a job nobody imagined when she was built.',
    'After landing the 1866 cable, the ship went back, dragged the seabed for two weeks, hooked the cable lost the previous year from four kilometres down, and finished it.',
    'The first British offensive act of the First World War was cutting Germany’s undersea cables, days into the conflict.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Before 1866, a message crossed the Atlantic at the speed of a ship: ten to fourteen days each way. The electric telegraph had already made messages instant within a country, but three thousand kilometres of deep ocean was a different problem.',
        'Cyrus Field, a retired American paper merchant with no scientific training, took it on in 1854. A cable landed in August 1858 to enormous celebration and died within three weeks, largely because the company’s chief electrician forced about two thousand volts through an already-damaged line, against the advice of the physicist William Thomson.',
        'Thomson had shown that a long submerged cable smears a signal rather than weakening it, so the answer is delicate detection rather than more power. His mirror galvanometer — a mirror on a magnet throwing a spot of light onto a scale — could read a signal far too faint to move a needle.',
        'After a failure in 1865, the Great Eastern, the only ship large enough to carry the whole cable, landed a working line at Heart’s Content, Newfoundland on 27 July 1866, then went back and recovered and completed the cable lost the year before. Round-trip communication went from three weeks to minutes — the largest jump in communication speed in history.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Imagine you want to ask someone a question, and they live across the ocean. You write a letter, and the letter goes on a boat, and the boat takes about two weeks. Then they answer, and that takes two weeks. So a question and an answer is a month.',
        'People had already worked out how to send messages down a wire really fast — that is a telegraph. But you cannot just drop a wire in the sea. The Atlantic is three thousand kilometres across and in places four kilometres deep.',
        'A man called Cyrus Field decided to do it anyway. He was not a scientist at all. He was just extremely good at persuading people to give him money, which he had to be, because the first try snapped, and the second try worked for three weeks and then died, and the third try snapped again.',
        'The reason the cable kept failing was partly that people were trying to push the message through harder, like shouting down a very long pipe. A scientist called William Thomson said that does not work: the message comes out blurry, not quiet. So instead he built a machine that could see a tiny wobble — a little mirror that made a dot of light move on the wall.',
        'On the fourth try, in 1866, it worked. Suddenly a message crossed the ocean in minutes instead of two weeks. And people said this would stop wars, because now everyone could talk. It did not.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The technical core is Thomson’s treatment of the submerged cable as a distributed RC line, published to the Royal Society in 1855: the diffusion of charge produces a received waveform whose rise time scales with the square of length, giving the "law of squares" and an absolute constraint on signalling rate. Whitehouse’s public rejection of this, and his empirical claim that induction coils could force adequate signalling, is the canonical case of practitioner authority overriding theory, and the 1861 Joint Committee report is the primary document for reconstructing it.',
        'The instrumentation matters as much as the theory. In the absence of any electronic amplification — the triode is 1906 — Thomson’s mirror galvanometer and later siphon recorder achieved mechanical and optical gain: torsional suspension of a magnet with an attached mirror, and a long optical lever converting microradian deflections into readable displacement. This is a good example of a constraint being routed around rather than solved.',
        'The political economy is treated best by Headrick: the cable network is the infrastructure of informal empire, and British dominance in manufacture, laying and ownership — driven by gutta-percha supply, Telcon’s position, and Admiralty survey capacity — translated directly into interception, censorship and denial capabilities exercised from 1914. The 1866 cable is thus a founding artefact of communications geopolitics, not merely of commerce.',
        'Finally, the historiographical caution: Standage’s framing of the telegraph as "the Victorian internet" is illuminating and can be overdrawn. The analogy holds strongly for social effects — information overload, fraud, encoding, romance, market integration — and weakly for architecture, since the telegraph was a point-to-point, operator-mediated, heavily rationed service, not a packet-switched network open to end users.',
      ],
    },
    {
      id: 'the-law-of-squares',
      label: 'Why shouting made it worse',
      kind: 'angle',
      paragraphs: [
        'The single most instructive thing about this story is a physics mistake, and it is worth understanding because it is not intuitive.',
        'Imagine sending a sharp click down a very long pipe. You expect it to arrive quieter. A long submarine cable does something different: it arrives *smeared*. The cable, surrounded by conductive seawater with a thin insulator between, behaves like a long chain of capacitors. Charge has to fill the line before the far end notices anything, and then has to drain out of it. A crisp dot goes in; a slow swell comes out.',
        'Two things follow. First, there is a speed limit — send dots faster than the line can charge and discharge, and they merge into each other. Thomson worked out that the delay scales with the square of the cable length, which is why a short Channel cable behaves nothing like an Atlantic one. Second, and this is the part Whitehouse got fatally wrong, the problem is not amplitude. Pushing more voltage in does not sharpen the pulse. It just stresses the insulation until it fails.',
        'The correct answer is the opposite of the instinctive one: signal gently, and build a receiver sensitive enough to see almost nothing. Thomson’s galvanometer detected deflections far too small to move a pointer by hanging a mirror on the magnet and bouncing a beam of light across the room — the light beam is a weightless lever several metres long.',
        'Every long-distance transmission system since has faced a version of this trade, and the temptation to solve it by turning up the power has been fatal to a great many of them.',
      ],
    },
    {
      id: 'the-victorian-internet',
      label: 'They had this argument first',
      kind: 'contrast',
      paragraphs: [
        'It is very easy to think of instant global communication as ours. Read the 1860s and 70s press and it is uncomfortably familiar.',
        '**Information overload.** Editors complained within a decade that the volume of incoming cable news was unmanageable and had degraded the quality of thought — that people now knew everything and understood nothing.',
        '**Compression and jargon.** At twenty pounds for twenty words, an entire industry of commercial codebooks appeared, mapping single words onto whole sentences. Cable operators developed abbreviations and a professional slang that outsiders could not read.',
        '**Fraud and security.** Cable-based stock manipulation began almost immediately, encryption became a commercial necessity, and governments read what crossed their territory as a matter of course.',
        '**Romance and community.** Operators who had never met courted each other in Morse along the wires; at least one wedding was conducted over a telegraph line.',
        '**And the great claim.** Instant communication between nations, said the sermons and the leader columns of 1858 and 1866, would make war impossible, because misunderstanding was the cause of war and this was the cure for misunderstanding.',
        'That claim has now been made about the telegraph, the cable, the telephone, radio, television, satellite and the internet. It has an unbroken record, and it is always sincere.',
      ],
    },
  ],

  beforeAfter: {
    label: 'The Atlantic, before and after',
    before: {
      title: 'Before July 1866',
      points: [
        'A question and an answer take about three weeks',
        'Ambassadors decide, because they cannot ask',
        'The same commodity has two prices for a fortnight',
        'News arrives as a bundle when a ship docks',
        'Distance is a real constraint on every institution',
      ],
    },
    after: {
      title: 'After July 1866',
      points: [
        'A question and an answer take minutes',
        'Ambassadors relay, because they can be asked',
        'Prices converge within days, then within hours',
        'News arrives continuously, and is rationed by cost',
        'Distance becomes a cost rather than a constraint',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if Whitehouse had been overruled in 1858?',
      reasoning: 'If Thomson’s instruments and method had been used on the first cable, it might have carried low-rate traffic for months or years rather than three weeks. A working link in 1858 would have put a permanent Atlantic connection nearly a decade earlier, before the American Civil War rather than after it.',
      constraint: 'The 1858 cable was probably compromised before it entered the water — badly manufactured, poorly tested and stored in the sun. Gentle signalling might have prolonged its life rather than saved it, and the deep-sea laying technique still had to be learned, which is what the 1865 failure taught.',
    },
    {
      question: 'What if the Atlantic cable had failed for another twenty years?',
      reasoning: 'Delay past the 1880s would have pushed instantaneous transatlantic communication into an era of much better materials and electrical understanding, and possibly into a period when American rather than British firms dominated cable manufacture — which would have changed who owned and could tap the global network in 1914.',
      constraint: 'This is speculation about ownership, not possibility. Demand was overwhelming and several groups were competing; someone would have laid a working cable within a few years regardless. The British position rested on gutta-percha supply and manufacturing capacity, neither of which a delay obviously removes.',
    },
  ],

  quiz: [
    {
      question: 'What was Cyrus Field’s actual contribution?',
      options: [
        'He invented the mirror galvanometer',
        'He calculated the physics of long cables',
        'He raised the money, repeatedly, through twelve years of failures',
        'He captained the Great Eastern',
      ],
      answerIndex: 2,
      explains: 'Field was a retired paper merchant who understood none of the science. His rare skill was persuading investors to fund a fourth attempt after three public failures and a fraud accusation.',
    },
    {
      question: 'Why did applying two thousand volts destroy the 1858 cable?',
      options: [
        'It melted the copper conductor',
        'A long cable smears the signal rather than weakening it, so more power only stresses the insulation',
        'It attracted lightning',
        'It reversed the polarity',
      ],
      answerIndex: 1,
      explains: 'Thomson had shown the cable behaves like a capacitor: pulses arrive smeared, not faint. Higher voltage does not sharpen them — it punctures insulation that was already damaged.',
    },
    {
      question: 'What did the Great Eastern do after landing the 1866 cable?',
      options: [
        'She was scrapped immediately',
        'She returned to Ireland with the news',
        'She went back, raised the cable lost in 1865 from four kilometres down, and finished it',
        'She laid a third cable to France',
      ],
      answerIndex: 2,
      explains: 'She dragged the seabed for about two weeks, hooked the lost 1865 cable, spliced it and carried it to Newfoundland — giving two working Atlantic cables by September 1866.',
    },
    {
      question: 'What still carries almost all intercontinental data today?',
      options: [
        'Satellites',
        'Undersea cables',
        'Long-range radio',
        'Microwave relay towers',
      ],
      answerIndex: 1,
      explains: 'Armoured cables on the seabed, often along routes surveyed in the nineteenth century. Satellite links carry a small fraction and have much worse latency.',
    },
  ],

  sources: [
    {
      id: 'thomson-1855',
      kind: 'paper',
      author: 'William Thomson (Lord Kelvin)',
      title: 'On the Theory of the Electric Telegraph',
      year: 1855,
      detail: 'Proceedings of the Royal Society of London, vol. 7, pp. 382–399',
      note: 'The physics that decided the project: a submerged cable spreads a pulse rather than merely weakening it, which sets a speed limit and rules out brute force.',
    },
    {
      id: 'joint-committee-1861',
      kind: 'primary',
      author: 'Board of Trade and the Atlantic Telegraph Company',
      title: 'Report of the Joint Committee appointed to inquire into the construction of submarine telegraph cables',
      year: 1861,
      detail: 'HMSO, London, 1861',
      note: 'The post-mortem on 1858: manufacture, storage, testing and the voltage question, examined in public. It is the reason the 1866 cable was built differently.',
    },
    {
      id: 'russell-1865',
      kind: 'primary',
      author: 'William Howard Russell, illustrated by Robert Dudley',
      title: 'The Atlantic Telegraph',
      year: 1865,
      detail: 'Day & Son, London; an account of the 1865 Great Eastern expedition',
      note: 'A war correspondent on the deck, commissioned to record the attempt. Eyewitness and promotional at once — read it for the scene, not the verdict.',
    },
    {
      id: 'standage-1998',
      kind: 'book',
      author: 'Tom Standage',
      title: 'The Victorian Internet',
      year: 1998,
      detail: 'Walker & Company. ISBN 978-0-8027-1342-4',
      note: 'The social history of the telegraph age: overload, codes, fraud, romance, and the recurring promise that this one will end war.',
    },
    {
      id: 'gordon-2002',
      kind: 'book',
      author: 'John Steele Gordon',
      title: 'A Thread Across the Ocean: The Heroic Story of the Transatlantic Cable',
      year: 2002,
      detail: 'Walker & Company. ISBN 978-0-8027-1364-6',
      note: 'The narrative of the four attempts, the financing and the personalities. Strongest on Field, and on how close the project came to ending after 1858.',
    },
    {
      id: 'headrick-1991',
      kind: 'book',
      author: 'Daniel R. Headrick',
      title: 'The Invisible Weapon: Telecommunications and International Politics 1851–1945',
      year: 1991,
      detail: 'Oxford University Press. ISBN 978-0-19-506273-9',
      note: 'What owning the cables meant: interception, censorship, and the 1914 cuts. The political half of a story usually told as engineering.',
    },
  ],
}
