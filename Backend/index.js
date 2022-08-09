const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())



mongoose.connect('mongodb://localhost:27017/menudb' , {
    useNewUrlParser :true,
    useUnifiedTopology:true
} , () => {
    console.log("DB connected")
})

app.listen( 9002 ,() => {
    console.log("BE STARTED AT port 9002")
})
