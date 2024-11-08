const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const schemaOfUser = require("./userModel");

app.get("/", async function (req, res) {
  res.render("index");
});

app.get("/allPosts", async function (req, res) {
  let allPosts = await schemaOfUser.find();
  console.log(("allPosts-", allPosts));
  res.render("allposts", { allPosts });
});

app.post("/createApost", async function (req, res) {
  const { name, image } = req.body;
  console.log({ name, image });
  let aNewUserCreated = await schemaOfUser.create({ name, image });
  console.log("aNewUserCreated-", aNewUserCreated);
  res.redirect("/");
});

// deleteApost
app.get("/deleteApost/:id", async function (req, res) {
  const { id } = req.params;
  console.log(id);
  await schemaOfUser.findOneAndDelete({ _id: id });
  res.redirect("/allPosts");
});

app.listen(3000, function () {
  console.log("Running on Port 3000");
});
