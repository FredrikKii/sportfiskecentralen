import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = 'G-MHVJB7W8B6'

export default function GoogleAnalytics() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname + search,
    })
  }, [pathname, search])

  return null
}
