exports.up = function (knex) {
  // Inserts seed entries
  return knex("tags").insert([
    { tag: "Knex" },
    { tag: "React.js" },
    { tag: "Node.js" },
    { tag: "Angular" },
  ]);
};

exports.down = function (knex) {
  return knex("tags").del();
};
