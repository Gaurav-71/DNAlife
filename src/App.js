import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/Landing/Landing.jsx";
import HomePage from "./pages/Home/Home.jsx";
import ContactUsPage from "./pages/ContactUs/ContactUs.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/contactUs" component={ContactUsPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
