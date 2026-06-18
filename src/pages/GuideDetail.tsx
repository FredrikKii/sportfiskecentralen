import { useParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import PageHeader from '../components/PageHeader'
import GuideCard from '../components/GuideCard'
import { guides } from '../data/guides'
import type { GuideSection } from '../data/guides'
import { getById } from '../utils/helpers'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

function GuideSectionContent({ section }: { section: GuideSection }) {
  return (
    <section>
      <h2 className="mb-4 font-serif text-2xl text-cream">{section.heading}</h2>

      {section.body && (
        <p className="mb-4 text-base leading-relaxed text-cream/75">{section.body}</p>
      )}

      {section.items && (
        <ul className="space-y-2">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base leading-relaxed text-cream/75"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sand" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="overflow-x-auto rounded-sm border border-white/5">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-charcoal-light">
                <th className="px-4 py-3 font-semibold tracking-wide text-sand uppercase">Månad</th>
                <th className="px-4 py-3 font-semibold tracking-wide text-sand uppercase">
                  Bästa fiske
                </th>
              </tr>
            </thead>
            <tbody>
              {section.table.map((row) => (
                <tr key={row.label} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-medium text-cream">{row.label}</td>
                  <td className="px-4 py-3 text-cream/75">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default function GuideDetail() {
  const { id } = useParams<{ id: string }>()
  const guide = id ? getById(guides, id) : undefined

  usePageMeta({
    title: guide?.title ?? 'Guide',
    description: guide?.description,
    path: id ? `/guider/${id}` : undefined,
  })

  if (!guide) return <NotFound />

  const relatedGuides = guides.filter((g) => g.id !== guide.id).slice(0, 2)

  return (
    <>
      <PageHeader
        label={guide.category}
        title={guide.title}
        description={guide.description}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BackLink to="/guider" label="Alla guider" />

        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-sm text-cream/40">Läsningstid: {guide.readTime}</p>

          <article className="space-y-10">
            {guide.sections.map((section) => (
              <GuideSectionContent key={section.heading} section={section} />
            ))}
          </article>
        </div>

        {relatedGuides.length > 0 && (
          <section className="mt-20" aria-labelledby="related-guides">
            <h2 id="related-guides" className="mb-8 font-serif text-2xl text-cream">
              Fler guider
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedGuides.map((related) => (
                <GuideCard key={related.id} guide={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
