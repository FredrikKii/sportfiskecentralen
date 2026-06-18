import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import GuideCard from '../components/GuideCard'
import { guides } from '../data/guides'
import { usePageMeta } from '../hooks/usePageMeta'
import { matchesSearch, uniqueSorted } from '../utils/filter'

export default function Guides() {
  usePageMeta({
    title: 'Guider',
    description:
      'Praktiska fiskeguider för abborre, gädda, gös och put and take – anpassade för lokala vatten i Skåne.',
    path: '/guider',
  })
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

  const categoryOptions = useMemo(
    () => uniqueSorted(guides.map((guide) => guide.category)),
    [],
  )

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      const matchesCategory = !categoryFilter || guide.category === categoryFilter
      const matchesQuery = matchesSearch(
        query,
        guide.title,
        guide.description,
        guide.category,
      )
      return matchesCategory && matchesQuery
    })
  }, [query, categoryFilter])

  function resetFilters() {
    setQuery('')
    setCategoryFilter(null)
  }

  return (
    <>
      <PageHeader
        label="Guider"
        title="Fiskeguider för Skåne"
        description="Från nybörjare till erfaren sportfiskare – praktiska guider anpassade för lokala vatten och arter."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <SearchInput
            id="guides-search"
            value={query}
            onChange={setQuery}
            placeholder="Sök guide eller ämne..."
          />
          <FilterChips
            label="Filtrera på kategori"
            options={categoryOptions}
            active={categoryFilter}
            onChange={setCategoryFilter}
          />
        </div>

        {filteredGuides.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-cream/40">
              Visar {filteredGuides.length} av {guides.length} guider
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            title="Inga guider matchar ditt filter"
            description="Prova att ändra sökord eller välj en annan kategori för att se fler guider."
            onReset={resetFilters}
          />
        )}
      </div>
    </>
  )
}
