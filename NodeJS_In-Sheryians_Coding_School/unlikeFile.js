// its like deleting file
const fs = require("fs");

fs.unlink("./makingAcopyyFIle.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file has been deleted.");
  }
});
