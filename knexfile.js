const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/database.sqlite",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
  },
};
