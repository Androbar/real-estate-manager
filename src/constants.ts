export const MAX_WIDTH = '1280px'

export const PROPERTY_TYPES = {
  HOUSE: {
    label: 'House',
    icon: 'house',
    color: 'blue',
  },
  APARTMENT: {
    label: 'Apartment',
    icon: 'apartment',
    color: 'green',
  },
  OFFICE: {
    label: 'Office',
    icon: 'office',
    color: 'yellow',
  },
  WAREHOUSE: {
    label: 'Warehouse',
    icon: 'warehouse',
    color: 'purple',
  },
  LAND: {
    label: 'Land',
    icon: 'land',
    color: 'gray',
  },
} as const

export const OPERATION_TYPES = {
  SALE: {
    label: 'Sale',
    icon: 'sale',
    color: 'green',
  },
  RENT: {
    label: 'Rent',
    icon: 'rent',
    color: 'purple',
  },
}

export const OPERATION_TYPES_OPTIONS = [
  { value: '', label: 'All Types' },
  { value: 'SALE', label: 'Sale' },
  { value: 'RENT', label: 'Rent' },
] as const

export const PROPERTY_TYPES_OPTIONS = [
  { value: '', label: 'All Types' },
  { value: 'HOUSE', label: 'House' },
  { value: 'APARTMENT', label: 'Apartment' },
  { value: 'OFFICE', label: 'Office' },
  { value: 'WAREHOUSE', label: 'Warehouse' },
  { value: 'LAND', label: 'Land' },
] as const

export const PROPERTY_IMAGES = [
  {
    id: 1,
    filename: '1895849469.jpg',
    url: '/images/1895849469.jpg',
    caption: 'Main entrance',
    order: 1,
  },
  {
    id: 2,
    filename: '1895849470.jpg',
    url: '/images/1895849470.jpg',
    caption: 'Living room',
    order: 2,
  },
  {
    id: 3,
    filename: '1895849471.webp',
    url: '/images/1895849471.webp',
    caption: 'Living room',
    order: 3,
  },
  {
    id: 4,
    filename: '1895849472.webp',
    url: '/images/1895849472.webp',
    caption: 'Living room',
    order: 4,
  },
  {
    id: 5,
    filename: '1895849473.jpg',
    url: '/images/1895849473.jpg',
    caption: 'Living room',
    order: 5,
  },
  {
    id: 6,
    filename: '1895849474.webp',
    url: '/images/1895849474.webp',
    caption: 'Living room',
    order: 6,
  },
  {
    id: 7,
    filename: '1895849475.jpg',
    url: '/images/1895849475.jpg',
    caption: 'Living room',
    order: 7,
  },
  {
    id: 8,
    filename: '1895849476.webp',
    url: '/images/1895849476.webp',
    caption: 'Living room',
    order: 8,
  },
]
