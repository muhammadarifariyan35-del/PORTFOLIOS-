// fetch("data.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// async function loadText(file) {
//   let response = await fetch(file);
//   let data = await response.text();
//   console.log(data);
// }

// loadText("data.txt");
//-------------

// let quoteText = document.getElementById("Quote");
// let authorText = document.getElementById("author");
// let quoteBtn = document.getElementById("my-btn");

// async function getQuote() {
//   try {
//     let response = await fetch("https://api.quotable.io/random");
//     let data = await response.json();

//     quoteText.innerText = `${data.content}`;
//     authorText.innerText = `${data.author}`;
//   } catch (err) {
//     quoteText.innerText = "উক্তি লোড করতে সমস্যা হয়েছে!";
//     console.log("Error Details", err);
//   }
// }

// quoteBtn.addEventListener("click", getQuote);

//---------
let quoteText = document.getElementById("Quote");
let authorText = document.getElementById("author");
let quoteBtn = document.getElementById("my-btn");

async function getQuote() {
  try {
    // শুধুমাত্র সাধারণ স্ট্রিং হিসেবে URL দিন
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();

    quoteText.innerText = `"${data.quote}"`;
    authorText.innerText = `-${data.author}`;
  } catch (err) {
    quoteText.innerText = "উক্তি লোড করতে সমস্যা হয়েছে!";
    console.log("Error Details", err);
  }
}

quoteBtn.addEventListener("click", getQuote);