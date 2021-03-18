import React from "react";
import { NavLink } from "react-router-dom";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import '../../styles/components/others/_navigationtel.scss';

const Navigationtel = () => {
  return (
    <div className="divNav">
      <div className="divNavTel">
        <Popup
          trigger={
            <button className="buttonNav">
              {" "}
              <i class="fas fa-bars"></i>{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="navigationContentTel">
                <ul>
                  <li>
                    <NavLink exact to="/" activeClassName="navActive">
                      Accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/Formation" activeClassName="navActive">
                      {" "}
                      {/* /Formation */}
                      Formation RT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/IUTenaction"
                      activeClassName="navActive"
                    >
                      {" "}
                      {/* /IUTenaction */}
                      L'IUT en action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/Vieetudiante"
                      activeClassName="navActive"
                    >
                      {" "}
                      {/* /Vieetudiante */}
                      Vie étudiante
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/Poursuiteetudes"
                      activeClassName="navActive"
                    >
                      {" "}
                      {/* /Poursuiteetudes */}
                      Poursuite d'études
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/Partenaires"
                      activeClassName="navActive"
                    >
                      {" "}
                      {/* /Partenaires */}
                      Nos partenaires
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Navigationtel;
