import React, { Component } from "react";
import islandImgs from "../data/galleryOfRogues";



export default class ProductGallery extends Component {
  boxes() {
    return islandImgs.map(datArray => {
      let backgroundStyle = {
        background: `url("${datArray}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
      return (
        <div key={datArray} className="col-md-4 box" style={backgroundStyle}></div>
      );
    })
  }

  render() {
    return (
      <section id="gallery">
        <div className="container">
          <div className="title-container"><h1 className="title">Gallery</h1></div>
          <div className="row">
            {this.boxes()}
          </div>
        </div>
      </section>
    );
  }
}
