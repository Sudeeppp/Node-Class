import express from "express"
import mongoose from "mongoose"

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//connecting with mongodb
const mongoURL = "mongodb://127.0.0.1:27017/students"
//connect method
mongoose.connect(mongoURL)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err));
//connecting with a collection

//!declar collection schema
const MERNSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: String,
    age: Number,
    subject:Array
})
//! define the model
const MERN = mongoose.model("mernStudents",MERNSchema)

//apis
app.get("/students/mern", async (req, res) => {
    try {
        const data = await MERN.find()
        return res.status(200).send(data)
    }catch (err) {
        return res.status(500).send({err:"something went wrong" , msg:err.message})
    }
})

app.post("/add/mern", async (req, res) => {
    try {
        const data = req.body
        if (!data.name) return res.status(400).send({ error: "Provide all required fields" })
        //insert data in nmongodb
        const studentDetails = new MERN(data)
        await studentDetails.save()

        return res.status(201).send({ message: "Data saved in Db" })
    }catch (err) {
        return res.status(500).send({ err: "something went wrong", msg: err.message })
    }
})

const hostname = "127.0.0.2";
const port = 2000;

app.listen(port, hostname, () => {
    console.log("server running at http://" + hostname + ":" + port);
})