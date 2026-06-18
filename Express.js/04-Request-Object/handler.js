const handler = (req, res) => {
  // if (req.accepts("html")) {
  //   res.render();
  // } else {
  //   res.send("Hello world");
  // }

  console.log(req.get("connection"));
  res.send("hello world");
};

module.exports = handler;
 