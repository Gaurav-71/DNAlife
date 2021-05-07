import React from "react";
import "./Heading.scss";

import background from "../../assets/Header/1.jpg";

export default function Heading({pageTitle }) {
  let bg = { backgroundImage: `url(${background})` };

  return (
    <div className="customHeading" style={bg} >
      <div className="blur-bg">
      <div className="title">{pageTitle}</div>
      </div>
    </div>
  );
}
