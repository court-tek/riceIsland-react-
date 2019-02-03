import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CenterMenuAreaLeft from "./CenterMenuAreaLeft";
import CenterMenuAreaRight from "./CenterMenuAreaRight";
import DrinksMenuArea from "./DrinksMenuArea";
import fakeServerData from "../data/menuData";

export default class Menu extends Component {
  constructor() {
      super();
      this.state = {
        showMenu: true,
        fakeServerData
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
      let menuToRender = this.state.fakeServerData.data.menu.filter(menuitem => {
        return menuitem.id.includes('islandLeft');
      });
      let menuToRenderRight = this.state.fakeServerData.data.menu.filter(menuitem => {
        return menuitem.id.includes('islandRight');
      });
      let menuToRenderDrinks = this.state.fakeServerData.data.menu.filter(menuitem => {
        return menuitem.id.includes('drinks');
      });
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
                  <ul className="title-vis">
                    <li className="prev"><h3 style={{color: "#ccc"}}>Prev</h3></li>
                      <li><i className="fas fa-utensils"></i></li>
                    <li className="nex"><h3 onClick={this.beerMug}>Next</h3></li>
                  </ul>
                  <section className="sec1">
                    {menuToRender.map(menu => <CenterMenuAreaLeft key={menu.name} menu={menu} /> )}
                  </section>
                  <section className="sec2">
                    {menuToRenderRight.map(menu => <CenterMenuAreaRight key={menu.name} menur={menu} /> )}
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
                <div className="foodMenu drinkMenu">
                <ul className="title-vis">
                  <li className="prev"><h3 onClick={this.forkAndSpoon}>Prev</h3></li>
                    <li><i className="fas fa-beer"></i></li>
                  <li className="nex"><h3 style={{color: "#ccc"}}>Next</h3></li>
                </ul>
                <section className="sec1">
                  {menuToRenderDrinks.map(menu => <DrinksMenuArea key={menu.name} menud={menu} /> )}
                </section>
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
