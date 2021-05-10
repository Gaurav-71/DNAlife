import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// pages

import Home from "./pages/Home/Home.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Team from "./pages/Team/Team.js";
import Announcements from "./pages/Announcements/Announcements.js";
import JoinUs from "./pages/JoinUs/JoinUs.js";

// activities

import Cleaning from "./pages/Activities/Cleaning Movements/Cleaning.js";
import Education from "./pages/Activities/Educational Tours/Educational.js";
import Eco from "./pages/Activities/Eco Projects/Eco.js";
import Plantation from "./pages/Activities/Plantation Drives/Plantation.js";

// education

import Internship from "./pages/Education/Internship/Internship.js";
import MS from "./pages/Education/MS/Ms.js";
import Training from "./pages/Education/Training/Training.js";
import Courses from "./pages/Education/Courses/Courses.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="routes">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/join-us" component={JoinUs} />
              <Route
                exact
                path="/education/ms-program/nelson-institute-for-environmental-studies"
                component={MS}
              />
              <Route exact path="/education/trainings" component={Training} />
              <Route
                exact
                path="/education/internships"
                component={Internship}
              />
              <Route
                exact
                path="/education/certificate-courses"
                component={Courses}
              />
              <Route
                exact
                path="/activities/educational-tours"
                component={Education}
              />
              <Route exact path="/activities/eco-projects" component={Eco} />
              <Route
                exact
                path="/activities/plantation-drives"
                component={Plantation}
              />
              <Route
                exact
                path="/activities/cleaning-movements"
                component={Cleaning}
              />
              <Route exact path="/announcements" component={Announcements} />
            </Switch>
          </ScrollToTop>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
