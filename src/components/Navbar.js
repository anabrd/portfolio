import { NavHashLink } from 'react-router-hash-link';

export const Navbar = (props) => {

    let links = props.data.map(section => 
                                <NavHashLink smooth to={{hash: section.title}}>
                                    {section.title}
                                </NavHashLink>);
    return (
        <nav>
            {links}
            <NavHashLink to="/" onClick={props.activeLang == "DE" ? () => props.setActiveLang("EN") : () => props.setActiveLang("DE")}>
                {props.activeLang == "DE" ? "EN" : "DE"}
            </NavHashLink> 
        </nav>
    )
}