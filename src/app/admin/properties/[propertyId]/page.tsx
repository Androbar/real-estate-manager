import { PropertyForm } from '@/components/client/EditPropertyForm.client'
import prisma from '@/lib/prismaClient'

export default async function EditPropertyPage({
  params,
}: {
  params: { propertyId: string }
}) {
  const { propertyId } = params
  // this should be a hook, don't use prisma on client....
  // this is the server component, nvm
  const property = await prisma.property.findUnique({
    where: {
      id: parseInt(propertyId),
    },
    include: {
      propertyImages: {
        include: {
          image: true,
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
  })
  if (property === null) {
    return <div>Property not found</div>
  }
  return (
    <>
      <PropertyForm property={property} />
    </>
  )
}
