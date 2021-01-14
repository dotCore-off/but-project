import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Construction from '../components/Construction';

const Pageenconstruction = () => {
  return (
    <div className="notFound">
      <Navigation />
      <div className="notFoundContent">
      <Construction />
      </div>
      <Footer />
    </div>
  );
};

export default Pageenconstruction;