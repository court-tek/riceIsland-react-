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
                <div className="foodMenu-title-section backImage1">
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
                <section className="sec1">
                    <div className="menu-section">
                      <h2 className="section-title">Small Bites</h2>
                      <p className="section-description">Chesse Rolls<span>$2.00</span></p>
                      <p className="section-description">Pholouri<span>$3.00</span></p>
                      <p className="section-description">Guyanese Patties<span>$1.00</span></p>
                      <p className="section-description">Jamaican Beef Patties<span>$1.80</span></p>
                      <p className="section-description">Coco Bread<span>$2.20</span></p>
                      <p className="section-description">Roti<span>$3.00</span></p>
                    </div>
                    <div className="menu-section">
                      <h2 className="section-title">Entrees</h2>
                      <p className="section-description">Pumkin & Channa Curry<span>$10.00</span></p>
                      <p className="section-description">Callaloo<span>$10.00</span></p>
                      <p className="section-description">Vegetarian/Vegan Plate(3 Side Items)<span>$8.50</span></p>
                      <p className="section-description">Chicken Curry<span>$11.99</span></p>
                      <p className="section-description">Shrimp Curry<span>$13.99</span></p>
                      <p className="section-description">Stew Chicken<span>$11.99</span></p>
                      <p className="section-description">Jerk Chicken<span>$11.99</span></p>
                      <p className="section-description">Flavored Wing Meal<span>$10.99</span></p>
                      <p className="section-description">Oxtails<span>$16.50</span></p>
                      <p className="section-description">Fried Fish Dinner<span>$13.99</span></p>
                      <p className="section-description">Kingfish<span>$14.99</span></p>
                      <p className="section-description">Salmon<span>$15.99</span></p>
                      <p className="section-description">Rasta Pasta<span>$15.99</span></p>
                    </div>
                    <div className="menu-section">
                      <h2 className="section-title">Sides</h2>
                      <p className="section-description">Jasmine Rice</p>
                      <p className="section-description">Yellow</p>
                      <p className="section-description">Rice & Peas</p>
                      <p className="section-description">Guyanese Chow Mein</p>
                      <p className="section-description">Steamed Cabbage</p>
                      <p className="section-description">Collard Greens</p>
                      <p className="section-description">Mixed Vegetables</p>
                      <p className="section-description">Steamed Callaloo</p>
                      <p className="section-description">Yams</p>
                      <p className="section-description">Fried Plaintains</p>
                      <p className="section-description">Vegan Mac&Cheese</p>
                      <p className="section-description">Baked Mac&Cheese</p>
                      <p className="section-description">Cornbread</p>
                    </div>
                  </section>
                  <section className="sec2">
                    <div className="menu-section">
                      <h2 className="section-title">Sandwiches</h2>
                      <p className="section-description">Fish Sandwich<span>$8.00</span></p>
                      <p className="section-description">Smoked Jerk BBQ Chicken Sandwich<span>$9.50</span></p>
                      <p className="section-description">Roasted Eggplant Sandwich<span>$7.99</span></p>
                    </div>
                    <div className="menu-section">
                      <h2 className="section-title">Desserts</h2>
                      <p className="section-description">Coconut Bread Pudding<span>$3.50</span></p>
                      <p className="section-description">Banana Pudding<span>$3.00</span></p>
                      <p className="section-description">Pine Tart<span>$2.00</span></p>
                      <p className="section-description">Black Cake<span>$4.00</span></p>
                    </div>
                  </section>
                </div>

                <div className="closeNext">
                  <NavLink style={posfixed} onClick={this.props.hideIt} className="menu-toggle" to="/">
                      <div className="hamburger" />
                  </NavLink>
                  <div className="position-box">
                      <div className="pos">
                        <div className="foodCircleB" id="circle" style={posfixed} onClick={this.beerMug}>
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
                <div className="foodMenu-title-section backImage2">
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
                  <NavLink className="menu-toggle" to="/">
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
