'use client'

import React, { type PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from '@/components/client/Header'
import { Footer } from '@/components/client/Footer'

const queryClient = new QueryClient()

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  )
}

export default Layout
