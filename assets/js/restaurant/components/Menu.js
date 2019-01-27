import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  constructor() {
      super();
      this.state = {
        showMenu: true
      };
      this.forkAndSpoon = this.forkAndSpoon.bind(this);
      this.beerMug = this.beerMug.bind(this);
    }

    forkAndSpoon() {
      this.setState({
        showMenu: true
      });
    }

    beerMug() {
      this.setState({
        showMenu: false
      });
    }

    menuToggle() {
      let { showMenu } = this.state;
      let posfixed = {
        position: 'fixed'
      }
      switch (showMenu) {
        case true:
          return (
            <div className="menu-container">
                <div className="foodMenu-title-section">
                  <h1 style={posfixed}>MenuFood</h1>
                  <div style={posfixed} id="circle">
                    <i className="fas fa-utensils"></i>
                  </div>
                </div>
                <div className="foodMenu">
                  <div className="menu-section">
                    <h2 className="section-title">Entrees</h2>
                    <p className="section-description">Pumkin & Channa Curry<span>$10.00</span></p>
                  </div>
                  <div className="menu-section">
                    <h2 className="section-title">Small Bites</h2>
                    <p className="section-description">Pumkin & Channa Curry<span>$10.00</span></p>
                  </div>
                  <div className="menu-section">
                    <h2 className="section-title">Sides</h2>
                    <p className="section-description">Pumkin & Channa Curry<span>$10.00</span></p>
                  </div>
                  <div className="menu-section">
                    <h2 className="section-title">Sandwiches</h2>
                    <p className="section-description">Pumkin & Channa Curry<span>$10.00</span></p>
                  </div>
                  <div className="menu-section">
                    <h2 className="section-title">Lunch</h2>
                    <p className="section-description">Pumkin & Channa Curry<span>$10.00</span></p>
                  </div>
                </div>
                <div className="closeNext">
                  <NavLink style={posfixed} onClick={this.props.hideIt} className="menu-toggle" to="/">
                      <div className="hamburger" />
                  </NavLink>
                  <div id="circle" style={{position: 'fixed'}} onClick={this.beerMug}>
                    <i className="fas fa-beer"></i>
                  </div>
                </div>
            </div>
          );
        case false:
          return (
            <div className="menu-container">
                <div className="foodMenu-title">
                  <h1>MenuDrinks</h1>
                  <div style={posfixed} onClick={this.forkAndSpoon} id="circle">
                    <i className="fas fa-utensils"></i>
                  </div>
                </div>
                <div className="foodMenu">
                  <h1>This is where the Drink options are.</h1>
                </div>
                <div className="closeNext">
                  <NavLink onClick={this.props.hideIt} className="menu-toggle" to="/">
                      <div className="hamburger" />
                  </NavLink>
                  <div onClick={this.beerMug}>

                  </div>
                </div>
            </div>
          );
        }
      }

    render() {
        return (
            <section>
                {this.menuToggle()}
            </section>
        );
    }
}
