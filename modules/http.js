const { log } = require('console');
const http = require('http'); // importing http module

const server = http.createServer((request, response) => { // ctreate a node server
    //handeles every req and res cycle of the server
    //every request and response cycle of the server
    // console.log(request.method);   
    // console.log(request.url);
    console.log(request.method,request.url);
    

    if (request.method == "GET") {
        if (request.url == "/") {
            //logic (or) send response
            
            response.write("welcome to node server"); //string (can be used multiple times)
            response.write("this is write method") //string
            response.end(); //end the request and response cycle (cann't be used multiple end())
        }
        else if (request.url == "/profile") {
            const myProfile = { name: "Virat", age: 32, address: "londen" }
            response.write(JSON.stringify(myProfile));
            response.end();
        }

    }
})


// listen to the server port number and hostname(domain)
server.listen(8000, "127.0.0.2", () => {
    //execute once when the server is started successfully
    console.log("server is running");
}) //http://localhost:8000 // http://127.0.0.2:8000

