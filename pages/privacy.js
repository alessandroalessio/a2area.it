import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import {getSingleMarkdownFiles} from '../lib/markdownReader'
import markdownToHtml from '../lib/markdownToHtmls'
import getSingleJSON from '../lib/JSONReader'

import Logo from '../public/logo.png'
const commonData = require('../data/common.json')

export default function Privacy({personalData, page, content}) {
  return (
    <div>
      <Head>
        <title>{page.frontmatter.title} | {commonData.SiteName}</title>
        <meta name="description" content={commonData.MetaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

        <Navbar />

        <section>
          <div className="content-wrapper mb-36 text-center">
            
            <div class="content-section">
                <h2 className="title">{page.frontmatter.title}</h2>
                <div className="page-content-wrapper" dangerouslySetInnerHTML={{ __html: page.content }} />
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
  const page = await getSingleMarkdownFiles('data/pages/privacy.md')

  page.content = await markdownToHtml(page.content)

  // Return the pages static props
  return {
      props: {
        personalData,
        page
      },
  };
}