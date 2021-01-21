import React from 'react';
import Navigation from '../components/others/Navigation';
import Footer from '../components/others/Footer';
import Banniere from '../components/pages/Home/Banniere';
import ChoisirBUT from '../components/pages/Home/ChoisirBUT';
import Contacts from '../components/pages/Home/Contacts';
//import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <h1 id="homeTitle">B.U.T Réseaux et télécommunications à l'IUT de Roanne</h1>
        <Banniere />
        <ChoisirBUT />
        <Contacts />
        {/*<Newsletter />*/}
      </div>
      <Footer />
    </div>
  );
};

export default Home;