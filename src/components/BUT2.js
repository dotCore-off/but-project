import React from "react";
import ldap from "../media/programme/BUT2/ldap.png";
import vpn from "../media/programme/BUT2/vpn.svg";
import bdd from "../media/programme/BUT2/bdd.png";

const BUT1 = () => {
  return (
    <div className="divBUT2">
      <h3>Le déroulement de la deuxième année</h3>
      <p>
        La deuxième année est un approfondissement de la première année sur le
        monde des réseaux et télécommunication.
      </p>
      <span>Partie Réseaux :</span>
      <p>
        Dans la partie réseaux, vous allez apprendre le fonctionnement des
        réseaux opérateur, comment votre fournisseur d'accès internet vous
        donnes accès à internet.
        <br />
        Vous allez par exemple apprendre à configurer des appareils opérateur, à
        déployer des service réseaux avancés (configuration de windows serveur
        2016).
      </p>
      <div className="imgBUT2">
        <img
          src={ldap}
          alt="Configuration d'un annuaire LDAP"
          className="ldap"
        ></img>
      </div>
      <span>Partie téléphonie/signal :</span>
      <p>
        Dans cette partie, vous allez apprendre à configurer les réseaux
        opérateur et à crééer des accès distants (par exemple à créer un VPN).{" "}
        <br />
      </p>
      <div className="imgBUT2">
        <img src={vpn} alt="tunnel vpn" className="vpn"></img>
      </div>
      <span>Partie Programmation :</span>
      <p>
        Dans cette partie, vous allez appronfondire la création de script vue en
        première année (script plus complexe).
        <br />
        Vous allez aussi appronfondire vos connaissance dans la conception et la
        gestion de base de donnée.
      </p>
      <div className="imgBUT2">
        <img
          src={bdd}
          alt="Requête SQL dans une base de donnée"
          className="bdd"
        ></img>
      </div>
    </div>
  );
};

export default BUT1;
