
import { useEffect, useState } from 'react'
import Banner from "../common/Banner";
import Gallery from "../layouts/gallery/Gallery";
import rentsJson from '../../assets/rentsDB.json';

const Home = () => {
  const [rents, setRents] = useState([]);

  useEffect(() => {
    setRents(rentsJson);

  }, [rents]);

  return (
    <div className="home">
      <Banner fromPage={"home"} />
      <Gallery rents={rents} />
    </div>
  );

};

export default Home;
