import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import fs from 'fs';
import matter from 'gray-matter';

import Me from '../public/me.png'
const commonData = require('../data/common.json')

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>Siti Web Alessandria | {commonData.SiteName}</title>
        <meta name="description" content={commonData.MetaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

        <Navbar />

        <AnimatePresence>
              <div className="hero pt-0 md:pt-24 pb-36">
                <div className="max-w-6xl mx-auto md:flex items-center h-1/2">
                  <div className="w-full md:w-4/12 pt-2 px-12 md:p-0">
                    <div className="do-flutuate image-wrapper">
                      <motion.div 
                        animate={{ 
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          delay: 1,
                          duration: 0.5
                        }}
                        >
                        <Image src={Me} title="Alessandro Alessio" alt="Alessandro Alessio" className="w-1/4 md:w-full" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-full md:w-8/12">
                    <h2 className="text-4xl md:text-2xl lg:text-5xl p-8 md:p-8 md:pl-20 md:pr-0">
                      <motion.div style={{ overflow: 'hidden' }} animate={{ opacity: [0, 1], y: ['-5%', '0%'] }} transition={{  delay: 0.5, duration: 0.5 }}>
                        <span>Sono Alessandro.</span><br />
                      </motion.div>
                      <motion.div style={{ overflow: 'hidden' }} animate={{ opacity: [0, 1], y: ['-5%', '0%'] }} transition={{  delay: 1, duration: 0.5 }}>
                        <span>Realizzo <strong>Siti Web e Software</strong></span>
                      </motion.div>
                      <motion.div style={{ overflow: 'hidden' }} animate={{ opacity: [0, 1], y: ['-5%', '0%'] }} transition={{  delay: 1.5, duration: 0.5 }}>
                        <span className="do-text-clip-top-down">per privati e aziende.<br /></span>
                      </motion.div>
                      <motion.div style={{ overflow: 'hidden' }} animate={{ opacity: [0, 1], y: ['-5%', '0%'] }} transition={{  delay: 2, duration: 0.5 }}>
                        <span>Se vuoi <Link href=""><a title="Preventivo Realizzazione Sito Web Alessandria">contattami</a></Link>!</span>
                      </motion.div>
                    </h2>
                  </div>
                </div>
              </div>
        </AnimatePresence>

        <section className="max-w-6xl mx-auto mb-8 text-center">
          <div className="title-wrapper">
            <h3 className="seo-subtitle">Siti Web Alessandria</h3>
            <h2 className="title">Servizi</h2>
            <p className="subtitle">Cosa posso fare per te</p>
          </div>

          <div className="flex gap-3 my-4 text-left">
            {services.map( (service, iService) => {

            const {slug, frontmatter} = service
            const {title, icon, excerpt} = frontmatter

              return <div key={iService} className="w-4/12 bg-white/5 duration-500 ease-in-out cursor-pointer hover:bg-white/10 p-8 rounded-xl">
                <Link href={'/services/' + slug}>
                  <a>
                    <div className="icon-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                      </svg>
                    </div>
                    <span className="block title text-xl mt-3 mb-2"><h3 dangerouslySetInnerHTML={{ __html: title }}></h3></span>
                    <p className="text-sm">{excerpt}</p>
                    <div className="button-wrapper text-right mt-6">
                      <span className="btn text-base">Scopri</span>
                    </div>
                  </a>
                </Link>
              </div>
            })}

          </div>
        </section>

        
        <section className="px-32 mb-8 text-center">
          <h2 className="title">Lavori</h2>
        </section>
        <section className="px-32 mb-8 text-center">
          <h3 className="text-md uppercase tracking-widest">Siti Web Alessandria</h3>
          <h2 className="title">Tecnologia dei siti web</h2>
        </section>

        <Footer />
      </main>

    </div>
  )
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
  
  const servicesFiles = fs.readdirSync('data/collections/services');
  
  const services = servicesFiles.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`data/collections/services/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
  });

  // Return the pages static props
  return {
      props: {
        services,
      },
  };
}