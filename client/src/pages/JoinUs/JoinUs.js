import React from "react";
import Divider from "@material-ui/core/Divider";
import "./JoinUs.scss";
import graphic from "../../assets/JoinUs/undraw_Work_time_re_hdyv.svg";
import Heading from "../../components/Heading/Heading";

export default function JoinUs() {
  return (
    <div>
      <div className="page join-us-page">
        <Heading elevation={15} pageTitle="Join Us" />
        <div className="page-content">
          <div className="left">
            <img src={graphic} alt="internship" />
          </div>
          <div className="right">
            <h1>Join Us. Be you.</h1>
            <h4>Invitation to like minded people for being a member.</h4>
            <Divider
              style={{
                backgroundColor: "#919191",
                width: "100%",
                margin: "2rem 0",
              }}
            />
            <p>
              Towards achieving our goal to green and clean the planet, we
              constantly needs support from the like minded people.
            </p>
            <p>
              DNA Life is pleased to announce the membership program. Every one
              is welcome.
            </p>

            <a
              className="btn"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSed79zWh9wp3Gnf94r-rIFpgovjC-rnB0f0hMvRDUyl_jSxrw/viewform"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
