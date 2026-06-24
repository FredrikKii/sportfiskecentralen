import { useState, type FormEvent } from 'react'
import { waters } from '../data/waters'
import { getReportEndpoint } from '../config/reportForm'

const speciesOptions = ['Abborre', 'Gädda', 'Gös', 'Regnbåge', 'Bäcköring', 'Öring', 'Mört', 'Braxen']

export default function ReportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    species: '',
    title: '',
    message: '',
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const endpoint = getReportEndpoint()
    if (!endpoint) {
      setError('Rapportformuläret är inte konfigurerat än. Maila oss på rapporter@sportfiskecentralen.se.')
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
          name: form.name.trim(),
          email: form.email.trim(),
          location: form.location,
          species: form.species,
          title: form.title.trim(),
          message: form.message.trim(),
          _subject: `Fiskerapport: ${form.title.trim()} – ${form.location}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', location: '', species: '', title: '', message: '' })
    } catch {
      setError('Kunde inte skicka rapporten just nu. Försök igen eller maila rapporter@sportfiskecentralen.se.')
    } finally {
      setLoading(false)
    }
  }

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  if (submitted) {
    return (
      <div
        className="rounded-sm border border-forest-light/50 bg-forest/20 p-8 text-center"
        role="status"
      >
        <p className="font-serif text-xl text-cream">Tack för din rapport!</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/65">
          Vi granskar alla inkomna rapporter och publicerar utvalda bidrag under säsongen. Håll utkik
          på Rapportsidan.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
        >
          Skicka en till rapport
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="report-name" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
            Namn
          </label>
          <input
            id="report-name"
            type="text"
            name="name"
            required
            disabled={loading}
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none disabled:opacity-60"
            placeholder="Ditt namn"
          />
        </div>
        <div>
          <label htmlFor="report-email" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
            E-post
          </label>
          <input
            id="report-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={loading}
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none disabled:opacity-60"
            placeholder="din@epost.se"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="report-location" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
            Plats
          </label>
          <select
            id="report-location"
            name="location"
            required
            disabled={loading}
            value={form.location}
            onChange={(event) => updateField('location', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream focus:border-sand/40 focus:outline-none disabled:opacity-60"
          >
            <option value="">Välj fiskevatten</option>
            {waters.map((water) => (
              <option key={water.id} value={water.name}>
                {water.name}
              </option>
            ))}
            <option value="Annat">Annat vatten</option>
          </select>
        </div>
        <div>
          <label htmlFor="report-species" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
            Art
          </label>
          <select
            id="report-species"
            name="species"
            required
            disabled={loading}
            value={form.species}
            onChange={(event) => updateField('species', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream focus:border-sand/40 focus:outline-none disabled:opacity-60"
          >
            <option value="">Välj art</option>
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="report-title" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
          Rubrik
        </label>
        <input
          id="report-title"
          type="text"
          name="title"
          required
          disabled={loading}
          value={form.title}
          onChange={(event) => updateField('title', event.target.value)}
          className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none disabled:opacity-60"
          placeholder="T.ex. Abborren aktiv i morgonsolen"
        />
      </div>

      <div>
        <label htmlFor="report-message" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
          Din rapport
        </label>
        <textarea
          id="report-message"
          name="message"
          required
          rows={5}
          disabled={loading}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="w-full resize-y rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none disabled:opacity-60"
          placeholder="Beskriv fisket, väder, beten och vad som fungerade..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-300/90" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-forest px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? 'Skickar…' : 'Skicka rapport'}
      </button>
    </form>
  )
}
