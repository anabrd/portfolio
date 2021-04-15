import './About.css'

function About(props) {

    let data = props.data.filter(item => item.id == 1)[0];
    let tools = data.content.map(list => 
                                    <ul>
                                        {list.map(item => <li>{item}</li>)}
                                    </ul>);
    return (
        <section id={data.title}>
            <h2 className="section-heading">{data.title}</h2>
            <div className="about-wrapper">
                <div>
                    <p>{data.description}</p>
                </div>
                <div className="tools-wrapper">
                    <h4>{data.subheading}</h4>
                    <div>{tools}</div>
                </div>
            </div>
        </section>
    )
}

export default About;