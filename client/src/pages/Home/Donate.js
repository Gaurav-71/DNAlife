import React from "react";

import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <section className="landing-donate parallax-container">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="donate-content">
        <h2>Donate to Support Our Cause</h2>
        <p>
          Our efforts and your generous support can help us in realising the
          Green Mission to revive rainforests, sustainable forest farming,
          conducting research, educating and creating awareness among the
          masses! Every Plant, Every Penny makes a difference, Your gift is
          INVALUABLE!
        </p>
        <div className="btn-container">
          <Link to="/donate" className="transparent-button">
            Donate
          </Link>
        </div>
      </section>
    </section>
  );
}
