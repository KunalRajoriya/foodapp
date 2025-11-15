//create server
const express = require('express');


const app = express();


app.get('/',(req,res)=>{
    res.send("Welcome to Zomato Clone Backend");
});




module.exports = app;