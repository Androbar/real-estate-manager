import { PropertyForm } from '@/components/client/EditPropertyForm.client'
import { getServerSideSession } from '@/hoc/server-auth'
import type { ExtendedSession } from '@/types/auth'
import { Container } from '@chakra-ui/react'

export default async function Page() {
  const session: ExtendedSession | null = await getServerSideSession()
  if (!session) {
    return { redirect: '/404' } // Redirect to 404 if no session
  }

  return (
    <Container maxW="6xl">
      <PropertyForm />
    </Container>
  )
}
