import PageHeader from '../components/PageHeader'
import { imageCredits } from '../data/imageCredits'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Credits() {
  usePageMeta({
    title: 'Bildkrediter',
    description: 'Fotografier och licenser för bilder som används på Sportfiskecentralen.',
    path: '/credits',
  })

  return (
    <>
      <PageHeader
        label="Bildkrediter"
        title="Bildkrediter"
        description="Fotografier och licenser för bilder som används på Sportfiskecentralen."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {imageCredits.map((credit) => (
            <article
              key={credit.id}
              className="rounded-sm border border-white/5 bg-charcoal-light p-6 sm:p-8"
            >
              <h2 className="font-serif text-xl text-cream">{credit.title}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Fotograf</dt>
                  <dd className="mt-1 text-cream/70">
                    {credit.authorUrl ? (
                      <a
                        href={credit.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
                      >
                        {credit.author}
                      </a>
                    ) : (
                      credit.author
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Källa</dt>
                  <dd className="mt-1">
                    <a
                      href={credit.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
                    >
                      {credit.sourceName}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold tracking-wide text-sand uppercase">Licens</dt>
                  <dd className="mt-1">
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
                    >
                      {credit.license}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
