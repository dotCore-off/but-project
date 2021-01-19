import React from "react";
import lan from "../media/programme/BUT1/lan.png";
import telephonie from "../media/programme/BUT1/telephonie.png";
import web from "../media/programme/BUT1/web.png";

const BUT1 = () => {
  return (
    <div className="divBUT1">
      <div className="introBUT1">
        <h3>Le déroulement de la première année</h3>
        <br></br>
        <h5>
          La première année est une introduction au monde des réseaux et
          des télécommunications.<br></br> Elle a pour but de vous introduire dans cet univers
          en vous apprenant les bases.
        </h5>
      </div>
      <br></br><br></br>   
      <div className="resBUT1">
        <h3>Le réseau</h3>
        <p>
          Dans la partie réseau, vous allez apprendre ce qu'est concrètement un réseau,
          assimiler son fonctionnement et configurer les différents équipements dont
          il est composé. <br/>
          Par exemple vous allez voir ce qu'est un serveur DNS, un serveur DHCP, la façon dont
          les PC communiquent entre eux et bien d'autres choses encore !
        </p>
        <div className="imgBUT1">
          <img src={lan} alt="Réseau Local de base" className="lan"></img>
        </div>
      </div>
      <span>Partie téléphonie/signal :</span>
      <p>
        Dans cette partie, vous allez apprendre à mesurer et analyser des
        signaux. Vous allez donc voir comment ce transmet une information à
        travers un signal. <br />
        Vous allez ensuite voir les différent support de transmission (cuivre,
        fibre optique) et configurer des téléphones.
      </p>
      <div className="imgBUT1">
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
      <div className="imgBUT1">
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
