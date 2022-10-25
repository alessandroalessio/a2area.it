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
                    <h2 className="text-xl font-black">Contattami</h2>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet</p>

                    <div className="border mb-8">
                      <form action="/api/generic-contacts" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <button type="submit" className="btn">Submit</button>
                      </form>
                    </div>


                    <form action="https://formspree.io/f/" method="post">
                        
                        <div className="flex gap-4 mb-4">
                            <div className="w-1/3">
                                <label htmlFor="name" className="block">Nome e Cognome</label>
                                <input name="Name" id="name" type="text" placeholder="Nome e Cognome" className="block" />
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="email" className="block">Email</label>
                                <input name="Email" id="email" type="email" placeholder="Email" className="block" />
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="email" className="block">Telefono</label>
                                <input name="Phone" id="phone" type="text" placeholder="Tel." className="block" />
                            </div>
                        </div>
                        
                        <div className="block mb-4">
                            <label htmlFor="message" className="block">Messaggio</label>
                            <textarea name="Message" id="message" type="message"  placeholder="Scrivi il tuo messaggio qui..."></textarea>
                        </div>

                        <div className="flex">
                        <div className="text-left w-1/2"></div>
                        <div className="text-right w-1/2"><button type="submit" className="btn">Invia</button></div>
                        </div>
                        
                    </form>
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