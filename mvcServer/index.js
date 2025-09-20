import express from 'express';
import dbConnect from './config/dbConfig.js';
import userRouter from './routes/userRouter.js';

const app = express();

//middleware
app.use(express.json()); //to parse json data
app.use(express.urlencoded({extended: true})); //to parse urlencoded data

//routes/apis
//app.use("/user", userRouter); // userRouter middleware
app.use("/api/v1/user", userRouter); // userRouter middleware

//db connection
// dbConnect();

//server listening

app.listen(5000, () => {
    console.log("server is running in http://localhost:5000");
    //db connection
    dbConnect();
})