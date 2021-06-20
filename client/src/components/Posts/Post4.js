import { Paper } from "@material-ui/core";
import React from "react";

import doc from "../../assets/Announcements/document.png";
import news from "../../assets/Announcements/newspaper.png";
import resources from "../../assets/Announcements/resources.svg";

export default function Post2({ data }) {
  return (
    <Paper elevation={15} className="post2-container">
      <div className="left">
        <Paper elevation={0} className="img-container">
          {data.type == "Documentations" ? (
            <img src={doc} alt="icon" />
          ) : data.type == "Resources" ? (
            <img src={resources} alt="icon" />
          ) : (
            <img src={news} alt="icon" />
          )}
        </Paper>
        <div className="title-details">
          {data.url != null ? (
            <a href={data.url} target="_blank">
              <h2>{data.title}</h2>
            </a>
          ) : (
            <a href={data.link} target="_blank">
              <h2>{data.title}</h2>
            </a>
          )}
          <p className="post-date-1">Posted on 12-06-200</p>
        </div>
      </div>
    </Paper>
  );
}
