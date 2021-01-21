import React from 'react';
import Navigation from '../components/others/Navigation';
import Footer from '../components/others/Footer';
import PartenairesIUT from '../components/pages/Partenaires/PartenairesIUT'

const Partenaires = () => {
  return (
    <div className="pagepartenaires">
      <Navigation />
      <div className="partenairesContent">
      <PartenairesIUT />
      </div>
      <Footer />
    </div>
  );
};

export default Partenaires;