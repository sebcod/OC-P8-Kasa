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
            <div className="nbrOfSlides">
                {currentSlide + 1}/{pictures.length}
            </div>
            <svg
                onClick={slideLeft}
                className="slider-arrow-left"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Vector"
                    d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81332 4.50206 9.1439C5.17148 8.47448 6.25862 8.47448 6.92804 9.1439L16 18.2159L25.072 9.14926C25.7414 8.47984 26.8285 8.47984 27.4979 9.14926C28.1674 9.81868 28.1674 10.9058 27.4979 11.5752L17.2157 21.8575L17.2103 21.8522Z"
                    fill="white"
                />
            </svg>
            <svg
                onClick={slideRight}
                className="slider-arrow-right"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Vector"
                    d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81332 4.50206 9.1439C5.17148 8.47448 6.25862 8.47448 6.92804 9.1439L16 18.2159L25.072 9.14926C25.7414 8.47984 26.8285 8.47984 27.4979 9.14926C28.1674 9.81868 28.1674 10.9058 27.4979 11.5752L17.2157 21.8575L17.2103 21.8522Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default Slider;
