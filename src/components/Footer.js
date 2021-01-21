import React from "react";

import "../assets/styles/dist/css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <span>&copy;</span> PIYUSH KAUSHIK {new Date().getFullYear()}. ALL
        RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
