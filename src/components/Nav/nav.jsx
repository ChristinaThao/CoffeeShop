import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends React.Component {

  scrollTop() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="nav left">
          <button onClick={this.scrollTop} className="coffee">Coffee</button>
        </div>
        <div className="nav right">
          <Link to="/shop" className="option">
            Shop
          </Link>
          <Link to="/reservation" className="option">
            Reservation
          </Link>
          <Link to="/menu" className="option">
            Menu
          </Link>
          <a href="#drinks" className="option">Drinks</a>
        </div>
      </div>
    );
  }
}
