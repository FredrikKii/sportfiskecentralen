import { Link } from 'react-router-dom'
import type { Water } from '../data/waters'

interface WaterCardProps {
  water: Water
}

export default function WaterCard({ water }: WaterCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-white/5 bg-charcoal-light transition-all duration-300 hover:-translate-y-1 hover:border-forest-light/30 hover:shadow-xl hover:shadow-black/20">
      <Link to={`/fiskevatten/${water.id}`} className="block">
        <div
          className={`relative h-48 bg-gradient-to-br ${water.gradient}`}
          role="img"
          aria-label={`Bild av ${water.name}`}
        >
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
          <div className="absolute right-4 bottom-4 left-4">
            <h3 className="font-serif text-2xl text-cream">{water.name}</h3>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {water.species.map((species) => (
            <span
              key={species}
              className="rounded-sm bg-forest/40 px-2.5 py-1 text-xs font-medium tracking-wide text-sand uppercase"
            >
              {species}
            </span>
          ))}
        </div>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-cream/65">{water.description}</p>
        <Link
          to={`/fiskevatten/${water.id}`}
          className="inline-flex w-full items-center justify-center rounded-sm border border-sand/20 px-4 py-2.5 text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:border-sand/50 hover:bg-forest/20"
        >
          Läs guide
        </Link>
      </div>
    </article>
  )
}
