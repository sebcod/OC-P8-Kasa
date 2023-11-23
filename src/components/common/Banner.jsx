import PropTypes from "prop-types";

const Banner = ({ fromPage }) => {

    Banner.propTypes = {
        fromPage: PropTypes.string,
    }

    return (
        <div className="banner">
            <div className={fromPage === "home" ? "bannerBgHome" : "bannerBgAbout"}></div>
            {fromPage === "home" && <pre className="titleBanner-container"><h2>Chez vous, </h2><h2>partout et ailleurs</h2></pre>}
        </div>
    );
};

export default Banner;