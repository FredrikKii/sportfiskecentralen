import { useEffect } from 'react'
import Lenis from 'lenis'
import { prefersReducedMotion, setLenis } from '../utils/lenis'

export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    })

    setLenis(lenis)

    let frame = 0
    function onFrame(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(onFrame)
    }

    frame = requestAnimationFrame(onFrame)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
