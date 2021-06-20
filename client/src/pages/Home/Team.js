import React from "react";

import { Members } from "../Team/Home";

import { Link } from "react-router-dom";

import line from "../../assets/Home/line.png";

export default function Team() {
  return (
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
              to view the list of directors, members and activists who make us a
              valuable team of professionals
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}
