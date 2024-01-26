import { Link } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      COSO
      <Link href='/properties/casa-linda'>casa linda</Link>
    </main>
  );
}
