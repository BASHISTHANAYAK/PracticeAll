const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", function (req, res) {
  // for test seting cookie
  res.cookie("name", "nayak");
  res.send("Home");
});

app.get("/readCookies", function (req, res) {
  // for test seting cookie
  let result = req.cookies;
  res.send(result);
});

app.listen(3000, function () {
  console.log("Running on port 3000..");
});
