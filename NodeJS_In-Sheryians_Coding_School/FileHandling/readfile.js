const fs = require("fs");
fs.writeFile("hi.txt", "my name is Bashistha and i am a software engineer",(err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("Done bro")
    }

});
