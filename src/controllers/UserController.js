const knex = require("../database/connection");

module.exports = class UserController {
    async index(req, res) {
        const results = await knex("users");
        return res.json(results);
    }
    async create(req, res) {}
};