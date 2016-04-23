'use strict';

const Document = require('nhg/document');
const StartApp = require('nhg/app');
const App = require('./app');

module.exports = Init;

function Init () {
  let state = App();

  return StartApp(Document.body, state, App.render);
}
