import React from "react";
import imageIUT360 from "../../../media/iut360/IUT360.PNG";

const IUT360 = () => {
    return (
      <div className="BackgroundIUT360">
        <div className="IUT360Content">
          <section className="section1">
            <img src={imageIUT360} alt="IUT" id="img360IUT" />
          </section>
          <section className="section2">
            <article className="article">
                <h1>VISITE DU CAMPUS EN 360</h1>
                <p className="firstp">Nous vous proposont de faire le tour du campus en 360.</p>
                <p>Pour ce faire rien de plus simple cliquer sur le bouton ci-dessous.</p>
                <div className="bodybutton">
                <a 
                href="https://dossier.univ-st-etienne.fr/roa-jpo/www/Visite_Virtuelle/index.htm" 
                target="_self" 
                className="button">
                <span>Visite en 360°</span>
                </a>
                </div>
              </article>
          </section>
        </div>
      </div>
    );
  };

export default IUT360;

