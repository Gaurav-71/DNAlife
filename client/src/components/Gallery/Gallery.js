// // photos

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
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Gallery.scss";

// import { Carousel } from "react-responsive-carousel";

// export default function Gallery() {
//   let images = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//     img13,
//     img14,
//     img15,
//     img16,
//     img17,
//     img18,
//   ];
//   return (
//     <Carousel infiniteLoop autoPlay stopOnHover={false}>
//       {images.map(function (image, i) {
//         return <img src={image} alt={"gallery-image-" + (i + 1)} key={i} />;
//       })}
//     </Carousel>
//   );
// }

var Carousel = require("3d-react-carousal").Carousel;

export default function Gallery() {
  let images = [
    <img src={img1} alt="carousel img1" />,
    <img src={img2} alt="carousel img2" />,
    <img src={img3} alt="carousel img3" />,
    <img src={img4} alt="carousel img4" />,
    <img src={img5} alt="carousel img5" />,
    <img src={img6} alt="carousel img6" />,
    <img src={img7} alt="carousel img7" />,
    <img src={img8} alt="carousel img8" />,
    <img src={img9} alt="carousel img9" />,
    <img src={img10} alt="carousel img10" />,
    <img src={img11} alt="carousel img11" />,
    <img src={img12} alt="carousel img12" />,
    <img src={img13} alt="carousel img13" />,
    <img src={img14} alt="carousel img14" />,
    <img src={img15} alt="carousel img15" />,
    <img src={img16} alt="carousel img16" />,
    <img src={img17} alt="carousel img17" />,
    <img src={img18} alt="carousel img18" />,
  ];
  let slides = [
    <img src="https://picsum.photos/800/300/?random" />,
    <img src="https://picsum.photos/800/301/?random" />,
    <img src="https://picsum.photos/800/302/?random" />,
    <img src="https://picsum.photos/800/303/?random" />,
    <img src="https://picsum.photos/800/304/?random" />,
  ];
  return (
    <div className="threeD">
      <Carousel slides={images} autoplay={true} interval={3000} />
    </div>
  );
}
