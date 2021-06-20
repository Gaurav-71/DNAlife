import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Empty from "../../../../components/Empty/Empty";

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

export default function Edit() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [instance, setInstance] = useState([]);
  const [title, setTitle] = useState("");

  const [link, setLink] = useState("");
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");
  const [action, setAction] = useState("");
  const isSuccess = useSelector((state) => state.resourceReducer.successful);
  useEffect(() => {
    dispatch(getData("Resources"));
  }, []);
  useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]); // for testing alerts
  const resourceReducerData = useSelector((state) => state.resourceReducer);
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
  };
  const handleViewOpen = (instance) => {
    setInstance(instance);
    setView(true);
  };
  const handleViewClose = () => {
    setView(false);
    setInstance([]);
  };
  let resources = resourceReducerData.resources;
  const deleteResource = (id) => {
    dispatch(deleteData("Resources", id));
    setAction("Delete");
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
  // for updating
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: instance._id,
      type: "Resources",
      title,

      link,
    };
    dispatch(updateData("Resources", data));
    setAction("Update");
    setOpen(true);
    handleModalClose();
  };
  return (
    <div>
      {resources.length <= 0 ? (
        <div style={{ marginTop: "1rem" }}>
          <Empty />
        </div>
      ) : (
        resources.map((resource) => (
          <Paper key={resource._id} elevation={15} square className="paper">
            <Typography variant="h6" className="paper-title" color="primary">
              {resource.title}
            </Typography>
            <div className="actions">
              <Button
                type="submit"
                className="action-btn mr"
                variant="contained"
                startIcon={<ViewIcon />}
                onClick={() => {
                  handleViewOpen(resource);
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
                  handleModalOpen(resource);
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="action-btn"
                onClick={() => {
                  deleteResource(resource._id);
                }}
                startIcon={<DeleteForever />}
              >
                Delete
              </Button>
            </div>
          </Paper>
        ))
      )}
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
          View Resource
        </DialogTitle>
        <DialogContent className="dialog-content">
          <form className="post-content">
            <div className="tf-wrapper">
              <TitleIcon />
              <p className="label">{instance.title}</p>
            </div>
            <div className="tf-wrapper">
              <LinkIcon />
              <p className="label">{instance.link}</p>
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
          Edit Resource
        </DialogTitle>
        <DialogContent className="dialog-content">
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
            <DialogActions
              style={{ background: "#0e1217", padding: "0.5rem 1.6rem 2rem" }}
            >
              <Button
                onClick={handleModalClose}
                variant="contained"
                startIcon={<ClearIcon />}
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: "#009688", color: "white" }}
                variant="contained"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      {/* <ul>
        {resources.map(({ _id, title, description }) => (
          <li style={{ marginBottom: "1rem" }} key={_id}>
            <Button
              onClick={() => {
                deleteResource(_id);
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
            Resource {action + "d"} succesfully !
          </Alert>
        </Snackbar>
      ) : isSuccess == "false" ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Couldn't {action} resource !
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}
