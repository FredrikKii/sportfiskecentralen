export const NEWSLETTER_FORM_ID = import.meta.env.VITE_NEWSLETTER_FORM_ID ?? ''

export function getNewsletterEndpoint(): string | null {
  if (!NEWSLETTER_FORM_ID) return null
  return `https://formspree.io/f/${NEWSLETTER_FORM_ID}`
}
