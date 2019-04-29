import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Nav from "../src/components/nav/nav";

function App() {
  return (
    <Router>
      <div className="nav">
        <Nav/>
      </div>
      <Switch className="pages">
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
