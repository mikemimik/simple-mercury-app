'use strict';

const State = require('nhg/state');
const h = require('nhg/h');
const Value = require('nhg/value');

module.exports = Item;

function Item (data) {
  data = data || {};
  let state = State({
    title: Value(data.title || 'no-data')
  });

  return state;
}

Item.render = function render (state) {
  return h('li', state.title);
};
