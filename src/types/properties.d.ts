export type FilterParams = {
  priceMin?: string
  priceMax?: string
  propertyType?: string
  operationType?: string
  sizeMin?: string
  sizeMax?: string
  bedrooms?: string
  bathrooms?: string
}

export type SelectOption = {
  value: string | undefined
  label: string | undefined
}
