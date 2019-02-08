import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Navigation extends Component {
  render() {
    let headerStyle = {
      color: "#fff",
      cursor: "pointer"
    };

    let dropHeaderStyle = {
      color: "#fff",
      padding: "10px 20px",
      display: "block"
    };

    return (
      <header style={{ zIndex: 5 }}>
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

          <input type="checkbox" style={{ display: "none" }} id="menuToggle" />

          <label
            htmlFor="menuToggle"
            className="pull-right visible-xs"
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
                <NavLink style={dropHeaderStyle} to="/menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink style={dropHeaderStyle} to="/gallery">
                  Gallery
                </NavLink>
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
              <NavLink style={headerStyle} to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink style={headerStyle} to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink style={headerStyle} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
