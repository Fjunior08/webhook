const express  = require("express");
const UserController = require('./app/Controllers/UserController');
const routes = express.Router(); 


routes.post("/user",  UserController.store);

routes.get("/user", UserController.show);


module.exports = routes;