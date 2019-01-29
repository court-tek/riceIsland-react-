import React, { Component } from "react";

export class SpecMenuItems extends Component {
  showMenuDetails() {
    let specialMenu = [

    ]
    return this.specialMenu.map(specialItems => {
      return (
        <div className="col-md-4">
          <div className="box" style={{ background: "#fff", padding: "20px" }}>
            <div
              className="box-img"
              style={{
                width: "100%",
                height: "200px",
                position: "relative",
                marginBottom: "50px"
              }}
            >
              <div key={specialItems.id} className="price-circle">
                ${specialItems.price}
              </div>
            </div>
            <span
              className="title"
              style={{
                textAlign: "center",
                display: "block",
                fontWeight: 600,
                fontSize: "0.9rem"
              }}
            >
              {specialItems.specName}
            </span>
            <p
              className="details paraStyle"
              style={{
                fontWeight: 300,
                fontSize: "0.8rem",
                textAlign: "center",
                lineHeight: 1.5
              }}
            >
              {specialItems.description}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="row">{this.showMenuDetails()}</div>;
  }
}

export default SpecMenuItems;
