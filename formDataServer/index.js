const express = require("express")
const multer = require("multer")
const path  = require("path")

const app = express();

// const upload = multer({ dest: 'images/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        console.log(req.body);
        const filename = req.body.username + path.extname(file.originalname);
        console.log(filename);
        cb(null,filename)
    }
})

const upload = multer({ storage: storage })

//middleware
app.use(express.json()); //json parser middleware
app.use(express.urlencoded({ extended: true }))

//api

app.get("/", (req, res) => {
    res.send("server is running")
})

//json data // json files or data
app.post("/json", (req, res) => {
    res.send(req.body)
})

//url encoded data (form submitting data)
app.post("/url", (req, res) => {
    res.send(req.body)
})

//formData(when we will send an instance of form) // mostly used for files

app.post("/form", upload.single("profilepicture"), (req, res) => {
    res.send(req.body)
})


//listen
const port = 8080;
app.listen(port, () => {
    console.log("server started at http://localhost:" + port);

})