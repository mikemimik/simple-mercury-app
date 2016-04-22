'use strict';

var h = require('nhg/h');
var State = require('nhg/state');

module.exports = home;

function home(initState) {
  var state = State({
    items: [
      { name: 'one' },
      { name: 'two' },
      { name: 'three' }
    ]
  });

  return state;
};

home.render = function render(state) {
  return h('div', [
    h('h1', 'Home Component'),
    h('ul', state.items.map(function toItem(item) {
      return h('li', [
        h('span', item.name)
      ]);
    })),
    // below is testing
    h('hr'),
    h('div', [
      h('h3', [ 'inspecting objects']),
      h('p', 'this: ' + JSON.stringify(this)),
      h('p', 'state: ' + JSON.stringify(state)),
    ])
  ]);
}