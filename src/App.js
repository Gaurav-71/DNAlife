import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import ScrollToTop from "./ScrollToTop";

import Header from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// pages

import Landing from "./pages/Landing/Landing.jsx";
import Home from "./pages/Home/Home.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

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
            </Switch>
          </ScrollToTop>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
