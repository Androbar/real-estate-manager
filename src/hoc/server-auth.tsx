// app/server-auth.tsx
import authOptions from '@/lib/auth'
import type { ExtendedSession } from '@/types/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const getServerSideSession =
  async (): Promise<ExtendedSession | null> => {
    const session: ExtendedSession | null = await getServerSession(authOptions)

    if (!session) {
      redirect('/404')
    }

    return session
  }
