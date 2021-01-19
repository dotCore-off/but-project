import React from "react";
import lan from "../media/programme/BUT1/lan.png";
import telephonie from "../media/programme/BUT1/telephonie.png";
import web from "../media/programme/BUT1/web.png";

const BUT3 = () => {
  return (
    <div className="divBUT3">
      <h3>Le déroulement de la troisième année</h3>
      <p>
        La troisième année est la dernière année du BUT. Elle a pour but
        d’approfondir l’ensemble des connaissances acquises tout en mettant
        l’accent sur la sécurité.
      </p>
      <span>Partie Réseaux :</span>
      <p>
        Dans la partie réseaux, vous allez apprendre ce qu'est un réseau,
        comment ça fonctionne et comment configurer les différents appareil qui
        composent un réseau local. <br />
        Par exemple vous allez apprendre ce qu'est un serveur DNS, DHCP, comment
        les pc peuvent communiquer entre eux, ...
      </p>
      <div className="imgBUT3">
        <img src={lan} alt="Réseau Local de base" className="lan"></img>
      </div>
      <span>Partie téléphonie/signal :</span>
      <p>
        Dans cette partie, vous allez apprendre à mesurer et analyser des
        signaux. Vous allez donc voir comment ce transmet une information à
        travers un signal. <br />
        Vous allez ensuite voir les différent support de transmission (cuivre,
        fibre optique) et configurer des téléphones.
      </p>
      <div className="imgBUT3">
        <img
          src={telephonie}
          alt="Configuration de téléphonie  Alcatel"
          className="telephonie"
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
      <div className="imgBUT3">
        <img
          src={web}
          alt="Creation du site Web du BUT"
          className="prograWeb"
        ></img>
      </div>
    </div>
  );
};

export default BUT3;
