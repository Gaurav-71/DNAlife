import React from "react";
import "./Heading.scss";

import background from "../../assets/Footer/footer-soil.jpg";

export default function AdminHeading({ pageTitle }) {
  let bg = { backgroundImage: `url(${background})` };

  return (
    <div className="customHeading" style={bg}>
      <div className="blur-bg">
        <div className="title">{pageTitle}</div>
      </div>
    </div>
  );
}
