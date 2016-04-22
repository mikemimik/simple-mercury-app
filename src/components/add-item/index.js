'use strict';

var h = require('nhg/h');
var State = require('nhg/state');
var Send = require('nhg/send');

module.exports = addItem;

function addItem(state) {
  var state = State({
    channels: {
      click: doSomething
    }
  });

  return state;
}

addItem.render = function render(state) {
  return h('input.button', {
    type: 'button',
    value: 'Add',
    'ev-click': Send(someState.channels.click, 'some data')
  });
};