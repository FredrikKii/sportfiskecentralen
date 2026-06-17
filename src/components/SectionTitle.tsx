interface SectionTitleProps {
  id?: string
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  id,
  label,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-12 max-w-2xl ${alignment}`}>
      {label && (
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sand uppercase">
          {label}
        </p>
      )}
      <h2 id={id} className="font-serif text-3xl text-cream sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-cream/65">{description}</p>
      )}
    </div>
  )
}
