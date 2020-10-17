import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/dist/css/navbar.css";

const Navbar = () => {
  const onSelectStyle = { color: "#119da4" };

  return (
    <div className="navbar">
      <ul className="navbar__ul">
        <li>
          <NavLink
            className="nav__link"
            to={`/home`}
            exact
            activeStyle={onSelectStyle}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to={`/projects`}
            exact
            activeStyle={onSelectStyle}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to={`/about`}
            exact
            activeStyle={onSelectStyle}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to={`/contact`}
            exact
            activeStyle={onSelectStyle}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
