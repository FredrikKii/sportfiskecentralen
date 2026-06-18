export const waterIds = [
  'ringsjoarna',
  'satoftasjon',
  'dagstorpssjon',
  'tjornarpssjon',
  'vaxsjon',
  'bosarpasjon',
  'lokala-avar',
] as const

export type WaterId = (typeof waterIds)[number]
