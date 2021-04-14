import { NavHashLink } from 'react-router-hash-link';

export const Navbar = (props) => {

    let links = props.data.map(section => 
                                <NavHashLink smooth to={{hash: section.title}}>
                                    {section.title}
                                </NavHashLink>);
    return (
        <nav>
            {links}
            <NavHashLink to="/" onClick={() => console.log("ok")}>
                DE
            </NavHashLink> 
        </nav>
    )
}