import Link from 'next/link'

export default function FeatureBox(props){
    return(
        <>
            <div key={props.index} className="bg-white/5 duration-500 ease-in-out cursor-pointer hover:bg-white/10 p-8 rounded-xl">
                <div className="icon-wrapper" dangerouslySetInnerHTML={{ __html: props.icon }}></div>
                <span className="block title text-xl mt-3 mb-2"><h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3></span>
                <p className="text-sm">{props.excerpt}</p>
                <div className="button-wrapper text-right mt-6">
                </div>
            </div>
        </>
    )
}