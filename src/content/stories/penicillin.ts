import type { Story } from '../types'

/**
 * Voice: the medical-detective register Eric Lax works in — patient with the
 * bench detail, delighted by bedpans and back-extraction, and quietly insistent
 * about the people the famous version leaves out. The story is not the accident.
 * The story is the twelve years after the accident.
 */
export const penicillin: Story = {
  slug: 'penicillin',
  title: 'The Mould Was the Easy Part',
  subtitle: '1928 to 1941 — Fleming found it, could not make it, and stopped. Three people in Oxford spent three years turning it into a drug.',
  hook: 'Fleming saw the mould in 1928 and published it in 1929, and then nothing happened for a decade — because noticing a thing that kills bacteria is not the same as making a medicine.',
  era: 'modern',
  category: 'discoveries',
  years: [1928, 1945],
  regions: ['United Kingdom', 'United States'],
  nodes: ['penicillin', 'alexander-fleming', 'oxford-team', 'antibiotics', 'germ-theory'],
  tags: ['medicine', 'science', 'credit', 'war', 'industry', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-05',
  mood: 'jungle',

  reel: [
    { beat: 'hook', punch: true, text: 'Fleming found penicillin in 1928, published it in 1929, and then nothing happened for ten years.' },
    { beat: 'hook', text: 'Noticing something that kills bacteria is not the same as having a medicine.' },
    { beat: 'worldBefore', text: 'Before this, a scratch could kill you, and regularly did.' },
    { beat: 'worldBefore', text: 'Pneumonia killed a third of the people who got it. Childbirth killed mothers.' },
    { beat: 'worldBefore', punch: true, text: 'Doctors could name the organism, watch it multiply, and do essentially nothing.' },
    { beat: 'problem', kicker: 'September 1928', text: 'Fleming comes back from holiday to a stack of dishes he left out,' },
    { beat: 'problem', text: 'and one of them has mould on it with a clear ring around it,' },
    { beat: 'problem', punch: true, text: 'where the bacteria have simply stopped.' },
    { beat: 'problem', text: 'He writes it up honestly. Almost nobody reads it, and he cannot purify the stuff,' },
    { beat: 'problem', punch: true, text: 'so by the mid-thirties he has moved on. That is where the famous story ends.' },
    { beat: 'story', kicker: 'Oxford, 1938', text: 'Then Ernst Chain, going through old papers, finds the 1929 article,' },
    { beat: 'story', text: 'and Howard Florey decides the lab will try to extract the active substance.' },
    { beat: 'story', text: 'Norman Heatley builds the apparatus out of bedpans, milk churns and a doorbell.' },
    { beat: 'story', kicker: 'May 1940', text: 'Eight mice get a lethal dose of streptococci. Four get the extract.' },
    { beat: 'story', punch: true, mark: 'spike', text: 'By morning the four untreated mice are dead and the four treated ones are fine.' },
    { beat: 'story', kicker: 'February 1941', text: 'The first patient is a policeman dying of an infection from a scratch.' },
    { beat: 'story', text: 'He improves so fast they cannot believe it — and then the supply runs out.' },
    { beat: 'story', punch: true, mark: 'collapse', text: 'They filter his urine to recover the drug and give it back to him. He dies anyway.' },
    { beat: 'whyItHappened', text: 'The problem was never the biology. It was that they had grams of it,' },
    { beat: 'whyItHappened', text: 'and one human being needs more than a laboratory can grow in a month.' },
    { beat: 'whyItHappened', punch: true, text: 'So the discovery of penicillin was actually a manufacturing problem, and it took a war.' },
    { beat: 'consequences', text: 'America builds deep fermentation tanks and finds a better mould on a market melon,' },
    { beat: 'consequences', text: 'and by D-Day there are millions of doses in the invasion supply.' },
    { beat: 'consequences', punch: true, text: 'Fleming, Florey and Chain take the Nobel. Heatley, who built the machine, is not on the list.' },
    { beat: 'whyItMatters', text: 'And in his Nobel lecture, Fleming says the quiet part out loud:' },
    { beat: 'whyItMatters', text: 'take too little and you breed the bacteria that survive it.' },
    { beat: 'whyItMatters', punch: true, mark: 'echo', text: 'He described antibiotic resistance, accurately, in 1945, at the party.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'It is genuinely hard to hold in mind how recent this is. Within living memory, there was no reliable treatment for a bacterial infection. Not an expensive one, or a slow one. None.',
        'Germ theory had been settled since the 1870s, which meant doctors could identify the organism, culture it, watch it multiply and explain exactly what was going to happen. What they could not do was intervene. Antiseptics killed bacteria and also killed tissue, so they worked on surfaces and instruments and not inside a person.',
        'The consequences ran through everything. A scratch from a rose thorn or a kick in a football match could become a fatal septicaemia. Pneumonia killed something like a third of those who developed it. Childbed fever still killed mothers. Surgery was survivable but infection afterwards was a genuine gamble, and a compound fracture often meant amputation on the reasoning that you could survive without a leg.',
        'There had been one real advance. In 1932 Gerhard Domagk at Bayer found that a red dye, Prontosil, protected mice against streptococcal infection, and by 1935 the sulfonamides were in clinical use. They worked, they saved lives — Churchill was famously treated with one — and they had real limits: a narrow range of organisms, significant toxicity, and resistance appearing quickly.',
        'So the field was not empty when the Oxford team started. It was thin, and everyone in it knew what was missing: something that killed a wide range of bacteria and did not kill the patient.',
      ],
      aside: {
        kind: 'number',
        label: 'The number',
        body: 'To treat one adult human for one infection in 1941, the Oxford team needed roughly the yield of two thousand litres of mould culture. Their entire laboratory could produce enough for a few days of one patient. That gap — biology solved, quantity impossible — is the actual story.',
        sourceId: 'lax-2004',
      },
      sourceIds: ['bud-2007', 'lax-2004'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'In September 1928 Alexander Fleming returned to his laboratory at St Mary’s Hospital in London after a holiday, and found a stack of Petri dishes he had left on a bench. One, seeded with *Staphylococcus*, had a patch of mould growing on it, and around the mould was a clear halo where the bacterial colonies had dissolved.',
        'He investigated it properly. He identified the mould as a *Penicillium*, showed that the broth it grew in inhibited a range of bacteria, showed that it was not toxic to white blood cells, named the active substance penicillin, and published the work in the *British Journal of Experimental Pathology* in 1929.',
        'Then the story stalls, and it stalls for good reasons. Penicillin in broth is present in tiny quantities and is extraordinarily unstable — it degrades with heat, with acid, with alkali, with time. Fleming and his assistants could not concentrate it or keep it. Without a purified, stable preparation you cannot inject it, you cannot dose it, and you cannot run a trial.',
        'What Fleming could see it was good for was a laboratory technique — adding penicillin to a culture suppresses some bacteria and lets others grow, which is useful for isolating organisms — and possibly as a surface antiseptic. He tried it on a few superficial infections with mixed results. By the mid-1930s he had largely stopped working on it.',
        'That is the point the famous story leaves out. For eleven years, penicillin was a published curiosity that a competent bacteriologist had honestly reported and could not use.',
      ],
      aside: {
        kind: 'caution',
        label: 'Careful',
        body: 'The dish did not come in through a window. St Mary’s had a mycology laboratory on the floor below, and spores from there are the likeliest source. The London weather that September — a cold spell followed by warmth — is also part of the accident: it let the mould establish first and the bacteria grow afterwards.',
        sourceId: 'lax-2004',
      },
      sourceIds: ['fleming-1929', 'lax-2004'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'In 1938, at the Sir William Dunn School of Pathology in Oxford, Ernst Chain — a biochemist who had left Germany in 1933 — was reading through the literature on antibacterial substances and came across Fleming’s paper. The head of the department, Howard Florey, an Australian pathologist, agreed it was worth pursuing, and applied for funding to work on it. The Rockefeller Foundation gave them a grant. The British government gave them twenty-five pounds.',
        'The person who made it work was Norman Heatley, and his contribution is the one most consistently written out. The problem was extracting an unstable compound from litres of broth without destroying it. Heatley devised a counter-current back-extraction: shift the penicillin into an organic solvent at acid pH and straight back into water at neutral pH, continuously, fast enough that it does not have time to decay. He built the apparatus out of glass tubing, milk churns, a doorbell and, when they needed vessels to grow the mould in, hospital bedpans — which turned out to be the perfect shape, so he had a pottery in Stoke make six hundred ceramic copies.',
        'On 25 May 1940 they ran the experiment that settled it. Eight mice were injected with a lethal dose of streptococci. Four received penicillin. The next morning the four untreated mice were dead and the four treated ones were alive and well. Florey’s reported comment was that it looked like a miracle.',
        'The first human patient was Albert Alexander, a forty-three-year-old Oxford policeman, admitted in February 1941 with a septicaemia that had spread to his face, eyes and lungs. He was dying. They gave him penicillin, and within twenty-four hours he was visibly improving; within five days the infection was in retreat.',
        'And then they ran out. The entire national supply of penicillin was what the Dunn School could make, and they had used it. They collected his urine and re-extracted the drug from it to give it back — which bought a few more days. Then that ran out too. He relapsed, and on 15 March 1941 he died.',
        'Florey drew the correct conclusion, which is not the one about needing more mice. The biology was proven. What was missing was industrial capacity, and Britain in 1941 had none to spare and was being bombed.',
        'In June 1941 Florey and Heatley flew to the United States, carrying mould samples smeared into the linings of their coats in case the plane was forced down. At the Northern Regional Research Laboratory in Peoria, Illinois, two things transformed the yields: corn steep liquor, a waste product of the local corn industry, turned out to be an excellent growth medium; and a lab assistant brought in a cantaloupe from a Peoria market carrying a *Penicillium* strain that produced far more than Fleming’s. Deep-tank fermentation, developed with American pharmaceutical firms, did the rest.',
        'By the invasion of Normandy in June 1944 there was enough penicillin in the Allied medical supply to treat every casualty who needed it.',
      ],
      aside: {
        kind: 'voice',
        label: 'A voice from the time',
        body: 'The Oxford team published their first clinical results in the Lancet in August 1941, and the tone is characteristic: careful, quantitative, and open about the limits. They describe dramatic responses in seriously ill patients, and state plainly that the supply of the drug was the factor limiting treatment — including in the case that ended in the patient’s death.',
        sourceId: 'abraham-1941',
      },
      sourceIds: ['chain-florey-1940', 'abraham-1941', 'lax-2004'],
    },

    whyItHappened: {
      heading: 'Why it took twelve years',
      paragraphs: [
        'The gap between 1929 and 1941 is not a story about a genius being ignored. It is a story about what a discovery actually consists of.',
        '**The chemistry was genuinely hard.** Penicillin is unstable in almost every condition you would use to concentrate something. Fleming was a bacteriologist without a biochemist, and the extraction problem was not solved until Heatley approached it as an engineering problem rather than a chemical one.',
        '**Nobody had the right team.** What Oxford assembled was unusual: a pathologist who could design and run animal and clinical trials, a biochemist who could think about the molecule, and a bench experimentalist who could build apparatus out of whatever was in the building. Fleming had none of that around him, and there is no criticism in saying so.',
        '**The scale problem was the real one.** Even after Oxford could make usable penicillin, they could not make enough. One patient consumed everything a well-run university department could produce. A drug that exists in gram quantities is a research result; a drug that exists in tonnes is a medicine, and the distance between those is a chemical engineering programme, not a laboratory.',
        '**And then the war supplied the reason to pay for it.** Infected wounds were a major cause of military death, and the United States had the fermentation industry, the capital and the distance from bombing. Between 1943 and 1945 American production went from a few billion units a year to hundreds of billions. It is uncomfortable but true that the drug reached the world when it did because armies needed it.',
        'As for why Fleming got the credit: he had genuinely made the initial observation and published it, which is not nothing. But the fame was also manufactured. St Mary’s had an energetic press operation, Fleming was willing to talk to journalists, and Florey — who regarded publicity as unprofessional and worried about raising expectations while supply was short — flatly refused to. One side of the story briefed the newspapers and the other did not.',
      ],
      sourceIds: ['lax-2004', 'bud-2007'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'Penicillin did not simply add a treatment. It removed an entire category of ordinary death.',
      ],
      shortTerm: [
        'By D-Day in June 1944 there was enough penicillin for every Allied casualty who needed it, and infection deaths from battlefield wounds fell sharply.',
        'The drug went on general civilian sale in Britain and the United States in 1945, and prices collapsed as production scaled: a dose that cost twenty dollars in 1943 cost pennies by 1946.',
        'Fleming, Florey and Chain shared the 1945 Nobel Prize in Physiology or Medicine.',
        'Norman Heatley was not included — the prize is limited to three — and received no formal recognition for decades.',
        'Britain, having developed it, largely failed to patent or industrialise it, and ended up buying penicillin under American process patents.',
      ],
      longTerm: [
        'Bacterial infection stopped being a leading cause of death in wealthy countries. Pneumonia, septicaemia, endocarditis, childbed fever and many complications of surgery became treatable.',
        'The rest of modern medicine became possible on top of it: major surgery, transplants, chemotherapy and intensive care all depend on being able to control infection afterwards.',
        'A whole class followed — streptomycin against tuberculosis in 1943, then tetracyclines, cephalosporins and the rest. The two decades after the war are still called the golden age of antibiotics.',
        'Resistance arrived exactly as predicted. Penicillin-resistant *Staphylococcus* was reported within a few years of general use, and the arms race has not stopped since.',
        'In 1990, at the age of eighty and forty-nine years after building the apparatus, Norman Heatley received an honorary doctorate of medicine from Oxford — the first the university had awarded to a non-physician in eight hundred years.',
      ],
      unexpected: [
        'The mould that ended up producing the world’s penicillin came from a cantaloupe bought at a market in Peoria, Illinois. Descendants of that strain are still used.',
        'Florey and Heatley smeared mould spores into the linings of their coats before flying to America, so that the strain would survive if the aircraft was lost.',
        'The Oxford team grew the mould in hospital bedpans until they could get a pottery to make six hundred purpose-built ceramic vessels of the same shape.',
        'When their first patient improved and the supply ran out, they extracted penicillin back out of his urine and re-administered it. It was not enough.',
        'Fleming used his Nobel lecture in 1945 to describe, precisely, how underdosing would breed resistant bacteria — including a hypothetical man who buys too little for himself and then infects someone else with a resistant strain.',
      ],
      sourceIds: ['lax-2004', 'bud-2007', 'fleming-nobel-1945'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The version everyone knows — a distracted scientist, an open window, a lucky mould, and modern medicine — is wrong in a way that matters, because it teaches the wrong thing about how discoveries happen.',
        'Fleming’s observation was real and he reported it honestly. It then sat in the literature for a decade doing nothing, because an observation is not a treatment. What turned it into medicine was a biochemist reading old papers, an experimentalist building a back-extraction rig out of bedpans and a doorbell, a pathologist running a clean animal trial, and eventually American engineers solving deep-tank fermentation at industrial scale. The insight was the cheap part. Everything after it was the work.',
        'That is worth insisting on, because we systematically over-reward the moment of noticing and under-reward the twelve years of making it usable — in prizes, in funding and in how we tell the story to children. Heatley solved the problem that was actually blocking the drug and could not be given the prize, because the rules allow three names and history had already chosen one of them.',
        'And then there is the warning, which is the strangest part. On 11 December 1945, accepting the Nobel Prize, Fleming stood up and explained that penicillin resistance was coming, that it would be caused by people taking too little of it for too short a time, and that the person who did that would be morally responsible for the death of whoever they subsequently infected. That is not hindsight. That is the discoverer, at the moment of maximum triumph, describing the failure mode correctly.',
        'We have been running that experiment ever since. The atlas keeps a thread on warnings that were made clearly, early and in public, and then not acted on. This one was delivered from a podium in Stockholm, in front of the world’s press, by the most famous scientist alive.',
      ],
      sourceIds: ['fleming-nobel-1945', 'lax-2004'],
    },
  },

  timeline: [
    { year: 1870, title: 'Moulds are noticed to inhibit bacteria', detail: 'Lister and others record that some moulds prevent bacterial growth. The observation is made repeatedly and goes nowhere for sixty years.', confidence: 'contested' },
    { year: 1932, title: 'Domagk finds Prontosil', detail: 'A red dye protects mice against streptococci. The sulfa drugs follow in 1935 — real, useful, narrow, and prone to resistance.', pivotal: true },
    { year: 1928, date: '1928-09', title: 'Fleming’s contaminated dish', detail: 'Back from holiday, he finds a Penicillium colony on a staphylococcus plate with a clear halo where the bacteria have dissolved.', pivotal: true },
    { year: 1929, title: 'Fleming publishes', detail: 'The British Journal of Experimental Pathology carries an honest, careful paper. It attracts almost no attention, and he cannot purify the substance.', pivotal: true },
    { year: 1938, title: 'Chain finds the paper', detail: 'At Oxford, a biochemist reviewing antibacterial substances comes across the 1929 article, and Florey agrees the lab should pursue it.', pivotal: true },
    { year: 1940, date: '1940-05-25', title: 'The mouse experiment', detail: 'Eight mice, a lethal dose of streptococci, four treated. By morning the four untreated are dead and the treated four are well.', pivotal: true },
    { year: 1940, date: '1940-08-24', title: 'The Lancet paper', detail: 'The Oxford team publishes "Penicillin as a Chemotherapeutic Agent" — the results that make it a drug rather than a curiosity.' },
    { year: 1941, date: '1941-02-12', title: 'Albert Alexander is treated', detail: 'An Oxford policeman dying of septicaemia improves dramatically, then relapses when the entire national supply of penicillin runs out. He dies in March.', pivotal: true },
    { year: 1941, date: '1941-07', title: 'Florey and Heatley fly to America', detail: 'Carrying mould in their coat linings, they seek the industrial capacity Britain cannot supply while being bombed.', pivotal: true },
    { year: 1943, title: 'Peoria: corn steep liquor and a melon', detail: 'A waste product of the corn industry and a strain found on a market cantaloupe raise yields enormously. Deep-tank fermentation follows.', pivotal: true },
    { year: 1944, date: '1944-06', title: 'Enough for D-Day', detail: 'Allied medical supplies carry enough penicillin to treat every casualty who needs it. Deaths from wound infection fall sharply.' },
    { year: 1945, date: '1945-12-11', title: 'The Nobel, and the warning', detail: 'Fleming, Florey and Chain share the prize. In his lecture Fleming describes exactly how underdosing will breed resistant bacteria.', pivotal: true },
    { year: 1990, title: 'Heatley is finally honoured', detail: 'Oxford gives him an honorary doctorate of medicine — the first awarded to a non-physician in the university’s eight-hundred-year history.' },
  ],

  causeEffect: [
    { cause: 'Germ theory establishes that bacteria cause disease', effect: 'It becomes possible to look for something that kills them', because: 'You cannot search for a cure to a cause you do not believe exists; the target had to be identified before anyone could aim at it.' },
    { cause: 'A Penicillium spore lands on a staphylococcus plate', effect: 'Fleming observes bacterial dissolution around the mould', because: 'The mould secretes a compound that disrupts bacterial cell-wall construction, clearing a visible ring in the colonies.' },
    { cause: 'Penicillin is unstable in heat, acid and alkali', effect: 'Fleming cannot purify or store it', because: 'Every ordinary concentration technique destroyed the substance faster than it could be recovered.' },
    { cause: 'Heatley devises continuous back-extraction', effect: 'Usable quantities can finally be produced', because: 'Moving the compound between solvent and water quickly enough outran its own rate of decay — an engineering answer to a chemical problem.' },
    { cause: 'One patient consumes the entire national supply', effect: 'The bottleneck is revealed as manufacturing, not biology', because: 'A drug that works but cannot be made in kilograms is a research result rather than a treatment.' },
    { cause: 'The war creates demand and America has the fermentation industry', effect: 'Production scales by orders of magnitude', because: 'Deep-tank fermentation needed capital, engineers and factories out of bombing range, and only one country had all three.' },
    { cause: 'St Mary’s promotes Fleming while Florey refuses interviews', effect: 'The public story becomes a story about one man', because: 'Press coverage follows whoever will speak to the press, and the record then hardens around what was printed.' },
    { cause: 'Antibiotics are used in doses too small or too short', effect: 'Resistant strains are selected for', because: 'Survivors of an incomplete course are, by definition, the bacteria least affected by the drug, and they are the ones that go on to reproduce.' },
  ],

  myths: [
    {
      myth: 'Fleming discovered penicillin and it went on to save millions of lives.',
      reality: 'Both halves are true and the sentence between them is missing. Fleming observed the effect and published it in 1929, then could not purify or stabilise it and largely abandoned the work by the mid-1930s. Penicillin became a medicine because Florey, Chain and Heatley at Oxford solved the extraction from 1938, and because American industry solved production from 1943.',
      whyItPersists: 'Discoveries are remembered through one name, and Fleming was willing to talk to journalists while Florey considered publicity unprofessional and refused.',
      sourceIds: ['lax-2004', 'bud-2007'],
    },
    {
      myth: 'The mould blew in through an open window.',
      reality: 'The likeliest source is the mycology laboratory on the floor below St Mary’s, where a colleague was working with moulds. The unusual London weather that September — cold then warm — also mattered, allowing the mould to establish before the staphylococci grew.',
      whyItPersists: 'The open window is a better image, and Fleming himself told the story loosely in later interviews.',
      sourceIds: ['lax-2004'],
    },
    {
      myth: 'Penicillin was the first drug that could cure a bacterial infection.',
      reality: 'The sulfonamides came first. Domagk found Prontosil in 1932 and the sulfa drugs were in clinical use from 1935, saving many lives during the early war years. Penicillin was broader, far less toxic and eventually far more available — but it arrived into a field that already had one working answer.',
      whyItPersists: 'Penicillin was so much better that it made its predecessor look like a footnote, and the sulfa drugs had no equivalent origin story.',
      sourceIds: ['bud-2007'],
    },
    {
      myth: 'Nobody could have known resistance was coming.',
      reality: 'Fleming described the mechanism in his Nobel lecture in December 1945, before penicillin had been in general civilian use for a year — including a specific scenario of a man buying too small a dose, under-treating himself and passing on a resistant organism. Resistant staphylococci were reported within a few years.',
      whyItPersists: 'It is more comfortable to treat resistance as an unforeseeable consequence than as a documented prediction that was not acted on.',
      sourceIds: ['fleming-nobel-1945'],
    },
  ],

  disagreements: [
    {
      question: 'How much credit does Fleming deserve?',
      positions: [
        { view: 'A great deal. He made the original observation, recognised it was significant, characterised the mould, established that the substance was non-toxic to leucocytes, named it and published it. Without the 1929 paper Chain would have had nothing to find.', heldBy: 'The traditional account, and Fleming’s 1929 paper itself', sourceId: 'fleming-1929' },
        { view: 'Much less than he received. He could not purify it, ran no proper animal protection experiments, treated it mainly as a laboratory tool, and abandoned it. The work that made it a drug was done at Oxford by people the public has never heard of.', heldBy: 'Eric Lax and most historians of the episode', sourceId: 'lax-2004' },
      ],
      atlasPosition: 'The atlas credits Fleming with a real and honestly reported observation, and credits Florey, Chain and Heatley with turning it into a medicine. It treats the imbalance in public memory as a fact about press access rather than about science.',
    },
    {
      question: 'Was the wartime American takeover of production a rescue or an appropriation?',
      positions: [
        { view: 'A rescue. Britain in 1941 was under bombardment with no spare industrial capacity; without American fermentation plants penicillin would have arrived years later and saved far fewer people.', heldBy: 'The standard account of the 1941 mission', sourceId: 'lax-2004' },
        { view: 'An appropriation with lasting consequences. British researchers gave away the strains and the know-how without protection, and Britain subsequently had to license American process patents to make a drug it had developed.', heldBy: 'Robert Bud and historians of the pharmaceutical industry', sourceId: 'bud-2007' },
      ],
      atlasPosition: 'The atlas holds both: the transfer was necessary at the time and the failure to protect the position was a real and costly decision. It does not present either as the whole account.',
    },
  ],

  didYouKnow: [
    'Penicillin was published in 1929 and did not treat a patient until 1941. The gap was chemistry and manufacturing, not biology.',
    'The Oxford team grew the mould in hospital bedpans, then had a pottery make six hundred ceramic vessels of the same shape.',
    'Norman Heatley built the extraction apparatus out of glass tubing, milk churns and a doorbell.',
    'When their first patient’s supply ran out, they re-extracted penicillin from his urine and gave it back to him.',
    'Florey and Heatley smeared mould into their coat linings before flying to America, in case the aircraft went down.',
    'The high-yielding strain that supplied the world came from a cantaloupe bought at a market in Peoria, Illinois.',
    'Heatley was left off the Nobel Prize because it can be shared by at most three people. Oxford honoured him in 1990, aged eighty.',
    'Fleming used his 1945 Nobel lecture to predict antibiotic resistance and describe exactly how underdosing would cause it.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'In September 1928 Alexander Fleming found a mould growing on a bacterial culture plate at St Mary’s Hospital, with a clear ring around it where the bacteria had dissolved. He identified it, named the active substance penicillin and published in 1929 — and then could not purify or stabilise it, so by the mid-1930s he had moved on.',
        'In 1938 Ernst Chain came across the paper at Oxford. Howard Florey backed the work, and Norman Heatley solved the extraction with a continuous back-extraction rig built from glass tubing, milk churns and a doorbell, growing the mould in hospital bedpans.',
        'On 25 May 1940 four mice given a lethal streptococcal dose survived on penicillin while four untreated controls died. The first patient, an Oxford policeman with septicaemia, improved dramatically in February 1941 — then the entire national supply ran out. They re-extracted the drug from his urine, ran out again, and he died.',
        'The bottleneck was manufacturing. Florey and Heatley took the mould to the United States in 1941; corn steep liquor, a high-yielding strain from a Peoria market melon and deep-tank fermentation scaled production enormously. By D-Day there was enough for every Allied casualty. Fleming, Florey and Chain shared the 1945 Nobel; Heatley did not.',
      ],
    },
    {
      id: 'age-10',
      label: 'Explain like I’m 10',
      kind: 'age',
      paragraphs: [
        'Not that long ago, if you got a bad cut and it went septic, there was basically nothing a doctor could do. They could tell you exactly which germ was killing you. They just could not stop it.',
        'In 1928 a scientist called Fleming came back from his holidays and found that one of his dishes of germs had gone mouldy. And in a ring all around the mould, the germs had disappeared. Something in the mould was killing them.',
        'That is the bit everyone knows. Here is the bit nobody tells you: for the next ten years, nothing happened. Fleming could not get the germ-killing stuff out of the mould without wrecking it, so he gave up on it.',
        'Then three people in Oxford picked up his old paper and had a go. One of them, Norman Heatley, built a machine to pull the medicine out of the mould goo — using glass tubes, milk churns and an actual doorbell. They grew the mould in hospital bedpans, because bedpans happened to be exactly the right shape.',
        'It worked. But they could only make a tiny amount — so little that one sick policeman used up all of it in the whole country, and they had to collect his wee and pull the medicine back out of it to give him more. He still died, because they ran out.',
        'So the real problem was not "how do we find a medicine". It was "how do we make an enormous amount of it". Factories in America solved that, and suddenly a scratch was not a way to die any more.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The episode is a standard case study in the sociology of scientific credit, and the asymmetry has a documented cause: St Mary’s Hospital operated an effective press function under Charles Wilson, Fleming gave interviews readily, and Florey declined all contact with journalists on the twin grounds of professional propriety and the risk of generating demand that supply could not meet. The Beaverbrook press consolidated the single-discoverer narrative during 1942–43, and the 1945 Nobel citation, which names three, did not displace it.',
        'On the science, Fleming (1929) is a competent and honest paper whose limits are usually misstated. He did establish antibacterial spectrum and low leucocyte toxicity, but he did not conduct systemic protection experiments in animals, and his framing of penicillin as a selective culture medium and possible topical antiseptic reflects a bacteriologist’s rather than a chemotherapeutic conception. The Oxford contribution is not merely scale-up: Chain and Abraham’s work on the molecule, and Florey’s design of the mouse protection experiment of May 1940, constitute the transition from observation to therapeutic hypothesis.',
        'Heatley’s counter-current back-extraction deserves separate emphasis as a case of engineering solving a chemical instability problem by manipulating residence time rather than conditions. It is also the clearest instance of the credit asymmetry, since the Nobel statutes cap laureates at three and technical contributions have historically been the ones excluded.',
        'The industrial phase, treated most fully by Bud (2007), raises the intellectual-property question that shaped post-war British pharmaceutical policy: the Oxford group did not patent, partly on ethical grounds then widely held in British academic medicine, and the resulting dependence on American process patents became a recurring political grievance and an argument in the establishment of subsequent UK technology transfer policy.',
        'Finally, Fleming’s Nobel lecture (1945) should be read as a primary document in the history of antimicrobial resistance. It states the selection mechanism, identifies sub-therapeutic dosing as the driver, and offers a transmission scenario. Resistance in *Staphylococcus aureus* was documented in clinical settings within a few years, which makes this an unusually well-dated instance of an accurate public warning preceding the harm.',
      ],
    },
    {
      id: 'the-bedpans',
      label: 'The part built out of bedpans',
      kind: 'angle',
      paragraphs: [
        'Strip out the fame and the Oxford work is a sequence of very concrete problems, each solved by somebody looking at what was physically in the building.',
        '**Growing it.** Penicillium grows as a mat on the surface of liquid, so you want vessels that are wide and shallow with a large surface area. They tried biscuit tins, pie dishes and bottles, and settled on hospital bedpans, which are exactly that shape. When they needed hundreds, Heatley got a Stoke-on-Trent pottery to make six hundred ceramic versions.',
        '**Getting it out.** The active compound is present in tiny concentration in litres of broth and falls apart in heat, acid or alkali. Heatley’s answer was to move it fast: shift it into amyl acetate at low pH, then straight back into water at neutral pH, continuously, in a counter-current rig — so the compound spends the minimum possible time in any condition that destroys it. The apparatus ran on a doorbell as its alarm and milk churns as its reservoirs.',
        '**Knowing how much you have.** They had no way to weigh a compound they could not isolate pure, so they defined a unit by what it did — the Oxford unit, the amount that inhibited a standard staphylococcus culture over a set area. Measuring a drug by its effect rather than its mass is a completely reasonable thing to do and slightly unnerving to read about.',
        '**Proving it.** Eight mice, four treated. Simple, decisive, and the sort of experiment that only looks obvious once someone has thought of a reason to be confident enough to try it.',
        'None of this is glamorous, and all of it was the actual barrier. The mould had been sitting in the literature for eleven years waiting for someone to solve the plumbing.',
      ],
    },
    {
      id: 'the-warning',
      label: 'The warning in the acceptance speech',
      kind: 'contrast',
      paragraphs: [
        'On 11 December 1945, Alexander Fleming stood in Stockholm to accept the Nobel Prize, at the height of penicillin’s reputation as a miracle, and used part of the lecture to explain how it would be ruined.',
        '**What he said.** That it is easy to make bacteria resistant to penicillin in the laboratory, by exposing them to concentrations too low to kill them. That the same thing will happen in the body. And that the danger is the person who takes an insufficient dose — who does not kill the organism, but educates it.',
        '**The scenario he gave.** A man with a sore throat buys penicillin, takes too little of it, breeds resistant streptococci in his own throat, and infects his wife, who develops a pneumonia that penicillin can no longer treat. In that case, Fleming said, the man is morally responsible for her death.',
        '**What happened.** Penicillin-resistant *Staphylococcus aureus* appeared in hospitals within a few years. Methicillin was introduced in 1959; methicillin-resistant strains were reported in 1960. The pattern has repeated for every class of antibiotic since, and antimicrobial resistance is now among the leading causes of death worldwide.',
        'The atlas keeps a thread running through stories like this, and it is not a thread about prediction being hard. Fleming got it right, in public, at the most widely reported moment of his life, eighty years ago. The difficulty has never been knowing.',
      ],
    },
  ],

  beforeAfter: {
    label: 'A bacterial infection, before and after',
    before: {
      title: 'Before 1941',
      points: [
        'A scratch could become a fatal septicaemia',
        'Pneumonia killed roughly a third of those who developed it',
        'Doctors could identify the organism and not much else',
        'Surgery survivable, the infection afterwards a gamble',
        'Sulfa drugs from 1935: narrow, toxic, quickly resisted',
      ],
    },
    after: {
      title: 'After 1945',
      points: [
        'Most bacterial infections curable with an injection',
        'Pneumonia and septicaemia no longer routine causes of death',
        'Transplants, chemotherapy and intensive care become possible',
        'A dose costing twenty dollars in 1943 costing pennies by 1946',
        'Resistance appearing within a few years, exactly as predicted',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if Chain had never come across Fleming’s 1929 paper?',
      reasoning: 'The paper had been sitting unread for nine years. Without Chain’s literature review, Oxford would have pursued another antibacterial substance — they were already working on lysozyme — and penicillin might have waited years longer, missing the wartime industrial push that made mass production possible.',
      constraint: 'Speculation, and probably bounded. Several groups were hunting antibacterial substances after the sulfa drugs proved the concept, and mould inhibition had been observed repeatedly since the nineteenth century. A delay is plausible; permanent oblivion is not.',
    },
    {
      question: 'What if the Oxford team had patented penicillin?',
      reasoning: 'Britain would have retained royalties and negotiating position instead of licensing American process patents to manufacture a drug it had developed, and the money might have funded a stronger post-war British pharmaceutical research base.',
      constraint: 'The decision not to patent reflected a genuine and widely held view in British academic medicine that patenting a medicine was unethical, and the American patents were on production processes rather than the compound, which the Oxford team had not developed. Speculating otherwise requires changing the professional culture, not just one decision.',
    },
  ],

  quiz: [
    {
      question: 'Why did nothing happen for a decade after Fleming published in 1929?',
      options: [
        'Nobody believed his results',
        'He could not purify or stabilise penicillin, so it could not be used as a drug',
        'The paper was rejected by journals',
        'He kept the discovery secret',
      ],
      answerIndex: 1,
      explains: 'Penicillin degrades with heat, acid, alkali and time, and is present in tiny concentrations. Without a stable purified preparation you cannot dose it, inject it or trial it.',
    },
    {
      question: 'What did Norman Heatley contribute?',
      options: [
        'He discovered the mould',
        'He funded the research',
        'He devised the extraction method and built the apparatus that made usable quantities possible',
        'He ran the clinical trial',
      ],
      answerIndex: 2,
      explains: 'Heatley’s continuous counter-current back-extraction — built from glass tubing, milk churns and a doorbell — outran penicillin’s own rate of decay. He was left off the Nobel Prize, which allows only three names.',
    },
    {
      question: 'What happened to the first patient treated with penicillin?',
      options: [
        'He recovered fully',
        'He improved dramatically, then died when the supply ran out',
        'He had a fatal allergic reaction',
        'He refused the treatment',
      ],
      answerIndex: 1,
      explains: 'Albert Alexander improved within a day. The entire national supply was exhausted; the team re-extracted the drug from his urine to continue, ran out again, and he relapsed and died in March 1941.',
    },
    {
      question: 'What did Fleming warn about in his 1945 Nobel lecture?',
      options: [
        'That the mould might become extinct',
        'That penicillin would be too expensive',
        'That underdosing would breed resistant bacteria',
        'That doctors would over-rely on injections',
      ],
      answerIndex: 2,
      explains: 'He described the selection mechanism precisely, including a scenario of a man taking too small a dose, breeding resistant organisms and passing them to someone else. Resistant staphylococci appeared within a few years.',
    },
  ],

  sources: [
    {
      id: 'fleming-1929',
      kind: 'paper',
      author: 'Alexander Fleming',
      title: 'On the Antibacterial Action of Cultures of a Penicillium, with Special Reference to their Use in the Isolation of B. influenzae',
      year: 1929,
      detail: 'British Journal of Experimental Pathology, vol. 10, no. 3, pp. 226–236',
      note: 'The original paper. Honest, careful, and revealing in its title: he is presenting it chiefly as a technique for isolating other bacteria.',
    },
    {
      id: 'chain-florey-1940',
      kind: 'paper',
      author: 'E. Chain, H. W. Florey, A. D. Gardner, N. G. Heatley and others',
      title: 'Penicillin as a Chemotherapeutic Agent',
      year: 1940,
      detail: 'The Lancet, vol. 236, 24 August 1940, pp. 226–228',
      note: 'The paper that turns a curiosity into a drug: the mouse protection experiment and the extraction that made it possible.',
    },
    {
      id: 'abraham-1941',
      kind: 'paper',
      author: 'E. P. Abraham, E. Chain, C. M. Fletcher, H. W. Florey and others',
      title: 'Further Observations on Penicillin',
      year: 1941,
      detail: 'The Lancet, vol. 238, 16 August 1941, pp. 177–189',
      note: 'The first clinical cases, including the Oxford policeman. Notable for stating plainly that supply, not efficacy, was the limiting factor.',
    },
    {
      id: 'fleming-nobel-1945',
      kind: 'primary',
      author: 'Alexander Fleming',
      title: 'Penicillin — Nobel Lecture',
      year: 1945,
      detail: 'Delivered 11 December 1945; published by the Nobel Foundation',
      note: 'The resistance warning, delivered at the moment of triumph: the mechanism, the cause, and a specific scenario of how underdosing kills someone else.',
    },
    {
      id: 'lax-2004',
      kind: 'book',
      author: 'Eric Lax',
      title: 'The Mold in Dr. Florey’s Coat: The Story of the Penicillin Miracle',
      year: 2004,
      detail: 'Henry Holt. ISBN 978-0-8050-7778-0',
      note: 'The Oxford story in full, including Heatley’s apparatus and the flight to America. The main corrective to the single-discoverer version.',
    },
    {
      id: 'bud-2007',
      kind: 'book',
      author: 'Robert Bud',
      title: 'Penicillin: Triumph and Tragedy',
      year: 2007,
      detail: 'Oxford University Press. ISBN 978-0-19-925406-4',
      note: 'The industrial, political and cultural history: the sulfa drugs before it, the American scale-up, the patent question, and resistance afterwards.',
    },
  ],
}
