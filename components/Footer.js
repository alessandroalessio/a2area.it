const commonData = require('../data/common.json')

function Footer(){
    return(
        <>
            <div className="fixed w-full bottom-0 left-0 text-center p-4 text-xs bg-dark">
                P.IVA {commonData.VATNumber}
            </div>
        </>
    )
}

export default Footer