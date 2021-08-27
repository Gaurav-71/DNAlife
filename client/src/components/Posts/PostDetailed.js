import { Button, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Heading from "../Heading/Heading";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function Post({ data }) {
  const classes = useStyles();

  let { id } = useParams();

  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImgLoaded(true);
  };

  const handleImageErrored = () => {
    setImgLoaded(false);
    console.log("Couldn't load image, Please refresh");
  };

  return (
    <div className="page">
      <Heading pageTitle={data.title} />
      <div className="details">
        {data.eventDate && <h4>{data.eventDate}</h4>}
      </div>
      <img
        onLoad={handleImageLoaded}
        onError={handleImageErrored}
        src={data.url}
        alt="post-img"
      />
      {imgLoaded ? (
        ""
      ) : (
        <div className={classes.root}>
          <LinearProgress />
        </div>
      )}
      <h1>Description</h1>
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
  );
}
