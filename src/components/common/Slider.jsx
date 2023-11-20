import PropTypes from "prop-types";
import { useState } from "react";

const Slider = ({ pictures }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    Slider.propTypes = {
        pictures: PropTypes.array,
    };

    const slideLeft = () => {
        setCurrentSlide((curr) => {
            return curr - 1 < 0 ? pictures.length - 1 : curr - 1;
        });
    };
    const slideRight = () => {
        setCurrentSlide((curr) => {
            return curr + 1 > pictures.length - 1 ? 0 : curr + 1;
        });
    };

    return (
        <div className="slider">
            <img src={pictures[currentSlide]} alt="" />
            {pictures.length > 1 && (
                <div className="nbrOfSlides">
                    {currentSlide + 1}/{pictures.length}
                </div>
            )}

            {pictures.length > 1 && (
                <svg
                    onClick={slideLeft}
                    className="slider-arrow-left"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                >
                    <path
                        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                        fill="white"
                    />
                </svg>
            )}

            {pictures.length > 1 && (
                <svg
                    onClick={slideRight}
                    className="slider-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                >
                    <path
                        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                        fill="white"
                    />
                </svg>
            )}
        </div>
    );
};

export default Slider;
