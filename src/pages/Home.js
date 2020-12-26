import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banniere from '../components/Banniere';
import ChoisirBUT from '../components/ChoisirBUT';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banniere />
      <div className="homeContent">
        Home
        <ChoisirBUT />
      </div>
      <Footer />
    </div>
  );
};

export default Home;