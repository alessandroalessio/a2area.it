import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import getSingleJSON from '../../lib/JSONReader'

import Logo from '../../public/logo.png'
const commonData = require('../../data/common.json')
import PortfolioItemLg from '../../components/Collections/Portfolio/PortfolioItemLg'
import PortfolioItemMd from '../../components/Collections/Portfolio/PortfolioItemMd'

export default function Cookie({personalData, page, content}) {
  return (
    <div>
      <Head>
        <title>Portfolio Title | {commonData.SiteName}</title>
        <meta name="description" content={commonData.MetaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

        <Navbar />

        <section>
          <div className="content-wrapper mb-36 text-center">
            
            <div class="content-section">
                <div className="hero-image overflow-hidden rounded-lg">
                    <img src="https://www.a2area.it/wp-content/webp-express/webp-images/uploads/2022/09/RaffaellaFerrari_Portfolio_Fullsize.jpg.webp" />
                </div>
                <h1 className="title mt-8">Portfolio Title</h1>
                <div className="subtitle text-center mb-24">WEBSITE, WORDPRESS THEME</div>
                <div className="flex">
                    <div className="w-4/12">
                        <ul className="list-none mt-8">
                            <li className="list-none"><b>Link:</b> <Link href="https://www.raffaellaferrari.com">www.raffaellaferrari.com</Link></li>
                            <li className="list-none"><b>Ruolo:</b> Designer & Developer</li>
                            <li className="list-none"><b>Linguaggi:</b> HTML, CSS, Javascript, PHP, MySQL, Wordpress</li>
                            <li className="list-none"><b>Data:</b> Aprile 2022</li>
                        </ul>
                    </div>
                    <div className="page-content-wrapper w-8/12 pr-12">
                        <p>
                            <strong>Richiesta:</strong><br />
                            La cliente aveva necessità di fare un restyling del proprio sito web avendo revisionato i suoi servizi e avendo nuovi materiali da mostrare ai propri potenziali clienti.
                        </p>
                        <p>
                            <strong>Soluzione:</strong><br />
                            Avendo già una conoscenza della piattaforma WordPress, con la cliente si è scelto di proseguire su tale CMS creando un template grafico personalizzato per lei. L’obiettivo era comunicare semplicità, freschezza e un pizzico di magia. Il design ha seguito il nuovo logo realizzato da Tomaso Serloreti, il lavoro di storytelling del cliente mixato con fotografie allineate al mood del sito creano un’atmosfera che ha appagato pienamente il cliente. Visual Identity a parte, come sempre, tutti i contenuti sono facilmente modificabili a seguito della personalizzazione di WordPress con Campi Custom e nuove sezioni. La parte SEO è stata predisposta affinchè il sito fosse da subito visibile dai motori di ricerca.
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </section>

        <section className="section-bg-element-bar reverse">
            <div className="content-wrapper mb-36 pt-8 text-center">
                
                <div>
                    <p className="subtitle block mb-6">Hai bisogno di qualcosa di simile?</p>
                    <Link href="#"><a className="btn-bordered text-xl py-3 px-8">Richiedi un preventivo</a></Link>
                </div>
                
                <div className="flex mt-36 justify-between space-x-5">
                    <div className="w-full block text-left">
                        <h2 className="title">Lavori</h2>
                        <p className="mt-4 mb-2">Qui puoi trovare una selezione degli ultimi lavori realizzati. Principalmente troverai lavori su <strong>Wordpress</strong>, eCommerce su <strong>Woocommerce</strong>, <strong>Prestashop</strong> e <strong>Shopify</strong>.</p>
                        <p className="mt-2 mb-4">Spesso integro nuove tecnologie come <strong>React</strong> e <strong>NextJs</strong> nei miei progetti. Se sei interessato a capire con quali tecnologie possiamo lavorare <Link href="/contatti"><a>contattami</a></Link>.</p>        
                    </div>
                    <div className="w-full block"><PortfolioItemMd key={125} index={125} slug="dio-cane" title="Sito web" image="https://www.a2area.it/wp-content/uploads/2020/04/ThumbPortfolio_COLDCAR.jpg" imageMobile="https://www.a2area.it/wp-content/uploads/2020/04/ThumbPortfolio_COLDCAR.jpg" /></div>
                    <div className="w-full block"><PortfolioItemMd key={125} index={125} slug="dio-cane" title="Sito web" image="https://www.a2area.it/wp-content/uploads/2020/04/ThumbPortfolio_COLDCAR.jpg" imageMobile="https://www.a2area.it/wp-content/uploads/2020/04/ThumbPortfolio_COLDCAR.jpg" /></div>
                </div>
            </div>
        </section>

        <Footer 
          logo={Logo} logoWidth={66} logoHeight={51} 
          siteName={commonData.SiteName} officeAddress={personalData.headquarters.operative.value}
          vatNumber={personalData.tax_data.vat.value} fiscalCode={personalData.tax_data.code.value}
          email={personalData.conctacts.mail.value} pec={personalData.conctacts.pec.value} />

      </main>

    </div>
  )
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){

    const personalData = await getSingleJSON('https://www.alessandroalessio.eu/data/contacts.json')
    const page = [];

  // Return the pages static props
  return {
      props: {
        personalData,
        page
      },
  };
}