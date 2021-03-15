exports.up = function (knex) {
  return knex.schema.createTable("projects", function (table) {
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.increments("id");
    table.text("title");
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
