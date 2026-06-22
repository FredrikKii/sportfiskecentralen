import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCookieConsent, setCookieConsent } from '../utils/cookieConsent'
import { initGA, trackPageView } from '../utils/analytics'

function CookieIcon() {
  return (
    <svg className="h-6 w-6 text-cream" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.5 2 5.5 4.2 4.3 7.4c-.3.8-.1 1.7.5 2.3.6.6 1.5.8 2.3.5.4-.1.8-.2 1.2-.2 2.2 0 4 1.8 4 4 0 .4-.1.8-.2 1.2-.3.8-.1 1.7.5 2.3.6.6 1.5.8 2.3.5C19.8 17.5 22 14.5 22 11c0-4.97-4.03-9-9-9Zm-3.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-2.5 4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  )
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isPrivacyPage = location.pathname === '/integritet'

  useEffect(() => {
    setVisible(getCookieConsent() === null)
  }, [])

  function accept() {
    setCookieConsent('accepted')
    initGA()
    trackPageView(`${location.pathname}${location.search}`)
    setVisible(false)
  }

  function reject() {
    setCookieConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  if (isPrivacyPage) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-charcoal-light/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm text-cream/70 sm:text-left">
            Cookies och analys – välj nedan när du läst integritetspolicyn.
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={reject}
              className="rounded-sm border border-cream/20 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:border-sand/40 hover:bg-white/5"
            >
              Avvisa
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-sm bg-forest px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-forest-light"
            >
              Acceptera cookies
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        aria-modal="true"
        className="animate-cookie-banner-in fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md sm:inset-x-auto sm:right-6 sm:bottom-6 sm:mx-0"
      >
        <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-forest-dark via-charcoal to-charcoal shadow-2xl shadow-black/50">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 85% 15%, #2a5244 0%, transparent 45%), radial-gradient(circle at 10% 90%, #1e3d32 0%, transparent 40%)',
            }}
            aria-hidden="true"
          />

          <div className="relative p-6">
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-forest/80 ring-1 ring-white/10">
                <CookieIcon />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-sand uppercase">
                  🐟 Bjud oss på lite fiskmat
                </p>
                <h2 id="cookie-banner-title" className="mt-1 font-serif text-2xl leading-tight text-cream">
                  Hjälp oss förbättra sidan
                </h2>
              </div>
            </div>

            <p id="cookie-banner-description" className="text-sm leading-relaxed text-cream/70">
              Vi använder cookies för att se vilka guider och vatten som är mest populära – så vi kan
              lägga mer tid där det behövs. Inga konstigheter, bara bättre fiskeinfo.
            </p>

            <p className="mt-3 text-sm text-cream/50">
              Nyfiken på detaljerna?{' '}
              <Link
                to="/integritet"
                className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
              >
                Så hanterar vi dina uppgifter
              </Link>
              .
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={accept}
                className="w-full rounded-sm bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-all hover:bg-forest-light hover:shadow-lg hover:shadow-forest/30"
              >
                Acceptera cookies
              </button>

              <button
                type="button"
                onClick={reject}
                className="w-full py-2 text-sm text-cream/45 transition-colors hover:text-cream/70"
              >
                Nej tack, bara nödvändiga
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
