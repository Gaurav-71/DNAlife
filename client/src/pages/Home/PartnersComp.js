import React from "react";

import line from "../../assets/Home/line.png";

//partners

import yene from "../../assets/Partners/yene.jpg";
import bms from "../../assets/Partners/bms.jpg";
import nelson from "../../assets/Partners/nelson.jpg";
import rotary from "../../assets/Partners/rotary.jpg";
import sgi from "../../assets/Partners/sgi.jpg";

export default function PartnersComp() {
  return (
    <section className="partners-section parallax-container black">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="content">
        <div className="title">
          <h1>Partners</h1>
          <img src={line} alt="line" />
        </div>
        <div className="body">
          <p>
            We have collaborated with various premier institutes for academics
            as well as climate change mitigation e.g. environmental education,
            practical learning through model villages and experienced farmers,
            environmentalists, environmental engineers, afforestation, forest
            farming, green development and sustainable architechture. We have
            also partnered on mission green and cleaning activities, community
            awareness etc.
          </p>
          <section className="partners">
            <img src={yene} alt="partner" />
            <img src={bms} alt="partner" />
            <img src={rotary} alt="partner" />
            <img src={nelson} alt="partner" />
            <img src={sgi} alt="partner" />
          </section>
        </div>
      </section>
    </section>
  );
}
