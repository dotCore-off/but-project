import React from 'react';
import image1 from "../../../media/banniere/entree.jpg";

const ChoisirRoanne = () => {
  return (
    <div className="BackgroundChoisirRoanne">
      <div className="ChoisirRoanneContent">
        <section className="section1">
          <article className="article">
            <h1>CHOISIR L'IUT DE ROANNE</h1>
            <p className="firstp">L'IUT de Roanne c'est beaucoup de chose, mais surtout un IUT à taille humaine permettant
            aux élèves de profiter d'un enseignement et d'un accompagnement unique.</p>
            <p>En effet, la communication est favorisée au sein des DUT et nous avantages nous, les élèves, dans notre
            apprentissage.
            </p>
            <a href="https://iut-roanne.univ-st-etienne.fr/fr/l-iut/visite-guidee.html" title="rediction_accueil_iut">L'IUT de Roanne en quelques dates...</a>
          </article>
        </section>
        <section className="section2">
          <div id="videoPresentationIUT">
          <iframe
            alt="IUT_video_presentation"
            title="videoPresentation"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3XWXfOtEfWs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        </section>
      </div>
    </div>
  );
};

export default ChoisirRoanne;