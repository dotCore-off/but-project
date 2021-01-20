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
        <h4>
          La première année est une introduction au monde des réseaux et
          des télécommunications.<br></br> Elle a pour but de vous introduire dans cet univers
          en vous apprenant les bases.
        </h4>
      </div>
      <br/><br/>
      <div className="resBUT1">
        <h3>Le réseau</h3>
        <br/>
        <h4>
          Dans la partie réseau, vous allez apprendre ce qu'est concrètement un réseau,
          assimiler son fonctionnement et configurer les différents équipements dont
          il est composé. <br/>
          Par exemple vous allez voir ce qu'est un serveur DNS, un serveur DHCP, la façon dont
          les PC communiquent entre eux et bien d'autres choses encore !
        </h4>
        <br/>
        <div className="imgBUT1">
          <img src={lan} alt="Réseau Local de base" className="lan"></img>
        </div>
      </div>
      <div className="telBUT1">
        <br /><br />
        <h3>La télécommunication</h3>
        <br />
        <h4>
          Dans cette partie, vous allez apprendre à mesurer et analyser des
          signaux. Vous allez donc voir comment se transmet une information au
          travers de ces derniers. <br />
          Par la suite, vous verrez les différents supports de transmission <i>(cuivre,
          fibre optique)</i> et vous assimilerez leurs avantages et inconvénients.<br />
          Enfin, vous passerez à la pratique en configurant un réseau téléphonique local
          à l'aide de matériel spécialisé.
        </h4>
        <br />
        <div className="imgBUT1">
          <img
            src={telephonie}
            alt="Configuration de téléphonie  Alcatel"
            className="telephonie"
          ></img>
        </div>
      </div>
      <div className="progBUT1">
        <br /><br />
        <h3>La programmation</h3>
        <br />
        <h4>
          Dans cette dernière partie, vous allez apprendre les bases de la programmation dans plusieurs langages.<br />
          En Linux, vous allez apprendre à utiliser le système d’exploitation Ubuntu et notamment les commandes principales du terminal.<br />
          Pour ce qui est de la programmation web, vous allez concevoir votre premier site web en HTML / CSS et vous travaillerez ensuite avec les bases de données <i>(SQL)</i>.<br />
          En parallèle de tout cela, vous apprendrez enfin à créer des programmes en C et en C++.
        </h4>
        <br />
        <div className="imgBUT1">
          <img
            src={web}
            alt="Creation du site Web du BUT"
            className="prograWeb"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BUT1;
