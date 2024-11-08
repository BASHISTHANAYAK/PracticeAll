const mongose = require("mongoose");

const PORT = "mongodb://127.0.0.1:27017/mongopractice";
mongose.connect(PORT);

const userSchema = mongose.Schema({
  name: String,
  phone: String,
});

module.exports = mongose.model("user", userSchema);
