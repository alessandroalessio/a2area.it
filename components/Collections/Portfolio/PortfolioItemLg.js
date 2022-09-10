import Link from 'next/link'
import Img from 'next/image'

export default function PortfolioItemLg(props){
    return(
        <>
            <div className="overflow-auto rounded-xl">
                <Link href={"/portfolio/"+props.slug}>
                    <a>
                        <div className="portfolio-wrapper overflow-hidden relative">
                            <div className="portfolio-overlay">
                                <div className="max-w-sm">
                                    <h3>{props.title}</h3>
                                    <p className="opacity-80 text-sm">Wordpress, Custom Theme</p>
                                    <div className="flex justify-center mt-3 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <Img src={props.image} alt={props.title} width={2000} height={1000} />
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}