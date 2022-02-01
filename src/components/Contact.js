import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Circles from './Circles';
import './Contact.css';
import Trail from './Trail';

function Contact(props) {
  const [state, handleSubmit] = useForm('xbjqovnq');
  const [show, setShow] = useState(false);
  let message = '';
  if (state.succeeded) {
    message = 'Message sent, thank you!';
  }

  const data = props.data.filter((item) => item.id == 3)[0];

  const contactForm = (
    <form onSubmit={handleSubmit}>
      {data.contactForm.map((input, index) => (
        <div key={index}>
          <input id={input.name} type={input.type} name={input.name} placeholder={input.placeholder} />
          <label htmlFor={input.name}>{input.name}</label>
          <ValidationError
            prefix={input.name}
            field={input.name}
            errors={state.errors}
          />
        </div>
      ))}
      <button type="submit" disabled={state.submitting}>Send</button>
    </form>
  );

  const contactLinks = data.contactLinks.map((link, index) => (
    <li key={index}>
      <a href={link.path} target="_blank" rel="noreferrer">{link.name}</a>
    </li>
  ));

  function scrollHandle(e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setShow(true);
    }
  }

  window.onscroll = scrollHandle;
  window.ontouchmove = scrollHandle;

  return (
    <section id={data.title.toLowerCase()} onScroll={() => setShow(true)}>
      <h2 className="section-heading">{data.heading}</h2>
      <div className="section-content">
        <div className="form-wrapper">
          <p>{data.description}</p>
          {contactForm}
          <p className="message-sent">{message}</p>
        </div>
        <Circles theme="dark" />
      </div>

      <ul className="contact-links menu-vertical">
        <Trail show={show}>
          {contactLinks}
        </Trail>
      </ul>
    </section>

  );
}

export default Contact;
