import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from '../LandingPage/Home';
import Dashboard from '../Dashboard/Dashboard'
//require('../styles/app.scss');
import './App.css';

const App = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dash" component={Dashboard} />
  </Switch>;

export default App;
