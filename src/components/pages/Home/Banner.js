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
              <p className="firstp">Ce site web a pour objectif de présenter le Bachelor Universitaire de Technologie Réseaux & Télécommunications aux étudiants récemment diplômés du Baccalauréat.</p>
              <p>Créé dans le cadre du projet tuteuré de deuxième année du D.U.T. R&T, c'est un première exemple
                des choses que vous pourrez apprendre ici, à l'université.
              </p>
              <a href="/" title="rediction_accueil_iut">Cliquez ici pour visiter le site officiel de l'IUT de Roanne.</a>
            </article>
        </section>
      </div>
    </div>
  );
};

export default Banner;