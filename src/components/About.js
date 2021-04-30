import './About.css'

function About(props) {

    let data = props.data.filter(item => item.id == 1)[0];

    let tools = data.content.map((list, index) => 
        <ul key={index}>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>);

    let description = data.description.map((line, index) => 
        <p key={index}>{line}</p>)

    return (
        <section id={data.title.toLowerCase()}>
            <h2 className="section-heading">{data.heading}</h2>
            <div className="section-content">
                <div className="about-wrapper">
                    {description}
                </div>
                <div className="tools-wrapper">
                        <h4>{data.subheading}</h4>
                        <div className = "tools-list-wrapper">
                            {tools}
                        </div>
                        <div className="circle-big"></div>
                </div>
            </div>
        </section>
    )
}

export default About;