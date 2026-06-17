import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import WaterCard from '../components/WaterCard'
import { waters } from '../data/waters'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { matchesSearch, uniqueSorted } from '../utils/filter'

export default function Waters() {
  useDocumentTitle('Fiskevatten')
  const [query, setQuery] = useState('')
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null)

  const speciesOptions = useMemo(
    () => uniqueSorted(waters.flatMap((water) => water.species)),
    [],
  )

  const filteredWaters = useMemo(() => {
    return waters.filter((water) => {
      const matchesSpecies = !speciesFilter || water.species.includes(speciesFilter)
      const matchesQuery = matchesSearch(
        query,
        water.name,
        water.description,
        water.region,
        ...water.species,
      )
      return matchesSpecies && matchesQuery
    })
  }, [query, speciesFilter])

  function resetFilters() {
    setQuery('')
    setSpeciesFilter(null)
  }

  return (
    <>
      <PageHeader
        label="Fiskevatten"
        title="Lokala vatten i centrala Skåne"
        description="Utforska guider till Ringsjöarna, Dagstorpssjön och andra fiskevatten i Höörtrakten och omnejd."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <SearchInput
            id="waters-search"
            value={query}
            onChange={setQuery}
            placeholder="Sök vatten, arter eller region..."
          />
          <FilterChips
            label="Filtrera på art"
            options={speciesOptions}
            active={speciesFilter}
            onChange={setSpeciesFilter}
          />
        </div>

        {filteredWaters.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-cream/40">
              Visar {filteredWaters.length} av {waters.length} vatten
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWaters.map((water) => (
                <WaterCard key={water.id} water={water} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            title="Inga vatten matchar ditt filter"
            description="Prova att ändra sökord eller välj en annan art för att se fler fiskevatten."
            onReset={resetFilters}
          />
        )}
      </div>
    </>
  )
}
