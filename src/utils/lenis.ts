import Lenis from 'lenis'

let lenis: Lenis | null = null

export function getLenis() {
  return lenis
}

export function setLenis(instance: Lenis | null) {
  lenis = instance
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
