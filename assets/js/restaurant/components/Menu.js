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
                    <section className="inner-container">
                          <h1 className="menTitle">MENU<span className="food">Food</span></h1>
                          <div className="pos">
                            <div style={posfixed} className="foodCircle" id="circle">
                              <i className="fas fa-utensils changeW"></i>
                            </div>
                          </div>
                    </section>
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
                  <div className="position-box">
                      <div className="pos">
                        <div className="foodCircleB" id="circle" style={{position: 'fixed'}} onClick={this.beerMug}>
                          <i className="fas fa-beer changeB"></i>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          );
        case false:
          return (
            <div className="menu-container">
                <div className="foodMenu-title-section">
                    <section className="inner-container">
                      <h1 className="menTitle">MENU<span className="drinks">Drinks</span></h1>
                        <div className="pos">
                          <div style={posfixed} onClick={this.forkAndSpoon} className="foodCircleTrans" id="circle">
                            <i className="fas fa-utensils foodUtensils"></i>
                          </div>
                        </div>
                    </section>
                </div>
                <div className="foodMenu">
                  <h1>This is where the Drink options are.</h1>
                </div>
                <div className="closeNext">
                  <NavLink onClick={this.props.hideIt} className="menu-toggle" to="/">
                      <div className="hamburger" />
                  </NavLink>
                  <div>

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
