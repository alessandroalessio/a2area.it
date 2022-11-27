import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import {getSingleMarkdownFiles} from '../lib/markdownReader'
import getSingleJSON from '../lib/JSONReader'

import Logo from '../public/logo.png'
const commonData = require('../data/common.json')

export default function Cookie({page, personalData}) {
  return (
    <div>
      <Head>
        <title>{page.frontmatter.title} | {commonData.SiteName}</title>
        <meta name="description" content={commonData.MetaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

        <Navbar />

        <section className="section-bg-element-bar">
          <div className="content-wrapper mb-36 text-center">
            
            <div>

                <div className="max-w-6xl m-auto mt-24 p-8">
                    <h1 className="title">Contattami</h1>
                    <p className="subtitle mb-6">Lorem ipsum dolor sit amet</p>

                    <div className="mb-8">
                      <form action="/api/generic-contacts" method="post">

                        <div className="md:flex md:flex-grow md:justify-between md:space-x-4">
                          <div className="field-name-wrap text-left mb-4">
                            <label htmlFor="name">Nome e Cognome:</label>
                            <input type="text" id="name" name="name" required />
                          </div>
                          <div className="field-email-wrap text-left mb-4">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                          </div>
                          <div className="field-tel-wrap text-left mb-4">
                            <label htmlFor="tel">Telefono:</label>
                            <input type="number" id="tel" name="tel" required />
                          </div> 
                        </div>

                        <div className="block">
                          <div className="field-message-wrap text-left mb-4">
                            <label htmlFor="tel">Messaggio:</label>
                            <textarea id="message" name="message" className="h-32 block w-full" required></textarea>
                          </div> 
                        </div>


                        <div className="md:flex md:flex-grow md:justify-between items-center md:space-x-4">
                          <div className="field-privacy-wrap text-left mb-4">
                            <input type="checkbox" id="privacy" name="privacy" className="h-32" required />
                            <label htmlFor="tel">Accetto la <Link href="/privacy">Privacy Policy</Link></label>
                          </div>
                          <div className="field-privacy-wrap text-left mb-4">
                            <button type="submit" className="btn text-lg py-2 px-8">Invia richiesta</button>
                          </div>
                        </div>

                      </form>
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
    const page = await getSingleMarkdownFiles('data/pages/cookie.md')

  // Return the pages static props
  return {
      props: {
        personalData,
        page
      },
  };
}