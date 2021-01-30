import React from "react";
import Navigation from "../components/others/Navigation";
import Footer from "../components/others/Footer";
import BDE from "../components/pages/Vieetudiante/BDE.js";
import Maisoncampus from "../components/pages/Vieetudiante/Maisoncampus";
import Discord from "../components/pages/Vieetudiante/Discord";

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
      <Footer />
    </div>
  </div>
  );
};

export default Vieetudiante;
