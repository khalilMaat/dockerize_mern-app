//import
const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors({
    origin: "http://localhost:3000",
}));

//Router
app.get("/details",(req,res)=>{
    res.send({
        status:200,
        message:'Hello from express js'
    });
})

//start server
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
})