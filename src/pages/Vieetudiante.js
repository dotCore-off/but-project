import React from "react";
import Navigation from "../components/others/Navigation";
import Footer from "../components/others/Footer";
import BDE from "../components/pages/Vieetudiante/BDE.js";
import Maisoncampus from "../components/pages/Vieetudiante/Maisoncampus";
import Discord from "../components/pages/Vieetudiante/Discord";
import MPU from "../components/pages/Vieetudiante/MPU";
import SUAPS from "../components/pages/Vieetudiante/SUAPS";
import Culture from "../components/pages/Vieetudiante/Culture";

const Vieetudiante = () => {
  return (
    <div className="vieEtudiante">
      <Navigation />
      <div className="etuContent">
        <div className="composantVieEtu">
          <BDE />
          <Maisoncampus />
          <Discord />
        </div>
        <h3 id="etuTitle">La maison du campus en détails !</h3>
        <div className="composantVieEtu">
          <MPU />
          <SUAPS />
          <Culture />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Vieetudiante;
