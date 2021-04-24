import React from "react";

import Landing from "../../pages/Landing/Landing";
import Heading from "../../components/Heading/Heading";
import "./Home.scss";

import line from "../../assets/Home/line.png";

//partners

import yene from "../../assets/Partners/yene.png";
import bms from "../../assets/Partners/bms.png";
import nelson from "../../assets/Partners/nelson.png";
import rotary from "../../assets/Partners/rotary.png";
import sgi from "../../assets/Partners/sgi.png";


export default function Home() {
  return (
    <div className="page"    >
      <Landing />
      <section className="about parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <div className="title">
            <h1>About Us</h1>
            <img src={line} alt="line"/>
          </div>
          <div className="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde autem explicabo, veniam odio, voluptatem harum quia nam inventore saepe accusamus qui similique nemo, nostrum dolores quibusdam expedita nisi velit! Culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maiores ipsam ex esse quae quia recusandae facilis non, mollitia numquam error. Blanditiis sint, corporis voluptatum est reiciendis obcaecati eligendi id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquam eligendi. Ut minima provident corrupti temporibus. Provident, possimus. Impedit rem </div>
        </section>
      </section>
      <section className="activities parallax-container">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">activities</section>
      </section>
      <section className="partners-section parallax-container black">
      <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <div className="title">
            <h1>Partners</h1>
            <img src={line} alt="line"/>
          </div>
          <div className="body">
            <p>We have collaborated with various premier institutes for academics as well as climate change mitigation e.g. environmental education, practical learning through model villages and experienced farmers/environmentalists/environmental engineers, afforestation, forest farming, green development and sustainable architechture. We have also partnered on mission green and cleaning activities, community awareness etc</p>
            <section className="partners">
              <img src={yene} alt="partner"/>
              <img src={bms} alt="partner"/>
              <img src={rotary} alt="partner"/>
              <img src={nelson} alt="partner"/>
              <img src={sgi} alt="partner"/>
            </section>
          </div>
        </section>
      </section>
      <section className="join-us parallax-container">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">Join Us</section>
      </section>
      <section className="team parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          Team
        </section>
      </section>
      <section className="education parallax-container ">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">Education</section>
      </section>
      <section className="testimonials parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          Testimonials
        </section>
      </section>
      <section className="gallery parallax-container">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">Gallery</section>
      </section>
      <section className="contactus parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          Contact us
        </section></section>
    </div>
  );
}
