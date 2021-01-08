import React from "react";
import { NavLink } from "react-router-dom";
import error404 from "../media/error404.svg";
const Error404 = () => {
  return (
    <div className="error404">
      <div className="divErrorLogo">
        <img src={error404} alt="React Logo" className="errorLogo" />
      </div>
      <h2>Oops, you broke the internet</h2>
      <p>
        Just kidding. But it seems Robo, your personal robot, can't find the
        page you're looking for. Please make sure you've entered the correct
        address, or return to Home.{" "}
      </p>
      <NavLink exact to="/" activeClassName="navActive">
        <a href="#" class="btn-flip" data-back="Back" data-front="Home"></a>
      </NavLink>
    </div>
  );
};

export default Error404;
