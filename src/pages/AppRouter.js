import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, About, Contact, Gallery } from "./PagesIndex";
import { NavBar, Footer } from "../organisms/organismIndex";
const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default AppRouter;
