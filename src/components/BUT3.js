import React from "react";
import infra from "../media/programme/BUT3/infra.png";
import gsm from "../media/programme/BUT3/gsm.png";
import github from "../media/programme/BUT3/github.PNG";

const BUT3 = () => {
  return (
    <div className="divBUT3">
      <div className="introBUT3">
        <h3>Le déroulement de la troisième année</h3>
        <br></br>
        <h4>
          La troisième année est la dernière année du B.U.T.<br />Elle a pour but
          d’approfondir l’ensemble des connaissances acquises tout en mettant
          l’accent sur la sécurité.
        </h4>
      </div>
      <br/><br/>
      <div className="resBUT3">
        <h3>Le réseau</h3>
        <br/>
        <h4>
          Dans la partie réseau, vous devrez être en mesure de concevoir un réseau
          d’entreprise tout en assurant la haute disponibilité de ce dernier.<br />
          D'autre part, vous serez en mesure de créer une maquette et de défendre votre projet.
        </h4>
        <br/>
        <div className="imgBUT3">
          <img
            src={infra}
            alt="Partie d'un schéma d'une infrastructure réseau"
            className="infra"
          ></img>     
        </div>
      </div>
      <div className="telBUT3">
        <br /><br />
        <h3>La télécommunication</h3>
        <br />
        <h4>
          En télécommunication, vous allez apprendre à déployer un réseau d’accès
          sans-fil pour les entreprises<br /> et à déployer un réseau d’accès fixes et
          mobiles pour les opérateurs <i>(mise en place d’antennes, ...)</i>.        
        </h4>
        <br />
        <div className="imgBUT3">
          <img
            src={gsm}
            alt="Schéma d'une infrastructure GSM"
            className="gsm"
          ></img>        
        </div>
      </div>
      <div className="progBUT3">
        <br /><br />
        <h3>La programmation</h3>
        <br />
        <h4>
          Enfin en programmation, vous allez mettre en place un
          environnement de travail collaboratif<br />et élaborer le cahier des
          charges d'une application informatique.      
        </h4>
        <br />
        <div className="imgBUT3">
          <img
            src={github}
            alt="Le github du projet tuteuré BUT"
            className="github"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BUT3;
