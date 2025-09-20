const express = require('express');
const path = require('path');
const app = express();

// console.log(__dirname);
// console.log(__filename);
// middlewares

app.use(express.static("./public")) //static files


//routing and apis
app.get("/", (req, res) => {
    //res.sendFile("C:/Users/91958/Desktop/Node Class/staticExpressServer/public/index.html")
    //or
    res.sendFile(path.join(__dirname + "/public", "index.html"))

})


//listen
const port = 8000;
const hostname = '127.0.0.8';
app.listen(port, hostname, () => {
    console.log(`server is started at http://${hostname}:${port}`);
})