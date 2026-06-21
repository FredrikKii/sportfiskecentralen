import { type ReactNode } from 'react'
import PageHeader from '../components/PageHeader'
import { SITE_NAME, SITE_URL } from '../config/site'
import { usePageMeta } from '../hooks/usePageMeta'

function PolicySection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-sm border border-white/5 bg-charcoal-light p-6 sm:p-8">
      <h2 className="font-serif text-xl text-cream">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-cream/70">{children}</div>
    </section>
  )
}

export default function Privacy() {
  usePageMeta({
    title: 'Integritetspolicy',
    description: `Hur ${SITE_NAME} samlar in, använder och skyddar personuppgifter enligt GDPR.`,
    path: '/integritet',
  })

  return (
    <>
      <PageHeader
        label="Integritet"
        title="Integritetspolicy"
        description="Hur vi hanterar personuppgifter och cookies på Sportfiskecentralen."
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-10 text-sm text-cream/40">Senast uppdaterad: 17 juni 2026</p>

        <div className="space-y-6">
          <PolicySection title="1. Vem ansvarar för dina uppgifter?">
            <p>
              {SITE_NAME} ({SITE_URL}) är personuppgiftsansvarig för den behandling av
              personuppgifter som sker via denna webbplats.
            </p>
            <p>
              Vid frågor om integritet eller för att utöva dina rättigheter, kontakta oss på{' '}
              <a
                href="mailto:hej@sportfiskecentralen.se"
                className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
              >
                hej@sportfiskecentralen.se
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="2. Vilka uppgifter samlar vi in?">
            <p>Vi samlar endast in personuppgifter när det behövs för att driva sidan:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-cream/90">Cookies och analys</strong> – om du godkänner
                cookies använder vi Google Analytics för att förstå hur webbplatsen används (t.ex.
                vilka sidor som besöks). Ingen analys sker om du avvisar cookies.
              </li>
              <li>
                <strong className="text-cream/90">Fiskerapporter</strong> – om du skickar in en
                rapport via kontaktformuläret kan vi behandla namn, e-postadress, plats, art och
                rapporttext.
              </li>
              <li>
                <strong className="text-cream/90">Nyhetsbrev</strong> – om du anmäler dig till
                nyhetsbrev behandlar vi din e-postadress för att skicka uppdateringar.
              </li>
              <li>
                <strong className="text-cream/90">Teknisk data</strong> – webbläsare och server kan
                automatiskt logga teknisk information (t.ex. IP-adress) vid besök, särskilt om du
                godkänner analys-cookies.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Varför behandlar vi uppgifterna?">
            <p>Vi behandlar personuppgifter med följande syften och rättsliga grunder:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-cream/90">Samtycke</strong> – för analys-cookies (Google
                Analytics) när du klickar på &quot;Acceptera cookies&quot;.
              </li>
              <li>
                <strong className="text-cream/90">Berättigat intresse</strong> – för att driva,
                förbättra och skydda webbplatsen samt hantera inkomna rapporter och frågor.
              </li>
              <li>
                <strong className="text-cream/90">Avtal eller förfrågan</strong> – när du själv
                kontaktar oss eller skickar in en rapport.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Cookies">
            <p>
              Vi använder nödvändiga cookies/lokal lagring för att komma ihåg ditt val kring
              cookies. Analys-cookies via Google Analytics aktiveras endast efter ditt samtycke.
            </p>
            <p>
              Du kan när som helst avvisa analys-cookies genom att rensa webbläsarens
              localStorage för denna webbplats och ladda om sidan, eller genom att blockera cookies
              i webbläsaren.
            </p>
            <p>
              Läs mer om Googles behandling i{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
              >
                Googles integritetspolicy
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="5. Hur länge sparar vi uppgifter?">
            <p>
              Cookie-val sparas lokalt i din webbläsare tills du rensar den. Analysdata hanteras av
              Google enligt deras egna lagringsperioder. Uppgifter från fiskerapporter och
              nyhetsbrev sparas så länge det behövs för att hantera ditt ärende eller din prenumeration,
              eller tills du ber oss radera dem.
            </p>
          </PolicySection>

          <PolicySection title="6. Vem delar vi uppgifter med?">
            <p>
              Vi säljer inte personuppgifter. Vi kan dela uppgifter med tjänsteleverantörer som
              hjälper oss driva webbplatsen, i första hand Google (Analytics) när du har gett
              samtycke. Dessa aktörer behandlar uppgifter enligt avtal och gällande lag.
            </p>
          </PolicySection>

          <PolicySection title="7. Dina rättigheter">
            <p>Enligt GDPR har du rätt att:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>få information om vilka uppgifter vi behandlar om dig</li>
              <li>begära rättelse eller radering av uppgifter</li>
              <li>invända mot viss behandling</li>
              <li>begära begränsning av behandling</li>
              <li>i vissa fall få ut dina uppgifter (dataportabilitet)</li>
              <li>återkalla samtycke (t.ex. för analys-cookies)</li>
            </ul>
            <p>
              Kontakta oss på{' '}
              <a
                href="mailto:hej@sportfiskecentralen.se"
                className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
              >
                hej@sportfiskecentralen.se
              </a>{' '}
              om du vill utöva dina rättigheter. Du kan också lämna klagomål till Integritetsskyddsmyndigheten
              (IMY) på{' '}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream"
              >
                imy.se
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="8. Ändringar">
            <p>
              Vi kan uppdatera denna policy när webbplatsen utvecklas. Väsentliga ändringar
              meddelas på sidan och datumet ovan uppdateras.
            </p>
          </PolicySection>
        </div>
      </div>
    </>
  )
}
