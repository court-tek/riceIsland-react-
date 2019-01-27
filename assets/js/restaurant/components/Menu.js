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

    xThat() {
      if (this.props.show = false) {
        setState({
          showMenu: true
        });
      }
    }
    menuToggle() {
      const { showMenu } = this.state;
      switch (showMenu) {
        case true:
          return (
            <div className="menu-container">
                <div className="foodMenu-title">
                  <h1>MenuFood</h1>
                  <div>
                    <i className="fas fa-utensils"></i>
                  </div>
                </div>
                <div className="foodMenu">
                  <h1>This is where the food options are.</h1>
                </div>
                <div className="closeNext">
                  <NavLink onClick={this.props.hideIt} className="menu-toggle" to="/">
                      <div className="hamburger" />
                  </NavLink>
                  <div onClick={this.beerMug}>
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
                  <div>
                    <i onClick={this.forkAndSpoon} className="fas fa-utensils"></i>
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
