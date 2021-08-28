import React from "react";
import { Link } from "react-router-dom";

import er from "../../assets/404/undraw_page_not_found_su7k.svg";

import "./CompletedDonation.scss";

export default function CompletedDonation() {
  return (
    <div className="page nfa">
      <h1>
        Thankyou for your Generous Help! Your Reciept will be mailed to you.
      </h1>
      <img src={er} />
      <Link className="btn" to="/">
        Go Back Home
      </Link>
    </div>
  );
}
