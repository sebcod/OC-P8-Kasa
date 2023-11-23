import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Banner = ({ fromPage }) => {

    Banner.propTypes = {
        fromPage: PropTypes.string,
    }

    return (
        <div className="banner">
            <div className={fromPage === "home" ? "bannerBgHome" : "bannerBgAbout"}></div>
            {fromPage === "home" && <h2>Chez vous, partout et ailleurs</h2>}
        </div>
    );
};

export default Banner;