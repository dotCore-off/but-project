import React from "react";
import Navigation from '../components/others/Navigation';
import Footer from "../components/others/Footer";
import Diagoursuiteetude from "../components/pages/Poursuitesetudes/Diagoursuiteetude";
import Apreslebut from "../components/pages/Poursuitesetudes/Apreslebut";


const Poursuiteetudes = () => {
  return (
    <div className="poursuiteEtudes">
      <Navigation />
      <div className="poursuiteEtudesContent">
        <h1>Poursuite d'études après un BUT Réseaux & Télécommunications</h1>
        <div className="Content">
          <Diagoursuiteetude />
          <Apreslebut />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Poursuiteetudes;
