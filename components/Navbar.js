import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'

const commonData = require('../data/common.json');

function Navbar (){
    return(
        <>
        <div className="flex m-4">
            <div className="w-2/12 md:w-1/12 flex items-center">
                <Link href="/" title={commonData.SiteName}>
                    <a className="block">
                        <Image src={Logo} alt="" width={46} height={41} />
                    </a>
                </Link>
            </div>
            <nav className="w-9/12 hidden: md:flex justify-center items-center">
                <ul className="hidden md:flex">
                    <li className="m-3"><Link href="/"><a>Chi sono</a></Link></li>
                    <li className="m-3"><Link href="/"><a>Servizi</a></Link></li>
                    <li className="m-3"><Link href="/"><a>Portfolio</a></Link></li>
                    <li className="m-3"><Link href="/"><a>Blog</a></Link></li>
                    <li className="m-3"><Link href="/"><a>Contatti</a></Link></li>
                </ul>
            </nav>
            <div className="w-2/12 flex justify-end items-center">
                <div className="btn flex items-center uppercase tracking-wider mr-2 md:mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-0 md:mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="hidden md:inline-block">Preventivo gratuito</span>
                </div>
                <div className="btn-bordered flex md:hidden items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar