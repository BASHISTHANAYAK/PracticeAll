const mongoose = require("mongoose");
let PORT = "mongodb://localhost:27017/userPart15";
mongoose.connect(PORT);

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});
module.exports = mongoose.model("user", userSchema);
