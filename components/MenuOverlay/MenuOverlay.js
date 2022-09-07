import Link from 'next/link'
import React, { useState } from 'react'

function MenuOverlay(props) {
    // let desc = ( props.desc!="" ) ? '<p className="mt-5">' + props.desc + '</div>' : ''

    const [menuClasses, setMenuClasses] = useState('menu-overlay');

    const openFullMenu = () => {
        setMenuClasses('menu-overlay active')
    }
    const closeFullMenu = () => {
        setMenuClasses('menu-overlay')
    }

    return(
        <>
        <span className={ menuClasses }>
            <ul>
                <li className="text-right mb-4"><small className="text-xs uppercase cursor-pointer tracking-widest" onClick={closeFullMenu}>Chiudi</small></li>
                <li className="my-2 py-1"><Link href="/"><a>Chi sono</a></Link></li>
                <li className="my-2 py-1"><Link href="/"><a>Servizi</a></Link></li>
                <li className="my-2 py-1"><Link href="/"><a>Portfolio</a></Link></li>
                <li className="my-2 py-1"><Link href="/"><a>Blog</a></Link></li>
                <li className="my-2 py-1"><Link href="/"><a>Contatti</a></Link></li>
            </ul>
        </span>
        <div className="btn-bordered flex md:hidden items-center" onClick={openFullMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        </>
    )
}

export default MenuOverlay