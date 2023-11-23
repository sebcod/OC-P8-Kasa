import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Collapse = ({ title, contents }) => {

    const [isActive, setIsActive] = useState(false);
    const [heightContent, setHeightContent] = useState(0);
    const refHeightContent = useRef(null);

    Collapse.propTypes = {
        title: PropTypes.string,
        contents: PropTypes.array,
        fromPage: PropTypes.string,
    }

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        setHeightContent(refHeightContent.current.offsetHeight);
    }, []);

    return (
        <div className="collapseContainer">
            <article className="collapse">
                <div
                    className="head"
                    style={{ marginBottom: isActive ? (heightContent - 5) + "px" : "0px" }}
                >
                    <h2>{title}</h2>
                    <svg
                        onClick={toggleActive}
                        className={isActive ? "arrowRotate" : "arrow"}
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white" />
                    </svg>
                </div>

                <section
                    className="content"
                    ref={refHeightContent}
                >
                    {contents?.map((content, index) => (
                        <ul key={index}><li>{content}</li></ul>
                    ))}
                </section>
            </article>
        </div>
    );
}

export default Collapse;