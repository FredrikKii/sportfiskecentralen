/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEWSLETTER_FORM_ID?: string
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
