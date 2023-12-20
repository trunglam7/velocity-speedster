import Image from 'next/image'
import styles from './page.module.css'
import SIdePanel from './components/SIdePanel'
import DataPanel from './components/DataPanel'

export default function Home() {
  return (
    <main className={styles.main}>
      <SIdePanel />
      <DataPanel />
    </main>
  )
}
