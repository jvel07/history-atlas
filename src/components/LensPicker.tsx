import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'motion/react'
import { InfoIcon, SendHorizontalIcon, SparklesIcon } from 'lucide-react'
import type { Story } from '@/content/types'
import { Paragraphs } from '@/components/RichText'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { explainProvider, INSTRUCTION_SUGGESTIONS, type Explanation } from '@/lib/ai'
import { useLang } from '@/lib/i18n'

/**
 * "Same story, different lens."
 *
 * The pre-written lenses are reviewed prose and always available. The free-text
 * box is the generative half, and it is visibly disabled with a reason when no
 * backend is configured — an input that silently does nothing is worse than one
 * that explains itself.
 */
export function LensPicker({ story }: { story: Story }) {
  const { lang, t } = useLang()
  const [instruction, setInstruction] = useState('')
  const [custom, setCustom] = useState<Explanation | null>(null)
  const [tab, setTab] = useState(story.lenses[0]?.id ?? '')

  const generate = useMutation({
    mutationFn: (text: string) =>
      explainProvider.explain({ storySlug: story.slug, instruction: text }, story),
    onSuccess: (explanation) => {
      setCustom(explanation)
      setTab('custom')
    },
  })

  return (
    <div className="mt-5">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList aria-label={t.chooseLens}>
          {story.lenses.map((lens) => (
            <TabsTrigger key={lens.id} value={lens.id}>
              {lens.label}
            </TabsTrigger>
          ))}
          {custom && (
            <TabsTrigger value="custom">
              <SparklesIcon className="mr-1 inline size-3" />
              {t.lensYours}
            </TabsTrigger>
          )}
        </TabsList>

        {story.lenses.map((lens) => (
          <TabsContent key={lens.id} value={lens.id}>
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
              <Paragraphs items={lens.paragraphs} className="prose-story" />
            </motion.div>
          </TabsContent>
        ))}

        {custom && (
          <TabsContent value="custom">
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="ember">
                  <SparklesIcon /> {t.lensWrittenForYou}
                </Badge>
                {custom.generatedBy && (
                  <span className="text-ink-soft text-xs">
                    {t.lensGeneratedBy(custom.generatedBy)}
                  </span>
                )}
              </div>
              <Paragraphs items={custom.paragraphs} className="prose-story" />
            </motion.div>
          </TabsContent>
        )}
      </Tabs>

      <form
        className="border-rule mt-6 border-t pt-5"
        onSubmit={(event) => {
          event.preventDefault()
          if (instruction.trim()) generate.mutate(instruction.trim())
        }}
      >
        <label htmlFor="lens-instruction" className="text-ink text-[0.875rem] font-medium">
          {t.lensAskLabel}
        </label>

        <div className="mt-2 flex gap-2">
          <input
            id="lens-instruction"
            value={instruction}
            onChange={(event) => setInstruction(event.target.value)}
            disabled={!explainProvider.canGenerate}
            placeholder={t.lensAskPlaceholder}
            className="border-rule bg-paper-raised text-ink placeholder:text-ink-soft h-10 min-w-0 flex-1 rounded-[var(--radius)] border px-3.5 text-[0.875rem] outline-none disabled:opacity-60"
          />
          <Button type="submit" disabled={!explainProvider.canGenerate || generate.isPending || !instruction.trim()}>
            {generate.isPending ? t.lensThinking : <SendHorizontalIcon />}
            <span className="sr-only">{t.lensGenerate}</span>
          </Button>
        </div>

        {explainProvider.canGenerate ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {INSTRUCTION_SUGGESTIONS[lang].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setInstruction(suggestion)}
                className="text-ink-soft hover:text-ember border-rule hover:border-ember/40 rounded-full border px-2.5 py-1 text-xs transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-2.5 flex items-start gap-2">
            {/* The flex row is on this wrapper, not on the <p>. A <p> set to
                display:flex turns each inline <code> into its own flex item, and
                a row of flex items does not wrap — which overflowed the page on
                mobile by 94px. */}
            <InfoIcon className="text-ink-soft mt-0.5 size-3.5 shrink-0" />
            <p className="text-ink-soft min-w-0 text-xs leading-relaxed">
              {t.lensNeedsBackend1} <code className="font-mono">VITE_ATLAS_API</code>{' '}
              {t.lensNeedsBackend2} <code className="font-mono">docs/ARCHITECTURE.md</code>
              {t.lensNeedsBackend3}
            </p>
          </div>
        )}

        {generate.isError && (
          <p className="text-destructive mt-2.5 text-xs leading-relaxed">{generate.error.message}</p>
        )}
      </form>
    </div>
  )
}
