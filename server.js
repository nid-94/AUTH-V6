// imporation
const express = require("express");

// creation d'instance
const app = express();
// dotenv
require("dotenv").config();
// connect databse
const connect = require("./config/connectDB");
connect();

// json
app.use(express.json());

// route global
app.use("/api/user", require("./routes/user"));

// creation of server
const port = process.env.PORT;
app.listen(port, (error) => {
    error ? console.log(error) : console.log(`server is runnig on port:${port}`);
});
