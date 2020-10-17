import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/dist/css/togglemenu.css";

const ToggleMenu = ({ toggleNavSocial }) => {
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  return (
    <div className="togglemenu">
      {showMenuIcon ? (
        <FontAwesomeIcon
          icon={faBars}
          className="fa"
          onClick={() => {
            setShowMenuIcon((prevState) => !prevState);
            toggleNavSocial(true);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faTimes}
          className="fa"
          onClick={() => {
            setShowMenuIcon((prevState) => !prevState);
            toggleNavSocial(false);
          }}
        />
      )}
    </div>
  );
};

export default ToggleMenu;
