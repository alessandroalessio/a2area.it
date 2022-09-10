import Link from 'next/link'
import dateFormatted from '../../../lib/dateFormatter'

export default function PostSmall(props){
    return(<>
        <div className="mb-4 md:ml-auto w-full md:w-11/12 text-left relative">
            <Link href={"/blog/" + props.slug}>
            <a className="flex bg-white/5 duration-500 ease-in-out cursor-pointer hover:bg-white/10 p-8 rounded-xl">
                <div className="ml-4">
                    <h3 className="title text-xl">{props.title}</h3>
                    <p className="flex opacity-60 mb-2 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span className="ml-2">{dateFormatted(props.date)}</span>
                    </p>
                </div>
                <div className="absolute top-1/2 left-full translate-xy-neg-half"><span className="btn">&gt;</span></div>
            </a>
            </Link>
        </div>
    </>)
}