import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storage, storageRef } from "../../../firebase";

import { getData, deleteData, updateData, setSuccess } from "../../../actions";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ClearIcon from "@material-ui/icons/Clear";
import TitleIcon from "@material-ui/icons/Title";
import DeleteForever from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import ViewIcon from "@material-ui/icons/Visibility";

import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import LinkIcon from "@material-ui/icons/Link";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import TodayIcon from "@material-ui/icons/Today";
import ImageIcon from "@material-ui/icons/Image";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import UploadIcon from "@material-ui/icons/CloudUpload";

import CircularProgress from "@material-ui/core/CircularProgress";

import parse from "html-react-parser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AdminEduTour({ activityType }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [instance, setInstance] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(false);
  const [del, setDel] = useState(false);
  const activityReducerData = useSelector((state) =>
    activityType === "EducationalTours"
      ? state.educationTourReducer
      : activityType === "EcoProjects"
      ? state.ecoProjectReducer
      : activityType === "PlantationDrives"
      ? state.plantationDriveReducer
      : activityType === "CleaningMovements"
      ? state.cleaningMovementReducer
      : null
  );
  const isSuccess = useSelector((state) =>
    activityType === "EducationalTours"
      ? state.educationTourReducer.successful
      : activityType === "EcoProjects"
      ? state.ecoProjectReducer.successful
      : activityType === "PlantationDrives"
      ? state.plantationDriveReducer.successful
      : activityType === "CleaningMovements"
      ? state.cleaningMovementReducer.successful
      : "no op"
  );
  useEffect(() => {
    dispatch(getData(activityType));
  }, []);
  useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]); // for testing alerts

  const handleModalOpen = (instance) => {
    setInstance(instance);
    setTitle(instance.title);
    setDescription(instance.description);
    setLink(instance.link);
    setEventDate(instance.eventDate);
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
    setInstance([]);
    setTitle("");
    setDescription("");
    setLink("");
    setSelectedFile(null);
  };
  const handleViewOpen = (instance) => {
    setInstance(instance);
    setView(true);
  };
  const handleViewClose = () => {
    setView(false);
    setInstance([]);
  };
  let activities = activityReducerData.activities;
  const deleteActivity = (id, type, filename) => {
    setDel(true);
    const delOldImg = storageRef.child(type + "/" + filename);
    // Delete the file
    delOldImg
      .delete()
      .then(() => {
        dispatch(deleteData(type, id));
        setAction("Delete");
        setOpen(true);
        setDel(false);
      })
      .catch((err) => {
        console.log(err);
        setDel(false);
      });
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
  const handleSubmission = () => {
    console.log("in handle");
    console.log("submitted", selectedFile);
  };
  // for updating
  const onSubmit = (e) => {
    e.preventDefault();
    let fileDate = Date.now();
    setLoading(true);
    const data = {
      _id: instance._id,
      type: activityType,
      title,
      description,
      eventDate,
      link,
    };
    if (selectedFile) {
      const delOldImg = storageRef.child(data.type + "/" + instance.filename);
      // Delete the file
      delOldImg
        .delete()
        .then(() => {
          // File deleted successfully
          let path = "/" + data.type + "/" + selectedFile.name + fileDate;
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
                .ref("/" + data.type)
                .child(selectedFile.name + fileDate)
                .getDownloadURL()
                .then((fireBaseUrl) => {
                  data.filename = selectedFile.name + fileDate;
                  data.url = fireBaseUrl;
                  dispatch(updateData(data.type, data));
                  setAction("Update");
                  setOpen(true);
                  handleModalClose();
                  setLoading(false);
                });
            }
          );
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error);
          setLoading(false);
        });
    } else {
      data.filename = instance.filename;
      data.url = instance.url;
      dispatch(updateData(data.type, data));
      setAction("Update");
      setOpen(true);
      handleModalClose();
      setLoading(false);
    }
  };
  return (
    <div>
      {activities.map((activity) => (
        <Paper key={activity._id} elevation={15} square className="paper">
          <Typography variant="h6" className="paper-title" color="primary">
            {activity.title}
          </Typography>
          <div className="actions">
            <Button
              type="submit"
              variant="contained"
              className="action-btn mr"
              startIcon={<ViewIcon />}
              onClick={() => {
                handleViewOpen(activity);
              }}
            >
              View
            </Button>
            <Button
              type="submit"
              className="action-btn mr"
              style={{
                backgroundColor: "#009688",
                color: "white",
              }}
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => {
                handleModalOpen(activity);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="action-btn"
              onClick={() => {
                deleteActivity(activity._id, activity.type, activity.filename);
              }}
              startIcon={<DeleteForever />}
            >
              Delete
            </Button>
          </div>
        </Paper>
      ))}
      <Dialog
        open={view}
        TransitionComponent={Transition}
        keepMounted
        className="dialog"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleViewClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          className="dialog-title"
          color="primary"
          id="alert-dialog-slide-title"
        >
          View Activity
        </DialogTitle>
        <DialogContent className="dialog-content">
          <form className="post-content">
            <div className="tf-wrapper">
              <TitleIcon />
              <p className="label">{instance.title}</p>
            </div>
            <div className="tf-wrapper">
              <TodayIcon />
              <p className="label">{instance.eventDate}</p>
            </div>
            <div className="tf-wrapper">
              <DescriptionIcon />
              <p className="label">
                <div
                  dangerouslySetInnerHTML={{
                    __html: instance.description,
                  }}
                />
              </p>
            </div>
            <div className="tf-wrapper">
              <LinkIcon />
              <p className="label">{instance.link}</p>
            </div>
            <div className="tf-wrapper">
              <ImageIcon />
              <p className="label">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={instance.url}
                />
              </p>
            </div>
            <DialogActions
              style={{ background: "#0e1217", padding: "0.5rem 0 2rem" }}
            >
              <Button
                onClick={handleViewClose}
                variant="contained"
                startIcon={<ClearIcon />}
                color="secondary"
              >
                Close
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        className="dialog"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          className="dialog-title"
          color="primary"
          id="alert-dialog-slide-title"
        >
          Edit Activity
        </DialogTitle>
        <DialogContent className="dialog-content ">
          <form onSubmit={onSubmit} className="post-content">
            <div className="tf-wrapper">
              <TitleIcon />
              <TextField
                id={"tf1" + instance._id}
                value={title}
                label="Title"
                variant="filled"
                onChange={(e) => setTitle(e.target.value)}
                className="input"
              />
            </div>
            <div className="tf-wrapper">
              <TodayIcon />
              <TextField
                id={"tf10" + instance._id}
                value={eventDate}
                label="Event Date / Tagline"
                variant="filled"
                onChange={(e) => setEventDate(e.target.value)}
                className="input"
              />
            </div>
            <div className="tf-wrapper">
              <DescriptionIcon />
              <TextField
                id={"tf2" + instance._id}
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
                id={"tf3" + instance._id}
                className="input"
                label="Link"
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
            {!loading ? (
              <DialogActions
                className="edit-dialog-content-actions"
                style={{
                  background: "#0e1217",
                }}
              >
                <div className="tf-wrapper1">
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
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
                      className="upload-button ml"
                    >
                      Update Image
                    </Button>
                  </label>
                </div>
                <div className="main-actions mla">
                  <Button
                    onClick={handleModalClose}
                    variant="contained"
                    startIcon={<ClearIcon />}
                    color="secondary"
                    className="cancel-button"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="ml"
                    style={{
                      backgroundColor: "#009688",
                      color: "white",
                    }}
                    variant="contained"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </div>
              </DialogActions>
            ) : (
              <div className="loading">
                <CircularProgress
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "0.5rem",
                  }}
                />{" "}
                <p style={{ paddingLeft: "1.5rem" }}>Saving Changes ...</p>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>
      {/* <ul>
        {activitys.map(({ _id, title, description }) => (
          <li style={{ marginBottom: "1rem" }} key={_id}>
            <Button
              onClick={() => {
                deleteAnnouncement(_id);
              }}
              variant="contained"
            >
              Delete
            </Button>
            {_id} | {title} | {description}
          </li>
        ))}
      </ul> */}
      {isSuccess == "true" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Acivity {action + "d"} successfully !
          </Alert>
        </Snackbar>
      ) : isSuccess == "false" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Couldn't {action} activity !
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
      <Snackbar
        open={del}
        autoHideDuration={6000}
        onClose={() => setDel(false)}
      >
        <Alert onClose={() => setDel(false)} severity="error">
          Deleting ...
        </Alert>
      </Snackbar>
    </div>
  );
}
