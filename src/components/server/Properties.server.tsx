import PropertiesPage from '@/components/client/Properties.client'
import prisma from '@/lib/prismaClient'
import type { SearchParams } from '@/types/properties'

export const PropertiesServer = async ({
  searchParams,
}: {
  searchParams?: SearchParams
}) => {
  const maxValues = await prisma.property.aggregate({
    _max: {
      price: true,
      areaTotal: true,
    },
  })
  const maxPrice = maxValues._max.price ?? undefined
  const maxSize = maxValues._max.areaTotal ?? undefined

  return (
    <PropertiesPage
      maxPrice={maxPrice}
      maxSize={maxSize}
      searchParams={searchParams}
    />
  )
}
