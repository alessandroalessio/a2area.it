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

        <div className="hero pt-0 md:pt-24 pb-36">
          <div className="max-w-6xl mx-auto md:flex items-center h-1/2">
            <div className="w-full md:w-4/12 pt-2 px-12 md:p-0">
              <Image src={Me} title="Alessandro Alessio" alt="Alessandro Alessio" className="w-1/4 md:w-full" />
            </div>
            <div className="w-full md:w-8/12">
              <h2 className="text-4xl md:text-2xl lg:text-5xl p-8 md:p-8">
                Sono Alessandro.<br />
                Realizzo <strong>Siti Web e Software</strong> per privati e aziende.<br />
                Se vuoi <Link href=""><a title="Preventivo Realizzazione Sito Web Alessandria">contattami</a></Link>!</h2>
            </div>
          </div>
        </div>

        <section className="px-32 mb-8 text-center">
          <h2 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-purple-500">Servizi</h2>
        </section>
        <section className="px-32 mb-8 text-center">
          <h2 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-purple-500">Lavori</h2>
        </section>
        <section className="px-32 mb-8 text-center">
          <h3 className="text-md uppercase tracking-widest">Siti Web Alessandria</h3>
          <h2 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-purple-500">Tecnologia dei siti web</h2>
        </section>

        <Footer />
      </main>

    </div>
  )
}
