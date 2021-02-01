import React from "react";

import MPU from "../../../media/vieetudiante/MPU.jpg";
import SUAPS from "../../../media/vieetudiante/SUAPS.jpg";
import Culture from "../../../media/vieetudiante/Culture.jpg"

const MC = () => {
  return (
    <div className="divMC">
      <div className="MPU">
        <div className="imgMPU">
          <img src={MPU} alt="MPU" />
        </div>
        <div className="textMC">
          <h2>La médecine préventive Universitaire</h2>
          <p>
            La médecine préventive a pour but d’aider les étudiants. Elle les
            informe et les oriente dans les différents domaines de la santé,
            propose de consultation de vaccination, de délivrer des certificats
            médicaux ou encore de proposer un accompagnement social aux
            étudiants en situation de handicap. <br />
            <em>Les consultations se font sur prise de rendez-vous.</em>
          </p>
          <div className="liensMC">
            <a
              className="link"
              href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-3/sous-menu-3-1.html"
            >
              Pour en savoir plus
            </a>
          </div>
        </div>
      </div>

      <div className="SUAPS">
        
        <div className="textMC">
          <h2>Le SUAPS</h2>
          <p>
            Le SUAPS (Service Universitaire des Activités Physiques et
            Sportives) a pour but de permettre aux étudiants de faire du sport.
            Il propose de nombreuses activités sportives (une cinquantaine
            environ) réparties sur toute la semaine dans différentes salles de
            sport. Il propose trois formations :{" "}
            <em title="Ne rapporte pas de point sur la moyenne, mais qui permet d’aller faire du sport quand on le désire">
              La formation Personnelle
            </em>
            ,{" "}
            <em title="Apporte de 0,10 à 0,25 points si vous êtes présent au minimum à 7 séances">
              la formation Bonifiante{" "}
            </em>{" "}
            et{" "}
            <em title="apporte de 0,25 à 0,40 point seulement si vous êtes présents à 10 séances [y compris la séance d’évaluation]">
              la Formation Qualifiante.
            </em>
          </p>
          <div className="liensMC">
            <a
              className="link"
              href="https://www.univ-st-etienne.fr/fr/suaps/suaps-roanne.html"
            >
              Pour en savoir plus
            </a>
          </div>
        </div>
        <div className="imgSUAPS">
          <img src={SUAPS} alt="SUAPS" />
        </div>
      </div>
      <div className="Culture">
      <div className="imgCulture">
          <img src={Culture} alt="SUAPS" />
        </div>
        <div className="textMC">
          <h2>La Culture</h2>
          <p>
            La Maison du campus permet aussi aux étudiants d’accéder à la
            culture. En effet, elle met en œuvre différents partenariats pour
            permettre aux étudiants d’accéder à cette dernière à moindre coup.
            Elle met par exemple des{" "}
            <em title="La valeur totale du carnet est de 32€ avec un prix de vente du carnet est de 16€.">
              carnets culture
            </em>{" "}
            qui sont des coupons utilisables dans plus de 60 établissements
            culturels et qui vous permettent de faire des économies.
          </p>
          <div className="liensMC">
            <a
              className="link"
              href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-2.html"
            >
              Pour en savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MC;
