const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function deleteAllUsernames() {
  await pool.query("DROP TABLE usernames");
}

async function searchAllUsernames(query) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE '%" + query + "%' "
  );
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  deleteAllUsernames,
  searchAllUsernames,
  insertUsername,
};
