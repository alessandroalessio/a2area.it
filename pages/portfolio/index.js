import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import getSingleJSON from '../../lib/JSONReader'

import Logo from '../../public/logo.png'
const commonData = require('../../data/common.json')

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
                    <div className="w-4/12">
                        <ul className="list-none mt-8">
                            <li className="list-none"><b>Link:</b> www.raffaellaferrari.com</li>
                            <li className="list-none"><b>Ruolo:</b> Designer & Developer</li>
                            <li className="list-none"><b>Linguaggi:</b> HTML, CSS, Javascript, PHP, MySQL, Wordpress</li>
                            <li className="list-none"><b>Data:</b> Aprile 2022</li>
                        </ul>
                    </div>
                </div>
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