import React, { useRef } from "react";
import "./ContactSectionStyles.css";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agu53pu",
        "template_b38lubj",
        form.current,
        "z8Bfa5k8d5NrIoCl-"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="cont-heading">
        <h2>Talk to me</h2>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name"></input>
        <label>Email</label>
        <input type="email" name="from_email"></input>
        <label>Message</label>
        <textarea name="message" placeholder="Write you message" />

        <input type="submit" value="Send"></input>
      </form>
    </div>
  );
};

export default ContactSection;


