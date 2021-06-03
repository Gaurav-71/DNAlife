import { Button, Paper } from "@material-ui/core";
import React from "react";

export default function Post({ data }) {
  return (
    <Paper elevation={15} square className="post-card">
      <div className="title">
        <div className="details">
          <h1>{data.title}</h1>
          {data.eventDate && <h4>{data.eventDate}</h4>}
        </div>
      </div>
      <div className="body">
        <img src={data.url} alt="" />
        {data.description && (
          <p>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />
          </p>
        )}
      </div>
      <div className="actions">
        <a href={data.link} target="_blank">
          <Button fullWidth variant="contained" color="primary">
            Register
          </Button>
        </a>
      </div>
    </Paper>
  );
}
