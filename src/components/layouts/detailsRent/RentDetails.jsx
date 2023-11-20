//import React from 'react';
import PropTypes from "prop-types";
import Slider from "../../common/Slider";
const RentDetails = ({ rent }) => {

    RentDetails.propTypes = {
        rent: PropTypes.object,
    };

    console.log(rent.id);

    return (
        <div className="rentdetails">
            <Slider pictures={rent.pictures} />
        </div>
    );
};

export default RentDetails;