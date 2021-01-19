import React from "react";
import infra from "../media/programme/BUT3/infra.png";
import gsm from "../media/programme/BUT3/gsm.png";
import github from "../media/programme/BUT3/github.PNG";

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
        Dans la partie réseau, vous devrez être en mesure de concevoir un réseau
        d’entreprise tout en assurant la haute disponibilité de ce réseau.
        <br />
        Vous devrez pouvoir créer une maquette et défendre votre projet.
      </p>
      <div className="imgBUT3">
        <img
          src={infra}
          alt="Partie d'un schéma d'une infrastructure réseau"
          className="infra"
        ></img>
      </div>
      <span>Partie téléphonie/signal :</span>
      <p>
        Dans cette partie, vous allez apprendre à déployer un réseau d’accès
        sans-fil pour les entreprises et à déployer un réseau d’accès fixes et
        mobiles pour les opérateurs (mise en place d’antennes par exemple).
      </p>
      <div className="imgBUT3">
        <img
          src={gsm}
          alt="Schéma d'une infrastructure GSM"
          className="gsm"
        ></img>
      </div>
      <span>Partie Programmation :</span>
      <p>
        Dans cette partie, vous allez apprendre à mettre en place un
        environnement de travail collaboratif et à élaborer le cahier des
        charges d'une application informatique.
      </p>
      <div className="imgBUT3">
        <img
          src={github}
          alt="Le github du projet tuteuré BUT"
          className="github"
        ></img>
      </div>
    </div>
  );
};

export default BUT3;
