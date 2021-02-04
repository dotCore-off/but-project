import React from "react";
import imageIUT360 from "../../../media/iut360/IUT360.jpg";

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
                <p>Nous vous proposons de faire le tour du campus en 360 en cliquant sur le lien ci-dessous :</p>
                  <h3 className="link360">
                    <a
                      href="https://dossier.univ-st-etienne.fr/roa-jpo/www/Visite_Virtuelle/index.htm"
                      target="_blank"
                      rel="noreferrer"
                      ><br></br>Visiter la totalité de l'IUT en 360
                    </a>
                </h3>
              </article>
          </section>
        </div>
      </div>
    );
  };

export default IUT360;

