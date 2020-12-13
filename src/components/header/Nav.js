import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Navbar from "./Navbar";
import Social from "./Social";
import Brand from "./Brand";

import "../../assets/styles/dist/css/nav.css";

const Nav = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  if (window.innerWidth >= 768) {
    return (
      <div className="nav">
        <Brand />
        <ToggleMenu />
        <Navbar
          setShowSocialMenu={setShowSocialMenu}
          setShowMenuIcon={setShowMenuIcon}
        />
        <Social />
      </div>
    );
  }

  if (window.innerWidth < 768 && showSocialMenu) {
    return (
      <div className="nav">
        <Brand />
        <ToggleMenu
          setShowSocialMenu={setShowSocialMenu}
          setShowMenuIcon={setShowMenuIcon}
          showMenuIcon={showMenuIcon}
        />
        <Navbar
          setShowSocialMenu={setShowSocialMenu}
          setShowMenuIcon={setShowMenuIcon}
        />
        <Social />
      </div>
    );
  }

  if (window.innerWidth < 768 && !showSocialMenu) {
    return (
      <div className="nav">
        <Brand />
        <ToggleMenu
          setShowSocialMenu={setShowSocialMenu}
          setShowMenuIcon={setShowMenuIcon}
          showMenuIcon={showMenuIcon}
        />
      </div>
    );
  }
};

export default Nav;
