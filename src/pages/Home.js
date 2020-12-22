import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Footer />
      <div className="homeContent">
        Home
      </div>
    </div>
  );
};

export default Home;