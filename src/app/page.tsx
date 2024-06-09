import { Container } from '@chakra-ui/react'
import styles from './page.module.css'
import { Hero } from '@/components/client/Hero'
import { PropertiesListFeatured } from '@/components/PropertyListFeatured'
import prisma from '@/lib/prismaClient'
import AboutUsHome from '@/components/client/AboutUsHome'
import ContactUs from '@/components/client/ContactUs'
import BlogPosts from '@/components/client/BlogPosts'

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
      <AboutUsHome />
      <ContactUs />
      <BlogPosts />
    </main>
  )
}
