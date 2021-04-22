import React from "react";
import Heading from "../../components/Heading/Heading";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page">
      <Heading
        imageSource={"../../assets/Landing/pexels-mali-maeder-142497.jpg"}
        pageTitle={"Home"}
      />
      <div className="dummy"></div>
    </div>
  );
}
