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
    include: {
      propertyImages: {
        include: {
          image: true,
        },
      },
    },
  })
  return (
    <main className={styles.main}>
      <Hero />
      <Container maxW="6xl" py={6}>
        <PropertiesListFeatured properties={properties || []} />
      </Container>
      <AboutUsHome />
      <ContactUs />
      <BlogPosts />
    </main>
  )
}
