import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import ReportCard from '../components/ReportCard'
import { reports } from '../data/reports'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { matchesSearch, uniqueSorted } from '../utils/filter'

export default function Reports() {
  useDocumentTitle('Rapporter')
  const [query, setQuery] = useState('')
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null)

  const speciesOptions = useMemo(
    () => uniqueSorted(reports.flatMap((report) => report.species)),
    [],
  )

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSpecies = !speciesFilter || report.species.includes(speciesFilter)
      const matchesQuery = matchesSearch(
        query,
        report.title,
        report.excerpt,
        report.location,
        report.author,
        ...report.species,
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
        label="Rapporter"
        title="Fiskerapporter från regionen"
        description="Senaste observationerna från lokala vatten – uppdateras löpande under säsongen."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <SearchInput
            id="reports-search"
            value={query}
            onChange={setQuery}
            placeholder="Sök rapport, plats eller art..."
          />
          <FilterChips
            label="Filtrera på art"
            options={speciesOptions}
            active={speciesFilter}
            onChange={setSpeciesFilter}
          />
        </div>

        {filteredReports.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-cream/40">
              Visar {filteredReports.length} av {reports.length} rapporter
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredReports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            title="Inga rapporter matchar ditt filter"
            description="Prova att ändra sökord eller välj en annan art för att se fler rapporter."
            onReset={resetFilters}
          />
        )}
      </div>
    </>
  )
}
