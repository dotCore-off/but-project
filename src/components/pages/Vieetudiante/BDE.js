import React from "react";

import bde from "../../../media/bde/bde.jpg";

const BDE = () => {
  return (
    <div className="divBDE">
      <div className="textBDE">
        <h2>Notre BDE</h2>
        <p>
          Le Bureau des Etudiants est là pour créer une cohésion entres les
          étudiants.<br /> Il organise des soirées, des animations, participe à la vente de Sweat-shirt...
        </p>
        <div className="imgBDE">
          <img src={bde} alt="logo BDE" className="logoBDE" />
        </div>
        <div className="reseauBDE">
          <span>Leur réseaux sociaux</span>
        </div>
      </div>
    </div>
  );
};

export default BDE;
