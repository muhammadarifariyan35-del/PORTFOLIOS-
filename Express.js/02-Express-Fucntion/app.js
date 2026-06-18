const express = require("express");

const app = express();

// app.use(express.json());
// app.use(express.raw())
// app.use(express.text())
// app.use(express.urlencoded());

// app.use(express.static(__dirname + '/public/', {
//   index: 'home.html',
// }))

// const Router = express.Router({
//   caseSensitive: true,
// })
// app.use(Router)

app.get("/about", (req, res) => {
  res.send("This is my about page");
});

app.post("/", (req, res) => {
  // console.log(req.body); // রিকোয়েস্টের সময় বডি তে তথ্য দিয়ে পাঠানো যায়।
  res.send(" This is my post home page ");
});

app.listen(9000, () => {
  console.log("listening on port 9000");
});
