import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config(); //load env variables

// const secretKey = "mykey34654154654163163"
const secretKey = process.env.JWT_SECRET

  
//generate  Token
export const generateToken = (data,expireTime) => {
    return jwt.sign(data,secretKey,{expiresIn:expireTime || "30d"})//generate token
}