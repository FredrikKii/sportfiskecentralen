import { useState, type FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
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
            Anmäl dig för att få lokala rapporter, säsongstips och guider direkt – helt utan krångel.
          </p>

          {submitted ? (
            <p className="mt-8 rounded-sm border border-forest-light/50 bg-forest/30 px-6 py-4 text-cream" role="status">
              Tack! Du är anmäld. Vi hör av oss när nästa rapport publiceras.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <label htmlFor="newsletter-email" className="sr-only">
                E-postadress
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="din@epost.se"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3.5 text-cream placeholder:text-cream/30 transition-colors focus:border-sand/40 focus:outline-none sm:max-w-sm"
              />
              <button
                type="submit"
                className="rounded-sm bg-sand px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal uppercase transition-colors hover:bg-cream"
              >
                Anmäl dig
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
