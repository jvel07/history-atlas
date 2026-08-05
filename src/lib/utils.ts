import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Lang } from '@/lib/i18n'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BCE: Record<Lang, string> = { en: 'BCE', es: 'a. C.' }

/** 1789 → "1789", -221 → "221 BCE". Years are stored as signed integers. */
export function formatYear(year: number, lang: Lang = 'en'): string {
  return year < 0 ? `${Math.abs(year)} ${BCE[lang]}` : String(year)
}

/** [1839, 1842] → "1839–1842"; a single year collapses to itself. */
export function formatSpan([from, to]: readonly [number, number], lang: Lang = 'en'): string {
  return from === to ? formatYear(from, lang) : `${formatYear(from, lang)}–${formatYear(to, lang)}`
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Stable pseudo-random pick so "Did you know?" is fresh per visit, not per render. */
export function pickN<T>(items: readonly T[], count: number, seed: number): T[] {
  if (items.length <= count) return [...items]
  const out: T[] = []
  const used = new Set<number>()
  let cursor = Math.abs(seed) % items.length
  while (out.length < count) {
    while (used.has(cursor)) cursor = (cursor + 1) % items.length
    used.add(cursor)
    out.push(items[cursor]!)
    cursor = (cursor + 7) % items.length
  }
  return out
}
