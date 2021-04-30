import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css'

export default function Navbar(props) {

    return (
        <nav>
            <ul className = "menu-vertical">
                {props.data.map((section, index) => 
                    <li key={index}>
                        <NavHashLink smooth to={{hash: section.title.toLowerCase()}}>
                            {section.heading}
                        </NavHashLink>
                    </li>)}
                <li>
                    <NavHashLink to="/" 
                    onClick={props.activeLang == "DE" ? () => props.setActiveLang("EN") : () => props.setActiveLang("DE")}>
                        {props.activeLang == "DE" ? "EN" : "DE"}
                    </NavHashLink> 
                </li>
            </ul>
        </nav>
    )
}