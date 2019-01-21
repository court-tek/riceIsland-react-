import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <section id="contactus">
        <div className="container">
          <h5 className="comp-title">Contact Us</h5>
          <h2>Always Here to Help You</h2>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="title">Queens, New York</div>
                <h6 className="address" style={{ fontSize: "1rem" }}>
                  435 main st<br />
                  Queens, NY 12402
                </h6>
                <p>
                  <strong>email:</strong>{" "}
                  <a href="info@islandricegrill.com">
                    info@islandricegrill.com
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <h6 style={{ fontSize: "1rem" }}>Phone:</h6>
                <div className="title">(516)-346-6789</div>
                <h6>Lunch Specials</h6>
                <p>
                  Friday, Saturday, and Sunday<br />
                  from 12pm - 1:30pm
                </p>
                <h6>Dinner Specials</h6>
                <p>
                  Daily<br />
                  from 6pm - 9:30pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
