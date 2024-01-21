import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RentDetails from "../layouts/detailsRent/RentDetails";

// Page Rent
// Récupération des données des locations depuis le fichier rentsDB.json
// Récupération des données de la location demandée en paramètre
// Redirection sur "/notFound" si le paramètre est incorrect
// Affichage du composant RentDetails avec l'objet de la location demandée

const Rent = () => {
    const [rent, setRent] = useState({});
    const { paramsRentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("../src/assets/rentsDB.json")
            .then((res) => res.json())
            .then((resJson) => {
                let found = false;
                resJson.map((rentfound, index) => {
                    if (rentfound.id === paramsRentId) {
                        setRent(rentfound);
                        found = true;
                    }
                    if (index === resJson.length - 1 & !found) {
                        navigate("/notFound");
                    }
                });
            });
    }, [paramsRentId, navigate]);

    return (
        <div className="rent">
            {Object.keys(rent).length > 0 && <RentDetails rent={rent} />}
        </div>
    );
};

export default Rent;
