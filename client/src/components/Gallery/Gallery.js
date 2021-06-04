// photos

import img1 from "../../assets/Gallery/img1.webp";
import img2 from "../../assets/Gallery/img2.webp";
import img3 from "../../assets/Gallery/img3.webp";
import img4 from "../../assets/Gallery/img4.webp";
import img5 from "../../assets/Gallery/img5.webp";
import img6 from "../../assets/Gallery/img6.webp";
import img7 from "../../assets/Gallery/img7.webp";
import img8 from "../../assets/Gallery/img8.webp";
import img9 from "../../assets/Gallery/img9.webp";
import img10 from "../../assets/Gallery/img10.webp";
import img11 from "../../assets/Gallery/img11.webp";
import img12 from "../../assets/Gallery/img12.webp";
import img13 from "../../assets/Gallery/img13.webp";
import img14 from "../../assets/Gallery/img14.webp";
import img15 from "../../assets/Gallery/img15.webp";
import img16 from "../../assets/Gallery/img16.webp";
import img17 from "../../assets/Gallery/img17.webp";
import img18 from "../../assets/Gallery/img18.webp";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Gallery.scss";

import { Carousel } from "react-responsive-carousel";

export default function Gallery() {
  let images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];
  return (
    <Carousel infiniteLoop autoPlay stopOnHover={false}>
      {images.map(function (image, i) {
        return <img src={image} alt={"gallery-image-" + (i + 1)} key={i} />;
      })}
    </Carousel>
  );
}
