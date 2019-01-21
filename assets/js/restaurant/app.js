import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./components/RouteComponents/Home";
import About from "./components/RouteComponents/About";
import Modal from "./components/includes/Modal";
import {browserHistory} from 'react-router';

class App extends Component {
  constructor() {
      super();
      this.state = {
          show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
  }

  showModal(event) {
      document.body.classList.add("modal-open");
      this.setState({ show: true });
      console.log(this.state);
      console.log("We made it!");
  }

  hideModal(event) {
      document.body.classList.remove("modal-open");
      this.setState({ show: false });
      console.log(this.state);
      console.log("Lets shut it Down! boys");
  }

  render() {
    let headerStyle = {
      color: "#fff",
      cursor: 'pointer'
    };

    let dropHeaderStyle = {
      color: "#fff",
      padding: "10px 20px",
      display: "block",
    };
    return (
      <Router>
        <div className="App">
          <Modal hideIt={this.hideModal} show={this.state.show} />
          <header style={{zIndex: 5}}>
            <div className="container">
              <div
                className="Logo"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold"
                }}
              >
                <NavLink style={headerStyle} to="/">
                  IR
                </NavLink>
              </div>

              <input
                type="checkbox"
                style={{ display: "none" }}
                id="menuToggle"
              />

              <label htmlFor="menuToggle"
                className="hamburger pull-right visible-xs"
              >
                <i
                  style={{ fontSize: "25px", display: "block", float: "right" }}
                  className="fas fa-bars"
                />
              </label>

              <nav style={{ padding: "20px" }} className="main-nav">
                <label htmlFor="menuToggle" className="close pull-left">
                  <i className="fas fa-times" />
                </label>
                <ul>
                  <li>
                    <NavLink style={dropHeaderStyle} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <div style={dropHeaderStyle} onClick={this.showModal}>
                      Menu
                    </div>
                  </li>
                  <li>
                    <NavLink style={dropHeaderStyle} to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <ul className="visible-sm visible-md visible-lg">
                <li>
                  <NavLink style={headerStyle} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <div style={headerStyle} onClick={this.showModal}>
                    Menu
                  </div>
                </li>
                <li>
                  <NavLink style={headerStyle} to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>

          <Route
            exact path="/"
            render={(props) => <Home {...props} modalOpen={this.showModal} />}
           />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
