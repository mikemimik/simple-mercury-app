var Document = require('nhg/document');
var StartApp = require('nhg/app');
var App = require('./app');

module.exports = Init;

function Init () {
  var state = App();

  return StartApp(Document.body, state, App.render);
}
