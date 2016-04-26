'use strict';

const State = require('nhg/state');
const h = require('nhg/h');
const SendSubmit = require('nhg/send-submit');
const Send = require('nhg/send');
const Value = require('nhg/value');
const Struct = require('nhg/struct');

// Components
const List = require('../../components/list');
const Item = require('../../components/item');

module.exports = addItem;

function addItem (data) {
  let state = State({
    text: Struct({
      value: Value('item-value'),
      placeholder: Value('item value')
    }),
    button: Struct({
      value: Value('Add')
    }),
    channels: {
      submit: createItem
    }
  });

  return state;
}

addItem.render = function render (state) {
  return h('form', {

    // TOOD: what data is passed from SendSubmit to the channel function?
    'ev-submit': SendSubmit(state.channels.submit, 'some data')
  }, [
    h('input.text', {
      type: 'text',
      name: state.text.value,
      placeholder: state.text.placeholder
    }),
    h('input.button', {
      type: 'button',
      value: state.button.value,

      // TODO: figure what data is passed from Send to the channel function
      'ev-click': Send(state.channels.submit, 'junk data')
    })
  ]);
};

function createItem (state, data, first) {
  console.log('Button clicked! Data below');
  console.log(state);
  console.log(data);
  console.log(data['item-value']);

  // Create a new item from the data
  let newItem = Item({ title: 'create-item' });

  // Add new item to item list
  let list = List();
}
