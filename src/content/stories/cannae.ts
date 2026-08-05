import type { Story } from '../types'

/**
 * Voice: the register of John Keegan's *The Face of Battle* — a battle is not
 * arrows on a map, it is a very large number of people in a small field doing
 * something physically specific to each other, and the historian's job is to
 * say what that was actually like. Polybius supplies the causes; Daly supplies
 * the crush.
 */
export const cannae: Story = {
  slug: 'cannae',
  title: 'The Bag',
  subtitle: 'Cannae, 216 BC — Hannibal fought the most perfect battle in history, and it did not win him the war.',
  hook: 'Hannibal built his line so that the strongest part of the Roman army would win — and by winning, walk into a bag that took six hours to close.',
  era: 'classical',
  category: 'battles',
  years: [-218, -201],
  regions: ['Italy', 'North Africa', 'Spain'],
  nodes: ['battle-of-cannae', 'hannibal', 'roman-republic', 'carthage', 'second-punic-war'],
  tags: ['war', 'rome', 'carthage', 'strategy', 'tactics', 'legend'],
  readingMinutes: 11,
  reviewed: '2026-08-05',
  mood: 'ember',

  reel: [
    { beat: 'hook', punch: true, text: 'Around fifty thousand men were killed in one afternoon, by hand, in a field.' },
    { beat: 'hook', text: 'It is still the deadliest single day any European army has ever had.' },
    { beat: 'worldBefore', kicker: '218 BC', text: 'Hannibal has come over the Alps with an army Rome did not believe could arrive,' },
    { beat: 'worldBefore', text: 'and beaten it twice already — at a freezing river, then in fog beside a lake —' },
    { beat: 'worldBefore', punch: true, text: 'so Rome does the Roman thing, and builds a bigger army.' },
    { beat: 'problem', kicker: '216 BC', text: 'Eight legions. Around eighty thousand men, the largest force the Republic has ever fielded,' },
    { beat: 'problem', text: 'against fifty thousand tired professionals a long way from home,' },
    { beat: 'problem', punch: true, text: 'which is precisely the shape Hannibal has been waiting for.' },
    { beat: 'story', text: 'He puts his weakest troops, the Gauls and Spaniards, in the centre,' },
    { beat: 'story', text: 'pushed forward into a bulge so the legions meet them first,' },
    { beat: 'story', text: 'and his African veterans wait, silent, on both wings.' },
    { beat: 'story', kicker: 'Morning', text: 'The legions push. The bulge bends back the way a rope stretches,' },
    { beat: 'story', text: 'and the Romans follow it in, because this is exactly what winning looks like.' },
    { beat: 'story', punch: true, mark: 'reversal', text: 'The line does not break. It inverts.' },
    { beat: 'story', text: 'Now there is African infantry on both shoulders,' },
    { beat: 'story', text: 'and the Carthaginian horse, done with the Roman cavalry, arrives behind.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'The bag closes.' },
    { beat: 'whyItHappened', text: 'What happens next is not a battle, and every man there knows it.' },
    { beat: 'whyItHappened', text: 'Pressed shoulder to shoulder you cannot lift a shield, or fall down,' },
    { beat: 'whyItHappened', text: 'or run, because there is nowhere left to run to.' },
    { beat: 'whyItHappened', punch: true, text: 'Rome’s own size is the weapon that kills it.' },
    { beat: 'consequences', kicker: 'Evening', text: 'A consul is dead, and eighty senators, and something near a fifth' },
    { beat: 'consequences', text: 'of the Republic’s fighting-age men, in a single afternoon.' },
    { beat: 'consequences', text: 'Half of southern Italy changes sides. Macedon signs with Hannibal.' },
    { beat: 'consequences', punch: true, text: 'And Rome refuses to talk. It will not even buy its own prisoners back.' },
    { beat: 'consequences', text: 'It arms slaves, bans public mourning past thirty days, and carries on.' },
    { beat: 'whyItMatters', text: 'Hannibal fought the most perfect battle anyone has fought, and lost the war,' },
    { beat: 'whyItMatters', text: 'because the thing he actually had to beat was never the army.' },
    { beat: 'whyItMatters', punch: true, text: 'Staff colleges still study the afternoon he won. Rome studied the fifteen years after it.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'Rome and Carthage were the two powers of the western Mediterranean, and they had already fought once, for twenty-three years, over Sicily. Carthage lost, paid an enormous indemnity, and went looking for somewhere to make the money back. It found southern Spain, and its silver.',
        'The family that ran Spain for Carthage were the Barcids, and the eldest son of that house was Hannibal. In 218 BC he attacked a Spanish city Rome had put under its protection, which was the point, and then did the thing no one had planned for: instead of waiting to be invaded, he took an army — with elephants — over the Alps in autumn and came down into Italy from the north.',
        'He arrived with perhaps half the men he had set out with, and beat a Roman army almost immediately, at the Trebia. The following year he beat another, at Lake Trasimene, by hiding an entire army in morning fog along a lakeshore road and killing about fifteen thousand men in a defile they could not get out of.',
        'Rome then appointed a dictator, Quintus Fabius Maximus, who looked at the record and drew the correct conclusion: do not fight this man. Fabius shadowed Hannibal, cut his foragers, burned what was in his path and refused every offered battle. It worked. It was also humiliating, and Rome nicknamed him Cunctator, the Delayer, and did not mean it kindly.',
        'So in 216 BC the Republic went back to the method it believed in. It elected two consuls, Lucius Aemilius Paullus and Gaius Terentius Varro, raised the largest army in its history, and sent it to find Hannibal and finish this.',
      ],
      aside: {
        kind: 'analogy',
        label: 'Picture it',
        body: 'Rome’s war-making was not clever. It was structural. It could raise a new consular army every year, more or less indefinitely, from a citizen body and a network of Italian allies that no other Mediterranean state could match. Losing a battle was survivable. That was the whole plan, and it was about to be tested harder than anyone intended.',
      },
      sourceIds: ['polybius-histories', 'goldsworthy-2000', 'lazenby-1978'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Numbers are the first thing to get straight, because they are also the first thing everyone gets wrong. Polybius says the Romans fielded about eighty-six thousand men. Livy gives a smaller figure. Modern historians read the evidence differently and land anywhere between fifty thousand and eighty-six thousand — but every reading agrees on the essential point, which is that Rome brought far more men than Hannibal, and packed them unusually deep.',
        'Against them Hannibal had perhaps forty thousand foot and ten thousand horse: a professional army but a patchwork one, Libyans and Numidians and Spaniards and Gauls, a long way from any home, with no reinforcements coming and no city to retreat to.',
        'On paper this is the problem Rome had been waiting for. Open ground, no fog, no defile, no ambush possible — just a very large number of heavy infantry against a smaller number, in a straight line, in daylight.',
        'The Roman plan was not stupid. Knowing their cavalry was outmatched, the consuls deliberately narrowed the front and deepened the ranks, intending to punch straight through the Carthaginian centre by sheer weight before the wings mattered. It is a reasonable plan. It is also the exact plan Hannibal needed them to have.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'The ancient casualty and army figures are not measurements. They come from writers using earlier accounts, sometimes decades or centuries later, in a tradition where round numbers carried rhetorical weight. The atlas gives ranges and names whose figure is whose.',
      },
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'daly-2002'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'On a summer morning in 216 BC — the second of August by the traditional date, though the Roman calendar of the period had drifted far enough from the sun that the real date is uncertain — the two armies formed up on a plain by the river Aufidus, near a ruined hill town called Cannae.',
        'Hannibal did something that looks, at first, like a mistake. He put his least reliable troops, the Gauls and Spaniards, in the middle of his line, and then pushed that middle forward into a shallow curve bulging towards the enemy. His best infantry, the African veterans equipped in captured Roman armour, he placed in dense blocks at either end of the line, angled back and told to wait. His heavy cavalry went on the left, by the river; his Numidian light horse on the right.',
        'The legions came on and hit the bulge. It held, then gave, then gave more — slowly, grudgingly, stretching backwards. Polybius says the retreat was ordered and controlled; other readings hold that the centre was simply losing and Hannibal made a virtue of it. What is not in doubt is that Hannibal rode in the middle of that line himself, where it was worst, keeping it from turning into a rout.',
        'And the Romans followed. Of course they followed: the enemy centre was bending, the standards were going forward, and every instinct a soldier has says press the advantage. The deep Roman formation compressed inward as it advanced, the men on the flanks angling towards the retreating middle. The curve flattened, then reversed, and the Roman army poured into the hollow of it.',
        'On the wings, meanwhile, the cavalry fight had already been decided. Hasdrubal’s heavy horse broke the Roman cavalry on the river flank, and then did the disciplined thing rather than the exciting one: instead of chasing fugitives, it rode the length of the battlefield behind the fighting, scattered the allied cavalry on the far wing, and came back in against the rear of the Roman infantry.',
        'At that moment the African veterans on both ends of the line, who had not yet fought at all, turned inward and stepped into the Roman flanks.',
        'That is the whole trick, and it is worth saying plainly: **the Roman army was destroyed by moving forward successfully.** Each step of its advance made the pocket deeper and the pocket’s mouth narrower. Nothing about the victory it thought it was winning was an illusion. The centre really was giving way. It was simply that the centre was not the point.',
        'What followed is the part the diagrams cannot show. A body of tens of thousands of men, packed by pressure from three sides and then four, loses the ability to function as an army almost immediately. Men in the interior could not see, could not use a sword or a shield, could not fall over, and could not withdraw. The killing was done at the edges, and the edges moved inward for hours. Polybius says the Carthaginians eventually grew tired and had to be relieved in shifts.',
        'Aemilius Paullus, the consul who had argued against fighting there, was killed. So were two consuls of the previous year, the master of horse, twenty-nine military tribunes and something like eighty men of senatorial rank. Varro, the consul who had argued for it, got away with a few hundred horsemen and lived to be thanked by the Senate — publicly, and pointedly — for not despairing of the Republic.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: '“The Carthaginians surrounded them on every side, and the killing went on until the ground itself was covered — men lying where they had stood, unable to move, with the wounded begging the enemy to finish them.” — Livy’s account, written some two centuries later, of a massacre that had already become a Roman byword for the worst possible day.',
        sourceId: 'livy-ab-urbe',
      },
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'daly-2002', 'goldsworthy-2001'],
    },

    whyItHappened: {
      heading: 'Why it worked',
      paragraphs: [
        'The tactical answer is that Hannibal used his enemy’s strength as the mechanism of its defeat. He knew the legions would push, so he built a line designed to be pushed. He knew Rome had packed its infantry deep to punch through, so he made the punch land somewhere that would swallow it.',
        '**He also knew what his own troops could and could not do.** The Gauls and Spaniards in the centre were brave and badly armoured; they could absorb and retreat, and that was the job he gave them. The Africans were disciplined enough to stand still and watch a battle happen forty metres away without joining it — which is far harder than charging — and then to wheel and advance on command. Almost no army of the period could have done both of those things at once. His could, because he had been marching, fighting and feeding it as one body for two years.',
        '**And he had cavalry, and he used it as a weapon rather than a duel.** The Roman cavalry was beaten by weight of numbers early. Everything after that depended on Hasdrubal’s horsemen not doing what victorious ancient cavalry almost always did, which was ride off after the runaways. They came back. That single act of discipline is what turned a flanking manoeuvre into a sealed encirclement.',
        'The deeper answer is about the ground and the crush, and it is the part that stops Cannae being a clever diagram. Modern work on the battle — Daly’s especially — argues that once the pocket formed, the Roman army stopped being an army in any sense. Formation, command, the ability to hear an order or obey it, the physical space to raise a weapon: all of it went. What was left was a compressed mass being reduced from the outside, which is why the casualty figures are so far beyond anything else in ancient warfare.',
        'That is also why the story is genuinely uncomfortable rather than merely impressive. The most admired manoeuvre in military history is admired for producing six hours of killing men who could not fight back.',
      ],
      sourceIds: ['daly-2002', 'goldsworthy-2001', 'polybius-histories'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'Cannae did to Rome roughly what it was designed to do. What it could not do was make Rome behave like a state that had lost.',
      ],
      shortTerm: [
        'Somewhere between forty-five and seventy thousand Romans and Italian allies were killed, depending on which ancient figure you follow. Polybius says seventy thousand; Livy says about forty-eight thousand dead with thousands more captured.',
        'Capua, the second city of Italy, went over to Hannibal, and much of the south went with it. Syracuse switched sides. Philip V of Macedon signed a treaty with him.',
        'Rome refused to negotiate, and refused to ransom the roughly eight thousand prisoners Hannibal offered to sell back — a deliberate, expensive signal that there was no transaction available.',
        'It raised new legions from men below the usual property qualification, from boys, and from eight thousand slaves bought by the state and armed, who were promised freedom for good service.',
        'It also, once, did something it had almost no precedent for: on the advice of the Sibylline books, two Gauls and two Greeks were buried alive in the cattle market. Livy, recording it, calls the rite most un-Roman.',
      ],
      longTerm: [
        'Rome went back to Fabius’s method and stayed there: shadow Hannibal, refuse the set-piece battle, retake the towns behind him, and let seventeen years do the work.',
        'Hannibal remained undefeated in Italy for another thirteen years and achieved nothing decisive with it, because he could not take walled cities and could not be reinforced.',
        'The war moved to where Hannibal was not. Scipio took Spain, cutting off the silver and the recruits, and then invaded Africa, which forced Hannibal home.',
        'At Zama in 202 BC Scipio beat him, using a Roman line reorganised to let elephants pass through it and cavalry that finally came back into the rear — the Cannae manoeuvre, run by the other side.',
        'Carthage lost its navy, its overseas territory and fifty years of indemnity payments. In 146 BC Rome came back and erased the city entirely.',
      ],
      unexpected: [
        'Cannae is the reason Rome stopped fighting wars this way. The long-service, professionally drilled army of the later Republic grew out of the discovery that citizen levies raised annually could be deleted in an afternoon.',
        'Hannibal’s brother Mago is said to have poured a heap of gold rings onto the floor of the Carthaginian senate — taken from the fingers of dead Roman equestrians — as proof of the scale. The ancient sources disagree about how many bushels, which is itself telling.',
        'The Roman survivors of the battle were not welcomed home. Two legions of them were exiled to Sicily for the duration of the war, unpaid and unrelieved, as a punishment for having lived.',
        'In 1913 the chief of the German general staff, Alfred von Schlieffen, published a book-length study arguing that Cannae was the model for a war of annihilation, and built his plan for the invasion of France around it. It failed. Historians have been arguing about how much of that failure was Cannae’s fault ever since.',
      ],
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'goldsworthy-2000', 'schlieffen-1913'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'Cannae is the standing counter-example to the idea that wars are won by winning battles. Hannibal won the battle as completely as a battle has ever been won. He then spent thirteen more years in Italy discovering that it had not been the relevant question.',
        'What beat him was not a better general. It was a state that could lose an army, and another, and a fifth of its young men, and simply raise more — because its citizenship, its Italian alliances and its politics were built so that defeat was survivable. Rome’s strength was not tactical at all. It was structural, and structural strength is invisible right up until the moment it is the only thing left.',
        'The other half of the lesson is about how strengths become handles. The legions did not lose because they were weak; they lost because they were strong in a way their enemy had measured. A plan that depends on the other side behaving predictably well is the most dangerous kind of plan to face, and Rome’s plan was excellent and completely legible.',
        'And it should stay uncomfortable. This is the most studied manoeuvre in the history of war, taught at every staff college on earth, and what it actually describes is fifty thousand people crushed together in a field for an afternoon, most of them unable to raise an arm. The elegance is real. So is the field.',
      ],
      sourceIds: ['goldsworthy-2001', 'daly-2002', 'schlieffen-1913'],
    },
  },

  timeline: [
    { year: -264, title: 'The First Punic War begins', detail: 'Rome and Carthage fight for twenty-three years over Sicily. Carthage loses, and owes an indemnity it must find a way to pay.' },
    { year: -237, title: 'Carthage takes southern Spain', detail: 'The Barcid family builds a new empire in Iberia around the silver mines, out of Roman reach and paying for everything that follows.' },
    { year: -218, title: 'Hannibal crosses the Alps', detail: 'He brings an army and elephants over the mountains in autumn, losing perhaps half his men, and arrives in Italy where no one expected an army at all.', pivotal: true },
    { year: -218, title: 'The Trebia', detail: 'His first Roman army: lured across a freezing river at dawn, hungry, and attacked from an ambush its commander had not looked for.' },
    { year: -217, title: 'Lake Trasimene', detail: 'An entire Roman army marched into fog along a lakeshore and destroyed in a defile. About fifteen thousand killed in a few hours.', pivotal: true },
    { year: -217, title: 'Fabius is made dictator', detail: 'He refuses every battle, shadows Hannibal and starves his foragers. It works, and Rome nicknames him the Delayer as an insult.' },
    { year: -216, title: 'Cannae', detail: 'Around eighty thousand Romans meet fifty thousand Carthaginians on open ground, push the centre back, and are surrounded and destroyed.', pivotal: true },
    { year: -216, title: 'Southern Italy defects', detail: 'Capua, the second city of Italy, goes over to Hannibal, and much of the south follows. Rome loses the ground rather than the war.' },
    { year: -215, title: 'Rome refuses to buy its prisoners back', detail: 'The Senate declines Hannibal’s offer to ransom about eight thousand captured citizens, and arms slaves instead.', pivotal: true },
    { year: -211, title: 'Hannibal marches on Rome', detail: 'He appears outside the walls to force the Romans to lift the siege of Capua. They do not lift it. Capua falls.' },
    { year: -202, title: 'Zama', detail: 'Scipio, who had survived Cannae as a young officer, beats Hannibal in Africa using cavalry that returns to the rear at the decisive moment.', pivotal: true },
    { year: -146, title: 'Carthage is destroyed', detail: 'Rome takes the city in a third war, sells the survivors, and leaves the site empty. The rivalry ends by subtraction.' },
    { year: 1913, title: 'Schlieffen publishes *Cannae*', detail: 'The German general staff turns a 216 BC afternoon into a doctrine of annihilation, and builds the plan for invading France around it.' },
  ],

  causeEffect: [
    { cause: 'Carthage loses Sicily and owes a vast indemnity', effect: 'It builds a new empire in Spain', because: 'The Iberian silver mines were the only source of money large enough to pay Rome and rearm at the same time.' },
    { cause: 'Hannibal wins at the Trebia and Trasimene', effect: 'Rome raises the largest army in its history', because: 'A state that believes battles are won by weight responds to losing them by bringing more weight.' },
    { cause: 'Rome deepens its infantry to punch through the centre', effect: 'The army compresses as it advances', because: 'A formation built to drive forward has no procedure for the ground behind it closing.' },
    { cause: 'Hannibal bulges his weakest troops forward', effect: 'The Romans advance into a pocket', because: 'A retreating enemy centre reads as victory, and no soldier stops pressing an advantage to check the shape of the line.' },
    { cause: 'Hasdrubal’s cavalry returns instead of pursuing', effect: 'The encirclement seals', because: 'Ancient cavalry almost always chased fugitives; coming back is the discipline that turns a flank attack into a trap.' },
    { cause: 'Tens of thousands are pressed into a shrinking pocket', effect: 'The Roman army stops being able to fight', because: 'Men packed shoulder to shoulder cannot raise a shield, obey an order, or retreat, whatever their courage.' },
    { cause: 'Rome refuses to negotiate or ransom prisoners', effect: 'Hannibal’s victory buys him nothing', because: 'A battlefield win only ends a war if the loser is willing to treat it as an ending.' },
    { cause: 'Scipio invades Africa', effect: 'Hannibal is recalled from Italy', because: 'Attacking what the enemy cannot afford to lose beats chasing the enemy’s best general around the country he chose.' },
  ],

  myths: [
    {
      myth: 'Hannibal could have taken Rome after Cannae, and lost his chance by hesitating.',
      reality: 'The famous rebuke — “you know how to win a victory, but not how to use one” — comes from Livy, writing two centuries later, and is a good line rather than an established fact. Hannibal had no siege train, no secure supply, an exhausted army and no fleet; Rome still had walls, two fresh legions raised within days, and a garrison. Most modern historians think a march on Rome in 216 BC would have failed.',
      whyItPersists: 'It makes the story tragic rather than structural, and “he could have won but blinked” is a far better anecdote than “storming a city that size was beyond his logistics”.',
      sourceIds: ['livy-ab-urbe', 'goldsworthy-2001', 'lazenby-1978'],
    },
    {
      myth: 'We know that about seventy thousand Romans died.',
      reality: 'We know that Polybius says seventy thousand and Livy says about forty-eight thousand dead. Both were working from earlier accounts, and neither counted anything. Modern estimates run from roughly forty-five thousand upwards. The honest statement is a range with the sources named.',
      whyItPersists: 'A precise number is more quotable than a range, and the largest figure is the one that makes the point.',
      sourceIds: ['polybius-histories', 'livy-ab-urbe', 'daly-2002'],
    },
    {
      myth: 'Varro was a reckless fool and Paullus the wise aristocrat who was overruled.',
      reality: 'That is Polybius’s account, and Polybius wrote as a client and friend of the family Paullus belonged to. Varro was a serving consul with a conventional plan and the Senate publicly thanked him afterwards, which is not how Rome treated men it blamed. Several modern historians read the division of blame as later political tidying.',
      whyItPersists: 'The surviving narrative is the biased one, and a story with a villain in it is easier to remember than a story about a shared and reasonable decision.',
      sourceIds: ['polybius-histories', 'goldsworthy-2001', 'daly-2002'],
    },
    {
      myth: 'Cannae was won by a brilliant plan executed exactly as designed.',
      reality: 'The plan was real, but whether the centre’s withdrawal was fully controlled is genuinely disputed — it may in part have been a retreat Hannibal contained rather than one he scripted. He rode in the centre himself throughout, which suggests something closer to management than choreography.',
      whyItPersists: 'The diagram version, with tidy arrows, is what gets taught, and a manoeuvre that half went wrong makes a worse diagram.',
      sourceIds: ['polybius-histories', 'daly-2002'],
    },
  ],

  disagreements: [
    {
      question: 'Was the withdrawal of the Carthaginian centre planned, or was it a real retreat Hannibal turned to use?',
      positions: [
        { view: 'Planned. The line was deliberately bulged forward so that it could give ground in order, drawing the Romans in — a manoeuvre, not an accident.', heldBy: 'Polybius, and the standard reading that follows him', sourceId: 'polybius-histories' },
        { view: 'Partly genuine. The Gauls and Spaniards were outmatched and were being pushed back; Hannibal’s achievement was keeping that retreat from becoming a rout and exploiting it.', heldBy: 'Gregory Daly and others working from the mechanics of the fighting', sourceId: 'daly-2002' },
      ],
      atlasPosition: 'The atlas says the encirclement was intended and the exact degree of control over the centre is disputed. It does not narrate the withdrawal as a clean piece of choreography, because the evidence does not support that level of precision.',
    },
    {
      question: 'How many Romans were actually killed?',
      positions: [
        { view: 'About seventy thousand, with a few thousand escaping — the figure given by the earliest surviving account.', heldBy: 'Polybius', sourceId: 'polybius-histories' },
        { view: 'About forty-eight thousand killed, with around nineteen thousand captured — a lower total, from a writer using different sources.', heldBy: 'Livy', sourceId: 'livy-ab-urbe' },
      ],
      atlasPosition: 'The atlas gives the range and names whose number is whose. It uses "around fifty thousand killed" as a conservative round figure and never presents seventy thousand as a measured count.',
    },
    {
      question: 'Could Hannibal have taken Rome in the days after the battle?',
      positions: [
        { view: 'Yes, or at least it was worth trying — the shock was total, and Livy preserves the charge that he wasted the victory.', heldBy: 'Livy, reporting Maharbal, and a long popular tradition', sourceId: 'livy-ab-urbe' },
        { view: 'No. He lacked a siege train, a supply line and the numbers to invest a city of that size, and Rome raised fresh legions within days.', heldBy: 'Adrian Goldsworthy, John Lazenby and most modern military historians', sourceId: 'goldsworthy-2001' },
      ],
      atlasPosition: 'The atlas follows the modern consensus that an assault on Rome would very probably have failed, and presents the Maharbal line as a famous later verdict rather than as evidence.',
    },
  ],

  didYouKnow: [
    'The Roman army at Cannae was destroyed while it was winning: its centre pushed the enemy back for hours, and every step forward made the trap deeper.',
    'Hannibal’s heavy cavalry won its fight, then did the unusual thing — it did not chase. Coming back to hit the Roman rear is what sealed the encirclement.',
    'Rome refused to ransom about eight thousand of its own captured citizens, to make it clear there was no deal available at any price.',
    'It then armed eight thousand slaves, bought by the state, and promised them freedom for good service.',
    'After the battle Rome buried two Gauls and two Greeks alive in the cattle market. Livy, who records it, calls the rite most un-Roman.',
    'The survivors were punished for surviving: two legions of them were exiled to Sicily for the rest of the war.',
    'Scipio, who beat Hannibal at Zama fourteen years later, was a junior officer at Cannae and got out of the pocket alive.',
    'In 1913 the German general staff published a study of Cannae and built its plan for invading France on it. The plan failed.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'In 216 BC Rome raised the largest army in its history — somewhere between fifty and eighty-six thousand men — and sent it to destroy Hannibal, who had already beaten two Roman armies since crossing the Alps two years earlier.',
        'Hannibal put his weakest troops in the centre of his line and pushed them forward into a bulge. The legions attacked it, and it gave ground. As the Romans advanced they compressed inward; the bulge flattened and then reversed into a pocket. His veteran African infantry, waiting at both ends of the line, turned in on the Roman flanks, and his cavalry — having beaten the Roman horse and then declined to chase it — came back and closed the rear.',
        'What followed was not really a battle. Packed on all four sides, the Roman army could not manoeuvre, could not use its weapons and could not retreat. Somewhere between forty-five and seventy thousand men were killed in a single afternoon, along with a consul and about eighty senators.',
        'Rome refused to negotiate, refused to ransom its prisoners, armed slaves, and went back to avoiding battle. Hannibal stayed in Italy for thirteen more years and won nothing decisive. Rome won the war in 201 BC.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Imagine two football crowds pushing against each other, except the crowds have swords and there is nowhere to go.',
        'Hannibal had fewer men, so he did something sneaky. He put his weakest soldiers in the middle and let them slowly walk backwards. The Romans thought they were winning, so they pushed harder and harder into the middle, all squashing together as they went.',
        'Then Hannibal’s best soldiers, who had been standing still at the two ends doing nothing, turned and walked in from the sides. And his horsemen came round and blocked the way out at the back.',
        'The Romans were now in the middle of a crowd on all four sides. If you have ever been squashed in a busy corridor, you know you cannot really move your arms. That is what happened, to tens of thousands of people, and it is why so many died.',
        'Here is the strange ending: Hannibal won the battle perfectly and still lost the war. Rome just kept making new armies until he ran out of time.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'Cannae’s historiography is dominated by the Polybian account (III.107–117), which is both the earliest surviving narrative and a partisan one: Polybius wrote within the household of the Aemilii-Scipiones, and the apportionment of blame between Paullus and Varro should be read with that patronage in view. Livy (XXII.44–50) preserves a partly independent tradition with materially lower casualty figures and the Maharbal anecdote, which has no claim to be contemporary.',
        'The tactical reconstruction turns on two contested points: whether the convex Gallic-Spanish centre executed a controlled withdrawal or a contained retreat, and the orientation of the armies relative to the Aufidus, which bears on wind, sun and the space available for Hasdrubal’s traverse. Daly (2002) reframes the question by shifting attention from the manoeuvre to the physiology of a compressed mass — the "crush" model — which better explains a casualty ratio otherwise anomalous in ancient land warfare.',
        'Structurally, the battle is the strongest available evidence for the Roman military-manpower thesis: the Republic’s capacity to absorb catastrophic loss derived from an unusually broad citizen base plus the socii system, and Hannibal’s strategy — detaching Italian allies rather than storming Rome — was a rational attack on precisely that asset. Its partial success at Capua and its failure elsewhere is the real subject of the war after 216.',
        'The reception history deserves separate treatment. Schlieffen’s *Cannae* (1913) reads the battle as a transferable doctrine of Vernichtungsschlacht, an interpretation which imported a one-day tactical result into operational planning at a scale where the analogy does not hold — an object lesson in what happens when a historical case is promoted to a template.',
      ],
    },
    {
      id: 'the-mechanism',
      label: 'Why winning was the trap',
      kind: 'angle',
      paragraphs: [
        'Strip out the names and Cannae is a machine with three moving parts.',
        '**Part one: an incentive.** The enemy centre gives ground. Every soldier in the Roman front rank now has an excellent reason to push forward, and every officer has an excellent reason to let him. Nothing has to be tricked; the advance is genuinely the correct local decision.',
        '**Part two: a geometry.** A deep formation advancing into a concave enemy line squeezes itself. The Roman flanks angle inward towards the retreating middle, the frontage narrows, and the ratio of men who can actually reach an enemy to men who are merely present collapses. By mid-afternoon most of the largest army Rome ever raised was standing in a crowd.',
        '**Part three: a door.** The cavalry closes the back. This is the only part that required unusual discipline rather than clever design, and it is the part that turned a bad Roman day into the worst one.',
        'The uncomfortable generalisation: the manoeuvre works *because* the victim is competent and motivated. A hesitant, badly led Roman army would not have advanced deep enough to be surrounded. Being good at your job is what carried the legions into the pocket.',
      ],
    },
    {
      id: 'what-rome-did-next',
      label: 'The part that actually won the war',
      kind: 'contrast',
      paragraphs: [
        'The battle is the famous half. The response is the half that decided the outcome.',
        'In the weeks after Cannae, Rome did five things, none of them heroic. It declined to receive Hannibal’s peace envoy. It refused to ransom eight thousand of its own citizens, a decision that reads as cruel until you notice it removed any incentive to surrender in future. It enrolled boys, propertyless men and eight thousand state-bought slaves into new legions. It capped public mourning at thirty days so the city would not stop functioning. And it thanked the surviving consul for not despairing of the Republic.',
        'Then it stopped fighting the war Hannibal wanted. No more grand battles in Italy. Instead: shadowing, sieges of the cities that had defected, and a slow campaign to take Spain — his money and his recruits — followed by an invasion of Africa that forced him home to defend Carthage.',
        'Hannibal beat every Roman army that offered him a battle for fifteen years. Rome simply stopped offering. There is no more complete answer to tactical genius than declining to be in the situation where it applies.',
      ],
    },
  ],

  beforeAfter: {
    label: 'How Rome fought, before and after',
    before: {
      title: 'Before Cannae',
      points: [
        'Two consuls elected annually, each commanding in turn',
        'Citizen levies raised for a season and sent home',
        'Battle sought as the natural way to settle a war',
        'Fabius mocked for refusing to fight',
        'Depth and weight of infantry treated as the decisive factor',
      ],
    },
    after: {
      title: 'After Cannae',
      points: [
        'Commands extended for years, so experience accumulated',
        'Armies kept in the field continuously, far from home',
        'Battle avoided unless the terms were already favourable',
        'Fabius’s attrition adopted as official method',
        'Cavalry, supply and allied loyalty treated as the decisive factors',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if Hannibal had marched on Rome the next morning?',
      reasoning: 'The psychological moment was total: a consul dead, eighty senators gone, no field army left in Italy. A rapid appearance at the walls might conceivably have broken the Senate’s nerve or triggered a rising inside the city.',
      constraint: 'He had no siege engines, no supply line, no fleet and perhaps forty thousand tired men, against a walled city of several hundred thousand that raised two fresh legions within days. When he did march on Rome in 211 BC, at a moment of far less shock, nothing happened at all — which is the closest thing to a controlled experiment the question can have.',
    },
    {
      question: 'What if Rome had accepted terms after Cannae?',
      reasoning: 'A negotiated peace was the normal ending to a Mediterranean war, and Hannibal’s strategy assumed it. Carthage would have kept Spain and its indemnity, Rome would have lost its southern Italian hegemony, and the western Mediterranean would have had two powers in it rather than one.',
      constraint: 'This is speculation about a decision Rome had structurally almost no way of making. The Senate’s composition, its religious framing of the war and the precedent set by refusing the ransom all pointed the same way, and the men who might have argued for peace were disproportionately the ones lying at Cannae.',
    },
  ],

  quiz: [
    {
      question: 'How did Hannibal’s trap actually work?',
      options: [
        'He ambushed the Romans from hidden ground',
        'He let his centre give way so the Romans advanced into a pocket',
        'He used elephants to break the Roman line',
        'He attacked at night',
      ],
      answerIndex: 1,
      explains: 'The centre was bulged forward and then gave ground. The Romans pressed the apparent advantage, compressed inward as they advanced, and the veterans on the wings turned in behind them.',
    },
    {
      question: 'What did the Carthaginian cavalry do that was unusual?',
      options: [
        'It refused to charge',
        'It attacked first, before the infantry',
        'It beat the Roman cavalry and then came back to hit the infantry from behind',
        'It stayed out of the battle entirely',
      ],
      answerIndex: 2,
      explains: 'Victorious ancient cavalry almost always chased fugitives off the field. Hasdrubal’s horsemen returned instead, and that discipline is what closed the encirclement.',
    },
    {
      question: 'What did Rome do about the eight thousand citizens Hannibal captured?',
      options: [
        'Paid the ransom immediately',
        'Refused to ransom them at all',
        'Exchanged them for Carthaginian prisoners',
        'Sent an army to free them',
      ],
      answerIndex: 1,
      explains: 'The Senate refused to buy them back. It was expensive and harsh, and it signalled that no deal of any kind was available — which was the point.',
    },
    {
      question: 'Why did Hannibal lose the war despite winning at Cannae?',
      options: [
        'His army was destroyed soon afterwards',
        'Rome could replace its losses and simply refused to fight him again',
        'He was recalled immediately by Carthage',
        'Rome had better generals from then on',
      ],
      answerIndex: 1,
      explains: 'Rome raised new armies, went back to Fabius’s policy of avoiding battle, and attacked Spain and Africa instead. Tactical genius has no answer to an opponent who declines the engagement.',
    },
  ],

  sources: [
    {
      id: 'polybius-histories',
      kind: 'primary',
      author: 'Polybius',
      title: 'The Histories, Book III',
      year: -150,
      detail: 'Written c. 150 BC. Loeb Classical Library edition, trans. W. R. Paton, rev. F. W. Walbank and C. Habicht',
      note: 'The earliest surviving account, by a Greek who interviewed participants and walked the ground. Also a partisan one: he wrote inside the household of Paullus’s family.',
    },
    {
      id: 'livy-ab-urbe',
      kind: 'primary',
      author: 'Livy (Titus Livius)',
      title: 'Ab Urbe Condita, Books XXI–XXII',
      year: -25,
      detail: 'Written c. 27–25 BC. Standard text: Oxford Classical Texts; trans. as "The War with Hannibal"',
      note: 'The fullest narrative, written about two centuries after the battle. Source of the lower casualty figures, the Maharbal rebuke and the human sacrifice in the cattle market.',
    },
    {
      id: 'goldsworthy-2001',
      kind: 'book',
      author: 'Adrian Goldsworthy',
      title: 'Cannae',
      year: 2001,
      detail: 'Cassell. ISBN 978-0-304-35714-6',
      note: 'A battle-length reconstruction that is careful about what the ancient numbers can and cannot support, and sceptical of the march-on-Rome counterfactual.',
    },
    {
      id: 'goldsworthy-2000',
      kind: 'book',
      author: 'Adrian Goldsworthy',
      title: 'The Punic Wars',
      year: 2000,
      detail: 'Cassell. ISBN 978-0-304-35284-4',
      note: 'The wider war: why Carthage was in Spain, how Rome generated manpower, and what happened in the seventeen years after the battle.',
    },
    {
      id: 'daly-2002',
      kind: 'book',
      author: 'Gregory Daly',
      title: 'Cannae: The Experience of Battle in the Second Punic War',
      year: 2002,
      detail: 'Routledge. ISBN 978-0-415-32743-2',
      note: 'The study that moves the question from the diagram to the crush — what a compressed mass of men can physically do, and why the casualties were so far out of the ordinary.',
    },
    {
      id: 'lazenby-1978',
      kind: 'book',
      author: 'J. F. Lazenby',
      title: 'Hannibal’s War: A Military History of the Second Punic War',
      year: 1978,
      detail: 'Aris & Phillips; reissued University of Oklahoma Press, 1998',
      note: 'The standard military history of the whole war, and one of the clearest arguments that taking Rome in 216 BC was beyond Hannibal’s means.',
    },
    {
      id: 'schlieffen-1913',
      kind: 'primary',
      author: 'Alfred von Schlieffen',
      title: 'Cannae',
      year: 1913,
      detail: 'Berlin; English translation published by the Command and General Staff School Press, Fort Leavenworth, 1931',
      note: 'How a 216 BC afternoon became twentieth-century doctrine. Read as evidence about 1913, not about 216 BC.',
    },
  ],
}
