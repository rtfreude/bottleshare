import React, { Component } from 'react';
import './favoritebeer.css';

class FavoriteBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerName: 'Naughty 90',
      beerType: 'Ale',
      beerRating: 5
    }
  }

  render() {
    return (
      <div className="favbeer-container">
        <div className="favbeer-header">
          <p className="favheader-text"> My Favorite Brews! </p>
        </div>
        <div className="favbeer-body">

            <div className="favbeer-card">
              <p className="favbeer-name">{this.state.beerName}</p>
              <p className="favbeer-type">{this.state.beerType}</p>
              <p className="favbeer-rating">{this.state.beerRating}</p>
            </div>

        </div>
      </div>
    );
  }
}

export default FavoriteBeer;