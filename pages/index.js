import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import getAllMarkdownFiles from '../lib/markdownReader'
import getSingleJSON from '../lib/JSONReader'
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionTitle from '../components/SectionTitle'
import ServiceStandard from '../components/Collections/Services/ServicesStandard'
import FeatureBox from '../components/Collections/Features/FeatureBox'
import PostSmall from '../components/Collections/Posts/PostSmall'

import Me from '../public/me.png'
import Logo from '../public/logo.png'
const commonData = require('../data/common.json')

export default function Home({services, personalData, features, posts}) {
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
            <SectionTitle seoSubtitle="Servizi per Siti Web Alessandria" title="Servizi" subtitle="Cosa posso fare per te" />

            <div className="lg:flex lg:gap-3 my-4 text-left">
              {services.reverse().map( (service, iService) => {
                const {slug, frontmatter} = service
                const {title, icon, excerpt} = frontmatter
                return (<ServiceStandard key={iService} index={iService} icon={icon} title={title} excerpt={excerpt} />)
              })}
            </div>

            <div><hr className="mt-12 w-8 mx-auto" /></div>
          </div>
        </section>

        <section className="section-bg-element-bar">
          <div className="max-w-6xl mx-auto mb-36 text-center">
            <SectionTitle seoSubtitle="Portfolio Siti Web Alessandria" title="Lavori" subtitle="Una selezione degli ultimi lavori" />
          </div>
        </section>

        <section className="section-bg-element-bar reverse">
          <div className="max-w-6xl mx-auto mb-36 text-center">
            <SectionTitle seoSubtitle="Siti Web Alessandria" title="Recensioni e Feedback" subtitle="Cosa dicono di me collaboratori e clienti" />

            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide><FeatureBox title="Slide 1" excerpt="lorem ipsum dolor sit amet" /></SwiperSlide>
              <SwiperSlide><FeatureBox title="Slide 1" excerpt="lorem ipsum dolor sit amet" /></SwiperSlide>
              <SwiperSlide><FeatureBox title="Slide 1" excerpt="lorem ipsum dolor sit amet" /></SwiperSlide>
              <SwiperSlide><FeatureBox title="Slide 1" excerpt="lorem ipsum dolor sit amet" /></SwiperSlide>
            </Swiper>

          </div>
        </section>
        
        <section className="section-bg-element-bar">
          <div className="max-w-6xl mx-auto mb-36 text-center">
            <SectionTitle seoSubtitle="Tecnologia di Siti Web Alessandria" title="Tecnologia dei siti web" subtitle="Come realizzo i siti web" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-0">
              { features.map( (feature, iFeature) => {
                return(<FeatureBox key={iFeature} title={feature.frontmatter.title} excerpt={feature.frontmatter.excerpt} />)
              })}
            </div>

            <div className="text-center mt-16">
              <span className="btn text-lg py-4 px-8">Scopri come realizzeremo il tuo sito web</span>
            </div>
          </div>
        </section>

        
        <section className="section-bg-element-bar reverse">
          <div className="max-w-6xl mx-auto mt-32 mb-8 text-center">
            <div className="md:flex">
              <div className="w-11/12 mx-auto mb-6 md:w-4/12 md:mx-0 md:mb-0 text-left">
                <h3 className="seo-subtitle">Siti Web Alessandria</h3>
                <h2 className="title">Blog &amp; Tutorial</h2>
                <p className="my-4">Per me, i miei clienti, collaboratori e utenti sono solito condividere quello che imparo nel giornaliero.</p>
                <p>Questo mi permette di divulgare le mie competenze e di aiutare coloro che hanno dubbi o problemi in merito ad argomenti digitali.</p>
                <div className="text-right mt-8 md:mt-4">
                  <Link href="/blog"><a className="btn">Tutti gli articoli</a></Link>
                </div>
              </div>
              <div className="w-11/12 mx-auto md:w-8/12">

                { posts.map( (post, iPost) => {
                  return(<PostSmall key={iPost} index={post.id} slug="genio" title={post.title.rendered} date={post.date} categories="Laravel, PHP" />)
                } ) }

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
  const services = await getAllMarkdownFiles('data/collections/services')
  const features = await getAllMarkdownFiles('data/collections/features')
  const posts = await getSingleJSON('https://www.a2area.it/wp-json/wp/v2/posts/?per_page=3')

  // console.log(features)

  // Return the pages static props
  return {
      props: {
        personalData,
        services,
        features,
        posts
      },
  };
}