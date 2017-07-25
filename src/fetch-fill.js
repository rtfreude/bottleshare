// simple polyfill for fetch
const FetchConstructor = require("fetch-ponyfill");
const fetchFill = FetchConstructor({ Promise: Promise });
export default fetchFill;