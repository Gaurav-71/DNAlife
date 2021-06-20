import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";

import { useDispatch, useSelector } from "react-redux";
import { addData, setSuccess } from "../../../../actions";

import ClearIcon from "@material-ui/icons/Clear";
import PublishIcon from "@material-ui/icons/Publish";
import TitleIcon from "@material-ui/icons/Title";

import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import LinkIcon from "@material-ui/icons/Link";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Type from "@material-ui/icons/ClearAll";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TodayIcon from "@material-ui/icons/Today";
import ScheduleIcon from "@material-ui/icons/Schedule";
import UploadIcon from "@material-ui/icons/CloudUpload";
import ImageIcon from "@material-ui/icons/Image";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: "none",
  },
}));

export default function Create() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  let isSuccess = useSelector((state) => state.announcementReducer.successful);

  const changeHandler = (event) => {
    // console.log("in change");
    setSelectedFile(event.target.files[0]);
    handlePreview(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handlePreview = (img) => {
    const imgURL = URL.createObjectURL(img);
    setPreview(imgURL);
    console.log(imgURL);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    dispatch(setSuccess("no op"));
  };
  const handleSubmission = () => {
    console.log("in handle");
    console.log("submitted", selectedFile);
  };
  const clear = () => {
    setTitle("");
    setSelectedFile(null);
    setIsFilePicked(false);
    setPreview(null);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let fileDate = Date.now();
    setLoading(true);
    window.scrollTo(0, 0);
    if (selectedFile === null) {
      console.error("No File ");
      alert("Please add File");
      clear();
      setLoading(false);
    } else {
      let path = "/" + "Documentations" + "/" + selectedFile.name + fileDate;

      const uploadTask = storage.ref(path).put(selectedFile);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
        },
        (err) => {
          //catches the errors
          console.log(err);
          setLoading(false);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage
            .ref("/" + "Documentations")
            .child(selectedFile.name + fileDate)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              console.log("posted");
              let postData = {
                type: "Documentations",
                title,

                filename: selectedFile.name + fileDate,
                url: fireBaseUrl,
              };
              dispatch(addData("Documentations", postData));
              dispatch(
                addData("Announcements", {
                  type: "Documentations",
                  title: "",
                  description: title,
                  link: fireBaseUrl,
                })
              );
              setOpen(true);
              clear();
              setLoading(false);
            });
        }
      );
    }
  };
  return (
    <div className="admin-annoucements" style={{ padding: "1.5rem" }}>
      <div className="wrapper">
        {!loading ? (
          <Paper
            className="post-wrapper"
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
              {selectedFile ? (
                <div className="tf-wrapper">
                  <ImageIcon />
                  <TextField
                    id="tf3"
                    disabled
                    className="input"
                    label="Photo Filename"
                    variant="filled"
                    value={selectedFile.name}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="d-actions">
                <div className="tf-wrapper1">
                  <input
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={changeHandler}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      onClick={handleSubmission}
                      startIcon={<UploadIcon />}
                      variant="contained"
                      component="span"
                      className="upload-button"
                    >
                      Upload File
                    </Button>
                  </label>
                </div>
                <div className="main-action">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => clear()}
                    className="mr"
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
              </div>
            </form>
          </Paper>
        ) : (
          <div className="preview">
            <div className="preview-title">
              <CircularProgress
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "0.5rem",
                }}
              />
              <p style={{ paddingLeft: "1.5rem" }}>Uploading Post ...</p>
            </div>
          </div>
        )}
      </div>
      {isSuccess == "true" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Documentation posted succesfully !
          </Alert>
        </Snackbar>
      ) : isSuccess == "false" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Couldn't save documentation, Please try again !
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}
