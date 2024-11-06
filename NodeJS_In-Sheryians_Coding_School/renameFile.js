const fs = require("fs");
fs.rename("./hi.txt","software.txt",(err)=>{
   if (err) {
    console.log(err)
   } else {
    console.log("file name changed")
   }
})