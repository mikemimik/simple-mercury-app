'use strict';

const State = require('nhg/state');
const h = require('nhg/h');
const Array = require('nhg/array');
const Struct = require('nhg/struct');

const Item = require('../../components/item');

module.exports = List;

function List() {
  var state = Struct({
    items: Array([
      Item({title: 'one'}),
      Item({title: 'two'}),
      Item({title: 'three'})
    ])
  });

  return state;
};

List.render = function render(state) {

  return h('div', [
    h('h3', 'List Component'),
    h('div', 'List.render(state): ' + JSON.stringify(state)),
    h('ul', renderItems(state.items))
  ]);
};

function renderItems(items) {
  return items.map(function render(item) {
    return Item.render(item);
  });
};