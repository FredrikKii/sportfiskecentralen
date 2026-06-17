interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  id?: string
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Sök...',
  id = 'search',
}: SearchInputProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        Sök
      </label>
      <svg
        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-cream/30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-sm border border-white/10 bg-charcoal-light py-3 pr-4 pl-11 text-sm text-cream placeholder:text-cream/30 transition-colors focus:border-sand/40 focus:outline-none"
      />
    </div>
  )
}
