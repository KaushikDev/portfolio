import React from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/dist/css/togglemenu.css";

const ToggleMenu = ({ setShowSocialMenu, setShowMenuIcon, showMenuIcon }) => {
  return (
    <div className="togglemenu">
      {showMenuIcon ? (
        <FontAwesomeIcon
          icon={faBars}
          className="fa"
          onClick={() => {
            setShowMenuIcon((prevState) => !prevState);
            setShowSocialMenu((prevState) => !prevState);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faTimes}
          className="fa"
          onClick={() => {
            setShowMenuIcon((prevState) => !prevState);
            setShowSocialMenu((prevState) => !prevState);
          }}
        />
      )}
    </div>
  );
};

export default ToggleMenu;
