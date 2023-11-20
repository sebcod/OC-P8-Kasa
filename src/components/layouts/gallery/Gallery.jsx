import CardRent from "../../common/CardRent";
import PropTypes from "prop-types";

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
