import './About.css'
import { useState, useEffect, useRef } from 'react'

function About(props) {

    let myRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) =>
            {
                if (window.scrollY  > myRef.current.offsetTop) {
                    setIsScrolled(true);
                }
            });
    }, [])

    let data = props.data.filter(item => item.id == 1)[0];

    let tools = data.content.map((list, index) => 
        <ul key={index}>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>);

    let description = data.description.map((line, index) => 
        <p key={index}>{line.regular}<span className={isScrolled ? "focus" : null}>{line.strong}</span></p>)

    return (
        <section ref={myRef} id={data.title.toLowerCase()}>
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
                </div>
            </div>
        </section>
    )
}

export default About;