exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_App__ = __webpack_require__(\"./src/App/App.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__);\nvar _jsxFileName = '/Users/RFreude/Desktop/bottleshare/bottleshare/src/server.js';\n\n\n\n\n\n\n\n\nvar _require = __webpack_require__(\"./src/secrets.js\"),\n    API_KEY = _require.API_KEY;\n\nvar assets = __webpack_require__(\"./build/assets.json\");\n\nvar server = __WEBPACK_IMPORTED_MODULE_3_express___default()();\n\nserver.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static(\"/Users/RFreude/Desktop/bottleshare/bottleshare/public\")).get('/*', function (req, res) {\n  console.log(res.body);\n  var context = {};\n  var markup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__[\"renderToString\"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(\n    __WEBPACK_IMPORTED_MODULE_0_react_router_dom__[\"StaticRouter\"],\n    { context: context, location: req.url, __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21\n      }\n    },\n    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__App_App__[\"a\" /* default */], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22\n      }\n    })\n  ));\n\n  if (context.url) {\n    res.redirect(context.url);\n  } else {\n    res.status(200).send('<!doctype html>\\n    <html lang=\"\">\\n    <head>\\n        <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\\n        <meta charSet=\\'utf-8\\' />\\n        <title>Welcome to Razzle</title>\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n        ' + (assets.client.css ? '<link rel=\"stylesheet\" href=\"' + assets.client.css + '\">' : '') + '\\n        <script src=\"' + assets.client.js + '\" defer></script>\\n        <!-- Latest compiled and minified CSS -->\\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css\">\\n\\n        <!-- Optional theme -->\\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css\">\\n    </head>\\n    <body>\\n        <div id=\"root\">' + markup + '</div>\\n    </body>\\n</html>');\n  }\n});\n\nserver.get('/beername', function (req, res) {\n  console.log('backend beernam', req.query.beerRequest);\n  var userReq = req.query.beerRequest;\n\n  var url = 'http://api.brewerydb.com/v2/beers?key=' + API_KEY + '&name=' + userReq;\n\n  request(url, function (err, resp, body) {\n    var parsedBody = JSON.parse(body);\n    res.send(parsedBody);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5qcz8zMGE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnL1VzZXJzL1JGcmV1ZGUvRGVza3RvcC9ib3R0bGVzaGFyZS9ib3R0bGVzaGFyZS9zcmMvc2VydmVyLmpzJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAvQXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9zZWNyZXRzJyksXG4gICAgQVBJX0tFWSA9IF9yZXF1aXJlLkFQSV9LRVk7XG5cbnZhciBhc3NldHMgPSByZXF1aXJlKHByb2Nlc3MuZW52LlJBWlpMRV9BU1NFVFNfTUFOSUZFU1QpO1xuXG52YXIgc2VydmVyID0gZXhwcmVzcygpO1xuXG5zZXJ2ZXIuZGlzYWJsZSgneC1wb3dlcmVkLWJ5JykudXNlKGV4cHJlc3Muc3RhdGljKHByb2Nlc3MuZW52LlJBWlpMRV9QVUJMSUNfRElSKSkuZ2V0KCcvKicsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhyZXMuYm9keSk7XG4gIHZhciBjb250ZXh0ID0ge307XG4gIHZhciBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIFN0YXRpY1JvdXRlcixcbiAgICB7IGNvbnRleHQ6IGNvbnRleHQsIGxvY2F0aW9uOiByZXEudXJsLCBfX3NvdXJjZToge1xuICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyOiAyMVxuICAgICAgfVxuICAgIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHtcbiAgICAgIF9fc291cmNlOiB7XG4gICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXI6IDIyXG4gICAgICB9XG4gICAgfSlcbiAgKSk7XG5cbiAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgcmVzLnJlZGlyZWN0KGNvbnRleHQudXJsKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnPCFkb2N0eXBlIGh0bWw+XFxuICAgIDxodG1sIGxhbmc9XCJcIj5cXG4gICAgPGhlYWQ+XFxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XFxuICAgICAgICA8bWV0YSBjaGFyU2V0PVxcJ3V0Zi04XFwnIC8+XFxuICAgICAgICA8dGl0bGU+V2VsY29tZSB0byBSYXp6bGU8L3RpdGxlPlxcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XFxuICAgICAgICAnICsgKGFzc2V0cy5jbGllbnQuY3NzID8gJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJyArIGFzc2V0cy5jbGllbnQuY3NzICsgJ1wiPicgOiAnJykgKyAnXFxuICAgICAgICA8c2NyaXB0IHNyYz1cIicgKyBhc3NldHMuY2xpZW50LmpzICsgJ1wiIGRlZmVyPjwvc2NyaXB0PlxcbiAgICAgICAgPCEtLSBMYXRlc3QgY29tcGlsZWQgYW5kIG1pbmlmaWVkIENTUyAtLT5cXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiPlxcblxcbiAgICAgICAgPCEtLSBPcHRpb25hbCB0aGVtZSAtLT5cXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAtdGhlbWUubWluLmNzc1wiPlxcbiAgICA8L2hlYWQ+XFxuICAgIDxib2R5PlxcbiAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4nICsgbWFya3VwICsgJzwvZGl2PlxcbiAgICA8L2JvZHk+XFxuPC9odG1sPicpO1xuICB9XG59KTtcblxuc2VydmVyLmdldCgnL2JlZXJuYW1lJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKCdiYWNrZW5kIGJlZXJuYW0nLCByZXEucXVlcnkuYmVlclJlcXVlc3QpO1xuICB2YXIgdXNlclJlcSA9IHJlcS5xdWVyeS5iZWVyUmVxdWVzdDtcblxuICB2YXIgdXJsID0gJ2h0dHA6Ly9hcGkuYnJld2VyeWRiLmNvbS92Mi9iZWVycz9rZXk9JyArIEFQSV9LRVkgKyAnJm5hbWU9JyArIHVzZXJSZXE7XG5cbiAgcmVxdWVzdCh1cmwsIGZ1bmN0aW9uIChlcnIsIHJlc3AsIGJvZHkpIHtcbiAgICB2YXIgcGFyc2VkQm9keSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgcmVzLnNlbmQocGFyc2VkQm9keSk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3NlcnZlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ })

};