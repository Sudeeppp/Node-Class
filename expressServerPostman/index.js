const express = require('express');

const app = express();

//middleware
app.use(express.json()); //json parser middleware

app.use(express.urlencoded({ extended: true }))

//api
app.get("/", (req, res) => {
    res.send("server is Working p ")
})
app.get("/user", (req, res) => {
    res.status(200).send({ name: "sudeep", age: 25, city: "New York" })
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send({ msg: "Login Success properlu\ysdfghjkl" });
})

app.post("/urlData", (req, res) => {
    // console.log(req.body);
    // console.log(req.headers.apikey);
    if (req.headers.apikey === "gunu2001") {
        res.status(200).send({ msg: "got the data" })
    }
    else {
        res.status(400).send({ error: "Api key is not matching" })
    }

    res.status(200).send({ msg: "Got the Data" })

})

const port = 5000;
const hostname = '127.0.0.2';
app.listen(port, hostname, () => {
    console.log(`server is started at http://${hostname}:${port}`);

})