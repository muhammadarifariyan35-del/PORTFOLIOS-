const express = require("express");
const app = express();
app.set('view engine', 'ejs')
// const admin = express();
// const premium = express();

// app.enable("case sensitive routing");

// const handle = require("./handle");

// app.locals.name = "Hello Bangladesh";

// admin.on('mount', function(parent){
//   console.log('admin mount');
//   console.log(parent);
// })

// admin.get("/dashbord/modarator", (req, res) => {
//     // console.log(admin.mountpath);

//   res.send("Welcome modarator home page");
// });

// app.use("/admin", admin);

// premium.get('/gold', (req, res)=> {
//     console.log(premium.mountpath);
//     res.send('you gold is so expensive')
// })

// app.use('/premium', premium)

// app.param("id", (req, res, next, id) => {
//   const user = {
//     userId: id,
//     name: "Bangladesh",
//   };
//   req.userDetails = user;
//   next();
// });

app
  .route("/about/mission")
  .get((req, res) => {
    res.render("./pages/about");
  })
  .post((req, res) => {
    res.send("welcome to Application home post");
  })
  .put((req, res) => {
    res.send("welcome to Application home put");
  });



app.listen(9000, () => {
  console.log("listening on port 9000");
});

// app.set("title", "Doctor");
// console.log(app.get("title"));
