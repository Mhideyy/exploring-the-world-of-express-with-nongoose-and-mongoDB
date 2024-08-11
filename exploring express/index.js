// importing express
const express = require('express');

// creating an instance of express
const app = express();

// importing mongoose
const mongoose = require('mongoose');

// importing dotEnv
const dotenv = require('dotenv');

// imprting the routes
const userRoutes = require("./Routes/user");

// middleware
app.use(express.json());

// configuring dotenv
dotenv.config();

// connecting to moongoose
mongoose
    .connect(process.env.MONGO_URL)
    // checking if moongose is been connected sucessfully or not
    .then(()=> console.log('connected'))
    .catch(()=> console.log('error'));

app.use(userRoutes);



// assigning to port
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
                        console.log('App is running')
});