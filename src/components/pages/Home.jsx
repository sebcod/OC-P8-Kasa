
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Banner from "../common/Banner";
import Gallery from "../layouts/gallery/Gallery";
import rentsJson from '../../assets/rentsDB.json';
import RentDetails from "../layouts/detailsRent/RentDetails";

const Home = () => {

  const { paramsRentId } = useParams();
  const [rents, setRents] = useState([]);
  const [rent, setRent] = useState({});

  useEffect(() => {
    setRents(rentsJson);
    setRent({});
    rents.map((rent) => {
      rent.id === paramsRentId && setRent(rent);
    });
  }, [rents, paramsRentId]);

  if (Object.entries(rent).length === 0) {
    return (
      <div className="home">
        <Banner fromPage={"home"} />
        <Gallery rents={rents} />
      </div>
    );
  }

  return (
    <div className="home">
      <RentDetails rent={rent} />
    </div>
  );
};

export default Home;
