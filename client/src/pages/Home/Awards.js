import React from "react";

import line from "../../assets/Home/line.png";

//partners

export default function AwardsComp() {
  return (
    <section className="awards-section parallax-container black">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="content">
        <div className="title">
          <h1>Awards</h1>
          <img src={line} alt="line" />
        </div>
        <div className="body">
          <section className="awards">
            <div>
              <div>
                <p>
                  "Government of Karnataka conferred Dr. A P J Abdul Kalam
                  environmental award for the year 2006-2007 to BCRT. Jun 6th,
                  2006."
                </p>
              </div>
              <a href="" className="view-button" download target="_blank">
                View
              </a>
            </div>
            <div>
              <div>
                <p>
                  "Dr. Malali Gowda has been conferred with "2019 Passion in
                  Science" award in the Environmental Stewardship category by
                  New England Biolabs for establishing a method to re- forest
                  any barren or rocky land in short period, resulting in an
                  increase in vegetation cover, ground-water and biodiversity."
                </p>
              </div>
              <a
                href="https://www.neb.com/about-neb/news-and-press-releases/new-england-biolabs-announces-2019-passion-in-science-awards-recipients"
                className="view-button"
                download
                target="_blank"
              >
                View
              </a>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
