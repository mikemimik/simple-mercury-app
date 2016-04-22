var Struct = require('nhg/struct');
var h = require('nhg/h');

module.exports = App;

function App (initialState) {
  var state = Struct({
  });

  return state;
}

App.render = function (state) {
  return h('h1', 'Hello!');
};
