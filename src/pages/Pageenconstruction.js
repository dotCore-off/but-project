import React from 'react';
import Navigation from '../components/others/Navigation';
import Footer from '../components/others/Footer';
import Construction from '../components/others/Construction';

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