import ReactGA from 'react-ga4'
import { hasAnalyticsConsent } from './cookieConsent'

export const GA_MEASUREMENT_ID = 'G-MHVJB7W8B6'

let initialized = false

export const initGA = () => {
  if (initialized || !hasAnalyticsConsent()) return

  ReactGA.initialize(GA_MEASUREMENT_ID)
  initialized = true
}

export const trackPageView = (path: string) => {
  if (!initialized) return

  ReactGA.send({ hitType: 'pageview', page: path })
}
