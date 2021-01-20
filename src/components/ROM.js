import React from "react";
import appliweb from "../media/programme/ROM/appliweb.png";
import VoIP from "../media/programme/ROM/VoIP.png";

const ROM = () => {
  return (
    <div className="divROM">
      <div className="introROM">
        <h3>
          Qu'est ce que le spécialisation Réseaux Opérateurs et Multimédia (ROM)
          ?
        </h3>
        <br></br>
        <p>
          Cette spécialisation a pour but d'approfondir vos connaissances
          acquises au long des années précédentes. <br />
          Elle se déroule durant la deuxième et la troisième année.
          <br></br>
        </p>
      </div>
      <br />
      <br />
      <div className="...">
        <h3>Infrastructure et services réseaux opérateurs</h3>
        <br />
        <p>
          Dans cette partie, vos connaissances en réseaux seront mises à
          l'épreuve.
          <br />
          Durant la première année, vous verez comment fonctionne le routage au
          seins d'un réseaux ou comment virtualiser des service réseaux.
          <br />
          Pour ce qui est de la deuxième année, vous verrez comment fonctionne
          le Cloud, comment configurer un IPBx, ou encore ce qu'est le WebRTC.
          <br />
          Voilà ce que peut vous offrir cette spécialisation.
        </p>
        <br />
        <div className="imgRom">
          <img
            src={appliweb}
            alt="Mise en accès distant web des application thunderbird et wireshark"
            className="appliWeb"
          ></img>
        </div>
      </div>
      <div className="...">
        <h3>Communication et vidéo :</h3>
        <p>
          Durant la première année, vous apprendrez à administrer les services
          de voix et de vidéos d'un opérateur ainsi qu'a programmer le réseaux.{" "}
          <br />
          Durant la deuxième année, vous mettrez en place des service de visio
          conférence pour les entreprise ou encore un service de
          vidéo-surveillance.
          <br />
          Vous serez en charge d'administrer les services de communication des
          entreprises (configuration avancée des IPBX par exemple).
        </p>
      </div>
      <div className="imgRom">
        <img
          src={VoIP}
          alt="Création de profiles pour la VoIP et l'accès internet"
          className="voip"
        ></img>
      </div>
    </div>
  );
};

export default ROM;
