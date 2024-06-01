import { Link } from '@chakra-ui/react'
import styles from './page.module.css'
import { Hero } from '@/components/client/Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Link href="/properties/casa-linda">casa linda</Link>
    </main>
  )
}
