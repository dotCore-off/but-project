import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Diagoursuiteetude from '../components/Diagoursuiteetude';

const Poursuiteetudes = () => {
  return (
    <div className="poursuiteEtudes">
      <Navigation />
      <div className="poursuiteEtudesContent">
      <Diagoursuiteetude />
      </div>
      <Footer />
    </div>
  );
};

export default Poursuiteetudes;