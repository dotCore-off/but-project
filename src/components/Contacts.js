import React from "react";

const Contacts = () => {
  return (
    <div className="Contacts">
      <h2>Où nous trouver</h2>

      <div className="Map">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rn1p3fQifjHESv2s4bhmSwbiohDkuQai"></iframe>
      </div>
      <div className="coordonates">
        <ul className="Adresse">
          <li>IUT de Roanne</li>
          <li>20 Avenue de Paris</li>
          <li>42300 Roanne</li>
        </ul>
        <ul className="Telephones">
          <li>Téléphone : 04 77 44 89 15</li>
          <li>
            {" "}
            <a href="mailto:iut-roanne-dutrt@univ-st-etienne.fr">
              iut-roanne-dutrt@univ-st-etienne.fr
            </a>
          </li>
        </ul>
      </div>
      <div className="plans">
        <ul>
          <li>
            <a
              href="https://iut-roanne.univ-st-etienne.fr/_attachments/plan-d-acces-article/campus_pierre_mendes_france__roanne__plan_acces_1443604325884.pdf?download=true"
              target="_blank"
            >
              Plan D'accès
            </a>
          </li>
          <li>
            <a
              href="https://iut-roanne.univ-st-etienne.fr/_attachments/plan-d-acces-article/campus_pierre_mendes_france__roanne__plan_site_1443603911697.pdf?download=true"
              target="_blank"
            >
              Plan du Campus
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
