import React from 'react';
import image1 from "../../../media/banniere/entree.jpg";

const Banner = () => {
  return (
    <div className="BackgroundBanner">
      <div className="BannerContent">
        <section className="section1">
          <img src={image1} alt="IUT" id="imgBanner" />
        </section>
        <section className="section2">
          <article className="article">
              <h1>BIENVENUE À L'IUT DE ROANNE</h1>
              <p className="firstp">Ce site web à pour objectif de présenter le Bachelor Universitaire de Technologie Réseaux & télécommunications aux étudiants récemment diplômés du Baccalauréat.</p>
              <p>Créer dans le cadre du projet tuteuré de deuxième année du DUT R&T, c'est un première exemple
                des choses que nous pouvons apprendre ici, à l'IUT.
              </p>
              <a href="/" title="rediction_accueil_iut">Voici un lien redirigeant vers le site officiel de l'IUT de Roanne.</a>
            </article>
        </section>
      </div>
    </div>
  );
};

export default Banner;