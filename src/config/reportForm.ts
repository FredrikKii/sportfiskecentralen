export const REPORT_FORM_ID =
  import.meta.env.VITE_REPORT_FORM_ID ?? 'xeebokzb'

export function getReportEndpoint(): string | null {
  if (!REPORT_FORM_ID) return null
  return `https://formspree.io/f/${REPORT_FORM_ID}`
}
