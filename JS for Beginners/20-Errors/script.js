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

//!===

let result = "Not Active.";
let isActive = false;
if (isActive == true) {
  result = "Active!";
}
console.log(result);

//*---

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;

  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";

    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
    else {
      throw "Okay";
    }
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }finally{
    document.getElementById("demo").value = ""
  }
}
