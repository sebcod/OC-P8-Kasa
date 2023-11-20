import Banner from "../common/Banner";
import Collapse from "../common/Collapse";

const About = () => {
    return (
        <div className="about">
            <Banner fromPage={"about"} />
            <div className="aboutCollapses">
                <Collapse
                    title={"Fiabilité"}
                    contents={[
                        "Les annonces postées sur Kasa garantissent une fiabilité totale. les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées pas nos équipes."
                    ]}
                />

                <Collapse
                    title={"Respect"}
                    contents={[
                        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    ]}
                />

                <Collapse
                    title={"Service"}
                    contents={[
                        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    ]}
                />

                <Collapse
                    title={"Sécurité"}
                    contents={[
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    ]}
                />
            </div>
        </div>
    );
};

export default About;
