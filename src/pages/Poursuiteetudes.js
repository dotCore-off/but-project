import React from "react";
import Navigation from '../components/others/Navigation';
import Footer from "../components/others/Footer";
import Apreslebut from "../components/pages/Poursuitesetudes/Apreslebut";


const Poursuiteetudes = () => {
  return (
    <div className="poursuiteEtudes">
      <Navigation />
      <div className="poursuiteEtudesContent">
        <div className="Content">
          <Apreslebut />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Poursuiteetudes;
