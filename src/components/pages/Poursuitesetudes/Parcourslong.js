import React from 'react';
import classes from "../../../media/apresBUT/classes.jpg";

const Parcourslong = () => {
  return (
    <div className="BackgroundParcourslong">
      <div className="ParcourslongContent">
          <section className="section1">
          <img src={classes} alt="IUT" id="imgBanner" />
          </section>
          <section className="section2"> 
            <article className="article">
                <h1>Le parcours long</h1>
                <p className="firstp">Le BUT réseaux et télécommunications ouvre la voie vers de nombreuses opportunitées de longues études.</p>
                <p>En effet, vous pourrez vous orienter vers des écoles d'ingénieur, des écoles supérieure d'alternance ou encore rejoindre un master de votre choix.
                </p>
              </article>
          </section>
      </div>
    </div> 
  );
};

export default Parcourslong;