const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    //server logic
    const { method, url } = req;
    if (method == "GET") {
        if (url == "/") {
            const data = fs.readFileSync("./pages/Home.html");
            res.write(data); // html
            //res.write("<h1>Welcome to the jsp  </h1>"); // string
            res.end(); // end the response
        }
        else if (url === "/about") {
            const data = fs.readFileSync("./pages/About.html");
            res.write(data);
            // res.write("<h1>Welcome to the about page</h1>");
            res.end();
        }
        else if( url === "/login") {
            const data = fs.readFileSync("./pages/Login.html");
            res.write(data);
            // res.write("<h1>Welcome to the login page</h1>");
            res.end();
        }
        else if( url === "/Home.css") {
            const data = fs.readFileSync("./css/Home.css");
            res.end(data);
        }
        else if (url == "/getData") {
            let user = { name: "John", age: 25, city: "New York" };
            res.write(JSON.stringify(user));
            res.end();
        }
        else {
            res.write("<h1>Page not found</h1>");
            res.end();
        }
    }
    if (method == "POST") {
        if (url == "/postData") {
           // console.log("Post request received");
            // data event
            req.on("data", (data) => {
                let student = JSON.parse(data.toString());
                console.log(student);
                res.end(JSON.stringify({ message: "Data received" }));      
            })
        }
    }

})


//listen
server.listen(2000, "127.0.0.2", () => {
    console.log("Server started at http://127.0.0.2:2000");
})