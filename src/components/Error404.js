import React from "react";
import { NavLink } from "react-router-dom";

import error404 from "../media/error/error404.svg";

const Error404 = () => {
  return (
    <div className="error404">
      <div className="divErrorLogo">
        <img src={error404} alt="Error 404 Logo" className="errorLogo" />
        {/*Image de Pixeltrue provenant du site https://icones8.fr/illustrations/illustration/pixeltrue-error-1 */}
      </div>
      <h2>Pas de panique, vous n’avez rien cassé !</h2>
      <p className="textError">
        La page que vous essayez de consulter est seulement inexistante,
        retournez à la page d’accueil pour retrouver votre chemin.
      </p>
      <NavLink exact to="/" activeClassName="navActive">
        <div className="homeButton">
          <spans className="buttonError">
            Accueil <i class="fas fa-home"></i>
          </spans>
        </div>
      </NavLink>
    </div>
  );
};

export default Error404;
