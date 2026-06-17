interface PageHeaderProps {
  label?: string
  title: string
  description?: string
  gradient?: string
}

export default function PageHeader({ label, title, description, gradient }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/5">
      {gradient ? (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden="true" />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-forest-dark via-charcoal to-charcoal"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-charcoal/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 pt-32 sm:px-6 lg:px-8">
        {label && (
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sand uppercase">{label}</p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl text-cream sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/70">{description}</p>
        )}
      </div>
    </header>
  )
}
