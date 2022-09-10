import Link from 'next/link'
import { startTransition } from 'react'

export default function Feedback(props){

    let stars = (elements) => {
        var display = ''
        var i = 1
        for ( i=1; i<=elements; i++ ) {
            display = display + '★'
        }
        return display
    }
    return(
        <>
            <div key={props.index} className="bg-white/5 duration-500 mx-4 md:mx-48 ease-in-out hover:bg-white/10 p-8 rounded-xl text-left">
                <div className="opacity-75 uppercase text-xs tracking-wide">{props.author}</div>
                <span className="block title text-2xl"><h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3></span>
                <div className="stars opacity-75 mb-4 text-purple-400">{stars(props.star)}</div>
                <p className="text-sm">{props.excerpt}</p>
                <div className="button-wrapper text-right mt-6">
                </div>
            </div>
        </>
    )
}