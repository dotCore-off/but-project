import React from "react";
import ldap from "../../../media/programme/BUT2/ldap.png";
import vpn from "../../../media/programme/BUT2/vpn.svg";
import bdd from "../../../media/programme/BUT2/bdd.png";

const BUT2 = () => {
  return (
    <div className="divBUT2">
      <div className="introBUT2">
        <h3>Le déroulement de la deuxième année</h3>
        <br></br>
        <h4>
          La deuxième année est un approfondissement de la première année dans le
          monde des réseaux et télécommunications.
        </h4>
      </div>
      <br/><br/>
      <div className="resBUT2">
        <h3>Le réseau</h3>
        <br/>
        <h4>
          Dans la partie réseau, vous allez voir le fonctionnement des
          réseaux opérateurs, c'est à dire la manière dont un FAI vous donne 
          l'accès à Internet.
          <br />
          Vous allez par exemple apprendre à configurer des appareils opérateurs ou encore
          à déployer des services réseaux avancés (Windows serveur 2016, ...).
        </h4>
        <br/>
        <div className="imgBUT2">
          <img
            src={ldap}
            alt="Configuration d'un annuaire LDAP"
            className="ldap"
          ></img>        
        </div>
      </div>
      <div className="telBUT2">
        <br /><br />
        <h3>La télécommunication</h3>
        <br />
        <h4>
          Au niveau de la télécommunication, vous apprendrez à créer et configurer des réseaux
          opérateurs ainsi que la mise en place des accès distants (création d'un VPN, ...).<br />
        </h4>
        <br />
        <div className="imgBUT2">
          <img src={vpn} alt="tunnel vpn" className="vpn"></img>
        </div>
      </div>
      <div className="progBUT2">
        <br /><br />
        <h3>La programmation</h3>
        <br />
        <h4>
          Dans cette partie, vous allez appronfondir la création de scripts vue en
          première année (mise en place de tâches, scripts de sauvegarde / restauration).<br />
          Enfin, vous aurez l'occasion de peaufiner vos connaissances dans la conception et la
          gestion de base de données.        
        </h4>
        <br />
        <div className="imgBUT2">
          <img
            src={bdd}
            alt="Requête SQL dans une base de donnée"
            className="bdd"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BUT2;
