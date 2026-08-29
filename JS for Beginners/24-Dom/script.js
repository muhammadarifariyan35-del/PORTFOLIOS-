document.getElementById("demo").innerHTML = "hello istar jahan jui";

function newFunction() {
  document.querySelector("p").style.fontSize = "xx-large";
  document.querySelector("p").style.color = "rgba(1, 163, 164,1.0)";
  document.querySelector("#demo").innerHTML =
    "hello <strong>Istar</strong> jahan";
}

let me = document.getElementById("me");
console.log(me.parentElement);
console.log(me.nextElementSibling);
console.log(me.previousElementSibling);

const family = document.getElementById("family");
console.log(family.children);

let newTag = document.createElement("li");
newTag.innerText = "new Item";
document.getElementById("myList").appendChild(newTag);
// newTag.remove();

let newParagraph = document.createElement("p");
newParagraph.innerText = "Hello my name is arif ariyan";
newParagraph.setAttribute("id", "myPara");
document.querySelector("body").append(newParagraph);

// ১. আগে এলিমেন্ট দুটোকে ধরে নিলাম
const btn = document.getElementById("myBtn");
const text = document.getElementById("text");

// ২. Event Listener বসানো
btn.addEventListener("keydown", function () {
  text.innerText = "তুমি বাটনে ক্লিক করেছ! ";
});

const myinput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  if (myinput.value.trim() === "") {
    return alert("দয়া করে কিছু লেখো!");
  }

  let li = document.createElement("li");
  li.innerText = myinput.value;
  document.getElementById("taskList").appendChild(li);

  myinput.value = "";

  li.className = "taskListLI";

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  li.appendChild(btn);

  btn.id = "Btn";

  btn.addEventListener("click", function () {
    li.remove();
  });
});

//__________________________

const myForm = document.getElementById("myForm");
const username = document.getElementById("username");
const errorMsg = document.getElementById("errorMsg");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value.trim() === "") {
    errorMsg.innerText = "নামের ফিল্ডটি খালি রাখা যাবে না!";
  } else if (username.value.trim().length < 3) {
    errorMsg.innerText = "নাম আন্তত তিন অক্ষরের হতে হবে!";
  } else {
    errorMsg.innerText = " ";
  }
});
