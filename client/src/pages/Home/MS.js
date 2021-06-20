import React from "react";

import { Link } from "react-router-dom";

export default function MS() {
  return (
    <section className="landing-nelson parallax-container">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="nelson-content">
        <h2>MS Program With Nelson Institute For Environmental Studies</h2>
        <p>
          The Nelson Institute is home to three interdisciplinary research
          centers that serve as laboratories and incubators to solve today's
          most challenging environmental issues through interdisciplinary
          research through hands-on educational initiatives that bridge
          classrooms and communities; and through public programs that foster
          environmental conversation among people. The MS program spans 15
          months: Courses in Madison,Wisconsin, at Nelson Institute, USA
        </p>
        <div className="btn-container">
          <Link
            to="/education/ms-program/nelson-institute-for-environmental-studies"
            className="transparent-button"
          >
            Know More
          </Link>
        </div>
      </section>
    </section>
  );
}
