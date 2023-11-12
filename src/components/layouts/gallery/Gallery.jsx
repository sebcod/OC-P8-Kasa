import { useState, useEffect } from "react";
import CardRent from "./CardRent";

const Gallery = () => {
    const [rents, setRents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/rents").then((res) => res.json())
            .then((res_json) => setRents(res_json))
    }, []);

    if (!rents) return <div>Loading...</div>;

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