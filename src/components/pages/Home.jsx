
import { useEffect, useState } from 'react'
import Banner from "../common/Banner";
import Gallery from "../layouts/gallery/Gallery";

// Page Home
// Récupération des location depuis rentsDB.json
// Appel des composants Banner et Gallery


const Home = () => {
  const [rents, setRents] = useState([]);

  useEffect(() => {
    fetch("../src/assets/rentsDB.json")
      .then((res) => res.json())
      .then((resJson) => {
        setRents(resJson);
      });
  }, []);

  return (
    <div className="home">
      <Banner fromPage={"home"} />
      <Gallery rents={rents} />
    </div>
  );

};

export default Home;
