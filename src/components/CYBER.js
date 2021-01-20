import React from "react";
import antispam from "../media/programme/CYBER/antispam.png";
import snmp from "../media/programme/CYBER/snmp.png";

const CYBER = () => {
  return (
    <div className="divCYBER">
      <div className="introCYBER">
        <h3>Qu'est ce que le spécialisation Cybersécurité (CYBER) ?</h3>
        <br></br>
        <h4>
          Cette spécialisation a pour but d'affiner et d'approfondir vos
          connaissances précédemment acquises dans le domaine de la
          Cybersécurité.
          <br />
          Elle se déroule durant la deuxième et la troisième année.
        </h4>
      </div>
      <br />
      <br />
      <div className="adminCYBER">
        <h3>Administrer un système d'information sécurisé</h3>
        <br />
        <h4>
          Dans cette partie, vos connaissances en Cybersécurité vont être
          aiguisées.
          <br />
          Durant la première année, vous allez être sensibilisé aux
          vulnérabilités d’un système d’information. Vous allez par exemple
          apprendre qu’elles sont les bonnes pratiques de cybersécurité
          recommandée par l’ANSSI, apprendre à mettre en œuvre des outils de
          sécurisation du réseau ou encore à utiliser des outils de
          cryptographie.
          <br />
          Pour ce qui est de la deuxième année, vous apprendrez à mettre en
          place des sécurités pour les petites infrastructures. Par exemple,
          vous sécuriserez des services <i>(mail, web, DNS)</i> et vous mettre
          en œuvre des outils de sécurisation avancée pour interconnecter des
          sites <i>(VPN) </i>
          et gérer des profils utilisateurs <i>(gestion des accès wifi)</i>.
          <br />
          Voilà ce que peut vous offrir cette spécialisation.
        </h4>
        <br />
        <div className="imgCYBER">
          <img
            src={antispam}
            alt="Mise en place d'un logiciel d'anti-spam pour le service de mail hmail"
            className="antispam"
          ></img>
        </div>
      </div>
      <div className="surveilCYBER">
        <br />
        <br />
        <h3>Surveiller un systèpe d'information sécurisé</h3>
        <br />
        <h4>
          Durant la première année, vous allez apprendre à utiliser des outils
          de surveillance du réseau <i>(SNMP, syslog, …)</i>, à configurer des
          protections contre les logiciels malveillants{" "}
          <i>(sur les serveurs, les proxys mail…)</i> et à automatiser des
          tâches d’administration{" "}
          <i>(avec des scripts sous Linux et Python par exemple)</i>.
          <br />
          En deuxième année, vous apprendrez à surveiller l’activité d’un SI en
          exploitant les logs (pour par exemple trouver les évènements de
          sécurité qui ont eu lieu) et à gérer une crise sur le réseau (support
          de stockage, copient des logs…)
        </h4>
        <br />
        <div className="imgCYBER">
          <img
            src={snmp}
            alt="Schéma d'une infrastructure GSM"
            className="snmp"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CYBER;
