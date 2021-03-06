import React from "react";
import "./nav.css";

export default class Nav extends React.Component {

  scrollTop() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="nav left">
          <button onClick={this.scrollTop} className="coffee">COFFEE</button>
        </div>
        <div className="nav right">
          <a href="#gallery" className="option">Gallery</a>

        </div>
      </div>
    );
  }
}
