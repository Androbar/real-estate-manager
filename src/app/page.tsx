import { Container } from '@chakra-ui/react'
import styles from './page.module.css'
import { Hero } from '@/components/client/Hero'
import { PropertiesListFeatured } from '@/components/PropertyListFeatured'
import prisma from '@/lib/prismaClient'

export default async function Home() {
  const properties = await prisma?.property.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <main className={styles.main}>
      <Hero />
      <Container maxW="6xl">
        <PropertiesListFeatured properties={properties || []} />
      </Container>
    </main>
  )
}
