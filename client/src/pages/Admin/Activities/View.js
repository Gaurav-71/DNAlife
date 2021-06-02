import React from "react";

import Heading from "../../../components/AdminHeading/Heading.js";

import "./Activities.scss";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Activity from "./Edit";

//var parse = require("html-react-parser");

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box paddingX={2}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ViewActivities() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <AppBar
        style={{
          zIndex: 10,
          backgroundColor: "rgb(46, 46, 46)",
          color: "white",
        }}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#91b710" } }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Educational Tours" {...a11yProps(0)} />
          <Tab label="Eco Projects" {...a11yProps(1)} />
          <Tab label="Plantation Drives" {...a11yProps(2)} />
          <Tab label="Cleaning Movements" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Activity key={0} activityType="EducationalTours" />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <Activity key={1} activityType="EcoProjects" />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <Activity key={2} activityType="PlantationDrives" />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={3}>
        <Activity key={3} activityType="CleaningMovements" />
      </TabPanel>
    </div>
  );
}
