import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis, prefersReducedMotion } from '../utils/lenis'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = getLenis()

    if (lenis) {
      lenis.scrollTo(0, { immediate: prefersReducedMotion() })
      return
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [pathname])

  return null
}
