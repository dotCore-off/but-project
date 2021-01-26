import React from 'react';
import Navigation from '../components/others/Navigation';
import Footer from '../components/others/Footer';
import BDE from '../components/pages/Vieetudiante/BDE.js';

const Vieetudiante = () => {
  return (
    <div className="vieEtudiante">
    <Navigation />
    <div className="etuContent">
      <h1 id="etuTitle">La vie étudiante !</h1>
      <BDE />
    </div>
    <Footer />
  </div>
  );
};

export default Vieetudiante;