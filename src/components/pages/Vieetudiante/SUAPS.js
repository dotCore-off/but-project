import React from "react";

const SUAPS = () => {
  return (
    <div className="divSUAPS">
      <div className="fondSUAPS">
        <div className="textMC">
          <h2>Le SUAPS</h2>
          <p>
            Le SUAPS (Service Universitaire des Activités Physiques et
            Sportives) a pour but de permettre aux étudiants de faire du sport.
            Il propose de nombreuses activités sportives (une cinquantaine
            environ) réparties sur toute la semaine dans différentes salles de
            sport. Il propose trois formations :{" "}
            <em
              title="Ne rapporte pas de point sur la moyenne, mais qui permet d’aller faire du sport quand on le désire"
            >
              La formation Personnelle
            </em>
            ,{" "}
            <em
              title="Apporte de 0,10 à 0,25 points si vous êtes présent au minimum à 7 séances"
            >
              la formation Bonifiante{" "}
            </em>{" "}
            et{" "}
            <em
              title="apporte de 0,25 à 0,40 point seulement si vous êtes présents à 10 séances [y compris la séance d’évaluation]"
            >
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
      </div>
    </div>
  );
};

export default SUAPS;
