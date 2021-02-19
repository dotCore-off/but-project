import React from "react";
import Navigation from '../components/others/Navigation';
import Footer from "../components/others/Footer";
import Mentions from "../components/pages/Mentionlegales/Mentions";
import Popup from '../components/others/Popup';

const Mentionslegales = () => {
  return (
    <div className="mentions">
      <Navigation />
      <div className="mentionsContent">
        <h1 id="mentionsTitle">Mentions Légales</h1>
        <Mentions />
        <Popup />
        </div>
      <Footer />
    </div>
  );
};

export default Mentionslegales;
