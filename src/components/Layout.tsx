'use client'
// components/Layout.tsx

import React, { type PropsWithChildren } from 'react'
import { Container } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from '@/components/client/Header'
import { Footer } from '@/components/client/Footer'

const queryClient = new QueryClient()

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxW="6xl">
        <Header />
        {children}
        <Footer />
      </Container>
    </QueryClientProvider>
  )
}

export default Layout
