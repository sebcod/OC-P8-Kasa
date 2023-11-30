import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

// CardRent
// Récupération de l'objet d'une location
// Création d'un lien vers "rent/:id"
// Affichage de l'image de couverture.
// Affiche du titre de la location.

const CardRent = ({ rent }) => {

    CardRent.propTypes = {
        rent: PropTypes.object,
    }

    return (

        <li className="cardRent">
            <NavLink to={"/rent/" + rent.id}>
                <img src={rent.cover} alt={rent.title} />
                <h2>{rent.title}</h2>
            </NavLink>
        </li>
    );
};

export default CardRent;