import React, { Component } from "react";

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewStatus: {
        currentReview: 0
      }
    };
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
  }

  rightClick() {
    const { reviewStatus } = this.state;
    const { reviewData } = this.props;
    let reviewS = reviewStatus.currentReview + 1;
    if (reviewStatus.currentReview == reviewData.length - 1) {
      console.log('Do not pass go');
    } else {
      this.setState({
        reviewStatus: {
          currentReview: reviewS
        }
      })
    }
  }

  leftClick() {
    const { reviewStatus } = this.state;
    const { reviewData } = this.props;
    let reviewS = reviewStatus.currentReview - 1;
    if (reviewStatus.currentReview == 0) {
      console.log('do not collect $200');
    } else {
      this.setState({
        reviewStatus: {
          currentReview: reviewS
        }
      })
    }
  }

  currentReview() {
    const { reviewStatus } = this.state;
    const { reviewData } = this.props;
    console.log(reviewData);
    return (
      <div>
        <h5 className="comp-title">Reviews</h5>
        <h2>{reviewData[reviewStatus.currentReview].company}</h2>
        <h4>"{reviewData[reviewStatus.currentReview].highlight}"</h4>
        <p>{reviewData[reviewStatus.currentReview].review}</p>
        <div className="author">
          <strong>{reviewData[reviewStatus.currentReview].author}</strong> - <em>{reviewData[reviewStatus.currentReview].authorInfo}</em>
        </div>
      </div>
    );
  }

  render() {
    const { reviewStatus } = this.state;
    const { reviewData } = this.props;
    return (
      <section id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="side-img">
                <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              {this.currentReview()}
              <div className="arrows">
                <i onClick={this.leftClick} className={`fas fa-arrow-left ${(reviewStatus.currentReview > 0) ? 'ready' : ''}`} />
                <i onClick={this.rightClick} className={`fas fa-arrow-right ${(reviewStatus.currentReview == reviewData.length -1) ? '' : 'ready'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Reviews;
