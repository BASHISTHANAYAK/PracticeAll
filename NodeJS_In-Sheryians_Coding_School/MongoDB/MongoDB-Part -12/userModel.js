const mongoose = require("mongoose");
const PORT = "mongodb://127.0.0.1:27017/mongopractice";

mongoose.connect(PORT);

let userSchema = mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
