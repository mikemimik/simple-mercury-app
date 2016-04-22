'use strict';

var h = require('nhg/h');

// Components
var inspect = require('../inspect');

module.exports = routeData;

function routeData(state, first) {
  return h('div', [
    h('h1', 'Async Route'),
    h('span', 'The state has been updated asynchronously: '),
    inspect(this)
  ]);
};