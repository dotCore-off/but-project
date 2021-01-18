/* ////////////////////// */
/* Component - ChoisirBUT */
/* ////////////////////// */

// Import module / librairies
import React from 'react';

// ChoisirBUT component
const ChoisirBUT = () => {
    return (
        <div className="choisirBUT">
            <div className="IUTBUT">
                <h2>Pourquoi choisir l'IUT de Roanne ?</h2>
                    <ul>
                        <li className="busAnim">
                            <i class="fas fa-bus"></i>
                            <a href="https://www.bus-star.com" target="_blank" rel="noreferrer">Transport en commun</a>
                        </li>
                        <li className="sportAnim">
                            <i class="fas fa-snowboarding"></i>
                            <a href="https://www.univ-st-etienne.fr/fr/suaps/suaps-roanne.html" target="_blank" rel="noreferrer">Sport</a>
                        </li>
                        <li className="restoAnim">
                            <i class="fas fa-utensils"></i>
                            <a href="https://www.aggloroanne.fr/enfance-jeunesse-education/enseignement-superieur-et-recherche/le-restaurant-universitaire-1281.html" target="_blank" rel="noreferrer">Resto U / Bistro U</a>
                        </li>
                        <li className="comAnim">
                            <i class="fas fa-store"></i>
                            <a href="https://www.vitrinesderoanne.com/vos-commerces" target="_blank" rel="noreferrer">Proche des commerces</a>
                        </li>
                        <li className="habAnim">
                            <i class="fas fa-home"></i>
                            <span>Proche des habitats</span>
                        </li>
                    </ul> 
                    <ul>
                        <li className="buAnim">
                            <i class="fas fa-school"></i>
                            <a href="https://scd.univ-st-etienne.fr/fr/tout-savoir-sur-mes-bu/bu-roanne.html" target="_blank" rel="noreferrer">Bibliothèque Universitaire</a>
                        </li>
                        <li className="supAnim">
                            <i class="fas fa-hands-helping"></i>
                            <span>Soutien RT1 / RT2</span>
                        </li>
                        <li className="tutAnim">
                            <i class="fas fa-user-friends"></i>
                            <span>Tutorat Élève / Professeur</span>
                        </li>
                        <li className="stuffAnim">
                            <i class="fas fa-tools"></i>
                            <span>Équipements professionnels</span>
                        </li>
                    </ul>
                    <div className="videoPresentationIUT">
                        <iframe title="videoPresentation" width="560" height="315" src="https://www.youtube.com/embed/3XWXfOtEfWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            <div className="IUTBUT">
                <h2 id="paddingTitleTop">Les caractéristiques du B.U.T</h2>
                <ul>
                    <li>
                        <i class="fas fa-business-time"></i>
                        <span>Formation en 3 ans</span>
                    </li>
                    <li>
                        <i class="fas fa-medal"></i>
                        <span>Niveau d'études : BAC +3</span>
                    </li>
                    <li>
                        <i class="fas fa-coins"></i>
                        <span>180 Crédits ECTS</span>
                    </li>
                    <li>
                        <i class="fas fa-map-signs"></i>
                        <span>Différents cursus possibles</span>
                    </li>
                    <li>
                        <i class="fas fa-star"></i>
                        <span>Différentes spécialités par Cursus</span>
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