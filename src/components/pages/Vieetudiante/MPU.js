import React from "react";

const MPU = () => {
  return (
    <div className="divMPU">
      <div className="fondMPU">
        <div className="textMC">
          <h2>La médecine préventive Universitaire</h2>
          <p>
            La médecine préventive a pour but d’aider les étudiants. Elle les
            informe et les oriente dans les différents domaines de la santé,
            propose de consultation de vaccination, de délivrer des certificats
            médicaux ou encore de proposer un accompagnement social aux
            étudiants en situation de handicap. <br /> 
            <em>Les consultations se font sur
            prise de rendez-vous.</em>
          </p>
          <div className="liensMC">
            <a
              className="link"
              href="https://mdc-roanne.univ-st-etienne.fr/fr/menu-3/sous-menu-3-1.html"
            >
              Pour en savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPU;
