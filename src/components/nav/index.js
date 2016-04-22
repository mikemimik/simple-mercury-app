'use strict';

var h = require('nhg/h');
var Router = require('mercury-router');
var anchor = Router.anchor;

module.exports = navigation;

function navigation() {
  return h('ul', [
    h('li', [
      anchor({ href: '/' }, 'Home')
    ]),
    h('li', [
      anchor({ href: '/list' }, 'List')
    ]),
    h('li', [
      anchor({ href: '/list/1' }, 'Item 1')
    ])
  ]);
};