import App from './App/App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { render } from 'react-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
