import { getServerSideSession } from '@/hoc/server-auth'
import prisma from '@/lib/prismaClient'
import { redirect } from 'next/navigation'
import ClientPage from './page.client'

export default async function ContactPage({
  params,
}: {
  params: { propertyId: string }
}) {
  const session = await getServerSideSession()
  if (!session) {
    redirect('/404')
  }
  const property = await prisma.property.findUnique({
    where: {
      id: parseInt(params.propertyId),
    },
    include: {
      contacts: true,
    },
  })
  if (!property) {
    return <div>Property not found</div>
  }

  return <ClientPage property={property} />
}
