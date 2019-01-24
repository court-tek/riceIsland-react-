import React, { Component } from "react";
import ReactDOM from "react-dom";

let h3 = {
    margin: "50px 0",
    textAlign: "center",
    fontSize: "34px"
};

export default class Modal extends Component {
    render() {
        const { match, location, history } = this.props;
        const showHideClassName = this.props.show
            ? "modal display-block"
            : "modal display-none";

        return (
            <section className={showHideClassName}>
                <div onClick={this.props.hideIt} className="menu-toggle">
                    <div className="hamburger" />
                </div>
                <div className="menu-container">
                    <div className="menu-title">
                      <h1>Food Menu</h1>
                      <i className="fas fa-utensils"></i>
                    </div>
                    <div className="food-menu">
                      <p>This is where the food options go.</p>
                      <i className="fas fa-beer"></i>
                    </div>
                </div>
            </section>
        );
    }
}
