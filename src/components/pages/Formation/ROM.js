import React from "react";
import appliweb from "../../../media/programme/ROM/appliweb.png";
import VoIP from "../../../media/programme/ROM/VoIP.png";

const ROM = () => {
  return (
    <div className="divROM">
      <div className="introROM">
        <h3>Qu'est ce que le spécialisation Réseaux Opérateurs et Multimédia (ROM) ?</h3>
        
        <h4>
          Cette spécialisation a pour but d'affiner et d'approfondir vos connaissances
          précédemment acquises.<br />
          Elle se déroule durant la deuxième et la troisième année.
        </h4>
      </div>
      <br/><br/>
      <div className="resROM">
        <h3>Infrastructure et services réseaux opérateurs</h3>
        <br/>
        <h4>
          Dans cette partie, vos connaissances en réseau seront mises à
          l'épreuve.<br />
          Durant la première année, vous verrez comment fonctionne le routage au
          sein d'un réseau ou comment virtualiser des services réseaux.<br />
          Pour ce qui est de la deuxième année, vous apprendrez le fonctionnement du
          Cloud, la configuration d'un IPBX ou encore ce qu'est le WebRTC.<br />
          Voilà ce que peut vous offrir cette spécialisation.        
        </h4>
        <br/>
        <div className="imgRom">
          <img
            src={appliweb}
            alt="Mise en accès distant web des application thunderbird et wireshark"
            className="appliWeb"
          ></img>
        </div>
      </div>
      <div className="telROM">
        <br /><br />
        <h3>Communication et vidéo</h3>
        <br />
        <h4>
          Durant la première année, vous apprendrez à administrer les services
          de voix et de vidéo d'un opérateur ainsi qu'à programmer ces derniers.<br />
          Au cours de la deuxième année, vous mettrez en place des service de visio-conférence<br />
          pour les entreprise ou encore de vidéo-surveillance.
          Vous serez en charge d'administrer les services de communication des
          entreprises <i>(configuration avancée des IPBX par exemple)</i>.    
        </h4>
        <br />
        <div className="imgRom">
          <img
            src={VoIP}
            alt="Création de profiles pour la VoIP et l'accès internet"
            className="voip"
          ></img>    
        </div>
      </div>
    </div>
  );
};

export default ROM;
