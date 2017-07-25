import React, { Component } from 'react';
import FavoriteBrewery      from './FavoriteBrewery/FavoriteBrewery';
import FavoriteBeer         from './FavoriteBeer/FavoriteBeer';
import SearchBeer           from './SearchBeer/SearchBeer'

import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="search-bar">
          <SearchBeer />
        </div>
        <div className="dashboard-cards">
          <FavoriteBrewery />
          <FavoriteBeer />
        </div>
      </div>
    );
  }
}

export default Dashboard;