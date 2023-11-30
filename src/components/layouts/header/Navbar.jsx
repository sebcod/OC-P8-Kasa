import { NavLink } from "react-router-dom";

// création des liens vers les pages home et about
// ajout de textDecoration: "underline" si le lien est actif

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                to={"/"}
                style={({ isActive }) =>
                    isActive ? { textDecoration: "underline" } : undefined
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to={"/About"}
                style={({ isActive }) =>
                    isActive ? { textDecoration: "underline" } : undefined
                }
            >
                About
            </NavLink>
        </nav>
    );
};

export default Navbar;
