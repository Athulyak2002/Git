import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Users from "./users";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";

const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
      
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));