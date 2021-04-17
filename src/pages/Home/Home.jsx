import React from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page">
      <NavBar />
      <div className="dummy"></div>
      <Footer />
    </div>
  );
}
