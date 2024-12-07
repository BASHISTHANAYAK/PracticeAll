import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Add unique
    password: { type: String, required: true }
});


const userModel = mongoose.model("userInfo", userSchema)
export default userModel;