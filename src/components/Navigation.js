import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navbar">
      <h1>Navbar title</h1>

      <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i class="fas fa-users-cog"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Notfound" activeClassName="navActive">
              <i class="fas fa-users-cog"></i>
              <span>Notfound</span>
            </NavLink>
          </li>
      </ul>
    </div>
  );
};

export default Navigation;