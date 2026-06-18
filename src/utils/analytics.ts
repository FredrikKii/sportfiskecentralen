import ReactGA from 'react-ga4'

export const GA_MEASUREMENT_ID = 'G-MHVJB7W8B6'

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID)
}

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}
