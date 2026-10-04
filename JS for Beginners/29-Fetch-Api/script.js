fetch("data.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

async function loadText(file) {
  let response = await fetch(file);
  let data = await response.text();
  console.log(data);
}

loadText("data.txt");
// -------------

let quoteText = document.getElementById("Quote");
let authorText = document.getElementById("author");
let quoteBtn = document.getElementById("my-btn");

async function getQuote() {
  try {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();

    quoteText.innerText = `${data.quote}`;
    authorText.innerText = `__ ${data.author}`;
  } catch (err) {
    quoteText.innerText = "উক্তি লোড করতে সমস্যা হয়েছে!";
    console.log("Error Details", err);
  }
}

quoteBtn.addEventListener("click", getQuote);

//---------

async function loadData(url) {
  let response = await fetch(url);

  if (!response.ok) {
    console.log("Error", response.status, response.statusText);
    return;
  }

  let data = await response.text();
  console.log(data);
}
loadData("daa.txt");
