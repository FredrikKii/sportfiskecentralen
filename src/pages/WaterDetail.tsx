import { Link, useParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import PageHeader from '../components/PageHeader'
import WaterCard from '../components/WaterCard'
import { waters } from '../data/waters'
import { getById } from '../utils/helpers'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import NotFound from './NotFound'

export default function WaterDetail() {
  const { id } = useParams<{ id: string }>()
  const water = id ? getById(waters, id) : undefined

  useDocumentTitle(water?.name ?? 'Fiskevatten')

  if (!water) return <NotFound />

  const relatedWaters = waters.filter((w) => w.id !== water.id).slice(0, 2)

  return (
    <>
      <PageHeader
        label="Fiskevatten"
        title={water.name}
        description={water.description}
        gradient={water.gradient}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BackLink to="/fiskevatten" label="Alla fiskevatten" />

        <div className="grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="prose-custom space-y-6">
              {water.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-cream/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-sm border border-white/5 bg-charcoal-light p-6">
              <h2 className="mb-4 font-serif text-xl text-cream">Snabbfakta</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Region</dt>
                  <dd className="mt-1 text-cream/70">{water.region}</dd>
                </div>
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Bästa säsong</dt>
                  <dd className="mt-1 text-cream/70">{water.bestSeason}</dd>
                </div>
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Tillgång</dt>
                  <dd className="mt-1 text-cream/70">{water.access}</dd>
                </div>
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Arter</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {water.species.map((species) => (
                      <span
                        key={species}
                        className="rounded-sm bg-forest/40 px-2.5 py-1 text-xs font-medium text-sand uppercase"
                      >
                        {species}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Tekniker</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {water.techniques.map((technique) => (
                      <span
                        key={technique}
                        className="rounded-sm border border-white/10 px-2.5 py-1 text-xs text-cream/70"
                      >
                        {technique}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-sm border border-forest/30 bg-forest/10 p-6">
              <h2 className="mb-2 font-serif text-lg text-cream">Relaterade guider</h2>
              <p className="mb-4 text-sm text-cream/60">
                Läs mer om tekniker och arter i våra fiskeguider.
              </p>
              <Link
                to="/guider"
                className="text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
              >
                Utforska guider →
              </Link>
            </div>
          </aside>
        </div>

        {relatedWaters.length > 0 && (
          <section className="mt-20" aria-labelledby="related-waters">
            <h2 id="related-waters" className="mb-8 font-serif text-2xl text-cream">
              Fler vatten i regionen
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedWaters.map((related) => (
                <WaterCard key={related.id} water={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
