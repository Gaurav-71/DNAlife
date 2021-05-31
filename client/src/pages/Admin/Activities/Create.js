import React, { useEffect, useState } from "react";
import { storage } from "../../../firebase";

import img from "../../../assets/Landing/pexels-pixabay-414171.jpg";

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
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);

  let isSuccess = useSelector((state) => state.announcementReducer.successful);

  const changeHandler = (event) => {
    console.log("in change");
    setSelectedFile(event.target.files[0]);
    handlePreview(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleType = (event) => {
    setType(event.target.value);
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
    setType("");
    setTitle("");
    setDescription("");
    setLink("");
    setEventDate("");
    setSelectedFile(null);
    setIsFilePicked(false);
    setPreview(null);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedFile === null || type === "") {
      console.error("No image ");
      alert("Please add image");
      clear();
    } else {
      let path = "/" + type + "/" + selectedFile.name;
      const uploadTask = storage.ref(path).put(selectedFile);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage
            .ref("/" + type)
            .child(selectedFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              let postData = {
                type,
                title,
                description,
                eventDate,
                link,
                filename: selectedFile.name,
                url: fireBaseUrl,
              };
              dispatch(addData(type, postData));
              setOpen(true);
              clear();
            });
        }
      );
    }
  };
  return (
    <div className="activities-create" style={{ padding: "1.5rem" }}>
      <div className="wrapper">
        <Paper
          className="post-wrapper"
          square
          variant="elevation"
          elevation={15}
          style={{ width: "100%" }}
        >
          <form onSubmit={onSubmit} className="post-content">
            <div className="tf-wrapper">
              <Type />
              <FormControl
                style={{ width: "100%", marginLeft: "1.5rem" }}
                className={classes.formControl}
              >
                <InputLabel filled id="demo-simple-select-label">
                  Activity Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  onChange={handleType}
                >
                  <MenuItem value="EducationalTours">
                    Educational Tours
                  </MenuItem>
                  <MenuItem value="EcoProjects">Eco Projects</MenuItem>
                  <MenuItem value="PlantationDrives">
                    Plantation Drives
                  </MenuItem>
                  <MenuItem value="CleaningMovements">
                    Cleaning Movements
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

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
              <TodayIcon />
              <TextField
                id="tf4"
                className="input"
                label="Activity Date"
                variant="filled"
                value={eventDate}
                multiline
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
            <div className="tf-wrapper">
              <DescriptionIcon />
              <TextField
                id="tf2"
                className="input"
                label="Description"
                variant="filled"
                value={description}
                multiline
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="tf-wrapper">
              <LinkIcon />
              <TextField
                id="tf3"
                className="input"
                label="Registration Link"
                variant="filled"
                value={link}
                onChange={(e) => setLink(e.target.value)}
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
            <div className="actions">
              <div className="tf-wrapper1">
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={changeHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    onClick={handleSubmission}
                    startIcon={<UploadIcon />}
                    variant="contained"
                    component="span"
                  >
                    Upload Image
                  </Button>
                </label>
              </div>
              <div className="main-action">
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
            </div>
          </form>
        </Paper>
        <div className="preview">
          <Paper elevation={15} square className="preview-title">
            Post Preview
          </Paper>
          {title || eventDate || preview || description || link ? (
            <Paper elevation={15} square className="card">
              {title || eventDate ? (
                <div className="title">
                  <div className="details">
                    <h1>{title}</h1>
                    <h4>{eventDate}</h4>
                  </div>
                </div>
              ) : (
                ""
              )}
              {preview || description ? (
                <div className="body">
                  <img src={preview} alt="" />
                  <p>{description}</p>
                </div>
              ) : (
                ""
              )}
              {link ? (
                <div className="actions">
                  <Button fullWidth variant="contained" color="primary">
                    Register
                  </Button>
                </div>
              ) : (
                ""
              )}
            </Paper>
          ) : (
            ""
          )}
        </div>
      </div>
      {isSuccess == "true" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Activity posted succesfully !
          </Alert>
        </Snackbar>
      ) : isSuccess == "false" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Couldn't save activity, Please try again !
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}
