import React from "react";
import { NavLink } from "react-router-dom";

import imgconstruct from "../../media/construction/construction.svg";

const Construction = () => {
  return (
    <div className="construction">
      <h2>Cette page est en cours de création !</h2>
      <div className="divConstructionLogo">
        <img
          src={imgconstruct}
          alt="Construction Logo"
          className="constructionLogo"
        />
        {/*Image de Pixeltrue provenant du site https://icones8.fr/illustrations/illustration/pixeltrue-error-1 */}
      </div>

      <p className="textBuild">
        La page que vous essayez de consulter n’est pour l’instant pas
        disponible. En effet, nous sommes encore en train de travailler sur ce
        site !
      </p>
      <NavLink exact to="/" activeClassName="navActive">
        <div className="homeButton">
          <spans className="buttonError">
            Acceuil <i class="fas fa-home"></i>
          </spans>
        </div>
      </NavLink>
    </div>
  );
};

export default Construction;
