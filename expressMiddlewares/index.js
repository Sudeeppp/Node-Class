const express = require("express")

const app = express()

//apllication level middleware
// function printMsg(req, res, next) {
//     console.log("hello");
//     next();
// }
// function printMsg2(req, res) {
//     console.log("hello world");
// }


// app.get("/",printMsg,printMsg2)

//or

// app.get("/", (req, res, next) => {
//     console.log("hello");
//    next()
// })
// app.get("/", (req, res, next) => {
//     console.log("hello2");
//     next()
// })
// app.get("/", (req, res) => {
//     console.log("hello3");
    
// })

// Route level middleware
   
// const UserRouter = express.Router()
// const ProductRouter = express.Router()

// // ROUTER  MIDDLEWARE

// app.use("/user", UserRouter)
// app.use("/product", ProductRouter)

// //api

// UserRouter.get("/profile", (req, res) => { //http://127.0.0.4:4000/user/profile
//     res.send({name:"sudeep", age: 23})
// })

// ProductRouter.get("/allProducts", (req, res) => { //http://127.0.0.4:4000/product/allProducts
//     res.send([{name:"iphone",brand:"apple"},{name:"samsung",brand:"samsung"}])
// })


//  ERROR HANDLING MIDDLEWARE

//APIs

// app.get("/home", (req, res) => {
//     throw new Error("something went wrong");
// })

// app.get("/user", (req, res) => {
//     throw new Error("something User Details"); //this will call the error handling middleware
// })

// //error handling middleware
// app.use((err, req, res, next) => {

//     //todo :- if any error found in the server execution it execute this middleware
//     res.send({ msg: err.message })
// })

// Built-in middlewares

app.use(express.json()) // json data parser
app.use(express.urlencoded({ extended: true })) // url data parser
app.use(express.static("public")) // server static file to server

app.get("/", (req, res) => {
    res.sendFile("C:/Users/91958/Desktop/Node Class/expressMiddlewares/public/Home.html")
})

//listen
app.listen(4000, "127.0.0.4", () => {
    console.log('Server is running in http://127.0.0.4:4000');
})