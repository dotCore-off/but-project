import React from "react";
import { NavLink } from "react-router-dom";
import error404 from '../media/error404.svg';
const Error404 = () => {
  return (
    <div class="container">
      <img src={error404} alt="React Logo" />
      <h3>Oops, you broke the internet</h3>
      <p>
        Just kidding. But it seems Robo, your personal robot, can't find the
        page you're looking for. Please make sure you've entered the correct
        address, or return to Home. </p>
        <NavLink exact to="/" activeClassName="navActive">
           Home
        </NavLink>
    </div>
  );
};

export default Error404;
