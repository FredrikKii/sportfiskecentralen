const STORAGE_KEY = 'sfc-cookie-consent'

export type CookieConsent = 'accepted' | 'rejected'

export function getCookieConsent(): CookieConsent | null {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value === 'accepted' || value === 'rejected') return value
  return null
}

export function setCookieConsent(consent: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, consent)
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === 'accepted'
}

export function clearCookieConsent() {
  localStorage.removeItem(STORAGE_KEY)
}
