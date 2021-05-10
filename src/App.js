import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header/Header.jsx";
//import Header from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// pages

import Home from "./pages/Home/Home.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Team from "./pages/Team/Team.jsx";
import Announcements from "./pages/Announcements/Announcements.js";

// activities

import Cleaning from "./pages/Activities/Cleaning Movements/Cleaning.jsx";
import Education from "./pages/Activities/Educational Tours/Educational.jsx";
import Eco from "./pages/Activities/Eco Projects/Eco.jsx";
import Plantation from "./pages/Activities/Plantation Drives/Plantation.jsx";

// education

import Internship from "./pages/Education/Internship/Internship.jsx";
import MS from "./pages/Education/MS/Ms.jsx";
import Training from "./pages/Education/Training/Training.jsx";
import Courses from "./pages/Education/Courses/Courses.jsx";

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
