import type { Property, Contact, PropertyImages, Image } from '@prisma/client'

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

export interface PropertyWithContacts extends Property {
  contacts: Contact[]
}

export interface PropertyImagesWithImage extends PropertyImages {
  image: Image
}

export interface PropertyWithImages extends Property {
  propertyImages: PropertyImagesWithImage[]
}

export interface BookmarkProperty {
  id: string
  title: string
}
