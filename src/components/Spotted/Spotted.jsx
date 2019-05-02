import React from "react";
import ToGo from "../toGo/toGo";
import "./Spotted.css";

export default class Spotted extends React.Component {
  render() {
    return (
      <div id="spotted">
        <h1>Spotted</h1>
        <div className="toGo">
          <div className="addLocation">
            <ToGo />
          </div>
        </div>
        <div className="been" />
      </div>
    );
  }
}
