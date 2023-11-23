//import React from 'react';
import PropTypes from "prop-types";
import Slider from "../../common/Slider";
import { useEffect, useState } from "react";
const RentDetailsbis = ({ rent }) => {
    const nbrStars = 5;
    const [rating, setRating] = useState(0);
    // const [Name, setName] = useState([]);

    //console.log(rent);
    RentDetailsbis.propTypes = {
        rent: PropTypes.object,
    };

    useEffect(() => {
        setRating(rent.rating);
        // rent.host.name.split(" ").forEach(element => {
        //     setName((curr) => ([...curr, element]))
        // })
    }, [rent]);

    //console.log(Name);

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

                        </div>
                        <img
                            src={rent.host.picture}
                            alt={"host picture" + rent.host.name}
                            className="hostPicture"
                        />

                    </div>

                    <div className="rating">
                        {[...Array(nbrStars)].map((star, index) => {
                            index += 1;
                            if (index <= rating) {
                                return (
                                    <img src="./imgs/star.svg" alt="star" key={index}>
                                    </img>
                                );
                            } else {
                                return (
                                    <img src="./imgs/starGrey.svg" alt="starGrey" key={index}>
                                    </img>
                                );
                            }
                        })}
                    </div>

                </div>
            </div>
        </div>
    );

};

export default RentDetailsbis;
