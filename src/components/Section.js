function Section(props) {

    let output = "CONTENT GOES HERE"

    let content = props.sectionData;

    return (
        <section style = {{height: "900px"}} >
            <h2>{props.sectionData.title}</h2>
            <p>{props.sectionData.description}</p>
        </section>
    )
}

export default Section;
