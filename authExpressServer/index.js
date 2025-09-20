const { error } = require("console");
const express = require("express")

const fs = require("fs");
const { json } = require("stream/consumers");
const bcrypt = require("bcryptjs")
const app = express();
const jsonwebtoken = require("jsonwebtoken")

//middleware
app.use(express.json()); //json parser






//api
app.get("/", (req, res) => {
    res.send("Hello User")
})

app.get("/", (req, res) => {
    res.send({ message: "server is working" })
})




//create user /register user

app.post("/signup", (req, res) => {
    try {
        const { name, email, password, phone, age } = req.body

        if (name && email && password && phone && age) {
            let user = JSON.parse(fs.readFileSync("./User.json", "utf-8"))
            const isEmailRegistered = user.find(users => users.email === email)

            if (isEmailRegistered) {
                return res.status(400).send({ error: "email is already registered" })
            } else {
                //add all the data in user list
                //encrypt password (hash)
                const hashedPass = bcrypt.hashSync(password, 10)
                // console.log(hashedPass)
                user.push({ name, email, password: hashedPass, phone, age })

                fs.writeFileSync("./User.json", JSON.stringify(user))
                return res.status(201).send({ message: "Registration successful" })
            }

        } else {
            return res.status(400).send({ error: "Provide all required fields" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


// user login
app.post("/login", (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            let users = JSON.parse(fs.readFileSync("./User.json", "utf-8"))
            const isUser = users.find(user => user.email === email)
            if (isUser) {
                //match the password
                const isPasswordMatched = bcrypt.compareSync(password, isUser.password)
                if (isPasswordMatched) {
                    //send the jwt token
                    // generate token
                    const token = jsonwebtoken.sign({ email: isUser.email }, "viper1234")
                    // res.set("authToken", token) //hearder
                    res.cookie("token", token) //cookie data

                    return res.status(200).send({ message: "user login successfully" })
                }
                else {
                    return res.status(400).send({ error: "password not matched" })
                }
            }
            else {
                return res.status(401).send({ message: "Email not registered" })
            }
        }
        else {
            return res.status(400).send({ error: "provide all fields" })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "something went wrong", msg: error.message });
    }
});


//change the password
app.put("/password/change", (req, res) => {
    try {
        const { newPassword } = req.body;
        const token = req.headers["authorization"].split(" ")[1];
        console.log(token);
    
        if (!token) {
            res.status(401).send({ error: "Token is required" })
        }

        //token verification
        let userData = jsonwebtoken.verify(token, "viper1234")
        // console.log(userData)

        if (!userData) {
            return res.status(401).send({ error: "invalid token" })
        }

        //find the user in json file

        let user = JSON.parse(fs.readFileSync("./User.json", "utf-8"))
        const isUser = user.find(users => users.email === userData.email)

        if (!isUser) {
            return res.status(400).send({ error: 'user details not matched' })
        }

        //modify the password after hashing

        const hashedPassword = bcrypt.hashSync(newPassword, 10)

        user = user.map((users) => {//maping the user data and changing the paasowrd of the matched user
            if (users.email === userData.email) {
                users.password = hashedPassword
            }

            return users;
        })

        fs.writeFileSync("./User.json", JSON.stringify(user))
        return res.status(200).send({ message: "pssword changed successfully" })


    } catch (error) {
        res.status(500).send({ error: "something went wrong", msg: error.message })
    }
})




const port = 4000;
const hostname = "127.0.0.4"
app.listen(port, hostname, () => {
    console.log(`server started at  http://${hostname}:${port}`)
})
