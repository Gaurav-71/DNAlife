import React from "react";
import "./Footer.scss";
import "../common.scss";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  FacebookFIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-line-awesome";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer-information-container">
          <div className="contact-info-column">
            <h2>Contact Information</h2>
            <hr class="hr-slash" />
            <div className="contact-info-row-container">
              <div className="contact-info-row">
                <a className="icon-container" href="mailto:info@dnalife.org">
                  <EnvelopeIcon />
                </a>
                <h3>info@dnalife.org</h3>
              </div>
              <div className="contact-info-row">
                <a
                  className="icon-container"
                  href="https://t.me/joinchat/VRArWP6kveTm6tWu"
                >
                  <TelegramIcon />
                </a>
                <h3>DNA Life🌳RainForest🌨</h3>
              </div>
            </div>
          </div>
          <div className="follow-us-column">
            <h2>Follow Us</h2>
            <hr class="hr-slash" />
            <div className="follow-us-icons-row">
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
              <a
                className="icon-container"
                href="https://mobile.twitter.com/dnalifeorg"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-line">Copyright © 2021 DNALife</div>
      </section>
    </div>
  );
}
