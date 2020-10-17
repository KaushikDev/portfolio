import React from "react";

import logo from "../../assets/images/brand-logo.svg";
import "../../assets/styles/dist/css/brand.css";
const Brand = () => {
  return (
    <div className="brand">
      <img src={logo} alt="brand-logo"></img>
    </div>
  );
};

export default Brand;
