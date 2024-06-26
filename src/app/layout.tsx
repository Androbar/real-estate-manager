import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth'
import type { ExtendedSession } from '@/types/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Estate',
  description: 'Find your next home',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session: ExtendedSession | null = await getServerSession(authOptions)
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>

      <body className={inter.className}>
        <ChakraProvider>
          <Layout session={session}>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  )
}
