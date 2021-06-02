import React from "react";

import Heading from "../../components/Heading/Heading";
import GalleryComponent from "../../components/Gallery/Gallery.js";

export default function Gallery() {
  return (
    <div className="new-gallery-page page">
      <Heading pageTitle={"Gallery"} />
      <div style={{ marginTop: "2rem" }}></div>
      <GalleryComponent />
      <div className="gallery-posts"></div>
    </div>
  );
}
