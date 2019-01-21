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
            </section>
        );
    }
}
