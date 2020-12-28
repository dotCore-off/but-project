import React from 'react';
import cisco from '../media/certifications/ccna_cisco.png';
import stormshield from '../media/certifications/logo-stormshield.png';

const Certifications = () => {
  return (
    <div className="certifications">
    <h2>Nos certifications</h2>
      <div className="cisco">
          <img src={cisco} alt="Cerfication CCNA cisco" className="imgcisco"></img>
      </div>
      <div className="stormshield">
          <img src={stormshield} alt="Certification Stormshield" className="imgstormshield"></img>
      </div>
    </div>
  );
};

export default Certifications;