import { Button, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function Post({ data }) {
  const classes = useStyles();

  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImgLoaded(true);
  };

  const handleImageErrored = () => {
    setImgLoaded(false);
    console.log("Couldn't load image, Please refresh");
  };

  return (
    <Paper elevation={15} square className="post-card">
      <div className="title">
        <div className="details">
          <h1>{data.title}</h1>
          {data.eventDate && <h4>{data.eventDate}</h4>}
        </div>
      </div>
      <div className="body">
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
