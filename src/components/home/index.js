'use strict';

const State = require('nhg/state');
const h = require('nhg/h');

// Components
const List = require('../../components/list');

module.exports = Home;

function Home() {
  let state = State({
    list: List()
  });

  return state;
};

Home.render = function render(state) {
  return h('div', [
    h('h2', 'Home Component'),
    h('span', 'Home.render(state): ' + JSON.stringify(state)),
    List.render(state.list)
  ]);
};