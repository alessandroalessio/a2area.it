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
          <div className="content-wrapper mb-12 text-center">
            
            <div class="content-section">
                <h1 className="title mt-8">Portfolio</h1>
                <div className="subtitle text-center">Alcuni dei lavori realizzati</div>
            </div>

          </div>
        </section>

        <section className="section-bg-element-bar reverse">
            <div className="content-wrapper text-center">
                
                <div className="flex justify-between space-x-5 grid-cols-3">
                    <div className="w-full block"><PortfolioItemMd key={125} index={125} slug="dio-cane" title="Sito web" image="https://www.a2area.it/wp-content/uploads/2020/04/ThumbPortfolio_COLDCAR.jpg" imageMobile="https://www.a2area.it/wp-content/uploads/2020/04/ThumbPortfolio_COLDCAR.jpg" /></div>
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