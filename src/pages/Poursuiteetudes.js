import React from "react";
import Navigation from '../components/others/Navigation';
import Footer from "../components/others/Footer";
import Diagoursuiteetude from "../components/pages/Poursuitesetudes/Diagoursuiteetude";

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
