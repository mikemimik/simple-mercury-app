'use strict';

var h = require('nhg/h');

module.exports = routeHome;

function routeHome(state, first) {
  return h('div', [
    h('h1', 'Home Route'),
    h('span', 'This is cool beans.'),
    h('div', [
      h('h3', [ 'inspecting objects']),
      h('p', 'this: ' + JSON.stringify(this))
    ])
  ]);
};