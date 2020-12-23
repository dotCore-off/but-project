import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        Home
      </div>
      <Footer />
    </div>
  );
};

export default Home;