const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  //note the $1 in the query is a parameter else the query would lookl ike this:
  //await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
  //pg provides query parameterization to prevent SQL Injection attacks. Instead of passing user input directly,
  //  we pass it in an array as the second argument. pg handles the rest
}

module.exports = {
  getAllUsernames,
  insertUsername
};