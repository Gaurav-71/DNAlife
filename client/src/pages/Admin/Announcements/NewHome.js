import React from "react";

import Announcements from "./Announcements";
import Documentation from "./Documentation/Documentation";
import News from "./News/News";
import Resources from "./Resources/Resources";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        <Box>
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

export default function NewHome() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="page admin-activities">
      <AppBar style={{ zIndex: 10 }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Announcements" {...a11yProps(0)} />
          <Tab label="Documentation" {...a11yProps(1)} />
          <Tab label="News" {...a11yProps(2)} />
          <Tab label="Resources" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Announcements />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={3}>
        <Resources />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <News />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <Documentation />
      </TabPanel>
    </div>
  );
}
