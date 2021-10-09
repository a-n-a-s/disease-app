import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Components/Navbar";
import Redirect from "./Components/Details";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/Home";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/:name/details">
          <Redirect />
        </Route>
      </Switch>
      <Footer  />
    </div>
  );
};

export default App;
