export function normalizeSearch(value: string): string {
  return value.trim().toLowerCase()
}

export function matchesSearch(query: string, ...fields: string[]): boolean {
  if (!query) return true
  const normalized = normalizeSearch(query)
  return fields.some((field) => field.toLowerCase().includes(normalized))
}

export function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'sv'))
}
