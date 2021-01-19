import React from 'react';
import SFR_logo from '../media/partenaires/SFR_logo.png';
import Orange_logo from '../media/partenaires/Orange_logo.png';
import CHR_logo from '../media/partenaires/CHR_logo.png';
import CCJ_logo from '../media/partenaires/CCJ_logo.png';
const PartenairesIUT = () => {
  return (
    <div className="partenairesiut">
    <h2>Ils nous font confiance</h2>
    <br></br>

    <p>Les entreprises qui nous font confiance et recrutent nos élèves pour leurs stages</p>
      <div className="logopartenaires">
          <img src={SFR_logo} alt="SFR_logo" className="logopartenaires"></img>
          <img src={Orange_logo} alt="Orange_logo" className="logopartenaires"></img>
          <img src={CHR_logo} alt="CHR_logo" className="logopartenaires"></img>
          <img src={CCJ_logo} alt="CCJ_logo" className="logopartenaires"></img>
      </div>
    </div>
  );
};

export default PartenairesIUT;