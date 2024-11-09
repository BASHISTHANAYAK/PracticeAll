const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", function (req, res) {
  // for test seting cookie
  res.cookie("name", "nayak");
  res.send("Home");
});

// app.get("/readCookies", function (req, res) {
//   // for test seting cookie
//   let result = req.cookies;
//   res.send(result);
// });

// to make something hashed using bcrypt..
app.get("/bcryptPassword", function (req, res) {
  bcrypt.hash("aDemoPassword", 12, function (err, hash) {
    //this time hashed result is , it will change -$2b$10$QlRC1/z2KDQDdKWzCWwABO18g4B.eDr6fR9T8c5KevnC9b71LFmqK
    res.send(hash);
  });
});

//to make something decrypt
app.get("/decryptPassword", function (req, res) {
  bcrypt.compare(
    "aDemoPassword",
    "$2b$10$QlRC1/z2KDQDdKWzCWwABO18g4B.eDr6fR9T8c5KevnC9b71LFmqK",
    function (err, result) {
      res.send(result);
    }
  );
});

app.listen(3000, function () {
  console.log("Running on port 3000..");
});
