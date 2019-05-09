import React from "react";
import "./Preferences.css";

export default class Preferences extends React.Component {
  render() {
    return (
      <div id="preferences1" style={{ marginTop: "100vh", width: "100%" }}>
        <div className="info">
          <div className="inner">
            <h2>Coffee fact: Coffee drinkers tend to live longer</h2>
            <h4>According to a Harvard study, moderate consumption of coffee (~3 cups) a day can reduce the risk of cardio vascular disease, type 2 diabetes and Parkinson's</h4>
          </div>
        </div>
      </div>
    );
  }
}
