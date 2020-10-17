import React, { useState } from "react";
import emailjs from "emailjs-com";

import "../assets/styles/dist/css/form.css";
const Form = ({ submitState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fireEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdvgy5a",
        "template_gge2iau",
        e.target,
        "user_F3dOaz4hSMEbezeT3yOaU"
      )
      .then(
        (result) => {
          console.log(`Success : ${result}`);
        },
        (error) => {
          console.log(`Failure : ${error}`);
        }
      );

    //e.target.reset(); // TODO: change this to "controlled resetting" in future
    setName("");
    setEmail("");
    setMessage("");
    submitState(true);
  };

  return (
    <form className="contact__form" onSubmit={fireEmail}>
      <div className="contact__form-title">
        <h1>
          Interested in working together? <span>Contact me.</span>
        </h1>
      </div>
      <div className="contact__form-field">
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="contact__form-field">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="contact__form-field">
        <label htmlFor="message">Message :</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button className="contact__form-field btn" type="submit">
        SEND
      </button>
    </form>
  );
};

export default Form;
