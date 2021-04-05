import React from "react";
import { Pannellum } from "pannellum-react";
import G02 from "../../../media/photos360/G02.jpg";
import G07 from "../../../media/photos360/G07.jpg";
import G04 from "../../../media/photos360/G04.jpg";

import pG02 from "../../../media/photos360/preview_G02.jpg";
import pG07 from "../../../media/photos360/preview_G07.jpg";
import pG04 from "../../../media/photos360/preview_G04.jpg";

import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';

function G2() {
  return (
    <div className="G02">
      <Pannellum
        width="90%"
        height="500px"
        image={G02}
        pitch={-15}
        yaw={92}
        hfov={108}
        previewTitle="Salle G02"
        preview={pG02}
        title="Salle G02"
        onLoad={() => {
          console.log("[Panorama] Panorama correctement chargé !");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={-10}
          yaw={110}
          text="Osciloscope et générateur de signal utilisés lors des travaux pratiques d'électronique ou de signal"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={-20}
          yaw={-120}
          text="Travaux pratiques de téléphonie de première année"
        />
      </Pannellum>
    </div>
  );
}

function G4() {
  return (
    <div className="G04">
      <Pannellum
        width="90%"
        height="500px"
        image={G04}
        pitch={-7}
        yaw={180}
        hfov={115}
        previewTitle="Salle G04"
        preview={pG04}
        title="Salle G04"
        onLoad={() => {
          console.log("[Panorama] Panorama correctement chargé !");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={-20}
          yaw={-150}
          text="TP de signal de première année"
        />
      </Pannellum>
    </div>
  );
}

function G7() {
  return (
    <div className="G07">
      <Pannellum
        width="90%"
        height="500px"
        image={G07}
        pitch={0}
        yaw={150}
        hfov={114}
        previewTitle="Salle G07"
        preview={pG07}
        title="Salle G07"
        onLoad={() => {
          console.log("[Panorama] Panorama correctement chargé !");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={10}
          yaw={-10}
          text="Baie de brassage qui permet de cabler les différents équipements"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={-30}
          yaw={110}
          text="Maquette d'un TP de câblage de première année"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={-20}
          yaw={-120}
          text="TP de téléphonie de première année"
        />
      </Pannellum>
    </div>
  );
}

const salle = [
  { name: " ", contenu: <G2 /> },
  { name: " ", contenu: <G4 /> },
  { name: " ", contenu: <G7 /> },
];

function getTabs() {
  return salle.map((salle) => ({
    //key: index, // Optional. Equals to tab index if this property is omitted
    tabClassName: "tab", // Optional
    panelClassName: "panel", // Optional
    title: salle.name,
    showMore : false,
    getContent: () => salle.contenu,
  }));
}

const Photos360 = () => {
  return (
    <div className="photos360">
      <h2>LES PHOTOS 360 DE L'IUT</h2>
      <h3 className="text360">
        {" "}
        Quelques photos en 360° qui ont été prise lors de TP de première année à
        l'IUT
      </h3>
      <p>
        Pour les afficher, cliquez sur "Load Panorama". Vous pouvez avoir
        certaines informations en cliquant sur les{" "}
        <i class="fas fa-info-circle" /> présents dans les images
      </p>

      <div className="div360">
      <Tabs items={getTabs()}/>
      </div>
    </div>
  );
};

export default Photos360;
