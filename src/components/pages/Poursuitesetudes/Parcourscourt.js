import React from 'react';
import TechnicienReseaux from "../../../media/apresBUT/TechnicienReseaux.jpg";

const Parcourscourt = () => {
  return (
    <div className="BackgroundParcourscourt">
      <div className="ParcourscourtContent">
          <section className="section2"> 
            <article className="article">
                <h1>Le monde de l'emploi</h1>
                <p className="firstp"> En choisissant de vous orienter vers un emploi, vous allez travailler en tant que technicien spécialisé.</p>
                <p>Grâce à ce choix de parcours, vous entrerez rapidement dans le monde du travail et pourrez faire vos preuves et gagner en compétences
                  rapidement tout en vous insérant dans le monde du travail.
                </p>
              </article>
          </section>
          <section className="section1">
          <img src={TechnicienReseaux} alt="IUT" id="imgBanner" />
          </section>
      </div>
    </div> 
  );
};

export default Parcourscourt;