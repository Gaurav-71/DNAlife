import React from 'react';
import Divider from '@material-ui/core/Divider';

import "./Courses.scss";

import graphic from "../../../assets/Courses/undraw_online_cv_qy9w.svg";

import Heading from "../../../components/Heading/Heading";

export default function Courses(){
  return(
    <div className="page courses-page">
      <Heading elevation={15} pageTitle="Certificate Courses" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="courses" />
        </div>
        <div className="right">
          <h1>Earn a career credential</h1>
          <h4>Prepare for a certification with our professional certificate programs</h4>
          <Divider style={{backgroundColor:'#919191', width: '100%', margin: '2rem 0'}} />
          <p>Join our short term online/onsite interdisciplinary courses on mixed farming,
            rainforests, biodiversity and gardening etc. featuring live demonstration and
            interaction with farmers, environmentalists, conservationists and eco-educators.</p>
          <button className="btn">View Oppurtunities</button>
        </div>
      </div>
    </div>
  );
}
