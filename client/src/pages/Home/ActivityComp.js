import React from "react";
import { Link } from "react-router-dom";

export default function ActivityComp() {
  return (
    <section className="activities parallax-container">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="content">
        <Link
          to="/activities/educational-tours"
          className="rect a-one parallax-container"
        >
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Educational Tours</h2>
            <div className="info-snippet">
              <p>
                Join the adventure with DNA Life to understand different tools
                and techniques of farming
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
        <Link
          to="/activities/eco-projects"
          className="rect a-two parallax-container"
        >
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Eco Projects</h2>
            <div className="info-snippet">
              <p>
                Together, we can heal our Planet and return its glory that is
                lost due to over exploitation and sheer negligence of ages.
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
        <Link
          to="/activities/plantation-drives"
          className="rect a-three parallax-container"
        >
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Plantation Drives</h2>
            <div className="info-snippet">
              <p>
                Join The Tree Warriors To Increase India's Green Cover.
                Plantation Drive To Increase India's Green Cove.{" "}
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
        <Link
          to="/activities/cleaning-movements"
          className="rect a-four parallax-container"
        >
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Cleaning Movements</h2>
            <div className="info-snippet">
              <p>
                Let's come together and adopt practices that promote
                sustainability, reuse, recycling and waste minimisation.
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
      </section>
    </section>
  );
}
