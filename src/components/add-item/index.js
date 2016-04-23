'use strict';

const h = require('nhg/h');
const State = require('nhg/state');
const Send = require('nhg/send');

module.exports = addItem;

function addItem (data) {
  let state = State({
    channels: {
      click: doSomething
    }
  });

  return state;
}

function doSomething () {

}

addItem.render = function render (state) {
  return h('input.button', {
    type: 'button',
    value: 'Add',
    'ev-click': Send(state.channels.click, 'some data')
  });
};
