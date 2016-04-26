'use strict';

const State = require('nhg/state');
const h = require('nhg/h');
const Value = require('nhg/value');

// Components
const Home = require('./components/home');
const AddItem = require('./components/add-item');

module.exports = App;

function App () {
  let state = State({
    title: Value('Simple Mercury App'),
    home: Home(),
    addItem: AddItem()
  });

  return state;
}

App.render = function render (state) {
  let appState = JSON.stringify(state);

  return h('div', [
    h('h1', state.title),
    h('span', 'App.render(state): ' + appState),
    Home.render(state.home),
    AddItem.render(state.addItem)
  ]);
};
