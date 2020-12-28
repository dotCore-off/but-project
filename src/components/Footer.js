import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logoIUT1.png';

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://iut-roanne.univ-st-etienne.fr/fr/index.html" target = "_blank" rel="noreferrer" className="afooter">
                        <img src={logo} alt="Logo IUT" className="image" href="https://iut-roanne.univ-st-etienne.fr/fr/index.html" target = "_blank"></img>
                    </a>
                </li>
                <li id="adminFooter">
                    <NavLink exact to="/" activeClassName="navActive">
                         Administration
                    </NavLink>
                </li>
                <li id="fbFooter">
                    <a href="https://www.facebook.com/IUTRoanne" target = "_blank" rel="noreferrer" className="afooter"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li id="instaFooter">
                    <a href="https://www.instagram.com/iutroanne/" target = "_blank" rel="noreferrer" className="afooter"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="https://iut-roanne.univ-st-etienne.fr/fr/liens-de-bas-de-page/mentions-legales-2.html" target = "_blank" rel="noreferrer" className="afooter">Mentions Légales</a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;