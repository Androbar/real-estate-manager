'use client'

import React, { type PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from '@/components/client/Header'
import { Footer } from '@/components/client/Footer'
import type { ExtendedSession } from '@/types/auth'

const queryClient = new QueryClient()

const Layout: React.FC<
  PropsWithChildren<{ session: ExtendedSession | null }>
> = ({
  children,
  session,
}: PropsWithChildren<{ session: ExtendedSession | null }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header session={session} />
      {children}
      <Footer />
    </QueryClientProvider>
  )
}

export default Layout
