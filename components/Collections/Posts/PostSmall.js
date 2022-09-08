import Link from 'next/link'
import dateFormatted from '../../../lib/dateFormatter'

export default function PostSmall(props){
    return(<>
        <div id={"post-" + props.index} className="mb-4 md:ml-auto w-full md:w-11/12 text-left relative">
            <Link href={"/blog/" + props.slug}>
            <a className="flex bg-white/5 duration-500 ease-in-out cursor-pointer hover:bg-white/10 p-8 rounded-xl">
                <div className="ml-4">
                <h3 className="title text-xl">{props.title}</h3>
                <p className="flex opacity-60 mb-2 text-xs">
                    <div className="date flex align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span className="ml-2">{dateFormatted(props.date)}</span>
                    </div>
                    {/* <div className="flex uppercase ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        <span className="ml-2">{props.categories}</span>
                    </div> */}
                </p>
                </div>
                <div className="absolute top-1/2 left-full translate-xy-neg-half"><span className="btn">&gt;</span></div>
            </a>
            </Link>
        </div>
    </>)
}