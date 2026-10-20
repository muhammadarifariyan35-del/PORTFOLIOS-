//! প্রবলেম ১: response.ok দিয়ে এরর হ্যান্ডলিং
async function fetchData(url) {
  let response = await fetch(url);
  if (response.ok) {
    console.log("Data fetched successfully!");
  } else {
    console.log(
      "Failed with status code and text: ",
      response.status,
      response.statusText,
    );
    return;
  }
  let data = await response.text();
  console.log(data);
}
fetchData("data.txt");

//! প্রবলেম ২: লোকাল JSON ফাইল পড়া
let para = document.getElementById("paragraph");

async function fetchJson(url) {
  let response = await fetch(url);
  let data = await response.json();

  para.innerText = " ";

  data.forEach((element) => {
    para.innerText += `${element.username} is a ${element.role}` + "\n";
  });
}
fetchJson("user.json");

//! প্রবলেম ৩: try...catch ও error handling মেলানো

async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error(" Your fetch did not work ");
    }

    let data = await response.json();
    console.log(`${data.title} \n ${data.body}`);
  } catch (err) {
    console.log(err);
  }
}

getPost();

//! প্রবলেম ৪: নেটওয়ার্ক এরর হ্যান্ডলিং ও লোডিং স্টেট

async function userFunction() {
  try {
    let message = "Loading...";
    console.log(message);

    let response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }

    let data = await response.json();
    message = data;
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

userFunction();

//! 🟢 ১. সহজ (Level 1): Array & Function Basic

const usersList = [
  { name: "Arif", age: 22 },
  { name: "Rahim", age: 15 },
  { name: "Tanvir", age: 19 },
];

function getAdultUser(users) {
  return users.filter((x) => x.age >= 18);
}

console.table(getAdultUser(usersList));

//! 🟡 মাঝারি (Level 2): DOM & Event Handling

let count = document.getElementById("count");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let my_count = Number(count.innerText);
  my_count++;
  count.innerText = my_count;

  if (my_count == 5) {
    count.style.backgroundColor = "rgba(44, 58, 71,1.0)";
  }
});

//! 🟠 ৩. একটু কঠিন (Level 3): Fetch API & Status Check

async function newFunction() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (response.ok) {
      let data = await response.json();
      console.log(`${data.title}, ${data.completed}`);
    } else {
      throw new Error(`${response.statusText}, ${response.status}`);
    }
  } catch (error) {
    console.log("Error message | " + error);
  }
}
newFunction();

//! 🔴 ৪. বেশ কঠিন (Level 4): JSON Processing & DOM Manipulation

async function jFunction() {
  try {
    let response = await fetch("/00-Practic/05-provlem-solving/products.json");

    if (!response.ok) {
      throw new Error(`${response.status}__${response.statusText}`);
    }

    let data = await response.json();

    let prodList = document.getElementById("product-list");

    data.forEach((Data) => {
      let list = document.createElement("li");
      list.innerText = `Name ${Data.name} Price ${Data.price} BDT`;
      prodList.appendChild(list);
    });
  } catch (error) {
    console.log("Error Message | " + error);
  }
}
jFunction();
