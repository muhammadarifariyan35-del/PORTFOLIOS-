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

const input = document.getElementById("in01")

input.addEventListener("keydown", function(event){
  if(event.ctrlKey && event.key === "M"){
    alert("press kora hoyeche")
  }
})

const input2 = document.getElementById("in02")

input2.addEventListener("keydown", function(event){
  if(event.shiftKey && event.key === "Z"){
    alert("press kora hoyeche")
  }
})