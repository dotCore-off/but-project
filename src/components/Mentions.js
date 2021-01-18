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
            <a href="mailto:frederic.bonnardot@univ-st-etienne.fr">
              Frédéreric Bonnardot
            </a>
          </li>
        </ul>
      </div>
      <div className="elevesProj">
        <span>Équipe du projet :</span>
        <ul>
          <li>COPIN François-Léonard</li>
          <li>RODET Nathan</li>
          <li>BADEL Alexis</li>
          <li>LARGERON Tom</li>
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
