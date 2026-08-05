import type { Story } from '../types'

/**
 * Voice: Sherwin Nuland's register in *The Doctors' Plague* — a surgeon writing
 * about a doctor, clinical and humane at once, and pointedly unwilling to
 * canonise him. The martyrdom version is the easy one; Nuland's harder reading,
 * that Semmelweis handled his own case badly and it still should not have
 * mattered, is the one the atlas takes.
 */
export const semmelweis: Story = {
  slug: 'semmelweis',
  title: 'Wash Your Hands',
  subtitle: 'Vienna, 1847 — he cut the death rate on his ward by ninety per cent in a month, and it cost him everything.',
  hook: 'In one Vienna maternity ward, roughly one mother in ten died. In the ward next door, one in twenty-five. The only difference was who had washed their hands.',
  era: 'industrial',
  category: 'discoveries',
  years: [1846, 1867],
  regions: ['Austria', 'Hungary', 'United Kingdom'],
  nodes: ['semmelweis', 'puerperal-fever', 'handwashing', 'vienna-general-hospital', 'institutional-denial'],
  tags: ['medicine', 'evidence', 'institutions', 'science', 'whistleblower', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'noir',

  reel: [
    { beat: 'hook', punch: true, text: 'Two maternity wards in one building. In the first, about one mother in ten died.' },
    { beat: 'hook', text: 'In the second, one in twenty-five. Same building, same city, same year.' },
    { beat: 'worldBefore', kicker: 'Vienna, 1846', text: 'The women know. They beg to be sent to the second clinic,' },
    { beat: 'worldBefore', text: 'and some give birth in the street outside rather than be admitted to the first —' },
    { beat: 'worldBefore', punch: true, text: 'and the ones who do that survive at a better rate than the ones who go in.' },
    { beat: 'problem', text: 'Everyone has a theory. Bad air. Overcrowding. Fear. The priest’s bell.' },
    { beat: 'problem', text: 'A young Hungarian assistant works through them one at a time,' },
    { beat: 'problem', punch: true, text: 'and every theory dies on the same fact. Both wards have it. Only one is killing.' },
    { beat: 'story', text: 'The only real difference is who does the delivering.' },
    { beat: 'story', text: 'The second clinic trains midwives. The first trains medical students,' },
    { beat: 'story', punch: true, mark: 'chain', text: 'who come to the beds directly from the autopsy room, wiping their hands on their coats.' },
    { beat: 'story', kicker: '1847', text: 'Then a friend of his is cut by a scalpel during a post-mortem and dies,' },
    { beat: 'story', text: 'and the findings in his body are the findings in the dead mothers.' },
    { beat: 'story', punch: true, text: 'They are not catching a disease. They are being given one.' },
    { beat: 'story', text: 'He orders chlorinated lime at the door. Wash before you touch anyone.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'Deaths on the ward fall from eighteen per cent to about one, inside two months.' },
    { beat: 'whyItHappened', text: 'And that is the moment it goes wrong, because he cannot say why it works.' },
    { beat: 'whyItHappened', text: 'Germs are twenty years away. All he has is a table of numbers,' },
    { beat: 'whyItHappened', punch: true, text: 'and a conclusion no doctor in Europe wants to reach. We were carrying it.' },
    { beat: 'whyItHappened', text: 'His contract is not renewed. He leaves Vienna without telling his colleagues.' },
    { beat: 'whyItHappened', mark: 'echo', text: 'He waits fourteen years to publish, then writes open letters calling them murderers,' },
    { beat: 'whyItHappened', punch: true, text: 'which is true, and which loses him every argument he has left.' },
    { beat: 'consequences', kicker: '1865', text: 'He is committed to an asylum, restrained, and beaten by the guards.' },
    { beat: 'consequences', text: 'He dies two weeks later of an infected wound. He is forty-seven.' },
    { beat: 'consequences', punch: true, text: 'Two years after that, Lister does the same thing in Glasgow, and is knighted.' },
    { beat: 'whyItMatters', text: 'The difference was not the evidence. Semmelweis had better evidence.' },
    { beat: 'whyItMatters', text: 'The difference was that Lister could name what he was killing.' },
    { beat: 'whyItMatters', punch: true, text: 'Being right is not the hard part. Being believable is the hard part.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'The Vienna General Hospital was one of the great teaching hospitals of Europe, and its maternity service was free — which meant it served the poorest women in the city, and had no shortage of them.',
        'For administrative reasons it had been split in 1840 into two clinics. The First trained medical students. The Second trained midwives. Admission alternated by day, so which clinic a woman entered depended on nothing but when she arrived.',
        'The death rates were not the same. In the First Clinic, mortality from childbed fever ran at around ten per cent across the 1840s and reached eighteen per cent in bad months. In the Second, it ran at about four per cent. This was not a secret: the figures were published annually, and the women of Vienna knew them perfectly well.',
        'They begged, wept and knelt to be admitted to the Second Clinic. Some, on being assigned to the First, gave birth in the street and then presented themselves for the aftercare — and Semmelweis noticed, with some discomfort, that these street births had a *lower* death rate than admission to his own ward.',
        'Childbed fever itself was accepted as a fact of maternity, like weather. The explanations on offer were the standard ones of the period: an imbalance of humours, atmospheric-cosmic-telluric influences, miasma from bad air, overcrowding, poor ventilation, or the emotional state of the mother.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'First Clinic, 1846: 459 deaths in 4,010 births — about eleven per cent. Second Clinic the same year: 105 deaths in 3,754 births — about two point eight per cent. Same hospital, same street, same admissions policy. The figures were published, and nobody could account for them.',
        sourceId: 'semmelweis-1861',
      },
      sourceIds: ['semmelweis-1861', 'nuland-2003'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'Ignaz Semmelweis was twenty-eight when he became assistant in the First Clinic in 1846, and the discrepancy immediately became the thing he could not leave alone. What he did next is, in retrospect, unmistakably a scientific method, conducted without any of the theory that would have made it easy.',
        'He took each explanation and tested it against the fact that the two clinics differed. Overcrowding? The Second Clinic was more crowded, because everyone wanted to be in it. Climate and atmosphere? Both wards were in the same building, breathing the same air. Diet, laundry, ventilation, the standard of care? All shared.',
        'There was a theory that the fright caused by the priest walking through the ward with his bell, on his way to administer last rites, brought on the fever. Semmelweis had the priest change his route and stop ringing. Nothing changed.',
        'He noticed that women who delivered on their backs died more often than women who delivered on their sides, and that the two clinics differed in this. He changed the practice in his own ward. Nothing changed.',
        'By early 1847 he had eliminated everything he could think of except one difference, and it was a difference nobody thought was medically interesting: the First Clinic was staffed by medical students, and the Second by trainee midwives.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'It is tempting to describe this as a controlled trial. It was not — Semmelweis was working with existing records and natural variation, and his statistical reasoning was informal. What he had was strong, honest, repeated observation. The distinction matters, because it is part of why his colleagues felt entitled to dismiss him.',
      },
      sourceIds: ['semmelweis-1861', 'carter-1994'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'In March 1847 Semmelweis’s friend and colleague Jakob Kolletschka was cut on the finger by a student’s scalpel during a post-mortem examination. He became ill and died. Semmelweis read the autopsy report on his friend, and saw a list of findings that he recognised immediately, because he had been reading it for a year on the bodies of dead mothers.',
        'The conclusion he drew is the whole story, and it is a terrible one. Kolletschka had died of the same thing the women were dying of. Kolletschka had got it from a corpse, through a wound. And the medical students of the First Clinic spent their mornings dissecting corpses in the autopsy room and their afternoons examining women in labour, with an interval consisting of wiping their hands on a handkerchief.',
        'The midwives of the Second Clinic did not perform autopsies at all.',
        'Semmelweis called the agent "cadaverous particles". He had no idea what they were; the word bacterium had no meaning yet. But he did not need to know what they were to know how to stop them, and in May 1847 he installed a basin of chlorinated lime solution at the door of the ward and required every person entering to scrub their hands in it until the smell of the autopsy room was gone. The chlorine was not chosen because it kills microorganisms. It was chosen because it removes the smell.',
        'The First Clinic’s mortality in April 1847 was 18.3 per cent. In June it was 2.2 per cent. In July, 1.2. In two months of that year, no woman on the ward died at all. Over the following year, mortality in the two clinics converged and the First Clinic was, at times, the safer of the two.',
        'A year later he extended the requirement to instruments as well as hands, having noticed that infection could pass from a living patient with an infected wound and not only from the dead.',
        'That is the discovery. It is complete, it is correct, and its effect on practice was immediate and enormous. What happened next is the part worth studying.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'Writing in 1861, Semmelweis said plainly what his own conclusion meant: that he had been present at the deaths, that only God knew how many women had gone to their graves because of him, and that he had handled corpses to an extent few obstetricians ever had. He is not describing a discovery. He is describing a confession.',
        sourceId: 'semmelweis-1861',
      },
      sourceIds: ['semmelweis-1861', 'nuland-2003', 'carter-1994'],
    },

    whyItHappened: {
      heading: 'Why nobody listened',
      paragraphs: [
        'The standard version of this story is that a genius was persecuted by fools. The evidence supports something more uncomfortable and more useful.',
        '**He could not say why it worked.** Germ theory was two decades away. "Cadaverous particles" was not a mechanism; it was a placeholder. To a medical establishment that explained disease through humours and miasmas, Semmelweis was offering a procedure with no theory behind it, on the basis of statistics, which medicine did not yet regard as evidence. Being right is not the same as being able to be checked.',
        '**Accepting it meant a confession.** The claim was not "here is a way to reduce mortality". The claim was: *you have been carrying death from the autopsy room to the delivery bed on your unwashed hands, and the women in your care have died because of you.* No professional body has ever found that easy, and the more senior the doctor, the more bodies the admission covers.',
        '**And he handled it badly.** This is Nuland’s hard point and it should not be softened. Semmelweis did not publish for fourteen years. He gave few lectures and wrote no clear account while the evidence was fresh. He left Vienna abruptly in 1850 without telling his colleagues. Others published on his behalf, imperfectly, and the imperfections were attacked. When he finally wrote, in 1861, he produced a long, disorganised book, and followed it with open letters accusing named professors of being murderers and their teaching a fit subject for the police.',
        'He was, of course, factually correct in calling them that. It was also the single most effective way to guarantee that no professor in Europe could adopt his method without publicly agreeing that he was a murderer.',
        'And it should be said that the establishment was not uniformly hostile. Some clinics adopted the washing. Others tried it, applied it half-heartedly, saw no dramatic effect, and concluded it did not work. A procedure with no theory is easy to do badly, and doing it badly looks exactly like disproving it.',
      ],
      sourceIds: ['nuland-2003', 'carter-1994', 'semmelweis-1861'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'The method was right and it was not adopted, and the man who found it did not survive being right.',
      ],
      shortTerm: [
        'Semmelweis’s appointment in Vienna was not renewed in 1849, and he left the city in 1850 for Pest, where he took charge of the maternity ward at the St Rochus hospital and cut its mortality to under one per cent.',
        'He published *Die Ätiologie, der Begriff und die Prophylaxis des Kindbettfiebers* in 1861 — fourteen years after the discovery.',
        'The open letters followed, addressed to leading obstetricians across Europe and accusing them, by name, of killing their patients.',
        'In July 1865 he was taken to an asylum in Lower Austria, apparently by deception. He tried to leave, was restrained and severely beaten by guards, and put in a straitjacket in a darkened cell.',
        'He died on 13 August 1865, aged forty-seven, of sepsis from an infected wound — the same class of infection he had spent his career preventing.',
      ],
      longTerm: [
        'In 1867 Joseph Lister published his antiseptic method in the Lancet, based on Pasteur’s work on fermentation, and was accepted, honoured, and eventually ennobled.',
        'Germ theory made handwashing explicable, and once it was explicable it became compulsory. Semmelweis’s procedure survives essentially unchanged, with better chemicals.',
        'Childbed fever did not actually end with handwashing. It was reduced by antisepsis and finished off by antibiotics in the 1930s and 40s, which killed the streptococcus outright.',
        'Semmelweis was rehabilitated posthumously and thoroughly. The university in Budapest bears his name; his house is a museum; the 1861 book is on the UNESCO Memory of the World register.',
        'The phrase "Semmelweis reflex" entered the language for the automatic rejection of evidence that contradicts an established position — coined long after his death, and often used by people whose evidence is nothing like as good as his.',
      ],
      unexpected: [
        'Women who gave birth in the street rather than enter the First Clinic had better survival odds than women admitted to it. Semmelweis noted this himself, and it is the cleanest indictment of a hospital ever recorded in its own statistics.',
        'The chlorinated lime was chosen to get rid of the smell of the dissecting room, not to kill anything. He was right for a reason he could not have known.',
        'He was not the first to say it. Oliver Wendell Holmes published the same conclusion in Boston in 1843, four years earlier, and was told by a leading American obstetrician that doctors were gentlemen, and gentlemen’s hands are clean.',
        'His own final illness is disputed. Nuland argues for the asylum beating and gangrene; other readings propose early-onset dementia, or neurosyphilis, as the cause of the behaviour that got him committed. What is not disputed is that he died of an infection in a hospital.',
      ],
      sourceIds: ['nuland-2003', 'holmes-1843', 'lister-1867'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'Two men proposed almost the same intervention twenty years apart. Semmelweis was dismissed and died in an asylum. Lister was celebrated and made a baron. The difference was not the quality of the evidence — Semmelweis had a natural experiment across two wards of one hospital with thousands of births and published mortality tables, which is better evidence than Lister ever produced.',
        'The difference was that Lister arrived after Pasteur, and could therefore say what he was killing. A procedure with a mechanism can be taught, argued about, extended and improved. A procedure without one is a superstition that happens to work, and a profession that had just finished throwing out bleeding and purging was in no mood for another of those.',
        'That is the durable lesson, and it cuts both ways. It is not enough to be right; you have to be checkable, because a claim that cannot be examined cannot be adopted responsibly, however true it is. And equally: an institution that will only accept results it already has a theory for will systematically miss the results that matter most.',
        'Then there is the part about cost. What made this claim unbearable was not that it was strange but that it was accusatory. Every professor who accepted it had to accept what his own hands had done. The atlas runs this thread elsewhere — a fraud analyst with proof, filing it repeatedly with a regulator that could not afford to read it — because the mechanism is identical. The warnings that get ignored are rarely the implausible ones. They are the ones whose acceptance is expensive for the people who have to accept them.',
        'And Semmelweis himself should not be sanded into a saint. He was right, he was treated appallingly, and he also spent fourteen years not writing the paper and then wrote letters calling his readers murderers. Both halves are true. The second half does not excuse the profession that ignored him; it just means the story is about how discovery actually travels between people, which is a harder and more useful thing to learn than that geniuses are persecuted.',
      ],
      sourceIds: ['nuland-2003', 'lister-1867'],
    },
  },

  timeline: [
    { year: 1795, title: 'Alexander Gordon of Aberdeen names the cause', detail: 'He concludes that childbed fever is carried between patients by the attendants themselves, and is disbelieved. He is fifty years early.', confidence: 'contested' },
    { year: 1840, title: 'Vienna splits its maternity service', detail: 'The First Clinic takes medical students, the Second takes trainee midwives. Admission alternates by day, which is what makes the comparison possible.', pivotal: true },
    { year: 1843, title: 'Holmes publishes in Boston', detail: 'Oliver Wendell Holmes argues childbed fever is carried by physicians and demands they wash and change clothes. He is attacked by leading obstetricians.', pivotal: true },
    { year: 1846, title: 'Semmelweis arrives in the First Clinic', detail: 'Aged twenty-eight, he takes up the assistantship and begins working through every explanation for a death rate three times the ward next door.' },
    { year: 1847, date: '1847-03', title: 'Kolletschka dies', detail: 'His friend is cut by a scalpel at a post-mortem and dies with exactly the findings seen in the dead mothers. The mechanism becomes obvious.', pivotal: true },
    { year: 1847, date: '1847-05', title: 'Chlorinated lime at the door', detail: 'Everyone entering the ward must scrub until the smell of the dissecting room is gone. Mortality falls from 18.3 per cent to 2.2 in weeks.', pivotal: true },
    { year: 1848, title: 'Instruments too', detail: 'He extends the rule to instruments after an outbreak traced to a patient with an infected wound — infection is not only carried from the dead.' },
    { year: 1850, title: 'He leaves Vienna', detail: 'His appointment is not renewed and he departs abruptly for Pest without telling his colleagues. In Hungary he cuts mortality to under one per cent.', pivotal: true },
    { year: 1861, title: 'The Ätiologie is published', detail: 'Fourteen years after the discovery, a long and disorganised book. It is followed by open letters accusing named professors of murder.', pivotal: true },
    { year: 1865, date: '1865-08-13', title: 'Semmelweis dies in an asylum', detail: 'Committed in July, restrained and beaten by guards, he dies two weeks later of sepsis from an infected wound, aged forty-seven.', pivotal: true },
    { year: 1867, title: 'Lister publishes antiseptic surgery', detail: 'Working from Pasteur, he applies carbolic acid to wounds and instruments — and is accepted, because he can name what he is killing.', pivotal: true },
    { year: 1935, title: 'Sulfa drugs reach childbed fever', detail: 'Prontosil and its successors kill the streptococcus directly. Maternal mortality collapses, finishing what antisepsis had started.' },
  ],

  causeEffect: [
    { cause: 'The hospital splits into a students’ clinic and a midwives’ clinic', effect: 'A natural experiment is created', because: 'Two wards in one building differing in only one variable is the closest thing to a controlled comparison the era produced, by accident.' },
    { cause: 'Medical students dissect corpses each morning', effect: 'They carry infection to women in labour', because: 'Nothing between the autopsy room and the delivery bed removed what was on their hands, and nobody had a reason to think it should.' },
    { cause: 'Kolletschka dies from a scalpel cut', effect: 'Semmelweis identifies the mechanism', because: 'His post-mortem findings matched those of the dead mothers exactly, which meant one cause and one route into the body.' },
    { cause: 'Chlorinated lime is required before every examination', effect: 'Mortality falls by around ninety per cent', because: 'A chemical chosen to remove the smell of decay also destroyed the organisms producing it, which nobody knew at the time.' },
    { cause: 'There is no theory of germs yet', effect: 'The result cannot be explained or defended', because: 'Medicine accepted mechanisms, not statistics, and a procedure without a mechanism reads as a superstition that happens to work.' },
    { cause: 'Accepting the finding means accepting responsibility for deaths', effect: 'Senior doctors reject it hardest', because: 'The more patients a physician had delivered, the more the admission cost him, so the incentive to disbelieve rose with seniority.' },
    { cause: 'Semmelweis delays publishing and then insults his readers', effect: 'The method spreads far slower than the evidence deserved', because: 'A finding travels through people, and the people who most needed to adopt it were the ones he had publicly called murderers.' },
    { cause: 'Pasteur establishes germ theory in the 1860s', effect: 'Lister’s identical intervention is accepted', because: 'The same procedure with a mechanism attached is a scientific advance rather than an unexplained ritual.' },
  ],

  myths: [
    {
      myth: 'Semmelweis discovered that doctors were spreading childbed fever, and nobody had ever suggested it before.',
      reality: 'Alexander Gordon of Aberdeen argued in 1795 that attendants carried the disease between patients, and Oliver Wendell Holmes published the same conclusion in Boston in 1843, four years before Vienna. Both were disbelieved. Semmelweis’s contribution was the evidence and the intervention, not the idea.',
      whyItPersists: 'Single-discoverer stories are easier to tell, and Semmelweis’s version has a martyrdom attached, which the others do not.',
      sourceIds: ['holmes-1843', 'carter-1994'],
    },
    {
      myth: 'He was rejected purely because doctors were arrogant fools.',
      reality: 'Arrogance was real, and so was the professional cost of the admission. But he also had no mechanism to offer in an era that required one, did not publish for fourteen years, left Vienna without explaining himself, and eventually accused his readers of murder in open letters. Nuland’s reading is that Semmelweis’s own conduct materially delayed adoption.',
      whyItPersists: 'The persecuted-genius story is more satisfying and more flattering to anyone who currently feels ignored, which is why the "Semmelweis reflex" gets invoked so often by people with much worse evidence.',
      sourceIds: ['nuland-2003', 'carter-1994'],
    },
    {
      myth: 'Handwashing ended childbed fever.',
      reality: 'It could have, and where it was properly applied it did. But adoption was patchy for decades, and what actually eliminated the disease as a major killer was antisepsis after Lister and then antibiotics in the 1930s and 40s, which killed the responsible streptococcus directly.',
      whyItPersists: 'The story has a natural ending at the discovery, and the messy fifty years afterwards do not fit the shape of a triumph.',
      sourceIds: ['lister-1867', 'nuland-2003'],
    },
    {
      myth: 'He went mad from being ignored, and died of a broken heart.',
      reality: 'He deteriorated badly in his final years, and the cause is genuinely disputed — proposed explanations include early-onset dementia and neurosyphilis, alongside the effect of years of professional rejection. He was committed to an asylum, beaten by guards, and died of an infected wound. The infection is documented; the psychiatric cause is not settled.',
      whyItPersists: 'It completes the tragedy neatly, and the actual medical record is both grimmer and less conclusive than the poetic version.',
      sourceIds: ['nuland-2003'],
    },
  ],

  disagreements: [
    {
      question: 'Why was Semmelweis’s finding not adopted?',
      positions: [
        { view: 'Primarily because of the medical establishment: it was theoretically committed to miasma and humours, did not treat statistics as evidence, and could not accept a conclusion that indicted its own members.', heldBy: 'K. Codell Carter, and the traditional reading', sourceId: 'carter-1994' },
        { view: 'Substantially because of Semmelweis himself: fourteen years without publishing, no clear exposition while the evidence was fresh, an abrupt departure from Vienna, and finally open letters calling his colleagues murderers.', heldBy: 'Sherwin Nuland', sourceId: 'nuland-2003' },
      ],
      atlasPosition: 'The atlas gives both, in that order of weight. The institutional resistance was real and would have been formidable regardless; Semmelweis’s conduct made a hard case considerably harder. Neither reading makes the outcome acceptable.',
    },
    {
      question: 'What caused his final breakdown and death?',
      positions: [
        { view: 'Beating by asylum guards leading to an infected wound and fatal sepsis, on a man already broken by years of rejection.', heldBy: 'Nuland, reading the autopsy record', sourceId: 'nuland-2003' },
        { view: 'An underlying organic illness — early-onset dementia or neurosyphilis have both been proposed — which produced the behaviour that led to his committal.', heldBy: 'Various later medical assessments', sourceId: 'carter-1994' },
      ],
      atlasPosition: 'The atlas states what is documented: he was committed, he was beaten, and he died of sepsis from a wound. It reports the proposed underlying illnesses as proposals and does not assert one.',
    },
  ],

  didYouKnow: [
    'Women assigned to the deadlier clinic sometimes gave birth in the street instead — and survived at a better rate than those admitted.',
    'Semmelweis tested the theory that the priest’s bell frightened women into illness by having the priest change his route. It made no difference.',
    'He chose chlorinated lime because it removed the smell of the dissecting room, not because he thought it killed anything.',
    'On his ward, mortality fell from 18.3 per cent in April 1847 to 1.2 per cent in July. In two months of that year, nobody died at all.',
    'Oliver Wendell Holmes had published the same conclusion in Boston four years earlier and was told that doctors are gentlemen, and gentlemen’s hands are clean.',
    'Semmelweis waited fourteen years to publish his findings properly, and then attacked his readers by name as murderers.',
    'He died of sepsis from an infected wound, which is the same class of infection he had spent his life preventing.',
    'His 1861 book is on the UNESCO Memory of the World register, and the medical university in Budapest is named after him.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'The Vienna General Hospital had two maternity clinics in the same building. In the one staffed by medical students, around one mother in ten died of childbed fever. In the one staffed by trainee midwives, about one in twenty-five. Admission alternated by day, so the difference could not be the patients.',
        'Ignaz Semmelweis eliminated every explanation on offer — crowding, air, diet, position of delivery, even the priest’s bell — until only one difference was left. Then in 1847 a colleague died after cutting himself at a post-mortem, with the same findings seen in the dead mothers. The students were dissecting corpses each morning and delivering babies each afternoon.',
        'He required everyone entering the ward to wash in chlorinated lime. Mortality fell from 18.3 per cent in April to 1.2 per cent in July.',
        'It was not adopted. Germ theory did not exist, so he could not say why it worked; accepting it meant accepting that doctors had been killing patients; and Semmelweis waited fourteen years to publish, then wrote open letters calling his colleagues murderers. He was committed to an asylum in 1865, beaten by guards, and died of an infected wound at forty-seven. Two years later Lister published the same principle, with Pasteur behind him, and was made a baron.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'In a big hospital in Vienna there were two baby wards, right next to each other. In one of them, loads of mothers died after giving birth. In the other one, far fewer did. Nobody could work out why, and the mothers were so frightened of the bad ward that some of them had their babies in the street instead.',
        'A young doctor called Ignaz decided to find out. He checked every idea anyone had. Is it too crowded? No, the safe ward is more crowded. Is it the air? They share the same air. Is it the priest ringing his bell and scaring people? He asked the priest to stop. Nothing changed.',
        'Then he noticed the one real difference. In the deadly ward, the doctors and students spent the morning cutting up dead bodies to learn about them — and then walked straight over to the mothers, wiping their hands on their coats.',
        'So he put a bowl of chlorine at the door and made everyone scrub their hands until they did not smell of dead bodies any more. Almost immediately, the mothers stopped dying.',
        'And here is the awful bit: hardly anybody believed him. Nobody knew about germs yet, so he could not explain *why* it worked — and believing him meant admitting that doctors had been killing mothers by accident for years. He was pushed out of his job, and he died in a hospital himself, from an infection.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The case is a standard reference in the philosophy of science, largely through Hempel’s use of it in *Philosophy of Natural Science* as an illustration of hypothesis elimination. The eliminative structure is genuine: Semmelweis serially tested atmospheric, dietary, positional and psychological hypotheses against the between-clinic differential, and each failed on the shared-conditions constraint. What he could not supply was a causal mechanism, only an aetiological placeholder — "cadaverous particles" — which is precisely the deficiency that made his conclusion resistible under the explanatory standards of 1840s clinical medicine.',
        'The epistemic reception problem is the more interesting one. Statistical inference had no settled evidential status in medicine; Louis’s numerical method was contemporaneous and itself contested. A profession that treats mechanism as the criterion of explanatory adequacy will systematically underweight a well-supported statistical regularity with no mechanism, and this is not simple irrationality — it is a decision rule that is right more often than it is wrong, failing badly in a specific case.',
        'The revisionist literature, principally Nuland (2003) against the hagiographic tradition, redistributes causal responsibility for non-adoption towards Semmelweis: the fourteen-year publication delay, the absence of a clear early exposition, reliance on colleagues to publicise imperfect versions of his position, and the 1861–62 open letters. Carter and Carter (1994) give more weight to institutional and theoretical obstruction. The two positions are not exclusive and the evidence supports a mixed account.',
        'On the Lister comparison, note that the evidentiary asymmetry runs the other way from the reception asymmetry: Semmelweis had the stronger data, Lister the stronger theory. This is the sharpest available illustration of the claim that adoption of a clinical practice is governed by theoretical assimilability rather than by evidential strength alone — which remains a live issue wherever an effective intervention lacks a mechanistic account.',
      ],
    },
    {
      id: 'the-two-wards',
      label: 'The experiment nobody designed',
      kind: 'angle',
      paragraphs: [
        'The reason this case is so clean is that Vienna had accidentally built a controlled trial and left it running for seven years.',
        '**Same building.** Both clinics were in the Vienna General Hospital, sharing air, water, food, laundry and season. Every environmental explanation — miasma, ventilation, climate, epidemic constitution — applies equally to both wards, and therefore explains nothing about the difference.',
        '**Random-ish assignment.** Admissions alternated by day. A woman went to the First or the Second Clinic according to when her labour started, which is as close to randomisation as the nineteenth century was going to manage without meaning to.',
        '**One variable.** The clinics differed in who attended the birth: medical students in the First, trainee midwives in the Second. Everything else was administratively identical.',
        '**A published outcome measure.** Mortality figures for both clinics were compiled annually and were public. Semmelweis did not have to gather data; he had to read it.',
        'That is a better experimental setup than most of what medicine produced for the next fifty years, and it was nobody’s idea. It also explains why Semmelweis was so certain, and why his certainty came across as arrogance: from where he stood, the answer was not an interpretation of the evidence. It was the only thing left standing after everything else had been eliminated.',
      ],
    },
    {
      id: 'semmelweis-and-lister',
      label: 'Why Lister was believed',
      kind: 'contrast',
      paragraphs: [
        'The same idea, twenty years apart, with opposite results. The comparison is the most instructive thing in the story.',
        '**Semmelweis, 1847.** Evidence: two wards, thousands of births, published annual mortality, a ninety per cent reduction sustained over a year. Mechanism: "cadaverous particles", meaning nothing. Communication: no publication for fourteen years, then a disorganised book and letters calling his readers murderers. Result: dismissed, ignored, died in an asylum.',
        '**Lister, 1867.** Evidence: a series of compound fracture cases, small numbers, no control group. Mechanism: Pasteur’s germ theory, applied directly — the air carries living organisms, carbolic acid kills them. Communication: prompt publication in the Lancet, lecture tours, patient argument with critics for a decade. Result: adopted across Europe, President of the Royal Society, a peerage.',
        'Lister had the weaker evidence and the stronger position, because a mechanism does something evidence alone cannot: it tells you what else to do. If germs cause infection, then you should also sterilise instruments, dress wounds, boil water, and worry about the surgeon’s coat. A statistical regularity with no theory tells you one thing to do and nothing about what it implies.',
        'None of which makes the treatment of Semmelweis defensible. It does mean that "he was right and they were fools" is an incomplete account of what happened, and a useless one for anybody who wants their own correct finding to be adopted.',
      ],
    },
  ],

  beforeAfter: {
    label: 'The First Clinic, before and after May 1847',
    before: {
      title: 'Before the basin',
      points: [
        'Around one mother in ten dying of childbed fever',
        'Students moving from autopsy room to delivery bed',
        'Explanations built on miasma, crowding and fear',
        'Women begging to be sent to the other ward',
        'Mortality three times higher than the midwives’ clinic',
      ],
    },
    after: {
      title: 'After the basin',
      points: [
        'Mortality down to around one per cent within two months',
        'Chlorinated lime scrub required of everyone entering',
        'A correct practice with no theory to explain it',
        'The two clinics converging, the First sometimes safer',
        'The man responsible out of a job within two years',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if Semmelweis had published clearly in 1848?',
      reasoning: 'The evidence was at its freshest and most dramatic in the year after the intervention, and the mortality tables were unambiguous. A prompt, well-organised paper — in German and in French, at the moment the numbers were being talked about — would have put the claim in front of the profession while it was a curiosity rather than an accusation, and several clinics were already experimenting.',
      constraint: 'Speculation. Holmes did publish promptly, in 1843, and was dismissed anyway. The obstacle was not only the absence of a paper: it was the absence of a mechanism and the presence of an implied confession, and neither of those would have been changed by better prose.',
    },
    {
      question: 'What if Pasteur had come twenty years earlier?',
      reasoning: 'With germ theory available in 1847, Semmelweis would have had a mechanism to attach to his numbers, and the Lister comparison suggests that is the decisive variable. Antisepsis might have spread through European medicine two decades early, across surgery as well as obstetrics, at a time when hospital mortality after operations ran extremely high.',
      constraint: 'This rearranges the whole history of nineteenth-century biology rather than one career, so it is speculation on a large scale. It also leaves the accusatory character of the finding untouched — a mechanism explains why doctors were carrying infection, which is not obviously easier to accept than being told so without one.',
    },
  ],

  quiz: [
    {
      question: 'What was the only real difference between the two Vienna maternity clinics?',
      options: [
        'The First was more crowded',
        'The First was staffed by medical students who also performed autopsies',
        'The Second admitted wealthier patients',
        'The Second had better ventilation',
      ],
      answerIndex: 1,
      explains: 'Both wards were in the same building with the same air, food and admissions policy. The First trained medical students, who came to deliveries from the dissecting room; the Second trained midwives, who did no autopsies.',
    },
    {
      question: 'What made Semmelweis realise the mechanism?',
      options: [
        'He saw bacteria under a microscope',
        'A colleague died with the same findings after being cut at a post-mortem',
        'A midwife told him',
        'He read Pasteur',
      ],
      answerIndex: 1,
      explains: 'Jakob Kolletschka was cut by a scalpel during an autopsy and died. His post-mortem findings matched those of the dead mothers exactly, which meant the same cause entering through a wound.',
    },
    {
      question: 'Why was his finding rejected despite the results?',
      options: [
        'The mortality figures were disputed',
        'He could not explain why it worked, and accepting it meant doctors had caused the deaths',
        'His method was expensive',
        'Other hospitals could not obtain chlorine',
      ],
      answerIndex: 1,
      explains: 'Germ theory was twenty years away, so he had a procedure with no mechanism in an era that required one — and the conclusion amounted to an accusation against every physician who had delivered a baby.',
    },
    {
      question: 'Why was Lister accepted twenty years later for the same principle?',
      options: [
        'He had far more data',
        'He was British',
        'He could name what he was killing, because Pasteur had established germ theory',
        'He treated more patients',
      ],
      answerIndex: 2,
      explains: 'Lister actually had weaker evidence. What he had was a mechanism — germs — which made the practice explicable, teachable and extendable to instruments, dressings and water.',
    },
  ],

  sources: [
    {
      id: 'semmelweis-1861',
      kind: 'primary',
      author: 'Ignaz Semmelweis',
      title: 'Die Ätiologie, der Begriff und die Prophylaxis des Kindbettfiebers',
      year: 1861,
      detail: 'Pest, Vienna and Leipzig, 1861; trans. K. Codell Carter as "The Etiology, Concept, and Prophylaxis of Childbed Fever", University of Wisconsin Press, 1983',
      note: 'His own account, fourteen years late: the clinic mortality tables, the reasoning, and the passage in which he counts himself among those responsible for the deaths.',
    },
    {
      id: 'holmes-1843',
      kind: 'primary',
      author: 'Oliver Wendell Holmes',
      title: 'The Contagiousness of Puerperal Fever',
      year: 1843,
      detail: 'New England Quarterly Journal of Medicine and Surgery, vol. 1, pp. 503–530',
      note: 'The same conclusion, four years earlier and an ocean away, promptly published and equally dismissed. The strongest evidence that publication alone was not the obstacle.',
    },
    {
      id: 'lister-1867',
      kind: 'primary',
      author: 'Joseph Lister',
      title: 'On a New Method of Treating Compound Fracture, Abscess, etc.',
      year: 1867,
      detail: 'The Lancet, vol. 89, March–July 1867, in several parts',
      note: 'The antiseptic principle, published with Pasteur’s germ theory behind it. Weaker evidence than Semmelweis had, and accepted — which is the comparison this story turns on.',
    },
    {
      id: 'nuland-2003',
      kind: 'book',
      author: 'Sherwin B. Nuland',
      title: 'The Doctors’ Plague: Germs, Childbed Fever, and the Strange Story of Ignác Semmelweis',
      year: 2003,
      detail: 'W. W. Norton (Great Discoveries series). ISBN 978-0-393-05299-4',
      note: 'A surgeon’s reading, and the strongest case that Semmelweis’s own conduct delayed adoption. Refuses the martyrdom version without excusing the profession.',
    },
    {
      id: 'carter-1994',
      kind: 'book',
      author: 'K. Codell Carter and Barbara R. Carter',
      title: 'Childbed Fever: A Scientific Biography of Ignaz Semmelweis',
      year: 1994,
      detail: 'Greenwood Press; reissued Transaction Publishers, 2005. ISBN 978-1-4128-0467-7',
      note: 'By the translator of the Ätiologie. The fullest reconstruction of the reasoning, and the counterweight to Nuland on where responsibility for non-adoption lies.',
    },
  ],
}
