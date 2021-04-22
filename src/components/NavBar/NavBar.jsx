import React, { useState, useEffect } from "react";

import "./NavBar.scss";

import {Link} from "react-router-dom";

import { MenuItems } from "./MenuItems";
import { BarsIcon, TimesIcon } from "react-line-awesome";


import logo from "../../assets/Logo/whitelogo.png";

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

  
  return (
    <div>
      <nav className="navbar">
        <div className="black-fill">
          <div className="name">
            <img src={logo} alt="logo"/>
            <h1 className="main-title">
              DNA <span className="thin">life </span>
            </h1>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {clicked ? <TimesIcon /> : <BarsIcon />}
          </div>
          <div className="nav-menu"> 
            {MenuItems.map((item, index) => {
              return (
                <Link className={item.cName}  to={item.url} key={index} >
                    {item.title}
                </Link>
                
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
