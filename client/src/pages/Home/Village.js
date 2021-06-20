import React from "react";

import { Link } from "react-router-dom";

export default function Village() {
  return (
    <section className="anuganalu parallax-container">
      <div className="parallax-wrap">
        <div className="parallax-inner"></div>
      </div>
      <section className="nelson-content">
        <h2>Anuganalu - A Village Restored</h2>
        <p>
          Calm and serene, there lies a beautiful village Anuganalu located in
          the foot steps of Seegegudda (about 12 km from Hassan, towards Beluru)
          in the vicinity of Western Ghats in Hassan District, Karnataka, India.
          Upon entering the village, the welcoming cool breeze, pollution-free
          atmosphere and the flourishing fields impart an enchanting experience.
          The village was deforested (less than 10% vegetation) for agricultural
          purposes and people started facing acute water problem and lost all
          the local biodiversity. Prof. Malali Gowda formed a village self-help
          group to solve local climatic problems and initiated planting on
          public land Goomala (a rocky land which belongs to village community)
          and private (farmers - 70 families) land. Rocky-land (90% granite) has
          been converted into green land within 5 years.
        </p>
        <div className="btn-container">
          <Link to="/anuganalu-village" className="transparent-button">
            Know More
          </Link>
        </div>
      </section>
    </section>
  );
}
