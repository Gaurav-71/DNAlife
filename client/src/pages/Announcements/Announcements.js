import React from "react";
import "./Announcements.scss";
import Heading from "../../components/Heading/Heading";
import { makeStyles } from "@material-ui/core/styles";

import AllAnnouncements from "../../components/Posts/Type2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Announcements() {
  const classes = useStyles();
  return (
    <div className="page announcements-page">
      <Heading pageTitle={"Anouncements"} />
      <AllAnnouncements type="Announcements" />
    </div>
  );
}
