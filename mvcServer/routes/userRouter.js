import express from "express";
import { userLogin, userSignup } from "../controller/userController.js";
const userRouter = express.Router();

//api belongs to user
userRouter.get("/", (req, res) => res.send("user routing is working")) //demo


//user signup api
userRouter.post("/signup", userSignup); //http://localhost:5000/api/v1/user/signup

//user login api
userRouter.post("/login",userLogin)  // http://localhost:5000/api/v1/user/login

export default userRouter; // export default userRouter;