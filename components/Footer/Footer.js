import Link from 'next/link'
import Image from 'next/image'

const commonData = require('../../data/common.json')
const footerMenu = require('../../data/menu.json')

function Footer(props){
    return(
        <>
            <footer className="section-bg-element-bar small">
                <div className="max-w-6xl mx-auto text-center pt-48 pb-12 text-xs">
                    <div className="block mx-auto md:gap-3 md:flex items-center">
                        <div className="w-11/12 mx-auto md:w-6/12 md:mx-0 text-center md:text-left">
                            <div className="flex">
                                <Image src={props.logo} width={props.logoWidth} height={props.logoHeight} className="opacity-50" alt="Siti Web Alessandria" />
                                <span className="ml-3 text-left text-xs leading-4 opacity-80">
                                    <p className="text-sm uppercase tracking-widest">{props.siteName}</p>
                                    <p>
                                        {props.officeAddress}<br />
                                        P.IVA {props.vatNumber} / C.F. {props.fiscalCode}<br />
                                        <Link href={"mailto:" + props.email}><a>{props.email}</a></Link> / <Link href={"mailto:" + props.pec}><a>{props.pec}</a></Link>
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto md:w-6/12 md:mx-0 text-center md:text-right">
                            <ul className="flex justify-center md:justify-end py-4 md:py-0">
                                { footerMenu.footer.map((item, k) => {
                                    return <li key={k}><Link href={item.url}><a className="p-4 link">{item.label}</a></Link></li>
                                }) }
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer