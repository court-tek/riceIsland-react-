import React, { Component } from "react";
import axios from "axios";

class SpecialMenu extends Component {
  constructor() {
      super();
      this.state = {
        specials: []
      };
  }

  componentDidMount() {
    axios.get('/api/specMenu')
    .then((res) => {
      this.setState({
        specials: res.data
      }, () => {
        console.log(this.state);
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
  showMenuDetails() {
    const { specials } = this.state;
    console.log(specials);
    return specials.map(specialItems => {
      return (
        <div key={specialItems.id} className="col-md-4">
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
              <div className="price-circle">
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
              className="details"
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
    return (
      <section id="specialMenu">
        {this.showMenuDetails()}
      </section>
    );
  }
}

export default SpecialMenu;
