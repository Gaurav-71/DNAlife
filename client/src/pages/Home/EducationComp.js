import React from "react";
import { Link } from "react-router-dom";

export default function EducationComp() {
  return (
    <section className="education parallax-container ">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="content">
        <Link
          to="/education/internships"
          className="rect one parallax-container"
        >
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Internships</h2>
            <div className="info-snippet">
              <p>
                Get discovered. Introduce yourself, and we’ll get in touch with
                you if there’s a role that seems like a good match.
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
        <Link to="/education/trainings" className="rect two parallax-container">
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Trainings</h2>
            <div className="info-snippet">
              <p>
                Join us to learn and implement eco-friendly practices and
                contribute to the conservation of nature.
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
        <Link
          to="/education/certificate-courses"
          className="rect three parallax-container"
        >
          <div className="parallax-wrap">
            <div className="parallax-inner"></div>
          </div>
          <section className="rect-content">
            <h2>Certificate Courses</h2>
            <div className="info-snippet">
              <p>
                Prepare for a certification with our professional certificate
                programs.
              </p>
              <button className="transparent-button">View</button>
            </div>
          </section>
        </Link>
      </section>
    </section>
  );
}
