import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Menu from "../src/pages/Menu/Menu";
import Nav from "../src/components/Nav/nav";

function App() {
  return (
    <Router>
      <div className="nav">
        <Nav/>
      </div>
      <Switch className="pages">
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
