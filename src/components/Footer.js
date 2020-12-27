import React from 'react';
import logo from '../media/logoIUT1.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="Facebook">
                <a href="https://www.facebook.com/IUTRoanne" target = "_blank" className="afooter"><i class="fab fa-facebook-f"></i></a>
            </div>
            <div className="Instagram">
                <a href="https://www.instagram.com/iutroanne/" target = "_blank" className="afooter"><i class="fab fa-instagram"></i></a>
            </div>
            <div className="Logo">
                <a href="https://iut-roanne.univ-st-etienne.fr/fr/index.html" target = "_blank" className="afooter">
                    <img src={logo} alt="Logo IUT" className="image" href="https://iut-roanne.univ-st-etienne.fr/fr/index.html" target = "_blank"></img>
                </a>
            </div>
            <div className="Connexion">
                    <a href="https://iut-roanne.univ-st-etienne.fr/fr/index.html" target = "_blank" className="afooter">Se connecter</a>
            </div>
            <div className="MentionLegales">
                    <a href="https://iut-roanne.univ-st-etienne.fr/fr/liens-de-bas-de-page/mentions-legales-2.html" target = "_blank" className="afooter">Mentions Légales</a>
            </div>
            
            

        </div>
    );
};

export default Footer;