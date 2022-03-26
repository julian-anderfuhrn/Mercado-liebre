const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(process.env.PORT || 3050,(req,res)=>{
    console.log("Servidor corriendo");
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

