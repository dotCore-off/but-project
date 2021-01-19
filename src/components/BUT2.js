import React from "react";
import ldap from "../media/programme/BUT2/ldap.png";
import vpn from "../media/programme/BUT2/vpn.svg";
import web from "../media/programme/BUT1/web.png";

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
        opérateur et à crééer des accès distants (par exemple à créer un VPN). <br />
      </p>
      <div className="imgBUT2">
        <img
          src={vpn}
          alt="tunnel vpn"
          className="vpn"
        ></img>
      </div>
      <span>Partie Programmation :</span>
      <p>
        Dans cette partie, vous allez apprendre les bases de la programmation
        dans plusieurs langages. Dans la partie Linux, vous allez apprendre à
        utiliser le système d’exploitation Ubuntu et notamment les commandes
        principales du terminal.
        <br />
        Pour la partie Programmation Web, vous allez apprendre à concevoir votre
        premier site web en HTML CSS puis à travailler avec les bases de données
        (SQL).
        <br /> Vous apprendrez aussi à créer des programmes en C dans un premier
        puis en C++.
      </p>
      <div className="imgBUT2">
        <img
          src={web}
          alt="Creation du site Web du BUT"
          className="prograWeb"
        ></img>
      </div>
    </div>
  );
};

export default BUT1;
