import { useCorpus } from '@/content/useCorpus'
import { useLang, type Lang } from '@/lib/i18n'

/**
 * The rules are the page. They live here rather than in the string table
 * because they are content — the argument the atlas makes for being trusted —
 * and they are written in each language rather than translated line by line.
 */
const RULES: Record<Lang, { title: string; body: string }[]> = {
  en: [
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
      title: 'Both languages carry the same claims',
      body: 'The Spanish atlas is not a summary of the English one. It is the same stories, the same sources on the same sentences, and the same answer to every quiz question — checked automatically, because a translation that quietly drops a citation is a worse problem than an awkward sentence.',
    },
    {
      title: 'The AI never writes unsourced history',
      body: 'Adaptive explanations are generated from a story’s own reviewed text and cited sources, server-side, and labelled as generated. A model asked to free-associate about the Qing dynasty produces fluent, plausible, partly invented history — which is the one failure this project cannot afford.',
    },
  ],
  es: [
    {
      title: 'Cada explicación es una historia, no una ficha',
      body: 'Gancho, el mundo de antes, el problema, qué pasó, por qué pasó, qué cambió, por qué sigue importando y adónde ir después. La estructura se impone en el sistema de tipos, así que un artículo no puede saltarse en silencio la parte donde explica por qué debería importarte.',
    },
    {
      title: 'Escrito para alguien curioso de diez años, comprobado por un adulto',
      body: 'Lenguaje sencillo y analogías vívidas no son lo mismo que historia simplificada. Cuando algo es complicado, el atlas dice que es complicado en vez de alisarlo hasta convertirlo en mentira.',
    },
    {
      title: 'Los hechos y las interpretaciones se etiquetan distinto',
      body: 'Cuando los historiadores discrepan, aparecen las dos posiciones con quién las sostiene, y el atlas dice qué afirmará y qué no con voz propia. Las afirmaciones discutidas llevan etiqueta allá donde aparezcan, también en el mapa.',
    },
    {
      title: 'La especulación va acotada',
      body: 'Las secciones «¿Y si…?» existen porque los contrafactuales son la manera de averiguar qué partes de una historia eran contingentes. Van siempre marcadas como especulación y siempre acompañadas de lo que las frena.',
    },
    {
      title: 'La ausencia significa que ninguna fuente lo dijo',
      body: 'Un campo vacío no es una invitación a deducir. Si una afirmación no está en una fuente primaria o en un historiador al que el atlas pueda nombrar, se deja fuera.',
    },
    {
      title: 'Los dos idiomas sostienen las mismas afirmaciones',
      body: 'El atlas en español no es un resumen del inglés. Son las mismas historias, las mismas fuentes sobre las mismas frases y la misma respuesta correcta en cada pregunta — comprobado automáticamente, porque una traducción que pierde una cita por el camino es peor problema que una frase torpe.',
    },
    {
      title: 'La IA nunca escribe historia sin fuentes',
      body: 'Las explicaciones adaptadas se generan a partir del texto revisado y las fuentes citadas de la propia historia, en el servidor, y se etiquetan como generadas. Un modelo al que se le pide asociar libremente sobre la dinastía Qing produce historia fluida, verosímil y en parte inventada — que es el único fallo que este proyecto no puede permitirse.',
    },
  ],
}

export function About() {
  const { lang, t } = useLang()
  const { stats } = useCorpus()

  return (
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.aboutTitle}
      </h1>

      <p className="prose-story text-ink mt-6 text-lg leading-relaxed">{t.aboutLead}</p>

      <p className="text-ink-soft mt-4 leading-relaxed">{t.aboutLead2}</p>

      <div className="border-rule my-8 flex flex-wrap gap-x-8 gap-y-3 border-y py-5">
        {[
          [t.aboutStatStories, stats.stories],
          [t.aboutStatNodes, stats.nodes],
          [t.aboutStatSources, stats.sources],
          [t.aboutStatMinutes, stats.minutes],
        ].map(([label, value]) => (
          <div key={label as string}>
            <p className="font-display text-ember text-2xl font-semibold">{value}</p>
            <p className="text-ink-soft text-xs tracking-wide uppercase">{label}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-10 text-2xl font-semibold">{t.aboutRules}</h2>
      <p className="text-ink-soft mt-2 leading-relaxed">{t.aboutRulesBody}</p>

      <div className="mt-6 space-y-5">
        {RULES[lang].map((rule) => (
          <div key={rule.title} className="border-ember/40 border-l-2 pl-4">
            <h3 className="font-display text-ink text-[1.0625rem] font-semibold">{rule.title}</h3>
            <p className="text-ink-soft mt-1.5 text-[0.9375rem] leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-12 text-2xl font-semibold">{t.aboutSmall}</h2>
      <p className="text-ink-soft mt-3 leading-relaxed">{t.aboutSmallBody}</p>

      <h2 className="font-display mt-12 text-2xl font-semibold">{t.aboutCorrections}</h2>
      <p className="text-ink-soft mt-3 leading-relaxed">{t.aboutCorrectionsBody}</p>
    </div>
  )
}
