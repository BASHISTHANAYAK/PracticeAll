const fs = require("fs");
fs.appendFile("hi.txt", "\nI will definetly be a software engineer",(err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("Done bro")
    }

});
