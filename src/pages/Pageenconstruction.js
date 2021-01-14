import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Construction from '../components/Construction';

const Pageenconstruction = () => {
  return (
    <div className="pageConstruction">
      <Navigation />
      <div className="pageConstructionContent">
      <Construction />
      </div>
      <Footer />
    </div>
  );
};

export default Pageenconstruction;