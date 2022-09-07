import { Fancybox } from "@fancyapps/ui"
import '@fancyapps/ui/dist/fancybox.css'
import Image from "next/image"

Fancybox.bind("[data-fancybox]");

function FancyboxImage(props){
    let zoomImage = ( props.zoomImage!="" ) ? 'https://img.spacergif.org/v1/spacer.gif' : props.zoomImage
    let thumbImage = ( props.thumbImage!="" ) ? 'https://img.spacergif.org/v1/spacer.gif' : props.thumbImage
    return(
        <>
            <a data-fancybox href={ props.zoomImage }><Image src={props.thumbImage} alt="" /></a>
        </>
    )
}

export default FancyboxImage();