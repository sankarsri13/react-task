import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Places from "./screens/Places";
import Guide from "./screens/Guide";
import Blogs from "./screens/Blogs";
import Contact from "./screens/Contact";
import Booking from "./screens/Booking";
import HotelListing from "./screens/HotelListing";
import Hotel from "./screens/Hotel";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory as history } from "history";
function App() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Home />
            <About />
            <Places />
            <Guide />
            <Blogs />
            <Contact />
          </Route>
          <Route path="/book" exact component={Booking} />
          <Route path="/hotels/:id" exact component={HotelListing} />
          <Route path="/hotel_info/:id" exact component={Hotel} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
