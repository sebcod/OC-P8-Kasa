import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RentDetails from "../layouts/detailsRent/RentDetails";

// Récupération des données des locations
// Récupération des données de la location demandée en paramètre
// Redirection sur "/notFound" si le paramètre est incorrect
// Affichage du composant RentDetails avec l'ID demandé

const Rent = () => {
    const [rent, setRent] = useState({});
    const { paramsRentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("../src/assets/rentsDB.json")
            .then((res) => res.json())
            .then((resJson) => {
                let notFound = true;
                resJson.map((rentfound, index) => {
                    if (index < resJson.length - 1) {
                        if (rentfound.id === paramsRentId) {
                            setRent(rentfound);
                            notFound = false;
                        }
                    } else if (notFound) {
                        navigate("/notFound");
                    }
                });
            });
    }, [paramsRentId, navigate]);

    return (
        <div className="rent">
            <RentDetails rent={rent} />
        </div>
    );
};

export default Rent;
