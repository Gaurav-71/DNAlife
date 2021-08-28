import React, { lazy, Suspense } from "react";

import { Link } from "react-router-dom";

import "./Home.scss";

import line from "../../assets/Home/line.png";

import Landing from "../../pages/Landing/Landing.js";

const ActivityComp = lazy(() => import("./ActivityComp.js"));
const PartnersComp = lazy(() => import("./PartnersComp.js"));
const MSComp = lazy(() => import("./MS.js"));
const DonateComp = lazy(() => import("./Donate.js"));
const AwardsComp = lazy(() => import("./Awards.js"));
const TeamComp = lazy(() => import("./Team.js"));
const VillageComp = lazy(() => import("./Village.js"));
const EducationComp = lazy(() => import("./EducationComp.js"));
const Gallery = lazy(() => import("../../components/Gallery/Gallery.js"));

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
            <a
              href="https://firebasestorage.googleapis.com/v0/b/dnalife-website.appspot.com/o/General%2FDNA%20Life%20One%20Page.pdf?alt=media&token=abc69452-3949-4d47-861f-a2539ddd0870"
              className="about-button"
              download
              target="_blank"
            >
              Download Brochure
            </a>
          </div>
        </section>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <ActivityComp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PartnersComp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MSComp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TeamComp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <EducationComp />
      </Suspense>
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
              Become a volunteer now
            </Link>
          </div>
        </section>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <DonateComp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AwardsComp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <VillageComp />
      </Suspense>
      <section className="gallery parallax-container">
        <section className="content">
          <div className="title">
            <h1>Gallery</h1>
            <img src={line} alt="line" />
          </div>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
      </section>
    </div>
  );
}

// contact us
{
  /* <section className="common parallax-container black">
        <div className="parallax-wrap">
          <div className="parallax-inner"></div>
        </div>
        <section className="content">
          <div className="title">
            <h1>Contact Us</h1>
            <img src={line} alt="line" />
          </div>
          <div className="body">
            <p>
              Feel free to contact us anytime with your queries, we are always
              at your service !
            </p>
            <Link to="/contact-us" className="about-button">
              Get In Touch
            </Link>
          </div>
        </section>
      </section> */
}
