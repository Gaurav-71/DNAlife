


// photos

import img1 from "../../assets/Gallery/FB_IMG_16195489000831597.jpg";
import img2 from "../../assets/Gallery/FB_IMG_16195489187324894.jpg";
import img3 from "../../assets/Gallery/IMG-20190325-WA0106.jpg";
import img4 from "../../assets/Gallery/IMG-20190603-WA0009.jpg";
import img5 from "../../assets/Gallery/IMG-20190603-WA0010.jpg";
import img6 from "../../assets/Gallery/temp1.jpg";
import img7 from "../../assets/Gallery/IMG-20190916-WA0001.jpg";
import img8 from "../../assets/Gallery/IMG-20190927-WA0003.jpg";



import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./Gallery.scss";

import { Carousel } from 'react-responsive-carousel';

export default function Gallery() {
  let images = [img1,img2,img3,img4,img5,img6,img7,img8]
        return (
          <Carousel  infiniteLoop autoPlay stopOnHover={false} >
             {images.map(function(image, i){
                  return <img src={image} key={i} />;
              })}
          </Carousel>
        );
    
};

