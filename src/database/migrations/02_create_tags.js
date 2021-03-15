exports.up = function (knex) {
  return knex.schema.createTable("tags", function (table) {
    table.increments("id");
    table.string("tag");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("tags");
};
