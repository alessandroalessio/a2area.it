import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Servizi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-16">
        <Hero 
          title="Servizi"
          desc=""
          btnLabel=""
          btnURL=""
          />
      </main>

    </div>
  )
}
