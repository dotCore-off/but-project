import React from 'react';
import Navigation from '../components/others/Navigation';
import Navigationtel from '../components/others/NavigationTel';
import Footer from '../components/others/Footer';
import Error404 from '../components/others/Error404';

const Notfound = () => {
  return (
    <div className="notFound">
      <Navigation />
      <Navigationtel />
      <div className="notFoundContent">
      <Error404 />
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;