import React from "react";
import "./Announcements.scss";
import Heading from "../../components/Heading/Heading";

import AllAnnouncements from "../../components/Posts/Type2";

export default function Announcements() {
  return (
    <div className="page announcements-page">
      <Heading pageTitle={"Anouncements"} />
      <AllAnnouncements type="Announcements" />
    </div>
  );
}
