import React from 'react';

import {Members} from "./All";
import Heading from "../../components/Heading/Heading";

import "./Team.scss";

export default function Team(){
  return(
    <div className="page">
      <Heading pageTitle={"Team"} />
      <section className="members-wraps">
            {Members.map((member, index) => {
              return (
                <section className="member" key={index}>
                  <img src={member.src} alt="team-member"/>
                  <h3>{member.name}</h3>
                  <h5>{member.position}</h5>
                </section>
              );
            })}
            </section>
    </div>
  );
}

