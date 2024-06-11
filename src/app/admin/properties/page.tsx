import { getServerSideSession } from '@/hoc/server-auth'
import prisma from '@/lib/prismaClient'
import EditPropertiesClientPage from './page.client'
import { redirect } from 'next/navigation'

export default async function EditPropertiesPage() {
  const session = await getServerSideSession()
  if (!session) {
    redirect('/404')
  }
  const properties = await prisma.property.findMany({
    where: {
      ownerId: parseInt(session.user.id),
    },
    include: {
      contacts: true,
    },
  })

  return <EditPropertiesClientPage session={session} properties={properties} />
}
