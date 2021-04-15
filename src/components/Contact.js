import Circles from './Circles';
import './Contact.css'

function Contact(props) {

    let data = props.data.filter(item => item.id == 3)[0];

    let contactForm = 
    <form> 
        {data.contactForm.map(input =>
        <div>
            <label for={input.name}>{input.name}</label>
            <input id={input.name} type={input.type} placeholder={input.placeholder}></input>
        </div>)
        }
    </form>

    let contactLinks = 
    <ul className = "contact-links menu-vertical">
        {data.contactLinks.map(link => <li><a href={link.path}>{link.name}</a></li>)}
    </ul>

    return (
        <section id = {data.title.toLowerCase()}>
            <Circles theme = "dark"/>
            <h2 className="section-heading">{data.heading}</h2>
            <p>{data.description}</p>
            {contactForm}
            {contactLinks}
        </section>
    )
}

export default Contact;