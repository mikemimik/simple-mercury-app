'use strict';

var h = require('nhg/h');

module.exports = inner;

function inner() {
  return h('div', [
    h('span', 'something inside')
  ]);
};