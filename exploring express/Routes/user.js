// importing express
const express = require('express');
const routes = express.Router();
// importing the functions
const { getUsers, postUser, editUser, deleteUser } = require('../Conrollers/user');
// creating endpoints for the routes
routes.get('/get-user', getUsers);
routes.post('/get-user', postUser);
routes.put('/get-user', editUser);
routes.delete('/get-user', deleteUser);

// exporting the routes
module.exports = routes;