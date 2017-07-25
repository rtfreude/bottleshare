import { StaticRouter, matchPath } from 'react-router-dom';
import App                         from './App/App';
import Fetchfill                   from './fetch-fill';
import React                       from 'react';
import express                     from 'express';
import path                        from 'path';
import { renderToString }          from 'react-dom/server';

const { API_KEY }  = require('./secrets');
const assets       = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server       = express();
const morgan       = require('morgan');

const request      = require('request');
const fetch        = Fetchfill.fetch

server.get('/beername', (req, res) => {
  console.log('backend beernam', req.query.beerRequest)
  let userReq = req.query.beerRequest;

  var url = 'http://api.brewerydb.com/v2/beers?key=' + API_KEY + '&name='+ userReq;

  request(url, function(err, resp, body) {
    let parsedBody = JSON.parse(body);
    res.send(parsedBody);
  })

});

//a rough search endpoint used for grabbing autocomplete input--autocomplete needs to be improved
server.get('/searchbeer', (req, res) => {
  console.log(req.query.inputValue)
  let userReq = req.query.inputValue; //hardcoded search criteria, I would Exptect 'Naughty 90' to be one of the results
  let allBeers = [];  //array to be returned to the user

  const getAllBeers = function(page) {
    let pageNum = page || 1;
    let beers = [];

    let url = 'http://api.brewerydb.com/v2/search?key=' + API_KEY + '&q=' + userReq + '&type=beer&p=' + pageNum;

    fetch(url)
      .then(res => res.json())
      .then(body => {
        if (!body.data) {
          return beers;
        }
        for(let j = 0; j < body.data.length; j++) {
          beers.push(body.data[j].name);
        }
      return beers;
    }).then(beers => {
      if (!beers.length) {
        var flattened = [].concat.apply([], allBeers); //used to flatten the returned arrays
        res.send(flattened);
        return;

      } else if (pageNum >= 2) {
        var flattened = [].concat.apply([], allBeers);
        res.send(flattened);
        return;

      } else {
        allBeers.push(beers);
        getAllBeers(pageNum + 1);
      }
    });
  };
  getAllBeers(1); //start query on page 1
});

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {

    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
        <script src="${assets.client.js}" defer></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });


export default server;
