import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banniere from '../components/Banniere';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banniere />
      <div className="homeContent">
        Home
      </div>
      <Footer />
    </div>
  );
};

export default Home;