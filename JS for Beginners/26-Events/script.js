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
