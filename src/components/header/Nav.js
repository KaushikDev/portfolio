import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Navbar from "./Navbar";
import Social from "./Social";
import Brand from "./Brand";

import "../../assets/styles/dist/css/nav.css";

const Nav = () => {
  const [showNavSocial, setShowNavSocial] = useState(false);

  const toggleNavSocial = () => {
    setShowNavSocial((prevState) => !prevState);
  };

  if (window.innerWidth >= 768) {
    return (
      <div className="nav">
        <Brand />
        <ToggleMenu toggleNavSocial={toggleNavSocial} />
        <Navbar />
        <Social />
      </div>
    );
  }

  if (window.innerWidth < 768 && showNavSocial) {
    return (
      <div className="nav">
        <Brand />
        <ToggleMenu toggleNavSocial={toggleNavSocial} />
        <Navbar />
        <Social />
      </div>
    );
  } else {
    return (
      <div className="nav">
        <Brand />
        <ToggleMenu toggleNavSocial={toggleNavSocial} />
      </div>
    );
  }
};

export default Nav;
