var h = require('nhg/h');

// Components
var home = require('./components/home');
var list = require('./components/list');
var listItem = require('./components/list-item');

module.exports = {
  '/': home,
  '/list': list,
  '/list/:id': listItem
};