const routes = require("express").Router();
const UserController = require("./controllers/UserController");
const ProjectController = require("./controllers/ProjectController");
const userController = new UserController();
const projectController = new ProjectController();

routes.get("/user", userController.index);
routes.post("/user", userController.create);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.delete);

routes.get("/project", projectController.index);
routes.post("/project", projectController.create);
routes.put("/project/:id", projectController.update);
routes.delete("/project/:id", projectController.delete);

module.exports = routes;
