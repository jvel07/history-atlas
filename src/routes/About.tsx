import { ATLAS_STATS } from '@/content'

const RULES = [
  {
    title: 'Every explanation is a story, not an entry',
    body: 'Hook, the world before, the problem, what happened, why it happened, what changed, why it still matters, and where to go next. The structure is enforced in the type system, so an article cannot quietly skip the part where it explains why you should care.',
  },
  {
    title: 'Written for a curious ten-year-old, checked by an adult',
    body: 'Simple language and vivid analogies are not the same thing as simplified history. Where something is complicated, the atlas says it is complicated rather than smoothing it into a lie.',
  },
  {
    title: 'Facts and interpretations are labelled differently',
    body: 'Where historians disagree, both positions appear with who holds them, and the atlas states what it will and will not assert in its own voice. Contested claims carry a label everywhere they appear, including on the map.',
  },
  {
    title: 'Speculation is fenced off',
    body: '"What if?" sections exist because counterfactuals are how you find out which parts of a story were contingent. They are always marked as speculation and always paired with the constraint that pushes back.',
  },
  {
    title: 'Absence means no source said it',
    body: 'A missing field is not an invitation to infer. If a claim is not in a primary source or a historian the atlas can name, it is left out.',
  },
  {
    title: 'The AI never writes unsourced history',
    body: 'Adaptive explanations are generated from a story’s own reviewed text and cited sources, server-side, and labelled as generated. A model asked to free-associate about the Qing dynasty produces fluent, plausible, partly invented history — which is the one failure this project cannot afford.',
  },
]

export function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>

      <p className="prose-story text-ink mt-6 text-lg leading-relaxed">
        History Atlas is not trying to replace an encyclopedia. An encyclopedia answers the question
        you came with. This is built to leave you with a better one.
      </p>

      <p className="text-ink-soft mt-4 leading-relaxed">
        The measure of a good session here is not that you found a fact. It is that you arrived
        looking for one thing and left an hour later, six topics away, still going.
      </p>

      <div className="border-rule my-8 flex flex-wrap gap-x-8 gap-y-3 border-y py-5">
        {[
          ['Stories', ATLAS_STATS.stories],
          ['Topics mapped', ATLAS_STATS.nodes],
          ['Sources cited', ATLAS_STATS.sources],
          ['Minutes of reading', ATLAS_STATS.minutes],
        ].map(([label, value]) => (
          <div key={label as string}>
            <p className="font-display text-ember text-2xl font-semibold">{value}</p>
            <p className="text-ink-soft text-xs tracking-wide uppercase">{label}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-10 text-2xl font-semibold">The rules</h2>
      <p className="text-ink-soft mt-2 leading-relaxed">
        These are the constraints that make the atlas worth citing. They are enforced in code where
        code can enforce them, and by review where it cannot.
      </p>

      <div className="mt-6 space-y-5">
        {RULES.map((rule) => (
          <div key={rule.title} className="border-ember/40 border-l-2 pl-4">
            <h3 className="font-display text-ink text-[1.0625rem] font-semibold">{rule.title}</h3>
            <p className="text-ink-soft mt-1.5 text-[0.9375rem] leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-12 text-2xl font-semibold">Why it is small</h2>
      <p className="text-ink-soft mt-3 leading-relaxed">
        Because the alternative is worse. It would take an afternoon to generate a thousand articles
        and about the same to discover that a tenth of them contain confident, invented detail — and
        one wrong citation costs more trust than fifty correct pages earn. Topics appear on the map
        before they have a story, and they say so.
      </p>

      <h2 className="font-display mt-12 text-2xl font-semibold">Corrections</h2>
      <p className="text-ink-soft mt-3 leading-relaxed">
        If something here is wrong, that is worth more to this project than another article. Every
        story lists its sources and the date a person last reviewed it. Open an issue on the
        repository with the claim and what it should say.
      </p>
    </div>
  )
}
