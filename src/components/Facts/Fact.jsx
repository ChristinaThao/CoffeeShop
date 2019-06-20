import React from "react";
import "./Fact.css";

export default class Fact extends React.Component {
  render() {
    return (
      <div className="fact">
        <div className="info">
          <div className="inner">
            <h2>Coffee fact: {this.props.fact}</h2>
            <h4>{this.props.description}</h4>
          </div>
        </div>
      </div>
    );
  }
}
