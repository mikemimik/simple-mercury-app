'use strict';

var Struct = require('nhg/struct');
var h = require('nhg/h');
var Value = require('nhg/value');

// Components
var home = require('./components/home');

module.exports = App;

function App(initialState) {
  var state = Struct({
    title: Value('Simple Mercury App')
  });

  return state;
}

App.render = function render(state) {
  return h('div', [
    h('h1', state.title),
    home()
  ]);
};