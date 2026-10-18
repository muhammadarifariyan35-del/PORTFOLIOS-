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

console.log(getAdultUser(usersList));
