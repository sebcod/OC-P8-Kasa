//import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/About"}>About</Link>
        </nav>
    );
};

export default Navbar;