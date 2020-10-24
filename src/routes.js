const routes = require("express").Router();
const UserController = require("./controllers/UserController");

const userController = new UserController();

routes.get("/users", userController.index);
routes.post("/users", userController.create);
routes.put("/users/:id", userController.update);
routes.delete("/users/:id", userController.delete);

module.exports = routes;