import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { MenuItems } from "./MenuItems";
import { BarsIcon, TimesIcon } from "react-line-awesome";
import { findAllByDisplayValue } from "@testing-library/dom";

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
      <nav className={navbar || clicked ? "navbar active" : "navbar"}>
        <h1 className="main-title">
          DNA <span className="thin">life </span>
        </h1>

        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <TimesIcon /> : <BarsIcon />}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
