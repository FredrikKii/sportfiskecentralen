import { Link } from 'react-router-dom'
import HeroBackground from './HeroBackground'

const footerLinks = [
  { to: '/', label: 'Hem' },
  { to: '/fiskevatten', label: 'Fiskevatten' },
  { to: '/rapporter', label: 'Rapporter' },
  { to: '/guider', label: 'Guider' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/credits', label: 'Bildkrediter' },
  { to: '/integritet', label: 'Integritetspolicy' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <HeroBackground />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-2xl text-cream">Sportfiskecentralen</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/50">
              Fiske • Guider • Rapporter • Gemenskap
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/40">
              Sportfiskeguider och rapporter från centrala Skåne – Höör, Ringsjöarna och omnejd.
            </p>
          </div>

          <nav aria-label="Sidfotsnavigering">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-sand uppercase">
              Navigering
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-center text-xs text-cream/30">
            © {new Date().getFullYear()} Sportfiskecentralen. Oberoende sportfiskeplattform.
          </p>
        </div>
      </div>
    </footer>
  )
}
