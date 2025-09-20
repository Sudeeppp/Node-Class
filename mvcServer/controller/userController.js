import User from "../model/userModel.js";
import { createHashPass, comparePassword } from "../utils/bcrypt.js"; // import bcrypt functions
import { generateToken } from "../utils/jwt.js";



export const userSignup = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
       if(!data.email || !data.password || !data.firstName){
            return res.status(400).send({error:" Provide All fields are required"});
        }
       else {
           //create a hash password
           const hashPassword = await createHashPass(data.password); //hash password
        //    data.password = hashPassword; //update the password with hash password
 
           //store the data in db
           const userDetails = new User({...data,password:hashPassword}); //create instance of user model
           await userDetails.save(); //save the data in db
           return res.status(201).send({message:"User Registered"});
        }
        

    } catch (error) {
        return res.status(500).send({error:"Server error",msg:error.message});
    }
}


export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const user =await User.findOne({ email }); //find the user by email
            if (user) {
                //match the password
                const isMatched = await comparePassword(password, user.password); //compare the password
                if (isMatched) {
                    //generate the token
                    const token = generateToken({ id: user._id }, "7d"); //generate token
                    res.status(200).send({ message: "Login successfull", token }); //send the response
                }
                else {
                    return res.status(400).send({ error: "Password not matched" });
                }
            }
            else {
                return res.status(400).send({ error: "User is not registered" });
            }
        }
        else {
            return res.status(400).send({ error: "Provide all Fields" });
        }
    } catch (error) {
        return res.status(500).send({ error: "Server error", msg: error.message });
    }
}