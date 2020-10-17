import React, { useState } from "react";

import Toast from "./../Toast";
import Form from "./../Form";

import "../../assets/styles/dist/css/contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmitState = () => {
    setIsSubmitted((prevState) => !prevState);
  };

  return (
    <div className="contact">
      {!isSubmitted ? (
        <Form submitState={formSubmitState} />
      ) : (
        <Toast submitState={formSubmitState} />
      )}
    </div>
  );
};

export default Contact;
