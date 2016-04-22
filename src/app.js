'use strict';

var State = require('nhg/state');
var h = require('nhg/h');
var Value = require('nhg/value');

// Components
var home = require('./components/home');
var addItem = require('./components/add-item');

module.exports = App;

function App(initialState) {
  var state = State({
    title: Value('Simple Mercury App')
  });

  return state;
}

App.render = function render(state) {
  return h('div', [
    h('h1', state.title),
    home.render(state),
    // addItem()
  ]);
};