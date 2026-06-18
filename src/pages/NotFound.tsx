import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Sidan hittades inte',
    description: 'Sidan du letar efter finns inte eller har flyttats.',
  })
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sand uppercase">404</p>
      <h1 className="font-serif text-4xl text-cream sm:text-5xl">Sidan hittades inte</h1>
      <p className="mt-4 max-w-md text-cream/60">
        Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till startsidan och fortsätt
        utforska.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-forest px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-forest-light"
      >
        Till startsidan
      </Link>
    </div>
  )
}
