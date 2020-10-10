'use strict';

var ids = ['id1', 'id2'];
var messages = ids.map(function (value, index, list) {
  return 'ID of ' + index + ' element is ' + value + ' ';
}); // implicit return
