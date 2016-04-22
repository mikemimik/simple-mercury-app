'use strict';

var h = require('nhg/h');

module.exports = routeListItem;

function routeListItem(params) {
  return h('h1', 'List Item ' + params.id);
}