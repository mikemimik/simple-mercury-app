'use strict';

var h = require('nhg/h');
var Struct = require('nhg/struct');

module.exports = home;

function home(state) {
  var state = (state) ? state : Struct({

  });
};

home.render = function render(state) {
  return h('div', [
    h('h1', 'Home Route'),
    h('span', 'This is cool beans.'),
    h('div', [
      h('h3', [ 'inspecting objects']),
      h('p', 'this: ' + JSON.stringify(this)),
      h('p', 'state: ' + JSON.stringify(state)),
      h('p', 'others: ' + JSON.stringify(others))
    ])
  ]);
}