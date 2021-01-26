import React from "react";

import bde from "../../../media/vieetudiante/maisoncampus.png";

const Maisoncampus = () => {
  return (
    <div className="divMaisonCamp">
      <div className="textMaisonCamp">
        <h2>La Maison du Campus</h2>
        <p>
          La maison du campus est là pour aider les étudiants en leur offrant
          différents services sur et en dehors du campus.
          <br />
          Elle propose notamment un service{" "}
          <a href="https://mdc-roanne.univ-st-etienne.fr/fr/vie-etudiante/le-logement.html">
            d’Aide au Logement
          </a>
          , de santé (
          <a href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-3/sous-menu-3-1.html">
            Médecine Préventive Universitaire
          </a>
          ), de sport (
          <a href="https://mdc-roanne.univ-st-etienne.fr/fr/sports/l-iut-de-saint-etienne.html">
            SUAPS
          </a>
          ) et des{" "}
          <a href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-2.html">
            Opérations Culturelles
          </a>
          .
        </p>
        <div className="imgMaisonCamp">
          <img
            src={bde}
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
  );
};

export default Maisoncampus;
