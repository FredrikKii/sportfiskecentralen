interface FilterChipsProps {
  label: string
  options: string[]
  active: string | null
  onChange: (value: string | null) => void
}

export default function FilterChips({ label, options, active, onChange }: FilterChipsProps) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-sand-muted uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange(null)}
          className={`rounded-sm px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors ${
            active === null
              ? 'bg-forest text-cream'
              : 'border border-white/10 text-cream/60 hover:border-sand/30 hover:text-cream'
          }`}
        >
          Alla
        </button>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(active === option ? null : option)}
            className={`rounded-sm px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors ${
              active === option
                ? 'bg-forest text-cream'
                : 'border border-white/10 text-cream/60 hover:border-sand/30 hover:text-cream'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
