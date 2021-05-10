import React from "react";
import Divider from "@material-ui/core/Divider";

import "../Activities.scss";

import graphic from "../../../assets/Education Courses/Artboard 1.png";

import Heading from "../../../components/Heading/Heading";

export default function Educational() {
  return (
    <div className="page internship-page">
      <Heading elevation={15} pageTitle="Educational Tours" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="educational" />
        </div>
        <div className="right">
          <h1>A Unique Learning Experience</h1>
          <h4>Learn from a new set of experiences in an informal setting.</h4>
          <Divider
            style={{
              backgroundColor: "#919191",
              width: "100%",
              margin: "2rem 0",
            }}
          />
          <p>
            Join the adventure with DNA Life to understand different tools and
            techniques of farming, indwelling of local heritage with nature,
            ancient medicinal system (Nati- Vaidya), visiting rain hill and much
            more. Practical learning plus the fun!
          </p>
          <button className="btn">View Tours</button>
        </div>
      </div>
    </div>
  );
}
