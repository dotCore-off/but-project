import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banniere from '../components/Banniere';
import ChoisirBUT from '../components/ChoisirBUT';
import Contacts from '../components/Contacts';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
      <h1 id="homeTitle">B.U.T Réseaux et télécommunications à l'IUT de Roanne</h1>
      <Banniere />
      <ChoisirBUT />
      <Contacts />
      <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;