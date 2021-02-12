import React from "react";
import Navigation from '../components/others/Navigation';
import Footer from "../components/others/Footer";
import Apreslebut from "../components/pages/Poursuitesetudes/Apreslebut";
//import Popup from '../components/others/Popup';


const Poursuiteetudes = () => {
  return (
    <div className="poursuiteEtudes">
      <Navigation />
      <div className="poursuiteEtudesContent">
        <div className="Content">
          <Apreslebut />
        </div>
        {/*<Popup />*/}
      </div>
      <Footer />
    </div>
  );
};

export default Poursuiteetudes;
