import React from 'react';
import Navigation from '../components/Navigation';
import Temoignages from '../components/Temoignages';
import Footer from '../components/Footer';
import Photos360 from '../components/Photos360';


const IUTenaction = () => {
  return (
    <div className="iutenactionContent">
      <Navigation />
      <h1 id="iutenactionTitle">L'IUT de Roanne !</h1>
      <Temoignages />
      <Photos360 />
      <Footer />
    </div>
  );
};

export default IUTenaction;