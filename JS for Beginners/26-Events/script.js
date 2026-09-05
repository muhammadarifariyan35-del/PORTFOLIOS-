const btn = document.getElementById("myBtn");
btn.innerText = "click and learnt Date and time";

btn.addEventListener("mousemove", function () {
  let date = new Date();
  document.getElementById("demo").innerText = date.toLocaleString();
});

//! --------------

let cli = document.getElementById("clint");

cli.addEventListener("mousemove", function (e) {
  document.getElementById("clintPara").innerText =
    `X axis: ${e.clientX}, Y axis: ${e.clientY}`;
});

//!_________________

const input = document.getElementById("in01");

input.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "M") {
    alert("press kora hoyeche");
  }
});

const input2 = document.getElementById("in02");

input2.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.key === "Z") {
    alert("press kora hoyeche");
  }
});

//!-------------

// const image = document.querySelector("img");

// image.addEventListener("load", function () {
//   alert("ছবিটি সফলভাবে লোড হয়েছে!");
// });

//!-----------

const itemList = document.getElementById("itemList");

itemList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked on: " + e.target.innerText);
  }
});

//!_________________

const btn2 = document.getElementById("btn");
const btn3 = document.getElementById("sbtn");

function sayHello() {
  console.log("Hello");
}

btn2.addEventListener("click", sayHello);

function stopSayHello() {
  btn2.removeEventListener("click", sayHello);
  console.log(
    "ইভেন্ট রিমুভ করা হয়েছে! এখন 'Click Me' বাটনে চাপলে আর Hello আসবে না।",
  );
}

btn3.addEventListener("click", stopSayHello);
