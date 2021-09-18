import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading/Heading";

import "./Terms.scss";

export default function Refund() {
  return (
    <div className="page">
      <Heading pageTitle={"Refund & Cancellation"} />
      <div className="terms-page">
        <p>
          All donations made through DNA Life Organisation are NON-REFUNDABLE.
          Please contact DNA Life Organisation immediately if there are
          justifying reasons or circumstances for refund and your case may be
          reviewed on a best effort basis and decision of DNA Life Organisation
          will be final.
        </p>
        <p>
          DNA Life Organisation reserves the right at any time from time to time
          to modify or discontinue, temporarily or permanently the donation
          facility with or without notice.
        </p>
        <div className="common-routes">
          <Link to="/termsandconditions">View Terms & Conditions</Link>
          <div className="divider">|</div>
          <Link to="/privacypolicy">View Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
