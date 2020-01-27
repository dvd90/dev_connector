import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" components={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" components={Register} />
          <Route exact path="/login" components={Login} />
        </Switch>
      </section>
      <Landing />
    </Fragment>
  </Router>
);

export default App;
