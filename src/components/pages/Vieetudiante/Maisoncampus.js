import React from "react";

import maison from "../../../media/vieetudiante/maisoncampus.png";

const Maisoncampus = () => {
  return (
    <div className="divMaisonCamp">
      <div className="fondCampus">
        <div className="textMaisonCamp">
          <h2>La Maison du Campus</h2>
          <p>
            La maison du campus est là pour aider les étudiants en leur offrant
            différents services sur et en dehors du campus (médecine,
            restauration, sport, Culture…).
          </p>
          <div className="imgMaisonCamp">
            <img
              src={maison}
              alt="logo de la maison du campus"
              className="logoMaisonCamp"
            />
          </div>
          <div className="reseauMaisonCamp">
            <span>Leurs réseaux sociaux</span>
            <ul>
              <li id="fbMaisonCamp">
                <a
                  href="https://www.facebook.com/Maison-du-Campus-Roannais-577334892332622"
                  target="_blank"
                  rel="noreferrer"
                  className="fbMaisonCamp"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li id="instaMaisonCamp">
                <a
                  href="https://www.instagram.com/maison_du_campus_roannais/"
                  target="_blank"
                  rel="noreferrer"
                  className="instaMaisonCamp"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li id="siteMaisonCamp">
                <a
                  href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-2-1.html"
                  target="_blank"
                  rel="noreferrer"
                  className="siteMaisonCamp"
                >
                  <i class="fas fa-globe-europe"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maisoncampus;
