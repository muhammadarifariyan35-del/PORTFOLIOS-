const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes");

const app = {};

app.config = {
  timeBetweenQuotes: 2000,
};

app.printAQuote = function printAQuote() {
  const allQuotes = quotesLibrary.allQuotes();

  const numberOfQuotes = allQuotes.length;

  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  const selectedQutoe = allQuotes[randomNumber - 1];

  console.log(selectedQutoe);
};

app.indefiniteLoop = function indefiniteLoop() {
  setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};


app.indefiniteLoop()