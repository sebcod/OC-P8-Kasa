import CardRent from "../../common/CardRent";
import PropTypes from "prop-types";

// Création de la gallerie
// récupération des locations en props
// appel du composant CardRent pour chaque elements de rents

const Gallery = ({ rents }) => {
    Gallery.propTypes = {
        rents: PropTypes.array,
    };

    return (
        <ul className="gallery">
            {rents.map((rent) => (
                <CardRent key={rent.id} rent={rent} />
            ))}
        </ul>
    );
};

export default Gallery;
