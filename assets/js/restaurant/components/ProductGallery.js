import React, { Component } from "react";

let mainStyle = {
  background: 'beige',
  width: '600px',
  margin: 'auto'
}

let boxStyle = {
  width: '280px',
  margin: '10px',
  height: '200px',
  background: 'purple'
}

export default class ProductGallery extends Component {
  render() {
    return (
      <section id="gallery">
        <div className="container">
          <div className="main" style={mainStyle}>
            hello
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </section>
    );
  }
}
