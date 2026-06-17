import { Link } from 'react-router-dom'
import { reports } from '../data/reports'

export default function SeasonBanner() {
  const latestReport = [...reports].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )[0]

  return (
    <div className="border-b border-white/5 bg-forest-dark/80">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-cream/80">
          <span className="font-semibold text-sand">Säsong 2026</span>
          {' · '}
          {latestReport ? (
            <>
              <Link
                to={`/rapporter/${latestReport.id}`}
                className="transition-colors hover:text-cream"
              >
                {latestReport.title}
              </Link>
            </>
          ) : (
            'Nya rapporter publiceras löpande under säsongen.'
          )}
        </p>
        <p className="text-xs tracking-wide text-cream/40 uppercase">Uppdateras veckovis</p>
      </div>
    </div>
  )
}
