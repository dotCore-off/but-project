import React from 'react';
import Navigation from '../components/others/Navigation';
import Navigationtel from '../components/others/NavigationTel';
import Footer from '../components/others/Footer';
import Programme from '../components/pages/Formation/Programme';
import Video from '../components/pages/Formation/videoFormation';
import AvantagesBUT from '../components/pages/Formation/AvantagesBUT';
//import Popup from '../components/others/Popup';

const Formation = () => {
  return (
    <div className="formationContent">
      <Navigation />
      <Navigationtel />
      <AvantagesBUT />
      <Video />
      <Programme />
      {/*<Popup />*/}
      <Footer />
    </div>
  );
};

export default Formation;