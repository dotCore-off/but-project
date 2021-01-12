import React from 'react';
import Navigation from '../components/Navigation';
import Temoignages from '../components/Temoignages';
import Footer from '../components/Footer';

const Formation = () => {
  return (
    <div className="formationContent">
      <Navigation />
      <h1 id="formationTitle">La formation Réseaux et télécommunications</h1>
      <Temoignages />
      <Footer />
    </div>
  );
};

export default Formation;