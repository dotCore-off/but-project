import React from "react";
import SFR_logo from "../../../media/partenaires/SFR_logo.png";
import Orange_logo from "../../../media/partenaires/Orange_logo.png";
import Axians_logo from "../../../media/partenaires/Axians_logo.png";
import IPline_logo from "../../../media/partenaires/IPLINE_logo.png";

import cisco_logo from "../../../media/certifications/cisco_logo.png";
import stormshield_logo from "../../../media/certifications/stormshield_logo.png";

const PartenairesIUT = () => {
  return (
    <div className="partenairesiut">
      <h2>Nos partenariats</h2>
      <br></br>

      <p>
        Les entreprises qui nous font confiance et recrutent nos élèves pour
        leurs stages.
      </p>
      <div className="logopartenaires">
        <div className="stage">
          <a href="https://www.sfr.fr/" target="_blank" rel="noreferrer"><img src={SFR_logo} alt= "SFR_logo" className="sfr" title="Cliquer pour accèder à leur site"></img></a>
        </div>
        <div className="stage">
          <a href="https://www.orange.fr/portail" target="_blank" rel="noreferrer"><img src={Orange_logo} alt= "Orange_logo" className="orange" title="Cliquer pour accèder à leur site"></img></a>
        </div>
        <div className="stage">
          <a href="https://www.axians.fr/fr/" target="_blank" rel="noreferrer"><img src={Axians_logo} alt= "Axians_logo" className="axians" title="Cliquer pour accèder à leur site"></img></a>
        </div>
        <div className="stage">
          <a href="https://www.ipline.fr/" target="_blank" rel="noreferrer"><img src={IPline_logo} alt= "IPline_logo" className="ipline" title="Cliquer pour accèder à leur site"></img></a>
        </div>
      </div>
      <h2>Nos certifications</h2>
      <div className="logocertifications">
        <div className="certification">
          <a href="https://www.cisco.com/c/fr_fr/training-events/certifications.html" target="_blank" rel="noreferrer"><img src={cisco_logo} alt= "cisco_logo" className="cisco" title="Cliquer pour accèder à leur site"></img></a>
        </div>
        <div className="certification">
          <a href="https://www.stormshield.com/fr/produits-et-services/services/formations/"  targer="_blank" rel="noreferrer"><img src={stormshield_logo} alt= "stormshield_logo" className="stormshield" title="Cliquer pour accèder à leur site"></img></a>
        </div>
      </div>
    </div>
  );
};

export default PartenairesIUT;
