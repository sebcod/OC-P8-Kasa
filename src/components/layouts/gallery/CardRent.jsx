//import React from 'react';
import PropTypes from "prop-types";
import { useEffect } from "react";

const CardRent = ({ rent }) => {

    CardRent.propTypes = {
        rent: PropTypes.object,
    }

    useEffect(() => {
        //console.log(rent);
        // console.log(props);
    }, [])

    return (
        <li className="cardRent">
            <img src={rent.cover} alt="" />
            <h2>{rent.title}</h2>
        </li>
    );
};

export default CardRent;