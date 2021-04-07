import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { EnvelopeIcon, FacebookFIcon, InstagramIcon } from "react-line-awesome";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer-information-container">
          <div>
            <h2>Contact Information</h2>
            <div className="contact-info-column">
              <div className="contact-info-row">
                <a className="icon-container" href="mailto:info@dnalife.org">
                  <EnvelopeIcon />
                </a>
                <h3>info@dnalife.org</h3>
              </div>
            </div>
          </div>
          <div>
            <h2>Follow Us</h2>
            <div className="follow-us-column">
              <a
                className="icon-container"
                href="https://www.facebook.com/dnalifeorg"
              >
                <FacebookFIcon />
              </a>
              <a
                className="icon-container"
                href="https://instagram.com/dnalifeorg?igshid=qgfaubpq5ttq"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
