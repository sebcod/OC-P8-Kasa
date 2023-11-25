import PropTypes from "prop-types";
import Slider from "../../common/Slider";
import { useEffect, useState } from "react";
import svgStar from "../../../assets/imgs/star.svg";
import svgStarGrey from "../../../assets/imgs/starGrey.svg";
import Collapse from "../../common/Collapse";


const RentDetails = ({ rent }) => {
    const nbrStars = 5;
    const [rating, setRating] = useState(0);

    RentDetails.propTypes = {
        rent: PropTypes.object,
    };

    useEffect(() => {
        setRating(rent.rating);
    }, [rent]);

    return (
        <div className="rentDetails">

            <Slider pictures={rent.pictures} />

            <div className="rentDetails_contents">
                <div className="rentDetails_contents_left">
                    <h2 className="rentTitle">{rent.title}</h2>
                    <h3 className="rentLocation">{rent.location}</h3>
                    <ul className="tags">
                        {rent.tags?.map((tag, index) => (
                            <li key={index} className="tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rentDetails_contents_right">
                    <div className="host">
                        <div className="hostName">
                            {rent.host && rent.host.name.split(" ").map((element, index) => {
                                return (
                                    <p key={index}>{element}</p>
                                );
                            })}
                        </div>
                        {rent.host && <img
                            src={rent.host.picture}
                            alt={"host picture" + rent.host.name}
                            className="hostPicture"
                        />}
                    </div>

                    <div className="rating">
                        {[...Array(nbrStars)].map((star, index) => {
                            index += 1;
                            if (index <= rating) {
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
                {rent.host && <Collapse
                    key={"description"}
                    title={"description"}
                    contents={[
                        rent.description
                    ]}
                />}

                {rent.host && <Collapse
                    key={"équipements"}
                    title={"équipements"}
                    contents={
                        rent.equipments
                    }
                />}
            </div>

        </div>
    );
};

export default RentDetails;