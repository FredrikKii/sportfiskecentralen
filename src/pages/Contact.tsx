import PageHeader from '../components/PageHeader'
import ReportForm from '../components/ReportForm'
import Newsletter from '../components/Newsletter'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta({
    title: 'Kontakt',
    description:
      'Hör av dig med fiskerapporter, frågor eller idéer – vi bygger Sportfiskecentralen tillsammans med lokala sportfiskare.',
    path: '/kontakt',
  })

  return (
    <>
      <PageHeader
        label="Kontakt"
        title="Hör av dig"
        description="Har du en fiskerapport, fråga eller idé? Vi bygger Sportfiskecentralen tillsammans med lokala sportfiskare."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <section aria-labelledby="report-form-heading">
            <h2 id="report-form-heading" className="mb-2 font-serif text-2xl text-cream">
              Skicka en fiskerapport
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-cream/60">
              Dela dina observationer från vattnen runt Höör och Ringsjöbygden. Vi publicerar utvalda
              rapporter löpande under säsongen.
            </p>
            <ReportForm />
          </section>

          <aside className="space-y-6">
            <div className="rounded-sm border border-white/5 bg-charcoal-light p-8">
              <h3 className="mb-4 font-serif text-xl text-cream">Allmänna frågor</h3>
              <p className="text-sm leading-relaxed text-cream/60">
                För samarbeten, guider eller feedback om plattformen – vi svarar så snart vi kan.
              </p>
              <p className="mt-4 text-sm text-sand">hej@sportfiskecentralen.se</p>
            </div>

            <div className="rounded-sm border border-white/5 bg-charcoal-light p-8">
              <h3 className="mb-4 font-serif text-xl text-cream">Rapporter via e-post</h3>
              <p className="text-sm leading-relaxed text-cream/60">
                Föredrar du e-post? Skicka din rapport direkt till oss så granskar vi den manuellt.
              </p>
              <p className="mt-4 text-sm text-sand">rapporter@sportfiskecentralen.se</p>
            </div>

            <div className="rounded-sm border border-forest/30 bg-forest/10 p-8">
              <h3 className="mb-2 font-serif text-lg text-cream">Samarbeten</h3>
              <p className="text-sm leading-relaxed text-cream/60">
                Intresserad av sponsrat innehåll eller affiliate-samarbeten? Sportfiskecentralen växer
                och vi tar gärna kontakt med lokala aktörer inom sportfiske.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <Newsletter />
    </>
  )
}
