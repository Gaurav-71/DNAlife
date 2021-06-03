import { Button, Paper } from "@material-ui/core";
import React from "react";

import image from "../../assets/Gallery/picture.svg";

import { Link } from "react-router-dom";

export default function Post3({ data }) {
  return (
    <Paper elevation={15} className="post2-container">
      <div className="left">
        <Paper elevation={0} className="img-container">
          <img src={image} alt="icon" />
        </Paper>
        <div className="title-details">
          <h2>{data.title}</h2>
          <p className="post-date">Posted on {data.date.substring(0, 10)}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="right">
        <p className="post-desc">{data.description}</p>
        <div className="action-btn-container">
          <a href={data.link} target="_blank">
            <Button variant="contained" className="view mr">
              View
            </Button>
          </a>
        </div>
      </div>
    </Paper>
  );
}
