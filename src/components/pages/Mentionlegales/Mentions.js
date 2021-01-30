import React from "react";

const Mentions = () => {
  return (
    <div className="divMentions">
      <p>
        {" "}
        Site Web réalisé dans le cadre du projet tuteuré de deuxième année
        (2020-2021).
      </p>
      <div className="enseignantRef">
        <span>Enseignant référent :</span>
        <ul>
          <li>
            <a
              href="mailto:frederic.bonnardot@univ-st-etienne.fr"
              rel="noreferrer"
            >
              BONNARDOT Frédéreric
            </a>
          </li>
        </ul>
      </div>
      <div className="elevesProj">
        <span>Équipe du projet :</span>
        <ul>
          <li>COPIN François-Léonard&emsp;[Chef de projet]</li>
          <li>RODET Nathan</li>
          <li>BADEL Alexis</li>
          <li>LARGERON Tom</li>
        </ul>
      </div>

      <div className="creditPhoto">
        <span>Crédit Photographique :x</span>
        <ul>
          <li>Université Jean-Monnet - Saint-Étienne</li>
          <li>
            <a
              href="https://icones8.fr/illustrations/style--pixeltrue"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Pixeltrue - icones8.fr
            </a>
          </li>
          <li>CARJOT - Eric</li>
          <li>THIESSE - Didier</li>
          <li>
            <a
              href="https://pixabay.com/fr/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Pixabay.com
            </a>
          </li>
          <li>
            <a
              href="https://www.letemps.ch/societe/aperovideo-fete-distance-jeux-ligne-internet-sauve"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              ENTZMANN - Cyril
            </a>
          </li>
          <li>aggloroanne.fr</li>
          <li>vallorgesas.fr</li>
        </ul>
      </div>

      <div className="Contacts">
        <span>Nous contacter :</span>
        <ul className="Adresse">
          <li>IUT de Roanne</li>
          <li>20 Avenue de Paris</li>
          <li>42300 Roanne</li>
        </ul>
        <ul className="Telephones">
          <li>Téléphone : 04 77 44 89 15</li>
          <li>
            {" "}
            <a
              href="mailto:iut-roanne-dutrt@univ-st-etienne.fr"
              rel="noreferrer"
            >
              iut-roanne-dutrt@univ-st-etienne.fr
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mentions;
