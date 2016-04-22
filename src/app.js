'use strict';

var Struct = require('nhg/struct');
var h = require('nhg/h');
var Value = require('nhg/value');
var Router = require('mercury-router');
var anchor = Router.anchor;
var routes = require('./routes');

// Components
var nav = require('./components/nav');

module.exports = App;

function App (initialState) {
  var state = Struct({
    title: Value('Simple Mercury App'),
    route: Router()
  });

  return state;
}

App.render = function (state) {
  return h('div', [
    h('h1', state.title),
    nav(),
    Router.render(state, routes)
  ]);
};