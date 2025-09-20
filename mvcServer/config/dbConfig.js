import mongoose from "mongoose";
import { config } from "dotenv";
config();

let dbURL = process.env.DB_URL;

//let dbURL = "mongodb://127.0.0.1:27017/myEcom";

async function dbConnect() {
    try {
        await mongoose.connect(dbURL);
        console.log("MongoDB database connected");
    } catch (error) {
        console.log("database connection error: ");
    }
}

export default dbConnect;