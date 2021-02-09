import React from "react";

const NosAvantages = () => {
  return (
    <div className="BackgroundNosAvantages">
      <div className="NosAvantagesContent">
        <h1>NOS AVANTAGES</h1>
        <div className="avantagesFlex">
          <div className="case">
            <div className="icon">
              <h2>TRANSPORTS EN COMMUN</h2>
              <i
                class="fas fa-bus"
                title="De nombreux transport en commun sont disponibles, à savoir un arrêt de bus juste devant l'IUT et la gare à 10 minutes à pied"
              ></i>
            </div>
            <a href="https://www.bus-star.com/fr/plans/89">
              Plus d'informations
            </a>
          </div>
          <div className="case">
            <div className="icon">
              <h2>PROXIMITÉ DES COMMERCES</h2>
              <i class="fas fa-store"></i>
            </div>
            <a href="/">Plus d'informations</a>
          </div>
          <div className="case">
            <div className="icon">
              <h2>PROXIMITÉ DES HABITATS</h2>
              <i class="fas fa-home"></i>
            </div>
            <a href="https://iut-roanne.univ-st-etienne.fr/fr/international/etudiants-etrangers/logement-et-vie-pratique.html">
              Plus d'informations
            </a>
          </div>
          <div className="case">
            <div className="icon">
              <h2>BIBLIOTHÈQUE UNIVERSITAIRE</h2>
              <i
                class="fas fa-school"
                title="La BU vous permet de réviser et de vous détendre facilement, entre 12h et 14h par exemple."
              ></i>
            </div>
            <a href="https://scd.univ-st-etienne.fr/fr/tout-savoir-sur-mes-bu/bu-roanne.html">
              Plus d'informations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosAvantages;
