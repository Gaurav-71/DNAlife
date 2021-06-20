import React from "react";

import { Paper } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Empty() {
  const [show, setShow] = React.useState("Fetching data from database ...");

  React.useEffect(() => {
    setTimeout(() => {
      setShow("No posts have been added yet !");
    }, 3000);
  }, [show]);

  return (
    <div className="page">
      <Paper
        style={{
          width: "100%",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {show == "Fetching data from database ..." && (
          <CircularProgress
            style={{
              margin: "0 1.5rem 0 0",
              width: "30px",
              height: "30px",
              color: "orange",
            }}
          />
        )}
        {show}
      </Paper>
    </div>
  );
}
