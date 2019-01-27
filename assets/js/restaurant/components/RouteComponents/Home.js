import React, { Component } from "react";
import TopImage from "../TopImage";
import OurStory from "../OurStory";
import RandomQuote from "../RandomQuote";
import Reviews from "../Reviews";
import ContactUs from "../ContactUs";
import SpecialMenu from "../SpecialMenu";
import Footer from "../Footer";
import Navigation from "../Navigation";


let fakeServerData = [
  {
    company: 'Blavity',
    author: 'Tyrone Biggums',
    highlight: 'Best Restaurant in Queens',
    authorInfo: 'Winner of The Crack Rock Masters',
    review: 'Drugs and alcohol have ruined my life. ipsum dolor amet mollit schlitz hammock, street art shabby chic shaman taiyaki man bun brunch exercitation quis. Cred adipisicing swag selvage everyday carry bushwick poutine art party deep v mlkshk voluptate occupy. Anim beard meh proident ugh sed voluptate tilde hashtag wolf scenester affogato sunt magna irure. Occaecat do tumeric chillwave, shabby chic copper mug nulla edison bulb labore next level pitchfork la croix minim vice poutine. Kogi anim tilde roof party pork belly. Tousled in yr, schlitz palo santo street art bushwick laborum post-ironic culpa next level XOXO portland.'
  },
  {
    company: 'NBC',
    author: 'Joe Bastiachi',
    highlight: 'Best Restaurant in Queens',
    authorInfo: 'Winner of The Chef Masters',
    review: 'Lorem ipsum dolor amet mollit schlitz hammock, street art shabby chic shaman taiyaki man bun brunch exercitation quis. Cred adipisicing swag selvage everyday carry bushwick poutine art party deep v mlkshk voluptate occupy. Anim beard meh proident ugh sed voluptate tilde hashtag wolf scenester affogato sunt magna irure. Occaecat do tumeric chillwave, shabby chic copper mug nulla edison bulb labore next level pitchfork la croix minim vice poutine. Kogi anim tilde roof party pork belly. Tousled in yr, schlitz palo santo street art bushwick laborum post-ironic culpa next level XOXO portland.'
  },
  {
    company: 'The New York Times',
    author: 'Joe Bastiachi',
    highlight: 'Best Restaurant in Queens',
    authorInfo: 'Winner of The Chef Masters',
    review: 'Lorem ipsum dolor amet mollit schlitz hammock, street art shabby chic shaman taiyaki man bun brunch exercitation quis. Cred adipisicing swag selvage everyday carry bushwick poutine art party deep v mlkshk voluptate occupy. Anim beard meh proident ugh sed voluptate tilde hashtag wolf scenester affogato sunt magna irure. Occaecat do tumeric chillwave, shabby chic copper mug nulla edison bulb labore next level pitchfork la croix minim vice poutine. Kogi anim tilde roof party pork belly. Tousled in yr, schlitz palo santo street art bushwick laborum post-ironic culpa next level XOXO portland.'
  }
]

class Home extends Component {
  constructor() {
    super();
    this.state = {
      fakeServerData
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
        <Reviews reviewData={this.state.fakeServerData} />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
