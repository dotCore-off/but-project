import React from 'react';
import Navigation from '../components/others/Navigation';
import Footer from '../components/others/Footer';
import Programme from '../components/pages/Formation/Programme';

const Formation = () => {
  return (
    <div className="formationContent">
      <Navigation />
      <h1 id="formationTitle">La formation Réseaux et télécommunications</h1>
      <Programme />
      <Footer />
    </div>
  );
};

export default Formation;