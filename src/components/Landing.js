import Circles from './Circles'
import './Landing.css'

function Landing(props) {

    let data = props.data.filter(item => item.id == 0)[0];

    return (
        <section id={data.title.toLowerCase()} >
            <div className="main-heading">
                <h1>{data.subheading}</h1>
                <h3>{data.description}</h3> 
            </div>
            <Circles theme = "light"/>
        </section>
    )
}

export default Landing;
