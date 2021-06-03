import React from "react";

import Heading from "../../components/Heading/Heading";
import GalleryComponent from "../../components/Gallery/Gallery.js";

import AllPosts from "../../components/Posts/Type3.js";

export default function Gallery() {
  return (
    <div className="new-gallery-page page">
      <Heading pageTitle={"Gallery"} />
      <div style={{ marginTop: "2rem" }}></div>
      <GalleryComponent />
      <AllPosts />
    </div>
  );
}
