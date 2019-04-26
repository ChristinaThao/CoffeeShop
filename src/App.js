import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Nav from "../src/components/nav/nav";
import Drinks from "./pages/Drinks/Drinks";

function App() {
  return (
    <Router>
      <div className="nav">
        <Nav/>
      </div>
      <Switch className="pages">
        <Route exact path="/" component={Home} />
        <Route path="/drinks" component={Drinks} />
      </Switch>
    </Router>
  );
}

export default App;
