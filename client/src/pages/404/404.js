import React from "react";
import { Link } from "react-router-dom";

import er from "../../assets/404/undraw_page_not_found_su7k.svg";

import "./404.scss";

export default function E404() {
  return (
    <div className="page nf">
      <img src={er} />
      <h1>Oops ! We couldn't find the page you were looking for</h1>
      <Link className="btn" to="/">
        Go Back Home
      </Link>
    </div>
  );
}
