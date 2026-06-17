import { useParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import PageHeader from '../components/PageHeader'
import ReportCard from '../components/ReportCard'
import { reports } from '../data/reports'
import { formatDate, getById } from '../utils/helpers'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import NotFound from './NotFound'

export default function ReportDetail() {
  const { id } = useParams<{ id: string }>()
  const report = id ? getById(reports, id) : undefined

  useDocumentTitle(report?.title ?? 'Rapport')

  if (!report) return <NotFound />

  const relatedReports = reports.filter((r) => r.id !== report.id).slice(0, 2)

  return (
    <>
      <PageHeader label="Fiskerapport" title={report.title} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BackLink to="/rapporter" label="Alla rapporter" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-white/5 pb-8 text-sm text-cream/60">
            <time dateTime={report.date} className="font-medium text-sand">
              {formatDate(report.date)}
            </time>
            <span aria-hidden="true">•</span>
            <span>{report.location}</span>
            <span aria-hidden="true">•</span>
            <span>Av {report.author}</span>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {report.species.map((species) => (
              <span
                key={species}
                className="rounded-sm bg-forest/40 px-3 py-1 text-xs font-medium tracking-wide text-sand uppercase"
              >
                {species}
              </span>
            ))}
          </div>

          <article className="space-y-6">
            {report.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-cream/75">
                {paragraph}
              </p>
            ))}
          </article>
        </div>

        {relatedReports.length > 0 && (
          <section className="mt-20" aria-labelledby="related-reports">
            <h2 id="related-reports" className="mb-8 font-serif text-2xl text-cream">
              Fler rapporter
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedReports.map((related) => (
                <ReportCard key={related.id} report={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
