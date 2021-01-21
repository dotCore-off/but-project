import React from 'react';
import Navigation from '../components/others/Navigation';
import Temoignages from '../components/pages/IUTenaction/Temoignages';
import Footer from '../components/others/Footer';
import Photos360 from '../components/pages/IUTenaction/Photos360';


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