import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addData, setSuccess } from "../../../actions";

import ClearIcon from "@material-ui/icons/Clear";
import PublishIcon from "@material-ui/icons/Publish";
import TitleIcon from "@material-ui/icons/Title";

import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import LinkIcon from "@material-ui/icons/Link";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Create() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const isSuccess = useSelector((state) => state.photoReducer.successful);
  const clear = () => {
    setTitle("");
    setDescription("");
    setLink("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      type: "Photos",
      title,
      description,
      link,
    };
    dispatch(addData("Photos", data));
    clear();
    setOpen(true);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    dispatch(setSuccess("no op"));
  };
  return (
    <div style={{ width: "100%" }}>
      <Paper
        square
        variant="elevation"
        elevation={15}
        style={{ width: "100%" }}
      >
        <form onSubmit={onSubmit} className="post-content">
          <div className="tf-wrapper">
            <TitleIcon />
            <TextField
              id="tf1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              label="Post Title"
              variant="filled"
            />
          </div>
          <div className="tf-wrapper">
            <DescriptionIcon />
            <TextField
              id="tf2"
              className="input"
              label="Description ( HTML Editable )"
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
            />
          </div>
          <div className="tf-wrapper">
            <LinkIcon />
            <TextField
              id="tf3"
              className="input"
              label="Link"
              variant="filled"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="actions">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => clear()}
              style={{ marginRight: "1rem" }}
              startIcon={<ClearIcon />}
            >
              Clear
            </Button>
            <Button
              type="submit"
              style={{ backgroundColor: "#009688", color: "white" }}
              variant="contained"
              startIcon={<PublishIcon />}
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
      {isSuccess == "true" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Photo posted succesfully !
          </Alert>
        </Snackbar>
      ) : isSuccess == "false" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Couldn't save photo, Please try again !
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}
