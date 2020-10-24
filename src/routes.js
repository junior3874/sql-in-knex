const routes = require("express").Router();
const UserController = require("./controllers/UserController");

const userController = new UserController();
routes.get("/", userController.index);

module.exports = routes;