'use strict';

// Modules
// var partial(require('lodash.partial'));
const routes = require('./routes');
const AppRouter = require('./router');

module.exports = Init;

function Init () {
  let state = AppRouter(routes);

  return state;
}
