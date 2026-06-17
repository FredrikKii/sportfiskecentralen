import { useState, type FormEvent } from 'react'
import { waters } from '../data/waters'

const speciesOptions = ['Abborre', 'Gädda', 'Gös', 'Regnbåge', 'Öring', 'Mört', 'Braxen']

export default function ReportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    species: '',
    title: '',
    message: '',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', location: '', species: '', title: '', message: '' })
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
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none"
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
            required
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none"
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
            required
            value={form.location}
            onChange={(event) => updateField('location', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream focus:border-sand/40 focus:outline-none"
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
            required
            value={form.species}
            onChange={(event) => updateField('species', event.target.value)}
            className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream focus:border-sand/40 focus:outline-none"
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
          required
          value={form.title}
          onChange={(event) => updateField('title', event.target.value)}
          className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none"
          placeholder="T.ex. Abborren aktiv i morgonsolen"
        />
      </div>

      <div>
        <label htmlFor="report-message" className="mb-2 block text-xs font-semibold tracking-wide text-sand uppercase">
          Din rapport
        </label>
        <textarea
          id="report-message"
          required
          rows={5}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="w-full resize-y rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-sand/40 focus:outline-none"
          placeholder="Beskriv fisket, väder, beten och vad som fungerade..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-sm bg-forest px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-forest-light sm:w-auto"
      >
        Skicka rapport
      </button>
    </form>
  )
}
