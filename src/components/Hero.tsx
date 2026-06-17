import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-forest-dark via-charcoal to-charcoal"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, #2a5244 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e3d32 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-sand uppercase">
          Centrala Skåne
        </p>
        <h1
          id="hero-heading"
          className="max-w-3xl font-serif text-5xl leading-[1.1] text-cream sm:text-6xl lg:text-7xl"
        >
          Sportfisket mitt i Skåne
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
          Guider, fiskerapporter och lokala vatten för dig som jagar abborre, gädda, gös och regnbåge.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/fiskevatten"
            className="inline-flex items-center justify-center rounded-sm bg-forest px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-all hover:bg-forest-light hover:shadow-lg hover:shadow-forest/20"
          >
            Utforska fiskevatten
          </Link>
          <Link
            to="/rapporter"
            className="inline-flex items-center justify-center rounded-sm border border-cream/20 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-all hover:border-sand/40 hover:bg-white/5"
          >
            Läs senaste rapporterna
          </Link>
        </div>
      </div>
    </section>
  )
}
