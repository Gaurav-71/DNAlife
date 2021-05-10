import React, { useEffect, useRef } from "react";
import "./Announcements.scss";
import Heading from "../../components/Heading/Heading";

export default function Announcements() {
  return (
    <div className="page announcements-page">
      <Heading pageTitle={"Anouncements"} />
      <p>No announcements have been made yet !</p>
    </div>
  );
}
