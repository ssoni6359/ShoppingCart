const express = require('express')
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("home");
})

app.get("/home",function(req,res){
    res.render("home");
})

app.get("/register",function(req,res){
    res.render("register");
})

app.get("/signin",function(req,res){
    res.render("signin");
})

app.listen(3000,function(){
    console.log("Port is running on 3000");
})