let x = 5;
try {
  let y = 55;
  x = y + 2;
} catch (err) {
  console.log(err);
}

let anna = 83;
try {
  anna(3);
} catch (err) {
  console.log(err.name);
}

let num = 200;
try {
  num.toPrecision(690);
} catch (err) {
  console.log(err.name);
}

try {
  decodeURI("%%");
} catch (err) {
  console.log(err.name);
}

try {
  let x = Math.round(55.3);
} catch (err) {
  console.log(err.name + " " + err.description);
}
