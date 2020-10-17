import React from "react";

import "../assets/styles/dist/css/toast.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toast = ({ submitState }) => {
  return (
    <div className="toast">
      <FontAwesomeIcon className="toastIcon" icon={faReact} />
      <h1>Your message is sent.</h1>
      <button className="close" onClick={() => submitState(false)}>
        X
      </button>
    </div>
  );
};

export default Toast;
