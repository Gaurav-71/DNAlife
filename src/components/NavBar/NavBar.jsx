import React, { useState, useEffect } from "react";

import "./NavBar.scss";

import {Link} from "react-router-dom";

import { MenuItems } from "./MenuItems";
import { BarsIcon, TimesIcon } from "react-line-awesome";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';



import logo from "../../assets/Logo/whitelogo.png";
import { red } from "@material-ui/core/colors";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClicked(!clicked);

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
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: '#0e1217',
      padding: '0'
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      backgroundColor: "#0e1217",padding:0,
    },
  }))(MenuItem);

  return (
    <div>
      <nav className="navbar">
        <div className="black-fill">
          <Link to="/" className="name">
            <img src={logo} alt="logo"/>
            <h1 className="main-title">
              DNA <span className="thin">life </span>
            </h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {clicked ? <TimesIcon /> : <BarsIcon />}
          </div>
          <div className="nav-menu"> 
            {MenuItems.map((item, index) => {
              return (
                  <div>
                  {
                    item.hasChildRoutes 
                  ?  
                    <div key={index}>
                      { item.title == "Activities"
                        ? <div className={item.cName} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}>
                            {item.title}
                          </div>
                        : <div className={item.cName} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
                            {item.title}
                          </div>
                      }
                      { item.title == "Activities" 
                      ? <StyledMenu
                          id="simple-menu"
                          anchorEl={anchorEl1}                    
                          keepMounted
                          open={Boolean(anchorEl1)}
                          onClose={handleClose1}
                        >
                          {item.childRoutes.map((childItem, childIndex) => {
                            return(
                              <StyledMenuItem key={childIndex} onClick={handleClose1}>
                                <Link className={childItem.cName} to={childItem.url}>
                                  {childItem.title}
                                </Link>
                              </StyledMenuItem>
                            );
                          })}
                        </StyledMenu>
                      : <StyledMenu
                          id="simple-menu"
                          anchorEl={anchorEl2}
                          keepMounted
                          open={Boolean(anchorEl2)}
                          onClose={handleClose2}
                        >
                          {item.childRoutes.map((childItem, childIndex) => {
                            return(
                              <StyledMenuItem key={childIndex} onClick={handleClose2}>
                                <Link className={childItem.cName} to={childItem.url}>
                                  {childItem.title}
                                </Link>
                              </StyledMenuItem>
                            );
                          })}
                        </StyledMenu>                
                      }
                    </div>                     
                  : <Link  className={item.cName}  to={item.url} key={index} >
                      {item.title}
                    </Link> 
                  }
                  </div>                          
              );
            })}             
          </div>
          <div className={clicked ? "mobile-nav" : "hide" } >
            {MenuItems.map((item, index) => {
              return (
                <Link className={item.cName}  to={item.url} key={index} onClick={handleClick} >
                    {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
