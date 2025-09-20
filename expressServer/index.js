// const express = require('express');
// const app = express();

// //logic
// app.get("/", (req, res) => {
//     res.write("Hello World"); //string
//     res.end();
// })

// app.get("/about", (req, res) => {
// res.send({msg:"Welcome to express"});//string and object
// })
 
// //listen
// app.listen(2000,"localhost", () => { //http://localhost:2000
//     console.log('Server is start');
// })


const express = require('express');
const fs = require('fs');

const app = express();

//logic
app.get("/", (req, res) => {
    // res.write("Hello World"); //string
    // res.end();

    let data = fs.readFileSync("./pages/home.html")
    res.write(data);
    res.end();
})

app.get("/about", (req, res) => {
    //res.send({ msg: "Welcome to express" });//string and object

    // let data = fs.readFileSync("./pages/about.html")
    // res.write(data);    
    // res.end();
    
    res.sendFile("C:/Users/91958/Desktop/Node Class/expressServer/pages/about.html")
})

app.get("/home.css", (req, res) => {
    res.sendFile("C:/Users/91958/Desktop/Node Class/expressServer/css/home.css")
})

//listen
app.listen(2000, "localhost", () => { //http://localhost:2000
    console.log('Server is start');
})
