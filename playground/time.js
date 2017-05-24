var moment = require('moment');

var date = moment();
date.add(000, 'year');
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'))

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));