import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="navigationContent">
        <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Formation" activeClassName="navActive">
                Formation
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Vieetudiante" activeClassName="navActive">
                Vie étudiante
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Poursuiteetudes" activeClassName="navActive">
                Poursuite d'études
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Partenaires" activeClassName="navActive">
                Nos partenaires
              </NavLink>
            </li>
        </ul>
      </div>
  );
};

export default Navigation;