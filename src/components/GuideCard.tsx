import { Link } from 'react-router-dom'
import type { Guide } from '../data/guides'

interface GuideCardProps {
  guide: Guide
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="group flex flex-col rounded-sm border border-white/5 bg-charcoal-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-light/30 hover:shadow-lg hover:shadow-black/20">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.15em] text-sand uppercase">
          {guide.category}
        </span>
        <span className="text-xs text-cream/40">{guide.readTime}</span>
      </div>

      <Link to={`/guider/${guide.id}`}>
        <h3 className="mb-3 font-serif text-xl text-cream transition-colors group-hover:text-sand">
          {guide.title}
        </h3>
      </Link>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-cream/60">{guide.description}</p>

      <Link
        to={`/guider/${guide.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
      >
        Läs guiden
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  )
}
