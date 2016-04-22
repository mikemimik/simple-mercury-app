'use strict';

// Modules
// var partial(require('lodash.partial'));
var routes = require('./routes');
var AppRouter = require('./router');

module.exports = Init;

function Init() {
  var state = AppRouter();

  return state;
};