import { PropertyForm } from '@/components/client/EditPropertyForm.client'
import { getServerSideSession } from '@/hoc/server-auth'
import prisma from '@/lib/prismaClient'
import type { ExtendedSession } from '@/types/auth'
import { Container } from '@chakra-ui/react'

export default async function EditPropertyPage({
  params,
}: {
  params: { propertyId: string }
}) {
  const session: ExtendedSession | null = await getServerSideSession()
  if (!session) {
    return { redirect: '/404' } // Redirect to 404 if no session
  }
  const { propertyId } = params
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

  if (property === null || property.ownerId !== parseInt(session.user?.id)) {
    return <div>Property not found</div>
  }

  return (
    <Container maxW="6xl">
      <PropertyForm property={property} />
    </Container>
  )
}

export async function generateMetadata() {
  const session = await getServerSideSession()
  if (!session) {
    return { redirect: '/404' } // Redirect to 404 if no session
  }
  return {} // No metadata modifications needed
}
