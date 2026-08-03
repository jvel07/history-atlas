/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Deployed Supabase functions URL. Unset means offline mode: pre-written lenses, local search. */
  readonly VITE_ATLAS_API?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
