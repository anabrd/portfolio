import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css'
import { useState, useEffect } from 'react'
import Trail from './Trail'

export default function Navbar(props) {

    const [show, setShow] = useState(false);

    let menuLinks = props.data.map((section, index) => 
                    <li key={index}>
                        <NavHashLink smooth to={{hash: section.title.toLowerCase()}}>
                            {section.heading}
                        </NavHashLink>
                    </li>);

    menuLinks.push(<NavHashLink to="/" 
                    onClick={props.activeLang == "DE" ? () => props.setActiveLang("EN") : () => props.setActiveLang("DE")}>
                        {props.activeLang == "DE" ? "EN" : "DE"}
                    </NavHashLink> )

    useEffect(() => {
        setTimeout(setShow(true), 2000)
    }, [])

    return (
        <nav>
            <ul className = "menu-vertical">
                <Trail show={show}>
                    {menuLinks}
                </Trail>
            </ul>
        </nav>
    )
}