const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "top_users",
  password: "postgre",
  port: 5432,
});
