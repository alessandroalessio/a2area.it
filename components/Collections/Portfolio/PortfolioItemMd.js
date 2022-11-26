import Link from 'next/link'
import Img from 'next/image'

export default function PortfolioItemMd(props){
    return(
        <>
            <div className="overflow-auto rounded-xl">
                <Link href={"/portfolio/"+props.slug}>
                    <a className="overflow-hidden relative">
                        <div className="portfolio-wrapper">
                            <div className="portfolio-overlay">
                                <div className="max-w-sm">
                                    <h3>{props.title}</h3>
                                    <p className="opacity-80 text-xs">Wordpress, Custom Theme</p>
                                    <div className="flex justify-center mt-3 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="image-wrapper block">
                                <Img src={props.image} alt={props.title} width={500} height={500} className="block h-full m-0 p-0" />
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}