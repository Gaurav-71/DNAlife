import React from "react";
import Divider from "@material-ui/core/Divider";

import "./Training.scss";

import graphic from "../../../assets/Training/undraw_creative_team_r90h.svg";

import Heading from "../../../components/Heading/Heading";
import { Link } from "react-router-dom";

export default function Training() {
  return (
    <div className="page training-page">
      <Heading elevation={15} pageTitle="Training" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="Training" />
        </div>
        <div className="right">
          <h1>Learn and get inspired</h1>
          <h4>
            Gain knowledge about countless concepts from industry experts.
          </h4>
          <Divider
            style={{
              backgroundColor: "#919191",
              width: "100%",
              margin: "2rem 0",
            }}
          />
          <p>
            DNA Life Organisation offers training on environmental awareness,
            agricultural practices, social forestry, mixed farming and rural
            livelihood. Join us to learn and implement eco-friendly practices
            and contribute to the conservation of nature.
          </p>

          <Link to="/education/trainings/posts" className="link-button btn">
            View Oppurtunities
          </Link>
        </div>
      </div>
    </div>
  );
}
