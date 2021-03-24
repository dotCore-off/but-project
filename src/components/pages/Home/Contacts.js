import React from "react";

const Contacts = () => {
  return (
    <div className="ContactsBackground">
      <div className="ContactsContent">
        <div className="MapSize">
          <div className="Map">
            <iframe title="map" src="https://www.google.com/maps/d/u/0/embed?mid=1rn1p3fQifjHESv2s4bhmSwbiohDkuQai"></iframe>
          </div>
        </div>
        <div className="ContactsText">
          <h2>Où nous trouver ?</h2>
          <div className="coordonates">
            <h3>Coordonnées :</h3>
            <ul className="Adresse">
              <li>IUT de Roanne</li>
              <li>20 Avenue de Paris</li>
              <li>42300 Roanne</li>
            </ul>
            <ul className="Telephones">
              <li>Téléphone : 04 77 44 89 15</li>
              <li>
                {" "}
                <a href="mailto:iut-roanne-dutrt@univ-st-etienne.fr" rel="noreferrer">
                  iut-roanne-dutrt@univ-st-etienne.fr
                </a>
              </li>
            </ul>
          </div>
          <div className="plans">
          <h3>Plus d'informations :</h3>
            <ul>
              <li>
                <a
                  href="https://iut-roanne.univ-st-etienne.fr/_attachments/plan-d-acces-article/campus_pierre_mendes_france__roanne__plan_acces_1443604325884.pdf?download=true"
                  target="_blank" rel="noreferrer"
                >
                  Plan d'accès
            </a>
              </li>
              <li>
                <a
                  href="https://iut-roanne.univ-st-etienne.fr/_attachments/plan-d-acces-article/campus_pierre_mendes_france__roanne__plan_site_1443603911697.pdf?download=true"
                  target="_blank" rel="noreferrer"
                >
                  Plan du campus
            </a>
              </li>
              <li>
                <a href="https://app.imagina.io/location/111087" target="_blank" rel="noreferrer">
                  Imagina de l'IUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
