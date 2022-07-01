const express  = require("express");
const UserController = require('./app/Controllers/UserController');
const routes = express.Router();

/**
 * 
 * Destino Routes
 */
routes.get("/", UserController.show);
routes.post("/user",  UserController.store);


module.exports = routes;