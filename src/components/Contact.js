import Circles from './Circles';
import './Contact.css'

function Contact(props) {

    let data = props.data.filter(item => item.id == 3)[0];
    
    let contactForm = 
        <form> 
            {data.contactForm.map((input, index) =>
            <div key={index}>
                <input id={input.name} type={input.type} placeholder={input.placeholder}></input>
                <label htmlFor={input.name}>{input.name}</label>
            </div>)
            }
            <input type="submit" value="Send"></input>
        </form>

    let contactLinks = data.contactLinks.map((link, index)=> <li key={index}>
                        <a href={link.path} target="_blank">{link.name}</a>
                    </li>)

    return (
            <section id = {data.title.toLowerCase()}>
                <h2 className="section-heading">{data.heading}</h2>
                <div className="section-content">
                    <div className="form-wrapper">
                        <p>{data.description}</p>
                        {contactForm}
                    </div>
                    <Circles theme = "dark"/>
                </div>
                <ul className = "contact-links menu-vertical">
                    {contactLinks}
                </ul>
            </section>
            )
}

export default Contact;