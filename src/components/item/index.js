'use strict';

var State = require('nhg/state');
var h = require('nhg/h');

module.exports = Item;

function Item(initState) {
  var state = State({

  });

  return state;
}

Item.render = function render(state) {
  return h('li', state.name);
}