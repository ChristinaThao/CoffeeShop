import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Nav from "../src/components/nav/nav";

function App() {
  return (
    <div style={{backgroundImage: 'url(' + require('./img/coffee-pour.jpg') + ')'}} className="app">
      <Router>
      <div className="nav">
        <Nav/>
      </div>
      <Route exact path="/" component={Home} />
    </Router>
    </div>
  );
}

export default App;
