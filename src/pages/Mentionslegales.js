import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

const Mentionslegales = () => {
  return (
    <div className="mentions">
      <Navigation />
      <div className="mentionsContent">
        <h1 id="mentionsTitle">Mentions Légales</h1>
        <Mentions />
        </div>
      <Footer />
    </div>
  );
};

export default Mentionslegales;
