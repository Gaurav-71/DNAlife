import React from "react";
import "./Heading.scss";

import background from "../../assets/Header/blur2.png";

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
