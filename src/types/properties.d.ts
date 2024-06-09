export type FilterParams = {
  priceMin?: string
  priceMax?: string
  propertyType?: string
  operationType?: string
  sizeMin?: string
  sizeMax?: string
  rooms?: string
  bathrooms?: string
}

export type SearchParams = {
  [K in keyof FilterParams]?: string
}

export type SelectOption = {
  value: string | undefined
  label: string | undefined
}
