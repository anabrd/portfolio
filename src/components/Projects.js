function Projects(props) {

    let output = "CONTENT GOES HERE"

    let content = props.data.filter(item => item.id == 2);
    content = content[0];

    return (
        <section id = {content.title} style = {{height: "900px"}} >
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </section>
    )
}

export default Projects;
