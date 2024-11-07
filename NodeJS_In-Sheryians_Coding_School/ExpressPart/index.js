const express = require("express");
const app = express();

// adding a simple middleware
app.use(function (req, res, next) {
  console.log("passed by middleware ...");
  next();
});

app.get("/", function (req, res) {
  res.send("Hi i am bashistha nayak , i am a software developer ,Thanks");
});

//creatingn  a /about route
app.get("/about", function (req, res) {
  res.send("This is /about page.");
});
app.listen(3000);
