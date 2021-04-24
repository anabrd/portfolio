import Circles from './Circles';
import './Contact.css'

function Contact(props) {

    let data = props.data.filter(item => item.id == 3)[0];

    let contactForm = 
    <form> 
        {data.contactForm.map(input =>
        <div>
            <input id={input.name} type={input.type} placeholder={input.placeholder}></input>
            <label for={input.name}>{input.name}</label>
        </div>)
        }
        <input type="submit" value="Send"></input>
    </form>

    let contactLinks = 
    <ul className = "contact-links menu-vertical">
        {data.contactLinks.map(link => <li><a href={link.path} target="_blank">{link.name}</a></li>)}
    </ul>

    return (
            <section id = {data.title.toLowerCase()}>
                <div>
                    <h2 className="section-heading">{data.heading}</h2>
                    <p>{data.description}</p>
                    {contactForm}
                </div>
                <Circles theme = "dark"/>
                {contactLinks}
            </section>
            )
}

export default Contact;