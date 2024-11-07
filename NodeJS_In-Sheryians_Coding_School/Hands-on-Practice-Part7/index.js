const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    console.log("files-", files);
    // means here we are saying after read give the response
    res.render("index", { files: files }); //can send the data to ejs file also
  });
});

// post route for /create
app.post("/create", function (req, res) {
  let { title, details } = req.body;
  console.log(`title- ${title},details- ${details}`);
  fs.writeFile(
    `./files/${title.split(" ").join("")}.txt`,
    details,
    function () {
      // re directiong to / route
      res.redirect("/");
    }
  )
})

app.listen(3000, function () {
  console.log("Hands-on-Practice-Part7 Running on port 3000..");
});
