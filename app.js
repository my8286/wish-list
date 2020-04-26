const express=require('express');
var bodyParser = require('body-parser')
const app=express();
const port=8080; // To intialise static port number on which server will be running
const routes=require('./routes'); // To import routes

// To sreving static file
app.use(express.static('public')); 

// To set the package to get view files 
app.set('view engine','ejs') 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

routes(app); // Pass the app to the function

// To start the server on particular port number 
app.listen(port,()=>{
    console.log("server is running on port "+port) // Message to be shown on console when server start
})
