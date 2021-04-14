function Contact(props) {

    let output = "CONTENT GOES HERE"

    let content = props.data.filter(item => item.id == 3);
    content = content[0];

    return (
        <section id = {content.title} style = {{height: "900px"}} >
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </section>
    )
}

export default Contact;