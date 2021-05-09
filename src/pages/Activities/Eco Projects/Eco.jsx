import React from 'react';
import Divider from '@material-ui/core/Divider';

import "../Activities.scss";

import graphic from "../../../assets/Eco Projects/Artboard 1.png";

import Heading from "../../../components/Heading/Heading";

export default function Eco(){
  return(
    <div className="page internship-page">
      <Heading elevation={15} pageTitle="Eco Projects" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="internship" />
        </div>
        <div className="right">
          <h1>Mother Earth Needs Us !</h1>
          <h4>We know you love the Earth and we want to help protect it.</h4>
          <Divider style={{backgroundColor:'#919191', width: '100%', margin: '2rem 0'}} />
          <p>Together, we can heal our Planet and return its glory that is lost due to over
            exploitation and sheer negligence of ages. We are strong when we are with
            nature!
            DNA Life Organisation is striving towards climate change mitigation through
            various projects and initiatives based Good Agricultural Practices (GAP) to
            improve the safety and quality of the produce while protecting the environment.</p>
          <button className="btn">View Tours</button>
        </div>
      </div>
    </div>
  );
}




