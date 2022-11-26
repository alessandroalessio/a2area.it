import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
const commonData = require('../../data/common.json')

function Navbar (){
    return(
        <>
        <div className="flex m-4">
            <div className="w-2/12 flex items-center">
                <Link href="/" title={commonData.SiteName}>
                    <a className="block">
                        <Image src={Logo} alt="" width={46} height={41} />
                    </a>
                </Link>
            </div>
            <nav className="w-8/12 flex justify-center items-center">
                <ul className="hidden md:flex">
                    <li className="my-3 mx-6"><Link href="/"><a className="hover-menu">Chi sono</a></Link></li>
                    <li className="my-3 mx-6"><Link href="/"><a className="hover-menu">Servizi</a></Link></li>
                    <li className="my-3 mx-6"><Link href="/portfolio/"><a className="hover-menu">Portfolio</a></Link></li>
                    <li className="my-3 mx-6"><Link href="/"><a className="hover-menu">Blog</a></Link></li>
                    <li className="my-3 mx-6"><Link href="/contatti"><a className="hover-menu">Contatti</a></Link></li>
                </ul>
            </nav>
            <div className="w-2/12 flex justify-end items-center">
                <div className="btn flex items-center uppercase tracking-wider mr-2 md:mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-0 md:mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="hidden sm:tracking-tighter sm:text-xs md:inline-block">Preventivo gratuito</span>
                </div>
                <MenuOverlay />
            </div>
        </div>
        </>
    )
}

export default Navbar