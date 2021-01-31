import React from "react";

const Culture = () => {
  return (
    <div className="divCulture">
      <div className="fondCulture">
        <div className="textMC">
          <h2>La Culture</h2>
          <p>
            La Maison du campus permet aussi aux étudiants d’accéder à la
            culture. En effet, elle met en œuvre différents partenariats pour
            permettre aux étudiants d’accéder à cette dernière à moindre coup.
            Elle met par exemple des{" "}
            <em title="La valeur totale du carnet est de 32€ avec un prix de vente du carnet est de 16€.">
              carnets culture
            </em>{" "}
            qui sont des coupons utilisables dans plus de 60 établissements
            culturels et qui vous permettent de faire des économies.
          </p>
          <div className="liensMC">
            <a
              className="link"
              href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-2.html"
            >
              Pour en savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
