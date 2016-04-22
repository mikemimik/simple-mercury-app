'use strict';

var State = require('nhg/state');
var h = require('nhg/h');
var Array = require('nhg/array');

var Item = require('../../components/item');

module.exports = List;

function List(initState) {
  var state = State({
    items: Array([
      Item({name: 'one'}),
      Item({name: 'two'}),
      Item({name: 'three'})
    ])
  });
}

List.render = function render(state) {
  return h('ul', state.items.map(
    function itemRender(item) {
      return Item.render(item.name);
    })
  );
};