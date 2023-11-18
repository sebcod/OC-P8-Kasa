import { useState, useEffect } from "react";
import CardRent from "./CardRent";
import rentsJson from '../../../assets/rentsDB.json';

const Gallery = () => {
    const [rents, setRents] = useState([]);

    useEffect(() => {
        setRents(rentsJson);
    }, []);

    return (
        <ul className="gallery">
            {rents.map((rent) => (
                <CardRent key={rent.id} rent={rent} />
            )
            )}
        </ul>
    );
};

export default Gallery;