import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Two languages, one corpus.
 *
 * The interesting decision here is what *does not* get translated. Graph node
 * ids, edge relations, source ids, quiz answer indices, timeline years, reel
 * beats and marks are structure, not prose — they are identical in both
 * languages and live in exactly one place. Only the sentences are doubled.
 *
 * That is not a size optimisation. It is the only way the two languages can be
 * checked against each other: `scripts/check-content.mjs` proves the Spanish
 * corpus has the same stories, the same beats in the same order, the same
 * sources on the same claims and the same answer to every quiz question. A
 * mistranslation is a writing problem; a Spanish quiz whose right answer is in
 * a different slot is a bug, and this is how it stays impossible.
 *
 * The atlas's sourcing rules apply to Spanish exactly as they do to English:
 * the citations are the same works, and a translated claim is still a claim.
 */

export type Lang = 'en' | 'es'

export const LANGS: readonly Lang[] = ['en', 'es']

export const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español' }

/** The short label on the toggle. */
export const LANG_SHORT: Record<Lang, string> = { en: 'EN', es: 'ES' }

const STORAGE_KEY = 'history-atlas-lang'

function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'es'
}

/**
 * Explicit choice wins, then a stored one, then the browser. A Spanish speaker
 * arriving from a Spanish-language link should not have to find the toggle.
 */
export function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (isLang(fromUrl)) return fromUrl
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    // Private browsing, or a URL we cannot parse. Fall through to the browser.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

interface LangValue {
  lang: Lang
  setLang: (next: Lang) => void
  t: Strings
}

