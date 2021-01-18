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
          <li>Frédéreric Bonardo</li>
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
    </div>
  );
};

export default Mentions;
