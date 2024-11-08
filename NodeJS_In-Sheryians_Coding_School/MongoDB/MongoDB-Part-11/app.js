const express = require("express");
const app = express();

// userModel
const userModel = require("./usermodel");
console.log("userModel-", userModel);

app.get("/", function (req, res) {
  res.send("This is Home");
});

app.get("/create", async function (req, res) {
  let aNewUser = await userModel.create({
    name: "Sivam",
    phone: "456464654747457",
  });
  res.send(`A aNewUser ${aNewUser}`);
});

app.get("/read", async function (req, res) {
  let users = await userModel.find();
  res.send(users);
});

app.get("/readAuser", async function (req, res) {
  let Auser = await userModel.findOne({ _id: "672e02e9da1bd30fa68c9fd0" });
  res.send(Auser);
});

app.get("/updateAuser", async function (req, res) {
  let AuserUpdate = await userModel.findOneAndUpdate(
    { _id: "672e02e9da1bd30fa68c9fd0" },
    { phone: "46446" }
  );
  console.log(AuserUpdate);
  res.send(`${AuserUpdate["name"]} ,updated`);
});

app.get("/deleteAuser", async function (req, res) {
  let AuserUpdate = await userModel.findOneAndDelete({
    _id: "672e02deec90c7aac24b67a1",
  });
  console.log(AuserUpdate);
  res.send(`${AuserUpdate["name"]} ,deleted`);
});

app.listen("4000", function () {
  console.log("Port running on 4000..");
});
