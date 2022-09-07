import Link from 'next/link'
const commonData = require('../../data/common.json')

function Footer(){
    return(
        <>
        
            <div className="w-full text-center p-4 text-xs">
                <div className="flex gap-3">
                    <div className="w-6/12">
                        P.IVA {commonData.VATNumber}
                    </div>
                    <div className="w-6/12">
                        <ul>
                            <li><Link href="#"><a>Privacy</a></Link></li>
                            <li><Link href="#"><a>Cookies</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer