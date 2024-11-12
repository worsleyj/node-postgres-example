require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.USER,
  database: "top_users",
  password: process.env.PASS,
  port: 5432,
});
