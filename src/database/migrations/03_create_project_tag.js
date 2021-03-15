exports.up = function (knex) {
  return knex.schema.createTable("project_tag", function (table) {
    table.increments("id");
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("tag_id")
      .references("id")
      .inTable("tags")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("project_tag");
};
