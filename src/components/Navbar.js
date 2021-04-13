import { NavHashLink } from 'react-router-hash-link';

export const Navbar = () => {
    return (
        <nav>
            <NavHashLink smooth to="/#about">
                about
            </NavHashLink>
            <NavHashLink smooth to="/#projects">
                projects
            </NavHashLink>
            <NavHashLink smooth to="/#contact">
                contact
            </NavHashLink>
            {/* <NavHashLink>
                de
            </NavHashLink> */}
        </nav>
    )
}