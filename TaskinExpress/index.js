const express = require('express')
const fs = require('fs')


const app = express();

// middleware
app.use(express.json()); //json parser middleware

//logic

// app.get("/", (req, res) => {

//     let data = fs.readFileSync("./pages/index.html")
//     res.write(data);
//     res.end();
// })
// api
app.get("/", (req, res) => {
   res.sendFile("C:/Users/91958/Desktop/Node Class/TaskinExpress/pages/index.html")

})

app.post("/formdata", (req, res) => {
    console.log(req.body); // payload comming from client
    let users =JSON.parse(fs.readFileSync("./users.json"));
    users.push(req.body);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send({msg:"Data stored in server"});
   
})
//listen

// app.listen(2000, "localhost", () => { //http://localhost:2000
//     console.log('Server is start');
// })

const port = 7000;
const hostname = "127.0.0.7";

app.listen(port, hostname, () => { 
    console.log("Server is runnning at "+ `http://${hostname}:${port}`);
})