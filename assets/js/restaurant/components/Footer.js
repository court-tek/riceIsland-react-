import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <nav className="menu">
            <a href="#">Reservations</a>
            <a href="#">Functions</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </nav>

          <ul className="social-media">
            <li>
              <a href="" target="new">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="" target="new">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="" target="new">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="" target="new">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          <div className="copyright" style={{ margin: "0 25px 0 0" }}>
            &copy; 2018 Copyright
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
