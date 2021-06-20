import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

import "./Header.scss";

import { Link, useHistory } from "react-router-dom";

import { BarsIcon, TimesIcon } from "react-line-awesome";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import logo from "../../assets/Logo/nav2.png";

import { useAuth } from "../../contexts/AuthContext";

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#0e1217",
    padding: "0",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const listStyle3 = {
  backgroundColor: "#0e1217",
  width: "300",
  height: "100%",
  color: "white",
  padding: "80px 0",
};

const customStyle = {
  padding: "1.5rem 2rem",
};

const dividerStyle = {
  backgroundColor: "black",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  width: "100%",
};

const StyledMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: "#0e1217",
    padding: 0,
  },
}))(MenuItem);

const useStyles = makeStyles({
  fullList: {
    width: "auto",
  },
});

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  async function signOut() {
    try {
      await logout();
      history.push("/signIn");
    } catch {
      alert("Failed to log out");
    }
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const [anchorEl1, setAnchorEl1] = React.useState(null); // activities
  const [anchorEl2, setAnchorEl2] = React.useState(null); // education

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
    if (state["right"]) {
      toggleDrawer("right", false);
    }
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: "#0e1217",
      padding: "0",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      backgroundColor: "#0e1217",
      padding: 0,
    },
  }))(MenuItem);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      style={listStyle3}
      role="presentation"
    >
      <List>
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={customStyle}
        >
          <Link style={linkStyle} className="nav-links" to="/">
            Home
          </Link>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem style={customStyle}>
          <div
            className="nav-links"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick1}
          >
            Activities
          </div>
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <StyledMenuItem onClick={handleClose1}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/activities/educational-tours"
              >
                Educational Tours
              </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose1}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/activities/eco-projects"
              >
                Eco Projects
              </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose1}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/activities/plantation-drives"
              >
                Plantation Drives
              </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose1}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/activities/cleaning-movements"
              >
                Cleaning Movements
              </Link>
            </StyledMenuItem>
          </StyledMenu>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={customStyle}
        >
          <Link style={linkStyle} className="nav-links" to="/announcements">
            Announcements
          </Link>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem style={customStyle}>
          <div
            className="nav-links"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick2}
          >
            Education
          </div>
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <StyledMenuItem onClick={handleClose2}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/education/ms-program/nelson-institute-for-environmental-studies"
              >
                MS Program
              </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose2}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/education/trainings"
              >
                Trainings
              </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose2}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/education/internships"
              >
                Internships
              </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose2}>
              <Link
                style={linkStyle}
                className="child-links"
                to="/education/certificate-courses"
              >
                Certificate Courses
              </Link>
            </StyledMenuItem>
          </StyledMenu>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={customStyle}
        >
          <Link style={linkStyle} className="nav-links" to="/team">
            Team
          </Link>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={customStyle}
        >
          <Link style={linkStyle} className="nav-links" to="/gallery">
            Gallery
          </Link>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={customStyle}
        >
          <Link style={linkStyle} className="nav-links" to="/contact-us">
            Contact Us
          </Link>
        </ListItem>
        <Divider style={dividerStyle} />
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={customStyle}
        >
          <Link style={linkStyle} className="nav-links btn" to="/join-us">
            Join Us
          </Link>
        </ListItem>
        <Divider style={dividerStyle} />
      </List>
    </div>
  );

  return (
    <div>
      <nav className="navbar">
        <div className="black-fill">
          {!currentUser ? (
            <Link to="/" className="name">
              <img src={logo} alt="logo" />
              <h1 className="main-title">
                DNA <span className="thin">life </span>
              </h1>
            </Link>
          ) : (
            <Link to="/admin/dashboard" className="name">
              <img src={logo} alt="logo" />
              <h2 className="main-title">
                DNA <span className="thin">life </span>
              </h2>
            </Link>
          )}
          {currentUser ? (
            <Button
              variant="contained"
              color="primary"
              onClick={signOut}
              className={classes.submit}
              startIcon={<ExitToAppIcon />}
              style={{ marginRight: "1rem", color: "white" }}
            >
              Sign Out
            </Button>
          ) : (
            <div
              className="menu-icon"
              onClick={toggleDrawer("right", !state["right"])}
            >
              {state["right"] ? <TimesIcon /> : <BarsIcon />}
            </div>
          )}
          {currentUser ? (
            ""
          ) : (
            <div className="nav-menu">
              <Link className="nav-links" to="/">
                Home
              </Link>
              <div>
                <div
                  className="nav-links"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick1}
                >
                  Activities
                </div>
                <StyledMenu
                  id="simple-menu"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                  onClose={handleClose1}
                >
                  <StyledMenuItem onClick={handleClose1}>
                    <Link
                      className="child-links"
                      to="/activities/educational-tours"
                    >
                      Educational Tours
                    </Link>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose1}>
                    <Link className="child-links" to="/activities/eco-projects">
                      Eco Projects
                    </Link>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose1}>
                    <Link
                      className="child-links"
                      to="/activities/plantation-drives"
                    >
                      Plantation Drives
                    </Link>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose1}>
                    <Link
                      className="child-links"
                      to="/activities/cleaning-movements"
                    >
                      Cleaning Movements
                    </Link>
                  </StyledMenuItem>
                </StyledMenu>
              </div>
              <Link className="nav-links" to="/announcements">
                Announcements
              </Link>
              <div>
                <div
                  className="nav-links"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick2}
                >
                  Education
                </div>
                <StyledMenu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <StyledMenuItem onClick={handleClose2}>
                    <Link
                      className="child-links"
                      to="/education/ms-program/nelson-institute-for-environmental-studies"
                    >
                      MS Program
                    </Link>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose2}>
                    <Link className="child-links" to="/education/trainings">
                      Trainings
                    </Link>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose2}>
                    <Link className="child-links" to="/education/internships">
                      Internships
                    </Link>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose2}>
                    <Link
                      style={linkStyle}
                      className="child-links"
                      to="/education/certificate-courses"
                    >
                      Certificate Courses
                    </Link>
                  </StyledMenuItem>
                </StyledMenu>
              </div>
              <Link className="nav-links" to="/team">
                Team
              </Link>
              <Link className="nav-links" to="/gallery">
                Gallery
              </Link>
              <Link className="nav-links" to="/contact-us">
                Contact Us
              </Link>
              <Link className="nav-links btn" to="/join-us">
                Join Us
              </Link>
            </div>
          )}
          <SwipeableDrawer
            style={{ zIndex: 500 }}
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </div>
      </nav>
    </div>
  );
}
