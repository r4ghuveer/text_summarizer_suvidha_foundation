const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const homeRoute = require("./routes/home")
app.use(homeRoute)

app.listen(3000,()=>{
    console.log("Site open at port 3000")
})
