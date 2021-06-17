import React from "react";

import Heading from "../../components/Heading/Heading";
import GalleryComponent from "../../components/Gallery/Gallery.js";

import AllPosts from "../../components/Posts/Type3.js";

import "./GP.scss";

export default function Gallery() {
  return (
    <div className="new-gallery-page page">
      <Heading pageTitle={"Gallery"} />
      <div style={{ marginTop: "3rem" }}></div>
      <div className="comp">
        <GalleryComponent />
      </div>
      <AllPosts />
    </div>
  );
}
