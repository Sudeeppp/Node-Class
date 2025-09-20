import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartItems: { type: Array, default: [] },
    gender: { type: String, enum: ["male", "female", "other"] },
    address: {
        city: String,
        state: String,
        pincode: Number,
    }
})

export default userSchema; // export default userSchema;