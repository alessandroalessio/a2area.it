import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
// import Typed from 'typed.js';

var options = {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 40
  };
var Typed = new Typed('#type', options);

function HeroFull(props) {    
    
    let heroWrapClasses = ''
    let heroOverlayClasses = 'hero-overlay'
    if ( props.fullHeight=='true' ) {
        heroWrapClasses = 'flex w-full items-center h-screen'
        heroOverlayClasses += ' rounded-md'
    }

    return(
        <>
        <AnimatePresence>
            <motion.div 
                exit={{ opacity: 0, y: -10 }} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                >
                <div className={heroWrapClasses}>
                    <div className="text-center m-auto">
                        <div className="hero rounded-md">
                            <div></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="w-full p-8">
                                    <h1 className="text-3xl">{ props.title }</h1>
                                    <p id="type"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default HeroFull