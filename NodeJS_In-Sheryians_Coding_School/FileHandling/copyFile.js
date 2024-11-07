const fs = require("fs");
fs.copyFile(
  "./software.txt",
  "../NodeJS_In-Sheryians_Coding_School/makingAcopyyFIle.txt",
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("a copy file has been generated..");
    }
  }
);
