'use strict';

var h = require('nhg/h');

module.exports = routeAsync;

function routeAsync() {
  return h('div', [
    h('h1', 'Async Route'),
    h('span', 'The state has been updated asynchronously: ' + state.isUpdated)
  ])
};