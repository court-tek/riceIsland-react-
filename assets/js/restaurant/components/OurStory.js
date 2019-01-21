import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class OurStory extends Component {
  render() {
    return (
      <section id="ourStory">
        <div className="container">
          <div className="row">
            <div className="quote-our col-md-6">
              <h5>Our Story</h5>
              <h2>Cooking is the art of adjustment</h2>
              <p>
                Lorem ipsum dolor amet poke bitters tbh truffaut four loko
                portland kitsch jean shorts trust fund craft beer single-origin
                coffee ramps hot chicken shaman iceland. Scenester yuccie fam
                helvetica. Taiyaki seitan offal distillery pickled freegan
                tumeric glossier franzen before they sold out viral small batch.
                Keytar keffiyeh fam celiac bitters waistcoat.
              </p>
              <div
                className="quote"
                style={{
                  color: "grey",
                  fontStyle: "italic",
                  marginBottom: "3rem"
                }}
              >
                "The best Caribbean food in Queens"-
                <strong style={{ fontStyle: "normal" }}> John Clarke</strong>
              </div>
              <div className="reservBtn">
                <a href="/reservations" className="reserve-btn">
                  Reserve
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-img" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurStory;
