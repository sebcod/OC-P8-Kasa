//import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

const CardRent = ({ rent }) => {

    CardRent.propTypes = {
        rent: PropTypes.object,
    }

    return (

        <li className="cardRent">
            <NavLink to={"/rent/" + rent.id}>
                <img src={rent.cover} alt="" />
                <h2>{rent.title}</h2>
            </NavLink>
        </li>
    );
};

export default CardRent;