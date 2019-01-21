import React, { Component } from "react";

class TopImage extends Component {
  render() {
    return (
      <section id="topImg">
        <div className="container">
          <div className="title">
            <h5>Welcome</h5>
            <h1>Island Rice Grill</h1>
          </div>
          <div className="contact-info">
            <div className="booking">Book Table Directly</div>
            <h2>(718) - 219 - 8652</h2>
            <div className="hours">
              Opening Hours <strong>Mon - Fri: </strong> 9am - 9pm /
              <strong> Weekend:</strong> 9am - 11pm
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TopImage;
