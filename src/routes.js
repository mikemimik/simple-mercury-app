'use strict';

var h = require('nhg/h');

// Components
var home = require('./components/home');
var list = require('./components/list');
var listItem = require('./components/list-item');
var data = require('./components/data');

module.exports = {
  '/': home,
  '/data': data,
  '/list': list,
  '/list/:id': listItem
};