import React from "react";
import Divider from "@material-ui/core/Divider";

import "../Activities.scss";

import graphic from "../../../assets/Cleaning/Artboard 1.png";

import Heading from "../../../components/Heading/Heading";

import { Link } from "react-router-dom";

export default function Cleaning() {
  return (
    <div className="page internship-page">
      <Heading elevation={15} pageTitle="Cleaning Movements" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="cleaning" />
        </div>
        <div className="right">
          <h1>Clean India, Green India</h1>
          <h4>Our country is our identity, keep it clean</h4>
          <Divider
            style={{
              backgroundColor: "#919191",
              width: "100%",
              margin: "2rem 0",
            }}
          />
          <p>
            Today, our ecosystems are overflowing with plastics. It is immensely
            painful to see, what we have made of Mother Nature! From sky to
            oceans and the ground, anthropogenic activities are damaging our
            Planet. Let's come together and adopt practices that promote
            sustainability, reuse, recycling and waste minimisation. Every step
            counts!
          </p>

          <Link
            to="/activities/cleaning-movements/posts"
            className="link-button btn"
          >
            View Events
          </Link>
        </div>
      </div>
    </div>
  );
}
