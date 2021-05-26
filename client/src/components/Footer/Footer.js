import React from "react";
import "./Footer.scss";
import "../../scss/custom.scss";
import {
  EnvelopeIcon,
  FacebookFIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-line-awesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="black-fill">
          <div className="footer-information-container">
            <div className="contact-info-column">
              <h2>Contact Information</h2>
              <div className="multiple-slashes">
                <hr className="hr-slash" />
                <hr className="hr-slash extra-slash" />
              </div>
              <div className="contact-info-row-container">
                <div className="contact-info-row">
                  <a
                    className="icon-container"
                    target="_blank"
                    href="mailto:info@dnalife.org"
                  >
                    <EnvelopeIcon />
                  </a>
                  <h3>info@dnalife.org</h3>
                </div>
                <div className="contact-info-row tele">
                  <a
                    className="icon-container"
                    href="https://t.me/joinchat/VRArWP6kveTm6tWu"
                    target="_blank"
                  >
                    <TelegramIcon />
                  </a>
                  <h3>DNA Life 🌳 RainForest 🌨</h3>
                </div>
              </div>
            </div>
            <div className="follow-us-column">
              <h2>Follow Us</h2>
              <hr className="hr-slash" />
              <div className="follow-us-icons-row">
                <a
                  className="icon-container"
                  href="https://www.facebook.com/dnalifeorg"
                  target="_blank"
                >
                  <FacebookFIcon />
                </a>
                <a
                  className="icon-container"
                  href="https://instagram.com/dnalifeorg?igshid=qgfaubpq5ttq"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="icon-container"
                  href="https://mobile.twitter.com/dnalifeorg"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright-line">
            Copyright © 2021 DNALife
            <span style={{ margin: "0 0.8rem" }}>|</span> Made by Gaurav V &
            Divya <span style={{ margin: "0 0.8rem" }}>|</span>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/signIn"
            >
              {" "}
              Admin Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
