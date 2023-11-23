import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import rentsJson from '../../assets/rentsDB.json';
import RentDetails from "../layouts/detailsRent/RentDetails";

const Rent = () => {
    const [rent, setRent] = useState({});
    const { paramsRentId } = useParams();
    const [rents, setRents] = useState([]);

    useEffect(() => {
        setRents(rentsJson);
        setRent({});

        rents.map((rent) => {
            if (rent.id === paramsRentId) {
                setRent(rent);
            }
        });

    }, [rents, paramsRentId, rent]);

    return (
        <div className="rent">
            {rent != undefined ? <RentDetails rent={rent} /> : null}
        </div>
    );
};

export default Rent;