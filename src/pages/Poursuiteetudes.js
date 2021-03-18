import React from "react";
import Navigation from '../components/others/Navigation';
import Navigationtel from '../components/others/NavigationTel';
import Footer from "../components/others/Footer";
import Apreslebut from "../components/pages/Poursuitesetudes/Apreslebut";
import Popup from '../components/others/Popup';
import Parcourslong from "../components/pages/Poursuitesetudes/Parcourslong";
import Parcourscourt from "../components/pages/Poursuitesetudes/Parcourscourt";

const Poursuiteetudes = () => {
  return (
    <div className="poursuiteEtudes">
      <Navigation />
      <Navigationtel />
      <div className="poursuiteEtudesContent">
        <div className="Content">
          <Apreslebut />
          <Parcourslong />
          <Parcourscourt />
        </div>
        <Popup />
      </div>
      <Footer />
    </div>
  );
};

export default Poursuiteetudes;
