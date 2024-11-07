//deleting folder
const fs = require("fs");

fs.rm("./tempFold", { recursive: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("folder deleted.");
  }
});
