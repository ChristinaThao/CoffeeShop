import React from "react";
import "./gallery.css";
import Carousel from "../carousel/Carousel";

export default class Gallery extends React.Component {
  // implement a carousel for the types of coffee drinks + description
  render() {
    return (
      <div id="gallery" className="gallery">
        <div className="gallery-inner">
          <h1>Gallery</h1>
          <Carousel />
        </div>
      </div>
    );
  }
}