const LangContext = createContext<LangValue | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => initialLang())

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // The choice still holds for this session.
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])

  const value = useMemo<LangValue>(() => ({ lang, setLang, t: STRINGS[lang] }), [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangValue {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside <LangProvider>')
  return value
}

/** The strings only — the common case, and it reads better at the call site. */
export function useT(): Strings {
  return useLang().t
}

/* --------------------------------------------------------------- strings -- */

/**
 * `ES` is typed as `typeof EN`, so a string added to one language and forgotten
 * in the other does not compile. Interpolation is done with functions rather
 * than `{0}` placeholders for the same reason: the arguments are type-checked,
 * and Spanish is free to put them in a different order.
 */
const EN = {
  skipToContent: 'Skip to content',
  brand: 'History Atlas',
  navHome: 'Home',
  navStories: 'Stories',
  navMap: 'Map',
  navAbout: 'About',
  searchOpen: 'Search the atlas',
  searchPlaceholderShort: 'Ask anything',
  themeToLight: 'Switch to light theme',
  themeToDark: 'Switch to dark theme',
  themeLight: 'Light theme',
  themeDark: 'Dark theme',
  language: 'Language',
  languageTo: (name: string) => `Read the atlas in ${name}`,

  footerLine: 'History Atlas — every claim traceable, every disagreement shown.',
  footerHow: 'How it works',

  notFoundTitle: 'Nothing here.',
  notFoundBody:
    'Which is itself a small piece of history: the page you wanted either never existed or has not been written yet.',
  notFoundBack: 'Back to the start',

  homeEyebrow: 'Every answer starts another question',
  homeHeadline: 'History is not a list of dates. It is the best story ever told.',
  homeStandfirst:
    'About a minute each. Why it happened, who paid, what it broke — and where to go next. Simple enough for a ten-year-old, sourced well enough for a historian.',
  homeOpenMap: 'Open the map',
  homeJourneyLabel: 'An example journey',
  homeJourneyTitle: 'One evening on the atlas',
  homeStories: 'Stories',
  homeStats: (stories: number, nodes: number, sources: number) =>
    `${stories} written and reviewed · ${nodes} topics on the map · ${sources} sources cited`,
  homeCurios: 'Did you know?',
  homeHubs: 'Most connected on the map',
  homeHubsBody: 'The topics with the most threads running through them. Pull one and see what moves.',

  storiesTitle: 'Stories',
  storiesStandfirst: 'About a minute each. The long version is one tap away if you want it.',
  browseBy: 'What are you in the mood for?',
  categoryAll: 'Everything',
  categoryCount: (n: number) => `${n} stories`,
  saved: 'Saved',
  cardsCount: (n: number) => `${n} cards`,
  sourcesCount: (n: number) => `${n} sources`,
  mythsCount: (n: number) => `${n} myths corrected`,
  minutesIfAll: (n: number) => `${n} min if you want all of it`,
  notWrittenYet: 'Not written yet',
  notWrittenYetBody:
    'These are on the map and connected to what is already here, but no one has written and checked them. Listing them honestly is better than linking to a page that apologises.',

  mapTitle: 'The map',
  mapStandfirst:
    'Everything is connected to something. This shows what touches what, and — more usefully — why. Click a node to move the centre.',
  mapReadStory: 'Read the story',
  mapNoStory:
    'No story here yet. The atlas publishes a topic only once it is sourced and checked, so the map runs ahead of the writing.',
  mapConnectTitle: 'How are two things connected?',
  mapConnectBody: 'Pick any two. The shortest chain between them is often the surprise.',
  mapFrom: 'From',
  mapTo: 'To',
  mapFindChain: 'Find the chain',
  mapNoChain: 'Nothing links those two yet. That is a gap in the map, not a claim about history.',
  mapTouching: (label: string) => `Everything touching ${label}`,
  mapLinks: (n: number) => `${n} links`,
  mapContested: 'contested link',
  mapEverything: 'Everything on the map',
  mapDotNote: 'A dot marks a topic with a story written behind it.',

  aboutTitle: 'About',
  aboutLead:
    'History Atlas is not trying to replace an encyclopedia. An encyclopedia answers the question you came with. This is built to leave you with a better one.',
  aboutLead2:
    'The measure of a good session here is not that you found a fact. It is that you arrived looking for one thing and left an hour later, six topics away, still going.',
  aboutStatStories: 'Stories',
  aboutStatNodes: 'Topics mapped',
  aboutStatSources: 'Sources cited',
  aboutStatMinutes: 'Minutes of reading',
  aboutRules: 'The rules',
  aboutRulesBody:
    'These are the constraints that make the atlas worth citing. They are enforced in code where code can enforce them, and by review where it cannot.',
  aboutSmall: 'Why it is small',
  aboutSmallBody:
    'Because the alternative is worse. It would take an afternoon to generate a thousand articles and about the same to discover that a tenth of them contain confident, invented detail — and one wrong citation costs more trust than fifty correct pages earn. Topics appear on the map before they have a story, and they say so.',
  aboutCorrections: 'Corrections',
  aboutCorrectionsBody:
    'If something here is wrong, that is worth more to this project than another article. Every story lists its sources and the date a person last reviewed it. Open an issue on the repository with the claim and what it should say.',

  storyMissingTitle: 'That story is not written yet.',
  storyMissingBody:
    'The atlas only publishes what has been sourced and checked, so there are more topics on the map than there are stories behind them. This is one of them.',
  storyMissingCta: 'See what is connected',
  allStories: 'All stories',
  secondVersion: (n: number) => `${n}-second version`,
  seconds: (n: number) => `${n} seconds`,
  minutes: (n: number) => `${n} min`,
  saveForLater: 'Save for later',
  seeOnMap: 'See it on the map',
  headingTimeline: 'How it unfolded',
  timelineBody:
    'Events sit where they actually fall in time, not evenly spaced — so the quiet centuries look quiet and the eighteen months that decided everything look crowded.',
  headingCauseEffect: 'One thing led to another',
  causeEffectBody: 'Each step shows the mechanism, not just the sequence. The',
  becauseWord: 'because',
  causeEffectBody2: 'is the part textbooks tend to leave out.',
  headingBeforeAfter: 'Before and after',
  headingLenses: 'Same story, different lens',
  lensesBody:
    'The article above is written to be clear to anyone. These are the same events told for a different reader, or from a different angle.',
  headingMyths: 'What most people get wrong',
  headingDisagreements: 'Where historians disagree',
  disagreementsBody:
    'Not everything is settled. When it is not, the atlas shows the argument instead of picking a side and hiding the choice.',
  headingWhatIf: 'What if?',
  headingQuiz: 'Did it stick?',
  headingContinue: 'Continue the journey',
  continueBody:
    'Every card says how it connects to what you just read. These come from the map, not from a list someone typed — so they cannot drift out of date.',
  otherStories: 'Other stories',
  headingSources: 'Where this comes from',
  reviewedOn: (date: string) =>
    `Last reviewed by a person on ${date}. Found something wrong? Corrections are the most useful thing you can send.`,

  reelTitleCard: 'Title',
  reelCardOf: (i: number, n: number) => `Card ${i} of ${n}`,
  reelRegion: (title: string, n: number) =>
    `${title} — ${n} cards, playing automatically. Space pauses; arrow keys move.`,
  reelSummary: (secs: number, cards: number, sources: number) =>
    `${secs} seconds · ${cards} cards · ${sources} sources`,
  reelStep: (n: number) => `Step ${n}`,
  reelNextLabel: 'Where this goes next',
  reelDeeperLabel: 'Go deeper',
  reelOnMapNoStory: 'on the map · not written yet',
  reelClosingTitle: 'That is the short version. It is accurate, and it leaves things out.',
  reelClosingBody: (sources: number, myths: number) =>
    `The long one has the ${sources} sources, the ${myths} things most people get wrong, and the parts historians still argue about.`,
  reelReadFull: (minutes: number) => `Read the full story · ${minutes} min`,
  reelAgain: 'Again',
  reelKeepGoing: 'Keep going',
  reelTheEnd: 'The end',
  reelNarrationOff: 'Turn narration off',
  reelNarrationOn: 'Read it aloud',
  reelNarrationTitle: 'Narration on — cards wait for the sentence to finish',
  reelPause: 'Pause',
  reelPlay: 'Play',

  quizAllRight: 'Every one. You were reading properly.',
  quizScoreNote:
    'The explanations are the point, not the score — the questions you missed are the ones worth rereading.',
  quizScore: (right: number, total: number) => `${right} of ${total}`,
  quizSeeScore: 'See how you did',
  quizNext: 'Next question',
  quizAgain: 'Try again',
  quizQuestionOf: (i: number, n: number) => `Question ${i} of ${n}`,

  sourcesPrefix: 'Sources:',
  whyMythSticks: 'Why the myth sticks:',
  atlasStands: 'Where the atlas stands:',
  whatHoldsBack: 'What holds it back:',
  whatIfWarningBody:
    'Everything below is speculation, not history. It is here to show which parts of the story were contingent — and which were not going to change.',
  openSource: 'Open source',
  sourcesFooter:
    'Where historians disagree, the atlas says so rather than choosing for you. Where a claim is contested it carries a label. Where no source states something, it is left out.',
  onMapNoStory: 'On the map · no story yet',
  contested: 'contested',
  speculation: 'speculation',
  shortTerm: 'Straight away',
  longTerm: 'In the long run',
  unexpected: 'Nobody saw this coming',
  mythLabel: 'The myth',
  realityLabel: 'What actually happened',
  whyItPersists: 'Why the myth survives',
  atlasPosition: 'What the atlas asserts',
  whatIfWarning: 'Speculation, not history',
  whatIfConstraint: 'What pushes back',
  lensAsk: 'Ask for a different one',
  lensAskPlaceholder: 'Explain it like I’m 10 · Focus on the economics · Compare with Rome',
  lensThinking: 'Thinking…',
  lensGenerated: 'Generated from this story’s own reviewed text and sources',
  chooseLens: 'Choose a lens',
  timelineLabel: 'Timeline of events',
  timelineHint: 'positioned by date · crowded years stack',
  linkContested: 'link is contested',
  lensYours: 'Yours',
  lensWrittenForYou: 'Written for you',
  lensGeneratedBy: (model: string) =>
    `Generated by ${model} from this page’s text and its cited sources — check it against them before quoting it.`,
  lensAskLabel: 'Ask for it a different way',
  lensGenerate: 'Generate explanation',
  lensNeedsBackend1: 'Custom lenses need the AI backend running. Set',
  lensNeedsBackend2: 'to a deployed Supabase functions URL — see',
  lensNeedsBackend3: '. The lenses above are written and reviewed, and work offline.',
  searchDescription:
    'Ask a question in your own words. Results cover stories, sections, map entries and facts.',
  searchTryAsking: 'Try asking',
  searchEmptyTitle: 'Nothing here yet.',
  searchEmptyBody:
    'The atlas is small on purpose — every story is sourced and reviewed before it goes up. Try the map to see what is already connected.',
  searchLocalNote:
    'Keyword search with synonym expansion. Semantic search runs once the vector backend is configured — see docs/ARCHITECTURE.md.',

  searchTitle: 'Ask anything',
  searchPlaceholder: 'Ask a question, or name a thing',
  searchNothing: 'Nothing matched. Try fewer words, or a name.',
  searchTry: 'Try one of these',
  searchKindStory: 'Story',
  searchKindSection: 'In a story',
  searchKindNode: 'On the map',
  searchKindFact: 'Did you know',
  searchExamples: [
    'Why did Britain sell opium?',
    'Who invented algorithms?',
    'What happened after the Islamic Golden Age?',
    'Where does the word algebra come from?',
  ],

  bce: 'BCE',
}

/**
 * Deliberately not `as const`: the literal types would make every Spanish
 * string a type error against its English counterpart. What must match is the
 * *shape* — the set of keys and each value's type — which is exactly what
 * `typeof EN` gives without it.
 */
type Strings = typeof EN

const ES: Strings = {
  skipToContent: 'Saltar al contenido',
  brand: 'History Atlas',
  navHome: 'Inicio',
  navStories: 'Historias',
  navMap: 'Mapa',
  navAbout: 'Acerca de',
  searchOpen: 'Buscar en el atlas',
  searchPlaceholderShort: 'Pregunta lo que sea',
  themeToLight: 'Cambiar al tema claro',
  themeToDark: 'Cambiar al tema oscuro',
  themeLight: 'Tema claro',
  themeDark: 'Tema oscuro',
  language: 'Idioma',
  languageTo: (name: string) => `Leer el atlas en ${name}`,

  footerLine: 'History Atlas — cada afirmación rastreable, cada desacuerdo a la vista.',
  footerHow: 'Cómo funciona',

  notFoundTitle: 'Aquí no hay nada.',
  notFoundBody:
    'Lo cual ya es un pequeño dato histórico: la página que buscabas nunca existió o todavía no se ha escrito.',
  notFoundBack: 'Volver al principio',

  homeEyebrow: 'Cada respuesta abre otra pregunta',
  homeHeadline: 'La historia no es una lista de fechas. Es el mejor relato jamás contado.',
  homeStandfirst:
    'Un minuto cada una. Por qué pasó, quién pagó, qué rompió — y adónde ir después. Claro para alguien de diez años, con fuentes suficientes para un historiador.',
  homeOpenMap: 'Abrir el mapa',
  homeJourneyLabel: 'Un recorrido de ejemplo',
  homeJourneyTitle: 'Una noche en el atlas',
  homeStories: 'Historias',
  homeStats: (stories: number, nodes: number, sources: number) =>
    `${stories} escritas y revisadas · ${nodes} temas en el mapa · ${sources} fuentes citadas`,
  homeCurios: '¿Sabías que…?',
  homeHubs: 'Lo más conectado del mapa',
  homeHubsBody: 'Los temas por los que pasan más hilos. Tira de uno y mira qué se mueve.',

  storiesTitle: 'Historias',
  storiesStandfirst: 'Un minuto cada una. La versión larga está a un toque, si la quieres.',
  browseBy: '¿Qué te apetece hoy?',
  categoryAll: 'Todo',
  categoryCount: (n: number) => `${n} historias`,
  saved: 'Guardada',
  cardsCount: (n: number) => `${n} tarjetas`,
  sourcesCount: (n: number) => `${n} fuentes`,
  mythsCount: (n: number) => `${n} mitos corregidos`,
  minutesIfAll: (n: number) => `${n} min si lo quieres todo`,
  notWrittenYet: 'Todavía sin escribir',
  notWrittenYetBody:
    'Están en el mapa y conectados con lo que ya hay, pero nadie los ha escrito y comprobado. Nombrarlos con honestidad es mejor que enlazar a una página que pide disculpas.',

  mapTitle: 'El mapa',
  mapStandfirst:
    'Todo está conectado con algo. Esto muestra qué toca qué y —más útil todavía— por qué. Pulsa un nodo para mover el centro.',
  mapReadStory: 'Leer la historia',
  mapNoStory:
    'Aquí todavía no hay historia. El atlas publica un tema solo cuando está documentado y comprobado, así que el mapa va por delante de la escritura.',
  mapConnectTitle: '¿Cómo se conectan dos cosas?',
  mapConnectBody: 'Elige dos cualesquiera. La cadena más corta entre ellas suele ser la sorpresa.',
  mapFrom: 'Desde',
  mapTo: 'Hasta',
  mapFindChain: 'Buscar la cadena',
  mapNoChain:
    'Todavía nada une esos dos. Eso es un hueco en el mapa, no una afirmación sobre la historia.',
  mapTouching: (label: string) => `Todo lo que toca a ${label}`,
  mapLinks: (n: number) => `${n} enlaces`,
  mapContested: 'enlace discutido',
  mapEverything: 'Todo lo que hay en el mapa',
  mapDotNote: 'El punto marca un tema que ya tiene historia escrita.',

  aboutTitle: 'Acerca de',
  aboutLead:
    'History Atlas no intenta sustituir a una enciclopedia. Una enciclopedia responde a la pregunta con la que llegaste. Esto está hecho para dejarte con una mejor.',
  aboutLead2:
    'Una buena sesión aquí no se mide en datos encontrados. Se mide en que llegaste buscando una cosa y te fuiste una hora después, seis temas más allá, todavía leyendo.',
  aboutStatStories: 'Historias',
  aboutStatNodes: 'Temas mapeados',
  aboutStatSources: 'Fuentes citadas',
  aboutStatMinutes: 'Minutos de lectura',
  aboutRules: 'Las reglas',
  aboutRulesBody:
    'Son las restricciones que hacen que valga la pena citar el atlas. Se aplican en el código donde el código puede aplicarlas, y por revisión donde no.',
  aboutSmall: 'Por qué es pequeño',
  aboutSmallBody:
    'Porque la alternativa es peor. Generar mil artículos llevaría una tarde, y descubrir que una décima parte contiene detalles inventados con total aplomo llevaría más o menos lo mismo — y una cita equivocada cuesta más confianza de la que ganan cincuenta páginas correctas. Los temas aparecen en el mapa antes de tener historia, y lo dicen.',
  aboutCorrections: 'Correcciones',
  aboutCorrectionsBody:
    'Si algo de aquí está mal, para este proyecto vale más que otro artículo. Cada historia lista sus fuentes y la fecha en que una persona la revisó por última vez. Abre una incidencia en el repositorio con la afirmación y lo que debería decir.',

  storyMissingTitle: 'Esa historia todavía no está escrita.',
  storyMissingBody:
    'El atlas solo publica lo que está documentado y comprobado, así que hay más temas en el mapa que historias detrás de ellos. Este es uno de ellos.',
  storyMissingCta: 'Ver qué está conectado',
  allStories: 'Todas las historias',
  secondVersion: (n: number) => `versión de ${n} segundos`,
  seconds: (n: number) => `${n} segundos`,
  minutes: (n: number) => `${n} min`,
  saveForLater: 'Guardar para después',
  seeOnMap: 'Verlo en el mapa',
  headingTimeline: 'Cómo se desarrolló',
  timelineBody:
    'Los hechos caen donde de verdad caen en el tiempo, no repartidos por igual — así los siglos tranquilos se ven tranquilos y los dieciocho meses que lo decidieron todo se ven apretados.',
  headingCauseEffect: 'Una cosa llevó a la otra',
  causeEffectBody: 'Cada paso muestra el mecanismo, no solo la secuencia. El',
  becauseWord: 'porque',
  causeEffectBody2: 'es la parte que los libros de texto suelen omitir.',
  headingBeforeAfter: 'Antes y después',
  headingLenses: 'La misma historia, otra lente',
  lensesBody:
    'El artículo de arriba está escrito para que lo entienda cualquiera. Estos son los mismos hechos contados para otro lector, o desde otro ángulo.',
  headingMyths: 'Lo que casi todo el mundo entiende mal',
  headingDisagreements: 'Donde los historiadores no se ponen de acuerdo',
  disagreementsBody:
    'No todo está cerrado. Cuando no lo está, el atlas muestra la discusión en lugar de elegir un bando y esconder la elección.',
  headingWhatIf: '¿Y si…?',
  headingQuiz: '¿Se te quedó?',
  headingContinue: 'Sigue el recorrido',
  continueBody:
    'Cada tarjeta dice cómo se conecta con lo que acabas de leer. Salen del mapa, no de una lista que alguien escribió a mano — así que no pueden quedarse desfasadas.',
  otherStories: 'Otras historias',
  headingSources: 'De dónde sale esto',
  reviewedOn: (date: string) =>
    `Revisado por una persona el ${date}. ¿Has visto algo mal? Las correcciones son lo más útil que puedes enviar.`,

  reelTitleCard: 'Título',
  reelCardOf: (i: number, n: number) => `Tarjeta ${i} de ${n}`,
  reelRegion: (title: string, n: number) =>
    `${title} — ${n} tarjetas, reproducción automática. La barra espaciadora pausa; las flechas avanzan.`,
  reelSummary: (secs: number, cards: number, sources: number) =>
    `${secs} segundos · ${cards} tarjetas · ${sources} fuentes`,
  reelStep: (n: number) => `Paso ${n}`,
  reelNextLabel: 'Adónde lleva esto',
  reelDeeperLabel: 'Profundizar',
  reelOnMapNoStory: 'en el mapa · todavía sin escribir',
  reelClosingTitle: 'Esa es la versión corta. Es exacta, y deja cosas fuera.',
  reelClosingBody: (sources: number, myths: number) =>
    `La larga trae las ${sources} fuentes, las ${myths} cosas que casi todo el mundo entiende mal y las partes que los historiadores todavía discuten.`,
  reelReadFull: (minutes: number) => `Leer la historia completa · ${minutes} min`,
  reelAgain: 'Otra vez',
  reelKeepGoing: 'Sigue',
  reelTheEnd: 'Fin',
  reelNarrationOff: 'Apagar la narración',
  reelNarrationOn: 'Leer en voz alta',
  reelNarrationTitle: 'Narración activada — las tarjetas esperan a que acabe la frase',
  reelPause: 'Pausar',
  reelPlay: 'Reproducir',

  quizAllRight: 'Todas. Estabas leyendo de verdad.',
  quizScoreNote:
    'Lo importante son las explicaciones, no la nota — las preguntas que fallaste son las que vale la pena releer.',
  quizScore: (right: number, total: number) => `${right} de ${total}`,
  quizSeeScore: 'Ver qué tal fue',
  quizNext: 'Siguiente pregunta',
  quizAgain: 'Intentarlo otra vez',
  quizQuestionOf: (i: number, n: number) => `Pregunta ${i} de ${n}`,

  sourcesPrefix: 'Fuentes:',
  whyMythSticks: 'Por qué se pega el mito:',
  atlasStands: 'Dónde se sitúa el atlas:',
  whatHoldsBack: 'Lo que lo frena:',
  whatIfWarningBody:
    'Todo lo de abajo es especulación, no historia. Está aquí para mostrar qué partes de la historia eran contingentes — y cuáles no iban a cambiar.',
  openSource: 'Abrir la fuente',
  sourcesFooter:
    'Cuando los historiadores discrepan, el atlas lo dice en vez de elegir por ti. Cuando una afirmación está discutida, lleva etiqueta. Cuando ninguna fuente dice algo, se deja fuera.',
  onMapNoStory: 'En el mapa · todavía sin historia',
  contested: 'discutido',
  speculation: 'especulación',
  shortTerm: 'De inmediato',
  longTerm: 'A la larga',
  unexpected: 'Esto no lo vio venir nadie',
  mythLabel: 'El mito',
  realityLabel: 'Lo que pasó de verdad',
  whyItPersists: 'Por qué sobrevive el mito',
  atlasPosition: 'Lo que afirma el atlas',
  whatIfWarning: 'Especulación, no historia',
  whatIfConstraint: 'Lo que lo frena',
  lensAsk: 'Pedir otra',
  lensAskPlaceholder: 'Explícalo como si tuviera 10 · Céntrate en la economía · Compáralo con Roma',
  lensThinking: 'Pensando…',
  lensGenerated: 'Generado a partir del texto revisado y las fuentes de esta misma historia',
  chooseLens: 'Elegir una lente',
  timelineLabel: 'Cronología de los hechos',
  timelineHint: 'situado por fecha · los años apretados se apilan',
  linkContested: 'enlace discutido',
  lensYours: 'La tuya',
  lensWrittenForYou: 'Escrito para ti',
  lensGeneratedBy: (model: string) =>
    `Generado por ${model} a partir del texto de esta página y de sus fuentes citadas — contrástalo con ellas antes de citarlo.`,
  lensAskLabel: 'Pídelo de otra manera',
  lensGenerate: 'Generar explicación',
  lensNeedsBackend1: 'Las lentes a medida necesitan el backend de IA en marcha. Pon',
  lensNeedsBackend2: 'apuntando a una URL de funciones de Supabase desplegada — mira',
  lensNeedsBackend3: '. Las lentes de arriba están escritas y revisadas, y funcionan sin conexión.',
  searchDescription:
    'Haz una pregunta con tus propias palabras. Los resultados cubren historias, secciones, entradas del mapa y datos sueltos.',
  searchTryAsking: 'Prueba a preguntar',
  searchEmptyTitle: 'Aquí todavía no hay nada.',
  searchEmptyBody:
    'El atlas es pequeño a propósito — cada historia se documenta y se revisa antes de publicarse. Prueba el mapa para ver qué hay ya conectado.',
  searchLocalNote:
    'Búsqueda por palabras clave con expansión de sinónimos. La búsqueda semántica se activa cuando el backend vectorial esté configurado — mira docs/ARCHITECTURE.md.',

  searchTitle: 'Pregunta lo que sea',
  searchPlaceholder: 'Haz una pregunta, o nombra una cosa',
  searchNothing: 'Nada coincide. Prueba con menos palabras, o con un nombre.',
  searchTry: 'Prueba con una de estas',
  searchKindStory: 'Historia',
  searchKindSection: 'Dentro de una historia',
  searchKindNode: 'En el mapa',
  searchKindFact: 'Sabías que',
  searchExamples: [
    '¿Por qué vendía opio Gran Bretaña?',
    '¿Quién inventó los algoritmos?',
    '¿Qué pasó después de la Edad de Oro islámica?',
    '¿De dónde viene la palabra álgebra?',
  ],

  bce: 'a. C.',
}

export const STRINGS: Record<Lang, Strings> = { en: EN, es: ES }
