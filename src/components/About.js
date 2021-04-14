function About(props) {

    let content = props.data.filter(item => item.id == 1);
    content = content[0];

    return (
        <section id = {content.title}>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </section>
    )
}

export default About;