import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banniere from '../components/Banniere';
import ChoisirBUT from '../components/ChoisirBUT';
import Contacts from '../components/Contacts';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
      <Banniere />
      <ChoisirBUT />
      <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;