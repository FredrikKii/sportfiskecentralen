interface EmptyStateProps {
  title: string
  description: string
  onReset?: () => void
}

export default function EmptyState({ title, description, onReset }: EmptyStateProps) {
  return (
    <div className="rounded-sm border border-white/5 bg-charcoal-light px-6 py-16 text-center">
      <p className="font-serif text-xl text-cream">{title}</p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/50">{description}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 text-sm font-semibold tracking-wide text-sand uppercase transition-colors hover:text-cream"
        >
          Rensa filter
        </button>
      )}
    </div>
  )
}
