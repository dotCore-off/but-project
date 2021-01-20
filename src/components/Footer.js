import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../media/logoIUT1.png";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a
            href="https://iut-roanne.univ-st-etienne.fr/fr/index.html"
            target="_blank"
            rel="noreferrer"
            className="aFoter"
          >
            <img
              src={logo}
              alt="Logo IUT"
              className="image"
              href="https://iut-roanne.univ-st-etienne.fr/fr/index.html"
              target="_blank"
            ></img>
          </a>
        </li>
        <li id="fbFooter">
          <a
            href="https://www.facebook.com/IUTRoanne"
            target="_blank"
            rel="noreferrer"
            className="afooter"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li id="instaFooter">
          <a
            href="https://www.instagram.com/iutroanne/"
            target="_blank"
            rel="noreferrer"
            className="afooter"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li id="adminFooter">
          <NavLink exact to="/Pageenconstruction" activeClassName="navActive" className="panfooter">
            Administration
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Mentionslegales" activeClassName="navActive" className="afooter">
            Mentions Légales
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
