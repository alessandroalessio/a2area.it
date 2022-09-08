export default function SectionTitle(props){
    return(
        <div className="title-wrapper mb-12">
            <h3 className="seo-subtitle">{props.seoSubtitle}</h3>
            <h2 className="title">{props.title}</h2>
            <p className="subtitle">{props.subtitle}</p>
        </div>
    )
}