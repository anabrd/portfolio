import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css';
import { useState, useEffect } from 'react';
import Trail from './Trail';

export default function Navbar(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    window.addEventListener('scroll', console.log('ok'));
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const menuLinks = props.data.map((section, index) => (
    <li key={index}>
      <NavHashLink smooth to={{ hash: section.title.toLowerCase() }}>
        {section.heading}
      </NavHashLink>
    </li>
  ));

  menuLinks.shift();

  return (
    <nav>
      <ul className="menu-vertical">
        <Trail show={show}>
          {menuLinks}
        </Trail>
      </ul>
    </nav>
  );
}
