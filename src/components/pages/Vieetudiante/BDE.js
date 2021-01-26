import React from "react";

import bde from "../../../media/vieetudiante/bde.jpg";

const BDE = () => {
  return (
    <div className="divBDE">
      <div className="textBDE">
        <h2>Notre BDE</h2>
        <p>
          Le Bureau des Étudiants est là pour créer une cohésion entre les
          étudiants.<br /> Il organise des soirées, des animations, participe à la vente de Sweat-shirt...
        </p>
        <div className="imgBDE">
          <img src={bde} alt="logo BDE" className="logoBDE" />
        </div>
        <div className="reseauBDE">
          <span>Leurs réseaux sociaux</span>
          <ul>
          <li id="fbBDE">
          <a
            href="https://www.facebook.com/BdeRTdeRoanne"
            target="_blank"
            rel="noreferrer"
            className="fbBDE"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li id="instaBDE">
          <a
            href="https://www.instagram.com/bde_rt_roanne/"
            target="_blank"
            rel="noreferrer"
            className="instaBDE"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BDE;
