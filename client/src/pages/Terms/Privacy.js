import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading/Heading";

import "./Terms.scss";

export default function Privacy() {
  return (
    <div className="page">
      <Heading pageTitle={"Privacy Policy & Disclosure"} />
      <div className="terms-page">
        <p>
          Use of the DNA Life Organisation services is also governed by our
          Privacy Policy, which is incorporated into our{" "}
          <Link to="/termsandconditions">Terms & Conditions</Link> by this
          reference. Without limitation of the terms and conditions set forth in
          our you understand and agree that DNA Life Organisation may disclose
          personally identifiable information if required to do so by law or in
          the good faith belief that such disclosure is necessary to comply with
          legal process, enforce these terms or protect the rights, property or
          safety of DNA Life Organisation, its members and the public. The
          policy may be amended by DNA Life Organisation in its sole discretion
          from time to time.
        </p>
        <div className="common-routes">
          <Link to="/termsandconditions">View Terms & Conditions</Link>
          <div className="divider">|</div>
          <Link to="/refund">View Refund & Cancellation Policy</Link>
        </div>
      </div>
    </div>
  );
}
