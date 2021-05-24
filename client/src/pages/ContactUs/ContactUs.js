import React from "react";
import emailjs from "emailjs-com";

import Heading from "../../components/Heading/Heading";

import "./ContactUs.scss";
import "../../scss/custom.scss";

function sendEmail(e) {
  e.preventDefault();
  console.log("e value : ", e);
  emailjs
    .sendForm(
      "gmail",
      "template_ic8mdm6",
      e.target,
      "user_u19q2l59CP6NPNZ1o7IYA"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

export default function ContactUs() {
  return (
    <div className="page">
      <Heading pageTitle={"Contact Us"} />
      <div className="contact-us-page">
        <div className="phone-address">
          <h2>Locate Us.</h2>
          <div className="location-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7241679456542!2d77.57132811482347!3d13.116652490760838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzYwLjAiTiA3N8KwMzQnMjQuNyJF!5e0!3m2!1sen!2sin!4v1618672394742!5m2!1sen!2sin"
              loading="lazy"
              title="location"
            ></iframe>
          </div>

          <div className="address">
            <h3>Address</h3>
            <hr className="hr-slash" />
            <h5>310 President Leon, Duo Marvel Layout,</h5>
            <h5>Ananthapura Road, Yelahanka, </h5>
            <h5>Bengaluru, Karnataka-560064, India</h5>
          </div>

          <div className="phone">
            <h3>Phone</h3>
            <hr className="hr-slash" />
            <h5>Prof. Malali Gowda (Founder and President): +91-9901002211</h5>
            <h5>
              Mr. Mahantesh Veerapur (Trustee and Secretary): +91-9886680132
            </h5>
          </div>
        </div>
        <form onSubmit={sendEmail} className="contact-message">
          <h2>Get In Touch.</h2>
          <input
            id="username"
            type="text"
            className="input"
            name="name"
            placeholder="Your Name"
          />
          <input
            id="userEmail"
            type="text"
            className="input"
            name="email"
            placeholder="Your Email Address"
          />
          <textarea
            id="userMessage"
            className="textarea-message"
            name="message"
            placeholder="Your Message"
          />

          <button type="submit" className="btn-orange">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
