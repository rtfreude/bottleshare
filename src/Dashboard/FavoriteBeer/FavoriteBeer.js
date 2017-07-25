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
      <div className="beer-container">
        <div className="beer-header">
          <p className="header-text"> My Favorite Brews! </p>
        </div>
        <div className="beer-body">

            <div className="beer-card">
              <p className="beer-name">{this.state.beerName}</p>
              <p className="beer-type">{this.state.beerType}</p>
              <p className="beer-rating">{this.state.beerRating}</p>
            </div>

        </div>
      </div>
    );
  }
}

export default FavoriteBeer;