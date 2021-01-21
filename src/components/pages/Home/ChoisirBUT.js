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
                        <li className="busAnim"  title="De nombreux transport en commun sont disponibles, à savoir un arrêt de bus juste devant l'IUT et la gare à 10 minutes à pied">
                        <a href="https://www.bus-star.com" target="_blank" rel="noreferrer"><i class="fas fa-bus"></i></a>
                            <a href="https://www.bus-star.com" target="_blank" rel="noreferrer">Transport en commun</a>
                        </li>
                        <li className="sportAnim" title="De nombreuses activitées sont disponibles, allant du sport aux activitées en plein air.">
                        <a href="https://www.univ-st-etienne.fr/fr/suaps/suaps-roanne.html" target="_blank" rel="noreferrer"><i class="fas fa-snowboarding"></i></a>
                            <a href="https://www.univ-st-etienne.fr/fr/suaps/suaps-roanne.html" target="_blank" rel="noreferrer">Sport</a>
                        </li>
                        <li className="restoAnim" title="Le RestoU est l'endroit préféré des étudiants">
                        <a href="https://www.aggloroanne.fr/enfance-jeunesse-education/enseignement-superieur-et-recherche/le-restaurant-universitaire-1281.html" target="_blank" rel="noreferrer"><i class="fas fa-utensils"></i></a>
                            <a href="https://www.aggloroanne.fr/enfance-jeunesse-education/enseignement-superieur-et-recherche/le-restaurant-universitaire-1281.html" target="_blank" rel="noreferrer">Resto U / Bistro U</a>
                        </li>
                        <li className="comAnim">
                        <a href="https://www.vitrinesderoanne.com/vos-commerces" target="_blank" rel="noreferrer"><i class="fas fa-store"></i></a>
                            <a href="https://www.vitrinesderoanne.com/vos-commerces" target="_blank" rel="noreferrer">Proche des commerces</a>
                        </li>
                        <li className="habAnim">
                            <i class="fas fa-home"></i>
                            <span>Proche des habitats</span>
                        </li>
                    </ul> 
                    <ul>
                        <li className="buAnim">
                        <a href="https://scd.univ-st-etienne.fr/fr/tout-savoir-sur-mes-bu/bu-roanne.html" title="La Bu vous permet de réviser et de vous détendre facilement, entre midi et 2h par exemple." target="_blank" rel="noreferrer"><i class="fas fa-school"></i></a>
                            <a href="https://scd.univ-st-etienne.fr/fr/tout-savoir-sur-mes-bu/bu-roanne.html" target="_blank" rel="noreferrer">Bibliothèque Universitaire</a>
                        </li>
                        <li className="supAnim">
                            <i class="fas fa-hands-helping" title="Un soutien entre les RT2 et les RT1 est mis en place, le jeudi après-midi ou sur le discord de la promotion."></i>
                            <span>Soutien RT1 / RT2</span>
                        </li>
                        <li className="tutAnim">
                            <i class="fas fa-user-friends" title="Chaque élève se voit attribuer un tuteur enseignant qui va le suivre durant toute sa première année et faire des points réguliers avec lui."></i>
                            <span>Tutorat Élève / Professeur</span>
                        </li>
                        <li className="stuffAnim">
                            <i class="fas fa-tools" title="De nombreux équipements de diverses marques sont mis en place pour les TP."></i>
                            <span>Équipements professionnels</span>
                        </li>
                    </ul>
                    <div className="videoPresentationIUT">
                        <iframe title="videoPresentation" width="560" height="315" src="https://www.youtube.com/embed/3XWXfOtEfWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            <div className="IUTBUT">
                <h2 id="paddingTitleTop">Les caractéristiques du B.U.T</h2>
                <ul>
                    <li className="formAnim">
                        <i class="fas fa-business-time"></i>
                        <span>Formation en 3 ans</span>
                    </li>
                    <li className="bacAnim">
                        <i class="fas fa-medal"></i>
                        <span>Niveau d'études : BAC +3</span>
                    </li>
                    <li className="ectsAnim">
                        <i class="fas fa-coins"></i>
                        <span>180 Crédits ECTS</span>
                    </li>
                    <li className="cursAnim">
                        <i class="fas fa-map-signs"></i>
                        <span>Différents cursus possibles</span>
                    </li>
                    <li className="speAnim">
                        <i class="fas fa-star"></i>
                        <span>Différentes spécialités par Cursus</span>
                    </li>
                </ul>
                <br></br>
                <div className="infoBUT">
                    <a href="https://iut-roanne.univ-st-etienne.fr/fr/tous-les-faits-marquants/annee-2020-2021-2/zoom-sur/but.html" target= "_blank" rel="noreferrer" >
                    Pour en savoir plus sur le BUT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ChoisirBUT;