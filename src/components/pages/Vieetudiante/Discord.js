import React from "react";

import discord from "../../../media/vieetudiante/logodiscord.png";

const Discord = () => {
  return (
    <div className="divDiscord">
      <div className="fondBde">
        <div className="textDiscord">
          <h2>Le discord</h2>
          <p>
            Ce discord permet aux RT1 de demander du soutien en plus des jeudis
            après-midi quand ils en ont besoin. Il permet de créer une cohésion
            entre les deux promos.
          </p>
          <div className="imgDiscord">
            <img
              src={discord}
              alt="logo du serveur discord"
              className="logoDiscord"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;
