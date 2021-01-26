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
                Formation RT
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/IUTenaction" activeClassName="navActive"> {/* /Partenaires */}
              L'IUT en action
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Vieetudiante" activeClassName="navActive"> {/* /Vieetudiante */}
                Vie étudiante
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Poursuiteetudes" activeClassName="navActive"> {/* /Poursuiteetudes */}
                Poursuite d'études
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Pageenconstruction" activeClassName="navActive"> {/* /Partenaires */}
                Nos partenaires
              </NavLink>
            </li>
            
        </ul>
      </div>
  );
};

export default Navigation;