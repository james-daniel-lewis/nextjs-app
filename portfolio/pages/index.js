import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>      
        <title>Portfolio</title>
        <meta name="keywords" content="james" />
      </Head>
      <div>
        <h1 className={styles.title}>home</h1>
        <Link href="/work">
            <a>
              <button type="button" className={styles.btn}>
                  All Projects
              </button>
            </a>
          </Link>
        </div>
    </>

  )
}
