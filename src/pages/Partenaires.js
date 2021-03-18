import React from 'react';
import Navigation from '../components/others/Navigation';
import Navigationtel from '../components/others/NavigationTel';
import Footer from '../components/others/Footer';
import PartenairesIUT from '../components/pages/Partenaires/PartenairesIUT'
import Popup from '../components/others/Popup';

const Partenaires = () => {
  return (
    <div className="pagepartenaires">
      <Navigation />
      <Navigationtel />
      <div className="partenairesContent">
      <PartenairesIUT />
      <Popup />
      </div>
      <Footer />
    </div>
  );
};

export default Partenaires;