import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
// import fs from 'fs';
// import matter from 'gray-matter';
import getAllMarkdownFiles from '../lib/markdownReader'

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
              <div className="hero section-bg-element-bar pt-0 md:pt-24 pb-36">
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
                        <span>Se vuoi <Link href="/contatti/"><a title="Preventivo Realizzazione Sito Web Alessandria">contattami</a></Link>!</span>
                      </motion.div>
                    </h2>
                  </div>
                </div>
              </div>
        </AnimatePresence>

        <section className="section-bg-element-bar reverse">
          <div className="max-w-6xl mx-auto mb-36 text-center">
            <div className="title-wrapper mb-12">
              <h3 className="seo-subtitle">Siti Web Alessandria</h3>
              <h2 className="title">Servizi</h2>
              <p className="subtitle">Cosa posso fare per te</p>
            </div>

            <div className="lg:flex lg:gap-3 my-4 text-left">
              {services.reverse().map( (service, iService) => {

              const {slug, frontmatter} = service
              const {title, icon, excerpt} = frontmatter

                return <div key={iService} className="w-11/12 mx-auto my-2 lg:w-4/12 lg:my-0 bg-white/5 duration-500 ease-in-out cursor-pointer hover:bg-white/10 p-8 rounded-xl">
                  <Link href={'/services/' + slug}>
                    <a>
                      <div className="icon-wrapper" dangerouslySetInnerHTML={{ __html: icon }}></div>
                      <span className="block title text-xl mt-3 mb-2"><h3 dangerouslySetInnerHTML={{ __html: title }}></h3></span>
                      <p className="text-sm">{excerpt}</p>
                      <div className="button-wrapper text-right mt-6">
                        <span className="btn text-sm tracking-wide">
                            Scopri
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              })}
            </div>

            <div><hr className="mt-12 w-8 mx-auto" /></div>
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
  
  // console.log("================================")
  // console.log( await getAllMarkdownFiles('data/collections/services') )
  // console.log("================================")

  // const servicesFiles = fs.readdirSync('data/collections/services');
  
  // const services = servicesFiles.map((fileName) => {
  //     const slug = fileName.replace('.md', '');
  //     const readFile = fs.readFileSync(`data/collections/services/${fileName}`, 'utf-8');
  //     const { data: frontmatter } = matter(readFile);

  //     return {
  //       slug,
  //       frontmatter,
  //     };
  // });

  const services = await getAllMarkdownFiles('data/collections/services')

  // Return the pages static props
  return {
      props: {
        services,
      },
  };
}