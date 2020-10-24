const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.json({ text: "hello, world" });
});

module.exports = routes;