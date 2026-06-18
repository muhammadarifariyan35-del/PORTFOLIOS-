// setTimeout(() => {
//   console.log("hello your time is up");
// }, 0);

// const a = 5;
// console.log(a);

// console.log(__dirname);
// console.log(__filename);

// const people2 = require("./people");
// console.log(people2);

const _ = require("lodash");
let people = require("./people");
console.log(_.first(people));
console.log(people[people.length - people.length]);
