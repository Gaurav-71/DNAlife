import React from 'react';
import Divider from '@material-ui/core/Divider';

import "../Activities.scss";

import graphic from "../../../assets/Plantation/Artboard 3.png";

import Heading from "../../../components/Heading/Heading";

export default function Plantation(){
  return(
    <div className="page internship-page">
      <Heading elevation={15} pageTitle="Plantation Drives" />
      <div className="page-content">
        <div className="left">
          <img src={graphic} alt="internship" />
        </div>
        <div className="right">
          <h1>Plant For The Future</h1>
          <h4>Join The Tree Warriors To Increase India's Green Cover</h4>
          <Divider style={{backgroundColor:'#919191', width: '100%', margin: '2rem 0'}} />
          <p>Plantation Drive To Increase India's Green Cove. Tree Plantation drives combat many environmental issues like deforestation, erosion of soil, desertification in semi-arid areas, global warming and hence enhancing the beauty and balance of the environment</p>
          <button className="btn">View Oppurtunities</button>
        </div>
      </div>
    </div>
  );
}




