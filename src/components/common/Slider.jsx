import PropTypes from "prop-types";
import { useState } from "react";
import arrowLeft from "../../assets/imgs/arrowLeft.svg";
import arrowRight from "../../assets/imgs/arrowRight.svg";

// Slider d'images de la lacation.
// Récupération en props du tableau pictures.
// création d'un compteur de slides.
// déclaration de deux fonctions pour le changement d'image avec gestion du débordement de tableau.
// Affichage de l'image courante.
// affichage de sa position dans le tableau et des flèches si pictures > 1.

const Slider = ({ pictures }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    Slider.propTypes = {
        pictures: PropTypes.array,
    };

    const slideLeft = () => {
        setCurrentSlide(
            currentSlide - 1 < 0 ? pictures.length - 1 : currentSlide - 1
        );
    };
    const slideRight = () => {
        setCurrentSlide(
            currentSlide + 1 > pictures.length - 1 ? 0 : currentSlide + 1
        );
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
                <img
                    src={arrowLeft}
                    alt="slider arrow left"
                    className="slider-arrow-left"
                    onClick={slideLeft}
                />
            )}
            {pictures.length > 1 && (
                <img
                    src={arrowRight}
                    alt="slider arrow right"
                    className="slider-arrow-right"
                    onClick={slideRight}
                />
            )}
        </div>
    );
};

export default Slider;
