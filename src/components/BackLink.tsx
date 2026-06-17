import { Link } from 'react-router-dom'

interface BackLinkProps {
  to: string
  label: string
}

export default function BackLink({ to, label }: BackLinkProps) {
  return (
    <Link
      to={to}
      className="mb-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-sand uppercase transition-colors hover:text-cream"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
      {label}
    </Link>
  )
}
