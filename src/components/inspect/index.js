'use strict';

var h = require('nhg/h');

module.exports = inspect;

function inspect(state, first) {
  return h('div', [
    h('h3', ['inpect objects']),
    h('div', [
      h('p', 'state: ' + JSON.stringify(state)),
      h('p', 'first: ' + JSON.stringify(first))
    ])
  ]);
};