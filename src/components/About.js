function About(props) {

    let data = props.data.filter(item => item.id == 1)[0];
    let tools = data.content.map(list => 
                                    <ul>
                                        {list.map(item => <li>{item}</li>)}
                                    </ul>);
    return (
        <section id={data.title}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h3>{data.subheading}</h3>
            <div>{tools}</div>
        </section>
    )
}

export default About;