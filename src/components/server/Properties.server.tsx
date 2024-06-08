import PropertiesPage from '@/components/client/Properties.client'
import prisma from '@/lib/prismaClient'

export const PropertiesServer = async ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) => {
  console.log('searchParams', searchParams)
  const maxValues = await prisma.property.aggregate({
    _max: {
      price: true,
      areaTotal: true,
    },
  })
  const maxPrice = maxValues._max.price ?? undefined
  const maxSize = maxValues._max.areaTotal ?? undefined
  // get operation type and property type to set default values

  return <PropertiesPage maxPrice={maxPrice} maxSize={maxSize} />
}
