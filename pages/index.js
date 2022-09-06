import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

import Me from '../public/me.png'
const commonData = require('../data/common.json')

export default function Home() {
  return (
    <div>
      <Head>
        <title>Siti Web Alessandria | {commonData.SiteName}</title>
        <meta name="description" content={commonData.MetaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Navbar />

        <div className="hero pt-24 pb-36">
          <div className="max-w-6xl mx-auto flex items-center h-1/2">
            <div className="w-4/12">
              <Image src={Me} title="Alessandro Alessio" />
            </div>
            <div className="w-8/12">
              <h2 className="text-5xl p-8">Sono Alessandro.<br /> Realizzo <strong>Siti Web e Software</strong><br /> per privati e aziende.<br /> Se vuoi <a title="Preventivo Realizzazione Sito Web Alessandria"><strong>contattami</strong></a>!</h2>
            </div>
          </div>
        </div>

        <Footer />
      </main>

    </div>
  )
}
