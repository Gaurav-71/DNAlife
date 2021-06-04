import React from "react";

import { Link } from "react-router-dom";

import Landing from "../../pages/Landing/Landing.js";
import Gallery from "../../components/Gallery/Gallery.js";

import "./Home.scss";

import { Members } from "../Team/Home";

import line from "../../assets/Home/line.png";

//partners

import yene from "../../assets/Partners/yene.jpg";
import bms from "../../assets/Partners/bms.jpg";
import nelson from "../../assets/Partners/nelson.jpg";
import rotary from "../../assets/Partners/rotary.jpg";
import sgi from "../../assets/Partners/sgi.jpg";

export default function Home() {
  return (
    <div className="page home-page">
      <Landing />
      <section className="common parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <div className="title">
            <h1>About Us</h1>
            <img src={line} alt="line" />
          </div>
          <div className="body">
            <p>
              DNA Life Organisation was established in 2016 under Indian Trust
              Act with the objective of establishing greener environment by
              engaging local communities to restore forest ecosystems and
              promote sustainable land management and livelihood approaches. DNA
              Life Organisation offers training on agriculture practices, social
              forestry, mixed farming and rural livelihood.
            </p>
            <Link to="/about-us" className="about-button">
              Read more
            </Link>
          </div>
        </section>
      </section>
      <section className="activities parallax-container">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <Link
            to="/activities/educational-tours"
            className="rect a-one parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Educational Tours</h2>
              <div className="info-snippet">
                <p>
                  Join the adventure with DNA Life to understand different tools
                  and techniques of farming
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
          <Link
            to="/activities/educational-tours"
            className="rect a-two parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Eco Projects</h2>
              <div className="info-snippet">
                <p>
                  Together, we can heal our Planet and return its glory that is
                  lost due to over exploitation and sheer negligence of ages.
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
          <Link
            to="/activities/educational-tours"
            className="rect a-three parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Plantation Drives</h2>
              <div className="info-snippet">
                <p>
                  Join The Tree Warriors To Increase India's Green Cover.
                  Plantation Drive To Increase India's Green Cove.{" "}
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
          <Link
            to="/activities/educational-tours"
            className="rect a-four parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Cleaning Movements</h2>
              <div className="info-snippet">
                <p>
                  Let's come together and adopt practices that promote
                  sustainability, reuse, recycling and waste minimisation.
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
        </section>
      </section>
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
      <section className="landing-nelson parallax-container">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="nelson-content">
          <h2>MS Program With Nelson Institute For Environmental Studies</h2>
          <p>
            The Nelson Institute is home to three interdisciplinary research
            centers that serve as laboratories and incubators to solve today's
            most challenging environmental issues through interdisciplinary
            research through hands-on educational initiatives that bridge
            classrooms and communities; and through public programs that foster
            environmental conversation among people. The MS program spans 15
            months: Courses in Madison,Wisconsin, at Nelson Institute, USA
          </p>
          <div className="btn-container">
            <Link
              to="/education/ms-program/nelson-institute-for-environmental-studies"
              className="transparent-button"
            >
              Know More
            </Link>
          </div>
        </section>
      </section>
      <section className="team parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <div className="title">
            <h1>Team</h1>
            <img src={line} alt="line" />
          </div>
          <div className="body">
            <section className="members-wrap">
              {Members.map((member, index) => {
                return (
                  <section className="member" key={index}>
                    <img src={member.src} alt="team-member" />
                    <h3>{member.name}</h3>
                    <h5>{member.position}</h5>
                  </section>
                );
              })}
            </section>

            <section className="more">
              <Link className="link" to="/team">
                Click here,
              </Link>
              <p>
                to view the list of directors, members and activists who make us
                a valuable team of professionals
              </p>
            </section>
          </div>
        </section>
      </section>
      <section className="education parallax-container ">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <Link
            to="/activities/educational-tours"
            className="rect one parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Internships</h2>
              <div className="info-snippet">
                <p>
                  Get discovered. Introduce yourself, and we’ll get in touch
                  with you if there’s a role that seems like a good match.
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
          <Link
            to="/activities/educational-tours"
            className="rect two parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Trainings</h2>
              <div className="info-snippet">
                <p>
                  Join us to learn and implement eco-friendly practices and
                  contribute to the conservation of nature.
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
          <Link
            to="/activities/educational-tours"
            className="rect three parallax-container"
          >
            <div className="parallax-wrap">
              <div className="parallax-inner"></div>
            </div>
            <section className="rect-content">
              <h2>Certificate Courses</h2>
              <div className="info-snippet">
                <p>
                  Prepare for a certification with our professional certificate
                  programs.
                </p>
                <button className="transparent-button">View</button>
              </div>
            </section>
          </Link>
        </section>
      </section>
      <section className="common parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <div className="title">
            <h1>Join Us</h1>
            <img src={line} alt="line" />
          </div>
          <div className="body">
            <p>
              Join The Green Team ! We are always on the lookout for passionate,
              determined and like-minded people to join us and make a difference
              to the society with green initiatives to mitigate climate change
              and much more.
            </p>
            <Link to="/join-us" className="about-button">
              Become a member now
            </Link>
          </div>
        </section>
      </section>
      <section className="gallery parallax-container">
        <Gallery />
      </section>
    </div>
  );
}
