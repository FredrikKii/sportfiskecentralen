import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { getNewsletterEndpoint } from '../config/newsletter'

function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

function SuccessMessage() {
  return (
    <div
      className="animate-newsletter-success-in mt-8 rounded-sm border border-forest-light/50 bg-forest/30 px-6 py-8"
      role="status"
    >
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <div
          className="animate-newsletter-check-pop mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest-light/25 ring-1 ring-forest-light/40"
          aria-hidden="true"
        >
          <svg className="h-7 w-7 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              className="animate-newsletter-check-draw"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-serif text-2xl text-cream">Tack – du är anmäld!</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          Vi hörs när nästa rapport publiceras. Rapporter och tips från vattnen i centrala Skåne,
          direkt till din inkorg.
        </p>
      </div>
    </div>
  )
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!trimmedEmail) return

    const endpoint = getNewsletterEndpoint()
    if (!endpoint) {
      setError('Nyhetsbrevet är inte konfigurerat än. Kontakta oss via kontakt sidan.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          _subject: 'Ny nyhetsbrevsprenumeration – Sportfiskecentralen',
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      setEmail('')
    } catch {
      setError('Kunde inte spara din e-post just nu. Försök igen om en stund.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-forest-dark py-20" aria-labelledby="newsletter-heading">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, #2a5244 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sand uppercase">
            Gemenskap
          </p>
          <h2 id="newsletter-heading" className="font-serif text-3xl text-cream sm:text-4xl">
            Få fiskerapporter i din inkorg
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/65">
            Anmäl dig för lokala rapporter, säsongstips och guider – direkt till din inkorg, utan
            krångel.
          </p>

          {submitted ? (
            <SuccessMessage />
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <label htmlFor="newsletter-email" className="sr-only">
                  E-postadress
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="din@epost.se"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={loading}
                  className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3.5 text-cream placeholder:text-cream/30 transition-all focus:border-sand/40 focus:outline-none disabled:opacity-60 sm:max-w-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-sand px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal uppercase transition-all hover:bg-cream active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <LoadingSpinner />
                      Sparar…
                    </>
                  ) : (
                    'Anmäl dig'
                  )}
                </button>
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-300/90" role="alert">
                  {error}
                </p>
              )}

              <p className="mt-4 text-xs leading-relaxed text-cream/40">
                Vi sparar din e-post för att kunna skicka uppdateringar. Läs mer i vår{' '}
                <Link
                  to="/integritet"
                  className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
                >
                  integritetspolicy
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
