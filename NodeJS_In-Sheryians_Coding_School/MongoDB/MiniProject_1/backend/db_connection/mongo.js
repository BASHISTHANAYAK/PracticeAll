import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDb connected...")

    } catch (error) {
        if (error) {
            console.log(error.message)
            process.exit(1)
        }
    }
}
export default connectDB