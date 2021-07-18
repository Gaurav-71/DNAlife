import React from "react";

import { Members } from "./All";
import Heading from "../../components/Heading/Heading";

import "./Team.scss";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: "#1e1e1e",
  },
  media: {
    height: 300,
  },
}));

export default function Team() {
  const classes = useStyles();
  return (
    <div className="page">
      <Heading pageTitle={"Team"} />
      <section className="members-wraps">
        {Members.map((member, index) => {
          return (
            <Card elevation={10} className={classes.root} key={index}>
              <div className="details">
                {member.link != null ? (
                  <a href={member.link} target="_blank">
                    <h1>{member.name}</h1>
                  </a>
                ) : (
                  <h1>{member.name}</h1>
                )}
                <h4>{member.position}</h4>
              </div>
              <CardMedia
                className={classes.media}
                image={member.src}
                title={member.name}
              />
            </Card>
          );
        })}
      </section>
      <div
        style={{
          width: "100%",
          borderTop: "2px solid #e07d06",
          margin: "1rem 0 2rem",
        }}
      >
        <Heading pageTitle={"Acknowledgements"} />
      </div>
      <ul className="ack">
        <li>
          The people of Anuganalu village for their generous gift of barren land
          for the genesis of DNA Life institute. The success of today’s DNA Life
          work is due to the backbone support from Anuganalu and surrounding
          villagers who care the most for DNA Life.
        </li>
        <li>
          Late Sri Ramenahalli Range Gowda’s family, relatives and friends for
          their priceless support and encouragement provided to Prof. Malali
          Gowda (founder, DNA Life) for implementing the afforestation work with
          DNA Life at Anuganalu Village.
        </li>
        <li>
          Prof. Malali Gowda’s family and friends, specially his mother, Late
          Smt. Lakshmiamma (24 May 2021, aged 85-86) who was the backbone of DNA
          Life and his brothers Krishnamurthy, Kumar and Rajanna who play a
          pivotal role in sustaining the forest naturally.
        </li>
        <li>
          Krishi Vigyan Kendra, Kandali, Hassan; Department of Watershed,
          Hassan; Department of Horticulture, Hassan; Wild life Society, Hassan;
          Taluk and Zilla Panchayat, Hassan; Karnataka Biodiversity Board,
          Bangalore; Jalakoota, Kasaragod and Center for Alternative
          Agricultural Media, Dharwad for their support and also for
          implementing some of the eco-agricultural work at the DNA Life campus.
        </li>
        <li>
          Dr Raj Rajaram for his invaluable guidance and devising step-wise easy
          to follow strategies to promote the mission of DNA Life.
        </li>
        <li>
          Mr. Sivaramakrishnan Muthusamy, Mr. Jayanth G.Ranganath, Mr. Carl
          Clemens, Ms. Roopalakshmi K. and Mr. Vishwesha Guttal for inspiration
          and support to DNA Life and their generous help in building DNA Life’s
          previous website.
        </li>
        <li>
          Mrs. Mohabbat Afza for being instrumental in supporting and sponsoring
          DNA Life activities in Delhi and Bengaluru, India.
        </li>
        <li>
          Mr. Jayanth G.Ranganath for his help in writing most of DNA Life
          activities in the old website.
        </li>
        <li>
          Ms. Fatima Tuz Zehra for her indispensable support and devotion to DNA
          Life's mission, supporting the education of farmers' children,
          documenting events and content writing.
        </li>
        <li>
          Mr. Clement Francis for providing us his photograph as the logo in the
          previous DNA Life website.
        </li>
        <li>
          Mr. Mahantesh Veerapur for successfully replicating Anuganalu model in
          his village and coordinating DNA Life's activities.
        </li>
        <li>
          Mr. Nagendra M Chander for creating DNA Life Organisation’s logo,
          documenting and maintaining previous website.
        </li>
        <li>
          Mr. Prasanna S. Koti and Mrs. Annapoorna Prabhu for supporting DNA
          Life's activities and maintaining previous website.
        </li>
        <li>
          Gaurav V, Divya, Fatima Tuz Zehra for the new website building
          (publishing date: June 17, 2021).
        </li>
        <li>
          Basawraj, Nijalingappa, Prasanna Kumar, Mahantesh Veerapur, Hallappa,
          Chandrashekar for their help in building local team at Anuganalu.
        </li>
        <li>
          Our young volunteers, Lokranjan, Sachith Veerapur and Aaditya Prabhu
          for being actively involved as a part of DNA Life's kids’ team.
        </li>
        <li>
          Dr. K. S. Shashidhar, Institute of Wood Science and Technology,
          Bangalore, India for providing a folk song on Seegegudda (rain-hill).
        </li>
        <li>
          Nature conservation volunteer team (Jayanth G R, Shankar S, Ramanan,
          Chandrachud M, Sivaramakrishnan M, Vishwesha G, Sachit Rao, Tejaswi N
          V and Venkataraghavan R), which coordinated by the courtesy of Mr.
          Jayanth G.R (Email: gobbalipur-ranga.1@osu.edu) at The Ohio State
          University Columbus, who made donations to DNA Life activities in
          2005.
        </li>
        <li>
          The Karnataka State Government for recognizing and appreciating DNA
          Life by awarding prestigious Dr. A.P.J. Abdul Kalam Environment Award
          for the year 2006-2007.
        </li>
        <li>
          The Association for India’s Development (AID), Columbus Chapter
          (http://columbus.aidindia.org) at The Ohio State University Columbus,
          which sponsored a project ($3000) in February 2006 to carryout
          afforestation in seven villages around the DNA Life campus.
        </li>
        <li>
          The Rays of Hope Foundation (RHF), Columbus, USA for joining hands
          with DNA Life to create awareness among school students and farmers on
          environment and forest eco-system.
        </li>
        <li>
          New England BioLabs for conferring Passion in Science Award
          (Environmental Stewardship) to Prof. Malali Gowda in recognition of
          DNA Life's activities to re-forest any barren or rocky land in short
          period, resulting in an increase in vegetation cover, ground-water and
          biodiversity.
        </li>
        <li>
          Dr. Nandini Dholepat for the expert guidance towards environmental
          conservation and inception of eco-educational tours.
        </li>
        <li>
          The ‘Nelson Institute of Environmental Studies' for joining hands with
          DNA Life Organisation for MS-Programs involving research in India to
          train conservation leaders.
        </li>
        <li>
          Ranganath, Retired Bank Officer and Environmentalist, he supported DNA
          Life by sponsoring 400 Horticultural and Medicinal Plants to
          villagers.
        </li>
        <li>
          Our valuable volunteers' team for their dedication in propagating the
          Mission Green.
        </li>
      </ul>
    </div>
  );
}
