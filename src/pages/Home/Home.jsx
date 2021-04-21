import React from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Heading from "../../components/Heading/Heading";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page">
      <NavBar />
      <Heading
        imageSource={"../../assets/Landing/pexels-mali-maeder-142497.jpg"}
        pageTitle={"Home"}
      />
      <div className="dummy"></div>
      <Footer />
    </div>
  );
}
