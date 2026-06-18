const handle = (req, res) => {
  res.send(" This is my post home page ");
  console.log(req.app.locals.name);
};

module.exports = handle;
