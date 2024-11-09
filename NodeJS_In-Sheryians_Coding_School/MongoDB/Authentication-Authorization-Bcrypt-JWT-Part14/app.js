const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const userSchema = require("./models/userModel");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", async function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  const { email, password } = req.body;
  bcrypt.hash(password, 12, async function (err, hash) {
    let newUser = await userSchema.create({ email, password: hash });
    console.log(newUser);
    let token = jwt.sign({ email: email }, "myjwt");
    res.cookie("token",token);
    res.redirect("/register");
  });
});

// app.get("/readCookies", function (req, res) {
//   // for test seting cookie
//   let result = req.cookies;
//   res.send(result);
// });

// // to make something hashed using bcrypt..
// app.get("/bcryptPassword", function (req, res) {
//   bcrypt.hash("aDemoPassword", 12, function (err, hash) {
//     res.send(hash);
//   });
// });

// //to make something decrypt
// app.get("/decryptPassword", function (req, res) {
//   bcrypt.compare(
//     "aDemoPassword",
//     "$2b$10$QlRC1/z2KDQDdKWzCWwABO18g4B.eDr6fR9T8c5KevnC9b71LFmqK",
//     function (err, result) {
//       res.send(result);
//     }
//   );
// });

// JWT
// app.get("/signInJwt", function (req, res) {
//   var token = jwt.sign({ email: "bashistha@gmail.com" }, "shhhhh");
//   res.send(token);
// });

// app.get("/verifyJwt", function (req, res) {
//   var decoded = jwt.verify(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhc2hpc3RoYUBnbWFpbC5jb20iLCJpYXQiOjE3MzExODE4ODV9.NaEFD7YS2Ck34XHLqz-GefZRqaAEOLwY4uPZvWNFvo8",
//     "shhhhh"
//   );
//   res.send(decoded);
// });

app.listen(3000, function () {
  console.log("Running on port 3000..");
});
