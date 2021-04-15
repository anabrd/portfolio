import './About.css'

function About(props) {

    let data = props.data.filter(item => item.id == 1)[0];
    let tools = data.content.map(list => 
                                    <ul>
                                        {list.map(item => <li>{item}</li>)}
                                    </ul>);
    return (
        <section id={data.title}>
            <h2 className="section-heading">{data.heading}</h2>
                    <p>{data.description}</p>
                <div className="tools-wrapper">
                    <div className="circle-big"></div>
                    <h4>{data.subheading}</h4>
                    <div className = "tools-list-wrapper">{tools}</div>
                </div>
        </section>
    )
}

export default About;