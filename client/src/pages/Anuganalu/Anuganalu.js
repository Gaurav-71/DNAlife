import React from "react";
import "./Village.scss";
import Heading from "../../components/Heading/Heading";
import p1 from "../../assets/Village/p1.webp";
import p2 from "../../assets/Village/p2.webp";
import p3 from "../../assets/Village/p3.webp";

export default function Anuganalu() {
  return (
    <div className="page">
      <Heading pageTitle={"Anuganalu Village"} />
      <div className="anu-village">
        <div className="text">
          <p>
            Calm and serene, there lies a beautiful village Anuganalu located in
            the foot steps of Seegegudda (about 12 km from Hassan, towards
            Beluru) in the vicinity of Western Ghats in Hassan District,
            Karnataka, India. Upon entering the village, the welcoming cool
            breeze, pollution-free atmosphere and the flourishing fields impart
            an enchanting experience. The lush green forest present there in all
            it’s magnificence, testifies the diligent work behind restoration
            and afforestation of the barren land into green. The scientific
            method developed by Prof. Malali Gowda (an expert in Genomics and
            Greenomics) has won the awards and accolades around the world and
            has inspired many to replicate the model in their native villages.
          </p>
          <img src={p1} alt="p1" />
          <p>
            This work started in the year 2001 in Anuganalu Village in Hassan
            District, Karnataka. The village was deforested (less than 10%
            vegetation) for agricultural purposes and people started facing
            acute water problem and lost all the local biodiversity. Prof.
            Malali Gowda formed a village self-help group to solve local
            climatic problems and initiated planting on public land Goomala (a
            rocky land which belongs to village community) and private (farmers
            - 70 families) land. Rocky-land (90% granite) has been converted
            into green land within 5 years. They have achieved this with the
            help of villagers' efforts & support by giving shramdaan (donation
            of labour) from all age groups.
          </p>
          <p>
            With the initial planting of Xerophytes like Agave on rock, creation
            of organic matter by these plants and the propagation of seeds by
            birds, the self-sustaining forest habitat on rocks has been created
            naturally.
          </p>
          <img src={p2} alt="p2" />
          <p>
            The increase in tree cover has improved the water level in and
            around Anuganalu to ~10 feet in open wells that can be seen at an
            arm's length during monsoon. The continuous efforts of Prof. Malali
            Gowda are supported by his family and friends, specially his mother,
            Lakshmiamma (24 May 2021, aged 85-86) who was the backbone of DNA
            Life and his brothers Krishnamurthy and Rajanna who play a pivotal
            role in sustaining the forest naturally by giving there valuable
            time & shramdaan.
          </p>
          <p>
            Anuganalu has inspired lacs of people as a model village to learn
            about DNA Life, biodiversity conservation and climate change
            mitigation and serves as a natural lab for practical learning of
            various activities like rainwater harvesting, rainforest
            development, mixed farming, Nati-Vaidya system, composting and
            manuring etc. This work has spread to several states in India with
            the help of our valuable volunteers and making an impact in
            addressing climate change through community participation. This will
            not only improve biodiversity, but also increase farmers' income and
            provide employment to rural communities.
          </p>
          <img src={p3} alt="p3" />
          <p>
            DNA Life Organisation urges all to join us in this endeavour to work
            for the environment, to unite with nature, to feel the life and
            emotions in all life forms and to understand nature while prospering
            in its love.
          </p>
        </div>
      </div>
    </div>
  );
}
