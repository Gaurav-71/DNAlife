import React from "react";

export default function Heading({ imageSource, pageTitle }) {
  let bg = { backgroundImage: `url(${imageSource})` };

  return (
    <div className="heading" style={bg}>
      <h1>{pageTitle}</h1>
    </div>
  );
}
