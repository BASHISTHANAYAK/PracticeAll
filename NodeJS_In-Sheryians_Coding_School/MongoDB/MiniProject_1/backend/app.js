import express from "express";
import dotenv from "dotenv";
import userRoute from "./Routes/user.js";
// import adminRoutes from "./Routes/admin.js"
import connectDB from "./db_connection/mongo.js";
import cookieParser from "cookie-parser";

dotenv.config(); // Move this here

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// user route
// app.use("/admin", adminRoutes)
app.use("/user", userRoute);

connectDB();

app.listen(port, () => {
    console.log(`Your app is running on port ${port}`);
});
