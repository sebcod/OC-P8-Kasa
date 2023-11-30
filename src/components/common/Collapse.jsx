import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import arrowCollapse from "../../assets/imgs/arrowCollapse.svg";

// Collapse
// Récupération en props du titre et du contenu.
// Récupération de la hauteur du contenu.
// Affichage du titre et du contenu.
// Gestion de l'animation au clique sur la flèche.

const Collapse = ({ title, contents }) => {
    const [isActive, setIsActive] = useState(false);
    const [heightContent, setHeightContent] = useState(0);
    const refHeightContent = useRef(null);

    Collapse.propTypes = {
        title: PropTypes.string,
        contents: PropTypes.array
    };

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setHeightContent(refHeightContent.current.offsetHeight);
    }, []);

    return (
        <div className="collapseContainer">
            <article className="collapse">
                <div
                    className="head"
                    style={{ marginBottom: isActive ? heightContent - 5 + "px" : "0px" }}
                >
                    <h2>{title}</h2>
                    <img
                        src={arrowCollapse}
                        alt="arrow collapse"
                        className={isActive ? "arrowRotate" : "arrow"}
                        onClick={toggleActive}
                    />
                </div>

                <section className="content" ref={refHeightContent}>
                    {contents.map((content, index) => (
                        <ul key={index}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </section>
            </article>
        </div>
    );
};

export default Collapse;
