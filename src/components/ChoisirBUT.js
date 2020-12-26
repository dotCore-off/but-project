import React from 'react';

import cisco from '../media/certifications/ccna_cisco.png';
import stormshield from '../media/certifications/logo-stormshield.png';

const ChoisirBUT = () => {
    return (
        <div className="choisirBUT">
            <div className="avantagesIUT">
                <h1>Nos avantages !</h1>
                <p>
                -Taille Humaine<br />
                -Proche des commerces<br />
                -Proche des habitats<br />
                -Transport en commun<br />
                -Associations sportives/vie étudiante (maison des étudiants)<br />
                -Du soutien et une forte communication entre RT1 et RT2<br />
                -Un RestoU (3.30€/repas + qualité car il est relié à l'hôpital) et un BistroU (Crous) disponible pour les repas du midi.<br />
                -BU reliée avec Saint-Étienne et Lyon présente dans l'IUT<br />
                -Tutorat, chaque élève est suivi par un professeur pour sa réussite<br />
                -Beaucoup de matériel mis en place pour le RT (TP et TD)<br />
                </p>
            </div>
            <div className="certifications">
                <h1>Nos certifications !</h1>
                <div className="cisco">
                    <img src={cisco} alt="Cerfication CCNA cisco" className="imgcisco"></img>
                </div>
                <div className="stormshield">
                    <img src={stormshield} alt="Certification Stormshield" className="imgstormshield "></img>
                </div>
            </div>
            <div className="avantagesBUT">
                <h1>Les avantages du BUT !</h1>
                <p>-Formation en 3 ans<br />
                    -Différents choix de parcours<br />
                    -3 blocs de compétence communs et 5 additionnels<br />
                    -Compétence dans le domaine des réseaux et télécoms<br />
                    -Filière avec beaucoup d'emploi-Stage de deux mois en 3e année<br />
                </p>
                <a href="https://iut-roanne.univ-st-etienne.fr/fr/tous-les-faits-marquants/annee-2020-2021-2/zoom-sur/but.html" target= "_blank" className="infoBUT">
                    Pour en savoir plus sur le BUT !
                </a>
            </div>
        </div>
    )

}

export default ChoisirBUT;