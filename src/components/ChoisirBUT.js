import React from 'react';



const ChoisirBUT = () => {
    return (
        <div className="choisirBUT">
            <div className="IUTBUT">
                <h2>choisir l'IUT de Roanne</h2>
                    <ul>
                        <li>
                        <i class="fas fa-bus"></i>
                        <span>Transport en communs</span>
                        </li>
                        <li>
                            <i class="fas fa-snowboarding"></i>
                            <span>Associations sportives</span>
                        </li>
                        <li>
                            <i class="fas fa-utensils"></i>
                            <span>Resto U - Bistro U (3.30€/repas)</span>
                        </li>
                        <li>
                            <i class="fas fa-store"></i>
                            <span>Proche des commerces</span>
                        </li>
                        <li>
                            <i class="fas fa-home"></i>
                            <span>Proche des habitats</span>
                        </li>
                    </ul> 
                    <ul>
                        <li>
                            <i class="fas fa-school"></i>
                            <span>Bibliothèque Universitaire</span>
                        </li>
                        <li>
                            <i class="fas fa-hands-helping"></i>
                            <span>Soutien RT1 et RT2</span>
                        </li>
                        <li>
                            <i class="fas fa-user-friends"></i>
                            <span>Tutorat Élève/Professeur</span>
                        </li>
                        <li>
                            <i class="fas fa-tools"></i>
                            <span>Équipements spécifiques</span>
                        </li>
                    </ul>
                    <div className="videoPresentationIUT">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3XWXfOtEfWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            </div>
            <div className="IUTBUT">
                <h2 id="paddingTitleTop">Les avantages du BUT</h2>
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
                            <span>Différents cursus possible</span>
                        </li>
                        <li>
                            <i class="fas fa-star"></i>
                            <span>Différentes spécialitées par Cursus</span>
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