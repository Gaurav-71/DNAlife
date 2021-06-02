import React from "react";
import Divider from "@material-ui/core/Divider";

import "./Internship.scss";

import graphic from "../../../assets/Internship/undraw_a_moment_to_relax_bbpa.svg";

import Heading from "../../../components/Heading/Heading";
import { Link } from "react-router-dom";

export default function Internship() {
  return (
    <div className="page internship-page">
      <Heading elevation={15} pageTitle="Internships" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="internship" />
        </div>
        <div className="right">
          <h1>Intern and Learn</h1>
          <h4>An open invitation to open and innovative minds.</h4>
          <Divider
            style={{
              backgroundColor: "#919191",
              width: "100%",
              margin: "2rem 0",
            }}
          />
          <p>
            DNA Life internships are open for people who are motivated to
            protect nature. Join us to acquire scientific knowledge from global
            experts in the fields like Greenomics, Genomics, Forest Farming and
            Environmental Engineering. Selected candidates may gain an
            opportunity to work in DNA Life projects.
          </p>
          <p>
            Get discovered. Introduce yourself, and we’ll get in touch with you
            if there’s a role that seems like a good match.
          </p>
          <Link to="/education/internships/posts" className="link-button btn">
            View Oppurtunities
          </Link>
        </div>
      </div>
    </div>
  );
}
