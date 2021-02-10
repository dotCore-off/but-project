import React from 'react';
import Navigation from '../components/others/Navigation';
import Temoignages from '../components/pages/IUTenaction/Temoignages';
import Footer from '../components/others/Footer';
import Photos360 from '../components/pages/IUTenaction/Photos360';
import IUT360 from '../components/pages/IUTenaction/IUT360';
import Popup from '../components/others/Popup';


const IUTenaction = () => {
  return (
    <div className="iutenactionContent">
      <Navigation />
      <Temoignages />
      <IUT360 />
      <Photos360 />
      <Popup />
      <Footer />
    </div>
  );
};

export default IUTenaction;