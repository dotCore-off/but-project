import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';

const Notfound = () => {
  return (
    <div className="notFound">
      <Navigation />
      <div className="notFoundContent">
      <Error404 />
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;