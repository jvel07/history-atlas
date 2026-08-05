import { useLang } from '@/lib/i18n'
import { corpusFor, type Corpus } from '@/content'

/**
 * The active corpus. `corpusFor` memoises per language, so this returns the
 * same object on every render until the reader switches language — which is
 * what makes it safe to destructure straight into a component body.
 */
export function useCorpus(): Corpus {
  return corpusFor(useLang().lang)
}
