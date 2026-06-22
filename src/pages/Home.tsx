import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SeasonBanner from '../components/SeasonBanner'
import SectionTitle from '../components/SectionTitle'
import WaterCard from '../components/WaterCard'
import ReportCard from '../components/ReportCard'
import GuideCard from '../components/GuideCard'
import Newsletter from '../components/Newsletter'
import { waters } from '../data/waters'
import { reports } from '../data/reports'
import { guides } from '../data/guides'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Sportfisket mitt i Skåne',
    description:
      'Guider, fiskerapporter och lokala vatten för sportfiskare i centrala Skåne – abborre, gädda, gös och mer.',
  })

  const featuredWaters = waters.slice(0, 6)
  const featuredGuides = guides.slice(0, 8)

  const latestReports = [...reports]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <>
      <Hero />
      <SeasonBanner />

      <section className="py-20" aria-labelledby="waters-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            id="waters-heading"
            label="Fiskevatten"
            title="Utvalda vatten i regionen"
            description="Från Ringsjöarnas vidsträckta vatten till mindre åar och bäckar – här hittar du guider till de bästa fiskeplatserna i centrala Skåne."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWaters.map((water) => (
              <WaterCard key={water.id} water={water} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/fiskevatten"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
            >
              Se alla fiskevatten
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-light/50 py-20" aria-labelledby="reports-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            id="reports-heading"
            label="Rapporter"
            title="Senaste fiskerapporterna"
            description="Lokala observationer och tips från vattnen runt Höör och Ringsjöbygden."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/rapporter"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
            >
              Alla rapporter
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-cream/50 uppercase transition-colors hover:text-cream"
            >
              Skicka din egen rapport
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="guides-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            id="guides-heading"
            label="Guider"
            title="Lär dig fiska smartare"
            description="Praktiska guider för abborre, gädda, gös och put and take – skrivna för skånska förhållanden."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/guider"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
            >
              Utforska alla guider
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />

      <section className="py-20" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              id="about-heading"
              label="Om oss"
              title="En plattform byggd av fiskare"
              align="center"
            />
            <p className="text-lg leading-relaxed text-cream/70">
              Sportfiskecentralen är en oberoende plattform för sportfiskare i Skåne. Målet är att samla
              lokala guider, rapporter och tips på ett ställe – utan krångel.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
