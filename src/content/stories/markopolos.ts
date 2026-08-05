import type { Story } from '../types'

export const markopolos: Story = {
  slug: 'markopolos',
  title: 'Nine Years Early',
  subtitle: 'Harry Markopolos — he proved the biggest fraud in history in an afternoon, and was ignored for nine years.',
  hook: 'The largest fraud in history was never hidden — one man proved it in an afternoon, and spent nine years being right about it alone.',
  era: 'contemporary',
  years: [1999, 2009],
  regions: ['United States'],
  nodes: ['harry-markopolos', 'madoff-fraud', 'bernie-madoff', 'sec', 'ponzi-scheme'],
  tags: ['fraud', 'finance', 'whistleblower', 'regulation', 'ponzi', 'legend'],
  readingMinutes: 10,
  reviewed: '2026-08-03',
  mood: 'ledger',

  reel: [
    { beat: 'hook', punch: true, text: 'The biggest fraud in history was never hidden, and one man saw it in an afternoon.' },
    { beat: 'hook', text: 'Then spent nine years being right, and being ignored.' },
    { beat: 'worldBefore', kicker: '1999', text: 'Bernie Madoff is the most trusted name on Wall Street —' },
    { beat: 'worldBefore', text: 'a former chairman of the NASDAQ, running a fund' },
    { beat: 'worldBefore', text: 'that has never had a bad month in anyone’s memory,' },
    { beat: 'worldBefore', punch: true, text: 'which is not success. That is the tell.' },
    { beat: 'problem', text: 'Harry Markopolos is asked to copy the strategy for a rival firm,' },
    { beat: 'problem', text: 'and because he is a numbers man he starts with the returns,' },
    { beat: 'problem', punch: true, mark: 'toosmooth', text: 'and real returns are jagged, while Madoff’s climb in a straight line.' },
    { beat: 'problem', punch: true, text: 'No market moves like that, because no market is that kind.' },
    { beat: 'story', text: 'So he takes apart the strategy Madoff says he is running,' },
    { beat: 'story', text: 'which needs options on the S&P 100 in enormous quantities —' },
    { beat: 'story', punch: true, mark: 'imbalance', text: 'more than exist in the entire market.' },
    { beat: 'story', text: 'The trades cannot have happened, which means they never did,' },
    { beat: 'story', punch: true, text: 'which means he is not trading at all.' },
    { beat: 'story', text: 'New money is paying the old, behind one of the great names in finance.' },
    { beat: 'story', kicker: '2000', text: 'Markopolos takes it to the SEC, then takes it again, and again,' },
    { beat: 'story', kicker: '2005', punch: true, text: 'under a title nobody could misread. "The World’s Largest Hedge Fund Is a Fraud."' },
    { beat: 'whyItHappened', text: 'The regulator opens investigations, more than once,' },
    { beat: 'whyItHappened', punch: true, text: 'and clears him every single time,' },
    { beat: 'whyItHappened', text: 'because nobody there could follow the mathematics he had sent them,' },
    { beat: 'whyItHappened', text: 'and because you do not accuse a legend on a stranger’s word.' },
    { beat: 'whyItHappened', mark: 'echo', text: 'So the warning arrives, is filed, and arrives again,' },
    { beat: 'whyItHappened', punch: true, text: 'and the hard part turns out not to be seeing it. It is being believed.' },
    { beat: 'consequences', kicker: '2008', text: 'Then the crash comes and everyone wants their money at once,' },
    { beat: 'consequences', mark: 'collapse', text: 'the new money stops, and there is nothing behind the statements.' },
    { beat: 'consequences', punch: true, text: 'Madoff confesses. The statements said sixty-five billion dollars.' },
    { beat: 'consequences', text: 'Most of it had never existed.' },
    { beat: 'whyItMatters', text: 'The comforting version is that nobody could have known,' },
    { beat: 'whyItMatters', punch: true, text: 'but somebody did, nine years early, and nothing about that changed.' },
  ],

  beats: {
    worldBefore: {
      heading: 'The world before',
      paragraphs: [
        'By the late 1990s, Bernard L. Madoff Investment Securities was one of the most respected names on Wall Street, and Bernie Madoff himself was as close to unimpeachable as the industry produced.',
        'He had helped build the NASDAQ — the electronic market that broke the old floor-trading monopoly — and had served as its non-executive chairman. His firm was a major, legitimate market-maker, executing a real and enormous volume of ordinary trades. That business was genuine.',
        'Alongside it ran a private investment operation, and that was the one people whispered about — not because it seemed crooked, but because it seemed *too good*. It returned something like one to one and a half percent a month, year after year, in up markets and down. It almost never had a losing month.',
        'To get in, you often had to be invited. Money managers placed their clients’ savings with him and asked few questions, because the returns were steady and the man was Bernie Madoff. Charities, universities and pension funds followed.',
        'A track record that smooth is the thing every investor dreams of. It is also the single clearest sign, to anyone who knows how markets actually behave, that something is wrong.',
      ],
      aside: {
        kind: 'number',
        label: 'What "too smooth" means',
        body: 'Real investment returns are volatile — they zigzag, because markets do. A line that rises in a near-perfect diagonal regardless of what the market is doing is not evidence of skill. No legitimate strategy is that consistent, because no market is.',
      },
      sourceIds: ['henriques-2011', 'markopolos-2010'],
    },

    problem: {
      heading: 'The problem',
      paragraphs: [
        'In 1999, Harry Markopolos was a portfolio manager at Rampart Investment Management in Boston. A colleague, Frank Casey, came back from a meeting having learned that a rival firm was raising money on the back of Madoff’s returns, and Rampart’s executives asked Markopolos a simple question: could he build a product that did the same thing?',
        'Markopolos was, by training and temperament, a quantitative analyst — someone who reduces a claim to its arithmetic. He took Madoff’s reported returns and tried to reverse-engineer the strategy that produced them.',
        'He could not. Within, by his own account, about four hours, he had concluded that the returns were not merely hard to replicate but mathematically impossible. His suspicion took minutes; the proof took the afternoon.',
        'The problem was not that Madoff was better than everyone else. The problem was that the numbers Madoff reported could not be produced by the strategy Madoff described, or by any strategy at all.',
      ],
      sourceIds: ['markopolos-2010', 'markopolos-2005'],
    },

    story: {
      heading: 'The story',
      paragraphs: [
        'Madoff said he ran a "split-strike conversion" — a real, unremarkable options strategy. You hold a basket of large stocks, and you use options on a market index to fence in the outcome: buy puts to cap the losses, sell calls to pay for them. It smooths returns a little. It does not turn them into a straight line, and it certainly does not beat the market year after year with almost no down months.',
        'Markopolos went at it two ways, and both roads ended in the same place.',
        'First, the correlation. If Madoff really held a basket of stocks fenced by index options, his returns would move roughly with the market, just gentler. They did not. They rose almost regardless of what the market did. The strategy he described could not produce the returns he reported.',
        'Second — and this is the argument that should have ended it — the options simply did not exist. For a fund Madoff’s size to run that strategy, he would have needed to buy and sell options on the S&P 100 in quantities far larger than the entire market in those options traded. The counterparties were not there. The volume was not there. On paper he was trading instruments in amounts that did not exist to be traded.',
        'There was only one explanation that fit every number: Madoff was not running the strategy. He was very likely not trading at all. The "returns" were fictional, and the money paid out to anyone who withdrew was simply the money paid in by someone newer.',
        'That is a Ponzi scheme, and it has one iron rule: it works only as long as new money arrives faster than old money leaves.',
        'In May 2000, Markopolos took his analysis to the Boston office of the Securities and Exchange Commission. Nothing happened. He refined it and submitted again in 2001. Nothing happened. In November 2005 he sent the SEC a document whose title made further interpretation unnecessary — "The World’s Largest Hedge Fund Is a Fraud" — laying out, in twenty-nine numbered red flags, exactly what was wrong and roughly how large it was.',
        'He was not entirely alone in his doubt. That same year, 2001, a reporter named Erin Arvedlund had published a sceptical piece in Barron’s, and a trade publication had run another. But Markopolos was the one who had done the full arithmetic, and the one who took it, again and again, to the body whose job was to act on it.',
        'The SEC looked into Madoff. It was worse than not looking: it looked, and cleared him.',
      ],
      aside: {
        kind: 'voice',
        label: 'From the 2005 submission to the SEC',
        body: '“Bernie Madoff is running the world’s largest unregistered hedge fund. He has organized this business as a hedge fund of funds privately labeling their own hedge funds, which Bernie Madoff secretly runs for them using a split-strike conversion strategy, getting paid only trading commissions which are not disclosed.”',
        sourceId: 'markopolos-2005',
      },
      sourceIds: ['markopolos-2005', 'markopolos-2010', 'sec-oig-2009'],
    },

    whyItHappened: {
      heading: 'Why he was ignored',
      paragraphs: [
        'The SEC’s own Inspector General later spent nine months reconstructing this, and the report he produced is one of the more damning documents a government agency has written about itself. It found no evidence that anyone at the SEC was bribed or corrupt. What it found was worse in its way: a series of competent-looking investigations that never grasped what they were looking at.',
        '**The examiners could not follow the mathematics.** Markopolos had handed them a quantitative case, and the staff who received it largely lacked the training to evaluate it. Investigations were staffed by lawyers looking for paperwork violations, not analysts who could see that the reported volume was impossible.',
        '**They were looking for the wrong crime.** When the SEC did investigate, it tended to suspect Madoff of "front-running" — using his brokerage’s knowledge of customer orders to trade ahead of them. That is a real offence, and a much smaller one. Chasing it meant never asking the larger question: whether he was trading at all.',
        '**And Madoff was Madoff.** He was a former NASDAQ chairman, a fixture of the industry, a man who had helped write the rules the examiners enforced. Confronted, he was calm, fluent and condescending, and more than one junior investigator found it easier to believe the legend than the outside analyst accusing him.',
        '**Markopolos, meanwhile, was a competitor.** He worked for a firm that would have profited from replicating or discrediting Madoff, which gave anyone who wished to dismiss him a reason to. He was also, by his own description, abrasive and obsessive about it — not the ideal messenger, which is often exactly the person who notices.',
        'None of these is corruption. Together they are something harder to fix: an institution that received the correct answer, in writing, more than once, and was not built to hear it.',
      ],
      sourceIds: ['sec-oig-2009', 'markopolos-2010', 'markopolos-testimony-2009'],
    },

    consequences: {
      heading: 'What changed',
      paragraphs: [
        'It did not unravel because anyone finally listened. It unravelled because the new money stopped.',
      ],
      shortTerm: [
        'In late 2008, with markets collapsing, investors tried to withdraw about seven billion dollars. Madoff could not produce it, because it was not there.',
        'On 10 December 2008 he told his sons the business was "one big lie". They reported him, and he was arrested the next day.',
        'In March 2009 he pleaded guilty to eleven felonies; in June he was sentenced to 150 years in prison. He died there in 2021.',
        'Markopolos testified before Congress in February 2009 and described an SEC that was, in his words, financially illiterate and captured by the industry it policed.',
      ],
      longTerm: [
        'A court-appointed trustee spent years clawing money back from those who had withdrawn more than they put in, and eventually recovered the majority of the roughly seventeen billion dollars of actual principal that had been invested.',
        'The SEC was substantially reorganised — new leadership, a revamped enforcement division, and a formal whistleblower programme that pays and protects the next Markopolos.',
        'The phrase "if it seems too good to be true" acquired a specific, teachable case, taught now in finance courses as the textbook example of a return stream too smooth to be real.',
        'Trust itself took the damage. The lesson investors drew — verify independently, never take a custodian’s own statements as proof — reshaped how funds are audited.',
      ],
      unexpected: [
        'The famous figure, sixty-five billion dollars, was never stolen in the way the number implies. It was the total on the fabricated account statements — money most investors believed they had, but that had never existed. The real cash lost was closer to seventeen billion.',
        'By that measure many "victims" had, on paper, made money — they had withdrawn more than they deposited over the years, funded by later investors, and the trustee sued to recover it.',
        'Markopolos had feared for his life throughout. Convinced Madoff or his powerful clients might have him killed, he checked his car for bombs and kept a loaded gun to hand for years.',
        'He never collected a whistleblower reward, because the modern programme that would have paid one was created, partly in response to his case, only after Madoff had already fallen.',
      ],
      sourceIds: ['sec-oig-2009', 'henriques-2011', 'usa-madoff-2009'],
    },

    whyItMatters: {
      heading: 'Why it still matters',
      paragraphs: [
        'The comfortable version of a disaster is that nobody could have known. It lets everyone off. The Madoff fraud does not offer that comfort, and that is exactly why it is worth keeping.',
        'Someone did know. He knew early, he knew with proof, and he told the one institution whose entire purpose was to act on what he knew. The failure was not a failure of information. The information was sitting in a filing cabinet in Boston, correct, for years.',
        'It was a failure of a different kind — of an organisation that could not understand the warning it had been handed, was looking for a smaller crime, and found it easier to trust a famous man than an inconvenient outsider. Those failures do not announce themselves. They look, from the inside, like ordinary competent work.',
        'That is the uncomfortable, portable lesson. The hard part is almost never spotting the problem. Somebody usually spots the problem. The hard part is being an institution capable of believing the person who did.',
      ],
      sourceIds: ['sec-oig-2009', 'markopolos-2010'],
    },
  },

  timeline: [
    { year: 1920, title: 'Charles Ponzi gives the scheme its name', detail: 'His Boston operation, promising huge returns on international postal reply coupons, collapses and lends its name to the structure.' },
    { year: 1960, title: 'Madoff founds his firm', detail: 'Bernard L. Madoff Investment Securities begins as a legitimate market-maker. The fraudulent investment arm grows alongside it over decades.' },
    { year: 1990, title: 'Madoff chairs NASDAQ', detail: 'He serves as non-executive chairman of the electronic market he helped build — the credential that later makes him unquestionable.', confidence: 'contested' },
    { year: 1999, title: 'Markopolos is asked to copy the returns', detail: 'A quantitative analyst in Boston tries to reverse-engineer Madoff’s strategy for a competing product, and finds it impossible.', pivotal: true },
    { year: 2000, title: 'The first SEC submission', detail: 'Markopolos brings his analysis to the SEC’s Boston office in May. Nothing comes of it.', pivotal: true },
    { year: 2001, title: 'The press notices too', detail: 'Erin Arvedlund publishes a sceptical article in Barron’s, and a trade publication runs another. Madoff deflects both.' },
    { year: 2005, title: '"The World’s Largest Hedge Fund Is a Fraud"', detail: 'Markopolos sends the SEC a report with twenty-nine numbered red flags. It is his most complete case, and it is filed away.', pivotal: true },
    { year: 2006, title: 'The SEC investigates, and clears him', detail: 'An investigation opens, focuses partly on front-running, extracts corrections from Madoff, and finds no Ponzi scheme.', pivotal: true },
    { year: 2008, date: '2008-12-10', title: 'The confession', detail: 'With redemption requests he cannot meet, Madoff tells his sons the business is "one big lie". He is arrested the next day.', pivotal: true },
    { year: 2009, date: '2009-02', title: 'Markopolos testifies to Congress', detail: 'He describes an SEC that was financially illiterate and deferential to the industry it was meant to police.' },
    { year: 2009, date: '2009-06-29', title: 'Sentenced to 150 years', detail: 'Madoff pleads guilty to eleven felonies and receives the maximum. He dies in federal prison in 2021.' },
    { year: 2010, title: 'A whistleblower programme is created', detail: 'Dodd-Frank establishes SEC bounties and protections for whistleblowers — the system that would have paid a Markopolos, created just too late for him.' },
  ],

  causeEffect: [
    { cause: 'Madoff reports returns that never have a bad month', effect: 'Sophisticated investors are reassured rather than alarmed', because: 'A smooth track record looks like the dream, unless you know that no real market produces one.' },
    { cause: 'Markopolos is asked to replicate the strategy', effect: 'He discovers it cannot be replicated, or done at all', because: 'Reverse-engineering the numbers is exactly what exposes that the numbers are impossible.' },
    { cause: 'The claimed strategy needs more options than exist', effect: 'The trades cannot be real', because: 'You cannot buy and sell instruments in volumes larger than the entire market for them.' },
    { cause: 'Markopolos hands the SEC a quantitative case', effect: 'The SEC cannot evaluate it', because: 'Investigations were staffed by lawyers hunting paperwork, not analysts who could see the volume was fictional.' },
    { cause: 'The SEC suspects front-running instead', effect: 'It never asks whether Madoff trades at all', because: 'Chasing the smaller, more familiar crime crowded out the larger, stranger one.' },
    { cause: 'Madoff is a former NASDAQ chairman', effect: 'Examiners believe the legend over the outsider', because: 'Status reads as evidence, and confronting a pillar of the industry felt less plausible than dismissing his accuser.' },
    { cause: 'The 2008 crash triggers mass withdrawals', effect: 'The scheme finally collapses', because: 'A Ponzi survives only while new money outpaces the old money leaving, and the crisis reversed that overnight.' },
  ],

  myths: [
    {
      myth: 'Madoff stole $65 billion.',
      reality: 'The $65 billion was the total printed on the fake account statements — money investors believed they had, most of which never existed. The actual cash invested and lost was closer to $17.5 billion, and a court-appointed trustee eventually recovered the majority of it.',
      whyItPersists: 'It is the number in every headline, and it is genuinely the figure investors saw on their statements. It is just a measure of the lie, not of the theft.',
      sourceIds: ['henriques-2011', 'usa-madoff-2009'],
    },
    {
      myth: 'Nobody could have caught it in time.',
      reality: 'Harry Markopolos caught it in an afternoon in 1999 and reported it to the SEC repeatedly from 2000 onward. A journalist and a trade publication raised doubts in 2001. The information existed, in writing, for years before the collapse.',
      whyItPersists: 'It is the comforting version, and the one that asks nothing of the institutions that missed it.',
      sourceIds: ['markopolos-2005', 'markopolos-2010', 'sec-oig-2009'],
    },
    {
      myth: 'The SEC never investigated Madoff.',
      reality: 'It investigated him several times and cleared him each time — which is worse than never looking. Its own Inspector General later documented the failed examinations in detail.',
      whyItPersists: 'People assume a fraud this large must have gone unexamined. The truth, that it was examined and passed, is harder to sit with.',
      sourceIds: ['sec-oig-2009'],
    },
    {
      myth: 'It was a sophisticated investment strategy that eventually went wrong.',
      reality: 'There was no strategy. Investigators found that for years Madoff was not trading at all — no split-strike conversion, no options, no securities. It was a plain Ponzi scheme behind a famous name, from very early on.',
      whyItPersists: 'The elaborate cover story — a real strategy with a name — was the disguise, and it outlived the man wearing it.',
      sourceIds: ['usa-madoff-2009', 'henriques-2011'],
    },
  ],

  disagreements: [
    {
      question: 'Was the SEC corrupt, or just incompetent?',
      positions: [
        { view: 'Incompetent, not corrupt. Its own Inspector General found no evidence of bribery or improper influence — only investigations that failed to understand what they were examining.', heldBy: 'The SEC Office of Inspector General report (2009)', sourceId: 'sec-oig-2009' },
        { view: 'Effectively captured. Whatever the absence of bribes, deference to a powerful industry figure and revolving-door coziness produced the same result as corruption would have.', heldBy: 'Harry Markopolos in his congressional testimony, and some later critics', sourceId: 'markopolos-testimony-2009' },
      ],
      atlasPosition: 'The atlas states the documented finding — no evidence of corruption, comprehensive incompetence — and notes that Markopolos and others read institutional deference as its own kind of capture. It does not assert bribery, because none was found.',
    },
    {
      question: 'How much was actually lost?',
      positions: [
        { view: 'About $65 billion — the figure on the final statements and in the criminal charges.', heldBy: 'The headline number, and the basis of the fraud charge', sourceId: 'usa-madoff-2009' },
        { view: 'About $17.5 billion of real principal, much of which was recovered by the trustee. The larger figure is fictitious paper wealth.', heldBy: 'The court-appointed trustee’s accounting', sourceId: 'henriques-2011' },
      ],
      atlasPosition: 'Both are true measures of different things. The atlas uses $65 billion for the scale of the fiction and ~$17.5 billion for the money actually lost, and never lets the first stand as the second.',
    },
  ],

  didYouKnow: [
    'Markopolos said it took him five minutes to suspect Madoff was a fraud and about four hours to prove it mathematically.',
    'His killer argument was that Madoff claimed to trade more options than existed in the entire market for them.',
    'Convinced he might be killed for what he knew, Markopolos checked his car for bombs and kept a loaded gun for years.',
    'The $65 billion figure was the total on fake statements. The real money lost was closer to $17.5 billion.',
    'Because early investors were paid with later investors’ money, some "victims" had withdrawn more than they ever put in — and were sued to give it back.',
    'The SEC investigated Madoff and cleared him. Its own Inspector General later wrote a 477-page report on how.',
    'The whistleblower reward programme that would have paid Markopolos was created, partly because of his case, only after Madoff had fallen.',
  ],

  lenses: [
    {
      id: 'one-minute',
      label: 'In one minute',
      kind: 'length',
      paragraphs: [
        'Bernie Madoff was a former NASDAQ chairman whose investment fund reported steady positive returns almost every month for years. That consistency was impossible, and in 1999 an analyst named Harry Markopolos proved it.',
        'Asked to replicate Madoff’s strategy, Markopolos found it could not be done. The returns did not track the market the way the claimed strategy required, and the strategy would have needed more index options than the entire market traded. The only explanation that fit was that Madoff was not trading at all — a Ponzi scheme, paying old investors with new investors’ money.',
        'Markopolos reported this to the SEC in 2000, 2001 and again in 2005, in a document titled "The World’s Largest Hedge Fund Is a Fraud". The SEC investigated Madoff several times and cleared him each time, partly because its examiners could not follow the mathematics, partly because they suspected a smaller crime, and partly because Madoff was too respected to doubt.',
        'The scheme collapsed only when the 2008 crash triggered withdrawals Madoff could not cover. Statements showed $65 billion; the real losses were about $17.5 billion. Someone had caught it nine years early, and it changed nothing until the money ran out.',
      ],
    },
    {
      id: 'age-16',
      label: 'Explain like I’m 16',
      kind: 'age',
      paragraphs: [
        'The tell was volatility, or rather its absence. Genuine returns are noisy because markets are noisy; a return series that climbs in a near-straight line with almost no drawdowns is not a sign of exceptional skill but a statistical near-impossibility. That was Markopolos’s first, five-minute suspicion.',
        'His proof rested on two independent legs. One: correlation. Madoff’s claimed split-strike conversion would leave returns broadly tracking the index, dampened — but the reported returns barely correlated with the market at all. Two, and decisive: capacity. The options volume required to run that strategy at Madoff’s scale exceeded the total open interest and trading volume in the relevant S&P 100 options. The trades were not merely unlikely; they were larger than the market they supposedly occurred in.',
        'The failure of detection is an institutional-design story. The SEC’s examination function was staffed for legal and disclosure violations, not quantitative fraud; it anchored on a plausible smaller offence (front-running) and never tested the null hypothesis that no trading occurred at all. Deference to Madoff’s status supplied the final push.',
        'And note the accounting subtlety that survives in the headlines: the $65 billion is notional statement value, not realised loss. Because a Ponzi pays exits from entries, net principal lost (~$17.5 billion) is smaller, and "profits" withdrawn by early investors were clawed back as fraudulent transfers.',
      ],
    },
    {
      id: 'scholar',
      label: 'University level',
      kind: 'age',
      paragraphs: [
        'The episode is a canonical case in the regulatory-failure literature, and the primary document is the SEC OIG report (Kotz, 2009), which reconstructs at least five distinct examinations and investigations between 1992 and 2008 that failed to detect the scheme despite, in several instances, having the means to confirm it trivially by seeking independent DTC settlement records.',
        'Markopolos’s 2005 submission is notable less as detection — Arvedlund and Ocrant had publicly raised doubts in 2001 — than as a demonstration of the asymmetry between analytic capacity outside the regulator and inside it. His case was falsifiable, quantitative and, per the OIG, substantially correct; the binding constraint was the examiners’ inability to evaluate it.',
        'The "capture versus competence" debate is worth holding open. Kotz explicitly finds no evidence of corruption, which the literature on regulatory capture would treat as consistent with cultural or cognitive capture rather than the venal kind — deference to a high-status incumbent functioning as a capture mechanism without any quid pro quo.',
        'On magnitude, the distinction between the $64.8 billion notional and the ~$17.5 billion net principal is not pedantry: it determines the trustee’s clawback theory under fraudulent-transfer law, and the "net winners / net losers" framework that governed recoveries and remains contested in the bankruptcy scholarship.',
      ],
    },
    {
      id: 'follow-the-math',
      label: 'The two numbers that broke it',
      kind: 'angle',
      paragraphs: [
        'You do not need finance to follow the case Markopolos made. It comes down to two impossibilities.',
        '**The line was too straight.** Plot anyone’s honest investment returns and you get a jagged line — good months, bad months, the occasional bad year. Madoff’s line went up in a smooth diagonal for years, through booms and crashes alike. Nothing in a real market moves like that, because the market itself does not.',
        '**The trades were too big to exist.** Madoff said he protected his fund by buying and selling options on a stock-market index. Markopolos added up how many of those options Madoff would have needed — and it came to more than the total number bought and sold by everyone, everywhere, in that market. He was claiming to trade in a pool larger than the pool.',
        'Either number alone is a red flag. Together they leave one conclusion: the trades were not happening. And if the trades were not happening, the returns were invented, and the only real money in the building was the money the newest investors had just handed over.',
      ],
    },
    {
      id: 'the-messenger',
      label: 'Why the right answer bounced',
      kind: 'angle',
      paragraphs: [
        'The hardest lesson here is not about Madoff. It is about why a correct, written, repeated warning achieved nothing for nine years.',
        '**The receiver could not read it.** A quantitative fraud case handed to examiners trained in disclosure law is a message in a language the recipient does not speak. It was not ignored so much as un-parsed.',
        '**The receiver was hunting smaller game.** When the SEC did engage, it framed Madoff as a possible front-runner — a real but lesser crime. A wrong frame is worse than no frame, because it feels like diligence while pointing the wrong way.',
        '**The messenger was easy to discount.** Markopolos was a competitor with something to gain, abrasive, and increasingly obsessive. Every one of those made him easier to wave off — and none of them made him wrong. The person who notices a fraud is very often the person with a reason to look and the temperament to keep looking, which is to say, exactly the person an institution is primed to distrust.',
      ],
    },
  ],

  beforeAfter: {
    label: 'The fraud, and the reckoning',
    before: {
      title: 'While it ran',
      points: [
        'Steady positive returns reported almost every month',
        'A former NASDAQ chairman, trusted without question',
        'A real "split-strike" strategy named as the method',
        'The SEC examining and clearing him repeatedly',
        'Markopolos’s warnings filed and forgotten',
      ],
    },
    after: {
      title: 'After the collapse',
      points: [
        'No trading found to have occurred for years',
        '150 years in prison; dead there in 2021',
        'The strategy revealed as a plain Ponzi scheme',
        'The SEC reorganised, with a new whistleblower programme',
        'Markopolos vindicated, nine years too late to prevent it',
      ],
    },
  },

  whatIf: [
    {
      question: 'What if the SEC had acted on the 2005 report?',
      reasoning: 'By 2005 the case was complete and correct. Acting on it — pulling Madoff’s independent settlement records from the clearing house, which would have shown the trades did not exist — could have ended the scheme three years before it collapsed, when the losses were smaller and thousands of later investors had not yet been drawn in.',
      constraint: 'The same institutional blindness that ignored the 2000 and 2001 submissions was still in place. The document was better; the reader was not. Nothing in 2005 suggests the report would have been understood differently, which is precisely the tragedy.',
    },
    {
      question: 'What if the 2008 crash had never happened?',
      reasoning: 'A Ponzi scheme does not end on its own; it ends when withdrawals outrun deposits. Without the crisis-driven wave of redemptions, Madoff might have continued for several more years, and the eventual hole would have been larger, not smaller.',
      constraint: 'It would have collapsed eventually regardless — every Ponzi does, because the money owed grows faster than the money coming in. The crash set the date, not the outcome.',
    },
  ],

  quiz: [
    {
      question: 'What first told Markopolos that Madoff’s returns were fake?',
      options: [
        'A tip from inside the firm',
        'They rose in a smooth line, unlike any real market',
        'Madoff refused to meet him',
        'The fund was not registered',
      ],
      answerIndex: 1,
      explains: 'Genuine returns are volatile. A near-straight rising line through booms and crashes alike is not skill — it is the clearest sign that the numbers are not real.',
    },
    {
      question: 'What was the decisive proof that Madoff was not trading?',
      options: [
        'His office was empty',
        'He claimed to trade more index options than existed in the whole market',
        'His returns were too low',
        'He had no clients',
      ],
      answerIndex: 1,
      explains: 'To run the strategy he described at his scale, Madoff would have needed to buy and sell more options than the entire market traded. The trades could not have happened.',
    },
    {
      question: 'What did the SEC do with Markopolos’s warnings?',
      options: [
        'Never received them',
        'Acted immediately',
        'Investigated Madoff several times and cleared him each time',
        'Paid him a reward',
      ],
      answerIndex: 2,
      explains: 'The failure was not a lack of warning. The SEC examined Madoff repeatedly and, unable to grasp the case, cleared him every time.',
    },
    {
      question: 'What does the famous "$65 billion" figure actually measure?',
      options: [
        'Cash Madoff stole',
        'The total on the fake account statements, most of which never existed',
        'The SEC’s fine',
        'Madoff’s personal fortune',
      ],
      answerIndex: 1,
      explains: 'It was the fictitious value investors believed they held. The real money lost was closer to $17.5 billion, much of it later recovered.',
    },
  ],

  sources: [
    {
      id: 'markopolos-2005',
      kind: 'primary',
      author: 'Harry Markopolos',
      title: 'The World’s Largest Hedge Fund Is a Fraud',
      year: 2005,
      detail: 'Submission to the U.S. Securities and Exchange Commission, 7 November 2005',
      note: 'The core primary document: twenty-nine red flags laying out the case years before the collapse. Widely reproduced.',
    },
    {
      id: 'sec-oig-2009',
      kind: 'primary',
      author: 'U.S. SEC Office of Inspector General (H. David Kotz)',
      title: 'Investigation of Failure of the SEC to Uncover Bernard Madoff’s Ponzi Scheme',
      year: 2009,
      detail: 'Report No. OIG-509, 31 August 2009',
      note: 'The agency’s own 477-page reconstruction of how it examined Madoff repeatedly and missed the fraud. Finds incompetence, not corruption.',
    },
    {
      id: 'markopolos-testimony-2009',
      kind: 'primary',
      author: 'Harry Markopolos',
      title: 'Testimony before the U.S. House Committee on Financial Services',
      year: 2009,
      detail: '4 February 2009',
      note: 'His account of the nine-year effort, and his charge that the SEC was financially illiterate and industry-captured.',
    },
    {
      id: 'usa-madoff-2009',
      kind: 'primary',
      author: 'United States District Court, Southern District of New York',
      title: 'United States v. Bernard L. Madoff — plea and sentencing',
      year: 2009,
      detail: 'Guilty plea 12 March 2009; sentence 29 June 2009',
      note: 'The criminal record: eleven felonies, the charged scale of the fraud, and the 150-year sentence.',
    },
    {
      id: 'markopolos-2010',
      kind: 'book',
      author: 'Harry Markopolos',
      title: 'No One Would Listen: A True Financial Thriller',
      year: 2010,
      detail: 'John Wiley & Sons. ISBN 978-0-470-55373-2',
      note: 'His first-person account of the investigation and the years of being ignored. A participant’s memoir; read alongside the OIG report.',
    },
    {
      id: 'henriques-2011',
      kind: 'book',
      author: 'Diana B. Henriques',
      title: 'The Wizard of Lies: Bernie Madoff and the Death of Trust',
      year: 2011,
      detail: 'Times Books. ISBN 978-0-8050-9134-2',
      note: 'The standard journalistic history, and the clearest account of the mechanics, the losses and the recovery.',
    },
    {
      id: 'arvedlund-2001',
      kind: 'primary',
      author: 'Erin Arvedlund',
      title: '“Don’t Ask, Don’t Tell: Bernie Madoff is so secretive, he even asks investors to keep mum”',
      year: 2001,
      detail: 'Barron’s, 7 May 2001',
      note: 'A sceptical press piece from seven years before the collapse — evidence that the doubts were public, not only Markopolos’s.',
    },
  ],
}
