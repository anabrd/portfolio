import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css'

export default function Navbar(props) {

    let links = props.data.map(section => 
                                <li>
                                    <NavHashLink smooth to={{hash: section.title.toLowerCase()}}>
                                        {section.heading}
                                    </NavHashLink>
                                </li>);
    return (
        <nav>
            <ul className = "menu-vertical">
                {links}
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