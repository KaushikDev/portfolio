import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/dist/css/navbar.css";

const Navbar = ({ setShowSocialMenu, setShowMenuIcon }) => {
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
            onClick={() => {
              setShowMenuIcon((prevState) => !prevState);
              setShowSocialMenu((prevState) => !prevState);
            }}
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
            onClick={() => {
              setShowMenuIcon((prevState) => !prevState);
              setShowSocialMenu((prevState) => !prevState);
            }}
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
            onClick={() => {
              setShowMenuIcon((prevState) => !prevState);
              setShowSocialMenu((prevState) => !prevState);
            }}
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
            onClick={() => {
              setShowMenuIcon((prevState) => !prevState);
              setShowSocialMenu((prevState) => !prevState);
            }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
