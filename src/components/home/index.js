'use strict';

var h = require('nhg/h');
var State = require('nhg/state');

var List = require('../../components/list');

module.exports = home;

function home(initState) {
  var state = State({
    list: List()
  });

  return state;
};

home.render = function render(state) {
  return h('div', [
    h('h1', 'Home Component'),
    List.render(state.list)
  ]);
}