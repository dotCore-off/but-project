import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PartenairesIUT from '../components/PartenairesIUT'

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