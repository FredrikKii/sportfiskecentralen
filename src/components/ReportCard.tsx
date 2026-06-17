import { Link } from 'react-router-dom'
import type { Report } from '../data/reports'
import { formatDate } from '../utils/helpers'

interface ReportCardProps {
  report: Report
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <article className="group flex flex-col rounded-sm border border-white/5 bg-charcoal-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-light/30 hover:shadow-lg hover:shadow-black/20">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium tracking-wide text-sand-muted uppercase">
        <time dateTime={report.date}>{formatDate(report.date)}</time>
        <span aria-hidden="true">•</span>
        <span>{report.location}</span>
      </div>

      <Link to={`/rapporter/${report.id}`}>
        <h3 className="mb-3 font-serif text-xl text-cream transition-colors group-hover:text-sand">
          {report.title}
        </h3>
      </Link>

      <div className="mb-4 flex flex-wrap gap-2">
        {report.species.map((species) => (
          <span
            key={species}
            className="rounded-sm bg-forest/30 px-2 py-0.5 text-xs text-cream/80"
          >
            {species}
          </span>
        ))}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-cream/60">{report.excerpt}</p>

      <Link
        to={`/rapporter/${report.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
      >
        Läs rapporten
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
