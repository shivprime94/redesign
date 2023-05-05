import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import styles from '@/styles/Card.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <Navbar />
        <div className={styles.explore}>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Explore
          </h3>
        </div>

        <p className={styles.subheading}>
          Buy any crypto index anytime, anywhere.
        </p>
        <div className={styles.cardContainer}>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <Card />
          </div>
        </div>
      </Head>
    </>
  )
}
