import React, { Component } from "react";
import TopImage from "../TopImage";
import OurStory from "../OurStory";
import RandomQuote from "../RandomQuote";
import Reviews from "../Reviews";
import ContactUs from "../ContactUs";
import SpecialMenu from "../SpecialMenu";
import Footer from "../Footer";
import Navigation from "../Navigation";
import reviewsData from "../../data/reviewsData";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      reviewsData
    };
  }

  render() {
    console.log(this.state);
    let priceStyle = {
      textAlign: "center",
      background: "red",
      border: "10px solid rgba(255,255,255,.7)",
      height: "100px",
      width: "100px"
    };

    let titleStyle = {
      fontWeight: 600,
      fontSize: "0.9rem",
      textAlign: "center"
    };

    return (
      <div>
        <Navigation />
        <TopImage />
        <OurStory />
        <section id="specialMenu">
          <div className="container">
            <h5 className="comp-title">Special Menu</h5>
            <h2 style={{textAlign: "center"}}>
              Delicious Flavor of The Carribean
            </h2>
            <SpecialMenu />
          </div>
        </section>
        <RandomQuote />
        <Reviews reviewData={this.state.reviewsData} />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
