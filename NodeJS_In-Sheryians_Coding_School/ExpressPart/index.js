const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding a simple middleware
app.use(function (req, res, next) {
  console.log("passed by middleware ...");
  next();
});

app.get("/", function (req, res) {
  res.send("Hi i am bashistha nayak , i am a software developer ,Thanks");
});

//creatingn  a /about route
app.get("/about", function (req, res, next) {
  //   res.send("This is /about page.");
  return next(new Error("Error in /about page please check."));
});

// Error handling
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("SOmething went wrong..");
});
app.listen(3000);
