import PropTypes from "prop-types";
import Slider from "../../common/Slider";
import svgStar from "../../../assets/imgs/star.svg";
import svgStarGrey from "../../../assets/imgs/starGrey.svg";
import Collapse from "../../common/Collapse";

// Composant RentDetails
// Récupération en props de l'objet de la location à afficher
// Appel du composant Slider
// Affichage du titre, de l'adresse, des tags.
// Affichage de la photo, du nom et de la note de l'hôte.
// Appel de deux collapses, description et équipements.

const RentDetails = ({ rent }) => {
    // Nombres d'étoiles max.
    const nbrStars = 5;

    RentDetails.propTypes = {
        rent: PropTypes.object,
    };

    return (
        <div className="rentDetails">

            <Slider pictures={rent.pictures} />

            <div className="rentDetails_contents">
                <div className="rentDetails_contents_left">
                    <h2 className="rentTitle">{rent.title}</h2>
                    <h3 className="rentLocation">{rent.location}</h3>
                    <ul className="tags">
                        {rent.tags.map((tag, index) => (
                            <li key={index} className="tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rentDetails_contents_right">
                    <div className="host">
                        <div className="hostName">
                            {rent.host.name.split(" ").map((element, index) => {
                                return (
                                    <p key={index}>{element}</p>
                                );
                            })}
                        </div>
                        <img
                            src={rent.host.picture}
                            alt={"host picture" + rent.host.name}
                            className="hostPicture"
                        />
                    </div>

                    <div className="rating">
                        {[...Array(nbrStars)].map((star, index) => {
                            if (index <= rent.rating - 1) {
                                return (
                                    <img src={svgStar} alt="star" key={index}>
                                    </img>
                                );
                            } else {
                                return (
                                    <img src={svgStarGrey} alt="starGrey" key={index}>
                                    </img>
                                );
                            }
                        })}
                    </div>

                </div>

            </div>

            <div className="rentDetailsCollapses">
                <Collapse
                    key={"description"}
                    title={"description"}
                    contents={[
                        rent.description
                    ]}
                />

                <Collapse
                    key={"équipements"}
                    title={"équipements"}
                    contents={
                        rent.equipments
                    }
                />
            </div>

        </div>
    );
};

export default RentDetails;