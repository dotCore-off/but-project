import React from "react";
import SFR_logo from "../../../media/partenaires/SFR_logo.png";
import Orange_logo from "../../../media/partenaires/Orange_logo.png";
import Axians_logo from "../../../media/partenaires/Axians_logo.png";
import Bouygues_Telecom_logo from "../../../media/partenaires/Bouygues-Telecom_logo.svg";

import cisco_logo from "../../../media/certifications/cisco_logo.png";
import stormshield_logo from "../../../media/certifications/stormshield_logo.png";

const PartenairesIUT = () => {
  return (
    <div className="partenairesiut">
      <h2>Nos partenariats</h2>
      <br></br>

      <p>
        Les entreprises qui nous font confiance et recrutent nos élèves pour
        leurs stages
      </p>
      <div className="logopartenaires">
        <div className="stage">
          <img src={SFR_logo} alt="SFR_logo" className="sfr"></img>
        </div>
        <div className="stage">
          <img src={Orange_logo} alt="Orange_logo" className="orange"></img>
        </div>
        <div className="stage">
          <img src={Axians_logo} alt="Anxians_logo" className="axians"></img>
        </div>
        <div className="stage">
          <img
            src={Bouygues_Telecom_logo}
            alt="Bouygues_Telecom_logo"
            className="bouyges"
          ></img>
        </div>
      </div>
      <p>Nos certifications</p>
      <div className="logocertifications">
        <div className="certification">
          <img src={cisco_logo} alt="cisco_logo" className="cisco"></img>
        </div>
        <div className="certification">
          <img
            src={stormshield_logo}
            alt="stormshield_logo"
            className="stormshield"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PartenairesIUT;
