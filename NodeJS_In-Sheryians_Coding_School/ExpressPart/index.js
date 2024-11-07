const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hi i am bashistha nayak , i am a software developer ,Thanks");
});

app.listen(3000);
