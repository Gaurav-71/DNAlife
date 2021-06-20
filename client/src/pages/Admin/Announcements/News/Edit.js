import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storage, storageRef } from "../../../../firebase";

import {
  getData,
  deleteData,
  updateData,
  setSuccess,
} from "../../../../actions";

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

export default function AdminEduTour() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [instance, setInstance] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(false);
  const [del, setDel] = useState(false);
  const newsReducerData = useSelector((state) => state.newsReducer);
  const isSuccess = useSelector((state) => state.newsReducer.successful);
  useEffect(() => {
    dispatch(getData("Newss"));
  }, []);
  useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]); // for testing alerts

  const handleModalOpen = (instance) => {
    setInstance(instance);
    setTitle(instance.title);
    setLink(instance.link);
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
    setInstance([]);
    setTitle("");
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
  let newss = newsReducerData.newss;
  const deleteNews = (id, filename) => {
    setDel(true);
    if (filename) {
      const delOldImg = storageRef.child("Newss" + "/" + filename);
      // Delete the file
      delOldImg
        .delete()
        .then(() => {
          dispatch(deleteData("Newss", id));
          setAction("Delete");
          setOpen(true);
          setDel(false);
        })
        .catch((err) => {
          console.log(err);
          setDel(false);
        });
    } else {
      dispatch(deleteData("Newss", id));
      setAction("Delete");
      setOpen(true);
      setDel(false);
    }
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
      type: "Newss",
      title,
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
      {newss.map((news) => (
        <Paper key={news._id} elevation={15} square className="paper">
          <Typography variant="h6" className="paper-title" color="primary">
            {news.title}
          </Typography>
          <div className="actions">
            <Button
              type="submit"
              variant="contained"
              className="action-btn mr"
              startIcon={<ViewIcon />}
              onClick={() => {
                handleViewOpen(news);
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
                handleModalOpen(news);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="action-btn"
              onClick={() => {
                deleteNews(news._id, news.filename);
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
          View News
        </DialogTitle>
        <DialogContent className="dialog-content">
          <form className="post-content">
            <div className="tf-wrapper">
              <TitleIcon />
              <p className="label">{instance.title}</p>
            </div>
            {instance.link && (
              <div className="tf-wrapper">
                <LinkIcon />
                <p className="label">{instance.link}</p>
              </div>
            )}
            {instance.url && (
              <div className="tf-wrapper">
                <LinkIcon />
                <p className="label">{instance.url}</p>
              </div>
            )}
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
          Edit News
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
            {instance.link && (
              <div className="tf-wrapper">
                <LinkIcon />
                <TextField
                  id={"tf2" + instance._id}
                  value={link}
                  label="Link"
                  variant="filled"
                  onChange={(e) => setLink(e.target.value)}
                  className="input"
                />
              </div>
            )}
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
                      Update File
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
        {newss.map(({ _id, title, description }) => (
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
            News {action + "d"} successfully !
          </Alert>
        </Snackbar>
      ) : isSuccess == "false" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Couldn't {action} news !
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
