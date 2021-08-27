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
            <div>
              <img src={yene} alt="partner" />
              <a href="" className="read-more-link" download target="_blank">
                See MoU
              </a>
            </div>
            <div>
              <img src={bms} alt="partner" />
              <a href="" className="read-more-link" download target="_blank">
                See MoU
              </a>
            </div>
            <div>
              <img src={rotary} alt="partner" />
              <a href="" className="read-more-link" download target="_blank">
                See MoU
              </a>
            </div>
            <div>
              <img src={nelson} alt="partner" />
              <a href="" className="read-more-link" download target="_blank">
                See MoU
              </a>
            </div>
            <div>
              <img src={sgi} alt="partner" />
              <a href="" className="read-more-link">
                See MoU
              </a>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
