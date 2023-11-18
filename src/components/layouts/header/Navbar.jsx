//import React from 'react';
import { NavLink } from "react-router-dom";

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
