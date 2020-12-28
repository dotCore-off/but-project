import React from 'react';



const ChoisirBUT = () => {
    return (
        <div className="choisirBUT">
            <div className="IUTBUT">
                <h2>choisir l'IUT de Roanne</h2>
                    <ul>
                        <li>
                            <i class="fas fa-store"></i>
                            Proche des commerces
                        </li>
                        <li>
                            <i class="fas fa-home"></i>
                            Proche des habitats
                        </li>
                        <li>
                        Transport en communs
                        </li>
                        <li>
                        Associations sportives/vie étudiante (maison des étudiants)
                        </li>
                        <li>
                        Du soutien et une forte communication entre RT1 et RT2
                        </li>
                        <li>
                        Un RestoU (3.30€/repas + qualité car il est relié à l'hôpital) et un BistroU (Crous) disponible pour les repas du midi.
                        </li>
                        <li>
                        BU reliée avec Saint-Étienne et Lyon présente dans l'IUT
                        </li>
                        <li>
                        Tutorat, chaque élève est suivi par un professeur pour sa réussite
                        </li>
                        <li>
                        Beaucoup de matériel mis en place pour le RT (TP et TD)
                        </li>
                    </ul>
            </div>
            <div className="IUTBUT">
                <h2>Les avantages du BUT</h2>
                    <ul>
                        <li>
                        Formation en 3 ans
                        </li>
                        <li>
                        Différents choix de parcours
                        </li>
                        <li>
                        Filière avec beaucoup d'emploi-Stage de deux mois en 3e année
                        </li>
                        <li>
                        3 blocs de compétence communs et 5 additionnels
                        </li>
                        <li>
                        Compétence dans le domaine des réseaux et télécoms
                        </li>
                    </ul>
                <div className="infoBUT">
                    <a href="https://iut-roanne.univ-st-etienne.fr/fr/tous-les-faits-marquants/annee-2020-2021-2/zoom-sur/but.html" target= "_blank" rel="noreferrer" >
                    Pour en savoir plus sur le BUT !
                    </a>
                </div>
            </div>
        </div>
    )

}

export default ChoisirBUT;