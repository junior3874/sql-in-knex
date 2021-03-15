const knex = require("../database/connection");

module.exports = class UserProject {
  async index(req, res, next) {
    const { title, user_id } = req.query;

    try {
      const searchProject = await knex("projects")
        .innerJoin("users", "projects.user_id", "=", "users.id")
        .innerJoin("project_tag", "projects.id", "=", "project_tag.project_id")
        .innerJoin("tags", "project_tag.tag_id", "=", "tags.tag")
        .select("*");
      return res.status(201).json(searchProject);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    const { title, tags } = req.body;
    const { user_id } = req.query;

    const insertProject = knex("projects");
    const newTags = tags.sort((a, b) => b - a);
    if (user_id) {
      const searchTagAreExist = await knex("tags")
        .where("id", "<=", `${newTags[0]}`)
        .select("*");

      if (searchTagAreExist.length < newTags[0] || tags.length <= 1) {
        return res.status(401).json({
          error: true,
          message:
            "Você provavelmente inseriu uma tag errada ou colocou menos de duas tags na publicação",
        });
      }

      knex.transaction(function (t) {
        return insertProject
          .transacting(t)
          .insert({ title, user_id })
          .then(function (id) {
            let tagsProject = tags.map((tag) => {
              return { project_id: id, tag_id: tag };
            });
            return knex("project_tag")
              .transacting(t)
              .insert([...tagsProject]);
          })
          .then(t.commit)
          .catch(t.rollback, (err) => {
            return next(err);
          });
      });
      return res.status(201).json({
        message: "Projeto criado com sucesso",
      });
    }
  }
  async update(req, res, next) {}
  async delete(req, res) {}
};
