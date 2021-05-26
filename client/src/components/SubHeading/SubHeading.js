import { Paper, Typography } from "@material-ui/core";
import React from "react";

import "./SubHeading.scss";

export default function SubHeading({ title, subtitle }) {
  return (
    <Paper
      elevation={15}
      variant="elevation"
      style={{ width: "100%" }}
      className="sub-heading"
      square
    >
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </Paper>
  );
}
